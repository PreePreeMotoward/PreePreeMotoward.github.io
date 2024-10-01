document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.carousel-indicators button');
    const title = document.getElementById('caption-title');
    const date = document.getElementById('caption-date');
    let currentIndex = 0;

    const captions = [
        { title: "TESDA Taps Davao City PESO for Tech-Voc Day Job Fair", date: "September 11, 2023" },
        { title: "JOB FAIR SUMMARY: MAY", date: "June 29, 2023" },
        { title: "PASIDUNGOG: A TRIBUTE TO CORPORATE SOCIAL RESPONSIBILITY", date: "May 16, 2023" },
        { title: "PESO AND ROTARACT CLUB OF DAVAO CITY TEAM UP FOR EMPLOYMENT", date: "April 13, 2023" },
        { title: "20 APPLICANTS HOTS AT UM JOB FAIR", date: "April 4, 2023" },
        { title: "DAVAO CITY PESO PARTNERS WITH COUNCILOR ENZO VILLAFUERTE FOR A JOB FAIR SERIES IN DISTRICT 3", date: "March 30, 2023" }
    ];

    function updateCaption(index) {
        title.textContent = captions[index].title;
        date.textContent = captions[index].date;
    }

    function showSlide(index) {
        if (index >= slides.length) index = 0;
        if (index < 0) index = slides.length - 1;

        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });

        updateCaption(index);
        currentIndex = index;
    }

    function startAutoplay() {
        let nextIndex = currentIndex + 1;

        setInterval(() => {
            showSlide(nextIndex);
            nextIndex++;
            if (nextIndex >= slides.length) {
                nextIndex = 0;
            }
        }, 5000); // Change the interval here (5000 ms = 5 seconds)
    }

    document.querySelector('.carousel-control-prev').addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    document.querySelector('.carousel-control-next').addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlide(i);
        });
    });

    showSlide(currentIndex);
    startAutoplay(); // Start autoplay for the carousel

    // Job Tips video handling
    const videoImages = document.querySelectorAll('.cta-image');
    videoImages.forEach(image => {
        image.addEventListener('click', () => {
            const videoUrl = image.getAttribute('data-video-url');
            window.open(videoUrl, '_blank');
        });
    });
});
