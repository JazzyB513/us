// sidebar.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sidebar-container");
  if (!container) return; // Skip if no sidebar container

  // Load the sidebar HTML
  fetch("sidebar.html")
    .then(response => response.text())
    .then(data => {
      container.innerHTML = data;

      const sidebar = document.getElementById("sidebar");
      const hamburger = container.querySelector(".hamburger");

      // Toggle sidebar on mobile
      if (hamburger) {
        hamburger.addEventListener("click", () => {
          sidebar.classList.toggle("active");
        });
      }

      // Close sidebar when a link is clicked on mobile
      container.querySelectorAll(".sidebar a").forEach(link => {
        link.addEventListener("click", () => {
          if (window.innerWidth <= 700) {
            sidebar.classList.remove("active");
          }
        });
      });
    });
});
