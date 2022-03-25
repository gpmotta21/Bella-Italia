var itemTrs = false;
export default function paralax() {
  const img2 = document.querySelector("#paralaxContainer2");
  const menuItems = document.querySelectorAll(".menu-item");
  const menu = document.querySelector("#menu");
  const distance = window.pageYOffset;

  img2.style.transform = `translateY(${distance * 0.5}px)`;

  menuItems.forEach((i) => {
    i.style.transform = `translateY(${distance * -1}px)`;

    if (menuItems[0].getBoundingClientRect().top - menu.getBoundingClientRect().top >= 0) {
      itemTrs = i.style.transform;
    }
    i.style.transform = itemTrs;
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
