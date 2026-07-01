const europeDestinations = [
  {
    city: "London",
    country: "United Kingdom",
    airport: "LHR, LGW",
    hotelArea: "South Kensington, Bloomsbury, Paddington",
    vibe: "markets, West End shows, museums, football stadiums, and day trips",
    activities: ["British Museum", "West End show", "Camden Market", "Tower Bridge"],
    flightBase: 545,
    hotelBase: 154,
  },
  {
    city: "Paris",
    country: "France",
    airport: "CDG, ORY",
    hotelArea: "Le Marais, Latin Quarter, Montparnasse",
    vibe: "museums, bakeries, Seine walks, gardens, and easy train connections",
    activities: ["Louvre Museum", "Eiffel Tower", "Montmartre", "Seine picnic"],
    flightBase: 560,
    hotelBase: 148,
  },
  {
    city: "Rome",
    country: "Italy",
    airport: "FCO, CIA",
    hotelArea: "Monti, Trastevere, near Termini",
    vibe: "ancient sights, food tours, piazzas, gelato stops, and beach day trips",
    activities: ["Colosseum", "Vatican Museums", "Trastevere dinner", "Pasta class"],
    flightBase: 620,
    hotelBase: 132,
  },
  {
    city: "Barcelona",
    country: "Spain",
    airport: "BCN",
    hotelArea: "Eixample, Gracia, Poblenou",
    vibe: "beaches, architecture, tapas, shopping, nightlife, and coastal views",
    activities: ["Sagrada Familia", "Gothic Quarter", "Barceloneta", "Park Guell"],
    flightBase: 595,
    hotelBase: 137,
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    airport: "AMS",
    hotelArea: "Jordaan, De Pijp, Museum Quarter",
    vibe: "canals, museums, bike rides, cafes, parks, and quick train trips",
    activities: ["Canal cruise", "Van Gogh Museum", "Jordaan walk", "Vondelpark"],
    flightBase: 575,
    hotelBase: 162,
  },
  {
    city: "Lisbon",
    country: "Portugal",
    airport: "LIS",
    hotelArea: "Baixa, Chiado, Cais do Sodre",
    vibe: "viewpoints, beaches, tile streets, seafood, music, and day trips",
    activities: ["Belem", "Alfama", "Sintra day trip", "Time Out Market"],
    flightBase: 585,
    hotelBase: 118,
  },
  {
    city: "Dublin",
    country: "Ireland",
    airport: "DUB",
    hotelArea: "Temple Bar edge, Docklands, St Stephen's Green",
    vibe: "pub music, coastal walks, castles, libraries, and day tours",
    activities: ["Trinity College", "Howth cliffs", "Guinness Storehouse", "Grafton Street"],
    flightBase: 515,
    hotelBase: 145,
  },
  {
    city: "Athens",
    country: "Greece",
    airport: "ATH",
    hotelArea: "Plaka, Monastiraki, Koukaki",
    vibe: "ancient landmarks, rooftop views, islands, beaches, and street food",
    activities: ["Acropolis", "Plaka", "Aegina day trip", "Rooftop dinner"],
    flightBase: 680,
    hotelBase: 110,
  },
  {
    city: "Prague",
    country: "Czech Republic",
    airport: "PRG",
    hotelArea: "Old Town edge, New Town, Karlin",
    vibe: "castles, bridges, river views, cafes, and budget-friendly exploring",
    activities: ["Charles Bridge", "Prague Castle", "Old Town Square", "River cruise"],
    flightBase: 640,
    hotelBase: 96,
  },
  {
    city: "Vienna",
    country: "Austria",
    airport: "VIE",
    hotelArea: "Innere Stadt edge, Neubau, Leopoldstadt",
    vibe: "palaces, cafes, music, clean transit, and easy Central Europe trains",
    activities: ["Schonbrunn Palace", "Naschmarkt", "Belvedere", "Prater"],
    flightBase: 650,
    hotelBase: 122,
  },
  {
    city: "Berlin",
    country: "Germany",
    airport: "BER",
    hotelArea: "Mitte, Prenzlauer Berg, Friedrichshain",
    vibe: "history, street art, museums, parks, food halls, and nightlife",
    activities: ["Museum Island", "East Side Gallery", "Brandenburg Gate", "Mauerpark"],
    flightBase: 610,
    hotelBase: 125,
  },
  {
    city: "Copenhagen",
    country: "Denmark",
    airport: "CPH",
    hotelArea: "Vesterbro, Norrebro, Indre By",
    vibe: "harbor swimming, design shops, biking, food halls, and clean transit",
    activities: ["Nyhavn", "Tivoli Gardens", "Reffen food market", "Canal tour"],
    flightBase: 625,
    hotelBase: 170,
  },
];

