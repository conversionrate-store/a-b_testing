(function() {
  "use strict";
  const h = `.vvdocs-hidden {
  display: none !important;
}

.vvdocs-link {
  position: relative;
  top: -6px;
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  text-transform: none;
  font-family: "Manrope", sans-serif;
  font-size: 16px;
  line-height: 29.92px;
  letter-spacing: 0.48px;
  color: #0075ff;
  text-decoration: underline;
  text-decoration-thickness: 8%;
}
.vvdocs-link svg {
  flex-shrink: 0;
  margin: 0 1px;
}
.vvdocs-link:hover {
  color: #0071ce;
}

.vvdocs-wrap {
  margin-top: 32px;
}

.vvdocs {
  display: flex;
  align-items: flex-start;
  gap: 32px;
  padding: 32px 30px;
  background: #fff;
  border: 1px solid #e1e3e4;
  border-radius: 3px;
  font-family: "Manrope", sans-serif;
  color: #000;
}
@media (max-width: 768px) {
  .vvdocs {
    flex-direction: column;
    padding: 42px 20px;
    border-width: 1px 0;
    border-radius: 0;
  }
}
.vvdocs__main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  min-width: 0;
}
@media (max-width: 768px) {
  .vvdocs__main {
    display: contents;
  }
}
.vvdocs__title {
  align-self: stretch;
  margin: 0;
  font-size: 26px;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: 0.78px;
  text-transform: uppercase;
  color: #000;
}
.vvdocs__list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 280px));
  gap: 12px;
}
@media (max-width: 768px) {
  .vvdocs__list {
    order: 2;
    grid-template-columns: 100%;
    width: 100%;
  }
}
.vvdocs--expanded:not(.vvdocs--fragrance) .vvdocs__main {
  flex: 1;
}
@media (min-width: 769px) {
  .vvdocs--expanded:not(.vvdocs--fragrance) .vvdocs__list {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    width: 100%;
  }
}
.vvdocs__item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
  background: #fff;
  border: 1px solid #e2e3e4;
}
.vvdocs__item--hidden {
  display: none;
}
.vvdocs--expanded .vvdocs__item--hidden {
  display: flex;
}
.vvdocs__info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
@media (max-width: 768px) {
  .vvdocs__info {
    gap: 4px;
  }
}
.vvdocs__short, .vvdocs__meta {
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 2px;
  color: #7f8b8d;
}
@media (min-width: 769px) {
  .vvdocs__short, .vvdocs__desc {
    display: none;
  }
}
.vvdocs__name {
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0.28px;
  text-transform: uppercase;
  color: #000;
}
.vvdocs__desc {
  font-size: 14px;
  line-height: 22px;
  color: #5f6368;
}
@media (max-width: 768px) {
  .vvdocs__meta {
    margin-top: 8px;
  }
}
.vvdocs__download {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  padding: 0 14px;
  border: 1px solid #000;
  box-shadow: 0 1px 1px rgba(225, 227, 228, 0.2);
  font-size: 12px;
  line-height: 22.44px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  transition: background 0.2s, color 0.2s;
}
.vvdocs__download:hover {
  background: #000;
  color: #fff;
}
.vvdocs__more {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0;
  background: none;
  border: none;
  font-family: inherit;
  font-size: 12px;
  line-height: 22.44px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
}
.vvdocs__more span {
  text-decoration: underline;
  text-decoration-thickness: 10%;
}
@media (max-width: 768px) {
  .vvdocs__more {
    order: 3;
    gap: 8px;
    width: 100%;
    min-height: 48px;
    background: #000;
    font-size: 11.3px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 1.688px;
    color: #fff;
  }
  .vvdocs__more span {
    text-decoration: none;
  }
}
.vvdocs__note {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 0 1 403px;
  padding-top: 59px;
}
@media (max-width: 768px) {
  .vvdocs__note {
    order: 1;
    flex: none;
    padding-top: 0;
  }
}
.vvdocs__note-head {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0.28px;
}
.vvdocs__note-head svg {
  flex-shrink: 0;
}
.vvdocs__note-text {
  margin: 0;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.28px;
  color: #5f6368;
}
@media (min-width: 769px) {
  .vvdocs--fragrance .vvdocs__item {
    min-height: 168px;
  }
}
@media (min-width: 769px) and (max-width: 1199px) {
  .vvdocs--fragrance {
    flex-direction: column;
    gap: 24px;
  }
  .vvdocs--fragrance .vvdocs__note {
    flex: none;
    padding-top: 0;
  }
}

/*# sourceMappingURL=style.css.map */
`, d = (o, e, n, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: o,
      event_desc: e,
      event_type: n,
      event_loc: t
    }), l(`Event: ${o} | ${e} | ${n} | ${t}`, "success");
  }, u = (o) => new Promise((e) => {
    const n = document.querySelector(o);
    n && e(n);
    const t = new MutationObserver(() => {
      const s = document.querySelector(o);
      s && (e(s), t.disconnect());
    });
    t.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), g = ({ name: o, dev: e }) => {
    const n = o.toLowerCase().replace(/\s/g, "_");
    d(`${n}_started`, `Experiment ${o} started`, "other", n), console.log(
      `%c EXP: ${o} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, x = (o, e, n, t, s = 1e3, i = 0.5) => {
    let a, r;
    if (a = new IntersectionObserver(
      function(c) {
        c[0].isIntersecting === !0 ? r = setTimeout(() => {
          d(
            e,
            c[0].target.dataset.visible || t,
            "view",
            n
          ), a.disconnect();
        }, s) : (l("Element is not fully visible", "warn"), clearTimeout(r));
      },
      { threshold: [i] }
    ), typeof o == "string") {
      const c = document.querySelector(o);
      c && a.observe(c);
    } else
      a.observe(o);
  }, l = (o, e = "info") => {
    let n;
    switch (e) {
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
    console.log(`%c>>> ${o}`, `${n} font-size: 16px; font-weight: 600`);
  }, p = {
    files: `<svg xmlns="http://www.w3.org/2000/svg" width="15.4688" height="18" viewBox="0 0 15.4688 18" fill="none">
    <path d="M14.7656 7.03125C14.3773 7.03125 14.0625 7.34604 14.0625 7.73438V13.0781C14.0625 13.4658 13.7471 13.7812 13.3594 13.7812H4.92188C4.53417 13.7812 4.21875 13.4658 4.21875 13.0781V2.10938C4.21875 1.72167 4.53417 1.40625 4.92188 1.40625H9.84375V3.51562C9.84375 4.67873 10.79 5.625 11.9531 5.625H14.7656C15.05 5.625 15.3064 5.45368 15.4152 5.19096C15.5241 4.9282 15.4639 4.62579 15.2628 4.4247L11.0441 0.205945C10.9089 0.0708398 10.725 0 10.5469 0H4.92188C3.75877 0 2.8125 0.946266 2.8125 2.10938V2.8125H2.10938C0.946266 2.8125 0 3.75877 0 4.92188V15.8906C0 17.0537 0.946266 18 2.10938 18H10.5469C11.71 18 12.6562 17.0537 12.6562 15.8906V15.1875H13.3594C14.5225 15.1875 15.4688 14.2412 15.4688 13.0781V7.73438C15.4688 7.34604 15.154 7.03125 14.7656 7.03125ZM11.9531 4.21875C11.5654 4.21875 11.25 3.90333 11.25 3.51562V2.40061L13.0681 4.21875H11.9531ZM11.25 15.8906C11.25 16.2783 10.9346 16.5938 10.5469 16.5938H2.10938C1.72167 16.5938 1.40625 16.2783 1.40625 15.8906V4.92188C1.40625 4.53417 1.72167 4.21875 2.10938 4.21875H2.8125V13.0781C2.8125 14.2412 3.75877 15.1875 4.92188 15.1875H11.25V15.8906Z" fill="#0071CE"/>
    <path d="M11.9531 8.4375H6.32812C5.93979 8.4375 5.625 8.12271 5.625 7.73438C5.625 7.34604 5.93979 7.03125 6.32812 7.03125H11.9531C12.3415 7.03125 12.6562 7.34604 12.6562 7.73438C12.6562 8.12271 12.3415 8.4375 11.9531 8.4375Z" fill="#0071CE"/>
    <path d="M11.9531 11.25H6.32812C5.93979 11.25 5.625 10.9352 5.625 10.5469C5.625 10.1585 5.93979 9.84375 6.32812 9.84375H11.9531C12.3415 9.84375 12.6562 10.1585 12.6562 10.5469C12.6562 10.9352 12.3415 11.25 11.9531 11.25Z" fill="#0071CE"/>
  </svg>`,
    reload: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M14.666 7.3337C14.4892 7.3337 14.3196 7.40394 14.1946 7.52896C14.0696 7.65399 13.9994 7.82356 13.9994 8.00037C13.9994 9.18705 13.6475 10.3471 12.9882 11.3338C12.3289 12.3205 11.3918 13.0895 10.2955 13.5436C9.1991 13.9978 7.9927 14.1166 6.82881 13.8851C5.66492 13.6536 4.59583 13.0821 3.75671 12.243C2.9176 11.4039 2.34615 10.3348 2.11464 9.17091C1.88313 8.00702 2.00195 6.80062 2.45608 5.70427C2.9102 4.60791 3.67924 3.67084 4.66593 3.01155C5.65263 2.35226 6.81266 2.00037 7.99935 2.00037C9.0325 1.99851 10.0482 2.26646 10.946 2.7777L10.1947 3.52903C10.1015 3.62227 10.038 3.74104 10.0123 3.87034C9.98659 3.99965 9.99979 4.13367 10.0502 4.25547C10.1007 4.37727 10.1861 4.48138 10.2957 4.55463C10.4053 4.62789 10.5342 4.667 10.666 4.66703H13.3327C13.5095 4.66703 13.6791 4.59679 13.8041 4.47177C13.9291 4.34675 13.9994 4.17718 13.9994 4.00037V1.3337C13.9993 1.20187 13.9602 1.073 13.887 0.963394C13.8137 0.853787 13.7096 0.768361 13.5878 0.717914C13.466 0.667467 13.332 0.654265 13.2027 0.679977C13.0734 0.705689 12.9546 0.76916 12.8614 0.862366L11.9207 1.80037C10.7487 1.05569 9.3879 0.662397 7.99935 0.667033C6.54896 0.667033 5.13113 1.09713 3.92517 1.90292C2.71921 2.70872 1.77928 3.85403 1.22424 5.19402C0.669193 6.53401 0.523969 8.0085 0.806927 9.43103C1.08989 10.8536 1.78832 12.1602 2.8139 13.1858C3.83949 14.2114 5.14616 14.9098 6.56869 15.1928C7.99122 15.4757 9.46571 15.3305 10.8057 14.7755C12.1457 14.2204 13.291 13.2805 14.0968 12.0745C14.9026 10.8686 15.3327 9.45076 15.3327 8.00037C15.3327 7.82356 15.2624 7.65399 15.1374 7.52896C15.0124 7.40394 14.8428 7.3337 14.666 7.3337Z" fill="currentColor"/>
  </svg>`,
    note: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
    <path d="M25.6125 21.0656L24.4219 18.4125L24.6562 16.5094C24.7406 15.8438 24.5344 15.1687 24.0844 14.6719C23.6438 14.1656 22.9969 13.8844 22.3312 13.8844H18.9656C18.2906 13.8844 17.6531 14.175 17.2125 14.6719C16.7719 15.1781 16.5656 15.8438 16.6406 16.5094L16.875 18.4125L15.6937 21.0656C15.4312 21.6469 15.4875 22.3125 15.8344 22.8469C16.1812 23.3813 16.7719 23.7 17.4094 23.7H19.7156V25.5187C19.7156 26.0344 20.1375 26.4562 20.6531 26.4562C21.1688 26.4562 21.5906 26.0344 21.5906 25.5187V23.7H23.8969C24.5344 23.7 25.125 23.3813 25.4719 22.8469C25.8188 22.3125 25.8656 21.6469 25.6031 21.0562L25.6125 21.0656ZM20.6625 21.8344H17.4281L18.7125 18.9375C18.7781 18.7781 18.8063 18.6094 18.7875 18.4406L18.5156 16.275C18.4969 16.0969 18.5719 15.9656 18.6281 15.9094C18.6844 15.8531 18.7969 15.75 18.975 15.75H22.3406C22.5187 15.75 22.6406 15.8437 22.6875 15.9094C22.7438 15.9656 22.8281 16.0969 22.8 16.275L22.5281 18.4406C22.5094 18.6094 22.5281 18.7875 22.6031 18.9375L23.9062 21.825H20.6719L20.6625 21.8344ZM14.5312 25.1063C14.5312 25.6219 14.1094 26.0438 13.5938 26.0438H7.96875C5.89687 26.0438 4.21875 24.3656 4.21875 22.2938V7.29375C4.21875 5.22188 5.89687 3.54375 7.96875 3.54375H21.0938C23.1656 3.54375 24.8438 5.22188 24.8438 7.29375V11.0438C24.8438 11.5594 24.4219 11.9813 23.9062 11.9813C23.3906 11.9813 22.9688 11.5594 22.9688 11.0438V7.29375C22.9688 6.2625 22.125 5.41875 21.0938 5.41875H7.96875C6.9375 5.41875 6.09375 6.2625 6.09375 7.29375V22.2938C6.09375 23.325 6.9375 24.1688 7.96875 24.1688H13.5938C14.1094 24.1688 14.5312 24.5906 14.5312 25.1063ZM19.1906 8.23125C19.7062 8.23125 20.1281 8.65313 20.1281 9.16875C20.1281 9.68438 19.7062 10.1063 19.1906 10.1063H9.84375C9.32812 10.1063 8.90625 9.68438 8.90625 9.16875C8.90625 8.65313 9.32812 8.23125 9.84375 8.23125H19.1906ZM15.4406 13.8563C15.4406 14.3719 15.0188 14.7938 14.5031 14.7938H9.84375C9.32812 14.7938 8.90625 14.3719 8.90625 13.8563C8.90625 13.3406 9.32812 12.9188 9.84375 12.9188H14.5031C15.0188 12.9188 15.4406 13.3406 15.4406 13.8563ZM9.84375 19.4813C9.32812 19.4813 8.90625 19.0594 8.90625 18.5438C8.90625 18.0281 9.32812 17.6063 9.84375 17.6063H13.5656C14.0813 17.6063 14.5031 18.0281 14.5031 18.5438C14.5031 19.0594 14.0813 19.4813 13.5656 19.4813H9.84375Z" fill="black"/>
  </svg>`
  }, _ = (o) => (
    /* HTML */
    `
  <a href="#vvdocs" class="vvdocs-link">${p.files}<span>${o} for this product</span></a>
`
  ), v = (o) => ["PDF", o.size, o.date].filter(Boolean).join(" · "), C = (o, e) => (
    /* HTML */
    `
  <div class="vvdocs__item${e ? " vvdocs__item--hidden" : ""}" data-key="${o.key}">
    <div class="vvdocs__info">
      <span class="vvdocs__short">${o.short}</span>
      <span class="vvdocs__name">${o.title}</span>
      ${o.desc ? `<span class="vvdocs__desc">${o.desc}</span>` : ""}
      <span class="vvdocs__meta">${v(o)}</span>
    </div>
    <a class="vvdocs__download" href="${o.url}" target="_blank" rel="noopener">Download</a>
  </div>
`
  ), y = (o, e) => (
    /* HTML */
    `
  <div class="vvdocs__note">
    <div class="vvdocs__note-head">${p.note}<span>${o}</span></div>
    <p class="vvdocs__note-text">${e}</p>
  </div>
`
  ), w = (o, e, n, t) => (
    /* HTML */
    `
  <div class="container container--flush vvdocs-wrap">
    <section id="vvdocs" class="vvdocs${n ? " vvdocs--fragrance" : ""}">
      <div class="vvdocs__main">
        <h2 class="vvdocs__title">Safety &amp; Compliance</h2>
        <div class="vvdocs__list">${o.map((s, i) => C(s, i >= e)).join("")}</div>
        ${o.length > e ? `<button type="button" class="vvdocs__more">${p.reload}<span>Load more</span></button>` : ""}
      </div>
      ${t ? y(t.title, t.text) : ""}
    </section>
  </div>
`
  ), b = {
    "certificate of analysis": {
      short: "COA",
      title: "Certificate of Analysis",
      desc: "Chemical composition and quality test results for this material."
    },
    "safety data sheet": {
      short: "SDS",
      title: "Safety Data Sheet",
      desc: "Hazard classification, safe handling, storage and emergency measures"
    },
    "gcms analysis": {
      short: "GC/MS",
      title: "GC/MS Analysis",
      desc: "Chromatographic breakdown of every constituent in the oil."
    },
    "ifra statement": {
      short: "IFRA",
      title: "IFRA Statement",
      desc: "Maximum safe usage levels by product category under IFRA standards."
    },
    "safety synopsis": {
      short: "Synopsis",
      title: "Safety Synopsis",
      desc: "Key safety considerations and recommended dilution for this oil."
    },
    "gluten free statement": {
      short: "Gluten",
      title: "Gluten Free Statement",
      desc: "Confirms this material contains no gluten."
    },
    "impurities statement": {
      short: "Impurities",
      title: "Impurities Statement",
      desc: "Declaration of residual impurities and contaminants."
    },
    "gmo statement": {
      short: "GMO",
      title: "GMO Statement",
      desc: "Confirms the GMO status of the source material."
    },
    "natural statement": {
      short: "Natural",
      title: "Natural Statement",
      desc: "Confirms this product is 100% pure and natural."
    },
    "sewage sludge statement": {
      short: "Sludge",
      title: "Sewage Sludge Statement",
      desc: "Confirms no sewage sludge was used in cultivation."
    }
  }, k = ["certificate of analysis", "safety data sheet", "gcms analysis"], S = ["certificate of analysis", "safety data sheet", "ifra statement"], m = 3;
  g({ name: "PDP Documents", dev: "AI" });
  const L = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  class H {
    constructor() {
      this.isFragrance = !1, this.init();
    }
    async init() {
      var i, a, r;
      const e = await u("#tabs-content");
      if (document.getElementById("vvdocs")) return;
      const n = Array.from(e.querySelectorAll('#tab3 a[href*=".pdf"]'));
      if (!n.length) {
        l("PDP Documents: no documents in #tab3, skipping", "warn");
        return;
      }
      const t = ((r = (a = (i = window.ShopifyAnalytics) == null ? void 0 : i.meta) == null ? void 0 : a.product) == null ? void 0 : r.type) ?? "";
      this.isFragrance = /fragrance/i.test(t);
      const s = this.sortDocs(n.map((c) => this.parseDoc(c)));
      document.head.insertAdjacentHTML("beforeend", `<style class="vvdocs-style">${h}</style>`), this.hideDocumentsTab(), this.renderBlock(s), this.renderLink(s), this.fillSizes(s);
    }
    parseDoc(e) {
      var r, c;
      const n = (((r = e.querySelector("b")) == null ? void 0 : r.textContent) || ((c = e.querySelector("img")) == null ? void 0 : c.alt) || "").trim(), t = n.toLowerCase().replace(/\s+/g, " "), s = b[t] ?? { short: n, title: n, desc: "" }, i = e.href.match(/(\d{2})-(\d{2})-(\d{4})\.pdf/i), a = i ? `${L[+i[1] - 1] ?? ""} ${i[3]}`.trim() : "";
      return { ...s, key: t, url: e.href, date: a, size: "" };
    }
    sortDocs(e) {
      const n = this.isFragrance ? S : k, t = (s) => {
        const i = n.indexOf(s.key);
        return i === -1 ? n.length : i;
      };
      return [...e].sort((s, i) => t(s) - t(i));
    }
    hideDocumentsTab() {
      var e, n;
      (n = (e = document.querySelector('#tabs-nav a[href="#tab3"]')) == null ? void 0 : e.closest("li")) == null || n.classList.add("vvdocs-hidden");
    }
    // Fragrance PDPs render a standalone "Important Note" card — its copy moves
    // into the right column of our block and the original card is hidden.
    takeImportantNote() {
      var t;
      if (!this.isFragrance) return null;
      const e = Array.from(document.querySelectorAll(".quick-view-note")).find(
        (s) => {
          var i;
          return /important note/i.test(((i = s.querySelector("h3")) == null ? void 0 : i.textContent) ?? "");
        }
      ), n = (t = e == null ? void 0 : e.querySelector("p")) == null ? void 0 : t.innerHTML.trim();
      return !e || !n ? null : (e.classList.add("vvdocs-hidden"), { title: "Important note", text: n });
    }
    renderBlock(e) {
      var s, i;
      const n = (s = document.querySelector(".product-block-list__item--description")) == null ? void 0 : s.closest(".container");
      if (!n) {
        l("PDP Documents: description container not found", "error");
        return;
      }
      n.insertAdjacentHTML("beforebegin", w(e, m, this.isFragrance, this.takeImportantNote()));
      const t = document.getElementById("vvdocs");
      (i = t.querySelector(".vvdocs__more")) == null || i.addEventListener("click", (a) => {
        t.classList.add("vvdocs--expanded"), a.currentTarget.remove(), d("pdp_docs_load_more", "Load more clicked", "click", "Safety & Compliance");
      }), t.querySelectorAll(".vvdocs__download").forEach((a) => {
        a.addEventListener("click", () => {
          var c, f;
          const r = ((f = (c = a.closest(".vvdocs__item")) == null ? void 0 : c.querySelector(".vvdocs__name")) == null ? void 0 : f.textContent) ?? "";
          d("pdp_docs_download", `Download: ${r}`, "click", "Safety & Compliance");
        });
      }), x(t, "pdp_docs_view", "Safety & Compliance", "Documents block visible");
    }
    renderLink(e) {
      const n = document.querySelector(".product-meta__sku");
      if (!n) return;
      const t = e.slice(0, m).map((i) => i.short), s = t.length > 1 ? `${t.slice(0, -1).join(", ")} and ${t[t.length - 1]}` : t[0];
      n.insertAdjacentHTML("afterend", _(s)), n.parentElement.querySelector(".vvdocs-link").addEventListener("click", (i) => {
        i.preventDefault(), i.stopPropagation();
        const a = document.getElementById("vvdocs");
        a && (window.scrollTo({ top: a.getBoundingClientRect().top + window.scrollY - 20, behavior: "smooth" }), d("pdp_docs_link_click", `${s} for this product`, "click", "Buy box"));
      });
    }
    // Shopify CDN answers HEAD with Content-Length and `access-control-allow-origin: *`.
    // Sizes fill in after render; a failed lookup just leaves the size out.
    async fillSizes(e) {
      await Promise.all(
        e.map(async (n) => {
          try {
            const t = await fetch(n.url, { method: "HEAD" }), s = Number(t.headers.get("content-length"));
            if (!t.ok || !s) return;
            n.size = s >= 1024 * 1024 ? `${(s / 1024 / 1024).toFixed(1)} MB` : `${Math.round(s / 1024)} KB`;
            const i = document.querySelector(`#vvdocs .vvdocs__item[data-key="${n.key}"] .vvdocs__meta`);
            i && (i.textContent = v(n));
          } catch {
            l(`PDP Documents: size lookup failed for ${n.url}`, "warn");
          }
        })
      );
    }
  }
  new H();
})();
//# sourceMappingURL=index.js.map
