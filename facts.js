    const tooltipWrapper = document.querySelector('.nerdy-tooltip-wrapper');

    tooltipWrapper.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('tooltip-active');
    });

    document.addEventListener('click', function() {
        tooltipWrapper.classList.remove('tooltip-active');
    });