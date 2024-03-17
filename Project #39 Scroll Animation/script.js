const boxes = document.querySelectorAll(".box");
const windowHeight = window.innerHeight;
let ticking = false;

window.addEventListener("scroll", function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            toggleBoxes();
            ticking = false;
        });
        ticking = true;
    }
});

function toggleBoxes() {
    const bottomTrigger = windowHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        box.classList.toggle("show", boxTop < bottomTrigger);
    });
}