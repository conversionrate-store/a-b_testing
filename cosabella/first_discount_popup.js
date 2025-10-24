(function() {
  "use strict";
  const f = `#attentive_creative {
  display: none !important;
}

body {
  overflow: auto !important;
}

.crs_first_popup_overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
  display: none;
}
.crs_first_popup_overlay.active {
  display: flex;
}
.crs_first_popup_overlay * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.total--price {
  gap: 8px;
}
.total--price .total__value {
  margin-left: auto;
  text-decoration: line-through;
  font-size: 12px;
  color: #666;
}

.crs_first_popup_discount {
  width: 100%;
  max-width: 800px;
  background: rgb(251, 248, 240);
}
@media (max-width: 768px) {
  .crs_first_popup_discount {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
.crs_first_popup_discount .main_content {
  width: 100%;
  display: flex;
}
.crs_first_popup_discount .main_content > * {
  flex: 1;
}
@media (max-width: 768px) {
  .crs_first_popup_discount .main_content .desktop_img {
    display: none;
  }
}
.crs_first_popup_discount .main_content .desktop_img img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}
.crs_first_popup_discount .main_content .text_content {
  position: relative;
  padding: 40px 24px;
  text-align: center;
}
@media (max-width: 768px) {
  .crs_first_popup_discount .main_content .text_content {
    padding: 24px 16px;
  }
}
.crs_first_popup_discount .main_content .text_content .close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 18px;
  height: 18px;
  cursor: pointer;
}
.crs_first_popup_discount .main_content .text_content .close svg {
  width: 100%;
  height: 100%;
}
.crs_first_popup_discount .main_content .text_content .logo {
  height: 24px;
}
.crs_first_popup_discount .main_content .text_content .step {
  display: none;
}
.crs_first_popup_discount .main_content .text_content .step.active {
  display: block;
}
.crs_first_popup_discount .main_content .text_content .step p {
  text-align: center;
}
.crs_first_popup_discount .main_content .text_content .step .title {
  font-family: Italianno;
  font-size: 40px;
  line-height: 45px;
  margin-top: 40px;
  margin-bottom: 20px;
}
.crs_first_popup_discount .main_content .text_content .step .discount_value {
  font-size: 56px;
  line-height: 63px;
  font-family: "Times New Roman", Times, serif;
}
.crs_first_popup_discount .main_content .text_content .step .subtitle {
  margin-bottom: 40px;
  font-family: "Source Sans 3";
  font-size: 16px;
}
.crs_first_popup_discount .main_content .text_content .step input {
  width: 100%;
  padding: 4px 6px 4px 16px;
  font-size: 20px;
  height: 48px;
  margin-bottom: 8px;
  outline: none;
  font-family: "Source Sans 3";
}
.crs_first_popup_discount .main_content .text_content .step input::-moz-placeholder {
  color: #b2b2b2;
}
.crs_first_popup_discount .main_content .text_content .step input::placeholder {
  color: #b2b2b2;
}
.crs_first_popup_discount .main_content .text_content .step input.error {
  border: 1px solid red;
}
.crs_first_popup_discount .main_content .text_content .step button {
  width: 100%;
  height: 48px;
  background: #000000;
  color: #ffffff;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  font-family: Cambon;
  max-width: unset;
}
.crs_first_popup_discount .main_content .text_content .step.step_2 .subtitle {
  font-size: 22px;
  line-height: 35px;
  font-family: Cambon;
}
.crs_first_popup_discount .main_content .text_content .step.step_2 .subtitle b {
  color: #d7857a;
  font-weight: 400;
}
.crs_first_popup_discount .main_content .text_content .step.step_2 button {
  background: #d7857a;
  color: #000000;
}

.ss__result__details,
.product-tile__info {
  position: relative;
}

.product-tile__info .price__value {
  font-size: 12px;
  color: #666;
  text-decoration: line-through;
}

.form--product__add-to-cart {
  position: relative;
}
.form--product__add-to-cart .crs_discount_label {
  top: -30px;
}

.crs_discount_label {
  position: absolute;
  top: 2px;
  right: 0;
  font-size: 12px;
  color: #c6073e;
  line-height: 18px;
  display: inline-flex;
  padding: 2px 4px;
  background: #fbf8f0;
}

.crs_discount_label_cart {
  font-size: 12px;
  color: #c6073e;
  line-height: 18px;
  display: inline-flex;
  padding: 2px 4px;
  background: #fbf8f0;
}

.mobile_img {
  display: none;
}
@media (max-width: 768px) {
  .mobile_img {
    display: block;
    width: 100%;
  }
}

.ss__product--wrapper.has_discount .pricing__values {
  display: flex;
}
.ss__product--wrapper.has_discount .price__value {
  font-size: 12px;
  color: #666;
  text-decoration: line-through;
}
.ss__product--wrapper.has_discount .ss__result__msrp {
  display: none !important;
}

.crs_discount_popup_btn {
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: rgb(215, 133, 122);
  font-family: Cambon;
  color: #000;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  z-index: 1001;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
.crs_discount_popup_btn svg {
  width: 12px;
  height: 12px;
}
.crs_discount_popup_btn.active {
  opacity: 1;
  pointer-events: auto;
}/*# sourceMappingURL=style.css.map */`, c = (r) => new Promise((t) => {
    const n = document.querySelector(r);
    n && t(n);
    const e = new MutationObserver(() => {
      const s = document.querySelector(r);
      s && (t(s), e.disconnect());
    });
    e.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), m = ({ name: r, dev: t }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class l {
    constructor(t) {
      this.elements = t instanceof l ? t.elements : typeof t == "string" ? Array.from(document.querySelectorAll(t)) : t instanceof Element ? [t] : Array.isArray(t) ? t : Array.from(t);
    }
    on(t, n, e) {
      return typeof n == "function" && (e = n, n = ""), this.elements.forEach((s) => {
        s.addEventListener(t, function(i) {
          var a;
          if (n !== "") {
            let p = (a = i.target) == null ? void 0 : a.closest(n);
            p && (e == null || e.call(p, i));
          } else
            e == null || e.call(s, i);
        });
      }), this;
    }
    addClass(t) {
      return this.elements.forEach(function(n) {
        n.classList.add(t);
      }), this;
    }
    removeClass(t) {
      return this.elements.forEach(function(n) {
        n.classList.remove(t);
      }), this;
    }
    toggleClass(t) {
      return this.elements.forEach(function(n) {
        n.classList.toggle(t);
      }), this;
    }
    each(t) {
      for (let n of this.elements)
        t(new l(n), this.elements.indexOf(n));
      return this;
    }
    style(t, n) {
      const e = t.split("-").map((s, i) => i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[e] = n;
      }), this;
    }
    find(t) {
      const n = this.elements.map((e) => Array.from(e.querySelectorAll(t)));
      return new l(n.flat());
    }
    attr(t, n) {
      return n ? (this.elements.forEach(function(e) {
        e.setAttribute(t, n);
      }), this) : this.elements[0].getAttribute(t);
    }
    text(t) {
      return t ? (this.elements.forEach(function(n) {
        n.textContent = t;
      }), this) : this.elements[0].textContent || "";
    }
    html(t) {
      return t ? (this.elements.forEach(function(n) {
        n.innerHTML = t;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const o = (r) => new l(r), h = (r) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", r, "variant_1"));
    }, 1e3);
  }, d = {
    close: (
      /* HTML */
      `
    <svg id="closeIconSvg" viewBox="0 0 45 45" stroke="#000000" stroke-width="3" stroke-linecap="round">
      <line x1="5" x2="40" y1="5" y2="40"></line>
      <line x1="5" x2="40" y1="40" y2="5"></line>
    </svg>
  `
    )
  }, b = (
    /* HTML */
    `
  <div class="crs_first_popup_overlay">
    <div class="crs_first_popup_discount">
      <div class="main_content">
        <div class="desktop_img">
          <img
            src="https://creatives.attn.tv/cosabella/ROMAN1162_ROMANZA_Balconette%20Bra_Black-min_3b7a0833.jpg"
            alt="desktop_img"
          />
        </div>
        <div class="text_content">
          <span class="close"> ${d.close}</span>
          <img src="https://creatives.attn.tv/cosabella/Cosabella_logo_9c0d0398.svg" alt="logo" class="logo" />
          <div class="step_1 step active">
            <p class="title">Unlock</p>
            <p class="discount_value">15% OFF</p>
            <p class="subtitle">and free shipping on $100+</p>
            <input type="email" name="email" placeholder="Email Address" autocomplete="email" />
            <button class="get_discount_btn">Continue</button>
          </div>
          <div class="step_2 step">
            <img src="" alt="" />
            <p class="title">Thank you for signing up!</p>
            <p class="subtitle">Your <b>15% OFF</b> welcome discount will be applied at checkout</p>
            <button>Go to Products</button>
          </div>
        </div>
      </div>
      <div class="mobile_img">
        <img
          src="https://creatives.attn.tv/cosabella/ROMAN2211_ROMANZA_Romper_Moon%20Ivory8-min_ec2f964d.JPG"
          alt="mobile_img"
        />
      </div>
    </div>
  </div>
`
  ), g = (
    /* HTML */
    `
  <div class="crs_discount_popup_btn">
    <span>Get 15% OFF</span>
    ${d.close}
  </div>
`
  );
  m({ name: "Popup discount", dev: "YK" }), h("popup_discount");
  class x {
    constructor() {
      this.init();
    }
    async init() {
      const t = document.createElement("link");
      t.rel = "stylesheet", t.href = "https://fonts.googleapis.com/css2?family=Italianno&family=Source+Sans+3:ital@0;1&display=swap", document.head.appendChild(t), document.head.insertAdjacentHTML("beforeend", `<style>${f}</style>`), await c("body"), document.body.insertAdjacentHTML("beforeend", b), document.body.insertAdjacentHTML("beforeend", g), this.addLogic(), this.checkoutListener(), this.firstPopupShow(), this.addPriceDiscount(), this.addPriceDiscountProductSlider(), this.sliderObserver(), this.cartChangePrice(), this.cartChangePriceObserver(), this.priceObserver(".atc-price.js-product-price");
    }
    addLogic() {
      const t = o(".crs_first_popup_overlay"), n = o(".crs_first_popup_overlay .close"), e = o(".crs_first_popup_overlay .get_discount_btn"), s = o('.crs_first_popup_overlay input[name="email"]'), i = o(".crs_first_popup_overlay .step_1"), a = o(".crs_first_popup_overlay .step_2"), p = o(".crs_first_popup_overlay .step_2 button"), u = o(".crs_discount_popup_btn"), v = o(".crs_discount_popup_btn svg");
      n.on("click", () => {
        t.removeClass("active"), u.addClass("active");
      }), u.on("click", () => {
        t.addClass("active"), u.removeClass("active");
      }), v.on("click", () => {
        u.removeClass("active");
      }), e.on("click", () => {
        const _ = s.elements[0].value.trim();
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(_)) {
          i.removeClass("active"), a.addClass("active"), localStorage.setItem("cosabella_welcome_discount", "0");
          const y = {
            url: window.location.href,
            email: _
          };
          fetch(
            "https://script.google.com/macros/s/AKfycbxc794IKjZvQYdTDtFDGv7kEzb8DLrSSDLKns45wlf12Znp1dO3HNzY1s3kjyNWgcSG/exec",
            {
              method: "POST",
              mode: "no-cors",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(y)
            }
          ), this.addPriceDiscount(), this.changeProductPrice(), this.addPriceDiscountProductSlider();
        } else
          s.elements[0].classList.add("error");
      }), e.on("input", () => {
        s.elements[0].classList.remove("error");
      }), p.on("click", () => {
        t.removeClass("active");
      });
    }
    checkoutListener() {
      document.addEventListener("click", (t) => {
        const n = t.target, e = localStorage.getItem("cosabella_welcome_discount");
        n.closest(".js-checkout-link") && e === "0" && (t.preventDefault(), localStorage.setItem("cosabella_welcome_discount", "1"), window.location.href = "/checkout?discount=WELCOME15");
      });
    }
    async addPriceDiscount() {
      const t = localStorage.getItem("cosabella_welcome_discount");
      if (!t || t === "1") return;
      await c(".ss__product--wrapper"), o(".ss__product--wrapper").elements.forEach((e) => {
        var i, a, p;
        const s = (i = e.querySelector(".price__value")) == null ? void 0 : i.textContent.split("$")[1];
        s && (e.classList.add("has_discount"), (a = e.querySelector(".ss__result__details")) == null || a.insertAdjacentHTML("beforeend", '<span class="crs_discount_label">-15%</span>'), (p = e.querySelector(".pricing__values")) == null || p.insertAdjacentHTML("beforeend", `<span class="discounted_price">$${(+s * 0.85).toFixed(2)}</span>`));
      });
    }
    async addPriceDiscountProductSlider() {
      await c(".product-tile__info"), o(".product-tile__info").elements.forEach((n) => {
        var s, i;
        n.insertAdjacentHTML("beforeend", '<span class="crs_discount_label">-15%</span>');
        const e = (s = n.querySelector(".price__value")) == null ? void 0 : s.textContent.split("$")[1];
        e && (n.querySelector(".discounted_price") || (i = n.querySelector(".pricing__values")) == null || i.insertAdjacentHTML("beforeend", `<span class="discounted_price">$${(+e * 0.85).toFixed(2)}</span>`));
      });
    }
    async firstPopupShow() {
      const t = await c("#attentive_creative"), n = localStorage.getItem("cosabella_welcome_discount_showed"), e = localStorage.getItem("cosabella_welcome_discount");
      t && !n && (o(".crs_first_popup_overlay").addClass("active"), localStorage.setItem("cosabella_welcome_discount_showed", "1")), t && n && !e && o(".crs_discount_popup_btn").addClass("active");
    }
    async cartChangePrice() {
      await c(".total--price");
      const t = o(".total--price .total__value").text().split("$")[1];
      !t || o(".total--price .discounted_price").elements.length > 0 || o(".total--price").elements[0].insertAdjacentHTML(
        "beforeend",
        `<span class="discounted_price">
				$${(+t * 0.85).toFixed(2)}
			</span><span class="crs_discount_label_cart">-15%</span>`
      );
    }
    async changeProductPrice() {
      var s;
      if (localStorage.getItem("cosabella_welcome_discount") !== "0") return;
      await c(".atc-price.js-product-price");
      const n = o(".atc-price.js-product-price"), e = (s = n.attr("data-oprice")) == null ? void 0 : s.split("$")[1];
      e && (n.text(`$${(+e * 0.85).toFixed(2)}`), o(".form--product__add-to-cart").elements[0] && o(".form--product__add-to-cart").elements[0].insertAdjacentHTML(
        "beforeend",
        '<span class="crs_discount_label">-15%</span>'
      ));
    }
    async sliderObserver() {
      await c(".js-product-recommendations");
      const t = document.querySelector(".js-product-recommendations");
      if (console.log(t), !t) return;
      const n = new MutationObserver(async () => {
        n.disconnect(), await this.addPriceDiscountProductSlider(), n.observe(t, { childList: !0, subtree: !0 });
      });
      n.observe(t, { childList: !0, subtree: !0 });
    }
    async priceObserver(t) {
      await c(t);
      const n = document.querySelector(t);
      if (!n) return;
      const e = new MutationObserver(async () => {
        e.disconnect(), await this.changeProductPrice(), e.observe(n, { childList: !0, subtree: !0 });
      });
      e.observe(n, { childList: !0, subtree: !0 });
    }
    async cartChangePriceObserver() {
      await c(".cart--flyout");
      const t = document.querySelector(".cart--flyout");
      if (console.log(t), !t) return;
      const n = new MutationObserver(async () => {
        n.disconnect(), await this.cartChangePrice(), n.observe(t, { childList: !0, subtree: !0 });
      });
      n.observe(t, { childList: !0, subtree: !0 });
    }
  }
  new x();
})();
//# sourceMappingURL=index.js.map
