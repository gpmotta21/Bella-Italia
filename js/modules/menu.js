const slideTracker = document.querySelector("#menu-slides"),
    slideItems = Array.from(slideTracker.children),
    slideItemWidth = slideItems[0].getBoundingClientRect().width,
    dots = document.querySelectorAll("#menu-nav div button"),
    homepageImg = document.querySelectorAll(".homepage-img-ul a"),
    prev = document.querySelector("#prev"),
    next = document.querySelector("#next");

export default function menu() {
    // Seperate Carousel items using position absolute left
    slideItems.forEach((i, index) => {
        i.style.left = slideItemWidth * index + "px";
    });

    // Carousel movement.
    function handleCarousel(currentSlide, targetSlide, targetDot, targetIndex) {
        // Handle which direction the Carousel Tracker will move using the targetSlide left position
        slideTracker.style.transform = `translateX(-${targetSlide.style.left})`;

        currentSlide.classList.remove("current-slide");
        targetSlide.classList.add("current-slide");

        document.querySelector(".current-menu").classList.remove("current-menu");
        targetDot.classList.add("current-menu");

        disableBtn();
    }

    // Will handle both dot and the homepage img navigation
    function directionalNavigation(index) {
        const currentSlide = document.querySelector(".current-slide"),
            targetDot = dots[index],
            targetSlide = slideItems[index],
            targetIndex = index;
        if (slideItems[index]) {
            handleCarousel(currentSlide, targetSlide, targetDot, targetIndex);
        }
    }

    // Dots navigation ('Pizza, Pasta and Dessert buttons on menu navbar)

    dots.forEach((i, index) => {
        i.addEventListener("click", () => {
            directionalNavigation(index);
        });
    });

    // Homepage navigation ('homepage image cards')

    homepageImg.forEach((i, index) => {
        i.addEventListener("click", () => {
            directionalNavigation(index);
        });
    });

    // Previous and Next buttons navigation

    next.addEventListener("click", () => {
        const currentSlide = document.querySelector(".current-slide .food-list");
        currentSlide.scrollLeft += currentSlide.offsetWidth;
    });

    prev.addEventListener("click", () => {
        const currentSlide = document.querySelector(".current-slide .food-list");
        currentSlide.scrollLeft -= currentSlide.offsetWidth;
    });

    const disableBtn = () => {
        const foodList = document.querySelector(".current-slide .food-list");
        const { scrollWidth, scrollLeft, clientWidth } = foodList;

        // Set the disabled class when the food category changes

        scrollLeft == 0 ? prev.classList.add("disable") : prev.classList.remove("disable");
        if (Math.round(scrollLeft + clientWidth) == scrollWidth) {
            next.classList.add("disable");
        } else {
            next.classList.remove("disable");
        }

        foodList.addEventListener("scroll", () => {
            // Set the disabled class when the items are scrolled

            const { scrollWidth, scrollLeft, clientWidth } = foodList;

            scrollLeft == 0 ? prev.classList.add("disable") : prev.classList.remove("disable");

            if (Math.round(scrollLeft + clientWidth) == scrollWidth) {
                next.classList.add("disable");
            } else {
                next.classList.remove("disable");
            }
        });
    };

    disableBtn();
}