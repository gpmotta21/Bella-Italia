export default function navbar() {
  const distance = window.scrollY,
    navbar = document.querySelector("header"),
    homepage = document.querySelector("#homepage"),
    text = document.querySelector(".text").getBoundingClientRect();

  if (distance > homepage.clientHeight - navbar.clientHeight || text.top <= navbar.clientHeight) {
    navbar.classList.add("change-color");
  } else {
    navbar.classList.remove("change-color");
  }
}

window.addEventListener("scroll", navbar);
