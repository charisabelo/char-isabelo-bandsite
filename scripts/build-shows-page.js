const showsList = document.querySelector(".shows__list");
const url = "https://project-1-api.herokuapp.com/";
const api = "?api_key=841289f3-4993-4376-bf7d-61058c65c905";
const showDates = "showdates";

// axios
//   .get(url + showDates + api)
//   .then((response) => {
//     const data = response.data;
//     console.log(data);
//   })
//   .then(myShowsList)
//   .catch((error) => {
//     console.log(error);
//   });

async function getShowInfo(url) {
  let response = await axios.get(url);
  let data = await response.data;
  return data;
}

async function getShowsListGlobal() {
  shows = await getShowInfo(url + showDates + api);
  return shows;
}

let shows = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

const createDatesContainer = (concertDate) => {
  // create shows__dates-container
  const datesContainer = document.createElement("div");
  datesContainer.classList.add("shows__dates-container");

  // create shows__dates & append to shows__dates-container
  const dates = document.createElement("p");
  dates.classList.add("shows__dates", "shows__tablet--hidden");
  dates.innerText = "DATES";
  datesContainer.appendChild(dates);

  //   create shows__dates-name & append to shows__dates-container
  const datesName = document.createElement("p");
  datesName.classList.add("shows__dates-name");
  datesName.innerText = concertDate;
  datesContainer.appendChild(datesName);

  //   console.log(datesContainer);
  return datesContainer;
};

const createVenueContainer = (concertVenue) => {
  // create shows__venue-container
  const venueContainer = document.createElement("div");
  venueContainer.classList.add("shows__venue-container");

  // create shows__venue & append to shows__venue-container
  const venue = document.createElement("p");
  venue.classList.add("shows__venue", "shows__tablet--hidden");
  venue.innerText = "VENUE";
  venueContainer.appendChild(venue);

  //   create shows__venue-name & append to shows__venue-container
  const venueName = document.createElement("p");
  venueName.classList.add("shows__venue-name");
  venueName.innerText = concertVenue;
  venueContainer.appendChild(venueName);

  //   console.log(venueContainer);
  return venueContainer;
};

const createLocationContainer = (concertLocation) => {
  // create shows__location-container
  const locationContainer = document.createElement("div");
  locationContainer.classList.add("shows__location-container");

  // create shows__location & append to shows__location-container
  const location = document.createElement("p");
  location.classList.add("shows__location", "shows__tablet--hidden");
  location.innerText = "LOCATION";
  locationContainer.appendChild(location);

  //   shows__location-name & append to shows__location-container
  const locationName = document.createElement("p");
  locationName.classList.add("shows__location-name");
  locationName.innerText = concertLocation;
  locationContainer.appendChild(locationName);

  //   console.log(locationContainer);
  return locationContainer;
};

const createBuyTicketsBtn = () => {
  const buyTicketsBtn = document.createElement("button");
  buyTicketsBtn.classList.add("shows__btn");
  buyTicketsBtn.innerText = "BUY TICKETS";

  //   console.log(buyTicketsBtn);
  return buyTicketsBtn;
};

const createAndAppendShowsListCard = () => {
  for (let i = 0; i < shows.length; i++) {
    let showsListCard = document.createElement("div");
    showsListCard.classList.add("shows__list-card");

    let showDate = createDatesContainer(shows[i]["date"]);
    showsListCard.appendChild(showDate);
    let showVenue = createVenueContainer(shows[i]["venue"]);
    showsListCard.appendChild(showVenue);
    let showLocation = createLocationContainer(shows[i]["location"]);
    showsListCard.appendChild(showLocation);
    let showBtn = createBuyTicketsBtn();
    showBtn.setAttribute("name", shows[i]["venue"]);
    showsListCard.appendChild(showBtn);
    showsList.appendChild(showsListCard);
  }

  //   return showsList.append(showsListCard);
};

createAndAppendShowsListCard();

// button event listener
const btnEvent = document.querySelectorAll(".shows__btn");
// console.log(btnEvent);

btnEvent.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target.attributes.name.nodeValue);
  });
});
