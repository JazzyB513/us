// pictures.js

// List of image URLs
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
const imgElement = document.getElementById('carousel-image');

// Function to show image with fade effect
function showImage(index) {
  imgElement.style.opacity = 0; // fade out

  setTimeout(() => {
    imgElement.src = imageUrls[index];
    imgElement.onload = () => {
      imgElement.style.opacity = 1; // fade in
    };
  }, 200); // short delay for fade out
}

// Show next image
function nextImage() {
  currentIndex = (currentIndex + 1) % imageUrls.length;
  showImage(currentIndex);
}

// Show previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
  showImage(currentIndex);
}

// Initialize carousel
showImage(currentIndex);
