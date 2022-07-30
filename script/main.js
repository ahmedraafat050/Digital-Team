let navbar = document.querySelector('.navbar');
window.onscroll = function () {
  if (window.scrollY >= 100) {
    navbar.style.backgroundColor = "#4B4B4B";
  } else navbar.style.backgroundColor = "transparent";
}