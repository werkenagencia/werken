document.addEventListener("DOMContentLoaded", function () {
  const menuTrigger = document.querySelector(".menu-trigger");
  const navMenu = document.querySelector(".nav");

  menuTrigger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
