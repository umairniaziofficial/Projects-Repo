const viewEl = document.getElementById("view");
viewEl.addEventListener("click", () => {

  const dateEl = document.getElementById("thedate");
  var selectedDate = new Date(dateEl.value);
  
  if (!dateEl.value) {
    alert("Please enter a date first.");
    return;
  }
  var today = new Date();
  if (selectedDate < today) {
    alert("Please select a date equal to or later than today.");
    return;
  }
  var countdownTime = selectedDate.getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countdownTime - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
      days + ` <span class='days'>${days>1?"days":"day"}</span> ` +
      hours + ` <span class='hours'>${hours>1?"hours":"hour"}</span> ` +
      minutes + ` <span class='minutes'>${minutes>1?"minutes":"minute"}</span> ` +
      seconds + `<span class='seconds'>${seconds>1?" seconds":"second"}</span> `;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("timer").innerHTML = "Time Reached";
    }
  }, 1000);
});