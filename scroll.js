document.addEventListener("keydown", function(event) {
    // Проверяем, какая клавиша нажата
    if (event.key === "ArrowDown") {
        // Скроллим вниз на 100px
        window.scrollBy(0, 100);
    } else if (event.key === "ArrowUp") {
        // Скроллим вверх на 100px
        window.scrollBy(0, -100);
    }
});

document.addEventListener("touchstart", function(event) {
    // Определяем область касания для мобильных устройств
    let startY = 0;
    event.preventDefault(); // Отключает прокрутку браузером
    if (event.changedTouches && event.changedTouches[0]) {
        startY = event.changedTouches[0].clientY;
    }

    document.addEventListener("touchend", function(e) {
        if (e.changedTouches && e.changedTouches[0]) {
            let diffY = e.changedTouches[0].clientY - startY;
            if (diffY < -30) {
                window.scrollBy(0, 100); // Вниз
            } else if (diffY > 30) {
                window.scrollBy(0, -100); // Вверх
            }
        }
    }, {once: true});
}, {passive: false});