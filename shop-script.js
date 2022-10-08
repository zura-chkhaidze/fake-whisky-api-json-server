// fetch API GET method

function Database_1() {
  let request_1 = new XMLHttpRequest();
  function received_data_1() {
    let return_info_1 = this.responseText;
    let script_format_1 = JSON.parse(return_info_1);
    let big_div = document.createElement("div");
    script_format_1.whiskey_data.forEach((element) => {
      
      let div_box = document.createElement("div");
      let img = document.createElement("img");
      let paragraph = document.createElement("p");
      paragraph.textContent = element.name + " " + element.price;
      img.setAttribute("src",element.images);
      big_div.appendChild(div_box);
      div_box.appendChild(img);
      div_box.appendChild(paragraph);
      
    });
    document.getElementById("whiskey-main-div").appendChild(big_div);
  }

  request_1.addEventListener("load", received_data_1);
  request_1.open("GET", "drinks-data.json");
  request_1.send();
}
Database_1();



// fetch API POST method
// function recieved_data() {
//   fetch("drinks-data.json").then(function(response){

//     return response.json();

//   }).then(function (object) {
//     console.log(object);
//   }).catch(function (error) {
//     console.error("wrong");
//     console.error(error);
//   })
// }
