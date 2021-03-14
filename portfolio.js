const navIcon = document.querySelector(".nav-icon-close");

function openNav() {
    navIcon.classList.add("nav-icon-open")
    document.getElementById("mySidenav").style.width = "75%";
    navIcon.classList.add("color-change");
};

function closeNav() {
    navIcon.classList.remove("nav-icon-open")
    document.getElementById("mySidenav").style.width = "0";
    navIcon.classList.remove("color-change");
};

navIcon.addEventListener("click", function () {
    if (navIcon.classList.contains("nav-icon-open")) {
        closeNav();
    } else {
        openNav();
    }
});
