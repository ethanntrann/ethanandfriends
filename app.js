const europeCities = [
  ["London", "United Kingdom", "LON", 545, 154], ["Manchester", "United Kingdom", "MAN", 570, 122],
  ["Edinburgh", "United Kingdom", "EDI", 590, 138], ["Dublin", "Ireland", "DUB", 515, 145],
  ["Paris", "France", "PAR", 560, 148], ["Nice", "France", "NCE", 625, 142],
  ["Lyon", "France", "LYS", 610, 116], ["Marseille", "France", "MRS", 640, 118],
  ["Rome", "Italy", "ROM", 620, 132], ["Milan", "Italy", "MIL", 590, 128],
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

const state = {
  mode: "flights",
  searched: {
    from: cityAliases[0],
    destination: europeCities[0],
    depart: "2027-06-08",
    returnDate: "2027-06-18",
    travelers: 4,
    activityDate: "2027-06-08",
  },
  events: JSON.parse(localStorage.getItem("ethanandfriends-calendar") || "{}"),
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

function fullName(item) {
  return `${item.city}, ${item.country}`;
}

function encode(value) {
  return encodeURIComponent(value);
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
  returnInput.closest(".field").style.display = mode === "activities" || mode === "calendar" ? "none" : "";
  fromInput.closest(".field").style.display = mode === "flights" ? "" : "none";
  form.style.display = mode === "calendar" ? "none" : "";
  renderResults();
}

function saveEvents() {
  localStorage.setItem("ethanandfriends-calendar", JSON.stringify(state.events));
}

function bookingHotelUrl(name) {
  const s = state.searched;
  return `https://www.booking.com/searchresults.html?ss=${encode(fullName(s.destination))}&checkin=${s.depart}&checkout=${s.returnDate}&group_adults=${s.travelers}&no_rooms=1&selected_currency=USD&order=price`;
}

function airlineSearchUrl(airline) {
  const s = state.searched;
  const route = `${s.from.airport} to ${s.destination.airport} ${s.depart} ${s.returnDate} ${s.travelers} passengers ${airline}`;
  return `https://www.google.com/travel/flights?q=${encode(route)}`;
}

function activityUrl(activity) {
  const s = state.searched;
  return `https://www.google.com/search?q=${encode(`${activity} ${fullName(s.destination)} ${s.activityDate} ${s.travelers} tickets official`)}`;
}

function renderDealCards(items, label) {
  results.innerHTML = items
    .map(
      (item) => `
        <article class="deal-card">
          <div class="price"><span>${label}</span>$${item.price}</div>
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
    dealSummary.innerHTML = `<span class="summary-pill">${formatDate(s.depart)} - ${formatDate(s.returnDate)}</span><span class="summary-pill">${s.travelers} people</span><span class="summary-pill">Sorted lowest estimate first</span>`;
    const deals = airlines
      .map(([name], index) => {
        const price = Math.max(380, s.destination.flightBase + ((s.destination.city.charCodeAt(0) + index * 41) % 160) - 42);
        return {
          title: name,
          price,
          body: `Search ${name} options for ${s.from.airport} to ${s.destination.airport}, ${formatDate(s.depart)} to ${formatDate(s.returnDate)}.`,
          tags: ["Route included", "Dates included", "Direct provider search"],
          href: airlineSearchUrl(name),
          cta: "Search flights",
        };
      })
      .sort((a, b) => a.price - b.price)
      .slice(0, 6);
    renderDealCards(deals, "from");
  }

  if (state.mode === "hotels") {
    modeLabel.textContent = "Hotel finder";
    resultsTitle.textContent = `Hotels in ${s.destination.city}`;
    dealSummary.innerHTML = `<span class="summary-pill">${formatDate(s.depart)} - ${formatDate(s.returnDate)}</span><span class="summary-pill">${s.travelers} people</span><span class="summary-pill">Booking link includes dates</span>`;
    const deals = hotelBrands
      .map(([name, style], index) => {
        const price = Math.max(68, s.destination.hotelBase + ((s.destination.city.charCodeAt(1) + index * 31) % 76) - 22);
        return {
          title: name,
          price,
          body: `${style}. Search ${fullName(s.destination)} with your exact check-in, checkout, and people count.`,
          tags: ["Destination included", "Dates included", `${s.travelers} people`],
          href: bookingHotelUrl(name),
          cta: "Search hotels",
        };
      })
      .sort((a, b) => a.price - b.price);
    renderDealCards(deals, "nightly");
  }

  if (state.mode === "activities") {
    modeLabel.textContent = "Activity finder";
    resultsTitle.textContent = `Activities in ${s.destination.city}`;
    dealSummary.innerHTML = `<span class="summary-pill">${formatDate(s.activityDate)}</span><span class="summary-pill">${s.travelers} people</span><span class="summary-pill">Popular activities</span>`;
    const deals = s.destination.activities.map((activity, index) => ({
      title: activity,
      price: [0, 18, 28, 42][index] || 24,
      body: `Search official tickets and availability for ${formatDate(s.activityDate)} for ${s.travelers} people.`,
      tags: ["Date included", `${s.travelers} people`, "Add to calendar"],
      href: activityUrl(activity),
      cta: "Search activity",
    }));
    renderDealCards(deals, "from");
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
    state.searched.from = matchCity(fromInput.value, cityAliases);
    state.searched.depart = departInput.value;
    state.searched.returnDate = returnInput.value < departInput.value ? departInput.value : returnInput.value;
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
  prevMonth.disabled = state.calendarMonth <= 4;
  nextMonth.disabled = state.calendarMonth >= 6;
  const firstDay = new Date(state.calendarYear, state.calendarMonth, 1).getDay();
  const daysInMonth = new Date(state.calendarYear, state.calendarMonth + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDay; i += 1) cells.push({});
  for (let day = 1; day <= daysInMonth; day += 1) {
    const dateKey = toDateKey(state.calendarYear, state.calendarMonth, day);
    cells.push({ day, dateKey, outside: dateKey < "2027-05-28" || dateKey > "2027-07-31" });
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

fromInput.value = fullName(state.searched.from);
destinationInput.value = fullName(state.searched.destination);
setMode("flights");
renderCalendar();
