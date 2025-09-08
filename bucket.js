document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(".bucket-list input[type='checkbox']");

  // Load saved progress
  checkboxes.forEach((box) => {
    const saved = localStorage.getItem(box.id);
    if (saved === "true") {
      box.checked = true;
    }

    // When checkbox changes
    box.addEventListener("change", () => {
      localStorage.setItem(box.id, box.checked);

      if (box.checked) {
        spawnHeart(box.parentElement);
      }
    });
  });
});

// Spawn a floating heart
function spawnHeart(parent) {
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.innerHTML = "💙"; 
  parent.appendChild(heart);

  // Random horizontal offset
  heart.style.left = Math.random() * 40 + "px";

  // Remove after animation
  setTimeout(() => {
    heart.remove();
  }, 1200);
}
