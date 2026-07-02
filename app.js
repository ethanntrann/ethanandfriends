const europeCities = [
  ["London", "United Kingdom", "LHR", 545, 154], ["Manchester", "United Kingdom", "MAN", 570, 122],
  ["Edinburgh", "United Kingdom", "EDI", 590, 138], ["Dublin", "Ireland", "DUB", 515, 145],
  ["Paris", "France", "CDG", 560, 148], ["Nice", "France", "NCE", 625, 142],
  ["Lyon", "France", "LYS", 610, 116], ["Marseille", "France", "MRS", 640, 118],
  ["Rome", "Italy", "FCO", 620, 132], ["Milan", "Italy", "MXP", 590, 128],
  ["Venice", "Italy", "VCE", 640, 155], ["Florence", "Italy", "FLR", 670, 145],
  ["Naples", "Italy", "NAP", 650, 106], ["Barcelona", "Spain", "BCN", 595, 137],
  ["Madrid", "Spain", "MAD", 575, 126], ["Seville", "Spain", "SVQ", 660, 104],
  ["Valencia", "Spain", "VLC", 640, 108], ["Malaga", "Spain", "AGP", 645, 112],
  ["Lisbon", "Portugal", "LIS", 585, 118], ["Porto", "Portugal", "OPO", 610, 96],
  ["Amsterdam", "Netherlands", "AMS", 575, 162], ["Rotterdam", "Netherlands", "RTM", 620, 132],
  ["Brussels", "Belgium", "BRU", 595, 126], ["Bruges", "Belgium", "OST", 630, 128],
  ["Berlin", "Germany", "BER", 610, 125], ["Munich", "Germany", "MUC", 620, 138],
  ["Frankfurt", "Germany", "FRA", 585, 126], ["Hamburg", "Germany", "HAM", 630, 119],
  ["Cologne", "Germany", "CGN", 635, 108], ["Zurich", "Switzerland", "ZRH", 650, 190],
  ["Geneva", "Switzerland", "GVA", 655, 178], ["Interlaken", "Switzerland", "ZRH", 690, 176],
  ["Vienna", "Austria", "VIE", 650, 122], ["Salzburg", "Austria", "SZG", 680, 118],
  ["Prague", "Czech Republic", "PRG", 640, 96], ["Budapest", "Hungary", "BUD", 655, 90],
  ["Warsaw", "Poland", "WAW", 650, 86], ["Krakow", "Poland", "KRK", 665, 78],
  ["Gdansk", "Poland", "GDN", 680, 82], ["Copenhagen", "Denmark", "CPH", 625, 170],
  ["Stockholm", "Sweden", "ARN", 645, 142], ["Gothenburg", "Sweden", "GOT", 680, 126],
  ["Oslo", "Norway", "OSL", 655, 154], ["Bergen", "Norway", "BGO", 690, 146],
  ["Helsinki", "Finland", "HEL", 670, 136], ["Reykjavik", "Iceland", "KEF", 500, 168],
  ["Athens", "Greece", "ATH", 680, 110], ["Santorini", "Greece", "JTR", 745, 186],
  ["Mykonos", "Greece", "JMK", 750, 210], ["Thessaloniki", "Greece", "SKG", 700, 92],
  ["Dubrovnik", "Croatia", "DBV", 705, 132], ["Split", "Croatia", "SPU", 705, 124],
  ["Zagreb", "Croatia", "ZAG", 680, 92], ["Ljubljana", "Slovenia", "LJU", 690, 104],
  ["Bled", "Slovenia", "LJU", 705, 122], ["Sarajevo", "Bosnia and Herzegovina", "SJJ", 720, 70],
  ["Mostar", "Bosnia and Herzegovina", "SJJ", 735, 68], ["Belgrade", "Serbia", "BEG", 700, 82],
  ["Kotor", "Montenegro", "TIV", 735, 110], ["Podgorica", "Montenegro", "TGD", 730, 82],
  ["Tirana", "Albania", "TIA", 720, 76], ["Sofia", "Bulgaria", "SOF", 690, 74],
  ["Plovdiv", "Bulgaria", "PDV", 720, 68], ["Bucharest", "Romania", "OTP", 690, 78],
  ["Brasov", "Romania", "OTP", 710, 72], ["Cluj-Napoca", "Romania", "CLJ", 710, 76],
  ["Istanbul", "Turkey", "IST", 680, 96], ["Antalya", "Turkey", "AYT", 720, 110],
  ["Tallinn", "Estonia", "TLL", 700, 96], ["Riga", "Latvia", "RIX", 695, 88],
  ["Vilnius", "Lithuania", "VNO", 700, 86], ["Luxembourg", "Luxembourg", "LUX", 640, 154],
  ["Monaco", "Monaco", "NCE", 700, 220], ["Valletta", "Malta", "MLA", 700, 116],
  ["Nicosia", "Cyprus", "LCA", 740, 98], ["Larnaca", "Cyprus", "LCA", 735, 104],
  ["Andorra la Vella", "Andorra", "BCN", 700, 118], ["San Marino", "San Marino", "RMI", 720, 96],
  ["Vaduz", "Liechtenstein", "ZRH", 700, 160],
  ["Bratislava", "Slovakia", "BTS", 675, 84], ["Kosice", "Slovakia", "KSC", 705, 76],
  ["Skopje", "North Macedonia", "SKP", 715, 70], ["Ohrid", "North Macedonia", "OHD", 735, 74],
  ["Pristina", "Kosovo", "PRN", 725, 72], ["Chisinau", "Moldova", "KIV", 715, 66],
  ["Kyiv", "Ukraine", "KBP", 720, 72], ["Lviv", "Ukraine", "LWO", 710, 70],
  ["Minsk", "Belarus", "MSQ", 720, 78], ["Moscow", "Russia", "SVO", 735, 86],
  ["Saint Petersburg", "Russia", "LED", 735, 92], ["Tbilisi", "Georgia", "TBS", 745, 82],
  ["Batumi", "Georgia", "BUS", 760, 86], ["Yerevan", "Armenia", "EVN", 750, 78],
  ["Baku", "Azerbaijan", "GYD", 760, 90],
].map(([city, country, airport, flightBase, hotelBase]) => ({
  city,
  country,
  airport,
  flightBase,
  hotelBase,
  hotelArea: `${city} center, transit stops, walkable neighborhoods`,
  vibe: "classic Europe sights, local food, scenic walks, and easy day planning",
  activities: [`${city} old town walk`, `${city} food tour`, `${city} viewpoint`, `${city} museum day`],
}));

