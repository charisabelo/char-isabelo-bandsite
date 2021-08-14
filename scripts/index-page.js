let commentsList = document.querySelector(".comments__list");
const submit = document.querySelector(".comments__form");
const commentsUrl = `https://project-1-api.herokuapp.com/comments?api_key=ed8988bd-1dfd-4c2f-857c-4022fa5b6892`;

const displayComment = (commentObj) => {
  const commentsListCard = document.createElement("div");
  commentsListCard.classList.add("comments__list-card");
  commentsList.appendChild(commentsListCard);

  const commentsListImg = document.createElement("div");
  commentsListImg.classList.add("comments__list-img");
  commentsListCard.appendChild(commentsListImg);

  const commentsListDetails = document.createElement("div");
  commentsListDetails.classList.add("comments__list-details");
  commentsListCard.appendChild(commentsListDetails);

  const commentsListUser = document.createElement("div");
  commentsListUser.classList.add("comments__list-user");
  commentsListDetails.appendChild(commentsListUser);

  const commentsUserName = document.createElement("p");
  commentsUserName.classList.add("comments__user-name");
  commentsUserName.innerText = commentObj.name;
  commentsListUser.appendChild(commentsUserName);

  let dateConversion = new Date(commentObj.timestamp);
  let newYorkTime = dateConversion.toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  let newYorkConvert = new Date(newYorkTime);
  let month = newYorkConvert.toLocaleString("en-US", { month: "2-digit" });
  let day = newYorkConvert.toLocaleString("en-US", { day: "2-digit" });
  let year = newYorkConvert.toLocaleString("en-US", { year: "numeric" });

  const commentsUserDate = document.createElement("p");
  commentsUserDate.classList.add("comments__user-date");
  commentsUserDate.innerText = `${month}/${day}/${year}`;
  commentsListUser.appendChild(commentsUserDate);

  const commentsListText = document.createElement("p");
  commentsListText.classList.add("comments__list-text");
  commentsListText.innerText = commentObj.comment;
  commentsListDetails.appendChild(commentsListText);

  return commentsListCard;
};

const promiseDisplay = () => {
  let p = new Promise((resolve, reject) => {
    resolve(axios.get(commentsUrl));
  });

  p.then((result1) => {
    return result1.data;
  })
    .then((result2) => {
      let commentsArray = result2;
      let sortedArray = commentsArray.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
      sortedArray.forEach((comment) => {
        return displayComment(comment);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

promiseDisplay();

const onSubmitValue = (event) => {
  event.preventDefault();
  const nameField = document.querySelector(".comments__name-input").value;
  const commentField = document.querySelector(".comments__form-comment").value;

  axios
    .post(commentsUrl, {
      name: nameField,
      comment: commentField,
    })
    .then((res) => {
      console.log(res);
      commentsList.innerHTML = ``;
      promiseDisplay();
    })
    .catch((err) => {
      console.log(err);
    });

  const form = document.querySelector("form");
  form.reset();
};

submit.addEventListener("submit", onSubmitValue);
