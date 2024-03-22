const btnEl = document.querySelectorAll('.btn');

btnEl.forEach(button => {
    button.addEventListener('click', (event) => {
        event.currentTarget.parentNode.classList.toggle('active');
    });
});
