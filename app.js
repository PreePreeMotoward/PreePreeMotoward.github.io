document.addEventListener("DOMContentLoaded", function () {
    // Scroll-based Animation Code
    const sections = document.querySelectorAll(".fade-in-section");

    const options = {
        threshold: 0.1
    };
    

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Optional: Stop observing after it's visible
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Carousel Functionality Code
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");

    function moveSlide(n) {
        currentSlide += n;
        
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        
        updateCarousel();
    }

    function currentSlideIndicator(n) {
        currentSlide = n;
        updateCarousel();
    }

    function updateCarousel() {
        const carouselContainer = document.querySelector(".carousel-container");
        carouselContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active dot
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentSlide].classList.add("active");
    }

    // Initialize the carousel with the first slide as active
    updateCarousel();

    // Add click event listeners to each dot
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlideIndicator(index));
    });

    // Add event listeners for carousel navigation buttons (if necessary)
    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));
});
