/* Shared scroll-reveal utility for History/Theology/Figures. Marks any
   [data-reveal] element as visible once it scrolls into view; the fade/
   slide-up transition itself lives in learning.css. Elements are rendered
   dynamically by each section's own engine (timeline.js/topic.js/figures.js),
   so this runs after a short delay on load to catch content already in the
   DOM, then observes going forward for anything scrolled to later. */

(function () {
    if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('[data-reveal]').forEach(function (el) {
            el.classList.add('is-visible');
        });
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    function observeAll() {
        document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach(function (el) {
            observer.observe(el);
        });
    }

    observeAll();
    // Engine scripts render their content synchronously before this file
    // runs (script order in each page), but observe again shortly after in
    // case anything renders late.
    setTimeout(observeAll, 50);
})();
