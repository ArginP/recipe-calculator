export const themeSelect = () => {

// --- HTML элементы ---
    const checkbox = document.querySelector('#checkbox');
    const html = document.querySelector('html');

// --- Функция переключения темы ---
    function setTheme(checked)
{
    if (checked) { // выбрана светлая тема
        html.dataset.bsTheme = 'light';
    } else { // выбрана темная тема
        html.dataset.bsTheme = 'dark';
    }
}

// --- Обработчик события переключения чекбокса выбора темы ---
checkbox.addEventListener('change', (e) => {
    setTheme(e.target.checked);
})

setTheme(checkbox.checked); // устанавливает тему при изначальной загрузке страницы
};

export default themeSelect;
