let elementAutoHidded = document.querySelector('.autohide');
let navbarHeight = document.querySelector('.navbar').offsetHeight;
document.body.style.paddingTop = navbarHeight + 'px';
if (elementAutoHidded) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            elementAutoHidded.hidden = false;
            if (window.scrollY > 300) {
                elementAutoHidded.classList.remove('scrolled-down');
                elementAutoHidded.classList.add('scrolled-up');
            }
        } else {
            elementAutoHidded.classList.remove('scrolled-up');
            elementAutoHidded.classList.add('scrolled-down');
            elementAutoHidded.hidden = true;
        }
    });
}