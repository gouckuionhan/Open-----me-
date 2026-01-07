// Находим картинку и блок с текстом
const giftImage = document.getElementById('giftImage');
const message = document.getElementById('message');

// Действие при клике на картинку
giftImage.addEventListener('click', () => {
    message.classList.remove('hidden'); // показать текст
    giftImage.style.display = 'none';   // спрятать картинку
});

