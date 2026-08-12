/* Shared mobile nav toggle for every /learning/ page. Previously this logic
   was duplicated inline in ~18 pages, which is how the mobile menu shipped
   without a way to close it except re-tapping the tiny hamburger icon or a
   nav link, on a page (Theology) long enough that this was genuinely hard
   to use. Fix once here instead of in every page. */

(function () {
    var navToggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');
    if (!navToggle || !navLinks) return;

    var backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);

    function openNav() {
        navLinks.classList.add('nav-active');
        navToggle.classList.add('active');
        backdrop.classList.add('nav-backdrop-active');
        document.body.classList.add('nav-open');
    }

    function closeNav() {
        navLinks.classList.remove('nav-active');
        navToggle.classList.remove('active');
        backdrop.classList.remove('nav-backdrop-active');
        document.body.classList.remove('nav-open');
    }

    navToggle.addEventListener('click', function () {
        if (navLinks.classList.contains('nav-active')) {
            closeNav();
        } else {
            openNav();
        }
    });

    backdrop.addEventListener('click', closeNav);

    document.querySelectorAll('.nav-links a').forEach(function (link) {
        link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeNav();
    });
})();
