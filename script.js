function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// Close sidebar when a link is clicked (mobile only)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 700) {
        document.getElementById("sidebar").classList.remove("active");
      }
    });
  });
});
