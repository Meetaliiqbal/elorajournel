document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     ELORA FAVICON
  ===================================================== */

  if (!document.querySelector('link[rel="icon"]')) {
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/svg+xml";
    favicon.href = "data:image/svg+xml," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
        <rect width="64" height="64" rx="16" fill="#10152d"/>
        <text
          x="32"
          y="45"
          text-anchor="middle"
          font-family="Georgia, serif"
          font-size="42"
          fill="#9b7cff">E</text>
        <circle cx="51" cy="13" r="4" fill="#ff7d87"/>
      </svg>
    `);
    document.head.appendChild(favicon);
  }


  /* =====================================================
     HEADER & HAMBURGER STRUCTURE
  ===================================================== */

  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="header-inner">
      <a
        href="index.html"
        class="brand-logo"
        aria-label="Elora Journal Home"
      >
        Elora
        <span>Journal</span>
      </a>

      <button
        class="hamburger-btn"
        aria-label="Toggle navigation menu"
        aria-expanded="false"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        class="header-nav"
        aria-label="Main navigation"
      >
        <a href="index.html">Home</a>
        <a href="quotes.html">Quotes</a>
        <a href="decor.html">Decor</a>
        <a href="fashion.html">Fashion</a>
        <a href="travel.html">Travel</a>
        <a href="culinary.html">Food</a>
        <a href="nature.html">Nature</a>
      </nav>
    </div>
  `;


  /* =====================================================
     HEADER CSS & RESPONSIVE STYLES
  ===================================================== */

  const style = document.createElement("style");
  style.textContent = `
    .site-header,
    .site-header * {
      box-sizing: border-box;
    }

    .site-header {
      position: sticky;
      top: 0;
      z-index: 9999;
      width: 100%;
      background: rgba(245, 245, 251, .95);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border-bottom: 1px solid rgba(220, 221, 234, .85);
    }

    .header-inner {
      width: 100%;
      max-width: 1320px;
      height: 82px;
      margin: 0 auto;
      padding: 0 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
    }

    /* BRAND LOGO */
    .brand-logo {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
      color: #10152d;
      font-family: "Playfair Display", Georgia, serif;
      font-size: 31px;
      font-weight: 500;
      letter-spacing: -1px;
      white-space: nowrap;
      text-decoration: none;
      transition: color .2s ease;
    }

    .brand-logo:hover {
      color: #9b7cff;
    }

    .brand-logo span {
      color: #9b7cff;
      font-family: "DM Sans", Arial, sans-serif;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 2.4px;
      text-transform: uppercase;
    }

    /* HAMBURGER BUTTON (Hidden on Desktop) */
    .hamburger-btn {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 28px;
      height: 20px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      z-index: 1001;
    }

    .hamburger-btn span {
      display: block;
      width: 100%;
      height: 2.5px;
      background: #10152d;
      border-radius: 3px;
      transition: transform 0.3s ease, opacity 0.3s ease, background 0.3s ease;
    }

    /* Hamburger Animation to 'X' */
    .hamburger-btn.active span:nth-child(1) {
      transform: translateY(8.75px) rotate(45deg);
      background: #9b7cff;
    }

    .hamburger-btn.active span:nth-child(2) {
      opacity: 0;
    }

    .hamburger-btn.active span:nth-child(3) {
      transform: translateY(-8.75px) rotate(-45deg);
      background: #9b7cff;
    }

    /* DESKTOP NAVIGATION */
    .header-nav {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 25px;
      color: #565a72;
      font-family: "DM Sans", Arial, sans-serif;
      font-size: 12px;
      font-weight: 600;
      white-space: nowrap;
    }

    .header-nav a {
      position: relative;
      flex-shrink: 0;
      padding: 5px 0;
      color: inherit;
      text-decoration: none;
      transition: color .2s ease;
    }

    .header-nav a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 0;
      height: 2px;
      border-radius: 5px;
      background: #9b7cff;
      transition: width .25s ease;
    }

    .header-nav a:hover {
      color: #9b7cff;
    }

    .header-nav a:hover::after {
      width: 100%;
    }


    /* =================================================
       TABLET STYLES (Max Width: 1000px)
    ================================================= */
    @media (max-width: 1000px) {
      .header-inner {
        padding: 0 25px;
      }
      .header-nav {
        gap: 18px;
      }
    }


    /* =================================================
       MOBILE STYLES (Max Width: 760px)
    ================================================= */
    @media (max-width: 760px) {
      .header-inner {
        height: 72px;
        padding: 0 18px;
      }

      .brand-logo {
        font-size: 24px;
      }

      .brand-logo span {
        display: none;
      }

      .hamburger-btn {
        display: flex;
      }

      /* Hidden by default on mobile */
      .header-nav {
        display: none;
        position: absolute;
        top: 72px;
        left: 0;
        width: 100%;
        background: #f5f5fb;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0;
        padding: 15px 24px 25px;
        border-bottom: 1px solid rgba(220, 221, 234, 0.85);
        box-shadow: 0 10px 25px rgba(16, 21, 45, 0.08);
        z-index: 1000;
      }

      /* Explicitly shown when toggled */
      .header-nav.nav-open {
        display: flex !important;
      }

      .header-nav a {
        width: 100%;
        padding: 12px 0;
        font-size: 14px;
        border-bottom: 1px solid rgba(220, 221, 234, 0.5);
      }

      .header-nav a:last-child {
        border-bottom: none;
      }

      .header-nav a::after {
        display: none;
      }
    }


    /* =================================================
       SMALL MOBILE STYLES (Max Width: 480px)
    ================================================= */
    @media (max-width: 480px) {
      .header-inner {
        padding: 0 14px;
      }
      .brand-logo {
        font-size: 22px;
      }
    }
  `;

  document.head.appendChild(style);
  document.body.prepend(header);


  /* =====================================================
     HAMBURGER INTERACTIVITY SCRIPT
  ===================================================== */

  const hamburgerBtn = header.querySelector(".hamburger-btn");
  const headerNav = header.querySelector(".header-nav");

  hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = hamburgerBtn.classList.toggle("active");
    headerNav.classList.toggle("nav-open");
    hamburgerBtn.setAttribute("aria-expanded", isOpen);
  });

  // Close menu when clicking any link
  headerNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("active");
      headerNav.classList.remove("nav-open");
      hamburgerBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu if clicking outside header
  document.addEventListener("click", (e) => {
    if (!header.contains(e.target)) {
      hamburgerBtn.classList.remove("active");
      headerNav.classList.remove("nav-open");
      hamburgerBtn.setAttribute("aria-expanded", "false");
    }
  });
});