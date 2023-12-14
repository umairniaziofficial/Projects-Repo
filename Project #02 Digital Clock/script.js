const hourEl = document.getElementById("hh");
const minuteEl = document.getElementById("mm");
const secondEl = document.getElementById("ss");
const apmpmEl = document.getElementById("ampm");

function updateClock() {
    let today = new Date();

    let hh = today.getHours();
    let mm = today.getMinutes();
    let ss = today.getSeconds();
    let ampm = "AM";

    ampm = hh > 12 ? "PM" : "AM";

    mm = mm > 9 ? mm : "0" + mm;
    ss = ss > 9 ? ss : "0" + ss;

    if (hh > 12) {
        hh = hh - 12;
    }

    hh = hh > 9 ? hh : "0" + hh;

    hourEl.innerHTML = hh;
    minuteEl.innerHTML = mm;
    secondEl.innerHTML = ss;

    apmpmEl.innerHTML = ampm;
}

setInterval(() => {
    updateClock();
}, 1000);
