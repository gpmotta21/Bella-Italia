import expandNavbar from "./modules/expandNavbar.js";
import navbar from "./modules/navbar.js";
import paralax from "./modules/paralax.js";

function init() {
  navbar();
  paralax();
  expandNavbar();
}
window.addEventListener("load", init);
