// Mobile menu + active-section highlighting. No dependencies.
(function () {
    var toggle = document.querySelector('.nav-toggle');
    var links = document.getElementById('nav-links');

    if (toggle && links) {
        toggle.addEventListener('click', function () {
            var open = links.classList.toggle('open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        links.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') {
                links.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    if (!('IntersectionObserver' in window)) return;

    var navMap = {};
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (a) {
        navMap[a.getAttribute('href').slice(1)] = a;
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            Object.keys(navMap).forEach(function (id) { navMap[id].classList.remove('active'); });
            var link = navMap[entry.target.id];
            if (link) link.classList.add('active');
        });
    }, { rootMargin: '-45% 0px -50% 0px' });

    document.querySelectorAll('main section[id]').forEach(function (s) { observer.observe(s); });
})();
