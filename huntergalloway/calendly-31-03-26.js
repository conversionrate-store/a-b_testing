(function() {
  "use strict";
  const y = `.step.step_5.crs_calendly_mode > *:not(.crs_calendly_wrapper) {
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
    }), a(`Event: ${r} | ${e} | ${t} | ${n}`, "success");
  }, f = (r) => new Promise((e) => {
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
  }), m = ({ name: r, dev: e }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class l {
    constructor(e) {
      this.elements = e instanceof l ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, t, n) {
      return typeof t == "function" && (n = t, t = ""), this.elements.forEach((s) => {
        s.addEventListener(e, function(o) {
          var c;
          if (t !== "") {
            let i = (c = o.target) == null ? void 0 : c.closest(t);
            i && (n == null || n.call(i, o));
          } else
            n == null || n.call(s, o);
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
        e(new l(t), this.elements.indexOf(t));
      return this;
    }
    style(e, t) {
      const n = e.split("-").map((s, o) => o === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[n] = t;
      }), this;
    }
    find(e) {
      const t = this.elements.map((n) => Array.from(n.querySelectorAll(e)));
      return new l(t.flat());
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
  const h = (r) => new l(r), w = async (r) => {
    const e = (t) => new Promise((n, s) => {
      const o = t.split(".").pop();
      if (o === "js") {
        if (Array.from(document.scripts).map((d) => d.src.toLowerCase()).includes(t.toLowerCase()))
          return a(`Script ${t} allready downloaded!`, "success"), n("");
        const i = document.createElement("script");
        i.src = t, i.onload = n, i.onerror = s, document.head.appendChild(i);
      } else if (o === "css") {
        if (Array.from(document.styleSheets).map((d) => {
          var p;
          return (p = d.href) == null ? void 0 : p.toLowerCase();
        }).includes(t.toLowerCase()))
          return a(`Style ${t} allready downloaded!`, "success"), n("");
        const i = document.createElement("link");
        i.rel = "stylesheet", i.href = t, i.onload = n, i.onerror = s, document.head.appendChild(i);
      }
    });
    for (const t of r)
      a(t), await e(t), a(`Loaded librari ${t}`);
    a("All libraries loaded!", "success");
  }, _ = (r) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", r, "variant_1"));
    }, 1e3);
  }, a = (r, e = "info") => {
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
  m({ name: "Calendly", dev: "YK" }), _("calendly");
  const g = "https://calendly.com/d/csns-vtq-npr/broker-chat";
  class v {
    constructor() {
      this.init();
    }
    async init() {
      await f("body"), h("head").elements[0].insertAdjacentHTML("beforeend", `<style>${y}</style>`);
      const e = await f(".step.step_5");
      this.observeStep5(e), e.classList.contains("active") && this.injectCalendly(e);
    }
    observeStep5(e) {
      new MutationObserver(() => {
        e.classList.contains("active") && !e.querySelector(".crs_calendly_wrapper") && this.injectCalendly(e);
      }).observe(e, { attributes: !0, attributeFilter: ["class"] });
    }
    getUserData() {
      var s, o, c;
      const e = document.querySelector(
        'input#name, input[name="name"], input#first_name, input[name="first_name"]'
      ), t = document.querySelector('input#email, input[type="email"], input[name="email"]'), n = document.querySelector('input#phone, input[name="phone"], input[type="tel"]');
      return {
        name: ((s = e == null ? void 0 : e.value) == null ? void 0 : s.trim()) || "",
        email: ((o = t == null ? void 0 : t.value) == null ? void 0 : o.trim()) || "",
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
      t && (await w(["https://assets.calendly.com/assets/external/widget.js"]), window.Calendly && window.Calendly.initInlineWidget({
        url: g,
        parentElement: t,
        prefill: this.buildPrefill()
      }), window.addEventListener("message", (n) => {
        var s;
        ((s = n.data) == null ? void 0 : s.event) === "calendly.event_scheduled" && this.onBookingConfirmed(e);
      }), u("exp_calendly_widget_shown", "Calendly widget shown", "view", "Calendly"));
    }
    onBookingConfirmed(e) {
      const t = e.querySelector(".crs_calendly_wrapper");
      t && (t.style.display = "none"), e.classList.remove("crs_calendly_mode"), u("exp_calendly_event_scheduled", "Calendly booking confirmed", "success", "Calendly");
    }
  }
  new v();
})();
//# sourceMappingURL=index.js.map
