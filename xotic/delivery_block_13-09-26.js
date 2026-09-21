(function() {
  "use strict";
  const S = `.xdlv-native-root,.xdlv-hidden{display:none}.xdlv-block{position:relative;margin:16px 0;padding:18px 26px;border:2px solid #d0e3fb;border-radius:12px;background:#f2f2f7;font-family:inherit;font-size:16px;line-height:20px;color:#1d1d1d}.xdlv-rows{display:flex;flex-direction:column;gap:12px}.xdlv-row{display:flex;align-items:flex-start;gap:12px}.xdlv-row-icon{flex:none;width:24px;height:24px;color:#0040ff}.xdlv-row-icon svg{display:block;width:100%;height:100%}.xdlv-row-text{flex:1;min-width:0;padding-top:2px;display:flex;align-items:baseline;column-gap:12px;row-gap:4px}.xdlv-row-text b,.xdlv-row-text strong{font-weight:700}.xdlv-row-content{flex:1;min-width:0}.xdlv-row-loc{font-weight:700}.xdlv-row-cutoff{font-weight:700;color:#0040ff}.xdlv-row-content .deliverr-cart-minimum{font-weight:700}.xdlv-change{flex:none;margin-left:auto;padding:0;border:0;background:none;font:inherit;font-weight:600;font-size:13px;letter-spacing:.02em;text-transform:uppercase;color:#0040ff;cursor:pointer}.xdlv-change:hover{color:#204ed8}.xdlv-divider{margin:12px 0;border-top:1px solid rgba(29,29,29,.08)}.xdlv-trust{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:12px}.xdlv-trust-item{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:#1d1d1d;white-space:nowrap}.xdlv-trust-item svg{flex:none;width:14px;height:14px;color:#0040ff}@media (max-width: 480px){.xdlv-block{padding:18px}.xdlv-row-text{font-size:13px}.xdlv-change{margin-left:0;text-align:right}.xdlv-trust{justify-content:flex-start}}.xstk-bar{position:fixed;left:0;right:0;bottom:0;z-index:2147483637;background:#f2f2f7;box-shadow:0 -2px 16px #0000001a;transform:translateY(100%);transition:transform .25s ease;font-family:inherit}.xstk-bar--visible{transform:translateY(0)}.xstk-inner{display:flex;align-items:center;justify-content:space-between;gap:24px;max-width:1440px;margin:0 auto;padding:20px 116px}.xstk-info{flex:1;min-width:0}.xstk-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700;font-size:16px;color:#1d1d1d;margin-bottom:6px}.xstk-row{display:flex;align-items:center;gap:16px}.xstk-price{font-weight:700;font-size:20px;color:#1d1d1d}.xstk-fit{display:none;align-items:center;gap:6px;font-size:14px;font-weight:600;color:#616161;white-space:nowrap}.xstk-fit svg{flex:none;width:18px;height:18px}.xstk-fit--yes,.xstk-fit--no{display:inline-flex}.xstk-atc{flex:none;padding:20px 40px;border:0;border-radius:8px;background:#0040ff;color:#fff;font-family:inherit;font-weight:700;font-size:15px;letter-spacing:.02em;text-transform:uppercase;cursor:pointer}.xstk-atc:hover{background:#204ed8}@media (max-width: 480px){.xstk-inner{padding:13px 20px 11px;gap:12px}.xstk-title{display:none}.xstk-price{font-size:18px}.xstk-atc{padding:18px 24px;font-size:14px}}.xdlv-modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;background:transparent}.xdlv-modal{position:absolute;top:calc(100% + 8px);right:0;z-index:1000;width:257px;max-width:calc(100vw - 32px);padding:22px;border-radius:16px;border:none;background:#fff;box-shadow:0 12px 32px #00000029;font-family:inherit;font-size:14px;color:#1d1d1d}.xdlv-modal-field{display:block;margin-bottom:16px}.xdlv-modal-field>span{display:block;margin-bottom:8px;font-size:13px;color:#1d1d1d}.xdlv-modal-field--zip{flex:1;min-width:0;margin-bottom:0}.xdlv-modal-field--zip[hidden]{display:none}.xdlv-modal-country,.xdlv-modal-zip{box-sizing:border-box;width:100%;height:42px;padding:0 16px;border:1px solid #bdbdbd;border-radius:8px;font-family:inherit;font-size:14px;color:#1d1d1d;background:#fff}.xdlv-modal-country:focus,.xdlv-modal-zip:focus{outline:none;border-color:#0040ff}.xdlv-modal-country{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding-right:40px;background-repeat:no-repeat;background-position:right 14px center;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%231D1D1D' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}.xdlv-modal-zip-row{display:flex;align-items:flex-start;gap:6px}.xdlv-modal-submit{flex:none;align-self:flex-end;height:42px;padding:0 20px;border:none;border-radius:8px;background:#0040ff;color:#fff;font-family:inherit;font-weight:600;font-size:13px;letter-spacing:.02em;text-transform:uppercase;cursor:pointer}.xdlv-modal-submit:hover{background:#204ed8}.xdlv-modal-close{position:absolute;top:18px;right:18px;width:auto;height:auto;padding:0;border:none;background:none;color:#1d1d1d;cursor:pointer}.xdlv-modal-close svg{display:block;width:14px;height:14px}`, p = (n, t, e, i = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: n,
      event_desc: t,
      event_type: e,
      event_loc: i
    }), h(`Event: ${n} | ${t} | ${e} | ${i}`, "success");
  }, b = (n) => new Promise((t) => {
    const e = document.querySelector(n);
    e && t(e);
    const i = new MutationObserver(() => {
      const o = document.querySelector(n);
      o && (t(o), i.disconnect());
    });
    i.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), E = ({ name: n, dev: t }) => {
    const e = n.toLowerCase().replace(/\s/g, "_");
    p(`${e}_started`, `Experiment ${n} started`, "other", e), console.log(
      `%c EXP: ${n} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class f {
    constructor(t) {
      this.elements = t instanceof f ? t.elements : typeof t == "string" ? Array.from(document.querySelectorAll(t)) : t instanceof Element ? [t] : Array.isArray(t) ? t : Array.from(t);
    }
    on(t, e, i) {
      return typeof e == "function" && (i = e, e = ""), this.elements.forEach((o) => {
        o.addEventListener(t, function(s) {
          var l;
          if (e !== "") {
            let r = (l = s.target) == null ? void 0 : l.closest(e);
            r && (i == null || i.call(r, s));
          } else
            i == null || i.call(o, s);
        });
      }), this;
    }
    addClass(t) {
      return this.elements.forEach(function(e) {
        e.classList.add(t);
      }), this;
    }
    removeClass(t) {
      return this.elements.forEach(function(e) {
        e.classList.remove(t);
      }), this;
    }
    toggleClass(t) {
      return this.elements.forEach(function(e) {
        e.classList.toggle(t);
      }), this;
    }
    each(t) {
      for (let e of this.elements)
        t(new f(e), this.elements.indexOf(e));
      return this;
    }
    style(t, e) {
      const i = t.split("-").map((o, s) => s === 0 ? o : o.charAt(0).toUpperCase() + o.slice(1)).join("");
      return this.elements.forEach(function(o) {
        o.style[i] = e;
      }), this;
    }
    find(t) {
      const e = this.elements.map((i) => Array.from(i.querySelectorAll(t)));
      return new f(e.flat());
    }
    attr(t, e) {
      return e ? (this.elements.forEach(function(i) {
        i.setAttribute(t, e);
      }), this) : this.elements[0].getAttribute(t);
    }
    text(t) {
      return t ? (this.elements.forEach(function(e) {
        e.textContent = t;
      }), this) : this.elements[0].textContent || "";
    }
    html(t) {
      return t ? (this.elements.forEach(function(e) {
        e.innerHTML = t;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const d = (n) => new f(n), y = (n, t, e, i, o = 1e3, s = 0.5) => {
    let l, r;
    if (l = new IntersectionObserver(
      function(a) {
        a[0].isIntersecting === !0 ? r = setTimeout(() => {
          p(
            t,
            a[0].target.dataset.visible || i || "",
            "view",
            e
          ), l.disconnect();
        }, o) : (h("Element is not fully visible", "warn"), clearTimeout(r));
      },
      { threshold: [s] }
    ), typeof n == "string") {
      const a = document.querySelector(n);
      a && l.observe(a);
    } else
      l.observe(n);
  }, h = (n, t = "info") => {
    let e;
    switch (t) {
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
    console.log(`%c>>> ${n}`, `${e} font-size: 16px; font-weight: 600`);
  }, u = {
    package: (
      /* HTML */
      `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path
      d="M24.594 16.2773V6.92684C24.594 6.9259 24.594 6.92501 24.594 6.92408V6.92197C24.594 6.91836 24.5935 6.91489 24.5934 6.91128C24.5915 6.77375 24.5502 6.64742 24.4811 6.54068C24.4792 6.53782 24.4777 6.53482 24.4759 6.53196L24.4747 6.53027C24.4742 6.52948 24.4737 6.52863 24.4731 6.52784L21.6633 2.31308C21.5329 2.11747 21.3134 2 21.0783 2H8.32818C8.0931 2 7.87354 2.11752 7.74313 2.31308L4.93318 6.52802C4.93276 6.52863 4.93239 6.5292 4.93201 6.52981L4.93065 6.53187C4.92831 6.53534 4.92653 6.53904 4.92432 6.54251C4.8512 6.65623 4.81492 6.78293 4.81313 6.91128C4.81309 6.91484 4.81262 6.91831 4.81262 6.92192V6.92403C4.81262 6.92497 4.81262 6.92586 4.81262 6.92679V16.1563H2.70313C2.31482 16.1563 2 16.4711 2 16.8595V25.297C2 25.6854 2.31482 26.0002 2.70313 26.0002H5.51566C6.14712 26.0002 6.71426 25.7209 7.10117 25.2798C7.83997 25.4874 9.52571 26.0002 11.8937 26.0002H18.2658C19.8068 26.0002 21.2787 25.2642 22.2033 24.0314L25.5789 19.5307L25.579 19.5306C26.4304 18.3955 25.936 16.7533 24.594 16.2773ZM17.5158 3.40626H20.702L22.577 6.21879H17.5158V3.40626ZM13.297 3.40626H16.1095V6.21879H13.297V3.40626ZM13.297 7.62505H16.1095V11.28L15.0932 10.6025C14.857 10.4451 14.5493 10.4451 14.3132 10.6025L13.297 11.28V7.62505ZM8.7045 3.40626H11.8907V6.21879H6.82948L8.7045 3.40626ZM6.21879 23.8908C6.21879 24.2785 5.90336 24.594 5.51566 24.594H3.40626V17.5626H5.51566C5.90336 17.5626 6.21879 17.8781 6.21879 18.2658V23.8908ZM6.21879 16.2773V7.62505H11.8907V12.5938C11.8907 13.1549 12.5178 13.4896 12.9838 13.1789L14.7032 12.0327L16.4226 13.1789C16.8874 13.4888 17.5158 13.1571 17.5158 12.5938V7.62505H23.1877V16.2783C22.8703 16.3908 22.5803 16.5779 22.3471 16.8282L20.2805 19.0467C20.0134 18.188 19.2113 17.5626 18.2658 17.5626H14.9238C14.469 17.5626 14.0305 17.3972 13.6891 17.0967C11.8529 15.4809 9.09291 15.4667 7.23927 17.052C6.98947 16.6983 6.63392 16.4246 6.21879 16.2773ZM24.454 18.6868C24.454 18.6869 24.4539 18.6869 24.4539 18.687L21.0783 23.1877C20.4179 24.0682 19.3665 24.594 18.2658 24.594H11.8937C10.2449 24.594 8.94928 24.3412 7.61375 23.9658C7.61657 23.8853 7.61567 24.3146 7.61567 18.5836L8.11504 18.1524C9.43908 16.9872 11.436 16.9872 12.7601 18.1524C13.3584 18.6789 14.1268 18.9689 14.9238 18.9689H18.2658C18.6535 18.9689 18.9689 19.2843 18.9689 19.672C18.9689 20.0597 18.6535 20.3751 18.2658 20.3751H13.2032C12.8149 20.3751 12.5001 20.6899 12.5001 21.0782C12.5001 21.4666 12.8149 21.7814 13.2032 21.7814H18.7371C19.3204 21.7814 19.883 21.5366 20.2806 21.1098L23.3761 17.7867C23.5108 17.6422 23.6935 17.5626 23.8908 17.5626C24.4701 17.5626 24.799 18.2269 24.454 18.6868Z"
      fill="#204ED8"
    />
    <path
      d="M21.0782 14.75H18.2656C17.8773 14.75 17.5625 15.0648 17.5625 15.4531C17.5625 15.8414 17.8773 16.1563 18.2656 16.1563H21.0782C21.4665 16.1563 21.7813 15.8414 21.7813 15.4531C21.7813 15.0648 21.4665 14.75 21.0782 14.75Z"
      fill="#204ED8"
    />
  </svg>`
    ),
    truck: (
      /* HTML */
      `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path
      d="M7.14271 19.4688H6.09009C5.60796 19.4688 5.21509 19.0759 5.21509 18.5938V15.0938C5.21509 14.6108 4.82309 14.2188 4.34009 14.2188C3.85709 14.2188 3.46509 14.6108 3.46509 15.0938V18.5938C3.46509 20.041 4.64284 21.2188 6.09009 21.2188H7.14271C7.52246 22.4788 8.68009 23.4062 10.0626 23.4062C11.4451 23.4062 12.6027 22.4788 12.9825 21.2188H16.6251H18.5177C18.8975 22.4788 20.0551 23.4062 21.4376 23.4062C22.8201 23.4062 23.9777 22.4788 24.3575 21.2188H26.2501C26.7331 21.2188 27.1251 20.8267 27.1251 20.3438V15.9688C27.1251 15.3186 26.853 14.4209 26.4925 13.8801L23.9628 10.0861C23.5306 9.43863 22.6521 8.96875 21.8742 8.96875H19.4207V7.21875C19.4207 5.7715 18.243 4.59375 16.7957 4.59375H14.0001C13.5171 4.59375 13.1251 4.98575 13.1251 5.46875C13.1251 5.95175 13.5171 6.34375 14.0001 6.34375H16.7966C17.2787 6.34375 17.6716 6.73662 17.6716 7.21875V19.4688H16.6251H12.9825C12.6027 18.2087 11.4451 17.2812 10.0626 17.2812C8.68009 17.2812 7.52246 18.2087 7.14271 19.4688ZM21.4376 21.6562C20.714 21.6562 20.1251 21.0674 20.1251 20.3438C20.1251 19.6201 20.714 19.0312 21.4376 19.0312C22.1612 19.0312 22.7501 19.6201 22.7501 20.3438C22.7501 21.0674 22.1612 21.6562 21.4376 21.6562ZM19.4216 10.7188H21.8751C22.065 10.7188 22.4018 10.899 22.5077 11.0574L24.032 13.3438H19.4216V10.7188ZM19.4216 15.0938H25.1625C25.2815 15.3711 25.3751 15.7386 25.3751 15.9688V19.4688H24.3575C23.9777 18.2087 22.8201 17.2812 21.4376 17.2812C20.6623 17.2812 19.9615 17.5796 19.4216 18.0565V15.0938ZM11.3751 20.3438C11.3751 21.0674 10.7862 21.6562 10.0626 21.6562C9.33896 21.6562 8.75009 21.0674 8.75009 20.3438C8.75009 19.6201 9.33896 19.0312 10.0626 19.0312C10.7862 19.0312 11.3751 19.6201 11.3751 20.3438Z"
      fill="#204ED8"
    />
    <path
      d="M12.25 5.46875C12.25 4.98575 11.858 4.59375 11.375 4.59375H1.75C1.267 4.59375 0.875 4.98575 0.875 5.46875C0.875 5.95175 1.267 6.34375 1.75 6.34375H11.375C11.858 6.34375 12.25 5.95175 12.25 5.46875Z"
      fill="#204ED8"
    />
    <path
      d="M9.625 9.84375C10.108 9.84375 10.5 9.45175 10.5 8.96875C10.5 8.48575 10.108 8.09375 9.625 8.09375H3.5C3.017 8.09375 2.625 8.48575 2.625 8.96875C2.625 9.45175 3.017 9.84375 3.5 9.84375H9.625Z"
      fill="#204ED8"
    />
    <path
      d="M7.875 13.3438C8.358 13.3438 8.75 12.9518 8.75 12.4688C8.75 11.9858 8.358 11.5938 7.875 11.5938H5.25C4.767 11.5938 4.375 11.9858 4.375 12.4688C4.375 12.9518 4.767 13.3438 5.25 13.3438H7.875Z"
      fill="#204ED8"
    />
  </svg>`
    ),
    check: (
      /* HTML */
      `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <g clip-path="url(#clip0_248_461)">
      <path
        d="M2.27468 2.31674C-0.305375 4.92484 -0.291353 9.14547 2.31674 11.7255C4.92484 14.3056 9.14547 14.2916 11.7255 11.6835C14.3056 9.07536 14.2915 4.85473 11.6835 2.27468C9.07536 -0.305375 4.85473 -0.291353 2.27468 2.31674ZM10.2392 5.72409L6.6215 9.38384C6.31302 9.69233 5.80823 9.69233 5.49974 9.38384L5.35952 9.24362L4.93886 8.82296L3.76101 7.65913C3.45253 7.35065 3.45253 6.84586 3.76101 6.53737C4.0695 6.22889 4.57429 6.22889 4.88277 6.53737L6.06062 7.7012L9.11742 4.61635C9.42591 4.30787 9.9307 4.30787 10.2392 4.61635C10.5477 4.91082 10.5477 5.41561 10.2392 5.72409Z"
        fill="#204ED8"
      />
    </g>
    <defs>
      <clipPath id="clip0_248_461">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>`
    ),
    close: (
      /* HTML */
      `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
  </svg>`
    ),
    // Sticky ATC bar's fitment pill — redrawn equivalents of the Figma comps'
    // Flaticon assets (fi_17767109 positive / fi_159454 negative), same reason
    // as above: no file-system access to pull the originals via the Figma MCP
    // asset writer.
    fitOk: (
      /* HTML */
      `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M2.47446 2.52854C-0.84275 5.88181 -0.824722 11.3083 2.52854 14.6255C5.88181 17.9428 11.3083 17.9247 14.6255 14.5715C17.9427 11.2182 17.9247 5.79167 14.5715 2.47446C11.2182 -0.84275 5.79167 -0.824722 2.47446 2.52854ZM12.7145 6.90942L8.06323 11.6148C7.66661 12.0114 7.01759 12.0114 6.62097 11.6148L6.44069 11.4345L5.89984 10.8937L4.38546 9.39733C3.98884 9.00071 3.98884 8.35169 4.38546 7.95507C4.78208 7.55844 5.4311 7.55844 5.82772 7.95507L7.3421 9.45142L11.2723 5.48519C11.6689 5.08856 12.3179 5.08856 12.7145 5.48519C13.1112 5.86378 13.1112 6.5128 12.7145 6.90942Z"
      fill="#3C9342"
    />
  </svg>`
    ),
    fitWarn: (
      /* HTML */
      `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <g clip-path="url(#clip0_219_37071)">
      <path
        d="M17.6402 13.1149L11.334 2.19217C10.304 0.387766 7.69926 0.387766 6.67294 2.19217L0.363077 13.1149C-0.666953 14.9193 0.615027 17.161 2.69361 17.161H15.2874C17.366 17.161 18.6702 14.8971 17.6402 13.1149ZM8.99977 14.7378C8.45141 14.7378 7.99568 14.2821 7.99568 13.7337C7.99568 13.1853 8.45141 12.7296 8.99977 12.7296C9.54813 12.7296 10.0039 13.1853 9.98163 13.7596C10.0076 14.2821 9.5259 14.7378 8.99977 14.7378ZM9.91494 8.24638C9.87048 9.02446 9.82231 9.79883 9.77785 10.5769C9.75562 10.8289 9.75562 11.0586 9.75562 11.3068C9.73339 11.7181 9.41104 12.0367 8.99977 12.0367C8.5885 12.0367 8.26986 11.7403 8.24392 11.3291C8.17723 10.1175 8.10683 8.92812 8.04014 7.71654C8.01791 7.3979 7.99568 7.07555 7.96974 6.75691C7.96974 6.23078 8.26615 5.79728 8.74782 5.66019C9.22949 5.54533 9.70745 5.77505 9.91494 6.23078C9.98534 6.3901 10.0076 6.54942 10.0076 6.73468C9.98534 7.24228 9.93717 7.74618 9.91494 8.24638Z"
        fill="#C70017"
      />
    </g>
    <defs>
      <clipPath id="clip0_219_37071">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>`
    )
  }, m = {
    changeLabel: "Change",
    confirmLabel: "Confirm",
    unavailableText: "This item is not available for delivery to your address.",
    trustItems: ["Lifetime warranty", "30-day returns", "Perfect fit guarantee"]
  }, T = () => (
    /* HTML */
    `
  <div class="xdlv-block xdlv-hidden" id="xdlvBlock">
    <div class="xdlv-rows" id="xdlvRows"></div>
    <div class="xdlv-divider"></div>
    <div class="xdlv-trust">
      ${m.trustItems.map(
      (n) => (
        /* HTML */
        `
            <span class="xdlv-trust-item">${u.check}<span>${n}</span></span>
          `
      )
    ).join("")}
    </div>
    ${H()}
  </div>
`
  ), H = () => (
    /* HTML */
    `
  <div class="xdlv-modal-backdrop" data-xdlv-modal-close hidden></div>
  <div class="xdlv-modal" id="xdlvModal" hidden>
    <button type="button" class="xdlv-modal-close" data-xdlv-modal-close aria-label="Close">${u.close}</button>
    <label class="xdlv-modal-field">
      <span>Location</span>
      <select class="xdlv-modal-country" data-xdlv-modal-country>
        <option value="United States">United States</option>
        <option value="Outside US">Outside US</option>
      </select>
    </label>
    <div class="xdlv-modal-zip-row">
      <label class="xdlv-modal-field xdlv-modal-field--zip" data-xdlv-modal-zip-label>
        <span>US ZIP code</span>
        <input
          type="text"
          class="xdlv-modal-zip"
          data-xdlv-modal-zip
          inputmode="numeric"
          maxlength="5"
          pattern="[0-9]{5}"
          placeholder="ZIP"
        />
      </label>
      <button type="button" class="xdlv-modal-submit" data-xdlv-modal-submit>${m.confirmLabel}</button>
    </div>
  </div>
`
  ), M = (n) => (
    /* HTML */
    `
  <div class="xstk-bar" id="xstkBar">
    <div class="xstk-inner">
      <div class="xstk-info">
        <div class="xstk-title">${n}</div>
        <div class="xstk-row">
          <span class="xstk-price" id="xstkPrice"></span>
          <span class="xstk-fit" id="xstkFit"></span>
        </div>
      </div>
      <button type="button" class="xstk-atc" data-xstk-atc>Add to cart</button>
    </div>
  </div>
`
  ), _ = () => (
    /* HTML */
    `
  <div class="xdlv-row">
    <span class="xdlv-row-icon">${u.fitWarn}</span>
    <span class="xdlv-row-text">
      <span class="xdlv-row-content">${m.unavailableText}</span>
      <button type="button" class="xdlv-change" data-xdlv-change>${m.changeLabel}</button>
    </span>
  </div>
`
  ), z = (n) => n.map(
    (t, e) => (
      /* HTML */
      `
        <div class="xdlv-row">
          <span class="xdlv-row-icon">${t.fast ? u.truck : u.package}</span>
          <span class="xdlv-row-text">
            <span class="xdlv-row-content">${t.html}</span>
            ${e === 0 ? (
        /* HTML */
        `<button type="button" class="xdlv-change" data-xdlv-change>${m.changeLabel}</button>`
      ) : ""}
          </span>
        </div>
      `
    )
  ).join(""), w = "xdlv_zip_guess", $ = "https://ipwho.is/", P = async (n = 4e3) => {
    try {
      const t = sessionStorage.getItem(w);
      if (t) return JSON.parse(t);
    } catch {
    }
    try {
      const t = new AbortController(), e = setTimeout(() => t.abort(), n), i = await fetch($, { signal: t.signal });
      if (clearTimeout(e), !i.ok) return null;
      const o = await i.json();
      if (!(o != null && o.success)) return null;
      const s = String(o.country_code || ""), l = String(o.postal || "").trim();
      if (s !== "US" || !/^\d{5}$/.test(l)) return null;
      const r = { zip: l, countryCode: s };
      try {
        sessionStorage.setItem(w, JSON.stringify(r));
      } catch {
      }
      return r;
    } catch {
      return h("Xotic delivery block: IP geolocation unavailable, skipping auto ZIP", "warn"), null;
    }
  }, x = /* @__PURE__ */ new Map(), A = async (n, t = 4e3) => {
    var e;
    if (x.has(n)) return x.get(n) ?? null;
    try {
      const i = new AbortController(), o = setTimeout(() => i.abort(), t), s = await fetch(`https://api.zippopotam.us/us/${n}`, { signal: i.signal });
      if (clearTimeout(o), !s.ok)
        return x.set(n, null), null;
      const l = await s.json(), r = (e = l == null ? void 0 : l.places) == null ? void 0 : e[0], a = r == null ? void 0 : r["place name"], c = r == null ? void 0 : r["state abbreviation"], v = a && c ? `${a}, ${c}` : null;
      return x.set(n, v), v;
    } catch {
      return null;
    }
  }, C = 24 * 60 * 60 * 1e3, D = (n) => {
    const t = new Date(n);
    return Number.isNaN(t.getTime()) ? null : new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric" }).format(t);
  }, R = (n = /* @__PURE__ */ new Date()) => {
    const t = new Date(n.getTime() + C);
    for (; t.getDay() === 0 || t.getDay() === 6; ) t.setTime(t.getTime() + C);
    return new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric" }).format(t);
  }, I = async (n, t, e = 4e3) => {
    var i;
    try {
      const o = new AbortController(), s = setTimeout(() => o.abort(), e), l = await fetch(`https://shopify.deliverr.com/v3/variants/service-level/zip/${t}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ shopifyVariantIds: [n] }),
        signal: o.signal
      });
      if (clearTimeout(s), !l.ok) return { isoDate: null, minutesToCutoff: null, resolved: !1 };
      const r = await l.json(), a = (i = r == null ? void 0 : r.deliveryDates) == null ? void 0 : i[n], c = r == null ? void 0 : r.minutesToCutoff;
      return {
        isoDate: typeof a == "string" ? a : null,
        minutesToCutoff: typeof c == "number" ? c : null,
        resolved: !0
      };
    } catch {
      return { isoDate: null, minutesToCutoff: null, resolved: !1 };
    }
  }, Z = (n) => {
    if (!Number.isFinite(n) || n <= 0) return null;
    const t = Math.round(n);
    return { hours: Math.floor(t / 60), minutes: t % 60 };
  }, V = async (n = 4e3) => {
    try {
      const t = new AbortController(), e = setTimeout(() => t.abort(), n), i = await fetch("/cart.json", { signal: t.signal });
      if (clearTimeout(e), !i.ok) return null;
      const o = await i.json();
      return typeof (o == null ? void 0 : o.total_price) == "number" ? o.total_price : null;
    } catch {
      return null;
    }
  }, q = async (n, t, e = 4e3) => {
    var i;
    try {
      const o = new AbortController(), s = setTimeout(() => o.abort(), e), l = await fetch(`/products/${n}.js`, { signal: o.signal });
      if (clearTimeout(s), !l.ok) return null;
      const r = await l.json(), a = (i = r == null ? void 0 : r.variants) == null ? void 0 : i.find((c) => String(c.id) === String(t));
      return typeof (a == null ? void 0 : a.price) == "number" ? a.price : null;
    } catch {
      return null;
    }
  }, B = "$49.99", O = 1e4, k = "#cm-verify-fitment", N = () => {
    var i, o;
    const n = document.querySelector(`${k} .cm_verify-fitment_block`);
    if (!n) return { state: null, vehicle: "" };
    const t = n.classList.contains("cm_verify-fitment_block--yes") ? "yes" : n.classList.contains("cm_verify-fitment_block--no") ? "no" : null, e = ((o = (i = n.querySelector(".cm_verify-fitment_vehicle")) == null ? void 0 : i.textContent) == null ? void 0 : o.trim()) || "";
    return { state: t, vehicle: e };
  }, j = (n) => {
    const t = document.querySelector(k);
    if (!t) return;
    const e = () => n(N());
    e(), new MutationObserver(e).observe(t, { childList: !0, subtree: !0 });
  }, U = "button.product-form--atc-button[data-product-atc]", F = "h1.product-title", G = ".price__current", W = ["chat-button", "mount-floating-engagement-widget"];
  class X {
    constructor() {
      this.init();
    }
    async init() {
      var i;
      this.atcButton = await b(U);
      const t = document.querySelector(F), e = document.querySelector(G);
      if (!t || !e) {
        h("Xotic Sticky ATC: product title/price not found, skipping", "warn");
        return;
      }
      document.getElementById("xstkBar") || (document.body.insertAdjacentHTML("beforeend", M(((i = t.textContent) == null ? void 0 : i.trim()) || "")), this.barEl = document.getElementById("xstkBar"), this.fitEl = this.barEl.querySelector("#xstkFit"), this.renderPrice(e), this.observePrice(e), this.bindClick(), this.observeAtcVisibility(), j((o) => this.renderFitment(o.state)), y(
        "#xstkBar",
        "exp_xotic_sticky_atc_01",
        "PDP sticky add to cart",
        "PDP sticky add to cart bar visibility"
      ));
    }
    // Shopify themes keep both the single-price and price-range markup in the
    // DOM at once and toggle which one is visible via CSS — so we can't just
    // read the container's raw textContent (it'd include the hidden variant
    // too). `offsetParent` is null exactly for display:none elements, so this
    // picks out whichever `[data-price]` node the theme is actually showing.
    getVisiblePriceText(t) {
      var o;
      const e = Array.from(t.querySelectorAll("[data-price]")), i = e.find((s) => s.offsetParent !== null) || e[0];
      return ((o = i == null ? void 0 : i.textContent) == null ? void 0 : o.trim()) || "";
    }
    renderPrice(t) {
      const e = document.getElementById("xstkPrice");
      e && (e.textContent = this.getVisiblePriceText(t));
    }
    // Re-reads the price on any variant swap (the theme re-renders this
    // container's contents in place rather than dispatching an event we could
    // hook instead).
    observePrice(t) {
      new MutationObserver(() => this.renderPrice(t)).observe(t, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    }
    // `state` is only ever 'yes'/'no' once the visitor has actually gotten a
    // verdict from the fitment checker (see fitment.ts) — anything else (not
    // yet interacted, or "no fitment data" for this product) hides the pill.
    renderFitment(t) {
      if (this.fitEl) {
        if (this.fitEl.classList.remove("xstk-fit--yes", "xstk-fit--no"), !t) {
          this.fitEl.innerHTML = "";
          return;
        }
        this.fitEl.classList.add(t === "yes" ? "xstk-fit--yes" : "xstk-fit--no"), this.fitEl.innerHTML = t === "yes" ? (
          /* HTML */
          `${u.fitOk} Fit guaranteed`
        ) : (
          /* HTML */
          `${u.fitWarn} Doesn't fit`
        );
      }
    }
    bindClick() {
      d(this.barEl).on("click", "[data-xstk-atc]", () => {
        this.atcButton.click(), p("xotic_sticky_atc_click", "Sticky Add to cart clicked", "click", "PDP sticky add to cart bar");
      });
    }
    // Only "not visible AND scrolled past" should show the bar — not "not
    // visible because the visitor hasn't scrolled down to it yet" (e.g. right
    // after page load, before the real button has ever been reached). The
    // observer entry's own boundingClientRect tells us which side it's off on
    // without a separate scroll listener: once its bottom edge is above the
    // viewport's top (<= 0) the visitor has scrolled past it going down.
    observeAtcVisibility() {
      new IntersectionObserver(
        (e) => {
          const i = e[0], o = !i.isIntersecting && i.boundingClientRect.bottom <= 0;
          this.barEl.classList.toggle("xstk-bar--visible", o), this.adjustChatWidget(o);
        },
        { threshold: 0 }
      ).observe(this.atcButton);
    }
    // Shifts the chat widget up clear of the bar (see GORGIAS_WIDGET_IDS) while
    // the bar is showing, and lets it settle back to its own resting position
    // once the bar hides again. Never assumes the widget exists — it's a
    // separate app and may not have loaded (or be ad-blocked).
    adjustChatWidget(t) {
      const e = t ? this.barEl.offsetHeight : 0;
      for (const i of W) {
        const o = document.getElementById(i);
        o && (o.style.transition = "transform 0.25s ease", o.style.transform = e ? `translateY(-${e}px)` : "");
      }
    }
  }
  E({ name: "Xotic Delivery Block", dev: "AI" });
  class Y {
    // last confirmed US ZIP — prefills our own "Change" modal on reopen
    constructor() {
      this.resolvedLocation = null, this.pendingAutoZip = null, this.usRows = null, this.lastZip = null, this.init();
    }
    async init() {
      if (await b("head"), document.head.insertAdjacentHTML("beforeend", `<style>${S}</style>`), this.nativeRoot = await this.findHydratedNativeRoot(), this.nativeRoot.classList.add("xdlv-native-root"), d("#xdlvBlock").elements.length === 0 && this.nativeRoot.insertAdjacentHTML("afterend", T()), y("#xdlvBlock", "exp_xotic_delivery_block_01", "PDP delivery block", "PDP delivery block visibility"), this.labelEl = this.nativeRoot.querySelector(".deliverr-label"), this.changeToggle = this.nativeRoot.querySelector(".deliverr-zip-deliver-to"), this.locationTextEl = this.nativeRoot.querySelector(".deliverr-zip-deliver-to-text"), !this.labelEl || !this.changeToggle) {
        h("Xotic Delivery Block: unexpected Deliverr markup, skipping redesign", "warn");
        return;
      }
      this.bindBlock(), this.bindZipSubmit(), this.render(), this.observeNativeChanges(), await this.maybeAutoDetectUsZip();
    }
    // Resolves to whichever `deliverr[data-component="BadgeWithCountdown"]`
    // tag actually gets real Deliverr content — never just "the first one in
    // the DOM" (see the comment above the call site for why that's unsafe on
    // this store). Watches the whole document rather than a single element
    // since the real tag is the only server-rendered one on this page, but
    // nothing here assumes that stays true (a second copy could just as
    // easily be inserted later instead of already sitting empty in the DOM).
    //
    // Also confirmed live (via a visitor's own console): the "unexpected
    // Deliverr markup, skipping redesign" warning right after this used to
    // fire even though the very same two selectors *were* both present
    // moments later in the settled DOM — i.e. a mutation batch can make a
    // candidate momentarily look ready, only for Deliverr's own re-render to
    // briefly pull one of them again microtasks later, right before our
    // synchronous re-query in init() ran. A `setTimeout` debounce after each
    // candidate match moves that re-check to a later macrotask, past whatever
    // synchronous re-render was still in flight, so we only ever trust a
    // match that's held for a quiet 300ms with no further mutations — and if
    // it hasn't, we just keep watching instead of resolving on the false
    // positive.
    //
    // No timeout — if Deliverr's script never runs (a genuinely ad-blocked
    // visitor, say) this simply never resolves and we never touch anything,
    // same as the rest of this experiment's "just keep watching" approach
    // elsewhere (see waitEl usage above).
    findHydratedNativeRoot() {
      return new Promise((t) => {
        const e = (r) => !!r.querySelector(".deliverr-label") && !!r.querySelector(".deliverr-zip-deliver-to"), i = () => Array.from(document.querySelectorAll('deliverr[data-component="BadgeWithCountdown"]')).find(
          e
        ) || null;
        let o;
        const s = () => {
          clearTimeout(o), o = setTimeout(() => {
            const r = i();
            r && (l.disconnect(), t(r));
          }, 300);
        }, l = new MutationObserver(s);
        l.observe(document.documentElement, { childList: !0, subtree: !0 }), s();
      });
    }
    observeNativeChanges() {
      let t = !1;
      const e = () => {
        t || (t = !0, requestAnimationFrame(() => {
          t = !1, this.render();
        }));
      };
      new MutationObserver(e).observe(this.nativeRoot, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    }
    // Once we have our own real-data rows for a resolved US ZIP (see
    // buildUsRows), those take over entirely — the native rows never update
    // after a confirm (see applyZip), so continuing to mirror them alongside a
    // real city/state would show contradictory copy ("standard international
    // shipping" next to "Beverly Hills, CA"). Groups of `.deliverr-label-sla*`
    // are the pre-detection/non-US fallback: one row per native service level,
    // not assuming a fixed count so it keeps working whatever combination a
    // given ZIP resolves to there.
    //
    // Row 2 ("1-Day Shipping") is appended to that fallback too, not just to
    // the resolved-US rows above — per Figma this is a persistent second row,
    // and it doesn't need a ZIP to be correct (flat rate, "next business day"
    // regardless of destination), so there's no reason for a visitor who
    // hasn't resolved a US ZIP (or isn't going to — e.g. genuinely outside the
    // US) to see only the generic native row while this one waits.
    getSlaRows() {
      if (this.usRows) return this.usRows;
      if (!this.labelEl) return [];
      const t = this.getFreeShippingQualifierHtml(), e = Array.from(this.labelEl.children).filter((i) => i.classList.contains("deliverr-label-sla")).map((i, o) => {
        var a;
        const s = Array.from(i.classList).find((c) => c !== "deliverr-label-sla") || "", l = parseInt(((a = s.match(/(\d+)\s*day/)) == null ? void 0 : a[1]) || "", 10), r = /1day|2day|next.?day|same.?day/i.test(s) || !Number.isNaN(l) && l <= 3;
        return { html: o === 0 ? i.innerHTML + t : i.innerHTML, fast: r };
      });
      return e.length ? [...e, this.fastShippingRow()] : [];
    }
    getLocationText() {
      var e, i;
      if (this.resolvedLocation) return this.resolvedLocation;
      const t = ((i = (e = this.locationTextEl) == null ? void 0 : e.textContent) == null ? void 0 : i.trim()) || "";
      return t && t.toLowerCase() !== "outside us" ? t : "";
    }
    // An empty `rows` here isn't the "Deliverr hasn't hydrated yet" gap — that
    // case never reaches render() at all, since it's only ever called after
    // findHydratedNativeRoot has already resolved to a settled, real-content
    // root (or, for a confirmed US ZIP, after buildUsRows's own fetches have
    // come back). So zero rows past that point means whatever's currently
    // resolved (native fallback location, or a confirmed ZIP) genuinely has no
    // deliverable option — Deliverr's own badge would just show nothing at all
    // for it rather than a message of its own, which is exactly the "block
    // disappears" gap this covers: we show unavailableRow() instead of
    // silently leaving the shell as whatever it last displayed (or never
    // showing it to begin with).
    render() {
      var i;
      const t = this.getSlaRows(), e = document.getElementById("xdlvRows");
      e && (e.innerHTML = t.length ? z(t) : _()), (i = document.getElementById("xdlvBlock")) == null || i.classList.remove("xdlv-hidden");
    }
    bindBlock() {
      const t = document.getElementById("xdlvBlock");
      t && (d(t).on("click", "[data-xdlv-change]", () => {
        this.openChangeModal(), p("xotic_delivery_block_change", "Change delivery location clicked", "click", "PDP delivery block");
      }), d(t).on("click", "[data-xdlv-modal-close]", () => this.closeChangeModal()), d(t).on("click", "[data-xdlv-modal-submit]", () => this.confirmChangeModal()), d(t).on("change", "[data-xdlv-modal-country]", () => {
        const e = document.querySelector("[data-xdlv-modal-country]");
        e && this.updateModalZipVisibility(e.value);
      }), d(t).on("keydown", "[data-xdlv-modal-zip]", (e) => {
        e.key === "Enter" && this.confirmChangeModal();
      }), document.addEventListener("keydown", (e) => {
        e.key === "Escape" && this.closeChangeModal();
      }));
    }
    // Our own popover — see the block comment on changeModal() in block.ts for
    // why this exists instead of re-skinning Deliverr's own modal in place.
    // Always reopens on "United States" with the last confirmed ZIP prefilled
    // (or blank): Deliverr's own select resets to "Outside US" (re-disabling
    // its ZIP field) every time *its* modal reopens — confirmed live, it never
    // remembers a previous session's choice, even right after a successful
    // confirm — and most visitors opening "Change" are here to correct/confirm
    // a US ZIP, not to switch away from one.
    openChangeModal() {
      const t = document.getElementById("xdlvModal"), e = document.querySelector(".xdlv-modal-backdrop"), i = document.querySelector("[data-xdlv-modal-country]"), o = document.querySelector("[data-xdlv-modal-zip]");
      !t || !e || !i || !o || (i.value = "United States", o.value = this.lastZip || "", this.updateModalZipVisibility(i.value), e.hidden = !1, t.hidden = !1, o.focus());
    }
    closeChangeModal() {
      const t = document.getElementById("xdlvModal"), e = document.querySelector(".xdlv-modal-backdrop");
      t && (t.hidden = !0), e && (e.hidden = !0);
    }
    updateModalZipVisibility(t) {
      const e = document.querySelector("[data-xdlv-modal-zip-label]"), i = document.querySelector("[data-xdlv-modal-zip]");
      if (!e || !i) return;
      const o = t === "United States";
      e.hidden = !o, i.disabled = !o;
    }
    // Confirming in *our* modal never touches Deliverr's own modal DOM (never
    // shown at all) — it drives the same underlying <select>/<input>/submit
    // button maybeAutoDetectUsZip already drives programmatically, so their
    // own validation/submit side effects (analytics, session state, etc.)
    // still run exactly as if a visitor had used their real modal, and the
    // result still flows through bindZipSubmit below like any other confirm.
    async confirmChangeModal() {
      const t = document.querySelector("[data-xdlv-modal-country]"), e = document.querySelector("[data-xdlv-modal-zip]");
      if (!t || !e) return;
      const i = t.value, o = e.value.trim();
      if (i === "United States" && !/^\d{5}$/.test(o)) {
        e.focus();
        return;
      }
      const s = this.nativeRoot.querySelector(
        "select.deliverr-zip-location-field--country"
      ), l = this.nativeRoot.querySelector("input.deliverr-zip-location-field--zipcode"), r = this.nativeRoot.querySelector("button.deliverr-zip-location-submit");
      if (!(!s || !l || !r)) {
        if (this.setNativeValue(s, i), await new Promise((a) => setTimeout(a, 150)), i === "United States") {
          if (l.disabled) return;
          this.setNativeValue(l, o);
        }
        r.click(), this.closeChangeModal();
      }
    }
    // Delegated on the (stable) native root rather than the submit button
    // itself, since Deliverr may re-render/replace that button internally —
    // and bound in the *capture* phase specifically: Deliverr's own submit
    // handler calls stopPropagation() (confirmed live — a normal bubble-phase
    // listener here never sees the click at all), which only blocks bubble-
    // phase ancestor listeners. A capture-phase listener runs top-down before
    // the target's own handler, so it always sees the click regardless.
    // Fires on both a real visitor confirming the modal *and* our own
    // programmatic submit in maybeAutoDetectUsZip — either way, whatever ZIP
    // is actually in the field at click-time is what we resolve and show.
    bindZipSubmit() {
      this.nativeRoot.addEventListener(
        "click",
        (t) => {
          var s, l, r, a;
          if (!((s = t.target) != null && s.closest(".deliverr-zip-location-submit"))) return;
          const e = (l = this.nativeRoot.querySelector(
            "select.deliverr-zip-location-field--country"
          )) == null ? void 0 : l.value, i = (a = (r = this.nativeRoot.querySelector("input.deliverr-zip-location-field--zipcode")) == null ? void 0 : r.value) == null ? void 0 : a.trim();
          if (e !== "United States" || !i || !/^\d{5}$/.test(i)) {
            this.resolvedLocation = null, this.usRows = null, this.pendingAutoZip = null, this.render();
            return;
          }
          const o = i === this.pendingAutoZip ? "auto" : "manual";
          this.pendingAutoZip = null, this.applyZip(i, o);
        },
        !0
      );
    }
    // Resolves "City, ST" *and* real delivery rows for the given ZIP, then
    // repaints once — this is what actually changes on screen, independently
    // of (and faster than) whatever Deliverr's own badge eventually does with
    // the same ZIP (confirmed live: it doesn't). Location is resolved *before*
    // building the rows (not in parallel, as before) because it's now embedded
    // directly into row 1's own text ("FREE delivery, {city}, {state} {zip},
    // by {date}") rather than appended separately afterward — buildUsRows
    // needs the final string up front to compose that.
    async applyZip(t, e) {
      const i = await A(t), o = i ? `${i} ${t}` : t, s = await this.buildUsRows(t, o);
      this.resolvedLocation = o, this.usRows = s, this.lastZip = t, this.render(), p(
        `xotic_delivery_block_${e}_zip`,
        `${e === "auto" ? "Auto-detected" : "Confirmed"} ZIP ${t}${i ? ` (${i})` : ""}`,
        "other",
        "PDP delivery block"
      );
    }
    // Confirmed live: `data-handle`/`data-variantid` live on the *server-
    // rendered* `<deliverr>` tag (the "app embed" placement — see the comment
    // on findHydratedNativeRoot above), not on the one Deliverr's script
    // actually inserts and hydrates. Since findHydratedNativeRoot commits
    // `this.nativeRoot` to whichever tag ends up with real *content*, reading
    // these two attributes off it directly can come up empty — so this looks
    // across every matching tag on the page for whichever one actually
    // carries them, independently of which is `this.nativeRoot`.
    //
    // Deliberately queries plain `deliverr`, not `deliverr[data-component=
    // "BadgeWithCountdown"]` — confirmed live on a single-variant product: its
    // server-rendered tag declared `data-component="Badge"` (not
    // "BadgeWithCountdown") while still carrying a real `data-variantid`, even
    // though the widget that actually hydrates on that same page is still a
    // BadgeWithCountdown. Whatever component type the identity attributes
    // happen to sit on, they're the same product either way.
    getVariantContext() {
      const t = Array.from(document.querySelectorAll("deliverr")).find((e) => e.dataset.variantid);
      return { variantId: t == null ? void 0 : t.dataset.variantid, handle: t == null ? void 0 : t.dataset.handle };
    }
    // Row 2 — a flat, merchant-configured Shopify rate ($49.99, confirmed live
    // via /cart/shipping_rates.json — see the note in shipping.ts) that would
    // otherwise require temporarily adding the product to the visitor's real
    // cart just to read back, so the price stays fixed here. "1-Day" is
    // hardcoded too, on purpose — it's the actual express tier on nearly every
    // product on this store; the `serviceLevel` field this could otherwise
    // come from isn't confirmed to literally mean "days" the way
    // `deliveryDates`/`minutesToCutoff` clearly do, so it's not worth the risk
    // of an occasional wrong label over one hardcoded value that's right
    // almost everywhere. `cutoffMinutes` defaults to null for the zip-less
    // fallback call in getSlaRows above, which has no fetch to draw one from.
    fastShippingRow(t = null) {
      const e = t !== null ? Z(t) : null, i = e ? ` if ordered within <span class="xdlv-row-cutoff">${e.hours} hrs ${e.minutes} mins</span>` : "";
      return {
        html: `1-Day Shipping – <b>${B}, by ${R()}</b>${i}`,
        fast: !0
      };
    }
    // When this order doesn't clear the free-shipping minimum, Deliverr's own
    // label still shows the FREE row, just with a qualifier clause appended —
    // confirmed live on a sub-$100 product, both pre-ZIP (native fallback) and
    // once a US ZIP is resolved: "FREE delivery by [date] for orders over $100"
    // (`.deliverr-below-cart-minimum`, a sibling of the date inside
    // `.deliverr-label`). We mirror that verbatim rather than inventing our own
    // wording, and only when it's actually there — a visitor short of the
    // minimum gets an honest explanation, not a FREE row that silently
    // vanishes with no reason given. Used both here (post-ZIP) and by
    // getSlaRows above (native fallback, pre-ZIP) since the qualifier itself is
    // cart-total-based, not ZIP-based — there's no reason to wait on a ZIP to
    // show it.
    //
    // This element tracks the real cart value, not the ZIP just confirmed, so
    // it's safe to read any time — including right after a confirm, before
    // Deliverr's own (unreliable, per the comment up top) re-render has
    // necessarily caught up on the ZIP-specific parts of this same label.
    getFreeShippingQualifierHtml() {
      var o;
      const t = (o = this.labelEl) == null ? void 0 : o.querySelector(".deliverr-below-cart-minimum"), e = t ? Array.from(t.children).find((s) => s.tagName !== "TIME") : null;
      return ((e == null ? void 0 : e.outerHTML) || "").replace(/\s+(?=<span class="deliverr-cart-minimum">)/, "&nbsp;");
    }
    // Both rows are always shown once a US ZIP is resolved — per Figma
    // (node-id 219-7158), this is a persistent two-row block, not one that
    // can collapse to a single row.
    //
    // Row 1 ("FREE delivery, {city}, {state} {zip}, by {date}") needs the
    // order to actually qualify for the site's own "FREE SHIPPING on orders
    // $100+" — but checking only the *current* cart (via /cart.json) meant
    // this almost never showed on a first PDP visit: the cart is empty (0) at
    // that point regardless of this product's own price. So the qualifying
    // total is the current cart PLUS this variant's own price (via the
    // first-party /products/{handle}.js endpoint) — i.e. "would this order
    // clear $100 with the item you're looking at in it", which is what a
    // visitor actually cares about here. (A visitor who already has this exact
    // variant in their cart and is about to add more may see the threshold
    // clear a little earlier than literally true — an acceptable, generous
    // edge over the alternative of this row essentially never appearing.) When
    // it doesn't qualify, the row still shows (with the native qualifier
    // clause appended, see getFreeShippingQualifierHtml) as long as we at
    // least have a real date — never a bare "FREE delivery" with nothing to
    // back it. The date itself still only ever comes from Deliverr's own
    // read-only per-variant endpoint (the one their widget calls on load) —
    // never assumed. `locationText` is resolved by applyZip before this runs
    // (see its own comment) so it can be embedded directly in the row's text.
    //
    // Row 2's cutoff copy ("if ordered within X hrs Y mins") comes from that
    // same per-variant endpoint response, fetched unconditionally here (not
    // just when the FREE row qualifies) since row 2 always needs it.
    //
    // Both rows are gated on `formatted` (i.e. the endpoint actually returning
    // a delivery date for this ZIP), not just row 1 — a ZIP this endpoint can't
    // produce any date for at all means Deliverr's own real-time lookup found
    // no deliverable service level to that address, and row 2's flat paid rate
    // is itself a real Deliverr-fulfilled shipping option, not a
    // Shopify-native one, so there's no reason to assume it's available where
    // Deliverr says nothing is. `resolved` (see ServiceLevelInfo) is what tells
    // that apart from a plain fetch failure/timeout — an unresolved call means
    // we simply don't know, so row 2 still falls back to showing rather than
    // wrongly implying the address is undeliverable.
    async buildUsRows(t, e) {
      const i = [], { variantId: o, handle: s } = this.getVariantContext(), [l, r, a] = await Promise.all([
        V(),
        o && s ? q(s, o) : Promise.resolve(null),
        o ? I(o, t) : Promise.resolve({ isoDate: null, minutesToCutoff: null, resolved: !1 })
      ]), v = (l ?? 0) + (r ?? 0) >= O, g = a.isoDate ? D(a.isoDate) : null;
      if (g) {
        const L = v ? "" : this.getFreeShippingQualifierHtml();
        (v || L) && i.push({
          html: `<b>FREE</b> delivery, <span class="xdlv-row-loc">${e}</span>, by ${g}${L}`,
          fast: !1
        });
      }
      return (g || !a.resolved) && i.push(this.fastShippingRow(a.minutesToCutoff)), i;
    }
    // If Deliverr's own IP lookup couldn't place the visitor in the US, take one
    // best-effort shot at a ZIP via our own geolocation and drive the real,
    // native zip form fields with it — directly, without ever toggling the
    // modal open, so a correct guess never flashes a popup the visitor didn't
    // ask for. The modal's own form controls exist in the DOM (just visually
    // hidden) whether or not it's open, so setting their values and dispatching
    // the same events a real interaction would is enough for Deliverr's own
    // handlers to pick the change up (and clicking Confirm also runs through
    // bindZipSubmit above, same as a real visitor). The visitor can still open
    // the (Figma-restyled) modal themselves via "Change" to correct the guess.
    async maybeAutoDetectUsZip() {
      if (this.getLocationText()) return;
      const t = await P();
      if (!t) return;
      const e = this.nativeRoot.querySelector(
        "select.deliverr-zip-location-field--country"
      ), i = this.nativeRoot.querySelector("input.deliverr-zip-location-field--zipcode"), o = this.nativeRoot.querySelector("button.deliverr-zip-location-submit");
      !e || !i || !o || (this.setNativeValue(e, "United States"), await new Promise((s) => setTimeout(s, 150)), !i.disabled && (this.setNativeValue(i, t.zip), this.pendingAutoZip = t.zip, o.click()));
    }
    // Native <select>/<input> are controlled by Deliverr's own framework, so a
    // plain `.value = x` assignment gets ignored on the next render — going
    // through the native setter + a real `input`/`change` event is what makes
    // their controller pick the change up (mirrors how a real user interaction
    // would fire).
    setNativeValue(t, e) {
      var o, s;
      const i = t instanceof HTMLSelectElement ? window.HTMLSelectElement.prototype : window.HTMLInputElement.prototype;
      (s = (o = Object.getOwnPropertyDescriptor(i, "value")) == null ? void 0 : o.set) == null || s.call(t, e), t.dispatchEvent(new Event("input", { bubbles: !0 })), t.dispatchEvent(new Event("change", { bubbles: !0 }));
    }
  }
  new Y(), new X();
})();
//# sourceMappingURL=index.js.map