const airlines = [
  { name: "Norse Atlantic", type: "budget transatlantic", url: "https://www.flynorse.com" },
  { name: "British Airways", type: "direct airline", url: "https://www.britishairways.com" },
  { name: "Delta", type: "direct airline", url: "https://www.delta.com" },
  { name: "United", type: "direct airline", url: "https://www.united.com" },
  { name: "American Airlines", type: "direct airline", url: "https://www.aa.com" },
  { name: "Air France", type: "direct airline", url: "https://wwws.airfrance.us" },
  { name: "Iberia", type: "direct airline", url: "https://www.iberia.com" },
  { name: "Lufthansa", type: "direct airline", url: "https://www.lufthansa.com" },
  { name: "KLM", type: "direct airline", url: "https://www.klm.com" },
  { name: "TAP Air Portugal", type: "direct airline", url: "https://www.flytap.com" },
];

const hotelBrands = [
  { name: "Moxy Hotels", style: "social, modern, good for friends", url: "https://moxy-hotels.marriott.com" },
  { name: "citizenM", style: "compact, stylish, central", url: "https://www.citizenm.com" },
  { name: "ibis Styles", style: "budget-friendly, simple", url: "https://ibis.accor.com" },
  { name: "Generator", style: "private rooms and social spaces", url: "https://staygenerator.com" },
  { name: "Motel One", style: "clean, central, good value", url: "https://www.motel-one.com" },
  { name: "Premier Inn", style: "reliable budget rooms", url: "https://www.premierinn.com" },
  { name: "B&B Hotels", style: "basic, low-cost, practical", url: "https://www.hotel-bb.com" },
];

const state = {
  mode: "flights",
  selectedDestination: europeDestinations[0],
  events: JSON.parse(localStorage.getItem("ethanandfriends-calendar") || "{}"),
  calendarMonth: 5,
  calendarYear: 2027,
  selectedDate: "2027-06-08",
};

const form = document.querySelector("#travelForm");
const tabs = document.querySelectorAll(".tab");
const destinationInput = document.querySelector("#destination");
const suggestions = document.querySelector("#suggestions");
const departInput = document.querySelector("#departDate");
const returnInput = document.querySelector("#returnDate");
const travelersInput = document.querySelector("#travelers");
const results = document.querySelector("#results");
const modeLabel = document.querySelector("#modeLabel");
const resultsTitle = document.querySelector("#resultsTitle");
const dealSummary = document.querySelector("#dealSummary");
const guideTitle = document.querySelector("#guideTitle");
const aiInsight = document.querySelector("#aiInsight");
const calendarTitle = document.querySelector("#calendarTitle");
const calendarGrid = document.querySelector("#calendarGrid");
const selectedDateTitle = document.querySelector("#selectedDateTitle");
const dayEvents = document.querySelector("#dayEvents");
const eventForm = document.querySelector("#eventForm");
const eventTitle = document.querySelector("#eventTitle");
const eventOwner = document.querySelector("#eventOwner");
const prevMonth = document.querySelector("#prevMonth");
const nextMonth = document.querySelector("#nextMonth");

function fullName(destination) {
  return `${destination.city}, ${destination.country}`;
}

function encode(value) {
  return encodeURIComponent(value.trim());
}

