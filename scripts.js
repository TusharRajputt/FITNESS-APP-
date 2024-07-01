// JavaScript code for interactive elements if needed
// Example: Toggle functionality for a menu

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
