document.querySelectorAll('.nerdy-tooltip-wrapper').forEach(wrapper => {
    wrapper.addEventListener('mousedown', function(e) {
        e.stopPropagation();
        const isOpen = this.classList.contains('tooltip-active');

        // Close all first
        document.querySelectorAll('.nerdy-tooltip-wrapper').forEach(w => {
            w.classList.remove('tooltip-active');
        });

        // Toggle: if it was closed, open it
        if (!isOpen) {
            this.classList.add('tooltip-active');
        }

        // Stop pulse animation
        this.querySelectorAll('img').forEach(img => {
            img.style.animation = 'none';
        });
    });

    // Also handle touch for mobile
    wrapper.addEventListener('touchstart', function(e) {
        e.stopPropagation();
        const isOpen = this.classList.contains('tooltip-active');

        document.querySelectorAll('.nerdy-tooltip-wrapper').forEach(w => {
            w.classList.remove('tooltip-active');
        });

        if (!isOpen) {
            this.classList.add('tooltip-active');
        }

        this.querySelectorAll('img').forEach(img => {
            img.style.animation = 'none';
        });
    }, { passive: true });
});

// Close when clicking outside
document.addEventListener('mousedown', function(e) {
    if (!e.target.closest('.nerdy-tooltip-wrapper')) {
        document.querySelectorAll('.nerdy-tooltip-wrapper').forEach(w => {
            w.classList.remove('tooltip-active');
        });
    }
});

document.addEventListener('touchstart', function(e) {
    if (!e.target.closest('.nerdy-tooltip-wrapper')) {
        document.querySelectorAll('.nerdy-tooltip-wrapper').forEach(w => {
            w.classList.remove('tooltip-active');
        });
    }
}, { passive: true });

    // scrolling

function checkNerdyBitsVisibility() {
    const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    const nerdybits1 = document.querySelector('.nerdybits1');
    const nerdybits2 = document.querySelector('.nerdybits2');
    const nerdybits3 = document.querySelector('.nerdybits3');
    const nerdybits4 = document.querySelector('.nerdybits4');
    const rect1 = nerdybits1.getBoundingClientRect();
    const rect3 = nerdybits3.getBoundingClientRect();
    const rect4 = nerdybits4.getBoundingClientRect();

    if (rect1.top < window.innerHeight * 0.50) {
        nerdybits1.classList.add('nerdy-visible');
    }

    if (scrolled >= 0.30) {
        nerdybits2.classList.add('nerdy-visible');
    }

    if (rect3.top < window.innerHeight * 0.85) {
        nerdybits3.classList.add('nerdy-visible');
    }

    if (rect4.top < window.innerHeight * 0.95) {
        nerdybits4.classList.add('nerdy-visible');
    }
}

window.addEventListener('scroll', checkNerdyBitsVisibility);
checkNerdyBitsVisibility();

// scrolling for p

function checkParagraphVisibility() {
    const paragraphs = document.querySelectorAll('p');
    
    paragraphs.forEach(p => {
        const rect = p.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
            p.classList.add('p-visible');
        }
    });
}

window.addEventListener('scroll', checkParagraphVisibility);
checkParagraphVisibility();