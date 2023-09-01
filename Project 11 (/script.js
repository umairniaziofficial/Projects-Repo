const checkBoxEl = document.getElementById('checkbox');
const NavbarEl = document.querySelector('.navbar');
const NavLinksEl = document.querySelector('.nav-links');

let clicks=0;

checkBoxEl.addEventListener('click',()=>
{
    clicks++;
    if(clicks%2==1)
    {
        console.log("DarkMode");
        NavbarEl.style.backgroundColor = "black";
        NavbarEl.style.color = "white";
        NavLinksEl.classList.add("Boss");
        
    }
    else if(clicks%2!=1)
    {
        console.log("Light Mode");
        NavbarEl.style.backgroundColor = "white";
        NavbarEl.style.color = "black";
        NavLinksEl.classList.remove("Boss");
    }
});