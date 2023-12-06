let requestedUrl = "https://api.github.com/users/kazimahmad22";
const errorMessage = document.querySelector("#error");
const card = document.querySelector(".card");
const cardContainer = document.querySelector("#cardContainer");
const fetchBtn = document.querySelector("#fetchBtn");
const userNameInput = document.querySelector("#username");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userName = userNameInput.value;
  if (userName !== "") {
    requestedUrl = `https://api.github.com/users/${userName}`;
  }

  fetch(requestedUrl)
    .then((value) => {
      return value.json();
    })
    .then((data) => {
      if (data.message == "Not Found") {
        errorMessage.classList.remove("hidden");
        cardContainer.style.height = "0px";

        return;
      } else {
        errorMessage.classList.add("hidden");
      }
      card.innerHTML = `
    <img src="${data.avatar_url}" alt="" />
    <div class="info">
      <h6>User ID:</h6>
      <p id="userId">${data.id}</p>
      <h6>Followers:</h6>
      <p id="followers">${data.followers}</p>
    </div>
      `;
      cardContainer.style.height = "300px";
    })
    .catch((error) => {
      console.log(`Error is ${error.message}`);
    });
});
