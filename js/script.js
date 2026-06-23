/* =========================================================
   AHMAD QAYYUM — PORTFOLIO SCRIPT
   Three small, independent features, each wrapped so one
   failing feature can't break the others. Safe to delete
   any block you don't want.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1. Typing effect in the hero subtitle ---------- */
  try {
    var roles = [
      "Software Developer",
      "AI & Automation Enthusiast",
      "SEO Strategist",
      "Freelance Problem-Solver"
    ];
    var roleEl = document.getElementById("hero-role-text");

    if (roleEl && !reduceMotion) {
      var roleIndex = 0;
      var charIndex = 0;
      var deleting = false;

      (function typeLoop() {
        var word = roles[roleIndex];
        charIndex += deleting ? -1 : 1;
        roleEl.textContent = word.slice(0, charIndex);

        var delay = deleting ? 40 : 70;

        if (!deleting && charIndex === word.length) {
          deleting = true;
          delay = 1400;
        } else if (deleting && charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          delay = 300;
        }
        setTimeout(typeLoop, delay);
      })();
    }
  } catch (e) { /* hero text already has a static fallback in the HTML */ }

  /* ---------- 2. Scroll-spy for the left nav rail ---------- */
  try {
    var sections = document.querySelectorAll("main section[id]");
    var railLinks = document.querySelectorAll(".rail-nav a");

    if (sections.length && railLinks.length && "IntersectionObserver" in window) {
      var spy = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              railLinks.forEach(function (link) {
                var match = link.getAttribute("href") === "#" + entry.target.id;
                link.classList.toggle("active", match);
              });
            }
          });
        },
        { rootMargin: "-40% 0px -50% 0px" }
      );
      sections.forEach(function (section) { spy.observe(section); });
    }
  } catch (e) { /* nav still works without highlighting */ }

  /* ---------- 3. Mobile menu toggle ---------- */
  try {
    var menuToggle = document.getElementById("menu-toggle");
    var mobileNav = document.getElementById("mobile-nav");
    var mobileClose = document.getElementById("mobile-close");

    function closeMenu() {
      if (mobileNav) mobileNav.classList.remove("open");
    }

    if (menuToggle && mobileNav) {
      menuToggle.addEventListener("click", function () { mobileNav.classList.add("open"); });
    }
    if (mobileClose) mobileClose.addEventListener("click", closeMenu);
    if (mobileNav) {
      var navLinks = mobileNav.querySelectorAll("a");
      navLinks.forEach(function (a) { a.addEventListener("click", closeMenu); });
    }
  } catch (e) { /* menu items still work as plain anchor links */ }

  /* ---------- 4. Footer year, auto-updates ---------- */
  try {
    var yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  } catch (e) { /* static year in HTML still shows */ }
});
