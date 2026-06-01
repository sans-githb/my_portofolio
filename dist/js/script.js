const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '=')) {
        event.preventDefault();
    }
});

document.addEventListener('wheel', function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });



hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("menu-active");
});

window.addEventListener('scroll',()=>{
    hamburger.classList.remove('is-active');
    menu.classList.remove('menu-active');
});

const loader = document.querySelector(".loader");

function loaderActive () {
    loader.classList.add("loader-active");
}

function loaderActiveTime() {
    setInterval(loaderActive, 3000);
}

window.onload = loaderActiveTime();