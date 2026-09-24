(function() {
  "use strict";
  const w = `.pfg {
  width: 100%;
  box-sizing: border-box;
  padding: 16px 24px;
  border-radius: 14px;
  background: rgba(236, 106, 31, 0.16);
  font-family: var(--font-body-family, inherit);
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: right;
  margin-top: 16px;
}

.pfg__head {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
}

.pfg__icon {
  flex: 0 0 20px;
}

.pfg__title {
  margin: 0;
  font-size: 15.6px;
  line-height: 19.2px;
  font-weight: 700;
  color: #000000;
}

.pfg__text {
  margin: 0;
  width: 100%;
  font-size: 13px;
  line-height: 21px;
  font-weight: 400;
  color: #000000;
}
.pfg__text strong {
  font-weight: 700;
}

.pfg__toggle {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 4px;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 13.1px;
  font-weight: 700;
  color: #ec6a1f;
  text-decoration: underline;
  text-underline-offset: 2px;
  direction: rtl;
}

.pfg__chevron {
  flex: 0 0 12px;
  transition: transform 0.2s ease;
}

.pfg__toggle.is-open .pfg__chevron {
  transform: rotate(180deg);
}

.pfg__details {
  display: none;
  width: 100%;
  overflow: hidden;
}
.pfg__details p {
  margin: 8px 0 0;
  font-size: 12.5px;
  line-height: 1.7;
  color: #000000;
}

@media screen and (max-width: 749px) {
  .pfg {
    padding: 14px 18px;
  }
}

/*# sourceMappingURL=style.css.map */
`, f = (o, e, t, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: o,
      event_desc: e,
      event_type: t,
      event_loc: n
    }), g(`Event: ${o} | ${e} | ${t} | ${n}`, "success");
  }, p = (o) => new Promise((e) => {
    const t = document.querySelector(o);
    t && e(t);
    const n = new MutationObserver(() => {
      const i = document.querySelector(o);
      i && (e(i), n.disconnect());
    });
    n.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), m = ({ name: o, dev: e }) => {
    const t = o.toLowerCase().replace(/\s/g, "_");
    f(`${t}_started`, `Experiment ${o} started`, "other", t), console.log(
      `%c EXP: ${o} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class a {
    constructor(e) {
      this.elements = e instanceof a ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, t, n) {
      return typeof t == "function" && (n = t, t = ""), this.elements.forEach((i) => {
        i.addEventListener(e, function(r) {
          var c;
          if (t !== "") {
            let l = (c = r.target) == null ? void 0 : c.closest(t);
            l && (n == null || n.call(l, r));
          } else
            n == null || n.call(i, r);
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
      const n = e.split("-").map((i, r) => r === 0 ? i : i.charAt(0).toUpperCase() + i.slice(1)).join("");
      return this.elements.forEach(function(i) {
        i.style[n] = t;
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
  const x = (o) => new a(o), b = (o, e, t, n, i = 1e3, r = 0.5) => {
    let c, l;
    if (c = new IntersectionObserver(
      function(d) {
        d[0].isIntersecting === !0 ? l = setTimeout(() => {
          f(
            e,
            d[0].target.dataset.visible || n,
            "view",
            t
          ), c.disconnect();
        }, i) : (g("Element is not fully visible", "warn"), clearTimeout(l));
      },
      { threshold: [r] }
    ), typeof o == "string") {
      const d = document.querySelector(o);
      d && c.observe(d);
    } else
      c.observe(o);
  }, g = (o, e = "info") => {
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
    console.log(`%c>>> ${o}`, `${t} font-size: 16px; font-weight: 600`);
  }, _ = (o, e) => {
    const t = e;
    o.style.transition = `height ${t}ms`, o.style.height = "0", setTimeout(() => {
      o.style.display = "none";
    }, t);
  }, v = (o, e) => {
    const t = e;
    o.style.transition = `height ${t}ms`, o.style.overflow = "hidden", o.style.display = "block", o.style.height = "auto";
    const n = o.clientHeight;
    o.style.height = "0", setTimeout(() => {
      o.style.height = n + "px";
    }, 0);
  }, s = {
    title: "הבטחת התאמה מושלמת",
    bodyPrefix: "מידה או דגם לא מתאימים - ",
    exchangeFree: "מחליפים בחינם",
    bodyMid: ". הכיסא לא מתאים בכלל - ",
    pickupRefund: "אוספים אותו ומזכים במלואו",
    bodySuffix: ", בלי שאלות מיותרות. ",
    daysWord: "יום",
    trialSuffix: " של שימוש אמיתי: לשבת עליו, לעבוד איתו, להרגיש אותו.",
    whatsCovered: "מה כלול בהבטחה",
    // Not in the Figma mock itself (only the collapsed state is designed) —
    // written from the hypothesis's own scope note ("chair-scoped, accessory
    // exception"): flag for product/CX sign-off before this ships.
    detailsText: "ההבטחה חלה על הכיסא עצמו - כולל החלפת דגם, מידת מושב או צבע. אביזרים נלווים שנרכשו בנפרד (הדום, שטיחון, כרית קירור, גלגלים וכדומה) אינם כלולים בהבטחה זו ומנוהלים לפי מדיניות ההחזרות הרגילה של החנות."
  }, C = () => {
    var e, t, n;
    const o = (n = (t = (e = window.ShopifyAnalytics) == null ? void 0 : e.meta) == null ? void 0 : t.product) == null ? void 0 : n.vendor;
    return o && /newton/i.test(o) ? 100 : 30;
  }, h = {
    shield: (
      /* HTML */
      `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <g clip-path="url(#clip0_157_1705)">
      <path
        d="M18.3815 5.14964C18.3713 4.60966 18.3615 4.09956 18.3615 3.60607C18.3615 3.21945 18.0481 2.90602 17.6614 2.90602C14.6675 2.90602 12.3881 2.04561 10.488 0.19822C10.2162 -0.0661198 9.7837 -0.0660265 9.51199 0.19822C7.61214 2.04561 5.33305 2.90602 2.33935 2.90602C1.95274 2.90602 1.6393 3.21945 1.6393 3.60607C1.6393 4.09965 1.62959 4.60994 1.61923 5.15001C1.52328 10.1751 1.39186 17.0571 9.77073 19.9614C9.84503 19.9872 9.9225 20.0001 9.99997 20.0001C10.0774 20.0001 10.155 19.9872 10.2292 19.9614C18.6087 17.057 18.4775 10.1748 18.3815 5.14964ZM10.0001 18.5571C2.81408 15.9467 2.92273 10.2282 3.01915 5.1767C3.02494 4.87354 3.03054 4.5797 3.03446 4.29165C5.8384 4.1733 8.08061 3.32362 10.0001 1.65153C11.9197 3.32362 14.1623 4.17339 16.9664 4.29165C16.9703 4.57961 16.9759 4.87326 16.9817 5.17624C17.078 10.2279 17.1866 15.9466 10.0001 18.5571Z"
        fill="#FF4A20"
      />
      <path
        d="M12.4112 7.56828L9.03234 10.9469L7.59052 9.50509C7.31712 9.23179 6.87385 9.23179 6.60055 9.50509C6.32716 9.77858 6.32716 10.2218 6.60055 10.4951L8.53736 12.432C8.67401 12.5686 8.85322 12.6369 9.03234 12.6369C9.21146 12.6369 9.39068 12.5686 9.52733 12.432L13.401 8.55834C13.6745 8.28495 13.6745 7.84167 13.4011 7.56837C13.1278 7.29498 12.6846 7.29489 12.4112 7.56828Z"
        fill="#FF4A20"
      />
    </g>
    <defs>
      <clipPath id="clip0_157_1705">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>`
    ),
    chevron: (
      /* HTML */
      `<svg
    class="pfg__chevron"
    width="12"
    height="12"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
  </svg>`
    )
  }, $ = (o) => (
    /* HTML */
    `
  <div class="pfg" dir="rtl">
    <div class="pfg__head">
      ${h.shield}
      <h4 class="pfg__title">${s.title}</h4>
    </div>
    <p class="pfg__text">
      ${s.bodyPrefix}<strong>${s.exchangeFree}</strong>${s.bodyMid}<strong>${s.pickupRefund}</strong>${s.bodySuffix}<strong
        >${o} ${s.daysWord}</strong
      >${s.trialSuffix}
    </p>
    <button type="button" class="pfg__toggle" data-pfg-toggle aria-expanded="false">
      <span>${s.whatsCovered}</span>
      ${h.chevron}
    </button>
    <div class="pfg__details" data-pfg-details>
      <p>${s.detailsText}</p>
    </div>
  </div>
`
  );
  m({ name: "Newton Perfect Fit Guarantee", dev: "YK" });
  const u = "add-to-cart-component", y = "pfgBlock";
  class k {
    constructor() {
      this.injectStyle(), this.mount(), window.addEventListener("libernovo:product-page-swapped", () => this.mount());
      let e;
      window.addEventListener("resize", () => {
        clearTimeout(e), e = window.setTimeout(() => this.mount(), 200);
      });
    }
    // The dev server (app.js) injects the built bundle via Puppeteer's
    // evaluateOnNewDocument, which runs before the parser has reached <head> —
    // document.head is null at that point, not just absent-but-coming-soon.
    // waitEl (already used for DOM targets elsewhere in this file) works here
    // too: it observes `document` itself, which exists from the very start.
    async injectStyle() {
      if (document.getElementById("pfgStyle")) return;
      const e = await p("head");
      document.getElementById("pfgStyle") || e.insertAdjacentHTML("beforeend", `<style id="pfgStyle">${w}</style>`);
    }
    async mount() {
      var i;
      await p(u);
      const e = this.findAnchor();
      if (!e) {
        g("Newton Fit Block: could not resolve anchor after add-to-cart, aborting", "warn");
        return;
      }
      (i = document.getElementById(y)) == null || i.remove();
      const t = document.createElement("div");
      t.id = y, t.innerHTML = $(C()), e.insertAdjacentElement("afterend", t);
      const n = getComputedStyle(e).order;
      n && n !== "auto" && (t.style.order = n), this.bindToggle(t), b(
        t,
        "exp_newton_fit_block_guarantee",
        "PDP perfect fit guarantee block",
        "Perfect fit guarantee block visibility"
      );
    }
    // The PDP renders two add-to-cart-components: the desktop one (hidden via
    // CSS below 749px) and a second, separate one lower on the page inside
    // .mobile-buy-now (hidden above 749px) — not one element reflowed by
    // media query. Picking "the one that isn't in .mobile-buy-now" (an earlier
    // version of this) always anchored to the desktop button, which is
    // display:none-d out on mobile — its wrapper stays in normal flow (empty),
    // so the block rendered far above the real, visible mobile button instead
    // of under it. Checking offsetParent picks whichever one is actually
    // rendered at the current breakpoint.
    findAnchor() {
      const e = Array.from(document.querySelectorAll(u)), t = e.find((i) => i.offsetParent !== null) ?? e[0], n = t == null ? void 0 : t.closest(".buy-buttons-block");
      return (n == null ? void 0 : n.closest(".group-block")) ?? null;
    }
    bindToggle(e) {
      const t = e.querySelector("[data-pfg-toggle]"), n = e.querySelector("[data-pfg-details]");
      !t || !n || x(t).on("click", () => {
        const i = t.getAttribute("aria-expanded") === "true";
        t.setAttribute("aria-expanded", String(!i)), t.classList.toggle("is-open", !i), i ? _(n, 220) : v(n, 220), f(
          "newton_fit_block_whats_covered",
          i ? "What's covered collapsed" : "What's covered expanded",
          "click",
          "PDP perfect fit guarantee block"
        );
      });
    }
  }
  new k();
})();
//# sourceMappingURL=index.js.map