const cityAliases = [
  { city: "Los Angeles", country: "United States", airport: "LAX", flightBase: 0, hotelBase: 0 },
  { city: "San Francisco", country: "United States", airport: "SFO", flightBase: 0, hotelBase: 0 },
  { city: "New York", country: "United States", airport: "JFK", flightBase: 0, hotelBase: 0 },
  { city: "Chicago", country: "United States", airport: "ORD", flightBase: 0, hotelBase: 0 },
  ...europeCities,
];

const apiBase = location.hostname === "ethanandfriends.onrender.com"
  ? "https://ethanandfriends-api.onrender.com"
  : "";

const airlines = [
  ["Norse Atlantic", "https://www.flynorse.com"],
  ["British Airways", "https://www.britishairways.com"],
  ["Delta", "https://www.delta.com"],
  ["United", "https://www.united.com"],
  ["American Airlines", "https://www.aa.com"],
  ["Air France", "https://wwws.airfrance.us"],
  ["Iberia", "https://www.iberia.com"],
  ["Lufthansa", "https://www.lufthansa.com"],
  ["KLM", "https://www.klm.com"],
  ["TAP Air Portugal", "https://www.flytap.com"],
];

const hotelBrands = [
  ["Moxy Hotels", "social, modern rooms", "https://moxy-hotels.marriott.com"],
  ["citizenM", "compact central hotels", "https://www.citizenm.com"],
  ["ibis Styles", "budget-friendly simple stays", "https://ibis.accor.com"],
  ["Generator", "private rooms and social spaces", "https://staygenerator.com"],
  ["Motel One", "clean value hotels", "https://www.motel-one.com"],
  ["B&B Hotels", "basic low-cost rooms", "https://www.hotel-bb.com"],
];

