var itemTrs = false;
export default function paralax() {
  const distance = window.pageYOffset,
    logoTitle = document.querySelector(".homepage-logo > div"),
    logo = document.querySelector(".homepage-logo > img"),
    menuLi = document.querySelector(".menu ul"),
    homepageImgs = document.querySelectorAll(".homepage-img-ul li");

  logoTitle.style.transform = `translateY(${distance * 0.5}px)`;
  logo.style.transform = `translateY(${distance * 0.6}px)`;

  homepageImgs.forEach((i) => {
    const speed = i.getAttribute("data-speed");
    i.style.transform = `translateY(${distance * speed}px)`;
  });
}
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

window.addEventListener("scroll", paralax, false);
