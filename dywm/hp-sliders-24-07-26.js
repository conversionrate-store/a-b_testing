(function() {
  "use strict";
  function pe(i) {
    return i !== null && typeof i == "object" && "constructor" in i && i.constructor === Object;
  }
  function ee(i, e) {
    i === void 0 && (i = {}), e === void 0 && (e = {});
    const t = ["__proto__", "constructor", "prototype"];
    Object.keys(e).filter((n) => t.indexOf(n) < 0).forEach((n) => {
      typeof i[n] > "u" ? i[n] = e[n] : pe(e[n]) && pe(i[n]) && Object.keys(e[n]).length > 0 && ee(i[n], e[n]);
    });
  }
  const fe = {
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
  function V() {
    const i = typeof document < "u" ? document : {};
    return ee(i, fe), i;
  }
  const Ye = {
    document: fe,
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
    requestAnimationFrame(i) {
      return typeof setTimeout > "u" ? (i(), null) : setTimeout(i, 0);
    },
    cancelAnimationFrame(i) {
      typeof setTimeout > "u" || clearTimeout(i);
    }
  };
  function z() {
    const i = typeof window < "u" ? window : {};
    return ee(i, Ye), i;
  }
  function Be(i) {
    return i === void 0 && (i = ""), i.trim().split(" ").filter((e) => !!e.trim());
  }
  function _e(i) {
    const e = i;
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
  function te(i, e) {
    return e === void 0 && (e = 0), setTimeout(i, e);
  }
  function q() {
    return Date.now();
  }
  function ze(i) {
    const e = z();
    let t;
    return e.getComputedStyle && (t = e.getComputedStyle(i, null)), !t && i.currentStyle && (t = i.currentStyle), t || (t = i.style), t;
  }
  function Ge(i, e) {
    e === void 0 && (e = "x");
    const t = z();
    let n, a, s;
    const o = ze(i);
    return t.WebKitCSSMatrix ? (a = o.transform || o.webkitTransform, a.split(",").length > 6 && (a = a.split(", ").map((r) => r.replace(",", ".")).join(", ")), s = new t.WebKitCSSMatrix(a === "none" ? "" : a)) : (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = s.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? a = s.m41 : n.length === 16 ? a = parseFloat(n[12]) : a = parseFloat(n[4])), e === "y" && (t.WebKitCSSMatrix ? a = s.m42 : n.length === 16 ? a = parseFloat(n[13]) : a = parseFloat(n[5])), a || 0;
  }
  function K(i) {
    return typeof i == "object" && i !== null && i.constructor && Object.prototype.toString.call(i).slice(8, -1) === "Object";
  }
  function He(i) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? i instanceof HTMLElement : i && (i.nodeType === 1 || i.nodeType === 11);
  }
  function H() {
    const i = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
    for (let t = 1; t < arguments.length; t += 1) {
      const n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
      if (n != null && !He(n)) {
        const a = Object.keys(Object(n)).filter((s) => e.indexOf(s) < 0);
        for (let s = 0, o = a.length; s < o; s += 1) {
          const r = a[s], d = Object.getOwnPropertyDescriptor(n, r);
          d !== void 0 && d.enumerable && (K(i[r]) && K(n[r]) ? n[r].__swiper__ ? i[r] = n[r] : H(i[r], n[r]) : !K(i[r]) && K(n[r]) ? (i[r] = {}, n[r].__swiper__ ? i[r] = n[r] : H(i[r], n[r])) : i[r] = n[r]);
        }
      }
    }
    return i;
  }
  function X(i, e, t) {
    i.style.setProperty(e, t);
  }
  function ue(i) {
    let {
      swiper: e,
      targetPosition: t,
      side: n
    } = i;
    const a = z(), s = -e.translate;
    let o = null, r;
    const d = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(e.cssModeFrameID);
    const l = t > s ? "next" : "prev", f = (h, m) => l === "next" && h >= m || l === "prev" && h <= m, u = () => {
      r = (/* @__PURE__ */ new Date()).getTime(), o === null && (o = r);
      const h = Math.max(Math.min((r - o) / d, 1), 0), m = 0.5 - Math.cos(h * Math.PI) / 2;
      let g = s + m * (t - s);
      if (f(g, t) && (g = t), e.wrapperEl.scrollTo({
        [n]: g
      }), f(g, t)) {
        e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
          e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
            [n]: g
          });
        }), a.cancelAnimationFrame(e.cssModeFrameID);
        return;
      }
      e.cssModeFrameID = a.requestAnimationFrame(u);
    };
    u();
  }
  function D(i, e) {
    e === void 0 && (e = "");
    const t = z(), n = [...i.children];
    return t.HTMLSlotElement && i instanceof HTMLSlotElement && n.push(...i.assignedElements()), e ? n.filter((a) => a.matches(e)) : n;
  }
  function Oe(i, e) {
    const t = [e];
    for (; t.length > 0; ) {
      const n = t.shift();
      if (i === n)
        return !0;
      t.push(...n.children, ...n.shadowRoot ? n.shadowRoot.children : [], ...n.assignedElements ? n.assignedElements() : []);
    }
  }
  function De(i, e) {
    const t = z();
    let n = e.contains(i);
    return !n && t.HTMLSlotElement && e instanceof HTMLSlotElement && (n = [...e.assignedElements()].includes(i), n || (n = Oe(i, e))), n;
  }
  function U(i) {
    try {
      console.warn(i);
      return;
    } catch {
    }
  }
  function Z(i, e) {
    e === void 0 && (e = []);
    const t = document.createElement(i);
    return t.classList.add(...Array.isArray(e) ? e : Be(e)), t;
  }
  function je(i, e) {
    const t = [];
    for (; i.previousElementSibling; ) {
      const n = i.previousElementSibling;
      e ? n.matches(e) && t.push(n) : t.push(n), i = n;
    }
    return t;
  }
  function Fe(i, e) {
    const t = [];
    for (; i.nextElementSibling; ) {
      const n = i.nextElementSibling;
      e ? n.matches(e) && t.push(n) : t.push(n), i = n;
    }
    return t;
  }
  function F(i, e) {
    return z().getComputedStyle(i, null).getPropertyValue(e);
  }
  function Q(i) {
    let e = i, t;
    if (e) {
      for (t = 0; (e = e.previousSibling) !== null; )
        e.nodeType === 1 && (t += 1);
      return t;
    }
  }
  function ge(i, e) {
    const t = [];
    let n = i.parentElement;
    for (; n; )
      e ? n.matches(e) && t.push(n) : t.push(n), n = n.parentElement;
    return t;
  }
  function ie(i, e, t) {
    const n = z();
    return i[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(i, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"));
  }
  function B(i) {
    return (Array.isArray(i) ? i : [i]).filter((e) => !!e);
  }
  function he(i, e) {
    e === void 0 && (e = ""), typeof trustedTypes < "u" ? i.innerHTML = trustedTypes.createPolicy("html", {
      createHTML: (t) => t
    }).createHTML(e) : i.innerHTML = e;
  }
  let ne;
  function Ve() {
    const i = z(), e = V();
    return {
      smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
      touch: !!("ontouchstart" in i || i.DocumentTouch && e instanceof i.DocumentTouch)
    };
  }
  function me() {
    return ne || (ne = Ve()), ne;
  }
  let se;
  function Re(i) {
    let {
      userAgent: e
    } = i === void 0 ? {} : i;
    const t = me(), n = z(), a = n.navigator.platform, s = e || n.navigator.userAgent, o = {
      ios: !1,
      android: !1
    }, r = n.screen.width, d = n.screen.height, l = s.match(/(Android);?[\s\/]+([\d.]+)?/);
    let f = s.match(/(iPad).*OS\s([\d_]+)/);
    const u = s.match(/(iPod)(.*OS\s([\d_]+))?/), h = !f && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/), m = a === "Win32";
    let g = a === "MacIntel";
    const w = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !f && g && t.touch && w.indexOf(`${r}x${d}`) >= 0 && (f = s.match(/(Version)\/([\d.]+)/), f || (f = [0, 1, "13_0_0"]), g = !1), l && !m && (o.os = "android", o.android = !0), (f || h || u) && (o.os = "ios", o.ios = !0), o;
  }
  function we(i) {
    return i === void 0 && (i = {}), se || (se = Re(i)), se;
  }
  let ae;
  function Ne() {
    const i = z(), e = we();
    let t = !1;
    function n() {
      const r = i.navigator.userAgent.toLowerCase();
      return r.indexOf("safari") >= 0 && r.indexOf("chrome") < 0 && r.indexOf("android") < 0;
    }
    if (n()) {
      const r = String(i.navigator.userAgent);
      if (r.includes("Version/")) {
        const [d, l] = r.split("Version/")[1].split(" ")[0].split(".").map((f) => Number(f));
        t = d < 16 || d === 16 && l < 2;
      }
    }
    const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent), s = n(), o = s || a && e.ios;
    return {
      isSafari: t || s,
      needPerspectiveFix: t,
      need3dFix: o,
      isWebView: a
    };
  }
  function ve() {
    return ae || (ae = Ne()), ae;
  }
  function $e(i) {
    let {
      swiper: e,
      on: t,
      emit: n
    } = i;
    const a = z();
    let s = null, o = null;
    const r = () => {
      !e || e.destroyed || !e.initialized || (n("beforeResize"), n("resize"));
    }, d = () => {
      !e || e.destroyed || !e.initialized || (s = new ResizeObserver((u) => {
        o = a.requestAnimationFrame(() => {
          const {
            width: h,
            height: m
          } = e;
          let g = h, w = m;
          u.forEach((S) => {
            let {
              contentBoxSize: y,
              contentRect: c,
              target: p
            } = S;
            p && p !== e.el || (g = c ? c.width : (y[0] || y).inlineSize, w = c ? c.height : (y[0] || y).blockSize);
          }), (g !== h || w !== m) && r();
        });
      }), s.observe(e.el));
    }, l = () => {
      o && a.cancelAnimationFrame(o), s && s.unobserve && e.el && (s.unobserve(e.el), s = null);
    }, f = () => {
      !e || e.destroyed || !e.initialized || n("orientationchange");
    };
    t("init", () => {
      if (e.params.resizeObserver && typeof a.ResizeObserver < "u") {
        d();
        return;
      }
      a.addEventListener("resize", r), a.addEventListener("orientationchange", f);
    }), t("destroy", () => {
      l(), a.removeEventListener("resize", r), a.removeEventListener("orientationchange", f);
    });
  }
  function We(i) {
    let {
      swiper: e,
      extendParams: t,
      on: n,
      emit: a
    } = i;
    const s = [], o = z(), r = function(f, u) {
      u === void 0 && (u = {});
      const h = o.MutationObserver || o.WebkitMutationObserver, m = new h((g) => {
        if (e.__preventObserver__) return;
        if (g.length === 1) {
          a("observerUpdate", g[0]);
          return;
        }
        const w = function() {
          a("observerUpdate", g[0]);
        };
        o.requestAnimationFrame ? o.requestAnimationFrame(w) : o.setTimeout(w, 0);
      });
      m.observe(f, {
        attributes: typeof u.attributes > "u" ? !0 : u.attributes,
        childList: e.isElement || (typeof u.childList > "u" ? !0 : u).childList,
        characterData: typeof u.characterData > "u" ? !0 : u.characterData
      }), s.push(m);
    }, d = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const f = ge(e.hostEl);
          for (let u = 0; u < f.length; u += 1)
            r(f[u]);
        }
        r(e.hostEl, {
          childList: e.params.observeSlideChildren
        }), r(e.wrapperEl, {
          attributes: !1
        });
      }
    }, l = () => {
      s.forEach((f) => {
        f.disconnect();
      }), s.splice(0, s.length);
    };
    t({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), n("init", d), n("destroy", l);
  }
  var qe = {
    on(i, e, t) {
      const n = this;
      if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
      const a = t ? "unshift" : "push";
      return i.split(" ").forEach((s) => {
        n.eventsListeners[s] || (n.eventsListeners[s] = []), n.eventsListeners[s][a](e);
      }), n;
    },
    once(i, e, t) {
      const n = this;
      if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
      function a() {
        n.off(i, a), a.__emitterProxy && delete a.__emitterProxy;
        for (var s = arguments.length, o = new Array(s), r = 0; r < s; r++)
          o[r] = arguments[r];
        e.apply(n, o);
      }
      return a.__emitterProxy = e, n.on(i, a, t);
    },
    onAny(i, e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || typeof i != "function") return t;
      const n = e ? "unshift" : "push";
      return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[n](i), t;
    },
    offAny(i) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
      const t = e.eventsAnyListeners.indexOf(i);
      return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
    },
    off(i, e) {
      const t = this;
      return !t.eventsListeners || t.destroyed || !t.eventsListeners || i.split(" ").forEach((n) => {
        typeof e > "u" ? t.eventsListeners[n] = [] : t.eventsListeners[n] && t.eventsListeners[n].forEach((a, s) => {
          (a === e || a.__emitterProxy && a.__emitterProxy === e) && t.eventsListeners[n].splice(s, 1);
        });
      }), t;
    },
    emit() {
      const i = this;
      if (!i.eventsListeners || i.destroyed || !i.eventsListeners) return i;
      let e, t, n;
      for (var a = arguments.length, s = new Array(a), o = 0; o < a; o++)
        s[o] = arguments[o];
      return typeof s[0] == "string" || Array.isArray(s[0]) ? (e = s[0], t = s.slice(1, s.length), n = i) : (e = s[0].events, t = s[0].data, n = s[0].context || i), t.unshift(n), (Array.isArray(e) ? e : e.split(" ")).forEach((d) => {
        i.eventsAnyListeners && i.eventsAnyListeners.length && i.eventsAnyListeners.forEach((l) => {
          l.apply(n, [d, ...t]);
        }), i.eventsListeners && i.eventsListeners[d] && i.eventsListeners[d].forEach((l) => {
          l.apply(n, t);
        });
      }), i;
    }
  };
  function Ke() {
    const i = this;
    let e, t;
    const n = i.el;
    typeof i.params.width < "u" && i.params.width !== null ? e = i.params.width : e = n.clientWidth, typeof i.params.height < "u" && i.params.height !== null ? t = i.params.height : t = n.clientHeight, !(e === 0 && i.isHorizontal() || t === 0 && i.isVertical()) && (e = e - parseInt(F(n, "padding-left") || 0, 10) - parseInt(F(n, "padding-right") || 0, 10), t = t - parseInt(F(n, "padding-top") || 0, 10) - parseInt(F(n, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(i, {
      width: e,
      height: t,
      size: i.isHorizontal() ? e : t
    }));
  }
  function Xe() {
    const i = this;
    function e(x, A) {
      return parseFloat(x.getPropertyValue(i.getDirectionLabel(A)) || 0);
    }
    const t = i.params, {
      wrapperEl: n,
      slidesEl: a,
      size: s,
      rtlTranslate: o,
      wrongRTL: r
    } = i, d = i.virtual && t.virtual.enabled, l = d ? i.virtual.slides.length : i.slides.length, f = D(a, `.${i.params.slideClass}, swiper-slide`), u = d ? i.virtual.slides.length : f.length;
    let h = [];
    const m = [], g = [];
    let w = t.slidesOffsetBefore;
    typeof w == "function" && (w = t.slidesOffsetBefore.call(i));
    let S = t.slidesOffsetAfter;
    typeof S == "function" && (S = t.slidesOffsetAfter.call(i));
    const y = i.snapGrid.length, c = i.slidesGrid.length;
    let p = t.spaceBetween, v = -w, b = 0, T = 0;
    if (typeof s > "u")
      return;
    typeof p == "string" && p.indexOf("%") >= 0 ? p = parseFloat(p.replace("%", "")) / 100 * s : typeof p == "string" && (p = parseFloat(p)), i.virtualSize = -p, f.forEach((x) => {
      o ? x.style.marginLeft = "" : x.style.marginRight = "", x.style.marginBottom = "", x.style.marginTop = "";
    }), t.centeredSlides && t.cssMode && (X(n, "--swiper-centered-offset-before", ""), X(n, "--swiper-centered-offset-after", ""));
    const E = t.grid && t.grid.rows > 1 && i.grid;
    E ? i.grid.initSlides(f) : i.grid && i.grid.unsetSlides();
    let I;
    const M = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter((x) => typeof t.breakpoints[x].slidesPerView < "u").length > 0;
    for (let x = 0; x < u; x += 1) {
      I = 0;
      let A;
      if (f[x] && (A = f[x]), E && i.grid.updateSlide(x, A, f), !(f[x] && F(A, "display") === "none")) {
        if (t.slidesPerView === "auto") {
          M && (f[x].style[i.getDirectionLabel("width")] = "");
          const k = getComputedStyle(A), P = A.style.transform, L = A.style.webkitTransform;
          if (P && (A.style.transform = "none"), L && (A.style.webkitTransform = "none"), t.roundLengths)
            I = i.isHorizontal() ? ie(A, "width") : ie(A, "height");
          else {
            const Y = e(k, "width"), C = e(k, "padding-left"), _ = e(k, "padding-right"), G = e(k, "margin-left"), j = e(k, "margin-right"), Le = k.getPropertyValue("box-sizing");
            if (Le && Le === "border-box")
              I = Y + G + j;
            else {
              const {
                clientWidth: fi,
                offsetWidth: ui
              } = A;
              I = Y + C + _ + G + j + (ui - fi);
            }
          }
          P && (A.style.transform = P), L && (A.style.webkitTransform = L), t.roundLengths && (I = Math.floor(I));
        } else
          I = (s - (t.slidesPerView - 1) * p) / t.slidesPerView, t.roundLengths && (I = Math.floor(I)), f[x] && (f[x].style[i.getDirectionLabel("width")] = `${I}px`);
        f[x] && (f[x].swiperSlideSize = I), g.push(I), t.centeredSlides ? (v = v + I / 2 + b / 2 + p, b === 0 && x !== 0 && (v = v - s / 2 - p), x === 0 && (v = v - s / 2 - p), Math.abs(v) < 1 / 1e3 && (v = 0), t.roundLengths && (v = Math.floor(v)), T % t.slidesPerGroup === 0 && h.push(v), m.push(v)) : (t.roundLengths && (v = Math.floor(v)), (T - Math.min(i.params.slidesPerGroupSkip, T)) % i.params.slidesPerGroup === 0 && h.push(v), m.push(v), v = v + I + p), i.virtualSize += I + p, b = I, T += 1;
      }
    }
    if (i.virtualSize = Math.max(i.virtualSize, s) + S, o && r && (t.effect === "slide" || t.effect === "coverflow") && (n.style.width = `${i.virtualSize + p}px`), t.setWrapperSize && (n.style[i.getDirectionLabel("width")] = `${i.virtualSize + p}px`), E && i.grid.updateWrapperSize(I, h), !t.centeredSlides) {
      const x = [];
      for (let A = 0; A < h.length; A += 1) {
        let k = h[A];
        t.roundLengths && (k = Math.floor(k)), h[A] <= i.virtualSize - s && x.push(k);
      }
      h = x, Math.floor(i.virtualSize - s) - Math.floor(h[h.length - 1]) > 1 && h.push(i.virtualSize - s);
    }
    if (d && t.loop) {
      const x = g[0] + p;
      if (t.slidesPerGroup > 1) {
        const A = Math.ceil((i.virtual.slidesBefore + i.virtual.slidesAfter) / t.slidesPerGroup), k = x * t.slidesPerGroup;
        for (let P = 0; P < A; P += 1)
          h.push(h[h.length - 1] + k);
      }
      for (let A = 0; A < i.virtual.slidesBefore + i.virtual.slidesAfter; A += 1)
        t.slidesPerGroup === 1 && h.push(h[h.length - 1] + x), m.push(m[m.length - 1] + x), i.virtualSize += x;
    }
    if (h.length === 0 && (h = [0]), p !== 0) {
      const x = i.isHorizontal() && o ? "marginLeft" : i.getDirectionLabel("marginRight");
      f.filter((A, k) => !t.cssMode || t.loop ? !0 : k !== f.length - 1).forEach((A) => {
        A.style[x] = `${p}px`;
      });
    }
    if (t.centeredSlides && t.centeredSlidesBounds) {
      let x = 0;
      g.forEach((k) => {
        x += k + (p || 0);
      }), x -= p;
      const A = x > s ? x - s : 0;
      h = h.map((k) => k <= 0 ? -w : k > A ? A + S : k);
    }
    if (t.centerInsufficientSlides) {
      let x = 0;
      g.forEach((k) => {
        x += k + (p || 0);
      }), x -= p;
      const A = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
      if (x + A < s) {
        const k = (s - x - A) / 2;
        h.forEach((P, L) => {
          h[L] = P - k;
        }), m.forEach((P, L) => {
          m[L] = P + k;
        });
      }
    }
    if (Object.assign(i, {
      slides: f,
      snapGrid: h,
      slidesGrid: m,
      slidesSizesGrid: g
    }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
      X(n, "--swiper-centered-offset-before", `${-h[0]}px`), X(n, "--swiper-centered-offset-after", `${i.size / 2 - g[g.length - 1] / 2}px`);
      const x = -i.snapGrid[0], A = -i.slidesGrid[0];
      i.snapGrid = i.snapGrid.map((k) => k + x), i.slidesGrid = i.slidesGrid.map((k) => k + A);
    }
    if (u !== l && i.emit("slidesLengthChange"), h.length !== y && (i.params.watchOverflow && i.checkOverflow(), i.emit("snapGridLengthChange")), m.length !== c && i.emit("slidesGridLengthChange"), t.watchSlidesProgress && i.updateSlidesOffset(), i.emit("slidesUpdated"), !d && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
      const x = `${t.containerModifierClass}backface-hidden`, A = i.el.classList.contains(x);
      u <= t.maxBackfaceHiddenSlides ? A || i.el.classList.add(x) : A && i.el.classList.remove(x);
    }
  }
  function Ue(i) {
    const e = this, t = [], n = e.virtual && e.params.virtual.enabled;
    let a = 0, s;
    typeof i == "number" ? e.setTransition(i) : i === !0 && e.setTransition(e.params.speed);
    const o = (r) => n ? e.slides[e.getSlideIndexByData(r)] : e.slides[r];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
      if (e.params.centeredSlides)
        (e.visibleSlides || []).forEach((r) => {
          t.push(r);
        });
      else
        for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
          const r = e.activeIndex + s;
          if (r > e.slides.length && !n) break;
          t.push(o(r));
        }
    else
      t.push(o(e.activeIndex));
    for (s = 0; s < t.length; s += 1)
      if (typeof t[s] < "u") {
        const r = t[s].offsetHeight;
        a = r > a ? r : a;
      }
    (a || a === 0) && (e.wrapperEl.style.height = `${a}px`);
  }
  function Ze() {
    const i = this, e = i.slides, t = i.isElement ? i.isHorizontal() ? i.wrapperEl.offsetLeft : i.wrapperEl.offsetTop : 0;
    for (let n = 0; n < e.length; n += 1)
      e[n].swiperSlideOffset = (i.isHorizontal() ? e[n].offsetLeft : e[n].offsetTop) - t - i.cssOverflowAdjustment();
  }
  const ye = (i, e, t) => {
    e && !i.classList.contains(t) ? i.classList.add(t) : !e && i.classList.contains(t) && i.classList.remove(t);
  };
  function Qe(i) {
    i === void 0 && (i = this && this.translate || 0);
    const e = this, t = e.params, {
      slides: n,
      rtlTranslate: a,
      snapGrid: s
    } = e;
    if (n.length === 0) return;
    typeof n[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let o = -i;
    a && (o = i), e.visibleSlidesIndexes = [], e.visibleSlides = [];
    let r = t.spaceBetween;
    typeof r == "string" && r.indexOf("%") >= 0 ? r = parseFloat(r.replace("%", "")) / 100 * e.size : typeof r == "string" && (r = parseFloat(r));
    for (let d = 0; d < n.length; d += 1) {
      const l = n[d];
      let f = l.swiperSlideOffset;
      t.cssMode && t.centeredSlides && (f -= n[0].swiperSlideOffset);
      const u = (o + (t.centeredSlides ? e.minTranslate() : 0) - f) / (l.swiperSlideSize + r), h = (o - s[0] + (t.centeredSlides ? e.minTranslate() : 0) - f) / (l.swiperSlideSize + r), m = -(o - f), g = m + e.slidesSizesGrid[d], w = m >= 0 && m <= e.size - e.slidesSizesGrid[d], S = m >= 0 && m < e.size - 1 || g > 1 && g <= e.size || m <= 0 && g >= e.size;
      S && (e.visibleSlides.push(l), e.visibleSlidesIndexes.push(d)), ye(l, S, t.slideVisibleClass), ye(l, w, t.slideFullyVisibleClass), l.progress = a ? -u : u, l.originalProgress = a ? -h : h;
    }
  }
  function Je(i) {
    const e = this;
    if (typeof i > "u") {
      const f = e.rtlTranslate ? -1 : 1;
      i = e && e.translate && e.translate * f || 0;
    }
    const t = e.params, n = e.maxTranslate() - e.minTranslate();
    let {
      progress: a,
      isBeginning: s,
      isEnd: o,
      progressLoop: r
    } = e;
    const d = s, l = o;
    if (n === 0)
      a = 0, s = !0, o = !0;
    else {
      a = (i - e.minTranslate()) / n;
      const f = Math.abs(i - e.minTranslate()) < 1, u = Math.abs(i - e.maxTranslate()) < 1;
      s = f || a <= 0, o = u || a >= 1, f && (a = 0), u && (a = 1);
    }
    if (t.loop) {
      const f = e.getSlideIndexByData(0), u = e.getSlideIndexByData(e.slides.length - 1), h = e.slidesGrid[f], m = e.slidesGrid[u], g = e.slidesGrid[e.slidesGrid.length - 1], w = Math.abs(i);
      w >= h ? r = (w - h) / g : r = (w + g - m) / g, r > 1 && (r -= 1);
    }
    Object.assign(e, {
      progress: a,
      progressLoop: r,
      isBeginning: s,
      isEnd: o
    }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(i), s && !d && e.emit("reachBeginning toEdge"), o && !l && e.emit("reachEnd toEdge"), (d && !s || l && !o) && e.emit("fromEdge"), e.emit("progress", a);
  }
  const re = (i, e, t) => {
    e && !i.classList.contains(t) ? i.classList.add(t) : !e && i.classList.contains(t) && i.classList.remove(t);
  };
  function et() {
    const i = this, {
      slides: e,
      params: t,
      slidesEl: n,
      activeIndex: a
    } = i, s = i.virtual && t.virtual.enabled, o = i.grid && t.grid && t.grid.rows > 1, r = (u) => D(n, `.${t.slideClass}${u}, swiper-slide${u}`)[0];
    let d, l, f;
    if (s)
      if (t.loop) {
        let u = a - i.virtual.slidesBefore;
        u < 0 && (u = i.virtual.slides.length + u), u >= i.virtual.slides.length && (u -= i.virtual.slides.length), d = r(`[data-swiper-slide-index="${u}"]`);
      } else
        d = r(`[data-swiper-slide-index="${a}"]`);
    else
      o ? (d = e.find((u) => u.column === a), f = e.find((u) => u.column === a + 1), l = e.find((u) => u.column === a - 1)) : d = e[a];
    d && (o || (f = Fe(d, `.${t.slideClass}, swiper-slide`)[0], t.loop && !f && (f = e[0]), l = je(d, `.${t.slideClass}, swiper-slide`)[0], t.loop && !l === 0 && (l = e[e.length - 1]))), e.forEach((u) => {
      re(u, u === d, t.slideActiveClass), re(u, u === f, t.slideNextClass), re(u, u === l, t.slidePrevClass);
    }), i.emitSlidesClasses();
  }
  const J = (i, e) => {
    if (!i || i.destroyed || !i.params) return;
    const t = () => i.isElement ? "swiper-slide" : `.${i.params.slideClass}`, n = e.closest(t());
    if (n) {
      let a = n.querySelector(`.${i.params.lazyPreloaderClass}`);
      !a && i.isElement && (n.shadowRoot ? a = n.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
        n.shadowRoot && (a = n.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`), a && a.remove());
      })), a && a.remove();
    }
  }, oe = (i, e) => {
    if (!i.slides[e]) return;
    const t = i.slides[e].querySelector('[loading="lazy"]');
    t && t.removeAttribute("loading");
  }, le = (i) => {
    if (!i || i.destroyed || !i.params) return;
    let e = i.params.lazyPreloadPrevNext;
    const t = i.slides.length;
    if (!t || !e || e < 0) return;
    e = Math.min(e, t);
    const n = i.params.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(i.params.slidesPerView), a = i.activeIndex;
    if (i.params.grid && i.params.grid.rows > 1) {
      const o = a, r = [o - e];
      r.push(...Array.from({
        length: e
      }).map((d, l) => o + n + l)), i.slides.forEach((d, l) => {
        r.includes(d.column) && oe(i, l);
      });
      return;
    }
    const s = a + n - 1;
    if (i.params.rewind || i.params.loop)
      for (let o = a - e; o <= s + e; o += 1) {
        const r = (o % t + t) % t;
        (r < a || r > s) && oe(i, r);
      }
    else
      for (let o = Math.max(a - e, 0); o <= Math.min(s + e, t - 1); o += 1)
        o !== a && (o > s || o < a) && oe(i, o);
  };
  function tt(i) {
    const {
      slidesGrid: e,
      params: t
    } = i, n = i.rtlTranslate ? i.translate : -i.translate;
    let a;
    for (let s = 0; s < e.length; s += 1)
      typeof e[s + 1] < "u" ? n >= e[s] && n < e[s + 1] - (e[s + 1] - e[s]) / 2 ? a = s : n >= e[s] && n < e[s + 1] && (a = s + 1) : n >= e[s] && (a = s);
    return t.normalizeSlideIndex && (a < 0 || typeof a > "u") && (a = 0), a;
  }
  function it(i) {
    const e = this, t = e.rtlTranslate ? e.translate : -e.translate, {
      snapGrid: n,
      params: a,
      activeIndex: s,
      realIndex: o,
      snapIndex: r
    } = e;
    let d = i, l;
    const f = (m) => {
      let g = m - e.virtual.slidesBefore;
      return g < 0 && (g = e.virtual.slides.length + g), g >= e.virtual.slides.length && (g -= e.virtual.slides.length), g;
    };
    if (typeof d > "u" && (d = tt(e)), n.indexOf(t) >= 0)
      l = n.indexOf(t);
    else {
      const m = Math.min(a.slidesPerGroupSkip, d);
      l = m + Math.floor((d - m) / a.slidesPerGroup);
    }
    if (l >= n.length && (l = n.length - 1), d === s && !e.params.loop) {
      l !== r && (e.snapIndex = l, e.emit("snapIndexChange"));
      return;
    }
    if (d === s && e.params.loop && e.virtual && e.params.virtual.enabled) {
      e.realIndex = f(d);
      return;
    }
    const u = e.grid && a.grid && a.grid.rows > 1;
    let h;
    if (e.virtual && a.virtual.enabled && a.loop)
      h = f(d);
    else if (u) {
      const m = e.slides.find((w) => w.column === d);
      let g = parseInt(m.getAttribute("data-swiper-slide-index"), 10);
      Number.isNaN(g) && (g = Math.max(e.slides.indexOf(m), 0)), h = Math.floor(g / a.grid.rows);
    } else if (e.slides[d]) {
      const m = e.slides[d].getAttribute("data-swiper-slide-index");
      m ? h = parseInt(m, 10) : h = d;
    } else
      h = d;
    Object.assign(e, {
      previousSnapIndex: r,
      snapIndex: l,
      previousRealIndex: o,
      realIndex: h,
      previousIndex: s,
      activeIndex: d
    }), e.initialized && le(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (o !== h && e.emit("realIndexChange"), e.emit("slideChange"));
  }
  function nt(i, e) {
    const t = this, n = t.params;
    let a = i.closest(`.${n.slideClass}, swiper-slide`);
    !a && t.isElement && e && e.length > 1 && e.includes(i) && [...e.slice(e.indexOf(i) + 1, e.length)].forEach((r) => {
      !a && r.matches && r.matches(`.${n.slideClass}, swiper-slide`) && (a = r);
    });
    let s = !1, o;
    if (a) {
      for (let r = 0; r < t.slides.length; r += 1)
        if (t.slides[r] === a) {
          s = !0, o = r;
          break;
        }
    }
    if (a && s)
      t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(a.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = o;
    else {
      t.clickedSlide = void 0, t.clickedIndex = void 0;
      return;
    }
    n.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
  }
  var st = {
    updateSize: Ke,
    updateSlides: Xe,
    updateAutoHeight: Ue,
    updateSlidesOffset: Ze,
    updateSlidesProgress: Qe,
    updateProgress: Je,
    updateSlidesClasses: et,
    updateActiveIndex: it,
    updateClickedSlide: nt
  };
  function at(i) {
    i === void 0 && (i = this.isHorizontal() ? "x" : "y");
    const e = this, {
      params: t,
      rtlTranslate: n,
      translate: a,
      wrapperEl: s
    } = e;
    if (t.virtualTranslate)
      return n ? -a : a;
    if (t.cssMode)
      return a;
    let o = Ge(s, i);
    return o += e.cssOverflowAdjustment(), n && (o = -o), o || 0;
  }
  function rt(i, e) {
    const t = this, {
      rtlTranslate: n,
      params: a,
      wrapperEl: s,
      progress: o
    } = t;
    let r = 0, d = 0;
    const l = 0;
    t.isHorizontal() ? r = n ? -i : i : d = i, a.roundLengths && (r = Math.floor(r), d = Math.floor(d)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? r : d, a.cssMode ? s[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -r : -d : a.virtualTranslate || (t.isHorizontal() ? r -= t.cssOverflowAdjustment() : d -= t.cssOverflowAdjustment(), s.style.transform = `translate3d(${r}px, ${d}px, ${l}px)`);
    let f;
    const u = t.maxTranslate() - t.minTranslate();
    u === 0 ? f = 0 : f = (i - t.minTranslate()) / u, f !== o && t.updateProgress(i), t.emit("setTranslate", t.translate, e);
  }
  function ot() {
    return -this.snapGrid[0];
  }
  function lt() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function dt(i, e, t, n, a) {
    i === void 0 && (i = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), n === void 0 && (n = !0);
    const s = this, {
      params: o,
      wrapperEl: r
    } = s;
    if (s.animating && o.preventInteractionOnTransition)
      return !1;
    const d = s.minTranslate(), l = s.maxTranslate();
    let f;
    if (n && i > d ? f = d : n && i < l ? f = l : f = i, s.updateProgress(f), o.cssMode) {
      const u = s.isHorizontal();
      if (e === 0)
        r[u ? "scrollLeft" : "scrollTop"] = -f;
      else {
        if (!s.support.smoothScroll)
          return ue({
            swiper: s,
            targetPosition: -f,
            side: u ? "left" : "top"
          }), !0;
        r.scrollTo({
          [u ? "left" : "top"]: -f,
          behavior: "smooth"
        });
      }
      return !0;
    }
    return e === 0 ? (s.setTransition(0), s.setTranslate(f), t && (s.emit("beforeTransitionStart", e, a), s.emit("transitionEnd"))) : (s.setTransition(e), s.setTranslate(f), t && (s.emit("beforeTransitionStart", e, a), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(h) {
      !s || s.destroyed || h.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, s.animating = !1, t && s.emit("transitionEnd"));
    }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))), !0;
  }
  var ct = {
    getTranslate: at,
    setTranslate: rt,
    minTranslate: ot,
    maxTranslate: lt,
    translateTo: dt
  };
  function pt(i, e) {
    const t = this;
    t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${i}ms`, t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : ""), t.emit("setTransition", i, e);
  }
  function be(i) {
    let {
      swiper: e,
      runCallbacks: t,
      direction: n,
      step: a
    } = i;
    const {
      activeIndex: s,
      previousIndex: o
    } = e;
    let r = n;
    r || (s > o ? r = "next" : s < o ? r = "prev" : r = "reset"), e.emit(`transition${a}`), t && r === "reset" ? e.emit(`slideResetTransition${a}`) : t && s !== o && (e.emit(`slideChangeTransition${a}`), r === "next" ? e.emit(`slideNextTransition${a}`) : e.emit(`slidePrevTransition${a}`));
  }
  function ft(i, e) {
    i === void 0 && (i = !0);
    const t = this, {
      params: n
    } = t;
    n.cssMode || (n.autoHeight && t.updateAutoHeight(), be({
      swiper: t,
      runCallbacks: i,
      direction: e,
      step: "Start"
    }));
  }
  function ut(i, e) {
    i === void 0 && (i = !0);
    const t = this, {
      params: n
    } = t;
    t.animating = !1, !n.cssMode && (t.setTransition(0), be({
      swiper: t,
      runCallbacks: i,
      direction: e,
      step: "End"
    }));
  }
  var gt = {
    setTransition: pt,
    transitionStart: ft,
    transitionEnd: ut
  };
  function ht(i, e, t, n, a) {
    i === void 0 && (i = 0), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
    const s = this;
    let o = i;
    o < 0 && (o = 0);
    const {
      params: r,
      snapGrid: d,
      slidesGrid: l,
      previousIndex: f,
      activeIndex: u,
      rtlTranslate: h,
      wrapperEl: m,
      enabled: g
    } = s;
    if (!g && !n && !a || s.destroyed || s.animating && r.preventInteractionOnTransition)
      return !1;
    typeof e > "u" && (e = s.params.speed);
    const w = Math.min(s.params.slidesPerGroupSkip, o);
    let S = w + Math.floor((o - w) / s.params.slidesPerGroup);
    S >= d.length && (S = d.length - 1);
    const y = -d[S];
    if (r.normalizeSlideIndex)
      for (let E = 0; E < l.length; E += 1) {
        const I = -Math.floor(y * 100), M = Math.floor(l[E] * 100), x = Math.floor(l[E + 1] * 100);
        typeof l[E + 1] < "u" ? I >= M && I < x - (x - M) / 2 ? o = E : I >= M && I < x && (o = E + 1) : I >= M && (o = E);
      }
    if (s.initialized && o !== u && (!s.allowSlideNext && (h ? y > s.translate && y > s.minTranslate() : y < s.translate && y < s.minTranslate()) || !s.allowSlidePrev && y > s.translate && y > s.maxTranslate() && (u || 0) !== o))
      return !1;
    o !== (f || 0) && t && s.emit("beforeSlideChangeStart"), s.updateProgress(y);
    let c;
    o > u ? c = "next" : o < u ? c = "prev" : c = "reset";
    const p = s.virtual && s.params.virtual.enabled;
    if (!(p && a) && (h && -y === s.translate || !h && y === s.translate))
      return s.updateActiveIndex(o), r.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), r.effect !== "slide" && s.setTranslate(y), c !== "reset" && (s.transitionStart(t, c), s.transitionEnd(t, c)), !1;
    if (r.cssMode) {
      const E = s.isHorizontal(), I = h ? y : -y;
      if (e === 0)
        p && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), p && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
          m[E ? "scrollLeft" : "scrollTop"] = I;
        })) : m[E ? "scrollLeft" : "scrollTop"] = I, p && requestAnimationFrame(() => {
          s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1;
        });
      else {
        if (!s.support.smoothScroll)
          return ue({
            swiper: s,
            targetPosition: I,
            side: E ? "left" : "top"
          }), !0;
        m.scrollTo({
          [E ? "left" : "top"]: I,
          behavior: "smooth"
        });
      }
      return !0;
    }
    const T = ve().isSafari;
    return p && !a && T && s.isElement && s.virtual.update(!1, !1, o), s.setTransition(e), s.setTranslate(y), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, n), s.transitionStart(t, c), e === 0 ? s.transitionEnd(t, c) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(I) {
      !s || s.destroyed || I.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(t, c));
    }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0;
  }
  function mt(i, e, t, n) {
    i === void 0 && (i = 0), t === void 0 && (t = !0), typeof i == "string" && (i = parseInt(i, 10));
    const a = this;
    if (a.destroyed) return;
    typeof e > "u" && (e = a.params.speed);
    const s = a.grid && a.params.grid && a.params.grid.rows > 1;
    let o = i;
    if (a.params.loop)
      if (a.virtual && a.params.virtual.enabled)
        o = o + a.virtual.slidesBefore;
      else {
        let r;
        if (s) {
          const h = o * a.params.grid.rows;
          r = a.slides.find((m) => m.getAttribute("data-swiper-slide-index") * 1 === h).column;
        } else
          r = a.getSlideIndexByData(o);
        const d = s ? Math.ceil(a.slides.length / a.params.grid.rows) : a.slides.length, {
          centeredSlides: l
        } = a.params;
        let f = a.params.slidesPerView;
        f === "auto" ? f = a.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(a.params.slidesPerView, 10)), l && f % 2 === 0 && (f = f + 1));
        let u = d - r < f;
        if (l && (u = u || r < Math.ceil(f / 2)), n && l && a.params.slidesPerView !== "auto" && !s && (u = !1), u) {
          const h = l ? r < a.activeIndex ? "prev" : "next" : r - a.activeIndex - 1 < a.params.slidesPerView ? "next" : "prev";
          a.loopFix({
            direction: h,
            slideTo: !0,
            activeSlideIndex: h === "next" ? r + 1 : r - d + 1,
            slideRealIndex: h === "next" ? a.realIndex : void 0
          });
        }
        if (s) {
          const h = o * a.params.grid.rows;
          o = a.slides.find((m) => m.getAttribute("data-swiper-slide-index") * 1 === h).column;
        } else
          o = a.getSlideIndexByData(o);
      }
    return requestAnimationFrame(() => {
      a.slideTo(o, e, t, n);
    }), a;
  }
  function wt(i, e, t) {
    e === void 0 && (e = !0);
    const n = this, {
      enabled: a,
      params: s,
      animating: o
    } = n;
    if (!a || n.destroyed) return n;
    typeof i > "u" && (i = n.params.speed);
    let r = s.slidesPerGroup;
    s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (r = Math.max(n.slidesPerViewDynamic("current", !0), 1));
    const d = n.activeIndex < s.slidesPerGroupSkip ? 1 : r, l = n.virtual && s.virtual.enabled;
    if (s.loop) {
      if (o && !l && s.loopPreventsSliding) return !1;
      if (n.loopFix({
        direction: "next"
      }), n._clientLeft = n.wrapperEl.clientLeft, n.activeIndex === n.slides.length - 1 && s.cssMode)
        return requestAnimationFrame(() => {
          n.slideTo(n.activeIndex + d, i, e, t);
        }), !0;
    }
    return s.rewind && n.isEnd ? n.slideTo(0, i, e, t) : n.slideTo(n.activeIndex + d, i, e, t);
  }
  function vt(i, e, t) {
    e === void 0 && (e = !0);
    const n = this, {
      params: a,
      snapGrid: s,
      slidesGrid: o,
      rtlTranslate: r,
      enabled: d,
      animating: l
    } = n;
    if (!d || n.destroyed) return n;
    typeof i > "u" && (i = n.params.speed);
    const f = n.virtual && a.virtual.enabled;
    if (a.loop) {
      if (l && !f && a.loopPreventsSliding) return !1;
      n.loopFix({
        direction: "prev"
      }), n._clientLeft = n.wrapperEl.clientLeft;
    }
    const u = r ? n.translate : -n.translate;
    function h(c) {
      return c < 0 ? -Math.floor(Math.abs(c)) : Math.floor(c);
    }
    const m = h(u), g = s.map((c) => h(c)), w = a.freeMode && a.freeMode.enabled;
    let S = s[g.indexOf(m) - 1];
    if (typeof S > "u" && (a.cssMode || w)) {
      let c;
      s.forEach((p, v) => {
        m >= p && (c = v);
      }), typeof c < "u" && (S = w ? s[c] : s[c > 0 ? c - 1 : c]);
    }
    let y = 0;
    if (typeof S < "u" && (y = o.indexOf(S), y < 0 && (y = n.activeIndex - 1), a.slidesPerView === "auto" && a.slidesPerGroup === 1 && a.slidesPerGroupAuto && (y = y - n.slidesPerViewDynamic("previous", !0) + 1, y = Math.max(y, 0))), a.rewind && n.isBeginning) {
      const c = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
      return n.slideTo(c, i, e, t);
    } else if (a.loop && n.activeIndex === 0 && a.cssMode)
      return requestAnimationFrame(() => {
        n.slideTo(y, i, e, t);
      }), !0;
    return n.slideTo(y, i, e, t);
  }
  function yt(i, e, t) {
    e === void 0 && (e = !0);
    const n = this;
    if (!n.destroyed)
      return typeof i > "u" && (i = n.params.speed), n.slideTo(n.activeIndex, i, e, t);
  }
  function bt(i, e, t, n) {
    e === void 0 && (e = !0), n === void 0 && (n = 0.5);
    const a = this;
    if (a.destroyed) return;
    typeof i > "u" && (i = a.params.speed);
    let s = a.activeIndex;
    const o = Math.min(a.params.slidesPerGroupSkip, s), r = o + Math.floor((s - o) / a.params.slidesPerGroup), d = a.rtlTranslate ? a.translate : -a.translate;
    if (d >= a.snapGrid[r]) {
      const l = a.snapGrid[r], f = a.snapGrid[r + 1];
      d - l > (f - l) * n && (s += a.params.slidesPerGroup);
    } else {
      const l = a.snapGrid[r - 1], f = a.snapGrid[r];
      d - l <= (f - l) * n && (s -= a.params.slidesPerGroup);
    }
    return s = Math.max(s, 0), s = Math.min(s, a.slidesGrid.length - 1), a.slideTo(s, i, e, t);
  }
  function xt() {
    const i = this;
    if (i.destroyed) return;
    const {
      params: e,
      slidesEl: t
    } = i, n = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
    let a = i.clickedIndex, s;
    const o = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
      if (i.animating) return;
      s = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? a < i.loopedSlides - n / 2 || a > i.slides.length - i.loopedSlides + n / 2 ? (i.loopFix(), a = i.getSlideIndex(D(t, `${o}[data-swiper-slide-index="${s}"]`)[0]), te(() => {
        i.slideTo(a);
      })) : i.slideTo(a) : a > i.slides.length - n ? (i.loopFix(), a = i.getSlideIndex(D(t, `${o}[data-swiper-slide-index="${s}"]`)[0]), te(() => {
        i.slideTo(a);
      })) : i.slideTo(a);
    } else
      i.slideTo(a);
  }
  var St = {
    slideTo: ht,
    slideToLoop: mt,
    slideNext: wt,
    slidePrev: vt,
    slideReset: yt,
    slideToClosest: bt,
    slideToClickedSlide: xt
  };
  function At(i, e) {
    const t = this, {
      params: n,
      slidesEl: a
    } = t;
    if (!n.loop || t.virtual && t.params.virtual.enabled) return;
    const s = () => {
      D(a, `.${n.slideClass}, swiper-slide`).forEach((h, m) => {
        h.setAttribute("data-swiper-slide-index", m);
      });
    }, o = t.grid && n.grid && n.grid.rows > 1, r = n.slidesPerGroup * (o ? n.grid.rows : 1), d = t.slides.length % r !== 0, l = o && t.slides.length % n.grid.rows !== 0, f = (u) => {
      for (let h = 0; h < u; h += 1) {
        const m = t.isElement ? Z("swiper-slide", [n.slideBlankClass]) : Z("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(m);
      }
    };
    if (d) {
      if (n.loopAddBlankSlides) {
        const u = r - t.slides.length % r;
        f(u), t.recalcSlides(), t.updateSlides();
      } else
        U("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      s();
    } else if (l) {
      if (n.loopAddBlankSlides) {
        const u = n.grid.rows - t.slides.length % n.grid.rows;
        f(u), t.recalcSlides(), t.updateSlides();
      } else
        U("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      s();
    } else
      s();
    t.loopFix({
      slideRealIndex: i,
      direction: n.centeredSlides ? void 0 : "next",
      initial: e
    });
  }
  function Tt(i) {
    let {
      slideRealIndex: e,
      slideTo: t = !0,
      direction: n,
      setTranslate: a,
      activeSlideIndex: s,
      initial: o,
      byController: r,
      byMousewheel: d
    } = i === void 0 ? {} : i;
    const l = this;
    if (!l.params.loop) return;
    l.emit("beforeLoopFix");
    const {
      slides: f,
      allowSlidePrev: u,
      allowSlideNext: h,
      slidesEl: m,
      params: g
    } = l, {
      centeredSlides: w,
      initialSlide: S
    } = g;
    if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && g.virtual.enabled) {
      t && (!g.centeredSlides && l.snapIndex === 0 ? l.slideTo(l.virtual.slides.length, 0, !1, !0) : g.centeredSlides && l.snapIndex < g.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)), l.allowSlidePrev = u, l.allowSlideNext = h, l.emit("loopFix");
      return;
    }
    let y = g.slidesPerView;
    y === "auto" ? y = l.slidesPerViewDynamic() : (y = Math.ceil(parseFloat(g.slidesPerView, 10)), w && y % 2 === 0 && (y = y + 1));
    const c = g.slidesPerGroupAuto ? y : g.slidesPerGroup;
    let p = c;
    p % c !== 0 && (p += c - p % c), p += g.loopAdditionalSlides, l.loopedSlides = p;
    const v = l.grid && g.grid && g.grid.rows > 1;
    f.length < y + p || l.params.effect === "cards" && f.length < y + p * 2 ? U("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : v && g.grid.fill === "row" && U("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const b = [], T = [], E = v ? Math.ceil(f.length / g.grid.rows) : f.length, I = o && E - S < y && !w;
    let M = I ? S : l.activeIndex;
    typeof s > "u" ? s = l.getSlideIndex(f.find((C) => C.classList.contains(g.slideActiveClass))) : M = s;
    const x = n === "next" || !n, A = n === "prev" || !n;
    let k = 0, P = 0;
    const Y = (v ? f[s].column : s) + (w && typeof a > "u" ? -y / 2 + 0.5 : 0);
    if (Y < p) {
      k = Math.max(p - Y, c);
      for (let C = 0; C < p - Y; C += 1) {
        const _ = C - Math.floor(C / E) * E;
        if (v) {
          const G = E - _ - 1;
          for (let j = f.length - 1; j >= 0; j -= 1)
            f[j].column === G && b.push(j);
        } else
          b.push(E - _ - 1);
      }
    } else if (Y + y > E - p) {
      P = Math.max(Y - (E - p * 2), c), I && (P = Math.max(P, y - E + S + 1));
      for (let C = 0; C < P; C += 1) {
        const _ = C - Math.floor(C / E) * E;
        v ? f.forEach((G, j) => {
          G.column === _ && T.push(j);
        }) : T.push(_);
      }
    }
    if (l.__preventObserver__ = !0, requestAnimationFrame(() => {
      l.__preventObserver__ = !1;
    }), l.params.effect === "cards" && f.length < y + p * 2 && (T.includes(s) && T.splice(T.indexOf(s), 1), b.includes(s) && b.splice(b.indexOf(s), 1)), A && b.forEach((C) => {
      f[C].swiperLoopMoveDOM = !0, m.prepend(f[C]), f[C].swiperLoopMoveDOM = !1;
    }), x && T.forEach((C) => {
      f[C].swiperLoopMoveDOM = !0, m.append(f[C]), f[C].swiperLoopMoveDOM = !1;
    }), l.recalcSlides(), g.slidesPerView === "auto" ? l.updateSlides() : v && (b.length > 0 && A || T.length > 0 && x) && l.slides.forEach((C, _) => {
      l.grid.updateSlide(_, C, l.slides);
    }), g.watchSlidesProgress && l.updateSlidesOffset(), t) {
      if (b.length > 0 && A) {
        if (typeof e > "u") {
          const C = l.slidesGrid[M], G = l.slidesGrid[M + k] - C;
          d ? l.setTranslate(l.translate - G) : (l.slideTo(M + Math.ceil(k), 0, !1, !0), a && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - G, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - G));
        } else if (a) {
          const C = v ? b.length / g.grid.rows : b.length;
          l.slideTo(l.activeIndex + C, 0, !1, !0), l.touchEventsData.currentTranslate = l.translate;
        }
      } else if (T.length > 0 && x)
        if (typeof e > "u") {
          const C = l.slidesGrid[M], G = l.slidesGrid[M - P] - C;
          d ? l.setTranslate(l.translate - G) : (l.slideTo(M - P, 0, !1, !0), a && (l.touchEventsData.startTranslate = l.touchEventsData.startTranslate - G, l.touchEventsData.currentTranslate = l.touchEventsData.currentTranslate - G));
        } else {
          const C = v ? T.length / g.grid.rows : T.length;
          l.slideTo(l.activeIndex - C, 0, !1, !0);
        }
    }
    if (l.allowSlidePrev = u, l.allowSlideNext = h, l.controller && l.controller.control && !r) {
      const C = {
        slideRealIndex: e,
        direction: n,
        setTranslate: a,
        activeSlideIndex: s,
        byController: !0
      };
      Array.isArray(l.controller.control) ? l.controller.control.forEach((_) => {
        !_.destroyed && _.params.loop && _.loopFix({
          ...C,
          slideTo: _.params.slidesPerView === g.slidesPerView ? t : !1
        });
      }) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix({
        ...C,
        slideTo: l.controller.control.params.slidesPerView === g.slidesPerView ? t : !1
      });
    }
    l.emit("loopFix");
  }
  function Ct() {
    const i = this, {
      params: e,
      slidesEl: t
    } = i;
    if (!e.loop || !t || i.virtual && i.params.virtual.enabled) return;
    i.recalcSlides();
    const n = [];
    i.slides.forEach((a) => {
      const s = typeof a.swiperSlideIndex > "u" ? a.getAttribute("data-swiper-slide-index") * 1 : a.swiperSlideIndex;
      n[s] = a;
    }), i.slides.forEach((a) => {
      a.removeAttribute("data-swiper-slide-index");
    }), n.forEach((a) => {
      t.append(a);
    }), i.recalcSlides(), i.slideTo(i.realIndex, 0);
  }
  var Et = {
    loopCreate: At,
    loopFix: Tt,
    loopDestroy: Ct
  };
  function It(i) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
    const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = i ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
      e.__preventObserver__ = !1;
    });
  }
  function kt() {
    const i = this;
    i.params.watchOverflow && i.isLocked || i.params.cssMode || (i.isElement && (i.__preventObserver__ = !0), i[i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", i.isElement && requestAnimationFrame(() => {
      i.__preventObserver__ = !1;
    }));
  }
  var Mt = {
    setGrabCursor: It,
    unsetGrabCursor: kt
  };
  function Pt(i, e) {
    e === void 0 && (e = this);
    function t(n) {
      if (!n || n === V() || n === z()) return null;
      n.assignedSlot && (n = n.assignedSlot);
      const a = n.closest(i);
      return !a && !n.getRootNode ? null : a || t(n.getRootNode().host);
    }
    return t(e);
  }
  function xe(i, e, t) {
    const n = z(), {
      params: a
    } = i, s = a.edgeSwipeDetection, o = a.edgeSwipeThreshold;
    return s && (t <= o || t >= n.innerWidth - o) ? s === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
  }
  function Lt(i) {
    const e = this, t = V();
    let n = i;
    n.originalEvent && (n = n.originalEvent);
    const a = e.touchEventsData;
    if (n.type === "pointerdown") {
      if (a.pointerId !== null && a.pointerId !== n.pointerId)
        return;
      a.pointerId = n.pointerId;
    } else n.type === "touchstart" && n.targetTouches.length === 1 && (a.touchId = n.targetTouches[0].identifier);
    if (n.type === "touchstart") {
      xe(e, n, n.targetTouches[0].pageX);
      return;
    }
    const {
      params: s,
      touches: o,
      enabled: r
    } = e;
    if (!r || !s.simulateTouch && n.pointerType === "mouse" || e.animating && s.preventInteractionOnTransition)
      return;
    !e.animating && s.cssMode && s.loop && e.loopFix();
    let d = n.target;
    if (s.touchEventsTarget === "wrapper" && !De(d, e.wrapperEl) || "which" in n && n.which === 3 || "button" in n && n.button > 0 || a.isTouched && a.isMoved) return;
    const l = !!s.noSwipingClass && s.noSwipingClass !== "", f = n.composedPath ? n.composedPath() : n.path;
    l && n.target && n.target.shadowRoot && f && (d = f[0]);
    const u = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`, h = !!(n.target && n.target.shadowRoot);
    if (s.noSwiping && (h ? Pt(u, d) : d.closest(u))) {
      e.allowClick = !0;
      return;
    }
    if (s.swipeHandler && !d.closest(s.swipeHandler))
      return;
    o.currentX = n.pageX, o.currentY = n.pageY;
    const m = o.currentX, g = o.currentY;
    if (!xe(e, n, m))
      return;
    Object.assign(a, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), o.startX = m, o.startY = g, a.touchStartTime = q(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, s.threshold > 0 && (a.allowThresholdMove = !1);
    let w = !0;
    d.matches(a.focusableElements) && (w = !1, d.nodeName === "SELECT" && (a.isTouched = !1)), t.activeElement && t.activeElement.matches(a.focusableElements) && t.activeElement !== d && (n.pointerType === "mouse" || n.pointerType !== "mouse" && !d.matches(a.focusableElements)) && t.activeElement.blur();
    const S = w && e.allowTouchMove && s.touchStartPreventDefault;
    (s.touchStartForcePreventDefault || S) && !d.isContentEditable && n.preventDefault(), s.freeMode && s.freeMode.enabled && e.freeMode && e.animating && !s.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", n);
  }
  function Yt(i) {
    const e = V(), t = this, n = t.touchEventsData, {
      params: a,
      touches: s,
      rtlTranslate: o,
      enabled: r
    } = t;
    if (!r || !a.simulateTouch && i.pointerType === "mouse") return;
    let d = i;
    if (d.originalEvent && (d = d.originalEvent), d.type === "pointermove" && (n.touchId !== null || d.pointerId !== n.pointerId))
      return;
    let l;
    if (d.type === "touchmove") {
      if (l = [...d.changedTouches].find((b) => b.identifier === n.touchId), !l || l.identifier !== n.touchId) return;
    } else
      l = d;
    if (!n.isTouched) {
      n.startMoving && n.isScrolling && t.emit("touchMoveOpposite", d);
      return;
    }
    const f = l.pageX, u = l.pageY;
    if (d.preventedByNestedSwiper) {
      s.startX = f, s.startY = u;
      return;
    }
    if (!t.allowTouchMove) {
      d.target.matches(n.focusableElements) || (t.allowClick = !1), n.isTouched && (Object.assign(s, {
        startX: f,
        startY: u,
        currentX: f,
        currentY: u
      }), n.touchStartTime = q());
      return;
    }
    if (a.touchReleaseOnEdges && !a.loop)
      if (t.isVertical()) {
        if (u < s.startY && t.translate <= t.maxTranslate() || u > s.startY && t.translate >= t.minTranslate()) {
          n.isTouched = !1, n.isMoved = !1;
          return;
        }
      } else {
        if (o && (f > s.startX && -t.translate <= t.maxTranslate() || f < s.startX && -t.translate >= t.minTranslate()))
          return;
        if (!o && (f < s.startX && t.translate <= t.maxTranslate() || f > s.startX && t.translate >= t.minTranslate()))
          return;
      }
    if (e.activeElement && e.activeElement.matches(n.focusableElements) && e.activeElement !== d.target && d.pointerType !== "mouse" && e.activeElement.blur(), e.activeElement && d.target === e.activeElement && d.target.matches(n.focusableElements)) {
      n.isMoved = !0, t.allowClick = !1;
      return;
    }
    n.allowTouchCallbacks && t.emit("touchMove", d), s.previousX = s.currentX, s.previousY = s.currentY, s.currentX = f, s.currentY = u;
    const h = s.currentX - s.startX, m = s.currentY - s.startY;
    if (t.params.threshold && Math.sqrt(h ** 2 + m ** 2) < t.params.threshold) return;
    if (typeof n.isScrolling > "u") {
      let b;
      t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? n.isScrolling = !1 : h * h + m * m >= 25 && (b = Math.atan2(Math.abs(m), Math.abs(h)) * 180 / Math.PI, n.isScrolling = t.isHorizontal() ? b > a.touchAngle : 90 - b > a.touchAngle);
    }
    if (n.isScrolling && t.emit("touchMoveOpposite", d), typeof n.startMoving > "u" && (s.currentX !== s.startX || s.currentY !== s.startY) && (n.startMoving = !0), n.isScrolling || d.type === "touchmove" && n.preventTouchMoveFromPointerMove) {
      n.isTouched = !1;
      return;
    }
    if (!n.startMoving)
      return;
    t.allowClick = !1, !a.cssMode && d.cancelable && d.preventDefault(), a.touchMoveStopPropagation && !a.nested && d.stopPropagation();
    let g = t.isHorizontal() ? h : m, w = t.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
    a.oneWayMovement && (g = Math.abs(g) * (o ? 1 : -1), w = Math.abs(w) * (o ? 1 : -1)), s.diff = g, g *= a.touchRatio, o && (g = -g, w = -w);
    const S = t.touchesDirection;
    t.swipeDirection = g > 0 ? "prev" : "next", t.touchesDirection = w > 0 ? "prev" : "next";
    const y = t.params.loop && !a.cssMode, c = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
    if (!n.isMoved) {
      if (y && c && t.loopFix({
        direction: t.swipeDirection
      }), n.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
        const b = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: {
            bySwiperTouchMove: !0
          }
        });
        t.wrapperEl.dispatchEvent(b);
      }
      n.allowMomentumBounce = !1, a.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", d);
    }
    if ((/* @__PURE__ */ new Date()).getTime(), a._loopSwapReset !== !1 && n.isMoved && n.allowThresholdMove && S !== t.touchesDirection && y && c && Math.abs(g) >= 1) {
      Object.assign(s, {
        startX: f,
        startY: u,
        currentX: f,
        currentY: u,
        startTranslate: n.currentTranslate
      }), n.loopSwapReset = !0, n.startTranslate = n.currentTranslate;
      return;
    }
    t.emit("sliderMove", d), n.isMoved = !0, n.currentTranslate = g + n.startTranslate;
    let p = !0, v = a.resistanceRatio;
    if (a.touchReleaseOnEdges && (v = 0), g > 0 ? (y && c && n.allowThresholdMove && n.currentTranslate > (a.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] - (a.slidesPerView !== "auto" && t.slides.length - a.slidesPerView >= 2 ? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween : 0) - t.params.spaceBetween : t.minTranslate()) && t.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), n.currentTranslate > t.minTranslate() && (p = !1, a.resistance && (n.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + n.startTranslate + g) ** v))) : g < 0 && (y && c && n.allowThresholdMove && n.currentTranslate < (a.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween + (a.slidesPerView !== "auto" && t.slides.length - a.slidesPerView >= 2 ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween : 0) : t.maxTranslate()) && t.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: t.slides.length - (a.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
    }), n.currentTranslate < t.maxTranslate() && (p = !1, a.resistance && (n.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - n.startTranslate - g) ** v))), p && (d.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (n.currentTranslate = n.startTranslate), a.threshold > 0)
      if (Math.abs(g) > a.threshold || n.allowThresholdMove) {
        if (!n.allowThresholdMove) {
          n.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, n.currentTranslate = n.startTranslate, s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY;
          return;
        }
      } else {
        n.currentTranslate = n.startTranslate;
        return;
      }
    !a.followFinger || a.cssMode || ((a.freeMode && a.freeMode.enabled && t.freeMode || a.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(n.currentTranslate), t.setTranslate(n.currentTranslate));
  }
  function Bt(i) {
    const e = this, t = e.touchEventsData;
    let n = i;
    n.originalEvent && (n = n.originalEvent);
    let a;
    if (n.type === "touchend" || n.type === "touchcancel") {
      if (a = [...n.changedTouches].find((b) => b.identifier === t.touchId), !a || a.identifier !== t.touchId) return;
    } else {
      if (t.touchId !== null || n.pointerId !== t.pointerId) return;
      a = n;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(n.type) && !(["pointercancel", "contextmenu"].includes(n.type) && (e.browser.isSafari || e.browser.isWebView)))
      return;
    t.pointerId = null, t.touchId = null;
    const {
      params: o,
      touches: r,
      rtlTranslate: d,
      slidesGrid: l,
      enabled: f
    } = e;
    if (!f || !o.simulateTouch && n.pointerType === "mouse") return;
    if (t.allowTouchCallbacks && e.emit("touchEnd", n), t.allowTouchCallbacks = !1, !t.isTouched) {
      t.isMoved && o.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
      return;
    }
    o.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const u = q(), h = u - t.touchStartTime;
    if (e.allowClick) {
      const b = n.path || n.composedPath && n.composedPath();
      e.updateClickedSlide(b && b[0] || n.target, b), e.emit("tap click", n), h < 300 && u - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", n);
    }
    if (t.lastClickTime = q(), te(() => {
      e.destroyed || (e.allowClick = !0);
    }), !t.isTouched || !t.isMoved || !e.swipeDirection || r.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
      t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
      return;
    }
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    let m;
    if (o.followFinger ? m = d ? e.translate : -e.translate : m = -t.currentTranslate, o.cssMode)
      return;
    if (o.freeMode && o.freeMode.enabled) {
      e.freeMode.onTouchEnd({
        currentPos: m
      });
      return;
    }
    const g = m >= -e.maxTranslate() && !e.params.loop;
    let w = 0, S = e.slidesSizesGrid[0];
    for (let b = 0; b < l.length; b += b < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
      const T = b < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
      typeof l[b + T] < "u" ? (g || m >= l[b] && m < l[b + T]) && (w = b, S = l[b + T] - l[b]) : (g || m >= l[b]) && (w = b, S = l[l.length - 1] - l[l.length - 2]);
    }
    let y = null, c = null;
    o.rewind && (e.isBeginning ? c = o.virtual && o.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (y = 0));
    const p = (m - l[w]) / S, v = w < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    if (h > o.longSwipesMs) {
      if (!o.longSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.swipeDirection === "next" && (p >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? y : w + v) : e.slideTo(w)), e.swipeDirection === "prev" && (p > 1 - o.longSwipesRatio ? e.slideTo(w + v) : c !== null && p < 0 && Math.abs(p) > o.longSwipesRatio ? e.slideTo(c) : e.slideTo(w));
    } else {
      if (!o.shortSwipes) {
        e.slideTo(e.activeIndex);
        return;
      }
      e.navigation && (n.target === e.navigation.nextEl || n.target === e.navigation.prevEl) ? n.target === e.navigation.nextEl ? e.slideTo(w + v) : e.slideTo(w) : (e.swipeDirection === "next" && e.slideTo(y !== null ? y : w + v), e.swipeDirection === "prev" && e.slideTo(c !== null ? c : w));
    }
  }
  function Se() {
    const i = this, {
      params: e,
      el: t
    } = i;
    if (t && t.offsetWidth === 0) return;
    e.breakpoints && i.setBreakpoint();
    const {
      allowSlideNext: n,
      allowSlidePrev: a,
      snapGrid: s
    } = i, o = i.virtual && i.params.virtual.enabled;
    i.allowSlideNext = !0, i.allowSlidePrev = !0, i.updateSize(), i.updateSlides(), i.updateSlidesClasses();
    const r = o && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && i.isEnd && !i.isBeginning && !i.params.centeredSlides && !r ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.params.loop && !o ? i.slideToLoop(i.realIndex, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0), i.autoplay && i.autoplay.running && i.autoplay.paused && (clearTimeout(i.autoplay.resizeTimeout), i.autoplay.resizeTimeout = setTimeout(() => {
      i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.resume();
    }, 500)), i.allowSlidePrev = a, i.allowSlideNext = n, i.params.watchOverflow && s !== i.snapGrid && i.checkOverflow();
  }
  function _t(i) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && i.preventDefault(), e.params.preventClicksPropagation && e.animating && (i.stopPropagation(), i.stopImmediatePropagation())));
  }
  function zt() {
    const i = this, {
      wrapperEl: e,
      rtlTranslate: t,
      enabled: n
    } = i;
    if (!n) return;
    i.previousTranslate = i.translate, i.isHorizontal() ? i.translate = -e.scrollLeft : i.translate = -e.scrollTop, i.translate === 0 && (i.translate = 0), i.updateActiveIndex(), i.updateSlidesClasses();
    let a;
    const s = i.maxTranslate() - i.minTranslate();
    s === 0 ? a = 0 : a = (i.translate - i.minTranslate()) / s, a !== i.progress && i.updateProgress(t ? -i.translate : i.translate), i.emit("setTranslate", i.translate, !1);
  }
  function Gt(i) {
    const e = this;
    J(e, i.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
  }
  function Ht() {
    const i = this;
    i.documentTouchHandlerProceeded || (i.documentTouchHandlerProceeded = !0, i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"));
  }
  const Ae = (i, e) => {
    const t = V(), {
      params: n,
      el: a,
      wrapperEl: s,
      device: o
    } = i, r = !!n.nested, d = e === "on" ? "addEventListener" : "removeEventListener", l = e;
    !a || typeof a == "string" || (t[d]("touchstart", i.onDocumentTouchStart, {
      passive: !1,
      capture: r
    }), a[d]("touchstart", i.onTouchStart, {
      passive: !1
    }), a[d]("pointerdown", i.onTouchStart, {
      passive: !1
    }), t[d]("touchmove", i.onTouchMove, {
      passive: !1,
      capture: r
    }), t[d]("pointermove", i.onTouchMove, {
      passive: !1,
      capture: r
    }), t[d]("touchend", i.onTouchEnd, {
      passive: !0
    }), t[d]("pointerup", i.onTouchEnd, {
      passive: !0
    }), t[d]("pointercancel", i.onTouchEnd, {
      passive: !0
    }), t[d]("touchcancel", i.onTouchEnd, {
      passive: !0
    }), t[d]("pointerout", i.onTouchEnd, {
      passive: !0
    }), t[d]("pointerleave", i.onTouchEnd, {
      passive: !0
    }), t[d]("contextmenu", i.onTouchEnd, {
      passive: !0
    }), (n.preventClicks || n.preventClicksPropagation) && a[d]("click", i.onClick, !0), n.cssMode && s[d]("scroll", i.onScroll), n.updateOnWindowResize ? i[l](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Se, !0) : i[l]("observerUpdate", Se, !0), a[d]("load", i.onLoad, {
      capture: !0
    }));
  };
  function Ot() {
    const i = this, {
      params: e
    } = i;
    i.onTouchStart = Lt.bind(i), i.onTouchMove = Yt.bind(i), i.onTouchEnd = Bt.bind(i), i.onDocumentTouchStart = Ht.bind(i), e.cssMode && (i.onScroll = zt.bind(i)), i.onClick = _t.bind(i), i.onLoad = Gt.bind(i), Ae(i, "on");
  }
  function Dt() {
    Ae(this, "off");
  }
  var jt = {
    attachEvents: Ot,
    detachEvents: Dt
  };
  const Te = (i, e) => i.grid && e.grid && e.grid.rows > 1;
  function Ft() {
    const i = this, {
      realIndex: e,
      initialized: t,
      params: n,
      el: a
    } = i, s = n.breakpoints;
    if (!s || s && Object.keys(s).length === 0) return;
    const o = V(), r = n.breakpointsBase === "window" || !n.breakpointsBase ? n.breakpointsBase : "container", d = ["window", "container"].includes(n.breakpointsBase) || !n.breakpointsBase ? i.el : o.querySelector(n.breakpointsBase), l = i.getBreakpoint(s, r, d);
    if (!l || i.currentBreakpoint === l) return;
    const u = (l in s ? s[l] : void 0) || i.originalParams, h = Te(i, n), m = Te(i, u), g = i.params.grabCursor, w = u.grabCursor, S = n.enabled;
    h && !m ? (a.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`), i.emitContainerClasses()) : !h && m && (a.classList.add(`${n.containerModifierClass}grid`), (u.grid.fill && u.grid.fill === "column" || !u.grid.fill && n.grid.fill === "column") && a.classList.add(`${n.containerModifierClass}grid-column`), i.emitContainerClasses()), g && !w ? i.unsetGrabCursor() : !g && w && i.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((T) => {
      if (typeof u[T] > "u") return;
      const E = n[T] && n[T].enabled, I = u[T] && u[T].enabled;
      E && !I && i[T].disable(), !E && I && i[T].enable();
    });
    const y = u.direction && u.direction !== n.direction, c = n.loop && (u.slidesPerView !== n.slidesPerView || y), p = n.loop;
    y && t && i.changeDirection(), H(i.params, u);
    const v = i.params.enabled, b = i.params.loop;
    Object.assign(i, {
      allowTouchMove: i.params.allowTouchMove,
      allowSlideNext: i.params.allowSlideNext,
      allowSlidePrev: i.params.allowSlidePrev
    }), S && !v ? i.disable() : !S && v && i.enable(), i.currentBreakpoint = l, i.emit("_beforeBreakpoint", u), t && (c ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides()) : !p && b ? (i.loopCreate(e), i.updateSlides()) : p && !b && i.loopDestroy()), i.emit("breakpoint", u);
  }
  function Vt(i, e, t) {
    if (e === void 0 && (e = "window"), !i || e === "container" && !t) return;
    let n = !1;
    const a = z(), s = e === "window" ? a.innerHeight : t.clientHeight, o = Object.keys(i).map((r) => {
      if (typeof r == "string" && r.indexOf("@") === 0) {
        const d = parseFloat(r.substr(1));
        return {
          value: s * d,
          point: r
        };
      }
      return {
        value: r,
        point: r
      };
    });
    o.sort((r, d) => parseInt(r.value, 10) - parseInt(d.value, 10));
    for (let r = 0; r < o.length; r += 1) {
      const {
        point: d,
        value: l
      } = o[r];
      e === "window" ? a.matchMedia(`(min-width: ${l}px)`).matches && (n = d) : l <= t.clientWidth && (n = d);
    }
    return n || "max";
  }
  var Rt = {
    setBreakpoint: Ft,
    getBreakpoint: Vt
  };
  function Nt(i, e) {
    const t = [];
    return i.forEach((n) => {
      typeof n == "object" ? Object.keys(n).forEach((a) => {
        n[a] && t.push(e + a);
      }) : typeof n == "string" && t.push(e + n);
    }), t;
  }
  function $t() {
    const i = this, {
      classNames: e,
      params: t,
      rtl: n,
      el: a,
      device: s
    } = i, o = Nt(["initialized", t.direction, {
      "free-mode": i.params.freeMode && t.freeMode.enabled
    }, {
      autoheight: t.autoHeight
    }, {
      rtl: n
    }, {
      grid: t.grid && t.grid.rows > 1
    }, {
      "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
    }, {
      android: s.android
    }, {
      ios: s.ios
    }, {
      "css-mode": t.cssMode
    }, {
      centered: t.cssMode && t.centeredSlides
    }, {
      "watch-progress": t.watchSlidesProgress
    }], t.containerModifierClass);
    e.push(...o), a.classList.add(...e), i.emitContainerClasses();
  }
  function Wt() {
    const i = this, {
      el: e,
      classNames: t
    } = i;
    !e || typeof e == "string" || (e.classList.remove(...t), i.emitContainerClasses());
  }
  var qt = {
    addClasses: $t,
    removeClasses: Wt
  };
  function Kt() {
    const i = this, {
      isLocked: e,
      params: t
    } = i, {
      slidesOffsetBefore: n
    } = t;
    if (n) {
      const a = i.slides.length - 1, s = i.slidesGrid[a] + i.slidesSizesGrid[a] + n * 2;
      i.isLocked = i.size > s;
    } else
      i.isLocked = i.snapGrid.length === 1;
    t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked), t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked), e && e !== i.isLocked && (i.isEnd = !1), e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock");
  }
  var Xt = {
    checkOverflow: Kt
  }, Ce = {
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
  function Ut(i, e) {
    return function(n) {
      n === void 0 && (n = {});
      const a = Object.keys(n)[0], s = n[a];
      if (typeof s != "object" || s === null) {
        H(e, n);
        return;
      }
      if (i[a] === !0 && (i[a] = {
        enabled: !0
      }), a === "navigation" && i[a] && i[a].enabled && !i[a].prevEl && !i[a].nextEl && (i[a].auto = !0), ["pagination", "scrollbar"].indexOf(a) >= 0 && i[a] && i[a].enabled && !i[a].el && (i[a].auto = !0), !(a in i && "enabled" in s)) {
        H(e, n);
        return;
      }
      typeof i[a] == "object" && !("enabled" in i[a]) && (i[a].enabled = !0), i[a] || (i[a] = {
        enabled: !1
      }), H(e, n);
    };
  }
  const de = {
    eventsEmitter: qe,
    update: st,
    translate: ct,
    transition: gt,
    slide: St,
    loop: Et,
    grabCursor: Mt,
    events: jt,
    breakpoints: Rt,
    checkOverflow: Xt,
    classes: qt
  }, ce = {};
  class O {
    constructor() {
      let e, t;
      for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
        a[s] = arguments[s];
      a.length === 1 && a[0].constructor && Object.prototype.toString.call(a[0]).slice(8, -1) === "Object" ? t = a[0] : [e, t] = a, t || (t = {}), t = H({}, t), e && !t.el && (t.el = e);
      const o = V();
      if (t.el && typeof t.el == "string" && o.querySelectorAll(t.el).length > 1) {
        const f = [];
        return o.querySelectorAll(t.el).forEach((u) => {
          const h = H({}, t, {
            el: u
          });
          f.push(new O(h));
        }), f;
      }
      const r = this;
      r.__swiper__ = !0, r.support = me(), r.device = we({
        userAgent: t.userAgent
      }), r.browser = ve(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
      const d = {};
      r.modules.forEach((f) => {
        f({
          params: t,
          swiper: r,
          extendParams: Ut(t, d),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r)
        });
      });
      const l = H({}, Ce, d);
      return r.params = H({}, l, ce, t), r.originalParams = H({}, r.params), r.passedParams = H({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach((f) => {
        r.on(f, r.params.on[f]);
      }), r.params && r.params.onAny && r.onAny(r.params.onAny), Object.assign(r, {
        enabled: r.params.enabled,
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
          return r.params.direction === "horizontal";
        },
        isVertical() {
          return r.params.direction === "vertical";
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
        allowSlideNext: r.params.allowSlideNext,
        allowSlidePrev: r.params.allowSlidePrev,
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
          focusableElements: r.params.focusableElements,
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
        allowTouchMove: r.params.allowTouchMove,
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
      }), r.emit("_swiper"), r.params.init && r.init(), r;
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
        params: n
      } = this, a = D(t, `.${n.slideClass}, swiper-slide`), s = Q(a[0]);
      return Q(e) - s;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(this.slides.find((t) => t.getAttribute("data-swiper-slide-index") * 1 === e));
    }
    recalcSlides() {
      const e = this, {
        slidesEl: t,
        params: n
      } = e;
      e.slides = D(t, `.${n.slideClass}, swiper-slide`);
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
      const n = this;
      e = Math.min(Math.max(e, 0), 1);
      const a = n.minTranslate(), o = (n.maxTranslate() - a) * e + a;
      n.translateTo(o, typeof t > "u" ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className.split(" ").filter((n) => n.indexOf("swiper") === 0 || n.indexOf(e.params.containerModifierClass) === 0);
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed ? "" : e.className.split(" ").filter((n) => n.indexOf("swiper-slide") === 0 || n.indexOf(t.params.slideClass) === 0).join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((n) => {
        const a = e.getSlideClasses(n);
        t.push({
          slideEl: n,
          classNames: a
        }), e.emit("_slideClass", n, a);
      }), e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      e === void 0 && (e = "current"), t === void 0 && (t = !1);
      const n = this, {
        params: a,
        slides: s,
        slidesGrid: o,
        slidesSizesGrid: r,
        size: d,
        activeIndex: l
      } = n;
      let f = 1;
      if (typeof a.slidesPerView == "number") return a.slidesPerView;
      if (a.centeredSlides) {
        let u = s[l] ? Math.ceil(s[l].swiperSlideSize) : 0, h;
        for (let m = l + 1; m < s.length; m += 1)
          s[m] && !h && (u += Math.ceil(s[m].swiperSlideSize), f += 1, u > d && (h = !0));
        for (let m = l - 1; m >= 0; m -= 1)
          s[m] && !h && (u += s[m].swiperSlideSize, f += 1, u > d && (h = !0));
      } else if (e === "current")
        for (let u = l + 1; u < s.length; u += 1)
          (t ? o[u] + r[u] - o[l] < d : o[u] - o[l] < d) && (f += 1);
      else
        for (let u = l - 1; u >= 0; u -= 1)
          o[l] - o[u] < d && (f += 1);
      return f;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const {
        snapGrid: t,
        params: n
      } = e;
      n.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && J(e, o);
      }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
      function a() {
        const o = e.rtlTranslate ? e.translate * -1 : e.translate, r = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
        e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let s;
      if (n.freeMode && n.freeMode.enabled && !n.cssMode)
        a(), n.autoHeight && e.updateAutoHeight();
      else {
        if ((n.slidesPerView === "auto" || n.slidesPerView > 1) && e.isEnd && !n.centeredSlides) {
          const o = e.virtual && n.virtual.enabled ? e.virtual.slides : e.slides;
          s = e.slideTo(o.length - 1, 0, !1, !0);
        } else
          s = e.slideTo(e.activeIndex, 0, !1, !0);
        s || a();
      }
      n.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
    }
    changeDirection(e, t) {
      t === void 0 && (t = !0);
      const n = this, a = n.params.direction;
      return e || (e = a === "horizontal" ? "vertical" : "horizontal"), e === a || e !== "horizontal" && e !== "vertical" || (n.el.classList.remove(`${n.params.containerModifierClass}${a}`), n.el.classList.add(`${n.params.containerModifierClass}${e}`), n.emitContainerClasses(), n.params.direction = e, n.slides.forEach((s) => {
        e === "vertical" ? s.style.width = "" : s.style.height = "";
      }), n.emit("changeDirection"), t && n.update()), n;
    }
    changeLanguageDirection(e) {
      const t = this;
      t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let n = e || t.params.el;
      if (typeof n == "string" && (n = document.querySelector(n)), !n)
        return !1;
      n.swiper = t, n.parentNode && n.parentNode.host && n.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
      const a = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let o = n && n.shadowRoot && n.shadowRoot.querySelector ? n.shadowRoot.querySelector(a()) : D(n, a())[0];
      return !o && t.params.createElements && (o = Z("div", t.params.wrapperClass), n.append(o), D(n, `.${t.params.slideClass}`).forEach((r) => {
        o.append(r);
      })), Object.assign(t, {
        el: n,
        wrapperEl: o,
        slidesEl: t.isElement && !n.parentNode.host.slideSlots ? n.parentNode.host : o,
        hostEl: t.isElement ? n.parentNode.host : n,
        mounted: !0,
        // RTL
        rtl: n.dir.toLowerCase() === "rtl" || F(n, "direction") === "rtl",
        rtlTranslate: t.params.direction === "horizontal" && (n.dir.toLowerCase() === "rtl" || F(n, "direction") === "rtl"),
        wrongRTL: F(o, "display") === "-webkit-box"
      }), !0;
    }
    init(e) {
      const t = this;
      if (t.initialized || t.mount(e) === !1) return t;
      t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
      const a = [...t.el.querySelectorAll('[loading="lazy"]')];
      return t.isElement && a.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), a.forEach((s) => {
        s.complete ? J(t, s) : s.addEventListener("load", (o) => {
          J(t, o.target);
        });
      }), le(t), t.initialized = !0, le(t), t.emit("init"), t.emit("afterInit"), t;
    }
    destroy(e, t) {
      e === void 0 && (e = !0), t === void 0 && (t = !0);
      const n = this, {
        params: a,
        el: s,
        wrapperEl: o,
        slides: r
      } = n;
      return typeof n.params > "u" || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), a.loop && n.loopDestroy(), t && (n.removeClasses(), s && typeof s != "string" && s.removeAttribute("style"), o && o.removeAttribute("style"), r && r.length && r.forEach((d) => {
        d.classList.remove(a.slideVisibleClass, a.slideFullyVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass), d.removeAttribute("style"), d.removeAttribute("data-swiper-slide-index");
      })), n.emit("destroy"), Object.keys(n.eventsListeners).forEach((d) => {
        n.off(d);
      }), e !== !1 && (n.el && typeof n.el != "string" && (n.el.swiper = null), _e(n)), n.destroyed = !0), null;
    }
    static extendDefaults(e) {
      H(ce, e);
    }
    static get extendedDefaults() {
      return ce;
    }
    static get defaults() {
      return Ce;
    }
    static installModule(e) {
      O.prototype.__modules__ || (O.prototype.__modules__ = []);
      const t = O.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e) ? (e.forEach((t) => O.installModule(t)), O) : (O.installModule(e), O);
    }
  }
  Object.keys(de).forEach((i) => {
    Object.keys(de[i]).forEach((e) => {
      O.prototype[e] = de[i][e];
    });
  }), O.use([$e, We]);
  function Ee(i, e, t, n) {
    return i.params.createElements && Object.keys(n).forEach((a) => {
      if (!t[a] && t.auto === !0) {
        let s = D(i.el, `.${n[a]}`)[0];
        s || (s = Z("div", n[a]), s.className = n[a], i.el.append(s)), t[a] = s, e[a] = s;
      }
    }), t;
  }
  function Zt(i) {
    let {
      swiper: e,
      extendParams: t,
      on: n,
      emit: a
    } = i;
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
    function s(g) {
      let w;
      return g && typeof g == "string" && e.isElement && (w = e.el.querySelector(g) || e.hostEl.querySelector(g), w) ? w : (g && (typeof g == "string" && (w = [...document.querySelectorAll(g)]), e.params.uniqueNavElements && typeof g == "string" && w && w.length > 1 && e.el.querySelectorAll(g).length === 1 ? w = e.el.querySelector(g) : w && w.length === 1 && (w = w[0])), g && !w ? g : w);
    }
    function o(g, w) {
      const S = e.params.navigation;
      g = B(g), g.forEach((y) => {
        y && (y.classList[w ? "add" : "remove"](...S.disabledClass.split(" ")), y.tagName === "BUTTON" && (y.disabled = w), e.params.watchOverflow && e.enabled && y.classList[e.isLocked ? "add" : "remove"](S.lockClass));
      });
    }
    function r() {
      const {
        nextEl: g,
        prevEl: w
      } = e.navigation;
      if (e.params.loop) {
        o(w, !1), o(g, !1);
        return;
      }
      o(w, e.isBeginning && !e.params.rewind), o(g, e.isEnd && !e.params.rewind);
    }
    function d(g) {
      g.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), a("navigationPrev"));
    }
    function l(g) {
      g.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), a("navigationNext"));
    }
    function f() {
      const g = e.params.navigation;
      if (e.params.navigation = Ee(e, e.originalParams.navigation, e.params.navigation, {
        nextEl: "swiper-button-next",
        prevEl: "swiper-button-prev"
      }), !(g.nextEl || g.prevEl)) return;
      let w = s(g.nextEl), S = s(g.prevEl);
      Object.assign(e.navigation, {
        nextEl: w,
        prevEl: S
      }), w = B(w), S = B(S);
      const y = (c, p) => {
        c && c.addEventListener("click", p === "next" ? l : d), !e.enabled && c && c.classList.add(...g.lockClass.split(" "));
      };
      w.forEach((c) => y(c, "next")), S.forEach((c) => y(c, "prev"));
    }
    function u() {
      let {
        nextEl: g,
        prevEl: w
      } = e.navigation;
      g = B(g), w = B(w);
      const S = (y, c) => {
        y.removeEventListener("click", c === "next" ? l : d), y.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      g.forEach((y) => S(y, "next")), w.forEach((y) => S(y, "prev"));
    }
    n("init", () => {
      e.params.navigation.enabled === !1 ? m() : (f(), r());
    }), n("toEdge fromEdge lock unlock", () => {
      r();
    }), n("destroy", () => {
      u();
    }), n("enable disable", () => {
      let {
        nextEl: g,
        prevEl: w
      } = e.navigation;
      if (g = B(g), w = B(w), e.enabled) {
        r();
        return;
      }
      [...g, ...w].filter((S) => !!S).forEach((S) => S.classList.add(e.params.navigation.lockClass));
    }), n("click", (g, w) => {
      let {
        nextEl: S,
        prevEl: y
      } = e.navigation;
      S = B(S), y = B(y);
      const c = w.target;
      let p = y.includes(c) || S.includes(c);
      if (e.isElement && !p) {
        const v = w.path || w.composedPath && w.composedPath();
        v && (p = v.find((b) => S.includes(b) || y.includes(b)));
      }
      if (e.params.navigation.hideOnClick && !p) {
        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === c || e.pagination.el.contains(c))) return;
        let v;
        S.length ? v = S[0].classList.contains(e.params.navigation.hiddenClass) : y.length && (v = y[0].classList.contains(e.params.navigation.hiddenClass)), a(v === !0 ? "navigationShow" : "navigationHide"), [...S, ...y].filter((b) => !!b).forEach((b) => b.classList.toggle(e.params.navigation.hiddenClass));
      }
    });
    const h = () => {
      e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), f(), r();
    }, m = () => {
      e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), u();
    };
    Object.assign(e.navigation, {
      enable: h,
      disable: m,
      update: r,
      init: f,
      destroy: u
    });
  }
  function N(i) {
    return i === void 0 && (i = ""), `.${i.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
  }
  function Qt(i) {
    let {
      swiper: e,
      extendParams: t,
      on: n,
      emit: a
    } = i;
    const s = "swiper-pagination";
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
        formatFractionCurrent: (c) => c,
        formatFractionTotal: (c) => c,
        bulletClass: `${s}-bullet`,
        bulletActiveClass: `${s}-bullet-active`,
        modifierClass: `${s}-`,
        currentClass: `${s}-current`,
        totalClass: `${s}-total`,
        hiddenClass: `${s}-hidden`,
        progressbarFillClass: `${s}-progressbar-fill`,
        progressbarOppositeClass: `${s}-progressbar-opposite`,
        clickableClass: `${s}-clickable`,
        lockClass: `${s}-lock`,
        horizontalClass: `${s}-horizontal`,
        verticalClass: `${s}-vertical`,
        paginationDisabledClass: `${s}-disabled`
      }
    }), e.pagination = {
      el: null,
      bullets: []
    };
    let o, r = 0;
    function d() {
      return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
    }
    function l(c, p) {
      const {
        bulletActiveClass: v
      } = e.params.pagination;
      c && (c = c[`${p === "prev" ? "previous" : "next"}ElementSibling`], c && (c.classList.add(`${v}-${p}`), c = c[`${p === "prev" ? "previous" : "next"}ElementSibling`], c && c.classList.add(`${v}-${p}-${p}`)));
    }
    function f(c, p, v) {
      if (c = c % v, p = p % v, p === c + 1)
        return "next";
      if (p === c - 1)
        return "previous";
    }
    function u(c) {
      const p = c.target.closest(N(e.params.pagination.bulletClass));
      if (!p)
        return;
      c.preventDefault();
      const v = Q(p) * e.params.slidesPerGroup;
      if (e.params.loop) {
        if (e.realIndex === v) return;
        const b = f(e.realIndex, v, e.slides.length);
        b === "next" ? e.slideNext() : b === "previous" ? e.slidePrev() : e.slideToLoop(v);
      } else
        e.slideTo(v);
    }
    function h() {
      const c = e.rtl, p = e.params.pagination;
      if (d()) return;
      let v = e.pagination.el;
      v = B(v);
      let b, T;
      const E = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, I = e.params.loop ? Math.ceil(E / e.params.slidesPerGroup) : e.snapGrid.length;
      if (e.params.loop ? (T = e.previousRealIndex || 0, b = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (b = e.snapIndex, T = e.previousSnapIndex) : (T = e.previousIndex || 0, b = e.activeIndex || 0), p.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
        const M = e.pagination.bullets;
        let x, A, k;
        if (p.dynamicBullets && (o = ie(M[0], e.isHorizontal() ? "width" : "height"), v.forEach((P) => {
          P.style[e.isHorizontal() ? "width" : "height"] = `${o * (p.dynamicMainBullets + 4)}px`;
        }), p.dynamicMainBullets > 1 && T !== void 0 && (r += b - (T || 0), r > p.dynamicMainBullets - 1 ? r = p.dynamicMainBullets - 1 : r < 0 && (r = 0)), x = Math.max(b - r, 0), A = x + (Math.min(M.length, p.dynamicMainBullets) - 1), k = (A + x) / 2), M.forEach((P) => {
          const L = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((Y) => `${p.bulletActiveClass}${Y}`)].map((Y) => typeof Y == "string" && Y.includes(" ") ? Y.split(" ") : Y).flat();
          P.classList.remove(...L);
        }), v.length > 1)
          M.forEach((P) => {
            const L = Q(P);
            L === b ? P.classList.add(...p.bulletActiveClass.split(" ")) : e.isElement && P.setAttribute("part", "bullet"), p.dynamicBullets && (L >= x && L <= A && P.classList.add(...`${p.bulletActiveClass}-main`.split(" ")), L === x && l(P, "prev"), L === A && l(P, "next"));
          });
        else {
          const P = M[b];
          if (P && P.classList.add(...p.bulletActiveClass.split(" ")), e.isElement && M.forEach((L, Y) => {
            L.setAttribute("part", Y === b ? "bullet-active" : "bullet");
          }), p.dynamicBullets) {
            const L = M[x], Y = M[A];
            for (let C = x; C <= A; C += 1)
              M[C] && M[C].classList.add(...`${p.bulletActiveClass}-main`.split(" "));
            l(L, "prev"), l(Y, "next");
          }
        }
        if (p.dynamicBullets) {
          const P = Math.min(M.length, p.dynamicMainBullets + 4), L = (o * P - o) / 2 - k * o, Y = c ? "right" : "left";
          M.forEach((C) => {
            C.style[e.isHorizontal() ? Y : "top"] = `${L}px`;
          });
        }
      }
      v.forEach((M, x) => {
        if (p.type === "fraction" && (M.querySelectorAll(N(p.currentClass)).forEach((A) => {
          A.textContent = p.formatFractionCurrent(b + 1);
        }), M.querySelectorAll(N(p.totalClass)).forEach((A) => {
          A.textContent = p.formatFractionTotal(I);
        })), p.type === "progressbar") {
          let A;
          p.progressbarOpposite ? A = e.isHorizontal() ? "vertical" : "horizontal" : A = e.isHorizontal() ? "horizontal" : "vertical";
          const k = (b + 1) / I;
          let P = 1, L = 1;
          A === "horizontal" ? P = k : L = k, M.querySelectorAll(N(p.progressbarFillClass)).forEach((Y) => {
            Y.style.transform = `translate3d(0,0,0) scaleX(${P}) scaleY(${L})`, Y.style.transitionDuration = `${e.params.speed}ms`;
          });
        }
        p.type === "custom" && p.renderCustom ? (he(M, p.renderCustom(e, b + 1, I)), x === 0 && a("paginationRender", M)) : (x === 0 && a("paginationRender", M), a("paginationUpdate", M)), e.params.watchOverflow && e.enabled && M.classList[e.isLocked ? "add" : "remove"](p.lockClass);
      });
    }
    function m() {
      const c = e.params.pagination;
      if (d()) return;
      const p = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
      let v = e.pagination.el;
      v = B(v);
      let b = "";
      if (c.type === "bullets") {
        let T = e.params.loop ? Math.ceil(p / e.params.slidesPerGroup) : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && T > p && (T = p);
        for (let E = 0; E < T; E += 1)
          c.renderBullet ? b += c.renderBullet.call(e, E, c.bulletClass) : b += `<${c.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${c.bulletClass}"></${c.bulletElement}>`;
      }
      c.type === "fraction" && (c.renderFraction ? b = c.renderFraction.call(e, c.currentClass, c.totalClass) : b = `<span class="${c.currentClass}"></span> / <span class="${c.totalClass}"></span>`), c.type === "progressbar" && (c.renderProgressbar ? b = c.renderProgressbar.call(e, c.progressbarFillClass) : b = `<span class="${c.progressbarFillClass}"></span>`), e.pagination.bullets = [], v.forEach((T) => {
        c.type !== "custom" && he(T, b || ""), c.type === "bullets" && e.pagination.bullets.push(...T.querySelectorAll(N(c.bulletClass)));
      }), c.type !== "custom" && a("paginationRender", v[0]);
    }
    function g() {
      e.params.pagination = Ee(e, e.originalParams.pagination, e.params.pagination, {
        el: "swiper-pagination"
      });
      const c = e.params.pagination;
      if (!c.el) return;
      let p;
      typeof c.el == "string" && e.isElement && (p = e.el.querySelector(c.el)), !p && typeof c.el == "string" && (p = [...document.querySelectorAll(c.el)]), p || (p = c.el), !(!p || p.length === 0) && (e.params.uniqueNavElements && typeof c.el == "string" && Array.isArray(p) && p.length > 1 && (p = [...e.el.querySelectorAll(c.el)], p.length > 1 && (p = p.find((v) => ge(v, ".swiper")[0] === e.el))), Array.isArray(p) && p.length === 1 && (p = p[0]), Object.assign(e.pagination, {
        el: p
      }), p = B(p), p.forEach((v) => {
        c.type === "bullets" && c.clickable && v.classList.add(...(c.clickableClass || "").split(" ")), v.classList.add(c.modifierClass + c.type), v.classList.add(e.isHorizontal() ? c.horizontalClass : c.verticalClass), c.type === "bullets" && c.dynamicBullets && (v.classList.add(`${c.modifierClass}${c.type}-dynamic`), r = 0, c.dynamicMainBullets < 1 && (c.dynamicMainBullets = 1)), c.type === "progressbar" && c.progressbarOpposite && v.classList.add(c.progressbarOppositeClass), c.clickable && v.addEventListener("click", u), e.enabled || v.classList.add(c.lockClass);
      }));
    }
    function w() {
      const c = e.params.pagination;
      if (d()) return;
      let p = e.pagination.el;
      p && (p = B(p), p.forEach((v) => {
        v.classList.remove(c.hiddenClass), v.classList.remove(c.modifierClass + c.type), v.classList.remove(e.isHorizontal() ? c.horizontalClass : c.verticalClass), c.clickable && (v.classList.remove(...(c.clickableClass || "").split(" ")), v.removeEventListener("click", u));
      })), e.pagination.bullets && e.pagination.bullets.forEach((v) => v.classList.remove(...c.bulletActiveClass.split(" ")));
    }
    n("changeDirection", () => {
      if (!e.pagination || !e.pagination.el) return;
      const c = e.params.pagination;
      let {
        el: p
      } = e.pagination;
      p = B(p), p.forEach((v) => {
        v.classList.remove(c.horizontalClass, c.verticalClass), v.classList.add(e.isHorizontal() ? c.horizontalClass : c.verticalClass);
      });
    }), n("init", () => {
      e.params.pagination.enabled === !1 ? y() : (g(), m(), h());
    }), n("activeIndexChange", () => {
      typeof e.snapIndex > "u" && h();
    }), n("snapIndexChange", () => {
      h();
    }), n("snapGridLengthChange", () => {
      m(), h();
    }), n("destroy", () => {
      w();
    }), n("enable disable", () => {
      let {
        el: c
      } = e.pagination;
      c && (c = B(c), c.forEach((p) => p.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)));
    }), n("lock unlock", () => {
      h();
    }), n("click", (c, p) => {
      const v = p.target, b = B(e.pagination.el);
      if (e.params.pagination.el && e.params.pagination.hideOnClick && b && b.length > 0 && !v.classList.contains(e.params.pagination.bulletClass)) {
        if (e.navigation && (e.navigation.nextEl && v === e.navigation.nextEl || e.navigation.prevEl && v === e.navigation.prevEl)) return;
        const T = b[0].classList.contains(e.params.pagination.hiddenClass);
        a(T === !0 ? "paginationShow" : "paginationHide"), b.forEach((E) => E.classList.toggle(e.params.pagination.hiddenClass));
      }
    });
    const S = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass);
      let {
        el: c
      } = e.pagination;
      c && (c = B(c), c.forEach((p) => p.classList.remove(e.params.pagination.paginationDisabledClass))), g(), m(), h();
    }, y = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let {
        el: c
      } = e.pagination;
      c && (c = B(c), c.forEach((p) => p.classList.add(e.params.pagination.paginationDisabledClass))), w();
    };
    Object.assign(e.pagination, {
      enable: S,
      disable: y,
      render: m,
      update: h,
      init: g,
      destroy: w
    });
  }
  const Jt = `/**
 * Swiper 11.2.8
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2025 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 23, 2025
 */

/* FONT_START */
@font-face {
  font-family: 'swiper-icons';
  src: url('data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA');
  font-weight: 400;
  font-style: normal;
}
/* FONT_END */
:root {
  --swiper-theme-color: #007aff;
  /*
  --swiper-preloader-color: var(--swiper-theme-color);
  --swiper-wrapper-transition-timing-function: initial;
  */
}
:host {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
}
.swiper {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  /* Fix of Webkit flickering */
  z-index: 1;
  display: block;
}
.swiper-vertical > .swiper-wrapper {
  flex-direction: column;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
  box-sizing: content-box;
}
.swiper-android .swiper-slide,
.swiper-ios .swiper-slide,
.swiper-wrapper {
  transform: translate3d(0px, 0, 0);
}
.swiper-horizontal {
  touch-action: pan-y;
}
.swiper-vertical {
  touch-action: pan-x;
}
.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  display: block;
}
.swiper-slide-invisible-blank {
  visibility: hidden;
}
/* Auto Height */
.swiper-autoheight,
.swiper-autoheight .swiper-slide {
  height: auto;
}
.swiper-autoheight .swiper-wrapper {
  align-items: flex-start;
  transition-property: transform, height;
}
.swiper-backface-hidden .swiper-slide {
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}
/* 3D Effects */
.swiper-3d.swiper-css-mode .swiper-wrapper {
  perspective: 1200px;
}
.swiper-3d .swiper-wrapper {
  transform-style: preserve-3d;
}
.swiper-3d {
  perspective: 1200px;
}
.swiper-3d .swiper-slide,
.swiper-3d .swiper-cube-shadow {
  transform-style: preserve-3d;
}
/* CSS Mode */
.swiper-css-mode > .swiper-wrapper {
  overflow: auto;
  scrollbar-width: none;
  /* For Firefox */
  -ms-overflow-style: none;
  /* For Internet Explorer and Edge */
}
.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {
  display: none;
}
.swiper-css-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: start start;
}
.swiper-css-mode.swiper-horizontal > .swiper-wrapper {
  scroll-snap-type: x mandatory;
}
.swiper-css-mode.swiper-vertical > .swiper-wrapper {
  scroll-snap-type: y mandatory;
}
.swiper-css-mode.swiper-free-mode > .swiper-wrapper {
  scroll-snap-type: none;
}
.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: none;
}
.swiper-css-mode.swiper-centered > .swiper-wrapper::before {
  content: '';
  flex-shrink: 0;
  order: 9999;
}
.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {
  scroll-snap-align: center center;
  scroll-snap-stop: always;
}
.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {
  margin-inline-start: var(--swiper-centered-offset-before);
}
.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {
  height: 100%;
  min-height: 1px;
  width: var(--swiper-centered-offset-after);
}
.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {
  margin-block-start: var(--swiper-centered-offset-before);
}
.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {
  width: 100%;
  min-width: 1px;
  height: var(--swiper-centered-offset-after);
}
/* Slide styles start */
/* 3D Shadows */
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom,
.swiper-3d .swiper-slide-shadow,
.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right,
.swiper-3d .swiper-slide-shadow-top,
.swiper-3d .swiper-slide-shadow-bottom {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
}
.swiper-3d .swiper-slide-shadow {
  background: rgba(0, 0, 0, 0.15);
}
.swiper-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-top {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-3d .swiper-slide-shadow-bottom {
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
}
.swiper-lazy-preloader {
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -21px;
  margin-top: -21px;
  z-index: 10;
  transform-origin: 50%;
  box-sizing: border-box;
  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));
  border-radius: 50%;
  border-top-color: transparent;
}
.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,
.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {
  animation: swiper-preloader-spin 1s infinite linear;
}
.swiper-lazy-preloader-white {
  --swiper-preloader-color: #fff;
}
.swiper-lazy-preloader-black {
  --swiper-preloader-color: #000;
}
@keyframes swiper-preloader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* Slide styles end */
`, ei = `:root {
  --swiper-navigation-size: 44px;
  /*
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 10px;
  --swiper-navigation-color: var(--swiper-theme-color);
  */
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: var(--swiper-navigation-top-offset, 50%);
  width: calc(var(--swiper-navigation-size) / 44 * 27);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--swiper-navigation-color, var(--swiper-theme-color));
}
.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}
.swiper-button-prev.swiper-button-hidden,
.swiper-button-next.swiper-button-hidden {
  opacity: 0;
  cursor: auto;
  pointer-events: none;
}
.swiper-navigation-disabled .swiper-button-prev,
.swiper-navigation-disabled .swiper-button-next {
  display: none !important;
}
.swiper-button-prev svg,
.swiper-button-next svg {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform-origin: center;
}
.swiper-rtl .swiper-button-prev svg,
.swiper-rtl .swiper-button-next svg {
  transform: rotate(180deg);
}
.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  left: var(--swiper-navigation-sides-offset, 10px);
  right: auto;
}
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: var(--swiper-navigation-sides-offset, 10px);
  left: auto;
}
.swiper-button-lock {
  display: none;
}
/* Navigation font start */
.swiper-button-prev:after,
.swiper-button-next:after {
  font-family: swiper-icons;
  font-size: var(--swiper-navigation-size);
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
}
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  content: 'prev';
}
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: var(--swiper-navigation-sides-offset, 10px);
  left: auto;
}
.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  content: 'next';
}
/* Navigation font end */
`, ti = `:root {
  /*
  --swiper-pagination-color: var(--swiper-theme-color);
  --swiper-pagination-left: auto;
  --swiper-pagination-right: 8px;
  --swiper-pagination-bottom: 8px;
  --swiper-pagination-top: auto;
  --swiper-pagination-fraction-color: inherit;
  --swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);
  --swiper-pagination-progressbar-size: 4px;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-width: 8px;
  --swiper-pagination-bullet-height: 8px;
  --swiper-pagination-bullet-border-radius: 50%;
  --swiper-pagination-bullet-inactive-color: #000;
  --swiper-pagination-bullet-inactive-opacity: 0.2;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-pagination-bullet-vertical-gap: 6px;
  */
}
.swiper-pagination {
  position: absolute;
  text-align: center;
  transition: 300ms opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
}
.swiper-pagination.swiper-pagination-hidden {
  opacity: 0;
}
.swiper-pagination-disabled > .swiper-pagination,
.swiper-pagination.swiper-pagination-disabled {
  display: none !important;
}
/* Common Styles */
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: var(--swiper-pagination-bottom, 8px);
  top: var(--swiper-pagination-top, auto);
  left: 0;
  width: 100%;
}
/* Bullets */
.swiper-pagination-bullets-dynamic {
  overflow: hidden;
  font-size: 0;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transform: scale(0.33);
  position: relative;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
  transform: scale(1);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {
  transform: scale(0.33);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {
  transform: scale(0.66);
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {
  transform: scale(0.33);
}
.swiper-pagination-bullet {
  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
  display: inline-block;
  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);
  background: var(--swiper-pagination-bullet-inactive-color, #000);
  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);
}
button.swiper-pagination-bullet {
  border: none;
  margin: 0;
  padding: 0;
  box-shadow: none;
  -webkit-appearance: none;
          appearance: none;
}
.swiper-pagination-clickable .swiper-pagination-bullet {
  cursor: pointer;
}
.swiper-pagination-bullet:only-child {
  display: none !important;
}
.swiper-pagination-bullet-active {
  opacity: var(--swiper-pagination-bullet-opacity, 1);
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
}
.swiper-vertical > .swiper-pagination-bullets,
.swiper-pagination-vertical.swiper-pagination-bullets {
  right: var(--swiper-pagination-right, 8px);
  left: var(--swiper-pagination-left, auto);
  top: 50%;
  transform: translate3d(0px, -50%, 0);
}
.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;
  display: block;
}
.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
}
.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  display: inline-block;
  transition: 200ms transform,
        200ms top;
}
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);
}
.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
}
.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform,
        200ms left;
}
.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
  transition: 200ms transform,
    200ms right;
}
/* Fraction */
.swiper-pagination-fraction {
  color: var(--swiper-pagination-fraction-color, inherit);
}
/* Progress */
.swiper-pagination-progressbar {
  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));
  position: absolute;
}
.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  background: var(--swiper-pagination-color, var(--swiper-theme-color));
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
  transform-origin: left top;
}
.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  transform-origin: right top;
}
.swiper-horizontal > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-horizontal,
.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {
  width: 100%;
  height: var(--swiper-pagination-progressbar-size, 4px);
  left: 0;
  top: 0;
}
.swiper-vertical > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-vertical,
.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {
  width: var(--swiper-pagination-progressbar-size, 4px);
  height: 100%;
  left: 0;
  top: 0;
}
.swiper-pagination-lock {
  display: none;
}
`, ii = `.hps_section {
  overflow: hidden;
}
.hps_section * {
  box-sizing: border-box;
}

.hps_container {
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  max-width: 1224px;
  margin: 40px auto;
  border-radius: 20px;
  background: #fff;
  padding: 64px 80px;
}
@media (max-width: 768px) {
  .hps_container {
    padding: 32px 20px;
  }
}

.hps_heading {
  color: #2b3635;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 32px;
}
@media (max-width: 768px) {
  .hps_heading {
    font-size: 22px;
    margin-bottom: 20px;
  }
}

.hps_row {
  margin-bottom: 40px;
}
.hps_row:last-child {
  margin-bottom: 0;
}
@media (max-width: 768px) {
  .hps_row {
    margin-bottom: 28px;
  }
}

.hps_row_head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.hps_row_head h3 {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #2b3635;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
}
@media (max-width: 768px) {
  .hps_row_head h3 {
    font-size: 17px;
  }
}

.hps_see_all {
  flex-shrink: 0;
  color: #007170;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
}
.hps_see_all:hover {
  text-decoration: underline;
}

.hps_swiper {
  position: relative;
  overflow: hidden;
  padding: 0 4px;
}
.hps_swiper .swiper-wrapper {
  align-items: stretch;
}
.hps_swiper .swiper-slide {
  height: auto;
}
.hps_swiper .swiper-button-prev,
.hps_swiper .swiper-button-next {
  top: calc(var(--hps-img-h, 200px) / 2);
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  margin-top: 0;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(43, 54, 53, 0.25);
}
.hps_swiper .swiper-button-prev::after,
.hps_swiper .swiper-button-next::after {
  content: none;
}
.hps_swiper .swiper-button-prev svg,
.hps_swiper .swiper-button-next svg {
  display: block;
  width: 8px;
  height: 14px;
}
.hps_swiper .swiper-button-prev.swiper-button-disabled,
.hps_swiper .swiper-button-next.swiper-button-disabled {
  opacity: 0;
  pointer-events: none;
}
@media (max-width: 768px) {
  .hps_swiper .swiper-button-prev,
  .hps_swiper .swiper-button-next {
    display: none;
  }
}
.hps_swiper .swiper-button-prev {
  left: 12px;
}
.hps_swiper .swiper-button-next {
  right: 12px;
}
.hps_swiper .swiper-pagination {
  position: static;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
}
@media (max-width: 768px) {
  .hps_swiper .swiper-pagination {
    display: none;
  }
}
.hps_swiper .swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  margin: 0;
  background: #d3e3e2;
  opacity: 1;
  transition: background-color 0.2s ease;
}
.hps_swiper .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #007170;
}

.hps_card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.hps_img_wrap {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 1.73/1;
  margin-bottom: 12px;
  border-radius: 8px;
  overflow: hidden;
}
.hps_img_wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hps_badge_lock,
.hps_badge_diff,
.hps_badge_time {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  white-space: nowrap;
}

.hps_badge_lock {
  top: 10px;
  right: 10px;
  background: #fff;
  color: #2b3635;
  box-shadow: 0 1px 4px rgba(43, 54, 53, 0.2);
}

.hps_badge_diff,
.hps_badge_time {
  border-radius: 4px;
  background: rgba(43, 54, 53, 0.7);
  color: #fff;
  font-weight: 400;
}

.hps_badge_diff {
  bottom: 10px;
  left: 10px;
}

.hps_badge_time {
  bottom: 10px;
  right: 10px;
}

.hps_card_title {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 6px;
  text-decoration: none;
}
.hps_card_title b {
  color: #2b3635;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
}
.hps_card_title span {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #2b3635;
  font-size: 14px;
  font-weight: 400;
  padding-top: 2px;
}

.hps_tags {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #5b6362;
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 4px;
}

.hps_coach {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #5b6362;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
}

/*# sourceMappingURL=style.css.map */
`, $ = (i, e, t, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: e,
      event_type: t,
      event_loc: n
    }), ke(`Event: ${i} | ${e} | ${t} | ${n}`, "success");
  }, Ie = (i) => new Promise((e) => {
    const t = document.querySelector(i);
    t && e(t);
    const n = new MutationObserver(() => {
      const a = document.querySelector(i);
      a && (e(a), n.disconnect());
    });
    n.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), ni = ({ name: i, dev: e }) => {
    const t = i.toLowerCase().replace(/\s/g, "_");
    $(`${t}_started`, `Experiment ${i} started`, "other", t), console.log(
      `%c EXP: ${i} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class W {
    constructor(e) {
      this.elements = e instanceof W ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, t, n) {
      return typeof t == "function" && (n = t, t = ""), this.elements.forEach((a) => {
        a.addEventListener(e, function(s) {
          var o;
          if (t !== "") {
            let r = (o = s.target) == null ? void 0 : o.closest(t);
            r && (n == null || n.call(r, s));
          } else
            n == null || n.call(a, s);
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
        e(new W(t), this.elements.indexOf(t));
      return this;
    }
    style(e, t) {
      const n = e.split("-").map((a, s) => s === 0 ? a : a.charAt(0).toUpperCase() + a.slice(1)).join("");
      return this.elements.forEach(function(a) {
        a.style[n] = t;
      }), this;
    }
    find(e) {
      const t = this.elements.map((n) => Array.from(n.querySelectorAll(e)));
      return new W(t.flat());
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
  const si = (i) => new W(i), ai = (i) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", i, "variant_1"));
    }, 1e3);
  }, ri = (i, e, t, n, a = 1e3, s = 0.5) => {
    let o, r;
    if (o = new IntersectionObserver(
      function(d) {
        d[0].isIntersecting === !0 ? r = setTimeout(() => {
          $(
            e,
            d[0].target.dataset.visible || n || "",
            "view",
            t
          ), o.disconnect();
        }, a) : (ke("Element is not fully visible", "warn"), clearTimeout(r));
      },
      { threshold: [s] }
    ), typeof i == "string") {
      const d = document.querySelector(i);
      d && o.observe(d);
    } else
      o.observe(i);
  }, ke = (i, e = "info") => {
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
    console.log(`%c>>> ${i}`, `${t} font-size: 16px; font-weight: 600`);
  }, oi = "https://conversionrate-store.github.io/a-b_images/dywm/hp_sliders_placeholder.webp", R = {
    star: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M13.8512 5.55066L10.7834 8.54115L11.5079 12.7649C11.5394 12.9496 11.4636 13.1362 11.3119 13.2465C11.2262 13.3091 11.1242 13.3406 11.0223 13.3406C10.944 13.3406 10.8652 13.3219 10.7933 13.284L7 11.2898L3.20722 13.2835C3.04174 13.3711 2.8403 13.3569 2.68861 13.2461C2.53692 13.1357 2.46107 12.9491 2.49259 12.7644L3.21707 8.54066L0.14876 5.55066C0.0147986 5.41965 -0.0339595 5.22363 0.0241562 5.04584C0.0822718 4.86805 0.236426 4.73753 0.4221 4.71044L4.66208 4.09481L6.55822 0.252286C6.7242 -0.0840953 7.2758 -0.0840953 7.44178 0.252286L9.33792 4.09481L13.5779 4.71044C13.7636 4.73753 13.9177 4.86755 13.9758 5.04584C14.034 5.22413 13.9852 5.41916 13.8512 5.55066Z" fill="#E7937B"/>
  </svg>`,
    rate: `<svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="6" width="2" height="3" fill="white"/>
    <rect x="3" y="3" width="2" height="6" fill="#ffffff"/>
    <rect x="6" width="2" height="9" fill="#ffffff"/>
  </svg>`,
    lock: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
    <path d="M10.5 5.25H9.75V3.75C9.75 1.68 8.07 0 6 0C3.93 0 2.25 1.68 2.25 3.75V5.25H1.5C0.675 5.25 0 5.925 0 6.75V12.75C0 13.575 0.675 14.25 1.5 14.25H10.5C11.325 14.25 12 13.575 12 12.75V6.75C12 5.925 11.325 5.25 10.5 5.25ZM6 10.875C5.175 10.875 4.5 10.2 4.5 9.375C4.5 8.55 5.175 7.875 6 7.875C6.825 7.875 7.5 8.55 7.5 9.375C7.5 10.2 6.825 10.875 6 10.875ZM3.675 5.25V3.75C3.675 2.4675 4.7175 1.425 6 1.425C7.2825 1.425 8.325 2.4675 8.325 3.75V5.25H3.675Z" fill="#2B3635"/>
  </svg>`,
    teacher: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<g clip-path="url(#clip0_426_6256)">
<path d="M5.42267 9.35009C5.34767 9.46259 5.29767 9.52821 5.2633 9.59696C4.82892 10.5001 4.16017 11.2095 3.42267 11.8657C3.0883 12.1626 2.76017 12.472 2.43205 12.7782C1.95392 13.222 1.33205 13.2126 0.885173 12.7595C0.447673 12.3126 0.447673 11.6907 0.897673 11.2313C1.49455 10.622 2.11017 10.0313 2.69767 9.41884C2.92892 9.17821 3.12892 8.91259 3.3008 8.62822C3.87892 7.65321 4.44142 6.66884 4.99767 5.68134C5.27892 5.18446 5.71955 4.92196 6.25392 4.82196C7.48517 4.59071 8.71955 4.58134 9.94142 4.89384C10.4258 5.01884 10.7914 5.29696 11.0414 5.74696C11.5695 6.69696 12.1414 7.62509 12.6571 8.58134C12.9445 9.11259 13.3821 9.49384 13.7883 9.90946C14.2352 10.3657 14.6945 10.8095 15.1414 11.2657C15.5508 11.6845 15.5383 12.3126 15.1258 12.7438C14.7133 13.1751 14.0789 13.2376 13.6508 12.847C12.9945 12.247 12.3539 11.6282 11.707 11.0157C11.2821 10.6095 11.0227 10.0876 10.732 9.58759C10.6945 9.52509 10.6539 9.46571 10.5914 9.36259C10.5695 9.45321 10.5539 9.49384 10.5539 9.53446C10.5102 10.4095 10.4758 11.2813 10.4258 12.1563C10.4164 12.3407 10.4633 12.422 10.6508 12.472C11.4164 12.6751 12.1664 12.9251 12.9352 13.1095C13.8883 13.3376 14.3164 14.7376 13.7477 15.5032C13.3883 15.9845 12.8727 16.0595 12.3289 15.9501C10.9477 15.6751 9.57267 15.3782 8.19767 15.0938C8.0633 15.0688 7.92892 15.0688 7.79455 15.0938C6.42267 15.3751 5.05392 15.6657 3.68517 15.9438C3.49142 15.9813 3.29142 15.9876 3.09455 15.9688C2.36955 15.897 1.9133 15.2813 1.99455 14.5032C2.0758 13.7407 2.45705 13.2876 3.19455 13.0782C3.93205 12.8688 4.65705 12.6595 5.3883 12.4563C5.51955 12.4188 5.5758 12.3626 5.56642 12.2188C5.51955 11.3063 5.48205 10.3938 5.44142 9.48446C5.44455 9.46259 5.43517 9.43759 5.42267 9.35009Z" fill="#A6A6A6"/>
<path d="M5.77347 2.21253C5.77972 0.984404 6.78284 -0.00622059 8.01097 2.94121e-05C9.23909 0.00627941 10.2297 1.0094 10.2235 2.23753C10.211 3.48128 9.22347 4.45628 7.97347 4.45003C6.75472 4.4469 5.76722 3.44065 5.77347 2.21253Z" fill="#A6A6A6"/>
</g>
<defs>
<clipPath id="clip0_426_6256">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>`,
    chevronLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
    <path d="M7 1L1 7L7 13" stroke="#2B3635" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
    chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
    <path d="M1 1L7 7L1 13" stroke="#2B3635" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
    clock: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
<path d="M7 14C3.11719 14 0 10.8828 0 7C0 3.14453 3.11719 0 7 0C10.8555 0 14 3.14453 14 7C14 10.8828 10.8555 14 7 14ZM6.34375 7C6.34375 7.21875 6.45312 7.4375 6.61719 7.54688L9.24219 9.29688C9.54297 9.51562 9.95312 9.43359 10.1445 9.13281C10.3633 8.83203 10.2812 8.42188 9.98047 8.20312L7.65625 6.67188V3.28125C7.65625 2.92578 7.35547 2.625 6.97266 2.625C6.61719 2.625 6.31641 2.92578 6.31641 3.28125L6.34375 7Z" fill="white"/>
</svg>`
  }, li = (i, e) => {
    var t;
    return (
      /* HTML */
      `
    <div class="swiper-slide">
      <div class="hps_card" data-hps-title="${i.title}" data-hps-pos="${e}">
        <a href="${i.link}" class="hps_img_wrap">
          <img src="${i.image || oi}" alt="${i.title}" loading="lazy" />
          ${i.free ? "" : (
        /* HTML */
        ` <span class="hps_badge_lock">${R.lock} Subscribers only</span> `
      )}
          ${i.difficulty ? (
        /* HTML */
        ` <span class="hps_badge_diff">${R.rate} ${i.difficulty}</span> `
      ) : ""}
          ${i.duration ? (
        /* HTML */
        ` <span class="hps_badge_time">${R.clock} ${i.duration}</span> `
      ) : ""}
        </a>
        <a href="${i.link}" class="hps_card_title">
          <b>${i.title}</b>
          <span>${R.star} 5.0</span>
        </a>
        ${(t = i.tags) != null && t.length ? (
        /* HTML */
        ` <p class="hps_tags">${i.tags.join(" • ")}</p> `
      ) : ""}
        ${i.teacher ? (
        /* HTML */
        ` <p class="hps_coach">${R.teacher} ${i.teacher}</p> `
      ) : ""}
      </div>
    </div>
  `
    );
  }, di = (i) => (
    /* HTML */
    `
    <div class="hps_row">
      <div class="hps_row_head">
        <h3>${i.title}</h3>
        <a
          href="${i.seeAllLink}"
          class="hps_see_all"
          data-hps-see-all="${i.key}"
          data-hps-see-all-title="${i.title}"
          >See All</a
        >
      </div>
      <div class="hps_swiper swiper" data-hps-slider="${i.key}" data-hps-cat="${i.title}">
        <div class="swiper-wrapper">${i.items.map((e, t) => li(e, t)).join("")}</div>
        <div class="swiper-button-prev">${R.chevronLeft}</div>
        <div class="swiper-button-next">${R.chevronRight}</div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  `
  ), ci = (i) => (
    /* HTML */
    `
  <section class="hps_section">
    <div class="hps_container">
      <h2 class="hps_heading">Practices Tailored to Your Needs</h2>
      ${i.map(di).join("")}
    </div>
  </section>
`
  ), Me = [
    {
      key: "beginners",
      title: "Yoga for Beginners",
      seeAllLink: "/yoga-beginners",
      items: [
        {
          title: "Bend and Stretch",
          link: "/content/stretch-and-bend",
          difficulty: "Beginner I",
          teacher: "Melissa Krieger",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/N0uqajJO1FHCaLC1x5FS7Te131FwAyDbYYkJTCCrBc0.jpg",
          duration: "35:22",
          tags: ["Gentle Yoga", "Hatha Yoga", "Flexibility"]
        },
        {
          title: "Subtle Joint Movements",
          link: "/content/subtle-joint-movements",
          difficulty: "Beginner II",
          teacher: "Sarada Jagannath",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/TXTolj_35hqwevcJXuiQJajZTWhV9HoVMSbVAN20Y80.jpg",
          duration: "29:57",
          tags: ["Hatha Yoga", "Arms/Hands", "Flexibility"]
        },
        {
          title: "Morning Slow Hatha Yoga Flow",
          link: "/content/morning-slow-hatha-yoga-flow",
          difficulty: "Beginner I",
          teacher: "Melissa Krieger",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/akvL8R-R9Bwqm_0Q6Fz9A_wym4UXhRb40pMOssGxoTg.jpg",
          duration: "17:39",
          tags: ["Gentle Yoga", "Hatha Yoga", "Hips"]
        },
        {
          title: "Hatha Yoga for Beginners: A Healthy Spine",
          link: "/content/hatha-yoga-beginners-healthy-spine",
          difficulty: "Beginner II",
          teacher: "Melissa Krieger",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/OhiPHfy7VuvTO2-Ly2lKmXr3GsYvtVgd1WgNBcuKVRU.jpg",
          duration: "22:44",
          tags: ["Gentle Yoga", "Hatha Yoga", "Yoga for Athletes"]
        },
        {
          title: "Yoga for the Hips, Hamstrings and Back",
          link: "/content/yoga-hips-hamstrings-and-back",
          difficulty: "Beginner I",
          teacher: "David Procyshyn",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/EFETR13hT9Dw0v7o6CfbKMQDZyqfRg_8e0NWtyL3G2Q.jpg",
          duration: "26:59",
          tags: ["Gentle Yoga", "Hatha Yoga", "Yoga for Athletes"]
        },
        {
          title: "Office Yoga II",
          link: "/content/office-yoga-ii",
          difficulty: "Beginner II",
          teacher: "David Procyshyn",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/BUzsPmQkgXU-VW8EmAWHZykonkZ2acMVp7Dr7bLYsxU.jpg",
          duration: "15:21",
          tags: ["Gentle Yoga", "Hatha Yoga", "Yoga at Work"]
        },
        {
          title: "Gentle Back Mobility",
          link: "/content/gentle-back-mobility",
          difficulty: "Beginner",
          teacher: "Josh Chen",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/6ZVhvdNQWWz5OgETmDJz0dFJXg-eU0q2ionlh-5izZs.jpg",
          duration: "20:57",
          tags: ["Gentle Yoga", "Hatha Yoga", "Yoga for Back Care"]
        },
        {
          title: "Intro to Tai Chi and Joint Opening",
          link: "/content/intro-tai-chi",
          difficulty: "Beginner I",
          teacher: "Gabriel Shaw",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/tfrG3gEOtEgzeboLLiA2JHiZEFYpG0BhoRZ5LlzI7_s.jpg",
          duration: "33:47",
          tags: ["Tai Chi and Qigong", "Arms/Hands", "Balance"]
        },
        {
          title: "Yoga for Seniors: Hips, Knees and Feet",
          link: "/content/yoga-seniors-hips-knees-and-feet",
          difficulty: "Beginner I",
          teacher: "Michelle Rubin",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/KGNKkKErxaoxEUQ_4yS8OnNFyDhILQlxyI1b2USKHUc.jpg",
          duration: "19:28",
          tags: ["Chair Yoga", "Hatha Yoga", "Yoga for Seniors"]
        },
        {
          title: "Yin Yoga for the Neck and Shoulders",
          link: "/content/yin-yoga-neck-and-shoulders",
          difficulty: "Beginner I",
          teacher: "Nyk Danu",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/HcJn6Y0wAhiRUC4rUdv---p7Casol3n1k74N136kpDQ.jpg",
          duration: "26:42",
          tags: ["Yin and Yin/Yang Yoga", "Neck/Shoulders"]
        },
        {
          title: "Hatha Yoga on the Ground",
          link: "/content/seated-hatha-yoga",
          difficulty: "Beginner II",
          teacher: "Anastasia Hangemanole",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/t33uKLJ5m8SXpEB4RBwralyTKECytpU0rib3rPacXew.jpg",
          duration: "16:19",
          tags: ["Gentle Yoga", "Hatha Yoga", "Hips"]
        },
        {
          title: "Slow Flow: Standing Room Only",
          link: "/content/standing-room-only",
          difficulty: "Beginner II",
          teacher: "Guy Friswell",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/LjS7txeHlTFinxtYYakKIIEYz2v3FqLBa_jFpziQcpQ.jpg",
          duration: "15:44",
          tags: ["Gentle Yoga", "Hatha Yoga", "Slow Flow"]
        },
        {
          title: "Hatha Yoga for the Hands, Arms and Shoulders",
          link: "/content/hatha-yoga-hands-arms-and-shoulders",
          difficulty: "Beginner I",
          teacher: "David Procyshyn",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/OEXQrTVSEGlrIKGvSm39PLMP2RoQ7-jAelzGqsTVE3A.jpg",
          duration: "20:35",
          tags: ["Gentle Yoga", "Hatha Yoga", "Yoga at Work"]
        },
        {
          title: "Yoga for Lifelong Strength",
          link: "/content/yoga-lifelong-strength",
          difficulty: "Beginner II",
          teacher: "Guy Friswell",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/tzWdncv7a9zoW3v-53BaOAmpL11gDRT_cRQTMGEIbzM.jpg",
          duration: "24:11",
          tags: ["Hatha Yoga", "Yoga for Seniors", "Yoga Therapy"]
        },
        {
          title: "Yoga Break for Busy Moms",
          link: "/content/yoga-break-busy-moms",
          difficulty: "Beginner I",
          teacher: "Jonni-Lyn Friel",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/y6rf4J_irT2Ylkv-uqJvM2_KmwQ6CQ14lgUmBVv7GPY.jpg",
          duration: "26:09",
          tags: ["Gentle Yoga", "Hatha Yoga", "Hips"]
        },
        {
          title: "2023 Beginner Yoga Journey",
          link: "/yoga-series/2023-beginner-yoga-journey",
          image: "https://www.doyogawithme.com/sites/default/files/node/collection/field_poster_image/2025/05/beginner-journey-program.jpg"
        }
      ]
    },
    {
      key: "better_sleep",
      title: "Yoga for Better Sleep",
      seeAllLink: "/yoga-better-sleep",
      items: [
        {
          title: "Deep Rest Restorative and Yoga Nidra Meditation",
          link: "/content/deep-rest-restorative-and-yoga-nidra-meditation",
          difficulty: "Beginner I",
          teacher: "Tianne Allan",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/ao8dFW1Sn1o85Cb2lWnm-QV1Nb-t8cd0rFxCmALzRNk.jpg",
          duration: "21:56",
          tags: ["Guided Meditation", "Restorative Yoga", "Sleep/Relaxation"]
        },
        {
          title: "Evening Wind Down",
          link: "/content/evening-wind-down",
          difficulty: "Beginner II",
          teacher: "Josh Chen",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/p9PfzSNhBawVNfud1BfaaBNshlIa8PXltztMSDWuoNs.jpg",
          duration: "19:13",
          tags: ["Hatha Yoga", "Flexibility", "Hips"]
        },
        {
          title: "Reclining Flow for Rest",
          link: "/content/reclining-flow-rest",
          difficulty: "Beginner I",
          teacher: "Sarah Holmes de Castro",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/U-v0kbEfZ71UkPN_R9KIX8zOKfj2q4Tr_4Atdi73dpY.jpg",
          duration: "24:42",
          tags: ["Gentle Yoga", "Hatha Yoga", "Restorative Yoga"]
        },
        {
          title: "Bedtime Yoga",
          link: "/content/bedtime-yoga",
          difficulty: "Beginner I",
          teacher: "Melissa Krieger",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/cet0eSd-JU36vJLCTcT0AptBpMVspVXKKdLEESf7mHg.jpg",
          duration: "36:19",
          tags: ["Hatha Yoga", "Restorative Yoga", "Hips"]
        },
        {
          title: "Restorative Yoga for Busy People",
          link: "/content/restorative-yoga-busy-people",
          difficulty: "Beginner I",
          teacher: "Satiya Channer",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/0NsS3rgyiz0AlC6BmYzU1_rWz45g7353-yiuTYN-VsY.jpg",
          duration: "13:43",
          tags: ["Gentle Yoga", "Restorative Yoga", "Yoga for Seniors"]
        },
        {
          title: "Cool and Calm Yoga",
          link: "/content/cool-calm-yoga",
          difficulty: "Beginner I",
          teacher: "Melissa Krieger",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/PNRFrkCZHr9IF24WkbfR-3lOB9I30xlGqZ2prgfDKHQ.jpg",
          duration: "31:26",
          tags: ["Gentle Yoga", "Hips", "Stress/Anxiety"]
        },
        {
          title: "Bedtime Vinyasa Yoga",
          link: "/content/bedtime-vinyasa-yoga",
          difficulty: "Intermediate I",
          teacher: "Tracey Noseworthy",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/ULRZXsUqwPZHPX4IagFZalsFIAe4SWz9f6ixlTIKZQM.jpg",
          duration: "17:40",
          tags: ["Vinyasa/Power Yoga", "Stress/Anxiety", "Spine"]
        },
        {
          title: "A Yin Practice",
          link: "/content/yin-practice",
          difficulty: "Beginner I",
          teacher: "Satiya Channer",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/eWd1NxTtMsJoZzDSj5AzNaB85NytOm77A0VzbJFTwyo.jpg",
          duration: "28:27",
          tags: ["Yin and Yin/Yang Yoga", "Hips", "Stress/Anxiety"]
        },
        {
          title: "Yin Yoga for the Hips and Hamstrings",
          link: "/content/yin-yoga-hips-and-hamstrings",
          difficulty: "Intermediate I",
          teacher: "Sarah Jane Steele",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/VE0j3UaC35dIfpctCvydMx9gSXysM_OpMB43DinwqcM.jpg",
          duration: "1:00:42",
          tags: ["Yin and Yin/Yang Yoga", "Flexibility", "Hips"]
        },
        {
          title: "Hatha Yoga for Self Care II",
          link: "/content/hatha-yoga-self-care-2",
          difficulty: "Beginner I",
          teacher: "Melissa Krieger",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/eo21jHMR7idXz1fo3PSuLQR-2ajh6JKwFgKCaathR98.jpg",
          duration: "50:34",
          tags: ["Gentle Yoga", "Hatha Yoga", "Hips"]
        },
        {
          title: "Yin/Yang Yoga for the Hips",
          link: "/content/yinyang-yoga-hips",
          difficulty: "Intermediate I",
          teacher: "Sarah Jane Steele",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/FEUd1R8oeOtgy1wgokAHyGOBgPmAVXBwLTRi1D3mcR8.jpg",
          duration: "35:33",
          tags: ["Yin and Yin/Yang Yoga", "Hips", "Twists"]
        },
        {
          title: "Love Yourself",
          link: "/content/love-yourself",
          difficulty: "Beginner I",
          teacher: "Nicky Jones",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/iwqoJuvto89iIJti5HGraN3pnvzUPds3EKAKN6VyED8.jpg",
          duration: "32:47",
          tags: ["Gentle Yoga", "Hatha Yoga", "Twists"]
        },
        {
          title: "Super Supine: Practice Yoga Lying Down",
          link: "/content/practice-yoga-lying-down",
          difficulty: "Beginner II",
          teacher: "Rachel Scott",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/QuONW0W7-KXpCKP-ll1uDQINENm-nBo6hVk2Kyky8b0.jpg",
          duration: "30:13",
          tags: ["Hatha Yoga", "Restorative Yoga", "Legs and Feet"]
        },
        {
          title: "Practicing Self-Care",
          link: "/content/practicing-self-care",
          difficulty: "Beginner I",
          teacher: "Ron Stewart",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/iJeTlHLVHRehOs4zh-iGLffPFfAqZLqjL6tWE_wHfdM.jpg",
          duration: "14:26",
          tags: ["Hatha Yoga", "Values-based Education", "Arms/Hands"]
        },
        {
          title: "Restorative Yoga: Letting Go Through Stillness and Stretch",
          link: "/content/restorative-yoga-letting-go-through-stillness-and-stretch",
          difficulty: "Beginner I",
          teacher: "David Procyshyn",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/wHfpMhjiYmkuhniVMwAjEGejy07ZYH_Qo4y2L8qqILc.jpg",
          duration: "36:08",
          tags: ["Gentle Yoga", "Restorative Yoga", "Yoga for Back Care"]
        },
        {
          title: "Yoga Program Calm Chaos",
          link: "/yoga-series/yoga-program-calm-chaos",
          image: "https://www.doyogawithme.com/sites/default/files/node/collection/field_poster_image/2024/10/calm-chaos.png"
        }
      ]
    },
    {
      key: "pain_relief",
      title: "Yoga for Pain Relief",
      seeAllLink: "/yoga-pain-relief",
      items: [
        {
          title: "Vinyasa Yoga for Lower Back Care: Deep Release",
          link: "/content/vinyasa-yoga-lower-back-care-deep-release",
          difficulty: "Intermediate II",
          teacher: "Fiji McAlpine",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/e1VSLwvv5z1hiD8O4j6nA3rD-D10oBRzpINWZUQLgNM.jpg",
          duration: "27:11",
          tags: ["Yoga for Back Care", "Vinyasa/Power Yoga", "Hips"]
        },
        {
          title: "Hatha Yoga Therapy for the Lower Back",
          link: "/content/hatha-yoga-therapy-lower-back",
          difficulty: "Beginner I",
          teacher: "David Procyshyn",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/lzyntppNH0VBk1KWw6HAt6t0PBZCLXI8erNLBF_EFBw.jpg",
          duration: "26:00",
          tags: ["Gentle Yoga", "Hatha Yoga", "Yoga for Runners"]
        },
        {
          title: "Post-Run Yoga Class",
          link: "/content/post-run-yoga",
          difficulty: "Beginner II",
          teacher: "David Procyshyn",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/OO__SqDSgxM3s-mUnCCf5G1mbqIVreH83LrISXYXlvc.jpg",
          duration: "15:30",
          tags: ["Hatha Yoga", "Yoga for Athletes", "Yoga for Runners"]
        },
        {
          title: "Shoulder Mobility",
          link: "/content/shoulder-mobility",
          difficulty: "Intermediate I",
          teacher: "Josh Chen",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/0pZRslZuh8miXee6H6BgswgSJMf1YuyFxXRhPFwdZQU.jpg",
          duration: "19:55",
          tags: ["Hatha Yoga", "Yoga at Work", "Yoga Therapy"]
        },
        {
          title: "Dancer's Pose: Supple Spine and Shoulders",
          link: "/content/dancers-pose-supple-spine-and-shoulders",
          difficulty: "Intermediate II",
          teacher: "Fiji McAlpine",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/__kRbnjfPEbkf7IcTHaOBUBt9kjyK--npJraEm07L5Q.jpg",
          duration: "22:57",
          tags: ["Vinyasa/Power Yoga", "Vigorous/Energy", "Spine"]
        },
        {
          title: "Yoga for Sciatica Relief",
          link: "/content/yoga-sciatica-relief",
          difficulty: "Beginner II",
          teacher: "David Procyshyn",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/Dj9A33JAxZP5xBUon4v92n5GjXIYCYg0t9cnuB-BaVs.jpg",
          duration: "41:45",
          tags: ["Hatha Yoga", "Yoga for Seniors", "Yoga Therapy"]
        },
        {
          title: "Gentle Floor Sequence",
          link: "/content/gentle-floor-sequence",
          difficulty: "Intermediate I",
          teacher: "Crista Shillington",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/WejB82GtRV3JluunCVYCBc8F7rZDDk67hScD4wC8hRs.jpg",
          duration: "07:03",
          tags: ["Vinyasa/Power Yoga", "Hips", "Spine"]
        },
        {
          title: "Yoga for Runners: Injury Prevention",
          link: "/content/yoga-runners-injury-prevention",
          difficulty: "Intermediate I",
          teacher: "Fiji McAlpine",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/JO10lX4fgTed7hbS24G-epb7R60yTi4CZ4NL6RN8e0E.jpg",
          duration: "23:49",
          tags: ["Hatha Yoga", "Yoga for Athletes", "Yoga for Runners"]
        },
        {
          title: "A Gentle Release for the Shoulders and Back",
          link: "/content/gentle-release-shoulders",
          difficulty: "Beginner I",
          teacher: "Araba Adjaye",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/8AwCk54MbBUoUHyDVy7UA2adpbbFIwNkm6Dfig-_TcA.jpg",
          duration: "19:14",
          tags: ["Hatha Yoga", "Lower Back", "Neck/Shoulders"]
        },
        {
          title: "Twist and Stretch",
          link: "/content/twist-and-stretch",
          difficulty: "Beginner II",
          teacher: "Melissa Krieger",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/7rmntwl-rCch5yNND8kkKtlL2oYcs-8uLn3Pg6ObemY.jpg",
          duration: "32:53",
          tags: ["Gentle Yoga", "Hatha Yoga", "Flexibility"]
        },
        {
          title: "Slow Flow: Focus on Hips",
          link: "/content/slow-flow-focus-hips",
          difficulty: "Beginner II",
          teacher: "Guy Friswell",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/TFXUuyT7zaci1fjV-feoj1Z6HAy9Um027_39jzyShoU.jpg",
          duration: "33:24",
          tags: ["Hatha Yoga", "Slow Flow", "Yoga for Seniors"]
        },
        {
          title: "Yin Yoga for the Lower Back",
          link: "/content/yin-yoga-lower-back",
          difficulty: "Intermediate I",
          teacher: "Sarah Jane Steele",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/IaVsCPKChJeGC5Kq-xX5mXxgn9B_ceLRyXdkAhHjYNA.jpg",
          duration: "36:30",
          tags: ["Yin and Yin/Yang Yoga", "Hips", "Twists"]
        },
        {
          title: "Yoga for Tight Shoulders",
          link: "/content/yoga-tight-shoulders",
          difficulty: "Intermediate I",
          teacher: "Nyk Danu",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/ii6VLGmLndqioRRc8cGwRSz4NrgeeLf7aLfIlS8P4Qc.jpg",
          duration: "38:14",
          tags: ["Yin and Yin/Yang Yoga", "Yoga Therapy", "Yoga for Back Care"]
        },
        {
          title: "Yin Yoga for the Lower Back, Hips and Legs",
          link: "/content/yin-yoga-lower-back-hips-and-legs",
          difficulty: "Intermediate II",
          teacher: "Anastasia Hangemanole",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/Gyl4UD9hr8hK9P5ZFiAkNvqzNDZEfUWPVGrlDybEbgo.jpg",
          duration: "33:28",
          tags: ["Gentle Yoga", "Hatha Yoga", "Yoga for Back Care"]
        },
        {
          title: "Yoga for Knee Arthritis",
          link: "/content/yoga-knee-arthritis",
          difficulty: "Beginner I",
          teacher: "David Procyshyn",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/R101WTcaNjZbmMvfNLljTpzIrYnYsppm9VJr_VuoYxY.jpg",
          duration: "24:38",
          tags: ["Gentle Yoga", "Hatha Yoga", "Yoga for Runners"]
        },
        {
          title: "Beginner Yoga Optimal Lower Back Health",
          link: "/yoga-series/beginner-yoga-optimal-lower-back-health",
          image: "https://www.doyogawithme.com/sites/default/files/node/collection/field_poster_image/2025/05/yoga-for-optimal-lower-back-health-program.jpg"
        },
        {
          title: "Back To Health Seniors",
          link: "/yoga-challenges/back-to-health-seniors",
          image: "https://www.doyogawithme.com/sites/default/files/node/collection/field_poster_image/2025/05/back-to-health.jpg"
        }
      ]
    },
    {
      key: "calm_your_mind",
      title: "Yoga to Calm Your Mind",
      seeAllLink: "/yoga-calm-mind",
      items: [
        {
          title: "Morning Meditation and Stretch",
          link: "/content/morning-meditation-stretch",
          difficulty: "Beginner I",
          teacher: "Melissa Krieger",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/zYkm3i07WI3J7VFrZUYUWiFGl4UE6s3f9L5AnSGaPU8.jpg",
          duration: "23:06",
          tags: ["Gentle Yoga", "Guided Meditation", "Slow Flow"]
        },
        {
          title: "Moving Meditation II",
          link: "/content/moving-meditation-ii",
          difficulty: "Advanced",
          teacher: "Fiji McAlpine",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/ll9dFUYULMqvd59ajqG6zPPDXZjGpR63FFbkOzEk-FY.jpg",
          duration: "46:44",
          tags: ["Vinyasa/Power Yoga", "Vigorous/Energy", "Twists"]
        },
        {
          title: "Slow Flow: Focus on Breathing",
          link: "/content/flowing-slowly-breath",
          difficulty: "Intermediate I",
          teacher: "Guy Friswell",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/zRTGHO19j55ZFBKGCUOdK1VQaIHWQqsVaaX6ZfVvfus.jpg",
          duration: "45:05",
          tags: ["Hatha Yoga", "Slow Flow", "Yoga for Seniors"]
        },
        {
          title: "Yin Yoga: Sinking Into Stillness",
          link: "/content/yin-yoga-sinking-stillness",
          difficulty: "Beginner I",
          teacher: "Anastasia Hangemanole",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/OKWoCsH_6c4gQfyJr2anSS8BlYMZ4Z3YfY1F0c2NT8E.jpg",
          duration: "1:00:42",
          tags: ["Gentle Yoga", "Restorative Yoga", "Yoga for Back Care"]
        },
        {
          title: "Mindfulness Meditation: A Guided Meditation on Expanding the Mind",
          link: "/content/mindfulness-meditation-guided-meditation-expanding-mind",
          difficulty: "Beginner II",
          teacher: "David Procyshyn",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/-VLOxtWQBmZntrFwZE6-m2zwwI15oPm5w1TkHjMue7k.jpg",
          duration: "13:32",
          tags: ["Guided Meditation", "Sleep/Relaxation", "Stress/Anxiety"]
        },
        {
          title: "The 3-Part Breath and Ujjayi Breathing",
          link: "/content/3-part-breath-and-ujjayi-breathing",
          difficulty: "Beginner I",
          teacher: "David Procyshyn",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/7PsdSsgaxVv2hKIgEyoWaJgK-a0fG7a9DAljxHhzwuE.jpg",
          duration: "13:51",
          tags: ["Gentle Yoga", "Hatha Yoga", "Pranayama Yoga"]
        },
        {
          title: "6-Minute Office Yoga for Energy and Stress Relief",
          link: "/content/office-energy-stress",
          difficulty: "Beginner I",
          teacher: "David Procyshyn",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/QhcHvUh9lsxcCOfHudIlVO8TOdffz7DL76eAKz63W0Y.jpg",
          duration: "05:59",
          tags: ["Gentle Yoga", "Hatha Yoga", "Yoga at Work"]
        },
        {
          title: "Eye of the Storm Meditation",
          link: "/content/eye-storm-meditation",
          difficulty: "Beginner I",
          teacher: "Fiji McAlpine",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/OMjHpLaPpKks5gL6nrNTTut0PJNPP5uGTKEkKIpS8Ns.jpg",
          duration: "13:51",
          tags: ["Guided Meditation", "Morning", "Sleep/Relaxation"]
        },
        {
          title: "Basics and Beyond: Breath and Basics",
          link: "/content/basics-beyond-1",
          difficulty: "Beginner I",
          teacher: "Melissa Krieger",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/yCmmnCUwJmbHhsCOvBUxsU3IItNvzYIn5_iX3pX9rMg.jpg",
          duration: "34:56",
          tags: ["Gentle Yoga", "Whole Body", "Morning"]
        },
        {
          title: "Pranayama: Adding Rhythmatic Life Force with Control",
          link: "/content/pranayama-rhythmatic-life-force",
          difficulty: "Intermediate I",
          teacher: "Sarada Jagannath",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/8RqnuhvOuiSBKYlpC4O1Ht1mWu9PzdD-pL8Z0mK079s.jpg",
          duration: "22:48",
          tags: ["Pranayama Yoga", "Morning", "Sleep/Relaxation"]
        },
        {
          title: "Movement in Stillness, Stillness in Movement",
          link: "/content/movement-stillness",
          difficulty: "Intermediate III",
          teacher: "Tracey Noseworthy",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/NlvDzlptaR1J-r1cJQjCnM1YBeEZZEmiwansPP5oSd8.jpg",
          duration: "23:26",
          tags: ["Vinyasa/Power Yoga", "Hips", "Whole Body"]
        },
        {
          title: "Breath, Balance and Twists",
          link: "/content/breath-balance-and-twists",
          difficulty: "Intermediate I",
          teacher: "Anastasia Hangemanole",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/Dun1Nu4HXLbrLH2_ga_r8YjNpUEZzK99xlJmKDG8Dw8.jpg",
          duration: "57:01",
          tags: ["Gentle Yoga", "Hatha Yoga", "Twists"]
        },
        {
          title: "Pranayama Yoga to Wake Up",
          link: "/content/pranayama-wake",
          difficulty: "Beginner II",
          teacher: "David Procyshyn",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/NtSa5e2ewWdLc5bVkXINX7RSoK4tKKDWjIA1KIS58Oc.jpg",
          duration: "10:03",
          tags: ["Gentle Yoga", "Hatha Yoga", "Yoga at Work"]
        },
        {
          title: "Yoga Chronic Stress Anxiety Depression",
          link: "/yoga-series/yoga-chronic-stress-anxiety-depression",
          image: "https://www.doyogawithme.com/sites/default/files/node/collection/field_poster_image/2025/05/chronic-stress-anxiety-program.jpg"
        },
        {
          title: "30 Day Mindfulness Meditation",
          link: "/yoga-challenges/30-day-mindfulness-meditation",
          image: "https://www.doyogawithme.com/sites/default/files/node/collection/field_poster_image/2025/05/mindfulness-meditation.jpg"
        }
      ]
    },
    {
      key: "strength_flexibility",
      title: "Yoga for Strength & Flexibility",
      seeAllLink: "/yoga-strength-flexibility",
      items: [
        {
          title: "Morning Wake-Up and Flow!",
          link: "/content/morning-wake-and-flow",
          difficulty: "Intermediate II",
          teacher: "Fiji McAlpine",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/fKMJmt0AEuUS7LM8uIah_Q5Wq0WX25kjzE1sq3cwpsA.jpg",
          duration: "20:01",
          tags: ["Vinyasa/Power Yoga", "Vigorous/Energy", "Spine"]
        },
        {
          title: "Vinyasa for Vitality",
          link: "/content/vinyasa-vitality",
          difficulty: "Intermediate II",
          teacher: "Fiji McAlpine",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/YQaM6N2WTeoav4hUPuxdVcRIi8QbLy2zqIYeH0B3syA.jpg",
          duration: "19:39",
          tags: ["Vinyasa/Power Yoga", "Vigorous/Energy", "Twists"]
        },
        {
          title: "Morning Stretch Flow",
          link: "/content/morning-stretch-flow",
          difficulty: "Beginner II",
          teacher: "Josh Chen",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/IzctspkZEkfFVf6xBJ9jVQr_ebbVRRjCwkX3wluafCI.jpg",
          duration: "20:38",
          tags: ["Slow Flow", "Hips", "Spine"]
        },
        {
          title: "Deep Devotion",
          link: "/content/deep-devotion",
          difficulty: "Intermediate III",
          teacher: "Fiji McAlpine",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/Wr4P2qrr3SnvcJL2GraNGUg8JSd6HwAAuKLreR_sHow.jpg",
          duration: "49:53",
          tags: ["Vinyasa/Power Yoga", "Vigorous/Energy", "Whole Body"]
        },
        {
          title: "Post Run Stretch",
          link: "/content/post-run-stretch",
          difficulty: "Intermediate I",
          teacher: "Josh Chen",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/hlcT5pNTHJJ9kOTCmcIVgb3AiQRqS7vBxUlWUFTY5Dk.jpg",
          duration: "12:41",
          tags: ["Yoga for Runners", "Flexibility", "Hips"]
        },
        {
          title: "Feel Stronger, Be Softer",
          link: "/content/feel-stronger-be-softer",
          difficulty: "Intermediate II",
          teacher: "Tracey Noseworthy",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/-Vqk_A54L7GYKnFSrtgn37ATxjI7_72jkZCiQDkWeDc.jpg",
          duration: "31:35",
          tags: ["Slow Flow", "Vinyasa/Power Yoga", "Yoga at Work"]
        },
        {
          title: "Yoga for Abs",
          link: "/content/yoga-for-abs",
          difficulty: "Intermediate II",
          teacher: "Jonni-Lyn Friel",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/KtJoLMAXbJKoqvyU-WhfLa52lz46kRT8E91BCawDfeE.jpg",
          duration: "13:31",
          tags: ["Vinyasa/Power Yoga", "Arms/Hands", "Balance"]
        },
        {
          title: "Slow Power Flow: Free Flow",
          link: "/content/slow-power-free-flow",
          difficulty: "Intermediate I",
          teacher: "Guy Friswell",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/l5rUQmxIDbHauzEcmlWLpYOLBLhkPdILEbk2IXRT-iQ.jpg",
          duration: "33:50",
          tags: ["Hatha Yoga", "Slow Flow", "Vinyasa/Power Yoga"]
        },
        {
          title: "Release Your Inner Hippie",
          link: "/content/release-your-inner-hippie",
          difficulty: "Intermediate I",
          teacher: "Tracey Noseworthy",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/03TtmTbzkwBqoT2gWRrfP2dhMQFS4SL7eQExsYkNFGk.jpg",
          duration: "23:24",
          tags: ["Vinyasa/Power Yoga", "Hips", "Spine"]
        },
        {
          title: "Deep Release for the Hips, Hamstrings and Lower Back",
          link: "/content/deep-release-hips-hamstrings-and-lower-back",
          difficulty: "Beginner II",
          teacher: "David Procyshyn",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/nhU0qtgjnQO9ldzTuBd4y-7oqd2H3j27fHcmt52ezEI.jpg",
          duration: "47:32",
          tags: ["Gentle Yoga", "Hatha Yoga", "Yoga for Athletes"]
        },
        {
          title: "Chair Yoga for the Lower Body",
          link: "/content/chair-yoga-lower-body",
          difficulty: "Beginner I",
          teacher: "David Procyshyn",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/YrRHbe7NYkmcLWjtvAGUtp70Lw9uDFNSjr44MfXlCYA.jpg",
          duration: "15:46",
          tags: ["Chair Yoga", "Gentle Yoga", "Hatha Yoga"]
        },
        {
          title: "Ignite the Fire Within: Core Stability Flow",
          link: "/content/core-stability-flow",
          difficulty: "Intermediate I",
          teacher: "Melissa Birnie",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/6fILSf-XMm30WxgYD5BqMENURSNb6uIVf-IplwMu7gY.jpg",
          duration: "28:12",
          tags: ["Pilates", "Vinyasa/Power Yoga", "Balance"]
        },
        {
          title: "Pilates: Core Burn",
          link: "/content/pilates-core-burn",
          difficulty: "Intermediate III",
          teacher: "Julia Crouch",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/xkML1yNByE4rHZcw8NX2QuxVl8HvDCCC1yXfXO_L9yc.jpg",
          duration: "16:13",
          tags: ["Pilates", "Core Strength", "Flexibility"]
        },
        {
          title: "Basics and Beyond: Full Body Integration",
          link: "/content/basics-beyond-7",
          difficulty: "Beginner I",
          teacher: "Melissa Krieger",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/lZ17mVopb19c5PJ_yKPpjB49h7bvhYpJpvG14c-h2V4.jpg",
          duration: "33:34",
          tags: ["Gentle Yoga", "Whole Body", "Spine"]
        },
        {
          title: "Open Your Hips and Fly",
          link: "/content/open-your-hips-and-fly",
          difficulty: "Intermediate III",
          teacher: "Crista Shillington",
          image: "https://www.doyogawithme.com/cdn-cgi/image/width=1024,height=600,fit=cover,format=auto,metadata=none/sites/default/files/flowplayer_thumbnails/PR0aqGTQD2UxrW4Xf3kw-xl9jWKKF5gGvHwIOubrSEI.jpg",
          duration: "50:54",
          tags: ["Vinyasa/Power Yoga", "Balance", "Flexibility"]
        },
        {
          title: "Inspired Action 2026",
          link: "/yoga-challenges/inspired-action-2026",
          image: "https://www.doyogawithme.com/sites/default/files/node/collection/field_poster_image/2025/12/DSC09174%20%282%29.jpg"
        },
        {
          title: "More Core",
          link: "/yoga-challenges/more-core",
          image: "https://www.doyogawithme.com/sites/default/files/node/collection/field_poster_image/2025/09/DSC09055.jpg"
        },
        {
          title: "Yoga Sculpt Series",
          link: "/yoga-series/yoga-sculpt-series",
          image: "https://www.doyogawithme.com/sites/default/files/node/collection/field_poster_image/2026/04/DSC08262-2%20%282%29.jpg"
        },
        {
          title: "14 Day Yoga Challenge",
          link: "/yoga-challenges/14-day-yoga-challenge",
          image: "https://www.doyogawithme.com/sites/default/files/node/collection/field_poster_image/2025/05/14-day-challenge-fiji.JPG"
        }
      ]
    }
  ];
  ni({ name: "HP sliders", dev: "YK" }), ai("dywm_hp_sliders");
  const Pe = ".sfc-frontPageAnon__whatMovesYou.sfc-section";
  class pi {
    constructor() {
      this.init();
    }
    async init() {
      await Ie("body"), document.body.insertAdjacentHTML(
        "afterbegin",
        `<style class="hps_style">${Jt}${ei}${ti}${ii}</style>`
      ), await Ie(Pe);
      const e = si(Pe).elements[0];
      e.style.display = "none", e.insertAdjacentHTML("afterend", ci(Me)), this.initSliders(), this.bindAnalytics();
    }
    initSliders() {
      document.querySelectorAll("[data-hps-slider]").forEach((e) => {
        const t = e.dataset.hpsSlider || "", n = e.dataset.hpsCat || t;
        let a = !1;
        const s = () => {
          const o = e.querySelector(".hps_img_wrap");
          o && e.style.setProperty("--hps-img-h", `${o.offsetHeight}px`);
        };
        s(), window.addEventListener("resize", s), new O(e, {
          modules: [Zt, Qt],
          slidesPerView: 1.15,
          spaceBetween: 16,
          navigation: {
            nextEl: e.querySelector(".swiper-button-next"),
            prevEl: e.querySelector(".swiper-button-prev")
          },
          pagination: {
            el: e.querySelector(".swiper-pagination"),
            clickable: !0
          },
          breakpoints: {
            769: {
              slidesPerView: 3,
              spaceBetween: 22
            }
          },
          on: {
            // first swipe/arrow/dot interaction only -- avoid flooding analytics with one event per slide
            slideChangeTransitionStart: () => {
              a || (a = !0, $(`hp_sliders_scroll_${t}`, n, "other", n));
            }
          }
        });
      });
    }
    bindAnalytics() {
      Me.forEach((e) => {
        ri(`[data-hps-slider="${e.key}"]`, `hp_sliders_view_${e.key}`, e.title, e.title);
      }), document.addEventListener("click", (e) => {
        const t = e.target, n = t.closest(".hps_card a");
        if (n) {
          const s = n.closest(".hps_card"), o = n.closest("[data-hps-slider]"), r = (s == null ? void 0 : s.dataset.hpsTitle) || "", d = (o == null ? void 0 : o.dataset.hpsCat) || (o == null ? void 0 : o.dataset.hpsSlider) || "";
          $("hp_sliders_card_click", `${d} - ${r}`, "click", d);
          return;
        }
        const a = t.closest("[data-hps-see-all]");
        if (a) {
          const s = a.getAttribute("data-hps-see-all-title") || a.getAttribute("data-hps-see-all") || "";
          $("hp_sliders_see_all_click", s, "click", s);
        }
      });
    }
  }
  new pi();
})();
//# sourceMappingURL=index.js.map
