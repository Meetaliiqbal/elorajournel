document.addEventListener("DOMContentLoaded", () => {

  const footer = document.createElement("footer");

  footer.className = "site-footer";

  footer.innerHTML = `

    <div class="footer-inner">

      <!-- BRAND -->

      <div class="footer-brand">

        <a
          href="index.html"
          class="footer-logo"
        >
          Elora
        </a>

        <p class="footer-tagline">
          A journal of things worth noticing.
        </p>

      </div>

      <!-- NAVIGATION -->

      <div class="footer-navigation">

        <div class="footer-column">

          <span class="footer-heading">
            Discover
          </span>

          <a href="quotes.html">
            Quotes
          </a>

          <a href="decor.html">
            Decor
          </a>

          <a href="fashion.html">
            Fashion
          </a>

        </div>

        <div class="footer-column">

          <span class="footer-heading">
            Explore
          </span>

          <a href="travel.html">
            Travel
          </a>

          <a href="culinary.html">
            Food
          </a>

          <a href="nature.html">
            Nature
          </a>

        </div>

        <div class="footer-column">

          <span class="footer-heading">
            Elora
          </span>

          <a href="index.html">
            Home
          </a>

          <a href="privacy.html">
            Privacy
          </a>

          <a href="terms.html">
            Terms of Service
          </a>

          <a href="disclaimer.html">
            Disclaimer
          </a>

        </div>

      </div>

    </div>

    <div class="footer-bottom">

      <span>
        © ${new Date().getFullYear()} Elora Journal
      </span>

      <span>
        Quotes · Decor · Fashion · Travel · Food · Nature
      </span>

    </div>

  `;

  /* =====================================================
     FOOTER CSS
  ===================================================== */

  const style = document.createElement("style");

  style.textContent = `

    .site-footer{
      width: 100%;
      padding: 70px 40px 25px;
      background: #10152d;
      color: #fff;
      border-top: 1px solid rgba(155,124,255,.18);
      box-sizing: border-box;
    }

    .footer-inner{
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1.4fr;
      gap: 80px;
      padding-bottom: 58px;
    }

    /* BRAND */

    .footer-brand{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .footer-logo{
      color: #fff;
      font-family: "Playfair Display", Georgia, serif;
      font-size: 48px;
      font-weight: 400;
      line-height: 1;
      letter-spacing: -2px;
      transition: color .2s ease;
    }

    .footer-logo:hover{
      color: #9b7cff;
    }

    .footer-tagline{
      max-width: 270px;
      margin: 17px 0 0;
      color: #898fae;
      font-family: "Playfair Display", Georgia, serif;
      font-size: 15px;
      font-style: italic;
      line-height: 1.6;
    }

    /* NAVIGATION */

    .footer-navigation{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 35px;
    }

    .footer-column{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }

    .footer-heading{
      margin-bottom: 4px;
      color: #c9bdff;
      font-family: "DM Sans", Arial, sans-serif;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 2.2px;
      text-transform: uppercase;
    }

    .footer-column a{
      color: #aeb2ca;
      font-family: "DM Sans", Arial, sans-serif;
      font-size: 13px;
      font-weight: 500;
      text-decoration: none;
      transition: color .2s ease, transform .2s ease;
    }

    .footer-column a:hover{
      color: #fff;
      transform: translateX(4px);
    }

    /* BOTTOM */

    .footer-bottom{
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
      padding-top: 22px;
      border-top: 1px solid rgba(255,255,255,.09);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      color: #686e8c;
      font-family: "DM Sans", Arial, sans-serif;
      font-size: 10px;
      line-height: 1.5;
    }

    /* TABLET */

    @media(max-width: 850px){
      .site-footer{
        padding: 60px 25px 23px;
      }

      .footer-inner{
        grid-template-columns: 1fr;
        gap: 45px;
      }

      .footer-navigation{
        max-width: 600px;
      }
    }

    /* MOBILE */

    @media(max-width: 600px){
      .site-footer{
        padding: 45px 20px 20px;
      }

      .footer-inner{
        gap: 35px;
        padding-bottom: 35px;
      }

      .footer-logo{
        font-size: 36px;
        letter-spacing: -1px;
      }

      .footer-tagline{
        font-size: 13px;
        margin-top: 10px;
      }

      /* Mobile par 3 columns ki jagah 2 columns ya stack kar sakte hain, ya phir grid ko clean rakhein */
      .footer-navigation{
        grid-template-columns: repeat(2, 1fr);
        gap: 25px 15px;
      }

      .footer-heading{
        font-size: 9px;
        letter-spacing: 1.5px;
      }

      .footer-column a{
        font-size: 12px;
      }

      .footer-bottom{
        align-items: flex-start;
        flex-direction: column;
        gap: 8px;
        font-size: 9.5px;
      }
    }

    @media(max-width: 400px){
      .footer-navigation{
        grid-template-columns: 1fr;
        gap: 20px;
      }
    }

  `;

  document.head.appendChild(style);

  document.body.appendChild(footer);

});