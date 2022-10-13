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
    `;
  });
  shop_main_div.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => randerPosts());

//search

const whiskey_list = document.getElementById("whiskey_list");
const search = document.getElementById("search");
let whiskey_names = [];

search.addEventListener("keyup", (e) => {
  const search_string = e.target.value.toLowerCase();

  const filtered_whiskeyes = whiskey_names.filter((whiskey) => {
    return whiskey.name.toLowerCase().includes(search_string);
  });
  display_whiskey(filtered_whiskeyes);
});

const load_whiskey = async () => {
  try {
    const res = await fetch("http://localhost:3000/whiskey_data");
    whiskey_names = await res.json();
    display_whiskey(whiskey_names);
  } catch (err) {
    console.error(err);
  }
};

const display_whiskey = (whiskey_data) => {
  const html_string = whiskey_data
    .map((whiskey) => {
      return `
            <li class="character">
                <h2>${whiskey.name}</h2>
            </li>
        `;
    })
    .join("");
  whiskey_list.innerHTML = html_string;
};

load_whiskey();
