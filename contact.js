let draw = document.getElementById("draw");
let draw_btn = document.getElementById("draw_btn");
let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let draw_btn = {
    title: event.target[0].value,
  };
  fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify(draw_btn),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())

    .then((users) => {
      console.log(users);
    });
  if (draw.value === "") {
    alert("input is empty");
  } else if (draw.value.length < 5 || draw.value.length > 5) {
    alert("there is not five number chacked it");
  } else {
    alert("Your data has been sent, good luck");
    return draw;
  }
});

const btn_textarea = document.querySelector(".textare-send");

btn_textarea.addEventListener("click", function handleClick(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll("#textarea");

  inputs.forEach((input) => {
    input.value = "";
  });
});

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
