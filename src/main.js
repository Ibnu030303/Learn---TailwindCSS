window.onscroll = function () {
    const header = document.querySelector("#headerNav");
    const navTop = header.offsetTop;

    if (window.pageYOffset > navTop) {
        header.classList.add("nav-fixed");
    }else {
        header.classList.remove("nav-fixed");
    }
}

const navbar = document.querySelector("#navbar");
const menuBurger = document.querySelector("#menuBurger");
const iconFa = document.querySelector(".fa-bars");

menuBurger.addEventListener("click", function() {
    navbar.classList.toggle("hidden");
    iconFa.classList.toggle("fa-x")
})