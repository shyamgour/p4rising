// Hamburger menu (if needed for mobile)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.getElementById('main-nav');
if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
}

// Hero slideshow
const slides = document.querySelectorAll('.hero-slideshow .slide');
let currentSlide = 0;
if (slides.length > 0) {
    slides[0].classList.add('active');
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 3500);
}