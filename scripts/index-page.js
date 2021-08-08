let commentsArray = [
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

let commentsList = document.querySelector(".comments__list");
const submit = document.querySelector(".comments__form");

const displayComment = (commentObj) => {
  // create comments__list-card container
  const commentsListCard = document.createElement("div");
  commentsListCard.classList.add("comments__list-card");
  commentsList.appendChild(commentsListCard);

  // create comments__list-img
  const commentsListImg = document.createElement("div");
  commentsListImg.classList.add("comments__list-img");
  commentsListCard.appendChild(commentsListImg);

  // create comments__list-details
  const commentsListDetails = document.createElement("div");
  commentsListDetails.classList.add("comments__list-details");
  commentsListCard.appendChild(commentsListDetails);

  // create comments__list-user
  const commentsListUser = document.createElement("div");
  commentsListUser.classList.add("comments__list-user");
  commentsListDetails.appendChild(commentsListUser);

  // create comments__user-name
  const commentsUserName = document.createElement("p");
  commentsUserName.classList.add("comments__user-name");
  commentsUserName.innerText = commentObj.name;
  commentsListUser.appendChild(commentsUserName);

  // create comments__user-date
  const commentsUserDate = document.createElement("p");
  commentsUserDate.classList.add("comments__user-date");
  commentsUserDate.innerText = commentObj.timeStamp;
  commentsListUser.appendChild(commentsUserDate);

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

let newCommentsArray = [];

const onSubmitValue = (event) => {
  event.preventDefault();
  console.log(event);
  const nameField = document.querySelector(".comments__name-input").value;
  const commentField = document.querySelector(".comments__form-comment").value;

  let today = new Date();
  let date =
    today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear();

  let newObj = {
    name: nameField,
    timeStamp: date,
    comment: commentField,
  };

  commentsList.innerHTML = ``;
  //   console.log(commentsList);

  newCommentsArray.unshift(newObj);
  //   console.log(newCommentsArray);

  let concatedArray = newCommentsArray.concat(commentsArray);

  // console.log("concated", concatedArray);

  concatedArray.forEach((item) => {
    return displayComment(item);
  });

  const form = document.querySelector("form");
  form.reset();
};

submit.addEventListener("submit", onSubmitValue);