const activityProviders = [
  ["GetYourGuide", "tours and tickets", "https://www.getyourguide.com"],
  ["Viator", "guided tours and day trips", "https://www.viator.com"],
  ["Tiqets", "museum and attraction tickets", "https://www.tiqets.com"],
  ["Klook", "activities and passes", "https://www.klook.com"],
  ["Withlocals", "local private experiences", "https://www.withlocals.com"],
  ["Eatwith", "food experiences", "https://www.eatwith.com"],
];

const featuredActivities = {
  London: ["Tower of London tickets", "West End theatre show", "Thames River cruise", "British Museum guided tour", "London Eye tickets", "Warner Bros. Studio Tour"],
  Paris: ["Eiffel Tower summit ticket", "Louvre Museum timed entry", "Seine River dinner cruise", "Versailles Palace day trip", "Montmartre walking tour", "Paris food tour"],
  Rome: ["Colosseum arena tour", "Vatican Museums entry", "Roman food tour", "Trevi Fountain walking tour", "Pompeii day trip", "Pasta making class"],
  Barcelona: ["Sagrada Familia guided tour", "Park Guell ticket", "Gothic Quarter walking tour", "Barcelona tapas tour", "Camp Nou experience", "Montserrat day trip"],
  Amsterdam: ["Van Gogh Museum ticket", "Amsterdam canal cruise", "Anne Frank walking tour", "Rijksmuseum guided tour", "Zaanse Schans day trip", "Bike tour"],
  Lisbon: ["Sintra and Pena Palace day trip", "Lisbon food tour", "Belem walking tour", "Tagus River cruise", "Fado show", "Alfama guided walk"],
  Athens: ["Acropolis guided tour", "Parthenon ticket", "Athens food tour", "Aegina island day trip", "Ancient Agora ticket", "Sunset temple tour"],
};

const profileColors = {
  Doria: "doria",
  Angela: "angela",
  Justin: "justin",
  Ethan: "ethan",
};

const state = {
  mode: "flights",
  searched: {
    tripType: "roundtrip",
    from: cityAliases[0],
    destination: europeCities[0],
    depart: "2027-06-08",
    returnDate: "2027-06-18",
    travelers: 4,
    activityDate: "2027-06-08",
  },
  events: JSON.parse(localStorage.getItem("ethanandfriends-calendar") || "{}"),
  comments: JSON.parse(localStorage.getItem("ethanandfriends-comments") || "[]"),
  user: localStorage.getItem("ethanandfriends-user") || "",
  latestFlights: [],
  latestHotels: [],
  calendarMonth: 5,
  calendarYear: 2027,
  selectedDate: "2027-06-08",
};

const form = document.querySelector("#travelForm");
const tabs = document.querySelectorAll(".tab");
const fromInput = document.querySelector("#fromCity");
const destinationInput = document.querySelector("#destination");
const departInput = document.querySelector("#departDate");
const returnInput = document.querySelector("#returnDate");
const tripTypeInputs = document.querySelectorAll('input[name="tripType"]');
const travelersInput = document.querySelector("#travelers");
const destinationLabel = document.querySelector("#destinationLabel");
const departLabel = document.querySelector("#departLabel");
const results = document.querySelector("#results");
const modeLabel = document.querySelector("#modeLabel");
const resultsTitle = document.querySelector("#resultsTitle");
const dealSummary = document.querySelector("#dealSummary");
const guideTitle = document.querySelector("#guideTitle");
const tripInsight = document.querySelector("#tripInsight");
const calendarTitle = document.querySelector("#calendarTitle");
const calendarGrid = document.querySelector("#calendarGrid");
const selectedDateTitle = document.querySelector("#selectedDateTitle");
const dayEvents = document.querySelector("#dayEvents");
const eventForm = document.querySelector("#eventForm");
const eventTitle = document.querySelector("#eventTitle");
const startTime = document.querySelector("#startTime");
const endTime = document.querySelector("#endTime");
const prevMonth = document.querySelector("#prevMonth");
const nextMonth = document.querySelector("#nextMonth");
const welcomeOverlay = document.querySelector("#welcomeOverlay");
const profileButton = document.querySelector("#profileButton");
const commentForm = document.querySelector("#commentForm");
const commentInput = document.querySelector("#commentInput");
const commentList = document.querySelector("#commentList");
const commentsBox = document.querySelector(".floating-comments");
const toggleComments = document.querySelector("#toggleComments");
const assistantForm = document.querySelector("#assistantForm");
const assistantInput = document.querySelector("#assistantInput");
const assistantReply = document.querySelector("#assistantReply");