function formatDate(value, options = {}) {
  return new Date(`${value}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    ...options,
  });
}

function toDateKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function saveEvents() {
  localStorage.setItem("ethanandfriends-calendar", JSON.stringify(state.events));
}

function getTrip() {
  return {
    destination: state.selectedDestination,
    depart: departInput.value,
    returnDate: returnInput.value,
    travelers: Number(travelersInput.value),
  };
}

function clampDates() {
  if (departInput.value < "2027-05-28") departInput.value = "2027-05-28";
  if (returnInput.value > "2027-07-31") returnInput.value = "2027-07-31";
  if (returnInput.value < departInput.value) returnInput.value = departInput.value;
}

function findDestination(value) {
  const query = value.trim().toLowerCase();
  return (
    europeDestinations.find((destination) => fullName(destination).toLowerCase() === query) ||
    europeDestinations.find((destination) => destination.city.toLowerCase() === query) ||
    europeDestinations.find((destination) => fullName(destination).toLowerCase().includes(query)) ||
    europeDestinations[0]
  );
}

function matchingDestinations(value) {
  const query = value.trim().toLowerCase();
  if (!query) return europeDestinations.slice(0, 6);
  return europeDestinations
    .filter((destination) => {
      const label = fullName(destination).toLowerCase();
      return label.includes(query) || destination.airport.toLowerCase().includes(query);
    })
    .slice(0, 7);
}

function renderSuggestions() {
  const matches = matchingDestinations(destinationInput.value);
  if (!matches.length) {
    suggestions.classList.remove("open");
    destinationInput.setAttribute("aria-expanded", "false");
    return;
  }

  suggestions.innerHTML = matches
    .map(
      (destination) => `
        <button class="suggestion" type="button" data-city="${destination.city}">
          ${destination.city}, ${destination.country}
          <small>${destination.airport} airport options</small>
        </button>
      `,
    )
    .join("");
  suggestions.classList.add("open");
  destinationInput.setAttribute("aria-expanded", "true");
}

function chooseDestination(destination) {
  state.selectedDestination = destination;
  destinationInput.value = fullName(destination);
  suggestions.classList.remove("open");
  destinationInput.setAttribute("aria-expanded", "false");
  renderAll();
}

function rankedAirlineDeals(trip) {
  const destination = trip.destination;
  const dateFactor = departInput.value.endsWith("-04") || departInput.value.endsWith("-11") ? -35 : 0;
  return airlines
    .map((airline, index) => {
      const adjustment = ((destination.city.charCodeAt(0) + index * 37) % 155) - 35;
      return {
        title: airline.name,
        price: Math.max(395, destination.flightBase + adjustment + dateFactor),
        body: `${airline.type}. Search direct fares to ${destination.airport} for ${trip.travelers} travelers.`,
        tags: ["Direct booking", "Europe route", index < 3 ? "Likely lowest" : "Compare"],
        href: airline.url,
      };
    })
    .sort((a, b) => a.price - b.price)
    .slice(0, 5);
}

function rankedHotelDeals(trip) {
  const destination = trip.destination;
  return hotelBrands
    .map((hotel, index) => {
      const adjustment = ((destination.city.charCodeAt(1) + index * 29) % 70) - 18;
      return {
        title: hotel.name,
        price: Math.max(72, destination.hotelBase + adjustment),
        body: `${hotel.style}. Best areas to check: ${destination.hotelArea}.`,
        tags: ["Direct hotel", "Good for groups", index < 3 ? "Best value" : "Backup"],
        href: hotel.url,
      };
    })
    .sort((a, b) => a.price - b.price)
    .slice(0, 5);
}

function activityDeals(trip) {
  return trip.destination.activities.map((activity, index) => ({
    title: activity,
    price: [0, 18, 28, 42][index] || 24,
    body: `Popular ${trip.destination.city} activity for a first Europe trip. Add it to the calendar if the group likes it.`,
    tags: [index === 0 ? "Must-see" : "Popular", "Group friendly", "Easy planning"],
    href: `https://www.google.com/search?q=${encode(`${activity} ${fullName(trip.destination)} official tickets`)}`,
  }));
}

