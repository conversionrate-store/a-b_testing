(function() {
  "use strict";
  const p = `.step.step_5.crs_calendly_mode > *:not(.crs_calendly_wrapper) {
  display: none !important;
}
.step.step_5 .crs_calendly_wrapper {
  width: 100%;
  min-height: 700px;
}
.step.step_5 .crs_calendly_wrapper .crs_calendly_widget {
  min-width: 320px;
  height: 700px;
  width: 100%;
}/*# sourceMappingURL=style.css.map */`, u = (r, e, t, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: r,
      event_desc: e,
      event_type: t,
      event_loc: n
    }), l(`Event: ${r} | ${e} | ${t} | ${n}`, "success");
  }, m = (r) => new Promise((e) => {
    const t = document.querySelector(r);
    t && e(t);
    const n = new MutationObserver(() => {
      const s = document.querySelector(r);
      s && (e(s), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), y = ({ name: r, dev: e }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class a {
    constructor(e) {
      this.elements = e instanceof a ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, t, n) {
      return typeof t == "function" && (n = t, t = ""), this.elements.forEach((s) => {
        s.addEventListener(e, function(i) {
          var c;
          if (t !== "") {
            let o = (c = i.target) == null ? void 0 : c.closest(t);
            o && (n == null || n.call(o, i));
          } else
            n == null || n.call(s, i);
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
        e(new a(t), this.elements.indexOf(t));
      return this;
    }
    style(e, t) {
      const n = e.split("-").map((s, i) => i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[n] = t;
      }), this;
    }
    find(e) {
      const t = this.elements.map((n) => Array.from(n.querySelectorAll(e)));
      return new a(t.flat());
    }
    attr(e, t) {
      return t ? (this.elements.forEach(function(n) {
        n.setAttribute(e, t);
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
  const h = (r) => new a(r), w = async (r) => {
    const e = (t) => new Promise((n, s) => {
      const i = t.split(".").pop();
      if (i === "js") {
        if (Array.from(document.scripts).map((d) => d.src.toLowerCase()).includes(t.toLowerCase()))
          return l(`Script ${t} allready downloaded!`, "success"), n("");
        const o = document.createElement("script");
        o.src = t, o.onload = n, o.onerror = s, document.head.appendChild(o);
      } else if (i === "css") {
        if (Array.from(document.styleSheets).map((d) => {
          var f;
          return (f = d.href) == null ? void 0 : f.toLowerCase();
        }).includes(t.toLowerCase()))
          return l(`Style ${t} allready downloaded!`, "success"), n("");
        const o = document.createElement("link");
        o.rel = "stylesheet", o.href = t, o.onload = n, o.onerror = s, document.head.appendChild(o);
      }
    });
    for (const t of r)
      l(t), await e(t), l(`Loaded librari ${t}`);
    l("All libraries loaded!", "success");
  }, _ = (r) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", r, "variant_1"));
    }, 1e3);
  }, l = (r, e = "info") => {
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
    console.log(`%c>>> ${r}`, `${t} font-size: 16px; font-weight: 600`);
  }, b = (
    /* HTML */
    `
  <div class="crs_calendly_wrapper">
    <div class="crs_calendly_widget"></div>
  </div>
`
  );
  y({ name: "Calendly", dev: "YK" }), _("calendly");
  const g = "https://calendly.com/d/csns-vtq-npr/broker-chat";
  class v {
    constructor() {
      this.init();
    }
    async init() {
      await m("body"), h("head").elements[0].insertAdjacentHTML("beforeend", `<style>${p}</style>`);
      const e = await m(".step.step_5");
      this.observeStep5(e), e.classList.contains("active") && this.injectCalendly(e);
    }
    observeStep5(e) {
      new MutationObserver(() => {
        e.classList.contains("active") && !e.querySelector(".crs_calendly_wrapper") && this.injectCalendly(e);
      }).observe(e, { attributes: !0, attributeFilter: ["class"] });
    }
    getUserData() {
      var s, i, c;
      const e = document.querySelector(
        'input#name, input[name="name"], input#first_name, input[name="first_name"]'
      ), t = document.querySelector('input#email, input[type="email"], input[name="email"]'), n = document.querySelector('input#phone, input[name="phone"], input[type="tel"]');
      return {
        name: ((s = e == null ? void 0 : e.value) == null ? void 0 : s.trim()) || "",
        email: ((i = t == null ? void 0 : t.value) == null ? void 0 : i.trim()) || "",
        phone: ((c = n == null ? void 0 : n.value) == null ? void 0 : c.trim()) || ""
      };
    }
    buildPrefill() {
      const { name: e, email: t, phone: n } = this.getUserData(), s = {};
      return e && (s.name = e), t && (s.email = t), n && (s.customAnswers = { a1: n }), s;
    }
    async injectCalendly(e) {
      e.classList.add("crs_calendly_mode"), e.insertAdjacentHTML("beforeend", b);
      const t = e.querySelector(".crs_calendly_widget");
      if (!t) return;
      await w(["https://assets.calendly.com/assets/external/widget.js"]), window.Calendly && window.Calendly.initInlineWidget({
        url: g,
        parentElement: t,
        prefill: this.buildPrefill()
      }), window.addEventListener("message", (s) => {
        var i;
        ((i = s.data) == null ? void 0 : i.event) === "calendly.event_scheduled" && this.onBookingConfirmed(e);
      });
      const n = this.buildPrefill().email || "unknown email";
      u("exp_calendly_widget_shown", `Calendly widget shown ${n}`, "view", "Calendly");
    }
    onBookingConfirmed(e) {
      const t = e.querySelector(".crs_calendly_wrapper");
      t && (t.style.display = "none"), e.classList.remove("crs_calendly_mode");
      const n = this.buildPrefill().email || "unknown email";
      u("exp_calendly_event_scheduled", `Calendly booking confirmed ${n}`, "success", "Calendly");
    }
  }
  new v();
})();
//# sourceMappingURL=index.js.map
