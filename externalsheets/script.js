const  initSlider = ()=>{
    const slideButtons = document.querySelectorAll(".slide-wrapper .slide-button");
    const imageList = document.querySelector(".slide-wrapper .img-list")
     slideButtons.forEach(button => {
        button.addEventListener("click",()=>{
            const direction = button.id ==="prev-slide" ? -1 : 1;
            const scrollAmount = (imageList.clientWidth * direction)/2;
            imageList.scrollBy({left : scrollAmount, behavior : "smooth"});
        });
    });
}
window.addEventListener("load",initSlider)


// matter with the image slider is goes here
let slides = document.querySelectorAll(".slides img");
let index = 0;

document.addEventListener("DOMContentLoaded", initializer)
function initializer() {
    slides[index].classList.add("display");
    sliding();
}
// function sliding() {
//     let iterate = setInterval(nextSlider, 5000)
// }
function prevSlider() {
    slides[index].classList.remove("display");
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    slides[index].classList.add("display");

}
function nextSlider() {
    slides[index].classList.remove("display");
    index++;
    if (index == slides.length) {
        index = 0;
    }
    slides[index].classList.add("display");
}