(function() {
  "use strict";
  const f = (g, e, t, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: g,
      event_desc: e,
      event_type: t,
      event_loc: n
    }), V(`Event: ${g} | ${e} | ${t} | ${n}`, "success");
  }, v = (g) => new Promise((e) => {
    const t = document.querySelector(g);
    t && e(t);
    const n = new MutationObserver(() => {
      const s = document.querySelector(g);
      s && (e(s), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), J = ({ name: g, dev: e }) => {
    console.log(
      `%c EXP: ${g} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, K = (g) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", g, "variant_1"));
    }, 1e3);
  }, X = (g, e, t, n, s = 1e3, i = 0.5) => {
    let o, r;
    o = new IntersectionObserver(
      function(a) {
        a[0].isIntersecting === !0 ? r = setTimeout(() => {
          f(
            e,
            a[0].target.dataset.visible || n,
            "view",
            t
          ), o.disconnect();
        }, s) : (V("Element is not fully visible", "warn"), clearTimeout(r));
      },
      { threshold: [i] }
    );
    {
      const a = document.querySelector(g);
      a && o.observe(a);
    }
  }, V = (g, e = "info") => {
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
    console.log(`%c>>> ${g}`, `${t} font-size: 16px; font-weight: 600`);
  }, Y = `variant-picker.variant-picker {
  display: flex;
  flex-direction: column;
}

variant-picker.variant-picker fieldset {
  order: 3;
}

variant-picker.variant-picker [data-crs-variant='color'] {
  order: 1;
}
variant-picker.variant-picker [data-crs-variant='size'] {
  order: 2;
}

.crs-popup-btn {
  color: #1a1a1a;
  font-size: 16px;
  font-weight: 300;
  line-height: 16px;
  text-decoration: underline;
}

.crs-popup-highlight-text {
  margin-block: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: max-content;
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

@media (min-width: 1000px) {
  .crs-dimension-info-body .media-with-text__item {
    background: #f0f0f0;
  }
}

.crs-dimension-info-body .media-with-text__item p.h2 {
  margin-top: 27px;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  display: block;
  color: #000;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
}

.crs-dimension-info-body .media-with-text__media {
  grid-column: 1 / -1;
  grid-row: 2 / 3;
}

.crs-dimension-info-body .media-with-text__media .media-wrapper {
  display: flex;
  justify-content: center;
  height: calc(100% - 45px);
  max-height: 287px;
}

.crs-dimension-info-body .media-with-text__media:not(:has(.media-wrapper img)) {
  display: none;
}
.crs-dimension-info-body .media-with-text__item {
  height: 100%;
  max-height: 90dvh;
}

.crs-dimension-info-body .media-with-text__media .media-wrapper img {
  height: 100%;
  object-fit: contain;
}
.crs-dimension-info-body .media-with-text__content {
  grid-column: 1 / -1;
  grid-row: 3 / 4;
  padding: 0;
  padding-bottom: 45px;
  border-radius: 12px;
  background: #f0f0f0;
  overflow-y: auto;
}

.crs-dimension-info-body .media-with-text__content > .prose {
  max-width: 350px;
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
  .crs-dimension-info-body .media-with-text__item p.h2 {
    display: none !important;
  }
  .crs-dimension-info-body .media-with-text__media .media-wrapper {
    max-height: 167px;
  }
  .product-info__variant-picker + .product-info__separator {
    margin-top: 15px;
  }
}

@media (max-width: 768px) {
  .crs-popup-btn {
    font-size: 14px;
  }

  .crs-dimension-info-body .media-with-text__content > .prose {
    max-width: 330px;
  }
}
`;
  class Q {
    constructor() {
      this.init(), this.addStyles();
    }
    init() {
      this.changeVariantPickerOrder(), this.addDimensionInfoPopup(), this.addDimensionInfoButton();
    }
    async changeVariantPickerOrder() {
      await v(".variant-picker__option");
      const e = await v(
        ".product-info__variant-picker"
      ), t = e == null ? void 0 : e.querySelector(".variant-picker");
      if (!e || !t) return;
      (t == null ? void 0 : t.querySelectorAll("fieldset")).forEach((s) => {
        var o;
        const i = s.querySelector("legend");
        if (i) {
          const r = (o = i.textContent) == null ? void 0 : o.toLowerCase().trim();
          r != null && r.includes("size") ? s.dataset.crsVariant = "size" : r != null && r.includes("color") ? s.dataset.crsVariant = "color" : s.dataset.crsVariant = r.replace(":", "");
        }
      });
    }
    async addViewFabricInfoButton() {
      const e = await v(
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
      t == null || t.addEventListener("click", (s) => {
        n && n.open();
      });
    }
    async addDimensionInfoButton() {
      await v("crs-dialog#dimension-info-dialog");
      const e = await v(
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
      t == null || t.addEventListener("click", (s) => {
        n && (n.open(), f(
          "exp_pdp_click_5",
          "View Dimensions",
          "click",
          "Dimension info popup"
        ));
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
    async addDimensionInfoPopup() {
      const e = await v("#dim_detail"), t = e == null ? void 0 : e.querySelector("media-with-text");
      document.body.insertAdjacentHTML(
        "beforeend",
        /* HTML */
        `
      <crs-dialog id="dimension-info-dialog" data-crs-dialog="dimension-info">
        <main class="crs-dialog-body crs-dimension-info-body"></main>
      </crs-dialog>
    `
      );
      const s = (
        /* HTML */
        ` <div
      class="crs-popup-highlight-text"
    >
      All sofas come fully assembled
    </div>`
      ), i = document.getElementById("dimension-info-dialog"), o = i.querySelector(".crs-dimension-info-body");
      i.addEventListener("crs-dialog-open", () => {
        if (e && t && o) {
          o.appendChild(t);
          const r = o == null ? void 0 : o.querySelector(
            ".media-with-text__media"
          );
          r && r.insertAdjacentHTML("beforeend", s);
        }
        document.body.style.overflow = "hidden";
      }), i.addEventListener("crs-dialog-close", () => {
        e && t && o && e.appendChild(t), f("exp_pdp_click_6", "Close", "click", "Dimension info popup"), document.body.style.overflow = "";
      }), document.addEventListener("click", (r) => {
        const a = r.target;
        a && a.closest("#dimension-info-dialog .detail-btn") && f("exp_pdp_click_7", "Size Button", "click", "Dimension info popup");
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = Y, document.head.appendChild(e);
    }
  }
  const ee = `.crs-shipping-schedule {
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
  line-height: 22px;
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
  margin-block: 24px;
}
@media (max-width: 767px) {
  .crs-shipping-schedule {
    margin-bottom: 8px;
  }

  .crs-top-inventory-status {
    margin-block: 20px;
   
    font-size: 14px;
  }
}
`;
  class te {
    constructor() {
      this.init(), this.addStyles();
    }
    init() {
      this.changeReserveAndStockInfoPosition(), this.preOrderInfo(), this.addTopInStock();
    }
    async changeReserveAndStockInfoPosition() {
      const e = await v(".product-info__inventory"), t = await v(".free_ship");
      !e || !t || t.insertAdjacentElement("afterend", e);
    }
    async preOrderInfo() {
      const e = await v(".product-info__inventory");
      if (!e) return;
      const t = e.querySelectorAll(".pre-order-info");
      t.length !== 0 && t.forEach((n) => {
        n.insertAdjacentHTML(
          "afterbegin",
          /* html */
          '<div class="crs-shipping-schedule">Shipping Schedule</div>'
        ), n.querySelectorAll(":scope > div").forEach((i) => {
          var o, r, a, l;
          if ((o = i.textContent) != null && o.includes("Next batch ship") && i.classList.add(
            "crs-inventory-status",
            "crs-inventory-status--preorder"
          ), (r = i.textContent) != null && r.includes("In Stock") && !((a = i.textContent) != null && a.includes("Reserved")) && i.classList.add(
            "crs-inventory-status",
            "crs-inventory-status--instock"
          ), (l = i.textContent) != null && l.includes("Reserved")) {
            i.classList.add("crs-inventory-reserved");
            const h = "100", C = (
              /* html */
              `
            <div class="crs-inventory-progress-bar">
              <div class="crs-inventory-progress-bar__fill" style="width: ${Number(h) < 10 ? 3 : Number(h) > 90 && Number(h) < 100 ? 90 : Math.ceil(Number(h) / 10) * 10}%"></div></div>
            </div>
          `
            );
            i.insertAdjacentHTML("beforeend", C);
          }
          n.addEventListener("click", (h) => {
            const c = h.target;
            c && c.closest("#prev-batch-container") && f(
              "exp_pdp_click_9",
              "Previous Batch",
              "click",
              "Shipping Schedule"
            ), c && c.closest(".crs-inventory-reserved") && f(
              "exp_pdp_click_9",
              "Current Batch",
              "click",
              "Shipping Schedule"
            ), c && c.closest("#future-batch-container") && f(
              "exp_pdp_click_9",
              "Future Batch",
              "click",
              "Shipping Schedule"
            );
          });
        });
      });
    }
    async addTopInStock() {
      var o, r;
      const e = await v(".product-info__payment-terms");
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
      ), s = (r = e.parentElement) == null ? void 0 : r.querySelector(
        ".crs-top-inventory-status--preorder"
      );
      if (!n || !s) return;
      const i = async () => {
        var l, h;
        const a = await v(".pre-order-info:not([hidden])");
        a.querySelector(".crs-inventory-status--preorder") && (s.removeAttribute("hidden"), n.setAttribute("hidden", ""), s.innerHTML = ((l = a.querySelector(".crs-inventory-status--preorder")) == null ? void 0 : l.innerHTML) || ""), a.querySelector(".crs-inventory-status--instock") && (n.removeAttribute("hidden"), s.setAttribute("hidden", ""), n.innerHTML = ((h = a.querySelector(".crs-inventory-status--instock")) == null ? void 0 : h.innerHTML) || "");
      };
      n.addEventListener("click", () => {
        f("exp_pdp_click_4", "In Stock", "click", "Top info inventory");
      }), s.addEventListener("click", () => {
        f("exp_pdp_click_4", "Pre Order", "click", "Top info inventory");
      }), await i(), document.addEventListener("variant:change", async () => {
        await i();
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = ee, document.head.appendChild(e);
    }
  }
  const ne = `.dialog-backdrop {
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
  max-width: 640px;
  width: 100%;
  max-height: 90dvh;
  margin: 16px;
  position: relative;
  overflow: hidden;
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
  class ie extends HTMLElement {
    constructor() {
      super(), this.attachShadow({ mode: "open" }), this.render();
    }
    render() {
      this.shadowRoot && (this.shadowRoot.innerHTML = /* HTML */
      `
      <style>
        ${ne}
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
      var e, t, n, s;
      (t = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".dialog-close")) == null || t.addEventListener("click", () => this.close()), (s = (n = this.shadowRoot) == null ? void 0 : n.querySelector(".dialog-backdrop")) == null || s.addEventListener("click", (i) => {
        var o;
        i.target === ((o = this.shadowRoot) == null ? void 0 : o.querySelector(".dialog-backdrop")) && this.close();
      });
    }
    disconnectedCallback() {
      var e, t, n, s;
      (t = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".dialog-close")) == null || t.removeEventListener("click", () => this.close()), (s = (n = this.shadowRoot) == null ? void 0 : n.querySelector(".dialog-backdrop")) == null || s.removeEventListener("click", (i) => {
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
  const se = `.crs-gallery-video {
  border-radius: 12px;
}`;
  class oe {
    constructor() {
      this.debounceTimer = null, this.isClickOnThumbnail = !1, this.init();
    }
    init() {
      this.addStyles(), this.listenForShopifyEvents(), setTimeout(() => {
        this.addItemsToGallery();
      }, 1500), this.changeMobileGalleryPosition();
    }
    async changeMobileGalleryPosition() {
      if (window.innerWidth > 1e3) return;
      await v('product-gallery[style*="opacity: 1;"]');
      const e = document.querySelectorAll("product-gallery"), t = await v(
        "payment-terms ~ .product-info__separator"
      );
      e.length === 0 || !t || e.forEach((n) => {
        t.insertAdjacentElement("beforebegin", n);
      });
    }
    listenForShopifyEvents() {
      document.addEventListener("variant:change", () => {
        setTimeout(() => {
          this.addItemsToGallery();
        }, 1e3);
      }), document.addEventListener("product:updated", () => {
        setTimeout(() => this.addItemsToGallery(), 100);
      }), document.addEventListener("visibilitychange", () => {
        document.hidden || setTimeout(() => this.addItemsToGallery(), 100);
      }), document.addEventListener("limespot:productViewed", () => {
        setTimeout(() => this.addItemsToGallery(), 1e3);
      });
    }
    async checkIfNewItemsAdded() {
      const e = new Promise((n) => setTimeout(n, 2e3));
      await Promise.race([
        e,
        v("product-gallery .product-gallery__thumbnail-crs")
      ]) instanceof HTMLElement && this.addItemsToGallery();
    }
    async addItemsToGallery() {
      await v(".product product-gallery"), await v(".media-with-text__media video");
      const e = document.querySelectorAll(".media-with-text__media video"), t = document.querySelectorAll("product-gallery");
      if (t.length === 0 || e.length === 0) return;
      const n = [];
      let s = 0;
      e.forEach((i) => {
        var a;
        const o = (a = i.querySelector("source")) == null ? void 0 : a.getAttribute("src"), r = i.getAttribute("poster");
        if (o) {
          const l = {
            id: `crs-video-${s++}`,
            video: o,
            poster: r || ""
          };
          if (n.find((h) => h.video === o)) return;
          n.push(l);
        }
      }), t.forEach((i) => {
        const o = i.querySelector("media-carousel"), r = i.querySelector("page-dots"), a = i.querySelectorAll(
          ".product-gallery__thumbnail"
        ), l = i.querySelector(
          '[is="product-zoom-button"]'
        );
        if (!o || !r) return;
        const h = Array.from(n).slice(0, 2);
        r.addEventListener("click", (c) => {
          const d = c.target.closest(".product-gallery__thumbnail");
          d && (this.isClickOnThumbnail = !0, f(
            "exp_pdp_click_1",
            "Gallery thumbnail",
            "click",
            "Product Gallery"
          ), this.pushCurrentViewData(), setTimeout(() => {
            this.isClickOnThumbnail = !1;
          }, 1e3)), d != null && d.classList.contains("product-gallery__thumbnail-crs") ? l == null || l.setAttribute("hidden", "") : l == null || l.removeAttribute("hidden");
        }), o.addEventListener("click", (c) => {
          c.target.closest(".product-gallery__media");
        }), h.forEach((c) => {
          const C = (
            /* html */
            `
          <button type="button" class="product-gallery__thumbnail product-gallery__thumbnail-crs" aria-current="false" aria-label="" data-media-id="${c.id}">
            <img src="${c.poster}" alt="sectional - Amora Open L Sectional - MC - Mario Capasa" srcset="${c.poster}&amp;width=56 56w, ${c.poster}&amp;width=64 64w, ${c.poster}&amp;width=112 112w, ${c.poster}&amp;width=128 128w, ${c.poster}&amp;width=168 168w, ${c.poster}&amp;width=192 192w" width="1500" height="1500" loading="lazy" sizes="(max-width: 699px) 56px, 64px" class="object-contain rounded-sm">
          </button>`
          ), d = r.querySelector(
            `[data-media-id="${c.id}"]`
          );
          if (console.log("existingThumbnail", d), d || (r.insertAdjacentHTML("beforeend", C), o.querySelector(
            `[data-media-id="${c.id}"]`
          ))) return;
          const A = (
            /* html */
            `<div class="product-gallery__media product-gallery__media-crs" data-media-type="image" data-media-id="${c.id}">
          <video class="crs-gallery-video" src="${c.video}" poster="${c.poster}" autoplay muted loop preload="metadata" loading="lazy"></video>
        </div>`
          );
          o.insertAdjacentHTML("beforeend", A);
          const x = r.querySelector(`[data-media-id="${c.id}"]`), k = o.querySelector(`[data-media-id="${c.id}"]`), S = i.querySelectorAll(
            ".product-gallery__media:not(.product-gallery__media-crs)"
          ), F = S[S.length - 1], H = Array.from(a).reverse().find(($) => !$.classList.contains("product-gallery__thumbnail-crs"));
          x && k && x.addEventListener("click", () => {
            this.isClickOnThumbnail = !0, this.handleThumbnailClick(
              i,
              o,
              k,
              x
            ), setTimeout(() => {
              this.isClickOnThumbnail = !1;
            }, 1e3);
          }), H && x && F && H.addEventListener("click", () => {
            this.handleThumbnailClick(
              i,
              o,
              F,
              H
            ), setTimeout(() => {
              this.isClickOnThumbnail = !1;
            }, 1e3);
          }), this.addScrollDetection(i, o, r, h);
        }), document.addEventListener("click", (c) => {
          const C = c.target, d = i.querySelector("custom-cursor"), b = i.querySelector(
            '[is="product-zoom-button"]'
          ), A = i.querySelectorAll(
            ".product-gallery__media:not(.product-gallery__media-crs)"
          ), x = A[A.length - 1], k = o.querySelector(
            `[data-media-id="${h[0].id}"]`
          ), S = h.length > 1 ? o.querySelector(
            `[data-media-id="${h[1].id}"]`
          ) : null;
          if (x && x.contains(C) && d && d.classList.contains("is-half-end") && k && (o.scrollTo({
            left: k.offsetLeft,
            behavior: "smooth"
          }), this.updateThumbnailSelection(i, r, h[0].id), b == null || b.setAttribute("hidden", "")), k && k.contains(C)) {
            if (d && d.classList.contains("is-half-end") && S)
              o.scrollTo({
                left: S.offsetLeft,
                behavior: "smooth"
              }), this.updateThumbnailSelection(i, r, h[1].id);
            else if (d && d.classList.contains("is-half-start") && x) {
              o.scrollTo({
                left: x.offsetLeft,
                behavior: "smooth"
              });
              const F = i.querySelector(
                `[data-media-id="${x.getAttribute(
                  "data-media-id"
                )}"]`
              );
              F && this.updateThumbnailSelectionForNative(
                i,
                F
              );
            }
          }
          S && S.contains(C) && d && d.classList.contains("is-half-start") && k && (o.scrollTo({
            left: k.offsetLeft,
            behavior: "smooth"
          }), this.updateThumbnailSelection(i, r, h[0].id)), (A || k || S) && (d && d.classList.contains("is-half-start") ? (this.isClickOnThumbnail = !0, f(
            "exp_pdp_click_2",
            "Gallery Prev",
            "click",
            "Product Gallery"
          ), this.pushCurrentViewData(), b == null || b.removeAttribute("hidden"), setTimeout(() => {
            this.isClickOnThumbnail = !1;
          }, 1e3)) : d && d.classList.contains("is-half-end") && (this.isClickOnThumbnail = !0, f(
            "exp_pdp_click_3",
            "Gallery Next",
            "click",
            "Product Gallery"
          ), this.pushCurrentViewData()), setTimeout(() => {
            this.isClickOnThumbnail = !1;
          }, 1e3));
        });
      });
    }
    addScrollDetection(e, t, n, s) {
      let i;
      t.addEventListener("scroll", () => {
        clearTimeout(i), i = window.setTimeout(() => {
          this.checkVideoVisibility(e, t, n, s);
        }, 100);
      });
    }
    checkVideoVisibility(e, t, n, s) {
      const i = t.clientWidth, o = t.scrollLeft;
      let r = null;
      for (const a of s) {
        const l = t.querySelector(
          `[data-media-id="${a.id}"]`
        );
        if (!l) continue;
        const h = l.offsetLeft, c = l.offsetWidth;
        if ((Math.min(h + c, o + i) - Math.max(h, o)) / c > 0.5) {
          r = a;
          break;
        }
      }
      if (r) {
        this.updateThumbnailSelection(e, n, r.id), e.querySelectorAll(".product-gallery__media").forEach((l) => {
          l.classList.remove("is-selected");
        });
        const a = t.querySelector(
          `[data-media-id="${r.id}"]`
        );
        a && a.classList.add("is-selected");
      } else
        e.querySelector(
          ".product-gallery__thumbnail-crs.is-selected"
        ) && (e.querySelectorAll(".product-gallery__thumbnail-crs").forEach((l) => {
          l.setAttribute("aria-current", "false"), l.classList.remove("is-selected");
        }), e.querySelectorAll(".product-gallery__media-crs").forEach((l) => {
          l.classList.remove("is-selected");
        }));
      this.isClickOnThumbnail || (this.debounceTimer && clearTimeout(this.debounceTimer), this.debounceTimer = window.setTimeout(() => {
        this.pushCurrentViewData();
      }, 2e3));
    }
    pushCurrentViewData() {
      document.querySelectorAll(".product-gallery__thumbnail").forEach((e, t) => {
        e.getAttribute("aria-current") === "true" && f(
          "exp_pdp_view_1",
          `Gallery Image ${t + 1}`,
          "view",
          "Product Gallery"
        );
      });
    }
    handleThumbnailClick(e, t, n, s) {
      e.querySelectorAll(".product-gallery__media").forEach((o) => {
        o.classList.remove("is-selected");
      }), n.classList.add("is-selected");
      const i = () => {
        e.querySelectorAll(".product-gallery__thumbnail").forEach((o) => {
          o.setAttribute("aria-current", "false"), o.classList.remove("is-selected");
        }), s.classList.add("is-selected"), s.setAttribute("aria-current", "true");
      };
      setTimeout(() => {
        i();
      }, 2e3), i(), t.scrollTo({
        left: n.offsetLeft,
        behavior: "smooth"
      });
    }
    updateThumbnailSelection(e, t, n) {
      e.querySelectorAll(".product-gallery__thumbnail").forEach((i) => {
        i.setAttribute("aria-current", "false"), i.classList.remove("is-selected");
      });
      const s = t.querySelector(`[data-media-id="${n}"]`);
      s && (s.classList.add("is-selected"), s.setAttribute("aria-current", "true"));
    }
    updateThumbnailSelectionForNative(e, t) {
      e.querySelectorAll(".product-gallery__thumbnail").forEach((n) => {
        n.setAttribute("aria-current", "false"), n.classList.remove("is-selected");
      }), t.classList.add("is-selected"), t.setAttribute("aria-current", "true");
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = se, document.head.appendChild(e);
    }
  }
  const re = `.crs-data-arrive-badge {
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

:is(.crs-data-arrive-badge, .crs-warranty-text-container)
  .tooltip
  .tooltiptext {
  left: -214px;
}
:is(.crs-data-arrive-badge, .crs-warranty-text-container)
  .tooltip
  .tooltiptext::after,
:is(.crs-data-arrive-badge, .crs-warranty-text-container)
  .tooltip
  .tooltiptext::before {
  right: 36px;
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

.free_ship_sec .pro-title {
  color: #000;
  font-size: 14px;
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

  .crs-warranty-text-container .tooltip .tooltiptext {
    left: -144px;
  }

  .crs-warranty-text-container .tooltip .tooltiptext::after,
  .crs-warranty-text-container .tooltip .tooltiptext::before {
    right: 33px !important;
  }
}

@media (max-width: 450px) {
  .crs-data-arrive-badge .tooltip .tooltiptext {
    left: 0;
  }

  .crs-data-arrive-badge .tooltip .tooltiptext::after,
  .crs-data-arrive-badge .tooltip .tooltiptext::before {
    right: 36px;
  }
}
`;
  class ae {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.addDataArriveElement(), this.changeFreeShippingSection();
    }
    async addDataArriveElement() {
      const e = await v(".product-info__buy-buttons");
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
      e.insertAdjacentHTML("beforebegin", i);
      const o = document.querySelector("#ttt-c");
      o && (o.addEventListener("click", () => {
        o.classList.toggle("tooltip_clicked"), f(
          "exp_pdp_tooltip_1",
          "Tooltip",
          "click",
          "Shipping Info"
        );
      }), o.addEventListener("mouseenter", () => {
        o.classList.toggle("tooltip_clicked"), f(
          "exp_pdp_tooltip_1",
          "Tooltip",
          "click",
          "Shipping Info"
        );
      }));
    }
    async changeFreeShippingSection() {
      const e = await v(".free_ship_sec");
      if (!e) return;
      const t = e.querySelector(".fs_info"), n = e.querySelector(".fs_info2");
      if (n && (n.classList.add("crs-free-shipping-text-container"), n.innerHTML = /* html */
      `
      <div class="crs-free-shipping-text">
        <span>FREE Shipping</span> Available at Checkout
      </div>
      `), t) {
        t.classList.add("crs-warranty-text-container");
        const s = t.querySelector(".pro-title");
        s && (s.textContent = "12 Month Complimentary Warranty");
      }
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = re, document.head.appendChild(e);
    }
  }
  const ce = `product-quick-add {
  position: relative;
}

product-quick-add .price-list {
  display: none !important;
}

.crs-sticky-variant-picker {
  display: flex;
  gap: 24px;
}

.crs-sticky-variant-item {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.crs-sticky-variant-item::after {
  flex-shrink: 0;
  content: '';
  width: 6px;
  height: 12px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" fill="none"><path fill="%23000" stroke="%23000" stroke-width=".2" d="m1.981.787 5.09 5.142.07.07-.07.071-5.09 5.144-.07.07-.072-.07-.881-.891H.761l.168-.17L5.039 6 .928 1.847l-.07-.07.07-.07.91-.92.071-.072.071.072Z"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.crs-sticky-variant-swatch {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #1a1a1a;
  border-radius: 9999px;
  user-select: none;
  pointer-events: none;
}

.crs-sticky-variant-swatch label {
  width: 100%;
  height: 100%;
  margin: 0;
}

.crs-sticky-variant-item-wrap {
  display: flex;
  flex-direction: column;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
}

.crs-sticky-variant-label {
  color: #5c5c5c;
}

.crs-sticky-variant-value {
  margin-top: 6px;
  color: #000;
}

.crs-sticky-variant-picker-options {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 17px;
  border-radius: 6px;
  border: 1px solid rgba(26, 26, 26, 0.12);
  background: #f0f0f0;
  z-index: 10;
}

.crs-sticky-variant-picker-options-header {
  display: flex;
  align-items: center;
}
.crs-sticky-variant-picker-options-list {
  margin-inline: -17px;
  display: flex;
  gap: 8px;
  width: calc(100% + 34px);
  overflow-y: auto;
  padding: 5px 17px 0;

}

.crs-sticky-variant-picker-options-list::-webkit-scrollbar {
  height: 4px;
}
/* .crs-sticky-variant-picker-options-list::-webkit-scrollbar {
  display: none; 
} */

.crs-sticky-variant-picker-options-list label {
  margin: 0;
  max-height: 100%;
}

.crs-sticky-variant-picker-options-back {
  display: flex;
  align-items: center;
  gap: 2px;
}
.crs-sticky-variant-picker-options-back span {
  margin-right: 8px;
  display: flex;
  align-items: center;
  width: 12px;
  height: 12px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" fill="none"><path fill="%23000" stroke="%23000" stroke-width=".2" d="M6.019.787.929 5.929.859 6l.07.071 5.09 5.144.07.07.072-.07.881-.891h.197l-.168-.17L2.961 6l4.11-4.153.07-.07-.07-.07-.91-.92L6.09.715l-.071.072Z"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.crs-sticky-variant-picker-options-list label.color-swatch {
  width: 40px;
  height: 40px;
}
.crs-sticky-variant-picker-options-list label.crs-selected {
  border: 2px solid #1a1a1a;
}

div#hubspot-messages-iframe-container {
  bottom: 126px !important;
}

.crs-sticky-variant-picker-option-dimension {
  margin-left: auto;
  color: #1a1a1a;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px;
  text-decoration: underline;
}

product-quick-add .product-quick-add__variant buy-buttons {
  order: 2;
  width: 128px;
}

product-quick-add .product-quick-add__variant buy-buttons button {
  width: 100%;
  box-shadow: none;
}

.crs-sticky-price {
  font-weight: 300;
  font-size: 14px;
}

@media (max-width: 700px) {
  product-quick-add {
    background: #fff;
    width: 100%;
  }
  product-quick-add > buy-buttons {
    display: none !important;
  }

  product-quick-add .product-quick-add__variant {
    display: flex !important;
    justify-content: space-between;
  }

  product-quick-add variant-media,
  product-quick-add .product-quick-add__variant a {
    display: none;
  }

  .crs-sticky-variant-picker {
    gap: 0;
  }

  .crs-sticky-variant-picker-options {
    background: #fff;
  }

  .crs-sticky-variant-picker-options-list {
    flex-shrink: 0;
    padding: 5px 20px 0;
  }

  .crs-sticky-variant-item {
    padding-right: 10px;
  }
  .crs-sticky-variant-item:first-child {
    border-right: 1px solid #ddd;
  }

  .crs-sticky-variant-size {
    padding-left: 10px;
  }

  div[id*='alia-root-'],
  div#hubspot-messages-iframe-container {
    bottom: 110px !important;
  }
}
`;
  class le {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.changeStickySection(), this.rechangeStickySection();
    }
    initializeDragScroll() {
      document.querySelectorAll(
        ".crs-sticky-variant-picker-options-list"
      ).forEach((t) => {
        const n = t;
        let s = !1, i = 0, o = 0;
        n.addEventListener("mousedown", (r) => {
          this.isMobileDevice() || (s = !0, n.classList.add("dragging"), i = r.pageX - n.offsetLeft, o = n.scrollLeft, r.preventDefault());
        }), n.addEventListener("mouseleave", () => {
          s = !1, n.classList.remove("dragging");
        }), n.addEventListener("mouseup", () => {
          s = !1, n.classList.remove("dragging"), setTimeout(() => {
            n.style.scrollSnapType = "x mandatory";
          }, 100);
        }), n.addEventListener("mousemove", (r) => {
          if (!s) return;
          r.preventDefault(), n.style.scrollSnapType = "none";
          const l = (r.pageX - n.offsetLeft - i) * 2;
          n.scrollLeft = o - l;
        }), n.addEventListener("selectstart", (r) => {
          s && r.preventDefault();
        }), n.addEventListener(
          "click",
          (r) => {
            n.classList.contains("dragging") && (r.preventDefault(), r.stopPropagation());
          },
          !0
        );
      });
    }
    isMobileDevice() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || "ontouchstart" in window || window.innerWidth <= 768;
    }
    async changeStickySection() {
      var l, h, c, C;
      const e = new Promise((d) => setTimeout(d, 1e3)), t = await v("product-quick-add"), n = await Promise.race([
        v('[data-crs-variant="color"]'),
        e
      ]), s = await Promise.race([
        v('[data-crs-variant="size"]'),
        e
      ]), i = t == null ? void 0 : t.querySelector("price-list"), o = t == null ? void 0 : t.querySelector("variant-media"), r = (h = (l = t == null ? void 0 : t.querySelector("sale-price")) == null ? void 0 : l.textContent) == null ? void 0 : h.replace("Sale price", "").trim(), a = t == null ? void 0 : t.querySelectorAll("button");
      if (o && o.addEventListener("click", () => {
        const d = document.querySelector("product-gallery");
        d && (window.scrollTo({
          top: d.getBoundingClientRect().top,
          behavior: "smooth"
        }), f("exp_pdp_click_19", "Product Image", "click", "Sticky"));
      }), r && a && a.forEach((d) => {
        const b = d.querySelector(".crs-sticky-price");
        b && b.remove(), d.insertAdjacentHTML(
          "beforeend",
          /* HTML */
          ` <div class="crs-sticky-price">${r}</div> `
        );
      }), i) {
        let d, b = [], A = [], x = [], k = [];
        n instanceof Element && (d = (C = (c = n.querySelector("variant-option-value")) == null ? void 0 : c.textContent) == null ? void 0 : C.trim(), b = n.querySelectorAll(
          ".variant-picker__option-values input"
        ), x = n.querySelectorAll(
          ".variant-picker__option-values label"
        )), s instanceof Element && (A = s.querySelectorAll(
          ".variant-picker__option-values input"
        ), k = s.querySelectorAll(
          ".variant-picker__option-values label"
        ));
        let S, F, H, $;
        b.forEach((u) => {
          var m;
          u.checked && (F = u.id, S = (m = u.nextElementSibling) == null ? void 0 : m.outerHTML);
        }), A.forEach((u) => {
          u.checked && ($ = u.id, H = u.value);
        });
        const ye = (
          /* HTML */
          `
        <div class="crs-sticky-variant-picker">
          ${b.length > 0 ? (
            /* HTML */
            `<div
                class="crs-sticky-variant-item crs-sticky-variant-color"
              >
                <div class="crs-sticky-variant-swatch">
                  ${S}
                </div>
                <div class="crs-sticky-variant-item-wrap">
                  <div class="crs-sticky-variant-label">Color</div>
                  <div class="crs-sticky-variant-value">${d}</div>
                </div>
              </div>`
          ) : ""}
          ${A.length > 0 ? (
            /* HTML */
            `<div
                class="crs-sticky-variant-item crs-sticky-variant-size"
              >
                <div class="crs-sticky-variant-item-wrap">
                  <div class="crs-sticky-variant-label">Size</div>
                  <div class="crs-sticky-variant-value">${H}</div>
                </div>
              </div>`
          ) : ""}
          <div
            hidden
            class="crs-sticky-variant-picker-options"
            data-crs-options="color"
          >
            <div class="crs-sticky-variant-picker-options-header">
              <button class="crs-sticky-variant-picker-options-back">
                <span></span>
                <div class="crs-sticky-variant-picker-options-label">
                  Color:
                </div>
                <div class="crs-sticky-variant-picker-options-value">
                  ${d}
                </div>
              </button>
            </div>
            <div class="crs-sticky-variant-picker-options-list">
              ${Array.from(x).map((u) => {
            const m = u.cloneNode(!0);
            return u.getAttribute("for") === F && m.classList.add("crs-selected"), m.outerHTML;
          }).join("")}
            </div>
          </div>
          <div
            hidden
            class="crs-sticky-variant-picker-options"
            data-crs-options="size"
          >
            <div class="crs-sticky-variant-picker-options-header">
              <button class="crs-sticky-variant-picker-options-back">
                <span></span>
                <div class="crs-sticky-variant-picker-options-label">Size:</div>
                <div class="crs-sticky-variant-picker-options-value">
                  ${H}
                </div>
              </button>
              <button class="crs-sticky-variant-picker-option-dimension">
                View Dimensions
              </button>
            </div>
            <div class="crs-sticky-variant-picker-options-list">
              ${Array.from(k).map((u) => {
            const m = u.cloneNode(!0);
            return u.getAttribute("for") === $ && m.classList.add("crs-selected"), m.outerHTML;
          }).join("")}
            </div>
          </div>
        </div>
      `
        ), N = t.querySelector(
          ".crs-sticky-variant-picker"
        );
        N && N.remove(), i.insertAdjacentHTML("afterend", ye), this.initializeDragScroll();
        const O = t.querySelector(
          ".crs-sticky-variant-picker-options .crs-sticky-variant-picker-option-dimension"
        );
        O && O.addEventListener("click", () => {
          const u = document.getElementById(
            "dimension-info-dialog"
          );
          u && (u.open(), f("exp_pdp_click_18", "View Dimensions", "click", "Sticky"));
        });
        const p = t.querySelector(
          ".crs-sticky-variant-picker"
        ), Z = p == null ? void 0 : p.querySelector(
          ".crs-sticky-variant-color"
        ), P = p == null ? void 0 : p.querySelector(
          ".crs-sticky-variant-size"
        ), B = p == null ? void 0 : p.querySelectorAll(
          ".crs-sticky-variant-picker-options"
        ), y = p == null ? void 0 : p.querySelector(
          '.crs-sticky-variant-picker-options[data-crs-options="color"]'
        ), w = p == null ? void 0 : p.querySelector(
          '.crs-sticky-variant-picker-options[data-crs-options="size"]'
        ), W = p == null ? void 0 : p.querySelectorAll(
          ".crs-sticky-variant-picker-options-back"
        );
        Z == null || Z.addEventListener("click", () => {
          y == null || y.removeAttribute("hidden"), w == null || w.setAttribute("hidden", "true"), f("exp_pdp_click_15", "Color", "click", "Sticky"), setTimeout(() => {
            const u = y == null ? void 0 : y.querySelector(
              ".crs-sticky-variant-picker-options-list"
            ), m = y == null ? void 0 : y.querySelector(
              ".crs-selected"
            );
            if (m && u) {
              const E = u.clientWidth, L = u.scrollLeft, _ = m.offsetLeft, I = m.clientWidth, T = _ + I, M = L, D = L + E;
              let q;
              if (T > D)
                q = T - E + 10;
              else if (_ < M)
                q = _;
              else
                return;
              u.scrollTo({
                left: Math.max(0, q),
                behavior: "smooth"
              });
            }
          }, 50);
        }), P == null || P.addEventListener("click", () => {
          w == null || w.removeAttribute("hidden"), y == null || y.setAttribute("hidden", "true"), f("exp_pdp_click_15", "Size", "click", "Sticky"), setTimeout(() => {
            const u = w == null ? void 0 : w.querySelector(
              ".crs-sticky-variant-picker-options-list"
            ), m = w == null ? void 0 : w.querySelector(
              ".crs-selected"
            );
            if (m && u) {
              const E = u.clientWidth, L = u.scrollLeft, _ = m.offsetLeft, I = m.clientWidth, T = _ + I, M = L, D = L + E;
              let q;
              if (T > D)
                q = T - E + 10;
              else if (_ < M)
                q = _;
              else
                return;
              u.scrollTo({
                left: Math.max(0, q),
                behavior: "smooth"
              });
            }
          }, 50);
        }), W == null || W.forEach((u) => {
          u.addEventListener("click", () => {
            B == null || B.forEach((m) => {
              m.setAttribute("hidden", "true"), f("exp_pdp_click_17", "Back", "click", "Sticky");
            });
          });
        });
        const R = p == null ? void 0 : p.querySelector(
          '.crs-sticky-variant-picker-options[data-crs-options="color"] .crs-sticky-variant-picker-options-list'
        ), z = p == null ? void 0 : p.querySelector(
          '.crs-sticky-variant-picker-options[data-crs-options="size"] .crs-sticky-variant-picker-options-list'
        );
        R == null || R.addEventListener("click", (u) => {
          var E;
          this.disableScroll(), setTimeout(() => this.enableScroll(), 100);
          const m = u.target.closest("label");
          if (m) {
            const L = m.getAttribute("for");
            if (L) {
              const _ = document.getElementById(
                L
              );
              if (_) {
                _.click(), R.querySelectorAll("label").forEach(
                  (we) => we.classList.remove("crs-selected")
                ), m.classList.add("crs-selected");
                const T = _.value, M = (E = _.nextElementSibling) == null ? void 0 : E.outerHTML, D = p == null ? void 0 : p.querySelector(
                  ".crs-sticky-variant-color .crs-sticky-variant-value"
                ), q = p == null ? void 0 : p.querySelector(
                  ".crs-sticky-variant-color .crs-sticky-variant-swatch"
                ), U = y == null ? void 0 : y.querySelector(
                  ".crs-sticky-variant-picker-options-value"
                );
                D && (D.textContent = T), q && M && (q.innerHTML = M), U && (U.textContent = T), y == null || y.setAttribute("hidden", "true");
              }
            }
            f("exp_pdp_click_16", "Variant Item", "click", "Sticky Color"), f("exp_pdp_click_16.1", `${m.textContent.trim()}`, "click", "Sticky Color");
          }
        }), z == null || z.addEventListener("click", (u) => {
          this.disableScroll(), setTimeout(() => this.enableScroll(), 100);
          const m = u.target.closest("label");
          if (m) {
            const E = m.getAttribute("for");
            if (E) {
              const L = document.getElementById(
                E
              );
              if (L) {
                L.click(), z.querySelectorAll("label").forEach(
                  (D) => D.classList.remove("crs-selected")
                ), m.classList.add("crs-selected");
                const I = L.value, T = p == null ? void 0 : p.querySelector(
                  ".crs-sticky-variant-size .crs-sticky-variant-value"
                ), M = w == null ? void 0 : w.querySelector(
                  ".crs-sticky-variant-picker-options-value"
                );
                T && (T.textContent = I), M && (M.textContent = I), w == null || w.setAttribute("hidden", "true");
              }
            }
            f("exp_pdp_click_16", "Variant Item", "click", "Sticky Size"), f("exp_pdp_click_16.1", `${m.textContent.trim()}`, "click", "Sticky Size");
          }
        });
      }
    }
    rechangeStickySection() {
      document.addEventListener("variant:change", () => {
        const e = document.querySelector("product-quick-add");
        e && !e.classList.contains("is-visible") && this.changeStickySection();
      });
    }
    disableScroll() {
      const e = window.pageYOffset || document.documentElement.scrollTop, t = window.pageXOffset || document.documentElement.scrollLeft;
      window.onscroll = () => {
        window.scrollTo(t, e);
      };
    }
    enableScroll() {
      window.onscroll = null;
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = ce, document.head.appendChild(e);
    }
  }
  const de = `/* Reviews Component Styles */

.review-block .text-reviews {
  display: none;
}
.crs-review {
  margin-top: 24px;
}

.crs-review-title {
  color: #1a1a1a;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 140% */
}

.crs-review-average-rating {
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #717171;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 19.6px; /* 140% */
}
/* Tabs Navigation */
.crs-reviews-tabs {
  margin-top: 22px;
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 24px;
}

.crs-reviews-tab {
  flex-shrink: 0;
  height: 42px;
  background: none;
  border: none;
  padding: 12px 14px;
  border-radius: 3.75rem;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  position: relative;
}

.crs-reviews-tab-active {
  opacity: 1 !important;
  border: 2px solid #000;
}

.crs-reviews-tab > * {
  height: 100%;
}

/* Content Area */
.crs-reviews-content {
  position: relative;
}

.crs-review-item {
  position: relative;
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.crs-review-item-active {
  display: block;
  opacity: 1;
}

/* Slider Container with Navigation */
.crs-reviews-slider-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
}

.crs-slider-arrow {
  background: #fff;
  border: 2px solid #e5e5e5;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
  z-index: 2;
}

.crs-slider-arrow svg {
  color: #666;
  transition: color 0.3s ease;
}

.crs-slider-arrow:hover svg {
  color: #333;
}

/* Reviews Slider */
.crs-reviews-slider {
  display: flex;
  gap: 5px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 16px;
  flex: 1;
  width: 100%;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  /* Hide scrollbar for all browsers */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    display: none;
  }
}

/* Individual Review Slide */
.crs-reviews-slide {
  display: flex;
  flex-direction: column;
  background: #fafafa;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  transition: all 0.3s ease;
  flex: 0 0 calc(33.333% - 3px);
  width: calc(33.333% - 3px);
  height: max-content;
  scroll-snap-align: start;
}

/* Review Header */
.crs-reviews-slide header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.crs-review-author {
  color: #1a1a1a;
  font-size: 16px;
  font-weight: 300;
  line-height: 22.4px;
}

.crs-review-icon {
  width: 20px;
  height: 20px;
}

.crs-review-icon svg {
  width: 20px;
  height: 20px;
}

.crs-review-icon img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

/* Star Rating */
.crs-review-stars {
  margin-bottom: 8px;
  display: flex;
  gap: 2px;
}

.crs-review-stars svg {
  width: 16px;
  height: 16px;
}

/* Review Text */
.crs-review-text {
  font-size: 13px;
  font-weight: 300;
  line-height: 20.8px;
}

.crs-review-text-short {
  display: -webkit-box;
  -webkit-line-clamp: 7;
  line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.6;
  max-height: calc(1.6em * 7);
}

.crs-review-text-full {
  display: none;
  line-height: 1.6;
}

/* Read More Button */
.crs-review-read-more {
  padding-top: 4px;
  font-size: 12px;
  color: #717171;
  cursor: pointer;
  font-weight: 300;

  margin-top: auto;
  display: inline-block;
  text-decoration: underline;
}

.crs-slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.crs-slider-prev {
  left: -12px;
}
.crs-slider-next {
  right: -12px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .crs-reviews-tabs {
    gap: 8px;
    justify-content: center;
  }

  .crs-reviews-slider-container {
    gap: 12px;
  }

  .crs-slider-arrow {
    width: 30px;
    height: 30px;
  }

  .crs-reviews-slider {
    gap: 16px;
  }

  .crs-reviews-slide {
    padding: 16px;
    flex: 0 0 calc(50% - 8px);
    min-width: calc(50% - 8px);
    max-width: calc(50% - 8px);
    scroll-snap-align: start;
  }

  .crs-review-author {
    font-size: 14px;
  }

  .crs-review-text {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .crs-reviews-tabs {
    gap: 4px;
  }

  .crs-reviews-slider-container {
    gap: 8px;
  }

  .crs-slider-arrow {
    width: 36px;
    height: 36px;
  }

  .crs-slider-arrow svg {
    width: 18px;
    height: 18px;
  }

  .crs-reviews-slider {
    gap: 12px;
  }

  .crs-reviews-slide {
    flex: 0 0 calc(50% - 6px);
    min-width: calc(50% - 6px);
    max-width: calc(50% - 6px);
    scroll-snap-align: start;
  }
}


.shopify-block:has(variant-sku) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}`, G = {
    trustpilot: [
      {
        author: "Kendra Fields",
        text: "It’s rare that something this visually striking is also this functional. The Amora sectional has completely elevated the look of my space. The neutral color options are perfection, and the curved arms add just the right touch of drama. Clients touring my home literally ask if they can sit down on it.",
        rating: !0
      },
      {
        author: "Marcus Jennings",
        text: `If you're looking for a luxury sectional that makes a statement
              and delivers on comfort, this is the one. I entertain often, and
              the Amora sectional gets compliments every time. Looks
              high-design, feels like a cloud. Can't ask for more.`,
        rating: !0
      },
      {
        author: "Isabelle Tran",
        text: "I’ve sourced dozens of sofas for clients over the years, and the Amora sectional stands out in every way. The silhouette is nothing short of stunning—sculptural, bold, and refined. It instantly became the centerpiece of our formal living room. What surprised me most, though, was the comfort. It looks like a design piece but feels like something you could sink into all day.",
        rating: !0
      },
      {
        author: "Julien Rousseau",
        text: "The lines of this sectional are pure art. Every time someone walks into my apartment, they ask where it’s from. I love how deep the seats are without looking bulky, and the low profile makes it feel modern and grounded. Worth every penny.",
        rating: !0
      }
    ],
    yelp: [
      {
        author: "BigEd R.",
        text: `Finally found my cloud sofa after months of searching online and in stores! Note, I am very selective.
        With so many online options, I got to sit on the sofa to feel it out.
        From my initial phone call to the closing
        transaction, Kevin provided excellent service with zero pressure.
        They offer curb side or white glove delivery (with a fee).
        Give them a call!
      `,
        rating: !0
      },
      {
        author: "Savannah S.",
        text: "Love my couch!! Joshua was very helpful through the entire process, I received my couch fast and had a minor issue with the color, they were quick to fix the problem :) 10/10 recommend very happy with my purchase!",
        rating: !0
      },
      {
        author: "Ashley S.",
        text: "After a few unsuccessful attempts at purchasing a sofa I called and made an appointment and visited Mario Capasa. Although the couch I wanted to purchase would not fit into my living room, Joshua was quick to problem solve and found me a replacement. I love my couch it's super comfortable and exactly what I wanted for my space. Joshua was patient, knowledgeable and very helpful. Thank you!",
        rating: !1
      },
      {
        author: "Ashkan A.",
        text: "They have a great selection of furniture, and we were impressed. We decided on the Amora couch, which turned out to be perfect for our living room - it looks stunning and feels incredibly comfortable. Jashua made the entire experience even better by patiently guiding us through the process, helping us choose the right piece and color, placing the order, and ensuring it was shipped smoothly. Couldn't be happier with both the couch and the excellent service!",
        rating: !1
      }
    ],
    reddit: [
      {
        author: "u/OpheliaOoze",
        text: "Surprisingly Smooth Experience My Mario Capasa order was just... boring in the best way. Ordered a sofa. It arrived. On time. No drama. Looked exactly like the photos. I almost didn’t trust it. I kept checking for secret damage like I was defusing a bomb. Nada. Just a great couch. Highly recommend.",
        rating: !1
      },
      {
        author: "u/Dani-Max",
        text: "I got their Mellow sofa about 4 months ago and honestly didn’t expect to love it this much. It’s way more solid than my old West Elm one, and I’m really picky about fabric texture. This one’s soft but doesn’t feel cheap. Holding up super well so far.",
        rating: !1
      },
      {
        author: "u/PrincessVan11",
        text: "We have the Mellow and it’s basically our family crash pad. It’s been peed on, sneezed on, drooled on, and hit with yogurt. Still looks great. The machine washable covers are not just marketing they actually come off easily and go back on without a wrestling match.",
        rating: !1
      },
      {
        author: "u/Folken77",
        text: "I bought the white one. My cat already threw up on it (thanks buddy) and it wiped right off with water and baking soda. That was the real test 😂",
        rating: !1
      }
    ]
  }, j = {
    trustpilot: (
      /* HTML */
      `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="82"
    height="21"
    viewBox="0 0 82 21"
    fill="none"
  >
    <path
      d="M21.7903 7.2688H29.9581V8.80726H26.7465V17.4557H24.9805V8.80726H21.7831V7.2688H21.7903ZM29.6091 10.0797H31.1188V11.5032H31.1473C31.1971 11.3019 31.2897 11.1078 31.425 10.9209C31.5603 10.7339 31.7241 10.5542 31.9163 10.4032C32.1086 10.2451 32.3222 10.1229 32.5572 10.0222C32.7922 9.92876 33.0343 9.87844 33.2765 9.87844C33.4616 9.87844 33.5969 9.88563 33.6681 9.89282C33.7393 9.9 33.8105 9.91438 33.8889 9.92157V11.4888C33.7749 11.4672 33.661 11.4528 33.5399 11.4385C33.4189 11.4241 33.3049 11.4169 33.191 11.4169C32.9204 11.4169 32.6641 11.4744 32.4219 11.5823C32.1798 11.6901 31.9733 11.8554 31.7953 12.0639C31.6173 12.2796 31.4748 12.5384 31.368 12.8547C31.2612 13.171 31.2114 13.5305 31.2114 13.9403V17.4485H29.602V10.0797H29.6091ZM41.2876 17.4557H39.7067V16.4277H39.6783C39.4789 16.8015 39.1869 17.0963 38.7952 17.3191C38.4036 17.542 38.0048 17.657 37.5989 17.657C36.6376 17.657 35.9397 17.4198 35.5125 16.9381C35.0852 16.4564 34.8716 15.7304 34.8716 14.7598V10.0797H36.4809V14.6017C36.4809 15.2487 36.602 15.7088 36.8512 15.9748C37.0933 16.2408 37.4423 16.3774 37.8838 16.3774C38.2256 16.3774 38.5033 16.327 38.7312 16.2192C38.959 16.1114 39.1442 15.9748 39.2795 15.7951C39.4219 15.6225 39.5216 15.4068 39.5857 15.1624C39.6498 14.918 39.6783 14.652 39.6783 14.3644V10.0869H41.2876V17.4557ZM44.0292 15.0905C44.079 15.565 44.2571 15.8957 44.5633 16.0898C44.8766 16.2767 45.2469 16.3774 45.6813 16.3774C45.8308 16.3774 46.0017 16.363 46.194 16.3414C46.3862 16.3199 46.5714 16.2695 46.7352 16.2048C46.9061 16.1401 47.0414 16.0395 47.1553 15.9101C47.2621 15.7807 47.312 15.6153 47.3049 15.4068C47.2977 15.1984 47.2194 15.0258 47.077 14.8964C46.9346 14.7598 46.7565 14.6592 46.5358 14.5729C46.315 14.4938 46.0658 14.4219 45.781 14.3644C45.4961 14.3069 45.2113 14.2422 44.9193 14.1775C44.6202 14.1128 44.3283 14.0265 44.0506 13.9331C43.7728 13.8396 43.5236 13.7102 43.3028 13.5449C43.0821 13.3867 42.9041 13.1782 42.7759 12.9266C42.6406 12.675 42.5765 12.3659 42.5765 11.992C42.5765 11.5894 42.6762 11.2587 42.8685 10.9856C43.0607 10.7124 43.31 10.4967 43.6019 10.3313C43.901 10.166 44.2286 10.051 44.5918 9.97908C44.9549 9.91438 45.3039 9.87844 45.6314 9.87844C46.0088 9.87844 46.372 9.92157 46.7138 10.0007C47.0556 10.0797 47.3689 10.2091 47.6467 10.3961C47.9244 10.5758 48.1523 10.813 48.3374 11.1006C48.5226 11.3881 48.6365 11.7404 48.6863 12.1502H47.0058C46.9274 11.762 46.7565 11.496 46.4788 11.3666C46.2011 11.23 45.8807 11.1653 45.5246 11.1653C45.4107 11.1653 45.2754 11.1725 45.1187 11.194C44.962 11.2156 44.8196 11.2516 44.6772 11.3019C44.5419 11.3522 44.428 11.4313 44.3283 11.5319C44.2357 11.6326 44.1859 11.762 44.1859 11.9273C44.1859 12.1286 44.2571 12.2868 44.3924 12.409C44.5277 12.5312 44.7057 12.6319 44.9264 12.7181C45.1472 12.7972 45.3964 12.8691 45.6813 12.9266C45.9661 12.9841 46.2581 13.0488 46.5572 13.1135C46.8491 13.1782 47.134 13.2645 47.4188 13.358C47.7036 13.4514 47.9529 13.5808 48.1736 13.7462C48.3944 13.9115 48.5724 14.1128 48.7077 14.3572C48.843 14.6017 48.9142 14.9108 48.9142 15.2703C48.9142 15.7088 48.8145 16.0754 48.6151 16.3846C48.4157 16.6865 48.1594 16.9381 47.8461 17.125C47.5327 17.312 47.1767 17.4557 46.7921 17.542C46.4076 17.6283 46.0231 17.6714 45.6457 17.6714C45.1828 17.6714 44.7555 17.6211 44.3639 17.5132C43.9722 17.4054 43.6304 17.2472 43.3456 17.0388C43.0607 16.8231 42.8329 16.5571 42.6691 16.2408C42.5053 15.9245 42.4198 15.5434 42.4056 15.1049H44.0292V15.0905ZM49.3415 10.0797H50.5592V7.86549H52.1685V10.0797H53.6212V11.2947H52.1685V15.2343C52.1685 15.4068 52.1756 15.5506 52.1899 15.68C52.2041 15.8022 52.2397 15.9101 52.2896 15.9963C52.3394 16.0826 52.4177 16.1473 52.5246 16.1905C52.6314 16.2336 52.7667 16.2552 52.9518 16.2552C53.0658 16.2552 53.1797 16.2552 53.2936 16.248C53.4076 16.2408 53.5215 16.2264 53.6354 16.1976V17.4557C53.4574 17.4773 53.2794 17.4917 53.1156 17.5132C52.9447 17.5348 52.7738 17.542 52.5958 17.542C52.1685 17.542 51.8267 17.4989 51.5703 17.4198C51.314 17.3407 51.1075 17.2185 50.9651 17.0603C50.8155 16.9022 50.7229 16.7081 50.666 16.4708C50.6161 16.2336 50.5805 15.9604 50.5734 15.6585V11.3091H49.3557V10.0797H49.3415ZM54.7606 10.0797H56.2845V11.079H56.3129C56.5408 10.6477 56.8541 10.3457 57.26 10.1588C57.6659 9.9719 58.1003 9.87844 58.5774 9.87844C59.1542 9.87844 59.6527 9.97908 60.08 10.1876C60.5072 10.3889 60.8633 10.6692 61.1481 11.0287C61.433 11.3881 61.6395 11.8051 61.7819 12.2796C61.9243 12.7541 61.9955 13.2645 61.9955 13.8037C61.9955 14.2997 61.9314 14.7814 61.8032 15.2415C61.6751 15.7088 61.4828 16.1186 61.2264 16.478C60.9701 16.8375 60.6425 17.1178 60.2437 17.3335C59.845 17.5492 59.3821 17.657 58.8409 17.657C58.6059 17.657 58.3709 17.6355 58.1359 17.5923C57.9009 17.5492 57.6731 17.4773 57.4594 17.3838C57.2458 17.2904 57.0393 17.1682 56.8613 17.0172C56.6761 16.8662 56.5266 16.6937 56.3984 16.4996H56.3699V20.1804H54.7606V10.0797ZM60.3862 13.7749C60.3862 13.4442 60.3434 13.1207 60.258 12.8044C60.1725 12.4881 60.0444 12.2149 59.8735 11.9705C59.7025 11.726 59.4889 11.5319 59.2397 11.3881C58.9833 11.2444 58.6914 11.1653 58.3638 11.1653C57.6873 11.1653 57.1746 11.4025 56.8328 11.877C56.491 12.3515 56.3201 12.9841 56.3201 13.7749C56.3201 14.1488 56.3628 14.4938 56.4554 14.8101C56.5479 15.1265 56.6761 15.3997 56.8613 15.6297C57.0393 15.8598 57.2529 16.0395 57.5022 16.1689C57.7514 16.3055 58.0434 16.3702 58.3709 16.3702C58.7412 16.3702 59.0474 16.2911 59.3038 16.1401C59.5601 15.9892 59.7666 15.7879 59.9304 15.5506C60.0942 15.3062 60.2153 15.033 60.2865 14.7239C60.3506 14.4148 60.3862 14.0984 60.3862 13.7749ZM63.2274 7.2688H64.8368V8.80726H63.2274V7.2688ZM63.2274 10.0797H64.8368V17.4557H63.2274V10.0797ZM66.2752 7.2688H67.8846V17.4557H66.2752V7.2688ZM72.8195 17.657C72.2355 17.657 71.7157 17.5564 71.26 17.3623C70.8042 17.1682 70.4197 16.895 70.0992 16.5571C69.7859 16.212 69.5438 15.8022 69.38 15.3278C69.2162 14.8533 69.1308 14.3285 69.1308 13.7605C69.1308 13.1998 69.2162 12.6822 69.38 12.2077C69.5438 11.7332 69.7859 11.3234 70.0992 10.9784C70.4126 10.6333 70.8042 10.3673 71.26 10.1732C71.7157 9.97908 72.2355 9.87844 72.8195 9.87844C73.4034 9.87844 73.9232 9.97908 74.379 10.1732C74.8347 10.3673 75.2192 10.6405 75.5397 10.9784C75.853 11.3234 76.0951 11.7332 76.2589 12.2077C76.4227 12.6822 76.5081 13.1998 76.5081 13.7605C76.5081 14.3285 76.4227 14.8533 76.2589 15.3278C76.0951 15.8022 75.853 16.212 75.5397 16.5571C75.2264 16.9022 74.8347 17.1682 74.379 17.3623C73.9232 17.5564 73.4034 17.657 72.8195 17.657ZM72.8195 16.3702C73.1755 16.3702 73.4888 16.2911 73.7523 16.1401C74.0158 15.9892 74.2294 15.7879 74.4003 15.5434C74.5712 15.299 74.6923 15.0186 74.7777 14.7095C74.8561 14.4004 74.8988 14.0841 74.8988 13.7605C74.8988 13.4442 74.8561 13.1351 74.7777 12.8188C74.6994 12.5025 74.5712 12.2293 74.4003 11.9848C74.2294 11.7404 74.0158 11.5463 73.7523 11.3953C73.4888 11.2444 73.1755 11.1653 72.8195 11.1653C72.4634 11.1653 72.1501 11.2444 71.8866 11.3953C71.6231 11.5463 71.4095 11.7476 71.2386 11.9848C71.0677 12.2293 70.9466 12.5025 70.8612 12.8188C70.7828 13.1351 70.7401 13.4442 70.7401 13.7605C70.7401 14.0841 70.7828 14.4004 70.8612 14.7095C70.9395 15.0186 71.0677 15.299 71.2386 15.5434C71.4095 15.7879 71.6231 15.9892 71.8866 16.1401C72.1501 16.2983 72.4634 16.3702 72.8195 16.3702ZM76.9781 10.0797H78.1958V7.86549H79.8052V10.0797H81.2579V11.2947H79.8052V15.2343C79.8052 15.4068 79.8123 15.5506 79.8265 15.68C79.8408 15.8022 79.8764 15.9101 79.9262 15.9963C79.9761 16.0826 80.0544 16.1473 80.1612 16.1905C80.268 16.2336 80.4033 16.2552 80.5885 16.2552C80.7024 16.2552 80.8164 16.2552 80.9303 16.248C81.0442 16.2408 81.1582 16.2264 81.2721 16.1976V17.4557C81.0941 17.4773 80.916 17.4917 80.7523 17.5132C80.5814 17.5348 80.4105 17.542 80.2324 17.542C79.8052 17.542 79.4634 17.4989 79.207 17.4198C78.9506 17.3407 78.7441 17.2185 78.6017 17.0603C78.4522 16.9022 78.3596 16.7081 78.3026 16.4708C78.2528 16.2336 78.2172 15.9604 78.2101 15.6585V11.3091H76.9924V10.0797H76.9781Z"
      fill="#191919"
    />
    <path
      d="M19.9104 7.26886H12.533L10.2543 0.18042L7.96844 7.26886L0.591064 7.26167L6.5656 11.647L4.27975 18.7283L10.2543 14.3501L16.2217 18.7283L13.943 11.647L19.9104 7.26886Z"
      fill="#00B67A"
    />
    <path
      d="M14.4558 13.2504L13.9431 11.6472L10.2544 14.3503L14.4558 13.2504Z"
      fill="#005128"
    />
  </svg>`
    ),
    yelp: (
      /* HTML */
      `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="19"
    viewBox="0 0 48 19"
    fill="none"
  >
    <path
      d="M38.4377 10.7297L39.2078 10.5515C39.2333 10.5458 39.2584 10.5391 39.2833 10.5313C39.4959 10.4741 39.678 10.3367 39.7913 10.1479C39.9046 9.95912 39.9402 9.73375 39.8906 9.51925L39.887 9.50558C39.8617 9.40279 39.8174 9.30564 39.7563 9.21916C39.67 9.10986 39.5632 9.01842 39.4419 8.94996C39.2991 8.8685 39.1496 8.79932 38.9951 8.74317L38.1512 8.43534C37.6776 8.25945 37.2034 8.08771 36.725 7.92013C36.4154 7.81019 36.1528 7.71333 35.924 7.64321C35.8812 7.62954 35.8337 7.61647 35.795 7.6034C35.5187 7.51842 35.3256 7.48336 35.161 7.48276C35.0514 7.47873 34.9423 7.4986 34.8413 7.541C34.7357 7.5864 34.6409 7.65363 34.5632 7.73829C34.5245 7.78233 34.4882 7.82835 34.4544 7.87616C34.3885 7.97736 34.3341 8.08558 34.2922 8.19883C34.1356 8.66197 34.0577 9.14805 34.0616 9.63691C34.0652 10.079 34.0771 10.6459 34.3201 11.0304C34.3783 11.1291 34.4568 11.2146 34.5507 11.2806C34.7236 11.4 34.8983 11.4161 35.0807 11.4292C35.3523 11.4482 35.6156 11.3816 35.8782 11.321L38.4359 10.7291L38.4377 10.7297ZM47.0252 6.64012C46.815 6.19905 46.5324 5.79632 46.1891 5.44865C46.1445 5.40465 46.0969 5.36394 46.0464 5.32683C46 5.29186 45.9518 5.25933 45.902 5.22938C45.8505 5.20141 45.7976 5.17621 45.7434 5.15391C45.6366 5.11184 45.5222 5.0928 45.4076 5.09805C45.2981 5.10468 45.1913 5.13488 45.0945 5.18659C44.9477 5.25968 44.789 5.37675 44.5775 5.57285C44.5483 5.60256 44.5121 5.63525 44.4788 5.66555C44.3047 5.82957 44.1104 6.0322 43.8798 6.26753C43.5233 6.62764 43.1726 6.99013 42.8238 7.35619L42.1999 8.00392C42.0858 8.12277 41.9818 8.24994 41.8891 8.38602C41.81 8.50071 41.7542 8.62966 41.7245 8.76634C41.7069 8.87083 41.7093 8.9777 41.7316 9.08129L41.7352 9.09496C41.7846 9.3092 41.9152 9.49589 42.0996 9.61572C42.2839 9.73555 42.5075 9.77915 42.7234 9.73734C42.7573 9.73259 42.784 9.72665 42.8007 9.72308L46.1285 8.95293C46.3911 8.89232 46.6573 8.83646 46.8927 8.69978C47.0507 8.60768 47.2011 8.51676 47.3039 8.33373C47.3591 8.23286 47.3925 8.12151 47.4019 8.00689C47.453 7.55348 47.2159 7.03827 47.0252 6.64012ZM41.0684 8.04136C41.3097 7.73829 41.3085 7.28666 41.3299 6.91704C41.4024 5.68338 41.4784 4.44972 41.5385 3.21487C41.5622 2.74779 41.6121 2.28666 41.5836 1.81542C41.561 1.42678 41.5581 0.980501 41.3126 0.66139C40.8788 0.0992313 39.9554 0.145582 39.3255 0.233531C39.1323 0.260272 38.9392 0.295927 38.7473 0.342279C38.5553 0.38863 38.3658 0.438547 38.1798 0.498566C37.5754 0.696451 36.725 1.06013 36.5812 1.75718C36.5004 2.15117 36.6929 2.55348 36.8421 2.91359C37.0228 3.34917 37.27 3.74138 37.4958 4.15141C38.0906 5.23472 38.6974 6.31031 39.3023 7.38768C39.483 7.70858 39.6796 8.11623 40.0291 8.28262C40.0522 8.29272 40.0754 8.30164 40.0998 8.30936C40.2561 8.36879 40.4266 8.38067 40.59 8.34205L40.6198 8.33551C40.7701 8.29391 40.9062 8.2125 41.0131 8.0984C41.0328 8.08058 41.0512 8.06156 41.0684 8.04136ZM40.7808 11.3448C40.6867 11.2123 40.553 11.1129 40.399 11.061C40.2449 11.0092 40.0784 11.0074 39.9233 11.056C39.8864 11.0679 39.8514 11.0827 39.8163 11.1C39.7634 11.1273 39.7129 11.1591 39.6654 11.195C39.5269 11.2972 39.4099 11.4309 39.3041 11.5647C39.2767 11.5991 39.2524 11.6443 39.2203 11.674L38.6855 12.4109C38.3818 12.8233 38.0823 13.2369 37.7858 13.657C37.592 13.9286 37.4251 14.1574 37.2925 14.36C37.2676 14.3986 37.2414 14.4414 37.2177 14.4753C37.059 14.7207 36.9693 14.8996 36.9235 15.0588C36.8889 15.1649 36.8779 15.2773 36.8914 15.388C36.9063 15.5033 36.9449 15.6139 37.0055 15.7131C37.0376 15.763 37.0721 15.8112 37.1089 15.8575C37.1891 15.9497 37.2794 16.0326 37.3781 16.1047C37.7477 16.362 38.1524 16.5468 38.5785 16.6895C38.9326 16.8068 39.3007 16.8769 39.6731 16.898C39.7361 16.901 39.7997 16.8998 39.8633 16.8939C39.9217 16.8888 39.9798 16.8807 40.0374 16.8695C40.0951 16.8559 40.152 16.8393 40.2079 16.8196C40.3151 16.7816 40.4126 16.7204 40.4935 16.6404C40.5743 16.5604 40.6365 16.4635 40.6756 16.3567C40.7374 16.2022 40.7778 16.0061 40.8046 15.7161C40.8069 15.6745 40.8129 15.6246 40.817 15.5794C40.8378 15.3381 40.8479 15.0547 40.8634 14.7213C40.8889 14.2091 40.9097 13.6992 40.9258 13.187L40.9597 12.2778C40.9674 12.0674 40.9609 11.8356 40.9026 11.6271C40.8771 11.5271 40.8363 11.4318 40.7808 11.3448ZM46.8243 12.7668C46.7126 12.6444 46.5545 12.522 46.3043 12.371C46.2687 12.3508 46.2259 12.3241 46.1873 12.3009C45.9793 12.1761 45.7285 12.0442 45.4362 11.885C44.987 11.6394 44.5357 11.3978 44.0824 11.16L43.2802 10.7345C43.2386 10.7226 43.1964 10.6929 43.1572 10.6739C43.003 10.5949 42.8392 10.5364 42.6699 10.4998C42.6115 10.4887 42.5523 10.4828 42.4928 10.4819C42.4545 10.4808 42.4161 10.483 42.3781 10.4885C42.2176 10.5132 42.0691 10.588 41.9536 10.7022C41.8381 10.8164 41.7617 10.9641 41.7352 11.1243C41.7233 11.2265 41.7268 11.3299 41.7465 11.4304C41.7857 11.6443 41.8813 11.8552 41.98 12.0401L42.4084 12.8429C42.6467 13.2957 42.8886 13.7461 43.1358 14.1948C43.2957 14.4872 43.4282 14.7379 43.5524 14.9453C43.5761 14.9846 43.6029 15.0267 43.6237 15.0624C43.7746 15.312 43.8964 15.4695 44.0195 15.5818C44.0997 15.659 44.1954 15.7179 44.3005 15.7541C44.4105 15.7904 44.5275 15.8034 44.6428 15.7921C44.7016 15.785 44.7599 15.7746 44.8175 15.7612C44.8746 15.7464 44.9304 15.728 44.9857 15.7072C45.0451 15.6846 45.1028 15.6578 45.158 15.6269C45.4836 15.4443 45.7837 15.2195 46.0506 14.9584C46.3709 14.6435 46.6538 14.2994 46.8736 13.9066C46.9044 13.8508 46.931 13.7928 46.9533 13.7331C46.974 13.6782 46.9919 13.6223 47.0068 13.5655C47.0198 13.5073 47.0299 13.449 47.0365 13.3902C47.0475 13.2746 47.0342 13.158 46.9972 13.0479C46.961 12.9427 46.9016 12.8468 46.8243 12.7668Z"
      fill="#FF1A1A"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.2017 4.95778C19.2017 4.29638 19.7413 3.75562 20.3914 3.75562C21.0332 3.75562 21.5532 4.29638 21.5811 4.96729V14.3505C21.5811 15.0125 21.0421 15.5526 20.3914 15.5526C20.2341 15.5526 20.0784 15.5215 19.9333 15.4609C19.7881 15.4003 19.6564 15.3116 19.5458 15.1998C19.4351 15.088 19.3477 14.9554 19.2887 14.8096C19.2297 14.6638 19.2001 14.5077 19.2017 14.3505V4.95778ZM18.0964 10.7541C18.0869 10.9401 18.0406 11.2847 17.7993 11.5367C17.5384 11.8071 17.1855 11.8719 16.981 11.8719C16.1307 11.8766 15.2803 11.879 14.4299 11.8814C13.5801 11.8837 12.7292 11.8861 11.8788 11.8909C11.9537 12.1238 12.1022 12.478 12.4368 12.8036C12.6412 12.9997 12.8361 13.1115 12.9199 13.1578C13.0221 13.2232 13.3751 13.4098 13.8119 13.4098C14.2766 13.4098 14.6854 13.2606 15.0854 13.0556L15.1187 13.0378C15.3962 12.8946 15.6832 12.746 15.9863 12.6919C16.284 12.6456 16.6001 12.7014 16.8325 12.9058C17.1112 13.1489 17.2229 13.5031 17.1207 13.8662C16.9995 14.2762 16.656 14.6304 16.2935 14.8449C16.0891 14.9655 15.8656 15.0683 15.6428 15.1521C15.0675 15.356 14.4593 15.4507 13.8493 15.4314C13.7008 15.4314 13.5427 15.4314 13.3846 15.4136C13.2187 15.3922 13.0542 15.3608 12.892 15.3197C12.6355 15.2641 12.3862 15.1797 12.1486 15.0683C11.9107 14.9629 11.6834 14.835 11.47 14.6862C11.2571 14.5332 11.0582 14.3616 10.8757 14.1734C10.694 13.983 10.529 13.7775 10.3825 13.5589C9.88093 12.7947 9.64858 11.8534 9.69493 10.9401C9.73237 10.0457 10.0295 9.15139 10.5685 8.42403C10.6258 8.33878 10.6893 8.25794 10.7586 8.18217C10.786 8.15067 10.8127 8.11977 10.8383 8.08887C11.5038 7.27475 12.3934 7.01744 12.7601 6.91107L12.7803 6.90513C13.5246 6.69376 14.3131 6.69376 15.0574 6.90513C15.2339 6.95208 16.2281 7.2593 16.9995 8.08887C17.0369 8.12631 17.1391 8.24694 17.2692 8.42403C17.5992 8.8733 17.8415 9.38073 17.9835 9.91975L17.9847 9.9245C18.0406 10.1295 18.0964 10.4088 18.0964 10.7541ZM12.6412 9.21616C12.2741 9.51467 12.0186 9.92845 11.9162 10.3904H15.9678C15.8585 9.92914 15.6006 9.51658 15.2339 9.21616C14.8644 8.91973 14.4062 8.75569 13.9325 8.75027C13.756 8.75027 13.1802 8.7782 12.6412 9.21616ZM28.049 6.74706C26.99 6.74706 26.0231 7.22246 25.3356 7.99558V7.96765C25.3269 7.65338 25.1938 7.35543 24.9654 7.13935C24.7371 6.92326 24.4322 6.80673 24.118 6.8154C23.8037 6.82407 23.5058 6.95722 23.2897 7.18557C23.0736 7.41391 22.9571 7.71875 22.9657 8.03301V16.9883C22.9657 17.6497 23.4958 18.1804 24.1554 18.1804C24.815 18.1804 25.3451 17.6497 25.3451 16.9877V14.1924C26.0327 14.9566 26.99 15.4409 28.0585 15.4409C30.1865 15.4409 31.9151 13.512 31.9151 11.1082C31.9056 8.70392 30.177 6.74706 28.049 6.74706ZM27.5284 13.4936C26.3209 13.4936 25.3356 12.4405 25.3356 11.1267C25.3356 9.80328 26.3114 8.75027 27.5284 8.75027C28.7371 8.75027 29.7218 9.80328 29.7218 11.1267C29.7129 12.44 28.7371 13.4936 27.529 13.4936H27.5284ZM7.91099 11.7322L7.52057 12.5897C7.34407 12.9623 7.16758 13.3444 7 13.7265C6.94652 13.8436 6.89304 13.963 6.83837 14.0848C6.09555 15.7368 5.21428 17.6985 3.29247 18.1156C2.36307 18.3206 0.959446 18.0407 0.439477 17.1648C-0.0810868 16.2794 0.69025 15.2638 1.68443 15.4968C1.84131 15.5324 1.99582 15.6091 2.15092 15.6863C2.41001 15.8153 2.67326 15.9466 2.95791 15.8884C3.22711 15.842 3.39468 15.6459 3.60802 15.3946C3.83701 15.1276 4.00222 14.812 4.09115 14.4717C4.08615 14.461 4.08159 14.4501 4.07748 14.439C4.07334 14.4281 4.06878 14.4174 4.06381 14.4069C3.82136 13.9553 3.6104 13.5518 3.4339 13.2149C3.31862 12.995 3.21879 12.8036 3.1344 12.6456L2.72853 11.8766C2.4314 11.3133 2.38268 11.2206 2.25135 10.9775C1.9625 10.432 1.65893 9.89439 1.34095 9.36532C0.996289 8.78771 0.643899 8.14473 0.931516 7.46432C1.03974 7.20056 1.24312 6.98709 1.50134 6.86623C1.75956 6.74538 2.05376 6.72596 2.32563 6.81183C2.92404 6.99367 3.18848 7.56296 3.43688 8.09541C3.48144 8.19108 3.52601 8.28616 3.57118 8.37768C3.97051 9.16981 4.36094 9.96194 4.75136 10.7535C4.78582 10.8325 4.83812 10.9401 4.9017 11.0702C4.95875 11.1867 5.02471 11.3216 5.09483 11.4713C5.13168 11.5486 5.16614 11.6211 5.19823 11.6864C5.23864 11.7696 5.2737 11.8421 5.29926 11.9004C5.4805 11.4482 5.66413 10.9983 5.84775 10.5491C6.03137 10.0992 6.215 9.64937 6.39624 9.19774C6.401 9.17219 6.44438 9.07592 6.50915 8.93033C6.60649 8.71533 6.70039 8.4988 6.79083 8.28081C7.03209 7.6931 7.32209 6.98654 7.96685 6.79341C8.19546 6.72731 8.43897 6.73395 8.66363 6.81242C8.88829 6.8909 9.08298 7.03731 9.22072 7.23137C9.36096 7.42747 9.41682 7.65091 9.42573 7.87435C9.43346 8.36876 9.19397 8.89943 8.98896 9.35522C8.93904 9.46634 8.8915 9.57271 8.84931 9.67314L8.82495 9.72781C8.7679 9.85498 8.61399 10.202 8.34776 10.7725C8.25149 10.9769 8.15938 11.1819 8.06609 11.3887C8.01498 11.5022 7.96388 11.6169 7.91099 11.7322Z"
      fill="black"
    />
  </svg>`
    ),
    averageStars: (
      /* HTML */
      `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="77"
    height="13"
    fill="none"
  >
    <path
      fill="#000"
      fill-rule="evenodd"
      d="M6.547.942 7.91 3.838c.069.146.2.248.354.271l3.052.466a.465.465 0 0 1 .31.19.498.498 0 0 1-.05.641L9.365 7.665a.49.49 0 0 0-.133.435l.53 3.187a.486.486 0 0 1-.384.555.487.487 0 0 1-.303-.05l-2.719-1.505a.435.435 0 0 0-.437 0L3.18 11.8a.465.465 0 0 1-.634-.205c-.048-.096-.064-.205-.048-.31l.53-3.188a.507.507 0 0 0-.133-.435L.671 5.404a.508.508 0 0 1-.002-.69l.002-.003a.525.525 0 0 1 .266-.138l3.053-.466a.48.48 0 0 0 .353-.272L5.705.942a.472.472 0 0 1 .27-.248.447.447 0 0 1 .359.027.496.496 0 0 1 .213.221ZM22.547.942l1.363 2.896c.069.146.2.248.354.271l3.052.466a.465.465 0 0 1 .31.19.498.498 0 0 1-.05.641l-2.212 2.259a.49.49 0 0 0-.133.435l.53 3.187a.486.486 0 0 1-.383.555.487.487 0 0 1-.304-.05l-2.719-1.505a.435.435 0 0 0-.437 0L19.18 11.8a.465.465 0 0 1-.634-.205c-.048-.096-.064-.205-.048-.31l.53-3.188a.507.507 0 0 0-.133-.435l-2.224-2.258a.508.508 0 0 1-.002-.69l.002-.003a.524.524 0 0 1 .266-.138l3.053-.466a.48.48 0 0 0 .353-.272L21.705.942a.472.472 0 0 1 .27-.248.447.447 0 0 1 .359.027.496.496 0 0 1 .213.221ZM38.547.942l1.364 2.896c.068.146.2.248.353.271l3.052.466a.465.465 0 0 1 .31.19.498.498 0 0 1-.05.641l-2.212 2.259a.49.49 0 0 0-.133.435l.53 3.187a.486.486 0 0 1-.384.555.487.487 0 0 1-.303-.05l-2.719-1.505a.435.435 0 0 0-.437 0L35.18 11.8a.465.465 0 0 1-.634-.205c-.048-.096-.064-.205-.048-.31l.53-3.188a.507.507 0 0 0-.133-.435l-2.224-2.258a.508.508 0 0 1-.002-.69l.002-.003a.524.524 0 0 1 .266-.138l3.053-.466a.48.48 0 0 0 .353-.272L37.705.942a.472.472 0 0 1 .27-.248.447.447 0 0 1 .359.027.496.496 0 0 1 .213.221ZM54.547.942l1.364 2.896c.068.146.2.248.353.271l3.052.466a.465.465 0 0 1 .31.19.498.498 0 0 1-.05.641l-2.212 2.259a.49.49 0 0 0-.133.435l.53 3.187a.486.486 0 0 1-.384.555.487.487 0 0 1-.303-.05l-2.719-1.505a.435.435 0 0 0-.437 0L51.18 11.8a.465.465 0 0 1-.634-.205c-.048-.096-.064-.205-.048-.31l.53-3.188a.507.507 0 0 0-.133-.435l-2.224-2.258a.508.508 0 0 1-.002-.69l.002-.003a.524.524 0 0 1 .266-.138l3.053-.466a.48.48 0 0 0 .353-.272L53.705.942a.472.472 0 0 1 .27-.248.447.447 0 0 1 .359.027.496.496 0 0 1 .213.221Z"
      clip-rule="evenodd"
    />
    <path
      fill="#D2D2D2"
      fill-rule="evenodd"
      d="m70.666.942 1.363 2.896c.068.146.2.248.353.271l3.053.466a.465.465 0 0 1 .31.19.498.498 0 0 1-.05.641l-2.212 2.259a.49.49 0 0 0-.133.435l.53 3.187a.486.486 0 0 1-.384.555.487.487 0 0 1-.304-.05l-2.718-1.505a.435.435 0 0 0-.437 0L67.298 11.8a.465.465 0 0 1-.633-.205.519.519 0 0 1-.048-.31l.53-3.188a.507.507 0 0 0-.133-.435L64.79 5.404a.508.508 0 0 1-.002-.69l.002-.003a.525.525 0 0 1 .266-.138l3.053-.466a.48.48 0 0 0 .353-.272L69.824.942a.472.472 0 0 1 .27-.248.447.447 0 0 1 .359.027.496.496 0 0 1 .213.221Z"
      clip-rule="evenodd"
    />
    <path
      fill="#000"
      fill-rule="evenodd"
      d="m70.666.942.817 1.889-1.01 7.456a.435.435 0 0 0-.436 0L67.298 11.8a.465.465 0 0 1-.634-.205.519.519 0 0 1-.047-.31l.53-3.188a.507.507 0 0 0-.134-.435L64.79 5.404a.508.508 0 0 1-.001-.69l.002-.003a.525.525 0 0 1 .266-.138l3.052-.466a.48.48 0 0 0 .354-.272L69.824.942a.472.472 0 0 1 .27-.248.447.447 0 0 1 .359.027.496.496 0 0 1 .213.221Z"
      clip-rule="evenodd"
    />
  </svg>`
    )
  }, pe = {
    trustpilot: (
      /* HTML */
      `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
  >
    <path
      d="M19 7.42306H11.9049L9.79148 0.629883L7.52708 7.42306H0.582947L6.16845 11.499L4.05501 18.2922L9.79148 14.0653L15.377 18.2922L13.2635 11.499L19 7.42306Z"
      fill="#00B67A"
    />
    <path
      d="M13.7165 13.0086L13.2636 11.499L9.79156 14.0654L13.7165 13.0086Z"
      fill="#005128"
    />
  </svg>`
    ),
    reddit: (
      /* HTML */
      `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="19"
    height="18"
    viewBox="0 0 19 18"
    fill="none"
  >
    <g clip-path="url(#clip0_373_6731)">
      <path
        d="M9.43335 0C4.46252 0 0.43335 4.02917 0.43335 9C0.43335 11.485 1.44085 13.735 3.06918 15.3642L1.35502 17.0783C1.01502 17.4183 1.25585 18 1.73668 18H9.43335C14.4042 18 18.4333 13.9708 18.4333 9C18.4333 4.02917 14.4042 0 9.43335 0Z"
        fill="#FF4500"
      />
      <path
        d="M14.535 11.0166C15.6957 11.0166 16.6367 10.0756 16.6367 8.9149C16.6367 7.75418 15.6957 6.81323 14.535 6.81323C13.3743 6.81323 12.4333 7.75418 12.4333 8.9149C12.4333 10.0756 13.3743 11.0166 14.535 11.0166Z"
        fill="url(#paint0_radial_373_6731)"
      />
      <path
        d="M4.33165 11.0166C5.49237 11.0166 6.43331 10.0756 6.43331 8.9149C6.43331 7.75418 5.49237 6.81323 4.33165 6.81323C3.17093 6.81323 2.22998 7.75418 2.22998 8.9149C2.22998 10.0756 3.17093 11.0166 4.33165 11.0166Z"
        fill="url(#paint1_radial_373_6731)"
      />
      <path
        d="M9.43835 15.22C12.7521 15.22 15.4384 13.2053 15.4384 10.72C15.4384 8.23469 12.7521 6.21997 9.43835 6.21997C6.12465 6.21997 3.43835 8.23469 3.43835 10.72C3.43835 13.2053 6.12465 15.22 9.43835 15.22Z"
        fill="url(#paint2_radial_373_6731)"
      />
      <path
        d="M7.66503 10.2901C7.63003 11.0468 7.1242 11.3218 6.53503 11.3218C5.94587 11.3218 5.4967 10.9109 5.5317 10.1543C5.5667 9.39759 6.07253 8.90259 6.6617 8.90259C7.25087 8.90259 7.70003 9.53425 7.66503 10.2909V10.2901Z"
        fill="url(#paint3_radial_373_6731)"
      />
      <path
        d="M11.2125 10.2901C11.2475 11.0468 11.7533 11.3218 12.3425 11.3218C12.9317 11.3218 13.3808 10.9109 13.3458 10.1543C13.3108 9.39759 12.805 8.90259 12.2158 8.90259C11.6267 8.90259 11.1775 9.53425 11.2125 10.2909V10.2901Z"
        fill="url(#paint4_radial_373_6731)"
      />
      <path
        d="M7.06915 9.95169C7.19801 9.95169 7.30248 9.8379 7.30248 9.69753C7.30248 9.55715 7.19801 9.44336 7.06915 9.44336C6.94028 9.44336 6.83582 9.55715 6.83582 9.69753C6.83582 9.8379 6.94028 9.95169 7.06915 9.95169Z"
        fill="#FFC49C"
      />
      <path
        d="M12.6175 9.95169C12.7464 9.95169 12.8508 9.8379 12.8508 9.69753C12.8508 9.55715 12.7464 9.44336 12.6175 9.44336C12.4886 9.44336 12.3842 9.55715 12.3842 9.69753C12.3842 9.8379 12.4886 9.95169 12.6175 9.95169Z"
        fill="#FFC49C"
      />
      <path
        d="M9.43833 11.9099C8.70833 11.9099 8.00833 11.9457 7.36167 12.0116C7.25083 12.0224 7.18083 12.1374 7.22417 12.2399C7.58667 13.1057 8.44167 13.7141 9.43833 13.7141C10.435 13.7141 11.2908 13.1057 11.6525 12.2399C11.6958 12.1374 11.625 12.0224 11.515 12.0116C10.8675 11.9457 10.1683 11.9099 9.43833 11.9099Z"
        fill="url(#paint5_radial_373_6731)"
      />
      <path
        d="M12.7242 5.60822C13.5466 5.60822 14.2133 4.94149 14.2133 4.11905C14.2133 3.29661 13.5466 2.62988 12.7242 2.62988C11.9017 2.62988 11.235 3.29661 11.235 4.11905C11.235 4.94149 11.9017 5.60822 12.7242 5.60822Z"
        fill="url(#paint6_radial_373_6731)"
      />
      <path
        d="M9.41674 6.40995C9.23841 6.40995 9.09424 6.33578 9.09424 6.22078C9.09424 4.88661 10.1801 3.80078 11.5142 3.80078C11.6926 3.80078 11.8367 3.94495 11.8367 4.12328C11.8367 4.30161 11.6926 4.44578 11.5142 4.44578C10.5359 4.44578 9.74007 5.24161 9.74007 6.21995C9.74007 6.33495 9.5959 6.40911 9.41757 6.40911L9.41674 6.40995Z"
        fill="url(#paint7_radial_373_6731)"
      />
      <path
        d="M5.66837 10.2209C5.70087 9.50759 6.17503 9.04092 6.72587 9.04092C7.24753 9.04092 7.65087 9.57342 7.66587 10.2351C7.68003 9.49509 7.23837 8.90259 6.6617 8.90259C6.08503 8.90259 5.5667 9.40675 5.5317 10.1693C5.4967 10.9318 5.94587 11.3218 6.53503 11.3218C6.5492 11.3218 6.5642 11.3218 6.57837 11.3218C6.0417 11.3084 5.6367 10.9226 5.6692 10.2218L5.66837 10.2209Z"
        fill="#842123"
      />
      <path
        d="M13.2084 10.2209C13.1759 9.50759 12.7017 9.04092 12.1509 9.04092C11.6292 9.04092 11.2259 9.57342 11.2109 10.2351C11.1967 9.49509 11.6384 8.90259 12.2151 8.90259C12.8042 8.90259 13.3101 9.40675 13.3451 10.1693C13.3801 10.9318 12.9309 11.3218 12.3417 11.3218C12.3276 11.3218 12.3126 11.3218 12.2984 11.3218C12.8351 11.3084 13.2401 10.9226 13.2076 10.2218L13.2084 10.2209Z"
        fill="#842123"
      />
    </g>
    <defs>
      <radialGradient
        id="paint0_radial_373_6731"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(14.5792 7.65367) scale(4.24833 3.69605)"
      >
        <stop stop-color="#FEFFFF" />
        <stop offset="0.4" stop-color="#FEFFFF" />
        <stop offset="0.51" stop-color="#F9FCFC" />
        <stop offset="0.62" stop-color="#EDF3F5" />
        <stop offset="0.7" stop-color="#DEE9EC" />
        <stop offset="0.72" stop-color="#D8E4E8" />
        <stop offset="0.76" stop-color="#CCD8DF" />
        <stop offset="0.8" stop-color="#C8D5DD" />
        <stop offset="0.83" stop-color="#CCD6DE" />
        <stop offset="0.85" stop-color="#D8DBE2" />
        <stop offset="0.88" stop-color="#EDE3E9" />
        <stop offset="0.9" stop-color="#FFEBEF" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_373_6731"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(4.37581 1.00615) scale(4.24833 3.69605)"
      >
        <stop stop-color="#FEFFFF" />
        <stop offset="0.4" stop-color="#FEFFFF" />
        <stop offset="0.51" stop-color="#F9FCFC" />
        <stop offset="0.62" stop-color="#EDF3F5" />
        <stop offset="0.7" stop-color="#DEE9EC" />
        <stop offset="0.72" stop-color="#D8E4E8" />
        <stop offset="0.76" stop-color="#CCD8DF" />
        <stop offset="0.8" stop-color="#C8D5DD" />
        <stop offset="0.83" stop-color="#CCD6DE" />
        <stop offset="0.85" stop-color="#D8DBE2" />
        <stop offset="0.88" stop-color="#EDE3E9" />
        <stop offset="0.9" stop-color="#FFEBEF" />
      </radialGradient>
      <radialGradient
        id="paint2_radial_373_6731"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(9.56752 7.12272) scale(12.815 8.9705)"
      >
        <stop stop-color="#FEFFFF" />
        <stop offset="0.4" stop-color="#FEFFFF" />
        <stop offset="0.51" stop-color="#F9FCFC" />
        <stop offset="0.62" stop-color="#EDF3F5" />
        <stop offset="0.7" stop-color="#DEE9EC" />
        <stop offset="0.72" stop-color="#D8E4E8" />
        <stop offset="0.76" stop-color="#CCD8DF" />
        <stop offset="0.8" stop-color="#C8D5DD" />
        <stop offset="0.83" stop-color="#CCD6DE" />
        <stop offset="0.85" stop-color="#D8DBE2" />
        <stop offset="0.88" stop-color="#EDE3E9" />
        <stop offset="0.9" stop-color="#FFEBEF" />
      </radialGradient>
      <radialGradient
        id="paint3_radial_373_6731"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(6.65414 10.6263) scale(1.14579 1.65979)"
      >
        <stop stop-color="#FF6600" />
        <stop offset="0.5" stop-color="#FF4500" />
        <stop offset="0.7" stop-color="#FC4301" />
        <stop offset="0.82" stop-color="#F43F07" />
        <stop offset="0.92" stop-color="#E53812" />
        <stop offset="1" stop-color="#D4301F" />
      </radialGradient>
      <radialGradient
        id="paint4_radial_373_6731"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12.2307 10.6263) rotate(180) scale(1.14579 1.65979)"
      >
        <stop stop-color="#FF6600" />
        <stop offset="0.5" stop-color="#FF4500" />
        <stop offset="0.7" stop-color="#FC4301" />
        <stop offset="0.82" stop-color="#F43F07" />
        <stop offset="0.92" stop-color="#E53812" />
        <stop offset="1" stop-color="#D4301F" />
      </radialGradient>
      <radialGradient
        id="paint5_radial_373_6731"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(9.4275 13.966) scale(3.775 2.4915)"
      >
        <stop stop-color="#172E35" />
        <stop offset="0.29" stop-color="#0E1C21" />
        <stop offset="0.73" stop-color="#030708" />
        <stop offset="1" />
      </radialGradient>
      <radialGradient
        id="paint6_radial_373_6731"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12.7567 2.73498) scale(3.31417 3.24788)"
      >
        <stop stop-color="#FEFFFF" />
        <stop offset="0.4" stop-color="#FEFFFF" />
        <stop offset="0.51" stop-color="#F9FCFC" />
        <stop offset="0.62" stop-color="#EDF3F5" />
        <stop offset="0.7" stop-color="#DEE9EC" />
        <stop offset="0.72" stop-color="#D8E4E8" />
        <stop offset="0.76" stop-color="#CCD8DF" />
        <stop offset="0.8" stop-color="#C8D5DD" />
        <stop offset="0.83" stop-color="#CCD6DE" />
        <stop offset="0.85" stop-color="#D8DBE2" />
        <stop offset="0.88" stop-color="#EDE3E9" />
        <stop offset="0.9" stop-color="#FFEBEF" />
      </radialGradient>
      <radialGradient
        id="paint7_radial_373_6731"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(11.3759 6.08995) scale(2.71667)"
      >
        <stop offset="0.48" stop-color="#7A9299" />
        <stop offset="0.67" stop-color="#172E35" />
        <stop offset="0.75" />
        <stop offset="0.82" stop-color="#172E35" />
      </radialGradient>
      <clipPath id="clip0_373_6731">
        <rect
          width="18"
          height="18"
          fill="white"
          transform="translate(0.43335)"
        />
      </clipPath>
    </defs>
  </svg>`
    ),
    yelp: (
      /* HTML */
      `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="19"
    viewBox="0 0 15 19"
    fill="none"
  >
    <g clip-path="url(#clip0_373_6565)">
      <mask
        id="mask0_373_6565"
        style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="15"
        height="19"
      >
        <path d="M0.216675 0H14.2167V19H0.216675V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_373_6565)">
        <path
          d="M4.82267 11.3801L5.62367 11.1941C5.65032 11.1888 5.67669 11.1821 5.70267 11.1741C5.92367 11.1147 6.11297 10.9718 6.23068 10.7756C6.34839 10.5793 6.38532 10.345 6.33367 10.1221L6.33067 10.1071C6.30427 10.0005 6.25814 9.89975 6.19467 9.81011C6.10488 9.69644 5.99381 9.60134 5.86767 9.53011C5.71903 9.44543 5.56347 9.3735 5.40267 9.31511L4.52467 8.99511C4.03173 8.81171 3.53704 8.63304 3.04067 8.45911C2.71767 8.34411 2.44467 8.24411 2.20767 8.17011C2.16267 8.15611 2.11267 8.14311 2.07267 8.12911C1.78567 8.04111 1.58367 8.00411 1.41267 8.00311C1.29863 7.9987 1.185 8.01917 1.07967 8.06311C0.970276 8.1108 0.872147 8.18099 0.791673 8.26911C0.751673 8.31511 0.713673 8.36211 0.677673 8.41211C0.609324 8.5175 0.552974 8.6302 0.509673 8.74811C0.34679 9.22921 0.265667 9.7342 0.269673 10.2421C0.273673 10.7021 0.285673 11.2921 0.539673 11.6911C0.60062 11.7936 0.682379 11.8822 0.779673 11.9511C0.959673 12.0751 1.14067 12.0911 1.32967 12.1051C1.61267 12.1251 1.88667 12.0551 2.15967 11.9931L4.82067 11.3791H4.82267V11.3801ZM13.7577 7.13011C13.539 6.67107 13.2449 6.25193 12.8877 5.89011C12.7966 5.80344 12.6963 5.72699 12.5887 5.66211C12.5354 5.6332 12.4807 5.60717 12.4247 5.58411C12.3167 5.53929 12.2001 5.51908 12.0833 5.52496C11.9666 5.53084 11.8526 5.56266 11.7497 5.61811C11.5967 5.69411 11.4307 5.81611 11.2117 6.02011C11.1817 6.05011 11.1427 6.08411 11.1087 6.11611C10.9277 6.28611 10.7257 6.49611 10.4857 6.74111C10.1157 7.11511 9.74967 7.49211 9.38767 7.87311L8.73767 8.54611C8.61899 8.66908 8.51093 8.80189 8.41467 8.94311C8.33267 9.06211 8.27467 9.19611 8.24367 9.33811C8.2259 9.44665 8.22862 9.55756 8.25167 9.66511C8.25167 9.67011 8.25367 9.67511 8.25467 9.67911C8.30597 9.90228 8.44195 10.0968 8.63394 10.2216C8.82592 10.3464 9.05889 10.3918 9.28367 10.3481C9.31058 10.3441 9.33728 10.3387 9.36367 10.3321L12.8257 9.53211C13.0987 9.47011 13.3757 9.41211 13.6207 9.27011C13.7857 9.17511 13.9417 9.08011 14.0487 8.89011C14.1061 8.78518 14.1409 8.66934 14.1507 8.55011C14.2037 8.07911 13.9567 7.54411 13.7577 7.13011ZM7.56067 8.58611C7.81067 8.27111 7.81067 7.80111 7.83267 7.41811C7.90767 6.13611 7.98667 4.85311 8.04867 3.57111C8.07267 3.08511 8.12467 2.60511 8.09567 2.11611C8.07067 1.71211 8.06767 1.24811 7.81267 0.91611C7.36167 0.33311 6.40067 0.38011 5.74567 0.47211C5.54329 0.500004 5.34239 0.537715 5.14367 0.58511C4.94367 0.63311 4.74667 0.68511 4.55367 0.74711C3.92467 0.95311 3.04067 1.33111 2.89167 2.05511C2.80667 2.46511 3.00767 2.88311 3.16267 3.25711C3.35067 3.70911 3.60867 4.11711 3.84267 4.54411C4.46267 5.66911 5.09367 6.78711 5.72267 7.90711C5.91067 8.24111 6.11567 8.66411 6.47967 8.83711C6.50352 8.84766 6.52789 8.857 6.55267 8.86511C6.71498 8.9263 6.89175 8.93815 7.06077 8.89919C7.22979 8.86022 7.38353 8.77218 7.50267 8.64611C7.52305 8.62715 7.54242 8.60712 7.56067 8.58611ZM7.25967 12.0171C7.19609 11.9277 7.11481 11.8522 7.02086 11.7955C6.92691 11.7387 6.82231 11.7019 6.71354 11.6873C6.60477 11.6727 6.49415 11.6805 6.38855 11.7104C6.28295 11.7403 6.18463 11.7916 6.09967 11.8611C5.95817 11.9726 5.83178 12.102 5.72367 12.2461C5.69567 12.2811 5.66967 12.3281 5.63667 12.3591L5.07967 13.1241C4.76467 13.5531 4.45267 13.9831 4.14467 14.4191C3.94367 14.7011 3.76967 14.9391 3.63167 15.1501C3.60567 15.1901 3.57867 15.2341 3.55367 15.2701C3.38867 15.5241 3.29567 15.7101 3.24767 15.8761C3.21175 15.9863 3.20048 16.1031 3.21467 16.2181C3.22987 16.338 3.27044 16.4532 3.33367 16.5561C3.36667 16.6081 3.40367 16.6581 3.44167 16.7061C3.52507 16.802 3.61899 16.8882 3.72167 16.9631C4.10567 17.2301 4.52667 17.4231 4.96967 17.5711C5.33767 17.6931 5.72067 17.7661 6.10867 17.7881C6.23606 17.7921 6.36349 17.782 6.48867 17.7581C6.54867 17.7441 6.60667 17.7281 6.66567 17.7071C6.77865 17.6649 6.88153 17.5995 6.96767 17.5151C7.04945 17.433 7.11226 17.3341 7.15167 17.2251C7.21567 17.0651 7.25867 16.8621 7.28567 16.5601L7.29867 16.4181C7.32067 16.1681 7.33067 15.8731 7.34667 15.5271C7.37367 14.9941 7.39467 14.4641 7.41067 13.9321L7.44667 12.9861C7.46056 12.7594 7.44033 12.5318 7.38667 12.3111C7.36024 12.207 7.31737 12.1077 7.25967 12.0171ZM13.5487 13.4951C13.4327 13.3681 13.2687 13.2411 13.0087 13.0841C12.9707 13.0641 12.9267 13.0351 12.8857 13.0111C12.6697 12.8811 12.4087 12.7441 12.1047 12.5791C11.6373 12.3235 11.1676 12.0722 10.6957 11.8251L9.86167 11.3831C9.81767 11.3701 9.77367 11.3391 9.73367 11.3191C9.57319 11.2374 9.40276 11.1769 9.22667 11.1391C9.12648 11.1203 9.02411 11.1159 8.92267 11.1261C8.75581 11.1521 8.6014 11.2301 8.48145 11.3489C8.36151 11.4678 8.28214 11.6215 8.25467 11.7881C8.24131 11.8937 8.24503 12.0007 8.26567 12.1051C8.30667 12.3271 8.40567 12.5471 8.50867 12.7391L8.95467 13.5731C9.20367 14.0431 9.45467 14.5121 9.71167 14.9781C9.87867 15.2821 10.0167 15.5431 10.1457 15.7581C10.1707 15.7991 10.1987 15.8431 10.2197 15.8801C10.3767 16.1401 10.5037 16.3031 10.6317 16.4201C10.7151 16.4999 10.8147 16.5609 10.9237 16.5991C11.0386 16.6373 11.1602 16.6509 11.2807 16.6391C11.3417 16.6311 11.4027 16.6211 11.4627 16.6071C11.5853 16.5733 11.704 16.5263 11.8167 16.4671C12.1547 16.2771 12.4667 16.0441 12.7447 15.7731C13.0777 15.4451 13.3717 15.0881 13.6007 14.6801C13.6327 14.6221 13.6607 14.5621 13.6837 14.5001C13.7047 14.4431 13.7237 14.3841 13.7387 14.3251C13.7527 14.2651 13.7627 14.2051 13.7697 14.1431C13.7813 14.0233 13.7677 13.9023 13.7297 13.7881C13.6919 13.6784 13.6304 13.5784 13.5497 13.4951H13.5487Z"
          fill="#FF1A1A"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_373_6565">
        <rect
          width="14"
          height="19"
          fill="white"
          transform="translate(0.216675)"
        />
      </clipPath>
    </defs>
  </svg>`
    )
  };
  class he {
    constructor() {
      this.addStyles(), this.changeReviewPosition(), this.changeTextReviews(), this.changeVideoReviews(), this.changeSKUPosition();
    }
    async changeReviewPosition() {
      const e = await v(".review-block"), t = await v(
        ".product-info__liquid:has(#ss-tabs)"
      );
      e && t && t.insertAdjacentElement("beforebegin", e);
    }
    async changeTextReviews() {
      const e = await v(".review-block .text-reviews");
      if (!e) return;
      const t = (
        /* HTML */
        `
      <div class="crs-review">
        <div class="crs-review-title">Too Comfortable to Keep Quiet About</div>
        <div class="crs-review-average-rating">
          4.8 average rating
          <span>${j.averageStars}</span>
        </div>

        <div class="crs-reviews-tabs">
          <button
            class="crs-reviews-tab crs-reviews-tab-active"
            data-crs-tab="trustpilot"
          >
            ${j.trustpilot}
          </button>
          <button class="crs-reviews-tab" data-crs-tab="yelp">
            ${j.yelp}
          </button>
          <button class="crs-reviews-tab" data-crs-tab="reddit">
            <img
              width=""
              height=""
              src="//mariocapasa.com/cdn/shop/files/reddit-1-logo-svg-vector_1.png?v=1748643778"
            />
          </button>
        </div>
        <div class="crs-reviews-content">
          <div
            class="crs-review-item crs-review-item-active"
            data-crs-item="trustpilot"
          >
            <div class="crs-reviews-slider-container">
              <button
                class="crs-slider-arrow crs-slider-prev"
                data-direction="prev"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div class="crs-reviews-slider"></div>
              <button
                class="crs-slider-arrow crs-slider-next"
                data-direction="next"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="crs-review-item" data-crs-item="yelp">
            <div class="crs-reviews-slider-container">
              <button
                class="crs-slider-arrow crs-slider-prev"
                data-direction="prev"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div class="crs-reviews-slider"></div>
              <button
                class="crs-slider-arrow crs-slider-next"
                data-direction="next"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="crs-review-item" data-crs-item="reddit">
            <div class="crs-reviews-slider-container">
              <button
                class="crs-slider-arrow crs-slider-prev"
                data-direction="prev"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 18L9 12L15 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div class="crs-reviews-slider"></div>
              <button
                class="crs-slider-arrow crs-slider-next"
                data-direction="next"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `
      );
      e.insertAdjacentHTML("afterend", t), this.initializeTabs(), this.renderReviews("trustpilot"), X(
        ".crs-review",
        "exp_pdp_view_2",
        "Reviews",
        "Visibility",
        0
      );
      const n = document.querySelector(".crs-review-average-rating");
      n && n.addEventListener("click", () => {
        f("exp_pdp_click_10", "Rating", "click", "Reviews");
      });
    }
    initializeTabs() {
      const e = document.querySelectorAll(".crs-reviews-tab");
      e.forEach((t) => {
        t.addEventListener("click", () => {
          const n = t.getAttribute(
            "data-crs-tab"
          );
          e.forEach((o) => o.classList.remove("crs-reviews-tab-active")), t.classList.add("crs-reviews-tab-active"), document.querySelectorAll(".crs-review-item").forEach(
            (o) => o.classList.remove("crs-review-item-active")
          );
          const i = document.querySelector(
            `[data-crs-item="${n}"]`
          );
          i && i.classList.add("crs-review-item-active"), this.renderReviews(n), f("exp_pdp_click_11", n, "click", "Reviews");
        });
      }), this.initializeReadMore(), this.initializeSliderNavigation();
    }
    initializeSliderNavigation() {
      var e, t;
      (e = document.querySelector(".crs-reviews-content")) == null || e.addEventListener("click", (n) => {
        const i = n.target.closest(".crs-slider-arrow");
        if (i) {
          const o = i.getAttribute("data-direction"), r = i.closest(".crs-review-item"), a = r == null ? void 0 : r.querySelector(
            ".crs-reviews-slider"
          ), l = r == null ? void 0 : r.getAttribute(
            "data-crs-item"
          );
          if (a && o && l) {
            const h = this.getSlideWidth(a);
            o === "next" ? (a.scrollTo({
              left: a.scrollLeft + h,
              behavior: "smooth"
            }), f("exp_pdp_click_13", "Next Arrow", "click", "Reviews")) : o === "prev" && (a.scrollTo({
              left: a.scrollLeft - h,
              behavior: "smooth"
            }), f("exp_pdp_click_14", "Prev Arrow", "click", "Reviews")), setTimeout(() => {
              this.updateArrowStates(l);
            }, 300);
          }
        }
      }), (t = document.querySelector(".crs-reviews-content")) == null || t.addEventListener(
        "scroll",
        (n) => {
          const s = n.target;
          if (s.classList.contains("crs-reviews-slider")) {
            const i = s.closest(".crs-review-item"), o = i == null ? void 0 : i.getAttribute(
              "data-crs-item"
            );
            o && this.updateArrowStates(o);
          }
        },
        !0
      ), window.addEventListener("resize", () => {
        ["trustpilot", "yelp", "reddit"].forEach((n) => {
          this.updateArrowStates(n);
        });
      });
    }
    initializeReadMore() {
      document.addEventListener("click", (e) => {
        const t = e.target;
        if (t.classList.contains("crs-review-read-more")) {
          const n = t.previousElementSibling, s = n.querySelector(
            ".crs-review-text-short"
          ), i = n.querySelector(
            ".crs-review-text-full"
          );
          t.textContent === "Read more" ? (s.style.display = "none", i.style.display = "block", t.textContent = "Read less", f("exp_pdp_click_12", "Read more", "click", "Reviews")) : (s.style.display = "-webkit-box", i.style.display = "none", t.textContent = "Read more");
        }
      });
    }
    parseTrustpilotReviewData() {
      const e = [];
      return document.querySelectorAll(
        ".review-block .text-reviews .card .card-content"
      ).forEach((n) => {
        var r, a;
        const s = ((r = n.querySelector("h2")) == null ? void 0 : r.textContent) || "", i = ((a = n.querySelector("p.wtc")) == null ? void 0 : a.textContent) || "";
        e.push({ author: s, text: i, rating: !0 });
      }), e.length === 0 ? G.trustpilot : e;
    }
    renderReviews(e) {
      const t = document.querySelector(
        `[data-crs-item="${e}"] .crs-reviews-slider`
      );
      if (!t) return;
      const s = (e === "trustpilot" ? this.parseTrustpilotReviewData() : G[e]).map((i) => this.createReviewSlide(i, e)).join("");
      t.innerHTML = s, t.scrollLeft = 0, this.updateArrowStates(e);
    }
    updateArrowStates(e) {
      const t = document.querySelector(`[data-crs-item="${e}"]`);
      if (!t) return;
      const n = t.querySelector(
        ".crs-reviews-slider"
      ), s = t.querySelector(
        ".crs-slider-prev"
      ), i = t.querySelector(
        ".crs-slider-next"
      );
      if (n && (s && (s.style.opacity = n.scrollLeft <= 0 ? "0.3" : "1", s.style.pointerEvents = n.scrollLeft <= 0 ? "none" : "auto"), i)) {
        const o = n.scrollWidth - n.clientWidth;
        i.style.opacity = n.scrollLeft >= o ? "0.3" : "1", i.style.pointerEvents = n.scrollLeft >= o ? "none" : "auto";
      }
    }
    getSlideWidth(e) {
      const t = e.querySelector(".crs-reviews-slide");
      if (!t) return 0;
      const n = t.getBoundingClientRect(), s = window.getComputedStyle(e), i = parseInt(s.gap) || 0;
      return n.width + i;
    }
    createReviewSlide(e, t) {
      const n = e.rating ? this.generateStars(t) : "", s = pe[t] || "", r = 5 * 7, l = e.text.split(" ").length > r;
      return (
        /* HTML */
        `
      <div class="crs-reviews-slide">
        <header>
          <div class="crs-review-author">${e.author}</div>
          <div class="crs-review-icon">${s}</div>
        </header>
        <div class="crs-review-stars">${n}</div>
        <main class="crs-review-text">
          <div class="crs-review-text-short">${e.text}</div>
          <div class="crs-review-text-full" style="display: none;">
            ${e.text}
          </div>
        </main>
        ${l ? '<div class="crs-review-read-more" data-action="read-more">Read more</div>' : ""}
      </div>
    `
      );
    }
    generateStars(e) {
      return e === "yelp" ? Array(5).fill(0).map(
        () => (
          /* HTML */
          `
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clip-path="url(#clip0_373_6588)">
                <path
                  d="M2.8 0H7V14H2.8C1.2536 14 0 12.7464 0 11.2V2.8C0 1.2536 1.2536 0 2.8 0Z"
                  fill="#FF643D"
                />
                <path
                  d="M11.2 0C12.7464 0 14 1.2536 14 2.8V11.2C14 12.7464 12.7464 14 11.2 14H7V0H11.2Z"
                  fill="#FF643D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.99995 9.36148L8.81637 10.2977C8.91638 10.3493 9.03035 10.3674 9.14147 10.3492C9.4276 10.3025 9.62172 10.0327 9.57504 9.74653L9.2459 7.7297L10.6977 6.2915C10.7776 6.21231 10.83 6.1095 10.8471 5.99825C10.8911 5.71164 10.6944 5.44363 10.4079 5.39961L8.38801 5.08943L7.46882 3.26431C7.4182 3.16378 7.33661 3.08219 7.23607 3.03156C6.97712 2.90114 6.66146 3.00535 6.53104 3.26431L5.61185 5.08943L3.59203 5.39961C3.48079 5.41672 3.37797 5.46909 3.29876 5.54906C3.0947 5.75504 3.09626 6.08745 3.30224 6.2915L4.754 7.7297L4.42483 9.74653C4.40672 9.85761 4.42479 9.97158 4.47632 10.0716C4.60919 10.3294 4.92581 10.4306 5.18354 10.2977L6.99995 9.36148Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_373_6588">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          `
        )
      ).join("") : Array(5).fill(0).map(
        () => (
          /* HTML */
          `
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1l2.5 5h5l-4 4 1.5 5-5-3-5 3 1.5-5-4-4h5L8 1z"
              fill="#FFD700"
            />
          </svg>
        `
        )
      ).join("");
    }
    async changeVideoReviews() {
      const e = await v(".review-block .video-reviews");
      if (!e) return;
      const t = e.querySelector(".slider_text_video");
      if (!t) return;
      const n = t.swiper;
      window.innerWidth < 768 && (n.params.slidesPerView = 2, n.update());
    }
    async changeSKUPosition() {
      const e = await v("variant-sku"), t = await v(".shopify-block:has(.loox-rating )");
      !e || !t || t.insertAdjacentElement("beforeend", e);
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = de, document.head.appendChild(e);
    }
  }
  const ue = `.crs-protection-plan-text {
  margin-top: 15px;
  color: #000;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
}

.crs-protection-plan-text button {
  font-weight: 400;
  text-decoration: underline;
}

@media (min-width: 769px) {
  .pro_bg .btn_pack .protection-package {
    font-size: 16px !important;
  }
}
`;
  class fe {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.addNewText();
    }
    async addNewText() {
      (await v(".what-cover-form")).insertAdjacentHTML(
        "beforebegin",
        /* HTML */
        `<div class="crs-protection-plan-text">
      Enjoy peace of mind with our all-around protection — covering stains and
      spills, rips, tears and seam separation, liquid marks and rings, pet
      damage, <button data-action="crs-protection-modal">and more</button>.
    </div>`
      );
      const n = document.querySelector(
        '[data-action="crs-protection-modal"]'
      ), s = document.querySelector(
        ".protection-plan-modal"
      );
      n && n.addEventListener("click", () => {
        s && (s.style.display = "block", f("exp_pdp_click_8", "Learn More", "click", "Protection Plan"));
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = ue, document.head.appendChild(e);
    }
  }
  class ve {
    constructor() {
      this.init();
    }
    init() {
      this.changeTabsOrder(), setTimeout(() => {
        this.changeTabsOrder();
      }, 2e3);
    }
    async changeTabsOrder() {
      var h;
      await v('[class*="tabs-btns-template"]');
      const e = (h = document.querySelector(
        '.product-info__liquid:has([class*="tabs-btns-template"])'
      )) == null ? void 0 : h.parentElement;
      if (!e) return;
      const t = e.querySelector(
        '[class*="tabs-btns-template"]'
      );
      console.log("tabsButtons", t);
      const n = e.querySelector(
        '[class*="tabs-items-template"]'
      );
      if (console.log("tabsContent", n), !t || !n) return;
      const s = Array.from(t.children).find(
        (c) => {
          var C;
          return (C = c.textContent) == null ? void 0 : C.trim().toLowerCase().includes("materials");
        }
      ), i = Array.from(t.children).find(
        (c) => {
          var C;
          return (C = c.textContent) == null ? void 0 : C.trim().toLowerCase().includes("dimensions");
        }
      ), o = s ? n.querySelector(
        `[data-id="${s.getAttribute("data-id")}"]`
      ) : null, r = i ? n.querySelector(
        `[data-id="${i.getAttribute("data-id")}"]`
      ) : null;
      if (!s || !i || !o || !r) {
        console.warn("Materials or Dimensions tab not found");
        return;
      }
      const a = t.querySelectorAll('[class*="tabs-btn-"]'), l = n.querySelectorAll('[class*="tabs-item-"]');
      a.forEach((c) => c.classList.remove("active")), l.forEach((c) => c.classList.remove("active")), t.firstChild && t.insertBefore(i, t.firstChild), i.nextSibling ? t.insertBefore(s, i.nextSibling) : t.appendChild(s), n.firstChild && n.insertBefore(r, n.firstChild), r.nextSibling ? n.insertBefore(o, r.nextSibling) : n.appendChild(o), this.updateTabCounts(t), i.classList.add("active"), r.classList.add("active");
    }
    updateTabCounts(e) {
      e.querySelectorAll('[class*="tabs-btn-"]').forEach((n, s) => {
        n.setAttribute("data-count", s.toString());
      });
    }
  }
  const me = `.shopify-app-block:has( > [data-box-type="CrossSell"]) {
  display: none;
}

`, ge = () => {
    let g = 0;
    function e() {
      const t = window.scrollY, n = window.innerHeight, s = document.documentElement.scrollHeight, i = (t + n) / s * 100;
      i >= g + 5 && (g = Math.round(i / 5) * 5, f("exp_pdp_click_scroll", `${g}%`, "other", "PDP")), i >= 100 && window.removeEventListener("scroll", e);
    }
    window.addEventListener("scroll", e);
  };
  J({ name: "New PDP Experiment", dev: "OS" }), K("exp_pdp");
  class Ce {
    constructor() {
      this.checkCustomEvents(), this.init();
    }
    checkCustomEvents() {
      V("Custom Events Logger Initialized");
      const e = EventTarget.prototype.dispatchEvent;
      EventTarget.prototype.dispatchEvent = function(t) {
        return (t.type.includes("variant") || t.type.includes("product") || t.type.includes("cart")) && V("Shopify Event: " + t.type + " | " + t), e.call(this, t);
      };
    }
    init() {
      this.checkPdpPage().then((e) => {
        e && (this.addStyles(), this.initComponents(), new Q(), new te(), new oe(), new ae(), new le(), new he(), new fe(), new ve(), ge());
      });
    }
    initComponents() {
      customElements.get("crs-dialog") || customElements.define("crs-dialog", ie);
    }
    async checkPdpPage() {
      if (!location.pathname.includes("/products/"))
        return !1;
      try {
        if (await Promise.race([
          new Promise((t) => setTimeout(t, 3e3)),
          // Timeout after 3 seconds
          v("body.template-product")
          // Wait for the element to appear
        ]))
          return !0;
      } catch {
        return !1;
      }
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = me, document.head.appendChild(e);
    }
  }
  new Ce();
})();
//# sourceMappingURL=index.js.map
