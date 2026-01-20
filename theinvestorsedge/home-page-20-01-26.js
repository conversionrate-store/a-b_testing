(function() {
  "use strict";
  const d = `.sticky-block {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  background: #09233e;
  opacity: 1;
  transform: translateY(0);
  transition: all 0.3s ease-in-out;
  z-index: 1;
}
.sticky-block.crs-hidden {
  opacity: 0 !important;
  transform: translateY(20px) !important;
  pointer-events: none;
}
@media (max-width: 768px) {
  .sticky-block {
    padding: 20px;
  }
}

.sticky-block__content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}
.sticky-block__content p {
  font-size: 24px;
  font-weight: 700;
  line-height: 34px;
  color: #ffffff;
  margin: 0;
}
@media (max-width: 768px) {
  .sticky-block__content p {
    display: none;
  }
}

.row-number-1 .pwr-cta-container {
  display: none;
}

.row-number-2,
.row-number-10,
.row-number-12,
.row-number-14,
.row-number-16,
.row-number-19,
.row-number-21,
.row-number-24,
.row-number-26,
.row-number-29,
.row-number-31,
.row-number-34,
.row-number-36,
.row-number-58,
.row-number-65 .pwr-sec-cta--content .pwr-sec-cta__cta-wrapper {
  display: none;
}

.img_clients_m {
  display: none;
}
@media (max-width: 768px) {
  .img_clients_m {
    display: block;
  }
}

.img_clients_d {
  display: block;
}
@media (max-width: 768px) {
  .img_clients_d {
    display: none;
  }
}

.crs-hero-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.crs-hero-block p {
  font-size: 28px;
  font-weight: 600;
  line-height: 38px;
  margin: 0 0 24px;
  text-align: center;
}
@media (max-width: 768px) {
  .crs-hero-block p {
    font-size: 20px;
    line-height: 28px;
  }
}
.crs-hero-block a {
  margin-bottom: 30px;
}
.crs-hero-block span {
  display: block;
  font-size: 16px;
  margin-bottom: 12px;
}

@media (max-width: 768px) {
  .pwr-hero__info-box {
    padding: 0 20px !important;
  }
}
.crs_link_button {
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 420px;
  padding: 16px;
  border-radius: 6px;
  background: #ff9902 !important;
  border: none;
  font-size: 16px;
  font-weight: 700 !important;
  line-height: 24px;
  color: #09233e !important;
  text-transform: uppercase;
}

.row-number-39 {
  padding: 80px 0 0 !important;
  background-image: none !important;
  background: #0d2034;
}
@media (max-width: 768px) {
  .row-number-39 {
    padding: 42px 0 0 !important;
  }
}

.crs-between-block {
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background: #ffffff;
}
@media (max-width: 768px) {
  .crs-between-block {
    padding: 42px 20px;
    gap: 24px;
  }
}
.crs-between-block p {
  text-align: center;
  font-weight: 700;
  margin: 0;
  font-family: "Poppins", sans-serif;
}
.crs-between-block p:first-child {
  font-size: 38px;
  line-height: 60px;
}
@media (max-width: 768px) {
  .crs-between-block p:first-child {
    display: none;
  }
}
.crs-between-block p:last-of-type {
  display: none;
}
@media (max-width: 768px) {
  .crs-between-block p:last-of-type {
    display: block;
    font-size: 28px;
    line-height: 38px;
  }
}

.row-number-65 .crs_link_button {
  margin: 24px auto 0;
}

.pwr-hero__info-box {
  bottom: unset !important;
}

.pwr-hero--regular {
  display: flex;
  align-items: center;
}

.crs-video-title {
  font-size: 24px;
  color: #ffffff;
  font-weight: 700;
  line-height: 34px;
  margin: 0;
}
.crs-video-title span {
  color: #ff9902;
}
@media (max-width: 768px) {
  .crs-video-title {
    font-size: 14px;
    margin-top: 16px;
    margin-bottom: -10px;
    line-height: 28px;
  }
}/*# sourceMappingURL=style.css.map */`, c = (s) => new Promise((n) => {
    const e = document.querySelector(s);
    e && n(e);
    const t = new MutationObserver(() => {
      const r = document.querySelector(s);
      r && (n(r), t.disconnect());
    });
    t.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), f = ({ name: s, dev: n }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class o {
    constructor(n) {
      this.elements = n instanceof o ? n.elements : typeof n == "string" ? Array.from(document.querySelectorAll(n)) : n instanceof Element ? [n] : Array.isArray(n) ? n : Array.from(n);
    }
    on(n, e, t) {
      return typeof e == "function" && (t = e, e = ""), this.elements.forEach((r) => {
        r.addEventListener(n, function(a) {
          var p;
          if (e !== "") {
            let m = (p = a.target) == null ? void 0 : p.closest(e);
            m && (t == null || t.call(m, a));
          } else
            t == null || t.call(r, a);
        });
      }), this;
    }
    addClass(n) {
      return this.elements.forEach(function(e) {
        e.classList.add(n);
      }), this;
    }
    removeClass(n) {
      return this.elements.forEach(function(e) {
        e.classList.remove(n);
      }), this;
    }
    toggleClass(n) {
      return this.elements.forEach(function(e) {
        e.classList.toggle(n);
      }), this;
    }
    each(n) {
      for (let e of this.elements)
        n(new o(e), this.elements.indexOf(e));
      return this;
    }
    style(n, e) {
      const t = n.split("-").map((r, a) => a === 0 ? r : r.charAt(0).toUpperCase() + r.slice(1)).join("");
      return this.elements.forEach(function(r) {
        r.style[t] = e;
      }), this;
    }
    find(n) {
      const e = this.elements.map((t) => Array.from(t.querySelectorAll(n)));
      return new o(e.flat());
    }
    attr(n, e) {
      return e ? (this.elements.forEach(function(t) {
        t.setAttribute(n, e);
      }), this) : this.elements[0].getAttribute(n);
    }
    text(n) {
      return n ? (this.elements.forEach(function(e) {
        e.textContent = n;
      }), this) : this.elements[0].textContent || "";
    }
    html(n) {
      return n ? (this.elements.forEach(function(e) {
        e.innerHTML = n;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const i = (s) => new o(s), u = (s) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", s, "variant_1"));
    }, 1e3);
  }, l = "https://conversionrate-store.github.io/a-b_images/theinvestorsedge/", b = (
    /* HTML */
    `
  <div class="sticky-block">
    <div class="sticky-block__content">
      <p>We help you find, fund, and flip real estate</p>
      <a class="crs_link_button" href="/100-hard-money-financing">Check if you qualify</a>
    </div>
  </div>
`
  ), h = (
    /* HTML */
    `
  <div class="crs-hero-block">
    <p>with no money down using 100% hard-money financing.</p>
    <a class="crs_link_button" href="/100-hard-money-financing">Check if you qualify</a>
    <span>Featured in:</span>
    <img src="${l}clients_d.svg" alt="Clients" class="img_clients_d" />
    <img src="${l}clients_m.svg" alt="Clients" class="img_clients_m" />
  </div>
`
  ), w = (
    /* HTML */
    `
  <div class="crs-between-block">
    <p>See What Our Members Are Saying:</p>
    <p>Start your journey to a profitable flip — even without real estate experience.</p>
    <a class="crs_link_button" href="/100-hard-money-financing">Check if you qualify</a>
  </div>
`
  );
  f({ name: "Home Page Update", dev: "YK" }), u("home_page_update");
  const y = [
    "Randy - <span>around $60,000</span>",
    "Dalisa - <span>$40,000 - $60,000 in profit</span>",
    "Ptolemy - <span>$80,000 to $100,000 in profit</span>",
    "Joe and Chelsea - <span>about $40,000 in profit</span>",
    "Charles - <span>around $70,000</span>",
    "Stacy - <span>expecting to make $30,000 to $65,000</span>"
  ];
  class g {
    constructor() {
      this.init();
    }
    isElementVisible(n) {
      const e = n.getBoundingClientRect(), t = window.innerHeight || document.documentElement.clientHeight;
      return e.top >= 0 && e.bottom <= t;
    }
    handleStickyVisibility() {
      const n = document.querySelector(".sticky-block");
      if (!n) return;
      const e = document.querySelectorAll(".crs_link_button:not(.sticky-block .crs_link_button)");
      let t = !1;
      e.forEach((r) => {
        this.isElementVisible(r) && (t = !0);
      }), t ? n.classList.add("crs-hidden") : n.classList.remove("crs-hidden");
    }
    async init() {
      await c("body"), i("body").elements[0].insertAdjacentHTML("afterbegin", `<style>${d}</style>`), await c("h1.pwr-hero__title"), i(".body-wrapper").elements[0].insertAdjacentHTML("beforeend", b), i("h1.pwr-hero__title").elements[0].insertAdjacentHTML("afterend", `${h}`), i(".row-number-6 .pwr-rich-text").elements[0].insertAdjacentElement(
        "afterbegin",
        i(".row-number-2 .row-number-5 .pwr-sec__title").elements[0]
      ), i(".row-number-55").elements[0].insertAdjacentElement("afterend", i(".row-number-8").elements[0]), i(".row-number-55").elements[0].insertAdjacentElement("afterend", i(".row-number-6").elements[0]), i(".row-number-52").elements[0].insertAdjacentHTML("afterend", w), i(".row-number-6 .pwr-rich-text p:nth-of-type(4)").elements[0].insertAdjacentHTML(
        "afterend",
        '<a class="crs_link_button" href="/100-hard-money-financing">Check if you qualify</a>'
      ), await c(".row-number-65 .pwr-sec-cta--content .pwr-sec-cta__cta-wrapper"), i(".row-number-65 .pwr-sec-cta--content .pwr-sec-cta__cta-wrapper").elements[0].insertAdjacentHTML(
        "afterend",
        '<a class="crs_link_button" href="/100-hard-money-financing">Check if you qualify</a>'
      ), i(
        ".row-number-49 .embed_container, .row-number-52 .embed_container, .row-number-55 .embed_container"
      ).elements.forEach((n, e) => {
        n.insertAdjacentHTML("beforebegin", `<h3 class="crs-video-title">${y[e]}</h3>`);
      }), window.addEventListener("scroll", () => this.handleStickyVisibility()), this.handleStickyVisibility();
    }
  }
  new g();
})();
//# sourceMappingURL=index.js.map
