    const tooltipWrapper = document.querySelector('.nerdy-tooltip-wrapper');

    tooltipWrapper.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('tooltip-active');
    });

    document.addEventListener('click', function() {
        tooltipWrapper.classList.remove('tooltip-active');
    });

    // scrolling

function checkNerdyBitsVisibility() {
    const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

    const nerdybits1 = document.querySelector('.nerdybits1');
    const nerdybits2 = document.querySelector('.nerdybits2');
    const rect1 = nerdybits1.getBoundingClientRect();

    if (rect1.top < window.innerHeight * 0.50) {
        nerdybits1.classList.add('nerdy-visible');
    }

    if (scrolled >= 0.30) {
        nerdybits2.classList.add('nerdy-visible');
    }
}

window.addEventListener('scroll', checkNerdyBitsVisibility);
checkNerdyBitsVisibility();