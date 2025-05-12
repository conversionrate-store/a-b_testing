var U = function() {
  "use strict";
  const I = (r, t, e, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: r,
      event_desc: t,
      event_type: e,
      event_loc: n
    }), console.log(`Event: ${r} | ${t} | ${e} | ${n}`);
  }, L = ({ name: r, dev: t }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, F = (r) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", r, "variant_1"));
    }, 1e3);
  };
  function f(r) {
    return new Promise((t) => {
      if (document.querySelector(r))
        return t(document.querySelector(r));
      const e = new MutationObserver(() => {
        document.querySelector(r) && (t(document.querySelector(r)), e.disconnect());
      });
      e.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const q = `@media (min-width: 768px) {
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
  class Z {
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
        I(
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
          const a = s.getBoundingClientRect(), l = a.top < window.innerHeight && a.bottom > 0 && a.left < window.innerWidth && a.right > 0, o = window.getComputedStyle(s);
          return l && o.display !== "none" && o.visibility !== "hidden" && o.opacity !== "0";
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
      t.textContent = q, document.head.appendChild(t);
    }
  }
  const A = (
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
  ), T = (
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
  ), D = (
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
  ), P = `.section-header > *:not(.crs-header),
section.cart-header-trustpilot {
  display: none;
}

.crs-header-inner {
  display: grid;
  justify-content: center;
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
  flex-direction: column;
  max-width: 321px;
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
  .crs-header-logo {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    flex-direction: row;
    align-items: center;
    max-width: 100%;
  }
  .crs-header-block:not(.crs-header-logo) {
    grid-row: 2 / 3;
    max-width: 114px;
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
}`;
  class B {
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
            <div class="crs-icon">${A}</div>
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
            <div class="crs-icon">${T}</div>
            <div class="crs-text">60 Nights Free Trial</div>
          </div>
          <div class="crs-header-block crs-header-guarantee">
            <div class="crs-icon">${D}</div>
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
      await f(".estimate-delivery-item");
      const t = document.querySelector("[data-delivery]"), e = document.querySelectorAll(
        ".estimate-delivery-item"
      );
      !t || !e || e.forEach((n) => {
        var c, i;
        if ((c = n.textContent) != null && c.toLocaleLowerCase().includes("delivered")) {
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
      t.innerHTML = P, document.head.appendChild(t);
    }
  }
  const _ = `.crs-cart-items-count {
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
  class $ {
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
      t.textContent = _, document.head.appendChild(t);
    }
    observeCartQuantity() {
      const t = () => {
        var i;
        const n = document.querySelector("cart-quantity"), c = document.getElementById("crs-cart-count");
        if (n && c) {
          const s = n.getElementsByClassName("w-3.5")[0], a = s ? s.getElementsByClassName("w-full")[0] : null;
          c.textContent = ((i = a == null ? void 0 : a.textContent) == null ? void 0 : i.trim()) || "0";
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
  const N = `.cart-product-item {
  margin-top: 48px;
  border-radius: 16px;
  background: #f5f5f5;
  border: none;
}

.cart-product-items .cart-product-item:first-child {
  margin-top: 44px;
}

@media (max-width: 768px) {
  .cart-product-item {
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
  display: none;
  position: absolute;
  top: 91px;
  right: 0;
  width: max-content;
  height: 32px;

  background: #1e3851;
}

[data-item-left] .crs-item-left-notification {
  display: block;
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
    right: 0;
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
  left: -12px;
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
`, y = {
    cartProductItems: ".cart-product-section .cart-product-items",
    cartProductItem: ".cart-product-section .cart-product-item"
  };
  class z {
    constructor() {
      this.device = window.innerWidth < 768 ? "mobile" : "desktop", this.init();
    }
    init() {
      this.addStyles(), this.addItemLeftNotification(), this.observeCartProductItems(), this.observeMattressButtons();
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
      await f(y.cartProductItems);
      const t = document.querySelectorAll(
        y.cartProductItems
      );
      if (!t) return;
      const e = new MutationObserver((n) => {
        n.forEach((c) => {
          c.addedNodes.forEach((i) => {
            i instanceof HTMLElement && i.matches(".item-variants-name") && this.addItemLeftNotification();
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
    async addItemLeftNotification() {
      var s, a, l, o;
      await f(y.cartProductItem);
      const t = document.querySelectorAll(
        y.cartProductItem
      );
      if (console.log("addItemLeftNotification"), !t) return;
      const e = sessionStorage.getItem("firstItem");
      let n = null;
      const c = document.querySelector(
        ".crs-item-left-notification"
      );
      if (c && c.remove(), e) {
        const { titleText: d, colorText: h, headboardText: u, baseText: m } = JSON.parse(e), v = Array.from(t).find((p) => {
          var E, C, M, k;
          const g = p.querySelector(".cart-product-info"), x = p.querySelector(".item-variants-name"), w = p.querySelector(
            ".item-variants-name.headboard"
          ), b = p.querySelector(
            ".item-variants-name.base"
          ), R = ((E = g == null ? void 0 : g.textContent) == null ? void 0 : E.trim()) === d, V = ((C = x == null ? void 0 : x.textContent) == null ? void 0 : C.trim()) === h, Q = ((M = w == null ? void 0 : w.textContent) == null ? void 0 : M.trim()) === u, Y = ((k = b == null ? void 0 : b.textContent) == null ? void 0 : k.trim()) === m;
          return R && V && Q && Y;
        });
        v && (v.dataset.itemLeft = "true", n = v);
      }
      if (!n && !e) {
        n = t[t.length - 1];
        const d = n.querySelector(".cart-product-info"), h = n.querySelector(".item-variants-name"), u = n.querySelector(
          ".item-variants-name.headboard"
        ), m = n.querySelector(
          ".item-variants-name.base"
        );
        if (d || h || u || m) {
          const v = (s = d == null ? void 0 : d.textContent) == null ? void 0 : s.trim(), p = (a = h == null ? void 0 : h.textContent) == null ? void 0 : a.trim(), g = (l = u == null ? void 0 : u.textContent) == null ? void 0 : l.trim(), x = (o = m == null ? void 0 : m.textContent) == null ? void 0 : o.trim();
          sessionStorage.setItem(
            "firstItem",
            JSON.stringify({
              titleText: v,
              colorText: p,
              headboardText: g,
              baseText: x
            })
          );
        }
      }
      if (!n) return;
      const i = n.querySelector(
        ".cart-product-price"
      );
      i && this.renderItemLeftNotification(i, "beforebegin");
    }
    async observeMattressButtons() {
      await f(".cart-product-image");
      let t;
      this.device === "desktop" ? t = document.querySelectorAll(".cart-product-image") : t = document.querySelectorAll(
        ".cart-product-item + .block.md\\:hidden"
      );
      const e = new MutationObserver((n) => {
        n.forEach((c) => {
          c.addedNodes.forEach((i) => {
            var s, a, l, o;
            if (i instanceof HTMLElement && (i.classList.contains("card-addons") && ((s = i.textContent) != null && s.includes("Add Mattress & Save")) && i.classList.add("crs-mattress-control-btn"), i.classList.contains("card-addons") && ((a = i.textContent) != null && a.includes("Remove")) && ((l = i.textContent) != null && l.includes("See Details")))) {
              const d = (o = i.closest(".cart-product-items > div")) == null ? void 0 : o.querySelector(".crs-mattress-upsell");
              d && d.remove(), i.classList.add("crs-mattress-chosen");
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
      t.innerHTML = N, document.head.appendChild(t);
    }
  }
  class O {
    constructor() {
      this.initialSeconds = 900, this.intervalId = null, this.headerRemainEls = null, this.remain = this.initialSeconds, this.init();
    }
    async init() {
      await f(".crs-header [data-remain]"), this.headerRemainEls = document.querySelectorAll(".crs-header [data-remain]"), this.start();
    }
    start() {
      this.updateAll(), this.intervalId && clearInterval(this.intervalId), this.intervalId = window.setInterval(() => {
        this.remain > 0 ? (this.remain--, this.updateAll()) : (this.updateAll(), this.intervalId && clearInterval(this.intervalId));
      }, 1e3);
    }
    updateAll() {
      const t = Math.floor(this.remain / 60).toString().padStart(2, "0"), e = (this.remain % 60).toString().padStart(2, "0");
      this.headerRemainEls && this.headerRemainEls.forEach((c) => {
        c.textContent = `${t}:${e}`;
      });
      const n = document.querySelectorAll(".cart-product-items [data-remain]");
      n.length && n.forEach((c) => {
        c.textContent = `${t}:${e}`;
      });
    }
  }
  class j {
    constructor() {
      this.init();
    }
    init() {
      new B(), new z(), new O(), new Z(), new $();
    }
  }
  L({
    name: "Cart Improve UX and highlight main info",
    dev: "OS"
  }), F("mattress_upsell");
  class S {
    constructor() {
      this.init();
    }
    init() {
      this.isInCart() && new j();
    }
    isInCart() {
      return window.location.href.includes("/cart");
    }
  }
  return new S(), {
    LaunchExperiment: S
  };
}();
