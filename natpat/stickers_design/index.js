(function() {
  "use strict";
  const f = (c, t, e, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: c,
      event_desc: t,
      event_type: e,
      event_loc: n
    }), w(`Event: ${c} | ${t} | ${e} | ${n}`, "success");
  }, y = (c) => new Promise((t) => {
    const e = document.querySelector(c);
    e && t(e);
    const n = new MutationObserver(() => {
      const s = document.querySelector(c);
      s && (t(s), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), k = ({ name: c, dev: t }) => {
    console.log(
      `%c EXP: ${c} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, b = (c) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", c, "variant_1"));
    }, 1e3);
  }, v = (c, t, e, n, s = 1e3, i = 0.5) => {
    let r, o;
    r = new IntersectionObserver(
      function(a) {
        a[0].isIntersecting === !0 ? o = setTimeout(() => {
          f(
            t,
            a[0].target.dataset.visible || n,
            "view",
            e
          ), r.disconnect();
        }, s) : (w("Element is not fully visible", "warn"), clearTimeout(o));
      },
      { threshold: [i] }
    );
    {
      const a = document.querySelector(c);
      a && r.observe(a);
    }
  }, w = (c, t = "info") => {
    let e;
    switch (t) {
      case "info":
        e = "color: #3498db;";
        break;
      case "warn":
        e = "color: #f39c12;";
        break;
      case "error":
        e = "color: #e74c3c;";
        break;
      case "success":
        e = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${c}`, `${e} font-size: 16px; font-weight: 600`);
  };
  class x {
    /**
     * Fetches product information by product slug/ID
     */
    async fetchProductInfo(t) {
      try {
        const e = this.getBaseUrl(), n = await fetch(`${e}products/${t}.js`);
        if (!n.ok)
          throw new Error(`HTTP ${n.status}: ${n.statusText}`);
        return await n.json();
      } catch (e) {
        return console.warn("Error fetching product info:", e), null;
      }
    }
    /**
     * Gets the base URL with locale (e.g., https://www.natpat.com/en-au/ or https://www.natpat.com/)
     */
    getBaseUrl() {
      const { origin: t, pathname: e } = window.location, n = e.match(/^\/[a-z]{2}-[a-z]{2}\//);
      return n ? `${t}${n[0]}` : `${t}/`;
    }
  }
  class P {
    // Default format, will be updated
    constructor() {
      this.moneyFormat = "${{amount}}", this.moneyFormat = this.getMoneyFormat();
    }
    /**
     * Detects and returns the proper money format for the site
     */
    getMoneyFormat() {
      if (window.icartCurrencyWihoutFormat)
        return window.icartCurrencyWihoutFormat;
      if (window.LPProductForm && window.LPProductForm.moneyFormat)
        return window.LPProductForm.moneyFormat;
      const t = document.querySelector("[data-money-format]");
      return t ? t.getAttribute("data-money-format") || this.moneyFormat : window.location.href.includes("/en-eu/") ? "€{{amount}}" : this.moneyFormat;
    }
    /**
     * Currency formatting function (similar to lp-product-form.js)
     */
    formatMoney(t) {
      typeof t == "string" && (t = t.replace(".", ""));
      const e = this.moneyFormat, n = /\{\{\s*(\w+)\s*\}\}/, s = (o, a = 2, l = ",", d = ".") => {
        if (isNaN(o) || o == null)
          return "0";
        const u = (o / 100).toFixed(a).split("."), I = u[0].replace(
          /(\d)(?=(\d\d\d)+(?!\d))/g,
          "$1" + l
        ), T = u[1] ? d + u[1] : "";
        return I + T;
      };
      let i = "";
      const r = e.match(n);
      if (!r) return e;
      switch (r[1]) {
        case "amount":
          i = s(Number(t), 2);
          break;
        case "amount_no_decimals":
          i = s(Number(t), 0);
          break;
        case "amount_with_comma_separator":
          i = s(Number(t), 2, ".", ",");
          break;
        case "amount_no_decimals_with_comma_separator":
          i = s(Number(t), 0, ".", ",");
          break;
        default:
          i = s(Number(t), 2);
      }
      return e.replace(n, i);
    }
    /**
     * Returns the current money format string
     */
    getFormat() {
      return this.moneyFormat;
    }
  }
  const $ = `.js-packs:not(.js-designs):not(.crs-js-packs):not(.pack-option) {
  display: none;
}

#getFormNow .form-group {
  margin-bottom: 16px !important;
}

.crs-package-options-container {
  margin-top: 32px;
}

.crs-design-options-container,
.crs-package-options-container {
  margin-inline: 10px;
}

.crs-title {
  color: #212529;
  font-family: 'DIN Condensed', roboto, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
  text-align: left;
}

.crs-design-options {
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 130px);
  justify-items: center;
  gap: 16px;
}

[data-title='3 Packs'] {
  order: 1;
}

[data-title='4 Packs'] {
  order: 2;
}

[data-title='2 Packs'] {
  order: 3;
}

[data-title='1 Pack'] {
  order: 4;
}
.js-packs {
  margin: 0 !important;
  max-width: 100% !important;
}

.js-designs {
  max-width: 130px !important;
}
.js-packs.js-designs label {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  padding: 6px 16px !important;
}

.js-designs img {
  margin: 0 !important;
}

.crs-package-options {
  margin-top: 52px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 21px 15px;
}

.crs-label-text {
  font-family: inherit !important;
  font: inherit;
  color: inherit;
  font-weight: inherit !important;
  font-size: inherit !important;
  text-transform: uppercase !important;
}

.crs-slick-slide-card-box {
  flex-direction: column;
  justify-content: center;
  gap: 18px !important;
}

.crs-slick-slide-title {
  color: #000;
  text-align: center;
  font-size: 32px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
}

.crs-slick-slide-card-box img {
  margin: 0 !important;
}
@media (max-width: 768px) {
  #getFormNow .form-group {
    margin-bottom: 10px !important;
  }

  .crs-package-options,
  .crs-design-options {
    justify-items: center;
  }

  .crs-title {
    font-size: 17px;
  }
  .crs-design-options {
    grid-template-columns: 1fr 1fr;
  }

  .crs-package-options {
    margin-top: 31px;
  }

  .js-packs.js-designs {
    max-width: 100% !important;
  }
  .js-packs.js-designs label {
    flex-direction: row;
    padding: 8px !important;
  }

  .js-packs.js-designs label img {
    width: 56px;
    height: 56px;
    object-fit: contain;
  }

  .crs-slick-slide-card-box {
    gap: 9px !important;
    background-color: #fff;
  }

  .crs-slick-slide-title {
    font-size: 24px;
  } 
}
`, m = {
    "Design 1": "https://conversionrate-store.github.io/a-b_images/natpat/design_1.webp",
    "Design 2": "https://conversionrate-store.github.io/a-b_images/natpat/design_2.webp",
    "Design 3": "https://conversionrate-store.github.io/a-b_images/natpat/design_3.webp",
    "Design 4": "https://conversionrate-store.github.io/a-b_images/natpat/design_4.webp"
  }, j = {
    "1 Pack": 1,
    "2 Packs": 2,
    "3 Packs": 3,
    "4 Packs": 4
  };
  class S {
    constructor() {
      this.priceFormatter = new P(), this.productData = null, this.chosenDesign = "Design 1", this.chosenPackage = "3 Packs", this.chosenVariantId = null, this.scrollGalleryTimerId = null, this.productService = new x(), this.init();
    }
    async init() {
      this.productData = await this.getProductDetails(), this.productData && (this.addStyles(), console.log("ver: 1"), await Promise.all([
        this.addNewImagesToProductGallery(),
        this.render(this.productData)
      ]), this.chooseVariantId(), this.getVariantId(), this.changeLinkAddToCart(), this.handleAdultPacks());
    }
    async render(t) {
      const e = t.options.find(
        (o) => o.name === "Package"
      ), n = t.options.find((o) => o.name === "Design");
      if (!e) return;
      const s = await y("#getFormNow .form-group");
      if (!s) return;
      s.insertAdjacentHTML(
        "beforeend",
        /* HTML */
        `
        <div class="crs-design-options-container">
          <div class="crs-title">Design:</div>
          <div class="crs-design-options"></div>
        </div>
        <div class="crs-package-options-container">
          <div class="crs-title">Quantity:</div>
          <div class="crs-package-options"></div>
        </div>
      `
      );
      const i = document.querySelector(
        ".crs-design-options"
      ), r = document.querySelector(".crs-package-options");
      !i || !r || (n == null || n.values.forEach((o, a) => {
        const l = t.variants.find(
          (p) => p.options.includes(o) && p.options.includes("3 Packs")
        );
        if (!l) return;
        const d = this.renderProductDesigns(o, a, l);
        d && (i == null || i.insertAdjacentHTML("beforeend", d));
      }), v(
        ".crs-design-options-container",
        "exp_design_view_1",
        "PDP Design",
        "Visibility",
        0
      ), e.values.forEach((o, a) => {
        const l = t.variants.find(
          (u) => u.options.includes(o) && u.options.includes("Design 1")
        );
        if (!l) return;
        const d = this.renderProductPackages(o, a, l);
        if (!d) return;
        r == null || r.insertAdjacentHTML("beforeend", d), r.querySelector(
          'input[type="radio"]'
        ).click();
      }));
    }
    renderProductDesigns(t, e, n) {
      const s = m[t];
      return s ? (
        /* HTML */
        `
      <div class="js-packs js-designs">
        <input
          type="radio"
          name="crs-designs"
          id="${t}"
          data-full-price="${this.priceFormatter.formatMoney(n.price)}"
          value="${t}"
          data-value="${t}"
          ${t === "Design 1" ? "checked" : ""}
        />
        <label class="radio-inline" for="${t}"
          ><img src="${s}" alt="${t}" width="97" height="97" />
          <span class="crs-label-text">${t}</span>
        </label>
      </div>
    `
      ) : void 0;
    }
    renderProductPackages(t, e, n) {
      const s = j[t];
      if (!s) return;
      const i = n.price / s;
      return (
        /* HTML */
        `
      <div class="js-packs crs-js-packs" data-title="${t}">
        ${t === "3 Packs" ? (
          /* HTML */
          '<span class="bestseller">bestseller</span>'
        ) : ""}
        <input
          type="radio"
          name="crs-packages"
          id="${n.id}"
          data-full-price="${this.priceFormatter.formatMoney(n.price)}"
          value="${n.id}"
          data-value="${t}"
          ${e === 0 ? "checked" : ""}
          class=""
        />

        <label class="radio-inline" for="${n.id}">
          ${t}<br />

          <span class="price"
            >${this.priceFormatter.formatMoney(i)} Each</span
          >
        </label>
      </div>
    `
      );
    }
    chooseVariantId() {
      const t = document.querySelector(".crs-design-options"), e = document.querySelector(".crs-package-options");
      t == null || t.addEventListener("change", (n) => {
        const i = n.target.closest("input"), r = i == null ? void 0 : i.value;
        if (r && (this.scrollGalleryTimerId && clearTimeout(this.scrollGalleryTimerId), this.scrollGalleryTimerId = setTimeout(() => {
          this.scrollToGallery(r);
        }, 300)), !i) return;
        const o = i.getAttribute("data-value");
        o && (this.chosenDesign = o, this.getVariantId(), this.changeLinkAddToCart(), f("exp_design_click_1", o, "click", "PDP Design"));
      }), e == null || e.addEventListener("change", (n) => {
        const i = n.target.closest("input");
        if (!i) return;
        const r = i.getAttribute("data-value");
        if (!r) return;
        const o = Array.from(
          document.querySelectorAll(
            ".js-packs:not(.js-designs):not(.crs-js-packs):not(.pack-option)"
          )
        ).find((a) => a.textContent.includes(r));
        if (o) {
          const a = o.querySelector(
            "label"
          );
          a && a.click();
        }
        this.chosenPackage = r, this.getVariantId(), this.changeLinkAddToCart();
      });
    }
    changeLinkAddToCart(t = null) {
      const e = document.querySelector(
        "#addToCart"
      );
      if (!e || this.chosenVariantId === null) return;
      const n = "/cart/", s = e.href, i = e.search, r = s.split(",");
      if (r.length > 1) {
        if (t && t.isAdult && t.adultPackId) {
          const d = r[1].split("?")[0], u = [`${n}${this.chosenVariantId}:1,${t.adultPackId}:1`, d].join(",");
          e.href = u;
          return;
        }
        const l = [`${n}${this.chosenVariantId}:1`, ...r.slice(1)].join(",");
        e.href = l;
        return;
      }
      const o = `${n}${this.chosenVariantId}:1${i}`;
      e.href = o;
    }
    getVariantId() {
      if (!this.productData || !this.chosenDesign || !this.chosenPackage)
        return null;
      const t = this.productData.variants.find(
        (e) => e.options.includes(this.chosenDesign) && e.options.includes(this.chosenPackage)
      );
      return this.chosenVariantId = t ? t.id : null, t ? t.id : null;
    }
    async getProductDetails() {
      return await this.productService.fetchProductInfo(
        "mosquito-patches-for-kids-designs"
      );
    }
    handleAdultPacks() {
      const t = document.querySelector(".adult-pack-btns");
      t == null || t.addEventListener("click", (e) => {
        const n = e.target, s = n.closest("li");
        if (!n && !s) return;
        const i = s == null ? void 0 : s.querySelector("input");
        if (!i) return;
        const r = i.value;
        r && this.changeLinkAddToCart({ isAdult: !0, adultPackId: r });
      });
    }
    async addNewImagesToProductGallery() {
      console.log("Adding new images to product gallery"), await y("#purchaseSlide");
      const t = document.querySelectorAll("#purchaseSlide");
      console.log("Found product galleries:", t), !(!t || t.length === 0) && t.forEach(async (e) => {
        const n = window.jQuery(e);
        if (n.hasClass("slick-initialized"))
          for (const s in m) {
            const i = s, r = m[s], o = (
              /* HTML */
              `<div
            class="crs-slick-slide-item"
            data-title="${i}"
          >
            <div class="card-box crs-slick-slide-card-box">
              <div class="crs-slick-slide-title">${i}</div>
              <img
                src="${r}"
                alt="${s}"
                width="381"
                height="381"
                loading="lazy"
              />
            </div>
          </div>`
            );
            try {
              n.slick("slickAdd", o);
            } catch (a) {
              console.error("Error adding slide to slick:", a);
            }
          }
        else
          console.warn("Slick slider not initialized yet");
      });
    }
    scrollToGallery(t) {
      console.log("Scrolling to gallery:", t);
      const e = document.querySelectorAll("#purchaseSlide");
      !e || e.length === 0 || e.forEach((n) => {
        console.log("productGallery:", n);
        const s = window.jQuery(n);
        console.log("Gallery jQuery object:", s);
        const i = s.find(".slick-slide").index(
          s.find(`.crs-slick-slide-item[data-title="${t}"]`)
        );
        console.log("Found slide index:", i), i !== -1 && s.slick("slickGoTo", i);
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = $, document.head.appendChild(t);
    }
  }
  const D = "";
  k({ name: "Validation of Mosquito sticker designs for Australia", dev: "OS" }), b("exp_design");
  const g = class g {
    constructor() {
      this.init();
    }
    init() {
      !this.isTargetCountries() || !this.isTargetPage() || (this.addStyles(), new S());
    }
    isTargetPage() {
      return window.location.pathname.includes("/buzzpatch");
    }
    isTargetCountries() {
      const t = window.location.pathname;
      return g.targetLocales.some(
        (e) => t.includes(`/${e}/`)
      );
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = D, document.head.appendChild(t);
    }
  };
  g.targetLocales = ["en-au"];
  let h = g;
  new h();
})();
