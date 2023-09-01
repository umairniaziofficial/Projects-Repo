const navToggle = document.getElementById('ToggleIcon');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    console.log("Hello!");
    navLinks.classList.toggle('show');

    // Add logic to toggle the display of the nav links
    if (navLinks.classList.contains('show')) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});
