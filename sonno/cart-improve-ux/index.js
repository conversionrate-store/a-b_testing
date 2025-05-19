var K = function() {
  "use strict";
  const A = (c, t, e, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: c,
      event_desc: t,
      event_type: e,
      event_loc: n
    }), console.log(`Event: ${c} | ${t} | ${e} | ${n}`);
  }, q = ({ name: c, dev: t }) => {
    console.log(
      `%c EXP: ${c} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, I = (c) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", c, "variant_1"));
    }, 1e3);
  };
  function p(c) {
    return new Promise((t) => {
      if (document.querySelector(c))
        return t(document.querySelector(c));
      const e = new MutationObserver(() => {
        document.querySelector(c) && (t(document.querySelector(c)), e.disconnect());
      });
      e.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const L = `.estimate-delivery-wrapper {
  padding: 16px 20px;
  border-radius: 8px;
  background: rgba(165, 211, 255, 0.24);
}

.delivery-status {
  margin: 0 !important;
  text-align: left !important;
  color: #000 !important;
  font-size: 16px !important;
  font-weight: 500 !important;
  line-height: 24px !important;
  letter-spacing: 0.4px !important;
}
.estimate-delivery-ele {
  display: none !important;
}

.crs-estimate-delivery-items {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.crs-estimate-delivery-item {
  position: relative;
  display: flex;
  gap: 12px;
}
.crs-estimate-delivery-item::before {
  flex-shrink: 0;
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid #fff;
  background: #f89201;
}

.crs-estimate-delivery-item::after {
  position: absolute;
  top: 20px;
  left: 10px;
  transform: translateX(-50%);
  content: '';
  display: block;
  width: 6px;
  height: 100%;
  background: #f89201;
}

.crs-estimate-delivery-item:last-child::after {
  background: #f892014d;
  height: calc(100% - 20px);
  border-radius: 0 0 20px 20px;
}

.crs-estimate-delivery-item .crs-title {
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21.85px;
}

.crs-estimate-delivery-item .crs-description {
  color: #000;
  font-size: 12px;
  font-weight: 500;
  line-height: 21.85px;
  letter-spacing: 0.364px;
}

.crs-estimate-delivery-item .crs-note {
  color: #1e3851;
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
}

@media (min-width: 768px) {
  .delivery-status {
    margin: 0 !important;

    font-size: 20px !important;
    font-weight: 500 !important;
    line-height: 28px !important;
    max-width: 100% !important;
  }
  .crs-estimate-delivery-items {
    margin-top: 20px;
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
  }

  .crs-estimate-delivery-item {
    min-width: 86px;
    max-width: 276px;
  }

  .crs-estimate-delivery-items::after {
    content: '';
    position: absolute;
    top: 28px;
    left: 5px;
    display: block;
    width: 100%;
    height: 6px;
    background: #f892014d;
    border-radius: 20px;
  }
  .crs-estimate-delivery-items::before {
    content: '';
    position: absolute;
    top: 28px;
    left: 5px;
    display: block;
    width: 80%;
    height: 6px;
    background: #f89201;
    border-radius: 20px;
  }
  .crs-estimate-delivery-item::before {
    display: none;
  }

  .crs-estimate-delivery-item .crs-content {
    display: flex;
    flex-direction: column;
  }

  .crs-estimate-delivery-item .crs-title {
    display: flex;
    flex-direction: column;
    /* white-space: nowrap; */
  }
  .crs-estimate-delivery-item::after {
    display: none;
  }
  .crs-estimate-delivery-item .crs-title::after {
    flex-shrink: 0;
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid #fff;
    background: #f89201;
  }

  .crs-estimate-delivery-item .crs-description {
    /* white-space: nowrap; */
  }
}
`;
  class T {
    constructor() {
      this.device = window.innerWidth < 768 ? "mobile" : "desktop", this.init();
    }
    init() {
      this.addStyles(), this.render(), this.handleTitleWrap();
    }
    async render() {
      var a, d;
      const t = await p(
        ".footer-cart .estimate-delivery-wrapper"
      ), e = t.querySelectorAll(
        ".estimate-delivery-item"
      ), n = (a = e[0].querySelector(
        ".estimate-delivery-date"
      )) == null ? void 0 : a.textContent, r = (d = e[2].querySelector(
        ".estimate-delivery-date"
      )) == null ? void 0 : d.textContent;
      let i = "";
      if (r) {
        const o = r.match(
          /([A-Za-z]+) (\d{1,2}) - ([A-Za-z]+) (\d{1,2})/
        ), h = (/* @__PURE__ */ new Date()).getFullYear();
        if (o) {
          const l = /* @__PURE__ */ new Date(`${o[1]} ${o[2]}, ${h}`), m = /* @__PURE__ */ new Date(`${o[3]} ${o[4]}, ${h}`), u = new Date(
            l.getTime() + 60 * 24 * 60 * 60 * 1e3
          ), f = new Date(m.getTime() + 60 * 24 * 60 * 60 * 1e3), x = (g) => g.toLocaleString("en-US", { month: "short", day: "numeric" });
          i = `${x(u)} - ${x(f)}`;
        }
      }
      const s = (
        /* HTML */
        `
      <div class="crs-estimate-delivery">
        <div class="crs-estimate-delivery-items">
          <div class="crs-estimate-delivery-item">
            <div class="crs-content">
              <div class="crs-title">
                <span class="crs-title-text">Ordered</span>
              </div>
              <div class="crs-description">
                ${n}, ${(/* @__PURE__ */ new Date()).getFullYear()}
              </div>
            </div>
          </div>
          <div class="crs-estimate-delivery-item">
            <div class="crs-content">
              <div class="crs-title">
                <span class="crs-title-text">Delivered</span>
              </div>
              <div class="crs-description">${r}</div>
            </div>
          </div>
          <div class="crs-estimate-delivery-item">
            <div class="crs-content">
              <div class="crs-title">
                <span class="crs-title-text">Enjoy a 60-Night Free Trial</span>
              </div>
              <div class="crs-description">${i}</div>
              <div class="crs-note">
                Not fully satisfied? Don't worry; we'll arrange a return or
                exchange for you.
              </div>
            </div>
          </div>
        </div>
      </div>
    `
      );
      t && t.insertAdjacentHTML("beforeend", s);
    }
    async handleTitleWrap() {
      await p(".crs-estimate-delivery-item .crs-title");
      const t = document.querySelectorAll(
        ".crs-estimate-delivery-item .crs-title"
      ), e = () => {
        t.forEach((n) => {
          const r = n.closest(".crs-content"), i = n.querySelector(".crs-title-text"), s = r == null ? void 0 : r.querySelector(".crs-description"), a = r == null ? void 0 : r.querySelector(".crs-note");
          if (!i) return;
          const d = parseFloat(getComputedStyle(i).lineHeight);
          i.offsetHeight > d + 1 ? (n.style.transform = "translateY(-22px)", s && (s.style.transform = "translateY(-22px)"), a && (a.style.transform = "translateY(-22px)")) : (n.style.transform = "", s && (s.style.transform = ""), a && (a.style.transform = ""));
        });
      };
      window.addEventListener("resize", e), e();
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = L, document.head.appendChild(t);
    }
  }
  const z = `@media (min-width: 768px) {
  .crs-cta {
    display: none;
  }
}

.crs-cta {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}

.crs-cta-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  background-color: #fff;
}

.crs-cta-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 48px;
  border-radius: 8px;
  background: #f89201;
  color: #fff;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  line-height: 32px;
}

[data-fixed-cta="true"] .rp-micro-app-dummy-icon-container {
  bottom: 70px !important;
}`;
  class D {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.render(), this.observeCheckoutLinks(), this.eventListeners();
    }
    render() {
      document.body.insertAdjacentHTML(
        "beforeend",
        /* HTML */
        `
      <div class="crs-cta">
        <div class="crs-cta-inner">
          <a href="/checkout" class="crs-cta-button" id="crs-cta-btn"
            >See Order Summary</a
          >
        </div>
      </div>
    `
      );
    }
    eventListeners() {
      const t = document.getElementById("crs-cta-btn");
      t && t.addEventListener("click", (e) => {
        A(
          "exp_m_upsell_click_05",
          "See Order Summary",
          "click",
          "See Order Summary"
        );
      });
    }
    observeCheckoutLinks() {
      const t = document.querySelector(".crs-cta");
      if (!t) return;
      const e = () => {
        const i = Array.from(
          document.querySelectorAll('a[href="/checkout"]:not(.crs-cta-button)')
        ).some((s) => {
          const a = s.getBoundingClientRect(), d = a.top < window.innerHeight && a.bottom > 0 && a.left < window.innerWidth && a.right > 0, o = window.getComputedStyle(s);
          return d && o.display !== "none" && o.visibility !== "hidden" && o.opacity !== "0";
        });
        t.style.display = i ? "none" : "", document.body.dataset.fixedCta = i ? "false" : "true";
      };
      new MutationObserver(e).observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["style", "class"]
      }), window.addEventListener("scroll", e, !0), window.addEventListener("resize", e), e();
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = z, document.head.appendChild(t);
    }
  }
  const $ = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="37"
  height="19"
  fill="none"
>
  <path
    fill="#09457E"
    d="M27.481 10.5a1.338 1.338 0 0 0-.307 1.565 1.33 1.33 0 0 1-.275 1.527c-.132.127-.29.226-.462.288-.281.1-.52.292-.68.546-.159.254-.228.555-.197.854a1.347 1.347 0 0 1-.446 1 1.318 1.318 0 0 1-1.039.325c-.27.002-.534.09-.753.25-.22.16-.383.386-.47.645a1.322 1.322 0 0 1-.735.788 1.296 1.296 0 0 1-1.072-.033 1.32 1.32 0 0 0-.817-.105c-.807.135-.777.85-1.713.85s-.906-.715-1.713-.86a1.295 1.295 0 0 0-.817.105 1.297 1.297 0 0 1-1.52-.274 1.322 1.322 0 0 1-.287-.471 1.314 1.314 0 0 0-.476-.642 1.293 1.293 0 0 0-.757-.243 1.31 1.31 0 0 1-1.067-.349 1.335 1.335 0 0 1-.418-1.051 1.33 1.33 0 0 0-.21-.815 1.309 1.309 0 0 0-.656-.52 1.3 1.3 0 0 1-.783-.742 1.326 1.326 0 0 1 .035-1.083 1.342 1.342 0 0 0-.297-1.555 1.324 1.324 0 0 1-.451-1 1.336 1.336 0 0 1 .45-1 1.338 1.338 0 0 0 .308-1.565 1.33 1.33 0 0 1 .275-1.527c.133-.127.29-.226.463-.288.28-.1.52-.292.679-.546.159-.254.228-.555.197-.854a1.347 1.347 0 0 1 .447-1 1.318 1.318 0 0 1 1.038-.325c.27-.002.534-.09.753-.25.22-.16.384-.386.47-.645.09-.26.257-.485.478-.644.222-.16.488-.246.76-.246.495 0 .619.265 1.143.265 1.006.01.966-.875 1.956-.875a1.306 1.306 0 0 1 .99.445 1.314 1.314 0 0 0 1.55.31 1.297 1.297 0 0 1 1.512.278c.126.134.224.293.285.467.099.284.29.525.541.686.252.16.55.23.845.199a1.311 1.311 0 0 1 .991.451 1.34 1.34 0 0 1 .322 1.049c.002.273.088.54.247.76.159.222.382.388.639.475.257.09.48.26.638.483.158.224.243.492.243.767 0 .5-.262.625-.262 1.155-.01 1.015.866.975.866 1.975a1.343 1.343 0 0 1-.44 1Z"
  />
  <path
    fill="#09457E"
    d="M27.48 10.5a1.338 1.338 0 0 0-.306 1.565 1.33 1.33 0 0 1-.275 1.527c-.133.127-.29.226-.463.288a1.303 1.303 0 0 0-.63.473c-.156.219-.242.482-.246.752a8.805 8.805 0 0 1-6.055 2.395c-7.788 0-11.779-9.41-6.54-15.105.269-.004.53-.093.747-.253.217-.16.38-.385.466-.642.088-.26.255-.486.477-.645.222-.16.488-.245.76-.245.495 0 .62.265 1.144.265 1.005.01.965-.875 1.956-.875a1.306 1.306 0 0 1 .99.445 1.314 1.314 0 0 0 1.55.31 1.297 1.297 0 0 1 1.511.278c.127.134.224.293.286.467.098.284.289.525.54.686.252.16.55.23.846.199a1.31 1.31 0 0 1 .99.451 1.337 1.337 0 0 1 .322 1.049c.002.273.089.54.248.76.159.222.382.388.638.475.257.09.48.26.638.483.158.224.243.492.243.767 0 .5-.262.625-.262 1.155-.01 1.015.867.975.867 1.975a1.343 1.343 0 0 1-.441 1Z"
  />
  <path
    fill="#FFFFFE"
    d="M24.95 9.5c0 .854-.166 1.699-.49 2.487a6.506 6.506 0 0 1-1.394 2.11 6.433 6.433 0 0 1-2.088 1.408 6.383 6.383 0 0 1-2.463.495c-6.056 0-8.759-7.75-4.026-11.565a6.381 6.381 0 0 1 6.808-.79 6.458 6.458 0 0 1 2.662 2.396 6.547 6.547 0 0 1 .992 3.459Z"
  />
  <path
    fill="#FFFFFE"
    d="M24.953 9.5a6.48 6.48 0 0 1-1.421 4.065 6.394 6.394 0 0 1-4.366 1.39 6.408 6.408 0 0 1-4.176-1.893 6.53 6.53 0 0 1-1.875-4.218 6.544 6.544 0 0 1 1.376-4.409 6.38 6.38 0 0 1 6.808-.79 6.457 6.457 0 0 1 2.662 2.396 6.546 6.546 0 0 1 .992 3.459Z"
  />
  <path
    fill="#F89201"
    stroke="#F89201"
    stroke-width=".2"
    d="M18.5 4.39c.68 0 1.349.242 1.868.692l.117.105c.574.538.898 1.297.898 2.086a.65.65 0 0 1-.656.657.65.65 0 0 1-.657-.657c0-.46-.199-.9-.553-1.192h-.002a1.524 1.524 0 0 0-1.015-.378c-.093 0-.176.011-.278.023-.39.063-.756.311-.997.669-.24.376-.313.826-.208 1.267l.302 1.182h2.294a.65.65 0 0 1 .657.656.65.65 0 0 1-.657.656h-1.958c.115.54.067 1.083-.12 1.58.357.054.705.163 1.017.35h-.001c.127.07.243.15.356.241l.112.081a1.573 1.573 0 0 0 1.746 0l.111-.08a.652.652 0 0 1 .92.106.652.652 0 0 1-.107.92v-.002a2.858 2.858 0 0 1-3.237.243 2.158 2.158 0 0 1-.185-.114l-.174-.129a1.558 1.558 0 0 0-1.948-.01l-.005.005-.001-.001a.761.761 0 0 1-.552.135.637.637 0 0 1-.42-.273l-.002-.002a.662.662 0 0 1 .14-.866v-.022l.046-.029.355-.234.1-.073a1.562 1.562 0 0 0 .549-1.622v-.002l-.05-.202H15.16a.65.65 0 0 1-.656-.656.65.65 0 0 1 .656-.656h.806l-.224-.855a2.913 2.913 0 0 1 .393-2.307c.437-.667 1.117-1.13 1.88-1.257h.004l.24-.027c.08-.005.16-.007.241-.007Z"
  />
  <path
    fill="#F89201"
    d="m34.598 7.042-1.95 2.584 1.937 2.61-7.265-.05c.212-.753.82-.793 1.172-1.399a1.69 1.69 0 0 0 .247-1.024 1.717 1.717 0 0 0-.405-.978 1.713 1.713 0 0 1-.396-.853 1.687 1.687 0 0 1 .117-.928l6.543.038ZM2.402 7.042l1.95 2.584-1.937 2.61 7.265-.05c-.212-.753-.82-.793-1.172-1.399a1.69 1.69 0 0 1-.247-1.024c.028-.36.17-.702.405-.978.21-.242.347-.538.396-.853.05-.315.009-.636-.117-.928l-6.543.038Z"
  />
</svg>`
  ), H = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="23"
  height="19"
  fill="none"
