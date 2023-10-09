document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".navbar-button");
  const navbarLinks = document.querySelector(".navbar-links");
  element.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });

  const navbarList = document.querySelector(".navbar-list");
  navbarList.addEventListener("click", () => {
    navbarList.classList.toggle("active");
  });

  const dropdown = document.querySelector(".dropdown");
  dropdown.addEventListener("click", () => {
    this.classList.toggle("active");
  });
});
