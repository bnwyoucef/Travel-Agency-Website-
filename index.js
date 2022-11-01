let searchBtn = document.getElementById("search-btn");
let searchContainer = document.querySelector(".search-bar-container");
let loginBtn = document.getElementById("login-btn");
let closeFormBtn = document.getElementById("form-close");
let loginContainer = document.querySelector(".login-form-container");

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchContainer.classList.remove("active");
};

searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchContainer.classList.toggle("active");
});
loginBtn.addEventListener("click", () => {
  loginContainer.classList.toggle("active-login");
});
closeFormBtn.addEventListener("click", () => {
  loginContainer.classList.toggle("active-login");
});
