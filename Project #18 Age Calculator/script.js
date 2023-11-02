const dateinputEl = document.getElementById("dateinput");
const headingEl = document.getElementById("heading");
const agebtnEl = document.getElementById("agebtn");
const yourageEl = document.getElementById("yourage");

agebtnEl.addEventListener("click", () => {
  let selectedDate = new Date(dateinputEl.value);
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let days = today.getDate();

  headingEl.style.display = "none";
  dateinputEl.style.display = "none";
  agebtnEl.style.display = "none";

  console.log("Selected date: " + selectedDate);
  console.log("Todays Date: " + today);

  let AgeYears = year - selectedDate.getFullYear();
  let AgeMonths = month - selectedDate.getMonth();
  let AgeDays = days - selectedDate.getDate();

  if (AgeYears < 0) {
    yourageEl.textContent = "Invalid Age!";
  } else {
    if (AgeMonths < 0) {
      AgeMonths = AgeMonths + 12;
      AgeYears--;
    }

    if (AgeDays < 0) {
      const prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      AgeDays = prevMonthLastDay - selectedDate.getDate() + today.getDate();
      AgeMonths--;
    }

    let ageString = "Your Age: ";

    if (AgeYears > 0) {
      ageString += `${AgeYears} Year${AgeYears > 1 ? 's' : ''}`;
    }

    if (AgeMonths > 0) {
      if (AgeYears > 0) {
        ageString += " and ";
      }
      ageString += `${AgeMonths} Month${AgeMonths > 1 ? 's' : ''}`;
    }

    if (AgeDays > 0) {
      if (AgeYears > 0 || AgeMonths > 0) {
        ageString += " and ";
      }
      ageString += `${AgeDays} Day${AgeDays > 1 ? 's' : ''}`;
    }


    if(AgeYears===0 && AgeMonths===0 && AgeDays===0)
    {
      yourageEl.textContent = "Congratulations, it seems a newborn baby has already mastered the complex art of inputting their age with an astonishing IQ of 9999999. Quite the genius we have here!";
    }
    else
    {
      yourageEl.textContent = ageString;
    }
    
  }
});
