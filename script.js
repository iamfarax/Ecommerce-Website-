let burger = document.querySelector(".burger");
let Navbar = document.querySelector(".navbar");
let LeftNav = document.querySelector(".left-nav-item");
let RightNav = document.querySelector(".right-nav-item");
burger.addEventListener("click", () => {
  Navbar.classList.toggle("h-nav-resp");
  LeftNav.classList.toggle("v-nav-resp");
  RightNav.classList.toggle("v-nav-resp");
});
