let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function moveSlide(n) {
    currentSlide += n;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    const carouselContainer = document.querySelector(".carousel-container");
    carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}
