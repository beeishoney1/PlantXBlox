function toggleMenu() {
    const navItems = document.getElementById('nav-items');
    if (!navItems) {
        console.error("Error: .nav-items element not found. Check if id='nav-items' is set in the HTML.");
        return;
    }
    if (window.innerWidth <= 768) {
        navItems.classList.toggle('active');
        console.log("Toggled .active class. Current state:", navItems.classList.contains('active') ? "Visible" : "Hidden");
    }
}

window.addEventListener('resize', () => {
    const navItems = document.getElementById('nav-items');
    if (navItems) {
        if (window.innerWidth > 768) {
            navItems.classList.remove('active');
            navItems.style.display = 'flex'; // Force display on larger screens
            console.log("Removed .active class and set display: flex on resize (screen > 768px)");
        } else {
            navItems.style.display = ''; // Reset display to CSS control on mobile
        }
    }
});

// Ensure initial state on page load
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.getElementById('nav-items');
    if (navItems && window.innerWidth > 768) {
        navItems.style.display = 'flex'; // Force display on larger screens
        console.log("Set display: flex on page load (screen > 768px)");
    }

    const stockElements = document.querySelectorAll('.onstock');
    stockElements.forEach(element => {
        const stockText = element.textContent.match(/\d+/);
        const stockValue = stockText ? parseInt(stockText[0]) : 0;
        element.setAttribute('data-stock', stockValue);
    });
});

particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: ['#00d4ff', '#9333ea'] },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#00d4ff', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});