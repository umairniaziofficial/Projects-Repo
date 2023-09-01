let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

var SlideIndex = 1;
ShowSlide(SlideIndex);

function plusSlides(n) {
  ShowSlide(SlideIndex += n);
}

function currentSlide(n) {
  ShowSlide(SlideIndex = n);
}

function ShowSlide(index) {
  let i;

  if (index > slides.length) {
    SlideIndex = 1;
  }
  if (index < 1) {
    SlideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[SlideIndex - 1].style.display = "block";
  dots[SlideIndex - 1].className += " active";
}

// Set automatic slideshow timeout to change slide every 3 seconds
let slideInterval = setInterval(() => {
  plusSlides(1);
}, 3000);

// Function to stop the automatic slideshow
function stopSlideInterval() {
  clearInterval(slideInterval);
}

// Add event listeners to stop the slideshow when clicking on slide images, next, and prev buttons
for (let i = 0; i < slides.length; i++) {
  slides[i].addEventListener("click", stopSlideInterval);
}

prevBtn.addEventListener("click", stopSlideInterval);
nextBtn.addEventListener("click", stopSlideInterval);
