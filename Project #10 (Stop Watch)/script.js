const startButtonEl = document.getElementById("start");
const resetButtonEl = document.getElementById("reset");

var minutesEl = document.getElementById('min');
var secondsEl = document.getElementById('sec');
var millisecondsEl = document.getElementById('msec');

var mili = 0;
var sec = 0;
var min = 0;
var intervalID = null; 

var startClicked = false;
startButtonEl.addEventListener("click", () => {
    if (!startClicked) {
        startButtonEl.innerHTML = "STOP";
        startClicked = true;
        intervalID = setInterval(theStopWatch, 10);
    } else {
        startButtonEl.innerHTML = "START";
        clearInterval(intervalID);
        startClicked = false;
    }
});

resetButtonEl.addEventListener("click", () => {
    clearInterval(intervalID);
    startButtonEl.innerHTML = "START";
    startClicked = false;
    mili = 0;
    sec = 0;
    min = 0;
    updateCounter();
});

function theStopWatch() {
    mili++;
    if (mili === 100) {
        mili = 0;
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
        }
    }
    updateCounter();
}

function updateCounter() {
    minutesEl.textContent = min < 10 ? '0' + min : min;
    secondsEl.textContent = sec < 10 ? '0' + sec : sec;
    millisecondsEl.textContent = mili < 10 ? '0' +   mili : mili;
}