function fullName(item) {
  return `${item.city}, ${item.country}`;
}

function encode(value) {
  return encodeURIComponent(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderAssistantText(value) {
  return escapeHtml(value)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>")
    .replace(/\n/g, "<br>");
}

function dateCompact(date) {
  return date.replaceAll("-", "");
}

function formatDate(value, options = {}) {
  return new Date(`${value}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    ...options,
  });
}

function toDateKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function matchCity(value, pool = europeCities) {
  const query = value.trim().toLowerCase();
  return (
    pool.find((item) => fullName(item).toLowerCase() === query) ||
    pool.find((item) => item.city.toLowerCase() === query) ||
    pool.find((item) => item.country.toLowerCase() === query) ||
    pool.find((item) => fullName(item).toLowerCase().includes(query) || item.airport.toLowerCase().includes(query)) ||
    pool[0]
  );
}

function suggestionsFor(value, pool) {
  const query = value.trim().toLowerCase();
  if (!query) return pool.slice(0, 8);
  return pool
    .filter((item) =>
      `${item.city} ${item.country} ${item.airport}`.toLowerCase().includes(query),
    )
    .slice(0, 10);
}

function renderSuggestions(input, pool) {
  const box = document.querySelector(`.suggestions[data-for="${input.id}"]`);
  const matches = suggestionsFor(input.value, pool);
  if (!matches.length) {
    box.classList.remove("open");
    return;
  }
  box.innerHTML = matches
    .map((item) => `<button class="suggestion" type="button" data-city="${item.city}" data-input="${input.id}">${fullName(item)}<small>${item.airport}</small></button>`)
    .join("");
  box.classList.add("open");
}

function closeSuggestions() {
  document.querySelectorAll(".suggestions").forEach((box) => box.classList.remove("open"));
}

function setMode(mode) {
  state.mode = mode;
  document.body.dataset.mode = mode;
  destinationLabel.textContent = mode === "flights" ? "To" : "Destination";
  departLabel.textContent = mode === "activities" ? "Date" : mode === "hotels" ? "Check-in" : "Depart";
  document.querySelector(".return-field span").textContent = mode === "hotels" ? "Check-out" : "Return";
  const hideReturn = mode === "activities" || mode === "calendar" || (mode === "flights" && state.searched.tripType === "oneway");
  returnInput.closest(".field").style.display = hideReturn ? "none" : "";
  fromInput.closest(".field").style.display = mode === "flights" ? "" : "none";
  document.querySelector(".trip-type-field").style.display = mode === "flights" ? "" : "none";
  form.style.display = mode === "calendar" ? "none" : "";
  renderResults();
}

function saveEvents() {
  localStorage.setItem("ethanandfriends-calendar", JSON.stringify(state.events));
}

function saveComments() {
  localStorage.setItem("ethanandfriends-comments", JSON.stringify(state.comments));
}

function setUser(user) {
  state.user = user;
  localStorage.setItem("ethanandfriends-user", user);
  document.body.dataset.user = profileColors[user] || "";
  profileButton.textContent = `${user}'s profile`;
  welcomeOverlay.classList.add("hidden");
  renderComments();
}

function renderComments() {
  if (!state.comments.length) {
    commentList.innerHTML = `<div class="empty-state">No comments yet. Pick a profile and start the group chat.</div>`;
    return;
  }

  commentList.innerHTML = state.comments
    .map(
      (comment) => {
        const profile = profileColors[comment.user] || "";
        const time = comment.createdAt
          ? new Date(comment.createdAt).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
          : "";
        return `
        <article class="comment-item ${profile}">
          <div class="comment-meta">
            <strong>${escapeHtml(comment.user)}:</strong>
            ${time ? `<time>${time}</time>` : ""}
          </div>
          <span>${escapeHtml(comment.text)}</span>
        </article>
      `;
      },
    )
    .join("");
}

function bookingHotelUrl(name, url) {
  const s = state.searched;
  const fallback = `?destination=${encode(fullName(s.destination))}&checkin=${s.depart}&checkout=${s.returnDate}&adults=${s.travelers}`;
  return `${url}${fallback}`;
}

function airlineSearchUrl(airline, url) {
  const s = state.searched;
  const params = `?from=${encode(s.from.airport)}&to=${encode(s.destination.airport)}&depart=${s.depart}&return=${s.returnDate}&adults=${s.travelers}`;
  return `${url}${params}`;
}

function activityUrl(url) {
  const s = state.searched;
  return `${url}?q=${encode(fullName(s.destination))}&date=${s.activityDate}&adults=${s.travelers}`;
}

function activityBookingUrl(activity) {
  const s = state.searched;
  return `https://www.getyourguide.com/s/?q=${encode(`${activity} ${fullName(s.destination)}`)}&date_from=${s.activityDate}&date_to=${s.activityDate}&participants=${s.travelers}`;
}

function renderDealCards(items) {
  results.innerHTML = items
    .map(
      (item) => `
        <article class="deal-card">
          <div class="price"><span>price</span>Live on site</div>
          <div>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
            <div class="tag-row">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          </div>
          <a target="_blank" rel="noreferrer" href="${item.href}">${item.cta}</a>
        </article>
      `,
    )
    .join("");
}

function loadingCards(label) {
  dealSummary.innerHTML = `<span class="summary-pill">Loading ${label} from SerpAPI</span>`;
  results.innerHTML = `
    <article class="deal-card">
      <div class="price"><span>live</span>Loading</div>
      <div>
        <h3>Checking Google ${label}</h3>
        <p>Fetching current prices for your selected dates and route.</p>
      </div>
    </article>
  `;
}

function apiSetupMessage(type) {
  results.innerHTML = `
    <article class="deal-card">
      <div class="price"><span>api</span>Setup</div>
      <div>
        <h3>SerpAPI key needed</h3>
        <p>Add your SerpAPI key in Render as an environment variable named SERPAPI_KEY, then redeploy. ${type} prices will appear here after that.</p>
        <div class="tag-row"><span class="tag">SERPAPI_KEY</span><span class="tag">Render env var</span></div>
      </div>
    </article>
  `;
}

function moneyText(value) {
  return value || "Price unavailable";
}

function assistantContext() {
  return {
    user: state.user || "Unknown",
    mode: state.mode,
    from: fullName(state.searched.from),
    destination: fullName(state.searched.destination),
    departureAirport: state.searched.from.airport,
    arrivalAirport: state.searched.destination.airport,
    tripType: state.searched.tripType,
    depart: state.searched.depart,
    returnDate: state.searched.returnDate,
    activityDate: state.searched.activityDate,
    travelers: state.searched.travelers,
    currentFlights: state.latestFlights.slice(0, 6),
    currentHotels: state.latestHotels.slice(0, 6),
    suggestedActivities: featuredActivities[state.searched.destination.city] || state.searched.destination.activities,
  };
}

async function askAssistant(message) {
  const text = message.trim();
  if (!text) return;
  assistantReply.textContent = "Claude is thinking...";
  const response = await fetch(`${apiBase}/api/assistant`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      message: text,
      context: assistantContext(),
    }),
  });
  const payload = await response.json();
  if (payload.setupRequired) {
    assistantReply.textContent = "Add OPENROUTER_API_KEY in Render to enable Claude.";
    return;
  }
  assistantReply.innerHTML = renderAssistantText(payload.error || payload.reply || "No response.");
}

