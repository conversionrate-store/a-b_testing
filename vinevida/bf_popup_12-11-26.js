(function() {
  "use strict";
  const b = `.crs-bfp-overlay {
  position: fixed;
  inset: 0;
  z-index: 2147483647;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s, visibility 0.25s;
  font-family: "Manrope", sans-serif;
  color: #000;
}
.crs-bfp-overlay.crs-bfp-active {
  opacity: 1;
  visibility: visible;
}
.crs-bfp-overlay *,
.crs-bfp-overlay *::before,
.crs-bfp-overlay *::after {
  box-sizing: border-box;
}

.crs-bfp-popup {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 560px;
  max-width: 100%;
  max-height: calc(100vh - 40px);
  max-height: calc(100dvh - 40px);
  padding: 32px;
  background: #fff;
  overflow: hidden;
}

.crs-bfp-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

.crs-bfp-head-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.crs-bfp-title {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  font-family: inherit;
  font-size: 26px;
  font-weight: 600;
  line-height: 39px;
  letter-spacing: 0.78px;
  text-transform: none;
  color: #000;
  white-space: nowrap;
}

.crs-bfp-subtitle {
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.28px;
}

.crs-bfp-close {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-top: 4px;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  line-height: 0;
}
.crs-bfp-close svg {
  display: block;
}

.crs-bfp-banner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: -4px;
  padding: 12px 16px;
  background: rgba(244, 129, 32, 0.3);
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
}

.crs-bfp-banner-emoji {
  font-size: 20px;
}

.crs-bfp-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: -4px;
  min-height: 121px;
  overflow-y: auto;
  overscroll-behavior: contain;
}

.crs-bfp-item {
  display: flex;
  gap: 16px;
  flex-shrink: 0;
  padding: 16px;
  border: 1px solid #dedede;
  background: #fff;
  color: #000;
  text-decoration: none;
  text-transform: none;
}
.crs-bfp-item * {
  text-transform: none;
}
.crs-bfp-item:hover {
  color: #000;
  text-decoration: none;
}

.crs-bfp-item-img {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 89px;
  height: 89px;
  border: 1px solid #dedede;
  overflow: hidden;
}
.crs-bfp-item-img img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.crs-bfp-item-info {
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
}

.crs-bfp-item-top {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.crs-bfp-item-title {
  font-size: 15px;
  font-weight: 600;
  line-height: 22.5px;
  text-transform: capitalize !important;
}

.crs-bfp-item-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 14px;
  line-height: 22px;
  color: #5f6368;
}

.crs-bfp-variant {
  font-weight: 700;
}

.crs-bfp-dot {
  display: flex;
  line-height: 0;
}

.crs-bfp-item-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.crs-bfp-reviews {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  line-height: 22px;
}

.crs-bfp-stars {
  display: flex;
  line-height: 0;
}

.crs-bfp-star svg {
  display: block;
  transform: scaleY(-1);
}

.crs-bfp-star--empty svg path {
  fill: #dedede;
}

.crs-bfp-item-price {
  margin-left: auto;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: right;
  white-space: nowrap;
}

.crs-bfp-qty {
  margin-right: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #5f6368;
}

.crs-bfp-reserve {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-shrink: 0;
  padding: 12px 16px;
  background: rgba(52, 168, 83, 0.3);
}
.crs-bfp-reserve b {
  font-weight: 700;
}

.crs-bfp-reserve-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  line-height: 0;
}
.crs-bfp-reserve-icon svg {
  width: 24px;
  height: auto;
}

.crs-bfp-reserve-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 14px;
  line-height: 22px;
}
.crs-bfp-reserve-text > b {
  font-size: 16px;
}

.crs-bfp-mob-br {
  display: none;
}

.crs-bfp-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-height: 50px;
  padding: 12px 15px;
  border: 1px solid #000;
  background: #000;
  color: #fff;
  font-size: 12px;
  line-height: 22.44px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  text-decoration: none;
  transition: opacity 0.2s;
}
.crs-bfp-cta:hover, .crs-bfp-cta:focus {
  color: #fff;
  text-decoration: none;
  opacity: 0.85;
}

@media (max-width: 767px) {
  .crs-bfp-overlay {
    padding: 20px;
  }
  .crs-bfp-popup {
    width: 335px;
    padding: 32px 16px;
  }
  .crs-bfp-title {
    font-size: 22px;
    line-height: 32px;
  }
  .crs-bfp-emoji {
    font-size: 24px;
    line-height: 24px;
  }
  .crs-bfp-emoji--lead {
    display: none;
  }
  .crs-bfp-banner {
    justify-content: flex-start;
  }
  .crs-bfp-item {
    gap: 12px;
    padding: 12px;
  }
  .crs-bfp-item-img {
    width: 70px;
    height: 70px;
  }
  .crs-bfp-item-info {
    gap: 12px;
  }
  .crs-bfp-reviews-word {
    display: none;
  }
  .crs-bfp-reserve-text {
    gap: 4px;
  }
  .crs-bfp-mob-br {
    display: inline;
  }
}

/*# sourceMappingURL=style.css.map */
`, o = (t, n, e, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: n,
      event_type: e,
      event_loc: s
    }), l(`Event: ${t} | ${n} | ${e} | ${s}`, "success");
  }, g = (t) => new Promise((n) => {
    const e = document.querySelector(t);
    e && n(e);
    const s = new MutationObserver(() => {
      const i = document.querySelector(t);
      i && (n(i), s.disconnect());
    });
    s.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), x = ({ name: t, dev: n }) => {
    const e = t.toLowerCase().replace(/\s/g, "_");
    o(`${e}_started`, `Experiment ${t} started`, "other", e), console.log(
      `%c EXP: ${t} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, u = (t) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", t, "variant_1"));
    }, 1e3);
  }, m = (t, n) => {
    const e = t === window ? window : document.querySelector(t);
    let s, i, r, c, p;
    function h() {
      s = null, c = 0;
    }
    h(), e.addEventListener("scroll", function() {
      i = t === window ? this.scrollY : this.scrollTop, p = i > s ? "down" : "up", s != null && (c = i - s), s = i, clearTimeout(r), r = setTimeout(h, 50), n(Math.abs(c), p);
    });
  }, l = (t, n = "info") => {
    let e;
    switch (n) {
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
    console.log(`%c>>> ${t}`, `${e} font-size: 16px; font-weight: 600`);
  }, v = `<svg width="20.0004" height="20.0001" viewBox="0 0 20.0004 20.0001" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="02 User">
<path id="Vector" d="M0.976745 20.0001C0.783573 20.0002 0.594729 19.9429 0.434101 19.8356C0.273472 19.7283 0.148276 19.5758 0.074347 19.3973C0.000418327 19.2188 -0.0189212 19.0225 0.0187748 18.833C0.0564707 18.6435 0.149509 18.4695 0.28612 18.3329L18.333 0.286066C18.5162 0.102901 18.7646 0 19.0236 0C19.2827 0 19.5311 0.102901 19.7142 0.286066C19.8974 0.469231 20.0003 0.717657 20.0003 0.976691C20.0003 1.23573 19.8974 1.48415 19.7142 1.66732L1.66737 19.7142C1.57676 19.805 1.4691 19.877 1.35058 19.9261C1.23207 19.9751 1.10502 20.0003 0.976745 20.0001Z" fill="black"/>
<path id="Vector_2" d="M19.0236 20.0001C18.8954 20.0003 18.7683 19.9751 18.6498 19.9261C18.5313 19.877 18.4236 19.805 18.333 19.7142L0.286136 1.66732C0.102971 1.48415 6.99336e-05 1.23573 6.99336e-05 0.976691C6.99336e-05 0.717657 0.102971 0.469231 0.286136 0.286066C0.469301 0.102901 0.717726 0 0.976761 0C1.2358 0 1.48422 0.102901 1.66739 0.286066L19.7143 18.3329C19.8509 18.4695 19.9439 18.6435 19.9816 18.833C20.0193 19.0225 20 19.2188 19.926 19.3973C19.8521 19.5758 19.7269 19.7283 19.5663 19.8356C19.4057 19.9429 19.2168 20.0002 19.0236 20.0001Z" fill="black"/>
</g>
</svg>
`, w = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Icon">
<path id="Vector" d="M16.4883 10.7051L12.4102 7.1543L13.6406 1.88086L9 4.69336L4.35938 1.88086L5.58984 7.1543L1.51172 10.7051L6.89062 11.1621L9 16.1191L11.1094 11.1621L16.4883 10.7051Z" fill="black"/>
</g>
</svg>
`, y = `<svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle id="Ellipse 1" cx="1" cy="1" r="1" fill="#ADADAD"/>
</svg>
`, C = `<svg width="23.9998" height="23.8257" viewBox="0 0 23.9998 23.8257" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group">
<path id="Vector" d="M14.4243 21.7725C14.2264 21.8218 14.0246 21.8656 13.8243 21.9025C13.3008 21.9998 12.9547 22.5033 13.0515 23.0273C13.0993 23.2851 13.2457 23.4999 13.4445 23.64C13.6494 23.7842 13.9101 23.8493 14.1758 23.7999C14.4143 23.7556 14.6547 23.7036 14.8905 23.6447C15.4075 23.5161 15.7225 22.9923 15.5935 22.4756C15.4648 21.9584 14.9416 21.6437 14.4243 21.7725Z" fill="black"/>
<path id="Vector_2" d="M21.5589 8.8405C21.6264 9.04418 21.7555 9.21045 21.9184 9.32534C22.1601 9.49554 22.4763 9.55281 22.778 9.45303C23.2839 9.28505 23.558 8.73954 23.3907 8.2339C23.3144 8.00339 23.2298 7.77217 23.1397 7.54703C22.9418 7.05228 22.3806 6.8114 21.8856 7.0093C21.3911 7.2071 21.1501 7.76845 21.3482 8.26336C21.4239 8.45259 21.4948 8.64683 21.5589 8.8405Z" fill="black"/>
<path id="Vector_3" d="M17.5593 20.395C17.3891 20.5073 17.2135 20.6161 17.0365 20.718C16.5748 20.9843 16.4167 21.5744 16.6829 22.0359C16.7552 22.1614 16.8515 22.264 16.9623 22.3424C17.26 22.5518 17.6642 22.5832 18.0007 22.3893C18.2111 22.268 18.4203 22.1389 18.623 22.0049C19.0674 21.7113 19.1897 21.1127 18.8959 20.6681C18.6022 20.2233 18.0039 20.1011 17.5593 20.395Z" fill="black"/>
<path id="Vector_4" d="M23.9905 11.5351C23.9695 11.0026 23.521 10.5882 22.9883 10.6089C22.4563 10.6299 22.0416 11.0786 22.0625 11.6109C22.0704 11.8145 22.0725 12.021 22.0678 12.2243C22.0603 12.5583 22.2237 12.856 22.4775 13.0349C22.6287 13.1414 22.8122 13.2058 23.0112 13.2103C23.5437 13.2221 23.985 12.7998 23.9968 12.267C24.0021 12.0241 24.0001 11.7779 23.9905 11.5351Z" fill="black"/>
<path id="Vector_5" d="M21.4013 17.8569C20.9743 17.5365 20.3702 17.6235 20.0504 18.0497C19.9279 18.2129 19.7989 18.3742 19.6669 18.5294C19.3217 18.9349 19.3705 19.544 19.776 19.8894C19.7991 19.909 19.8225 19.927 19.8467 19.9439C20.2498 20.2281 20.8101 20.1628 21.1361 19.7803C21.2938 19.5951 21.4475 19.4025 21.5939 19.2075C21.9137 18.7813 21.8272 18.1768 21.4013 17.8569Z" fill="black"/>
<path id="Vector_6" d="M22.8197 14.3692C22.3113 14.2098 21.7699 14.4928 21.6106 15.0012C21.5496 15.1955 21.482 15.3906 21.409 15.5818C21.2489 16.0026 21.4023 16.4655 21.7542 16.7136C21.8187 16.759 21.8898 16.7974 21.967 16.8266C22.4648 17.0166 23.0223 16.7668 23.212 16.2688C23.2986 16.0416 23.379 15.8094 23.4517 15.5784C23.6109 15.0699 23.3281 14.5286 22.8197 14.3692Z" fill="black"/>
<path id="Vector_7" d="M10.2148 21.9111C9.35222 21.7563 8.52476 21.4925 7.74012 21.1247C7.73084 21.1198 7.72253 21.1143 7.71278 21.1099C7.52788 21.0229 7.34329 20.9296 7.16438 20.8322C7.16376 20.8315 7.16262 20.831 7.16164 20.8306C6.83337 20.6499 6.513 20.4498 6.20175 20.2307C1.66325 17.0337 0.572013 10.7403 3.76927 6.20184C4.4645 5.21533 5.30584 4.39231 6.2438 3.74C6.25536 3.73196 6.26691 3.72396 6.27836 3.71586C9.5836 1.43846 14.0716 1.28498 17.5812 3.62522L16.8274 4.71434C16.6179 5.01748 16.7468 5.23839 17.1137 5.20538L20.388 4.91224C20.7553 4.87922 20.9749 4.56148 20.8762 4.20674L19.9969 1.03879C19.8985 0.683641 19.6464 0.64113 19.4367 0.944223L18.6811 2.03593C16.1055 0.30698 13.0164 -0.352293 9.9502 0.179397C9.64138 0.232845 9.33689 0.298261 9.03659 0.374408C9.03427 0.374821 9.03241 0.375079 9.03055 0.375492C9.01894 0.378329 9.00718 0.382095 8.99588 0.385242C6.35188 1.06422 4.04502 2.60631 2.39893 4.80653C2.38505 4.82299 2.37076 4.83908 2.35766 4.85699C2.30292 4.93071 2.2486 5.00613 2.19541 5.08156C2.10842 5.20517 2.02268 5.33188 1.94065 5.45858C1.93039 5.47385 1.92254 5.48938 1.91357 5.50481C0.555195 7.60974 -0.100002 10.0433 0.0123621 12.5207C0.0126201 12.5289 0.0121557 12.5371 0.0123621 12.5454C0.0232477 12.7874 0.0424392 13.0328 0.0684923 13.2744C0.0698853 13.2899 0.0733418 13.3047 0.0759729 13.3203C0.102903 13.5632 0.136695 13.8066 0.17905 14.05C0.60952 16.5335 1.78103 18.7682 3.5365 20.5071C3.54057 20.5111 3.5448 20.5156 3.54893 20.5198C3.55037 20.5214 3.55197 20.5222 3.55337 20.5237C4.025 20.9889 4.53802 21.4192 5.09039 21.8082C6.53595 22.8268 8.14562 23.5001 9.87431 23.8103C10.3988 23.9046 10.8999 23.5554 10.994 23.0312C11.088 22.5065 10.7392 22.0051 10.2148 21.9111Z" fill="black"/>
<path id="Vector_8" d="M11.4077 4.20514C10.9762 4.20514 10.6267 4.55492 10.6267 4.98575V12.7628L17.7395 16.4397C17.854 16.499 17.9766 16.5269 18.0972 16.5269C18.3797 16.5269 18.6525 16.3731 18.7913 16.1046C18.9891 15.7215 18.8394 15.2509 18.4563 15.053L12.1877 11.8122V4.98575C12.1877 4.55492 11.8386 4.20514 11.4077 4.20514Z" fill="black"/>
</g>
</svg>
`, _ = (t) => `$${(t / 100).toFixed(2)}`, a = (t) => t.replace(/[&<>"']/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[n]), k = (t) => t ? t.replace(/(\.\w+)(\?|$)/, "_200x$1$2") : "", L = (t) => !t || !t.count ? "" : `
    <div class="crs-bfp-reviews">
      <span class="crs-bfp-stars">${Array.from(
    { length: 5 },
    (e, s) => `<span class="crs-bfp-star${s < Math.round(t.rating) ? "" : " crs-bfp-star--empty"}">${w}</span>`
  ).join("")}</span>
      <span class="crs-bfp-reviews-count">${t.count}<span class="crs-bfp-reviews-word"> review${t.count === 1 ? "" : "s"}</span></span>
    </div>`, $ = (t) => {
    const n = t.variant_title && t.variant_title !== "Default Title" ? t.variant_title : "", e = [
      n ? `<span class="crs-bfp-variant">${a(n)}</span>` : "",
      t.product_type ? `<span class="crs-bfp-type">${a(t.product_type)}</span>` : ""
    ].filter(Boolean).join(`<span class="crs-bfp-dot">${y}</span>`), s = t.quantity > 1 ? `<span class="crs-bfp-qty">× ${t.quantity}</span>` : "";
    return `
    <a class="crs-bfp-item" href="${a(t.url)}" data-handle="${a(t.handle)}">
      <span class="crs-bfp-item-img">
        ${t.image ? `<img src="${a(k(t.image))}" alt="${a(t.product_title)}" loading="lazy">` : ""}
      </span>
      <span class="crs-bfp-item-info">
        <span class="crs-bfp-item-top">
          <span class="crs-bfp-item-title">${a(t.product_title)}</span>
          ${e ? `<span class="crs-bfp-item-meta">${e}</span>` : ""}
        </span>
        <span class="crs-bfp-item-bottom">
          <span class="crs-bfp-reviews-slot"></span>
          <span class="crs-bfp-item-price">${s}${_(t.final_line_price)}</span>
        </span>
      </span>
    </a>`;
  }, E = (t) => `
  <div class="crs-bfp-overlay" role="dialog" aria-modal="true" aria-labelledby="crs-bfp-title">
    <div class="crs-bfp-popup">
      <div class="crs-bfp-head">
        <div class="crs-bfp-head-text">
          <h2 class="crs-bfp-title" id="crs-bfp-title">
            ${t.length > 1 ? '<span class="crs-bfp-emoji crs-bfp-emoji--lead">🤩</span>' : ""}
            <span>IT’S ALMOST YOURS!</span>
            <span class="crs-bfp-emoji">🤩</span>
          </h2>
          <p class="crs-bfp-subtitle">Just one step left</p>
        </div>
        <button type="button" class="crs-bfp-close" aria-label="Close">${v}</button>
      </div>

      <div class="crs-bfp-banner">
        <span class="crs-bfp-banner-emoji">🔥</span>
        <span>Your favorite scents are popular — don’t miss out!</span>
      </div>

      <div class="crs-bfp-items">${t.map($).join("")}</div>

      <div class="crs-bfp-reserve">
        <span class="crs-bfp-reserve-icon">${C}</span>
        <span class="crs-bfp-reserve-text">
          <b>Your cart isn't reserved</b>
          <span>Complete your order before the <br class="crs-bfp-mob-br">🖤 <b>Black Friday</b> offer ends!</span>
        </span>
      </div>

      <a class="crs-bfp-cta" href="/checkout">COMPLETE MY ORDER</a>
    </div>
  </div>`;
  x({ name: "Black Friday exit popup", dev: "AI" }), u("exp_bf_exit_popup");
  const f = "crs_bf_exit_popup_shown", d = "crs_bf_reviews_cache", S = 100, M = 5e3;
  class j {
    constructor() {
      this.overlay = null, this.armed = !1, this.opening = !1, this.init();
    }
    get isMobile() {
      return window.matchMedia("(max-width: 767px)").matches;
    }
    async init() {
      /^\/(checkout|account)/.test(location.pathname) || this.wasShown() || (await g("body"), document.head.insertAdjacentHTML("beforeend", `<style class="crs-bfp-style">${b}</style>`), setTimeout(() => {
        this.armed = !0, this.prefetchReviews();
      }, M), this.bindTriggers());
    }
    // Warm the reviews cache so stars are ready the moment the popup opens
    async prefetchReviews() {
      try {
        const n = await this.fetchCart();
        await Promise.all([...new Set(n.items.map((e) => e.handle))].map((e) => this.getReviews(e)));
      } catch {
      }
    }
    // ─── Triggers ──────────────────────────────────────────────────────────────
    bindTriggers() {
      document.addEventListener("mouseout", (n) => {
        this.isMobile || n.relatedTarget || n.clientY > 0 || this.trigger("mouse leave");
      }), m(window, (n, e) => {
        !this.isMobile || e !== "up" || n < S || this.trigger("fast scroll up");
      });
    }
    async trigger(n) {
      if (!(!this.armed || this.opening || this.wasShown())) {
        this.opening = !0;
        try {
          const e = await this.fetchCart();
          if (!e.item_count) return;
          this.render(e.items), this.open(n);
        } catch (e) {
          l(`BF exit popup: ${e}`, "warn");
        } finally {
          this.opening = !1;
        }
      }
    }
    // ─── Render ────────────────────────────────────────────────────────────────
    render(n) {
      var e;
      (e = this.overlay) == null || e.remove(), document.body.insertAdjacentHTML("beforeend", E(n)), this.overlay = document.querySelector(".crs-bfp-overlay"), this.bindPopup(), this.renderReviews(n);
    }
    async renderReviews(n) {
      const e = [...new Set(n.map((i) => i.handle))];
      (await Promise.all(e.map((i) => this.getReviews(i).then((r) => [i, r])))).forEach(([i, r]) => {
        var c;
        (c = this.overlay) == null || c.querySelectorAll(`.crs-bfp-item[data-handle="${CSS.escape(i)}"] .crs-bfp-reviews-slot`).forEach((p) => p.innerHTML = L(r));
      });
    }
    // ─── Open / close ──────────────────────────────────────────────────────────
    open(n) {
      this.overlay && (document.body.appendChild(this.overlay), requestAnimationFrame(() => {
        var e;
        return (e = this.overlay) == null ? void 0 : e.classList.add("crs-bfp-active");
      }), document.documentElement.style.overflow = "hidden", sessionStorage.setItem(f, "true"), o("exp_bf_exit_popup_view", `Exit popup shown (${n})`, "view", "Exit popup"));
    }
    close(n) {
      var e;
      (e = this.overlay) == null || e.classList.remove("crs-bfp-active"), document.documentElement.style.overflow = "", o("exp_bf_exit_popup_close", n, "click", "Exit popup");
    }
    bindPopup() {
      const n = this.overlay;
      n.querySelector(".crs-bfp-close").addEventListener("click", () => this.close("Close button")), n.addEventListener("click", (e) => {
        e.target === n && this.close("Overlay");
      }), document.addEventListener("keydown", (e) => {
        e.key === "Escape" && n.classList.contains("crs-bfp-active") && this.close("Escape");
      }), n.querySelector(".crs-bfp-cta").addEventListener("click", () => {
        o("exp_bf_exit_popup_cta", "Complete my order", "click", "Exit popup");
      }), n.querySelectorAll(".crs-bfp-item").forEach(
        (e) => e.addEventListener(
          "click",
          () => o("exp_bf_exit_popup_item", e.dataset.handle || "", "click", "Exit popup")
        )
      );
    }
    // ─── Data ──────────────────────────────────────────────────────────────────
    wasShown() {
      try {
        return sessionStorage.getItem(f) === "true";
      } catch {
        return !1;
      }
    }
    async fetchCart() {
      const n = await fetch("/cart.js", { headers: { Accept: "application/json" } });
      if (!n.ok) throw new Error(`cart.js ${n.status}`);
      return n.json();
    }
    /**
     * Stamped renders the count client-side, but the theme prints it server-side as
     * aria-label="Rated 5.0 out of 5, 9 reviews" on the PDP — parse that.
     */
    async getReviews(n) {
      const e = this.readReviewsCache();
      if (n in e) return e[n];
      let s = null;
      try {
        const r = (await (await fetch(`/products/${n}`)).text()).match(/Rated\s+([\d.]+)\s+out of 5,\s*(\d+)\s+reviews?/i);
        r && (s = { rating: parseFloat(r[1]), count: parseInt(r[2], 10) });
      } catch {
        l(`BF exit popup: reviews for ${n} failed`, "warn");
      }
      e[n] = s;
      try {
        sessionStorage.setItem(d, JSON.stringify(e));
      } catch {
      }
      return s;
    }
    readReviewsCache() {
      try {
        return JSON.parse(sessionStorage.getItem(d) || "{}");
      } catch {
        return {};
      }
    }
  }
  new j();
})();
//# sourceMappingURL=index.js.map
