import displayData from "./utils/displayData.js";
const apiEndpoint = " https://api.github.com/users/";

const profileContainer = document.querySelector(".profile");
const form = document.querySelector(".form");
const switchMode = document.querySelector(".switch-mode");
const formInput = document.querySelector(".form__input");
const formErrorText = document.querySelector(".form__error-text");

window.addEventListener("DOMContentLoaded", () => {
  LoadingState("Loading");
  displayData(apiEndpoint, "john");
});

const LoadingState = (state) => {
  profileContainer.innerHTML = `<h2>${state}...</h2>`;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = formInput.value.trim("");
  formErrorText.textContent = null;
  LoadingState("Loading");
  if (value === "") {
    formErrorText.textContent = "No results";
    LoadingState("Input value is empty");
    return;
  }
  displayData(apiEndpoint, value);
});

const handleThemeToggle = () => {
  const switchText = document.querySelector(".switch-text");
  const sun = document.querySelector(".sun");
  const moon = document.querySelector(".moon");
  if (!document.body.classList.contains("dark-theme")) {
    document.body.classList.add("dark-theme");
    switchText.textContent = "Light";
    moon.style.display = "none";
    sun.style.display = "block";
  } else {
    document.body.classList.remove("dark-theme");
    switchText.textContent = "Dark";
    sun.style.display = "none";
    moon.style.display = "block";
  }
};

switchMode.addEventListener("click", handleThemeToggle);
