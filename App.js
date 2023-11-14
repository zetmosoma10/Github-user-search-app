import displayData from "./utils/displayData.js";
const apiEndpoint = " https://api.github.com/users/";
const profileContainer = document.querySelector(".profile");

const form = document.querySelector(".form");
const formInput = document.querySelector(".form__input");
const formErrorText = document.querySelector(".form__error-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formErrorText.textContent = null;
  const value = formInput.value;
  displayData(apiEndpoint, value);
});

window.addEventListener("DOMContentLoaded", () => {
  profileContainer.innerHTML = `<h2>Loading...</h2>`;
  displayData(`${apiEndpoint}`, "john");
});
