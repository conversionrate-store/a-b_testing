(function() {
  "use strict";
  const g = `.sfc-dialog__dialog::backdrop {
  background: rgba(0, 0, 0, 0.6);
}

.sfc-unsubscribeFlowEntryDialog__benefits svg path {
  fill: #027db8;
}

.sfc-unsubscribeFlowEntryDialog__bodySecondary {
  color: #555;
}

.sfc-unsubscribeFlowEntryDialog__benefits svg {
  width: 20px;
  height: 20px;
}

.sfc-unsubscribeFlowEntryDialog__inner {
  padding: 0;
}
.sfc-unsubscribeFlowEntryDialog__inner .sfc-dialog__heading {
  font-size: 20px;
}
.sfc-unsubscribeFlowEntryDialog__inner .sfc-unsubscribeFlowEntryDialog__container--gray {
  color: #272727;
}
.sfc-unsubscribeFlowEntryDialog__inner .sfc-unsubscribeFlowEntryDialog__question {
  font-weight: 600;
}

.sfc-dialog__closeWrapper {
  top: 20px;
  right: 20px;
}
.sfc-dialog__closeWrapper iconify-icon {
  font-size: 30px;
  color: white;
}

.sfc-unsubscribeFlowEntryDialog__col--1 {
  padding: 30px 18px 30px 30px;
}
.sfc-unsubscribeFlowEntryDialog__col--1 .sfc-button--cta {
  background: #017922 !important;
}

@media (max-width: 768px) {
  .sfc-unsubscribeFlowEntryDialog__heading {
    padding-right: 46px;
  }
  .sfc-unsubscribeFlowEntryDialog__inner .sfc-unsubscribeFlowEntryDialog__bodySecondary {
    margin: 13px 0;
  }
  .sfc-unsubscribeFlowEntryDialog__inner .sfc-unsubscribeFlowEntryDialog__col--1 {
    padding: 16px;
  }
  .sfc-unsubscribeFlowEntryDialog__inner .sfc-unsubscribeFlowEntryDialog__benefits {
    margin: 12px 0;
  }
  .sfc-unsubscribeFlowEntryDialog__inner .sfc-unsubscribeFlowEntryDialog__benefits li {
    font-size: 14px;
    line-height: 24px;
    font-weight: 600;
    line-height: 20px;
  }
  .sfc-unsubscribeFlowEntryDialog__inner .sfc-unsubscribeFlowEntryDialog__benefits svg {
    width: 22px;
    height: 22px;
  }
  .sfc-unsubscribeFlowEntryDialog__inner .sfc-unsubscribeFlowEntryDialog__container--gray {
    font-size: 12px !important;
    text-align: center;
  }
}
.sfc-cancellationPage .sfc-cancellationPage__subheading {
  color: #555 !important;
}
.sfc-cancellationPage .sfc-cancellationPagePromoBlock__heading {
  font-size: 36px !important;
}
.sfc-cancellationPage .sfc-cancellationPagePromoBlock__highlighted {
  color: #027db8 !important;
}
.sfc-cancellationPage .dywm-recurly-recurly-subscription-change .form-submit.sfc-button {
  background: #017922 !important;
  width: 100%;
  max-width: 400px;
}
.sfc-cancellationPage .sfc-cancellationPageFeatures__features {
  gap: 12px;
}
.sfc-cancellationPage .sfc-cancellationPageFeatures__feature {
  line-height: 20px;
  margin: 0 !important;
}
.sfc-cancellationPage .sfc-cancellationPage__stats .sfc-headingSegmented__segment:last-of-type {
  color: #017922 !important;
}
.sfc-cancellationPage .sfc-cancellationPage__stats .sfc-cancellationPageUserStats__value {
  color: #027db8 !important;
}
.sfc-cancellationPage .sfc-cancellationPageCancelForm .form-required::after {
  font-size: 16px;
  color: #027db8 !important;
  padding: 2px 12px;
  border-radius: 20px;
}
.sfc-cancellationPage #edit-reason label {
  display: flex;
  align-items: flex-start;
  gap: 13px;
  margin: 0;
}
.sfc-cancellationPage #edit-reason label .title-wrapper {
  line-height: 24px;
}
.sfc-cancellationPage #edit-reason label span.pointer {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #a5a5a5;
  background: white;
  position: relative;
  display: flex;
  flex-shrink: 0;
  margin: 0 !important;
  box-sizing: border-box;
  top: 2px;
}
.sfc-cancellationPage #edit-reason input {
  width: 1px;
  height: 1px;
  opacity: 0;
  position: absolute;
}
.sfc-cancellationPage #edit-reason input:checked + label span.pointer {
  border: 2px solid #027db8;
}
.sfc-cancellationPage #edit-reason input:checked + label span.pointer::after {
  content: "";
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #027db8;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
}
.sfc-cancellationPage #edit-questions textarea {
  border-radius: 8px !important;
  padding: 16px !important;
  width: 100% !important;
  box-sizing: border-box !important;
}
.sfc-cancellationPage #edit-description--2 {
  border-radius: 12px;
  border: 1px dashed #d6d6d6;
}
.sfc-cancellationPage #edit-keep-subscription {
  background: #017922 !important;
}
.sfc-cancellationPage .sfc-cancellationPageFeatures__iconWrapper svg {
  display: none;
}
@media (max-width: 768px) {
  .sfc-cancellationPage {
    padding-inline: 11px;
  }
  .sfc-cancellationPage .sfc-cancellationPage__subheading {
    color: #027db8 !important;
  }
  .sfc-cancellationPage .sfc-cancellationPagePromoBlock__heading {
    font-size: 20px !important;
  }
  .sfc-cancellationPage .dywm-subscribers-cancellation-survey button {
    width: 100%;
  }
  .sfc-cancellationPage #edit-main {
    padding: 16px !important;
  }
}/*# sourceMappingURL=style.css.map */`, r = (s) => new Promise((n) => {
    const e = document.querySelector(s);
    e && n(e);
    const t = new MutationObserver(() => {
      const i = document.querySelector(s);
      i && (n(i), t.disconnect());
    });
    t.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), u = ({ name: s, dev: n }) => {
    console.log(
      `%c EXP: ${s} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class a {
    constructor(n) {
      this.elements = n instanceof a ? n.elements : typeof n == "string" ? Array.from(document.querySelectorAll(n)) : n instanceof Element ? [n] : Array.isArray(n) ? n : Array.from(n);
    }
    on(n, e, t) {
      return typeof e == "function" && (t = e, e = ""), this.elements.forEach((i) => {
        i.addEventListener(n, function(o) {
          var l;
          if (e !== "") {
            let f = (l = o.target) == null ? void 0 : l.closest(e);
            f && (t == null || t.call(f, o));
          } else
            t == null || t.call(i, o);
        });
      }), this;
    }
    addClass(n) {
      return this.elements.forEach(function(e) {
        e.classList.add(n);
      }), this;
    }
    removeClass(n) {
      return this.elements.forEach(function(e) {
        e.classList.remove(n);
      }), this;
    }
    toggleClass(n) {
      return this.elements.forEach(function(e) {
        e.classList.toggle(n);
      }), this;
    }
    each(n) {
      for (let e of this.elements)
        n(new a(e), this.elements.indexOf(e));
      return this;
    }
    style(n, e) {
      const t = n.split("-").map((i, o) => o === 0 ? i : i.charAt(0).toUpperCase() + i.slice(1)).join("");
      return this.elements.forEach(function(i) {
        i.style[t] = e;
      }), this;
    }
    find(n) {
      const e = this.elements.map((t) => Array.from(t.querySelectorAll(n)));
      return new a(e.flat());
    }
    attr(n, e) {
      return e ? (this.elements.forEach(function(t) {
        t.setAttribute(n, e);
      }), this) : this.elements[0].getAttribute(n);
    }
    text(n) {
      return n ? (this.elements.forEach(function(e) {
        e.textContent = n;
      }), this) : this.elements[0].textContent || "";
    }
    html(n) {
      return n ? (this.elements.forEach(function(e) {
        e.innerHTML = n;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const c = (s) => new a(s), p = (s) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", s, "variant_1"));
    }, 1e3);
  };
  u({ name: "DYWM Unsubscribe Style Update", dev: "YK" }), p("unsub_style_update");
  class b {
    constructor() {
      this.init();
    }
    async init() {
      await r("body"), c("body").elements[0].insertAdjacentHTML("afterbegin", `<style>${g}</style>`), window.location.pathname.includes("/cancel") && (await r("#edit-reason"), c("label").elements.forEach((n) => {
        n.insertAdjacentHTML("afterbegin", '<span class="pointer"></span>');
      }), c(".sfc-cancellationPageFeatures__iconWrapper").elements.forEach((n, e) => {
        n.insertAdjacentHTML(
          "afterbegin",
          `<img src="https://conversionrate-store.github.io/a-b_images/dywm/unsub-${e + 1}.svg" alt="icon" class="sfc-cancellationPageFeatures__icon--custom" />`
        );
      }));
    }
  }
  new b();
})();
//# sourceMappingURL=index.js.map