>
  <path
    fill="#FFBA55"
    d="m22.454 10.161-2.667-5.295a1.315 1.315 0 0 0-1.171-.735h-5.533l-.791 7.434 10.289-.826c0-.223-.04-.372-.127-.578Z"
  />
  <path
    fill="#DAE3EA"
    d="M22.334 9.913H17.12c-.483 0-.871-.405-.871-.909v-3.13c0-.505.388-.91.87-.91h2.708l2.508 4.949Z"
  />
  <path
    fill="#09457E"
    d="M22.58 10.739v4.32c0 .81-.633 1.47-1.409 1.47H1.844c-.784 0-1.425-.668-1.425-1.486v-4.304l5.936-2.478 6.727 2.478h9.498Z"
  />
  <path
    fill="#09457E"
    d="M14.666 16.109c0 1.596 1.24 2.891 2.77 2.891s2.77-1.294 2.77-2.891-1.24-2.892-2.77-2.892-2.77 1.295-2.77 2.892Zm-11.872 0c0 1.596 1.24 2.891 2.77 2.891s2.77-1.294 2.77-2.891-1.24-2.892-2.77-2.892-2.77 1.295-2.77 2.892Z"
  />
  <path
    fill="#DAE3EA"
    d="M16.248 16.11c0 .683.531 1.238 1.187 1.238s1.187-.555 1.187-1.239-.531-1.24-1.187-1.24-1.187.556-1.187 1.24Zm-11.872 0c0 .683.532 1.238 1.187 1.238.656 0 1.187-.555 1.187-1.239s-.531-1.24-1.187-1.24c-.655 0-1.187.556-1.187 1.24Z"
  />
  <path
    fill="#1E3851"
    d="M.419 12.391h.396c.672 0 1.219.587 1.187 1.297A1.238 1.238 0 0 1 .775 14.87H.42v-2.478Z"
  />
  <path
    fill="#F89201"
    d="M10.708 0H2.793C1.48 0 .42 1.107.42 2.478v8.261h12.663v-8.26c0-1.372-1.06-2.48-2.374-2.48ZM22.58 14.87h-.72c-.475 0-.863-.405-.863-.901v-1.503c0-.496.388-.9.863-.9h.72v3.303Z"
  />
