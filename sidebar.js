// sidebar.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sidebar-container");
  if (!container) return; // Skip if page has no sidebar

  fetch("sidebar.html")
    .then(response => response.text())
    .then(data => {
      container.innerHTML = data;

      // Toggle sidebar visibility (for mobile)
      window.toggleSidebar = function() {
        document.getElementById("sidebar").classList.toggle("active");
      };

      // Close sidebar on link click (mobile only)
      document.querySelectorAll(".sidebar a").forEach(link => {
        link.addEventListener("click", () => {
          if (window.innerWidth <= 700) {
            document.getElementById("sidebar").classList.remove("active");
          }
        });
      });
    });
});
