const HourEl= document.getElementById("Hour");
const MinuteEl= document.getElementById("Minutes");
const SecondEl= document.getElementById("Seconds");

const AmPm= document.getElementById("AmPm");


function UpdateClock()
{
    let today = new Date();
    
    let HH= today.getHours();
    let MM=today.getMinutes();
    let SS=today.getSeconds();

    AmPm.textContent= HH<12? "AM" : "PM";
    
    HH= HH<10? "0"+HH : HH;
    MM= MM<10? "0"+MM : MM;
    SS= SS<10? "0"+SS : SS;

    HourEl.textContent=HH;
    MinuteEl.textContent=MM;
    SecondEl.textContent=SS;
}
setInterval(UpdateClock, 1000);