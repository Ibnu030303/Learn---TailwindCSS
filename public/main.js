window.onscroll = function () {
    const navBar = document.querySelector('#navbar');
    const fixedNav = navBar.offsetTop;

    if (window.pageYOffset > fixedNav) {
        navBar.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
    } else {
        navBar.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
    }
}

// Burger Menu Toggle
const burgerMenu = document.querySelector("#burgerMenu");
const navbarMenu = document.querySelector("#navbarMenu");

if (burgerMenu && navbarMenu) {
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("burger-active");
        navbarMenu.classList.toggle("hidden");
    });
} else {
    console.error("Burger menu or navbar menu element not found.");
}

// Draggable Image Scroll
const imageContainer = document.querySelector(".image");

if (imageContainer) {
    let isDragging = false;
    let startX;
    let scrollLeft;

    // Mouse Events
    imageContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - imageContainer.offsetLeft;
        scrollLeft = imageContainer.scrollLeft;
        imageContainer.classList.add("active"); // Optional: Add a class when active
    });

    imageContainer.addEventListener("mouseleave", () => {
        isDragging = false;
        imageContainer.classList.remove("active");
    });

    imageContainer.addEventListener("mouseup", () => {
        isDragging = false;
        imageContainer.classList.remove("active");
    });

    imageContainer.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - imageContainer.offsetLeft;
        const walk = (x - startX) * 2; // Adjust the multiplier for scroll speed
        imageContainer.scrollLeft = scrollLeft - walk;
    });

    // Touch Events for Mobile Support
    imageContainer.addEventListener("touchstart", (e) => {
        isDragging = true;
        startX = e.touches[0].pageX - imageContainer.offsetLeft;
        scrollLeft = imageContainer.scrollLeft;
    });

    imageContainer.addEventListener("touchend", () => {
        isDragging = false;
    });

    imageContainer.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - imageContainer.offsetLeft;
        const walk = (x - startX) * 2; // Adjust the multiplier for scroll speed
        imageContainer.scrollLeft = scrollLeft - walk;
    });
} else {
    console.error("Image container element not found.");
}
