let shop_main_div = document.getElementById("whiskey-main-div");
let randerPosts = async () => {
  let url = "http://localhost:3000/whiskey_data";
  let res = await fetch(url);
  let whiskey_data = await res.json();
  let template = "";
  whiskey_data.forEach((element) => {
    template += `
    <div class="shop-posts">
    <img class="shop-images" src="${element.images}" alt="">
    <h2 class="drink-name">${element.name}</h2>
    <h3 class="prices">${element.price}</h3>
  </div>
    `
  })
  shop_main_div.innerHTML = template;
}

window.addEventListener("DOMContentLoaded", () => randerPosts());
