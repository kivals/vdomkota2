document.addEventListener("DOMContentLoaded", ready);

function ready() {
    const showMoreButton = document.querySelector('.about-host-text__button');
    if (showMoreButton) {
        showMoreButton.addEventListener('click', (e) => {
            e.preventDefault();
            const hiddenElement = document.querySelector('.about-host-text__text.about-host-text__text_hidden');
            e.target.innerHTML = hiddenElement.classList.contains('show') ? 'Показать еще...' : 'Скрыть';
            hiddenElement.classList.toggle('show');
        });
    }

    /**
     * Показать анимационное увеличивающиеся числовое значение в элементе
     * @param el элемент для рендера числа
     * @param time общее время анимации
     * @param step шаг увеличения
     */
    function renderDigitAnimation(el, time, step) {
        const targetDigit = Number(el.innerHTML);
        const delay = Math.round(time / (targetDigit / step));
        let digit = 0;
        const interval = setInterval(() => {
            digit = digit + step;
            if ( digit >= targetDigit ) {
                clearInterval(interval);
                el.innerHTML = targetDigit;
                return;
            }
            el.innerHTML = digit;
        }, delay)
    }

    /**
     * Слушатель события появления элементов
     * @param entries массив слушаемых элементов
     * @param observer слушатель
     */
    function onEntries (entries, observer) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            // Отключаем слушателя после первого срабатывания
            observer.unobserve(entry.target);
            renderDigitAnimation(entry.target, 1000, 2);
        });
    }

    let observer = new IntersectionObserver(onEntries);

    // Список Dom элементов для анимации
    const digitNodes = document.querySelectorAll('.item-count__digit');
    // Вешаем слушателя на каждый элемент
    digitNodes.forEach(node => observer.observe(node))

    const routeLinks = document.querySelectorAll('.menu__link');
    Array.from(routeLinks).forEach(link => {
        const linkUrl = new URL(link.href);
        if (linkUrl.pathname === document.location.pathname && !linkUrl.hash) {
            link.classList.add('_active');
        }
    });
}
