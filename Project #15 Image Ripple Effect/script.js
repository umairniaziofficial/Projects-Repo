const toRippleEl = document.getElementById("toripple");

toRippleEl.addEventListener("mouseover",(event)=>
{
    let x= event.pageX - toRippleEl.offsetLeft;
    let y= event.pageY - toRippleEl.offsetTop;

    toRippleEl.style.setProperty("--xPos",x+"px");
    toRippleEl.style.setProperty("--yPos",y+"px");
})