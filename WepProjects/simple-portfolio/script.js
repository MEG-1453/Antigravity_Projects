document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('toggle'); // You can add animation to icon if needed
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Custom Cursor
    const cursorDot = document.querySelector('[data-cursor-dot]');
    // const cursorOutline = document.querySelector('[data-cursor-outline]'); // Removed

    if (cursorDot) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Simple direct follow with small lag can be done via CSS transition or just direct
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
        });

        // Add hover effect for links to expand cursor
        document.querySelectorAll('a, button, .project-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(2.5)';
                cursorDot.style.background = 'rgba(255, 255, 255, 0.1)';
                cursorDot.style.mixBlendMode = 'normal';
            });
            el.addEventListener('mouseleave', () => {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorDot.style.background = 'var(--text-primary)';
                cursorDot.style.mixBlendMode = 'difference';
            });
        });
    }

    // Smooth Scrolling for Anchor Links (Optional if css smooth-scroll isn't enough for some browsers)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
});
