(function () {
    'use strict';

    // ─────────────────────────────────────────────
    // Mobile menu toggle
    // ─────────────────────────────────────────────
    var navToggle = document.getElementById('navToggle');
    var navMobile = document.getElementById('navMobile');

    if (navToggle && navMobile) {
        navToggle.addEventListener('click', function () {
            navToggle.classList.toggle('open');
            navMobile.classList.toggle('open');
        });
    }

    // ─────────────────────────────────────────────
    // Sticky-nav scroll state
    // ─────────────────────────────────────────────
    var nav = document.getElementById('nav');
    if (nav) {
        var setScrolled = function () {
            if (window.scrollY > 16) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        };
        setScrolled();
        window.addEventListener('scroll', setScrolled, { passive: true });
    }

    // ─────────────────────────────────────────────
    // Reveal-on-scroll for sections (subtle)
    // ─────────────────────────────────────────────
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

        var revealTargets = document.querySelectorAll('.section-head, .tile, .program, .blog-card, .method-list li');
        revealTargets.forEach(function (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
            observer.observe(el);
        });
    }

    // ─────────────────────────────────────────────
    // Close mobile nav on link click
    // ─────────────────────────────────────────────
    if (navMobile) {
        navMobile.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navToggle.classList.remove('open');
                navMobile.classList.remove('open');
            });
        });
    }

})();
