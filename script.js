(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const printBtn = document.getElementById("printBtn");
  const yearEl = document.getElementById("year");

  // Year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme init
  const saved = localStorage.getItem("theme");
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;

  if (saved === "light" || (!saved && prefersLight)) {
    root.setAttribute("data-theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
  }

  function toggleTheme() {
    const current = root.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);

  // Print to PDF
  if (printBtn) printBtn.addEventListener("click", () => window.print());
})();
