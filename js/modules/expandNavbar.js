const btn = document.querySelector("header i"),
  header = document.querySelector("header ul"),
  main = document.querySelector("main");

export default function expandNavbar() {
  btn.addEventListener("click", (e) => {
    header.classList.toggle("expand");
    btn.classList.toggle("toggleBtn");
  });

  main.addEventListener("click", () => {
    header.classList.remove("expand");
    btn.classList.remove("toggleBtn");
  });
}
