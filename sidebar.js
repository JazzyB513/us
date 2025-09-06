// Load sidebar dynamically
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sidebar-container");
  if (container) {
    fetch("sidebar.html")
      .then(response => response.text())
      .then(data => {
        container.innerHTML = data;

        // Sidebar toggle
        window.toggleSidebar = function () {
          document.getElementById("sidebar").classList.toggle("active");
        };

        // Close sidebar on mobile link click
        document.querySelectorAll(".sidebar a").forEach(link => {
          link.addEventListener("click", () => {
            if (window.innerWidth <= 700) {
              document.getElementById("sidebar").classList.remove("active");
            }
          });
        });
      });
  }
});
