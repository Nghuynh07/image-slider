const slideContainer = document.querySelector(".sliders");
const slides = document.querySelectorAll(".slide");
const control = document.querySelector(".control");
const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");
const arrows = document.querySelectorAll(".arrow");
let currentSlide = 1;
let interval;
let isPlay = true;

// const showArrows = () => {
//   if (isPlay) {
//     Array.from(arrows).forEach((arrow) => {
//       arrow.style.cssText = "visibility: hidden; opacity: 0";
//     });
//   }
// };

const showControl = () => {
  if (isPlay) {
    control.innerText = "STOP";
  } else {
    control.innerText = "PLAY";
  }
};

const showSlide = () => {
  if (currentSlide === slides.length) {
    currentSlide = 1;
  } else if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  }

  slides.forEach((slide) => {
    if (slide.classList.contains(`slider-${currentSlide}`)) {
      slide.style.cssText = "visibility: visible; opacity: 1";
    } else {
      slide.style.cssText = "visibility: hidden; opacity: 0";
    }
  });
};

const playSlides = () => {
  if (isPlay) {
    interval = setInterval(() => {
      currentSlide++;
      showSlide();
    }, 2000);
  } else {
    clearInterval(interval);
  }
  showControl();
};

slideContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("control")) {
    isPlay = !isPlay;
    playSlides();
  }
});

rightArrow.addEventListener("click", (e) => {
  clearInterval(interval);
  currentSlide++;
  showSlide();
});

leftArrow.addEventListener("click", (e) => {
  clearInterval(interval);
  currentSlide--;
  showSlide();
});

const allEvents = () => {
  slideContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("control")) {
      isPlay = !isPlay;
      playSlides();
    }
  });

  rightArrow.addEventListener("click", (e) => {
    clearInterval(interval);
    currentSlide++;
    showSlide();
  });

  leftArrow.addEventListener("click", (e) => {
    clearInterval(interval);
    currentSlide--;
    showSlide();
  });
};

// showArrows();
showSlide();
playSlides();
showSlide();
