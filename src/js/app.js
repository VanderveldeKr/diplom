document.addEventListener('DOMContentLoaded', function() {
    // Получаем кнопку "Получить скидку"
    var discountBtn = document.getElementById('discount-btn');
    // Получаем блок "Обратный звонок"
    var backCallBlock = document.querySelector('.back-call');
    // Получаем кнопку внутри блока "Обратный звонок"
    var closeBtn = backCallBlock.querySelector('.back-call__close');

    // Добавляем обработчик клика на кнопку "Получить скидку"
    discountBtn.addEventListener('click', function() {
        // Проверяем, есть ли у блока "Обратный звонок" класс "back-call--active"
        if (!backCallBlock.classList.contains('back-call--active')) {
            // Добавляем класс "back-call--active"
            backCallBlock.classList.add('back-call--active');
        }
    });

    // Добавляем обработчик клика на кнопку "Закрыть"
    closeBtn.addEventListener('click', function() {
        // Проверяем, есть ли у блока "Обратный звонок" класс "back-call--active"
        if (backCallBlock.classList.contains('back-call--active')) {
            // Удаляем класс "back-call--active"
            backCallBlock.classList.remove('back-call--active');
        }
    });
});


