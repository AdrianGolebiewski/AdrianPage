///w tym momencie nasłuchujemy
document.addEventListener('DOMContentLoaded', function() {

    const nav = document.querySelector('.navbar')

    function adShadow() {
        if (window.scroll >= 300) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }
    window.addEventListener('scroll')
});