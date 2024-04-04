setInterval(function () {
  var today = new Date();
  var minutes = today.getMinutes() * 6;
  var seconds = today.getSeconds() * 6;
  var hours = today.getHours() * 30 + Math.round(minutes / 12);

  document.getElementById("hours").style.transform = "rotate(" + hours + "deg)";
  document.getElementById("minutes").style.transform =
    "rotate(" + minutes + "deg)";
  document.getElementById("seconds").style.transform =
    "rotate(" + seconds + "deg)";
}, 1000);
