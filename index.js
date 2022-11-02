let searchBtn = document.getElementById("search-btn");
let searchContainer = document.querySelector(".search-bar-container");
let loginBtn = document.getElementById("login-btn");
let closeFormBtn = document.getElementById("form-close");
let loginContainer = document.querySelector(".login-form-container");
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector("nav");
let videoBtn = document.querySelectorAll(".vid-btn");

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
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelector(".controls .active-video")
      .classList.remove("active-video");
    btn.classList.add("active-video");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});
