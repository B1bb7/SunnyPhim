document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const progressBar = document.querySelector(".progress-bar");
    let currentIndex = 0;
    let interval;

    const updateSlide = () => {
        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === currentIndex);
        });
        progressBar.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide();
    };

    const playSlides = () => {
        interval = setInterval(nextSlide, 3000);
    };

    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide();
    });
    document.querySelector(".play-pause").addEventListener("click", () => {
        if (interval) {
            clearInterval(interval);
            interval = null;
        } else {
            playSlides();
        }
    });

    playSlides();
});
