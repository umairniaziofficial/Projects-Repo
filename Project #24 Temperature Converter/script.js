const CelciusEl = document.getElementById("Celcius");
const FarenheitEl = document.getElementById("Farenheit");
const KelvinEl = document.getElementById("Kelvin");

CelciusEl.addEventListener("keyup", () => {
    const celsiusValue = parseFloat(CelciusEl.value);
    if (!isNaN(celsiusValue)) {
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        const kelvinValue = celsiusValue + 273.15;
        FarenheitEl.value = fahrenheitValue.toFixed(2);
        KelvinEl.value = kelvinValue.toFixed(2);
    } else {
        FarenheitEl.value = "";
        KelvinEl.value = "";
    }
});

FarenheitEl.addEventListener("keyup", () => {
    const fahrenheitValue = parseFloat(FarenheitEl.value);
    if (!isNaN(fahrenheitValue)) {
        const celsiusValue = (fahrenheitValue - 32) * 5/9;
        const kelvinValue = (fahrenheitValue - 32) * 5/9 + 273.15;
        CelciusEl.value = celsiusValue.toFixed(2);
        KelvinEl.value = kelvinValue.toFixed(2);
    } else {
        CelciusEl.value = "";
        KelvinEl.value = "";
    }
});

KelvinEl.addEventListener("keyup", () => {
    const kelvinValue = parseFloat(KelvinEl.value);
    if (!isNaN(kelvinValue)) {
        const celsiusValue = kelvinValue - 273.15;
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        CelciusEl.value = celsiusValue.toFixed(2);
        FarenheitEl.value = fahrenheitValue.toFixed(2);
    } else {
        CelciusEl.value = "";
        FarenheitEl.value = "";
    }
});
