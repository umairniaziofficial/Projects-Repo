const toggleBtnEl = document.getElementById("toggleBtn");
const buttonEl = document.querySelector("button");

var Clicked = false;


toggleBtnEl.addEventListener("click",()=>
{
    console.log(document.title);
    if(!Clicked)
    {
        buttonEl.style.background = "red";
        document.body.style.background = "black";
        document.title = "Dark Mode Enabled";
        Clicked= true;
    }
    else
    {
        buttonEl.style.background = "green";
        document.body.style.background = "white";
        document.title = "Light Mode Enabled";
        Clicked= false;

    }
})