document.addEventListener('DOMContentLoaded', function () {

    // ===== 1. Navbar Scroll Effect =====
    const nav = document.getElementById('mainNav');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            // User ne scroll kiya hai
            nav.classList.add('scrolled', 'navbar-light');
            nav.classList.remove('navbar-dark');
        } else {
            // User top par hai
            nav.classList.remove('scrolled', 'navbar-light');
            nav.classList.add('navbar-dark');
        }
    });


    // ===== 2. Scroll Reveal Animation =====
    
    // Intersection Observer API ka istemal
    const revealSections = document.querySelectorAll('.reveal-on-scroll');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Agar section screen par aa gaya hai
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Animate hone ke baad observe karna band kar do
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // viewport ke relative
        threshold: 0.1 // 10% dikhne par trigger ho
    });

    // Har reveal-on-scroll section ko observe karo
    revealSections.forEach(section => {
        revealObserver.observe(section);
    });

});