</svg>`
  ), S = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="23"
  height="19"
  fill="none"
>
  <path
    fill="#09457E"
    d="M2.034 16.34c0 .19-.145.38-.364.38H.942c-.182 0-.364-.19-.364-.38V.38C.578.152.76 0 .942 0h.728c.219 0 .364.152.364.38v15.96Z"
  />
  <path
    fill="#09457E"
    d="M1.67 16.454h1.456V19H1.67v-2.546Zm18.203 0h1.456V19h-1.456v-2.546Z"
  />
  <path
    fill="#09457E"
    d="M22.422 14.06c0-.19-.146-.38-.364-.38H.942c-.182 0-.364.19-.364.38v3.04c0 .19.182.38.364.38h21.116c.218 0 .364-.19.364-.38v-3.04Z"
  />
  <path fill="#B0BDC6" d="M2.035 10.64h7.281v3.04h-7.28v-3.04Z" />
  <path
    fill="#DAE3EA"
    d="M8.405 10.602s-2.293 1.178-5.206.304c-.91-.266-1.93.342-1.747-.114.619-1.368.8-4.18-.037-5.282-.582-.798 1.31-.228 1.639 1.026.983 3.724 5.351 2.28 5.351 4.066Z"
  />
  <path
    fill="#F89201"
    d="M21.694 9.88c-.182-.19-10.085-5.206-14.89-.418v4.218h15.254s.255-3.078-.364-3.8Z"
  />
  <path
    fill="#FFBA55"
    d="M8.224 13.68h-1.42V9.462c1.82-1.9 1.42-.95 1.42 0v4.218Z"
  />
</svg>`
  ), P = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="37"
  height="19"
  fill="none"
