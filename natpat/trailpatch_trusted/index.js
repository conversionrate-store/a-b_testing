(function() {
  "use strict";
  const Pe = (s, e, t, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: s,
      event_desc: e,
      event_type: t,
      event_loc: i
    }), oe(`Event: ${s} | ${e} | ${t} | ${i}`, "success");
  }, Ge = (s) => new Promise((e) => {
    const t = document.querySelector(s);
    t && e(t);
    const i = new MutationObserver(() => {
      const a = document.querySelector(s);
      a && (e(a), i.disconnect());
    });
    i.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), gt = ({ name: s, dev: e }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class ve {
    constructor(e) {
      this.elements = e instanceof ve ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, t, i) {
      return typeof t == "function" && (i = t, t = ""), this.elements.forEach((a) => {
        a.addEventListener(e, function(r) {
          var c;
          if (t !== "") {
            let d = (c = r.target) == null ? void 0 : c.closest(t);
            d && (i == null || i.call(d, r));
          } else
            i == null || i.call(a, r);
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
        e(new ve(t), this.elements.indexOf(t));
      return this;
    }
    style(e, t) {
      const i = e.split("-").map((a, r) => r === 0 ? a : a.charAt(0).toUpperCase() + a.slice(1)).join("");
      return this.elements.forEach(function(a) {
        a.style[i] = t;
      }), this;
    }
    find(e) {
      const t = this.elements.map((i) => Array.from(i.querySelectorAll(e)));
      return new ve(t.flat());
    }
    attr(e, t) {
      return t ? (this.elements.forEach(function(i) {
        i.setAttribute(e, t);
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
  const we = (s) => new ve(s), vt = async (s) => {
    const e = (t) => new Promise((i, a) => {
      const r = t.split(".").pop();
      if (r === "js") {
        if (Array.from(document.scripts).map((u) => u.src.toLowerCase()).includes(t.toLowerCase()))
          return oe(`Script ${t} allready downloaded!`, "success"), i("");
        const d = document.createElement("script");
        d.src = t, d.onload = i, d.onerror = a, document.head.appendChild(d);
      } else if (r === "css") {
        if (Array.from(document.styleSheets).map((u) => {
          var o;
          return (o = u.href) == null ? void 0 : o.toLowerCase();
        }).includes(t.toLowerCase()))
          return oe(`Style ${t} allready downloaded!`, "success"), i("");
        const d = document.createElement("link");
        d.rel = "stylesheet", d.href = t, d.onload = i, d.onerror = a, document.head.appendChild(d);
      }
    });
    for (const t of s)
      oe(t), await e(t), oe(`Loaded librari ${t}`);
    oe("All libraries loaded!", "success");
  }, wt = (s) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", s, "variant_1"));
    }, 1e3);
  }, yt = (s, e, t, i, a = 1e3, r = 0.5) => {
    let c, d;
    c = new IntersectionObserver(
      function(u) {
        u[0].isIntersecting === !0 ? d = setTimeout(() => {
          Pe(
            e,
            u[0].target.dataset.visible || i || "",
            "view",
            t
          ), c.disconnect();
        }, a) : (oe("Element is not fully visible", "warn"), clearTimeout(d));
      },
      { threshold: [r] }
    );
    {
      const u = document.querySelector(s);
      u && c.observe(u);
    }
  }, tt = (s, e) => {
    const t = document.querySelector(s);
    if (!t) return;
    const a = t.getBoundingClientRect().top - e;
    window.scrollBy({
      top: a,
      behavior: "smooth"
    });
  }, oe = (s, e = "info") => {
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
    console.log(`%c>>> ${s}`, `${t} font-size: 16px; font-weight: 600`);
  }, bt = `.lp-tr--hero-section .container-fluid {
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
.crs_trusted .swiper {
  margin: 24px 0 44px;
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
}/*# sourceMappingURL=style.css.map */`, Le = "https://conversionrate-store.github.io/a-b_images/natpat", St = (
    /* HTML */
    `
  <div class="crs_trusted">
    <style>
      ${bt}
    </style>
    <div class="wrap">
      <h2>Trusted by 5000 stores<br />and top retailers globaly</h2>
      <img src="${Le}/logos.webp" alt="logos" />
      <img src="${Le}/map.webp" alt="map" />
    </div>
    <div class="swiper">
      <div class="swiper-wrapper">
        ${[...Array(7)].map((s, e) => `<div class="swiper-slide"><img src="${Le}/slide-${e + 1}.webp" alt="slide" /></div>`).join("")}
      </div>
    </div>
    <div class="wrap">
      <button>Buy now</button>
      <p>
        <b>30 Day Money Back Guarantee</b>: If our stickers don’t help your active child, we’ll give you a full refund.
      </p>
      <img src="${Le}/guaranty.webp" alt="guaranty" />
    </div>
  </div>
`
  ), xt = (
    /* HTML */
    ' <button class="crs_faq_btn">Get Yours Now</button> '
  );
  function st(s) {
    return s !== null && typeof s == "object" && "constructor" in s && s.constructor === Object;
  }
  function Be(s, e) {
    s === void 0 && (s = {}), e === void 0 && (e = {});
    const t = ["__proto__", "constructor", "prototype"];
    Object.keys(e).filter((i) => t.indexOf(i) < 0).forEach((i) => {
      typeof s[i] > "u" ? s[i] = e[i] : st(e[i]) && st(s[i]) && Object.keys(e[i]).length > 0 && Be(s[i], e[i]);
    });
  }
  const it = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      },
      nodeName: ""
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {
        }
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {
        },
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function N() {
    const s = typeof document < "u" ? document : {};
    return Be(s, it), s;
  }
  const Et = {
    document: it,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent: function() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia() {
      return {};
    },
    requestAnimationFrame(s) {
      return typeof setTimeout > "u" ? (s(), null) : setTimeout(s, 0);
    },
    cancelAnimationFrame(s) {
      typeof setTimeout > "u" || clearTimeout(s);
    }
  };
  function _() {
    const s = typeof window < "u" ? window : {};
    return Be(s, Et), s;
  }
  function ie(s) {
    return s === void 0 && (s = ""), s.trim().split(" ").filter((e) => !!e.trim());
  }
  function Tt(s) {
    const e = s;
    Object.keys(e).forEach((t) => {
      try {
        e[t] = null;
      } catch {
      }
      try {
        delete e[t];
      } catch {
      }
    });
  }
  function de(s, e) {
    return e === void 0 && (e = 0), setTimeout(s, e);
  }
  function Q() {
    return Date.now();
  }
  function Mt(s) {
    const e = _();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(s, null)), !t && s.currentStyle && (t = s.currentStyle), t || (t = s.style), t;
  }
  function Xe(s, e) {
    e === void 0 && (e = "x");
    const t = _();
    let i, a, r;
    const c = Mt(s);
    return t.WebKitCSSMatrix ? (a = c.transform || c.webkitTransform, a.split(",").length > 6 && (a = a.split(", ").map((d) => d.replace(",", ".")).join(", ")), r = new t.WebKitCSSMatrix(a === "none" ? "" : a)) : (r = c.MozTransform || c.OTransform || c.MsTransform || c.msTransform || c.transform || c.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = r.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? a = r.m41 : i.length === 16 ? a = parseFloat(i[12]) : a = parseFloat(i[4])), e === "y" && (t.WebKitCSSMatrix ? a = r.m42 : i.length === 16 ? a = parseFloat(i[13]) : a = parseFloat(i[5])), a || 0;
  }
  function ye(s) {
    return typeof s == "object" && s !== null && s.constructor && Object.prototype.toString.call(s).slice(8, -1) === "Object";
  }
  function Ct(s) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? s instanceof HTMLElement : s && (s.nodeType === 1 || s.nodeType === 11);
  }
  function U() {
    const s = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (i != null && !Ct(i)) {
        const a = Object.keys(Object(i)).filter((r) => e.indexOf(r) < 0);
        for (let r = 0, c = a.length; r < c; r += 1) {
          const d = a[r], u = Object.getOwnPropertyDescriptor(i, d);
          u !== void 0 && u.enumerable && (ye(s[d]) && ye(i[d]) ? i[d].__swiper__ ? s[d] = i[d] : U(s[d], i[d]) : !ye(s[d]) && ye(i[d]) ? (s[d] = {}, i[d].__swiper__ ? s[d] = i[d] : U(s[d], i[d])) : s[d] = i[d]);
        }
      }
    }
    return s;
  }
  function be(s, e, t) {
    s.style.setProperty(e, t);
  }
  function rt(s) {
    let {
      swiper: e,
      targetPosition: t,
      side: i
    } = s;
    const a = _(), r = -e.translate;
    let c = null, d;
    const u = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(e.cssModeFrameID);
    const o = t > r ? "next" : "prev", f = (w, g) => o === "next" && w >= g || o === "prev" && w <= g, m = () => {
      d = (/* @__PURE__ */ new Date()).getTime(), c === null && (c = d);
      const w = Math.max(Math.min((d - c) / u, 1), 0), g = 0.5 - Math.cos(w * Math.PI) / 2;
      let n = r + g * (t - r);
      if (f(n, t) && (n = t), e.wrapperEl.scrollTo({
        [i]: n
      }), f(n, t)) {
        e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
            [i]: n
          });
        }), a.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = a.requestAnimationFrame(m);
    };
    m();
  }
  function ce(s) {
    return s.querySelector(".swiper-slide-transform") || s.shadowRoot && s.shadowRoot.querySelector(".swiper-slide-transform") || s;
  }
  function q(s, e) {
    e === void 0 && (e = "");
    const t = _(), i = [...s.children];
    return t.HTMLSlotElement && s instanceof HTMLSlotElement && i.push(...s.assignedElements()), e ? i.filter((a) => a.matches(e)) : i;
  }
  function Pt(s, e) {
    const t = [e];
    for (; t.length > 0; ) {
      const i = t.shift();
      if (s === i)
        return !0;
      t.push(...i.children, ...i.shadowRoot ? i.shadowRoot.children : [], ...i.assignedElements ? i.assignedElements() : []);
    }
  }
  function Lt(s, e) {
    const t = _();
    let i = e.contains(s);
    return !i && t.HTMLSlotElement && e instanceof HTMLSlotElement && (i = [...e.assignedElements()].includes(s), i || (i = Pt(s, e))), i;
  }
  function Ie(s) {
    try {
      console.warn(s);
      return;
    } catch {
    }
  }
  function K(s, e) {
    e === void 0 && (e = []);
    const t = document.createElement(s);
    return t.classList.add(...Array.isArray(e) ? e : ie(e)), t;
  }
  function Ae(s) {
    const e = _(), t = N(), i = s.getBoundingClientRect(), a = t.body, r = s.clientTop || a.clientTop || 0, c = s.clientLeft || a.clientLeft || 0, d = s === e ? e.scrollY : s.scrollTop, u = s === e ? e.scrollX : s.scrollLeft;
    return {
      top: i.top + d - r,
      left: i.left + u - c
    };
  }
  function It(s, e) {
    const t = [];
    for (; s.previousElementSibling; ) {
      const i = s.previousElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), s = i;
    }
    return t;
  }
  function At(s, e) {
    const t = [];
    for (; s.nextElementSibling; ) {
      const i = s.nextElementSibling;
      e ? i.matches(e) && t.push(i) : t.push(i), s = i;
    }
    return t;
  }
  function re(s, e) {
    return _().getComputedStyle(s, null).getPropertyValue(e);
  }
  function Se(s) {
    let e = s, t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function fe(s, e) {
    const t = [];
    let i = s.parentElement;
    for (; i; )
      e ? i.matches(e) && t.push(i) : t.push(i), i = i.parentElement;
    return t;
  }
  function xe(s, e) {
    function t(i) {
      i.target === s && (e.call(s, i), s.removeEventListener("transitionend", t));
    }
    e && s.addEventListener("transitionend", t);
  }
  function Ye(s, e, t) {
    const i = _();
    return s[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(s, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(s, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"));
  }
  function Y(s) {
    return (Array.isArray(s) ? s : [s]).filter((e) => !!e);
  }
  function ze(s) {
    return (e) => Math.abs(e) > 0 && s.browser && s.browser.need3dFix && Math.abs(e) % 90 === 0 ? e + 1e-3 : e;
  }
  let Re;
  function zt() {
    const s = _(), e = N();
    return {
      smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
      touch: !!("ontouchstart" in s || s.DocumentTouch && e instanceof s.DocumentTouch)
    };
  }
  function at() {
    return Re || (Re = zt()), Re;
  }
  let _e;
  function $t(s) {
    let {
      userAgent: e
    } = s === void 0 ? {} : s;
    const t = at(), i = _(), a = i.navigator.platform, r = e || i.navigator.userAgent, c = {
      ios: !1,
      android: !1
    }, d = i.screen.width, u = i.screen.height, o = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let f = r.match(/(iPad).*OS\s([\d_]+)/);
    const m = r.match(/(iPod)(.*OS\s([\d_]+))?/), w = !f && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/), g = a === "Win32";
    let n = a === "MacIntel";
    const l = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !f && n && t.touch && l.indexOf(`${d}x${u}`) >= 0 && (f = r.match(/(Version)\/([\d.]+)/), f || (f = [0, 1, "13_0_0"]), n = !1), o && !g && (c.os = "android", c.android = !0), (f || w || m) && (c.os = "ios", c.ios = !0), c;
  }
  function nt(s) {
    return s === void 0 && (s = {}), _e || (_e = $t(s)), _e;
  }
  let Ve;
  function Ot() {
    const s = _(), e = nt();
    let t = !1;
    function i() {
      const d = s.navigator.userAgent.toLowerCase();
      return d.indexOf("safari") >= 0 && d.indexOf("chrome") < 0 && d.indexOf("android") < 0;
    }
    if (i()) {
      const d = String(s.navigator.userAgent);
      if (d.includes("Version/")) {
        const [u, o] = d.split("Version/")[1].split(" ")[0].split(".").map((f) => Number(f));
        t = u < 16 || u === 16 && o < 2;
      }
    }
    const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent), r = i(), c = r || a && e.ios;
    return {
      isSafari: t || r,
      needPerspectiveFix: t,
      need3dFix: c,
      isWebView: a
    };
  }
  function lt() {
    return Ve || (Ve = Ot()), Ve;
  }
  function Dt(s) {
    let {
      swiper: e,
      on: t,
      emit: i
    } = s;
    const a = _();
    let r = null, c = null;
    const d = () => {
      !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"));
    }, u = () => {
      !e || e.destroyed || !e.initialized || (r = new ResizeObserver((m) => {
        c = a.requestAnimationFrame(() => {
          const {
            width: w,
            height: g
          } = e;
          let n = w, l = g;
          m.forEach((v) => {
            let {
              contentBoxSize: y,
              contentRect: h,
              target: p
            } = v;
            p && p !== e.el || (n = h ? h.width : (y[0] || y).inlineSize, l = h ? h.height : (y[0] || y).blockSize);
          }), (n !== w || l !== g) && d();
        });
      }), r.observe(e.el));
    }, o = () => {
      c && a.cancelAnimationFrame(c), r && r.unobserve && e.el && (r.unobserve(e.el), r = null);
    }, f = () => {
      !e || e.destroyed || !e.initialized || i("orientationchange");
    };
    t("init", () => {
      if (e.params.resizeObserver && typeof a.ResizeObserver < "u") {
        u();
        return;
      }
      a.addEventListener("resize", d), a.addEventListener("orientationchange", f);
    }), t("destroy", () => {
      o(), a.removeEventListener("resize", d), a.removeEventListener("orientationchange", f);
    });
  }
  function kt(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i,
      emit: a
    } = s;
    const r = [], c = _(), d = function(f, m) {
      m === void 0 && (m = {});
      const w = c.MutationObserver || c.WebkitMutationObserver, g = new w((n) => {
        if (e.__preventObserver__) return;
        if (n.length === 1) {
          a("observerUpdate", n[0]);
          return;
        }
        const l = function() {
          a("observerUpdate", n[0]);
        };
        c.requestAnimationFrame ? c.requestAnimationFrame(l) : c.setTimeout(l, 0);
      });
      g.observe(f, {
        attributes: typeof m.attributes > "u" ? !0 : m.attributes,
        childList: e.isElement || (typeof m.childList > "u" ? !0 : m).childList,
        characterData: typeof m.characterData > "u" ? !0 : m.characterData
      }), r.push(g);
    }, u = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const f = fe(e.hostEl);
          for (let m = 0; m < f.length; m += 1)
            d(f[m]);
        }
        d(e.hostEl, {
          childList: e.params.observeSlideChildren
        }), d(e.wrapperEl, {
          attributes: !1
        });
      }
    }, o = () => {
      r.forEach((f) => {
        f.disconnect();
      }), r.splice(0, r.length);
    };
    t({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), i("init", u), i("destroy", o);
  }
  var Ht = {
    on(s, e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
      const a = t ? "unshift" : "push";
      return s.split(" ").forEach((r) => {
        i.eventsListeners[r] || (i.eventsListeners[r] = []), i.eventsListeners[r][a](e);
      }), i;
    },
    once(s, e, t) {
      const i = this;
      if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
      function a() {
        i.off(s, a), a.__emitterProxy && delete a.__emitterProxy;
        for (var r = arguments.length, c = new Array(r), d = 0; d < r; d++)
          c[d] = arguments[d];
        e.apply(i, c);
      }
      return a.__emitterProxy = e, i.on(s, a, t);
    },
    onAny(s, e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || typeof s != "function") return t;
      const i = e ? "unshift" : "push";
      return t.eventsAnyListeners.indexOf(s) < 0 && t.eventsAnyListeners[i](s), t;
    },
    offAny(s) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
      const t = e.eventsAnyListeners.indexOf(s);
      return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
    },
    off(s, e) {
      const t = this;
      return !t.eventsListeners || t.destroyed || !t.eventsListeners || s.split(" ").forEach((i) => {
        typeof e > "u" ? t.eventsListeners[i] = [] : t.eventsListeners[i] && t.eventsListeners[i].forEach((a, r) => {
          (a === e || a.__emitterProxy && a.__emitterProxy === e) && t.eventsListeners[i].splice(r, 1);
        });
      }), t;
    },
    emit() {
      const s = this;
      if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s;
      let e, t, i;
      for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
        r[c] = arguments[c];
      return typeof r[0] == "string" || Array.isArray(r[0]) ? (e = r[0], t = r.slice(1, r.length), i = s) : (e = r[0].events, t = r[0].data, i = r[0].context || s), t.unshift(i), (Array.isArray(e) ? e : e.split(" ")).forEach((u) => {
        s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach((o) => {
          o.apply(i, [u, ...t]);
        }), s.eventsListeners && s.eventsListeners[u] && s.eventsListeners[u].forEach((o) => {
          o.apply(i, t);
        });
      }), s;
    }
  };
  function Gt() {
    const s = this;
    let e, t;
    const i = s.el;
    typeof s.params.width < "u" && s.params.width !== null ? e = s.params.width : e = i.clientWidth, typeof s.params.height < "u" && s.params.height !== null ? t = s.params.height : t = i.clientHeight, !(e === 0 && s.isHorizontal() || t === 0 && s.isVertical()) && (e = e - parseInt(re(i, "padding-left") || 0, 10) - parseInt(re(i, "padding-right") || 0, 10), t = t - parseInt(re(i, "padding-top") || 0, 10) - parseInt(re(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(s, {
      width: e,
      height: t,
      size: s.isHorizontal() ? e : t
    }));
  }
  function Bt() {
    const s = this;
    function e(T, L) {
      return parseFloat(T.getPropertyValue(s.getDirectionLabel(L)) || 0);
    }
    const t = s.params, {
      wrapperEl: i,
      slidesEl: a,
      size: r,
      rtlTranslate: c,
      wrongRTL: d
    } = s, u = s.virtual && t.virtual.enabled, o = u ? s.virtual.slides.length : s.slides.length, f = q(a, `.${s.params.slideClass}, swiper-slide`), m = u ? s.virtual.slides.length : f.length;
    let w = [];
    const g = [], n = [];
    let l = t.slidesOffsetBefore;
    typeof l == "function" && (l = t.slidesOffsetBefore.call(s));
    let v = t.slidesOffsetAfter;
    typeof v == "function" && (v = t.slidesOffsetAfter.call(s));
    const y = s.snapGrid.length, h = s.slidesGrid.length;
    let p = t.spaceBetween, b = -l, x = 0, $ = 0;
    if (typeof r > "u")
      return;
    typeof p == "string" && p.indexOf("%") >= 0 ? p = parseFloat(p.replace("%", "")) / 100 * r : typeof p == "string" && (p = parseFloat(p)), s.virtualSize = -p, f.forEach((T) => {
      c ? T.style.marginLeft = "" : T.style.marginRight = "", T.style.marginBottom = "", T.style.marginTop = "";
    }), t.centeredSlides && t.cssMode && (be(i, "--swiper-centered-offset-before", ""), be(i, "--swiper-centered-offset-after", ""));
    const A = t.grid && t.grid.rows > 1 && s.grid;
    A ? s.grid.initSlides(f) : s.grid && s.grid.unsetSlides();
    let z;
    const M = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter((T) => typeof t.breakpoints[T].slidesPerView < "u").length > 0;
    for (let T = 0; T < m; T += 1) {
      z = 0;
      let L;
      if (f[T] && (L = f[T]), A && s.grid.updateSlide(T, L, f), !(f[T] && re(L, "display") === "none")) {
        if (t.slidesPerView === "auto") {
          M && (f[T].style[s.getDirectionLabel("width")] = "");
          const P = getComputedStyle(L), C = L.style.transform, I = L.style.webkitTransform;
          if (C && (L.style.transform = "none"), I && (L.style.webkitTransform = "none"), t.roundLengths)
            z = s.isHorizontal() ? Ye(L, "width") : Ye(L, "height");
          else {
            const D = e(P, "width"), H = e(P, "padding-left"), S = e(P, "padding-right"), E = e(P, "margin-left"), B = e(P, "margin-right"), X = P.getPropertyValue("box-sizing");
            if (X && X === "border-box")
              z = D + E + B;
            else {
              const {
                clientWidth: V,
                offsetWidth: F
              } = L;
              z = D + H + S + E + B + (F - V);
            }
          }
          C && (L.style.transform = C), I && (L.style.webkitTransform = I), t.roundLengths && (z = Math.floor(z));
        } else
          z = (r - (t.slidesPerView - 1) * p) / t.slidesPerView, t.roundLengths && (z = Math.floor(z)), f[T] && (f[T].style[s.getDirectionLabel("width")] = `${z}px`);
        f[T] && (f[T].swiperSlideSize = z), n.push(z), t.centeredSlides ? (b = b + z / 2 + x / 2 + p, x === 0 && T !== 0 && (b = b - r / 2 - p), T === 0 && (b = b - r / 2 - p), Math.abs(b) < 1 / 1e3 && (b = 0), t.roundLengths && (b = Math.floor(b)), $ % t.slidesPerGroup === 0 && w.push(b), g.push(b)) : (t.roundLengths && (b = Math.floor(b)), ($ - Math.min(s.params.slidesPerGroupSkip, $)) % s.params.slidesPerGroup === 0 && w.push(b), g.push(b), b = b + z + p), s.virtualSize += z + p, x = z, $ += 1;
      }
    }
    if (s.virtualSize = Math.max(s.virtualSize, r) + v, c && d && (t.effect === "slide" || t.effect === "coverflow") && (i.style.width = `${s.virtualSize + p}px`), t.setWrapperSize && (i.style[s.getDirectionLabel("width")] = `${s.virtualSize + p}px`), A && s.grid.updateWrapperSize(z, w), !t.centeredSlides) {
      const T = [];
      for (let L = 0; L < w.length; L += 1) {
        let P = w[L];
        t.roundLengths && (P = Math.floor(P)), w[L] <= s.virtualSize - r && T.push(P);
      }
      w = T, Math.floor(s.virtualSize - r) - Math.floor(w[w.length - 1]) > 1 && w.push(s.virtualSize - r);
    }
    if (u && t.loop) {
      const T = n[0] + p;
      if (t.slidesPerGroup > 1) {
        const L = Math.ceil((s.virtual.slidesBefore + s.virtual.slidesAfter) / t.slidesPerGroup), P = T * t.slidesPerGroup;
        for (let C = 0; C < L; C += 1)
          w.push(w[w.length - 1] + P);
      }
      for (let L = 0; L < s.virtual.slidesBefore + s.virtual.slidesAfter; L += 1)
        t.slidesPerGroup === 1 && w.push(w[w.length - 1] + T), g.push(g[g.length - 1] + T), s.virtualSize += T;
    }
    if (w.length === 0 && (w = [0]), p !== 0) {
      const T = s.isHorizontal() && c ? "marginLeft" : s.getDirectionLabel("marginRight");
      f.filter((L, P) => !t.cssMode || t.loop ? !0 : P !== f.length - 1).forEach((L) => {
        L.style[T] = `${p}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let T = 0;
      n.forEach((P) => {
        T += P + (p || 0);
      }), T -= p;
      const L = T > r ? T - r : 0;
      w = w.map((P) => P <= 0 ? -l : P > L ? L + v : P);
    }
    if (t.centerInsufficientSlides) {
      let T = 0;
      n.forEach((P) => {
        T += P + (p || 0);
      }), T -= p;
      const L = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (T + L < r) {
        const P = (r - T - L) / 2;
        w.forEach((C, I) => {
          w[I] = C - P;
        }), g.forEach((C, I) => {
          g[I] = C + P;
        });
      }
    }
    if (Object.assign(s, {
      slides: f,
      snapGrid: w,
      slidesGrid: g,
      slidesSizesGrid: n
    }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
      be(i, "--swiper-centered-offset-before", `${-w[0]}px`), be(i, "--swiper-centered-offset-after", `${s.size / 2 - n[n.length - 1] / 2}px`);
      const T = -s.snapGrid[0], L = -s.slidesGrid[0];
      s.snapGrid = s.snapGrid.map((P) => P + T), s.slidesGrid = s.slidesGrid.map((P) => P + L);
    }
    if (m !== o && s.emit("slidesLengthChange"), w.length !== y && (s.params.watchOverflow && s.checkOverflow(), s.emit("snapGridLengthChange")), g.length !== h && s.emit("slidesGridLengthChange"), t.watchSlidesProgress && s.updateSlidesOffset(), s.emit("slidesUpdated"), !u && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
      const T = `${t.containerModifierClass}backface-hidden`, L = s.el.classList.contains(T);
      m <= t.maxBackfaceHiddenSlides ? L || s.el.classList.add(T) : L && s.el.classList.remove(T);
    }
  }
  function Xt(s) {
    const e = this, t = [], i = e.virtual && e.params.virtual.enabled;
    let a = 0, r;
    typeof s == "number" ? e.setTransition(s) : s === !0 && e.setTransition(e.params.speed);
    const c = (d) => i ? e.slides[e.getSlideIndexByData(d)] : e.slides[d];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
      if (e.params.centeredSlides)
        (e.visibleSlides || []).forEach((d) => {
          t.push(d);
        });
      else
        for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
          const d = e.activeIndex + r;
          if (d > e.slides.length && !i) break;
          t.push(c(d));
        }
    else
      t.push(c(e.activeIndex));
    for (r = 0; r < t.length; r += 1)
      if (typeof t[r] < "u") {
        const d = t[r].offsetHeight;
        a = d > a ? d : a;
      }
    (a || a === 0) && (e.wrapperEl.style.height = `${a}px`);
  }
  function Yt() {
    const s = this, e = s.slides, t = s.isElement ? s.isHorizontal() ? s.wrapperEl.offsetLeft : s.wrapperEl.offsetTop : 0;
    for (let i = 0; i < e.length; i += 1)
      e[i].swiperSlideOffset = (s.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - s.cssOverflowAdjustment();
  }
  const ot = (s, e, t) => {
    e && !s.classList.contains(t) ? s.classList.add(t) : !e && s.classList.contains(t) && s.classList.remove(t);
  };
  function Rt(s) {
    s === void 0 && (s = this && this.translate || 0);
    const e = this, t = e.params, {
      slides: i,
      rtlTranslate: a,
      snapGrid: r
    } = e;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let c = -s;
    a && (c = s), e.visibleSlidesIndexes = [], e.visibleSlides = [];
    let d = t.spaceBetween;
    typeof d == "string" && d.indexOf("%") >= 0 ? d = parseFloat(d.replace("%", "")) / 100 * e.size : typeof d == "string" && (d = parseFloat(d));
    for (let u = 0; u < i.length; u += 1) {
      const o = i[u];
      let f = o.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (f -= i[0].swiperSlideOffset);
      const m = (c + (t.centeredSlides ? e.minTranslate() : 0) - f) / (o.swiperSlideSize + d), w = (c - r[0] + (t.centeredSlides ? e.minTranslate() : 0) - f) / (o.swiperSlideSize + d), g = -(c - f), n = g + e.slidesSizesGrid[u], l = g >= 0 && g <= e.size - e.slidesSizesGrid[u], v = g >= 0 && g < e.size - 1 || n > 1 && n <= e.size || g <= 0 && n >= e.size;
      v && (e.visibleSlides.push(o), e.visibleSlidesIndexes.push(u)), ot(o, v, t.slideVisibleClass), ot(o, l, t.slideFullyVisibleClass), o.progress = a ? -m : m, o.originalProgress = a ? -w : w;
    }
  }
  function _t(s) {
    const e = this;
    if (typeof s > "u") {
      const f = e.rtlTranslate ? -1 : 1;
      s = e && e.translate && e.translate * f || 0;
    }
    const t = e.params, i = e.maxTranslate() - e.minTranslate();
    let {
      progress: a,
      isBeginning: r,
      isEnd: c,
      progressLoop: d
    } = e;
    const u = r, o = c;
    if (i === 0)
      a = 0, r = !0, c = !0;
    else {
      a = (s - e.minTranslate()) / i;
      const f = Math.abs(s - e.minTranslate()) < 1, m = Math.abs(s - e.maxTranslate()) < 1;
      r = f || a <= 0, c = m || a >= 1, f && (a = 0), m && (a = 1);
    }
    if (t.loop) {
      const f = e.getSlideIndexByData(0), m = e.getSlideIndexByData(e.slides.length - 1), w = e.slidesGrid[f], g = e.slidesGrid[m], n = e.slidesGrid[e.slidesGrid.length - 1], l = Math.abs(s);
      l >= w ? d = (l - w) / n : d = (l + n - g) / n, d > 1 && (d -= 1);
    }
    Object.assign(e, {
      progress: a,
      progressLoop: d,
      isBeginning: r,
      isEnd: c
    }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(s), r && !u && e.emit("reachBeginning toEdge"), c && !o && e.emit("reachEnd toEdge"), (u && !r || o && !c) && e.emit("fromEdge"), e.emit("progress", a);
  }
  const Ne = (s, e, t) => {
    e && !s.classList.contains(t) ? s.classList.add(t) : !e && s.classList.contains(t) && s.classList.remove(t);
  };
  function Vt() {
    const s = this, {
      slides: e,
      params: t,
      slidesEl: i,
      activeIndex: a
    } = s, r = s.virtual && t.virtual.enabled, c = s.grid && t.grid && t.grid.rows > 1, d = (m) => q(i, `.${t.slideClass}${m}, swiper-slide${m}`)[0];
    let u, o, f;
    if (r)
      if (t.loop) {
        let m = a - s.virtual.slidesBefore;
        m < 0 && (m = s.virtual.slides.length + m), m >= s.virtual.slides.length && (m -= s.virtual.slides.length), u = d(`[data-swiper-slide-index="${m}"]`);
      } else
        u = d(`[data-swiper-slide-index="${a}"]`);
    else
      c ? (u = e.find((m) => m.column === a), f = e.find((m) => m.column === a + 1), o = e.find((m) => m.column === a - 1)) : u = e[a];
    u && (c || (f = At(u, `.${t.slideClass}, swiper-slide`)[0], t.loop && !f && (f = e[0]), o = It(u, `.${t.slideClass}, swiper-slide`)[0], t.loop && !o === 0 && (o = e[e.length - 1]))), e.forEach((m) => {
      Ne(m, m === u, t.slideActiveClass), Ne(m, m === f, t.slideNextClass), Ne(m, m === o, t.slidePrevClass);
    }), s.emitSlidesClasses();
  }
  const $e = (s, e) => {
    if (!s || s.destroyed || !s.params) return;
    const t = () => s.isElement ? "swiper-slide" : `.${s.params.slideClass}`, i = e.closest(t());
    if (i) {
      let a = i.querySelector(`.${s.params.lazyPreloaderClass}`);
      !a && s.isElement && (i.shadowRoot ? a = i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
        i.shadowRoot && (a = i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`), a && a.remove());
      })), a && a.remove();
    }
  }, Fe = (s, e) => {
    if (!s.slides[e]) return;
    const t = s.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading");
  }, qe = (s) => {
    if (!s || s.destroyed || !s.params) return;
    let e = s.params.lazyPreloadPrevNext;
    const t = s.slides.length;
    if (!t || !e || e < 0) return;
    e = Math.min(e, t);
    const i = s.params.slidesPerView === "auto" ? s.slidesPerViewDynamic() : Math.ceil(s.params.slidesPerView), a = s.activeIndex;
    if (s.params.grid && s.params.grid.rows > 1) {
      const c = a, d = [c - e];
      d.push(...Array.from({
        length: e
      }).map((u, o) => c + i + o)), s.slides.forEach((u, o) => {
        d.includes(u.column) && Fe(s, o);
      });
      return;
    }
    const r = a + i - 1;
    if (s.params.rewind || s.params.loop)
      for (let c = a - e; c <= r + e; c += 1) {
        const d = (c % t + t) % t;
        (d < a || d > r) && Fe(s, d);
      }
    else
      for (let c = Math.max(a - e, 0); c <= Math.min(r + e, t - 1); c += 1)
        c !== a && (c > r || c < a) && Fe(s, c);
  };
  function Nt(s) {
    const {
      slidesGrid: e,
      params: t
    } = s, i = s.rtlTranslate ? s.translate : -s.translate;
    let a;
    for (let r = 0; r < e.length; r += 1)
      typeof e[r + 1] < "u" ? i >= e[r] && i < e[r + 1] - (e[r + 1] - e[r]) / 2 ? a = r : i >= e[r] && i < e[r + 1] && (a = r + 1) : i >= e[r] && (a = r);
    return t.normalizeSlideIndex && (a < 0 || typeof a > "u") && (a = 0), a;
  }
  function Ft(s) {
    const e = this, t = e.rtlTranslate ? e.translate : -e.translate, {
      snapGrid: i,
      params: a,
      activeIndex: r,
      realIndex: c,
      snapIndex: d
    } = e;
    let u = s, o;
    const f = (g) => {
      let n = g - e.virtual.slidesBefore;
      return n < 0 && (n = e.virtual.slides.length + n), n >= e.virtual.slides.length && (n -= e.virtual.slides.length), n;
    };
    if (typeof u > "u" && (u = Nt(e)), i.indexOf(t) >= 0)
      o = i.indexOf(t);
    else {
      const g = Math.min(a.slidesPerGroupSkip, u);
      o = g + Math.floor((u - g) / a.slidesPerGroup);
    }
    if (o >= i.length && (o = i.length - 1), u === r && !e.params.loop) {
      o !== d && (e.snapIndex = o, e.emit("snapIndexChange"));
      return;
    }
    if (u === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = f(u);
      return;
    }
    const m = e.grid && a.grid && a.grid.rows > 1;
    let w;
    if (e.virtual && a.virtual.enabled && a.loop)
      w = f(u);
    else if (m) {
      const g = e.slides.find((l) => l.column === u);
      let n = parseInt(g.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(n) && (n = Math.max(e.slides.indexOf(g), 0)), w = Math.floor(n / a.grid.rows);
    } else if (e.slides[u]) {
      const g = e.slides[u].getAttribute("data-swiper-slide-index");
      g ? w = parseInt(g, 10) : w = u;
    } else
      w = u;
    Object.assign(e, {
      previousSnapIndex: d,
      snapIndex: o,
      previousRealIndex: c,
      realIndex: w,
      previousIndex: r,
      activeIndex: u
    }), e.initialized && qe(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (c !== w && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function qt(s, e) {
    const t = this, i = t.params;
    let a = s.closest(`.${i.slideClass}, swiper-slide`);
    !a && t.isElement && e && e.length > 1 && e.includes(s) && [...e.slice(e.indexOf(s) + 1, e.length)].forEach((d) => {
      !a && d.matches && d.matches(`.${i.slideClass}, swiper-slide`) && (a = d);
    });
    let r = !1, c;
    if (a) {
      for (let d = 0; d < t.slides.length; d += 1)
        if (t.slides[d] === a) {
          r = !0, c = d;
          break;
        }
    }
    if (a && r)
      t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(a.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = c;
    else {
      t.clickedSlide = void 0, t.clickedIndex = void 0;
      return;
    }
    i.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
  }
  var Wt = {
    updateSize: Gt,
    updateSlides: Bt,
    updateAutoHeight: Xt,
    updateSlidesOffset: Yt,
    updateSlidesProgress: Rt,
    updateProgress: _t,
    updateSlidesClasses: Vt,
    updateActiveIndex: Ft,
    updateClickedSlide: qt
  };
  function jt(s) {
    s === void 0 && (s = this.isHorizontal() ? "x" : "y");
    const e = this, {
      params: t,
      rtlTranslate: i,
      translate: a,
      wrapperEl: r
    } = e;
    if (t.virtualTranslate)
      return i ? -a : a;
    if (t.cssMode)
      return a;
    let c = Xe(r, s);
    return c += e.cssOverflowAdjustment(), i && (c = -c), c || 0;
  }
  function Ut(s, e) {
    const t = this, {
      rtlTranslate: i,
      params: a,
      wrapperEl: r,
      progress: c
    } = t;
    let d = 0, u = 0;
    const o = 0;
    t.isHorizontal() ? d = i ? -s : s : u = s, a.roundLengths && (d = Math.floor(d), u = Math.floor(u)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? d : u, a.cssMode ? r[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -d : -u : a.virtualTranslate || (t.isHorizontal() ? d -= t.cssOverflowAdjustment() : u -= t.cssOverflowAdjustment(), r.style.transform = `translate3d(${d}px, ${u}px, ${o}px)`);
    let f;
    const m = t.maxTranslate() - t.minTranslate();
    m === 0 ? f = 0 : f = (s - t.minTranslate()) / m, f !== c && t.updateProgress(s), t.emit("setTranslate", t.translate, e);
  }
  function Kt() {
    return -this.snapGrid[0];
  }
  function Zt() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function Qt(s, e, t, i, a) {
    s === void 0 && (s = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), i === void 0 && (i = !0);
    const r = this, {
      params: c,
      wrapperEl: d
    } = r;
    if (r.animating && c.preventInteractionOnTransition)
      return !1;
    const u = r.minTranslate(), o = r.maxTranslate();
    let f;
    if (i && s > u ? f = u : i && s < o ? f = o : f = s, r.updateProgress(f), c.cssMode) {
      const m = r.isHorizontal();
      if (e === 0)
        d[m ? "scrollLeft" : "scrollTop"] = -f;
      else {
        if (!r.support.smoothScroll)
          return rt({
            swiper: r,
            targetPosition: -f,
            side: m ? "left" : "top"
          }), !0;
        d.scrollTo({
          [m ? "left" : "top"]: -f,
          behavior: "smooth"
        });
      }
      return !0;
    }
    return e === 0 ? (r.setTransition(0), r.setTranslate(f), t && (r.emit("beforeTransitionStart", e, a), r.emit("transitionEnd"))) : (r.setTransition(e), r.setTranslate(f), t && (r.emit("beforeTransitionStart", e, a), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(w) {
      !r || r.destroyed || w.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, r.animating = !1, t && r.emit("transitionEnd"));
    }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0;
  }
  var Jt = {
    getTranslate: jt,
    setTranslate: Ut,
    minTranslate: Kt,
    maxTranslate: Zt,
    translateTo: Qt
  };
  function es(s, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${s}ms`, t.wrapperEl.style.transitionDelay = s === 0 ? "0ms" : ""), t.emit("setTransition", s, e);
  }
  function dt(s) {
    let {
      swiper: e,
      runCallbacks: t,
      direction: i,
      step: a
    } = s;
    const {
      activeIndex: r,
      previousIndex: c
    } = e;
    let d = i;
    if (d || (r > c ? d = "next" : r < c ? d = "prev" : d = "reset"), e.emit(`transition${a}`), t && r !== c) {
      if (d === "reset") {
        e.emit(`slideResetTransition${a}`);
        return;
      }
      e.emit(`slideChangeTransition${a}`), d === "next" ? e.emit(`slideNextTransition${a}`) : e.emit(`slidePrevTransition${a}`);
    }
  }
  function ts(s, e) {
    s === void 0 && (s = !0);
    const t = this, {
      params: i
    } = t;
    i.cssMode || (i.autoHeight && t.updateAutoHeight(), dt({
      swiper: t,
      runCallbacks: s,
      direction: e,
      step: "Start"
    }));
  }
  function ss(s, e) {
    s === void 0 && (s = !0);
    const t = this, {
      params: i
    } = t;
    t.animating = !1, !i.cssMode && (t.setTransition(0), dt({
      swiper: t,
      runCallbacks: s,
      direction: e,
      step: "End"
    }));
  }
  var is = {
    setTransition: es,
    transitionStart: ts,
    transitionEnd: ss
  };
  function rs(s, e, t, i, a) {
    s === void 0 && (s = 0), t === void 0 && (t = !0), typeof s == "string" && (s = parseInt(s, 10));
    const r = this;
    let c = s;
    c < 0 && (c = 0);
    const {
      params: d,
      snapGrid: u,
      slidesGrid: o,
      previousIndex: f,
      activeIndex: m,
      rtlTranslate: w,
      wrapperEl: g,
      enabled: n
    } = r;
    if (!n && !i && !a || r.destroyed || r.animating && d.preventInteractionOnTransition)
      return !1;
    typeof e > "u" && (e = r.params.speed);
    const l = Math.min(r.params.slidesPerGroupSkip, c);
    let v = l + Math.floor((c - l) / r.params.slidesPerGroup);
    v >= u.length && (v = u.length - 1);
    const y = -u[v];
    if (d.normalizeSlideIndex)
      for (let A = 0; A < o.length; A += 1) {
        const z = -Math.floor(y * 100), M = Math.floor(o[A] * 100), T = Math.floor(o[A + 1] * 100);
        typeof o[A + 1] < "u" ? z >= M && z < T - (T - M) / 2 ? c = A : z >= M && z < T && (c = A + 1) : z >= M && (c = A);
      }
    if (r.initialized && c !== m && (!r.allowSlideNext && (w ? y > r.translate && y > r.minTranslate() : y < r.translate && y < r.minTranslate()) || !r.allowSlidePrev && y > r.translate && y > r.maxTranslate() && (m || 0) !== c))
      return !1;
    c !== (f || 0) && t && r.emit("beforeSlideChangeStart"), r.updateProgress(y);
    let h;
    c > m ? h = "next" : c < m ? h = "prev" : h = "reset";
    const p = r.virtual && r.params.virtual.enabled;
    if (!(p && a) && (w && -y === r.translate || !w && y === r.translate))
      return r.updateActiveIndex(c), d.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), d.effect !== "slide" && r.setTranslate(y), h !== "reset" && (r.transitionStart(t, h), r.transitionEnd(t, h)), !1;
    if (d.cssMode) {
      const A = r.isHorizontal(), z = w ? y : -y;
      if (e === 0)
        p && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), p && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
          g[A ? "scrollLeft" : "scrollTop"] = z;
        })) : g[A ? "scrollLeft" : "scrollTop"] = z, p && requestAnimationFrame(() => {
          r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1;
        });
      else {
        if (!r.support.smoothScroll)
          return rt({
            swiper: r,
            targetPosition: z,
            side: A ? "left" : "top"
          }), !0;
        g.scrollTo({
          [A ? "left" : "top"]: z,
          behavior: "smooth"
        });
      }
      return !0;
    }
    const $ = lt().isSafari;
    return p && !a && $ && r.isElement && r.virtual.update(!1, !1, c), r.setTransition(e), r.setTranslate(y), r.updateActiveIndex(c), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, i), r.transitionStart(t, h), e === 0 ? r.transitionEnd(t, h) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(z) {
      !r || r.destroyed || z.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(t, h));
    }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0;
  }
  function as(s, e, t, i) {
    s === void 0 && (s = 0), t === void 0 && (t = !0), typeof s == "string" && (s = parseInt(s, 10));
    const a = this;
    if (a.destroyed) return;
    typeof e > "u" && (e = a.params.speed);
    const r = a.grid && a.params.grid && a.params.grid.rows > 1;
    let c = s;
    if (a.params.loop)
      if (a.virtual && a.params.virtual.enabled)
        c = c + a.virtual.slidesBefore;
      else {
        let d;
        if (r) {
          const w = c * a.params.grid.rows;
          d = a.slides.find((g) => g.getAttribute("data-swiper-slide-index") * 1 === w).column;
        } else
          d = a.getSlideIndexByData(c);
        const u = r ? Math.ceil(a.slides.length / a.params.grid.rows) : a.slides.length, {
          centeredSlides: o
        } = a.params;
        let f = a.params.slidesPerView;
        f === "auto" ? f = a.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(a.params.slidesPerView, 10)), o && f % 2 === 0 && (f = f + 1));
        let m = u - d < f;
        if (o && (m = m || d < Math.ceil(f / 2)), i && o && a.params.slidesPerView !== "auto" && !r && (m = !1), m) {
          const w = o ? d < a.activeIndex ? "prev" : "next" : d - a.activeIndex - 1 < a.params.slidesPerView ? "next" : "prev";
          a.loopFix({
            direction: w,
            slideTo: !0,
            activeSlideIndex: w === "next" ? d + 1 : d - u + 1,
            slideRealIndex: w === "next" ? a.realIndex : void 0
          });
        }
        if (r) {
          const w = c * a.params.grid.rows;
          c = a.slides.find((g) => g.getAttribute("data-swiper-slide-index") * 1 === w).column;
        } else
          c = a.getSlideIndexByData(c);
      }
    return requestAnimationFrame(() => {
      a.slideTo(c, e, t, i);
    }), a;
  }
  function ns(s, e, t) {
    e === void 0 && (e = !0);
    const i = this, {
      enabled: a,
      params: r,
      animating: c
    } = i;
    if (!a || i.destroyed) return i;
    typeof s > "u" && (s = i.params.speed);
    let d = r.slidesPerGroup;
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (d = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const u = i.activeIndex < r.slidesPerGroupSkip ? 1 : d, o = i.virtual && r.virtual.enabled;
    if (r.loop) {
      if (c && !o && r.loopPreventsSliding) return !1;
      if (i.loopFix({
        direction: "next"
      }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && r.cssMode)
        return requestAnimationFrame(() => {
          i.slideTo(i.activeIndex + u, s, e, t);
        }), !0;
    }
    return r.rewind && i.isEnd ? i.slideTo(0, s, e, t) : i.slideTo(i.activeIndex + u, s, e, t);
  }
  function ls(s, e, t) {
    e === void 0 && (e = !0);
    const i = this, {
      params: a,
      snapGrid: r,
      slidesGrid: c,
      rtlTranslate: d,
      enabled: u,
      animating: o
    } = i;
    if (!u || i.destroyed) return i;
    typeof s > "u" && (s = i.params.speed);
    const f = i.virtual && a.virtual.enabled;
    if (a.loop) {
      if (o && !f && a.loopPreventsSliding) return !1;
      i.loopFix({
        direction: "prev"
      }), i._clientLeft = i.wrapperEl.clientLeft;
    }
    const m = d ? i.translate : -i.translate;
    function w(h) {
      return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h);
    }
    const g = w(m), n = r.map((h) => w(h)), l = a.freeMode && a.freeMode.enabled;
    let v = r[n.indexOf(g) - 1];
    if (typeof v > "u" && (a.cssMode || l)) {
      let h;
      r.forEach((p, b) => {
        g >= p && (h = b);
      }), typeof h < "u" && (v = l ? r[h] : r[h > 0 ? h - 1 : h]);
    }
    let y = 0;
    if (typeof v < "u" && (y = c.indexOf(v), y < 0 && (y = i.activeIndex - 1), a.slidesPerView === "auto" && a.slidesPerGroup === 1 && a.slidesPerGroupAuto && (y = y - i.slidesPerViewDynamic("previous", !0) + 1, y = Math.max(y, 0))), a.rewind && i.isBeginning) {
      const h = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
      return i.slideTo(h, s, e, t);
    } else if (a.loop && i.activeIndex === 0 && a.cssMode)
      return requestAnimationFrame(() => {
        i.slideTo(y, s, e, t);
      }), !0;
    return i.slideTo(y, s, e, t);
  }
  function os(s, e, t) {
    e === void 0 && (e = !0);
    const i = this;
    if (!i.destroyed)
      return typeof s > "u" && (s = i.params.speed), i.slideTo(i.activeIndex, s, e, t);
  }
  function ds(s, e, t, i) {
    e === void 0 && (e = !0), i === void 0 && (i = 0.5);
    const a = this;
    if (a.destroyed) return;
    typeof s > "u" && (s = a.params.speed);
    let r = a.activeIndex;
    const c = Math.min(a.params.slidesPerGroupSkip, r), d = c + Math.floor((r - c) / a.params.slidesPerGroup), u = a.rtlTranslate ? a.translate : -a.translate;
    if (u >= a.snapGrid[d]) {
      const o = a.snapGrid[d], f = a.snapGrid[d + 1];
      u - o > (f - o) * i && (r += a.params.slidesPerGroup);
    } else {
      const o = a.snapGrid[d - 1], f = a.snapGrid[d];
      u - o <= (f - o) * i && (r -= a.params.slidesPerGroup);
    }
    return r = Math.max(r, 0), r = Math.min(r, a.slidesGrid.length - 1), a.slideTo(r, s, e, t);
  }
  function cs() {
    const s = this;
    if (s.destroyed) return;
    const {
      params: e,
      slidesEl: t
    } = s, i = e.slidesPerView === "auto" ? s.slidesPerViewDynamic() : e.slidesPerView;
    let a = s.clickedIndex, r;
    const c = s.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
      if (s.animating) return;
      r = parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? a < s.loopedSlides - i / 2 || a > s.slides.length - s.loopedSlides + i / 2 ? (s.loopFix(), a = s.getSlideIndex(q(t, `${c}[data-swiper-slide-index="${r}"]`)[0]), de(() => {
        s.slideTo(a);
      })) : s.slideTo(a) : a > s.slides.length - i ? (s.loopFix(), a = s.getSlideIndex(q(t, `${c}[data-swiper-slide-index="${r}"]`)[0]), de(() => {
        s.slideTo(a);
      })) : s.slideTo(a);
    } else
      s.slideTo(a);
  }
  var fs = {
    slideTo: rs,
    slideToLoop: as,
    slideNext: ns,
    slidePrev: ls,
    slideReset: os,
    slideToClosest: ds,
    slideToClickedSlide: cs
  };
  function us(s, e) {
    const t = this, {
      params: i,
      slidesEl: a
    } = t;
    if (!i.loop || t.virtual && t.params.virtual.enabled) return;
    const r = () => {
      q(a, `.${i.slideClass}, swiper-slide`).forEach((w, g) => {
        w.setAttribute("data-swiper-slide-index", g);
      });
    }, c = t.grid && i.grid && i.grid.rows > 1, d = i.slidesPerGroup * (c ? i.grid.rows : 1), u = t.slides.length % d !== 0, o = c && t.slides.length % i.grid.rows !== 0, f = (m) => {
      for (let w = 0; w < m; w += 1) {
        const g = t.isElement ? K("swiper-slide", [i.slideBlankClass]) : K("div", [i.slideClass, i.slideBlankClass]);
        t.slidesEl.append(g);
      }
    };
    if (u) {
      if (i.loopAddBlankSlides) {
        const m = d - t.slides.length % d;
        f(m), t.recalcSlides(), t.updateSlides();
      } else
        Ie("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      r();
    } else if (o) {
      if (i.loopAddBlankSlides) {
        const m = i.grid.rows - t.slides.length % i.grid.rows;
        f(m), t.recalcSlides(), t.updateSlides();
      } else
        Ie("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      r();
    } else
      r();
    t.loopFix({
      slideRealIndex: s,
      direction: i.centeredSlides ? void 0 : "next",
      initial: e
    });
  }
  function ps(s) {
    let {
      slideRealIndex: e,
      slideTo: t = !0,
      direction: i,
      setTranslate: a,
      activeSlideIndex: r,
      initial: c,
      byController: d,
      byMousewheel: u
    } = s === void 0 ? {} : s;
    const o = this;
    if (!o.params.loop) return;
    o.emit("beforeLoopFix");
    const {
      slides: f,
      allowSlidePrev: m,
      allowSlideNext: w,
      slidesEl: g,
      params: n
    } = o, {
      centeredSlides: l,
      initialSlide: v
    } = n;
    if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && n.virtual.enabled) {
      t && (!n.centeredSlides && o.snapIndex === 0 ? o.slideTo(o.virtual.slides.length, 0, !1, !0) : n.centeredSlides && o.snapIndex < n.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)), o.allowSlidePrev = m, o.allowSlideNext = w, o.emit("loopFix");
      return;
    }
    let y = n.slidesPerView;
    y === "auto" ? y = o.slidesPerViewDynamic() : (y = Math.ceil(parseFloat(n.slidesPerView, 10)), l && y % 2 === 0 && (y = y + 1));
    const h = n.slidesPerGroupAuto ? y : n.slidesPerGroup;
    let p = h;
    p % h !== 0 && (p += h - p % h), p += n.loopAdditionalSlides, o.loopedSlides = p;
    const b = o.grid && n.grid && n.grid.rows > 1;
    f.length < y + p || o.params.effect === "cards" && f.length < y + p * 2 ? Ie("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && n.grid.fill === "row" && Ie("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const x = [], $ = [], A = b ? Math.ceil(f.length / n.grid.rows) : f.length, z = c && A - v < y && !l;
    let M = z ? v : o.activeIndex;
    typeof r > "u" ? r = o.getSlideIndex(f.find((H) => H.classList.contains(n.slideActiveClass))) : M = r;
    const T = i === "next" || !i, L = i === "prev" || !i;
    let P = 0, C = 0;
    const D = (b ? f[r].column : r) + (l && typeof a > "u" ? -y / 2 + 0.5 : 0);
    if (D < p) {
      P = Math.max(p - D, h);
      for (let H = 0; H < p - D; H += 1) {
        const S = H - Math.floor(H / A) * A;
        if (b) {
          const E = A - S - 1;
          for (let B = f.length - 1; B >= 0; B -= 1)
            f[B].column === E && x.push(B);
        } else
          x.push(A - S - 1);
      }
    } else if (D + y > A - p) {
      C = Math.max(D - (A - p * 2), h), z && (C = Math.max(C, y - A + v + 1));
      for (let H = 0; H < C; H += 1) {
        const S = H - Math.floor(H / A) * A;
        b ? f.forEach((E, B) => {
          E.column === S && $.push(B);
        }) : $.push(S);
      }
    }
    if (o.__preventObserver__ = !0, requestAnimationFrame(() => {
      o.__preventObserver__ = !1;
    }), o.params.effect === "cards" && f.length < y + p * 2 && ($.includes(r) && $.splice($.indexOf(r), 1), x.includes(r) && x.splice(x.indexOf(r), 1)), L && x.forEach((H) => {
      f[H].swiperLoopMoveDOM = !0, g.prepend(f[H]), f[H].swiperLoopMoveDOM = !1;
    }), T && $.forEach((H) => {
      f[H].swiperLoopMoveDOM = !0, g.append(f[H]), f[H].swiperLoopMoveDOM = !1;
    }), o.recalcSlides(), n.slidesPerView === "auto" ? o.updateSlides() : b && (x.length > 0 && L || $.length > 0 && T) && o.slides.forEach((H, S) => {
      o.grid.updateSlide(S, H, o.slides);
    }), n.watchSlidesProgress && o.updateSlidesOffset(), t) {
      if (x.length > 0 && L) {
        if (typeof e > "u") {
          const H = o.slidesGrid[M], E = o.slidesGrid[M + P] - H;
          u ? o.setTranslate(o.translate - E) : (o.slideTo(M + Math.ceil(P), 0, !1, !0), a && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - E, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - E));
        } else if (a) {
          const H = b ? x.length / n.grid.rows : x.length;
          o.slideTo(o.activeIndex + H, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate;
        }
      } else if ($.length > 0 && T)
        if (typeof e > "u") {
          const H = o.slidesGrid[M], E = o.slidesGrid[M - C] - H;
          u ? o.setTranslate(o.translate - E) : (o.slideTo(M - C, 0, !1, !0), a && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - E, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - E));
        } else {
          const H = b ? $.length / n.grid.rows : $.length;
          o.slideTo(o.activeIndex - H, 0, !1, !0);
        }
    }
    if (o.allowSlidePrev = m, o.allowSlideNext = w, o.controller && o.controller.control && !d) {
      const H = {
        slideRealIndex: e,
        direction: i,
        setTranslate: a,
        activeSlideIndex: r,
        byController: !0
      };
      Array.isArray(o.controller.control) ? o.controller.control.forEach((S) => {
        !S.destroyed && S.params.loop && S.loopFix({
          ...H,
          slideTo: S.params.slidesPerView === n.slidesPerView ? t : !1
        });
      }) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
        ...H,
        slideTo: o.controller.control.params.slidesPerView === n.slidesPerView ? t : !1
      });
    }
    o.emit("loopFix");
  }
  function ms() {
    const s = this, {
      params: e,
      slidesEl: t
    } = s;
    if (!e.loop || !t || s.virtual && s.params.virtual.enabled) return;
    s.recalcSlides();
    const i = [];
    s.slides.forEach((a) => {
      const r = typeof a.swiperSlideIndex > "u" ? a.getAttribute("data-swiper-slide-index") * 1 : a.swiperSlideIndex;
      i[r] = a;
    }), s.slides.forEach((a) => {
      a.removeAttribute("data-swiper-slide-index");
    }), i.forEach((a) => {
      t.append(a);
    }), s.recalcSlides(), s.slideTo(s.realIndex, 0);
  }
  var hs = {
    loopCreate: us,
    loopFix: ps,
    loopDestroy: ms
  };
  function gs(s) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = s ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
      e.__preventObserver__ = !1;
    });
  }
  function vs() {
    const s = this;
    s.params.watchOverflow && s.isLocked || s.params.cssMode || (s.isElement && (s.__preventObserver__ = !0), s[s.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", s.isElement && requestAnimationFrame(() => {
      s.__preventObserver__ = !1;
    }));
  }
  var ws = {
    setGrabCursor: gs,
    unsetGrabCursor: vs
  };
  function ys(s, e) {
    e === void 0 && (e = this);
    function t(i) {
      if (!i || i === N() || i === _()) return null;
      i.assignedSlot && (i = i.assignedSlot);
      const a = i.closest(s);
      return !a && !i.getRootNode ? null : a || t(i.getRootNode().host);
    }
    return t(e);
  }
  function ct(s, e, t) {
    const i = _(), {
      params: a
    } = s, r = a.edgeSwipeDetection, c = a.edgeSwipeThreshold;
    return r && (t <= c || t >= i.innerWidth - c) ? r === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
  }
  function bs(s) {
    const e = this, t = N();
    let i = s;
    i.originalEvent && (i = i.originalEvent);
    const a = e.touchEventsData;
    if (i.type === "pointerdown") {
      if (a.pointerId !== null && a.pointerId !== i.pointerId)
        return;
      a.pointerId = i.pointerId;
    } else i.type === "touchstart" && i.targetTouches.length === 1 && (a.touchId = i.targetTouches[0].identifier);
    if (i.type === "touchstart") {
      ct(e, i, i.targetTouches[0].pageX);
      return;
    }
    const {
      params: r,
      touches: c,
      enabled: d
    } = e;
    if (!d || !r.simulateTouch && i.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition)
      return;
    !e.animating && r.cssMode && r.loop && e.loopFix();
    let u = i.target;
    if (r.touchEventsTarget === "wrapper" && !Lt(u, e.wrapperEl) || "which" in i && i.which === 3 || "button" in i && i.button > 0 || a.isTouched && a.isMoved) return;
    const o = !!r.noSwipingClass && r.noSwipingClass !== "", f = i.composedPath ? i.composedPath() : i.path;
    o && i.target && i.target.shadowRoot && f && (u = f[0]);
    const m = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`, w = !!(i.target && i.target.shadowRoot);
    if (r.noSwiping && (w ? ys(m, u) : u.closest(m))) {
      e.allowClick = !0;
      return;
    }
    if (r.swipeHandler && !u.closest(r.swipeHandler))
      return;
    c.currentX = i.pageX, c.currentY = i.pageY;
    const g = c.currentX, n = c.currentY;
    if (!ct(e, i, g))
      return;
    Object.assign(a, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), c.startX = g, c.startY = n, a.touchStartTime = Q(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, r.threshold > 0 && (a.allowThresholdMove = !1);
    let l = !0;
    u.matches(a.focusableElements) && (l = !1, u.nodeName === "SELECT" && (a.isTouched = !1)), t.activeElement && t.activeElement.matches(a.focusableElements) && t.activeElement !== u && (i.pointerType === "mouse" || i.pointerType !== "mouse" && !u.matches(a.focusableElements)) && t.activeElement.blur();
    const v = l && e.allowTouchMove && r.touchStartPreventDefault;
    (r.touchStartForcePreventDefault || v) && !u.isContentEditable && i.preventDefault(), r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", i);
  }
  function Ss(s) {
    const e = N(), t = this, i = t.touchEventsData, {
      params: a,
      touches: r,
      rtlTranslate: c,
      enabled: d
    } = t;
    if (!d || !a.simulateTouch && s.pointerType === "mouse") return;
    let u = s;
    if (u.originalEvent && (u = u.originalEvent), u.type === "pointermove" && (i.touchId !== null || u.pointerId !== i.pointerId))
      return;
    let o;
    if (u.type === "touchmove") {
      if (o = [...u.changedTouches].find((x) => x.identifier === i.touchId), !o || o.identifier !== i.touchId) return;
    } else
      o = u;
    if (!i.isTouched) {
      i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", u);
      return;
    }
    const f = o.pageX, m = o.pageY;
    if (u.preventedByNestedSwiper) {
      r.startX = f, r.startY = m;
      return;
    }
    if (!t.allowTouchMove) {
      u.target.matches(i.focusableElements) || (t.allowClick = !1), i.isTouched && (Object.assign(r, {
        startX: f,
        startY: m,
        currentX: f,
        currentY: m
      }), i.touchStartTime = Q());
      return;
    }
    if (a.touchReleaseOnEdges && !a.loop)
      if (t.isVertical()) {
        if (m < r.startY && t.translate <= t.maxTranslate() || m > r.startY && t.translate >= t.minTranslate()) {
          i.isTouched = !1, i.isMoved = !1;
          return;
        }
      } else {
        if (c && (f > r.startX && -t.translate <= t.maxTranslate() || f < r.startX && -t.translate >= t.minTranslate()))
          return;
        if (!c && (f < r.startX && t.translate <= t.maxTranslate() || f > r.startX && t.translate >= t.minTranslate()))
          return;
      }
    if (e.activeElement && e.activeElement.matches(i.focusableElements) && e.activeElement !== u.target && u.pointerType !== "mouse" && e.activeElement.blur(), e.activeElement && u.target === e.activeElement && u.target.matches(i.focusableElements)) {
      i.isMoved = !0, t.allowClick = !1;
      return;
    }
    i.allowTouchCallbacks && t.emit("touchMove", u), r.previousX = r.currentX, r.previousY = r.currentY, r.currentX = f, r.currentY = m;
    const w = r.currentX - r.startX, g = r.currentY - r.startY;
    if (t.params.threshold && Math.sqrt(w ** 2 + g ** 2) < t.params.threshold) return;
    if (typeof i.isScrolling > "u") {
      let x;
      t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : w * w + g * g >= 25 && (x = Math.atan2(Math.abs(g), Math.abs(w)) * 180 / Math.PI, i.isScrolling = t.isHorizontal() ? x > a.touchAngle : 90 - x > a.touchAngle);
    }
    if (i.isScrolling && t.emit("touchMoveOpposite", u), typeof i.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (i.startMoving = !0), i.isScrolling || u.type === "touchmove" && i.preventTouchMoveFromPointerMove) {
      i.isTouched = !1;
      return;
    }
    if (!i.startMoving)
      return;
    t.allowClick = !1, !a.cssMode && u.cancelable && u.preventDefault(), a.touchMoveStopPropagation && !a.nested && u.stopPropagation();
    let n = t.isHorizontal() ? w : g, l = t.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
    a.oneWayMovement && (n = Math.abs(n) * (c ? 1 : -1), l = Math.abs(l) * (c ? 1 : -1)), r.diff = n, n *= a.touchRatio, c && (n = -n, l = -l);
    const v = t.touchesDirection;
    t.swipeDirection = n > 0 ? "prev" : "next", t.touchesDirection = l > 0 ? "prev" : "next";
    const y = t.params.loop && !a.cssMode, h = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!i.isMoved) {
      if (y && h && t.loopFix({
        direction: t.swipeDirection
      }), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
        const x = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: {
            bySwiperTouchMove: !0
          }
        });
        t.wrapperEl.dispatchEvent(x);
      }
      i.allowMomentumBounce = !1, a.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", u);
    }
    if ((/* @__PURE__ */ new Date()).getTime(), a._loopSwapReset !== !1 && i.isMoved && i.allowThresholdMove && v !== t.touchesDirection && y && h && Math.abs(n) >= 1) {
      Object.assign(r, {
        startX: f,
        startY: m,
        currentX: f,
        currentY: m,
        startTranslate: i.currentTranslate
      }), i.loopSwapReset = !0, i.startTranslate = i.currentTranslate;
      return;
    }
    t.emit("sliderMove", u), i.isMoved = !0, i.currentTranslate = n + i.startTranslate;
    let p = !0, b = a.resistanceRatio;
    if (a.touchReleaseOnEdges && (b = 0), n > 0 ? (y && h && i.allowThresholdMove && i.currentTranslate > (a.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] - (a.slidesPerView !== "auto" && t.slides.length - a.slidesPerView >= 2 ? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween : 0) - t.params.spaceBetween : t.minTranslate()) && t.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), i.currentTranslate > t.minTranslate() && (p = !1, a.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + n) ** b))) : n < 0 && (y && h && i.allowThresholdMove && i.currentTranslate < (a.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween + (a.slidesPerView !== "auto" && t.slides.length - a.slidesPerView >= 2 ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween : 0) : t.maxTranslate()) && t.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: t.slides.length - (a.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
    }), i.currentTranslate < t.maxTranslate() && (p = !1, a.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - n) ** b))), p && (u.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (i.currentTranslate = i.startTranslate), a.threshold > 0)
      if (Math.abs(n) > a.threshold || i.allowThresholdMove) {
        if (!i.allowThresholdMove) {
          i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
          return;
        }
      } else {
        i.currentTranslate = i.startTranslate;
        return;
      }
    !a.followFinger || a.cssMode || ((a.freeMode && a.freeMode.enabled && t.freeMode || a.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate));
  }
  function xs(s) {
    const e = this, t = e.touchEventsData;
    let i = s;
    i.originalEvent && (i = i.originalEvent);
    let a;
    if (i.type === "touchend" || i.type === "touchcancel") {
      if (a = [...i.changedTouches].find((x) => x.identifier === t.touchId), !a || a.identifier !== t.touchId) return;
    } else {
      if (t.touchId !== null || i.pointerId !== t.pointerId) return;
      a = i;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && !(["pointercancel", "contextmenu"].includes(i.type) && (e.browser.isSafari || e.browser.isWebView)))
      return;
    t.pointerId = null, t.touchId = null;
    const {
      params: c,
      touches: d,
      rtlTranslate: u,
      slidesGrid: o,
      enabled: f
    } = e;
    if (!f || !c.simulateTouch && i.pointerType === "mouse") return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", i), t.allowTouchCallbacks = !1, !t.isTouched) {
      t.isMoved && c.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
      return;
    }
    c.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const m = Q(), w = m - t.touchStartTime;
    if (e.allowClick) {
      const x = i.path || i.composedPath && i.composedPath();
      e.updateClickedSlide(x && x[0] || i.target, x), e.emit("tap click", i), w < 300 && m - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", i);
    }
    if (t.lastClickTime = Q(), de(() => {
      e.destroyed || (e.allowClick = !0);
    }), !t.isTouched || !t.isMoved || !e.swipeDirection || d.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
      t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
      return;
    }
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    let g;
    if (c.followFinger ? g = u ? e.translate : -e.translate : g = -t.currentTranslate, c.cssMode)
      return;
    if (c.freeMode && c.freeMode.enabled) {
      e.freeMode.onTouchEnd({
        currentPos: g
      });
      return;
    }
    const n = g >= -e.maxTranslate() && !e.params.loop;
    let l = 0, v = e.slidesSizesGrid[0];
    for (let x = 0; x < o.length; x += x < c.slidesPerGroupSkip ? 1 : c.slidesPerGroup) {
      const $ = x < c.slidesPerGroupSkip - 1 ? 1 : c.slidesPerGroup;
      typeof o[x + $] < "u" ? (n || g >= o[x] && g < o[x + $]) && (l = x, v = o[x + $] - o[x]) : (n || g >= o[x]) && (l = x, v = o[o.length - 1] - o[o.length - 2]);
    }
    let y = null, h = null;
    c.rewind && (e.isBeginning ? h = c.virtual && c.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (y = 0));
    const p = (g - o[l]) / v, b = l < c.slidesPerGroupSkip - 1 ? 1 : c.slidesPerGroup;
    if (w > c.longSwipesMs) {
      if (!c.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" && (p >= c.longSwipesRatio ? e.slideTo(c.rewind && e.isEnd ? y : l + b) : e.slideTo(l)), e.swipeDirection === "prev" && (p > 1 - c.longSwipesRatio ? e.slideTo(l + b) : h !== null && p < 0 && Math.abs(p) > c.longSwipesRatio ? e.slideTo(h) : e.slideTo(l));
    } else {
      if (!c.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation && (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl) ? i.target === e.navigation.nextEl ? e.slideTo(l + b) : e.slideTo(l) : (e.swipeDirection === "next" && e.slideTo(y !== null ? y : l + b), e.swipeDirection === "prev" && e.slideTo(h !== null ? h : l));
    }
  }
  function ft() {
    const s = this, {
      params: e,
      el: t
    } = s;
    if (t && t.offsetWidth === 0) return;
    e.breakpoints && s.setBreakpoint();
    const {
      allowSlideNext: i,
      allowSlidePrev: a,
      snapGrid: r
    } = s, c = s.virtual && s.params.virtual.enabled;
    s.allowSlideNext = !0, s.allowSlidePrev = !0, s.updateSize(), s.updateSlides(), s.updateSlidesClasses();
    const d = c && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && s.isEnd && !s.isBeginning && !s.params.centeredSlides && !d ? s.slideTo(s.slides.length - 1, 0, !1, !0) : s.params.loop && !c ? s.slideToLoop(s.realIndex, 0, !1, !0) : s.slideTo(s.activeIndex, 0, !1, !0), s.autoplay && s.autoplay.running && s.autoplay.paused && (clearTimeout(s.autoplay.resizeTimeout), s.autoplay.resizeTimeout = setTimeout(() => {
      s.autoplay && s.autoplay.running && s.autoplay.paused && s.autoplay.resume();
    }, 500)), s.allowSlidePrev = a, s.allowSlideNext = i, s.params.watchOverflow && r !== s.snapGrid && s.checkOverflow();
  }
  function Es(s) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && s.preventDefault(), e.params.preventClicksPropagation && e.animating && (s.stopPropagation(), s.stopImmediatePropagation())));
  }
  function Ts() {
    const s = this, {
      wrapperEl: e,
      rtlTranslate: t,
      enabled: i
    } = s;
    if (!i) return;
    s.previousTranslate = s.translate, s.isHorizontal() ? s.translate = -e.scrollLeft : s.translate = -e.scrollTop, s.translate === 0 && (s.translate = 0), s.updateActiveIndex(), s.updateSlidesClasses();
    let a;
    const r = s.maxTranslate() - s.minTranslate();
    r === 0 ? a = 0 : a = (s.translate - s.minTranslate()) / r, a !== s.progress && s.updateProgress(t ? -s.translate : s.translate), s.emit("setTranslate", s.translate, !1);
  }
  function Ms(s) {
    const e = this;
    $e(e, s.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
  }
  function Cs() {
    const s = this;
    s.documentTouchHandlerProceeded || (s.documentTouchHandlerProceeded = !0, s.params.touchReleaseOnEdges && (s.el.style.touchAction = "auto"));
  }
  const ut = (s, e) => {
    const t = N(), {
      params: i,
      el: a,
      wrapperEl: r,
      device: c
    } = s, d = !!i.nested, u = e === "on" ? "addEventListener" : "removeEventListener", o = e;
    !a || typeof a == "string" || (t[u]("touchstart", s.onDocumentTouchStart, {
      passive: !1,
      capture: d
    }), a[u]("touchstart", s.onTouchStart, {
      passive: !1
    }), a[u]("pointerdown", s.onTouchStart, {
      passive: !1
    }), t[u]("touchmove", s.onTouchMove, {
      passive: !1,
      capture: d
    }), t[u]("pointermove", s.onTouchMove, {
      passive: !1,
      capture: d
    }), t[u]("touchend", s.onTouchEnd, {
      passive: !0
    }), t[u]("pointerup", s.onTouchEnd, {
      passive: !0
    }), t[u]("pointercancel", s.onTouchEnd, {
      passive: !0
    }), t[u]("touchcancel", s.onTouchEnd, {
      passive: !0
    }), t[u]("pointerout", s.onTouchEnd, {
      passive: !0
    }), t[u]("pointerleave", s.onTouchEnd, {
      passive: !0
    }), t[u]("contextmenu", s.onTouchEnd, {
      passive: !0
    }), (i.preventClicks || i.preventClicksPropagation) && a[u]("click", s.onClick, !0), i.cssMode && r[u]("scroll", s.onScroll), i.updateOnWindowResize ? s[o](c.ios || c.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ft, !0) : s[o]("observerUpdate", ft, !0), a[u]("load", s.onLoad, {
      capture: !0
    }));
  };
  function Ps() {
    const s = this, {
      params: e
    } = s;
    s.onTouchStart = bs.bind(s), s.onTouchMove = Ss.bind(s), s.onTouchEnd = xs.bind(s), s.onDocumentTouchStart = Cs.bind(s), e.cssMode && (s.onScroll = Ts.bind(s)), s.onClick = Es.bind(s), s.onLoad = Ms.bind(s), ut(s, "on");
  }
  function Ls() {
    ut(this, "off");
  }
  var Is = {
    attachEvents: Ps,
    detachEvents: Ls
  };
  const pt = (s, e) => s.grid && e.grid && e.grid.rows > 1;
  function As() {
    const s = this, {
      realIndex: e,
      initialized: t,
      params: i,
      el: a
    } = s, r = i.breakpoints;
    if (!r || r && Object.keys(r).length === 0) return;
    const c = N(), d = i.breakpointsBase === "window" || !i.breakpointsBase ? i.breakpointsBase : "container", u = ["window", "container"].includes(i.breakpointsBase) || !i.breakpointsBase ? s.el : c.querySelector(i.breakpointsBase), o = s.getBreakpoint(r, d, u);
    if (!o || s.currentBreakpoint === o) return;
    const m = (o in r ? r[o] : void 0) || s.originalParams, w = pt(s, i), g = pt(s, m), n = s.params.grabCursor, l = m.grabCursor, v = i.enabled;
    w && !g ? (a.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), s.emitContainerClasses()) : !w && g && (a.classList.add(`${i.containerModifierClass}grid`), (m.grid.fill && m.grid.fill === "column" || !m.grid.fill && i.grid.fill === "column") && a.classList.add(`${i.containerModifierClass}grid-column`), s.emitContainerClasses()), n && !l ? s.unsetGrabCursor() : !n && l && s.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach(($) => {
      if (typeof m[$] > "u") return;
      const A = i[$] && i[$].enabled, z = m[$] && m[$].enabled;
      A && !z && s[$].disable(), !A && z && s[$].enable();
    });
    const y = m.direction && m.direction !== i.direction, h = i.loop && (m.slidesPerView !== i.slidesPerView || y), p = i.loop;
    y && t && s.changeDirection(), U(s.params, m);
    const b = s.params.enabled, x = s.params.loop;
    Object.assign(s, {
      allowTouchMove: s.params.allowTouchMove,
      allowSlideNext: s.params.allowSlideNext,
      allowSlidePrev: s.params.allowSlidePrev
    }), v && !b ? s.disable() : !v && b && s.enable(), s.currentBreakpoint = o, s.emit("_beforeBreakpoint", m), t && (h ? (s.loopDestroy(), s.loopCreate(e), s.updateSlides()) : !p && x ? (s.loopCreate(e), s.updateSlides()) : p && !x && s.loopDestroy()), s.emit("breakpoint", m);
  }
  function zs(s, e, t) {
    if (e === void 0 && (e = "window"), !s || e === "container" && !t) return;
    let i = !1;
    const a = _(), r = e === "window" ? a.innerHeight : t.clientHeight, c = Object.keys(s).map((d) => {
      if (typeof d == "string" && d.indexOf("@") === 0) {
        const u = parseFloat(d.substr(1));
        return {
          value: r * u,
          point: d
        };
      }
      return {
        value: d,
        point: d
      };
    });
    c.sort((d, u) => parseInt(d.value, 10) - parseInt(u.value, 10));
    for (let d = 0; d < c.length; d += 1) {
      const {
        point: u,
        value: o
      } = c[d];
      e === "window" ? a.matchMedia(`(min-width: ${o}px)`).matches && (i = u) : o <= t.clientWidth && (i = u);
    }
    return i || "max";
  }
  var $s = {
    setBreakpoint: As,
    getBreakpoint: zs
  };
  function Os(s, e) {
    const t = [];
    return s.forEach((i) => {
      typeof i == "object" ? Object.keys(i).forEach((a) => {
        i[a] && t.push(e + a);
      }) : typeof i == "string" && t.push(e + i);
    }), t;
  }
  function Ds() {
    const s = this, {
      classNames: e,
      params: t,
      rtl: i,
      el: a,
      device: r
    } = s, c = Os(["initialized", t.direction, {
      "free-mode": s.params.freeMode && t.freeMode.enabled
    }, {
      autoheight: t.autoHeight
    }, {
      rtl: i
    }, {
      grid: t.grid && t.grid.rows > 1
    }, {
      "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
    }, {
      android: r.android
    }, {
      ios: r.ios
    }, {
      "css-mode": t.cssMode
    }, {
      centered: t.cssMode && t.centeredSlides
    }, {
      "watch-progress": t.watchSlidesProgress
    }], t.containerModifierClass);
    e.push(...c), a.classList.add(...e), s.emitContainerClasses();
  }
  function ks() {
    const s = this, {
      el: e,
      classNames: t
    } = s;
    !e || typeof e == "string" || (e.classList.remove(...t), s.emitContainerClasses());
  }
  var Hs = {
    addClasses: Ds,
    removeClasses: ks
  };
  function Gs() {
    const s = this, {
      isLocked: e,
      params: t
    } = s, {
      slidesOffsetBefore: i
    } = t;
    if (i) {
      const a = s.slides.length - 1, r = s.slidesGrid[a] + s.slidesSizesGrid[a] + i * 2;
      s.isLocked = s.size > r;
    } else
      s.isLocked = s.snapGrid.length === 1;
    t.allowSlideNext === !0 && (s.allowSlideNext = !s.isLocked), t.allowSlidePrev === !0 && (s.allowSlidePrev = !s.isLocked), e && e !== s.isLocked && (s.isEnd = !1), e !== s.isLocked && s.emit(s.isLocked ? "lock" : "unlock");
  }
  var Bs = {
    checkOverflow: Gs
  }, mt = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: !1,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: !1,
    // Set wrapper width
    setWrapperSize: !1,
    // Virtual Translate
    virtualTranslate: !1,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: void 0,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: !0,
    // Round length
    roundLengths: !1,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    // Unique Navigation Elements
    uniqueNavElements: !0,
    // Resistance
    resistance: !0,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: !1,
    // Cursor
    grabCursor: !1,
    // Clicks
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    // loop
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    // rewind
    rewind: !1,
    // Swiping/no swiping
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: !0,
    // Internals
    _emitClasses: !1
  };
  function Xs(s, e) {
    return function(i) {
      i === void 0 && (i = {});
      const a = Object.keys(i)[0], r = i[a];
      if (typeof r != "object" || r === null) {
        U(e, i);
        return;
      }
      if (s[a] === !0 && (s[a] = {
        enabled: !0
      }), a === "navigation" && s[a] && s[a].enabled && !s[a].prevEl && !s[a].nextEl && (s[a].auto = !0), ["pagination", "scrollbar"].indexOf(a) >= 0 && s[a] && s[a].enabled && !s[a].el && (s[a].auto = !0), !(a in s && "enabled" in r)) {
        U(e, i);
        return;
      }
      typeof s[a] == "object" && !("enabled" in s[a]) && (s[a].enabled = !0), s[a] || (s[a] = {
        enabled: !1
      }), U(e, i);
    };
  }
  const We = {
    eventsEmitter: Ht,
    update: Wt,
    translate: Jt,
    transition: is,
    slide: fs,
    loop: hs,
    grabCursor: ws,
    events: Is,
    breakpoints: $s,
    checkOverflow: Bs,
    classes: Hs
  }, je = {};
  class Z {
    constructor() {
      let e, t;
      for (var i = arguments.length, a = new Array(i), r = 0; r < i; r++)
        a[r] = arguments[r];
      a.length === 1 && a[0].constructor && Object.prototype.toString.call(a[0]).slice(8, -1) === "Object" ? t = a[0] : [e, t] = a, t || (t = {}), t = U({}, t), e && !t.el && (t.el = e);
      const c = N();
      if (t.el && typeof t.el == "string" && c.querySelectorAll(t.el).length > 1) {
        const f = [];
        return c.querySelectorAll(t.el).forEach((m) => {
          const w = U({}, t, {
            el: m
          });
          f.push(new Z(w));
        }), f;
      }
      const d = this;
      d.__swiper__ = !0, d.support = at(), d.device = nt({
        userAgent: t.userAgent
      }), d.browser = lt(), d.eventsListeners = {}, d.eventsAnyListeners = [], d.modules = [...d.__modules__], t.modules && Array.isArray(t.modules) && d.modules.push(...t.modules);
      const u = {};
      d.modules.forEach((f) => {
        f({
          params: t,
          swiper: d,
          extendParams: Xs(t, u),
          on: d.on.bind(d),
          once: d.once.bind(d),
          off: d.off.bind(d),
          emit: d.emit.bind(d)
        });
      });
      const o = U({}, mt, u);
      return d.params = U({}, o, je, t), d.originalParams = U({}, d.params), d.passedParams = U({}, t), d.params && d.params.on && Object.keys(d.params.on).forEach((f) => {
        d.on(f, d.params.on[f]);
      }), d.params && d.params.onAny && d.onAny(d.params.onAny), Object.assign(d, {
        enabled: d.params.enabled,
        el: e,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return d.params.direction === "horizontal";
        },
        isVertical() {
          return d.params.direction === "vertical";
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: !0,
        isEnd: !1,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        // Locks
        allowSlideNext: d.params.allowSlideNext,
        allowSlidePrev: d.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          // Form elements to match
          focusableElements: d.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: void 0,
          // Velocities
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        // Clicks
        allowClick: !0,
        // Touches
        allowTouchMove: d.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      }), d.emit("_swiper"), d.params.init && d.init(), d;
    }
    getDirectionLabel(e) {
      return this.isHorizontal() ? e : {
        width: "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        marginRight: "marginBottom"
      }[e];
    }
    getSlideIndex(e) {
      const {
        slidesEl: t,
        params: i
      } = this, a = q(t, `.${i.slideClass}, swiper-slide`), r = Se(a[0]);
      return Se(e) - r;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(this.slides.find((t) => t.getAttribute("data-swiper-slide-index") * 1 === e));
    }
    recalcSlides() {
      const e = this, {
        slidesEl: t,
        params: i
      } = e;
      e.slides = q(t, `.${i.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
    }
    setProgress(e, t) {
      const i = this;
      e = Math.min(Math.max(e, 0), 1);
      const a = i.minTranslate(), c = (i.maxTranslate() - a) * e + a;
      i.translateTo(c, typeof t > "u" ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className.split(" ").filter((i) => i.indexOf("swiper") === 0 || i.indexOf(e.params.containerModifierClass) === 0);
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed ? "" : e.className.split(" ").filter((i) => i.indexOf("swiper-slide") === 0 || i.indexOf(t.params.slideClass) === 0).join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((i) => {
        const a = e.getSlideClasses(i);
        t.push({
          slideEl: i,
          classNames: a
        }), e.emit("_slideClass", i, a);
      }), e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      e === void 0 && (e = "current"), t === void 0 && (t = !1);
      const i = this, {
        params: a,
        slides: r,
        slidesGrid: c,
        slidesSizesGrid: d,
        size: u,
        activeIndex: o
      } = i;
      let f = 1;
      if (typeof a.slidesPerView == "number") return a.slidesPerView;
      if (a.centeredSlides) {
        let m = r[o] ? Math.ceil(r[o].swiperSlideSize) : 0, w;
        for (let g = o + 1; g < r.length; g += 1)
          r[g] && !w && (m += Math.ceil(r[g].swiperSlideSize), f += 1, m > u && (w = !0));
        for (let g = o - 1; g >= 0; g -= 1)
          r[g] && !w && (m += r[g].swiperSlideSize, f += 1, m > u && (w = !0));
      } else if (e === "current")
        for (let m = o + 1; m < r.length; m += 1)
          (t ? c[m] + d[m] - c[o] < u : c[m] - c[o] < u) && (f += 1);
      else
        for (let m = o - 1; m >= 0; m -= 1)
          c[o] - c[m] < u && (f += 1);
      return f;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const {
        snapGrid: t,
        params: i
      } = e;
      i.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((c) => {
        c.complete && $e(e, c);
      }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
      function a() {
        const c = e.rtlTranslate ? e.translate * -1 : e.translate, d = Math.min(Math.max(c, e.maxTranslate()), e.minTranslate());
        e.setTranslate(d), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let r;
      if (i.freeMode && i.freeMode.enabled && !i.cssMode)
        a(), i.autoHeight && e.updateAutoHeight();
      else {
        if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
          const c = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
          r = e.slideTo(c.length - 1, 0, !1, !0);
        } else
          r = e.slideTo(e.activeIndex, 0, !1, !0);
        r || a();
      }
      i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }
    changeDirection(e, t) {
      t === void 0 && (t = !0);
      const i = this, a = i.params.direction;
      return e || (e = a === "horizontal" ? "vertical" : "horizontal"), e === a || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${a}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.forEach((r) => {
        e === "vertical" ? r.style.width = "" : r.style.height = "";
      }), i.emit("changeDirection"), t && i.update()), i;
    }
    changeLanguageDirection(e) {
      const t = this;
      t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let i = e || t.params.el;
      if (typeof i == "string" && (i = document.querySelector(i)), !i)
        return !1;
      i.swiper = t, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
      const a = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let c = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(a()) : q(i, a())[0];
      return !c && t.params.createElements && (c = K("div", t.params.wrapperClass), i.append(c), q(i, `.${t.params.slideClass}`).forEach((d) => {
        c.append(d);
      })), Object.assign(t, {
        el: i,
        wrapperEl: c,
        slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : c,
        hostEl: t.isElement ? i.parentNode.host : i,
        mounted: !0,
        // RTL
        rtl: i.dir.toLowerCase() === "rtl" || re(i, "direction") === "rtl",
        rtlTranslate: t.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || re(i, "direction") === "rtl"),
        wrongRTL: re(c, "display") === "-webkit-box"
      }), !0;
    }
    init(e) {
      const t = this;
      if (t.initialized || t.mount(e) === !1) return t;
      t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
      const a = [...t.el.querySelectorAll('[loading="lazy"]')];
      return t.isElement && a.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), a.forEach((r) => {
        r.complete ? $e(t, r) : r.addEventListener("load", (c) => {
          $e(t, c.target);
        });
      }), qe(t), t.initialized = !0, qe(t), t.emit("init"), t.emit("afterInit"), t;
    }
    destroy(e, t) {
      e === void 0 && (e = !0), t === void 0 && (t = !0);
      const i = this, {
        params: a,
        el: r,
        wrapperEl: c,
        slides: d
      } = i;
      return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), a.loop && i.loopDestroy(), t && (i.removeClasses(), r && typeof r != "string" && r.removeAttribute("style"), c && c.removeAttribute("style"), d && d.length && d.forEach((u) => {
        u.classList.remove(a.slideVisibleClass, a.slideFullyVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass), u.removeAttribute("style"), u.removeAttribute("data-swiper-slide-index");
      })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((u) => {
        i.off(u);
      }), e !== !1 && (i.el && typeof i.el != "string" && (i.el.swiper = null), Tt(i)), i.destroyed = !0), null;
    }
    static extendDefaults(e) {
      U(je, e);
    }
    static get extendedDefaults() {
      return je;
    }
    static get defaults() {
      return mt;
    }
    static installModule(e) {
      Z.prototype.__modules__ || (Z.prototype.__modules__ = []);
      const t = Z.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e) ? (e.forEach((t) => Z.installModule(t)), Z) : (Z.installModule(e), Z);
    }
  }
  Object.keys(We).forEach((s) => {
    Object.keys(We[s]).forEach((e) => {
      Z.prototype[e] = We[s][e];
    });
  }), Z.use([Dt, kt]);
  function Ys(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i,
      emit: a
    } = s;
    t({
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: !0,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    });
    let r;
    const c = N();
    e.virtual = {
      cache: {},
      from: void 0,
      to: void 0,
      slides: [],
      offset: 0,
      slidesGrid: []
    };
    const d = c.createElement("div");
    function u(n, l) {
      const v = e.params.virtual;
      if (v.cache && e.virtual.cache[l])
        return e.virtual.cache[l];
      let y;
      return v.renderSlide ? (y = v.renderSlide.call(e, n, l), typeof y == "string" && (d.innerHTML = y, y = d.children[0])) : e.isElement ? y = K("swiper-slide") : y = K("div", e.params.slideClass), y.setAttribute("data-swiper-slide-index", l), v.renderSlide || (y.innerHTML = n), v.cache && (e.virtual.cache[l] = y), y;
    }
    function o(n, l, v) {
      const {
        slidesPerView: y,
        slidesPerGroup: h,
        centeredSlides: p,
        loop: b,
        initialSlide: x
      } = e.params;
      if (l && !b && x > 0)
        return;
      const {
        addSlidesBefore: $,
        addSlidesAfter: A
      } = e.params.virtual, {
        from: z,
        to: M,
        slides: T,
        slidesGrid: L,
        offset: P
      } = e.virtual;
      e.params.cssMode || e.updateActiveIndex();
      const C = typeof v > "u" ? e.activeIndex || 0 : v;
      let I;
      e.rtlTranslate ? I = "right" : I = e.isHorizontal() ? "left" : "top";
      let D, H;
      p ? (D = Math.floor(y / 2) + h + A, H = Math.floor(y / 2) + h + $) : (D = y + (h - 1) + A, H = (b ? y : h) + $);
      let S = C - H, E = C + D;
      b || (S = Math.max(S, 0), E = Math.min(E, T.length - 1));
      let B = (e.slidesGrid[S] || 0) - (e.slidesGrid[0] || 0);
      b && C >= H ? (S -= H, p || (B += e.slidesGrid[0])) : b && C < H && (S = -H, p && (B += e.slidesGrid[0])), Object.assign(e.virtual, {
        from: S,
        to: E,
        offset: B,
        slidesGrid: e.slidesGrid,
        slidesBefore: H,
        slidesAfter: D
      });
      function X() {
        e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), a("virtualUpdate");
      }
      if (z === S && M === E && !n) {
        e.slidesGrid !== L && B !== P && e.slides.forEach((O) => {
          O.style[I] = `${B - Math.abs(e.cssOverflowAdjustment())}px`;
        }), e.updateProgress(), a("virtualUpdate");
        return;
      }
      if (e.params.virtual.renderExternal) {
        e.params.virtual.renderExternal.call(e, {
          offset: B,
          from: S,
          to: E,
          slides: function() {
            const G = [];
            for (let R = S; R <= E; R += 1)
              G.push(T[R]);
            return G;
          }()
        }), e.params.virtual.renderExternalUpdate ? X() : a("virtualUpdate");
        return;
      }
      const V = [], F = [], ee = (O) => {
        let G = O;
        return O < 0 ? G = T.length + O : G >= T.length && (G = G - T.length), G;
      };
      if (n)
        e.slides.filter((O) => O.matches(`.${e.params.slideClass}, swiper-slide`)).forEach((O) => {
          O.remove();
        });
      else
        for (let O = z; O <= M; O += 1)
          if (O < S || O > E) {
            const G = ee(O);
            e.slides.filter((R) => R.matches(`.${e.params.slideClass}[data-swiper-slide-index="${G}"], swiper-slide[data-swiper-slide-index="${G}"]`)).forEach((R) => {
              R.remove();
            });
          }
      const Te = b ? -T.length : 0, k = b ? T.length * 2 : T.length;
      for (let O = Te; O < k; O += 1)
        if (O >= S && O <= E) {
          const G = ee(O);
          typeof M > "u" || n ? F.push(G) : (O > M && F.push(G), O < z && V.push(G));
        }
      if (F.forEach((O) => {
        e.slidesEl.append(u(T[O], O));
      }), b)
        for (let O = V.length - 1; O >= 0; O -= 1) {
          const G = V[O];
          e.slidesEl.prepend(u(T[G], G));
        }
      else
        V.sort((O, G) => G - O), V.forEach((O) => {
          e.slidesEl.prepend(u(T[O], O));
        });
      q(e.slidesEl, ".swiper-slide, swiper-slide").forEach((O) => {
        O.style[I] = `${B - Math.abs(e.cssOverflowAdjustment())}px`;
      }), X();
    }
    function f(n) {
      if (typeof n == "object" && "length" in n)
        for (let l = 0; l < n.length; l += 1)
          n[l] && e.virtual.slides.push(n[l]);
      else
        e.virtual.slides.push(n);
      o(!0);
    }
    function m(n) {
      const l = e.activeIndex;
      let v = l + 1, y = 1;
      if (Array.isArray(n)) {
        for (let h = 0; h < n.length; h += 1)
          n[h] && e.virtual.slides.unshift(n[h]);
        v = l + n.length, y = n.length;
      } else
        e.virtual.slides.unshift(n);
      if (e.params.virtual.cache) {
        const h = e.virtual.cache, p = {};
        Object.keys(h).forEach((b) => {
          const x = h[b], $ = x.getAttribute("data-swiper-slide-index");
          $ && x.setAttribute("data-swiper-slide-index", parseInt($, 10) + y), p[parseInt(b, 10) + y] = x;
        }), e.virtual.cache = p;
      }
      o(!0), e.slideTo(v, 0);
    }
    function w(n) {
      if (typeof n > "u" || n === null) return;
      let l = e.activeIndex;
      if (Array.isArray(n))
        for (let v = n.length - 1; v >= 0; v -= 1)
          e.params.virtual.cache && (delete e.virtual.cache[n[v]], Object.keys(e.virtual.cache).forEach((y) => {
            y > n && (e.virtual.cache[y - 1] = e.virtual.cache[y], e.virtual.cache[y - 1].setAttribute("data-swiper-slide-index", y - 1), delete e.virtual.cache[y]);
          })), e.virtual.slides.splice(n[v], 1), n[v] < l && (l -= 1), l = Math.max(l, 0);
      else
        e.params.virtual.cache && (delete e.virtual.cache[n], Object.keys(e.virtual.cache).forEach((v) => {
          v > n && (e.virtual.cache[v - 1] = e.virtual.cache[v], e.virtual.cache[v - 1].setAttribute("data-swiper-slide-index", v - 1), delete e.virtual.cache[v]);
        })), e.virtual.slides.splice(n, 1), n < l && (l -= 1), l = Math.max(l, 0);
      o(!0), e.slideTo(l, 0);
    }
    function g() {
      e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), o(!0), e.slideTo(0, 0);
    }
    i("beforeInit", () => {
      if (!e.params.virtual.enabled) return;
      let n;
      if (typeof e.passedParams.virtual.slides > "u") {
        const l = [...e.slidesEl.children].filter((v) => v.matches(`.${e.params.slideClass}, swiper-slide`));
        l && l.length && (e.virtual.slides = [...l], n = !0, l.forEach((v, y) => {
          v.setAttribute("data-swiper-slide-index", y), e.virtual.cache[y] = v, v.remove();
        }));
      }
      n || (e.virtual.slides = e.params.virtual.slides), e.classNames.push(`${e.params.containerModifierClass}virtual`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0, o(!1, !0);
    }), i("setTranslate", () => {
      e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(r), r = setTimeout(() => {
        o();
      }, 100)) : o());
    }), i("init update resize", () => {
      e.params.virtual.enabled && e.params.cssMode && be(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
    }), Object.assign(e.virtual, {
      appendSlide: f,
      prependSlide: m,
      removeSlide: w,
      removeAllSlides: g,
      update: o
    });
  }
  function Rs(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i,
      emit: a
    } = s;
    const r = N(), c = _();
    e.keyboard = {
      enabled: !1
    }, t({
      keyboard: {
        enabled: !1,
        onlyInViewport: !0,
        pageUpDown: !0
      }
    });
    function d(f) {
      if (!e.enabled) return;
      const {
        rtlTranslate: m
      } = e;
      let w = f;
      w.originalEvent && (w = w.originalEvent);
      const g = w.keyCode || w.charCode, n = e.params.keyboard.pageUpDown, l = n && g === 33, v = n && g === 34, y = g === 37, h = g === 39, p = g === 38, b = g === 40;
      if (!e.allowSlideNext && (e.isHorizontal() && h || e.isVertical() && b || v) || !e.allowSlidePrev && (e.isHorizontal() && y || e.isVertical() && p || l))
        return !1;
      if (!(w.shiftKey || w.altKey || w.ctrlKey || w.metaKey) && !(r.activeElement && r.activeElement.nodeName && (r.activeElement.nodeName.toLowerCase() === "input" || r.activeElement.nodeName.toLowerCase() === "textarea"))) {
        if (e.params.keyboard.onlyInViewport && (l || v || y || h || p || b)) {
          let x = !1;
          if (fe(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && fe(e.el, `.${e.params.slideActiveClass}`).length === 0)
            return;
          const $ = e.el, A = $.clientWidth, z = $.clientHeight, M = c.innerWidth, T = c.innerHeight, L = Ae($);
          m && (L.left -= $.scrollLeft);
          const P = [[L.left, L.top], [L.left + A, L.top], [L.left, L.top + z], [L.left + A, L.top + z]];
          for (let C = 0; C < P.length; C += 1) {
            const I = P[C];
            if (I[0] >= 0 && I[0] <= M && I[1] >= 0 && I[1] <= T) {
              if (I[0] === 0 && I[1] === 0) continue;
              x = !0;
            }
          }
          if (!x) return;
        }
        e.isHorizontal() ? ((l || v || y || h) && (w.preventDefault ? w.preventDefault() : w.returnValue = !1), ((v || h) && !m || (l || y) && m) && e.slideNext(), ((l || y) && !m || (v || h) && m) && e.slidePrev()) : ((l || v || p || b) && (w.preventDefault ? w.preventDefault() : w.returnValue = !1), (v || b) && e.slideNext(), (l || p) && e.slidePrev()), a("keyPress", g);
      }
    }
    function u() {
      e.keyboard.enabled || (r.addEventListener("keydown", d), e.keyboard.enabled = !0);
    }
    function o() {
      e.keyboard.enabled && (r.removeEventListener("keydown", d), e.keyboard.enabled = !1);
    }
    i("init", () => {
      e.params.keyboard.enabled && u();
    }), i("destroy", () => {
      e.keyboard.enabled && o();
    }), Object.assign(e.keyboard, {
      enable: u,
      disable: o
    });
  }
  function _s(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i,
      emit: a
    } = s;
    const r = _();
    t({
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarget: "container",
        thresholdDelta: null,
        thresholdTime: null,
        noMousewheelClass: "swiper-no-mousewheel"
      }
    }), e.mousewheel = {
      enabled: !1
    };
    let c, d = Q(), u;
    const o = [];
    function f(p) {
      let A = 0, z = 0, M = 0, T = 0;
      return "detail" in p && (z = p.detail), "wheelDelta" in p && (z = -p.wheelDelta / 120), "wheelDeltaY" in p && (z = -p.wheelDeltaY / 120), "wheelDeltaX" in p && (A = -p.wheelDeltaX / 120), "axis" in p && p.axis === p.HORIZONTAL_AXIS && (A = z, z = 0), M = A * 10, T = z * 10, "deltaY" in p && (T = p.deltaY), "deltaX" in p && (M = p.deltaX), p.shiftKey && !M && (M = T, T = 0), (M || T) && p.deltaMode && (p.deltaMode === 1 ? (M *= 40, T *= 40) : (M *= 800, T *= 800)), M && !A && (A = M < 1 ? -1 : 1), T && !z && (z = T < 1 ? -1 : 1), {
        spinX: A,
        spinY: z,
        pixelX: M,
        pixelY: T
      };
    }
    function m() {
      e.enabled && (e.mouseEntered = !0);
    }
    function w() {
      e.enabled && (e.mouseEntered = !1);
    }
    function g(p) {
      return e.params.mousewheel.thresholdDelta && p.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && Q() - d < e.params.mousewheel.thresholdTime ? !1 : p.delta >= 6 && Q() - d < 60 ? !0 : (p.direction < 0 ? (!e.isEnd || e.params.loop) && !e.animating && (e.slideNext(), a("scroll", p.raw)) : (!e.isBeginning || e.params.loop) && !e.animating && (e.slidePrev(), a("scroll", p.raw)), d = new r.Date().getTime(), !1);
    }
    function n(p) {
      const b = e.params.mousewheel;
      if (p.direction < 0) {
        if (e.isEnd && !e.params.loop && b.releaseOnEdges)
          return !0;
      } else if (e.isBeginning && !e.params.loop && b.releaseOnEdges)
        return !0;
      return !1;
    }
    function l(p) {
      let b = p, x = !0;
      if (!e.enabled || p.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)) return;
      const $ = e.params.mousewheel;
      e.params.cssMode && b.preventDefault();
      let A = e.el;
      e.params.mousewheel.eventsTarget !== "container" && (A = document.querySelector(e.params.mousewheel.eventsTarget));
      const z = A && A.contains(b.target);
      if (!e.mouseEntered && !z && !$.releaseOnEdges) return !0;
      b.originalEvent && (b = b.originalEvent);
      let M = 0;
      const T = e.rtlTranslate ? -1 : 1, L = f(b);
      if ($.forceToAxis)
        if (e.isHorizontal())
          if (Math.abs(L.pixelX) > Math.abs(L.pixelY)) M = -L.pixelX * T;
          else return !0;
        else if (Math.abs(L.pixelY) > Math.abs(L.pixelX)) M = -L.pixelY;
        else return !0;
      else
        M = Math.abs(L.pixelX) > Math.abs(L.pixelY) ? -L.pixelX * T : -L.pixelY;
      if (M === 0) return !0;
      $.invert && (M = -M);
      let P = e.getTranslate() + M * $.sensitivity;
      if (P >= e.minTranslate() && (P = e.minTranslate()), P <= e.maxTranslate() && (P = e.maxTranslate()), x = e.params.loop ? !0 : !(P === e.minTranslate() || P === e.maxTranslate()), x && e.params.nested && b.stopPropagation(), !e.params.freeMode || !e.params.freeMode.enabled) {
        const C = {
          time: Q(),
          delta: Math.abs(M),
          direction: Math.sign(M),
          raw: p
        };
        o.length >= 2 && o.shift();
        const I = o.length ? o[o.length - 1] : void 0;
        if (o.push(C), I ? (C.direction !== I.direction || C.delta > I.delta || C.time > I.time + 150) && g(C) : g(C), n(C))
          return !0;
      } else {
        const C = {
          time: Q(),
          delta: Math.abs(M),
          direction: Math.sign(M)
        }, I = u && C.time < u.time + 500 && C.delta <= u.delta && C.direction === u.direction;
        if (!I) {
          u = void 0;
          let D = e.getTranslate() + M * $.sensitivity;
          const H = e.isBeginning, S = e.isEnd;
          if (D >= e.minTranslate() && (D = e.minTranslate()), D <= e.maxTranslate() && (D = e.maxTranslate()), e.setTransition(0), e.setTranslate(D), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!H && e.isBeginning || !S && e.isEnd) && e.updateSlidesClasses(), e.params.loop && e.loopFix({
            direction: C.direction < 0 ? "next" : "prev",
            byMousewheel: !0
          }), e.params.freeMode.sticky) {
            clearTimeout(c), c = void 0, o.length >= 15 && o.shift();
            const E = o.length ? o[o.length - 1] : void 0, B = o[0];
            if (o.push(C), E && (C.delta > E.delta || C.direction !== E.direction))
              o.splice(0);
            else if (o.length >= 15 && C.time - B.time < 500 && B.delta - C.delta >= 1 && C.delta <= 6) {
              const X = M > 0 ? 0.8 : 0.2;
              u = C, o.splice(0), c = de(() => {
                e.destroyed || !e.params || e.slideToClosest(e.params.speed, !0, void 0, X);
              }, 0);
            }
            c || (c = de(() => {
              if (e.destroyed || !e.params) return;
              const X = 0.5;
              u = C, o.splice(0), e.slideToClosest(e.params.speed, !0, void 0, X);
            }, 500));
          }
          if (I || a("scroll", b), e.params.autoplay && e.params.autoplay.disableOnInteraction && e.autoplay.stop(), $.releaseOnEdges && (D === e.minTranslate() || D === e.maxTranslate()))
            return !0;
        }
      }
      return b.preventDefault ? b.preventDefault() : b.returnValue = !1, !1;
    }
    function v(p) {
      let b = e.el;
      e.params.mousewheel.eventsTarget !== "container" && (b = document.querySelector(e.params.mousewheel.eventsTarget)), b[p]("mouseenter", m), b[p]("mouseleave", w), b[p]("wheel", l);
    }
    function y() {
      return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", l), !0) : e.mousewheel.enabled ? !1 : (v("addEventListener"), e.mousewheel.enabled = !0, !0);
    }
    function h() {
      return e.params.cssMode ? (e.wrapperEl.addEventListener(event, l), !0) : e.mousewheel.enabled ? (v("removeEventListener"), e.mousewheel.enabled = !1, !0) : !1;
    }
    i("init", () => {
      !e.params.mousewheel.enabled && e.params.cssMode && h(), e.params.mousewheel.enabled && y();
    }), i("destroy", () => {
      e.params.cssMode && y(), e.mousewheel.enabled && h();
    }), Object.assign(e.mousewheel, {
      enable: y,
      disable: h
    });
  }
  function Ue(s, e, t, i) {
    return s.params.createElements && Object.keys(i).forEach((a) => {
      if (!t[a] && t.auto === !0) {
        let r = q(s.el, `.${i[a]}`)[0];
        r || (r = K("div", i[a]), r.className = i[a], s.el.append(r)), t[a] = r, e[a] = r;
      }
    }), t;
  }
  function Vs(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i,
      emit: a
    } = s;
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled"
      }
    }), e.navigation = {
      nextEl: null,
      prevEl: null
    };
    function r(n) {
      let l;
      return n && typeof n == "string" && e.isElement && (l = e.el.querySelector(n) || e.hostEl.querySelector(n), l) ? l : (n && (typeof n == "string" && (l = [...document.querySelectorAll(n)]), e.params.uniqueNavElements && typeof n == "string" && l && l.length > 1 && e.el.querySelectorAll(n).length === 1 ? l = e.el.querySelector(n) : l && l.length === 1 && (l = l[0])), n && !l ? n : l);
    }
    function c(n, l) {
      const v = e.params.navigation;
      n = Y(n), n.forEach((y) => {
        y && (y.classList[l ? "add" : "remove"](...v.disabledClass.split(" ")), y.tagName === "BUTTON" && (y.disabled = l), e.params.watchOverflow && e.enabled && y.classList[e.isLocked ? "add" : "remove"](v.lockClass));
      });
    }
    function d() {
      const {
        nextEl: n,
        prevEl: l
      } = e.navigation;
      if (e.params.loop) {
        c(l, !1), c(n, !1);
        return;
      }
      c(l, e.isBeginning && !e.params.rewind), c(n, e.isEnd && !e.params.rewind);
    }
    function u(n) {
      n.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), a("navigationPrev"));
    }
    function o(n) {
      n.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), a("navigationNext"));
    }
    function f() {
      const n = e.params.navigation;
      if (e.params.navigation = Ue(e, e.originalParams.navigation, e.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !(n.nextEl || n.prevEl)) return;
      let l = r(n.nextEl), v = r(n.prevEl);
      Object.assign(e.navigation, {
        nextEl: l,
        prevEl: v
      }), l = Y(l), v = Y(v);
      const y = (h, p) => {
        h && h.addEventListener("click", p === "next" ? o : u), !e.enabled && h && h.classList.add(...n.lockClass.split(" "));
      };
      l.forEach((h) => y(h, "next")), v.forEach((h) => y(h, "prev"));
    }
    function m() {
      let {
        nextEl: n,
        prevEl: l
      } = e.navigation;
      n = Y(n), l = Y(l);
      const v = (y, h) => {
        y.removeEventListener("click", h === "next" ? o : u), y.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      n.forEach((y) => v(y, "next")), l.forEach((y) => v(y, "prev"));
    }
    i("init", () => {
      e.params.navigation.enabled === !1 ? g() : (f(), d());
    }), i("toEdge fromEdge lock unlock", () => {
      d();
    }), i("destroy", () => {
      m();
    }), i("enable disable", () => {
      let {
        nextEl: n,
        prevEl: l
      } = e.navigation;
      if (n = Y(n), l = Y(l), e.enabled) {
        d();
        return;
      }
      [...n, ...l].filter((v) => !!v).forEach((v) => v.classList.add(e.params.navigation.lockClass));
    }), i("click", (n, l) => {
      let {
        nextEl: v,
        prevEl: y
      } = e.navigation;
      v = Y(v), y = Y(y);
      const h = l.target;
      let p = y.includes(h) || v.includes(h);
      if (e.isElement && !p) {
        const b = l.path || l.composedPath && l.composedPath();
        b && (p = b.find((x) => v.includes(x) || y.includes(x)));
      }
      if (e.params.navigation.hideOnClick && !p) {
        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === h || e.pagination.el.contains(h))) return;
        let b;
        v.length ? b = v[0].classList.contains(e.params.navigation.hiddenClass) : y.length && (b = y[0].classList.contains(e.params.navigation.hiddenClass)), a(b === !0 ? "navigationShow" : "navigationHide"), [...v, ...y].filter((x) => !!x).forEach((x) => x.classList.toggle(e.params.navigation.hiddenClass));
      }
    });
    const w = () => {
      e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), f(), d();
    }, g = () => {
      e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), m();
    };
    Object.assign(e.navigation, {
      enable: w,
      disable: g,
      update: d,
      init: f,
      destroy: m
    });
  }
  function te(s) {
    return s === void 0 && (s = ""), `.${s.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
  }
  function Ns(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i,
      emit: a
    } = s;
    const r = "swiper-pagination";
    t({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (h) => h,
        formatFractionTotal: (h) => h,
        bulletClass: `${r}-bullet`,
        bulletActiveClass: `${r}-bullet-active`,
        modifierClass: `${r}-`,
        currentClass: `${r}-current`,
        totalClass: `${r}-total`,
        hiddenClass: `${r}-hidden`,
        progressbarFillClass: `${r}-progressbar-fill`,
        progressbarOppositeClass: `${r}-progressbar-opposite`,
        clickableClass: `${r}-clickable`,
        lockClass: `${r}-lock`,
        horizontalClass: `${r}-horizontal`,
        verticalClass: `${r}-vertical`,
        paginationDisabledClass: `${r}-disabled`
      }
    }), e.pagination = {
      el: null,
      bullets: []
    };
    let c, d = 0;
    function u() {
      return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
    }
    function o(h, p) {
      const {
        bulletActiveClass: b
      } = e.params.pagination;
      h && (h = h[`${p === "prev" ? "previous" : "next"}ElementSibling`], h && (h.classList.add(`${b}-${p}`), h = h[`${p === "prev" ? "previous" : "next"}ElementSibling`], h && h.classList.add(`${b}-${p}-${p}`)));
    }
    function f(h, p, b) {
      if (h = h % b, p = p % b, p === h + 1)
        return "next";
      if (p === h - 1)
        return "previous";
    }
    function m(h) {
      const p = h.target.closest(te(e.params.pagination.bulletClass));
      if (!p)
        return;
      h.preventDefault();
      const b = Se(p) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === b) return;
        const x = f(e.realIndex, b, e.slides.length);
        x === "next" ? e.slideNext() : x === "previous" ? e.slidePrev() : e.slideToLoop(b);
      } else
        e.slideTo(b);
    }
    function w() {
      const h = e.rtl, p = e.params.pagination;
      if (u()) return;
      let b = e.pagination.el;
      b = Y(b);
      let x, $;
      const A = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, z = e.params.loop ? Math.ceil(A / e.params.slidesPerGroup) : e.snapGrid.length;
      if (e.params.loop ? ($ = e.previousRealIndex || 0, x = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (x = e.snapIndex, $ = e.previousSnapIndex) : ($ = e.previousIndex || 0, x = e.activeIndex || 0), p.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
        const M = e.pagination.bullets;
        let T, L, P;
        if (p.dynamicBullets && (c = Ye(M[0], e.isHorizontal() ? "width" : "height"), b.forEach((C) => {
          C.style[e.isHorizontal() ? "width" : "height"] = `${c * (p.dynamicMainBullets + 4)}px`;
        }), p.dynamicMainBullets > 1 && $ !== void 0 && (d += x - ($ || 0), d > p.dynamicMainBullets - 1 ? d = p.dynamicMainBullets - 1 : d < 0 && (d = 0)), T = Math.max(x - d, 0), L = T + (Math.min(M.length, p.dynamicMainBullets) - 1), P = (L + T) / 2), M.forEach((C) => {
          const I = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((D) => `${p.bulletActiveClass}${D}`)].map((D) => typeof D == "string" && D.includes(" ") ? D.split(" ") : D).flat();
          C.classList.remove(...I);
        }), b.length > 1)
          M.forEach((C) => {
            const I = Se(C);
            I === x ? C.classList.add(...p.bulletActiveClass.split(" ")) : e.isElement && C.setAttribute("part", "bullet"), p.dynamicBullets && (I >= T && I <= L && C.classList.add(...`${p.bulletActiveClass}-main`.split(" ")), I === T && o(C, "prev"), I === L && o(C, "next"));
          });
        else {
          const C = M[x];
          if (C && C.classList.add(...p.bulletActiveClass.split(" ")), e.isElement && M.forEach((I, D) => {
            I.setAttribute("part", D === x ? "bullet-active" : "bullet");
          }), p.dynamicBullets) {
            const I = M[T], D = M[L];
            for (let H = T; H <= L; H += 1)
              M[H] && M[H].classList.add(...`${p.bulletActiveClass}-main`.split(" "));
            o(I, "prev"), o(D, "next");
          }
        }
        if (p.dynamicBullets) {
          const C = Math.min(M.length, p.dynamicMainBullets + 4), I = (c * C - c) / 2 - P * c, D = h ? "right" : "left";
          M.forEach((H) => {
            H.style[e.isHorizontal() ? D : "top"] = `${I}px`;
          });
        }
      }
      b.forEach((M, T) => {
        if (p.type === "fraction" && (M.querySelectorAll(te(p.currentClass)).forEach((L) => {
          L.textContent = p.formatFractionCurrent(x + 1);
        }), M.querySelectorAll(te(p.totalClass)).forEach((L) => {
          L.textContent = p.formatFractionTotal(z);
        })), p.type === "progressbar") {
          let L;
          p.progressbarOpposite ? L = e.isHorizontal() ? "vertical" : "horizontal" : L = e.isHorizontal() ? "horizontal" : "vertical";
          const P = (x + 1) / z;
          let C = 1, I = 1;
          L === "horizontal" ? C = P : I = P, M.querySelectorAll(te(p.progressbarFillClass)).forEach((D) => {
            D.style.transform = `translate3d(0,0,0) scaleX(${C}) scaleY(${I})`, D.style.transitionDuration = `${e.params.speed}ms`;
          });
        }
        p.type === "custom" && p.renderCustom ? (M.innerHTML = p.renderCustom(e, x + 1, z), T === 0 && a("paginationRender", M)) : (T === 0 && a("paginationRender", M), a("paginationUpdate", M)), e.params.watchOverflow && e.enabled && M.classList[e.isLocked ? "add" : "remove"](p.lockClass);
      });
    }
    function g() {
      const h = e.params.pagination;
      if (u()) return;
      const p = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
      let b = e.pagination.el;
      b = Y(b);
      let x = "";
      if (h.type === "bullets") {
        let $ = e.params.loop ? Math.ceil(p / e.params.slidesPerGroup) : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && $ > p && ($ = p);
        for (let A = 0; A < $; A += 1)
          h.renderBullet ? x += h.renderBullet.call(e, A, h.bulletClass) : x += `<${h.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${h.bulletClass}"></${h.bulletElement}>`;
      }
      h.type === "fraction" && (h.renderFraction ? x = h.renderFraction.call(e, h.currentClass, h.totalClass) : x = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`), h.type === "progressbar" && (h.renderProgressbar ? x = h.renderProgressbar.call(e, h.progressbarFillClass) : x = `<span class="${h.progressbarFillClass}"></span>`), e.pagination.bullets = [], b.forEach(($) => {
        h.type !== "custom" && ($.innerHTML = x || ""), h.type === "bullets" && e.pagination.bullets.push(...$.querySelectorAll(te(h.bulletClass)));
      }), h.type !== "custom" && a("paginationRender", b[0]);
    }
    function n() {
      e.params.pagination = Ue(e, e.originalParams.pagination, e.params.pagination, {
        el: "swiper-pagination"
      });
      const h = e.params.pagination;
      if (!h.el) return;
      let p;
      typeof h.el == "string" && e.isElement && (p = e.el.querySelector(h.el)), !p && typeof h.el == "string" && (p = [...document.querySelectorAll(h.el)]), p || (p = h.el), !(!p || p.length === 0) && (e.params.uniqueNavElements && typeof h.el == "string" && Array.isArray(p) && p.length > 1 && (p = [...e.el.querySelectorAll(h.el)], p.length > 1 && (p = p.find((b) => fe(b, ".swiper")[0] === e.el))), Array.isArray(p) && p.length === 1 && (p = p[0]), Object.assign(e.pagination, {
        el: p
      }), p = Y(p), p.forEach((b) => {
        h.type === "bullets" && h.clickable && b.classList.add(...(h.clickableClass || "").split(" ")), b.classList.add(h.modifierClass + h.type), b.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass), h.type === "bullets" && h.dynamicBullets && (b.classList.add(`${h.modifierClass}${h.type}-dynamic`), d = 0, h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)), h.type === "progressbar" && h.progressbarOpposite && b.classList.add(h.progressbarOppositeClass), h.clickable && b.addEventListener("click", m), e.enabled || b.classList.add(h.lockClass);
      }));
    }
    function l() {
      const h = e.params.pagination;
      if (u()) return;
      let p = e.pagination.el;
      p && (p = Y(p), p.forEach((b) => {
        b.classList.remove(h.hiddenClass), b.classList.remove(h.modifierClass + h.type), b.classList.remove(e.isHorizontal() ? h.horizontalClass : h.verticalClass), h.clickable && (b.classList.remove(...(h.clickableClass || "").split(" ")), b.removeEventListener("click", m));
      })), e.pagination.bullets && e.pagination.bullets.forEach((b) => b.classList.remove(...h.bulletActiveClass.split(" ")));
    }
    i("changeDirection", () => {
      if (!e.pagination || !e.pagination.el) return;
      const h = e.params.pagination;
      let {
        el: p
      } = e.pagination;
      p = Y(p), p.forEach((b) => {
        b.classList.remove(h.horizontalClass, h.verticalClass), b.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass);
      });
    }), i("init", () => {
      e.params.pagination.enabled === !1 ? y() : (n(), g(), w());
    }), i("activeIndexChange", () => {
      typeof e.snapIndex > "u" && w();
    }), i("snapIndexChange", () => {
      w();
    }), i("snapGridLengthChange", () => {
      g(), w();
    }), i("destroy", () => {
      l();
    }), i("enable disable", () => {
      let {
        el: h
      } = e.pagination;
      h && (h = Y(h), h.forEach((p) => p.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)));
    }), i("lock unlock", () => {
      w();
    }), i("click", (h, p) => {
      const b = p.target, x = Y(e.pagination.el);
      if (e.params.pagination.el && e.params.pagination.hideOnClick && x && x.length > 0 && !b.classList.contains(e.params.pagination.bulletClass)) {
        if (e.navigation && (e.navigation.nextEl && b === e.navigation.nextEl || e.navigation.prevEl && b === e.navigation.prevEl)) return;
        const $ = x[0].classList.contains(e.params.pagination.hiddenClass);
        a($ === !0 ? "paginationShow" : "paginationHide"), x.forEach((A) => A.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
    const v = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let {
        el: h
      } = e.pagination;
      h && (h = Y(h), h.forEach((p) => p.classList.remove(e.params.pagination.paginationDisabledClass))), n(), g(), w();
    }, y = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let {
        el: h
      } = e.pagination;
      h && (h = Y(h), h.forEach((p) => p.classList.add(e.params.pagination.paginationDisabledClass))), l();
    };
    Object.assign(e.pagination, {
      enable: v,
      disable: y,
      render: g,
      update: w,
      init: n,
      destroy: l
    });
  }
  function Fs(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i,
      emit: a
    } = s;
    const r = N();
    let c = !1, d = null, u = null, o, f, m, w;
    t({
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag",
        scrollbarDisabledClass: "swiper-scrollbar-disabled",
        horizontalClass: "swiper-scrollbar-horizontal",
        verticalClass: "swiper-scrollbar-vertical"
      }
    }), e.scrollbar = {
      el: null,
      dragEl: null
    };
    function g() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const {
        scrollbar: P,
        rtlTranslate: C
      } = e, {
        dragEl: I,
        el: D
      } = P, H = e.params.scrollbar, S = e.params.loop ? e.progressLoop : e.progress;
      let E = f, B = (m - f) * S;
      C ? (B = -B, B > 0 ? (E = f - B, B = 0) : -B + f > m && (E = m + B)) : B < 0 ? (E = f + B, B = 0) : B + f > m && (E = m - B), e.isHorizontal() ? (I.style.transform = `translate3d(${B}px, 0, 0)`, I.style.width = `${E}px`) : (I.style.transform = `translate3d(0px, ${B}px, 0)`, I.style.height = `${E}px`), H.hide && (clearTimeout(d), D.style.opacity = 1, d = setTimeout(() => {
        D.style.opacity = 0, D.style.transitionDuration = "400ms";
      }, 1e3));
    }
    function n(P) {
      !e.params.scrollbar.el || !e.scrollbar.el || (e.scrollbar.dragEl.style.transitionDuration = `${P}ms`);
    }
    function l() {
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      const {
        scrollbar: P
      } = e, {
        dragEl: C,
        el: I
      } = P;
      C.style.width = "", C.style.height = "", m = e.isHorizontal() ? I.offsetWidth : I.offsetHeight, w = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), e.params.scrollbar.dragSize === "auto" ? f = m * w : f = parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? C.style.width = `${f}px` : C.style.height = `${f}px`, w >= 1 ? I.style.display = "none" : I.style.display = "", e.params.scrollbar.hide && (I.style.opacity = 0), e.params.watchOverflow && e.enabled && P.el.classList[e.isLocked ? "add" : "remove"](e.params.scrollbar.lockClass);
    }
    function v(P) {
      return e.isHorizontal() ? P.clientX : P.clientY;
    }
    function y(P) {
      const {
        scrollbar: C,
        rtlTranslate: I
      } = e, {
        el: D
      } = C;
      let H;
      H = (v(P) - Ae(D)[e.isHorizontal() ? "left" : "top"] - (o !== null ? o : f / 2)) / (m - f), H = Math.max(Math.min(H, 1), 0), I && (H = 1 - H);
      const S = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * H;
      e.updateProgress(S), e.setTranslate(S), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    function h(P) {
      const C = e.params.scrollbar, {
        scrollbar: I,
        wrapperEl: D
      } = e, {
        el: H,
        dragEl: S
      } = I;
      c = !0, o = P.target === S ? v(P) - P.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, P.preventDefault(), P.stopPropagation(), D.style.transitionDuration = "100ms", S.style.transitionDuration = "100ms", y(P), clearTimeout(u), H.style.transitionDuration = "0ms", C.hide && (H.style.opacity = 1), e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"), a("scrollbarDragStart", P);
    }
    function p(P) {
      const {
        scrollbar: C,
        wrapperEl: I
      } = e, {
        el: D,
        dragEl: H
      } = C;
      c && (P.preventDefault && P.cancelable ? P.preventDefault() : P.returnValue = !1, y(P), I.style.transitionDuration = "0ms", D.style.transitionDuration = "0ms", H.style.transitionDuration = "0ms", a("scrollbarDragMove", P));
    }
    function b(P) {
      const C = e.params.scrollbar, {
        scrollbar: I,
        wrapperEl: D
      } = e, {
        el: H
      } = I;
      c && (c = !1, e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "", D.style.transitionDuration = ""), C.hide && (clearTimeout(u), u = de(() => {
        H.style.opacity = 0, H.style.transitionDuration = "400ms";
      }, 1e3)), a("scrollbarDragEnd", P), C.snapOnRelease && e.slideToClosest());
    }
    function x(P) {
      const {
        scrollbar: C,
        params: I
      } = e, D = C.el;
      if (!D) return;
      const H = D, S = I.passiveListeners ? {
        passive: !1,
        capture: !1
      } : !1, E = I.passiveListeners ? {
        passive: !0,
        capture: !1
      } : !1;
      if (!H) return;
      const B = P === "on" ? "addEventListener" : "removeEventListener";
      H[B]("pointerdown", h, S), r[B]("pointermove", p, S), r[B]("pointerup", b, E);
    }
    function $() {
      !e.params.scrollbar.el || !e.scrollbar.el || x("on");
    }
    function A() {
      !e.params.scrollbar.el || !e.scrollbar.el || x("off");
    }
    function z() {
      const {
        scrollbar: P,
        el: C
      } = e;
      e.params.scrollbar = Ue(e, e.originalParams.scrollbar, e.params.scrollbar, {
        el: "swiper-scrollbar"
      });
      const I = e.params.scrollbar;
      if (!I.el) return;
      let D;
      if (typeof I.el == "string" && e.isElement && (D = e.el.querySelector(I.el)), !D && typeof I.el == "string") {
        if (D = r.querySelectorAll(I.el), !D.length) return;
      } else D || (D = I.el);
      e.params.uniqueNavElements && typeof I.el == "string" && D.length > 1 && C.querySelectorAll(I.el).length === 1 && (D = C.querySelector(I.el)), D.length > 0 && (D = D[0]), D.classList.add(e.isHorizontal() ? I.horizontalClass : I.verticalClass);
      let H;
      D && (H = D.querySelector(te(e.params.scrollbar.dragClass)), H || (H = K("div", e.params.scrollbar.dragClass), D.append(H))), Object.assign(P, {
        el: D,
        dragEl: H
      }), I.draggable && $(), D && D.classList[e.enabled ? "remove" : "add"](...ie(e.params.scrollbar.lockClass));
    }
    function M() {
      const P = e.params.scrollbar, C = e.scrollbar.el;
      C && C.classList.remove(...ie(e.isHorizontal() ? P.horizontalClass : P.verticalClass)), A();
    }
    i("changeDirection", () => {
      if (!e.scrollbar || !e.scrollbar.el) return;
      const P = e.params.scrollbar;
      let {
        el: C
      } = e.scrollbar;
      C = Y(C), C.forEach((I) => {
        I.classList.remove(P.horizontalClass, P.verticalClass), I.classList.add(e.isHorizontal() ? P.horizontalClass : P.verticalClass);
      });
    }), i("init", () => {
      e.params.scrollbar.enabled === !1 ? L() : (z(), l(), g());
    }), i("update resize observerUpdate lock unlock changeDirection", () => {
      l();
    }), i("setTranslate", () => {
      g();
    }), i("setTransition", (P, C) => {
      n(C);
    }), i("enable disable", () => {
      const {
        el: P
      } = e.scrollbar;
      P && P.classList[e.enabled ? "remove" : "add"](...ie(e.params.scrollbar.lockClass));
    }), i("destroy", () => {
      M();
    });
    const T = () => {
      e.el.classList.remove(...ie(e.params.scrollbar.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.remove(...ie(e.params.scrollbar.scrollbarDisabledClass)), z(), l(), g();
    }, L = () => {
      e.el.classList.add(...ie(e.params.scrollbar.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.add(...ie(e.params.scrollbar.scrollbarDisabledClass)), M();
    };
    Object.assign(e.scrollbar, {
      enable: T,
      disable: L,
      updateSize: l,
      setTranslate: g,
      init: z,
      destroy: M
    });
  }
  function qs(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i
    } = s;
    t({
      parallax: {
        enabled: !1
      }
    });
    const a = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]", r = (u, o) => {
      const {
        rtl: f
      } = e, m = f ? -1 : 1, w = u.getAttribute("data-swiper-parallax") || "0";
      let g = u.getAttribute("data-swiper-parallax-x"), n = u.getAttribute("data-swiper-parallax-y");
      const l = u.getAttribute("data-swiper-parallax-scale"), v = u.getAttribute("data-swiper-parallax-opacity"), y = u.getAttribute("data-swiper-parallax-rotate");
      if (g || n ? (g = g || "0", n = n || "0") : e.isHorizontal() ? (g = w, n = "0") : (n = w, g = "0"), g.indexOf("%") >= 0 ? g = `${parseInt(g, 10) * o * m}%` : g = `${g * o * m}px`, n.indexOf("%") >= 0 ? n = `${parseInt(n, 10) * o}%` : n = `${n * o}px`, typeof v < "u" && v !== null) {
        const p = v - (v - 1) * (1 - Math.abs(o));
        u.style.opacity = p;
      }
      let h = `translate3d(${g}, ${n}, 0px)`;
      if (typeof l < "u" && l !== null) {
        const p = l - (l - 1) * (1 - Math.abs(o));
        h += ` scale(${p})`;
      }
      if (y && typeof y < "u" && y !== null) {
        const p = y * o * -1;
        h += ` rotate(${p}deg)`;
      }
      u.style.transform = h;
    }, c = () => {
      const {
        el: u,
        slides: o,
        progress: f,
        snapGrid: m,
        isElement: w
      } = e, g = q(u, a);
      e.isElement && g.push(...q(e.hostEl, a)), g.forEach((n) => {
        r(n, f);
      }), o.forEach((n, l) => {
        let v = n.progress;
        e.params.slidesPerGroup > 1 && e.params.slidesPerView !== "auto" && (v += Math.ceil(l / 2) - f * (m.length - 1)), v = Math.min(Math.max(v, -1), 1), n.querySelectorAll(`${a}, [data-swiper-parallax-rotate]`).forEach((y) => {
          r(y, v);
        });
      });
    }, d = function(u) {
      u === void 0 && (u = e.params.speed);
      const {
        el: o,
        hostEl: f
      } = e, m = [...o.querySelectorAll(a)];
      e.isElement && m.push(...f.querySelectorAll(a)), m.forEach((w) => {
        let g = parseInt(w.getAttribute("data-swiper-parallax-duration"), 10) || u;
        u === 0 && (g = 0), w.style.transitionDuration = `${g}ms`;
      });
    };
    i("beforeInit", () => {
      e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
    }), i("init", () => {
      e.params.parallax.enabled && c();
    }), i("setTranslate", () => {
      e.params.parallax.enabled && c();
    }), i("setTransition", (u, o) => {
      e.params.parallax.enabled && d(o);
    });
  }
  function Ws(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i,
      emit: a
    } = s;
    const r = _();
    t({
      zoom: {
        enabled: !1,
        limitToOriginalSize: !1,
        maxRatio: 3,
        minRatio: 1,
        panOnMouseMove: !1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    }), e.zoom = {
      enabled: !1
    };
    let c = 1, d = !1, u = !1, o = {
      x: 0,
      y: 0
    };
    const f = -3;
    let m, w;
    const g = [], n = {
      originX: 0,
      originY: 0,
      slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      imageEl: void 0,
      imageWrapEl: void 0,
      maxRatio: 3
    }, l = {
      isTouched: void 0,
      isMoved: void 0,
      currentX: void 0,
      currentY: void 0,
      minX: void 0,
      minY: void 0,
      maxX: void 0,
      maxY: void 0,
      width: void 0,
      height: void 0,
      startX: void 0,
      startY: void 0,
      touchesStart: {},
      touchesCurrent: {}
    }, v = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0
    };
    let y = 1;
    Object.defineProperty(e.zoom, "scale", {
      get() {
        return y;
      },
      set(k) {
        if (y !== k) {
          const O = n.imageEl, G = n.slideEl;
          a("zoomChange", k, O, G);
        }
        y = k;
      }
    });
    function h() {
      if (g.length < 2) return 1;
      const k = g[0].pageX, O = g[0].pageY, G = g[1].pageX, R = g[1].pageY;
      return Math.sqrt((G - k) ** 2 + (R - O) ** 2);
    }
    function p() {
      const k = e.params.zoom, O = n.imageWrapEl.getAttribute("data-swiper-zoom") || k.maxRatio;
      if (k.limitToOriginalSize && n.imageEl && n.imageEl.naturalWidth) {
        const G = n.imageEl.naturalWidth / n.imageEl.offsetWidth;
        return Math.min(G, O);
      }
      return O;
    }
    function b() {
      if (g.length < 2) return {
        x: null,
        y: null
      };
      const k = n.imageEl.getBoundingClientRect();
      return [(g[0].pageX + (g[1].pageX - g[0].pageX) / 2 - k.x - r.scrollX) / c, (g[0].pageY + (g[1].pageY - g[0].pageY) / 2 - k.y - r.scrollY) / c];
    }
    function x() {
      return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
    }
    function $(k) {
      const O = x();
      return !!(k.target.matches(O) || e.slides.filter((G) => G.contains(k.target)).length > 0);
    }
    function A(k) {
      const O = `.${e.params.zoom.containerClass}`;
      return !!(k.target.matches(O) || [...e.hostEl.querySelectorAll(O)].filter((G) => G.contains(k.target)).length > 0);
    }
    function z(k) {
      if (k.pointerType === "mouse" && g.splice(0, g.length), !$(k)) return;
      const O = e.params.zoom;
      if (m = !1, w = !1, g.push(k), !(g.length < 2)) {
        if (m = !0, n.scaleStart = h(), !n.slideEl) {
          n.slideEl = k.target.closest(`.${e.params.slideClass}, swiper-slide`), n.slideEl || (n.slideEl = e.slides[e.activeIndex]);
          let G = n.slideEl.querySelector(`.${O.containerClass}`);
          if (G && (G = G.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), n.imageEl = G, G ? n.imageWrapEl = fe(n.imageEl, `.${O.containerClass}`)[0] : n.imageWrapEl = void 0, !n.imageWrapEl) {
            n.imageEl = void 0;
            return;
          }
          n.maxRatio = p();
        }
        if (n.imageEl) {
          const [G, R] = b();
          n.originX = G, n.originY = R, n.imageEl.style.transitionDuration = "0ms";
        }
        d = !0;
      }
    }
    function M(k) {
      if (!$(k)) return;
      const O = e.params.zoom, G = e.zoom, R = g.findIndex((W) => W.pointerId === k.pointerId);
      R >= 0 && (g[R] = k), !(g.length < 2) && (w = !0, n.scaleMove = h(), n.imageEl && (G.scale = n.scaleMove / n.scaleStart * c, G.scale > n.maxRatio && (G.scale = n.maxRatio - 1 + (G.scale - n.maxRatio + 1) ** 0.5), G.scale < O.minRatio && (G.scale = O.minRatio + 1 - (O.minRatio - G.scale + 1) ** 0.5), n.imageEl.style.transform = `translate3d(0,0,0) scale(${G.scale})`));
    }
    function T(k) {
      if (!$(k) || k.pointerType === "mouse" && k.type === "pointerout") return;
      const O = e.params.zoom, G = e.zoom, R = g.findIndex((W) => W.pointerId === k.pointerId);
      R >= 0 && g.splice(R, 1), !(!m || !w) && (m = !1, w = !1, n.imageEl && (G.scale = Math.max(Math.min(G.scale, n.maxRatio), O.minRatio), n.imageEl.style.transitionDuration = `${e.params.speed}ms`, n.imageEl.style.transform = `translate3d(0,0,0) scale(${G.scale})`, c = G.scale, d = !1, G.scale > 1 && n.slideEl ? n.slideEl.classList.add(`${O.zoomedSlideClass}`) : G.scale <= 1 && n.slideEl && n.slideEl.classList.remove(`${O.zoomedSlideClass}`), G.scale === 1 && (n.originX = 0, n.originY = 0, n.slideEl = void 0)));
    }
    let L;
    function P() {
      e.touchEventsData.preventTouchMoveFromPointerMove = !1;
    }
    function C() {
      clearTimeout(L), e.touchEventsData.preventTouchMoveFromPointerMove = !0, L = setTimeout(() => {
        e.destroyed || P();
      });
    }
    function I(k) {
      const O = e.device;
      if (!n.imageEl || l.isTouched) return;
      O.android && k.cancelable && k.preventDefault(), l.isTouched = !0;
      const G = g.length > 0 ? g[0] : k;
      l.touchesStart.x = G.pageX, l.touchesStart.y = G.pageY;
    }
    function D(k) {
      const G = k.pointerType === "mouse" && e.params.zoom.panOnMouseMove;
      if (!$(k) || !A(k))
        return;
      const R = e.zoom;
      if (!n.imageEl)
        return;
      if (!l.isTouched || !n.slideEl) {
        G && E(k);
        return;
      }
      if (G) {
        E(k);
        return;
      }
      l.isMoved || (l.width = n.imageEl.offsetWidth || n.imageEl.clientWidth, l.height = n.imageEl.offsetHeight || n.imageEl.clientHeight, l.startX = Xe(n.imageWrapEl, "x") || 0, l.startY = Xe(n.imageWrapEl, "y") || 0, n.slideWidth = n.slideEl.offsetWidth, n.slideHeight = n.slideEl.offsetHeight, n.imageWrapEl.style.transitionDuration = "0ms");
      const W = l.width * R.scale, ae = l.height * R.scale;
      if (l.minX = Math.min(n.slideWidth / 2 - W / 2, 0), l.maxX = -l.minX, l.minY = Math.min(n.slideHeight / 2 - ae / 2, 0), l.maxY = -l.minY, l.touchesCurrent.x = g.length > 0 ? g[0].pageX : k.pageX, l.touchesCurrent.y = g.length > 0 ? g[0].pageY : k.pageY, Math.max(Math.abs(l.touchesCurrent.x - l.touchesStart.x), Math.abs(l.touchesCurrent.y - l.touchesStart.y)) > 5 && (e.allowClick = !1), !l.isMoved && !d) {
        if (e.isHorizontal() && (Math.floor(l.minX) === Math.floor(l.startX) && l.touchesCurrent.x < l.touchesStart.x || Math.floor(l.maxX) === Math.floor(l.startX) && l.touchesCurrent.x > l.touchesStart.x)) {
          l.isTouched = !1, P();
          return;
        }
        if (!e.isHorizontal() && (Math.floor(l.minY) === Math.floor(l.startY) && l.touchesCurrent.y < l.touchesStart.y || Math.floor(l.maxY) === Math.floor(l.startY) && l.touchesCurrent.y > l.touchesStart.y)) {
          l.isTouched = !1, P();
          return;
        }
      }
      k.cancelable && k.preventDefault(), k.stopPropagation(), C(), l.isMoved = !0;
      const se = (R.scale - c) / (n.maxRatio - e.params.zoom.minRatio), {
        originX: le,
        originY: j
      } = n;
      l.currentX = l.touchesCurrent.x - l.touchesStart.x + l.startX + se * (l.width - le * 2), l.currentY = l.touchesCurrent.y - l.touchesStart.y + l.startY + se * (l.height - j * 2), l.currentX < l.minX && (l.currentX = l.minX + 1 - (l.minX - l.currentX + 1) ** 0.8), l.currentX > l.maxX && (l.currentX = l.maxX - 1 + (l.currentX - l.maxX + 1) ** 0.8), l.currentY < l.minY && (l.currentY = l.minY + 1 - (l.minY - l.currentY + 1) ** 0.8), l.currentY > l.maxY && (l.currentY = l.maxY - 1 + (l.currentY - l.maxY + 1) ** 0.8), v.prevPositionX || (v.prevPositionX = l.touchesCurrent.x), v.prevPositionY || (v.prevPositionY = l.touchesCurrent.y), v.prevTime || (v.prevTime = Date.now()), v.x = (l.touchesCurrent.x - v.prevPositionX) / (Date.now() - v.prevTime) / 2, v.y = (l.touchesCurrent.y - v.prevPositionY) / (Date.now() - v.prevTime) / 2, Math.abs(l.touchesCurrent.x - v.prevPositionX) < 2 && (v.x = 0), Math.abs(l.touchesCurrent.y - v.prevPositionY) < 2 && (v.y = 0), v.prevPositionX = l.touchesCurrent.x, v.prevPositionY = l.touchesCurrent.y, v.prevTime = Date.now(), n.imageWrapEl.style.transform = `translate3d(${l.currentX}px, ${l.currentY}px,0)`;
    }
    function H() {
      const k = e.zoom;
      if (g.length = 0, !n.imageEl) return;
      if (!l.isTouched || !l.isMoved) {
        l.isTouched = !1, l.isMoved = !1;
        return;
      }
      l.isTouched = !1, l.isMoved = !1;
      let O = 300, G = 300;
      const R = v.x * O, W = l.currentX + R, ae = v.y * G, ne = l.currentY + ae;
      v.x !== 0 && (O = Math.abs((W - l.currentX) / v.x)), v.y !== 0 && (G = Math.abs((ne - l.currentY) / v.y));
      const se = Math.max(O, G);
      l.currentX = W, l.currentY = ne;
      const le = l.width * k.scale, j = l.height * k.scale;
      l.minX = Math.min(n.slideWidth / 2 - le / 2, 0), l.maxX = -l.minX, l.minY = Math.min(n.slideHeight / 2 - j / 2, 0), l.maxY = -l.minY, l.currentX = Math.max(Math.min(l.currentX, l.maxX), l.minX), l.currentY = Math.max(Math.min(l.currentY, l.maxY), l.minY), n.imageWrapEl.style.transitionDuration = `${se}ms`, n.imageWrapEl.style.transform = `translate3d(${l.currentX}px, ${l.currentY}px,0)`;
    }
    function S() {
      const k = e.zoom;
      n.slideEl && e.activeIndex !== e.slides.indexOf(n.slideEl) && (n.imageEl && (n.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), n.imageWrapEl && (n.imageWrapEl.style.transform = "translate3d(0,0,0)"), n.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`), k.scale = 1, c = 1, n.slideEl = void 0, n.imageEl = void 0, n.imageWrapEl = void 0, n.originX = 0, n.originY = 0);
    }
    function E(k) {
      if (c <= 1 || !n.imageWrapEl || !$(k) || !A(k)) return;
      const O = r.getComputedStyle(n.imageWrapEl).transform, G = new r.DOMMatrix(O);
      if (!u) {
        u = !0, o.x = k.clientX, o.y = k.clientY, l.startX = G.e, l.startY = G.f, l.width = n.imageEl.offsetWidth || n.imageEl.clientWidth, l.height = n.imageEl.offsetHeight || n.imageEl.clientHeight, n.slideWidth = n.slideEl.offsetWidth, n.slideHeight = n.slideEl.offsetHeight;
        return;
      }
      const R = (k.clientX - o.x) * f, W = (k.clientY - o.y) * f, ae = l.width * c, ne = l.height * c, se = n.slideWidth, le = n.slideHeight, j = Math.min(se / 2 - ae / 2, 0), J = -j, Me = Math.min(le / 2 - ne / 2, 0), De = -Me, me = Math.max(Math.min(l.startX + R, J), j), he = Math.max(Math.min(l.startY + W, De), Me);
      n.imageWrapEl.style.transitionDuration = "0ms", n.imageWrapEl.style.transform = `translate3d(${me}px, ${he}px, 0)`, o.x = k.clientX, o.y = k.clientY, l.startX = me, l.startY = he, l.currentX = me, l.currentY = he;
    }
    function B(k) {
      const O = e.zoom, G = e.params.zoom;
      if (!n.slideEl) {
        k && k.target && (n.slideEl = k.target.closest(`.${e.params.slideClass}, swiper-slide`)), n.slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? n.slideEl = q(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : n.slideEl = e.slides[e.activeIndex]);
        let Ce = n.slideEl.querySelector(`.${G.containerClass}`);
        Ce && (Ce = Ce.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), n.imageEl = Ce, Ce ? n.imageWrapEl = fe(n.imageEl, `.${G.containerClass}`)[0] : n.imageWrapEl = void 0;
      }
      if (!n.imageEl || !n.imageWrapEl) return;
      e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), n.slideEl.classList.add(`${G.zoomedSlideClass}`);
      let R, W, ae, ne, se, le, j, J, Me, De, me, he, ke, He, Ke, Ze, Qe, Je;
      typeof l.touchesStart.x > "u" && k ? (R = k.pageX, W = k.pageY) : (R = l.touchesStart.x, W = l.touchesStart.y);
      const et = c, ge = typeof k == "number" ? k : null;
      c === 1 && ge && (R = void 0, W = void 0, l.touchesStart.x = void 0, l.touchesStart.y = void 0);
      const ht = p();
      O.scale = ge || ht, c = ge || ht, k && !(c === 1 && ge) ? (Qe = n.slideEl.offsetWidth, Je = n.slideEl.offsetHeight, ae = Ae(n.slideEl).left + r.scrollX, ne = Ae(n.slideEl).top + r.scrollY, se = ae + Qe / 2 - R, le = ne + Je / 2 - W, Me = n.imageEl.offsetWidth || n.imageEl.clientWidth, De = n.imageEl.offsetHeight || n.imageEl.clientHeight, me = Me * O.scale, he = De * O.scale, ke = Math.min(Qe / 2 - me / 2, 0), He = Math.min(Je / 2 - he / 2, 0), Ke = -ke, Ze = -He, et > 0 && ge && typeof l.currentX == "number" && typeof l.currentY == "number" ? (j = l.currentX * O.scale / et, J = l.currentY * O.scale / et) : (j = se * O.scale, J = le * O.scale), j < ke && (j = ke), j > Ke && (j = Ke), J < He && (J = He), J > Ze && (J = Ze)) : (j = 0, J = 0), ge && O.scale === 1 && (n.originX = 0, n.originY = 0), l.currentX = j, l.currentY = J, n.imageWrapEl.style.transitionDuration = "300ms", n.imageWrapEl.style.transform = `translate3d(${j}px, ${J}px,0)`, n.imageEl.style.transitionDuration = "300ms", n.imageEl.style.transform = `translate3d(0,0,0) scale(${O.scale})`;
    }
    function X() {
      const k = e.zoom, O = e.params.zoom;
      if (!n.slideEl) {
        e.params.virtual && e.params.virtual.enabled && e.virtual ? n.slideEl = q(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : n.slideEl = e.slides[e.activeIndex];
        let G = n.slideEl.querySelector(`.${O.containerClass}`);
        G && (G = G.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), n.imageEl = G, G ? n.imageWrapEl = fe(n.imageEl, `.${O.containerClass}`)[0] : n.imageWrapEl = void 0;
      }
      !n.imageEl || !n.imageWrapEl || (e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), k.scale = 1, c = 1, l.currentX = void 0, l.currentY = void 0, l.touchesStart.x = void 0, l.touchesStart.y = void 0, n.imageWrapEl.style.transitionDuration = "300ms", n.imageWrapEl.style.transform = "translate3d(0,0,0)", n.imageEl.style.transitionDuration = "300ms", n.imageEl.style.transform = "translate3d(0,0,0) scale(1)", n.slideEl.classList.remove(`${O.zoomedSlideClass}`), n.slideEl = void 0, n.originX = 0, n.originY = 0, e.params.zoom.panOnMouseMove && (o = {
        x: 0,
        y: 0
      }, u && (u = !1, l.startX = 0, l.startY = 0)));
    }
    function V(k) {
      const O = e.zoom;
      O.scale && O.scale !== 1 ? X() : B(k);
    }
    function F() {
      const k = e.params.passiveListeners ? {
        passive: !0,
        capture: !1
      } : !1, O = e.params.passiveListeners ? {
        passive: !1,
        capture: !0
      } : !0;
      return {
        passiveListener: k,
        activeListenerWithCapture: O
      };
    }
    function ee() {
      const k = e.zoom;
      if (k.enabled) return;
      k.enabled = !0;
      const {
        passiveListener: O,
        activeListenerWithCapture: G
      } = F();
      e.wrapperEl.addEventListener("pointerdown", z, O), e.wrapperEl.addEventListener("pointermove", M, G), ["pointerup", "pointercancel", "pointerout"].forEach((R) => {
        e.wrapperEl.addEventListener(R, T, O);
      }), e.wrapperEl.addEventListener("pointermove", D, G);
    }
    function Te() {
      const k = e.zoom;
      if (!k.enabled) return;
      k.enabled = !1;
      const {
        passiveListener: O,
        activeListenerWithCapture: G
      } = F();
      e.wrapperEl.removeEventListener("pointerdown", z, O), e.wrapperEl.removeEventListener("pointermove", M, G), ["pointerup", "pointercancel", "pointerout"].forEach((R) => {
        e.wrapperEl.removeEventListener(R, T, O);
      }), e.wrapperEl.removeEventListener("pointermove", D, G);
    }
    i("init", () => {
      e.params.zoom.enabled && ee();
    }), i("destroy", () => {
      Te();
    }), i("touchStart", (k, O) => {
      e.zoom.enabled && I(O);
    }), i("touchEnd", (k, O) => {
      e.zoom.enabled && H();
    }), i("doubleTap", (k, O) => {
      !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && V(O);
    }), i("transitionEnd", () => {
      e.zoom.enabled && e.params.zoom.enabled && S();
    }), i("slideChange", () => {
      e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && S();
    }), Object.assign(e.zoom, {
      enable: ee,
      disable: Te,
      in: B,
      out: X,
      toggle: V
    });
  }
  function js(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i
    } = s;
    t({
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
        // or 'container'
      }
    }), e.controller = {
      control: void 0
    };
    function a(o, f) {
      const m = /* @__PURE__ */ function() {
        let l, v, y;
        return (h, p) => {
          for (v = -1, l = h.length; l - v > 1; )
            y = l + v >> 1, h[y] <= p ? v = y : l = y;
          return l;
        };
      }();
      this.x = o, this.y = f, this.lastIndex = o.length - 1;
      let w, g;
      return this.interpolate = function(l) {
        return l ? (g = m(this.x, l), w = g - 1, (l - this.x[w]) * (this.y[g] - this.y[w]) / (this.x[g] - this.x[w]) + this.y[w]) : 0;
      }, this;
    }
    function r(o) {
      e.controller.spline = e.params.loop ? new a(e.slidesGrid, o.slidesGrid) : new a(e.snapGrid, o.snapGrid);
    }
    function c(o, f) {
      const m = e.controller.control;
      let w, g;
      const n = e.constructor;
      function l(v) {
        if (v.destroyed) return;
        const y = e.rtlTranslate ? -e.translate : e.translate;
        e.params.controller.by === "slide" && (r(v), g = -e.controller.spline.interpolate(-y)), (!g || e.params.controller.by === "container") && (w = (v.maxTranslate() - v.minTranslate()) / (e.maxTranslate() - e.minTranslate()), (Number.isNaN(w) || !Number.isFinite(w)) && (w = 1), g = (y - e.minTranslate()) * w + v.minTranslate()), e.params.controller.inverse && (g = v.maxTranslate() - g), v.updateProgress(g), v.setTranslate(g, e), v.updateActiveIndex(), v.updateSlidesClasses();
      }
      if (Array.isArray(m))
        for (let v = 0; v < m.length; v += 1)
          m[v] !== f && m[v] instanceof n && l(m[v]);
      else m instanceof n && f !== m && l(m);
    }
    function d(o, f) {
      const m = e.constructor, w = e.controller.control;
      let g;
      function n(l) {
        l.destroyed || (l.setTransition(o, e), o !== 0 && (l.transitionStart(), l.params.autoHeight && de(() => {
          l.updateAutoHeight();
        }), xe(l.wrapperEl, () => {
          w && l.transitionEnd();
        })));
      }
      if (Array.isArray(w))
        for (g = 0; g < w.length; g += 1)
          w[g] !== f && w[g] instanceof m && n(w[g]);
      else w instanceof m && f !== w && n(w);
    }
    function u() {
      e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
    }
    i("beforeInit", () => {
      if (typeof window < "u" && // eslint-disable-line
      (typeof e.params.controller.control == "string" || e.params.controller.control instanceof HTMLElement)) {
        (typeof e.params.controller.control == "string" ? [...document.querySelectorAll(e.params.controller.control)] : [e.params.controller.control]).forEach((f) => {
          if (e.controller.control || (e.controller.control = []), f && f.swiper)
            e.controller.control.push(f.swiper);
          else if (f) {
            const m = `${e.params.eventsPrefix}init`, w = (g) => {
              e.controller.control.push(g.detail[0]), e.update(), f.removeEventListener(m, w);
            };
            f.addEventListener(m, w);
          }
        });
        return;
      }
      e.controller.control = e.params.controller.control;
    }), i("update", () => {
      u();
    }), i("resize", () => {
      u();
    }), i("observerUpdate", () => {
      u();
    }), i("setTranslate", (o, f, m) => {
      !e.controller.control || e.controller.control.destroyed || e.controller.setTranslate(f, m);
    }), i("setTransition", (o, f, m) => {
      !e.controller.control || e.controller.control.destroyed || e.controller.setTransition(f, m);
    }), Object.assign(e.controller, {
      setTranslate: c,
      setTransition: d
    });
  }
  function Us(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i
    } = s;
    t({
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}",
        slideLabelMessage: "{{index}} / {{slidesLength}}",
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        containerRole: null,
        itemRoleDescriptionMessage: null,
        slideRole: "group",
        id: null,
        scrollOnFocus: !0
      }
    }), e.a11y = {
      clicked: !1
    };
    let a = null, r, c, d = (/* @__PURE__ */ new Date()).getTime();
    function u(S) {
      const E = a;
      E.length !== 0 && (E.innerHTML = "", E.innerHTML = S);
    }
    function o(S) {
      const E = () => Math.round(16 * Math.random()).toString(16);
      return "x".repeat(S).replace(/x/g, E);
    }
    function f(S) {
      S = Y(S), S.forEach((E) => {
        E.setAttribute("tabIndex", "0");
      });
    }
    function m(S) {
      S = Y(S), S.forEach((E) => {
        E.setAttribute("tabIndex", "-1");
      });
    }
    function w(S, E) {
      S = Y(S), S.forEach((B) => {
        B.setAttribute("role", E);
      });
    }
    function g(S, E) {
      S = Y(S), S.forEach((B) => {
        B.setAttribute("aria-roledescription", E);
      });
    }
    function n(S, E) {
      S = Y(S), S.forEach((B) => {
        B.setAttribute("aria-controls", E);
      });
    }
    function l(S, E) {
      S = Y(S), S.forEach((B) => {
        B.setAttribute("aria-label", E);
      });
    }
    function v(S, E) {
      S = Y(S), S.forEach((B) => {
        B.setAttribute("id", E);
      });
    }
    function y(S, E) {
      S = Y(S), S.forEach((B) => {
        B.setAttribute("aria-live", E);
      });
    }
    function h(S) {
      S = Y(S), S.forEach((E) => {
        E.setAttribute("aria-disabled", !0);
      });
    }
    function p(S) {
      S = Y(S), S.forEach((E) => {
        E.setAttribute("aria-disabled", !1);
      });
    }
    function b(S) {
      if (S.keyCode !== 13 && S.keyCode !== 32) return;
      const E = e.params.a11y, B = S.target;
      if (!(e.pagination && e.pagination.el && (B === e.pagination.el || e.pagination.el.contains(S.target)) && !S.target.matches(te(e.params.pagination.bulletClass)))) {
        if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
          const X = Y(e.navigation.prevEl);
          Y(e.navigation.nextEl).includes(B) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? u(E.lastSlideMessage) : u(E.nextSlideMessage)), X.includes(B) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? u(E.firstSlideMessage) : u(E.prevSlideMessage));
        }
        e.pagination && B.matches(te(e.params.pagination.bulletClass)) && B.click();
      }
    }
    function x() {
      if (e.params.loop || e.params.rewind || !e.navigation) return;
      const {
        nextEl: S,
        prevEl: E
      } = e.navigation;
      E && (e.isBeginning ? (h(E), m(E)) : (p(E), f(E))), S && (e.isEnd ? (h(S), m(S)) : (p(S), f(S)));
    }
    function $() {
      return e.pagination && e.pagination.bullets && e.pagination.bullets.length;
    }
    function A() {
      return $() && e.params.pagination.clickable;
    }
    function z() {
      const S = e.params.a11y;
      $() && e.pagination.bullets.forEach((E) => {
        e.params.pagination.clickable && (f(E), e.params.pagination.renderBullet || (w(E, "button"), l(E, S.paginationBulletMessage.replace(/\{\{index\}\}/, Se(E) + 1)))), E.matches(te(e.params.pagination.bulletActiveClass)) ? E.setAttribute("aria-current", "true") : E.removeAttribute("aria-current");
      });
    }
    const M = (S, E, B) => {
      f(S), S.tagName !== "BUTTON" && (w(S, "button"), S.addEventListener("keydown", b)), l(S, B), n(S, E);
    }, T = (S) => {
      c && c !== S.target && !c.contains(S.target) && (r = !0), e.a11y.clicked = !0;
    }, L = () => {
      r = !1, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          e.destroyed || (e.a11y.clicked = !1);
        });
      });
    }, P = (S) => {
      d = (/* @__PURE__ */ new Date()).getTime();
    }, C = (S) => {
      if (e.a11y.clicked || !e.params.a11y.scrollOnFocus || (/* @__PURE__ */ new Date()).getTime() - d < 100) return;
      const E = S.target.closest(`.${e.params.slideClass}, swiper-slide`);
      if (!E || !e.slides.includes(E)) return;
      c = E;
      const B = e.slides.indexOf(E) === e.activeIndex, X = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(E);
      B || X || S.sourceCapabilities && S.sourceCapabilities.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0, requestAnimationFrame(() => {
        r || (e.params.loop ? e.slideToLoop(parseInt(E.getAttribute("data-swiper-slide-index")), 0) : e.slideTo(e.slides.indexOf(E), 0), r = !1);
      }));
    }, I = () => {
      const S = e.params.a11y;
      S.itemRoleDescriptionMessage && g(e.slides, S.itemRoleDescriptionMessage), S.slideRole && w(e.slides, S.slideRole);
      const E = e.slides.length;
      S.slideLabelMessage && e.slides.forEach((B, X) => {
        const V = e.params.loop ? parseInt(B.getAttribute("data-swiper-slide-index"), 10) : X, F = S.slideLabelMessage.replace(/\{\{index\}\}/, V + 1).replace(/\{\{slidesLength\}\}/, E);
        l(B, F);
      });
    }, D = () => {
      const S = e.params.a11y;
      e.el.append(a);
      const E = e.el;
      S.containerRoleDescriptionMessage && g(E, S.containerRoleDescriptionMessage), S.containerMessage && l(E, S.containerMessage), S.containerRole && w(E, S.containerRole);
      const B = e.wrapperEl, X = S.id || B.getAttribute("id") || `swiper-wrapper-${o(16)}`, V = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
      v(B, X), y(B, V), I();
      let {
        nextEl: F,
        prevEl: ee
      } = e.navigation ? e.navigation : {};
      F = Y(F), ee = Y(ee), F && F.forEach((k) => M(k, X, S.nextSlideMessage)), ee && ee.forEach((k) => M(k, X, S.prevSlideMessage)), A() && Y(e.pagination.el).forEach((O) => {
        O.addEventListener("keydown", b);
      }), N().addEventListener("visibilitychange", P), e.el.addEventListener("focus", C, !0), e.el.addEventListener("focus", C, !0), e.el.addEventListener("pointerdown", T, !0), e.el.addEventListener("pointerup", L, !0);
    };
    function H() {
      a && a.remove();
      let {
        nextEl: S,
        prevEl: E
      } = e.navigation ? e.navigation : {};
      S = Y(S), E = Y(E), S && S.forEach((X) => X.removeEventListener("keydown", b)), E && E.forEach((X) => X.removeEventListener("keydown", b)), A() && Y(e.pagination.el).forEach((V) => {
        V.removeEventListener("keydown", b);
      }), N().removeEventListener("visibilitychange", P), e.el && typeof e.el != "string" && (e.el.removeEventListener("focus", C, !0), e.el.removeEventListener("pointerdown", T, !0), e.el.removeEventListener("pointerup", L, !0));
    }
    i("beforeInit", () => {
      a = K("span", e.params.a11y.notificationClass), a.setAttribute("aria-live", "assertive"), a.setAttribute("aria-atomic", "true");
    }), i("afterInit", () => {
      e.params.a11y.enabled && D();
    }), i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      e.params.a11y.enabled && I();
    }), i("fromEdge toEdge afterInit lock unlock", () => {
      e.params.a11y.enabled && x();
    }), i("paginationUpdate", () => {
      e.params.a11y.enabled && z();
    }), i("destroy", () => {
      e.params.a11y.enabled && H();
    });
  }
  function Ks(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i
    } = s;
    t({
      history: {
        enabled: !1,
        root: "",
        replaceState: !1,
        key: "slides",
        keepQuery: !1
      }
    });
    let a = !1, r = {};
    const c = (g) => g.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), d = (g) => {
      const n = _();
      let l;
      g ? l = new URL(g) : l = n.location;
      const v = l.pathname.slice(1).split("/").filter((b) => b !== ""), y = v.length, h = v[y - 2], p = v[y - 1];
      return {
        key: h,
        value: p
      };
    }, u = (g, n) => {
      const l = _();
      if (!a || !e.params.history.enabled) return;
      let v;
      e.params.url ? v = new URL(e.params.url) : v = l.location;
      const y = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${n}"]`) : e.slides[n];
      let h = c(y.getAttribute("data-history"));
      if (e.params.history.root.length > 0) {
        let b = e.params.history.root;
        b[b.length - 1] === "/" && (b = b.slice(0, b.length - 1)), h = `${b}/${g ? `${g}/` : ""}${h}`;
      } else v.pathname.includes(g) || (h = `${g ? `${g}/` : ""}${h}`);
      e.params.history.keepQuery && (h += v.search);
      const p = l.history.state;
      p && p.value === h || (e.params.history.replaceState ? l.history.replaceState({
        value: h
      }, null, h) : l.history.pushState({
        value: h
      }, null, h));
    }, o = (g, n, l) => {
      if (n)
        for (let v = 0, y = e.slides.length; v < y; v += 1) {
          const h = e.slides[v];
          if (c(h.getAttribute("data-history")) === n) {
            const b = e.getSlideIndex(h);
            e.slideTo(b, g, l);
          }
        }
      else
        e.slideTo(0, g, l);
    }, f = () => {
      r = d(e.params.url), o(e.params.speed, r.value, !1);
    }, m = () => {
      const g = _();
      if (e.params.history) {
        if (!g.history || !g.history.pushState) {
          e.params.history.enabled = !1, e.params.hashNavigation.enabled = !0;
          return;
        }
        if (a = !0, r = d(e.params.url), !r.key && !r.value) {
          e.params.history.replaceState || g.addEventListener("popstate", f);
          return;
        }
        o(0, r.value, e.params.runCallbacksOnInit), e.params.history.replaceState || g.addEventListener("popstate", f);
      }
    }, w = () => {
      const g = _();
      e.params.history.replaceState || g.removeEventListener("popstate", f);
    };
    i("init", () => {
      e.params.history.enabled && m();
    }), i("destroy", () => {
      e.params.history.enabled && w();
    }), i("transitionEnd _freeModeNoMomentumRelease", () => {
      a && u(e.params.history.key, e.activeIndex);
    }), i("slideChange", () => {
      a && e.params.cssMode && u(e.params.history.key, e.activeIndex);
    });
  }
  function Zs(s) {
    let {
      swiper: e,
      extendParams: t,
      emit: i,
      on: a
    } = s, r = !1;
    const c = N(), d = _();
    t({
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1,
        getSlideIndex(w, g) {
          if (e.virtual && e.params.virtual.enabled) {
            const n = e.slides.find((v) => v.getAttribute("data-hash") === g);
            return n ? parseInt(n.getAttribute("data-swiper-slide-index"), 10) : 0;
          }
          return e.getSlideIndex(q(e.slidesEl, `.${e.params.slideClass}[data-hash="${g}"], swiper-slide[data-hash="${g}"]`)[0]);
        }
      }
    });
    const u = () => {
      i("hashChange");
      const w = c.location.hash.replace("#", ""), g = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], n = g ? g.getAttribute("data-hash") : "";
      if (w !== n) {
        const l = e.params.hashNavigation.getSlideIndex(e, w);
        if (typeof l > "u" || Number.isNaN(l)) return;
        e.slideTo(l);
      }
    }, o = () => {
      if (!r || !e.params.hashNavigation.enabled) return;
      const w = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], g = w ? w.getAttribute("data-hash") || w.getAttribute("data-history") : "";
      e.params.hashNavigation.replaceState && d.history && d.history.replaceState ? (d.history.replaceState(null, null, `#${g}` || ""), i("hashSet")) : (c.location.hash = g || "", i("hashSet"));
    }, f = () => {
      if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
      r = !0;
      const w = c.location.hash.replace("#", "");
      if (w) {
        const n = e.params.hashNavigation.getSlideIndex(e, w);
        e.slideTo(n || 0, 0, e.params.runCallbacksOnInit, !0);
      }
      e.params.hashNavigation.watchState && d.addEventListener("hashchange", u);
    }, m = () => {
      e.params.hashNavigation.watchState && d.removeEventListener("hashchange", u);
    };
    a("init", () => {
      e.params.hashNavigation.enabled && f();
    }), a("destroy", () => {
      e.params.hashNavigation.enabled && m();
    }), a("transitionEnd _freeModeNoMomentumRelease", () => {
      r && o();
    }), a("slideChange", () => {
      r && e.params.cssMode && o();
    });
  }
  function Qs(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i,
      emit: a,
      params: r
    } = s;
    e.autoplay = {
      running: !1,
      paused: !1,
      timeLeft: 0
    }, t({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1
      }
    });
    let c, d, u = r && r.autoplay ? r.autoplay.delay : 3e3, o = r && r.autoplay ? r.autoplay.delay : 3e3, f, m = (/* @__PURE__ */ new Date()).getTime(), w, g, n, l, v, y, h;
    function p(E) {
      !e || e.destroyed || !e.wrapperEl || E.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", p), !(h || E.detail && E.detail.bySwiperTouchMove) && T());
    }
    const b = () => {
      if (e.destroyed || !e.autoplay.running) return;
      e.autoplay.paused ? w = !0 : w && (o = f, w = !1);
      const E = e.autoplay.paused ? f : m + o - (/* @__PURE__ */ new Date()).getTime();
      e.autoplay.timeLeft = E, a("autoplayTimeLeft", E, E / u), d = requestAnimationFrame(() => {
        b();
      });
    }, x = () => {
      let E;
      return e.virtual && e.params.virtual.enabled ? E = e.slides.find((X) => X.classList.contains("swiper-slide-active")) : E = e.slides[e.activeIndex], E ? parseInt(E.getAttribute("data-swiper-autoplay"), 10) : void 0;
    }, $ = (E) => {
      if (e.destroyed || !e.autoplay.running) return;
      cancelAnimationFrame(d), b();
      let B = typeof E > "u" ? e.params.autoplay.delay : E;
      u = e.params.autoplay.delay, o = e.params.autoplay.delay;
      const X = x();
      !Number.isNaN(X) && X > 0 && typeof E > "u" && (B = X, u = X, o = X), f = B;
      const V = e.params.speed, F = () => {
        !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(V, !0, !0), a("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, V, !0, !0), a("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(V, !0, !0), a("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, V, !0, !0), a("autoplay")), e.params.cssMode && (m = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
          $();
        })));
      };
      return B > 0 ? (clearTimeout(c), c = setTimeout(() => {
        F();
      }, B)) : requestAnimationFrame(() => {
        F();
      }), B;
    }, A = () => {
      m = (/* @__PURE__ */ new Date()).getTime(), e.autoplay.running = !0, $(), a("autoplayStart");
    }, z = () => {
      e.autoplay.running = !1, clearTimeout(c), cancelAnimationFrame(d), a("autoplayStop");
    }, M = (E, B) => {
      if (e.destroyed || !e.autoplay.running) return;
      clearTimeout(c), E || (y = !0);
      const X = () => {
        a("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", p) : T();
      };
      if (e.autoplay.paused = !0, B) {
        v && (f = e.params.autoplay.delay), v = !1, X();
        return;
      }
      f = (f || e.params.autoplay.delay) - ((/* @__PURE__ */ new Date()).getTime() - m), !(e.isEnd && f < 0 && !e.params.loop) && (f < 0 && (f = 0), X());
    }, T = () => {
      e.isEnd && f < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (m = (/* @__PURE__ */ new Date()).getTime(), y ? (y = !1, $(f)) : $(), e.autoplay.paused = !1, a("autoplayResume"));
    }, L = () => {
      if (e.destroyed || !e.autoplay.running) return;
      const E = N();
      E.visibilityState === "hidden" && (y = !0, M(!0)), E.visibilityState === "visible" && T();
    }, P = (E) => {
      E.pointerType === "mouse" && (y = !0, h = !0, !(e.animating || e.autoplay.paused) && M(!0));
    }, C = (E) => {
      E.pointerType === "mouse" && (h = !1, e.autoplay.paused && T());
    }, I = () => {
      e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", P), e.el.addEventListener("pointerleave", C));
    }, D = () => {
      e.el && typeof e.el != "string" && (e.el.removeEventListener("pointerenter", P), e.el.removeEventListener("pointerleave", C));
    }, H = () => {
      N().addEventListener("visibilitychange", L);
    }, S = () => {
      N().removeEventListener("visibilitychange", L);
    };
    i("init", () => {
      e.params.autoplay.enabled && (I(), H(), A());
    }), i("destroy", () => {
      D(), S(), e.autoplay.running && z();
    }), i("_freeModeStaticRelease", () => {
      (n || y) && T();
    }), i("_freeModeNoMomentumRelease", () => {
      e.params.autoplay.disableOnInteraction ? z() : M(!0, !0);
    }), i("beforeTransitionStart", (E, B, X) => {
      e.destroyed || !e.autoplay.running || (X || !e.params.autoplay.disableOnInteraction ? M(!0, !0) : z());
    }), i("sliderFirstMove", () => {
      if (!(e.destroyed || !e.autoplay.running)) {
        if (e.params.autoplay.disableOnInteraction) {
          z();
          return;
        }
        g = !0, n = !1, y = !1, l = setTimeout(() => {
          y = !0, n = !0, M(!0);
        }, 200);
      }
    }), i("touchEnd", () => {
      if (!(e.destroyed || !e.autoplay.running || !g)) {
        if (clearTimeout(l), clearTimeout(c), e.params.autoplay.disableOnInteraction) {
          n = !1, g = !1;
          return;
        }
        n && e.params.cssMode && T(), n = !1, g = !1;
      }
    }), i("slideChange", () => {
      e.destroyed || !e.autoplay.running || (v = !0);
    }), Object.assign(e.autoplay, {
      start: A,
      stop: z,
      pause: M,
      resume: T
    });
  }
  function Js(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i
    } = s;
    t({
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-thumbs"
      }
    });
    let a = !1, r = !1;
    e.thumbs = {
      swiper: null
    };
    function c() {
      const o = e.thumbs.swiper;
      if (!o || o.destroyed) return;
      const f = o.clickedIndex, m = o.clickedSlide;
      if (m && m.classList.contains(e.params.thumbs.slideThumbActiveClass) || typeof f > "u" || f === null) return;
      let w;
      o.params.loop ? w = parseInt(o.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : w = f, e.params.loop ? e.slideToLoop(w) : e.slideTo(w);
    }
    function d() {
      const {
        thumbs: o
      } = e.params;
      if (a) return !1;
      a = !0;
      const f = e.constructor;
      if (o.swiper instanceof f) {
        if (o.swiper.destroyed)
          return a = !1, !1;
        e.thumbs.swiper = o.swiper, Object.assign(e.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), Object.assign(e.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), e.thumbs.swiper.update();
      } else if (ye(o.swiper)) {
        const m = Object.assign({}, o.swiper);
        Object.assign(m, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), e.thumbs.swiper = new f(m), r = !0;
      }
      return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", c), !0;
    }
    function u(o) {
      const f = e.thumbs.swiper;
      if (!f || f.destroyed) return;
      const m = f.params.slidesPerView === "auto" ? f.slidesPerViewDynamic() : f.params.slidesPerView;
      let w = 1;
      const g = e.params.thumbs.slideThumbActiveClass;
      if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (w = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (w = 1), w = Math.floor(w), f.slides.forEach((v) => v.classList.remove(g)), f.params.loop || f.params.virtual && f.params.virtual.enabled)
        for (let v = 0; v < w; v += 1)
          q(f.slidesEl, `[data-swiper-slide-index="${e.realIndex + v}"]`).forEach((y) => {
            y.classList.add(g);
          });
      else
        for (let v = 0; v < w; v += 1)
          f.slides[e.realIndex + v] && f.slides[e.realIndex + v].classList.add(g);
      const n = e.params.thumbs.autoScrollOffset, l = n && !f.params.loop;
      if (e.realIndex !== f.realIndex || l) {
        const v = f.activeIndex;
        let y, h;
        if (f.params.loop) {
          const p = f.slides.find((b) => b.getAttribute("data-swiper-slide-index") === `${e.realIndex}`);
          y = f.slides.indexOf(p), h = e.activeIndex > e.previousIndex ? "next" : "prev";
        } else
          y = e.realIndex, h = y > e.previousIndex ? "next" : "prev";
        l && (y += h === "next" ? n : -1 * n), f.visibleSlidesIndexes && f.visibleSlidesIndexes.indexOf(y) < 0 && (f.params.centeredSlides ? y > v ? y = y - Math.floor(m / 2) + 1 : y = y + Math.floor(m / 2) - 1 : y > v && f.params.slidesPerGroup, f.slideTo(y, o ? 0 : void 0));
      }
    }
    i("beforeInit", () => {
      const {
        thumbs: o
      } = e.params;
      if (!(!o || !o.swiper))
        if (typeof o.swiper == "string" || o.swiper instanceof HTMLElement) {
          const f = N(), m = () => {
            const g = typeof o.swiper == "string" ? f.querySelector(o.swiper) : o.swiper;
            if (g && g.swiper)
              o.swiper = g.swiper, d(), u(!0);
            else if (g) {
              const n = `${e.params.eventsPrefix}init`, l = (v) => {
                o.swiper = v.detail[0], g.removeEventListener(n, l), d(), u(!0), o.swiper.update(), e.update();
              };
              g.addEventListener(n, l);
            }
            return g;
          }, w = () => {
            if (e.destroyed) return;
            m() || requestAnimationFrame(w);
          };
          requestAnimationFrame(w);
        } else
          d(), u(!0);
    }), i("slideChange update resize observerUpdate", () => {
      u();
    }), i("setTransition", (o, f) => {
      const m = e.thumbs.swiper;
      !m || m.destroyed || m.setTransition(f);
    }), i("beforeDestroy", () => {
      const o = e.thumbs.swiper;
      !o || o.destroyed || r && o.destroy();
    }), Object.assign(e.thumbs, {
      init: d,
      update: u
    });
  }
  function ei(s) {
    let {
      swiper: e,
      extendParams: t,
      emit: i,
      once: a
    } = s;
    t({
      freeMode: {
        enabled: !1,
        momentum: !0,
        momentumRatio: 1,
        momentumBounce: !0,
        momentumBounceRatio: 1,
        momentumVelocityRatio: 1,
        sticky: !1,
        minimumVelocity: 0.02
      }
    });
    function r() {
      if (e.params.cssMode) return;
      const u = e.getTranslate();
      e.setTranslate(u), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({
        currentPos: e.rtl ? e.translate : -e.translate
      });
    }
    function c() {
      if (e.params.cssMode) return;
      const {
        touchEventsData: u,
        touches: o
      } = e;
      u.velocities.length === 0 && u.velocities.push({
        position: o[e.isHorizontal() ? "startX" : "startY"],
        time: u.touchStartTime
      }), u.velocities.push({
        position: o[e.isHorizontal() ? "currentX" : "currentY"],
        time: Q()
      });
    }
    function d(u) {
      let {
        currentPos: o
      } = u;
      if (e.params.cssMode) return;
      const {
        params: f,
        wrapperEl: m,
        rtlTranslate: w,
        snapGrid: g,
        touchEventsData: n
      } = e, v = Q() - n.touchStartTime;
      if (o < -e.minTranslate()) {
        e.slideTo(e.activeIndex);
        return;
      }
      if (o > -e.maxTranslate()) {
        e.slides.length < g.length ? e.slideTo(g.length - 1) : e.slideTo(e.slides.length - 1);
        return;
      }
      if (f.freeMode.momentum) {
        if (n.velocities.length > 1) {
          const z = n.velocities.pop(), M = n.velocities.pop(), T = z.position - M.position, L = z.time - M.time;
          e.velocity = T / L, e.velocity /= 2, Math.abs(e.velocity) < f.freeMode.minimumVelocity && (e.velocity = 0), (L > 150 || Q() - z.time > 300) && (e.velocity = 0);
        } else
          e.velocity = 0;
        e.velocity *= f.freeMode.momentumVelocityRatio, n.velocities.length = 0;
        let y = 1e3 * f.freeMode.momentumRatio;
        const h = e.velocity * y;
        let p = e.translate + h;
        w && (p = -p);
        let b = !1, x;
        const $ = Math.abs(e.velocity) * 20 * f.freeMode.momentumBounceRatio;
        let A;
        if (p < e.maxTranslate())
          f.freeMode.momentumBounce ? (p + e.maxTranslate() < -$ && (p = e.maxTranslate() - $), x = e.maxTranslate(), b = !0, n.allowMomentumBounce = !0) : p = e.maxTranslate(), f.loop && f.centeredSlides && (A = !0);
        else if (p > e.minTranslate())
          f.freeMode.momentumBounce ? (p - e.minTranslate() > $ && (p = e.minTranslate() + $), x = e.minTranslate(), b = !0, n.allowMomentumBounce = !0) : p = e.minTranslate(), f.loop && f.centeredSlides && (A = !0);
        else if (f.freeMode.sticky) {
          let z;
          for (let M = 0; M < g.length; M += 1)
            if (g[M] > -p) {
              z = M;
              break;
            }
          Math.abs(g[z] - p) < Math.abs(g[z - 1] - p) || e.swipeDirection === "next" ? p = g[z] : p = g[z - 1], p = -p;
        }
        if (A && a("transitionEnd", () => {
          e.loopFix();
        }), e.velocity !== 0) {
          if (w ? y = Math.abs((-p - e.translate) / e.velocity) : y = Math.abs((p - e.translate) / e.velocity), f.freeMode.sticky) {
            const z = Math.abs((w ? -p : p) - e.translate), M = e.slidesSizesGrid[e.activeIndex];
            z < M ? y = f.speed : z < 2 * M ? y = f.speed * 1.5 : y = f.speed * 2.5;
          }
        } else if (f.freeMode.sticky) {
          e.slideToClosest();
          return;
        }
        f.freeMode.momentumBounce && b ? (e.updateProgress(x), e.setTransition(y), e.setTranslate(p), e.transitionStart(!0, e.swipeDirection), e.animating = !0, xe(m, () => {
          !e || e.destroyed || !n.allowMomentumBounce || (i("momentumBounce"), e.setTransition(f.speed), setTimeout(() => {
            e.setTranslate(x), xe(m, () => {
              !e || e.destroyed || e.transitionEnd();
            });
          }, 0));
        })) : e.velocity ? (i("_freeModeNoMomentumRelease"), e.updateProgress(p), e.setTransition(y), e.setTranslate(p), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, xe(m, () => {
          !e || e.destroyed || e.transitionEnd();
        }))) : e.updateProgress(p), e.updateActiveIndex(), e.updateSlidesClasses();
      } else if (f.freeMode.sticky) {
        e.slideToClosest();
        return;
      } else f.freeMode && i("_freeModeNoMomentumRelease");
      (!f.freeMode.momentum || v >= f.longSwipesMs) && (i("_freeModeStaticRelease"), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
    }
    Object.assign(e, {
      freeMode: {
        onTouchStart: r,
        onTouchMove: c,
        onTouchEnd: d
      }
    });
  }
  function ti(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i
    } = s;
    t({
      grid: {
        rows: 1,
        fill: "column"
      }
    });
    let a, r, c, d;
    const u = () => {
      let l = e.params.spaceBetween;
      return typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * e.size : typeof l == "string" && (l = parseFloat(l)), l;
    }, o = (l) => {
      const {
        slidesPerView: v
      } = e.params, {
        rows: y,
        fill: h
      } = e.params.grid, p = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : l.length;
      c = Math.floor(p / y), Math.floor(p / y) === p / y ? a = p : a = Math.ceil(p / y) * y, v !== "auto" && h === "row" && (a = Math.max(a, v * y)), r = a / y;
    }, f = () => {
      e.slides && e.slides.forEach((l) => {
        l.swiperSlideGridSet && (l.style.height = "", l.style[e.getDirectionLabel("margin-top")] = "");
      });
    }, m = (l, v, y) => {
      const {
        slidesPerGroup: h
      } = e.params, p = u(), {
        rows: b,
        fill: x
      } = e.params.grid, $ = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : y.length;
      let A, z, M;
      if (x === "row" && h > 1) {
        const T = Math.floor(l / (h * b)), L = l - b * h * T, P = T === 0 ? h : Math.min(Math.ceil(($ - T * b * h) / b), h);
        M = Math.floor(L / P), z = L - M * P + T * h, A = z + M * a / b, v.style.order = A;
      } else x === "column" ? (z = Math.floor(l / b), M = l - z * b, (z > c || z === c && M === b - 1) && (M += 1, M >= b && (M = 0, z += 1))) : (M = Math.floor(l / r), z = l - M * r);
      v.row = M, v.column = z, v.style.height = `calc((100% - ${(b - 1) * p}px) / ${b})`, v.style[e.getDirectionLabel("margin-top")] = M !== 0 ? p && `${p}px` : "", v.swiperSlideGridSet = !0;
    }, w = (l, v) => {
      const {
        centeredSlides: y,
        roundLengths: h
      } = e.params, p = u(), {
        rows: b
      } = e.params.grid;
      if (e.virtualSize = (l + p) * a, e.virtualSize = Math.ceil(e.virtualSize / b) - p, e.params.cssMode || (e.wrapperEl.style[e.getDirectionLabel("width")] = `${e.virtualSize + p}px`), y) {
        const x = [];
        for (let $ = 0; $ < v.length; $ += 1) {
          let A = v[$];
          h && (A = Math.floor(A)), v[$] < e.virtualSize + v[0] && x.push(A);
        }
        v.splice(0, v.length), v.push(...x);
      }
    }, g = () => {
      d = e.params.grid && e.params.grid.rows > 1;
    }, n = () => {
      const {
        params: l,
        el: v
      } = e, y = l.grid && l.grid.rows > 1;
      d && !y ? (v.classList.remove(`${l.containerModifierClass}grid`, `${l.containerModifierClass}grid-column`), c = 1, e.emitContainerClasses()) : !d && y && (v.classList.add(`${l.containerModifierClass}grid`), l.grid.fill === "column" && v.classList.add(`${l.containerModifierClass}grid-column`), e.emitContainerClasses()), d = y;
    };
    i("init", g), i("update", n), e.grid = {
      initSlides: o,
      unsetSlides: f,
      updateSlide: m,
      updateWrapperSize: w
    };
  }
  function si(s) {
    const e = this, {
      params: t,
      slidesEl: i
    } = e;
    t.loop && e.loopDestroy();
    const a = (r) => {
      if (typeof r == "string") {
        const c = document.createElement("div");
        c.innerHTML = r, i.append(c.children[0]), c.innerHTML = "";
      } else
        i.append(r);
    };
    if (typeof s == "object" && "length" in s)
      for (let r = 0; r < s.length; r += 1)
        s[r] && a(s[r]);
    else
      a(s);
    e.recalcSlides(), t.loop && e.loopCreate(), (!t.observer || e.isElement) && e.update();
  }
  function ii(s) {
    const e = this, {
      params: t,
      activeIndex: i,
      slidesEl: a
    } = e;
    t.loop && e.loopDestroy();
    let r = i + 1;
    const c = (d) => {
      if (typeof d == "string") {
        const u = document.createElement("div");
        u.innerHTML = d, a.prepend(u.children[0]), u.innerHTML = "";
      } else
        a.prepend(d);
    };
    if (typeof s == "object" && "length" in s) {
      for (let d = 0; d < s.length; d += 1)
        s[d] && c(s[d]);
      r = i + s.length;
    } else
      c(s);
    e.recalcSlides(), t.loop && e.loopCreate(), (!t.observer || e.isElement) && e.update(), e.slideTo(r, 0, !1);
  }
  function ri(s, e) {
    const t = this, {
      params: i,
      activeIndex: a,
      slidesEl: r
    } = t;
    let c = a;
    i.loop && (c -= t.loopedSlides, t.loopDestroy(), t.recalcSlides());
    const d = t.slides.length;
    if (s <= 0) {
      t.prependSlide(e);
      return;
    }
    if (s >= d) {
      t.appendSlide(e);
      return;
    }
    let u = c > s ? c + 1 : c;
    const o = [];
    for (let f = d - 1; f >= s; f -= 1) {
      const m = t.slides[f];
      m.remove(), o.unshift(m);
    }
    if (typeof e == "object" && "length" in e) {
      for (let f = 0; f < e.length; f += 1)
        e[f] && r.append(e[f]);
      u = c > s ? c + e.length : c;
    } else
      r.append(e);
    for (let f = 0; f < o.length; f += 1)
      r.append(o[f]);
    t.recalcSlides(), i.loop && t.loopCreate(), (!i.observer || t.isElement) && t.update(), i.loop ? t.slideTo(u + t.loopedSlides, 0, !1) : t.slideTo(u, 0, !1);
  }
  function ai(s) {
    const e = this, {
      params: t,
      activeIndex: i
    } = e;
    let a = i;
    t.loop && (a -= e.loopedSlides, e.loopDestroy());
    let r = a, c;
    if (typeof s == "object" && "length" in s) {
      for (let d = 0; d < s.length; d += 1)
        c = s[d], e.slides[c] && e.slides[c].remove(), c < r && (r -= 1);
      r = Math.max(r, 0);
    } else
      c = s, e.slides[c] && e.slides[c].remove(), c < r && (r -= 1), r = Math.max(r, 0);
    e.recalcSlides(), t.loop && e.loopCreate(), (!t.observer || e.isElement) && e.update(), t.loop ? e.slideTo(r + e.loopedSlides, 0, !1) : e.slideTo(r, 0, !1);
  }
  function ni() {
    const s = this, e = [];
    for (let t = 0; t < s.slides.length; t += 1)
      e.push(t);
    s.removeSlide(e);
  }
  function li(s) {
    let {
      swiper: e
    } = s;
    Object.assign(e, {
      appendSlide: si.bind(e),
      prependSlide: ii.bind(e),
      addSlide: ri.bind(e),
      removeSlide: ai.bind(e),
      removeAllSlides: ni.bind(e)
    });
  }
  function ue(s) {
    const {
      effect: e,
      swiper: t,
      on: i,
      setTranslate: a,
      setTransition: r,
      overwriteParams: c,
      perspective: d,
      recreateShadows: u,
      getEffectParams: o
    } = s;
    i("beforeInit", () => {
      if (t.params.effect !== e) return;
      t.classNames.push(`${t.params.containerModifierClass}${e}`), d && d() && t.classNames.push(`${t.params.containerModifierClass}3d`);
      const m = c ? c() : {};
      Object.assign(t.params, m), Object.assign(t.originalParams, m);
    }), i("setTranslate", () => {
      t.params.effect === e && a();
    }), i("setTransition", (m, w) => {
      t.params.effect === e && r(w);
    }), i("transitionEnd", () => {
      if (t.params.effect === e && u) {
        if (!o || !o().slideShadows) return;
        t.slides.forEach((m) => {
          m.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((w) => w.remove());
        }), u();
      }
    });
    let f;
    i("virtualUpdate", () => {
      t.params.effect === e && (t.slides.length || (f = !0), requestAnimationFrame(() => {
        f && t.slides && t.slides.length && (a(), f = !1);
      }));
    });
  }
  function Ee(s, e) {
    const t = ce(e);
    return t !== e && (t.style.backfaceVisibility = "hidden", t.style["-webkit-backface-visibility"] = "hidden"), t;
  }
  function Oe(s) {
    let {
      swiper: e,
      duration: t,
      transformElements: i,
      allSlides: a
    } = s;
    const {
      activeIndex: r
    } = e, c = (d) => d.parentElement ? d.parentElement : e.slides.find((o) => o.shadowRoot && o.shadowRoot === d.parentNode);
    if (e.params.virtualTranslate && t !== 0) {
      let d = !1, u;
      a ? u = i : u = i.filter((o) => {
        const f = o.classList.contains("swiper-slide-transform") ? c(o) : o;
        return e.getSlideIndex(f) === r;
      }), u.forEach((o) => {
        xe(o, () => {
          if (d || !e || e.destroyed) return;
          d = !0, e.animating = !1;
          const f = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0
          });
          e.wrapperEl.dispatchEvent(f);
        });
      });
    }
  }
  function oi(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i
    } = s;
    t({
      fadeEffect: {
        crossFade: !1
      }
    }), ue({
      effect: "fade",
      swiper: e,
      on: i,
      setTranslate: () => {
        const {
          slides: c
        } = e, d = e.params.fadeEffect;
        for (let u = 0; u < c.length; u += 1) {
          const o = e.slides[u];
          let m = -o.swiperSlideOffset;
          e.params.virtualTranslate || (m -= e.translate);
          let w = 0;
          e.isHorizontal() || (w = m, m = 0);
          const g = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(o.progress), 0) : 1 + Math.min(Math.max(o.progress, -1), 0), n = Ee(d, o);
          n.style.opacity = g, n.style.transform = `translate3d(${m}px, ${w}px, 0px)`;
        }
      },
      setTransition: (c) => {
        const d = e.slides.map((u) => ce(u));
        d.forEach((u) => {
          u.style.transitionDuration = `${c}ms`;
        }), Oe({
          swiper: e,
          duration: c,
          transformElements: d,
          allSlides: !0
        });
      },
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !e.params.cssMode
      })
    });
  }
  function di(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i
    } = s;
    t({
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: 0.94
      }
    });
    const a = (u, o, f) => {
      let m = f ? u.querySelector(".swiper-slide-shadow-left") : u.querySelector(".swiper-slide-shadow-top"), w = f ? u.querySelector(".swiper-slide-shadow-right") : u.querySelector(".swiper-slide-shadow-bottom");
      m || (m = K("div", `swiper-slide-shadow-cube swiper-slide-shadow-${f ? "left" : "top"}`.split(" ")), u.append(m)), w || (w = K("div", `swiper-slide-shadow-cube swiper-slide-shadow-${f ? "right" : "bottom"}`.split(" ")), u.append(w)), m && (m.style.opacity = Math.max(-o, 0)), w && (w.style.opacity = Math.max(o, 0));
    };
    ue({
      effect: "cube",
      swiper: e,
      on: i,
      setTranslate: () => {
        const {
          el: u,
          wrapperEl: o,
          slides: f,
          width: m,
          height: w,
          rtlTranslate: g,
          size: n,
          browser: l
        } = e, v = ze(e), y = e.params.cubeEffect, h = e.isHorizontal(), p = e.virtual && e.params.virtual.enabled;
        let b = 0, x;
        y.shadow && (h ? (x = e.wrapperEl.querySelector(".swiper-cube-shadow"), x || (x = K("div", "swiper-cube-shadow"), e.wrapperEl.append(x)), x.style.height = `${m}px`) : (x = u.querySelector(".swiper-cube-shadow"), x || (x = K("div", "swiper-cube-shadow"), u.append(x))));
        for (let A = 0; A < f.length; A += 1) {
          const z = f[A];
          let M = A;
          p && (M = parseInt(z.getAttribute("data-swiper-slide-index"), 10));
          let T = M * 90, L = Math.floor(T / 360);
          g && (T = -T, L = Math.floor(-T / 360));
          const P = Math.max(Math.min(z.progress, 1), -1);
          let C = 0, I = 0, D = 0;
          M % 4 === 0 ? (C = -L * 4 * n, D = 0) : (M - 1) % 4 === 0 ? (C = 0, D = -L * 4 * n) : (M - 2) % 4 === 0 ? (C = n + L * 4 * n, D = n) : (M - 3) % 4 === 0 && (C = -n, D = 3 * n + n * 4 * L), g && (C = -C), h || (I = C, C = 0);
          const H = `rotateX(${v(h ? 0 : -T)}deg) rotateY(${v(h ? T : 0)}deg) translate3d(${C}px, ${I}px, ${D}px)`;
          P <= 1 && P > -1 && (b = M * 90 + P * 90, g && (b = -M * 90 - P * 90)), z.style.transform = H, y.slideShadows && a(z, P, h);
        }
        if (o.style.transformOrigin = `50% 50% -${n / 2}px`, o.style["-webkit-transform-origin"] = `50% 50% -${n / 2}px`, y.shadow)
          if (h)
            x.style.transform = `translate3d(0px, ${m / 2 + y.shadowOffset}px, ${-m / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${y.shadowScale})`;
          else {
            const A = Math.abs(b) - Math.floor(Math.abs(b) / 90) * 90, z = 1.5 - (Math.sin(A * 2 * Math.PI / 360) / 2 + Math.cos(A * 2 * Math.PI / 360) / 2), M = y.shadowScale, T = y.shadowScale / z, L = y.shadowOffset;
            x.style.transform = `scale3d(${M}, 1, ${T}) translate3d(0px, ${w / 2 + L}px, ${-w / 2 / T}px) rotateX(-89.99deg)`;
          }
        const $ = (l.isSafari || l.isWebView) && l.needPerspectiveFix ? -n / 2 : 0;
        o.style.transform = `translate3d(0px,0,${$}px) rotateX(${v(e.isHorizontal() ? 0 : b)}deg) rotateY(${v(e.isHorizontal() ? -b : 0)}deg)`, o.style.setProperty("--swiper-cube-translate-z", `${$}px`);
      },
      setTransition: (u) => {
        const {
          el: o,
          slides: f
        } = e;
        if (f.forEach((m) => {
          m.style.transitionDuration = `${u}ms`, m.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((w) => {
            w.style.transitionDuration = `${u}ms`;
          });
        }), e.params.cubeEffect.shadow && !e.isHorizontal()) {
          const m = o.querySelector(".swiper-cube-shadow");
          m && (m.style.transitionDuration = `${u}ms`);
        }
      },
      recreateShadows: () => {
        const u = e.isHorizontal();
        e.slides.forEach((o) => {
          const f = Math.max(Math.min(o.progress, 1), -1);
          a(o, f, u);
        });
      },
      getEffectParams: () => e.params.cubeEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: !1,
        virtualTranslate: !0
      })
    });
  }
  function pe(s, e, t) {
    const i = `swiper-slide-shadow${t ? `-${t}` : ""}${s ? ` swiper-slide-shadow-${s}` : ""}`, a = ce(e);
    let r = a.querySelector(`.${i.split(" ").join(".")}`);
    return r || (r = K("div", i.split(" ")), a.append(r)), r;
  }
  function ci(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i
    } = s;
    t({
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0
      }
    });
    const a = (u, o) => {
      let f = e.isHorizontal() ? u.querySelector(".swiper-slide-shadow-left") : u.querySelector(".swiper-slide-shadow-top"), m = e.isHorizontal() ? u.querySelector(".swiper-slide-shadow-right") : u.querySelector(".swiper-slide-shadow-bottom");
      f || (f = pe("flip", u, e.isHorizontal() ? "left" : "top")), m || (m = pe("flip", u, e.isHorizontal() ? "right" : "bottom")), f && (f.style.opacity = Math.max(-o, 0)), m && (m.style.opacity = Math.max(o, 0));
    };
    ue({
      effect: "flip",
      swiper: e,
      on: i,
      setTranslate: () => {
        const {
          slides: u,
          rtlTranslate: o
        } = e, f = e.params.flipEffect, m = ze(e);
        for (let w = 0; w < u.length; w += 1) {
          const g = u[w];
          let n = g.progress;
          e.params.flipEffect.limitRotation && (n = Math.max(Math.min(g.progress, 1), -1));
          const l = g.swiperSlideOffset;
          let y = -180 * n, h = 0, p = e.params.cssMode ? -l - e.translate : -l, b = 0;
          e.isHorizontal() ? o && (y = -y) : (b = p, p = 0, h = -y, y = 0), g.style.zIndex = -Math.abs(Math.round(n)) + u.length, f.slideShadows && a(g, n);
          const x = `translate3d(${p}px, ${b}px, 0px) rotateX(${m(h)}deg) rotateY(${m(y)}deg)`, $ = Ee(f, g);
          $.style.transform = x;
        }
      },
      setTransition: (u) => {
        const o = e.slides.map((f) => ce(f));
        o.forEach((f) => {
          f.style.transitionDuration = `${u}ms`, f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((m) => {
            m.style.transitionDuration = `${u}ms`;
          });
        }), Oe({
          swiper: e,
          duration: u,
          transformElements: o
        });
      },
      recreateShadows: () => {
        e.params.flipEffect, e.slides.forEach((u) => {
          let o = u.progress;
          e.params.flipEffect.limitRotation && (o = Math.max(Math.min(u.progress, 1), -1)), a(u, o);
        });
      },
      getEffectParams: () => e.params.flipEffect,
      perspective: () => !0,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !e.params.cssMode
      })
    });
  }
  function fi(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i
    } = s;
    t({
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0
      }
    }), ue({
      effect: "coverflow",
      swiper: e,
      on: i,
      setTranslate: () => {
        const {
          width: c,
          height: d,
          slides: u,
          slidesSizesGrid: o
        } = e, f = e.params.coverflowEffect, m = e.isHorizontal(), w = e.translate, g = m ? -w + c / 2 : -w + d / 2, n = m ? f.rotate : -f.rotate, l = f.depth, v = ze(e);
        for (let y = 0, h = u.length; y < h; y += 1) {
          const p = u[y], b = o[y], x = p.swiperSlideOffset, $ = (g - x - b / 2) / b, A = typeof f.modifier == "function" ? f.modifier($) : $ * f.modifier;
          let z = m ? n * A : 0, M = m ? 0 : n * A, T = -l * Math.abs(A), L = f.stretch;
          typeof L == "string" && L.indexOf("%") !== -1 && (L = parseFloat(f.stretch) / 100 * b);
          let P = m ? 0 : L * A, C = m ? L * A : 0, I = 1 - (1 - f.scale) * Math.abs(A);
          Math.abs(C) < 1e-3 && (C = 0), Math.abs(P) < 1e-3 && (P = 0), Math.abs(T) < 1e-3 && (T = 0), Math.abs(z) < 1e-3 && (z = 0), Math.abs(M) < 1e-3 && (M = 0), Math.abs(I) < 1e-3 && (I = 0);
          const D = `translate3d(${C}px,${P}px,${T}px)  rotateX(${v(M)}deg) rotateY(${v(z)}deg) scale(${I})`, H = Ee(f, p);
          if (H.style.transform = D, p.style.zIndex = -Math.abs(Math.round(A)) + 1, f.slideShadows) {
            let S = m ? p.querySelector(".swiper-slide-shadow-left") : p.querySelector(".swiper-slide-shadow-top"), E = m ? p.querySelector(".swiper-slide-shadow-right") : p.querySelector(".swiper-slide-shadow-bottom");
            S || (S = pe("coverflow", p, m ? "left" : "top")), E || (E = pe("coverflow", p, m ? "right" : "bottom")), S && (S.style.opacity = A > 0 ? A : 0), E && (E.style.opacity = -A > 0 ? -A : 0);
          }
        }
      },
      setTransition: (c) => {
        e.slides.map((u) => ce(u)).forEach((u) => {
          u.style.transitionDuration = `${c}ms`, u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((o) => {
            o.style.transitionDuration = `${c}ms`;
          });
        });
      },
      perspective: () => !0,
      overwriteParams: () => ({
        watchSlidesProgress: !0
      })
    });
  }
  function ui(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i
    } = s;
    t({
      creativeEffect: {
        limitProgress: 1,
        shadowPerProgress: !1,
        progressMultiplier: 1,
        perspective: !0,
        prev: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        },
        next: {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          opacity: 1,
          scale: 1
        }
      }
    });
    const a = (d) => typeof d == "string" ? d : `${d}px`;
    ue({
      effect: "creative",
      swiper: e,
      on: i,
      setTranslate: () => {
        const {
          slides: d,
          wrapperEl: u,
          slidesSizesGrid: o
        } = e, f = e.params.creativeEffect, {
          progressMultiplier: m
        } = f, w = e.params.centeredSlides, g = ze(e);
        if (w) {
          const n = o[0] / 2 - e.params.slidesOffsetBefore || 0;
          u.style.transform = `translateX(calc(50% - ${n}px))`;
        }
        for (let n = 0; n < d.length; n += 1) {
          const l = d[n], v = l.progress, y = Math.min(Math.max(l.progress, -f.limitProgress), f.limitProgress);
          let h = y;
          w || (h = Math.min(Math.max(l.originalProgress, -f.limitProgress), f.limitProgress));
          const p = l.swiperSlideOffset, b = [e.params.cssMode ? -p - e.translate : -p, 0, 0], x = [0, 0, 0];
          let $ = !1;
          e.isHorizontal() || (b[1] = b[0], b[0] = 0);
          let A = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1
          };
          y < 0 ? (A = f.next, $ = !0) : y > 0 && (A = f.prev, $ = !0), b.forEach((I, D) => {
            b[D] = `calc(${I}px + (${a(A.translate[D])} * ${Math.abs(y * m)}))`;
          }), x.forEach((I, D) => {
            let H = A.rotate[D] * Math.abs(y * m);
            x[D] = H;
          }), l.style.zIndex = -Math.abs(Math.round(v)) + d.length;
          const z = b.join(", "), M = `rotateX(${g(x[0])}deg) rotateY(${g(x[1])}deg) rotateZ(${g(x[2])}deg)`, T = h < 0 ? `scale(${1 + (1 - A.scale) * h * m})` : `scale(${1 - (1 - A.scale) * h * m})`, L = h < 0 ? 1 + (1 - A.opacity) * h * m : 1 - (1 - A.opacity) * h * m, P = `translate3d(${z}) ${M} ${T}`;
          if ($ && A.shadow || !$) {
            let I = l.querySelector(".swiper-slide-shadow");
            if (!I && A.shadow && (I = pe("creative", l)), I) {
              const D = f.shadowPerProgress ? y * (1 / f.limitProgress) : y;
              I.style.opacity = Math.min(Math.max(Math.abs(D), 0), 1);
            }
          }
          const C = Ee(f, l);
          C.style.transform = P, C.style.opacity = L, A.origin && (C.style.transformOrigin = A.origin);
        }
      },
      setTransition: (d) => {
        const u = e.slides.map((o) => ce(o));
        u.forEach((o) => {
          o.style.transitionDuration = `${d}ms`, o.querySelectorAll(".swiper-slide-shadow").forEach((f) => {
            f.style.transitionDuration = `${d}ms`;
          });
        }), Oe({
          swiper: e,
          duration: d,
          transformElements: u,
          allSlides: !0
        });
      },
      perspective: () => e.params.creativeEffect.perspective,
      overwriteParams: () => ({
        watchSlidesProgress: !0,
        virtualTranslate: !e.params.cssMode
      })
    });
  }
  function pi(s) {
    let {
      swiper: e,
      extendParams: t,
      on: i
    } = s;
    t({
      cardsEffect: {
        slideShadows: !0,
        rotate: !0,
        perSlideRotate: 2,
        perSlideOffset: 8
      }
    }), ue({
      effect: "cards",
      swiper: e,
      on: i,
      setTranslate: () => {
        const {
          slides: c,
          activeIndex: d,
          rtlTranslate: u
        } = e, o = e.params.cardsEffect, {
          startTranslate: f,
          isTouched: m
        } = e.touchEventsData, w = u ? -e.translate : e.translate;
        for (let g = 0; g < c.length; g += 1) {
          const n = c[g], l = n.progress, v = Math.min(Math.max(l, -4), 4);
          let y = n.swiperSlideOffset;
          e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (y -= c[0].swiperSlideOffset);
          let h = e.params.cssMode ? -y - e.translate : -y, p = 0;
          const b = -100 * Math.abs(v);
          let x = 1, $ = -o.perSlideRotate * v, A = o.perSlideOffset - Math.abs(v) * 0.75;
          const z = e.virtual && e.params.virtual.enabled ? e.virtual.from + g : g, M = (z === d || z === d - 1) && v > 0 && v < 1 && (m || e.params.cssMode) && w < f, T = (z === d || z === d + 1) && v < 0 && v > -1 && (m || e.params.cssMode) && w > f;
          if (M || T) {
            const I = (1 - Math.abs((Math.abs(v) - 0.5) / 0.5)) ** 0.5;
            $ += -28 * v * I, x += -0.5 * I, A += 96 * I, p = `${-25 * I * Math.abs(v)}%`;
          }
          if (v < 0 ? h = `calc(${h}px ${u ? "-" : "+"} (${A * Math.abs(v)}%))` : v > 0 ? h = `calc(${h}px ${u ? "-" : "+"} (-${A * Math.abs(v)}%))` : h = `${h}px`, !e.isHorizontal()) {
            const I = p;
            p = h, h = I;
          }
          const L = v < 0 ? `${1 + (1 - x) * v}` : `${1 - (1 - x) * v}`, P = `
        translate3d(${h}, ${p}, ${b}px)
        rotateZ(${o.rotate ? u ? -$ : $ : 0}deg)
        scale(${L})
      `;
          if (o.slideShadows) {
            let I = n.querySelector(".swiper-slide-shadow");
            I || (I = pe("cards", n)), I && (I.style.opacity = Math.min(Math.max((Math.abs(v) - 0.5) / 0.5, 0), 1));
          }
          n.style.zIndex = -Math.abs(Math.round(l)) + c.length;
          const C = Ee(o, n);
          C.style.transform = P;
        }
      },
      setTransition: (c) => {
        const d = e.slides.map((u) => ce(u));
        d.forEach((u) => {
          u.style.transitionDuration = `${c}ms`, u.querySelectorAll(".swiper-slide-shadow").forEach((o) => {
            o.style.transitionDuration = `${c}ms`;
          });
        }), Oe({
          swiper: e,
          duration: c,
          transformElements: d
        });
      },
      perspective: () => !0,
      overwriteParams: () => ({
        _loopSwapReset: !1,
        watchSlidesProgress: !0,
        loopAdditionalSlides: e.params.cardsEffect.rotate ? 3 : 2,
        centeredSlides: !0,
        virtualTranslate: !e.params.cssMode
      })
    });
  }
  const mi = [Ys, Rs, _s, Vs, Ns, Fs, qs, Ws, js, Us, Ks, Zs, Qs, Js, ei, ti, li, oi, di, ci, fi, ui, pi];
  Z.use(mi), gt({ dev: "YK", name: "Exp: trailpatch trusted" }), wt("trailpatch_trusted"), vt(["https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"]);
  class hi {
    constructor() {
      this.init(), this.faqUpdate(), this.slider();
    }
    async init() {
      (await Ge(".lp-tr--hero-section .container-fluid")).insertAdjacentHTML("afterend", St), we(".crs_trusted button").on("click", () => {
        tt(".lp-tr--purchase", 100), Pe("exp_trailpatch_click_02", "Buy now", "click", "Trusted by 5000 stores");
      }), we(".lp-tr--btn img").attr("src", "https://conversionrate-store.github.io/a-b_images/natpat/main_img.webp"), we(".lp-tr--header-btn a").text("GET IT NOW"), we(".lp-tr--header-btn a").on("click", () => {
        Pe("exp_trailpatch_click_01", "Get it now", "click", "Header");
      }), yt(".crs_trusted", "exp_trailpatch_view_01", "Trusted by 5000 stores");
    }
    async faqUpdate() {
      (await Ge("#accordionFaq")).querySelectorAll(".card-body").forEach((t) => {
        t.insertAdjacentHTML("afterend", xt);
      }), we(".crs_faq_btn").on("click", function() {
        const t = this.closest(".card").querySelector("h5").innerText;
        tt(".lp-tr--purchase", 100), Pe("exp_trailpatch_click_03", "Get yours now:" + t, "click", "FAQ");
      });
    }
    async slider() {
      await Ge(".crs_trusted .swiper"), new Z(".swiper", {
        loop: !0,
        slidesPerView: 4,
        centeredSlides: !0,
        spaceBetween: 12,
        autoplay: { delay: 2e3, disableOnInteraction: !1, pauseOnMouseEnter: !0 },
        speed: 800
      });
    }
  }
  new hi();
})();
//# sourceMappingURL=index.js.map
