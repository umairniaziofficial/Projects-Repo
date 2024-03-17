const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')


var SearchHidden = true;
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    btn.style.borderRadius = "0px";
    input.style.borderRadius = "0px";
    input.focus()
})