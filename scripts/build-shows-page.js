const showsList = document.querySelector(".shows__list");
const url = "https://project-1-api.herokuapp.com/";
const api = "?api_key=841289f3-4993-4376-bf7d-61058c65c905";
const showDates = "showdates";

//   axios
//     .get(url + showDates + api)
//     .then((response) => {
//       shows = response.data;
//       return shows;
//     })
//     .catch((error) => {
//       console.log(error);
//     });

// async function getShows() {
//   try {
//     let response = await axios.get(url + showDates + api);
//     let shows = response.data;
//     console.log(shows);
//     return shows;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function getShowInfo(url) {
//   let response = await axios.get(url);
//   let data = await response.data;
//   return data;
// }

// async function getShowsListGlobal() {
//   shows = await getShowInfo(url + showDates + api);
//   console.log(shows);
//   return shows;
// }

// getShowsListGlobal();

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

const createAndAppendShowsListCard = (shows) => {
  for (let i = 0; i < shows.length; i++) {
    let showsListCard = document.createElement("div");
    showsListCard.classList.add("shows__list-card");

    let timeStamp = parseInt(shows[i]["date"]);
    let theDate = new Date(timeStamp);
    let newYorkTime = theDate.toLocaleString("en-US", {
      timeZone: "America/New_York",
    });
    let newYorkConversion = new Date(newYorkTime);
    const weekday = newYorkConversion.toLocaleString("en-US", {
      weekday: "short",
    });
    const month = newYorkConversion.toLocaleString("en-US", { month: "short" });
    const day = newYorkConversion.toLocaleString("en-US", { day: "numeric" });
    const year = newYorkConversion.toLocaleDateString("en-US", {
      year: "numeric",
    });
    const dayNum = day < 10 ? "0" + day : day;
    let showDate = createDatesContainer(
      `${weekday} ${month} ${dayNum} ${year}`
    );

    showsListCard.appendChild(showDate);
    let showVenue = createVenueContainer(shows[i]["place"]);
    showsListCard.appendChild(showVenue);
    let showLocation = createLocationContainer(shows[i]["location"]);
    showsListCard.appendChild(showLocation);
    let showBtn = createBuyTicketsBtn();
    showBtn.setAttribute("name", shows[i]["place"]);
    showsListCard.appendChild(showBtn);
    showsList.appendChild(showsListCard);
  }

  //   return showsList.append(showsListCard);
};

async function getShows() {
  try {
    let response = await axios.get(url + showDates + api);
    let shows = response.data;
    createAndAppendShowsListCard(shows);

    // button event listener
    const btnEvent = document.querySelectorAll(".shows__btn");

    btnEvent.forEach((button) => {
      button.addEventListener("click", (event) => {
        console.log(event.target.attributes.name.nodeValue);
      });
    });
  } catch (error) {
    console.log(error);
  }
}

getShows();
