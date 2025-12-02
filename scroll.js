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