//burger bar
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
// slider
let slideIndex = 1;

function showImage(item) {
  "use strict";

  let slide = document.getElementsByClassName("slides"),
    dots = document.getElementsByClassName("dots"),
    i;

  if (item > slide.length) {
    slideIndex = 1;
  }

  if (item < 1) {
    slideIndex = slide.length;
  }

  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slide[slideIndex - 1].style.display = "block";

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  dots[slideIndex - 1].className += " active";
}

showImage(slideIndex);

function plusIndex(next) {
  "use strict";

  showImage((slideIndex += next));
}

function currentSlide(prev) {
  "use strict";

  showImage((slideIndex = prev));
}
