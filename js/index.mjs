import navbar from "./modules/navbar.js";
import paralax from "./modules/paralax.js";

function init() {
  navbar();
  paralax();
}

window.addEventListener("load", init);
