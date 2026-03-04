let tooltipJustToggled = false;

document.querySelectorAll('.nerdy-tooltip-wrapper').forEach(wrapper => {

    // Handle touch (Android + iOS)
    wrapper.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        tooltipJustToggled = true;

        const isOpen = this.classList.contains('tooltip-active');

        document.querySelectorAll('.nerdy-tooltip-wrapper').forEach(w => {
            w.classList.remove('tooltip-active');
            w.classList.remove('force-closed');
        });

        if (!isOpen) {
            this.classList.add('tooltip-active');
        }

        this.querySelectorAll('img').forEach(img => {
            img.style.animation = 'none';
        });

        setTimeout(() => { tooltipJustToggled = false; }, 300);
    });

    // Handle click (desktop)
    wrapper.addEventListener('click', function(e) {
        if (tooltipJustToggled) return;
        e.stopPropagation();
        const isOpen = this.classList.contains('tooltip-active');

        document.querySelectorAll('.nerdy-tooltip-wrapper').forEach(w => {
            w.classList.remove('tooltip-active');
            w.classList.remove('force-closed');
        });

        if (!isOpen) {
            this.classList.add('tooltip-active');
        } else {
            this.classList.add('force-closed');
        }

        this.querySelectorAll('img').forEach(img => {
            img.style.animation = 'none';
        });
    });
});

// Close when touching outside (mobile)
document.addEventListener('touchend', function(e) {
    if (tooltipJustToggled) return;
    if (!e.target.closest('.nerdy-tooltip-wrapper')) {
        document.querySelectorAll('.nerdy-tooltip-wrapper').forEach(w => {
            w.classList.remove('tooltip-active');
            w.classList.remove('force-closed');
        });
    }
});

// Close when clicking outside (desktop)
document.addEventListener('click', function(e) {
    if (!e.target.closest('.nerdy-tooltip-wrapper')) {
        document.querySelectorAll('.nerdy-tooltip-wrapper').forEach(w => {
            w.classList.remove('tooltip-active');
            w.classList.remove('force-closed');
        });
    }
});

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