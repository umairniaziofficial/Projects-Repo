const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const image1 = document.getElementById("img1");
const image2 = document.getElementById("img2");
const ValentineText = document.getElementById("theText");

let fontSize = 32; 

noBtn.addEventListener("click", () => {
    fontSize += 10;
    yesBtn.style.fontSize = fontSize + "px";
});


 yesBtn.addEventListener("click", () => {
   noBtn.style.display = "none";
   yesBtn.style.display = "none";
   image1.style.display = "none";
   
   setTimeout(() => {
    image2.style.display = "block";
   ValentineText.innerHTML = "Get set, Valentine! Our love journey is about to take off!";

   }, 150);
   
});

