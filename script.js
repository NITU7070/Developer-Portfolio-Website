document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 15px rgba(2, 12, 27, 0.7)';
        } else {
            header.style.boxShadow = 'none';
        }
    };

    window.addEventListener('scroll', handleScroll);
});