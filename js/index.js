import expandNavbar from "./modules/expandNavbar.js";
import menu from "./modules/menu.js";
import navbar from "./modules/navbar.js";
import paralax from "./modules/paralax.js";

function init() {
  navbar();
  paralax();
  expandNavbar();
  menu();
}
window.addEventListener("load", init);
