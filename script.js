document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const body = document.body;

    // Menu toggle functionality
    menuToggle.addEventListener('click', function() {
        sideMenu.classList.toggle('expanded');
        body.classList.toggle('menu-open');
    });

    // Trigger sidebar expansion by clicking on the initial sidebar icon
    sideMenu.addEventListener('click', function() {
        if (!sideMenu.classList.contains('expanded')) {
            body.classList.toggle('menu-open');
        }
    });

    // Smooth scroll functionality for side-menu links
    document.querySelectorAll('.side-menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Smooth scroll functionality for the buttons
    document.querySelectorAll('.button-icon[href^="#"], .about-button[href^="#"]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function to add fade-in class
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target); // Remove this line if you want the animation to repeat
            } else {
                entry.target.classList.remove('fade-in-visible'); // Remove this line if you want the animation to repeat
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(el => {
        observer.observe(el);
    });
});
