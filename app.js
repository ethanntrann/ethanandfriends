const state = {
  mode: "flights",
  events: JSON.parse(localStorage.getItem("ethanandfriends-events") || "[]"),
};

const form = document.querySelector("#travelForm");
const tabs = document.querySelectorAll(".tab");
const destinationInput = document.querySelector("#destination");
const departInput = document.querySelector("#departDate");
const returnInput = document.querySelector("#returnDate");
const travelersInput = document.querySelector("#travelers");
const results = document.querySelector("#results");
const modeLabel = document.querySelector("#modeLabel");
const resultsTitle = document.querySelector("#resultsTitle");
const aiInsight = document.querySelector("#aiInsight");
const eventForm = document.querySelector("#eventForm");
const eventList = document.querySelector("#eventList");
const clearEvents = document.querySelector("#clearEvents");

const destinationNotes = {
  japan: {
    airports: "Tokyo, Osaka, and Fukuoka can price very differently.",
    area: "Stay near a major train line like Shinjuku, Ueno, Namba, or Kyoto Station.",
    vibe: "food streets, temples, arcades, day trips, and late-night city exploring",
  },
  korea: {
    airports: "Seoul flights can be cheaper midweek, especially into Incheon.",
    area: "Hongdae, Myeongdong, or near Seoul Station are easy first-trip bases.",
    vibe: "cafes, markets, concerts, palaces, street food, and shopping districts",
  },
  italy: {
    airports: "Rome, Milan, Venice, and Naples can be mixed for open-jaw savings.",
    area: "Pick a walkable base near transit instead of moving hotels every night.",
    vibe: "historic plazas, beach towns, pasta classes, museums, and train day trips",
  },
  france: {
    airports: "Paris is the main deal finder, but Nice can work well for summer routes.",
    area: "Stay near Metro or tram lines and compare inner suburbs for better prices.",
    vibe: "museums, bakeries, river walks, gardens, food tours, and coastal escapes",
  },
  spain: {
    airports: "Barcelona and Madrid are usually the strongest flight comparison anchors.",
    area: "Search near transit hubs and avoid the most expensive beach blocks.",
    vibe: "beaches, tapas, plazas, football stadiums, nightlife, and architecture",
  },
};

function encode(value) {
  return encodeURIComponent(value.trim());
}

function formatDate(value) {
  if (!value) return "Flexible";
  return new Date(`${value}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getTrip() {
  return {
    destination: destinationInput.value.trim() || "Tokyo, Japan",
    depart: departInput.value,
    returnDate: returnInput.value,
    travelers: travelersInput.value,
  };
}

function linksFor(trip) {
  const destination = encode(trip.destination);
  const query = `${destination}+${trip.depart}+${trip.returnDate}`;
  return {
    flights: [
      {
        title: "Google Flights price calendar",
        body: "Fastest way to scan cheap dates and nearby airports for flexible summer travel.",
        href: `https://www.google.com/travel/flights?q=Flights%20to%20${destination}%20${trip.depart}%20${trip.returnDate}`,
      },
      {
        title: "Skyscanner everywhere-style comparison",
        body: "Useful for spotting cheaper airports and routes when the destination is flexible.",
        href: `https://www.skyscanner.com/transport/flights-to/${destination}`,
      },
      {
        title: "Kayak flexible date search",
        body: "Good backup for fare alerts, nearby airports, and student-friendly deal hunting.",
        href: `https://www.kayak.com/flights?sort=bestflight_a&fs=stops=0&q=${query}`,
      },
      {
        title: "Hopper price prediction",
        body: "Check whether it might be better to book now or wait for the route to dip.",
        href: `https://www.hopper.com/flights`,
      },
    ],
    hotels: [
      {
        title: "Booking.com group hotel search",
        body: "Compare refundable rooms, guest ratings, and map distance from transit.",
        href: `https://www.booking.com/searchresults.html?ss=${destination}&checkin=${trip.depart}&checkout=${trip.returnDate}&group_adults=${trip.travelers}`,
      },
      {
        title: "Google Hotels map prices",
        body: "Great for scanning neighborhoods and spotting cheaper areas close to the action.",
        href: `https://www.google.com/travel/hotels/${destination}?checkin=${trip.depart}&checkout=${trip.returnDate}&adults=${trip.travelers}`,
      },
      {
        title: "Hostelworld private rooms",
        body: "Worth checking for social stays, private group rooms, and lower nightly prices.",
        href: `https://www.hostelworld.com/st/hostels/${destination}`,
      },
      {
        title: "HotelsCombined deal sweep",
        body: "A broad comparison pass before the group commits to a refundable option.",
        href: `https://www.hotelscombined.com/Place/${destination}.htm`,
      },
    ],
    activities: [
      {
        title: "Tripadvisor top things to do",
        body: "Popular sights, tours, restaurants, and reviews from other travelers.",
        href: `https://www.tripadvisor.com/Search?q=${destination}%20things%20to%20do`,
      },
      {
        title: "Viator bookable activities",
        body: "Easy way to compare day trips, guided tours, food walks, and skip-the-line options.",
        href: `https://www.viator.com/searchResults/all?text=${destination}`,
      },
      {
        title: "GetYourGuide experiences",
        body: "Good for flexible cancellation tours and activity ideas by neighborhood.",
        href: `https://www.getyourguide.com/s/?q=${destination}`,
      },
      {
        title: "TikTok travel ideas",
        body: "Quick inspiration for popular cafes, photo spots, beaches, and hidden gems.",
        href: `https://www.tiktok.com/search?q=${destination}%20travel%20activities`,
      },
    ],
  };
}

