// menu.js

document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileOverlay = document.getElementById('mobileOverlay');

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    }

    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (mobileMenuToggle && mobileOverlay && mobileMenu) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
        mobileOverlay.addEventListener('click', closeMobileMenu);

        // Links del menú móvil con scroll suave
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', function (e) {
                const href = this.getAttribute('href');

                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    closeMobileMenu();

                    const target = document.querySelector(href);
                    if (target) {
                        const headerHeight = 80;
                        const elementPosition = target.offsetTop;
                        const offsetPosition = elementPosition - headerHeight;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                } else {
                    closeMobileMenu();
                }
            });
        });

        // Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });
    }
});

  const version = '1.0.4'; // podés cambiarlo a mano en cada release

  document.querySelectorAll('script[src], link[rel="stylesheet"]').forEach(el => {
    if (el.tagName === 'SCRIPT') {
      el.src = el.src + '?v=' + version;
    } else if (el.tagName === 'LINK') {
      el.href = el.href + '?v=' + version;
    }
  });