async function renderFlightResults(s) {
  loadingCards("Flights");
  const params = new URLSearchParams({
    departure_id: s.from.airport,
    arrival_id: s.destination.airport,
    outbound_date: s.depart,
    adults: String(s.travelers),
    trip_type: s.tripType,
  });
  if (s.tripType === "roundtrip") params.set("return_date", s.returnDate);
  const response = await fetch(`${apiBase}/api/flights?${params.toString()}`);
  const payload = await response.json();
  if (payload.setupRequired) return apiSetupMessage("Flight");
  if (payload.error) {
    results.innerHTML = `<div class="empty-state">${payload.error}</div>`;
    return;
  }

  const lowest = payload.priceInsights?.lowest_price ? `$${payload.priceInsights.lowest_price}` : "";
  dealSummary.innerHTML = `
    <span class="summary-pill">${s.tripType === "oneway" ? "One-way" : "Roundtrip"}</span>
    <span class="summary-pill">${s.tripType === "oneway" ? formatDate(s.depart) : `${formatDate(s.depart)} - ${formatDate(s.returnDate)}`}</span>
    <span class="summary-pill">${s.travelers} people</span>
    <span class="summary-pill">${lowest ? `Lowest seen: ${lowest}` : "Google Flights results"}</span>
  `;

  if (!payload.results?.length) {
    results.innerHTML = `<div class="empty-state">No Google Flights results came back for this search. Try nearby airports or different dates.</div>`;
    return;
  }

  state.latestFlights = payload.results;

  results.innerHTML = payload.results
    .map(
      (flight) => `
        <article class="google-card flight-card">
          ${flight.logo ? `<img class="provider-logo" src="${flight.logo}" alt="">` : `<div class="provider-logo text-logo">GF</div>`}
          <div>
            <div class="google-card-top">
              <h3>${flight.airline}</h3>
              <strong>${moneyText(flight.price)}</strong>
            </div>
            <p>${flight.departure} to ${flight.arrival} - ${flight.stops}${flight.duration ? ` - ${flight.duration}` : ""}</p>
            <p>${flight.departTime || "Departure time unavailable"} to ${flight.arriveTime || "Arrival time unavailable"}</p>
            <div class="tag-row">${flight.extensions.slice(0, 3).map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          </div>
          <a target="_blank" rel="noreferrer" href="${flight.link}">Open Google Flights</a>
        </article>
      `,
    )
    .join("");
}

