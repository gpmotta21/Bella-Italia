import expandNavbar from "./modules/expandNavbar.js";
import menu from "./modules/menu.js";
import navbar from "./modules/navbar.js";
import animations from "./modules/animations.js";

function init() {
    navbar();
    expandNavbar();
    menu();
    animations();
}
window.addEventListener("load", init);