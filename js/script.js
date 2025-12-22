
// ========== DARK MODE TOGGLE ==========
const themeToggleBtn = document.getElementById("theme-toggle");
const icon = themeToggleBtn ? themeToggleBtn.querySelector("i") : null;
const html = document.documentElement;

// Load theme from localStorage (safe)
try {
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    if (icon) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  } else {
    html.classList.remove("dark");
    if (icon) {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  }
} catch (e) {
  // localStorage may be unavailable in some privacy modes — fail silently
}

// Toggle on click (guarded)
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    html.classList.toggle("dark");
    const isDark = html.classList.contains("dark");

    // Icon toggle
    if (icon) {
      icon.classList.toggle("fa-moon", !isDark);
      icon.classList.toggle("fa-sun", isDark);
    }

    // Save preference (safe)
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {
      // ignore
    }
  });
}


// ========== MOBILE MENU ==========
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

// Show menu on button click (guarded)
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("right-[-100%]");
    mobileMenu.classList.add("right-0");
  });

  // Close menu on close button click
  if (closeMenu) {
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.add("right-[-100%]");
      mobileMenu.classList.remove("right-0");
    });
  }

  // Close menu when any link is clicked
  const menuLinks = mobileMenu.querySelectorAll("a");
  if (menuLinks && menuLinks.length) {
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("right-[-100%]");
        mobileMenu.classList.remove("right-0");
      });
    });
  }
}


// ========== ANIMATIONS ==========
// Run entry animation only if anime.js is present
try {
  if (typeof window.anime === 'function') {
    window.anime({
      targets: "nav",
      opacity: [0, 1],
      translateY: [-30, 0],
      duration: 1000,
      easing: "easeOutExpo"
    });
  }
} catch (e) {
  // silently ignore if anime is not available or if the call fails
}





 