let SongNameEl = document.getElementById("songName");
let barEl = document.getElementById("bar");
let previousBtnEl = document.getElementById("prev");
let startBtnEL = document.getElementById("start");
let nextBtnEL = document.getElementById("next");
let audioEl = document.querySelector("audio");
let imageEl = document.querySelector("img");

var songPlaying = false;
var songNumber = 0;

const songs = [
    { name: "Your Song", path: "" },
    { name: "Your Song", path: "" },
    { name: "Your Song", path: "" },
];



window.onload = function () {
    audioEl.src = songs[songNumber].path;
    SongNameEl.textContent = songs[songNumber].name;
    imageEl.src= `/Project 10 (Music Player)/image${songNumber}.jpg`;
};

startBtnEL.addEventListener("click", () => {
    if (!songPlaying) {
        audioEl.play();
        startBtnEL.textContent = "Stop";
        songPlaying = true;
    } else if (songPlaying) {
        audioEl.pause();
        startBtnEL.textContent = "Play";
        songPlaying = false;
    }
});

function HandleButton()
{
    audioEl.play();
    startBtnEL.textContent = "Stop";
    songPlaying = true;
}

function ChangeImage()
{
    console.log(songNumber);
    imageEl.src= `/Project 10 (Music Player)/image${songNumber}.jpg`;
}

function playMusic() {
    if (songNumber < 3 && songNumber >= 0) {
        audioEl.src = songs[songNumber].path;
        SongNameEl.textContent = songs[songNumber].name;
        HandleButton();
    } else if (songNumber >=3) {
        songNumber = 0;
        audioEl.src = songs[songNumber].path;
        SongNameEl.textContent = songs[songNumber].name;
        HandleButton();
    }
    else if (songNumber < 0)
    {
        songNumber=2;
        audioEl.src = songs[songNumber].path;
        SongNameEl.textContent = songs[songNumber].name;
        HandleButton();
    }
    ChangeImage();
}

nextBtnEL.addEventListener("click", () => {
    songNumber++;
    playMusic();
});

previousBtnEl.addEventListener("click", () => {
    songNumber--;
    playMusic();
});
