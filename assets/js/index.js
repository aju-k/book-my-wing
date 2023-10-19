document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".navbar-button");
  const navbarLinks = document.querySelector(".navbar-links");
  element.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });

  // const navbarList = document.querySelector(".navbar-list");
  // navbarList.addEventListener("click", () => {
  //   navbarList.classList.toggle("active");
  // });

  const dropdown = document.querySelector(".dropbtn");

  dropdown.addEventListener("click", () => {
    const dropdownList = document.querySelector(".dropdown-content");
    console.log(dropdownList);
    dropdownList.classList.toggle("active");
  });
});
