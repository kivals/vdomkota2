document.addEventListener("DOMContentLoaded", ready);

function ready() {
    const routeLinks = document.querySelectorAll('.menu__link');
    Array.from(routeLinks).forEach(link => {
        const linkUrl = new URL(link.href);
        if (linkUrl.pathname === document.location.pathname && !linkUrl.hash) {
            link.classList.add('_active');
        }
    })
}
