(function () {
    const track = document.querySelector('.logo-track');
    if (!track) return;
     const update = () => {
        const logos = track.querySelectorAll('a');
        const totalWidth = Array.from(logos).reduce(
            (sum, el) => sum + el.getBoundingClientRect().width,
            0
        );
         // Move by half the total width (since you have two sets)
        const translate = -totalWidth / 3;
        track.style.setProperty('--scrollX', `${translate}px`);
         // Optional: keep speed constant (e.g. 120 px/sec)
        const pxPerSec = 120;
        const duration = totalWidth / pxPerSec;
        track.style.setProperty('--duration', `${duration}s`);
    };
     update();
    window.addEventListener('resize', () => {
        clearTimeout(window.__logoResizeTimer);
        window.__logoResizeTimer = setTimeout(update, 200);
    });
})();
