export default function paralax() {
    const foodSlider = document.querySelector("#paralaxContainer");
    const img2 = document.querySelector("#paralaxContainer2");
    const distance = window.scrollY;

    foodSlider.style.transform = `translateY(${distance * 0.3}px)`;
    img2.style.transform = `translateY(${distance * 0.5}px)`;

    // if (distance > 0) header.classList.add("darkHeader");
    // else header.classList.remove("darkHeader");
}

if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
} else {
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    };
}
window.addEventListener("scroll", paralax, false);