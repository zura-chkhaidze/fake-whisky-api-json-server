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
     
    });  