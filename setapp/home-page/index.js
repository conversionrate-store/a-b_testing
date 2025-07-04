(function() {
  "use strict";
  const nt = (e) => new Promise((t) => {
    const n = document.querySelector(e);
    n && t(n);
    const o = new MutationObserver(() => {
      const i = document.querySelector(e);
      i && (t(i), o.disconnect());
    });
    o.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), gn = ({ name: e, dev: t }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, vn = (e) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", e, "variant_1"));
    }, 1e3);
  }, De = (e, t = "info") => {
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
    console.log(`%c>>> ${e}`, `${n} font-size: 16px; font-weight: 600`);
  };
  var z = "top", W = "bottom", N = "right", H = "left", pe = "auto", Tt = [z, W, N, H], yt = "start", Ot = "end", yn = "clippingParents", Ee = "viewport", Pt = "popper", bn = "reference", Me = /* @__PURE__ */ Tt.reduce(function(e, t) {
    return e.concat([t + "-" + yt, t + "-" + Ot]);
  }, []), Te = /* @__PURE__ */ [].concat(Tt, [pe]).reduce(function(e, t) {
    return e.concat([t, t + "-" + yt, t + "-" + Ot]);
  }, []), wn = "beforeRead", xn = "read", kn = "afterRead", Cn = "beforeMain", Sn = "main", An = "afterMain", Dn = "beforeWrite", En = "write", Mn = "afterWrite", Tn = [wn, xn, kn, Cn, Sn, An, Dn, En, Mn];
  function X(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function F(e) {
    if (e == null)
      return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }
    return e;
  }
  function dt(e) {
    var t = F(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function U(e) {
    var t = F(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function ce(e) {
    if (typeof ShadowRoot > "u")
      return !1;
    var t = F(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function On(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
      var o = t.styles[n] || {}, i = t.attributes[n] || {}, r = t.elements[n];
      !U(r) || !X(r) || (Object.assign(r.style, o), Object.keys(i).forEach(function(p) {
        var c = i[p];
        c === !1 ? r.removeAttribute(p) : r.setAttribute(p, c === !0 ? "" : c);
      }));
    });
  }
  function Pn(e) {
    var t = e.state, n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
      Object.keys(t.elements).forEach(function(o) {
        var i = t.elements[o], r = t.attributes[o] || {}, p = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), c = p.reduce(function(l, u) {
          return l[u] = "", l;
        }, {});
        !U(i) || !X(i) || (Object.assign(i.style, c), Object.keys(r).forEach(function(l) {
          i.removeAttribute(l);
        }));
      });
    };
  }
  const Oe = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: On,
    effect: Pn,
    requires: ["computeStyles"]
  };
  function K(e) {
    return e.split("-")[0];
  }
  var ut = Math.max, Vt = Math.min, bt = Math.round;
  function le() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function Pe() {
    return !/^((?!chrome|android).)*safari/i.test(le());
  }
  function wt(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    var o = e.getBoundingClientRect(), i = 1, r = 1;
    t && U(e) && (i = e.offsetWidth > 0 && bt(o.width) / e.offsetWidth || 1, r = e.offsetHeight > 0 && bt(o.height) / e.offsetHeight || 1);
    var p = dt(e) ? F(e) : window, c = p.visualViewport, l = !Pe() && n, u = (o.left + (l && c ? c.offsetLeft : 0)) / i, d = (o.top + (l && c ? c.offsetTop : 0)) / r, b = o.width / i, k = o.height / r;
    return {
      width: b,
      height: k,
      top: d,
      right: u + b,
      bottom: d + k,
      left: u,
      x: u,
      y: d
    };
  }
  function de(e) {
    var t = wt(e), n = e.offsetWidth, o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: o
    };
  }
  function Le(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t))
      return !0;
    if (n && ce(n)) {
      var o = t;
      do {
        if (o && e.isSameNode(o))
          return !0;
        o = o.parentNode || o.host;
      } while (o);
    }
    return !1;
  }
  function ot(e) {
    return F(e).getComputedStyle(e);
  }
  function Ln(e) {
    return ["table", "td", "th"].indexOf(X(e)) >= 0;
  }
  function pt(e) {
    return ((dt(e) ? e.ownerDocument : (
      // $FlowFixMe[prop-missing]
      e.document
    )) || window.document).documentElement;
  }
  function Wt(e) {
    return X(e) === "html" ? e : (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      e.parentNode || // DOM Element detected
      (ce(e) ? e.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      pt(e)
    );
  }
  function qe(e) {
    return !U(e) || // https://github.com/popperjs/popper-core/issues/837
    ot(e).position === "fixed" ? null : e.offsetParent;
  }
  function qn(e) {
    var t = /firefox/i.test(le()), n = /Trident/i.test(le());
    if (n && U(e)) {
      var o = ot(e);
      if (o.position === "fixed")
        return null;
    }
    var i = Wt(e);
    for (ce(i) && (i = i.host); U(i) && ["html", "body"].indexOf(X(i)) < 0; ) {
      var r = ot(i);
      if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
        return i;
      i = i.parentNode;
    }
    return null;
  }
  function Lt(e) {
    for (var t = F(e), n = qe(e); n && Ln(n) && ot(n).position === "static"; )
      n = qe(n);
    return n && (X(n) === "html" || X(n) === "body" && ot(n).position === "static") ? t : n || qn(e) || t;
  }
  function ue(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function qt(e, t, n) {
    return ut(e, Vt(t, n));
  }
  function Rn(e, t, n) {
    var o = qt(e, t, n);
    return o > n ? n : o;
  }
  function Re() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function Be(e) {
    return Object.assign({}, Re(), e);
  }
  function $e(e, t) {
    return t.reduce(function(n, o) {
      return n[o] = e, n;
    }, {});
  }
  var Bn = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
      placement: n.placement
    })) : t, Be(typeof t != "number" ? t : $e(t, Tt));
  };
  function $n(e) {
    var t, n = e.state, o = e.name, i = e.options, r = n.elements.arrow, p = n.modifiersData.popperOffsets, c = K(n.placement), l = ue(c), u = [H, N].indexOf(c) >= 0, d = u ? "height" : "width";
    if (!(!r || !p)) {
      var b = Bn(i.padding, n), k = de(r), g = l === "y" ? z : H, w = l === "y" ? W : N, v = n.rects.reference[d] + n.rects.reference[l] - p[l] - n.rects.popper[d], y = p[l] - n.rects.reference[l], S = Lt(r), D = S ? l === "y" ? S.clientHeight || 0 : S.clientWidth || 0 : 0, M = v / 2 - y / 2, a = b[g], C = D - k[d] - b[w], m = D / 2 - k[d] / 2 + M, E = qt(a, m, C), q = l;
      n.modifiersData[o] = (t = {}, t[q] = E, t.centerOffset = E - m, t);
    }
  }
  function jn(e) {
    var t = e.state, n = e.options, o = n.element, i = o === void 0 ? "[data-popper-arrow]" : o;
    i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || Le(t.elements.popper, i) && (t.elements.arrow = i));
  }
  const In = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: $n,
    effect: jn,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
  function xt(e) {
    return e.split("-")[1];
  }
  var zn = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function Hn(e, t) {
    var n = e.x, o = e.y, i = t.devicePixelRatio || 1;
    return {
      x: bt(n * i) / i || 0,
      y: bt(o * i) / i || 0
    };
  }
  function je(e) {
    var t, n = e.popper, o = e.popperRect, i = e.placement, r = e.variation, p = e.offsets, c = e.position, l = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, b = e.isFixed, k = p.x, g = k === void 0 ? 0 : k, w = p.y, v = w === void 0 ? 0 : w, y = typeof d == "function" ? d({
      x: g,
      y: v
    }) : {
      x: g,
      y: v
    };
    g = y.x, v = y.y;
    var S = p.hasOwnProperty("x"), D = p.hasOwnProperty("y"), M = H, a = z, C = window;
    if (u) {
      var m = Lt(n), E = "clientHeight", q = "clientWidth";
      if (m === F(n) && (m = pt(n), ot(m).position !== "static" && c === "absolute" && (E = "scrollHeight", q = "scrollWidth")), m = m, i === z || (i === H || i === N) && r === Ot) {
        a = W;
        var L = b && m === C && C.visualViewport ? C.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          m[E]
        );
        v -= L - o.height, v *= l ? 1 : -1;
      }
      if (i === H || (i === z || i === W) && r === Ot) {
        M = N;
        var O = b && m === C && C.visualViewport ? C.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          m[q]
        );
        g -= O - o.width, g *= l ? 1 : -1;
      }
    }
    var R = Object.assign({
      position: c
    }, u && zn), P = d === !0 ? Hn({
      x: g,
      y: v
    }, F(n)) : {
      x: g,
      y: v
    };
    if (g = P.x, v = P.y, l) {
      var T;
      return Object.assign({}, R, (T = {}, T[a] = D ? "0" : "", T[M] = S ? "0" : "", T.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + v + "px)" : "translate3d(" + g + "px, " + v + "px, 0)", T));
    }
    return Object.assign({}, R, (t = {}, t[a] = D ? v + "px" : "", t[M] = S ? g + "px" : "", t.transform = "", t));
  }
  function Fn(e) {
    var t = e.state, n = e.options, o = n.gpuAcceleration, i = o === void 0 ? !0 : o, r = n.adaptive, p = r === void 0 ? !0 : r, c = n.roundOffsets, l = c === void 0 ? !0 : c, u = {
      placement: K(t.placement),
      variation: xt(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, je(Object.assign({}, u, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: p,
      roundOffsets: l
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, je(Object.assign({}, u, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: !1,
      roundOffsets: l
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const _n = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: Fn,
    data: {}
  };
  var Nt = {
    passive: !0
  };
  function Vn(e) {
    var t = e.state, n = e.instance, o = e.options, i = o.scroll, r = i === void 0 ? !0 : i, p = o.resize, c = p === void 0 ? !0 : p, l = F(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return r && u.forEach(function(d) {
      d.addEventListener("scroll", n.update, Nt);
    }), c && l.addEventListener("resize", n.update, Nt), function() {
      r && u.forEach(function(d) {
        d.removeEventListener("scroll", n.update, Nt);
      }), c && l.removeEventListener("resize", n.update, Nt);
    };
  }
  const Wn = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {
    },
    effect: Vn,
    data: {}
  };
  var Nn = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Ut(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return Nn[t];
    });
  }
  var Un = {
    start: "end",
    end: "start"
  };
  function Ie(e) {
    return e.replace(/start|end/g, function(t) {
      return Un[t];
    });
  }
  function fe(e) {
    var t = F(e), n = t.pageXOffset, o = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: o
    };
  }
  function me(e) {
    return wt(pt(e)).left + fe(e).scrollLeft;
  }
  function Zn(e, t) {
    var n = F(e), o = pt(e), i = n.visualViewport, r = o.clientWidth, p = o.clientHeight, c = 0, l = 0;
    if (i) {
      r = i.width, p = i.height;
      var u = Pe();
      (u || !u && t === "fixed") && (c = i.offsetLeft, l = i.offsetTop);
    }
    return {
      width: r,
      height: p,
      x: c + me(e),
      y: l
    };
  }
  function Gn(e) {
    var t, n = pt(e), o = fe(e), i = (t = e.ownerDocument) == null ? void 0 : t.body, r = ut(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), p = ut(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), c = -o.scrollLeft + me(e), l = -o.scrollTop;
    return ot(i || n).direction === "rtl" && (c += ut(n.clientWidth, i ? i.clientWidth : 0) - r), {
      width: r,
      height: p,
      x: c,
      y: l
    };
  }
  function he(e) {
    var t = ot(e), n = t.overflow, o = t.overflowX, i = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + i + o);
  }
  function ze(e) {
    return ["html", "body", "#document"].indexOf(X(e)) >= 0 ? e.ownerDocument.body : U(e) && he(e) ? e : ze(Wt(e));
  }
  function Rt(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = ze(e), i = o === ((n = e.ownerDocument) == null ? void 0 : n.body), r = F(o), p = i ? [r].concat(r.visualViewport || [], he(o) ? o : []) : o, c = t.concat(p);
    return i ? c : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      c.concat(Rt(Wt(p)))
    );
  }
  function ge(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function Yn(e, t) {
    var n = wt(e, !1, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function He(e, t, n) {
    return t === Ee ? ge(Zn(e, n)) : dt(t) ? Yn(t, n) : ge(Gn(pt(e)));
  }
  function Xn(e) {
    var t = Rt(Wt(e)), n = ["absolute", "fixed"].indexOf(ot(e).position) >= 0, o = n && U(e) ? Lt(e) : e;
    return dt(o) ? t.filter(function(i) {
      return dt(i) && Le(i, o) && X(i) !== "body";
    }) : [];
  }
  function Kn(e, t, n, o) {
    var i = t === "clippingParents" ? Xn(e) : [].concat(t), r = [].concat(i, [n]), p = r[0], c = r.reduce(function(l, u) {
      var d = He(e, u, o);
      return l.top = ut(d.top, l.top), l.right = Vt(d.right, l.right), l.bottom = Vt(d.bottom, l.bottom), l.left = ut(d.left, l.left), l;
    }, He(e, p, o));
    return c.width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c;
  }
  function Fe(e) {
    var t = e.reference, n = e.element, o = e.placement, i = o ? K(o) : null, r = o ? xt(o) : null, p = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2, l;
    switch (i) {
      case z:
        l = {
          x: p,
          y: t.y - n.height
        };
        break;
      case W:
        l = {
          x: p,
          y: t.y + t.height
        };
        break;
      case N:
        l = {
          x: t.x + t.width,
          y: c
        };
        break;
      case H:
        l = {
          x: t.x - n.width,
          y: c
        };
        break;
      default:
        l = {
          x: t.x,
          y: t.y
        };
    }
    var u = i ? ue(i) : null;
    if (u != null) {
      var d = u === "y" ? "height" : "width";
      switch (r) {
        case yt:
          l[u] = l[u] - (t[d] / 2 - n[d] / 2);
          break;
        case Ot:
          l[u] = l[u] + (t[d] / 2 - n[d] / 2);
          break;
      }
    }
    return l;
  }
  function Bt(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, i = o === void 0 ? e.placement : o, r = n.strategy, p = r === void 0 ? e.strategy : r, c = n.boundary, l = c === void 0 ? yn : c, u = n.rootBoundary, d = u === void 0 ? Ee : u, b = n.elementContext, k = b === void 0 ? Pt : b, g = n.altBoundary, w = g === void 0 ? !1 : g, v = n.padding, y = v === void 0 ? 0 : v, S = Be(typeof y != "number" ? y : $e(y, Tt)), D = k === Pt ? bn : Pt, M = e.rects.popper, a = e.elements[w ? D : k], C = Kn(dt(a) ? a : a.contextElement || pt(e.elements.popper), l, d, p), m = wt(e.elements.reference), E = Fe({
      reference: m,
      element: M,
      placement: i
    }), q = ge(Object.assign({}, M, E)), L = k === Pt ? q : m, O = {
      top: C.top - L.top + S.top,
      bottom: L.bottom - C.bottom + S.bottom,
      left: C.left - L.left + S.left,
      right: L.right - C.right + S.right
    }, R = e.modifiersData.offset;
    if (k === Pt && R) {
      var P = R[i];
      Object.keys(O).forEach(function(T) {
        var _ = [N, W].indexOf(T) >= 0 ? 1 : -1, V = [z, W].indexOf(T) >= 0 ? "y" : "x";
        O[T] += P[V] * _;
      });
    }
    return O;
  }
  function Qn(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, i = n.boundary, r = n.rootBoundary, p = n.padding, c = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? Te : l, d = xt(o), b = d ? c ? Me : Me.filter(function(w) {
      return xt(w) === d;
    }) : Tt, k = b.filter(function(w) {
      return u.indexOf(w) >= 0;
    });
    k.length === 0 && (k = b);
    var g = k.reduce(function(w, v) {
      return w[v] = Bt(e, {
        placement: v,
        boundary: i,
        rootBoundary: r,
        padding: p
      })[K(v)], w;
    }, {});
    return Object.keys(g).sort(function(w, v) {
      return g[w] - g[v];
    });
  }
  function Jn(e) {
    if (K(e) === pe)
      return [];
    var t = Ut(e);
    return [Ie(e), t, Ie(t)];
  }
  function to(e) {
    var t = e.state, n = e.options, o = e.name;
    if (!t.modifiersData[o]._skip) {
      for (var i = n.mainAxis, r = i === void 0 ? !0 : i, p = n.altAxis, c = p === void 0 ? !0 : p, l = n.fallbackPlacements, u = n.padding, d = n.boundary, b = n.rootBoundary, k = n.altBoundary, g = n.flipVariations, w = g === void 0 ? !0 : g, v = n.allowedAutoPlacements, y = t.options.placement, S = K(y), D = S === y, M = l || (D || !w ? [Ut(y)] : Jn(y)), a = [y].concat(M).reduce(function(it, Y) {
        return it.concat(K(Y) === pe ? Qn(t, {
          placement: Y,
          boundary: d,
          rootBoundary: b,
          padding: u,
          flipVariations: w,
          allowedAutoPlacements: v
        }) : Y);
      }, []), C = t.rects.reference, m = t.rects.popper, E = /* @__PURE__ */ new Map(), q = !0, L = a[0], O = 0; O < a.length; O++) {
        var R = a[O], P = K(R), T = xt(R) === yt, _ = [z, W].indexOf(P) >= 0, V = _ ? "width" : "height", $ = Bt(t, {
          placement: R,
          boundary: d,
          rootBoundary: b,
          altBoundary: k,
          padding: u
        }), j = _ ? T ? N : H : T ? W : z;
        C[V] > m[V] && (j = Ut(j));
        var B = Ut(j), J = [];
        if (r && J.push($[P] <= 0), c && J.push($[j] <= 0, $[B] <= 0), J.every(function(it) {
          return it;
        })) {
          L = R, q = !1;
          break;
        }
        E.set(R, J);
      }
      if (q)
        for (var tt = w ? 3 : 1, mt = function(Y) {
          var at = a.find(function(St) {
            var rt = E.get(St);
            if (rt)
              return rt.slice(0, Y).every(function(At) {
                return At;
              });
          });
          if (at)
            return L = at, "break";
        }, et = tt; et > 0; et--) {
          var ht = mt(et);
          if (ht === "break") break;
        }
      t.placement !== L && (t.modifiersData[o]._skip = !0, t.placement = L, t.reset = !0);
    }
  }
  const eo = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: to,
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };
  function _e(e, t, n) {
    return n === void 0 && (n = {
      x: 0,
      y: 0
    }), {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x
    };
  }
  function Ve(e) {
    return [z, N, W, H].some(function(t) {
      return e[t] >= 0;
    });
  }
  function no(e) {
    var t = e.state, n = e.name, o = t.rects.reference, i = t.rects.popper, r = t.modifiersData.preventOverflow, p = Bt(t, {
      elementContext: "reference"
    }), c = Bt(t, {
      altBoundary: !0
    }), l = _e(p, o), u = _e(c, i, r), d = Ve(l), b = Ve(u);
    t.modifiersData[n] = {
      referenceClippingOffsets: l,
      popperEscapeOffsets: u,
      isReferenceHidden: d,
      hasPopperEscaped: b
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": d,
      "data-popper-escaped": b
    });
  }
  const oo = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: no
  };
  function io(e, t, n) {
    var o = K(e), i = [H, z].indexOf(o) >= 0 ? -1 : 1, r = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n, p = r[0], c = r[1];
    return p = p || 0, c = (c || 0) * i, [H, N].indexOf(o) >= 0 ? {
      x: c,
      y: p
    } : {
      x: p,
      y: c
    };
  }
  function ao(e) {
    var t = e.state, n = e.options, o = e.name, i = n.offset, r = i === void 0 ? [0, 0] : i, p = Te.reduce(function(d, b) {
      return d[b] = io(b, t.rects, r), d;
    }, {}), c = p[t.placement], l = c.x, u = c.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = p;
  }
  const ro = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: ao
  };
  function so(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = Fe({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const po = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: so,
    data: {}
  };
  function co(e) {
    return e === "x" ? "y" : "x";
  }
  function lo(e) {
    var t = e.state, n = e.options, o = e.name, i = n.mainAxis, r = i === void 0 ? !0 : i, p = n.altAxis, c = p === void 0 ? !1 : p, l = n.boundary, u = n.rootBoundary, d = n.altBoundary, b = n.padding, k = n.tether, g = k === void 0 ? !0 : k, w = n.tetherOffset, v = w === void 0 ? 0 : w, y = Bt(t, {
      boundary: l,
      rootBoundary: u,
      padding: b,
      altBoundary: d
    }), S = K(t.placement), D = xt(t.placement), M = !D, a = ue(S), C = co(a), m = t.modifiersData.popperOffsets, E = t.rects.reference, q = t.rects.popper, L = typeof v == "function" ? v(Object.assign({}, t.rects, {
      placement: t.placement
    })) : v, O = typeof L == "number" ? {
      mainAxis: L,
      altAxis: L
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, L), R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, P = {
      x: 0,
      y: 0
    };
    if (m) {
      if (r) {
        var T, _ = a === "y" ? z : H, V = a === "y" ? W : N, $ = a === "y" ? "height" : "width", j = m[a], B = j + y[_], J = j - y[V], tt = g ? -q[$] / 2 : 0, mt = D === yt ? E[$] : q[$], et = D === yt ? -q[$] : -E[$], ht = t.elements.arrow, it = g && ht ? de(ht) : {
          width: 0,
          height: 0
        }, Y = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Re(), at = Y[_], St = Y[V], rt = qt(0, E[$], it[$]), At = M ? E[$] / 2 - tt - rt - at - O.mainAxis : mt - rt - at - O.mainAxis, ct = M ? -E[$] / 2 + tt + rt + St + O.mainAxis : et + rt + St + O.mainAxis, Dt = t.elements.arrow && Lt(t.elements.arrow), Kt = Dt ? a === "y" ? Dt.clientTop || 0 : Dt.clientLeft || 0 : 0, It = (T = R == null ? void 0 : R[a]) != null ? T : 0, Qt = j + At - It - Kt, Jt = j + ct - It, zt = qt(g ? Vt(B, Qt) : B, j, g ? ut(J, Jt) : J);
        m[a] = zt, P[a] = zt - j;
      }
      if (c) {
        var Ht, te = a === "x" ? z : H, ee = a === "x" ? W : N, st = m[C], lt = C === "y" ? "height" : "width", Ft = st + y[te], gt = st - y[ee], _t = [z, H].indexOf(S) !== -1, ne = (Ht = R == null ? void 0 : R[C]) != null ? Ht : 0, oe = _t ? Ft : st - E[lt] - q[lt] - ne + O.altAxis, ie = _t ? st + E[lt] + q[lt] - ne - O.altAxis : gt, ae = g && _t ? Rn(oe, st, ie) : qt(g ? oe : Ft, st, g ? ie : gt);
        m[C] = ae, P[C] = ae - st;
      }
      t.modifiersData[o] = P;
    }
  }
  const uo = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: lo,
    requiresIfExists: ["offset"]
  };
  function fo(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function mo(e) {
    return e === F(e) || !U(e) ? fe(e) : fo(e);
  }
  function ho(e) {
    var t = e.getBoundingClientRect(), n = bt(t.width) / e.offsetWidth || 1, o = bt(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1;
  }
  function go(e, t, n) {
    n === void 0 && (n = !1);
    var o = U(t), i = U(t) && ho(t), r = pt(t), p = wt(e, i, n), c = {
      scrollLeft: 0,
      scrollTop: 0
    }, l = {
      x: 0,
      y: 0
    };
    return (o || !o && !n) && ((X(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    he(r)) && (c = mo(t)), U(t) ? (l = wt(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : r && (l.x = me(r))), {
      x: p.left + c.scrollLeft - l.x,
      y: p.top + c.scrollTop - l.y,
      width: p.width,
      height: p.height
    };
  }
  function vo(e) {
    var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
    e.forEach(function(r) {
      t.set(r.name, r);
    });
    function i(r) {
      n.add(r.name);
      var p = [].concat(r.requires || [], r.requiresIfExists || []);
      p.forEach(function(c) {
        if (!n.has(c)) {
          var l = t.get(c);
          l && i(l);
        }
      }), o.push(r);
    }
    return e.forEach(function(r) {
      n.has(r.name) || i(r);
    }), o;
  }
  function yo(e) {
    var t = vo(e);
    return Tn.reduce(function(n, o) {
      return n.concat(t.filter(function(i) {
        return i.phase === o;
      }));
    }, []);
  }
  function bo(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(n) {
        Promise.resolve().then(function() {
          t = void 0, n(e());
        });
      })), t;
    };
  }
  function wo(e) {
    var t = e.reduce(function(n, o) {
      var i = n[o.name];
      return n[o.name] = i ? Object.assign({}, i, o, {
        options: Object.assign({}, i.options, o.options),
        data: Object.assign({}, i.data, o.data)
      }) : o, n;
    }, {});
    return Object.keys(t).map(function(n) {
      return t[n];
    });
  }
  var We = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function Ne() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return !t.some(function(o) {
      return !(o && typeof o.getBoundingClientRect == "function");
    });
  }
  function xo(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, i = t.defaultOptions, r = i === void 0 ? We : i;
    return function(c, l, u) {
      u === void 0 && (u = r);
      var d = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, We, r),
        modifiersData: {},
        elements: {
          reference: c,
          popper: l
        },
        attributes: {},
        styles: {}
      }, b = [], k = !1, g = {
        state: d,
        setOptions: function(S) {
          var D = typeof S == "function" ? S(d.options) : S;
          v(), d.options = Object.assign({}, r, d.options, D), d.scrollParents = {
            reference: dt(c) ? Rt(c) : c.contextElement ? Rt(c.contextElement) : [],
            popper: Rt(l)
          };
          var M = yo(wo([].concat(o, d.options.modifiers)));
          return d.orderedModifiers = M.filter(function(a) {
            return a.enabled;
          }), w(), g.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function() {
          if (!k) {
            var S = d.elements, D = S.reference, M = S.popper;
            if (Ne(D, M)) {
              d.rects = {
                reference: go(D, Lt(M), d.options.strategy === "fixed"),
                popper: de(M)
              }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(O) {
                return d.modifiersData[O.name] = Object.assign({}, O.data);
              });
              for (var a = 0; a < d.orderedModifiers.length; a++) {
                if (d.reset === !0) {
                  d.reset = !1, a = -1;
                  continue;
                }
                var C = d.orderedModifiers[a], m = C.fn, E = C.options, q = E === void 0 ? {} : E, L = C.name;
                typeof m == "function" && (d = m({
                  state: d,
                  options: q,
                  name: L,
                  instance: g
                }) || d);
              }
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: bo(function() {
          return new Promise(function(y) {
            g.forceUpdate(), y(d);
          });
        }),
        destroy: function() {
          v(), k = !0;
        }
      };
      if (!Ne(c, l))
        return g;
      g.setOptions(u).then(function(y) {
        !k && u.onFirstUpdate && u.onFirstUpdate(y);
      });
      function w() {
        d.orderedModifiers.forEach(function(y) {
          var S = y.name, D = y.options, M = D === void 0 ? {} : D, a = y.effect;
          if (typeof a == "function") {
            var C = a({
              state: d,
              name: S,
              instance: g,
              options: M
            }), m = function() {
            };
            b.push(C || m);
          }
        });
      }
      function v() {
        b.forEach(function(y) {
          return y();
        }), b = [];
      }
      return g;
    };
  }
  var ko = [Wn, po, _n, Oe, ro, eo, uo, In, oo], Co = /* @__PURE__ */ xo({
    defaultModifiers: ko
  }), So = "tippy-box", Ue = "tippy-content", Ao = "tippy-backdrop", Ze = "tippy-arrow", Ge = "tippy-svg-arrow", ft = {
    passive: !0,
    capture: !0
  }, Ye = function() {
    return document.body;
  };
  function ve(e, t, n) {
    if (Array.isArray(e)) {
      var o = e[t];
      return o ?? (Array.isArray(n) ? n[t] : n);
    }
    return e;
  }
  function ye(e, t) {
    var n = {}.toString.call(e);
    return n.indexOf("[object") === 0 && n.indexOf(t + "]") > -1;
  }
  function Xe(e, t) {
    return typeof e == "function" ? e.apply(void 0, t) : e;
  }
  function Ke(e, t) {
    if (t === 0)
      return e;
    var n;
    return function(o) {
      clearTimeout(n), n = setTimeout(function() {
        e(o);
      }, t);
    };
  }
  function Do(e) {
    return e.split(/\s+/).filter(Boolean);
  }
  function kt(e) {
    return [].concat(e);
  }
  function Qe(e, t) {
    e.indexOf(t) === -1 && e.push(t);
  }
  function Eo(e) {
    return e.filter(function(t, n) {
      return e.indexOf(t) === n;
    });
  }
  function Mo(e) {
    return e.split("-")[0];
  }
  function Zt(e) {
    return [].slice.call(e);
  }
  function Je(e) {
    return Object.keys(e).reduce(function(t, n) {
      return e[n] !== void 0 && (t[n] = e[n]), t;
    }, {});
  }
  function $t() {
    return document.createElement("div");
  }
  function Gt(e) {
    return ["Element", "Fragment"].some(function(t) {
      return ye(e, t);
    });
  }
  function To(e) {
    return ye(e, "NodeList");
  }
  function Oo(e) {
    return ye(e, "MouseEvent");
  }
  function tn(e) {
    return !!(e && e._tippy && e._tippy.reference === e);
  }
  function Po(e) {
    return Gt(e) ? [e] : To(e) ? Zt(e) : Array.isArray(e) ? e : Zt(document.querySelectorAll(e));
  }
  function be(e, t) {
    e.forEach(function(n) {
      n && (n.style.transitionDuration = t + "ms");
    });
  }
  function en(e, t) {
    e.forEach(function(n) {
      n && n.setAttribute("data-state", t);
    });
  }
  function Lo(e) {
    var t, n = kt(e), o = n[0];
    return o != null && (t = o.ownerDocument) != null && t.body ? o.ownerDocument : document;
  }
  function qo(e, t) {
    var n = t.clientX, o = t.clientY;
    return e.every(function(i) {
      var r = i.popperRect, p = i.popperState, c = i.props, l = c.interactiveBorder, u = Mo(p.placement), d = p.modifiersData.offset;
      if (!d)
        return !0;
      var b = u === "bottom" ? d.top.y : 0, k = u === "top" ? d.bottom.y : 0, g = u === "right" ? d.left.x : 0, w = u === "left" ? d.right.x : 0, v = r.top - o + b > l, y = o - r.bottom - k > l, S = r.left - n + g > l, D = n - r.right - w > l;
      return v || y || S || D;
    });
  }
  function we(e, t, n) {
    var o = t + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function(i) {
      e[o](i, n);
    });
  }
  function nn(e, t) {
    for (var n = t; n; ) {
      var o;
      if (e.contains(n))
        return !0;
      n = n.getRootNode == null || (o = n.getRootNode()) == null ? void 0 : o.host;
    }
    return !1;
  }
  var Q = {
    isTouch: !1
  }, on = 0;
  function Ro() {
    Q.isTouch || (Q.isTouch = !0, window.performance && document.addEventListener("mousemove", an));
  }
  function an() {
    var e = performance.now();
    e - on < 20 && (Q.isTouch = !1, document.removeEventListener("mousemove", an)), on = e;
  }
  function Bo() {
    var e = document.activeElement;
    if (tn(e)) {
      var t = e._tippy;
      e.blur && !t.state.isVisible && e.blur();
    }
  }
  function $o() {
    document.addEventListener("touchstart", Ro, ft), window.addEventListener("blur", Bo);
  }
  var jo = typeof window < "u" && typeof document < "u", Io = jo ? (
    // @ts-ignore
    !!window.msCrypto
  ) : !1, zo = {
    animateFill: !1,
    followCursor: !1,
    inlinePositioning: !1,
    sticky: !1
  }, Ho = {
    allowHTML: !1,
    animation: "fade",
    arrow: !0,
    content: "",
    inertia: !1,
    maxWidth: 350,
    role: "tooltip",
    theme: "",
    zIndex: 9999
  }, G = Object.assign({
    appendTo: Ye,
    aria: {
      content: "auto",
      expanded: "auto"
    },
    delay: 0,
    duration: [300, 250],
    getReferenceClientRect: null,
    hideOnClick: !0,
    ignoreAttributes: !1,
    interactive: !1,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    moveTransition: "",
    offset: [0, 10],
    onAfterUpdate: function() {
    },
    onBeforeUpdate: function() {
    },
    onCreate: function() {
    },
    onDestroy: function() {
    },
    onHidden: function() {
    },
    onHide: function() {
    },
    onMount: function() {
    },
    onShow: function() {
    },
    onShown: function() {
    },
    onTrigger: function() {
    },
    onUntrigger: function() {
    },
    onClickOutside: function() {
    },
    placement: "top",
    plugins: [],
    popperOptions: {},
    render: null,
    showOnCreate: !1,
    touch: !0,
    trigger: "mouseenter focus",
    triggerTarget: null
  }, zo, Ho), Fo = Object.keys(G), _o = function(t) {
    var n = Object.keys(t);
    n.forEach(function(o) {
      G[o] = t[o];
    });
  };
  function rn(e) {
    var t = e.plugins || [], n = t.reduce(function(o, i) {
      var r = i.name, p = i.defaultValue;
      if (r) {
        var c;
        o[r] = e[r] !== void 0 ? e[r] : (c = G[r]) != null ? c : p;
      }
      return o;
    }, {});
    return Object.assign({}, e, n);
  }
  function Vo(e, t) {
    var n = t ? Object.keys(rn(Object.assign({}, G, {
      plugins: t
    }))) : Fo, o = n.reduce(function(i, r) {
      var p = (e.getAttribute("data-tippy-" + r) || "").trim();
      if (!p)
        return i;
      if (r === "content")
        i[r] = p;
      else
        try {
          i[r] = JSON.parse(p);
        } catch {
          i[r] = p;
        }
      return i;
    }, {});
    return o;
  }
  function sn(e, t) {
    var n = Object.assign({}, t, {
      content: Xe(t.content, [e])
    }, t.ignoreAttributes ? {} : Vo(e, t.plugins));
    return n.aria = Object.assign({}, G.aria, n.aria), n.aria = {
      expanded: n.aria.expanded === "auto" ? t.interactive : n.aria.expanded,
      content: n.aria.content === "auto" ? t.interactive ? null : "describedby" : n.aria.content
    }, n;
  }
  var Wo = function() {
    return "innerHTML";
  };
  function xe(e, t) {
    e[Wo()] = t;
  }
  function pn(e) {
    var t = $t();
    return e === !0 ? t.className = Ze : (t.className = Ge, Gt(e) ? t.appendChild(e) : xe(t, e)), t;
  }
  function cn(e, t) {
    Gt(t.content) ? (xe(e, ""), e.appendChild(t.content)) : typeof t.content != "function" && (t.allowHTML ? xe(e, t.content) : e.textContent = t.content);
  }
  function ke(e) {
    var t = e.firstElementChild, n = Zt(t.children);
    return {
      box: t,
      content: n.find(function(o) {
        return o.classList.contains(Ue);
      }),
      arrow: n.find(function(o) {
        return o.classList.contains(Ze) || o.classList.contains(Ge);
      }),
      backdrop: n.find(function(o) {
        return o.classList.contains(Ao);
      })
    };
  }
  function ln(e) {
    var t = $t(), n = $t();
    n.className = So, n.setAttribute("data-state", "hidden"), n.setAttribute("tabindex", "-1");
    var o = $t();
    o.className = Ue, o.setAttribute("data-state", "hidden"), cn(o, e.props), t.appendChild(n), n.appendChild(o), i(e.props, e.props);
    function i(r, p) {
      var c = ke(t), l = c.box, u = c.content, d = c.arrow;
      p.theme ? l.setAttribute("data-theme", p.theme) : l.removeAttribute("data-theme"), typeof p.animation == "string" ? l.setAttribute("data-animation", p.animation) : l.removeAttribute("data-animation"), p.inertia ? l.setAttribute("data-inertia", "") : l.removeAttribute("data-inertia"), l.style.maxWidth = typeof p.maxWidth == "number" ? p.maxWidth + "px" : p.maxWidth, p.role ? l.setAttribute("role", p.role) : l.removeAttribute("role"), (r.content !== p.content || r.allowHTML !== p.allowHTML) && cn(u, e.props), p.arrow ? d ? r.arrow !== p.arrow && (l.removeChild(d), l.appendChild(pn(p.arrow))) : l.appendChild(pn(p.arrow)) : d && l.removeChild(d);
    }
    return {
      popper: t,
      onUpdate: i
    };
  }
  ln.$$tippy = !0;
  var No = 1, Yt = [], Xt = [];
  function Uo(e, t) {
    var n = sn(e, Object.assign({}, G, rn(Je(t)))), o, i, r, p = !1, c = !1, l = !1, u = !1, d, b, k, g = [], w = Ke(Qt, n.interactiveDebounce), v, y = No++, S = null, D = Eo(n.plugins), M = {
      // Is the instance currently enabled?
      isEnabled: !0,
      // Is the tippy currently showing and not transitioning out?
      isVisible: !1,
      // Has the instance been destroyed?
      isDestroyed: !1,
      // Is the tippy currently mounted to the DOM?
      isMounted: !1,
      // Has the tippy finished transitioning in?
      isShown: !1
    }, a = {
      // properties
      id: y,
      reference: e,
      popper: $t(),
      popperInstance: S,
      props: n,
      state: M,
      plugins: D,
      // methods
      clearDelayTimeouts: oe,
      setProps: ie,
      setContent: ae,
      show: pi,
      hide: ci,
      hideWithInteractivity: li,
      enable: _t,
      disable: ne,
      unmount: di,
      destroy: ui
    };
    if (!n.render)
      return a;
    var C = n.render(a), m = C.popper, E = C.onUpdate;
    m.setAttribute("data-tippy-root", ""), m.id = "tippy-" + a.id, a.popper = m, e._tippy = a, m._tippy = a;
    var q = D.map(function(s) {
      return s.fn(a);
    }), L = e.hasAttribute("aria-expanded");
    return Dt(), tt(), j(), B("onCreate", [a]), n.showOnCreate && Ft(), m.addEventListener("mouseenter", function() {
      a.props.interactive && a.state.isVisible && a.clearDelayTimeouts();
    }), m.addEventListener("mouseleave", function() {
      a.props.interactive && a.props.trigger.indexOf("mouseenter") >= 0 && _().addEventListener("mousemove", w);
    }), a;
    function O() {
      var s = a.props.touch;
      return Array.isArray(s) ? s : [s, 0];
    }
    function R() {
      return O()[0] === "hold";
    }
    function P() {
      var s;
      return !!((s = a.props.render) != null && s.$$tippy);
    }
    function T() {
      return v || e;
    }
    function _() {
      var s = T().parentNode;
      return s ? Lo(s) : document;
    }
    function V() {
      return ke(m);
    }
    function $(s) {
      return a.state.isMounted && !a.state.isVisible || Q.isTouch || d && d.type === "focus" ? 0 : ve(a.props.delay, s ? 0 : 1, G.delay);
    }
    function j(s) {
      s === void 0 && (s = !1), m.style.pointerEvents = a.props.interactive && !s ? "" : "none", m.style.zIndex = "" + a.props.zIndex;
    }
    function B(s, f, h) {
      if (h === void 0 && (h = !0), q.forEach(function(x) {
        x[s] && x[s].apply(x, f);
      }), h) {
        var A;
        (A = a.props)[s].apply(A, f);
      }
    }
    function J() {
      var s = a.props.aria;
      if (s.content) {
        var f = "aria-" + s.content, h = m.id, A = kt(a.props.triggerTarget || e);
        A.forEach(function(x) {
          var I = x.getAttribute(f);
          if (a.state.isVisible)
            x.setAttribute(f, I ? I + " " + h : h);
          else {
            var Z = I && I.replace(h, "").trim();
            Z ? x.setAttribute(f, Z) : x.removeAttribute(f);
          }
        });
      }
    }
    function tt() {
      if (!(L || !a.props.aria.expanded)) {
        var s = kt(a.props.triggerTarget || e);
        s.forEach(function(f) {
          a.props.interactive ? f.setAttribute("aria-expanded", a.state.isVisible && f === T() ? "true" : "false") : f.removeAttribute("aria-expanded");
        });
      }
    }
    function mt() {
      _().removeEventListener("mousemove", w), Yt = Yt.filter(function(s) {
        return s !== w;
      });
    }
    function et(s) {
      if (!(Q.isTouch && (l || s.type === "mousedown"))) {
        var f = s.composedPath && s.composedPath()[0] || s.target;
        if (!(a.props.interactive && nn(m, f))) {
          if (kt(a.props.triggerTarget || e).some(function(h) {
            return nn(h, f);
          })) {
            if (Q.isTouch || a.state.isVisible && a.props.trigger.indexOf("click") >= 0)
              return;
          } else
            B("onClickOutside", [a, s]);
          a.props.hideOnClick === !0 && (a.clearDelayTimeouts(), a.hide(), c = !0, setTimeout(function() {
            c = !1;
          }), a.state.isMounted || at());
        }
      }
    }
    function ht() {
      l = !0;
    }
    function it() {
      l = !1;
    }
    function Y() {
      var s = _();
      s.addEventListener("mousedown", et, !0), s.addEventListener("touchend", et, ft), s.addEventListener("touchstart", it, ft), s.addEventListener("touchmove", ht, ft);
    }
    function at() {
      var s = _();
      s.removeEventListener("mousedown", et, !0), s.removeEventListener("touchend", et, ft), s.removeEventListener("touchstart", it, ft), s.removeEventListener("touchmove", ht, ft);
    }
    function St(s, f) {
      At(s, function() {
        !a.state.isVisible && m.parentNode && m.parentNode.contains(m) && f();
      });
    }
    function rt(s, f) {
      At(s, f);
    }
    function At(s, f) {
      var h = V().box;
      function A(x) {
        x.target === h && (we(h, "remove", A), f());
      }
      if (s === 0)
        return f();
      we(h, "remove", b), we(h, "add", A), b = A;
    }
    function ct(s, f, h) {
      h === void 0 && (h = !1);
      var A = kt(a.props.triggerTarget || e);
      A.forEach(function(x) {
        x.addEventListener(s, f, h), g.push({
          node: x,
          eventType: s,
          handler: f,
          options: h
        });
      });
    }
    function Dt() {
      R() && (ct("touchstart", It, {
        passive: !0
      }), ct("touchend", Jt, {
        passive: !0
      })), Do(a.props.trigger).forEach(function(s) {
        if (s !== "manual")
          switch (ct(s, It), s) {
            case "mouseenter":
              ct("mouseleave", Jt);
              break;
            case "focus":
              ct(Io ? "focusout" : "blur", zt);
              break;
            case "focusin":
              ct("focusout", zt);
              break;
          }
      });
    }
    function Kt() {
      g.forEach(function(s) {
        var f = s.node, h = s.eventType, A = s.handler, x = s.options;
        f.removeEventListener(h, A, x);
      }), g = [];
    }
    function It(s) {
      var f, h = !1;
      if (!(!a.state.isEnabled || Ht(s) || c)) {
        var A = ((f = d) == null ? void 0 : f.type) === "focus";
        d = s, v = s.currentTarget, tt(), !a.state.isVisible && Oo(s) && Yt.forEach(function(x) {
          return x(s);
        }), s.type === "click" && (a.props.trigger.indexOf("mouseenter") < 0 || p) && a.props.hideOnClick !== !1 && a.state.isVisible ? h = !0 : Ft(s), s.type === "click" && (p = !h), h && !A && gt(s);
      }
    }
    function Qt(s) {
      var f = s.target, h = T().contains(f) || m.contains(f);
      if (!(s.type === "mousemove" && h)) {
        var A = lt().concat(m).map(function(x) {
          var I, Z = x._tippy, Et = (I = Z.popperInstance) == null ? void 0 : I.state;
          return Et ? {
            popperRect: x.getBoundingClientRect(),
            popperState: Et,
            props: n
          } : null;
        }).filter(Boolean);
        qo(A, s) && (mt(), gt(s));
      }
    }
    function Jt(s) {
      var f = Ht(s) || a.props.trigger.indexOf("click") >= 0 && p;
      if (!f) {
        if (a.props.interactive) {
          a.hideWithInteractivity(s);
          return;
        }
        gt(s);
      }
    }
    function zt(s) {
      a.props.trigger.indexOf("focusin") < 0 && s.target !== T() || a.props.interactive && s.relatedTarget && m.contains(s.relatedTarget) || gt(s);
    }
    function Ht(s) {
      return Q.isTouch ? R() !== s.type.indexOf("touch") >= 0 : !1;
    }
    function te() {
      ee();
      var s = a.props, f = s.popperOptions, h = s.placement, A = s.offset, x = s.getReferenceClientRect, I = s.moveTransition, Z = P() ? ke(m).arrow : null, Et = x ? {
        getBoundingClientRect: x,
        contextElement: x.contextElement || T()
      } : e, hn = {
        name: "$$tippy",
        enabled: !0,
        phase: "beforeWrite",
        requires: ["computeStyles"],
        fn: function(re) {
          var Mt = re.state;
          if (P()) {
            var fi = V(), Ae = fi.box;
            ["placement", "reference-hidden", "escaped"].forEach(function(se) {
              se === "placement" ? Ae.setAttribute("data-placement", Mt.placement) : Mt.attributes.popper["data-popper-" + se] ? Ae.setAttribute("data-" + se, "") : Ae.removeAttribute("data-" + se);
            }), Mt.attributes.popper = {};
          }
        }
      }, vt = [{
        name: "offset",
        options: {
          offset: A
        }
      }, {
        name: "preventOverflow",
        options: {
          padding: {
            top: 2,
            bottom: 2,
            left: 5,
            right: 5
          }
        }
      }, {
        name: "flip",
        options: {
          padding: 5
        }
      }, {
        name: "computeStyles",
        options: {
          adaptive: !I
        }
      }, hn];
      P() && Z && vt.push({
        name: "arrow",
        options: {
          element: Z,
          padding: 3
        }
      }), vt.push.apply(vt, (f == null ? void 0 : f.modifiers) || []), a.popperInstance = Co(Et, m, Object.assign({}, f, {
        placement: h,
        onFirstUpdate: k,
        modifiers: vt
      }));
    }
    function ee() {
      a.popperInstance && (a.popperInstance.destroy(), a.popperInstance = null);
    }
    function st() {
      var s = a.props.appendTo, f, h = T();
      a.props.interactive && s === Ye || s === "parent" ? f = h.parentNode : f = Xe(s, [h]), f.contains(m) || f.appendChild(m), a.state.isMounted = !0, te();
    }
    function lt() {
      return Zt(m.querySelectorAll("[data-tippy-root]"));
    }
    function Ft(s) {
      a.clearDelayTimeouts(), s && B("onTrigger", [a, s]), Y();
      var f = $(!0), h = O(), A = h[0], x = h[1];
      Q.isTouch && A === "hold" && x && (f = x), f ? o = setTimeout(function() {
        a.show();
      }, f) : a.show();
    }
    function gt(s) {
      if (a.clearDelayTimeouts(), B("onUntrigger", [a, s]), !a.state.isVisible) {
        at();
        return;
      }
      if (!(a.props.trigger.indexOf("mouseenter") >= 0 && a.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(s.type) >= 0 && p)) {
        var f = $(!1);
        f ? i = setTimeout(function() {
          a.state.isVisible && a.hide();
        }, f) : r = requestAnimationFrame(function() {
          a.hide();
        });
      }
    }
    function _t() {
      a.state.isEnabled = !0;
    }
    function ne() {
      a.hide(), a.state.isEnabled = !1;
    }
    function oe() {
      clearTimeout(o), clearTimeout(i), cancelAnimationFrame(r);
    }
    function ie(s) {
      if (!a.state.isDestroyed) {
        B("onBeforeUpdate", [a, s]), Kt();
        var f = a.props, h = sn(e, Object.assign({}, f, Je(s), {
          ignoreAttributes: !0
        }));
        a.props = h, Dt(), f.interactiveDebounce !== h.interactiveDebounce && (mt(), w = Ke(Qt, h.interactiveDebounce)), f.triggerTarget && !h.triggerTarget ? kt(f.triggerTarget).forEach(function(A) {
          A.removeAttribute("aria-expanded");
        }) : h.triggerTarget && e.removeAttribute("aria-expanded"), tt(), j(), E && E(f, h), a.popperInstance && (te(), lt().forEach(function(A) {
          requestAnimationFrame(A._tippy.popperInstance.forceUpdate);
        })), B("onAfterUpdate", [a, s]);
      }
    }
    function ae(s) {
      a.setProps({
        content: s
      });
    }
    function pi() {
      var s = a.state.isVisible, f = a.state.isDestroyed, h = !a.state.isEnabled, A = Q.isTouch && !a.props.touch, x = ve(a.props.duration, 0, G.duration);
      if (!(s || f || h || A) && !T().hasAttribute("disabled") && (B("onShow", [a], !1), a.props.onShow(a) !== !1)) {
        if (a.state.isVisible = !0, P() && (m.style.visibility = "visible"), j(), Y(), a.state.isMounted || (m.style.transition = "none"), P()) {
          var I = V(), Z = I.box, Et = I.content;
          be([Z, Et], 0);
        }
        k = function() {
          var vt;
          if (!(!a.state.isVisible || u)) {
            if (u = !0, m.offsetHeight, m.style.transition = a.props.moveTransition, P() && a.props.animation) {
              var Se = V(), re = Se.box, Mt = Se.content;
              be([re, Mt], x), en([re, Mt], "visible");
            }
            J(), tt(), Qe(Xt, a), (vt = a.popperInstance) == null || vt.forceUpdate(), B("onMount", [a]), a.props.animation && P() && rt(x, function() {
              a.state.isShown = !0, B("onShown", [a]);
            });
          }
        }, st();
      }
    }
    function ci() {
      var s = !a.state.isVisible, f = a.state.isDestroyed, h = !a.state.isEnabled, A = ve(a.props.duration, 1, G.duration);
      if (!(s || f || h) && (B("onHide", [a], !1), a.props.onHide(a) !== !1)) {
        if (a.state.isVisible = !1, a.state.isShown = !1, u = !1, p = !1, P() && (m.style.visibility = "hidden"), mt(), at(), j(!0), P()) {
          var x = V(), I = x.box, Z = x.content;
          a.props.animation && (be([I, Z], A), en([I, Z], "hidden"));
        }
        J(), tt(), a.props.animation ? P() && St(A, a.unmount) : a.unmount();
      }
    }
    function li(s) {
      _().addEventListener("mousemove", w), Qe(Yt, w), w(s);
    }
    function di() {
      a.state.isVisible && a.hide(), a.state.isMounted && (ee(), lt().forEach(function(s) {
        s._tippy.unmount();
      }), m.parentNode && m.parentNode.removeChild(m), Xt = Xt.filter(function(s) {
        return s !== a;
      }), a.state.isMounted = !1, B("onHidden", [a]));
    }
    function ui() {
      a.state.isDestroyed || (a.clearDelayTimeouts(), a.unmount(), Kt(), delete e._tippy, a.state.isDestroyed = !0, B("onDestroy", [a]));
    }
  }
  function jt(e, t) {
    t === void 0 && (t = {});
    var n = G.plugins.concat(t.plugins || []);
    $o();
    var o = Object.assign({}, t, {
      plugins: n
    }), i = Po(e), r = i.reduce(function(p, c) {
      var l = c && Uo(c, o);
      return l && p.push(l), p;
    }, []);
    return Gt(e) ? r[0] : r;
  }
  jt.defaultProps = G, jt.setDefaultProps = _o, jt.currentInput = Q;
  var Zo = function(t) {
    var n = {}, o = n.exclude, i = n.duration;
    Xt.forEach(function(r) {
      var p = !1;
      if (o && (p = tn(o) ? r.reference === o : r.popper === o.popper), !p) {
        var c = r.props.duration;
        r.setProps({
          duration: i
        }), r.hide(), r.state.isDestroyed || r.setProps({
          duration: c
        });
      }
    });
  };
  Object.assign({}, Oe, {
    effect: function(t) {
      var n = t.state, o = {
        popper: {
          position: n.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      Object.assign(n.elements.popper.style, o.popper), n.styles = o, n.elements.arrow && Object.assign(n.elements.arrow.style, o.arrow);
    }
  }), jt.setDefaultProps({
    render: ln
  });
  const dn = [
    {
      id: "fix-slow-mac",
      color: "7E7EE1",
      navTitle: "Fix slow Mac",
      title: "Make your Mac faster and last longer",
      description: "Clean hidden junk, free up RAM, and keep your Mac in peak shape with tools that prevent future slowdowns.",
      buttonText: "Speed up my Mac",
      buttonClass: "btn_primary",
      apps: [
        "CleanMyMac",
        "QuitAll",
        "iStat Menus",
        "Endurance",
        "AlDente Pro",
        "Mission Control"
      ],
      moreAppsCount: "35+",
      comment: {
        author: "David M.",
        text: `" Setapp is like a magic toolbox for my Mac — whatever I need, it's just there. Makes me way more productive "`
      }
    },
    {
      id: "customize-workspace",
      color: "D5D8FE",
      navTitle: "Customise your workspace",
      title: "Customize your Mac to look clean and work faster",
      description: "Hide distractions, manage your menu bar, create custom gestures, and design a workspace that fits the way you think — not the way Apple decided",
      buttonText: "Customize my Mac",
      buttonClass: "btn_primary",
      apps: ["WidgetWall", "Bartender", "CleanShot X"],
      moreAppsCount: "20+"
    },
    {
      id: "download-convert-media",
      color: "424E81",
      navTitle: "Download & convert media",
      title: "Get the videos you need, in the format you want",
      description: "Whether it's YouTube tutorials or social media clips, Setapp gives you tools to download videos, extract audio, and convert formats that actually work",
      buttonText: "Get the video I need",
      buttonClass: "btn_light",
      apps: ["Downie", "Pulltube", "Permute"],
      moreAppsCount: "17+"
    },
    {
      id: "recover-open-files",
      color: "CF6F8A",
      navTitle: "Recover & open files",
      title: "Open and edit what your Mac usually can't",
      description: "Work with PDFs, RARs, NTFS, and more — open, edit, fix, and convert the formats your Mac can't handle on its own",
      buttonText: "Handle my tricky files",
      buttonClass: "btn_primary",
      apps: [
        "Nitro PDF Pro",
        "BetterZip",
        "Get Backup Pro",
        "Archiver",
        "Ulysses",
        "Renamer"
      ],
      moreAppsCount: "63+",
      comment: {
        author: "Andy S.",
        text: '" One subscription, tons of great Mac and iOS apps. No separate licenses needed! "'
      }
    },
    {
      id: "use-tools",
      color: "F0AD84",
      navTitle: "All-in-one work tools",
      title: "All your work tools, finally in one place",
      description: "From documents to development, Setapp includes focused tools for writing, coding, managing tasks, and staying productive — no extra subscriptions needed",
      buttonText: "Get my full toolkit",
      buttonClass: "btn_primary",
      apps: ["Session", "CodeRunner", "Craft"],
      moreAppsCount: "83+"
    },
    {
      id: "use-ai",
      color: "F0D0B5",
      navTitle: "Do more with AI",
      title: "Use AI to write, transcribe, and stay ahead",
      description: "With tools for writing, summarising, chatting with PDFs, and transcribing meetings, Setapp brings AI into your workflow — without setup, stress, or extra subscriptions",
      buttonText: "Explore my AI tools",
      buttonClass: "btn_primary",
      apps: ["PDF Pals", "MurmurType", "Ready to Send"],
      moreAppsCount: "9+"
    }
  ], Ce = [
    {
      name: "CleanMyMac",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/78/42681/icon-1747895078-682ec326c5805.png",
      description: "Tidy up your Mac",
      url: "https://setapp.com/apps/cleanmymac",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "QuitAll",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/493/10507/icon-1715515857-6640b1d134f36.png",
      description: "Speed up Mac by quitting all apps",
      url: "https://setapp.com/apps/quit-all-mac",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "iStat Menus",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/144/41794/icon-1739274958-67ab3ace7a0bf.png",
      description: "Track CPU, GPU, sensors, etc.",
      url: "https://setapp.com/apps/istat-menus",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Endurance",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/301/42576/icon-1746973828-6820b484ae86f.png",
      description: "Extend your battery life",
      url: "https://setapp.com/apps/endurance",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "AlDente Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/483/42676/icon-1747828119-682dbd97182a6.png",
      description: "Set battery charging limits",
      url: "https://setapp.com/apps/aldente-pro",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Mission Control",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/376/42548/icon-1746731563-681d022b89238.png",
      description: "Close windows from Mission Control",
      url: "https://setapp.com/apps/mission-control-plus",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "WidgetWall",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/528/42687/icon-1747926996-682f3fd48a02b.png",
      description: "Add widgets to Mac desktop",
      url: "https://setapp.com/apps/widget-wall",
      platforms: "Mac",
      rating: "88"
    },
    {
      name: "Bartender",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/153/42799/icon-1748962599-683f0d271f5a8.png",
      description: "Personalize your menu bar",
      url: "https://setapp.com/apps/bartender",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "CleanShot X",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/321/42718/icon-1748347773-6835ab7ddfd5d.png",
      description: "Take better screenshots and GIFs",
      url: "https://setapp.com/apps/cleanshot",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Downie",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/222/42263/icon-1743756630-67ef9d568e1e3.png",
      description: "Download YouTube videos",
      url: "https://setapp.com/apps/downie",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Pulltube",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/371/42285/icon-1744023104-67f3ae4007aa4.png",
      description: "Download and trim videos",
      url: "https://setapp.com/apps/pulltube",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Permute",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=128,dpr=1/https://store.setapp.com/app/219/42264/icon-1743758208-67efa380b6636.png",
      description: "Convert video and audio files",
      url: "https://setapp.com/apps/permute",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Nitro PDF Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/518/42755/icon-1749071187-6840b55359ae5.png",
      description: "Work with your PDFs",
      url: "https://setapp.com/apps/nitro-pdf-pro",
      platforms: "Mac, iOS",
      rating: "89"
    },
    {
      name: "BetterZip",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=128,dpr=1/https://store.setapp.com/app/245/7858/icon-1681236553-6435a249c1fd2.png",
      description: "Archive files the easy way",
      url: "https://setapp.com/apps/betterzip",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Get Backup Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/210/9272/icon-1699433154-654b4ac208ada.png",
      description: "Back up only essential files",
      url: "https://setapp.com/apps/get-backup-pro",
      platforms: "Mac",
      rating: "86"
    },
    {
      name: "Archiver",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=128,dpr=1/https://store.setapp.com/app/194/10197/icon-1711963165-660a7c1d7fdbc.png",
      description: "Compress files easily",
      url: "https://setapp.com/apps/archiver",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Ulysses",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/67/42660/icon-1747749841-682c8bd1e7d9c.png",
      description: "Write and publish from one app",
      url: "https://setapp.com/apps/ulysses",
      platforms: "Mac, iOS",
      rating: "99"
    },
    {
      name: "Renamer",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/136/40792/icon-1730733142-6728e4563df6a.png",
      description: "Rename a batch of files",
      url: "https://setapp.com/apps/renamer",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Session",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/428/42692/icon-1747967217-682fdcf1a2474.png",
      description: "Work in short intervals",
      url: "https://setapp.com/apps/session",
      platforms: "Mac, iOS",
      rating: "98"
    },
    {
      name: "CodeRunner",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/122/41549/icon-1737112183-678a3a77b43aa.png",
      description: "Edit and run code faster",
      url: "https://setapp.com/apps/coderunner",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Craft",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/554/42201/icon-1743413950-67ea62be54f57.png",
      description: "Create and structure documents",
      url: "https://setapp.com/apps/craft",
      platforms: "Mac, iOS",
      rating: "99"
    },
    {
      name: "PDF Pals",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/606/42481/icon-1746107539-68137c9375583.png",
      description: "Chat with your PDFs",
      url: "https://setapp.com/apps/pdf-pals",
      platforms: "Mac",
      rating: "89"
    },
    {
      name: "MurmurType",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/592/43811/icon-1749109056-68414940d76a1.png",
      description: "Transcribe your speech",
      url: "https://setapp.com/apps/murmur",
      platforms: "Mac",
      rating: "83"
    },
    {
      name: "Ready to Send",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=160/https://store.setapp.com/app/607/main/icon-65719fa98f5e6.png",
      description: "Generate draft email replies",
      url: "https://setapp.com/apps/ready-to-send",
      platforms: "Web",
      rating: "0"
    }
  ], Go = `.tippy-box,
.tippy-content {
  background: transparent !important;
  /* padding: 0 !important;
  border: 0; */
}

.os-popover {
  width: 100%;
  max-width: 408px;
  max-height: 100vh;
  background-color: #fff;
  color: #26262b;
  padding-top: 0;
  border-radius: 24px;
  font-size: 14px;
  z-index: 1000;
  border: 1px solid #e5e5e5;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Avenir Next, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, sans-serif;
  overflow: hidden;
  overflow-y: auto;
}
.os-dialog .os-popover {
  max-width: 100%;
}
.os-available {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 6px;
  background: #f5f5f5;
  color: #77767a;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
}

.os-popover-close {
  position: absolute;
  top: 50%;
  right: 4px;
  transform: translateY(-50%);
  margin-right: 16px;
  justify-self: end;
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  background-size: cover;
  background-image: url('https://cdn.setapp.com/master-9f18f44f26fe5f8aa6077a4a8f38ca796e93985f-590/build/main/351e912995feef9e5a79.svg');
  cursor: pointer;
}

.os-popover-header-inner {
  margin-top: 12px;
  display: flex;
  gap: 14px;
  padding-inline: 4px;
  padding-left: 36px;
}

.os-popover-header img {
  width: 96px;
  height: 96px;
}
.os-popover-header h3 {
  margin: 0;
  padding: 0;
  max-width: 209px;
  color: #26262b;
  font-size: 28px;
  font-weight: 700;
  line-height: 32px; 
  letter-spacing: 1.15px;
}

.os-popover-header p {
  margin-top: 6px;
  margin-bottom: 0;
  color: #26262b;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
}

.os-popover-rating {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.os-rating {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #26262b;
  font-size: 26px;
  font-weight: 700;
  line-height: 40.04px;
}

.os-rating::before {
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="%239D9CA2" fill-rule="evenodd" d="M9.637 7.41A6.015 6.015 0 0 0 9 10.11v6.39c0 1.65 1.342 3 3 3h5.343c1.284 0 2.425-.81 2.84-2.025l1.888-5.55c.663-1.935-.785-3.96-2.841-3.96H15v-4.98a1.485 1.485 0 0 0-2.805-.675l-2.558 5.1Zm-5.887.555a2.249 2.249 0 0 0-2.25 2.25v7.035a2.25 2.25 0 1 0 4.5 0v-7.035a2.249 2.249 0 0 0-2.25-2.25Z" clip-rule="evenodd"/></svg>');
}

.os-rating-amount {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #26262b;
  font-size: 14px;
  font-weight: 400;
  line-height: 20.02px;
}

.os-rating-amount::before {
  content: '';
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #26262b;
}

.os-popover-body {
  margin-top: 12px;
  padding-inline: 16px;
}

.os-popover-body p {
  margin-bottom: 12px;
  padding-top: 12px;
  border-top: 1px solid #ebebec;
  color: #26262b;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}

.os-popover-body ul {
  padding-inline: 0 !important;
  margin-inline: 0 !important;
  margin-bottom: 0 !important;
  display: grid;
  gap: 8px;
  padding-top: 12px;
  border-top: 1px solid #ebebec;
  list-style: none;
  list-style-position: inside;
}

.os-popover-body li {
  margin: 0 !important;
  padding: 0 !important;
  color: #26262b;
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: 22px;
  list-style-type: disc !important;
  list-style-image: none !important;
}

.os-popover-body a {
  color: #e6842e;
}

.os-popover-footer {
  margin-top: 12px;
  padding-inline: 16px;
}

.os-popover-footer-inner {
  display: flex;
  justify-content: center;
  gap: 16px;
  padding-top: 12px;
  border-top: 1px solid #ebebec;
}

.btn-download,
.btn-learn-more {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 22px;
  font-size: 16px;
  line-height: 24px;
  border: none;
  border-radius: 4px;
  transition: color 0.15sease-in-out, background-color 0.15sease-in-out,
    border-color 0.15sease-in-out, box-shadow 0.15sease-in-out;
  cursor: pointer;
}

.btn-download {
  background-color: #26262b;
  color: #fff;
}
.btn-download:hover {
  background-color: #36383e;
}

.btn-learn-more {
  background-color: #fff;
  border: 1px solid #26262b;
  color: #26262b !important;
  text-decoration: none !important;
}

.os-popover-security {
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-bottom: 16px;
}
.os-popover-security::before {
  content: '';
  width: 15px;
  height: 17px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" fill="none"><g clip-path="url(%23a)"><path fill="%2326262B" fill-rule="evenodd" d="M8.064.666a2 2 0 0 0-1.128 0L.5 2.553v6.389a7 7 0 0 0 4.362 6.483l1.884.766a2 2 0 0 0 1.508 0l1.883-.766A7 7 0 0 0 14.5 8.944V2.555L8.064.666ZM7.5 2.585l-5 1.467v4.89a5 5 0 0 0 3.116 4.632l1.884.766V2.585Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="%23fff" d="M.5.5h14v16H.5z"/></clipPath></defs></svg>');
}

.os-dialog {
  max-width: 100%;
  width: 100%;
  height: 100%;
  max-height: 100%;
  padding: 0;
  border: none;
  background: rgba(0, 0, 0, 0.2);
}

/* body:has(#signup-modal.is-open) :is(.os-dialog, .os-dialog::backdrop) {
  visibility: hidden;
  pointer-events: none;
} */
.os-dialog-inner {
  display: grid;
  place-content: end center;
  height: 100%;
  overflow-y: auto;
}

.os-dialog-close {
  margin-right: 16px;
  justify-self: end;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" fill="none"><g clip-path="url(%23a)"><path fill="%23fff" fill-rule="evenodd" d="M20 40.02c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20Zm7.134-27.134a1.25 1.25 0 0 1 0 1.768l-5.366 5.366 5.366 5.366a1.25 1.25 0 0 1-1.768 1.768L20 21.788l-5.366 5.366a1.25 1.25 0 0 1-1.768-1.768l5.366-5.366-5.366-5.366a1.25 1.25 0 0 1 1.768-1.768L20 18.252l5.366-5.366a1.25 1.25 0 0 1 1.768 0Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="%23fff" d="M0 .02h40v40H0z"/></clipPath></defs></svg>');
}

.os-dialog-content {
  margin-top: 12px;
}

.os-dialog .os-popover {
  border-radius: 24px 24px 0 0;
}

body:has(.os-dialog[open]) {
  overflow: hidden;
}
`;
  class Yo {
    constructor() {
      this.popoverElement = null, this.aborters = [], this.init(), this.aborters = [];
    }
    init() {
      this.addStyles(), this.renderDialog();
    }
    content(t) {
      return (
        /* HTML */
        `<div class="os-popover-header">
        <div class="os-available">
          Available via Setapp
          <button class="os-popover-close" type="button"></button>
        </div>

        <div class="os-popover-header-inner">
          <img
            src="${t.imgSrc}"
            alt=""
            width="96"
            height="96"
            loading="lazy"
          />
          <div>
            <h3>${t.title}</h3>
            <p>${t.description}</p>
            <div class="os-popover-rating">
              ${t.ratingDetails ? (
          /* HTML */
          ` <div class="os-rating">
                      ${t.ratingDetails.percentage}
                    </div>
                    <div class="os-rating-amount">
                      ${t.ratingDetails.total} ratings
                    </div>`
        ) : ""}
            </div>
          </div>
        </div>
      </div>
      <div class="os-popover-body">
        <p>${t.body.text}</p>
        <ul>
          ${t.body.list.map((n) => `<li>${n}</li>`).join("")}
        </ul>
      </div>
      <div class="os-popover-footer">
        <div class="os-popover-footer-inner">
          <button class="btn-download" id="os-download">
            Try free for 7 days
          </button>
        </div>
      </div>
      <div class="os-popover-security">Security-tested</div>`
      );
    }
    returnHtml(t) {
      return (
        /* HTML */
        `
      <div class="os-popover">${this.content(t)}</div>
    `
      );
    }
    renderDialog() {
      var t;
      this.popoverElement = document.createElement("dialog"), this.popoverElement.classList.add("os-popover--dialog", "os-dialog"), this.popoverElement.id = "os-dialog", this.popoverElement.innerHTML = /* HTML */
      `
      <div class="os-dialog-inner">
        <button class="os-dialog-close" type="button"></button>
        <div class="os-dialog-content" id="os-dialog-content"></div>
      </div>
    `, (t = document.body) == null || t.appendChild(this.popoverElement);
    }
    showDialog(t) {
      var r;
      t && t !== "latest" && sessionStorage.setItem("os-tooltip-variant", JSON.stringify(t));
      const o = document.getElementById("os-dialog").querySelector(
        "#os-dialog-content"
      ), i = t === "latest" ? JSON.parse(sessionStorage.getItem("os-tooltip-variant")) : t;
      o.innerHTML = this.returnHtml(i), (r = this.popoverElement) == null || r.showModal(), this.eventListeners();
    }
    closeDialog() {
      if (!this.popoverElement) return;
      const t = this.popoverElement.querySelector(
        "#os-dialog-content"
      );
      this.popoverElement.close(), t.innerHTML = "", this.aborters.forEach((n) => {
        n.abort();
      }), this.aborters = [];
    }
    eventListeners() {
      if (!this.popoverElement) return;
      const t = document.getElementById("os-dialog"), n = t == null ? void 0 : t.querySelector(
        'button[type="button"]'
      );
      n == null || n.addEventListener("click", () => {
        this.closeDialog();
      });
      const o = new AbortController();
      this.aborters.push(o);
      const i = t.querySelector(
        ".btn-download"
      );
      i == null || i.addEventListener(
        "click",
        async () => {
          var p;
          (p = document.querySelector(".header__cta-button")) == null || p.click();
          const r = document.querySelector("#signup-modal");
          if (r) {
            const c = new MutationObserver((l) => {
              l.forEach((u) => {
                u.type === "attributes" && u.attributeName === "aria-hidden" && r.getAttribute("aria-hidden") === "true" && (c.disconnect(), this.showDialog("latest"));
              });
            });
            c.observe(r, { attributes: !0 });
          }
        },
        {
          signal: o.signal
        }
      );
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = Go, document.head.appendChild(t);
    }
  }
  const Xo = [
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/82/40394/icon-1742891157-67e26895a932e.png",
      title: "Disk Drill",
      description: "Recover files and avoid data loss",
      link: "https://setapp.com/apps/disk-drill",
      ratingDetails: {
        percentage: "93%",
        total: "1224"
      },
      body: {
        text: "This first rated data recovery app can bring any kind of data back regardless of the loss cause. Indeed, no matter whether your stuff has gone because of data corruption, unintended removal, and disk utility error, it will help.",
        list: [
          "Recover deleted files",
          "Simple and fast data backup",
          "Hard drive data recovery",
          "Powerful data protection"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/217/40765/icon-1730479186-67250452d2169.png",
      title: "ChronoSync Express",
      description: "Sync and back up folders",
      link: "/apps/chronosync-express",
      ratingDetails: {
        percentage: "95%",
        total: "389"
      },
      body: {
        text: "Chronosync Express gives you peace of mind for the security of your files, office and personal data. This consistent application keeps your data safe and updated, no matter where you happen to be.",
        list: [
          "Home folder backup or sync",
          "Easy connection to Macs, iPhones and iPads",
          "File servers backup and auto mount",
          "Email and system notifications supported"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/210/9272/icon-1699433154-654b4ac208ada.png",
      title: "Backup Pro",
      description: "Back up only essential files",
      link: "/apps/get-backup-pro",
      ratingDetails: {
        percentage: "86%",
        total: "281"
      },
      body: {
        text: "Try Get Backup Pro. It's a good mix of backup methods, coming with four varying ways of backups: simple copy, clone, incremental and versioned. Plus, it's used once you need to recover data that has been accidentally deleted from your Mac.",
        list: [
          "Backup only those units you want",
          "Scheduled backups with Stealth mode",
          "Recover to any computer",
          "Folder synchronization"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/289/42253/icon-1743678842-67ee6d7aeeda6.png",
      title: "CloudMounter",
      description: "Connect cloud storage to Finder",
      link: "/apps/cloudmounter",
      ratingDetails: {
        percentage: "90%",
        total: "1234"
      },
      body: {
        text: "CloudMounter connects your cloud storage accounts like Google Drive, Dropbox, Amazon S3, OneDrive, and others to your Mac's Finder so you can treat them as regular, local drives.",
        list: [
          "Secure cloud data encryption",
          "Streamlined into your Finder",
          "Access multiple cloud accounts",
          "Mount all Cloud storages as local disks"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/222/42263/icon-1743756630-67ef9d568e1e3.png",
      title: "Downie",
      description: "Download YouTube videos",
      link: "/apps/downie",
      ratingDetails: {
        percentage: "98%",
        total: "4372"
      },
      body: {
        text: "Find a video you want to download, then drag and drop the link into the app, or take advantage of a Downie browser extension doing it for you. That's literally all it takes to get that video on your Mac.",
        list: [
          "Download YouTube videos",
          "Download MP4 or just the audio",
          "Simply drag-and-drop an URL",
          "Save 4K YouTube videos"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/371/42285/icon-1744023104-67f3ae4007aa4.png",
      title: "Pulltube",
      description: "Download and trim videos",
      link: "https://setapp.com/apps/pulltube",
      ratingDetails: {
        percentage: "98%",
        total: "1478"
      },
      body: {
        text: "Pulltube is a Mac app that enables you to save any type of video and audio content from the top websites like YouTube and Vimeo — in the best quality. 4K, 8K, HD, and 60fps videos are covered.",
        list: [
          "Download from 1000+ sites",
          "Trim your video and audio",
          "Capture video subtitles",
          "Download faster via extensions"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/321/42059/icon-1741882724-67d3056489850.png",
      title: "CleanShot X",
      description: "Take better screenshots and GIFs",
      link: "/apps/cleanshot",
      ratingDetails: {
        percentage: "99%",
        total: "11843"
      },
      body: {
        text: "CleanShot is the ultimate screen recording app made for macOS. With its rich toolkit, CleanShot actually feels like 6 apps in one. You can use it to swiftly capture Mac's screen without desktop icons, record and trim video, annotate, save screenshots to dedicated cloud, and more.",
        list: [
          "Record screen",
          "Hide desktop icons",
          "Annotate, highlight or blur",
          "Quick Access Overlay"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/328/41359/icon-1734924881-6768da51c8c1a.png",
      title: "AnyTrans for iOS",
      description: "Move files between macOS and iOS",
      link: "/apps/anytrans",
      body: {
        text: "The app instantly backups and copies your iPhone content to Mac, as well as transfers data across iOS, iTunes and iCloud. Connect a device and watch your content fly.",
        list: [
          "Schedule instant iPhone backups",
          "Manage iTunes and iCloud content",
          "Secure management of backups",
          "Download media from 900+ sites"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/67/41952/icon-1740773686-67c219360b852.png",
      title: "Ulysses",
      description: "Write and publish from one app",
      link: "/apps/ulysses",
      ratingDetails: {
        percentage: "99%",
        total: "2127"
      },
      body: {
        text: "It's an insanely functional writing program, yet it stays completely out of your way when you just need a page to write on. With Ulysses, every step of your story's lifecycle gets easier: you can write undistracted, format with a few keystrokes, and publish without leaving the app.",
        list: [
          "Write without distractions",
          "Stay safe with iCloud sync",
          "Export beautiful ebooks and PDFs",
          "Publish to WordPress or Medium"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/554/42201/icon-1743413950-67ea62be54f57.png",
      title: "Craft",
      description: "Create and structure documents",
      link: "/apps/craft",
      ratingDetails: {
        percentage: "99%",
        total: "2127"
      },
      body: {
        text: "Create efficient and visually pleasing documents to track your projects, ideas, plans, and more. File away your items into neatly organized folders or interlink via a master document.",
        list: [
          "Share what you are working on",
          "Use AI assistant",
          "Structure your items",
          "Collaborate easily"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/219/42264/icon-1743758208-67efa380b6636.png",
      title: "Permute",
      description: "Convert audio, images, and videos",
      link: "/apps/permute",
      ratingDetails: {
        percentage: "98%",
        total: "3778"
      },
      body: {
        text: "Permute is a quick image, audio, and video converter. You can use it for files of all formats because Permute can convert anything into anything.",
        list: [
          "Video converter",
          "Image converter",
          "Audio converter",
          "Video to audio converter"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/566/0/icon-1741357275-67cb00db1ded3.png",
      title: "Luminar Neo",
      description: "Improve your photos like a pro",
      link: "/apps/luminar-neo",
      ratingDetails: {
        percentage: "90%",
        total: "700"
      },
      body: {
        text: "Luminar Neo does everything you need done with your shots — from simple color and vibrancy fixes to more advanced clutter removal, sky replacement, improving the lighting in your photos and more.",
        list: [
          "Enhance photos with AI tools",
          "Utilize extensions",
          "Get the colors just right",
          "Use presets"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/299/42088/icon-1742267911-67d8e607487c0.png",
      title: "CameraBag Pro",
      description: "Edit photos and videos",
      link: "/apps/camerabag-pro",
      ratingDetails: {
        percentage: "90%",
        total: "428"
      },
      body: {
        text: "Create breathtaking photos and films with professional one-click filters, or tweak and adjust image settings precisely to impress your friends, colleagues, and clients easier than ever before.",
        list: [
          "Professional filters at the ready",
          "Quick and easy batch changes",
          "Intuitive adjustment tiles",
          "Award-winning interface"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/298/8541/icon-1691068510-64cba85e8b087.png",
      title: "TouchRetouch",
      description: "Remove objects from photos",
      link: "/apps/touchretouch",
      ratingDetails: {
        percentage: "98%",
        total: "680"
      },
      body: {
        text: "Don't let a poorly placed trash can or powerline ruin an otherwise perfect photo. With TouchRetouch, your Mac becomes an all-in-one photo retouching studio where you can get your images looking their best.",
        list: [
          "Remove unwanted objects",
          "Crop and edit photos",
          "Photo retouching in a click",
          "Line removal"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/433/42254/icon-1743694727-67eeab8756821.png",
      title: "ClearVPN",
      description: "Use an intuitive VPN",
      link: "/apps/clearvpn",
      ratingDetails: {
        percentage: "88%",
        total: "2686"
      },
      body: {
        text: "The app offers simple, ready-made tools that help you spend less time tweaking your VPN's settings and more time actually doing what you want done. Stay more anonymous online, protect your personal information, connect to servers from a specific country and more in a click.",
        list: [
          "Deploy a VPN easily",
          "Change geolocation",
          "Enjoy perfectly usable speeds",
          "Keep your data anonymous"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/517/41861/icon-1740384397-67bc288ddd017.png",
      title: "AddLock",
      description: "Block annoying browser ads",
      link: "/apps/adlock",
      ratingDetails: {
        percentage: "69%",
        total: "711"
      },
      body: {
        text: "AdLock — a simple blocker for intrusive pop-up ads, annoying online chats, snoopers, and trackers. Save traffic on autoplay videos and remove unwanted distractions by blocking out ad types you'd like to avoid.",
        list: [
          "Block intrusive ads",
          "Use flexible blocking",
          "Browse safely",
          "Remove distractions"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/496/41929/icon-1740575425-67bf12c1bdfa7.png",
      title: "Pareto Security",
      description: "Check your security settings",
      link: "/apps/pareto-security",
      ratingDetails: {
        percentage: "97%",
        total: "634"
      },
      body: {
        text: "Pareto Security checks your device to see if you've utilized all these solutions and lets you know what can be improved. Always keep your Mac security settings up to par with this helpful tool.",
        list: [
          "Easy security",
          "Menu bar interface",
          "Security checklist",
          "Automatic checks"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/587/41798/icon-1739292259-67ab7e63760de.png",
      title: "Secrets 4",
      description: "Store and manage passwords",
      link: "/apps/secrets",
      ratingDetails: {
        percentage: "77%",
        total: "151"
      },
      body: {
        text: "Keep your secrets secret with Secrets 4, an updated tool to lock your sensitive information away. Your passwords are not synced to the app's server and are stored on your device or in your iCloud. Easily generate, store, use, and share your passwords.",
        list: [
          "Store sensitive information",
          "Generate passwords",
          "Share passwords",
          "Sync between devices"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/194/10197/icon-1711963165-660a7c1d7fdbc.png",
      title: "Archiver",
      description: "Compress and unarchive files",
      link: "/apps/archiver",
      ratingDetails: {
        percentage: "97%",
        total: "1435"
      },
      body: {
        text: "Zip, unpack and encrypt archives, split big files. You will enjoy its smooth interface, compelling features, and a rapid workflow. Definitely one of the today's most feature-rich file extractor and compressor programs.",
        list: [
          "Unpack folders and files in a snap",
          "Compress files to get more space",
          "Encrypt and password protect archives",
          "Preview files in archive without their opening"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/245/7858/icon-1681236553-6435a249c1fd2.png",
      title: "BetterZip",
      description: "Create and encrypt archives",
      link: "/apps/betterzip",
      ratingDetails: {
        percentage: "96%",
        total: "2353"
      },
      body: {
        text: "Delete the unnecessary files right in the archives, preview with Quick Look, rename or move files or folders there - no need to recompress!",
        list: [
          "Convenient ZIP file reader and manager",
          "Archive comments for ZIP and RAR formats",
          "Reliable password generator and manager",
          "Over 30 archive formats support + ISO extractor"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/78/43873/icon-1749713159-684a8107ee73d.png",
      title: "CleanMyMac",
      description: "Tidy up your Mac",
      link: "https://setapp.com/apps/cleanmymac",
      ratingDetails: {
        percentage: "97%",
        total: "15454"
      },
      body: {
        text: "CleanMyMac is an all-in-one Mac care app. Run performance optimization, free up space, eliminate duplicates, and manage apps seamlessly.",
        list: [
          "Care smarter",
          "Steer clear of malware",
          "Free up space",
          "Declutter your space"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/144/41794/icon-1739274958-67ab3ace7a0bf.png",
      title: "iStat Menus",
      description: "Track CPU, GPU, sensors, etc.",
      link: "https://setapp.com/apps/istat-menus",
      ratingDetails: {
        percentage: "97%",
        total: "4991"
      },
      body: {
        text: "The most comprehensive Mac monitor to date. iStat Menus is a fully-equipped system data collector that lives in your menu bar and provides vital info about the key indicators.",
        list: ["CPU & GPU", "Disk usage & activity", "Memory", "Sensors"]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/493/10507/icon-1715515857-6640b1d134f36.png",
      title: "QuitAll",
      description: "Speed up Mac by quitting all apps",
      link: "https://setapp.com/apps/quit-all-mac",
      ratingDetails: {
        percentage: "98%",
        total: "1635"
      },
      body: {
        text: "Love handling all the tasks at the same time but hate closing multiple apps one by one? Or find yourself stuck when your machine stalls due to too many apps running in the background?",
        list: [
          "Quick quit",
          "Handle background apps",
          "Force quit",
          "Customize to your needs"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/301/42576/icon-1746973828-6820b484ae86f.png",
      title: "Endurance",
      description: "Extend your battery life",
      link: "https://setapp.com/apps/endurance",
      ratingDetails: {
        percentage: "94%",
        total: "569"
      },
      body: {
        text: "Did you ever wish you could squeeze a little more battery life out of your MacBook? Now there’s Endurance, the app designed to make your laptop battery last longer while improving its overall battery health.",
        list: [
          "Lower the lights",
          "Snooze inactive apps",
          "Toggle your turbo",
          "Lessen dependence on Flash"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/483/42676/icon-1747828119-682dbd97182a6.png",
      title: "AlDente Pro",
      description: "Set battery charging limits",
      link: "https://setapp.com/apps/aldente-pro",
      ratingDetails: {
        percentage: "98%",
        total: "2847"
      },
      body: {
        text: "You may have heard that having your device plugged in and at 100% all day long is not the best for the battery. You may also have been trying to make sure you don’t go below 20 or 30% on your battery.",
        list: [
          "Set charging limit",
          "Stop charging when hot",
          "Run on battery when plugged in",
          "Monitor status and manage"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/376/42548/icon-1746731563-681d022b89238.png",
      title: "Mission Control",
      description: "Close windows from Mission Control",
      link: "https://setapp.com/apps/mission-control-plus",
      ratingDetails: {
        percentage: "98%",
        total: "968"
      },
      body: {
        text: "Tweak Mac’s native Mission Control feature to make the most out of it. Mission Control Plus is an app that adds the close button to all open windows you can view from Mission Control on Mac. It also covers a few shortcuts for quick actions like closing apps or killing active processes.",
        list: [
          "Master Mission Control and improve it",
          "Useful shortcuts for batch actions",
          "Close windows in Mission Control",
          "Enjoy the native experience"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/528/42687/icon-1747926996-682f3fd48a02b.png",
      title: "WidgetWall",
      description: "Add widgets to Mac desktop",
      link: "https://setapp.com/apps/widget-wall",
      ratingDetails: {
        percentage: "88%",
        total: "469"
      },
      body: {
        text: "Customize your Mac desktop with widgets — add favorite apps, pictures, Mac stats, and even websites for quick access. Build your very own widget wall on your desktop with WidgetWall.",
        list: [
          "Desktop overlay",
          "Desktop browser widget",
          "Quick access to tools",
          "Easy customization"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/153/42799/icon-1748962599-683f0d271f5a8.png",
      title: "Bartender",
      description: "Personalize your menu bar",
      link: "https://setapp.com/apps/bartender",
      ratingDetails: {
        percentage: "99%",
        total: "14530"
      },
      body: {
        text: "Bartender is a slick utility app and a one-stop menu bar organizer for Mac. It helps to organize, search, and actually use your Mac menu bar icons while also keeping your desktop tidy.",
        list: [
          "Customize the macOS menu bar",
          "Search menu items",
          "Reorder all icons",
          "Make your own hotkeys"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/321/42718/icon-1748347773-6835ab7ddfd5d.png",
      title: "CleanShot X",
      description: "Take better screenshots and GIFs",
      link: "https://setapp.com/apps/cleanshot",
      ratingDetails: {
        percentage: "99%",
        total: "12298"
      },
      body: {
        text: "CleanShot is the ultimate screen recording app made for macOS. With its rich toolkit, CleanShot actually feels like 6 apps in one. You can use it to swiftly capture Mac’s screen without desktop icons, record and trim video, annotate, save screenshots to dedicated cloud, and more.",
        list: [
          "CleanShot Cloud",
          "Quick Access Overlay",
          "Hide desktop icons",
          "Simple yet powerful"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/428/42692/icon-1747967217-682fdcf1a2474.png",
      title: "Session",
      description: "Work in short intervals",
      link: "https://setapp.com/apps/session",
      ratingDetails: {
        percentage: "98%",
        total: "1943"
      },
      body: {
        text: "Session is a focus app that helps build your productivity momentum. Block distractions, work in short intervals, and take regular breaks to recharge your mind. What makes Session stand out is its huge focus on analytics.",
        list: [
          "25 minutes of focused work",
          "Reflect on your sessions",
          "Block distractions",
          "See how you perform over time"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/518/42755/icon-1749071187-6840b55359ae5.png",
      title: "Nitro PDF Pro",
      description: "Work with your PDFs",
      link: "https://setapp.com/apps/nitro-pdf-pro",
      ratingDetails: {
        percentage: "89%",
        total: "2746"
      },
      body: {
        text: "Discover this all-round tool for all your PDF editing needs. Create and edit PDFs in Nitro PDF Pro, merge multiple files into one document, or convert into popular formats. ",
        list: [
          "Create and edit PDFs",
          "Merge PDFs",
          "Annotate PDFs",
          "Convert PDFs"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/210/9272/icon-1699433154-654b4ac208ada.png",
      title: "Get Backup Pro",
      description: "Back up only essential files",
      link: "https://setapp.com/apps/get-backup-pro",
      ratingDetails: {
        percentage: "86%",
        total: "288"
      },
      body: {
        text: "You've got a lot of data stored on your computer, right? How about a reliable backup utility for your Mac to be able to resist any kind of data-loss catastrophes? Try Get Backup Pro. It’s a good mix of backup methods, coming with four varying ways of backups: simple copy, clone, incremental and versioned.",
        list: [
          "Backup only those units you want",
          "Folder synchronization",
          "Incremental and compressed backups",
          "Scheduled backups with Stealth mode"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/136/40792/icon-1730733142-6728e4563df6a.png",
      title: "Renamer",
      description: "Rename a batch of files",
      link: "https://setapp.com/apps/renamer",
      ratingDetails: {
        percentage: "96%",
        total: "935"
      },
      body: {
        text: "What if you could rename lots of files in a snap? Feels wonderful, right? Renamer makes it possible! This robust application takes the pain out of renaming and managing dozens of files.",
        list: [
          "Multiple ways to rename files",
          "Keep your music organized",
          "Live preview",
          "Convert upper and lower cases"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/122/41549/icon-1737112183-678a3a77b43aa.png",
      title: "CodeRunner",
      description: "Edit and run code faster",
      link: "https://setapp.com/apps/coderunner",
      ratingDetails: {
        percentage: "96%",
        total: "1186"
      },
      body: {
        text: "Simplify your software development with the lightning-fast code editor. Write, run, and debug quickly from a single app with out-of-the-box support for more than 25 languages.",
        list: [
          "Build smarter",
          "Debug like a dream",
          "Beautify your code",
          "Search docs swiftly"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/606/42481/icon-1746107539-68137c9375583.png",
      title: "PDF Pals",
      description: "Chat with your PDFs",
      link: "https://setapp.com/apps/pdf-pals",
      ratingDetails: {
        percentage: "89%",
        total: "354"
      },
      body: {
        text: "What if the long report you’ve been going over could talk? What if you could just type in some questions and it could give you the answer right away, without having to read (or re-read) it top to bottom? PDF Pals app does exactly that.",
        list: [
          "Interact with your PDFs",
          "No uploads needed",
          "Get answers with citations",
          "Customize your chat"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/592/43811/icon-1749109056-68414940d76a1.png",
      title: "MurmurType",
      description: "Transcribe your speech",
      link: "https://setapp.com/apps/murmur",
      ratingDetails: {
        percentage: "83%",
        total: "323"
      },
      body: {
        text: "Got a lot to say and not a lot of time to type it all out? MurmurType is here to help. Record your voice and get the transcription right away. And if you prefer to speak another language, you can set the app to translate your speech into English.",
        list: [
          "Easy-to-use interface",
          "Quick translation",
          "Automated silence tracker",
          "Keyboard shortcuts"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/607/main/icon-65719fa98f5e6.png",
      title: "Ready to Send",
      description: "Generate draft email replies",
      link: "https://setapp.com/apps/ready-to-send",
      body: {
        text: "Start your day with some work already done using Ready to Send. This web app connects to your Gmail, finds unread emails that need replying, and generates handy drafts. All you need to do is review, edit, and send.",
        list: [
          "Get automated email reply drafts",
          "Disable auto-generated responses",
          "Customize response style",
          "Add calendar links automatically"
        ]
      }
    }
  ], Ct = ({
    eventCategory: e,
    eventAction: t,
    eventLabel: n
  }) => {
    const o = {
      eventCategory: e,
      eventAction: t,
      eventLabel: n
    }, i = {
      event: "crs-setapp",
      ...o,
      eventLabel2: "",
      //cd8
      eventValue: "",
      eventNonInteraction: !0,
      intercomLoaded: !0
    };
    window.dataLayer.push(i), De("Data pushed to dataLayer", "info"), console.table(o);
  }, un = (e, t, n, o = 1e3, i = 0.5) => {
    let r, p;
    if (r = new IntersectionObserver(
      function(c) {
        c[0].isIntersecting === !0 ? p = setTimeout(() => {
          Ct({
            eventCategory: t,
            eventAction: "View",
            eventLabel: n
          }), r.disconnect();
        }, o) : (De("Element is not fully visible", "warn"), clearTimeout(p));
      },
      { threshold: [i] }
    ), typeof e == "string") {
      const c = document.querySelector(e);
      c && r.observe(c);
    } else
      r.observe(e);
  }, Ko = `section.apps {
  display: none; /* Hide control section */
}

.crs-apps {
  color: #fff;
}
.crs-apps-content {
  padding-top: 90px;
  padding-bottom: 120px;
  border-top: 1px solid #3e3e46;
}

.crs-apps-title {
  color: #fff;
  margin-bottom: 0;
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  line-height: 51.84px;
  letter-spacing: 1px;
}

.crs-apps-description {
  margin-inline: auto;
  margin-top: 12px;
  max-width: 578px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 32.04px;
}

.crs-apps-nav {
  margin-top: 32px;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1140px;
  list-style: none;
}

.crs-apps-nav-item a {
  display: flex;
  align-items: center;
  height: 61px;
  padding: 24px 40px;
  border-radius: 15px;
  border: 1px solid #3e3e46;
  background: #26262b;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 36px;
  text-decoration: none;
}

.crs-apps-nav-item--more a {
  background: transparent;
}

/* APPS BLOCKS */

.crs-apps-blocks {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

@media (max-width: 992px) {
  .crs-apps-blocks {
    grid-template-columns: repeat(1, 1fr);
  }
}

.crs-apps-block {
  --main-text-color: #fff;
  scroll-margin-top: 80px;
  container-type: inline-size;
  border-radius: 20px;
}

.crs-apps-block-inner {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

@container (max-width: 900px) {
  .crs-apps-block-inner {
    height: 100%;
    flex-direction: column;
    justify-content: start;
  }
}

.crs-apps-block:nth-child(3n + 1) {
  grid-column: 1 / -1;
}

.crs-apps-block[data-color='7E7EE1'] {
  background: #7e7ee1;
}

.crs-apps-block[data-color='D5D8FE'] {
  --main-text-color: #26262b;
  background: #d5d8fe;
}

.crs-apps-block[data-color='424E81'] {
  background: #424e81;
}

.crs-apps-block[data-color='CF6F8A'] {
  background: #cf6f8a;
}

.crs-apps-block[data-color='F0AD84'] {
  --main-text-color: #26262b;
  background: #f0ad84;
}

.crs-apps-block[data-color='F0D0B5'] {
  --main-text-color: #26262b;
  background: #f0d0b5;
}

.crs-block-info {
  width: 100%;
  max-width: 465px;
  padding: 60px 0 32px 60px;
}

.crs-block-apps {
  width: 100%;
  max-width: 575px;
  padding: 40px 40px 24px 0;
}

@container (max-width: 900px) {
  .crs-block-info {
    flex: 1;
    max-width: 100%;
    padding: 60px 40px 0;
  }

  .crs-block-apps {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding: 0 40px 24px;
  }
}

.crs-block-title {
  color: var(--main-text-color);
  font-size: 36px;
  font-weight: 600;
  line-height: 51.84px;
}

.crs-block-description {
  margin-top: 12px;
  color: var(--main-text-color);
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
}

.crs-block-action {
  margin-top: 32px;
}

.crs-block-action-text {
  margin-top: 12px;
  color: var(--main-text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.crs-block-comment {
  --star-svg-url: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M13.6285 5.01668L9.32465 4.40531L7.39557 0.584123C7.25148 0.298782 6.74807 0.298782 6.60399 0.584123L4.67549 4.40531L0.371669 5.01668C0.0181703 5.06713 -0.122996 5.46694 0.12492 5.70291L3.25158 8.68327L2.5125 12.8967C2.45358 13.2314 2.838 13.4825 3.15591 13.3182L7.00007 11.3425L10.8442 13.3187C11.1592 13.4815 11.5471 13.2352 11.4876 12.8972L10.7486 8.68381L13.8752 5.70345C14.1231 5.46694 13.9814 5.06713 13.6285 5.01668Z" fill="white"/></svg>');
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
}

.crs-block-comment-author {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.crs-block-comment-rating {
  display: inline-flex;
  gap: 4px;
  align-items: center;
  color: var(--main-text-color);
}

.crs-block-comment-rating > span {
  width: 14px;
  height: 14px;
  background-image: var(--star-svg-url);
}

.crs-block-comment-text {
  margin-top: 8px;
  color: var(--main-text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
}

.crs-block-more > div:first-child {
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
}

.crs-block-more > div:nth-child(2) {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

/* APP BLOCK */

.crs-apps-block .crs-block-apps-list {
  columns: 3;
  column-gap: 20px;
  column-fill: balance;
}
@container (max-width: 900px) {
  .crs-block-apps-list {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 18px;
  }
}

.crs-block-app {
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 12px;
  border-radius: 15px;
  background: #fff;
  color: #26262b;
  break-inside: avoid;
  cursor: pointer;
}

@container (max-width: 900px) {
  .crs-block-app {
    max-width: 155px;
    min-height: 265px;
  }
}



.crs-block-app-name {
  font-size: 18px;
  font-weight: 600;
  line-height: 32.04px;
  text-align: center;
}

.crs-block-app-description {
  --line-height: 25px;
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: var(--line-height);
  min-height: calc(var(--line-height) * 2);
}

@container (min-width: 900px) {
  .crs-apps-block
    :is(
      .crs-block-app:nth-child(2),
      .crs-block-app:nth-child(3),
      .crs-block-app:nth-child(6),

    )
    .crs-block-app-description {
    display: none;
  }
}

.crs-block-app-meta {
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding-top: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 21.36px;
}

.crs-block-app-rating {
  display: flex;
  align-items: center;
  gap: 4px;
}

.crs-block-more {
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--main-text-color);
}

.crs-apps-action {
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.crs-apps-subtitle {
  margin-top: 60px;
  color: #fff;
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  line-height: 48px;
}

.crs-apps-sub-action {
  margin-top: 24px;
  display: flex;
  justify-content: center;
}
`, fn = jt, mn = ({
    content: e,
    delay: t,
    trigger: n = "click",
    triggerEventData: o
  }) => {
    let i;
    return {
      content: e,
      allowHTML: !0,
      arrow: !1,
      interactive: !0,
      maxWidth: "none",
      theme: "light",
      placement: "right-start",
      delay: t,
      trigger: n,
      popperOptions: {
        modifiers: [
          {
            name: "flip",
            options: {
              fallbackPlacements: ["left-start", "top", "bottom"]
            }
          }
        ]
      },
      onShow(r) {
        var u;
        Zo();
        const p = (u = r.popper.querySelector("h3")) == null ? void 0 : u.textContent, c = r.popper.querySelector(".btn-download"), l = r.popper.querySelector(".os-popover-close");
        i = new AbortController(), c == null || c.addEventListener(
          "click",
          () => {
            r.hide(), setTimeout(() => {
              var d;
              (d = document.querySelector(".header__cta-button")) == null || d.click(), Ct({
                eventCategory: p || "",
                eventAction: "Click",
                eventLabel: "Try free for 7 days"
              });
            }, 200);
          },
          {
            signal: i.signal
          }
        ), l == null || l.addEventListener(
          "click",
          () => {
            r.hide();
          },
          {
            signal: i.signal
          }
        ), Ct({
          eventCategory: o.eventCategory,
          eventAction: o.eventAction,
          eventLabel: p || ""
        }), Ct({
          eventCategory: p || "",
          eventAction: "view",
          eventLabel: "Popup after hover"
        });
      },
      onHide(r) {
        i && i.abort();
      }
    };
  };
  class Qo {
    // Block data for the .crs-apps-blocks section
    constructor() {
      this.init();
    }
    init() {
      this.render(), this.addSmoothScrolling(), this.addTooltipByHover(), this.addStyles(), this.events();
    }
    async render() {
      const t = await nt("section.header");
      if (!t)
        throw new Error("Target element not found for Apps Section");
      if (Ce == null) return;
      const n = (
        /* HTML */
        `<section class="page-content-wrapper crs-apps">
      <div class="crs-apps-content">
        <h3 class="crs-apps-title">What do you want to start with today?</h3>
        <div class="crs-apps-description">
          Big task or small fix — with 260+ trusted apps, Setapp helps you solve
          anything without stress, all with one simple subscription
        </div>
        <ul class="crs-apps-nav">
          ${this.renderNavigation()}
        </ul>
        <div class="crs-apps-blocks">${this.renderBlocks()}</div>
        <div class="crs-apps-action">
          <a
            href="https://setapp.com/apps"
            class="btn btn-link btn_no-spacing btn-link_light btn-link_with-arrow"
          >
            View all superpowers
          </a>
        </div>
        <div class="crs-apps-subtitle">
          Sign up, install Setapp, and find your <br />
          perfect app in our suite of 260+ apps.
        </div>
        <div class="crs-apps-sub-action">
          <button
            class="btn btn_light signup__button crs-block-action-button"
            type="button"
            data-block-title="Sign up, install Setapp..."
            data-title="Try free for 7 days"
          >
            Try free for 7 days
          </button>
        </div>
      </div>
    </section>`
      );
      t.insertAdjacentHTML("afterend", n);
    }
    renderNavigation() {
      return dn.map(
        (o) => (
          /* HTML */
          `<li class="crs-apps-nav-item">
          <a href="#${o.id}" data-title="${o.navTitle}"
            >${o.navTitle}</a
          >
        </li>`
        )
      ).join("") + /* HTML */
      `<li
      class="crs-apps-nav-item crs-apps-nav-item--more"
    >
      <a href="https://setapp.com/apps" data-title="And more...">And more...</a>
    </li>`;
    }
    renderBlocks() {
      return dn.map(
        (t) => (
          /* HTML */
          `<div
          class="crs-apps-block"
          data-color="${t.color}"
          data-block-title="${t.title}"
          id="${t.id}"
        >
          <div class="crs-apps-block-inner">
            <div class="crs-block-info">
              <h4 class="crs-block-title">${t.title}</h4>
              <div class="crs-block-description">${t.description}</div>
              <div class="crs-block-action">
                <button
                  type="button"
                  data-block-title="${t.title}"
                  data-title="${t.buttonText}"
                  class="btn ${t.buttonClass} signup__button crs-block-action-button"
                >
                  ${t.buttonText}
                </button>
                <div class="crs-block-action-text">
                  start your 7 days free trial
                </div>
              </div>
              ${t.comment ? this.renderComment(t.comment) : ""}
            </div>
            <div class="crs-block-apps">
              <div class="crs-block-apps-list">
                ${this.renderApps(t.title, t.apps)}
              </div>
              <div class="crs-block-more">
                <div>${t.moreAppsCount} more apps</div>
                <div>solving this with one subscription</div>
              </div>
            </div>
          </div>
        </div>`
        )
      ).join("");
    }
    renderComment(t) {
      return (
        /* HTML */
        `<div class="crs-block-comment">
      <div class="crs-block-comment-author">
        <span class="crs-block-comment-rating">
          <span></span><span></span><span></span><span></span><span></span
        ></span>
        — ${t.author}
      </div>
      <div class="crs-block-comment-text">${t.text}</div>
    </div>`
      );
    }
    renderApps(t, n) {
      return n.map((o) => Ce.find((i) => i.name === o)).filter((o) => o !== void 0).map(
        (o) => (
          /* HTML */
          `<div
          class="crs-block-app"
          data-app-name="${o.name}"
          data-section-title="${t || ""}"
        >
          <div class="crs-block-app-icon">
            <img
              src="${o.icon}"
              alt="${o.name}"
              width="80"
              height="80"
              loading="lazy"
            />
          </div>
          <div class="crs-block-app-name">${o.name}</div>
          <div class="crs-block-app-description">${o.description}</div>

          <div class="crs-block-app-meta">
            ${o.rating ? (
            /* HTML */
            `<div class="crs-block-app-rating">
                  <img
                    alt=""
                    width="16"
                    height="16"
                    src="https://cdn.setapp.com/master-9f18f44f26fe5f8aa6077a4a8f38ca796e93985f-590/build/main/751ecfba46c61061d678.svg"
                  />${o.rating}%
                </div>`
          ) : ""}
            <div class="crs-block-app-platforms">${o.platforms}</div>
          </div>
        </div>`
        )
      ).join("");
    }
    async events() {
      nt(".crs-block-action-button").then(() => {
        const t = document.querySelectorAll(
          ".crs-block-action-button"
        );
        t && t.length > 0 && t.forEach((n) => {
          n.addEventListener("click", (o) => {
            var r;
            const i = o.currentTarget;
            (r = document.querySelector(".header__cta-button")) == null || r.click(), Ct({
              eventCategory: i.getAttribute("data-block-title") || "",
              eventAction: "Click",
              eventLabel: i.getAttribute("data-title") || ""
            });
          });
        });
      }), nt(".crs-apps-block").then(() => {
        document.querySelectorAll(".crs-apps-block").forEach((n, o) => {
          let i = null;
          if (o === 0)
            i = "1";
          else if (o === 1)
            i = "2";
          else if (o === 2)
            i = null;
          else if (o === 3)
            i = "3";
          else if (o === 4)
            i = "4";
          else {
            if (o === 5)
              return;
            i = null;
          }
          i && un(n, i, "App blocks");
        });
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = Ko, document.head.append(t);
    }
    addSmoothScrolling() {
      document.addEventListener("click", (t) => {
        const o = t.target.closest('.crs-apps-nav a[href^="#"]');
        if (o) {
          t.preventDefault(), Ct({
            eventCategory: "What do you want to start with today?",
            eventAction: "Click",
            eventLabel: o.getAttribute("data-title") || ""
          });
          const i = o.getAttribute("href");
          if (i && i !== "#") {
            const r = document.querySelector(i);
            r && r.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }
      });
    }
    async addTooltipByHover() {
      await nt(".crs-block-app");
      const t = document.querySelectorAll(".crs-block-app");
      if (!t) {
        console.error("Apps blocks container not found");
        return;
      }
      const n = new Yo();
      t.forEach((o) => {
        const i = o.querySelector(".crs-block-app-name"), r = o.getAttribute("data-section-title");
        if (!i) return;
        const p = Xo.find(
          (c) => c.title.includes(i.textContent || "")
        );
        if (!p) {
          console.warn("No tooltip variant found for app:", i.textContent);
          return;
        }
        fn(
          o,
          mn({
            content: n.returnHtml(p),
            delay: [2e3, 1e3],
            trigger: "mouseenter",
            triggerEventData: {
              eventCategory: r || "",
              eventAction: "Hover"
            }
          })
        ), fn(
          o,
          mn({
            content: n.returnHtml(p),
            delay: [0, 0],
            trigger: "click",
            triggerEventData: {
              eventCategory: r || "",
              eventAction: "Click"
            }
          })
        );
      });
    }
  }
  const Jo = `.crs-achievs {
  margin-top: 80px;
  width: 100%;
}

.crs-achievs-inner {
  max-width: 1200px;
  margin: 0 auto;
}
.crs-achievs-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 5px;
  width: 100%;
}

.crs-achievs-item {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 6px;
  min-height: 103px;
}

.crs-achievs-item::before,
.crs-achievs-item::after {
  bottom: 0;
  content: '';
  display: block;
  width: 41px;
  height: 100%;
}

.crs-achievs-item::before {
  background-image: url('https://conversionrate-store.github.io/a-b_images/setapp/laurel_left.svg');
}

.crs-achievs-item::after {
  background-image: url('https://conversionrate-store.github.io/a-b_images/setapp/laurel_right.svg');
}

.crs-achievs-item .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  color: #fff;
}

.crs-achievs-item .highlight {
  color: #fff;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  line-height: 20px;
}

.crs-achievs-item .title {
  margin-top: 10px;
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
}

.crs-achievs-item .description {
  margin-top: 2px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}

.crs-achievs-item .apple-logo {
  width: 26px;
  height: 34px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="34" fill="none"><path fill="%23fff" d="M25.172 11.998a7.372 7.372 0 0 0-2.513 2.684 7.667 7.667 0 0 0-.944 3.605 7.449 7.449 0 0 0 1.174 4A7.101 7.101 0 0 0 26 24.96a17.635 17.635 0 0 1-2.194 4.683c-1.367 2.032-2.795 4.064-4.968 4.064-2.174 0-2.733-1.304-5.238-1.304-2.442 0-3.312 1.347-5.3 1.347-1.986 0-3.373-1.882-4.967-4.192A20.733 20.733 0 0 1 0 18.628c0-6.416 4.037-9.816 8.011-9.816 2.112 0 3.871 1.433 5.196 1.433 1.263 0 3.23-1.519 5.63-1.519a7.332 7.332 0 0 1 3.563.82 7.606 7.606 0 0 1 2.772 2.453ZM17.699 6.01a7.518 7.518 0 0 0 1.698-4.597 3.281 3.281 0 0 0-.063-.663 7.08 7.08 0 0 0-4.699 2.502 7.3 7.3 0 0 0-1.76 4.47c.002.202.022.402.063.6.143.027.289.042.435.042a6.052 6.052 0 0 0 2.397-.718A6.248 6.248 0 0 0 17.7 6.01Z"/></svg>');
  background-repeat: no-repeat;
}

.crs-achievs-item .capterra-logo {
  width: 80px;
  height: 21px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="21" fill="none"><g fill="%23fff" clip-path="url(%23a)"><path d="M11.455 15.246c-.082.086-.22.195-.412.325-.192.13-.443.26-.752.39-.31.129-.687.241-1.133.335-.446.094-.958.14-1.534.14-1.112 0-2.073-.187-2.883-.563a5.401 5.401 0 0 1-2.008-1.57c-.528-.67-.916-1.465-1.163-2.381-.247-.916-.37-1.924-.37-3.02 0-1.097.133-2.112.401-3.043.268-.93.67-1.735 1.205-2.414a5.568 5.568 0 0 1 2.008-1.591c.803-.382 1.747-.574 2.831-.574.535 0 1.02.051 1.452.152.432.1.81.22 1.133.357.322.137.59.281.803.432.213.151.374.278.484.38.123.115.23.252.319.41.089.16.134.333.134.52 0 .29-.103.578-.31.867a6.209 6.209 0 0 1-.68.801 8.388 8.388 0 0 0-.555-.53 3.744 3.744 0 0 0-.69-.476 4.44 4.44 0 0 0-.866-.347 3.87 3.87 0 0 0-1.08-.14c-.7 0-1.288.148-1.762.443a3.463 3.463 0 0 0-1.143 1.158 5.043 5.043 0 0 0-.617 1.635 9.95 9.95 0 0 0 0 3.822c.123.621.336 1.17.638 1.646.301.476.696.859 1.184 1.147.487.289 1.095.434 1.822.434.384 0 .738-.05 1.06-.152.323-.1.608-.224.855-.368s.464-.296.65-.455c.184-.158.339-.296.462-.411.083.1.179.224.289.368.11.144.213.296.309.454.096.16.178.318.247.476.068.16.103.304.103.433 0 .188-.035.347-.103.476-.067.131-.177.275-.328.434ZM22.066 13.585c0 1.148.158 1.983.476 2.505a3.37 3.37 0 0 1-1.368.283c-.497 0-.873-.102-1.128-.304-.256-.203-.418-.494-.487-.872-.305.335-.705.618-1.202.85-.497.232-1.105.349-1.823.349-.373 0-.745-.055-1.118-.163a2.887 2.887 0 0 1-1.015-.532 2.744 2.744 0 0 1-.746-.988c-.194-.412-.29-.915-.29-1.509 0-.738.169-1.34.508-1.802a3.657 3.657 0 0 1 1.274-1.096 5.585 5.585 0 0 1 1.657-.554c.593-.1 1.139-.166 1.636-.195.166-.015.328-.022.487-.022h.446v-.396c0-.559-.142-.955-.425-1.19-.284-.235-.743-.353-1.378-.353-.594 0-1.122.102-1.584.305-.463.204-.915.436-1.357.697a3.23 3.23 0 0 1-.466-.816c-.118-.298-.177-.52-.177-.665 0-.203.107-.4.321-.588.214-.189.508-.36.88-.512a6.88 6.88 0 0 1 1.285-.37 7.981 7.981 0 0 1 1.533-.142c.746 0 1.378.08 1.896.24.518.16.94.406 1.264.74.324.334.556.75.693 1.252.138.5.208 1.085.208 1.753v4.095Zm-2.652-2.527h-.29a1.93 1.93 0 0 0-.29.022c-.345.03-.687.073-1.025.13-.339.058-.64.16-.901.306a1.92 1.92 0 0 0-.643.566c-.166.233-.248.53-.248.893 0 .407.11.751.331 1.035.22.283.594.425 1.12.425.261 0 .51-.037.745-.11.234-.071.442-.166.621-.282.18-.117.321-.243.425-.381.104-.138.156-.265.156-.381v-2.223ZM27.225 6.768c.22-.276.564-.556 1.033-.839.468-.283 1.06-.425 1.776-.425.51 0 .994.091 1.456.272.46.182.87.476 1.228.882.358.407.644.944.857 1.613.213.668.32 1.488.32 2.461 0 1.133-.124 2.066-.372 2.799-.248.734-.568 1.315-.96 1.742-.392.429-.83.73-1.311.904a4.223 4.223 0 0 1-1.446.262 3.44 3.44 0 0 1-1.043-.142 4.053 4.053 0 0 1-.754-.315 2.03 2.03 0 0 1-.682-.589v5.355H24.51V5.809a4.383 4.383 0 0 1 .939-.087c.46 0 .849.08 1.169.24.321.16.524.428.607.806Zm3.73 4.03a6.83 6.83 0 0 0-.104-1.22 3.072 3.072 0 0 0-.34-.98 1.695 1.695 0 0 0-.639-.643c-.268-.153-.594-.228-.977-.228-.577 0-.98.116-1.205.348-.227.233-.34.486-.34.763v4.617c.11.117.305.254.587.414.281.16.608.24.978.24.7 0 1.216-.29 1.545-.872.33-.58.494-1.394.494-2.44ZM36.07 14.544a3.959 3.959 0 0 1-.187-.915c-.027-.32-.041-.639-.041-.959V2.563c.096-.014.2-.029.31-.043.097-.015.2-.026.311-.033.11-.007.22-.01.331-.01.221 0 .442.02.664.065.22.043.42.13.6.26.18.131.325.31.436.534.11.226.166.52.166.882v1.547h2.9v2.2h-2.9v4.646c0 1.013.393 1.519 1.18 1.519.194 0 .377-.033.55-.098.173-.066.328-.138.466-.218a2.77 2.77 0 0 0 .58-.447c.207.32.366.596.476.83.11.233.166.453.166.658 0 .19-.072.378-.217.56-.145.184-.35.353-.611.507-.262.154-.58.278-.953.373a4.93 4.93 0 0 1-1.222.144c-.857 0-1.523-.175-2-.523a2.763 2.763 0 0 1-1.005-1.372ZM48.696 14.261c.347 0 .652-.04.915-.12.263-.08.499-.177.707-.294.208-.116.388-.242.54-.38.153-.139.292-.265.417-.382.166.218.34.498.519.839.18.341.27.62.27.838 0 .32-.172.61-.518.871-.29.233-.701.432-1.232.6-.532.166-1.157.25-1.875.25-.65 0-1.288-.087-1.916-.26a4.163 4.163 0 0 1-1.678-.915c-.49-.436-.888-1.02-1.192-1.754-.304-.733-.456-1.658-.456-2.777 0-.915.135-1.702.404-2.363.27-.66.629-1.209 1.078-1.645a4.214 4.214 0 0 1 1.522-.958 5.125 5.125 0 0 1 1.74-.305c.773 0 1.43.127 1.968.38.54.255.978.596 1.316 1.025.338.428.583.918.735 1.47.151.552.227 1.133.227 1.742v.305c0 .116-.003.24-.01.37l-.02.381a2.33 2.33 0 0 1-.032.294h-6.111c.055.799.29 1.463.706 1.993.417.53 1.075.795 1.976.795Zm.944-4.422c0-.697-.128-1.263-.386-1.699-.257-.435-.719-.653-1.385-.653-.57 0-1.024.207-1.364.62-.34.415-.51.992-.51 1.732h3.645ZM57.09 6.823c.084-.13.194-.274.332-.432.138-.159.307-.303.508-.432.2-.13.42-.238.663-.325.241-.086.5-.13.777-.13.165 0 .341.015.528.044.187.029.359.083.518.162.159.08.286.187.383.324a.861.861 0 0 1 .145.508c0 .317-.076.68-.227 1.091-.152.411-.304.762-.456 1.053a3.061 3.061 0 0 0-.705-.469 1.951 1.951 0 0 0-.828-.163c-.428 0-.787.13-1.077.393-.29.262-.435.575-.435.94v7.051h-2.818V5.808a4.4 4.4 0 0 1 .538-.076c.111-.007.242-.01.394-.01.442 0 .825.09 1.15.27.325.18.529.457.61.83ZM65.102 6.823c.083-.13.193-.274.331-.432.138-.159.307-.303.508-.432.2-.13.421-.238.662-.325.242-.086.501-.13.777-.13.166 0 .342.015.529.044.186.029.358.083.518.162.159.08.286.187.383.324a.862.862 0 0 1 .145.508c0 .317-.076.68-.228 1.091-.152.411-.304.762-.455 1.053a3.057 3.057 0 0 0-.705-.469 1.951 1.951 0 0 0-.829-.163c-.428 0-.787.13-1.077.393-.29.262-.435.575-.435.94v7.051h-2.818V5.808a4.533 4.533 0 0 1 .538-.076 6.1 6.1 0 0 1 .394-.01c.442 0 .825.09 1.15.27.325.18.529.457.612.83ZM78.546 13.585c0 1.148.159 1.983.477 2.505a3.367 3.367 0 0 1-1.367.283c-.498 0-.874-.102-1.13-.304-.256-.203-.417-.494-.486-.872-.304.335-.704.618-1.202.85-.497.232-1.105.349-1.823.349-.372 0-.745-.055-1.119-.163a2.887 2.887 0 0 1-1.015-.532 2.744 2.744 0 0 1-.746-.988c-.194-.412-.29-.915-.29-1.509 0-.738.17-1.34.508-1.802a3.657 3.657 0 0 1 1.274-1.096 5.574 5.574 0 0 1 1.657-.554c.593-.1 1.14-.166 1.636-.195.167-.015.328-.022.488-.022h.444v-.396c0-.559-.141-.955-.424-1.19-.284-.235-.743-.353-1.378-.353-.594 0-1.121.102-1.584.305-.462.204-.915.436-1.357.697a3.223 3.223 0 0 1-.466-.816c-.118-.298-.176-.52-.176-.665 0-.203.107-.4.321-.588.214-.189.508-.36.88-.512a6.884 6.884 0 0 1 1.285-.37 7.977 7.977 0 0 1 1.533-.142c.746 0 1.378.08 1.896.24.518.16.939.406 1.263.74.325.334.556.75.695 1.252.137.5.206 1.085.206 1.753v4.095Zm-2.65-2.527h-.29a1.93 1.93 0 0 0-.29.022c-.346.03-.688.073-1.026.13a2.83 2.83 0 0 0-.902.306 1.937 1.937 0 0 0-.642.566c-.166.233-.249.53-.249.893 0 .407.112.751.332 1.035.22.283.594.425 1.119.425.262 0 .51-.037.746-.11a2.47 2.47 0 0 0 .621-.282c.18-.117.321-.243.425-.381.104-.138.156-.265.156-.381v-2.223Z"/></g><defs><clipPath id="a"><path fill="%23fff" d="M.5.75h79v20H.5z"/></clipPath></defs></svg>');
}

.crs-achievs-item .rating-star {
  display: flex;
  align-items: center;
  gap: 6px;
}

.crs-achievs-item .rating-star::before {
  content: '';
  display: inline-block;
  width: 24px;
  height: 23px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" fill="none"><path fill="%23fff" d="M23.363 8.613 15.985 7.58l-3.307-6.467c-.247-.483-1.11-.483-1.357 0L8.015 7.58.637 8.613C.031 8.7-.21 9.375.214 9.775l5.36 5.043-1.267 7.13c-.1.567.558.992 1.103.714L12 19.32l6.59 3.344c.54.275 1.205-.141 1.103-.713l-1.267-7.13 5.36-5.044c.425-.4.182-1.077-.423-1.163Z"/></svg>');
  background-repeat: no-repeat;
}
`;
  class ti {
    constructor({ container: t, position: n = "afterend" }) {
      this.container = t, this.position = n, this.init();
    }
    init() {
      if (!this.container) {
        console.error("Container element is not provided");
        return;
      }
      this.addStyles(), this.render();
    }
    render() {
      this.container.insertAdjacentHTML(
        this.position,
        /* HTML */
        `
      <div class="crs-achievs">
        <div class="crs-achievs-inner">
          <div class="crs-achievs-list">
            <div class="crs-achievs-item">
              <div class="content">
                <div class="highlight apple-logo"></div>
                <div class="title">Notarized</div>
                <div class="description">by Apple</div>
              </div>
            </div>
            <div class="crs-achievs-item">
              <div class="content">
                <div class="highlight">100 000+</div>
                <div class="title">Happy subscribers</div>
                <div class="description">since 2016</div>
              </div>
            </div>
            <div class="crs-achievs-item">
              <div class="content">
                <div class="highlight rating-star">4.7</div>
                <div class="title capterra-logo"></div>
                <div class="description">rating</div>
              </div>
            </div>
            <div class="crs-achievs-item">
              <div class="content">
                <div class="highlight rating-star">4.8</div>
                <div class="title">G2 reviews</div>
                <div class="description">rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
      );
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = Jo, document.head.appendChild(t);
    }
  }
  const ei = "https://conversionrate-store.github.io/a-b_images/setapp/", ni = `.site-navigation__bar {
  background: #1a1a1d;
}

section.header {
  padding-top: 125px !important;
}

@media (min-width: 992px) {
  .eney-promo-banner {
    top: 78px !important;
    z-index: 199;
  }
}

/* .eney-promo-banner, */
section.header .header__badge,
section.header .header__description {
  display: none;
}

.header__apps-image {
  margin-top: 113px;
  margin-bottom: -60px;
  width: 100%;
  height: max-content;
}

@media (max-width: 992px) {
  .header__apps-image {
    margin-top: 90px;
  }
}

@media (max-width: 768px) {
  .header__apps-image {
    margin-top: 165px;
  }
}

.header__apps-image img {
  width: 100%;
  max-width: 710px;
  filter: drop-shadow(1px 10px 50px #d9d9d92a);
}

.header__logo {
  position: relative;
  filter: drop-shadow(1px 10px 30px #d9d9d934);
}

.header__title.h1_hero {
  max-width: 1022px;
  font-size: 64px;
  font-weight: 700;
  line-height: 67.84px;
  letter-spacing: 1px;
}

.crs-header-comment {
  margin-top: 42px;
  max-width: 566px;
  text-wrap: pretty;
  color: #fff;
}

.crs-header-comment p {
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  text-align: left;
}

.crs-header-comment-author {
  margin-top: 8px;
}

.crs-header-comment-author .stars {
  --star-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" fill="none"><path fill="%23EFD0B5" d="m13.629 4.897-4.304-.612L7.395.464c-.144-.285-.647-.285-.791 0L4.675 4.285l-4.303.612c-.354.05-.495.45-.247.686l3.127 2.98-.74 4.213c-.058.335.326.586.644.422L7 11.222l3.844 1.977c.315.162.703-.084.644-.422l-.74-4.213 3.127-2.98c.248-.237.106-.637-.246-.687Z"/></svg>');
  display: inline-flex;
  gap: 4px;
  width: 86px;
  height: 17px;
}

.crs-header-comment-author .stars span {
  width: 14px;
  height: 13px;
  background-image: var(--star-image);
}
`;
  class oi {
    constructor() {
      this.init();
    }
    init() {
      this.changeTitle(), this.addComment(), this.addAchievs(), this.addStyles();
    }
    async addAppsImage() {
      const t = `
      <div class="header__apps-image"><img src="${ei}/apps.webp" alt="Apps Image"></div>`, n = await nt(
        "section.header .header__logo"
      );
      if (n)
        n.insertAdjacentHTML("beforebegin", t);
      else
        throw new Error("Target element not found for Apps Image");
    }
    async changeTitle() {
      const t = await nt("section.header h1.h1_hero");
      t && (t.textContent = "Get any task done on your Mac with one subscription");
    }
    async addComment() {
      const t = await nt(
        "section.header .header__description"
      );
      if (!t) return;
      t.insertAdjacentHTML(
        "beforebegin",
        /* HTML */
        `<div class="crs-header-comment">
      <p>
        “ Hundreds of the best Mac apps out there. Tens of thousands of dollars
        of software for just a few bucks a month. I pay for it on all of my
        computers. “
      </p>
      <div class="crs-header-comment-author">
        <span class="stars"
          ><span></span><span></span><span></span><span></span><span></span
        ></span>
        — Lory G.
      </div>
    </div>`
      );
    }
    async addAchievs() {
      const t = await nt(
        "section.header .header__description"
      );
      t && new ti({
        container: t,
        position: "afterend"
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = ni, document.head.appendChild(t);
    }
  }
  const ii = `.crs-more {
  margin-bottom: 120px;
  max-width: 100%;
  color: #fff;
  background-color: #070707;
  background-image: url('https://conversionrate-store.github.io/a-b_images/setapp/notebook-bg-2.webp');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
}


@media (min-width: 1440px) {
  .crs-more {
    background-size: cover;
  }
}

.crs-more-content {
  margin-inline: auto;
  max-width: 1260px;
  padding-top: 49px;
  padding-bottom: 35%;
}

.crs-more-title {
  color: #fff;
  text-align: center;
  font-size: 36px;
  font-weight: 400;
  line-height: 51.84px;
  letter-spacing: 1px;
}

.crs-more-description {
  margin-top: 12px;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32.04px; /* 178% */
}

.crs-more-blocks {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.crs-more-block {
  flex: 1;
  max-width: 380px;
  min-width: 300px;
  padding: 40px;
  border-radius: 15px;
  background: #26262b;
}

.crs-more-block-title {
  margin-top: 40px;
  margin-bottom: 0;
  color: #fff;
  font-size: 26px;
  font-weight: 600;
  line-height: 36px;
}

.crs-more-block-description {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
}
`;
  class ai {
    constructor() {
      this.init();
    }
    init() {
      this.render(), this.events(), this.addStyles();
    }
    async render() {
      const t = await nt("section.apps");
      if (!t)
        throw new Error("Target element not found for More Section");
      t.insertAdjacentHTML(
        "beforebegin",
        /* HTML */
        `
      <section class="crs-more page-content-wrapper ">
        <div class="crs-more-content">
          <h3 class="crs-more-title">More with Setapp</h3>
          <div class="crs-more-description">
            With a Setapp subscription, it's easy to discover, install, and use
            <br />
            quality apps for Mac and iOS.
          </div>
          <div class="crs-more-blocks">
            <div class="crs-more-block">
              <div class="crs-block-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.633 30.3472V18.6702C13.633 16.7062 14.113 14.7722 15.033 13.0252L19.993 3.60524C20.1745 3.26619 20.4452 2.98315 20.7758 2.78665C21.1064 2.59016 21.4844 2.48767 21.869 2.49024C23.032 2.49024 23.976 3.40824 23.976 4.54024V14.8702H32.722C35.998 14.8702 38.3 18.0072 37.236 21.0222L33.409 31.8552C32.746 33.7302 30.932 34.9902 28.894 34.9902H18.406C15.77 34.9902 13.633 32.9122 13.633 30.3472ZM2.5 18.7412C2.5 16.6032 4.28 14.8712 6.478 14.8712C8.675 14.8712 10.455 16.6032 10.455 18.7412V31.1212C10.455 33.2592 8.675 34.9912 6.478 34.9912C4.28 34.9902 2.5 33.2592 2.5 31.1202V18.7412Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="crs-more-block-title">Handpicked Apps</div>
              <div class="crs-more-block-description">
                Each app is carefully selected, with new ones added regularly.
              </div>
            </div>
            <div class="crs-more-block">
              <div class="crs-block-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.7526 4.24023C17.1559 4.24023 16.5836 4.47729 16.1616 4.89924C15.7396 5.3212 15.5026 5.8935 15.5026 6.49023V17.7402H7.4336C5.4296 17.7402 4.4256 20.1632 5.8436 21.5802L18.4096 34.1502C18.6185 34.3592 18.8666 34.5249 19.1396 34.638C19.4125 34.7511 19.7051 34.8093 20.0006 34.8093C20.2961 34.8093 20.5887 34.7511 20.8616 34.638C21.1346 34.5249 21.3827 34.3592 21.5916 34.1502L34.1616 21.5832C35.5786 20.1652 34.5746 17.7422 32.5696 17.7422L24.5026 17.7412V6.49023C24.5026 5.8935 24.2655 5.3212 23.8436 4.89924C23.4216 4.47729 22.8493 4.24023 22.2526 4.24023H17.7526Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="crs-more-block-title">Free Updates, No Ads</div>
              <div class="crs-more-block-description">
                Enjoy automatic updates and zero ads at no extra cost.
              </div>
            </div>
            <div class="crs-more-block">
              <div class="crs-block-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <g clip-path="url(#clip0_781_1191)">
                    <mask
                      id="mask0_781_1191"
                      style="mask-type:luminance"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="-1"
                      width="40"
                      height="41"
                    >
                      <path
                        d="M0 -0.00976562H40V39.9902H0V-0.00976562Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_781_1191)">
                      <path
                        d="M35.962 5.97123C33.2834 4.95687 30.372 4.72349 27.566 5.29823C24.7718 5.86635 22.199 7.22323 20.152 9.20823C18.0747 7.13799 15.416 5.7497 12.53 5.22823C9.63284 4.69872 6.64328 5.05669 3.95301 6.25523C3.67177 6.37768 3.43159 6.57829 3.26101 6.83323C3.09249 7.08556 3.00174 7.38181 3.00001 7.68523V31.3962C2.99901 31.6282 3.05501 31.8562 3.16401 32.0622C3.27401 32.2682 3.43201 32.4452 3.62601 32.5772C3.82124 32.711 4.0456 32.7963 4.28041 32.8258C4.51523 32.8554 4.75371 32.8284 4.97601 32.7472C7.12 31.9813 9.41304 31.7259 11.673 32.0012C13.9277 32.274 16.0871 33.0713 17.978 34.3292C18.6333 34.7629 19.4022 34.9929 20.188 34.9902C20.9558 34.9922 21.7077 34.7709 22.352 34.3532C24.211 33.1348 26.3174 32.3444 28.519 32.0392C30.7262 31.7316 32.9741 31.9153 35.102 32.5772C35.3575 32.6543 35.6289 32.6614 35.888 32.5977C36.1471 32.534 36.3844 32.4019 36.575 32.2152C36.848 31.9442 37.001 31.5792 37 31.1992V7.43223C36.998 7.11376 36.8978 6.80366 36.713 6.54423C36.5262 6.28229 36.2639 6.08264 35.962 5.97123ZM17.875 13.3632V30.4952C14.568 28.9612 9.87301 28.4152 6.25001 28.9232V8.49323C7.98501 8.03123 10.814 8.03123 12.549 8.49323C14.2762 8.95045 15.8519 9.85563 17.117 11.1172C17.408 11.4592 17.662 11.8292 17.875 12.2212V13.3632Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_781_1191">
                      <rect
                        width="40"
                        height="40"
                        fill="white"
                        transform="translate(0 -0.00976562)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="crs-more-block-title">App Guides</div>
              <div class="crs-more-block-description">
                Learn new apps fast and uncover hidden features easily.
              </div>
            </div>
          </div>
        </div>
      </section>
    `
      );
    }
    events() {
      un(".crs-more", "More with Setapp", "Benefits", 0);
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = ii, document.head.appendChild(t);
    }
  }
  const ri = `.home {
  background: #1a1a1d;
}
`;
  gn({ name: "4th EXP on HP", dev: "OS" }), vn("exp_hp");
  class si {
    constructor() {
      this.device = window.innerWidth < 768 ? "mobile" : "desktop", this.init();
    }
    init() {
      if (this.getAppData(), !(this.device === "mobile" || location.pathname !== "/"))
        try {
          new oi(), new Qo(), new ai(), this.addStyles();
        } catch (t) {
          console.error("Error initializing sections:", t);
        }
    }
    getAppData() {
      const t = document.querySelectorAll("app-details");
      Array.from(t).map((n) => {
        const o = n.getAttribute("name") || "", i = n.getAttribute("iconsrc") || "", r = n.getAttribute("description") || "", p = n.getAttribute("url") || "", c = n.getAttribute("platforms") || "", l = n.getAttribute("rating") || "";
        return {
          name: o,
          icon: i,
          description: r,
          url: p,
          platforms: c,
          rating: l
        };
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = ri, document.head.appendChild(t);
    }
  }
  new si();
})();
