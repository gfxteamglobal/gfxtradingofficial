const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("show");
});

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if(window.scrollY > 50){
        header.style.background = "rgba(5,5,5,.95)";
    }else{
        header.style.background = "rgba(5,5,5,.8)";
    }
});