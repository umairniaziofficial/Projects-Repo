const kiloEl = document.getElementById("kilo");
const tonsEl = document.getElementById("tons");
const poundsEl = document.getElementById("pounds");

kiloEl.addEventListener("input", () => {
  const kilograms = parseFloat(kiloEl.value);
  if (!isNaN(kilograms)) {
    const tons = kilograms / 907.185;
    const pounds = kilograms * 2.20462;
    tonsEl.value = tons.toFixed(4);
    poundsEl.value = pounds.toFixed(2);
  } else {
    tonsEl.value = "";
    poundsEl.value = "";
  }
});

tonsEl.addEventListener("input", () => {
  const tons = parseFloat(tonsEl.value);
  if (!isNaN(tons)) {
    const kilograms = tons * 907.185;
    const pounds = kilograms * 2.20462;
    kiloEl.value = kilograms.toFixed(2);
    poundsEl.value = pounds.toFixed(2);
  } else {
    kiloEl.value = "";
    poundsEl.value = "";
  }
});

poundsEl.addEventListener("input", () => {
  const pounds = parseFloat(poundsEl.value);
  if (!isNaN(pounds)) {
    const kilograms = pounds / 2.20462;
    const tons = kilograms / 907.185;
    kiloEl.value = kilograms.toFixed(2);
    tonsEl.value = tons.toFixed(4);
  } else {
    kiloEl.value = "";
    tonsEl.value = "";
  }
});
