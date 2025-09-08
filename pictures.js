// pictures.js
document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carousel-track");
  const images = document.querySelectorAll(".carousel-image");
  const prevBtn = document.getElementById("prev-button");
  const nextBtn = document.getElementById("next-button");

  let currentIndex = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });

  // Auto-slide every 5 seconds (optional)
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }, 5000);
});
