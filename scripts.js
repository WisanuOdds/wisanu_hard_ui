// JavaScript to toggle the sidebar and move the hamburger icon
const sidebar = document.getElementById("sidebar");
const hamburger = document.getElementById("hamburger");
const search = document.getElementById("search");
const mainContent = document.getElementById("main-content");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  hamburger.classList.toggle("active");
  search.classList.toggle("active");
  mainContent.classList.toggle("shift");
});




