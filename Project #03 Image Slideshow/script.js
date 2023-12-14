// First Changing the ratio of the images 

// Let's Get Started 

let Slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

var slideIndex=1;

ShowSlide(slideIndex);

// Plus Slides Logic
function plusSlides(n)
{
    ShowSlide((slideIndex+=n));
}

function currentSlide(n)
{
    ShowSlide((slideIndex=n));
}

// Writing the logic for Show SLide

function ShowSlide(index)
{
    let i;

    if(index>Slides.length)
    {
        slideIndex=1;
    }
    if(index<1)
    {
        slideIndex= Slides.length;
    }

    // Now Loop To Display none of the images to show one image at a time

    for(i=0;i<Slides.length;i++)
    {
        Slides[i].style.display="none";

    }

    // Logic for Dots
    for(i=0;i<dots.length;i++)
    {
        dots[i].className = dots[i].className.replace(" active","");
    }

    Slides[slideIndex-1].style.display = "block";

    // Bug Fixed -> += Error
    dots[slideIndex-1].className += " active";
}

// Auto Switch Slides Effect
let SlideInterval = setInterval(() =>
{
    plusSlides(1);
},3000); 
// WIll Switch Slides After 3 seconds  

// To Stop This Effect 
function stopSlideInterval()
{
    clearInterval(SlideInterval);
}

// TO Click on Any Slide to Stop the SlideShow
for(let i=0;i<Slides.length;i++)
{
    Slides[i].addEventListener("clicl",stopSlideInterval);
}

prevBtn.addEventListener("click",stopSlideInterval);
nextBtn.addEventListener("click",stopSlideInterval);


// Thanks For Watching Like Share And Subscribe