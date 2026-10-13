// Mobile Hamburger Drawer Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileDrawer = document.getElementById('mobileDrawer');

if (mobileMenuToggle && mobileDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
        const isOpen = mobileMenuToggle.classList.toggle('is-active');
        mobileDrawer.classList.toggle('is-open', isOpen);
        mobileMenuToggle.setAttribute('aria-expanded', isOpen);
        mobileDrawer.setAttribute('aria-hidden', !isOpen);
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuToggle.contains(e.target) && !mobileDrawer.contains(e.target)) {
            mobileMenuToggle.classList.remove('is-active');
            mobileDrawer.classList.remove('is-open');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileDrawer.setAttribute('aria-hidden', 'true');
        }
    });

    // Expand chat pill on mobile tap (or trigger chat window)
    const chatPill = document.getElementById('chatStatusPill');
    if (chatPill) {
        chatPill.addEventListener('click', (e) => {
            if (window.innerWidth <= 600) {
                // Toggles expansion or can be linked to your chat modal opener
                chatPill.classList.toggle('is-mobile-expanded');
            }
        });
    }
}