function renderDealCards(items, priceLabel) {
  results.innerHTML = items
    .map(
      (item) => `
        <article class="deal-card">
          <div class="price"><span>${priceLabel}</span>$${item.price}</div>
          <div>
            <h3>${item.title}</h3>
            <p>${item.body}</p>
            <div class="tag-row">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          </div>
          <a target="_blank" rel="noreferrer" href="${item.href}">Book direct</a>
        </article>
      `,
    )
    .join("");
}

function renderResults() {
  const trip = getTrip();
  const name = fullName(trip.destination);
  const copy = {
    flights: ["Flight finder", `Direct airline options for ${trip.destination.city}`],
    hotels: ["Hotel finder", `Direct hotel options for ${trip.destination.city}`],
    activities: ["Activity finder", `Popular activities in ${trip.destination.city}`],
    calendar: ["Calendar", "Click a day below to add or remove plans"],
  };

  modeLabel.textContent = copy[state.mode][0];
  resultsTitle.textContent = copy[state.mode][1];
  guideTitle.textContent = name;

  if (state.mode === "flights") {
    const deals = rankedAirlineDeals(trip);
    dealSummary.innerHTML = `
      <span class="summary-pill">Sorted lowest first</span>
      <span class="summary-pill">${trip.destination.airport}</span>
      <span class="summary-pill">${formatDate(trip.depart, { month: "short" })} - ${formatDate(trip.returnDate, { month: "short" })}</span>
    `;
    renderDealCards(deals, "from");
  }

  if (state.mode === "hotels") {
    const deals = rankedHotelDeals(trip);
    dealSummary.innerHTML = `
      <span class="summary-pill">Sorted lowest nightly first</span>
      <span class="summary-pill">${trip.travelers} travelers</span>
      <span class="summary-pill">${trip.destination.hotelArea}</span>
    `;
    renderDealCards(deals, "nightly");
  }

  if (state.mode === "activities") {
    const deals = activityDeals(trip);
    dealSummary.innerHTML = `
      <span class="summary-pill">Popular first-trip picks</span>
      <span class="summary-pill">Easy group planning</span>
      <span class="summary-pill">Add favorites to calendar</span>
    `;
    renderDealCards(deals, "from");
  }

  if (state.mode === "calendar") {
    dealSummary.innerHTML = `<span class="summary-pill">May 28 - July 31 only</span><span class="summary-pill">Saved on this device</span>`;
    results.innerHTML = `
      <article class="deal-card">
        <div class="price"><span>next</span>${formatDate(state.selectedDate, { month: "short", day: "numeric" })}</div>
        <div>
          <h3>Use the calendar below</h3>
          <p>Pick any day in the Europe trip window, then add flights, hotel check-ins, activities, food plans, or free time.</p>
          <div class="tag-row"><span class="tag">Click a day</span><span class="tag">Add plans</span><span class="tag">Remove anytime</span></div>
        </div>
        <a href="#calendarSection">Open calendar</a>
      </article>
    `;
  }
}

function renderInsight() {
  const trip = getTrip();
  aiInsight.innerHTML = `
    <strong>${fullName(trip.destination)}</strong><br>
    Best airport search: ${trip.destination.airport}.<br>
    Stay near: ${trip.destination.hotelArea}.<br>
    Trip style: ${trip.destination.vibe}.<br><br>
    Tip: for summer Europe, compare Tuesday and Wednesday departures and book refundable hotels while the group decides.
  `;
}