>
  <path
    fill="#09457E"
    d="M27.481 10.5a1.338 1.338 0 0 0-.307 1.565 1.33 1.33 0 0 1-.275 1.527c-.132.127-.29.226-.462.288-.281.1-.52.292-.68.546-.159.254-.228.555-.197.854a1.347 1.347 0 0 1-.446 1 1.318 1.318 0 0 1-1.039.325c-.27.002-.534.09-.753.25-.22.16-.383.386-.47.645a1.322 1.322 0 0 1-.735.788 1.296 1.296 0 0 1-1.072-.033 1.32 1.32 0 0 0-.817-.105c-.807.135-.777.85-1.713.85s-.906-.715-1.713-.86a1.295 1.295 0 0 0-.817.105 1.297 1.297 0 0 1-1.52-.274 1.322 1.322 0 0 1-.287-.471 1.314 1.314 0 0 0-.476-.642 1.293 1.293 0 0 0-.757-.243 1.31 1.31 0 0 1-1.067-.349 1.335 1.335 0 0 1-.418-1.051 1.33 1.33 0 0 0-.21-.815 1.309 1.309 0 0 0-.656-.52 1.3 1.3 0 0 1-.783-.742 1.326 1.326 0 0 1 .035-1.083 1.342 1.342 0 0 0-.297-1.555 1.324 1.324 0 0 1-.451-1 1.336 1.336 0 0 1 .45-1 1.338 1.338 0 0 0 .308-1.565 1.33 1.33 0 0 1 .275-1.527c.133-.127.29-.226.463-.288.28-.1.52-.292.679-.546.159-.254.228-.555.197-.854a1.347 1.347 0 0 1 .447-1 1.318 1.318 0 0 1 1.038-.325c.27-.002.534-.09.753-.25.22-.16.384-.386.47-.645.09-.26.257-.485.478-.644.222-.16.488-.246.76-.246.495 0 .619.265 1.143.265 1.006.01.966-.875 1.956-.875a1.306 1.306 0 0 1 .99.445 1.314 1.314 0 0 0 1.55.31 1.297 1.297 0 0 1 1.512.278c.126.134.224.293.285.467.099.284.29.525.541.686.252.16.55.23.845.199a1.311 1.311 0 0 1 .991.451 1.34 1.34 0 0 1 .322 1.049c.002.273.088.54.247.76.159.222.382.388.639.475.257.09.48.26.638.483.158.224.243.492.243.767 0 .5-.262.625-.262 1.155-.01 1.015.866.975.866 1.975a1.343 1.343 0 0 1-.44 1Z"
  />
  <path
    fill="#09457E"
    d="M27.48 10.5a1.338 1.338 0 0 0-.306 1.565 1.33 1.33 0 0 1-.275 1.527c-.133.127-.29.226-.463.288a1.303 1.303 0 0 0-.63.473c-.156.219-.242.482-.246.752a8.805 8.805 0 0 1-6.055 2.395c-7.788 0-11.779-9.41-6.54-15.105.269-.004.53-.093.747-.253.217-.16.38-.385.466-.642.088-.26.255-.486.477-.645.222-.16.488-.245.76-.245.495 0 .62.265 1.144.265 1.005.01.965-.875 1.956-.875a1.306 1.306 0 0 1 .99.445 1.314 1.314 0 0 0 1.55.31 1.297 1.297 0 0 1 1.511.278c.127.134.224.293.286.467.098.284.289.525.54.686.252.16.55.23.846.199a1.31 1.31 0 0 1 .99.451 1.337 1.337 0 0 1 .322 1.049c.002.273.089.54.248.76.159.222.382.388.638.475.257.09.48.26.638.483.158.224.243.492.243.767 0 .5-.262.625-.262 1.155-.01 1.015.867.975.867 1.975a1.343 1.343 0 0 1-.441 1Z"
  />
  <path
    fill="#FFFFFE"
    d="M24.95 9.5c0 .854-.166 1.699-.49 2.487a6.506 6.506 0 0 1-1.394 2.11 6.433 6.433 0 0 1-2.088 1.408 6.383 6.383 0 0 1-2.463.495c-6.056 0-8.759-7.75-4.026-11.565a6.381 6.381 0 0 1 6.808-.79 6.458 6.458 0 0 1 2.662 2.396 6.547 6.547 0 0 1 .992 3.459Z"
  />
  <path
    fill="#FFFFFE"
    d="M24.953 9.5a6.48 6.48 0 0 1-1.421 4.065 6.394 6.394 0 0 1-4.366 1.39 6.408 6.408 0 0 1-4.176-1.893 6.53 6.53 0 0 1-1.875-4.218 6.544 6.544 0 0 1 1.376-4.409 6.38 6.38 0 0 1 6.808-.79 6.457 6.457 0 0 1 2.662 2.396 6.546 6.546 0 0 1 .992 3.459Z"
  />
  <path
    fill="#F89201"
    d="m20.961 13.11-2.445-1.3-2.446 1.3.465-2.755-1.98-1.95 2.738-.4L18.516 5.5 19.738 8l2.738.4-1.98 1.95c.228 1.345.124.74.465 2.76Z"
  />
  <path
    fill="#F89201"
    d="m20.496 10.355.183 1.08a3.433 3.433 0 0 1-2.834-.69 3.494 3.494 0 0 1-.942-1.17 3.526 3.526 0 0 1-.368-1.46L17.293 8l1.223-2.5L19.738 8l2.738.4-1.98 1.955ZM34.598 7.042l-1.95 2.584 1.937 2.61-7.265-.05c.212-.753.82-.793 1.172-1.399a1.69 1.69 0 0 0 .247-1.024 1.717 1.717 0 0 0-.405-.978 1.713 1.713 0 0 1-.396-.853 1.687 1.687 0 0 1 .117-.928l6.543.038ZM2.402 7.042l1.95 2.584-1.937 2.61 7.265-.05c-.212-.753-.82-.793-1.172-1.399a1.69 1.69 0 0 1-.247-1.024c.028-.36.17-.702.405-.978.21-.242.347-.538.396-.853.05-.315.009-.636-.117-.928l-6.543.038Z"
  />
</svg>`
  ), N = `.section-header > *:not(.crs-header),
section.cart-header-trustpilot {
  display: none;
}

.crs-header-inner {
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: auto;
  gap: 24px;
  padding-block: 24px;
}

@media (max-width: 768px) {
  .crs-header-inner {
    grid-template-columns: repeat(3, auto);
    gap: 12px 0;
  }
}

.crs-header-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  max-width: 140px;
}

.crs-header-block:not(.crs-header-logo) {
  display: none;
}
.crs-header-block .crs-icon img {
  background-color: #ccc;
  width: 19px;
  height: 19px;
}

.crs-header-block .crs-text {
  width: 90%;
  color: #1e3851;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  text-wrap: balance;
}

@media (max-width: 768px) {
  .crs-header-block .crs-text {
    font-size: 12px;
    line-height: 18px;
  }
}

.crs-header-logo {
  grid-column: 1 / -1;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
}

.crs-logo {
  display: flex;
  align-items: center;
  width: 120px;
  height: 60px;
}

.crs-logo > div {
  width: 100%;
}

