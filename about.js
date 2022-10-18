let label = document.querySelectorAll(".accordion-box")



label.forEach((event)=>{
    event.addEventListener("click", ()=>{
        removeClass()
        event.classList.toggle("active")
    })
})

function removeClass(){
    label.forEach((event)=>{
        event.classList.remove("active")
    })
}