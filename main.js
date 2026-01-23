// ==========================================================================
// BUBBLE WORKS - Main JavaScript
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {

    // Video intro is handled by inline script in index.html

    // Header scroll effect
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.querySelector('.nav');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('nav--open');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // Form submission
    const quoteForm = document.getElementById('quoteForm');

    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Show success message
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;

            btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Quote Request Sent!';
            btn.style.background = '#22C55E';
            btn.disabled = true;

            // Reset after 3 seconds
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.disabled = false;
                this.reset();
            }, 3000);

            // Here you would normally send the data to your backend
            console.log('Form submitted:', data);
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.service-card, .pricing-card, .review-card, .badge-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add animate-in styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Phone number click tracking
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', () => {
            console.log('Phone call initiated');
            // Add your analytics tracking here
        });
    });

    // Before/After Comparison Slider
    document.querySelectorAll('.comparison-slider').forEach(slider => {
        const range = slider.querySelector('.comparison-slider__range');
        const beforeDiv = slider.querySelector('.comparison-slider__before');
        const handle = slider.querySelector('.comparison-slider__handle');

        if (range && beforeDiv && handle) {
            // Set initial position
            const updateSlider = (value) => {
                beforeDiv.style.width = value + '%';
                handle.style.left = value + '%';
            };

            // Initialize
            updateSlider(50);

            // Range input handler
            range.addEventListener('input', (e) => {
                updateSlider(e.target.value);
            });

            // Touch and mouse drag support
            let isDragging = false;
            const container = slider.querySelector('.comparison-slider__container');

            const getPositionPercent = (e) => {
                const rect = container.getBoundingClientRect();
                const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
                return Math.max(0, Math.min(100, (x / rect.width) * 100));
            };

            container.addEventListener('mousedown', () => isDragging = true);
            container.addEventListener('touchstart', () => isDragging = true);

            document.addEventListener('mouseup', () => isDragging = false);
            document.addEventListener('touchend', () => isDragging = false);

            container.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                const percent = getPositionPercent(e);
                range.value = percent;
                updateSlider(percent);
            });

            container.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                const percent = getPositionPercent(e);
                range.value = percent;
                updateSlider(percent);
            });

            // Click to jump
            container.addEventListener('click', (e) => {
                const percent = getPositionPercent(e);
                range.value = percent;
                updateSlider(percent);
            });
        }
    });

    // Mobile menu fix for new ID
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            const nav = document.getElementById('nav');
            if (nav) {
                nav.classList.toggle('nav--open');
                mobileMenu.classList.toggle('active');
            }
        });
    }

});