function renderResults() {
  const trip = getTrip();
  const modeCopy = {
    flights: ["Flight finder", `Cheap flight tools for ${trip.destination}`],
    hotels: ["Hotel finder", `Best-value stays for ${trip.destination}`],
    activities: ["Activity finder", `Popular things to do in ${trip.destination}`],
    calendar: ["Itinerary planner", "Use the calendar below to organize the group"],
  };

  modeLabel.textContent = modeCopy[state.mode][0];
  resultsTitle.textContent = modeCopy[state.mode][1];

  if (state.mode === "calendar") {
    results.innerHTML = `
      <article class="result-card">
        <strong>Shared plan</strong>
        <p>Add flights, hotel check-in, tours, meals, and free days. Events are saved on this device.</p>
        <a href="#eventForm">Edit calendar</a>
      </article>
      <article class="result-card">
        <strong>Suggested rhythm</strong>
        <p>Plan one anchor activity each day, then leave room for food, transit, and spontaneous exploring.</p>
        <a href="#eventForm">Add an event</a>
      </article>
    `;
    return;
  }

  results.innerHTML = linksFor(trip)[state.mode]
    .map(
      (item) => `
        <article class="result-card">
          <strong>${item.title}</strong>
          <p>${item.body}</p>
          <a target="_blank" rel="noreferrer" href="${item.href}">Open search</a>
        </article>
      `,
    )
    .join("");

  renderInsight();
}

function renderInsight() {
  const trip = getTrip();
  const key = Object.keys(destinationNotes).find((name) =>
    trip.destination.toLowerCase().includes(name),
  );
  const note = destinationNotes[key] || {
    airports: "Compare at least two airports and try Tuesday or Wednesday departures.",
    area: "Choose a hotel near transit, food, and the first activity of the day.",
    vibe: "mix one famous attraction, one food stop, one scenic area, and one flexible hangout day",
  };

  aiInsight.innerHTML = `
    <strong>${trip.destination}</strong><br />
    Dates: ${formatDate(trip.depart)} to ${formatDate(trip.returnDate)} for ${trip.travelers} travelers.<br /><br />
    ${note.airports}<br />
    ${note.area}<br />
    Best activity mix: ${note.vibe}.
  `;
}

function saveEvents() {
  localStorage.setItem("ethanandfriends-events", JSON.stringify(state.events));
}

function renderEvents() {
  if (!state.events.length) {
    eventList.innerHTML = `<div class="event-item"><div class="event-date">No events</div><div><div class="event-title">Add the first trip plan</div><span class="event-owner">Flights, hotels, activities, or reminders</span></div></div>`;
    return;
  }

  eventList.innerHTML = state.events
    .slice()
    .sort((a, b) => a.date.localeCompare(b.date))
    .map(
      (event) => `
        <article class="event-item">
          <div class="event-date">${formatDate(event.date)}</div>
          <div>
            <div class="event-title">${event.title}</div>
            <span class="event-owner">${event.owner}</span>
          </div>
          <button class="delete-event" type="button" data-id="${event.id}">Remove</button>
        </article>
      `,
    )
    .join("");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    state.mode = tab.dataset.mode;
    renderResults();
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderResults();
});

[destinationInput, departInput, returnInput, travelersInput].forEach((input) => {
  input.addEventListener("input", renderInsight);
});

eventForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#eventTitle").value.trim();
  const date = document.querySelector("#eventDate").value;
  const owner = document.querySelector("#eventOwner").value;

  if (!title || !date) return;

  state.events.push({
    id: crypto.randomUUID(),
    title,
    date,
    owner,
  });
  saveEvents();
  eventForm.reset();
  document.querySelector("#eventDate").value = departInput.value || "2027-06-08";
  renderEvents();
});

eventList.addEventListener("click", (event) => {
  const button = event.target.closest(".delete-event");
  if (!button) return;
  state.events = state.events.filter((item) => item.id !== button.dataset.id);
  saveEvents();
  renderEvents();
});

clearEvents.addEventListener("click", () => {
  state.events = [];
  saveEvents();
  renderEvents();
});

destinationInput.value = "Tokyo, Japan";
renderResults();
renderEvents();
