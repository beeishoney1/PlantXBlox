document.addEventListener('DOMContentLoaded', () => {
   // Initialize particles.js
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

   // Dynamically set stock status and styling for search buttons
   const stockElements = document.querySelectorAll('.stock-status');
   stockElements.forEach(element => {
       const statusText = element.textContent.trim().toLowerCase();
       let statusClass;

       if (statusText === 'available') {
           statusClass = 'available';
       } else if (statusText === 'coming soon') {
           statusClass = 'coming-soon';
           element.closest('div').querySelector('a').classList.add('disabled');
       } else if (statusText === 'out of stock') {
           statusClass = 'outstock';
         //   element.closest('div').querySelector('a').classList.add('disabled');
       }

       element.setAttribute('data-status', statusClass);
   });
});