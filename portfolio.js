const navIcon = document.querySelector(".nav-icon-close");

function openNav() {
    navIcon.classList.add("nav-icon-open")
};

function closeNav() {
    navIcon.classList.remove("nav-icon-open")
};

navIcon.addEventListener("click", function () {
    if (navIcon.classList.contains("nav-icon-open")) {
        closeNav();
    } else {
        openNav();
    }
});
