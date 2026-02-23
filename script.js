// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add navbar active state on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.12)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
    }
});

// Navbar collapse on link click Mobile 
const navbarCollapse = document.querySelector('.navbar-collapse');
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
        });
        bsCollapse.hide();
    });
});

// Video autoplay on different browsers
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.hero-video');
    if (video) {
        // Ensure video starts playing
        video.play().catch(function(error) {
            console.log('Autoplay was prevented:', error);
            // Fallback if autoplay fails
        });
    }
});

// PRODUCT CARDS

document.addEventListener('DOMContentLoaded', function() {
    const productObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const productObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, productObserverOptions);

    // Observe product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        productObserver.observe(card);
    });
});

// ========================
// PRODUCT CARD HOVER ANIMATION
// ========================

document.querySelectorAll('.product-card').forEach(card => {
    let hoverTimeout;
    
    card.addEventListener('mouseenter', function() {
        clearTimeout(hoverTimeout);
        this.style.animation = 'cardHoverFloat 1.5s ease-in-out infinite';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.animation = 'none';
        this.style.transform = 'translateY(-15px)';
        hoverTimeout = setTimeout(() => {
            this.style.transform = 'translateY(0)';
        }, 300);
    });
});

// ========================
// BUTTON RIPPLE EFFECT
// ========================

document.querySelectorAll('.btn-card').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.transformOrigin = 'center';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ========================
// CTA BUTTONS FUNCTIONALITY
// ========================

const ctaButtons = document.querySelectorAll('.btn-primary-cta, .btn-secondary-cta');
ctaButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const buttonText = this.textContent.trim();
        
        if (buttonText.includes('Inquiry')) {
            console.log('Inquiry button clicked');
            alert('Thank you for your interest! Our team will contact you soon.');
        } else if (buttonText.includes('Call')) {
            console.log('Call button clicked');
            const phoneNumber = '+923214440773';
            window.location.href = `tel:${phoneNumber}`;
        }
    });
});

