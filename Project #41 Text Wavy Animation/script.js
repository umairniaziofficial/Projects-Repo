const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  const htmlString = Array.from(label.innerText)
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");

  label.innerHTML = htmlString;
});
