(function() {
  "use strict";
  const u = (i, e, t, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: e,
      event_type: t,
      event_loc: s
    }), b(`Event: ${i} | ${e} | ${t} | ${s}`, "success");
  }, O = (i) => new Promise((e) => {
    const t = document.querySelector(i);
    t && e(t);
    const s = new MutationObserver(() => {
      const n = document.querySelector(i);
      n && (e(n), s.disconnect());
    });
    s.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), J = ({ name: i, dev: e }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, K = async (i, e) => {
    const t = (s) => new Promise((n, o) => {
      {
        if (Array.from(document.scripts).map(
          (c) => c.src.toLowerCase()
        ).includes(s.toLowerCase()))
          return b(`Script ${s} allready downloaded!`, "success"), n("");
        const a = document.createElement("script");
        a.src = s, a.defer = !0, a.onload = n, a.onerror = o, document.head.appendChild(a);
      }
    });
    for (const s of i)
      b(s), await t(s), b(`Loaded librari ${s}`);
    b("All libraries loaded!", "success");
  }, Q = (i) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", i, "variant_1"));
    }, 1e3);
  }, Y = (i, e, t, s, n = 1e3, o = 0.5) => {
    let r, a;
    r = new IntersectionObserver(
      function(c) {
        c[0].isIntersecting === !0 ? a = setTimeout(() => {
          u(
            e,
            c[0].target.dataset.visible || s,
            "view",
            t
          ), r.disconnect();
        }, n) : (b("Element is not fully visible", "warn"), clearTimeout(a));
      },
      { threshold: [o] }
    );
    {
      const c = document.querySelector(i);
      c && r.observe(c);
    }
  }, b = (i, e = "info") => {
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
  };
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const $ = globalThis, V = (i) => i, R = $.trustedTypes, z = R ? R.createPolicy("lit-html", { createHTML: (i) => i }) : void 0, W = "$lit$", v = `lit$${Math.random().toFixed(9).slice(2)}$`, j = "?" + v, ee = `<${j}>`, m = document, A = () => m.createComment(""), x = (i) => i === null || typeof i != "object" && typeof i != "function", B = Array.isArray, te = (i) => B(i) || typeof (i == null ? void 0 : i[Symbol.iterator]) == "function", M = `[ 	
\f\r]`, k = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, D = /-->/g, q = />/g, y = RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), U = /'/g, Z = /"/g, F = /^(?:script|style|textarea|title)$/i, se = (i) => (e, ...t) => ({ _$litType$: i, strings: e, values: t }), T = se(1), E = Symbol.for("lit-noChange"), d = Symbol.for("lit-nothing"), G = /* @__PURE__ */ new WeakMap(), _ = m.createTreeWalker(m, 129);
  function X(i, e) {
    if (!B(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return z !== void 0 ? z.createHTML(e) : e;
  }
  const ne = (i, e) => {
    const t = i.length - 1, s = [];
    let n, o = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", r = k;
    for (let a = 0; a < t; a++) {
      const c = i[a];
      let h, p, l = -1, g = 0;
      for (; g < c.length && (r.lastIndex = g, p = r.exec(c), p !== null); ) g = r.lastIndex, r === k ? p[1] === "!--" ? r = D : p[1] !== void 0 ? r = q : p[2] !== void 0 ? (F.test(p[2]) && (n = RegExp("</" + p[2], "g")), r = y) : p[3] !== void 0 && (r = y) : r === y ? p[0] === ">" ? (r = n ?? k, l = -1) : p[1] === void 0 ? l = -2 : (l = r.lastIndex - p[2].length, h = p[1], r = p[3] === void 0 ? y : p[3] === '"' ? Z : U) : r === Z || r === U ? r = y : r === D || r === q ? r = k : (r = y, n = void 0);
      const w = r === y && i[a + 1].startsWith("/>") ? " " : "";
      o += r === k ? c + ee : l >= 0 ? (s.push(h), c.slice(0, l) + W + c.slice(l) + v + w) : c + v + (l === -2 ? a : w);
    }
    return [X(i, o + (i[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), s];
  };
  class S {
    constructor({ strings: e, _$litType$: t }, s) {
      let n;
      this.parts = [];
      let o = 0, r = 0;
      const a = e.length - 1, c = this.parts, [h, p] = ne(e, t);
      if (this.el = S.createElement(h, s), _.currentNode = this.el.content, t === 2 || t === 3) {
        const l = this.el.content.firstChild;
        l.replaceWith(...l.childNodes);
      }
      for (; (n = _.nextNode()) !== null && c.length < a; ) {
        if (n.nodeType === 1) {
          if (n.hasAttributes()) for (const l of n.getAttributeNames()) if (l.endsWith(W)) {
            const g = p[r++], w = n.getAttribute(l).split(v), L = /([.?@])?(.*)/.exec(g);
            c.push({ type: 1, index: o, name: L[2], strings: w, ctor: L[1] === "." ? re : L[1] === "?" ? oe : L[1] === "@" ? ce : I }), n.removeAttribute(l);
          } else l.startsWith(v) && (c.push({ type: 6, index: o }), n.removeAttribute(l));
          if (F.test(n.tagName)) {
            const l = n.textContent.split(v), g = l.length - 1;
            if (g > 0) {
              n.textContent = R ? R.emptyScript : "";
              for (let w = 0; w < g; w++) n.append(l[w], A()), _.nextNode(), c.push({ type: 2, index: ++o });
              n.append(l[g], A());
            }
          }
        } else if (n.nodeType === 8) if (n.data === j) c.push({ type: 2, index: o });
        else {
          let l = -1;
          for (; (l = n.data.indexOf(v, l + 1)) !== -1; ) c.push({ type: 7, index: o }), l += v.length - 1;
        }
        o++;
      }
    }
    static createElement(e, t) {
      const s = m.createElement("template");
      return s.innerHTML = e, s;
    }
  }
  function f(i, e, t = i, s) {
    var r, a;
    if (e === E) return e;
    let n = s !== void 0 ? (r = t._$Co) == null ? void 0 : r[s] : t._$Cl;
    const o = x(e) ? void 0 : e._$litDirective$;
    return (n == null ? void 0 : n.constructor) !== o && ((a = n == null ? void 0 : n._$AO) == null || a.call(n, !1), o === void 0 ? n = void 0 : (n = new o(i), n._$AT(i, t, s)), s !== void 0 ? (t._$Co ?? (t._$Co = []))[s] = n : t._$Cl = n), n !== void 0 && (e = f(i, n._$AS(i, e.values), n, s)), e;
  }
  class ie {
    constructor(e, t) {
      this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(e) {
      const { el: { content: t }, parts: s } = this._$AD, n = ((e == null ? void 0 : e.creationScope) ?? m).importNode(t, !0);
      _.currentNode = n;
      let o = _.nextNode(), r = 0, a = 0, c = s[0];
      for (; c !== void 0; ) {
        if (r === c.index) {
          let h;
          c.type === 2 ? h = new H(o, o.nextSibling, this, e) : c.type === 1 ? h = new c.ctor(o, c.name, c.strings, this, e) : c.type === 6 && (h = new ae(o, this, e)), this._$AV.push(h), c = s[++a];
        }
        r !== (c == null ? void 0 : c.index) && (o = _.nextNode(), r++);
      }
      return _.currentNode = m, n;
    }
    p(e) {
      let t = 0;
      for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(e, s, t), t += s.strings.length - 2) : s._$AI(e[t])), t++;
    }
  }
  class H {
    get _$AU() {
      var e;
      return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
    }
    constructor(e, t, s, n) {
      this.type = 2, this._$AH = d, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = s, this.options = n, this._$Cv = (n == null ? void 0 : n.isConnected) ?? !0;
    }
    get parentNode() {
      let e = this._$AA.parentNode;
      const t = this._$AM;
      return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(e, t = this) {
      e = f(this, e, t), x(e) ? e === d || e == null || e === "" ? (this._$AH !== d && this._$AR(), this._$AH = d) : e !== this._$AH && e !== E && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : te(e) ? this.k(e) : this._(e);
    }
    O(e) {
      return this._$AA.parentNode.insertBefore(e, this._$AB);
    }
    T(e) {
      this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
    }
    _(e) {
      this._$AH !== d && x(this._$AH) ? this._$AA.nextSibling.data = e : this.T(m.createTextNode(e)), this._$AH = e;
    }
    $(e) {
      var o;
      const { values: t, _$litType$: s } = e, n = typeof s == "number" ? this._$AC(e) : (s.el === void 0 && (s.el = S.createElement(X(s.h, s.h[0]), this.options)), s);
      if (((o = this._$AH) == null ? void 0 : o._$AD) === n) this._$AH.p(t);
      else {
        const r = new ie(n, this), a = r.u(this.options);
        r.p(t), this.T(a), this._$AH = r;
      }
    }
    _$AC(e) {
      let t = G.get(e.strings);
      return t === void 0 && G.set(e.strings, t = new S(e)), t;
    }
    k(e) {
      B(this._$AH) || (this._$AH = [], this._$AR());
      const t = this._$AH;
      let s, n = 0;
      for (const o of e) n === t.length ? t.push(s = new H(this.O(A()), this.O(A()), this, this.options)) : s = t[n], s._$AI(o), n++;
      n < t.length && (this._$AR(s && s._$AB.nextSibling, n), t.length = n);
    }
    _$AR(e = this._$AA.nextSibling, t) {
      var s;
      for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, t); e !== this._$AB; ) {
        const n = V(e).nextSibling;
        V(e).remove(), e = n;
      }
    }
    setConnected(e) {
      var t;
      this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
    }
  }
  class I {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(e, t, s, n, o) {
      this.type = 1, this._$AH = d, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = o, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = d;
    }
    _$AI(e, t = this, s, n) {
      const o = this.strings;
      let r = !1;
      if (o === void 0) e = f(this, e, t, 0), r = !x(e) || e !== this._$AH && e !== E, r && (this._$AH = e);
      else {
        const a = e;
        let c, h;
        for (e = o[0], c = 0; c < o.length - 1; c++) h = f(this, a[s + c], t, c), h === E && (h = this._$AH[c]), r || (r = !x(h) || h !== this._$AH[c]), h === d ? e = d : e !== d && (e += (h ?? "") + o[c + 1]), this._$AH[c] = h;
      }
      r && !n && this.j(e);
    }
    j(e) {
      e === d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
    }
  }
  class re extends I {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(e) {
      this.element[this.name] = e === d ? void 0 : e;
    }
  }
  class oe extends I {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(e) {
      this.element.toggleAttribute(this.name, !!e && e !== d);
    }
  }
  class ce extends I {
    constructor(e, t, s, n, o) {
      super(e, t, s, n, o), this.type = 5;
    }
    _$AI(e, t = this) {
      if ((e = f(this, e, t, 0) ?? d) === E) return;
      const s = this._$AH, n = e === d && s !== d || e.capture !== s.capture || e.once !== s.once || e.passive !== s.passive, o = e !== d && (s === d || n);
      n && this.element.removeEventListener(this.name, this, s), o && this.element.addEventListener(this.name, this, e), this._$AH = e;
    }
    handleEvent(e) {
      var t;
      typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
    }
  }
  class ae {
    constructor(e, t, s) {
      this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = s;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(e) {
      f(this, e);
    }
  }
  const P = $.litHtmlPolyfillSupport;
  P == null || P(S, H), ($.litHtmlVersions ?? ($.litHtmlVersions = [])).push("3.3.2");
  const C = (i, e, t) => {
    const s = (t == null ? void 0 : t.renderBefore) ?? e;
    let n = s._$litPart$;
    if (n === void 0) {
      const o = (t == null ? void 0 : t.renderBefore) ?? null;
      s._$litPart$ = n = new H(e.insertBefore(A(), o), o, void 0, t ?? {});
    }
    return n._$AI(i), n;
  }, le = `.crs-reviews {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2147483647;
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  background: #00000091;
}

.crs-reviews[data-open] {
  display: flex;
}
.crs-reviews:has(~ .reputon-etsy-reviews-widget) {
  display: none;
  pointer-events: none;
}

body:has(.crs-reviews[data-open]) {
  overflow: hidden;
}

.crs-reviews-content {
  --max-height: 100svh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1066px;
  max-width: 90%;

  height: max-content;
  max-height: 90%;
  max-height: var(--max-height);
}

@media (max-width: 450px) {
  .crs-reviews-content {
    --max-height: 95svh;
  }
}

.crs-reviews .reputon-reviews-body {
  height: calc(var(--max-height) - 93px - 64px - 70px);
}

@media (max-width: 748px) {
  .crs-reviews .reputon-reviews-body {
    max-height: 600px;
  }
}



.crs-reviews .crs-close {
  --close-btn-color: rgb(226, 226, 226);
  margin-left: auto;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  padding: 0;
  border: none;
  border: 2px solid var(--close-btn-color);
  color: var(--close-btn-color);
  font-size: 14px;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

@media (max-width: 748px) {
  .crs-reviews .crs-close {
    width: 25px;
  }
}

.crs-reviews .crs-close:hover {
  --close-btn-color: rgb(255, 255, 255);
}
.crs-reviews .crs-close i {
  line-height: 0;
}
.crs-reviews .reputon-reviews-holder {
  padding: 0;
}

.crs-reviews .reputon-etsy-reviews-widget .kNwiBh {
  border: none;
}

.reputon-etsy-reviews-widget .reputon-modal {
  z-index: 2147483647;
}

.reputon-modal-backdrop {
  background: #00000091;
  opacity: 1;
}

.reputon-modal-content {
  transform: scale(1) !important;
}`;
  class de {
    constructor() {
      this.seenReviewIndexes = /* @__PURE__ */ new Set(), this.pendingReviewTimers = /* @__PURE__ */ new Map(), this.init();
    }
    init() {
      this.render();
    }
    render() {
      const e = T`<style>
        ${le}
      </style>
      <div class="crs-reviews" id="crs-reviews-dialog">
        <div class="crs-reviews-content">
          <button type="button" class="crs-close">
            <i class="fa-solid fa-xmark"></i>
          </button>
          <div
            class="reputon-etsy-reviews-widget"
            data-theme="light"
            data-type="standard"
            data-show-product-picture="true"
            data-show-date="true"
            data-font="theme"
            data-show-avatar="true"
          ></div>
        </div>
      </div>`;
      C(e, document.body, {
        renderBefore: null
      }), this.eventListeners(), this.trackReviewVisibility();
    }
    eventListeners() {
      const e = document.getElementById(
        "crs-reviews-dialog"
      );
      e.addEventListener("click", (t) => {
        var n;
        const s = t.target;
        if (s.closest(".crs-reviews-content .reputon-etsy-reviews-widget") || (e.removeAttribute("data-open"), s.closest(".crs-close") ? u(
          "exp_etsy_popup_close_btn",
          "Close Button",
          "click",
          "Etsy Reviews Popup"
        ) : u(
          "exp_etsy_popup_close_bckdrop",
          "Backdrop Close",
          "click",
          "Etsy Reviews Popup"
        )), s.closest(".reputon-product-image") || s.closest(".reputon-reviews-images-container")) {
          const o = (n = s.closest("[data-crs-review-index]")) == null ? void 0 : n.getAttribute("data-crs-review-index");
          u(
            "exp_etsy_popup_image_click",
            "Review " + (o ? `${o}` : ""),
            "click",
            "Etsy Reviews Popup"
          );
        }
      }), window.addEventListener(
        "click",
        (t) => {
          const s = t.target;
          s.closest(".reputon-swiper-button-next") && u(
            "exp_etsy_slider_next",
            "Next Button",
            "click",
            "Etsy Image Slider"
          ), s.closest(".reputon-swiper-button-prev") && u(
            "exp_etsy_slider_prev",
            "Prev Button",
            "click",
            "Etsy Image Slider"
          ), s.closest(".reputon-modal-close") && u(
            "exp_etsy_slider_close_btn",
            "Close Button",
            "click",
            "Etsy Image Slider"
          ), (s.closest(".reputon-modal-backdrop") || s.closest(".swiper-slide") && !s.closest(".reputon-swiper-image") && !s.closest(".reputon-modal-close")) && u(
            "exp_etsy_slider_close_bckdrop",
            "Backdrop Close",
            "click",
            "Etsy Image Slider"
          );
        },
        !0
      );
    }
    trackReviewVisibility() {
      const e = document.querySelector(
        ".reputon-etsy-reviews-widget"
      ), t = () => (e == null ? void 0 : e.querySelector(".reputon-reviews-body")) || (e == null ? void 0 : e.querySelector(".reputon-reviews-content")), s = (r) => {
        this.setupReviewObserver(r), new MutationObserver(() => {
          this.setupReviewObserver(r);
        }).observe(r, {
          childList: !0,
          subtree: !0
        });
      }, n = t();
      if (n) {
        s(n);
        return;
      }
      if (!e)
        return;
      const o = new MutationObserver(() => {
        const r = t();
        r && (s(r), o.disconnect());
      });
      o.observe(e, {
        childList: !0,
        subtree: !0
      });
    }
    setupReviewObserver(e) {
      const t = Array.from(
        e.querySelectorAll(".reputon-single-review")
      );
      t.length && (this.reviewVisibilityObserver || (this.reviewVisibilityObserver = new IntersectionObserver(
        (s) => this.handleReviewVisibility(s),
        {
          root: e,
          threshold: 1
        }
      )), t.forEach((s, n) => {
        s.setAttribute("data-crs-review-index", String(n + 1)), s.getAttribute("data-crs-review-observed") || (this.reviewVisibilityObserver.observe(s), s.setAttribute("data-crs-review-observed", "true"));
      }));
    }
    handleReviewVisibility(e) {
      e.forEach((t) => {
        const s = t.target, n = parseInt(
          s.getAttribute("data-crs-review-index") || "0",
          10
        );
        if (!n) return;
        if (!t.isIntersecting) {
          const r = this.pendingReviewTimers.get(n);
          r !== void 0 && (window.clearTimeout(r), this.pendingReviewTimers.delete(n));
          return;
        }
        if (this.seenReviewIndexes.has(n) || this.pendingReviewTimers.has(n)) return;
        const o = window.setTimeout(() => {
          this.pendingReviewTimers.delete(n), !this.seenReviewIndexes.has(n) && (this.seenReviewIndexes.add(n), u(
            "exp_etsy_popup_rev_view",
            `Review ${n}`,
            "view",
            "Etsy Reviews Widget"
          ));
        }, 500);
        this.pendingReviewTimers.set(n, o);
      });
    }
  }
  const N = "https://conversionrate-store.github.io/a-b_images/petalsandkeepsakes", he = `.crs-badge-text {
  margin-top: 10px;
  color: rgba(18, 18, 18, 0.75);
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.6px;
}

@media (max-width: 748px) {
  .crs-badge-text {
    margin-top: 5px;
  }
}

.crs-badge-text::before {
  content: '';
  margin-right: 8px;
  display: inline-block;
  width: 16px;
  height: 16px;
  vertical-align: sub;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="%23000" fill-opacity=".75" d="m14.892 4.062-1.846-1.108-1.107-1.846H9.845L8 0 6.154 1.108H3.938l-.984 1.846-1.846 1.108v2.092L0 8l1.108 1.846v2.092l1.846 1.108 1.108 1.846h2.092L8 16l1.846-1.108h2.092l1.108-1.846 1.846-1.107V9.845L16 8l-1.108-1.846V4.062Zm-4.8 4.8.616 2.707c-.123.123-.123.123-.37.246L8 10.461l-2.338 1.477c-.124-.123-.124-.123-.37-.246l.616-2.707-2.093-1.847c.123-.246.123-.246.123-.369l2.831-.246 1.108-2.585h.37l1.107 2.585 2.83.246c.124.246.124.246.124.37l-2.216 1.723Z"/></svg>');
}

.crs-reviews-badge {
  margin-bottom: 20px;
}

.crs-reviews-badge .reputon-reviews-content {
  display: none;
}

.crs-reviews-badge .reputon-reviews-holder {
  margin-top: 12px;
  padding-block: 0;
}

@media (max-width: 840px) and (min-width: 749px) {
  .crs-reviews-badge .reputon-reviews-holder {
    padding-inline: 0;
  }
}

.crs-reviews-badge .crs-body {
  margin-block: 12px;
  display: flex;
  justify-content: center;
  gap: 8px;
}
.crs-reviews-badge .reputon-footer {
  padding: 10px 0;
}

.crs-reviews-badge .crs-footer .crs-button {
  color: #5a31f4;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.6px;
  text-decoration: underline;
}
`;
  class pe {
    constructor() {
      this.init();
    }
    init() {
      this.render();
    }
    async render() {
      const e = T`<style>
        ${he}
      </style>
      <div class="crs-badge-text">We are proud makers · Etsy Star Seller</div>
      <div id="crs-reviews-badge" class="crs-reviews-badge">
        <div
          class="reputon-etsy-reviews-widget"
          data-theme="light"
          data-type="standard"
          data-show-product-picture="true"
          data-show-date="true"
          data-font="theme"
          data-show-avatar="true"
        ></div>
      </div>`, t = await O("product-form form"), s = t == null ? void 0 : t.querySelector(".dwa");
      t && (C(e, t, {
        renderBefore: s ?? void 0
      }), this.changeWidgetBody(), this.changeWidgetFooter());
    }
    async changeWidgetBody() {
      const e = await O(".crs-reviews-badge .reputon-reviews-body");
      if (!e) return;
      e.innerHTML = "";
      const t = T`<div class="crs-body">
      <img
        src="${N}/widget_1.webp"
        alt=""
        width="60"
        height="60"
        loading="lazy"
      />
      <img
        src="${N}/widget_2.webp"
        alt=""
        width="60"
        height="60"
        loading="lazy"
      />
      <img
        src="${N}/widget_3.webp"
        alt=""
        width="60"
        height="60"
        loading="lazy"
      />
      <img
        src="${N}/widget_4.webp"
        alt=""
        width="60"
        height="60"
        loading="lazy"
      />
    </div>`;
      C(t, e), Y(
        ".crs-reviews-badge",
        "exp_etsy_badge_view",
        "Etsy Reviews Badge",
        "Visibility"
      );
    }
    async changeWidgetFooter() {
      const e = await O(
        ".crs-reviews-badge .reputon-reviews-footer"
      );
      if (!e) return;
      e.innerHTML = "";
      const t = T`<div class="crs-footer">
      <button type="button" class="crs-button" id="crs-reviews-trigger">
        See All Reviews
      </button>
    </div>`;
      C(t, e);
      const s = document.getElementById("crs-reviews-trigger");
      s == null || s.addEventListener("click", () => {
        document.getElementById(
          "crs-reviews-dialog"
        ).setAttribute("data-open", ""), u(
          "exp_etsy_badge_click",
          "See All Reviews",
          "click",
          "Etsy Reviews Badge"
        );
      });
    }
  }
  J({ name: "Etsy reviews", dev: "OS" }), Q("exp_etsy");
  class ue {
    constructor() {
      this.init();
    }
    init() {
      location.pathname.includes("/products/") && (this.addStyles(), this.initChanges());
    }
    initChanges() {
      new de(), new pe(), this.loadDependencies();
    }
    async loadDependencies() {
      try {
        await K(
          [
            "https://cdn.etsy.reputon.com/assets/widget.js?shop=os-kh-plus.myshopify.com"
          ],
          "js"
        );
      } catch (e) {
        console.error("Error loading dependencies:", e);
      }
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = "", document.head.appendChild(e);
    }
  }
  new ue();
})();
