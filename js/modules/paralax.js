var itemTrs = false;

export default function paralax() {
  const logoTitle = document.querySelector(".homepage-logo > div");
  const logo = document.querySelector(".homepage-logo > img");
  const menuItems = document.querySelectorAll(".menu-item");
  const menu = document.querySelector(".menu");
  const distance = window.pageYOffset;

  logoTitle.style.transform = `translateY(${distance * 0.5}px)`;
  logo.style.transform = `translateY(${distance * 0.7}px)`;

  menuItems.forEach((i) => {
    menu.style.transform = `translateX(${distance * -1}px)`;

    // if (menuItems[0].getBoundingClientRect().left - menu.getBoundingClientRect().left >= 0) {
    //   itemTrs = i.style.transform;
    // }
    // i.style.transform = itemTrs;
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
