const carouselTracker = document.querySelector("#carousel ul"),
  carouselItems = Array.from(carouselTracker.children),
  carouselItemWidth = carouselItems[0].getBoundingClientRect().width,
  dotsNav = document.querySelector("#carouselDots"),
  dots = Array.from(dotsNav.children),
  prevBtn = document.querySelector("#prev"),
  nextBtn = document.querySelector("#next"),
  homepageImg = document.querySelectorAll(".homepage-img-ul li");

export default function menu() {
  // Seperate Carousel items using position absolute left
  carouselItems.forEach((i, index) => {
    i.style.left = carouselItemWidth * index + "px";
  });

  function handleCarousel(currentSlide, targetSlide, targetDot, targetIndex) {
    // Carousel movement.

    // Handle which direction the Carousel Tracker will move using the targetSlide left position
    carouselTracker.style.transform = `translateX(-${targetSlide.style.left})`;

    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");

    document.querySelector(".current-dot").classList.remove("current-dot");
    targetDot.classList.add("current-dot");

    if (targetIndex == 0) {
      prevBtn.classList.add("disable-btn");
      nextBtn.classList.remove("disable-btn");
    } else if (targetIndex == carouselItems.length - 1) {
      prevBtn.classList.remove("disable-btn");
      nextBtn.classList.add("disable-btn");
    } else {
      nextBtn.classList.remove("disable-btn");
      prevBtn.classList.remove("disable-btn");
    }
  }

  // Will handle both dot and the homepage img anchors navigation
  function directionalNavigation(index) {
    const currentSlide = document.querySelector(".current-slide"),
      targetDot = dots[index],
      targetSlide = carouselItems[index],
      targetIndex = index;

    if (carouselItems[index]) {
      handleCarousel(currentSlide, targetSlide, targetDot, targetIndex);
    }
  }

  dots.forEach((i, index) => {
    i.addEventListener("click", () => {
      directionalNavigation(index);
    });
  });

  homepageImg.forEach((i, index) => {
    i.addEventListener("click", () => {
      directionalNavigation(index);
    });
  });

  nextBtn.addEventListener("click", () => {
    const currentSlide = document.querySelector(".current-slide"),
      nextSlide = currentSlide.nextElementSibling,
      slideIndex = carouselItems.findIndex((item) => item === nextSlide),
      targetDot = dots[slideIndex];

    if (nextSlide) {
      handleCarousel(currentSlide, nextSlide, targetDot, slideIndex);
    }
  });

  prevBtn.addEventListener("click", () => {
    const currentSlide = document.querySelector(".current-slide"),
      prevSlide = currentSlide.previousElementSibling,
      slideIndex = carouselItems.findIndex((item) => item === prevSlide),
      targetDot = dots[slideIndex];

    if (prevSlide) {
      handleCarousel(currentSlide, prevSlide, targetDot, slideIndex);
    }
  });
}
