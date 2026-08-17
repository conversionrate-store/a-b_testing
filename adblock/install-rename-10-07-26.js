(function() {
  "use strict";
  const u = `[class*=card__img_1] [class*=card__size-wrapper],
[class*=card__img_1] [class*=pulse] {
  display: none !important;
}

.yt_block {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-right: 24px;
  border-right: 1px solid #e2e8f0;
}
.yt_block span {
  font-size: 14px;
  font-weight: 500;
  color: #64748b;
}

.header__wrapper {
  justify-content: flex-start !important;
  gap: 24px !important;
}/*# sourceMappingURL=style.css.map */`, g = (n, e, t, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: n,
      event_desc: e,
      event_type: t,
      event_loc: s
    }), m(`Event: ${n} | ${e} | ${t} | ${s}`, "success");
  }, l = (n) => new Promise((e) => {
    const t = document.querySelector(n);
    t && e(t);
    const s = new MutationObserver(() => {
      const o = document.querySelector(n);
      o && (e(o), s.disconnect());
    });
    s.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), _ = ({ name: n, dev: e }) => {
    const t = n.toLowerCase().replace(/\s/g, "_");
    g(`${t}_started`, `Experiment ${n} started`, "other", t), console.log(
      `%c EXP: ${n} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class i {
    constructor(e) {
      this.elements = e instanceof i ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, t, s) {
      return typeof t == "function" && (s = t, t = ""), this.elements.forEach((o) => {
        o.addEventListener(e, function(a) {
          var p;
          if (t !== "") {
            let f = (p = a.target) == null ? void 0 : p.closest(t);
            f && (s == null || s.call(f, a));
          } else
            s == null || s.call(o, a);
        });
      }), this;
    }
    addClass(e) {
      return this.elements.forEach(function(t) {
        t.classList.add(e);
      }), this;
    }
    removeClass(e) {
      return this.elements.forEach(function(t) {
        t.classList.remove(e);
      }), this;
    }
    toggleClass(e) {
      return this.elements.forEach(function(t) {
        t.classList.toggle(e);
      }), this;
    }
    each(e) {
      for (let t of this.elements)
        e(new i(t), this.elements.indexOf(t));
      return this;
    }
    style(e, t) {
      const s = e.split("-").map((o, a) => a === 0 ? o : o.charAt(0).toUpperCase() + o.slice(1)).join("");
      return this.elements.forEach(function(o) {
        o.style[s] = t;
      }), this;
    }
    find(e) {
      const t = this.elements.map((s) => Array.from(s.querySelectorAll(e)));
      return new i(t.flat());
    }
    attr(e, t) {
      return t ? (this.elements.forEach(function(s) {
        s.setAttribute(e, t);
      }), this) : this.elements[0].getAttribute(e);
    }
    text(e) {
      return e ? (this.elements.forEach(function(t) {
        t.textContent = e;
      }), this) : this.elements[0].textContent || "";
    }
    html(e) {
      return e ? (this.elements.forEach(function(t) {
        t.innerHTML = e;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const r = (n) => new i(n), m = (n, e = "info") => {
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
    console.log(`%c>>> ${n}`, `${t} font-size: 16px; font-weight: 600`);
  };
  _({ name: "Install Page Rename", dev: "YK" });
  const c = "https://conversionrate-store.github.io/a-b_images/adblock";
  class d {
    constructor() {
      this.init();
    }
    async init() {
      await l("body"), r("body").elements[0].insertAdjacentHTML("beforeend", `<style>${u}</style>`), m("Install Page Rename: "), await l(".header__logo img"), r(".header__logo img").elements[0].setAttribute("src", `${c}/new_logo.svg`), r('[class*="card__img_1"] img').elements[0].src = `${c}/open.webp`, r('[class*="card__img_1"] img').elements[0].srcset = `${c}/open.webp`, r('[class*="card__img_1"] source').elements[0].srcset = `${c}/open.webp`, r('[class*="card__img_2"] img').elements[0].src = `${c}/approve.webp`, r('[class*="card__img_2"] img').elements[0].srcset = `${c}/approve.webp`, r('[class*="card__img_2"] source').elements[0].srcset = `${c}/approve.webp`, r('[class*="card__img_3"] img').elements[0].src = `${c}/install.webp`, r('[class*="card__img_3"] img').elements[0].srcset = `${c}/install.webp`, r('[class*="card__img_3"] source').elements[0].srcset = `${c}/install.webp`, r('[class*="card__text"] strong').elements[0].innerHTML = "AdblockForYoutube_AdBlock360.exe", r('[class*="card__text"] strong').elements[0].style.letterSpacing = "-0.8px";
    }
  }
  new d();
})();
//# sourceMappingURL=index.js.map
