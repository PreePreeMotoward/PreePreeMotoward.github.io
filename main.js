const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-indicators .dot');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
        dots[i].classList.remove('active');
    });
    dots[index].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
    });
});

// Initialize the first slide
showSlide(currentIndex);
let currentSlideIndex = 0;


function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.style.display = (i === currentSlideIndex) ? 'block' : 'none';
        dots[i].classList.toggle('active', i === currentSlideIndex);
    });
}

function moveSlide(n) {
    showSlide(currentSlideIndex += n);
}

function currentSlide(n) {
    showSlide(currentSlideIndex = n - 1);
}

// Job Tips video handling
const videoImages = document.querySelectorAll('.cta-image');
videoImages.forEach(image => {
    image.addEventListener('click', () => {
        const videoUrl = image.getAttribute('data-video-url');
        window.open(videoUrl, '_blank'); // Open video in a new tab
    });
});

// Initialize the first slide
showSlide(currentSlideIndex);