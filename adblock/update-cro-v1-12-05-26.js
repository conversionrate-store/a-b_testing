(function() {
  "use strict";
  const _ = `main {
  display: none !important;
}

.upd-block {
  display: flex;
  align-items: center;
  gap: 60px;
  padding: 40px 0;
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
}
.upd-block * {
  box-sizing: border-box;
}
.upd-block__left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.upd-block__header {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.upd-block__logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.upd-block__logo svg {
  display: block;
}
.upd-block__badge {
  display: inline-flex;
  align-items: center;
  height: 38px;
  padding: 8px 16px;
  background: rgba(27, 134, 250, 0.3);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #005dd8;
  white-space: nowrap;
  font-weight: 700;
}
.upd-block__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.upd-block__title {
  font-size: 42px;
  font-weight: 700;
  line-height: 1.25;
  color: #0b1936;
}
.upd-block__desc {
  font-size: 18px;
  line-height: 1.55;
  color: #2e353f;
  margin: 0;
}
.upd-block__actions {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.upd-block__btns {
  display: flex;
  align-items: center;
  gap: 24px;
}
.upd-block__btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 64px;
  padding: 0 42px;
  background: #1452d3;
  color: #fff;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  border: 2px solid transparent;
}
.upd-block__btn-primary svg {
  flex-shrink: 0;
}
.upd-block__btn-primary:hover {
  background: #1040b8;
}
.upd-block__btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  padding: 0 32px;
  border: 2px solid #1452d3;
  color: #1452d3;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  background: transparent;
  flex: 1;
}
.upd-block__btn-secondary:hover {
  background: #eef2ff;
}
.upd-block__note {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #2e353f;
  font-size: 16px;
  font-weight: 700;
}
.upd-block__note svg {
  flex-shrink: 0;
  opacity: 0.7;
}
.upd-block__right {
  flex: 0 0 540px;
}
.upd-block__table {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  background: #fff;
}
.upd-block__table-head {
  display: grid;
  grid-template-columns: 1fr 140px 140px;
  align-items: center;
  padding: 20px 20px;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
}
.upd-block__table-head img {
  display: block;
  height: 23px;
  width: auto;
}
.upd-block__col-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.upd-block__col-logo svg {
  display: block;
}
.upd-block__col-logo--youtube img {
  position: relative;
  left: -25px;
}
.upd-block__row {
  display: grid;
  grid-template-columns: 1fr 140px 140px;
  align-items: center;
  height: 56px;
  padding: 0 20px;
}
.upd-block__row--odd {
  background: #f3f4f6;
}
.upd-block__feature {
  font-size: 14px;
  color: #262a2e;
  font-weight: 700;
}
.upd-block__cell {
  display: flex;
  align-items: center;
  justify-content: center;
}
.upd-block__cell svg {
  display: block;
}/*# sourceMappingURL=style.css.map */`, d = (l, n, e, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: l,
      event_desc: n,
      event_type: e,
      event_loc: o
    }), C(`Event: ${l} | ${n} | ${e} | ${o}`, "success");
  }, p = (l) => new Promise((n) => {
    const e = document.querySelector(l);
    e && n(e);
    const o = new MutationObserver(() => {
      const s = document.querySelector(l);
      s && (n(s), o.disconnect());
    });
    o.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), b = ({ name: l, dev: n }) => {
    console.log(
      `%c EXP: ${l} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class c {
    constructor(n) {
      this.elements = n instanceof c ? n.elements : typeof n == "string" ? Array.from(document.querySelectorAll(n)) : n instanceof Element ? [n] : Array.isArray(n) ? n : Array.from(n);
    }
    on(n, e, o) {
      return typeof e == "function" && (o = e, e = ""), this.elements.forEach((s) => {
        s.addEventListener(n, function(a) {
          var r;
          if (e !== "") {
            let u = (r = a.target) == null ? void 0 : r.closest(e);
            u && (o == null || o.call(u, a));
          } else
            o == null || o.call(s, a);
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
        n(new c(e), this.elements.indexOf(e));
      return this;
    }
    style(n, e) {
      const o = n.split("-").map((s, a) => a === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[o] = e;
      }), this;
    }
    find(n) {
      const e = this.elements.map((o) => Array.from(o.querySelectorAll(n)));
      return new c(e.flat());
    }
    attr(n, e) {
      return e ? (this.elements.forEach(function(o) {
        o.setAttribute(n, e);
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
  const i = (l) => new c(l), C = (l, n = "info") => {
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
    console.log(`%c>>> ${l}`, `${e} font-size: 16px; font-weight: 600`);
  }, t = {
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
		<path d="M14.3165 0.298415C14.7016 -0.0994735 15.326 -0.0994702 15.7111 0.298415C16.0963 0.696306 16.0963 1.34126 15.7111 1.73915L6.06724 11.7016C5.68207 12.0995 5.05774 12.0995 4.67257 11.7016L0.288876 7.17308C-0.096292 6.77519 -0.096292 6.13024 0.288876 5.73235C0.674044 5.33446 1.29838 5.33446 1.68354 5.73235L5.36991 9.54048L14.3165 0.298415Z" fill="#0BA43F"/>
		</svg>`,
    cancel: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8661 0.366117C14.3543 -0.122039 15.1455 -0.122039 15.6337 0.366117C16.1218 0.854279 16.1218 1.64557 15.6337 2.13369L9.76748 7.99991L15.6337 13.8661C16.1218 14.3543 16.1218 15.1456 15.6337 15.6337C15.1456 16.1218 14.3543 16.1218 13.8661 15.6337L7.9999 9.76748L2.13369 15.6337C1.64557 16.1218 0.854278 16.1218 0.366116 15.6337C-0.122039 15.1455 -0.122038 14.3543 0.366116 13.8661L6.23233 7.99991L0.366116 2.13369C-0.122039 1.64554 -0.122038 0.854272 0.366116 0.366117C0.854271 -0.122039 1.64554 -0.122039 2.13369 0.366117L7.9999 6.23233L13.8661 0.366117Z" fill="#D61717"/>
		</svg>`,
    lock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path d="M17.3617 8.4525H8.46672V6.5625C8.46672 4.5975 10.0642 3 12.0292 3C13.4692 3 14.7517 3.855 15.3142 5.175C15.4792 5.5575 15.9142 5.7375 16.2967 5.5725C16.6792 5.415 16.8592 4.9725 16.6942 4.59C15.8992 2.715 14.0692 1.5 12.0292 1.5C9.23922 1.5 6.96672 3.7725 6.96672 6.5625V8.4525H6.63672C4.97922 8.4525 3.63672 9.795 3.63672 11.4525V19.5C3.63672 21.1575 4.97922 22.5 6.63672 22.5H17.3617C19.0192 22.5 20.3617 21.1575 20.3617 19.5V11.4525C20.3617 9.8025 19.0192 8.4525 17.3617 8.4525ZM18.8617 19.5C18.8617 20.325 18.1867 21 17.3617 21H6.63672C5.81172 21 5.13672 20.325 5.13672 19.5V11.4525C5.13672 10.6275 5.81172 9.9525 6.63672 9.9525H17.3617C18.1867 9.9525 18.8617 10.6275 18.8617 11.4525V19.5ZM13.3492 15.2625C13.3492 15.7275 13.1092 16.1475 12.7492 16.3875V18.225C12.7492 18.6375 12.4117 18.975 11.9992 18.975C11.5867 18.975 11.2492 18.6375 11.2492 18.225V16.3875C10.8892 16.1475 10.6492 15.7275 10.6492 15.2625C10.6492 14.52 11.2567 13.9125 11.9992 13.9125C12.7417 13.9125 13.3492 14.5125 13.3492 15.2625Z" fill="#262A2E"/>
		</svg>`,
    download: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
		<path d="M14 3.5V18.5M14 18.5L8.75 13.25M14 18.5L19.25 13.25" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M4.66602 22.1667H23.3327" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
		</svg>`,
    adBlockLogo: `<svg xmlns="http://www.w3.org/2000/svg" width="132" height="23" viewBox="0 0 132 23" fill="none">
		<g clip-path="url(#clip0_288_189)">
		<path d="M130.498 16.6283C129.578 17.9513 128.278 18.6118 126.6 18.6118C124.92 18.6118 123.615 17.9513 122.682 16.6283C121.762 15.2925 121.302 13.5113 121.302 11.2849C121.302 9.05855 121.762 7.28479 122.682 5.96183C123.615 4.62599 124.92 3.95807 126.6 3.95807C128.278 3.95807 129.578 4.62599 130.498 5.96183C131.431 7.28479 131.897 9.05855 131.897 11.2849C131.897 13.5113 131.431 15.2925 130.498 16.6283ZM123.721 15.677C124.414 16.7166 125.373 17.2355 126.6 17.2355C127.826 17.2355 128.778 16.7166 129.458 15.677C130.151 14.6374 130.498 13.1746 130.498 11.2849C130.498 9.39619 130.151 7.93247 129.458 6.89287C128.778 5.85327 127.826 5.33439 126.6 5.33439C125.373 5.33439 124.414 5.85419 123.721 6.89287C123.041 7.93247 122.702 9.39527 122.702 11.2849C122.702 13.1746 123.041 14.6384 123.721 15.677ZM115 9.26095C116.373 9.26095 117.499 9.69979 118.378 10.5766C119.258 11.4414 119.697 12.5601 119.697 13.9364C119.697 15.3127 119.258 16.4397 118.378 17.3165C117.499 18.1813 116.373 18.6118 115 18.6118C113.627 18.6118 112.501 18.1804 111.622 17.3165C110.742 16.4397 110.303 15.3127 110.303 13.9364C110.303 12.871 110.589 11.9262 111.162 11.1028L115.74 4.20095H117.319L113.881 9.38239C114.249 9.30059 114.624 9.25987 115 9.26095ZM112.601 16.3247C113.215 16.9319 114.014 17.2355 115 17.2355C115.986 17.2355 116.779 16.9319 117.379 16.3247C117.992 15.7175 118.298 14.9217 118.298 13.9364C118.298 12.952 117.992 12.1553 117.379 11.5481C116.779 10.9409 115.986 10.6373 115 10.6373C114.014 10.6373 113.215 10.9409 112.601 11.5481C112.001 12.1553 111.702 12.952 111.702 13.9364C111.702 14.9217 112.001 15.7175 112.601 16.3247ZM105.039 10.0908C106.159 10.2398 107.078 10.6777 107.798 11.4064C108.531 12.1221 108.897 13.0734 108.897 14.2602C108.897 15.6099 108.437 16.6762 107.518 17.4581C106.612 18.2273 105.506 18.6118 104.2 18.6118C103.16 18.6118 102.234 18.3689 101.421 17.8832C100.623 17.415 100.014 16.6766 99.7017 15.7985L100.862 15.1103C101.088 15.8123 101.494 16.345 102.081 16.7093C102.668 17.0607 103.373 17.2355 104.2 17.2355C105.159 17.2355 105.946 16.9798 106.558 16.4664C107.185 15.9402 107.498 15.206 107.498 14.2602C107.498 13.3163 107.185 12.5877 106.558 12.0743C105.946 11.5481 105.159 11.2849 104.2 11.2849V11.2647L104.18 11.2849H103.8L103.2 10.3539L106.679 5.53679H100.102V4.20095H108.298V5.53679L105.039 10.0908ZM98.9953 18.3689H95.9966L92.3589 13.7745V18.3689H89.7799V4.20095H92.3589V12.7017L95.7964 8.24895H98.8751L94.8569 13.2482L98.9953 18.3689ZM83.8982 18.6523C82.3924 18.6523 81.1334 18.1399 80.1202 17.1141C79.1207 16.0892 78.6209 14.8205 78.6209 13.3089C78.6209 11.7974 79.1216 10.5296 80.1202 9.50383C81.1334 8.47895 82.3924 7.96559 83.8982 7.96559C84.8713 7.96559 85.7571 8.20203 86.5564 8.67399C87.3305 9.11926 87.9621 9.77954 88.3761 10.5766L86.1567 11.8921C85.9575 11.4745 85.6367 11.1284 85.2373 10.9004C84.8262 10.6544 84.3558 10.5283 83.8781 10.5361C83.1052 10.5361 82.4662 10.7992 81.9591 11.3254C81.453 11.8379 81.1999 12.4993 81.1999 13.3089C81.1999 14.1057 81.453 14.7662 81.9591 15.2925C82.4662 15.8058 83.1062 16.0616 83.8781 16.0616C84.3979 16.0616 84.8577 15.9475 85.2573 15.7175C85.6567 15.4895 85.9776 15.1434 86.1768 14.7258L88.4162 16.0211C87.9763 16.8173 87.3347 17.481 86.5573 17.9439C85.7571 18.4159 84.8704 18.6523 83.8982 18.6523ZM75.787 17.1141C74.761 18.1399 73.5084 18.6523 72.0291 18.6523C70.5498 18.6523 69.298 18.1399 68.2712 17.1141C67.258 16.0745 66.7518 14.8067 66.7518 13.3089C66.7518 11.8112 67.258 10.549 68.2712 9.52407C69.2971 8.48447 70.5498 7.96559 72.0291 7.96559C73.5084 7.96559 74.761 8.48539 75.787 9.52407C76.8129 10.5499 77.3264 11.8112 77.3264 13.3089C77.3264 14.8067 76.8129 16.0754 75.787 17.1141ZM70.09 15.3127C70.6098 15.8389 71.2562 16.1021 72.0291 16.1021C72.8029 16.1021 73.4492 15.8389 73.9681 15.3127C74.4879 14.7865 74.7474 14.1185 74.7474 13.3089C74.7474 12.4993 74.4879 11.8314 73.9681 11.3052C73.4492 10.779 72.8029 10.5158 72.0291 10.5158C71.2562 10.5158 70.6098 10.779 70.09 11.3052C69.5839 11.8314 69.3308 12.4993 69.3308 13.3089C69.3308 14.1185 69.5839 14.7865 70.09 15.3127ZM62.3339 18.3689V3.59375H64.912V18.3689H62.3339ZM58.8054 11.0218C60.0316 11.7376 60.6443 12.8167 60.6443 14.2602C60.6443 15.4618 60.2246 16.4461 59.3853 17.2153C58.546 17.9844 57.5127 18.3689 56.2865 18.3689H50.351V4.20095H55.8677C57.0676 4.20095 58.0735 4.57907 58.8864 5.33439C59.7121 6.07683 60.1254 7.02811 60.1254 8.18823C60.1254 9.36215 59.6857 10.307 58.8054 11.0218ZM55.8668 6.81191H53.1085V9.92887H55.8668C56.2929 9.92887 56.6461 9.78167 56.9265 9.48359C57.2196 9.18735 57.3662 8.81567 57.3662 8.37039C57.3662 7.92511 57.226 7.55435 56.9465 7.25719C56.6661 6.96095 56.3065 6.81191 55.8668 6.81191ZM56.2865 15.758C56.7535 15.758 57.1395 15.6034 57.4463 15.2925C57.753 14.9686 57.906 14.5638 57.906 14.0781C57.906 13.6061 57.7521 13.2151 57.4463 12.9042C57.1395 12.5803 56.7535 12.4184 56.2865 12.4184H53.1094V15.758H56.2865ZM45.2932 4.20095H47.8722V18.3689H45.2932V17.1748C44.5339 18.1601 43.4543 18.6523 42.0551 18.6523C40.7087 18.6523 39.5562 18.1399 38.5958 17.1141C37.6508 16.0754 37.1774 14.8067 37.1774 13.3089C37.1774 11.8112 37.6508 10.5499 38.5967 9.52407C39.5562 8.48539 40.7087 7.96559 42.0551 7.96559C43.4543 7.96559 44.533 8.45871 45.2932 9.44311V4.20095ZM40.5357 15.3734C41.0682 15.8997 41.7346 16.1628 42.5348 16.1628C43.3341 16.1628 43.9941 15.8997 44.5139 15.3734C45.0328 14.8343 45.2932 14.1461 45.2932 13.3089C45.2932 12.4727 45.0337 11.791 44.5139 11.2647C43.9941 10.7256 43.3341 10.4551 42.5348 10.4551C41.7346 10.4551 41.0692 10.7256 40.5357 11.2647C40.0159 11.791 39.7564 12.4727 39.7564 13.3089C39.7564 14.1461 40.0159 14.8343 40.5357 15.3734ZM33.7536 18.3689L32.9134 15.8187H27.3375L26.4982 18.3689H23.5195L28.4172 4.20095H31.8355L36.7523 18.3689H33.7536ZM28.216 13.2078H32.054L30.135 7.41911L28.216 13.2078Z" fill="#0B1936"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M8.96781 22.1518V17.1258C6.09749 14.685 4.25131 11.753 3.97457 7.98284L0 5.6672V7.06744C0.0345931 12.9288 2.85575 17.4303 7.36469 20.9171L8.96326 22.1518H8.96781ZM4.81117 6.6424L9.74979 4.3608L14.6939 6.6424L18.8714 4.20624L9.74979 0L0.6336 4.20624L4.81117 6.6424ZM15.5296 7.98284C15.2519 11.7585 13.4057 14.6896 10.5354 17.1258V22.1518L12.134 20.9171C16.6429 17.4303 19.4686 12.9242 19.4932 7.06744V5.6672L15.5296 7.98284Z" fill="#005DD8"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M9.74942 15.7159C12.0999 13.6551 13.6639 11.2189 13.9461 8.0431L9.74942 6.10742L5.55273 8.0431C5.83949 11.2143 7.40346 13.6551 9.74942 15.7159Z" fill="#1B86FA"/>
		</g>
		<defs>
		<clipPath id="clip0_288_189">
		<rect width="132" height="23" fill="white"/>
		</clipPath>
		</defs>
		</svg>`
  }, k = (
    /*html*/
    `
<div class="upd-block">
  <div class="upd-block__left">
    <div class="upd-block__header">
      <div class="upd-block__logo">${t.adBlockLogo}</div>
      <div class="upd-block__badge">From the team behind Adblock for Youtube™</div>
    </div>
    <div class="upd-block__content">
      <h2 class="upd-block__title">Want ads gone everywhere —<br>not just YouTube?</h2>
      <p class="upd-block__desc">Every app, every browser, every website — plus YouTube sponsor segment skip.</p>
    </div>
    <div class="upd-block__actions">
      <div class="upd-block__btns">
        <button class="upd-block__btn-primary">
          ${t.download}
          <span>Yes, download AdBlock 360</span>
        </button>
        <button class="upd-block__btn-secondary">No, thanks</button>
      </div>
      <div class="upd-block__note">
        ${t.lock}
        <span>Free early access until May 31, 2026</span>
      </div>
    </div>
  </div>
  <div class="upd-block__right">
    <div class="upd-block__table">
      <div class="upd-block__table-head">
        <div></div>
        <div class="upd-block__col-logo upd-block__col-logo--youtube"><img src="/_astro/horizontal-aby-logo.Be8n11XS_Z59DT.svg" alt="Adblock for Youtube" height="23"></div>
        <div class="upd-block__col-logo">${t.adBlockLogo}</div>
      </div>
      <div class="upd-block__row upd-block__row--odd">
        <span class="upd-block__feature">YouTube ads</span>
        <span class="upd-block__cell">${t.check}</span>
        <span class="upd-block__cell">${t.check}</span>
      </div>
      <div class="upd-block__row">
        <span class="upd-block__feature">YouTube sponsor segment skip</span>
        <span class="upd-block__cell">${t.cancel}</span>
        <span class="upd-block__cell">${t.check}</span>
      </div>
      <div class="upd-block__row upd-block__row--odd">
        <span class="upd-block__feature">Spotify &amp; desktop apps</span>
        <span class="upd-block__cell">${t.cancel}</span>
        <span class="upd-block__cell">${t.check}</span>
      </div>
      <div class="upd-block__row">
        <span class="upd-block__feature">All browsers</span>
        <span class="upd-block__cell">${t.cancel}</span>
        <span class="upd-block__cell">${t.check}</span>
      </div>
      <div class="upd-block__row upd-block__row--odd">
        <span class="upd-block__feature">All websites</span>
        <span class="upd-block__cell">${t.cancel}</span>
        <span class="upd-block__cell">${t.check}</span>
      </div>
      <div class="upd-block__row">
        <span class="upd-block__feature">Cookie consent auto-denial</span>
        <span class="upd-block__cell">${t.cancel}</span>
        <span class="upd-block__cell">${t.check}</span>
      </div>
    </div>
  </div>
</div>
`
  );
  b({ name: "SlideIn Cart", dev: "YK" });
  class f {
    constructor() {
      window.location.pathname === "/update-cro-v2" && this.init();
    }
    async init() {
      await p("body"), document.head.insertAdjacentHTML("beforeend", `<style class="crs-update-page-1-style">${_}</style>`), await p("main"), i("main").elements[0].insertAdjacentHTML("beforebegin", k), d("update_page_1_view", "Update page 1 is viewed", "view", "update_page_block"), i(".upd-block__btn-primary").on("click", () => {
        i("#main-cta").elements[0].click(), d("update_page_1_click_main_cta", "Download AdBlock 360", "click", "update_page_block");
      }), i(".upd-block__btn-secondary").on("click", () => {
        i(".upd-block").elements[0].remove(), d("update_page_1_click_secondary_cta", "No, thanks", "click", "update_page_block");
      });
    }
  }
  new f();
})();
//# sourceMappingURL=index.js.map
