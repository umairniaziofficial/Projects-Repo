const inputOtp = document.querySelectorAll("input");

inputOtp.forEach((input, index, array) => {
  input.addEventListener("input", function () {
    if (this.value.length > 1) {
      this.value = this.value.slice(0, 1);
    }
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" && index < array.length - 1) {
      array[index + 1].focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      array[index - 1].focus();
    }
  });
});
