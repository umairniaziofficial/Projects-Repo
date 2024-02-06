const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const mochiImg = document.getElementById("mochi");
const ValentineText = document.getElementById("theText");

let fontSize = 32; 

noBtn.addEventListener("click", () => {
    fontSize += 10;
    yesBtn.style.fontSize = fontSize + "px";
});


yesBtn.addEventListener("click", () => {
   noBtn.style.display = "none";
   yesBtn.style.display = "none";
   ValentineText.innerHTML = "Get set, Valentine! Our love journey is about to take off!";
    mochiImg.src = "/elements/GifImage2.gif"

});

