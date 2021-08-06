const commentsArray = [
  {
    name: "Connor Walton",
    timeStamp: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. const us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    timeStamp: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    timeStamp: "12/20/2020",
    comment: `I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.`,
  },
];

const commentsList = document.querySelector(".comments__list");
const submit = document.querySelector(".comments__form");

const displayComment = (commentObj) => {
  // create comments__list-card container
  const commentsListCard = document.createElement("div");
  commentsListCard.classList.add("comments__list-card");
  commentsList.appendChild(commentsListCard);
  console.log(commentsListCard);

  // create comments__list-img
  const commentsListImg = document.createElement("div");
  commentsListImg.classList.add("comments__list-img");
  commentsListCard.appendChild(commentsListImg);
  console.log(commentsListImg);

  // create comments__list-details
  const commentsListDetails = document.createElement("div");
  commentsListDetails.classList.add("comments__list-details");
  commentsListCard.appendChild(commentsListDetails);
  console.log(commentsListDetails);

  // create comments__list-user
  const commentsListUser = document.createElement("div");
  commentsListUser.classList.add("comments__list-user");
  commentsListDetails.appendChild(commentsListUser);
  console.log(commentsListUser);

  // create comments__user-name
  const commentsUserName = document.createElement("p");
  commentsUserName.classList.add("comments__user-name");
  commentsUserName.innerText = commentObj.name;
  commentsListUser.appendChild(commentsUserName);
  console.log(commentsUserName);

  // create comments__user-date
  const commentsUserDate = document.createElement("p");
  commentsUserDate.classList.add("comments__user-date");
  commentsUserDate.innerText = commentObj.timeStamp;
  commentsListUser.appendChild(commentsUserDate);
  console.log(commentsUserDate);

  // create comments__list-text
  const commentsListText = document.createElement("p");
  commentsListText.classList.add("comments__list-text");
  commentsListText.innerText = commentObj.comment;
  commentsListDetails.appendChild(commentsListText);

  return commentsListCard;
};

commentsArray.forEach((comment) => {
  return displayComment(comment);
});

submit.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log(event);
});

let one = () => {
  let two = document.querySelector(".comments__name-input").value;
  console.log(two);
};
