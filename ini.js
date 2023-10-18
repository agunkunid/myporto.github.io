function setupSlider(cardElement) {
  const slides = cardElement.querySelector('.slides');
  let index = 0;

  function nextSlide() {
    index = (index + 1) % slides.children.length;
    updateSlide();
  }

  function updateSlide() {
    slides.style.transform = `translateX(${-index * 100}%)`;
  }

  setInterval(nextSlide, 3000); // Ganti gambar setiap 3 detik (3000 milidetik)
}

// Panggil setupSlider untuk setiap card
const cards = document.querySelectorAll('.card');
cards.forEach((card) => setupSlider(card));
