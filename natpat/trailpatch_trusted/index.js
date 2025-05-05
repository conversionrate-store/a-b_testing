(function() {
  "use strict";
  const a = (r) => new Promise((t) => {
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
  }), p = ({ name: r, dev: t }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class i {
    constructor(t) {
      this.elements = t instanceof i ? t.elements : typeof t == "string" ? Array.from(document.querySelectorAll(t)) : t instanceof Element ? [t] : Array.isArray(t) ? t : Array.from(t);
    }
    on(t, n, e) {
      return typeof n == "function" && (e = n, n = ""), this.elements.forEach((s) => {
        s.addEventListener(t, function(o) {
          var f;
          if (n !== "") {
            let d = (f = o.target) == null ? void 0 : f.closest(n);
            d && (e == null || e.call(d, o));
          } else
            e == null || e.call(s, o);
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
        t(new i(n), this.elements.indexOf(n));
      return this;
    }
    style(t, n) {
      const e = t.split("-").map((s, o) => o === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[e] = n;
      }), this;
    }
    find(t) {
      const n = this.elements.map((e) => Array.from(e.querySelectorAll(t)));
      return new i(n.flat());
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
  const l = (r) => new i(r), h = (r) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", r, "variant_1"));
    }, 1e3);
  }, u = (r, t) => {
    const n = document.querySelector(r);
    if (!n) return;
    const s = n.getBoundingClientRect().top - t;
    window.scrollBy({
      top: s,
      behavior: "smooth"
    });
  }, m = `.lp-tr--hero-section .container-fluid {
  display: none;
}

.lp-tr--hero-section .scroll-to-checkout {
  padding: 20px;
}

.crs_trusted {
  width: 100%;
  margin: 60px 0;
}
.crs_trusted img {
  max-width: 100%;
  height: auto;
}
.crs_trusted .wrap {
  padding: 0 30px;
  display: flex;
  flex-direction: column;
}
.crs_trusted .wrap:first-of-type {
  gap: 32px;
}
.crs_trusted .wrap:last-of-type {
  gap: 12px;
}
.crs_trusted .wrap:last-of-type p {
  color: #fff;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
}
.crs_trusted h2 {
  font-weight: 400;
  font-size: 36px;
  text-transform: uppercase;
  line-height: 42px;
  color: white;
  text-align: center;
}
.crs_trusted button {
  padding: 20px;
  background: #0050d4;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  line-height: 30px;
  color: #fff;
  text-transform: uppercase;
  border: none;
  font-weight: 700;
  font-family: "Din Next", sans-serif;
  cursor: pointer;
}
.crs_trusted .slider {
  margin: 24px 0 44px;
  overflow-x: auto;
}
.crs_trusted .slider::-webkit-scrollbar {
  display: none;
}
.crs_trusted .slider ul {
  display: flex;
  gap: 12px;
}
.crs_trusted .slider ul li {
  flex-shrink: 0;
}
.crs_trusted .slider ul li:first-child {
  padding-left: 30px;
}
.crs_trusted .slider ul li:last-child {
  padding-right: 30px;
}
.crs_trusted .slider ul li img {
  height: 110px;
  width: auto;
}

.crs_faq_btn {
  padding: 10px 20px;
  background: #0050d4;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  color: #fff;
  text-transform: uppercase;
  border: none;
  font-weight: 700;
  font-family: "Din Next", sans-serif;
  cursor: pointer;
  margin: 0 auto 30px;
}

#accordionFaq .card-body {
  margin-bottom: 12px !important;
}/*# sourceMappingURL=style.css.map */`, c = "https://conversionrate-store.github.io/a-b_images/natpat", g = (
    /* HTML */
    `
  <div class="crs_trusted">
    <style>
      ${m}
    </style>
    <div class="wrap">
      <h2>Trusted by 5000 stores<br />and top retailers globaly</h2>
      <img src="${c}/logos.webp" alt="logos" />
      <img src="${c}/map.webp" alt="map" />
    </div>
    <div class="slider">
      <ul>
        ${[...Array(7)].map((r, t) => `<li><img src="${c}/slide-${t + 1}.webp" alt="slide" /></li>`).join("")}
      </ul>
    </div>
    <div class="wrap">
      <button>Buy now</button>
      <p>
        <b>30 Day Money Back Guarantee</b>: If our stickers don’t help your active child, we’ll give you a full refund.
      </p>
      <img src="${c}/guaranty.webp" alt="guaranty" />
    </div>
  </div>
`
  ), y = (
    /* HTML */
    ' <button class="crs_faq_btn">Get Yours Now</button> '
  );
  p({ dev: "YK", name: "Exp: trailpatch trusted" }), h("trailpatch_trusted");
  class x {
    constructor() {
      this.init(), this.faqUpdate();
    }
    async init() {
      (await a(".lp-tr--hero-section .container-fluid")).insertAdjacentHTML("afterend", g), l(".crs_trusted button").on("click", () => {
        u(".lp-tr--purchase", 100);
      });
    }
    async faqUpdate() {
      (await a("#accordionFaq")).querySelectorAll(".card-body").forEach((n) => {
        n.insertAdjacentHTML("afterend", y);
      }), l(".crs_faq_btn").on("click", () => {
        u(".lp-tr--purchase", 100);
      });
    }
  }
  new x();
})();
//# sourceMappingURL=index.js.map

