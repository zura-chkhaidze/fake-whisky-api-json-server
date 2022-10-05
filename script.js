let burger_bar = document.querySelector(".burger_bar");
let nav_menu = document.querySelector(".nav_menu");

burger_bar.addEventListener("click",function(){
    burger_bar.classList.toggle("active");
    nav_menu.classList.toggle("active");
})
document.querySelectorAll(".nav_item").forEach(y => y.
    addEventListener("click", function (){
        burger_bar.classList.remove("active");
        nav_menu.classList.remove("active");
    }))