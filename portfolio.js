const navIcon = document.querySelector(".nav-icon-close");
const emailIcon = document.querySelector(".email-icon");
const emailLink = document.querySelector(".email-link");
const emailMenu = document.querySelector("#email-menu");


const openNav = () => {
    navIcon.classList.add("nav-icon-open")
    document.getElementById("mySidenav").style.width = "75%";
    navIcon.classList.add("color-change");
};

const closeNav = () => {
    navIcon.classList.remove("nav-icon-open")
    document.getElementById("mySidenav").style.width = "0";
    navIcon.classList.remove("color-change");
};

navIcon.addEventListener("click", () => {
    if (navIcon.classList.contains("nav-icon-open")) {
        closeNav();
    } else {
        openNav();
    }
});

const openEmail = (event) => {
    event.preventDefault()
    if (emailIcon.getAttribute("src") === ("./EmailRed.svg")) {
        emailIcon.setAttribute("src", "./Email.svg");
        emailMenu.style.height = "0%"
    } else {
        emailIcon.setAttribute("src", "./EmailRed.svg");
        emailMenu.style.height = "50%";
    }
};

emailLink.addEventListener("click", openEmail) 