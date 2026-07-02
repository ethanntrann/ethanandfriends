import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = process.env.PORT || 10000;
const allowedOrigins = new Set([
  "https://ethanandfriends.onrender.com",
  "http://localhost:10000",
  "http://127.0.0.1:10000",
]);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

function json(response, status, payload) {
  const headers = {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  };
  if (response.req?.headers?.origin && allowedOrigins.has(response.req.headers.origin)) {
    headers["access-control-allow-origin"] = response.req.headers.origin;
  }
  response.writeHead(status, headers);
  response.end(JSON.stringify(payload));
}

function duration(minutes) {
  if (!minutes && minutes !== 0) return "";
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours ? `${hours}h ` : ""}${mins ? `${mins}m` : ""}`.trim();
}

function firstSegment(result) {
  return result?.flights?.[0] || {};
}

function lastSegment(result) {
  return result?.flights?.[result.flights.length - 1] || {};
}

function normalizeFlight(result, googleFlightsUrl) {
  const first = firstSegment(result);
  const last = lastSegment(result);
  const airlineNames = [...new Set((result.flights || []).map((flight) => flight.airline).filter(Boolean))];
  const stops = Math.max((result.flights?.length || 1) - 1, 0);

  return {
    airline: airlineNames.join(", ") || "Google Flights result",
    price: typeof result.price === "number" ? `$${result.price}` : result.price || "Price unavailable",
    departure: first.departure_airport?.id || "",
    arrival: last.arrival_airport?.id || "",
    departTime: first.departure_airport?.time || "",
    arriveTime: last.arrival_airport?.time || "",
    duration: duration(result.total_duration),
    stops: stops === 0 ? "Nonstop" : `${stops} stop${stops > 1 ? "s" : ""}`,
    logo: result.airline_logo || "",
    link: googleFlightsUrl || "https://www.google.com/travel/flights",
    extensions: result.extensions || [],
  };
}

function normalizeHotel(property) {
  const rate =
    property.rate_per_night?.lowest ||
    property.total_rate?.lowest ||
    property.extracted_price ||
    property.price ||
    "Price unavailable";

  return {
    name: property.name || "Google Hotels property",
    price: typeof rate === "number" ? `$${rate}` : rate,
    total: property.total_rate?.lowest || "",
    rating: property.overall_rating || property.rating || "",
    reviews: property.reviews || "",
    hotelClass: property.hotel_class || "",
    image: property.images?.[0]?.thumbnail || property.thumbnail || "",
    link: property.link || property.serpapi_property_details_link || "https://www.google.com/travel/hotels",
    amenities: property.amenities || [],
    address: property.address || "",
  };
}

async function callSerpApi(params) {
  const apiKey = process.env.SERPAPI_KEY;
  if (!apiKey) {
    return {
      error: "SERPAPI_KEY is not configured on Render yet.",
      setupRequired: true,
    };
  }

  const url = new URL("https://serpapi.com/search.json");
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") url.searchParams.set(key, value);
  }
  url.searchParams.set("api_key", apiKey);

  const response = await fetch(url);
  const payload = await response.json();
  if (!response.ok || payload.error) {
    return { error: payload.error || `SerpAPI request failed (${response.status})` };
  }
  return payload;
}

async function flights(request, response, url) {
  const payload = await callSerpApi({
    engine: "google_flights",
    departure_id: url.searchParams.get("departure_id"),
    arrival_id: url.searchParams.get("arrival_id"),
    outbound_date: url.searchParams.get("outbound_date"),
    return_date: url.searchParams.get("return_date"),
    adults: url.searchParams.get("adults") || "1",
    type: "1",
    currency: "USD",
    hl: "en",
    gl: "us",
    deep_search: "true",
  });

  if (payload.error) return json(response, 200, payload);
  const rawResults = [...(payload.best_flights || []), ...(payload.other_flights || [])];
  json(response, 200, {
    googleFlightsUrl: payload.search_metadata?.google_flights_url || "https://www.google.com/travel/flights",
    priceInsights: payload.price_insights || null,
    results: rawResults.slice(0, 8).map((item) => normalizeFlight(item, payload.search_metadata?.google_flights_url)),
  });
}

async function hotels(request, response, url) {
  const payload = await callSerpApi({
    engine: "google_hotels",
    q: url.searchParams.get("q"),
    check_in_date: url.searchParams.get("check_in_date"),
    check_out_date: url.searchParams.get("check_out_date"),
    adults: url.searchParams.get("adults") || "2",
    currency: "USD",
    hl: "en",
    gl: "us",
    sort_by: "3",
  });

  if (payload.error) return json(response, 200, payload);
  json(response, 200, {
    googleHotelsUrl: payload.search_metadata?.google_hotels_url || "https://www.google.com/travel/hotels",
    results: (payload.properties || []).slice(0, 10).map(normalizeHotel),
  });
}

async function assistant(request, response) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return json(response, 200, {
      setupRequired: true,
      error: "OPENROUTER_API_KEY is not configured on Render yet.",
    });
  }

  let rawBody = "";
  for await (const chunk of request) {
    rawBody += chunk;
  }
  const body = rawBody ? JSON.parse(rawBody) : {};

  const model = process.env.OPENROUTER_MODEL || "anthropic/claude-sonnet-4";
  const context = body.context || {};
  const userMessage = String(body.message || "").slice(0, 1800);

  const openRouterResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${apiKey}`,
      "http-referer": "https://ethanandfriends.onrender.com",
      "x-title": "ethanandfriends",
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "system",
          content:
            "You are the ethanandfriends senior trip assistant. Help Ethan, Doria, Angela, and Justin compare the current flight/hotel results shown in the app, find cheaper possibilities, and choose fun Europe activities. Be concise, practical, and specific. Do not invent prices; use only prices provided in context and say when the group should verify on the booking page.",
        },
        {
          role: "user",
          content: JSON.stringify({
            request: userMessage,
            currentTripContext: context,
          }),
        },
      ],
      max_tokens: 700,
      temperature: 0.4,
    }),
  });

  const payload = await openRouterResponse.json();
  if (!openRouterResponse.ok || payload.error) {
    return json(response, 200, {
      error: payload.error?.message || `OpenRouter request failed (${openRouterResponse.status})`,
    });
  }

  json(response, 200, {
    reply: payload.choices?.[0]?.message?.content || "I could not generate a reply.",
    model,
  });
}

