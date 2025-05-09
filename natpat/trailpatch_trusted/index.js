(function() {
  "use strict";
  const d = (s, t, n, e = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: s,
      event_desc: t,
      event_type: n,
      event_loc: e
    }), m(`Event: ${s} | ${t} | ${n} | ${e}`, "success");
  }, u = (s) => new Promise((t) => {
    const n = document.querySelector(s);
    n && t(n);
    const e = new MutationObserver(() => {
      const r = document.querySelector(s);
      r && (t(r), e.disconnect());
    });
    e.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), g = ({ name: s, dev: t }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class c {
    constructor(t) {
      this.elements = t instanceof c ? t.elements : typeof t == "string" ? Array.from(document.querySelectorAll(t)) : t instanceof Element ? [t] : Array.isArray(t) ? t : Array.from(t);
    }
    on(t, n, e) {
      return typeof n == "function" && (e = n, n = ""), this.elements.forEach((r) => {
        r.addEventListener(t, function(i) {
          var o;
          if (n !== "") {
            let f = (o = i.target) == null ? void 0 : o.closest(n);
            f && (e == null || e.call(f, i));
          } else
            e == null || e.call(r, i);
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
        t(new c(n), this.elements.indexOf(n));
      return this;
    }
    style(t, n) {
      const e = t.split("-").map((r, i) => i === 0 ? r : r.charAt(0).toUpperCase() + r.slice(1)).join("");
      return this.elements.forEach(function(r) {
        r.style[e] = n;
      }), this;
    }
    find(t) {
      const n = this.elements.map((e) => Array.from(e.querySelectorAll(t)));
      return new c(n.flat());
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
  const a = (s) => new c(s), y = (s) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", s, "variant_1"));
    }, 1e3);
  }, b = (s, t, n, e, r = 1e3, i = 0.5) => {
    let o, f;
    o = new IntersectionObserver(
      function(p) {
        p[0].isIntersecting === !0 ? f = setTimeout(() => {
          d(
            t,
            p[0].target.dataset.visible || e || "",
            "view",
            n
          ), o.disconnect();
        }, r) : (m("Element is not fully visible", "warn"), clearTimeout(f));
      },
      { threshold: [i] }
    );
    {
      const p = document.querySelector(s);
      p && o.observe(p);
    }
  }, h = (s, t) => {
    const n = document.querySelector(s);
    if (!n) return;
    const r = n.getBoundingClientRect().top - t;
    window.scrollBy({
      top: r,
      behavior: "smooth"
    });
  }, m = (s, t = "info") => {
    let n;
    switch (t) {
      case "info":
        n = "color: #3498db;";
        break;
      case "warn":
        n = "color: #f39c12;";
        break;
      case "error":
        n = "color: #e74c3c;";
        break;
      case "success":
        n = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${s}`, `${n} font-size: 16px; font-weight: 600`);
  }, w = `@charset "UTF-8";
.lp-tr--hero-section .container-fluid {
  display: none;
}

.lp-tr--hero-section .scroll-to-checkout {
  padding: 20px;
}

.lp-tr--header-btn a {
  padding: 15px 40px;
}

.lp-tr--mobile.lp-tr--main-title {
  font-family: DINEngschrift LT, sans-serif;
  font-weight: 400;
  font-size: 36px;
  text-transform: uppercase;
}

.lp-tr--btn {
  margin-top: 30px;
}

.crs_trusted {
  width: 100%;
  margin: 60px 0;
  /* Анімація */
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
  overflow: hidden;
  width: 100%;
  margin: 24px 0 44px;
}
.crs_trusted .slider-track {
  display: flex;
  gap: 12px;
  width: -moz-max-content;
  width: max-content;
  animation: scroll 20s linear infinite;
  will-change: transform;
}
.crs_trusted .slide {
  width: 92px;
  flex-shrink: 0;
}
.crs_trusted .slide:first-of-type {
  margin-left: 12px;
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
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
}/*# sourceMappingURL=style.css.map */`, l = "https://conversionrate-store.github.io/a-b_images/natpat", x = (
    /* HTML */
    `
  <div class="crs_trusted">
    <style>
      ${w}
    </style>
    <div class="wrap">
      <h2>Trusted by 5000 stores<br />and top retailers globaly</h2>
      <img src="${l}/logos.webp" alt="logos" />
      <img src="${l}/map.webp" alt="map" />
    </div>
    <div class="slider">
      <div class="slider-track">
        ${[...Array(7)].map((s, t) => `<div class="slide"><img src="${l}/slide-${t + 1}.webp" alt="slide" /></div>`).join("")}
        ${[...Array(7)].map((s, t) => `<div class="slide"><img src="${l}/slide-${t + 1}.webp" alt="slide" /></div>`).join("")}
      </div>
    </div>
    <div class="wrap">
      <button>Buy now</button>
      <p>
        <b>30 Day Money Back Guarantee</b>: If our stickers don’t help your active child, we’ll give you a full refund.
      </p>
      <img src="${l}/guaranty.webp" alt="guaranty" />
    </div>
  </div>
`
  ), _ = (
    /* HTML */
    ' <button class="crs_faq_btn">Get Yours Now</button> '
  );
  g({ dev: "YK", name: "Exp: trailpatch trusted" }), y("trailpatch_trusted");
  class v {
    constructor() {
      this.init(), this.faqUpdate(), this.slider();
    }
    async init() {
      (await u(".lp-tr--hero-section .container-fluid")).insertAdjacentHTML("afterend", x), a(".crs_trusted button").on("click", () => {
        h(".lp-tr--purchase", 100), d("exp_trailpatch_click_02", "Buy now", "click", "Trusted by 5000 stores");
      }), a(".lp-tr--btn img").attr("src", "https://conversionrate-store.github.io/a-b_images/natpat/main_img.webp"), a(".lp-tr--header-btn a").text("GET IT NOW"), a(".lp-tr--header-btn a").on("click", () => {
        d("exp_trailpatch_click_01", "Get it now", "click", "Header");
      }), b(".crs_trusted", "exp_trailpatch_view_01", "Trusted by 5000 stores");
    }
    async faqUpdate() {
      (await u("#accordionFaq")).querySelectorAll(".card-body").forEach((n) => {
        n.insertAdjacentHTML("afterend", _);
      }), a(".crs_faq_btn").on("click", function() {
        const n = this.closest(".card").querySelector("h5").innerText;
        h(".lp-tr--purchase", 100), d("exp_trailpatch_click_03", "Get yours now:" + n, "click", "FAQ");
      });
    }
    async slider() {
    }
  }
  new v();
})();
//# sourceMappingURL=index.js.map
