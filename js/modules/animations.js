export default function animations() {
    const distance = window.pageYOffset,
        logoTitle = document.querySelector(".homepage-logo > div"),
        logo = document.querySelector(".homepage-logo > img"),
        homepageImgs = document.querySelectorAll(".homepage-img-ul a"),
        fork = document.querySelector("#about img"),
        slideUpElements = document.querySelectorAll("[data-aos='slide-up']"),
        slideRightElements = document.querySelectorAll("[data-aos='slide-in-right']"),
        slideLeftElements = document.querySelectorAll("[data-aos='slide-in-left']");

    const inView = (el, dividend = 1) => {
        const top = el.getBoundingClientRect().top;

        return top <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
    };

    const outofView = (el) => {
        const top = el.getBoundingClientRect().top;

        return top > (window.innerHeight || document.documentElement.clientHeight);
    };

    // Homepage Paralax

    logoTitle.style.transform = `translateY(${distance * 0.5}px)`;
    logo.style.transform = `translateY(${distance * 0.6}px)`;

    homepageImgs.forEach((i) => {
        const speed = i.getAttribute("data-speed");
        i.style.transform = `translateY(${distance * speed}px)`;
    });

    // Fork animation

    if (inView(fork, 1.2)) {
        fork.classList.add("fork-animation");
    } else if (outofView(fork)) {
        fork.classList.remove("fork-animation");
    }

    // Slide right animations

    slideRightElements.forEach((i) => {
        if (inView(i)) {
            i.classList.add("slide-in-right");
        } else if (outofView(i)) {
            i.classList.remove("slide-in-right");
        }
    });

    // Slide left animations

    slideLeftElements.forEach((i) => {
        if (inView(i)) {
            i.classList.add("slide-in-left");
        } else if (outofView(i)) {
            i.classList.remove("slide-in-left");
        }
    });

    // Slide up animations

    slideUpElements.forEach((i) => {
        if (inView(i)) {
            i.classList.add("slide-up");
        } else if (outofView(i)) {
            i.classList.remove("slide-up");
        }
    });
}

if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
} else {
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    };
}

window.addEventListener("scroll", animations, false);