@media (max-width: 768px) {
  .crs-header .container {
    padding: 0;
  }
  .crs-header-inner {
    padding-block: 12px;
  }
  .crs-header-logo {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    flex-direction: row;
    align-items: center;
    max-width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .crs-header-block:not(.crs-header-logo) {
    grid-row: 2 / 3;
    max-width: 114px;
  }
}

@media (max-width: 768px) {
  .crs-header-block.crs-header-delivery {
    display: flex;
    flex-direction: row;
    justify-content: center;
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    max-width: 100%;
  }
  .crs-header-block.crs-header-delivery .crs-text {
    width: max-content;
  }
  .crs-header-delivery {
    grid-column: 1 / 2;
  }

  .crs-header-guarantee {
    display: none;
  }
}

.crs-trustpilot {
  padding: 10px;
  background: #f5f5f5;
}

.crs-trustpilot .rating-custom {
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
}

@media (max-width: 768px) {
  .crs-trustpilot {
    padding: 0;
    background: transparent;
  }

  .crs-trustpilot > div {
    gap: 8px;
  }
  .crs-trustpilot .rating-custom {
    font-size: 12px;
    line-height: 18px;
  }
}
.crs-header-line {
  padding-block: 16px;
  background-color: #1e3851;
}

.crs-header-line-inner {
  width: max-content;
  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 137.5% */
  text-transform: uppercase;
}

.crs-header-line-inner .highlight {
  color: #ff9b0d;
}

@media (max-width: 768px) {
  .crs-header-line {
    padding-block: 8px;
  }

  .crs-header-line-inner {
    font-size: 14px;
    line-height: 18px;
  }

  .crs-header-line-inner .highlight {
    display: block;
  }
}
`;
  class j {
    constructor() {
      console.info("CartHeader"), this.init();
    }
    init() {
      this.addStyles(), this.render(), this.changeLogoPosition(), this.changeTrustpilotPosition(), this.addDeliveryDate();
    }
    render() {
      const t = document.querySelector(".section-header");
      if (!t) {
        console.error("Container not found");
        return;
      }
      const e = (
        /* HTML */
        ` <div class="crs-header">
      <div class="container">
        <div class="crs-header-inner">
          <div class="crs-header-block">
            <div class="crs-icon">${$}</div>
            <div class="crs-text">Price Match Guarantee</div>
          </div>
          <div class="crs-header-block crs-header-delivery">
            <div class="crs-icon">${H}</div>
            <div class="crs-text">
              FREE Delivery: <span data-delivery></span>
            </div>
          </div>
          <div class="crs-header-block crs-header-logo">
            <div class="crs-logo"></div>
            <div class="crs-trustpilot"></div>
          </div>
          <div class="crs-header-block crs-header-free-trial">
            <div class="crs-icon">${S}</div>
            <div class="crs-text">60 Nights Free Trial</div>
          </div>
          <div class="crs-header-block crs-header-guarantee">
            <div class="crs-icon">${P}</div>
            <div class="crs-text">5 Year Guarantee</div>
          </div>
        </div>
      </div>

      <div class="crs-header-line">
        <div class="container flex items-center justify-center text-center">
          <div class="crs-header-line-inner">
            You have added low stock items! &nbsp;<span class="highlight"
              >Buy within <span data-remain>15:00</span></span
            >
          </div>
        </div>
      </div>
    </div>`
      );
      t.insertAdjacentHTML("afterbegin", e);
    }
    changeLogoPosition() {
      const t = document.querySelector(".crs-logo"), e = document.querySelector(
        ".section-header nav.bg-white .container .justify-center"
      );
      !t || !e || t.appendChild(e);
    }
    changeTrustpilotPosition() {
      const t = document.querySelector(".crs-trustpilot"), e = document.querySelector(
        "section.cart-header-trustpilot > div"
      );
      !t || !e || t.appendChild(e);
    }
    async addDeliveryDate() {
      await p(".estimate-delivery-item");
      const t = document.querySelector("[data-delivery]"), e = document.querySelectorAll(
        ".estimate-delivery-item"
      );
      !t || !e || e.forEach((n) => {
        var r, i;
        if ((r = n.textContent) != null && r.toLocaleLowerCase().includes("delivered")) {
          const s = n.querySelector(".estimate-delivery-date");
          if (s) {
            const a = (i = s.textContent) == null ? void 0 : i.trim();
            return a ? (t.textContent = a, a) : void 0;
          }
        }
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.innerHTML = N, document.head.appendChild(t);
    }
  }
  const B = `.crs-cart-items-count {
  margin-top: 24px;
}

.crs-cart-items-count__text {
  color: #1e3851;
  font-size: 36px;
  font-weight: 600;
  line-height: 44px;
}

@media (max-width: 767px) {
  .crs-cart-items-count__text {
    font-size: 24px;

    line-height: 32px; 
  }

  .crs-cart-qty {
    display: none;
  }
}
`;
  class _ {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.render(), this.observeCartQuantity();
    }
    render() {
      const t = (
        /* HTML */
        `
      <div class="crs-cart-items-count">
        <div class="container flex items-center justify-center text-center">
          <span class="crs-cart-items-count__text"
            >Your Basket <span class="crs-cart-qty">(<span id="crs-cart-count">1</span>)</span></span
          >
        </div>
      </div>
    `
      ), e = document.querySelector(".crs-header");
      if (!e) {
        console.error("Cart header not found");
        return;
      }
      e.insertAdjacentHTML("beforeend", t);
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = B, document.head.appendChild(t);
    }
    observeCartQuantity() {
      const t = () => {
        var i;
        const n = document.querySelector("cart-quantity"), r = document.getElementById("crs-cart-count");
        if (n && r) {
          const s = n.getElementsByClassName("w-3.5")[0], a = s ? s.getElementsByClassName("w-full")[0] : null;
          r.textContent = ((i = a == null ? void 0 : a.textContent) == null ? void 0 : i.trim()) || "0";
        }
      };
      t();
      const e = document.querySelector("cart-quantity");
      e && new MutationObserver(t).observe(e, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    }
  }
  const O = `.crs-price-match-guarantee {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  padding-block: 6px;
}
.crs-price-match-guarantee .crs-text {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #1e3851;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  text-decoration: underline;
}

.crs-price-match-guarantee .crs-text::before {
  content: '';
  display: block;
  width: 36px;
  height: 19px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="36" height="19" fill="none"><path fill="%2309457E" d="M26.488 10.217a1.268 1.268 0 0 0-.29 1.482 1.261 1.261 0 0 1-.261 1.447 1.237 1.237 0 0 1-.438.273 1.254 1.254 0 0 0-.644.517c-.15.241-.216.526-.186.81a1.275 1.275 0 0 1-.424.947 1.25 1.25 0 0 1-.984.308 1.225 1.225 0 0 0-.713.237 1.245 1.245 0 0 0-.445.61 1.252 1.252 0 0 1-.697.747 1.227 1.227 0 0 1-1.015-.031 1.25 1.25 0 0 0-.774-.1c-.765.128-.736.806-1.623.806-.886 0-.858-.678-1.623-.815a1.228 1.228 0 0 0-.774.1 1.228 1.228 0 0 1-1.44-.26 1.254 1.254 0 0 1-.272-.447 1.244 1.244 0 0 0-.45-.607c-.21-.15-.46-.231-.718-.23a1.242 1.242 0 0 1-1.01-.331 1.263 1.263 0 0 1-.397-.996 1.26 1.26 0 0 0-.2-.772 1.24 1.24 0 0 0-.62-.493 1.23 1.23 0 0 1-.742-.703 1.257 1.257 0 0 1 .033-1.026 1.271 1.271 0 0 0-.281-1.473 1.254 1.254 0 0 1-.428-.947 1.266 1.266 0 0 1 .428-.948 1.268 1.268 0 0 0 .29-1.482 1.26 1.26 0 0 1 .261-1.447c.126-.12.275-.214.438-.273.266-.094.493-.277.644-.517.15-.241.216-.526.187-.81a1.274 1.274 0 0 1 .423-.947 1.25 1.25 0 0 1 .984-.308c.256-.002.506-.085.713-.236.208-.152.363-.366.445-.611.085-.246.243-.46.453-.61.21-.152.462-.233.72-.234.469 0 .586.252 1.083.252.953.009.915-.83 1.853-.83a1.238 1.238 0 0 1 .938.422A1.245 1.245 0 0 0 20.4.985a1.228 1.228 0 0 1 1.433.263c.12.127.211.278.27.443.093.268.274.497.512.65.239.152.52.218.801.188a1.242 1.242 0 0 1 .939.427 1.267 1.267 0 0 1 .304.994c.002.259.084.51.235.72.15.21.362.367.605.45.243.086.455.246.604.458.15.212.23.466.23.726 0 .474-.248.592-.248 1.094-.01.962.82.924.82 1.872a1.271 1.271 0 0 1-.417.947Z"/><path fill="%2309457E" d="M26.486 10.217a1.268 1.268 0 0 0-.29 1.482 1.261 1.261 0 0 1-.261 1.447 1.237 1.237 0 0 1-.438.273c-.24.084-.448.24-.597.448-.148.207-.23.456-.233.712a8.341 8.341 0 0 1-5.737 2.27c-7.378 0-11.158-8.915-6.196-14.31.255-.005.502-.088.708-.24.206-.152.36-.365.441-.608a1.25 1.25 0 0 1 .453-.612 1.23 1.23 0 0 1 .72-.232c.469 0 .586.252 1.084.252.952.009.914-.83 1.852-.83a1.238 1.238 0 0 1 .938.422 1.245 1.245 0 0 0 1.468.294 1.228 1.228 0 0 1 1.433.263c.12.127.212.278.27.443.094.268.274.497.512.65.239.152.52.218.801.188a1.242 1.242 0 0 1 .94.427 1.268 1.268 0 0 1 .303.994c.002.259.084.51.235.72.15.21.362.367.605.45.243.086.455.246.604.458.15.212.23.466.23.726 0 .474-.248.592-.248 1.094-.01.962.82.924.82 1.872a1.27 1.27 0 0 1-.416.947Z"/><path fill="%23FFFFFE" d="M24.089 9.27a6.21 6.21 0 0 1-.465 2.356 6.162 6.162 0 0 1-1.321 1.998 6.094 6.094 0 0 1-1.979 1.335c-.74.31-1.532.468-2.333.468-5.736 0-8.297-7.342-3.813-10.956a6.045 6.045 0 0 1 6.45-.748 6.118 6.118 0 0 1 2.521 2.27c.613.98.938 2.117.94 3.276Z"/><path fill="%23FFFFFE" d="M24.092 9.27a6.139 6.139 0 0 1-1.346 3.85 6.057 6.057 0 0 1-4.136 1.317 6.07 6.07 0 0 1-3.957-1.793 6.2 6.2 0 0 1-.472-8.173 6.045 6.045 0 0 1 6.45-.748 6.118 6.118 0 0 1 2.521 2.27c.613.98.938 2.117.94 3.276Z"/><path fill="%23F89201" stroke="%23F89201" stroke-width=".2" d="M17.977 4.424c.645 0 1.28.23 1.774.657h-.001c.613.515.963 1.28.963 2.08 0 .35-.277.626-.627.626a.622.622 0 0 1-.627-.627c0-.435-.189-.85-.523-1.125h-.001a1.44 1.44 0 0 0-.958-.357c-.088 0-.165.009-.26.02-.368.059-.714.292-.944.63h.001c-.227.356-.297.78-.198 1.197l.286 1.118h2.17c.35 0 .626.276.626.627 0 .35-.276.626-.627.626h-1.848c.106.509.061 1.02-.114 1.488.337.052.665.154.96.33h-.002c.122.067.231.144.34.23l.104.076a1.486 1.486 0 0 0 1.753-.076l.104-.068a.622.622 0 0 1 .774.168.622.622 0 0 1-.1.878 2.713 2.713 0 0 1-3.073.231v.001a2.064 2.064 0 0 1-.176-.108l-.166-.123a1.47 1.47 0 0 0-1.838-.01l-.006.005a.727.727 0 0 1-.527.128.609.609 0 0 1-.401-.26l-.002-.003a.631.631 0 0 1 .131-.825v-.021l.045-.03.338-.222.095-.068c.457-.357.665-.957.518-1.531l-.002-.002-.044-.188h-1.082a.622.622 0 0 1-.627-.626c0-.351.277-.627.627-.627h.757l-.21-.804v-.001a2.764 2.764 0 0 1 .371-2.189l.168-.227c.411-.51.985-.86 1.62-.966h.002l.228-.024c.076-.006.152-.008.229-.008Z"/><path fill="%23F89201" d="M33.227 6.941 31.38 9.39l1.834 2.472-6.882-.046c.2-.714.777-.752 1.11-1.326.18-.29.262-.63.235-.97a1.627 1.627 0 0 0-.385-.926 1.623 1.623 0 0 1-.374-.809 1.6 1.6 0 0 1 .11-.88l6.199.037ZM2.726 6.941 4.573 9.39 2.74 11.86l6.882-.046c-.2-.714-.777-.752-1.11-1.326-.18-.29-.262-.63-.235-.97.027-.34.162-.665.385-.926.198-.23.328-.51.375-.809a1.599 1.599 0 0 0-.11-.88l-6.2.037Z"/></svg>');
}

.crs-price-match-guarantee .crs-tooltip {
  position: relative;
  width: 13px;
  height: 13px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none"><g clip-path="url(%23a)"><path fill="%23F89201" d="M10.597 2.027a6 6 0 1 0-8.486 8.487 6 6 0 0 0 8.486-8.487ZM7.136 8.878a.783.783 0 1 1-1.565 0v-3.13a.783.783 0 1 1 1.565 0v3.13ZM6.34 4.41c-.451 0-.752-.32-.742-.713-.01-.414.29-.723.75-.723s.752.31.762.723c0 .394-.3.713-.77.713Z"/></g><defs><clipPath id="a"><path fill="%23fff" d="M.354.27h12v12h-12z"/></clipPath></defs></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: pointer;
}

.crs-price-match-guarantee .crs-tooltip::before {
  display: none;
  content: '';
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 13px;
  height: 6px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="6" fill="none"><path fill="%23D7E7F8" d="m6.5 6-6-6h12l-6 6Z"/></svg>');
}
.crs-price-match-guarantee .crs-tooltip::after {
  display: none;
  content: attr(data-content);
  position: absolute;
  bottom: calc(100% + 6px);
  right: -10px;
  width: 172px;
  padding: 12px;
  border-radius: 8px;
  background: #d7e7f8;
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
}

.crs-price-match-guarantee .crs-tooltip:hover::before {
  display: block;
}
.crs-price-match-guarantee .crs-tooltip:hover::after {
  display: block;
}`;
  class R {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.render();
    }
    async render() {
      const t = (
        /* HTML */
        `
      <div class="crs-price-match-guarantee">
        <div class="crs-text">Price Match Guarantee</div>
        <span
          class="crs-tooltip"
          data-content="We’ll price match any product we sell against any other retailer."
        ></span>
      </div>
    `
      ), e = await p(
        ".calculate-pricing-part .total-order"
      );
      e && e.insertAdjacentHTML("afterend", t);
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = O, document.head.appendChild(t);
    }
  }
  const Y = `.cart-product-item {
  margin-top: 48px;
  border-radius: 16px;
  background: #f5f5f5;
  border: none;
}

.cart-product-items .cart-product-item:first-child {
  margin-top: 44px;
}

.cart-product-section .card-addons .card-button:has(.border-btn.arrow) {
  container-type: inline-size;
  min-width: 130px;
}
.cart-product-section .card-addons .card-button .border-btn.arrow {
  width: 100%;
  max-width: 200px;
  gap: 5px;
  justify-content: space-between;
}

@container (max-width: 156px) {
  .cart-product-section .card-addons .card-button .border-btn.arrow {
    font-size: 0.675rem !important;
  }
}

@media (max-width: 802px) {
 .upsell-cart .card-addons .card-details {
  padding-right: 1rem;
 }
}

@media (max-width: 768px) {
  .cart-product-item {
    padding: 8px 12px 12px !important;
    border-radius: 16px 16px 0 0;
  }

  .cart-product-items .cart-product-item:first-child {
    margin-top: 16px;
  }
}

.cart-product-item .cart-product-quantity input {
  background: transparent;
}

.cart-product-section .cart-product-item {
  position: relative;
}

.crs-item-left-notification {
  position: absolute;
  top: 91px;
  right: 0;
  width: max-content;
  height: 32px;

  background: #1e3851;
}

@media (max-width: 902px) and (min-width: 768px) {
  .crs-item-left-notification {
    top: 90px;
  }

  .product-variants-info-note {
    margin-top: 50px;
  }
}

@media (max-width: 768px) {
  .crs-item-left-notification {
    margin-top: 12px;
    position: relative;
    top: 0;
    right: -12px;
    height: 24px;
    margin-left: auto;
  }

  .cart-product-section
    .cart-product-items
    .cart-product-item
    .product-info-part {
    width: 100%;
  }
}
.crs-item-left-notification::after {
  content: '';
  position: absolute;
  left: -11px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
  border-right: 12px solid #1e3851;
}

@media (max-width: 768px) {
  .crs-item-left-notification::after {
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    border-right: 12px solid #1e3851;
  }
}

.crs-item-left-notification-inner {
  display: flex;
  width: max-content;
  padding-block: 8px;
  padding-right: 4px;
  color: #fff;
  text-align: right;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
}

.crs-item-left-notification-inner::before {
  content: '';
  width: 14px;
  height: 14px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none"><path fill="%23FF9B0D" d="M7.002 10.76a1.445 1.445 0 1 0 1.444 1.447v-.003c0-.797-.647-1.444-1.444-1.444ZM7.672.354C7.633.35 7.594.35 7.555.35H6.448a1.357 1.357 0 0 0-1.35 1.473l.553 6.407A1.358 1.358 0 0 0 7.116 9.47a1.357 1.357 0 0 0 1.236-1.24l.554-6.406A1.358 1.358 0 0 0 7.672.354Zm-.67 10.406a1.445 1.445 0 1 0 1.444 1.447v-.003c0-.797-.647-1.444-1.444-1.444ZM7.672.354C7.633.35 7.594.35 7.555.35H6.448a1.357 1.357 0 0 0-1.35 1.473l.553 6.407A1.358 1.358 0 0 0 7.116 9.47a1.357 1.357 0 0 0 1.236-1.24l.554-6.406A1.358 1.358 0 0 0 7.672.354Zm0 0C7.633.35 7.594.35 7.555.35H6.448a1.357 1.357 0 0 0-1.35 1.473l.553 6.407A1.358 1.358 0 0 0 7.116 9.47a1.357 1.357 0 0 0 1.236-1.24l.554-6.406A1.358 1.358 0 0 0 7.672.354Zm-.67 10.406a1.445 1.445 0 1 0 1.444 1.447v-.003c0-.797-.647-1.444-1.444-1.444Z"/></svg>');
  background-position: center;
  background-repeat: no-repeat;
}

@media (max-width: 768px) {
  .crs-item-left-notification-inner {
    padding-block: 5px;
    font-size: 12px;
    line-height: 14px;
  }
}

@media (max-width: 370px) {
  .crs-item-left-notification-inner {
    font-size: 10px;
  }
}

.crs-item-left-notification-inner .highlight {
  color: #ff9b0d;
}

@media (min-width: 768px) {
  .crs-mattress-chosen {
    background: #fff;
  }
}

[data-remain] {
  font-variant-numeric: tabular-nums;
  min-width: 4.2ch;
  display: inline-block;
  text-align: center;
}

.cart-product-item + .crs-nights-free-trial {
  display: none;
}

.crs-nights-free-trial {
  padding-block: 12px;
  border-top: 1px dashed rgba(165, 211, 255, 0.24);
}

.crs-nights-free-trial .crs-title {
  display: flex;
  gap: 8px;
  color: #1e3851;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
}

.crs-nights-free-trial .crs-description {
  margin-top: 8px;
  color: #1e3851;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px; /* 183.333% */
}

@media (max-width: 768px) {
  .cart-product-item .crs-nights-free-trial {
    display: none;
  }
  .cart-product-item + .crs-nights-free-trial {
    display: block;
    padding-top: 0;
    padding-inline: 12px;
    border-radius: 0 0 12px 12px;
    background: #f5f5f5;
    border-top: none;
  }

  .crs-nights-free-trial .crs-content {
    padding-top: 12px;
    border-top: 1px dashed rgba(165, 211, 255, 0.24);
  }
}
`, v = {
    cartProductItems: ".cart-product-section .cart-product-items",
    cartProductItem: ".cart-product-section .cart-product-item"
  };
  class V {
    constructor() {
      this.device = window.innerWidth < 768 ? "mobile" : "desktop", this.init();
    }
    init() {
      this.addStyles(), this.observeCartProductItems(), this.observeMattressButtons(), setTimeout(() => {
        this.addItemAddNotes();
      }, 300);
    }
    async renderNightsFreeTrial(t, e = "afterend") {
      await p(v.cartProductItem), document.querySelectorAll(
        v.cartProductItem
      );
      const n = (
        /* HTML */
        ` <div class="crs-nights-free-trial">
      <div class="crs-content">
        <div class="crs-title">
          <span>${S}</span> 60 Nights Free Trial
        </div>
        <div class="crs-description">
          Enjoy a
          <b>60-Night Free Trial!</b> Choose your item with confidence—if it’s
          not perfect, we’ll arrange a
          <b>hassle-free return or exchange</b>
        </div>
      </div>
    </div>`
      );
      t && t.insertAdjacentHTML(e, n);
    }
    renderItemLeftNotification(t, e = "afterend") {
      const n = (
        /* HTML */
        ` <div class="crs-item-left-notification">
      <div class="crs-item-left-notification-inner">
        Only &nbsp;<span class="highlight">5 items left</span>! Buy within&nbsp;
        <span class="highlight" data-remain="">15:00</span>
      </div>
    </div>`
      );
      t && t.insertAdjacentHTML(e, n);
    }
    async observeCartProductItems() {
      new MutationObserver((e) => {
        e.forEach((n) => {
          n.target instanceof HTMLElement && n.target.matches(v.cartProductItems) && setTimeout(() => {
            this.addItemAddNotes();
          }, 150);
        });
      }).observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
    async addItemAddNotes() {
      var a, d, o, h;
      await p(v.cartProductItem);
      const t = document.querySelectorAll(
        v.cartProductItem
      );
      if (!t) return;
      const e = sessionStorage.getItem("firstItem");
      let n = null;
      const r = document.querySelector(
        ".crs-item-left-notification"
      );
      if (r && r.remove(), e) {
        const { titleText: l, colorText: m, headboardText: u, baseText: f } = JSON.parse(e), x = Array.from(t).find((g) => {
          var C, M, F, Z;
          const y = g.querySelector(".cart-product-info"), w = g.querySelector(".item-variants-name"), b = g.querySelector(
            ".item-variants-name.headboard"
          ), k = g.querySelector(
            ".item-variants-name.base"
          ), Q = ((C = y == null ? void 0 : y.textContent) == null ? void 0 : C.trim()) === l, U = ((M = w == null ? void 0 : w.textContent) == null ? void 0 : M.trim()) === m, X = ((F = b == null ? void 0 : b.textContent) == null ? void 0 : F.trim()) === u, J = ((Z = k == null ? void 0 : k.textContent) == null ? void 0 : Z.trim()) === f;
          return Q && U && X && J;
        });
        x && (n = x);
      }
      if (!n && !e) {
        n = t[t.length - 1];
        const l = n.querySelector(".cart-product-info"), m = n.querySelector(".item-variants-name"), u = n.querySelector(
          ".item-variants-name.headboard"
        ), f = n.querySelector(
          ".item-variants-name.base"
        );
        if (l || m || u || f) {
          const x = (a = l == null ? void 0 : l.textContent) == null ? void 0 : a.trim(), g = (d = m == null ? void 0 : m.textContent) == null ? void 0 : d.trim(), y = (o = u == null ? void 0 : u.textContent) == null ? void 0 : o.trim(), w = (h = f == null ? void 0 : f.textContent) == null ? void 0 : h.trim();
          sessionStorage.setItem(
            "firstItem",
            JSON.stringify({
              titleText: x,
              colorText: g,
              headboardText: y,
              baseText: w
            })
          );
        }
      }
      if (!n) return;
      const i = n.querySelector(
        ".cart-product-price"
      );
      if (!i) return;
      this.renderItemLeftNotification(i, "beforebegin");
      const s = document.querySelectorAll(
        ".crs-nights-free-trial"
      );
      s && s.forEach((l) => {
        l.remove();
      }), this.renderNightsFreeTrial(n, "afterend"), this.renderNightsFreeTrial(i, "afterend");
    }
    async observeMattressButtons() {
      await p(".cart-product-image");
      let t;
      this.device === "desktop" ? t = document.querySelectorAll(".cart-product-image") : t = document.querySelectorAll(
        ".cart-product-item + .block.md\\:hidden"
      );
      const e = new MutationObserver((n) => {
        n.forEach((r) => {
          r.addedNodes.forEach((i) => {
            var s, a, d, o;
            if (i instanceof HTMLElement && (i.classList.contains("card-addons") && ((s = i.textContent) != null && s.includes("Add Mattress & Save")) && i.classList.add("crs-mattress-control-btn"), i.classList.contains("card-addons") && ((a = i.textContent) != null && a.includes("Remove")) && ((d = i.textContent) != null && d.includes("See Details")))) {
              const h = (o = i.closest(".cart-product-items > div")) == null ? void 0 : o.querySelector(".crs-mattress-upsell");
              h && h.remove(), i.classList.add("crs-mattress-chosen");
            }
          });
        });
      });
      t.forEach((n) => {
        e.observe(n, {
          childList: !0,
          subtree: !0
        });
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.innerHTML = Y, document.head.appendChild(t);
    }
  }
  class W {
    constructor() {
      this.initialSeconds = 900, this.intervalId = null, this.headerRemainEls = null, this.remain = this.initialSeconds, this.init();
    }
    async init() {
      await p(".crs-header [data-remain]"), this.headerRemainEls = document.querySelectorAll(".crs-header [data-remain]"), this.start();
    }
    start() {
      this.updateAll(), this.intervalId && clearInterval(this.intervalId), this.intervalId = window.setInterval(() => {
        this.remain > 0 ? (this.remain--, this.updateAll()) : (this.updateAll(), this.intervalId && clearInterval(this.intervalId));
      }, 1e3);
    }
    updateAll() {
      const t = Math.floor(this.remain / 60).toString().padStart(2, "0"), e = (this.remain % 60).toString().padStart(2, "0");
      this.headerRemainEls && this.headerRemainEls.forEach((r) => {
        r.textContent = `${t}:${e}`;
      });
      const n = document.querySelectorAll(".cart-product-items [data-remain]");
      n.length && n.forEach((r) => {
        r.textContent = `${t}:${e}`;
      });
    }
  }
  class G {
    constructor() {
      this.init();
    }
    init() {
      new j(), new V(), new W(), new D(), new _(), new T(), new R();
    }
  }
  q({
    name: "Cart Improve UX and highlight main info",
    dev: "OS"
  }), I("mattress_upsell");
  class E {
    constructor() {
      this.init();
    }
    init() {
      this.isInCart() && new G();
    }
    isInCart() {
      return window.location.href.includes("/cart");
    }
  }
  return new E(), {
    LaunchExperiment: E
  };
}();
