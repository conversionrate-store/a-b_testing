(function() {
  "use strict";
  const d = `@media (max-width: 768px) {
  .template-product .form--product__actions.form--product__add-to-cart2 {
    z-index: 999999 !important;
  }
  .template-product .js-product-field-size .form--product__dropdown-toggle-wrapper2 {
    z-index: 999999 !important;
  }
  #attentive_overlay {
    z-index: 999999 !important;
  }
}
.crs_exit_popup_overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  z-index: 100000;
  display: flex;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
@media (max-width: 768px) {
  .crs_exit_popup_overlay {
    z-index: 9999999999 !important;
  }
}
.crs_exit_popup_overlay.active {
  opacity: 1;
  pointer-events: auto;
}
.crs_exit_popup_overlay * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Cambon;
}

.crs_exit_popup {
  width: 100%;
  max-width: 900px;
  display: flex;
  background: #f7f7f7;
  position: relative;
}
@media (max-width: 768px) {
  .crs_exit_popup {
    flex-direction: column;
    height: 100dvh;
    overflow: auto;
  }
}
.crs_exit_popup > * {
  flex: 1;
}
.crs_exit_popup .image {
  background: url("https://conversionrate-store.github.io/a-b_images/cosabella/christmas-d.webp") center center no-repeat;
  background-size: cover;
}
@media (max-width: 768px) {
  .crs_exit_popup .image {
    background: url("https://conversionrate-store.github.io/a-b_images/cosabella/christmas-m.webp") right center no-repeat;
    background-size: cover;
    height: 230px;
    padding: 115px 0;
    flex-grow: 0;
  }
}
.crs_exit_popup .content {
  position: relative;
  padding: 40px;
  background: url("https://conversionrate-store.github.io/a-b_images/cosabella/christmas-tree.svg") top right 40px no-repeat;
  background-size: 900px;
}
@media (max-width: 768px) {
  .crs_exit_popup .content {
    padding: 24px;
    display: flex;
    flex-direction: column;
  }
}
.crs_exit_popup .close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 1;
}
.crs_exit_popup .close svg {
  width: 100%;
  height: 100%;
  fill: #000;
}
@media (max-width: 768px) {
  .crs_exit_popup .close svg {
    fill: #fff;
  }
}
.crs_exit_popup .title {
  color: #4f1b2d;
  font-size: 32px;
  margin-bottom: 12px;
  text-transform: uppercase;
}
.crs_exit_popup .title + p {
  color: #000;
  font-size: 18px;
  margin-bottom: 16px;
  line-height: 30px;
}
.crs_exit_popup .title + p span {
  color: #d7857a;
  font-weight: 500;
}
.crs_exit_popup .timer {
  padding: 16px;
  border: 1px dashed #dedede;
  background: #f2ebd6;
}
.crs_exit_popup .timer p {
  font-size: 16px;
  margin-bottom: 8px;
  color: #505050;
  text-align: center;
  padding: 0 40px;
  line-height: 24px;
}
.crs_exit_popup .timer .time {
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
}
.crs_exit_popup .timer .time > div {
  width: 90px;
  height: 36px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  color: #000;
}
.crs_exit_popup .timer .time > div span {
  color: #4f1b2d;
}
.crs_exit_popup .go_to_checkout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  color: #0a0a12;
  background: #d7857a;
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 18px;
  letter-spacing: 2px;
}
@media (max-width: 768px) {
  .crs_exit_popup .go_to_checkout {
    margin-top: auto;
  }
}
.crs_exit_popup .cart_list {
  margin: 20px 0;
  max-height: 300px;
  overflow-y: auto;
}
.crs_exit_popup .cart_item {
  display: flex;
  margin: 16px 0;
  gap: 14px;
  align-items: flex-start;
  padding: 16px 20px;
  background: #ffffff;
}
.crs_exit_popup .item_image {
  height: 64px;
  width: 64px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #dedede;
}
.crs_exit_popup .item_image img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.crs_exit_popup .item_details {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  gap: 4px;
}
.crs_exit_popup .item_details p {
  font-size: 14px;
  font-family: sans-serif;
}
.crs_exit_popup .item_details .item_name {
  padding-right: 60px;
}
.crs_exit_popup .item_details .item_variant {
  font-size: 12px;
  color: #707070;
}
.crs_exit_popup .item_details .item_quantity {
  font-size: 12px;
  color: #c6073e;
}
.crs_exit_popup .item_details .item_price {
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 0;
}/*# sourceMappingURL=style.css.map */`, u = (o) => new Promise((t) => {
    const e = document.querySelector(o);
    e && t(e);
    const n = new MutationObserver(() => {
      const i = document.querySelector(o);
      i && (t(i), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), m = ({ name: o, dev: t }) => {
    console.log(
      `%c EXP: ${o} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class a {
    constructor(t) {
      this.elements = t instanceof a ? t.elements : typeof t == "string" ? Array.from(document.querySelectorAll(t)) : t instanceof Element ? [t] : Array.isArray(t) ? t : Array.from(t);
    }
    on(t, e, n) {
      return typeof e == "function" && (n = e, e = ""), this.elements.forEach((i) => {
        i.addEventListener(t, function(r) {
          var p;
          if (e !== "") {
            let c = (p = r.target) == null ? void 0 : p.closest(e);
            c && (n == null || n.call(c, r));
          } else
            n == null || n.call(i, r);
        });
      }), this;
    }
    addClass(t) {
      return this.elements.forEach(function(e) {
        e.classList.add(t);
      }), this;
    }
    removeClass(t) {
      return this.elements.forEach(function(e) {
        e.classList.remove(t);
      }), this;
    }
    toggleClass(t) {
      return this.elements.forEach(function(e) {
        e.classList.toggle(t);
      }), this;
    }
    each(t) {
      for (let e of this.elements)
        t(new a(e), this.elements.indexOf(e));
      return this;
    }
    style(t, e) {
      const n = t.split("-").map((i, r) => r === 0 ? i : i.charAt(0).toUpperCase() + i.slice(1)).join("");
      return this.elements.forEach(function(i) {
        i.style[n] = e;
      }), this;
    }
    find(t) {
      const e = this.elements.map((n) => Array.from(n.querySelectorAll(t)));
      return new a(e.flat());
    }
    attr(t, e) {
      return e ? (this.elements.forEach(function(n) {
        n.setAttribute(t, e);
      }), this) : this.elements[0].getAttribute(t);
    }
    text(t) {
      return t ? (this.elements.forEach(function(e) {
        e.textContent = t;
      }), this) : this.elements[0].textContent || "";
    }
    html(t) {
      return t ? (this.elements.forEach(function(e) {
        e.innerHTML = t;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const s = (o) => new a(o), x = (o) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", o, "variant_1"));
    }, 1e3);
  }, _ = (o, t) => {
    const e = o === window ? window : document.querySelector(o);
    let n, i, r, p, c;
    function l() {
      n = null, p = 0;
    }
    l(), e.addEventListener("scroll", function() {
      i = o === window ? this.scrollY : this.scrollTop, c = i > n ? "down" : "up", n != null && (p = i - n), n = i, clearTimeout(r), r = setTimeout(l, 50), t(Math.abs(p), c);
    });
  }, f = (o, t = "info") => {
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
    console.log(`%c>>> ${o}`, `${e} font-size: 16px; font-weight: 600`);
  }, h = (
    /* HTML */
    `
  <div class="crs_exit_popup_overlay">
    <div class="crs_exit_popup">
      <span class="close">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.29279 1.70682C-0.097533 1.31628 -0.0976626 0.683212 0.29279 0.292761C0.683267 -0.0976277 1.31635 -0.097559 1.70685 0.292761L10.0008 8.58768L18.2957 0.29276C18.6862 -0.0976418 19.3193 -0.0975465 19.7098 0.29276C20.1003 0.683253 20.1002 1.31629 19.7098 1.70682L11.4149 10.0027L19.7088 18.2957C20.0993 18.6862 20.0993 19.3202 19.7088 19.7107C19.3184 20.1009 18.6852 20.1009 18.2947 19.7107L10.0008 11.4168L1.70783 19.7107C1.31735 20.1009 0.684205 20.1009 0.293767 19.7107C-0.0966006 19.3202 -0.0966827 18.6862 0.293767 18.2957L8.58674 10.0027L0.29279 1.70682Z"
    />
  </svg>
</span>
      <div class="image"></div>
      <div class="content">
        <p class="title">Don't leave just yet!</p>
        <p>Make the <span>holidays feel special</span> - treat yourself to something beautiful</p>
        <div class="timer">
          <p>We’ve reserved this item for you for the next 20 minutes.</p>
          <div class="time">
            <div class="minutes">
              <span>20</span>
              min
            </div>
            :
            <div class="seconds">
              <span>00</span>
              sec
            </div>
          </div>
        </div>
        <div class="cart_list"></div>
        <a href="/checkout" class="go_to_checkout">Checkout now ></a>
      </div>
    </div>
  </div>
`
  ), g = (o) => (
    /* HTML */
    `
  <div class="cart_item">
    <div class="item_image">
      <img src="${o.image}" alt="Cart Item" />
    </div>
    <div class="item_details">
      <p class="item_name">${o.name}</p>
      <p class="item_variant">${o.variant}</p>
      <p class="item_quantity">Only 1 in stock in your size</p>
      <p class="item_price">$${o.price.toFixed(2)}</p>
    </div>
  </div>
`
  );
  m({ name: "Exit popup Christmas", dev: "YK" }), x("popup_exit_christmas");
  class v {
    constructor() {
      this.init(), this.addExitEvent();
    }
    async init() {
      await u("body"), f("started"), s("body").elements[0].insertAdjacentHTML("beforeend", `<style class="crs_exit_popup_style">${d}</style>`), s("body").elements[0].insertAdjacentHTML("beforeend", h), s(".crs_exit_popup_overlay .close").on("click", () => {
        s(".crs_exit_popup_overlay").elements[0].classList.remove("active");
      }), s(".crs_exit_popup_overlay").on("click", (t) => {
        t.target === s(".crs_exit_popup_overlay").elements[0] && s(".crs_exit_popup_overlay").elements[0].classList.remove("active");
      });
    }
    addExitEvent() {
      document.addEventListener("mouseout", (t) => {
        t.relatedTarget || this.startPopup();
      }), window.innerWidth < 768 && _(window, (t, e) => {
        t > 100 && this.startPopup();
      });
    }
    startTimer() {
      let t = 1200;
      const e = setInterval(() => {
        t--, s(".crs_exit_popup_overlay .minutes span").elements[0].textContent = String(
          Math.floor(t / 60)
        ).padStart(2, "0"), s(".crs_exit_popup_overlay .seconds span").elements[0].textContent = String(t % 60).padStart(2, "0"), t <= 0 && (this.startPopup(), clearInterval(e));
      }, 1e3);
    }
    async startPopup() {
      const t = s(".crs_exit_popup_overlay").elements[0];
      if (localStorage.getItem("exitPopupShown") === "true") return;
      const e = await fetch("/cart.json").then((i) => i.json());
      if (e.items.length === 0) return;
      t.classList.add("active"), localStorage.setItem("exitPopupShown", "true");
      const n = s(".crs_exit_popup_overlay .cart_list").elements[0];
      n.innerHTML = "", e.items.forEach((i) => {
        console.log(i), n.insertAdjacentHTML(
          "beforeend",
          g({
            image: i.image,
            name: i.title,
            variant: i.variant_title,
            price: i.price / 100
          })
        );
      }), this.startTimer();
    }
  }
  new v();
})();
//# sourceMappingURL=index.js.map
