const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const WeekdayEl = document.getElementById("weekday");
const yearEl = document.getElementById("year");

window.onload(updateCalendar());

function updateCalendar() {
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    
    let today = new Date();
    
    monthEl.innerHTML = months[today.getMonth()];
    dayEl.innerHTML = today.getDate();
    WeekdayEl.innerHTML = days[today.getDay()];
    yearEl.innerHTML = today.getFullYear();
}
