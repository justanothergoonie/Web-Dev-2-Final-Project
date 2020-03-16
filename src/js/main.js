let hamburgerButton = document.querySelector(".toggle");

let navList = document.querySelector(".hide-small");

let toggleNav = function() {
  navList.classList.toggle("showing");
};
hamburgerButton.addEventListener("click", toggleNav);
