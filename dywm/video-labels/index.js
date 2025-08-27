(function() {
  "use strict";
  const u = (i) => new Promise((t) => {
    const e = document.querySelector(i);
    e && t(e);
    const s = new MutationObserver(() => {
      const n = document.querySelector(i);
      n && (t(n), s.disconnect());
    });
    s.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), l = ({ name: i, dev: t }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class r {
    constructor(t) {
      this.elements = t instanceof r ? t.elements : typeof t == "string" ? Array.from(document.querySelectorAll(t)) : t instanceof Element ? [t] : Array.isArray(t) ? t : Array.from(t);
    }
    on(t, e, s) {
      return typeof e == "function" && (s = e, e = ""), this.elements.forEach((n) => {
        n.addEventListener(t, function(o) {
          var c;
          if (e !== "") {
            let f = (c = o.target) == null ? void 0 : c.closest(e);
            f && (s == null || s.call(f, o));
          } else
            s == null || s.call(n, o);
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
        t(new r(e), this.elements.indexOf(e));
      return this;
    }
    style(t, e) {
      const s = t.split("-").map((n, o) => o === 0 ? n : n.charAt(0).toUpperCase() + n.slice(1)).join("");
      return this.elements.forEach(function(n) {
        n.style[s] = e;
      }), this;
    }
    find(t) {
      const e = this.elements.map((s) => Array.from(s.querySelectorAll(t)));
      return new r(e.flat());
    }
    attr(t, e) {
      return e ? (this.elements.forEach(function(s) {
        s.setAttribute(t, e);
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
  const a = (i) => new r(i), h = (i) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", i, "variant_1"));
    }, 1e3);
  };
  l({ name: "Video labels", dev: "YK" }), h("video_labels");
  class m {
    constructor() {
      this.init();
    }
    async init() {
      await u(".sfc-indexCard__subscribeButton .sfc-item__content"), a(".sfc-indexCard__subscribeButton .sfc-item__content").each((t) => {
        t.text().includes("Subscribers only") && t.text("Watch with a FREE trial");
      });
    }
  }
  new m();
})();
//# sourceMappingURL=index.js.map
