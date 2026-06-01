(function () {
    'use strict';

    /* --- Mobile navigation -------------------------------- */
    var navToggle = document.getElementById('navToggle');
    var navMobile = document.getElementById('navMobile');

    if (navToggle && navMobile) {
        navToggle.addEventListener('click', function () {
            navToggle.classList.toggle('open');
            navMobile.classList.toggle('open');
        });
        navMobile.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navToggle.classList.remove('open');
                navMobile.classList.remove('open');
            });
        });
    }

    /* --- Sticky nav shadow on scroll ---------------------- */
    var nav = document.getElementById('nav');
    if (nav) {
        var setScrolled = function () {
            nav.classList.toggle('scrolled', window.scrollY > 12);
        };
        setScrolled();
        window.addEventListener('scroll', setScrolled, { passive: true });
    }

    /* --- Reveal on scroll --------------------------------- */
    var reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && reveals.length) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        reveals.forEach(function (el) { observer.observe(el); });
    } else {
        reveals.forEach(function (el) { el.classList.add('in'); });
    }

    /* --- FAQ accordion ------------------------------------ */
    document.querySelectorAll('.faq-q').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var item = btn.closest('.faq-item');
            var answer = item.querySelector('.faq-a');
            var isOpen = item.classList.toggle('open');
            answer.style.maxHeight = isOpen ? answer.scrollHeight + 'px' : null;
        });
    });

})();
