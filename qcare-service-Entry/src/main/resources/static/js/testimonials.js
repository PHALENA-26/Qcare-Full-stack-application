document.addEventListener('DOMContentLoaded', () => {
    const trackTop = document.getElementById('trackTop');
    const trackBottom = document.getElementById('trackBottom');
    const prevBtn = document.getElementById('testiPrevBtn');
    const nextBtn = document.getElementById('testiNextBtn');
    const viewport = document.getElementById('testiViewport');

    // 1. Duplicate cards to guarantee seamless infinite scrolling
    if (trackTop && trackBottom) {
        trackTop.innerHTML += trackTop.innerHTML;
        trackBottom.innerHTML += trackBottom.innerHTML;
    }

    // 2. Carousel Arrow Steppers
    if (prevBtn && nextBtn && viewport) {
        prevBtn.addEventListener('click', () => {
            shiftTracks(360);
        });

        nextBtn.addEventListener('click', () => {
            shiftTracks(-360);
        });
    }

    function shiftTracks(offset) {
        if (!trackTop || !trackBottom) return;

        // Temporarily pause animation and apply scroll nudge
        trackTop.style.animationPlayState = 'paused';
        trackBottom.style.animationPlayState = 'paused';

        trackTop.style.transition = 'transform 0.4s ease';
        trackBottom.style.transition = 'transform 0.4s ease';

        const currentTopX = getTranslateX(trackTop);
        const currentBottomX = getTranslateX(trackBottom);

        trackTop.style.transform = `translateX(${currentTopX + offset}px)`;
        trackBottom.style.transform = `translateX(${currentBottomX - offset}px)`;

        // Resume continuous marquee after brief delay
        setTimeout(() => {
            trackTop.style.transition = '';
            trackBottom.style.transition = '';
            trackTop.style.animationPlayState = 'running';
            trackBottom.style.animationPlayState = 'running';
        }, 1200);
    }

    function getTranslateX(element) {
        const style = window.getComputedStyle(element);
        const matrix = new WebKitCSSMatrix(style.transform);
        return matrix.m41 || 0;
    }
});