async function renderHotelResults(s) {
  loadingCards("Hotels");
  const params = new URLSearchParams({
    q: fullName(s.destination),
    check_in_date: s.depart,
    check_out_date: s.returnDate,
    adults: String(s.travelers),
  });
  const response = await fetch(`${apiBase}/api/hotels?${params.toString()}`);
  const payload = await response.json();
  if (payload.setupRequired) return apiSetupMessage("Hotel");
  if (payload.error) {
    results.innerHTML = `<div class="empty-state">${payload.error}</div>`;
    return;
  }

  dealSummary.innerHTML = `
    <span class="summary-pill">${formatDate(s.depart)} - ${formatDate(s.returnDate)}</span>
    <span class="summary-pill">${s.travelers} people</span>
    <span class="summary-pill">Google Hotels prices</span>
  `;

  if (!payload.results?.length) {
    results.innerHTML = `<div class="empty-state">No Google Hotels results came back for this search. Try a larger nearby city or different dates.</div>`;
    return;
  }

  state.latestHotels = payload.results;

  results.innerHTML = payload.results
    .map(
      (hotel) => `
        <article class="google-card hotel-card">
          ${hotel.image ? `<img class="hotel-thumb" src="${hotel.image}" alt="">` : `<div class="hotel-thumb text-logo">GH</div>`}
          <div>
            <div class="google-card-top">
              <h3>${hotel.name}</h3>
              <strong>${moneyText(hotel.price)}</strong>
            </div>
            <p>${hotel.address || fullName(s.destination)}</p>
            <p>${hotel.rating ? `${hotel.rating} stars` : "Rating unavailable"}${hotel.reviews ? ` - ${hotel.reviews} reviews` : ""}${hotel.hotelClass ? ` - ${hotel.hotelClass}-star hotel` : ""}</p>
            <div class="tag-row">${hotel.amenities.slice(0, 3).map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          </div>
          <a target="_blank" rel="noreferrer" href="${hotel.link}">Open Google Hotels</a>
        </article>
      `,
    )
    .join("");
}

