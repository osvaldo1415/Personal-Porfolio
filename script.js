// Initialize Animate On Scroll (AOS)
AOS.init({
    duration: 1200, // Animation duration in milliseconds
    once: true,     // Whether animation should happen only once while scrolling down
});

// Hamburger Menu Logic
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Add event listener to hamburger icon
document.querySelector('.hamburger-icon').addEventListener('click', toggleMenu);

// Also close the menu when a link inside it is clicked (Better UX)
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', toggleMenu);
});


// Typed.js Initialization
const typedElement = document.querySelector('.typed');
if (typedElement) {
    const typedStrings = typedElement.getAttribute('data-typed-items').split(',');
    new Typed('.typed', {
        strings: typedStrings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

// Button Handling (Download CV)
document.getElementById('btn-download-cv').addEventListener('click', () => {
    window.open('./assets/resume.pdf');
});

// Button Handling (Contact Info)
document.getElementById('btn-contact-info').addEventListener('click', () => {
    location.href = '#contact';
});

// Handling Social Icons & Project Buttons (using data-url attribute)
const urlButtons = document.querySelectorAll('.social-icon, .project-btn');

urlButtons.forEach(button => {
    button.addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank'); // Opens in new tab
        } else {
            console.warn("No URL defined for this button");
        }
    });
});

// Dynamic Copyright Year
document.getElementById('copyright-year').textContent = new Date().getFullYear();