function renderCalendar() {
  const monthName = new Date(state.calendarYear, state.calendarMonth, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  calendarTitle.textContent = monthName;
  prevMonth.disabled = state.calendarMonth <= 4;
  nextMonth.disabled = state.calendarMonth >= 6;

  const firstDay = new Date(state.calendarYear, state.calendarMonth, 1).getDay();
  const daysInMonth = new Date(state.calendarYear, state.calendarMonth + 1, 0).getDate();
  const cells = [];

  for (let i = 0; i < firstDay; i += 1) cells.push({ outside: true });
  for (let day = 1; day <= daysInMonth; day += 1) {
    const dateKey = toDateKey(state.calendarYear, state.calendarMonth, day);
    const inWindow = dateKey >= "2027-05-28" && dateKey <= "2027-07-31";
    cells.push({ day, dateKey, outside: !inWindow });
  }
  while (cells.length % 7 !== 0) cells.push({ outside: true });

  calendarGrid.innerHTML = cells
    .map((cell) => {
      if (!cell.day) return `<button class="day-cell outside" type="button" disabled></button>`;
      const count = state.events[cell.dateKey]?.length || 0;
      const selected = cell.dateKey === state.selectedDate ? " selected" : "";
      const outside = cell.outside ? " outside" : "";
      return `
        <button class="day-cell${selected}${outside}" type="button" data-date="${cell.dateKey}" ${cell.outside ? "disabled" : ""}>
          <span class="day-number">${cell.day}</span>
          <span class="day-count">${count ? `${count} plan${count > 1 ? "s" : ""}` : "Open"}</span>
        </button>
      `;
    })
    .join("");

  renderSelectedDay();
}

function renderSelectedDay() {
  selectedDateTitle.textContent = formatDate(state.selectedDate);
  const events = state.events[state.selectedDate] || [];
  if (!events.length) {
    dayEvents.innerHTML = `<div class="empty-state">No plans yet. Add a flight, hotel check-in, activity, meal, or free-time note for this day.</div>`;
    return;
  }

  dayEvents.innerHTML = events
    .map(
      (event) => `
        <article class="day-event">
          <div>
            <strong>${event.title}</strong>
            <span>${event.owner}</span>
          </div>
          <button class="remove-event" type="button" data-id="${event.id}">Remove</button>
        </article>
      `,
    )
    .join("");
}

function renderAll() {
  clampDates();
  renderResults();
  renderInsight();
  renderCalendar();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    state.mode = tab.dataset.mode;
    renderResults();
    if (state.mode === "calendar") document.querySelector("#calendarSection").scrollIntoView({ block: "start" });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  chooseDestination(findDestination(destinationInput.value));
});

destinationInput.addEventListener("input", () => {
  renderSuggestions();
  const candidate = findDestination(destinationInput.value);
  if (destinationInput.value.length > 1) state.selectedDestination = candidate;
  renderResults();
  renderInsight();
});

destinationInput.addEventListener("focus", renderSuggestions);

suggestions.addEventListener("click", (event) => {
  const button = event.target.closest(".suggestion");
  if (!button) return;
  const destination = europeDestinations.find((item) => item.city === button.dataset.city);
  chooseDestination(destination);
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".destination-field")) {
    suggestions.classList.remove("open");
    destinationInput.setAttribute("aria-expanded", "false");
  }
});

[departInput, returnInput, travelersInput].forEach((input) => {
  input.addEventListener("input", renderAll);
});

calendarGrid.addEventListener("click", (event) => {
  const day = event.target.closest(".day-cell");
  if (!day || !day.dataset.date) return;
  state.selectedDate = day.dataset.date;
  renderCalendar();
});

prevMonth.addEventListener("click", () => {
  if (state.calendarMonth > 4) {
    state.calendarMonth -= 1;
    renderCalendar();
  }
});

nextMonth.addEventListener("click", () => {
  if (state.calendarMonth < 6) {
    state.calendarMonth += 1;
    renderCalendar();
  }
});

eventForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = eventTitle.value.trim();
  if (!title) return;
  const eventItem = {
    id: crypto.randomUUID(),
    title,
    owner: eventOwner.value,
  };
  state.events[state.selectedDate] = [...(state.events[state.selectedDate] || []), eventItem];
  saveEvents();
  eventTitle.value = "";
  renderCalendar();
});

dayEvents.addEventListener("click", (event) => {
  const button = event.target.closest(".remove-event");
  if (!button) return;
  state.events[state.selectedDate] = (state.events[state.selectedDate] || []).filter(
    (item) => item.id !== button.dataset.id,
  );
  if (!state.events[state.selectedDate].length) delete state.events[state.selectedDate];
  saveEvents();
  renderCalendar();
});

destinationInput.value = fullName(state.selectedDestination);
renderAll();
