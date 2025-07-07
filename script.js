document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  themeToggle.addEventListener("change", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
  });

  // Apply saved theme on reload
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.remove("light", "dark");
    body.classList.add(savedTheme);
    themeToggle.checked = savedTheme === "dark";
  }

  // Animate progress bars
  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach(bar => {
    const percent = bar.getAttribute("data-percent");
    bar.style.width = percent + "%";
  });
});
