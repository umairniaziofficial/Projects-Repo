document.addEventListener("DOMContentLoaded", () => {
  var countdownTime = new Date("2023-09-01T00:00:00").getTime();

  var x = setInterval(function () {
    var today = new Date().getTime();

    var distance = countdownTime- today;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML=days + " days " + hours + " hours " + minutes + " minutes " + seconds+ " seconds";

    if(distance<0)
    {
      clearInterval(x);
      document.getElementById("timer").innerHTML="Time Reached";
    }

  }, 1000)
});