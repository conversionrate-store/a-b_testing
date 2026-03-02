(function() {
  "use strict";
  const f = `.elementor-form-fields-wrapper > div:nth-child(1) {
  display: none;
}
.elementor-form-fields-wrapper > div:nth-child(2) {
  display: none;
}
.elementor-form-fields-wrapper > div:nth-child(4) {
  display: none;
}
.elementor-form-fields-wrapper .elementor-button-text {
  font-size: 14px;
}
.elementor-form-fields-wrapper .elementor-button {
  margin-top: 10px !important;
}

[data-id=e7df86a] .elementor-widget-container {
  padding-top: 0 !important;
  padding-bottom: 15px !important;
}/*# sourceMappingURL=style.css.map */`, u = (r, t, e, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: r,
      event_desc: t,
      event_type: e,
      event_loc: n
    }), h(`Event: ${r} | ${t} | ${e} | ${n}`, "success");
  }, m = (r) => new Promise((t) => {
    const e = document.querySelector(r);
    e && t(e);
    const n = new MutationObserver(() => {
      const s = document.querySelector(r);
      s && (t(s), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), p = ({ name: r, dev: t }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class o {
    constructor(t) {
      this.elements = t instanceof o ? t.elements : typeof t == "string" ? Array.from(document.querySelectorAll(t)) : t instanceof Element ? [t] : Array.isArray(t) ? t : Array.from(t);
    }
    on(t, e, n) {
      return typeof e == "function" && (n = e, e = ""), this.elements.forEach((s) => {
        s.addEventListener(t, function(i) {
          var a;
          if (e !== "") {
            let l = (a = i.target) == null ? void 0 : a.closest(e);
            l && (n == null || n.call(l, i));
          } else
            n == null || n.call(s, i);
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
        t(new o(e), this.elements.indexOf(e));
      return this;
    }
    style(t, e) {
      const n = t.split("-").map((s, i) => i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[n] = e;
      }), this;
    }
    find(t) {
      const e = this.elements.map((n) => Array.from(n.querySelectorAll(t)));
      return new o(e.flat());
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
  const c = (r) => new o(r), d = (r) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", r, "variant_1"));
    }, 1e3);
  }, h = (r, t = "info") => {
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
    console.log(`%c>>> ${r}`, `${e} font-size: 16px; font-weight: 600`);
  };
  p({ name: "Spark Quiz", dev: "YK" }), d("spark_quiz");
  class w {
    constructor() {
      this.init();
    }
    async init() {
      await m(".elementor-form-fields-wrapper"), this.updateForm();
    }
    updateForm() {
      c("body").elements[0].insertAdjacentHTML("afterbegin", `<style>${f}</style>`), c(".elementor-form-fields-wrapper>div:nth-child(4) input").elements[0].value = "Alternative Variation", u("pricing_form_updated", "spark_quiz", "view");
    }
  }
  new w();
})();
//# sourceMappingURL=index.js.map
