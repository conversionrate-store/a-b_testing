(function() {
  "use strict";
  const u = `exit-layer [class*=_popup__logo] svg {
  width: 40px;
  height: 40px;
}

.youTubeAnimation__applicationIcon,
youtube-animation [class*=_adBlock__logo],
exit-layer [class*=_popup__logo] img {
  display: none;
}/*# sourceMappingURL=style.css.map */`, f = (n, t, e, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: n,
      event_desc: t,
      event_type: e,
      event_loc: s
    }), p(`Event: ${n} | ${t} | ${e} | ${s}`, "success");
  }, h = (n) => new Promise((t) => {
    const e = document.querySelector(n);
    e && t(e);
    const s = new MutationObserver(() => {
      const o = document.querySelector(n);
      o && (t(o), s.disconnect());
    });
    s.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), C = ({ name: n, dev: t }) => {
    const e = n.toLowerCase().replace(/\s/g, "_");
    f(`${e}_started`, `Experiment ${n} started`, "other", e), console.log(
      `%c EXP: ${n} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class i {
    constructor(t) {
      this.elements = t instanceof i ? t.elements : typeof t == "string" ? Array.from(document.querySelectorAll(t)) : t instanceof Element ? [t] : Array.isArray(t) ? t : Array.from(t);
    }
    on(t, e, s) {
      return typeof e == "function" && (s = e, e = ""), this.elements.forEach((o) => {
        o.addEventListener(t, function(c) {
          var l;
          if (e !== "") {
            let a = (l = c.target) == null ? void 0 : l.closest(e);
            a && (s == null || s.call(a, c));
          } else
            s == null || s.call(o, c);
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
        t(new i(e), this.elements.indexOf(e));
      return this;
    }
    style(t, e) {
      const s = t.split("-").map((o, c) => c === 0 ? o : o.charAt(0).toUpperCase() + o.slice(1)).join("");
      return this.elements.forEach(function(o) {
        o.style[s] = e;
      }), this;
    }
    find(t) {
      const e = this.elements.map((s) => Array.from(s.querySelectorAll(t)));
      return new i(e.flat());
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
  const r = (n) => new i(n), p = (n, t = "info") => {
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
    console.log(`%c>>> ${n}`, `${e} font-size: 16px; font-weight: 600`);
  }, m = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M6.34629 0.133628C2.82149 0.383228 2.32229 0.558428 1.29669 2.08323C0.371894 3.43443 0.196694 4.95843 0.0462943 12.7336C-0.153706 24.0832 0.246294 27.0336 2.19669 28.6832C2.97189 29.3336 2.87189 29.3088 9.09669 29.7832C12.2967 30.0336 17.1463 30.0336 20.3463 29.7832C26.8967 29.2832 26.4463 29.3584 27.4967 28.4336C28.8471 27.2336 29.1471 25.9832 29.4967 20.408C29.9215 13.384 29.4215 4.48323 28.4967 2.65843C27.6967 1.08323 26.8967 0.533628 25.1463 0.308028C22.5223 0.00802763 9.77189 -0.115972 6.34629 0.133628ZM23.0463 3.50803C24.2223 3.70803 25.3463 4.78323 25.7463 6.05843C26.1223 7.30883 26.3223 18.1584 26.0215 20.9832C25.7719 23.5088 25.2471 24.8832 24.2967 25.4832C23.2967 26.1584 16.0967 26.5088 10.4719 26.1832C5.42149 25.9088 4.99669 25.7584 4.14629 24.0584C3.42149 22.608 3.04629 15.6832 3.42149 10.4832C3.84629 4.28323 4.27189 3.68323 8.37189 3.35843C11.0215 3.13363 21.4719 3.25843 23.0463 3.50883V3.50803Z" fill="white"/>
<path d="M7.72266 14.6084V22.4828L11.4227 18.7828C13.4475 16.758 15.1979 15.1084 15.2979 15.1084C15.3979 15.1084 15.4723 16.758 15.4723 18.7828V22.4828L19.3979 18.5332L23.3475 14.6076L19.3979 10.6828L15.4723 6.73322V10.4332C15.4723 12.458 15.3979 14.1084 15.2979 14.1084C15.1979 14.1084 13.4475 12.458 11.4227 10.4324L7.72266 6.73242V14.6084Z" fill="white"/>
</svg>`, d = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M6.34629 0.133628C2.82149 0.383228 2.32229 0.558428 1.29669 2.08323C0.371894 3.43443 0.196694 4.95843 0.0462943 12.7336C-0.153706 24.0832 0.246294 27.0336 2.19669 28.6832C2.97189 29.3336 2.87189 29.3088 9.09669 29.7832C12.2967 30.0336 17.1463 30.0336 20.3463 29.7832C26.8967 29.2832 26.4463 29.3584 27.4967 28.4336C28.8471 27.2336 29.1471 25.9832 29.4967 20.408C29.9215 13.384 29.4215 4.48323 28.4967 2.65843C27.6967 1.08323 26.8967 0.533628 25.1463 0.308028C22.5223 0.00802763 9.77189 -0.115972 6.34629 0.133628ZM23.0463 3.50803C24.2223 3.70803 25.3463 4.78323 25.7463 6.05843C26.1223 7.30883 26.3223 18.1584 26.0215 20.9832C25.7719 23.5088 25.2471 24.8832 24.2967 25.4832C23.2967 26.1584 16.0967 26.5088 10.4719 26.1832C5.42149 25.9088 4.99669 25.7584 4.14629 24.0584C3.42149 22.608 3.04629 15.6832 3.42149 10.4832C3.84629 4.28323 4.27189 3.68323 8.37189 3.35843C11.0215 3.13363 21.4719 3.25843 23.0463 3.50883V3.50803Z" fill="#d61717"/>
<path d="M7.72266 14.6084V22.4828L11.4227 18.7828C13.4475 16.758 15.1979 15.1084 15.2979 15.1084C15.3979 15.1084 15.4723 16.758 15.4723 18.7828V22.4828L19.3979 18.5332L23.3475 14.6076L19.3979 10.6828L15.4723 6.73322V10.4332C15.4723 12.458 15.3979 14.1084 15.2979 14.1084C15.1979 14.1084 13.4475 12.458 11.4227 10.4324L7.72266 6.73242V14.6084Z" fill="#d61717"/>
</svg>`, w = `${m} Download AdBlock for YouTube Desktop — Free`;
  C({ name: "Adblock Install V2", dev: "YK" });
  class g {
    constructor() {
      this.init();
    }
    async init() {
      await h("body"), r("head").elements[0].insertAdjacentHTML("beforeend", `<style>${u}</style>`), r("h1").elements[0].innerHTML = "Step 2: Block Ads Across Your Whole PC", r('exit-layer [class*="_popup__logo"]').elements[0].insertAdjacentHTML("afterbegin", d), r("exit-layer h3").elements[0].innerHTML = "AdBlock for YouTube Desktop: Choose what you want to block", r("#main-cta").elements[0].innerHTML = w, r("div[class*=_freeAdBlockerPage__socials] p").elements.forEach((t) => {
        t.innerText = t.innerText.replace("AdBlock360", "Adblock for YouTube Desktop");
      });
    }
  }
  new g();
})();
//# sourceMappingURL=index.js.map
