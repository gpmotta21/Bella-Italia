export default function navbar() {
  const distance = window.scrollY,
    header = document.querySelector("header"),
    logoTitle = document.querySelector(".homepage-logo > div").getBoundingClientRect();

  if (logoTitle.top <= header.clientHeight) {
    header.classList.add("change-color");
  } else {
    header.classList.remove("change-color");
  }
}

window.addEventListener("scroll", navbar);
