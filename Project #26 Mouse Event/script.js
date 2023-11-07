const MouseXEl = document.getElementById("MouseX");
const MouseYEl = document.getElementById("MouseY");

document.addEventListener("mousemove", (event)=>
{
    MouseXEl.textContent = event.offsetX ;
    MouseYEl.textContent = event.offsetY ;
})