let currentIndex = 0;
const images = [
    '../img/gal1.png',
    '../img/gal2.png',
    '../img/gal3.JPG',
    '../img/gal4.png',
    '../img/gal5.png'
];

function openModal(image) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "flex"; // Убедитесь, что модальное окно отображается как flex
    modalImg.src = image; // Устанавливаем источник изображения в модальном окне
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Скрываем модальное окно
}

function moveGallery(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    const modalImg = document.getElementById("modal-img");
    modalImg.src = images[currentIndex];
}

// Пример функции для инициализации галереи
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index; // Устанавливаем текущий индекс нажатого изображения
            openModal(images[currentIndex]);
        });
    });
}

// Вызов функции инициализации галереи при загрузке страницы
document.addEventListener('DOMContentLoaded', initGallery);


