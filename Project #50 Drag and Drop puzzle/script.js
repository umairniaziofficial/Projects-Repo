const boxes = document.querySelectorAll(".box");
const image = document.querySelector(".image");


boxes.forEach(box => {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
        box.classList.add("hover");
    });
    box.addEventListener("dragleave", (e) => {
        e.preventDefault();
        box.classList.remove("hover");
    });

    box.addEventListener("drop", (e) => {
        box.appendChild(image);
        box.classList.remove("hover");
    });
});