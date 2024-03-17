const loadingText = document.querySelector(".loading-text");
const backgroundImage = document.querySelector(".bg");

let loadingScore = 0;
const maxLoadingScore = 100;

const blurringInterval = setInterval(blurEffect, 20);

function blurEffect() {
    loadingScore++;

    if (loadingScore > maxLoadingScore) {
        clearInterval(blurringInterval);
    }

    loadingText.innerText = `${loadingScore}%`;
    loadingText.style.opacity = scale(loadingScore, 0, maxLoadingScore, 1, 0);
    backgroundImage.style.filter = `blur(${scale(loadingScore, 0, maxLoadingScore, 30, 0)}px)`;
}

function scale(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
