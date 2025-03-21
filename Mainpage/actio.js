// Toggle menu function
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

// Handle resize events
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.getElementById('nav-items');
    if (navItems && window.innerWidth > 768) {
        navItems.style.display = 'flex'; // Force display on larger screens
        console.log("Set display: flex on page load (screen > 768px)");
    }

    // Extract stock values
    const stockElements = document.querySelectorAll('.onstock');
    stockElements.forEach(element => {
        const stockText = element.textContent.match(/\d+/);
        const stockValue = stockText ? parseInt(stockText[0]) : 0;
        element.setAttribute('data-stock', stockValue);
    });

    // Image zoom functionality
    const zoomableImg = document.querySelector(".zoomable-img");
    const modal = document.getElementById("imageModal");
    const enlargedImg = document.getElementById("enlargedImg");
    const modalClose = document.querySelector(".modal-close");

    if (zoomableImg && modal && enlargedImg && modalClose) {
        // Show modal when image is clicked or touched
        zoomableImg.addEventListener("click", function () {
            enlargedImg.src = zoomableImg.src;
            modal.classList.add("active");
        });

        zoomableImg.addEventListener("touchstart", function () {
            enlargedImg.src = zoomableImg.src;
            modal.classList.add("active");
        });

        // Hide modal when close button is clicked or touched
        modalClose.addEventListener("click", function () {
            modal.classList.remove("active");
        });

        modalClose.addEventListener("touchstart", function () {
            modal.classList.remove("active");
        });

        // Hide modal when clicking/touching outside the image
        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });

        modal.addEventListener("touchstart", function (e) {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });
    } else {
        console.error("❌ Image zoom elements not found!");
    }
});

// Particle effects
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

// Image zoom functionality
const zoomableImgs = document.querySelectorAll(".zoomable-img");
const modal = document.getElementById("imageModal");
const enlargedImg = document.getElementById("enlargedImg");
const modalClose = document.querySelector(".modal-close");

if (zoomableImgs.length > 0 && modal && enlargedImg && modalClose) {
    console.log(`✅ Found ${zoomableImgs.length} zoomable images. Setting up event listeners.`);

    // Loop through all zoomable images and attach event listeners
    zoomableImgs.forEach((zoomableImg, index) => {
        console.log(`Attaching event listeners to image ${index + 1}: ${zoomableImg.src}`);
        // Check if the image has loaded
        if (zoomableImg.complete && zoomableImg.naturalWidth !== 0) {
            console.log(`Image ${index + 1} has loaded successfully.`);
        } else {
            console.warn(`Image ${index + 1} may not have loaded. Checking...`);
            zoomableImg.addEventListener('load', () => {
                console.log(`Image ${index + 1} loaded successfully after delay.`);
            });
            zoomableImg.addEventListener('error', () => {
                console.error(`Image ${index + 1} failed to load: ${zoomableImg.src}`);
            });
        }

        // Show modal when image is clicked
        zoomableImg.addEventListener("click", function () {
            console.log(`Image ${index + 1} clicked! Opening modal.`);
            enlargedImg.src = zoomableImg.src;
            modal.classList.add("active");
        });

        // Show modal when image is touched
        zoomableImg.addEventListener("touchstart", function (e) {
            e.preventDefault();
            console.log(`Image ${index + 1} touched! Opening modal.`);
            enlargedImg.src = zoomableImg.src;
            modal.classList.add("active");
        });
    });

    // Hide modal when close button is clicked or touched
    modalClose.addEventListener("click", function () {
        console.log("Close button clicked! Closing modal.");
        modal.classList.remove("active");
    });

    modalClose.addEventListener("touchstart", function (e) {
        e.preventDefault();
        console.log("Close button touched! Closing modal.");
        modal.classList.remove("active");
    });

    // Hide modal when clicking/touching outside the image
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            console.log("Clicked outside image! Closing modal.");
            modal.classList.remove("active");
        }
    });

    modal.addEventListener("touchstart", function (e) {
        if (e.target === modal) {
            e.preventDefault();
            console.log("Touched outside image! Closing modal.");
            modal.classList.remove("active");
        }
    });
} else {
    console.error("❌ Image zoom elements not found! Check HTML for .zoomable-img, #imageModal, #enlargedImg, and .modal-close.");
    if (zoomableImgs.length === 0) console.error("No zoomable images found");
    if (!modal) console.error("modal not found");
    if (!enlargedImg) console.error("enlargedImg not found");
    if (!modalClose) console.error("modalClose not found");
}