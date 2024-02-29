const ImagesEl = document.querySelectorAll(".image-Card");

ImagesEl.forEach((image)=>
{
    image.addEventListener(("click"),()=>
    {
        clearActiveClass();
        image.classList.add("active");
    })
})


function clearActiveClass()
{
    ImagesEl.forEach(element => {
        element.classList.remove("active");
    });
}