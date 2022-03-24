export default function navbar() {
    const distance = window.scrollY;
    const navbar = document.querySelector("header");

    distance > 0 ? navbar.classList.add("changeColor") : navbar.classList.remove("changeColor");
}

window.addEventListener("scroll", navbar);