//burger bar
let burger_bar = document.querySelector(".burger_bar");
let nav_menu = document.querySelector(".nav_menu");
let username = document.getElementById("username");
let email = document.getElementById("email");
let month_check = document.getElementById("month");
let date_check = document.getElementById("date");
let year_check = document.getElementById("year");
let btn = document.getElementById("btn");

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

//validation for wiskey shop

function show_error(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const span = formControl.querySelector("span");
  span.innerText = message;
}

function show_success(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function isValidEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", function (item) {
  item.preventDefault();
  if (username.value === "") {
    show_error(username, "Username is empty");
  } else if (username.value.length < 3) {
    show_error(username, "username is too small");
  } else {
    show_success(username);
  }
  if (email.value === "") {
    show_error(email, "Email is empty");
  } else if (!isValidEmail(email.value)) {
    show_error(email, "Email is not valid");
  } else {
    show_success(email);
  }
  if (
    month_check.value === "" ||
    month_check.value <= 0 ||
    month_check.value >= 13
  ) {
    show_error(month_check, "pease check your date");
  } else if (
    date_check.value === "" ||
    date_check.value <= 0 ||
    date_check.value >= 32
  ) {
    show_error(date_check, "pease check your date");
  } else if (
    year_check.value === "" ||
    year_check.value <= 0 ||
    year_check.value >= 2005 ||
    year_check.value <= 1900
  ) {
    show_error(year_check, "pease check your date");
  } else {
    show_success(month_check, date_check, year_check);
  }
});
//scroll up event
let scroll_button = document.getElementById("scroll-up");

scroll_button.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

