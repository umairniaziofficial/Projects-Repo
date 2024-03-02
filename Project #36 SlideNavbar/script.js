const closeEl = document.getElementById("close");
const openEl = document.getElementById("open");
const containerEl = document.querySelector(".container");


openEl.addEventListener("click",()=>
{
    containerEl.classList.add("show-nav");
})

closeEl.addEventListener("click",()=>
{
    containerEl.classList.remove("show-nav");
})

