const TheButtonEl = document.getElementById("button");

TheButtonEl.addEventListener("mouseover",(event)=>
{
    let x = event.pageX - TheButtonEl.offsetLeft;
    let y = event.pageY - TheButtonEl.offsetTop;

    TheButtonEl.style.setProperty("--xPos",x +"px");
    TheButtonEl.style.setProperty("--yPos",y +"px");
})