(() => {
  "use strict";
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open", !expanded);
      toggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    }));
  }
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();