function renderResults() {
  const s = state.searched;
  guideTitle.textContent = fullName(s.destination);
  tripInsight.innerHTML = `
    <strong>${fullName(s.destination)}</strong><br>
    Airport code: ${s.destination.airport}.<br>
    Hotel area idea: ${s.destination.hotelArea}.<br>
    Trip feel: ${s.destination.vibe}.<br><br>
    Results update only after pressing Search, so you can type without changing the page.
  `;

  if (state.mode === "flights") {
    modeLabel.textContent = "Flight finder";
    resultsTitle.textContent = `${s.from.city} to ${s.destination.city}`;
    renderFlightResults(s);
  }

  if (state.mode === "hotels") {
    modeLabel.textContent = "Hotel finder";
    resultsTitle.textContent = `Hotels in ${s.destination.city}`;
    renderHotelResults(s);
  }

  if (state.mode === "activities") {
    modeLabel.textContent = "Activity finder";
    resultsTitle.textContent = `Activities in ${s.destination.city}`;
    dealSummary.innerHTML = `<span class="summary-pill">${formatDate(s.activityDate)}</span><span class="summary-pill">${s.travelers} people</span><span class="summary-pill">Popular activities</span>`;
    const activities = featuredActivities[s.destination.city] || s.destination.activities;
    const deals = activities.map((activity) => ({
      title: activity,
      body: `Book ${activity} in ${fullName(s.destination)} on ${formatDate(s.activityDate)} for ${s.travelers} people. The booking page shows the current live price.`,
      tags: ["Actual activity", "Date included", `${s.travelers} people`],
      href: activityBookingUrl(activity),
      cta: "Book activity",
    }));
    renderDealCards(deals);
  }

  if (state.mode === "calendar") {
    modeLabel.textContent = "Calendar";
    resultsTitle.textContent = "Click a day to add timed plans";
    dealSummary.innerHTML = `<span class="summary-pill">Plans sort by start time</span>`;
    results.innerHTML = `<div class="empty-state">Use the calendar below to add timed activities, flights, meals, hotel check-ins, and free time.</div>`;
  }
}

function submitSearch() {
  const destination = matchCity(destinationInput.value, europeCities);
  state.searched.destination = destination;
  state.searched.travelers = Number(travelersInput.value);

  if (state.mode === "flights") {
    state.searched.tripType = document.querySelector('input[name="tripType"]:checked')?.value || "roundtrip";
    state.searched.from = matchCity(fromInput.value, cityAliases);
    state.searched.depart = departInput.value;
    if (state.searched.tripType === "roundtrip") {
      state.searched.returnDate = returnInput.value < departInput.value ? departInput.value : returnInput.value;
    }
  } else if (state.mode === "hotels") {
    state.searched.depart = departInput.value;
    state.searched.returnDate = returnInput.value < departInput.value ? departInput.value : returnInput.value;
  } else if (state.mode === "activities") {
    state.searched.activityDate = departInput.value;
  }

  fromInput.value = fullName(state.searched.from);
  destinationInput.value = fullName(destination);
  returnInput.value = state.searched.returnDate;
  closeSuggestions();
  renderResults();
}

function renderCalendar() {
  calendarTitle.textContent = new Date(state.calendarYear, state.calendarMonth, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  prevMonth.disabled = false;
  nextMonth.disabled = false;
  const firstDay = new Date(state.calendarYear, state.calendarMonth, 1).getDay();
  const daysInMonth = new Date(state.calendarYear, state.calendarMonth + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDay; i += 1) cells.push({});
  for (let day = 1; day <= daysInMonth; day += 1) {
    const dateKey = toDateKey(state.calendarYear, state.calendarMonth, day);
    cells.push({ day, dateKey, outside: false });
  }
  while (cells.length % 7 !== 0) cells.push({});

  calendarGrid.innerHTML = cells
    .map((cell) => {
      if (!cell.day) return `<button class="day-cell outside" type="button" disabled></button>`;
      const events = (state.events[cell.dateKey] || []).slice().sort((a, b) => a.start.localeCompare(b.start));
      return `
        <button class="day-cell ${cell.dateKey === state.selectedDate ? "selected" : ""} ${cell.outside ? "outside" : ""}" type="button" data-date="${cell.dateKey}" ${cell.outside ? "disabled" : ""}>
          <span class="day-number">${cell.day}</span>
          <span class="mini-events">${events.slice(0, 3).map((event) => `<small>${event.start} ${event.title}</small>`).join("")}</span>
        </button>
      `;
    })
    .join("");
  renderSelectedDay();
}

function renderSelectedDay() {
  selectedDateTitle.textContent = formatDate(state.selectedDate, { month: "long" });
  const events = (state.events[state.selectedDate] || []).slice().sort((a, b) => a.start.localeCompare(b.start));
  if (!events.length) {
    dayEvents.innerHTML = `<div class="empty-state">No plans yet. Add an activity with a start and end time.</div>`;
    return;
  }
  dayEvents.innerHTML = events
    .map(
      (event) => `
        <article class="day-event">
          <div>
            <strong>${event.title}</strong>
            <span>${event.start} - ${event.end}</span>
          </div>
          <button class="remove-event" type="button" data-id="${event.id}">Remove</button>
        </article>
      `,
    )
    .join("");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    setMode(tab.dataset.mode);
    if (state.mode === "calendar") document.querySelector("#calendarSection").scrollIntoView({ block: "start" });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  submitSearch();
});

