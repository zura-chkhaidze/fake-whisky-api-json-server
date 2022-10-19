let label = document.querySelectorAll(".accordion-box");

label.forEach((event) => {
  event.addEventListener("click", () => {
    removeClass();
    event.classList.toggle("active");
  });
});

function removeClass() {
  label.forEach((event) => {
    event.classList.remove("active");
  });
}

//burgerbar
let burger_bar = document.querySelector(".burger_bar");
let nav_menu = document.querySelector(".nav_menu");

burger_bar.addEventListener("click", function () {
  burger_bar.classList.toggle("active");
  nav_menu.classList.toggle("active");
});
document.querySelectorAll(".nav_item").forEach((y) =>
  y.addEventListener("click", function () {
    burger_bar.classList.remove("active");
    nav_menu.classList.remove("active");
  })
);

//scroll up event
let scroll_button = document.querySelector(".scroll-up");

scroll_button.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
