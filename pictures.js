// pictures.js
document.addEventListener("DOMContentLoaded", () => {
  const imageUrls = [
    "images/IMG_0802.JPG",
    "images/IMG_0994.JPG",
    "images/IMG_1148.JPG",
    "images/IMG_1149.JPG",
    "images/IMG_1344.JPG",
    "images/IMG_1606.JPG",
    "images/IMG_1632.JPG"
  ];

  let currentIndex = 0;
  const imgElement = document.getElementById("carousel-image");

  function showImage(index) {
    imgElement.style.opacity = 0;
    setTimeout(() => {
      imgElement.src = imageUrls[index];
      imgElement.onload = () => {
        imgElement.style.opacity = 1;
      };
    }, 200);
  }

  window.nextImage = function() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    showImage(currentIndex);
  };

  window.prevImage = function() {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    showImage(currentIndex);
  };

  showImage(currentIndex);
});