fromInput.addEventListener("input", () => renderSuggestions(fromInput, cityAliases));
destinationInput.addEventListener("input", () => renderSuggestions(destinationInput, europeCities));
fromInput.addEventListener("focus", () => renderSuggestions(fromInput, cityAliases));
destinationInput.addEventListener("focus", () => renderSuggestions(destinationInput, europeCities));

document.addEventListener("click", (event) => {
  const suggestion = event.target.closest(".suggestion");
  if (suggestion) {
    const input = document.querySelector(`#${suggestion.dataset.input}`);
    const pool = input.id === "fromCity" ? cityAliases : europeCities;
    const city = pool.find((item) => item.city === suggestion.dataset.city);
    input.value = fullName(city);
    closeSuggestions();
    return;
  }
  if (!event.target.closest(".autocomplete-field")) closeSuggestions();
});

calendarGrid.addEventListener("click", (event) => {
  const day = event.target.closest(".day-cell");
  if (!day || !day.dataset.date) return;
  state.selectedDate = day.dataset.date;
  renderCalendar();
});

prevMonth.addEventListener("click", () => {
  state.calendarMonth -= 1;
  if (state.calendarMonth < 0) {
    state.calendarMonth = 11;
    state.calendarYear -= 1;
  }
  renderCalendar();
});

nextMonth.addEventListener("click", () => {
  state.calendarMonth += 1;
  if (state.calendarMonth > 11) {
    state.calendarMonth = 0;
    state.calendarYear += 1;
  }
  renderCalendar();
});

eventForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!eventTitle.value.trim()) return;
  const item = {
    id: crypto.randomUUID(),
    title: eventTitle.value.trim(),
    start: startTime.value,
    end: endTime.value,
  };
  state.events[state.selectedDate] = [...(state.events[state.selectedDate] || []), item].sort((a, b) =>
    a.start.localeCompare(b.start),
  );
  saveEvents();
  eventTitle.value = "";
  renderCalendar();
});

dayEvents.addEventListener("click", (event) => {
  const button = event.target.closest(".remove-event");
  if (!button) return;
  state.events[state.selectedDate] = (state.events[state.selectedDate] || []).filter((item) => item.id !== button.dataset.id);
  if (!state.events[state.selectedDate].length) delete state.events[state.selectedDate];
  saveEvents();
  renderCalendar();
});

document.querySelectorAll(".profile-option").forEach((button) => {
  button.addEventListener("click", () => setUser(button.dataset.user));
});

profileButton.addEventListener("click", () => {
  welcomeOverlay.classList.remove("hidden");
});

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.user) {
    welcomeOverlay.classList.remove("hidden");
    return;
  }
  const text = commentInput.value.trim();
  if (!text) return;
  state.comments.push({
    user: state.user,
    text,
    createdAt: new Date().toISOString(),
  });
  saveComments();
  commentInput.value = "";
  renderComments();
});

toggleComments.addEventListener("click", () => {
  const collapsed = commentsBox.classList.toggle("collapsed");
  toggleComments.textContent = collapsed ? "Open" : "Minimize";
  toggleComments.setAttribute("aria-expanded", String(!collapsed));
});

tripTypeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    state.searched.tripType = document.querySelector('input[name="tripType"]:checked')?.value || "roundtrip";
    const hideReturn = state.mode === "flights" && state.searched.tripType === "oneway";
    returnInput.closest(".field").style.display = hideReturn ? "none" : "";
  });
});

assistantForm.addEventListener("submit", (event) => {
  event.preventDefault();
  askAssistant(assistantInput.value);
});

document.querySelectorAll(".quick-ai").forEach((button) => {
  button.addEventListener("click", () => {
    assistantInput.value = button.dataset.prompt;
    askAssistant(button.dataset.prompt);
  });
});

fromInput.value = fullName(state.searched.from);
destinationInput.value = fullName(state.searched.destination);
if (state.user) {
  setUser(state.user);
} else {
  renderComments();
}
setMode("flights");
renderCalendar();
