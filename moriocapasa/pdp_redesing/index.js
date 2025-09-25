(function() {
  "use strict";
  const l = (p) => new Promise((e) => {
    const t = document.querySelector(p);
    t && e(t);
    const n = new MutationObserver(() => {
      const r = document.querySelector(p);
      r && (e(r), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), b = ({ name: p, dev: e }) => {
    console.log(
      `%c EXP: ${p} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, v = (p) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", p, "variant_1"));
    }, 1e3);
  }, g = (p, e = "info") => {
    let t;
    switch (e) {
      case "info":
        t = "color: #3498db;";
        break;
      case "warn":
        t = "color: #f39c12;";
        break;
      case "error":
        t = "color: #e74c3c;";
        break;
      case "success":
        t = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${p}`, `${t} font-size: 16px; font-weight: 600`);
  }, w = `.crs-popup-highlight-text {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #101e11;
  text-align: center;
  font-family: HelveticaNeueCyr;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 150% */
}

.crs-popup-highlight-text::before {
  content: '';
  width: 16px;
  height: 15px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" fill="none"><g clip-path="url(%23a)"><path fill="%23000" d="M14.975 7.2a6.975 6.975 0 1 1-13.95 0 6.975 6.975 0 0 1 13.95 0Zm-7.782 3.693 5.175-5.175a.45.45 0 0 0 0-.636l-.636-.636a.45.45 0 0 0-.637 0l-4.22 4.22-1.97-1.97a.45.45 0 0 0-.636 0l-.637.636a.45.45 0 0 0 0 .636l2.925 2.925a.45.45 0 0 0 .636 0Z"/></g><defs><clipPath id="a"><path fill="%23fff" d="M.8 0h14.4v14.4H.8z"/></clipPath></defs></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

.crs-dialog-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.crs-dimension-info-body .media-with-text__media {
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  max-height: 167px;
}

.crs-dimension-info-body .media-with-text__media .media-wrapper {
  display: flex;
  justify-content: center;
  height: 100%;
}
.crs-dimension-info-body .media-with-text__item {
  height: 100%;
  max-height: 90dvh
}

.crs-dimension-info-body .media-with-text__item  p.h2 {
  display: none;
}
.crs-dimension-info-body .media-with-text__media .media-wrapper img {
  height: 100%;
  object-fit: contain;
}
.crs-dimension-info-body .media-with-text__content {
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  padding: 0;
  padding-bottom: 45px;
  border-radius: 12px;
  background: #f0f0f0;
  overflow-y: auto;
}

.crs-dimension-info-body .media-with-text__content > .prose  {
  max-width: 327px;
}


.crs-dimension-info-body .media-with-text__content > .prose p.h2 {
  display: none;
}

.crs-dimension-info-body .media-with-text__content .btn-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

@media (max-width: 1000px) {
  .product-info__variant-picker + .product-info__separator {
    margin-top: 15px;
  }
}
`;
  class x {
    constructor() {
      this.init(), this.addStyles();
    }
    init() {
      this.changeVariantPickerOrder(), this.addDimensionInfoPopup(), this.addDimensionInfoButton();
    }
    changeVariantPickerOrder() {
      const e = document.querySelector(
        ".product-info__variant-picker"
      ), t = e == null ? void 0 : e.querySelector(".variant-picker");
      if (!e || !t) return;
      const n = t == null ? void 0 : t.querySelectorAll("fieldset");
      let r = null, i = null;
      if (n.forEach((o) => {
        var d;
        const c = o.querySelector("legend");
        if (c) {
          const s = (d = c.textContent) == null ? void 0 : d.toLowerCase().trim();
          s != null && s.includes("size") ? (r = o, o.dataset.crsVariant = "size") : s != null && s.includes("color") && (i = o, o.dataset.crsVariant = "color");
        }
      }), r && i) {
        const o = Array.from(n).indexOf(r), c = Array.from(n).indexOf(i);
        if (c > o) {
          const d = n[0];
          setTimeout(() => {
            d.insertAdjacentElement(
              "beforebegin",
              n[c]
            );
          }, 1e3);
        }
      }
    }
    async addViewFabricInfoButton() {
      const e = await l(
        '[data-crs-variant="color"] .variant-picker__option-info'
      );
      if (!e)
        return;
      e.insertAdjacentHTML(
        "beforeend",
        /* HTML */
        `<button
        class="crs-popup-btn"
        data-crs-button="view-fabric-info"
      >
        View Fabric Info
      </button>`
      );
      const t = document.querySelector(
        '[data-crs-button="view-fabric-info"]'
      ), n = document.getElementById("fabric-info-dialog");
      t == null || t.addEventListener("click", (r) => {
        n && n.open();
      });
    }
    async addDimensionInfoButton() {
      const e = await l(
        '[data-crs-variant="size"] .variant-picker__option-info'
      );
      if (!e)
        return;
      e.insertAdjacentHTML(
        "beforeend",
        /* HTML */
        `<button
        class="crs-popup-btn"
        data-crs-button="view-dimension-info"
      >
        View Dimensions
      </button>`
      );
      const t = document.querySelector(
        '[data-crs-button="view-dimension-info"]'
      ), n = document.getElementById("dimension-info-dialog");
      t == null || t.addEventListener("click", (r) => {
        n && n.open();
      });
    }
    addFabricInfoPopup() {
      const e = document.querySelector(
        ".product-gallery__media img"
      ), t = document.querySelector('[class*="tabs-item-template"]'), n = (
        /* HTML */
        `
      <crs-dialog id="fabric-info-dialog" data-crs-dialog="fabric-info">
        <header class="crs-dialog-header">
          <img
            class="crs-fabric-info-image"
            src="${e == null ? void 0 : e.src}"
            alt="${e == null ? void 0 : e.alt}"
            width="155"
            height="155"
          />
          <div class="crs-popup-highlight-text">
            All sofas come fully assembled
          </div>
        </header>
        <main class="crs-dialog-body crs-fabric-info-body">
          ${t == null ? void 0 : t.innerHTML}
        </main>
      </crs-dialog>
    `
      );
      document.body.insertAdjacentHTML("beforeend", n);
    }
    addDimensionInfoPopup() {
      document.querySelector(
        ".product-gallery__media img"
      );
      const e = document.querySelector("#dim_detail "), t = e == null ? void 0 : e.querySelector("media-with-text");
      document.body.insertAdjacentHTML(
        "beforeend",
        /* HTML */
        `
      <crs-dialog id="dimension-info-dialog" data-crs-dialog="dimension-info">
        <main class="crs-dialog-body crs-dimension-info-body"></main>
      </crs-dialog>
    `
      );
      const r = document.getElementById("dimension-info-dialog"), i = r.querySelector(".crs-dimension-info-body");
      r.addEventListener("crs-dialog-open", () => {
        e && t && i && i.appendChild(t);
      }), r.addEventListener("crs-dialog-close", () => {
        e && t && i && e.appendChild(t);
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = w, document.head.appendChild(e);
    }
  }
  const S = `.crs-shipping-schedule {
  margin-bottom: 14px;
  font-weight: 300;
}

.crs-shipping-schedule ~ ul {
  display: none;
}

.crs-inventory-status {
  display: flex;
  align-items: center;
  gap: 8px;
}

.crs-inventory-status::before {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.crs-inventory-status--instock::before {
  border: 2px solid #96e594;
  background: #1cb32b;
}

.crs-inventory-status--preorder::before {
  border: 2px solid #fafff9;
  background: #74cc7d;
}

.crs-inventory-reserved {
  flex-wrap: wrap;
}
.crs-inventory-progress-bar {
  margin-top: 6px;
  width: 100%;
  height: 6px;
  border-radius: 4px;
  background: #e1ebe2;
  overflow: hidden;
}

.crs-inventory-progress-bar__fill {
  height: 100%;
  background: #1cb32b;
  border-radius: 4px 0 0 4px;
}

.crs-top-inventory-status {
  margin-top: 24px;
}
@media (max-width: 767px) {
  .crs-shipping-schedule {
    margin-bottom: 8px;
  }

  .crs-top-inventory-status {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 14px;
  }
}
`;
  class _ {
    constructor() {
      this.init(), this.addStyles();
    }
    init() {
      this.changeReserveAndStockInfoPosition(), this.preOrderInfo(), this.addTopInStock();
    }
    async changeReserveAndStockInfoPosition() {
      const e = await l(".product-info__inventory"), t = await l(".free_ship.sectional");
      !e || !t || t.insertAdjacentElement("afterend", e);
    }
    async preOrderInfo() {
      const e = await l(".product-info__inventory");
      if (!e) return;
      const t = e.querySelectorAll(".pre-order-info");
      t.length !== 0 && t.forEach((n) => {
        n.insertAdjacentHTML(
          "afterbegin",
          /* html */
          '<div class="crs-shipping-schedule">Shipping Schedule</div>'
        ), n.querySelectorAll(":scope > div").forEach((i) => {
          var o, c, d, s, a;
          if ((o = i.textContent) != null && o.includes("Next batch ship") && i.classList.add(
            "crs-inventory-status",
            "crs-inventory-status--preorder"
          ), (c = i.textContent) != null && c.includes("In Stock") && !((d = i.textContent) != null && d.includes("Reserved")) && i.classList.add(
            "crs-inventory-status",
            "crs-inventory-status--instock"
          ), (s = i.textContent) != null && s.includes("Reserved")) {
            i.classList.add("crs-inventory-reserved");
            const u = (a = i.querySelector(
              "#reservation-percent"
            )) == null ? void 0 : a.textContent, h = Number(u) < 10 ? 10 : Number(u) > 90 && Number(u) < 100 ? 90 : Number(u), f = (
              /* html */
              `
            <div class="crs-inventory-progress-bar">
              <div class="crs-inventory-progress-bar__fill" style="width: ${u ? Math.ceil(Number(h) / 10) * 10 : 0}%"></div></div>
            </div>
          `
            );
            i.insertAdjacentHTML("beforeend", f);
          }
        });
      });
    }
    async addTopInStock() {
      var o, c;
      const e = await l(".product-info__payment-terms");
      if (!e) return;
      e.insertAdjacentHTML(
        "afterend",
        /* HTML */
        `
      <div class="crs-top-inventory-status">
        <div
          hidden
          class="crs-top-inventory-status--instock crs-inventory-status crs-inventory-status--instock"
        ></div>
        <div
          hidden
          class="crs-top-inventory-status--preorder crs-inventory-status crs-inventory-status--preorder"
        ></div>
      </div>
    `
      );
      const n = (o = e.parentElement) == null ? void 0 : o.querySelector(
        ".crs-top-inventory-status--instock"
      ), r = (c = e.parentElement) == null ? void 0 : c.querySelector(
        ".crs-top-inventory-status--preorder"
      );
      if (!n || !r) return;
      const i = async () => {
        var s, a;
        const d = await l(".pre-order-info:not([hidden])");
        d.querySelector(".crs-inventory-status--preorder") && (r.removeAttribute("hidden"), n.setAttribute("hidden", ""), r.innerHTML = ((s = d.querySelector(".crs-inventory-status--preorder")) == null ? void 0 : s.innerHTML) || ""), d.querySelector(".crs-inventory-status--instock") && (n.removeAttribute("hidden"), r.setAttribute("hidden", ""), n.innerHTML = ((a = d.querySelector(".crs-inventory-status--instock")) == null ? void 0 : a.innerHTML) || "");
      };
      await i(), document.addEventListener("variant:change", async () => {
        await i();
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = S, document.head.appendChild(e);
    }
  }
  const k = `.dialog-backdrop {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

:host([open]) .dialog-backdrop {
  display: flex;
}

.dialog {
  background-color: #fff;
  border-radius: 12px;
  max-width: 450px;
  width: 100%;
  max-height: 90dvh;
  margin: 16px;
  position: relative;
}

.dialog-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  padding: 0;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 999;
}

.dialog-close img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
`;
  class E extends HTMLElement {
    constructor() {
      super(), this.attachShadow({ mode: "open" }), this.render();
    }
    render() {
      this.shadowRoot && (this.shadowRoot.innerHTML = /* HTML */
      `
      <style>
        ${k}
      </style>
      <div class="dialog-backdrop">
        <div class="dialog" role="dialog" aria-modal="true">
          <button class="dialog-close" aria-label="Close dialog">
            <img
              src="https://cdn.shopify.com/extensions/e9adb3ac-d336-4d78-b908-22f7cb855f80/propair-furniture-warranty-130/assets/vector.png"
              loading="lazy"
              width=""
              height=""
            />
          </button>
          <div class="dialog-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `);
    }
    connectedCallback() {
      var e, t, n, r;
      (t = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".dialog-close")) == null || t.addEventListener("click", () => this.close()), (r = (n = this.shadowRoot) == null ? void 0 : n.querySelector(".dialog-backdrop")) == null || r.addEventListener("click", (i) => {
        var o;
        i.target === ((o = this.shadowRoot) == null ? void 0 : o.querySelector(".dialog-backdrop")) && this.close();
      });
    }
    disconnectedCallback() {
      var e, t, n, r;
      (t = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".dialog-close")) == null || t.removeEventListener("click", () => this.close()), (r = (n = this.shadowRoot) == null ? void 0 : n.querySelector(".dialog-backdrop")) == null || r.removeEventListener("click", (i) => {
        var o;
        i.target === ((o = this.shadowRoot) == null ? void 0 : o.querySelector(".dialog-backdrop")) && this.close();
      });
    }
    open() {
      var e;
      (e = this.shadowRoot) == null || e.dispatchEvent(
        new Event("crs-dialog-open", { bubbles: !0, composed: !0 })
      ), this.setAttribute("open", "");
    }
    close() {
      var e;
      (e = this.shadowRoot) == null || e.dispatchEvent(
        new Event("crs-dialog-close", { bubbles: !0, composed: !0 })
      ), this.removeAttribute("open");
    }
  }
  const L = `.crs-gallery-video {
  border-radius: 12px;
}`;
  class T {
    constructor() {
      this.debounceTimer = null, this.init();
    }
    init() {
      this.addStyles(), this.listenForShopifyEvents(), setTimeout(() => {
        this.addItemsToGallery(), this.observeGalleryMutations();
      }, 1e3), this.changeMobileGalleryPosition();
    }
    async changeMobileGalleryPosition() {
      const e = await l('product-gallery[style*="opacity: 1;"]'), t = await l("payment-terms ~ .product-info__separator");
      !e || !t || t.insertAdjacentElement("beforebegin", e);
    }
    listenForShopifyEvents() {
      document.addEventListener("variant:change", () => {
        g("Variant changed, re-adding gallery items"), setTimeout(() => this.addItemsToGallery(), 100);
      }), document.addEventListener("product:updated", () => {
        g("Product updated, re-adding gallery items"), setTimeout(() => this.addItemsToGallery(), 100);
      }), document.addEventListener("visibilitychange", () => {
        g("Page visibility changed"), document.hidden || setTimeout(() => this.addItemsToGallery(), 100);
      });
    }
    async addItemsToGallery() {
      await l(".media-with-text__media video"), await l(".product product-gallery");
      const e = document.querySelectorAll(".media-with-text__media video"), t = document.querySelectorAll("product-gallery");
      if (t.length === 0 || e.length === 0) return;
      const n = [];
      let r = 0;
      e.forEach((i) => {
        var d;
        const o = (d = i.querySelector("source")) == null ? void 0 : d.getAttribute("src"), c = i.getAttribute("poster");
        if (o) {
          const s = {
            id: `crs-video-${r++}`,
            video: o,
            poster: c || ""
          };
          if (n.find((a) => a.video === o)) return;
          n.push(s);
        }
      }), t.forEach((i) => {
        const o = i.querySelector("media-carousel"), c = i.querySelector("page-dots");
        if (!o || !c) return;
        Array.from(n).slice(0, 2).forEach((s) => {
          const a = (
            /* html */
            `
          <button type="button" class="product-gallery__thumbnail product-gallery__thumbnail-crs" aria-current="false" aria-label="" data-media-id="${s.id}">
            <img src="${s.poster}" alt="sectional - Amora Open L Sectional - MC - Mario Capasa" srcset="${s.poster}&amp;width=56 56w, ${s.poster}&amp;width=64 64w, ${s.poster}&amp;width=112 112w, ${s.poster}&amp;width=128 128w, ${s.poster}&amp;width=168 168w, ${s.poster}&amp;width=192 192w" width="1500" height="1500" loading="lazy" sizes="(max-width: 699px) 56px, 64px" class="object-contain rounded-sm">
          </button>`
          );
          c.insertAdjacentHTML("beforeend", a);
          const u = (
            /* html */
            `<div class="product-gallery__media product-gallery__media-crs" data-media-type="image" data-media-id="${s.id}">
          <video class="crs-gallery-video" src="${s.video}" poster="${s.poster}" autoplay muted loop preload="metadata" loading="lazy"></video>
        </div>`
          );
          o.insertAdjacentHTML("beforeend", u);
          const h = c.querySelector(`[data-media-id="${s.id}"]`), m = o.querySelector(`[data-media-id="${s.id}"]`);
          h && m && h.addEventListener("click", () => {
            this.handleThumbnailClick(
              i,
              o,
              m,
              h
            );
          });
        });
      });
    }
    async observeGalleryMutations() {
      await l("product-gallery");
      const e = document.querySelectorAll("product-gallery");
      e && e.forEach((t) => {
        new MutationObserver((r) => {
          r.forEach((i) => {
            i.type === "childList" && (this.debounceTimer && clearTimeout(this.debounceTimer), this.debounceTimer = window.setTimeout(() => {
              this.checkAndRestoreVideoItems(t);
            }, 100));
          });
        }).observe(t, { childList: !0, subtree: !0 });
      });
    }
    async checkAndRestoreVideoItems(e) {
      const t = e.querySelectorAll(
        ".product-gallery__thumbnail-crs"
      ), n = e.querySelectorAll(
        ".product-gallery__media-crs"
      );
      if (t.length > 0 && n.length > 0)
        return;
      console.log("Video items missing - restoring...");
      const r = document.querySelectorAll(".media-with-text__media video");
      if (r.length === 0) return;
      const i = [];
      let o = 0;
      r.forEach((a) => {
        var m;
        const u = (m = a.querySelector("source")) == null ? void 0 : m.getAttribute("src"), h = a.getAttribute("poster");
        if (u) {
          const f = {
            id: `crs-video-${o++}`,
            video: u,
            poster: h || ""
          };
          if (i.find((y) => y.video === u)) return;
          i.push(f);
        }
      });
      const c = e.querySelector("media-carousel"), d = e.querySelector("page-dots");
      if (!c || !d) return;
      Array.from(i).slice(0, 2).forEach((a) => {
        const u = d.querySelector(
          `[data-media-id="${a.id}"]`
        ), h = c.querySelector(
          `[data-media-id="${a.id}"]`
        );
        if (u && h)
          return;
        if (!u) {
          const y = (
            /* html */
            `
        <button type="button" class="product-gallery__thumbnail product-gallery__thumbnail-crs" aria-current="false" aria-label="" data-media-id="${a.id}">
          <img src="${a.poster}" alt="sectional - Amora Open L Sectional - MC - Mario Capasa" srcset="${a.poster}&amp;width=56 56w, ${a.poster}&amp;width=64 64w, ${a.poster}&amp;width=112 112w, ${a.poster}&amp;width=128 128w, ${a.poster}&amp;width=168 168w, ${a.poster}&amp;width=192 192w" width="1500" height="1500" loading="lazy" sizes="(max-width: 699px) 56px, 64px" class="object-contain rounded-sm">
        </button>`
          );
          d.insertAdjacentHTML("beforeend", y);
        }
        if (!h) {
          const y = (
            /* html */
            `<div class="product-gallery__media product-gallery__media-crs" data-media-type="image" data-media-id="${a.id}">
        <video src="${a.video}" poster="${a.poster}" controls></video>
      </div>`
          );
          c.insertAdjacentHTML("beforeend", y);
        }
        const m = d.querySelector(`[data-media-id="${a.id}"]`), f = c.querySelector(`[data-media-id="${a.id}"]`);
        m && f && (m.removeEventListener("click", this.handleThumbnailClick), m.addEventListener("click", () => {
          this.handleThumbnailClick(e, f, m);
        }));
      });
    }
    handleThumbnailClick(e, t, n, r) {
      e.querySelectorAll(".product-gallery__media").forEach((o) => {
        o.classList.remove("is-selected");
      }), n.classList.add("is-selected"), setTimeout(() => {
        e.querySelectorAll(".product-gallery__thumbnail").forEach((o) => {
          o.setAttribute("aria-current", "false"), o.classList.remove("is-selected");
        }), r.classList.add("is-selected"), r.setAttribute("aria-current", "true");
      }, 1e3), t.scrollTo({
        left: n.offsetLeft,
        behavior: "smooth"
      });
      const i = e.querySelector("custom-cursor");
      i && setTimeout(() => {
        i.style.display = "none", i.setAttribute("hidden", "");
      }, 1e3);
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = L, document.head.appendChild(e);
    }
  }
  const q = `.crs-data-arrive-badge {
  margin-top: 24px !important;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
}

.crs-data-arrive-badge .tooltip {
  flex-shrink: 0;
}

.crs-data-arrive-badge .tooltip .cir_bold {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 18px;
  height: 18px;
}

.free_ship_sec {
  flex-wrap: wrap;
}

.crs-free-shipping-text-container {
  order: 1;
}

.crs-warranty-text-container {
  order: 2;
}

.crs-free-shipping-text {
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 22.4px;
}
.crs-free-shipping-text span {
  color: #1cb32b;
  text-transform: uppercase;
}

@media (max-width: 1000px) {
  .crs-data-arrive-badge {
    margin-top: 15px !important;
    font-size: 13px;
  }

  .free_ship_sec {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
}

@media (max-width: 767px) {
  .crs-data-arrive-badge .tooltip .tooltiptext {
    left: 10px;
  }
  .crs-data-arrive-badge .tooltip .tooltiptext::after,
  .crs-data-arrive-badge .tooltip .tooltiptext::before {
    right: 46px;
  }

  .crs-warranty-text-container .tooltiptext {
    left: -144px;
  }

  .crs-warranty-text-container .tooltiptext::after,
  .crs-warranty-text-container .tooltiptext::before {
    right: 33px !important;
  }
}
`;
  class A {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.addDataArriveElement(), this.changeFreeShippingSection();
    }
    async addDataArriveElement() {
      const e = await l(".what-cover-form");
      if (!e) return;
      const t = /* @__PURE__ */ new Date();
      t.setDate(t.getDate() + 10);
      const n = {
        month: "long",
        day: "numeric"
      }, i = (
        /* html */
        `
      <div class="crs-data-arrive-badge fs_info2">
        <div>Order today — arrives on or before <span class="bold">${t.toLocaleDateString("en-US", n)}</span></div><div id="ttt-c" class="tooltip crs-tooltip"><span style="color: grey;" class="bold cir_bold">?</span>
       <div class="tooltiptext tooltip-bottom triangle">
         <p>We ship in 2–5 days, with delivery in 3–4 days. While rare, actual delivery times may vary due to unforeseen carrier delays.</p>
       </div>
      </div>
      </div>`
      );
      e.insertAdjacentHTML("beforeend", i);
      const o = e.querySelector("#ttt-c");
      o && o.addEventListener("click", () => {
        o.classList.toggle("tooltip_clicked");
      });
    }
    async changeFreeShippingSection() {
      const e = await l(".free_ship_sec");
      if (!e) return;
      const t = e.querySelector(".fs_info"), n = e.querySelector(".fs_info2");
      if (n && (n.classList.add("crs-free-shipping-text-container"), n.innerHTML = /* html */
      `
      <div class="crs-free-shipping-text">
        <span>FREE Shipping</span> Available at Checkout
      </div>
      `), t) {
        t.classList.add("crs-warranty-text-container");
        const r = t.querySelector(".pro-title");
        r && (r.textContent = "12 Month Complimentary Warranty");
      }
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = q, document.head.appendChild(e);
    }
  }
  b({ name: "New PDP Experiment", dev: "OS" }), v("exp_pdp");
  class $ {
    constructor() {
      this.init();
    }
    init() {
      this.checkPdpPage().then((e) => {
        e && (this.addStyles(), this.initComponents(), new x(), new _(), new T(), new A());
      });
    }
    initComponents() {
      customElements.get("crs-dialog") || customElements.define("crs-dialog", E);
    }
    async checkPdpPage() {
      try {
        if (await Promise.race([
          new Promise((t) => setTimeout(t, 3e3)),
          // Timeout after 3 seconds
          l("body.template-product")
          // Wait for the element to appear
        ]))
          return !0;
      } catch {
        return !1;
      }
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = `

`, document.head.appendChild(e);
    }
  }
  new $();
})();
