(function() {
  "use strict";
  const x = `.product-tab__header {
  display: none !important;
}

.product-tab:not(.float-btn-style) > .product-tab__content > .product-tab__content-item > .select-wrapper {
  display: none !important;
}

.product-tab:not(.float-btn-style) > .product-tab__content > .product-tab__content-item > .number-of-days-wrapper {
  display: none !important;
}

.product-tab:not(.float-btn-style) > .product-tab__content > .product-tab__content-item > .product-card-price-wrapper {
  display: none !important;
}

.product-tab:not(.float-btn-style) .product-price-information {
  display: none !important;
}

.product-tab:not(.float-btn-style) > .product-tab__content {
  background: none !important;
  padding: 0 !important;
}

.knps-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: "Open Sans", sans-serif;
  color: #525252;
  margin: 18px 0;
}

.knps-card {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  border: 1px solid #e3e9ee;
  border-radius: 4px;
  background: #fff;
  padding: 16px;
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease;
}
.knps-card--active {
  border-color: #00bb2a;
  background: rgba(0, 187, 42, 0.2);
}
.knps-card--online {
  align-items: center;
  flex-wrap: wrap;
}

.knps-radio {
  flex: 0 0 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #c7d2da;
  margin-top: 1px;
  position: relative;
}
.knps-card--active .knps-radio {
  border-color: #00bb2a;
}
.knps-card--active .knps-radio::after {
  content: "";
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: #00bb2a;
}

.knps-card-body {
  flex: 1 1 auto;
  min-width: 0;
}

.knps-card-top {
  display: grid;
  grid-template-areas: "title" "fee" "badge";
  gap: 6px;
  align-items: start;
}

.knps-title {
  grid-area: title;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 15px;
  color: #1c1c1c;
}
.knps-title svg {
  color: #057222;
  flex: 0 0 20px;
}

.knps-fee {
  grid-area: fee;
  font-size: 13px;
  color: #707070;
}

.knps-badge {
  grid-area: badge;
  justify-self: start;
  display: inline-flex;
  align-items: center;
  background: rgba(0, 187, 42, 0.2);
  color: #057222;
  font-size: 14px;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 4px;
  white-space: nowrap;
  width: -moz-fit-content;
  width: fit-content;
}
.knps-badge--muted {
  background: #e6e6e6;
  color: #707070;
}

.knps-card--disabled {
  cursor: default;
  background: #f5f5f6;
}
.knps-card--disabled .knps-title,
.knps-card--disabled .knps-title svg {
  color: #707070;
}
.knps-card--disabled .knps-title svg {
  filter: grayscale(1);
}

.knps-side {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #057222;
  flex: 0 0 auto;
  margin-left: auto;
}
.knps-side svg {
  flex: 0 0 16px;
}
.knps-side--no {
  color: #b3261e;
}

.knps-store-box {
  margin-top: 10px;
  background: #fff;
  border: 1px solid #e3e9ee;
  border-radius: 4px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;
  text-align: left;
  font-family: inherit;
  cursor: pointer;
}

.knps-store-line {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  min-width: 0;
}
.knps-store-line svg {
  color: #057222;
  flex: 0 0 16px;
}

.knps-store-distance {
  color: #707070;
}
.knps-store-distance:empty {
  display: none;
}

.knps-store-name {
  font-weight: 700;
  color: #1c1c1c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.knps-store-change {
  border: 0;
  background: none;
  padding: 0;
  font-size: 13px;
  color: #26367e;
  text-decoration: underline;
  cursor: pointer;
  flex: 0 0 auto;
  font-family: inherit;
}

.knps-caption {
  margin-top: 8px;
  font-size: 12px;
  color: #707070;
}

@media (min-width: 768px) {
  .knps-card-top {
    grid-template-columns: auto 1fr;
    grid-template-areas: "title badge" "fee fee";
    align-items: center;
    -moz-column-gap: 20px;
         column-gap: 20px;
  }
  .knps-badge {
    justify-self: start;
  }
  .knps-card--online {
    flex-wrap: nowrap;
  }
}
.knps-popup {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
}
.knps-popup[hidden] {
  display: none;
}

.knps-popup-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(20, 30, 40, 0.45);
}

.knps-popup-panel {
  position: relative;
  background: #fff;
  width: min(480px, 100vw - 32px);
  max-height: min(600px, 100vh - 64px);
  display: flex;
  flex-direction: column;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.18);
}

.knps-popup-x {
  position: absolute;
  top: 14px;
  right: 14px;
  border: 0;
  background: none;
  padding: 6px;
  cursor: pointer;
  color: #1c1c1c;
  line-height: 0;
}

.knps-popup-head {
  padding: 24px 44px 12px 24px;
}
.knps-popup-head h3 {
  margin: 0 0 6px;
  font-size: 20px;
  font-weight: 700;
  color: #1c1c1c;
}
.knps-popup-head p {
  margin: 0;
  font-size: 13px;
  color: #707070;
}

.knps-popup-list {
  overflow-y: auto;
  padding: 4px 24px 20px;
}

.knps-popup-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid #e3e9ee;
}
.knps-popup-row:last-child {
  border-bottom: 0;
}

.knps-popup-row-info {
  min-width: 0;
}

.knps-popup-row-line {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
}
.knps-popup-row-line svg {
  color: #057222;
  flex: 0 0 16px;
}

.knps-popup-row-name {
  font-weight: 700;
  color: #1c1c1c;
}

.knps-popup-row-stock {
  margin-top: 4px;
  font-size: 12px;
  font-weight: 600;
  color: #057222;
  background: rgba(0, 187, 42, 0.2);
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
}
.knps-popup-row-stock--no {
  color: #707070;
  background: #eee;
}

.knps-popup-row-btn {
  flex: 0 0 auto;
  border: 0;
  background: #00bb2a;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  padding: 9px 16px;
  border-radius: 4px;
  cursor: pointer;
}
.knps-popup-row-btn:hover {
  background: #045c1c;
}

body.knps-lock {
  overflow: hidden;
}/*# sourceMappingURL=style.css.map */`, l = (t, e, n, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: e,
      event_type: n,
      event_loc: o
    }), b(`Event: ${t} | ${e} | ${n} | ${o}`, "success");
  }, g = (t) => new Promise((e) => {
    const n = document.querySelector(t);
    n && e(n);
    const o = new MutationObserver(() => {
      const s = document.querySelector(t);
      s && (e(s), o.disconnect());
    });
    o.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), C = ({ name: t, dev: e }) => {
    const n = t.toLowerCase().replace(/\s/g, "_");
    l(`${n}_started`, `Experiment ${t} started`, "other", n), console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class d {
    constructor(e) {
      this.elements = e instanceof d ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, n, o) {
      return typeof n == "function" && (o = n, n = ""), this.elements.forEach((s) => {
        s.addEventListener(e, function(i) {
          var r;
          if (n !== "") {
            let p = (r = i.target) == null ? void 0 : r.closest(n);
            p && (o == null || o.call(p, i));
          } else
            o == null || o.call(s, i);
        });
      }), this;
    }
    addClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.add(e);
      }), this;
    }
    removeClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.remove(e);
      }), this;
    }
    toggleClass(e) {
      return this.elements.forEach(function(n) {
        n.classList.toggle(e);
      }), this;
    }
    each(e) {
      for (let n of this.elements)
        e(new d(n), this.elements.indexOf(n));
      return this;
    }
    style(e, n) {
      const o = e.split("-").map((s, i) => i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[o] = n;
      }), this;
    }
    find(e) {
      const n = this.elements.map((o) => Array.from(o.querySelectorAll(e)));
      return new d(n.flat());
    }
    attr(e, n) {
      return n ? (this.elements.forEach(function(o) {
        o.setAttribute(e, n);
      }), this) : this.elements[0].getAttribute(e);
    }
    text(e) {
      return e ? (this.elements.forEach(function(n) {
        n.textContent = e;
      }), this) : this.elements[0].textContent || "";
    }
    html(e) {
      return e ? (this.elements.forEach(function(n) {
        n.innerHTML = e;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const f = (t) => new d(t), y = (t, e, n, o, s = 1e3, i = 0.5) => {
    let r, p;
    r = new IntersectionObserver(
      function(u) {
        u[0].isIntersecting === !0 ? p = setTimeout(() => {
          l(
            e,
            u[0].target.dataset.visible || o,
            "view",
            n
          ), r.disconnect();
        }, s) : (b("Element is not fully visible", "warn"), clearTimeout(p));
      },
      { threshold: [i] }
    );
    {
      const u = document.querySelector(t);
      u && r.observe(u);
    }
  }, b = (t, e = "info") => {
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
    console.log(`%c>>> ${t}`, `${n} font-size: 16px; font-weight: 600`);
  }, c = {
    cart: (
      /* HTML */
      `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <g clip-path="url(#clip0_358_5290)">
      <path
        d="M17.6543 0H2.3457C1.05227 0 0 1.05227 0 2.3457V17.6543C0 18.9477 1.05227 20 2.3457 20H17.6543C18.9477 20 20 18.9477 20 17.6543V2.3457C20 1.05227 18.9477 0 17.6543 0ZM2.3457 1.17188H17.6543C18.3016 1.17188 18.8281 1.69844 18.8281 2.3457V4.6875H1.17188V2.3457C1.17188 1.69844 1.69844 1.17188 2.3457 1.17188ZM17.6543 18.8281H2.3457C1.69844 18.8281 1.17188 18.3016 1.17188 17.6543V5.85938H18.8281V17.6543C18.8281 18.3016 18.3016 18.8281 17.6543 18.8281Z"
        fill="#057222"
      />
      <path
        d="M7.61719 3.51562H17.0703C17.3939 3.51562 17.6562 3.25328 17.6562 2.92969C17.6562 2.60609 17.3939 2.34375 17.0703 2.34375H7.61719C7.29359 2.34375 7.03125 2.60609 7.03125 2.92969C7.03125 3.25328 7.29359 3.51562 7.61719 3.51562Z"
        fill="#057222"
      />
      <path
        d="M2.92969 3.51562C3.25329 3.51562 3.51562 3.25329 3.51562 2.92969C3.51562 2.60608 3.25329 2.34375 2.92969 2.34375C2.60608 2.34375 2.34375 2.60608 2.34375 2.92969C2.34375 3.25329 2.60608 3.51562 2.92969 3.51562Z"
        fill="#057222"
      />
      <path
        d="M5.27344 3.51562C5.59704 3.51562 5.85938 3.25329 5.85938 2.92969C5.85938 2.60608 5.59704 2.34375 5.27344 2.34375C4.94983 2.34375 4.6875 2.60608 4.6875 2.92969C4.6875 3.25329 4.94983 3.51562 5.27344 3.51562Z"
        fill="#057222"
      />
      <path
        d="M13.7608 9.06889H6.42277L6.04289 7.48089C5.98383 7.22272 5.73785 7.02862 5.47305 7.03128H3.25781C2.93422 7.03128 2.67188 7.29362 2.67188 7.61721C2.67188 7.94081 2.93422 8.20315 3.25781 8.20315H5.01074L6.60715 14.8349C6.38184 15.1304 6.24766 15.499 6.24766 15.8985C6.24766 16.8677 7.03621 17.6563 8.00547 17.6563C8.97473 17.6563 9.76328 16.8677 9.76328 15.8985C9.76328 15.6928 9.72746 15.4954 9.66223 15.3117H11.8565C11.7913 15.4953 11.7555 15.6928 11.7555 15.8985C11.7555 16.8677 12.544 17.6563 13.5133 17.6563C14.4825 17.6563 15.2711 16.8677 15.2711 15.8985C15.2711 15.4008 15.0629 14.9512 14.7295 14.6311L15.6705 11.6831C15.8672 11.0667 15.7612 10.4135 15.3796 9.89104C14.9979 9.36854 14.4079 9.06889 13.7608 9.06889ZM13.7608 10.2408C14.0296 10.2408 14.2747 10.3653 14.4332 10.5823C14.5918 10.7993 14.6359 11.0707 14.5541 11.3267L13.6561 14.1399H7.64457L6.92285 11.1597C6.92273 11.1592 6.9227 11.1587 6.92258 11.1582L6.70312 10.2408H13.7608V10.2408ZM8.00543 16.4844C7.68234 16.4844 7.41949 16.2215 7.41949 15.8985C7.41949 15.5754 7.68234 15.3125 8.00543 15.3125C8.32852 15.3125 8.59137 15.5754 8.59137 15.8985C8.59137 16.2215 8.32852 16.4844 8.00543 16.4844ZM13.5132 16.4844C13.1902 16.4844 12.9273 16.2215 12.9273 15.8985C12.9273 15.5754 13.1902 15.3125 13.5132 15.3125C13.8363 15.3125 14.0992 15.5754 14.0992 15.8985C14.0992 16.2215 13.8363 16.4844 13.5132 16.4844Z"
        fill="#057222"
      />
    </g>
    <defs>
      <clipPath id="clip0_358_5290">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>`
    ),
    calendar: (
      /* HTML */
      `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.875 1.25C7.22019 1.25 7.5 1.52983 7.5 1.875V2.5H10.625C10.9702 2.5 11.25 2.77982 11.25 3.125C11.25 3.47018 10.9702 3.75 10.625 3.75H7.5V4.375C7.5 4.72018 7.22019 5 6.875 5C6.52981 5 6.25 4.72018 6.25 4.375V3.75H5C3.61929 3.75 2.5 4.86929 2.5 6.25V15C2.5 16.3807 3.61929 17.5 5 17.5H8.75C9.09519 17.5 9.375 17.7798 9.375 18.125C9.375 18.4702 9.09519 18.75 8.75 18.75H5C2.92893 18.75 1.25 17.0711 1.25 15V6.25C1.25 4.17893 2.92893 2.5 5 2.5H6.25V1.875C6.25 1.52983 6.52981 1.25 6.875 1.25ZM13.125 1.25C13.4702 1.25 13.75 1.52983 13.75 1.875V2.5H15C17.0711 2.5 18.75 4.17893 18.75 6.25V8.75C18.75 9.09519 18.4702 9.375 18.125 9.375C17.7798 9.375 17.5 9.09519 17.5 8.75V6.25C17.5 4.86929 16.3807 3.75 15 3.75H13.75V4.375C13.75 4.72018 13.4702 5 13.125 5C12.7798 5 12.5 4.72018 12.5 4.375V1.875C12.5 1.52983 12.7798 1.25 13.125 1.25ZM5 6.875C4.65482 6.875 4.375 7.15481 4.375 7.5C4.375 7.84519 4.65482 8.125 5 8.125H15C15.3452 8.125 15.625 7.84519 15.625 7.5C15.625 7.15481 15.3452 6.875 15 6.875H5ZM16.0669 14.1919L14.5044 15.7544C14.2604 15.9985 13.8646 15.9985 13.6206 15.7544L12.6831 14.8169C12.439 14.5729 12.439 14.1771 12.6831 13.9331C12.9271 13.689 13.3229 13.689 13.5669 13.9331L14.0625 14.4286L15.1831 13.3081C15.4271 13.064 15.8229 13.064 16.0669 13.3081C16.311 13.5521 16.311 13.9479 16.0669 14.1919ZM6.25 10.9375C6.25 11.4552 5.83027 11.875 5.3125 11.875C4.79473 11.875 4.375 11.4552 4.375 10.9375C4.375 10.4198 4.79473 10 5.3125 10C5.83027 10 6.25 10.4198 6.25 10.9375ZM5.3125 15.625C5.83027 15.625 6.25 15.2052 6.25 14.6875C6.25 14.1698 5.83027 13.75 5.3125 13.75C4.79473 13.75 4.375 14.1698 4.375 14.6875C4.375 15.2052 4.79473 15.625 5.3125 15.625ZM11.25 14.375C11.25 12.6491 12.6491 11.25 14.375 11.25C16.1009 11.25 17.5 12.6491 17.5 14.375C17.5 16.1009 16.1009 17.5 14.375 17.5C12.6491 17.5 11.25 16.1009 11.25 14.375ZM14.375 10C11.9587 10 10 11.9587 10 14.375C10 16.7913 11.9587 18.75 14.375 18.75C16.7913 18.75 18.75 16.7913 18.75 14.375C18.75 11.9587 16.7913 10 14.375 10Z"
      fill="#057222"
    />
  </svg>`
    ),
    check: (
      /* HTML */
      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.00297 1.00391C11.8683 1.00391 15.003 4.13861 15.003 8.00395C15.003 11.8693 11.8683 15.004 8.00297 15.004C4.13764 15.004 1.00293 11.8693 1.00293 8.00395C1.00293 4.13861 4.13764 1.00391 8.00297 1.00391ZM6.54933 10.2776L4.83554 8.56242C4.54358 8.27027 4.54351 7.79387 4.83554 7.50179C5.12763 7.20976 5.60615 7.21159 5.89612 7.50179L7.10433 8.71094L10.1099 5.70533C10.402 5.41324 10.8785 5.41324 11.1705 5.70533C11.4626 5.99736 11.4622 6.47423 11.1705 6.76591L7.63376 10.3027C7.34208 10.5943 6.86521 10.5947 6.57318 10.3027C6.56498 10.2945 6.55706 10.2861 6.54933 10.2776Z"
      fill="#057222"
    />
  </svg>`
    ),
    pin: (
      /* HTML */
      `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
    <path
      d="M6 0C2.692 0 0 2.71067 0 6.04333C0 10.7787 5.436 15.668 5.66733 15.8733C5.76267 15.958 5.88133 16 6 16C6.11867 16 6.23733 15.958 6.33267 15.874C6.564 15.668 12 10.7787 12 6.04333C12 2.71067 9.308 0 6 0ZM6 9.33333C4.162 9.33333 2.66667 7.838 2.66667 6C2.66667 4.162 4.162 2.66667 6 2.66667C7.838 2.66667 9.33333 4.162 9.33333 6C9.33333 7.838 7.838 9.33333 6 9.33333Z"
      fill="#057222"
    />
  </svg>`
    ),
    close: (
      /* HTML */
      `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="13.9492" y="1.62988" width="2.00001" height="16" transform="rotate(45 13.9492 1.62988)" fill="#042DE1" />
    <rect x="2.64062" y="3.0498" width="2.00001" height="16" transform="rotate(-45 2.64062 3.0498)" fill="#042DE1" />
  </svg>`
    )
  }, a = {
    onlineTitle: "Kúpiť online",
    onlineInStock: "Skladom",
    onlineUnavailable: "Nedostupné",
    reserveTitle: "Rezervácia v predajni",
    reserveUnavailableBadge: "Nedostupné v okolí",
    reserveUnavailableCaption: "Dostupné len pri kúpe online",
    changeStore: "Zmeniť predajňu",
    popupTitle: "Vyberte predajňu na odber",
    popupFeePrefix: "Poplatok za odber",
    reserveBtn: "Rezervovať",
    inStock: "Skladom",
    pcs: "ks"
  }, k = (t) => (
    /* HTML */
    `
  <div class="knps-block" id="knpsBlock">
    <div
      class="knps-card knps-card--online ${t.active === "online" ? "knps-card--active" : ""}"
      data-knps-card="online"
      role="button"
      tabindex="0"
    >
      <span class="knps-radio"></span>
      <div class="knps-card-body">
        <div class="knps-card-top">
          <div class="knps-title">${c.cart}<span>${a.onlineTitle}</span></div>
          ${t.deliveryBadge ? `<div class="knps-badge">${t.deliveryBadge}</div>` : ""}
        </div>
      </div>
      <div class="knps-side ${t.onlineAvailable ? "knps-side--ok" : "knps-side--no"}" title="${t.onlineCaption}">
        ${t.onlineAvailable ? c.check : ""}
        <span>${t.onlineAvailable ? a.onlineInStock : a.onlineUnavailable}</span>
      </div>
    </div>

    <div
      class="knps-card knps-card--reserve ${t.active === "reserve" ? "knps-card--active" : ""} ${t.reserveUnavailable ? "knps-card--disabled" : ""}"
      data-knps-card="reserve"
      role="button"
      tabindex="${t.reserveUnavailable ? "-1" : "0"}"
      aria-disabled="${t.reserveUnavailable}"
    >
      <span class="knps-radio"></span>
      <div class="knps-card-body">
        <div class="knps-card-top">
          <div class="knps-title">${c.calendar}<span>${a.reserveTitle}</span></div>
          ${t.reserveUnavailable ? `<div class="knps-badge knps-badge--muted">${a.reserveUnavailableBadge}</div>` : (
      /* HTML */
      `
                  <div class="knps-fee">${t.feeText}</div>
                  ${t.reserveBadge ? `<div class="knps-badge">${t.reserveBadge}</div>` : ""}
                `
    )}
        </div>
        ${t.reserveUnavailable ? `<div class="knps-caption">${a.reserveUnavailableCaption}</div>` : (
      /* HTML */
      `
              ${t.store ? w(t.store) : ""} ${t.caption ? `<div class="knps-caption">${t.caption}</div>` : ""}
            `
    )}
      </div>
    </div>
  </div>
`
  ), w = (t) => (
    /* HTML */
    `
  <button type="button" class="knps-store-box" data-knps-change>
    <span class="knps-store-line">
      ${c.pin}
      <span class="knps-store-distance" data-knps-distance>${t.distanceText}</span>
      <span class="knps-store-name">${t.name}</span>
    </span>
    <span class="knps-store-change">${a.changeStore}</span>
  </button>
`
  ), $ = (t, e) => (
    /* HTML */
    `
  <div class="knps-popup" id="knpsPopup" data-knps-popup hidden>
    <div class="knps-popup-backdrop" data-knps-close></div>
    <div class="knps-popup-panel" role="dialog" aria-modal="true" aria-label="${a.popupTitle}">
      <button type="button" class="knps-popup-x" data-knps-close aria-label="Zavrieť">${c.close}</button>
      <div class="knps-popup-head">
        <h3>${a.popupTitle}</h3>
        <p>${a.popupFeePrefix} — ${t}</p>
      </div>
      <div class="knps-popup-list">${e.map(v).join("")}</div>
    </div>
  </div>
`
  ), v = (t) => {
    const e = t.qty > 0;
    return (
      /* HTML */
      `
    <div class="knps-popup-row" data-knps-store-id="${t.id}">
      <div class="knps-popup-row-info">
        <div class="knps-popup-row-line">
          ${c.pin}
          <span class="knps-store-distance" data-knps-distance>${t.distanceText}</span>
          <span class="knps-popup-row-name">${t.name}</span>
        </div>
        <div class="knps-popup-row-stock ${e ? "" : "knps-popup-row-stock--no"}">
          ${e ? `${a.inStock} · ${t.qty} ${a.pcs}` : a.onlineUnavailable}
        </div>
      </div>
      <button type="button" class="knps-popup-row-btn" data-knps-select="${t.id}">${a.reserveBtn}</button>
    </div>
  `
    );
  }, S = {
    OOVajnory: [48.199377, 17.195798],
    // Bratislava Vajnory, Pri starom letisku 3
    OOBratislava: [48.11776, 17.10317],
    // Bratislava Fedinova - Petržalka
    OOBratislava3: [48.12703497475394, 17.122811724983055],
    // Bratislava Mlynarovičova - Petržalka
    OOPovazskaBystri: [49.103822491707334, 18.461244137333438],
    // Považská Bystrica, SNP 5164/167
    OOZilina: [49.2047921, 18.7284308],
    // Žilina, Kamenná 4
    OOMartin: [49.09039, 18.93262],
    // Martin, Jilemnického 8851/65
    OORuzomberok: [49.068, 19.310451],
    // Ružomberok, Bystrická cesta 2159
    OOTrencin: [48.86619, 18.0223],
    // Trenčín, Belá 7575
    OONitra: [48.31612, 18.060274],
    // Nitra, Bratislavská 35
    OOTrnava: [48.38708085153855, 17.598613030151448],
    // Trnava, Veterná 7462/18
    OOPrievidza: [48.78437695088781, 18.626835690982308],
    // Prievidza, Nedožerská cesta 1268
    OOKosice: [48.69672, 21.25176],
    // Košice, Pri Prachárni 4
    OONoveZamky: [47.98471304174778, 18.17936272234666],
    // Nové Zámky, Dvorská cesta 5
    OOPoprad: [49.04961, 20.29178]
    // Poprad, Dlhé Hony 5268/9
  }, m = "knps_user_geo", _ = "https://get.geojs.io/v1/ip/geo.json", T = async (t = 4e3) => {
    try {
      const e = sessionStorage.getItem(m);
      if (e) {
        const n = JSON.parse(e);
        if (typeof (n == null ? void 0 : n.lat) == "number" && typeof (n == null ? void 0 : n.lon) == "number") return n;
      }
    } catch {
    }
    try {
      const e = new AbortController(), n = setTimeout(() => e.abort(), t), o = await fetch(_, { signal: e.signal });
      if (clearTimeout(n), !o.ok) return null;
      const s = await o.json(), i = parseFloat(s.latitude), r = parseFloat(s.longitude);
      if (Number.isNaN(i) || Number.isNaN(r)) return null;
      const p = { lat: i, lon: r };
      try {
        sessionStorage.setItem(m, JSON.stringify(p));
      } catch {
      }
      return p;
    } catch {
      return null;
    }
  }, L = 6371, h = (t) => t * Math.PI / 180, O = (t, e, n, o) => {
    const s = h(n - t), i = h(o - e), r = Math.sin(s / 2) ** 2 + Math.cos(h(t)) * Math.cos(h(n)) * Math.sin(i / 2) ** 2, p = 2 * Math.atan2(Math.sqrt(r), Math.sqrt(1 - r));
    return L * p;
  }, E = (t) => t < 10 ? `${t.toFixed(1)} km` : `${Math.round(t)} km`;
  C({ name: "Kinekus New Product Select", dev: "AI" });
  class M {
    constructor() {
      this.userLocation = null, this.init();
    }
    async init() {
      await g("head"), document.head.insertAdjacentHTML("beforeend", `<style>${x}</style>`);
      const e = await g(".product-tab:not(.float-btn-style)"), n = e.querySelector(".product-tab__header"), o = e.querySelector("#eshop-tab"), s = e.querySelector("#reserve-tab"), i = e.querySelectorAll(".product-tab__content-item"), r = e.querySelector(".store-delivery-id");
      if (!n || !o || !s || i.length < 2 || !r || (this.root = e, this.eshopTab = o, this.reserveTab = s, this.eshopContent = i[0], this.storeDeliveryId = r, f("#knpsBlock").elements.length)) return;
      const p = this.eshopContent.querySelector(".product-card-price-wrapper");
      p && n.insertAdjacentElement("beforebegin", p), this.loadUserLocation(), await this.waitForValue(r, 4e3), n.insertAdjacentHTML("afterend", k(this.collectState())), this.bindBlock(), document.body.insertAdjacentHTML("beforeend", $(this.getFeeText(), this.getEligibleStores())), this.bindPopup(), y(
        "#knpsBlock",
        "exp_kinekus_new_product_select_01",
        "PDP purchase option select block",
        "PDP purchase option select block visibility"
      );
    }
    async loadUserLocation() {
      const e = await T();
      if (!e) {
        b("Kinekus New Product Select: user geolocation unavailable, hiding distance", "warn");
        return;
      }
      this.userLocation = e, this.render();
    }
    getDistanceKm(e) {
      if (!this.userLocation) return null;
      const n = S[e];
      return n ? O(this.userLocation.lat, this.userLocation.lon, n[0], n[1]) : null;
    }
    waitForValue(e, n) {
      return new Promise((o) => {
        if (e.value) return o();
        const s = Date.now(), i = () => {
          if (e.value || Date.now() - s > n) return o();
          setTimeout(i, 50);
        };
        i();
      });
    }
    // ─── Read native state ────────────────────────────────────────────────────
    // Two separate conditions:
    // 1) it must be a real store, not the "OOZ" virtual central-warehouse pickup
    //    point — reservation.js tells them apart by data-store-id (empty only for
    //    that central "store"); data-disabled / availability-dot-on-central-shop
    //    aren't reliable for this since the site also applies them to a *real*
    //    store the instant its local stock hits 0.
    // 2) it must actually have stock right now — a store with nothing available
    //    isn't offered at all (not even as a disabled/"unavailable" row).
    isEligibleStore(e) {
      const n = (e.getAttribute("data-store-id") || "").trim().length > 0, o = parseInt(e.getAttribute("data-store") || "0", 10) || 0;
      return n && o > 0;
    }
    storeFromOption(e) {
      var s, i, r;
      const n = e.getAttribute("data-id") || "", o = this.getDistanceKm(n);
      return {
        id: n,
        name: ((s = e.getAttribute("data-name")) == null ? void 0 : s.trim()) || ((r = (i = e.querySelector(".name-wrapper")) == null ? void 0 : i.textContent) == null ? void 0 : r.trim()) || "",
        qty: parseInt(e.getAttribute("data-store") || "0", 10) || 0,
        priceRaw: e.getAttribute("data-delivery-price"),
        distanceKm: o,
        distanceText: o != null ? E(o) : ""
      };
    }
    getEligibleStores() {
      const e = Array.from(this.root.querySelectorAll(".store-option")).filter((n) => this.isEligibleStore(n)).map((n) => this.storeFromOption(n)).filter((n) => n.id);
      return this.userLocation && e.sort((n, o) => (n.distanceKm ?? 1 / 0) - (o.distanceKm ?? 1 / 0)), e;
    }
    getSelectedStore() {
      const e = this.storeDeliveryId.value;
      if (!e) return null;
      const n = this.root.querySelector(`.store-option[data-id="${CSS.escape(e)}"]`);
      return n ? this.storeFromOption(n) : null;
    }
    formatPrice(e) {
      const n = Number(e);
      return !e || Number.isNaN(n) ? "" : `${n.toFixed(2).replace(".", ",")} €`;
    }
    getFeeText() {
      const e = this.getSelectedStore() || this.getEligibleStores()[0];
      return this.formatPrice(e == null ? void 0 : e.priceRaw);
    }
    formatDeliveryBadge() {
      var o, s;
      const e = this.eshopContent.querySelector(".delivery-days"), n = e == null ? void 0 : e.dataset.deliveryDate;
      if (n) {
        const i = new Date(n);
        if (!Number.isNaN(i.getTime()))
          return `Doručenie do ${new Intl.DateTimeFormat("sk-SK", { day: "numeric", month: "numeric" }).format(i)}`;
      }
      return ((s = (o = this.eshopContent.querySelector(".delivery-price")) == null ? void 0 : o.textContent) == null ? void 0 : s.trim()) || "";
    }
    isOnlineAvailable() {
      return !!this.eshopTab.querySelector(".availability-dot.available");
    }
    getOnlineCaption() {
      var e, n;
      return ((n = (e = this.eshopTab.querySelector(".list-item__text--decoration")) == null ? void 0 : e.textContent) == null ? void 0 : n.trim()) || "";
    }
    // The reserve-tab title doubles as the native "within N minutes" promise text.
    getReserveBadge() {
      const e = this.reserveTab.querySelector(".list-item__title");
      return e ? Array.from(e.childNodes).filter((n) => n.nodeType === Node.TEXT_NODE).map((n) => (n.textContent || "").trim()).filter(Boolean).join(" ") : "";
    }
    // Mirrors the native "V predajni 0 ks..." / central-warehouse fallback caption
    // that would otherwise be hidden along with the native tab header.
    getCaption() {
      var e, n;
      return ((n = (e = this.reserveTab.querySelector(".product-on-stock")) == null ? void 0 : e.textContent) == null ? void 0 : n.trim()) || "";
    }
    collectState() {
      const e = this.getEligibleStores().length === 0, n = this.eshopTab.classList.contains("product-tab__list-item--active") ? "online" : "reserve";
      return {
        active: e ? "online" : n,
        deliveryBadge: this.formatDeliveryBadge(),
        onlineAvailable: this.isOnlineAvailable(),
        onlineCaption: this.getOnlineCaption(),
        reserveBadge: this.getReserveBadge(),
        reserveUnavailable: e,
        feeText: this.getFeeText(),
        store: this.getSelectedStore(),
        caption: this.getCaption()
      };
    }
    render() {
      const e = document.getElementById("knpsBlock");
      e && (e.outerHTML = k(this.collectState()), this.bindBlock());
    }
    // ─── Interactions ─────────────────────────────────────────────────────────
    bindBlock() {
      const e = document.getElementById("knpsBlock");
      e && (f(e).on("click", (n) => {
        const o = n.target;
        if (o.closest("[data-knps-change]")) {
          this.openPopup();
          return;
        }
        const s = o.closest("[data-knps-card]");
        s && this.onCardClick(s);
      }), f(e).on("keydown", (n) => {
        const o = n;
        if (o.key !== "Enter" && o.key !== " ") return;
        const s = o.target;
        if (s.closest("[data-knps-change]")) return;
        const i = s.closest("[data-knps-card]");
        i && (o.preventDefault(), this.onCardClick(i));
      }));
    }
    onCardClick(e) {
      if (e.getAttribute("aria-disabled") === "true") return;
      const n = e.getAttribute("data-knps-card");
      n === "online" && !this.eshopTab.classList.contains("product-tab__list-item--active") ? (this.eshopTab.click(), this.render()) : n === "reserve" && !this.reserveTab.classList.contains("product-tab__list-item--active") && (this.reserveTab.click(), this.render()), l("kinekus_new_product_select_option", `Selected: ${n}`, "click", "PDP purchase option select");
    }
    bindPopup() {
      const e = document.getElementById("knpsPopup");
      e && (f(e).on("click", (n) => {
        const o = n.target;
        if (o.closest("[data-knps-close]")) {
          this.closePopup();
          return;
        }
        const s = o.closest("[data-knps-select]");
        if (s) {
          const i = s.getAttribute("data-knps-select");
          i && this.selectStore(i);
        }
      }), document.addEventListener("keydown", (n) => {
        n.key === "Escape" && !e.hidden && this.closePopup();
      }));
    }
    openPopup() {
      const e = document.getElementById("knpsPopup");
      if (!e) return;
      const n = e.querySelector(".knps-popup-head p");
      n && (n.textContent = `${a.popupFeePrefix} — ${this.getFeeText()}`);
      const o = e.querySelector(".knps-popup-list");
      o && (o.innerHTML = this.getEligibleStores().map(v).join("")), e.hidden = !1, document.body.classList.add("knps-lock"), l("kinekus_new_product_select_popup", "Store picker opened", "view", "PDP purchase option select");
    }
    closePopup() {
      const e = document.getElementById("knpsPopup");
      e && (e.hidden = !0, document.body.classList.remove("knps-lock"));
    }
    selectStore(e) {
      const n = this.root.querySelector(`.store-option[data-id="${CSS.escape(e)}"]`);
      n && (n.click(), this.reserveTab.classList.contains("product-tab__list-item--active") || this.reserveTab.click(), this.closePopup(), this.render(), l("kinekus_new_product_select_store", `Store selected: ${e}`, "click", "PDP purchase option select"));
    }
  }
  new M();
})();
//# sourceMappingURL=index.js.map
