// Behaviour shared by every page: footer year, header state, reveal on scroll, count-up figures,
// language switch and mobile menu. Load it at the end of <body>.
(function () {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const year = document.getElementById('currentYear');
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Solid, blurred header once the page scrolls
    const header = document.querySelector('.site-header');
    if (header) {
        const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
        updateHeader();
        window.addEventListener('scroll', updateHeader, { passive: true });
    }

    // Reveal .fade-in blocks as they enter the viewport. Pages that render blocks later can call
    // window.revealOnScroll(container) to observe them.
    const revealObserver =
        'IntersectionObserver' in window
            ? new IntersectionObserver(
                  (entries, observer) => {
                      entries.forEach((entry) => {
                          if (entry.isIntersecting) {
                              entry.target.classList.add('active');
                              observer.unobserve(entry.target);
                          }
                      });
                  },
                  { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
              )
            : null;
    window.revealOnScroll = (root = document) => {
        root.querySelectorAll('.fade-in:not(.active)').forEach((element) => {
            if (revealObserver) {
                revealObserver.observe(element);
            } else {
                element.classList.add('active');
            }
        });
    };
    window.revealOnScroll();

    // Count impact figures up from zero the first time they are seen, e.g. data-count="100" data-suffix="K+"
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length && revealObserver && !reduceMotion) {
        const countUp = (element) => {
            const target = Number(element.dataset.count);
            const suffix = element.dataset.suffix || '';
            const duration = 1600;
            let start;
            const step = (now) => {
                start = start || now;
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                element.textContent = Math.round(target * eased) + suffix;
                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };
            requestAnimationFrame(step);
        };
        const counterObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        countUp(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.6 }
        );
        counters.forEach((element) => {
            element.setAttribute('aria-label', element.textContent.trim());
            element.textContent = '0' + (element.dataset.suffix || '');
            counterObserver.observe(element);
        });
    }

    // Keep the visitor on the same section when switching language
    document.querySelectorAll('.lang-switch a').forEach((link) => {
        link.addEventListener('click', () => {
            link.hash = window.location.hash;
        });
    });

    // Mobile menu
    const menuButton = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    if (menuButton && menu) {
        const setMenu = (open) => {
            menu.classList.toggle('hidden', !open);
            menuButton.setAttribute('aria-expanded', String(open));
            const icon = menuButton.querySelector('i');
            icon.classList.toggle('fa-bars', !open);
            icon.classList.toggle('fa-times', open);
        };
        menuButton.addEventListener('click', () => setMenu(menu.classList.contains('hidden')));
        menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
    }
})();