async function staticFile(request, response, url) {
  const requested = url.pathname === "/" ? "/index.html" : url.pathname;
  const safePath = normalize(requested).replace(/^(\.\.[/\\])+/, "");
  const filePath = join(root, safePath);
  try {
    const contents = await readFile(filePath);
    response.writeHead(200, {
      "content-type": contentTypes[extname(filePath)] || "application/octet-stream",
    });
    response.end(contents);
  } catch {
    const contents = await readFile(join(root, "index.html"));
    response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    response.end(contents);
  }
}

createServer(async (request, response) => {
  response.req = request;
  try {
    if (request.method === "OPTIONS") {
      const origin = request.headers.origin;
      const headers = {
        "access-control-allow-methods": "GET,POST,OPTIONS",
        "access-control-allow-headers": "content-type",
        "access-control-max-age": "86400",
      };
      if (origin && allowedOrigins.has(origin)) {
        headers["access-control-allow-origin"] = origin;
      }
      response.writeHead(origin && allowedOrigins.has(origin) ? 204 : 403, headers);
      response.end();
      return;
    }

    const url = new URL(request.url, `http://${request.headers.host}`);
    if (url.pathname === "/api/flights") return flights(request, response, url);
    if (url.pathname === "/api/hotels") return hotels(request, response, url);
    if (url.pathname === "/api/assistant" && request.method === "POST") return assistant(request, response);
    return staticFile(request, response, url);
  } catch (error) {
    json(response, 500, { error: error.message || "Server error" });
  }
}).listen(port, () => {
  console.log(`ethanandfriends listening on ${port}`);
});
