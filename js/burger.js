const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  menu.classList.toggle("active"); // Vis/skjul menuen ved at toggle klassen 'active'
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active"); // Skjul menuen, når et link klikkes
  });
});
