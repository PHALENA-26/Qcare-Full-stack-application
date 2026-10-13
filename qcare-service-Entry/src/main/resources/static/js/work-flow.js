/**
 * Workflow Interactive Carousel Controls
 */
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('flowsWrapper');
    const nextBtn = document.getElementById('flowsNextBtn');
    const prevBtn = document.getElementById('flowsPrevBtn');

    if (!wrapper || !nextBtn) return;

    const scrollAmount = 354; // Width of one card + margin

    nextBtn.addEventListener('click', () => {
        wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        // Toggle Prev/Next visibility based on scroll position
        wrapper.addEventListener('scroll', () => {
            if (wrapper.scrollLeft > 20) {
                prevBtn.style.display = 'flex';
            } else {
                prevBtn.style.display = 'none';
            }
        });
    }

    // Drag to scroll for desktop users
    let isDown = false;
    let startX;
    let scrollLeft;

    wrapper.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - wrapper.offsetLeft;
        scrollLeft = wrapper.scrollLeft;
        wrapper.style.cursor = 'grabbing';
    });

    wrapper.addEventListener('mouseleave', () => {
        isDown = false;
        wrapper.style.cursor = 'grab';
    });

    wrapper.addEventListener('mouseup', () => {
        isDown = false;
        wrapper.style.cursor = 'grab';
    });

    wrapper.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - wrapper.offsetLeft;
        const walk = (x - startX) * 1.5;
        wrapper.scrollLeft = scrollLeft - walk;
    });
});