var at = function() {
  "use strict";
  const Z = (i, t, e, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: t,
      event_type: e,
      event_loc: n
    }), console.log(`Event: ${i} | ${t} | ${e} | ${n}`);
  }, H = ({ name: i, dev: t }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, T = (i) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", i, "variant_1"));
    }, 1e3);
  };
  function q(i) {
    return new Promise((t) => {
      if (document.querySelector(i))
        return t(document.querySelector(i));
      const e = new MutationObserver(() => {
        document.querySelector(i) && (t(document.querySelector(i)), e.disconnect());
      });
      e.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const O = `@media (min-width: 768px) {
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
`;
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
        Z(
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
        const s = Array.from(
          document.querySelectorAll('a[href="/checkout"]:not(.crs-cta-button)')
        ).some((c) => {
          const o = c.getBoundingClientRect(), d = o.top < window.innerHeight && o.bottom > 0 && o.left < window.innerWidth && o.right > 0, u = window.getComputedStyle(c);
          return d && u.display !== "none" && u.visibility !== "hidden" && u.opacity !== "0";
        });
        t.style.display = s ? "none" : "";
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
      t.textContent = O, document.head.appendChild(t);
    }
  }
  const N = (
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
  ), P = (
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
  ), U = (
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
  ), V = (
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
  ), B = `.section-header > *:not(.crs-header),
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
  class J {
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
            <div class="crs-icon">${N}</div>
            <div class="crs-text">Price Match Guarantee</div>
          </div>
          <div class="crs-header-block crs-header-delivery">
            <div class="crs-icon">${P}</div>
            <div class="crs-text">
              FREE Delivery: <span data-delivery></span>
            </div>
          </div>
          <div class="crs-header-block crs-header-logo">
            <div class="crs-logo"></div>
            <div class="crs-trustpilot"></div>
          </div>
          <div class="crs-header-block crs-header-free-trial">
            <div class="crs-icon">${U}</div>
            <div class="crs-text">60 Nights Free Trial</div>
          </div>
          <div class="crs-header-block crs-header-guarantee">
            <div class="crs-icon">${V}</div>
            <div class="crs-text">5 Year Guarantee</div>
          </div>
        </div>
      </div>

      <div class="crs-header-line">
        <div class="container flex items-center justify-center text-center">
          <div class="crs-header-line-inner">
            You have added low stock items! &nbsp;<span class="highlight"
              >Buy within <span data-remain>14:22</span></span
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
      await q(".estimate-delivery-item");
      const t = document.querySelector("[data-delivery]"), e = document.querySelectorAll(
        ".estimate-delivery-item"
      );
      !t || !e || e.forEach((n) => {
        var a, s;
        if ((a = n.textContent) != null && a.toLocaleLowerCase().includes("delivered")) {
          const c = n.querySelector(".estimate-delivery-date");
          if (c) {
            const o = (s = c.textContent) == null ? void 0 : s.trim();
            return o ? (t.textContent = o, o) : void 0;
          }
        }
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.innerHTML = B, document.head.appendChild(t);
    }
  }
  const Q = `.crs-cart-items-count {
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
  class R {
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
      t.textContent = Q, document.head.appendChild(t);
    }
    observeCartQuantity() {
      const t = () => {
        var s;
        const n = document.querySelector("cart-quantity"), a = document.getElementById("crs-cart-count");
        if (n && a) {
          const c = n.getElementsByClassName("w-3.5")[0], o = c ? c.getElementsByClassName("w-full")[0] : null;
          a.textContent = ((s = o == null ? void 0 : o.textContent) == null ? void 0 : s.trim()) || "0";
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
  const W = `.cart-product-item {
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
    right: -8px;
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
  left: -11.5px;
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
`, A = {
    cartProductItem: ".cart-product-section .cart-product-item"
  };
  class Y {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.addItemLeftNotification();
    }
    renderItemLeftNotification(t, e = "afterend") {
      const n = (
        /* HTML */
        ` <div class="crs-item-left-notification">
      <div class="crs-item-left-notification-inner">
        Only &nbsp;<span class="highlight">3 items left</span>! Buy within&nbsp;
        <span class="highlight" data-remain="">14:22</span>
      </div>
    </div>`
      );
      t && t.insertAdjacentHTML(e, n);
    }
    async addItemLeftNotification() {
      await q(A.cartProductItem);
      const t = document.querySelectorAll(
        A.cartProductItem
      );
      if (!t) return;
      const n = t[0].querySelector(
        ".cart-product-price"
      );
      n && this.renderItemLeftNotification(n, "beforebegin");
    }
    addStyles() {
      const t = document.createElement("style");
      t.innerHTML = W, document.head.appendChild(t);
    }
  }
  class G {
    constructor() {
      this.initialSeconds = 900, this.intervalId = null, this.observer = null, this.remain = this.initialSeconds, this.start(), this.observe();
    }
    start() {
      this.updateAll(), this.intervalId && clearInterval(this.intervalId), this.intervalId = window.setInterval(() => {
        this.remain > 0 ? (this.remain--, this.updateAll()) : (this.updateAll(), this.intervalId && clearInterval(this.intervalId));
      }, 1e3);
    }
    updateAll() {
      const t = Math.floor(this.remain / 60).toString().padStart(2, "0"), e = (this.remain % 60).toString().padStart(2, "0");
      document.querySelectorAll("[data-remain]").forEach((n) => {
        n.textContent = `${t}:${e}`;
      });
    }
    observe() {
      this.observer = new MutationObserver(() => {
        this.updateAll();
      }), this.observer.observe(document.body, { childList: !0, subtree: !0 });
    }
  }
  const X = async () => {
    try {
      return {
        data: await (await fetch("https://sonno.co.uk/cart.json?vsly=t")).json(),
        error: null
      };
    } catch (i) {
      return console.error("Error fetching cart data:", i), {
        data: null,
        error: i
      };
    }
  }, K = async (i) => {
    try {
      if (!i)
        throw new Error("Handle is not defined");
      const e = await (await fetch(
        `https://sonno.co.uk/products/${i}?sections=product-cart-json&test`
      )).json(), n = e["product-cart-json"].indexOf("{"), a = e["product-cart-json"].lastIndexOf("}") + 1;
      if (n === -1 || a === 0)
        throw new Error("JSON дані не знайдено");
      const s = e["product-cart-json"].substring(n, a);
      return { data: JSON.parse(s), error: null };
    } catch (t) {
      return console.error("Помилка розбору JSON:", t), { data: null, error: t };
    }
  }, tt = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="49"
  height="33"
  fill="none"
>
  <path
    fill="#fff"
    d="M1.663 16.437h44.8a1.599 1.599 0 0 0 1.352-2.455L39.956 1.54a2.389 2.389 0 0 0-2.03-1.12H10.2a2.388 2.388 0 0 0-2.03 1.12L.313 13.982a1.6 1.6 0 0 0 1.35 2.455Zm0-1.6 7.86-12.444a.8.8 0 0 1 .677-.373h27.726c.273 0 .53.14.675.373l7.861 12.444-44.8.005v-.005Z"
  />
  <path
    fill="#fff"
    fill-rule="evenodd"
    d="M47.861 20.793c.28-.51.26-1.132-.05-1.624l-.745-1.177a.8.8 0 0 0-1.352.856l.748 1.172-44.796.004.744-1.176a.8.8 0 1 0-1.352-.856l-.743 1.174a1.6 1.6 0 0 0 1.347 2.454h44.8c.582 0 1.118-.317 1.4-.827ZM2.462 32.02h43.2a2.4 2.4 0 0 0 2.4-2.4v-5.6a.8.8 0 1 0-1.6 0v5.6a.8.8 0 0 1-.8.8h-43.2a.8.8 0 0 1-.8-.8v-5.6a.8.8 0 0 0-1.6 0v5.6a2.4 2.4 0 0 0 2.4 2.4Z"
    clip-rule="evenodd"
  />
  <path
    fill="#fff"
    d="M13.663 5.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM20.863 5.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM20.062 9.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM19.263 13.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM12.062 9.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM10.462 13.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM34.463 5.22a.8.8 0 1 0-.001-1.6.8.8 0 0 0 0 1.6ZM27.263 5.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM28.062 9.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM28.863 13.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM36.061 9.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6ZM37.661 13.22a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z"
  />
  <path
    fill="#fff"
    fill-rule="evenodd"
    d="M4.063 24.02v4a.8.8 0 0 0 1.6 0v-4a.8.8 0 0 0-1.6 0ZM7.263 24.02v4a.8.8 0 0 0 1.6 0v-4a.8.8 0 0 0-1.6 0ZM10.462 24.02v4a.8.8 0 0 0 1.6 0v-4a.8.8 0 1 0-1.6 0ZM13.663 24.02v4a.8.8 0 0 0 1.6 0v-4a.8.8 0 0 0-1.6 0ZM16.862 24.02v4a.8.8 0 0 0 1.6 0v-4a.8.8 0 1 0-1.6 0ZM20.063 24.02v4a.8.8 0 0 0 1.6 0v-4a.8.8 0 0 0-1.6 0ZM23.262 24.02v4a.8.8 0 0 0 1.6 0v-4a.8.8 0 1 0-1.6 0ZM26.462 24.02v4a.8.8 0 0 0 1.6 0v-4a.8.8 0 0 0-1.6 0ZM29.662 24.02v4a.8.8 0 0 0 1.6 0v-4a.8.8 0 0 0-1.6 0ZM32.862 24.02v4a.8.8 0 1 0 1.6 0v-4a.8.8 0 1 0-1.6 0ZM36.063 24.02v4a.8.8 0 1 0 1.598 0v-4a.8.8 0 1 0-1.599 0ZM39.263 24.02v4a.8.8 0 1 0 1.6 0v-4a.8.8 0 1 0-1.6 0ZM42.462 24.02v4a.8.8 0 1 0 1.6 0v-4a.8.8 0 1 0-1.6 0Z"
    clip-rule="evenodd"
  />
</svg>`
  ), _ = (
    /* HTML */
    ` <svg
  xmlns="http://www.w3.org/2000/svg"
  width="21"
  height="4"
  fill="none"
>
  <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-width="2"
    d="M1.844 1.357c6.526 1.751 10.279 1.677 17.312 0"
  />
</svg>`
  ), et = `body.modal-open-hidden
  :is(.crs-mattress-dialog, .crs-mattress-dialog-backdrop) {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
}

.crs-mattress-control-btn {
  display: none;
}

.crs-mattress-upsell {
  margin-top: 40px;
}
.crs-mattress-upsell-title {
  color: #1e3851;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
}

.crs-mattress-upsell-description {
  margin-top: 6px;
  color: #1e3851;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 22px; /* 157.143% */
}

.crs-mattress-upsell-description span {
  font-weight: 500;
}
.crs-mattress-upsell-tabs {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
}

.crs-mattress-tabs-nav {
  display: flex;
  gap: 8px;
}

.crs-mattress-tab-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 64px;
  height: 64px;
  padding: 11px 4px;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  background: #fff;
  color: #1e3851;
  text-align: center;
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px; /* 127.273% */
  letter-spacing: 0.25px;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.crs-mattress-tab-nav:hover {
  background: rgb(241 245 249 / var(--tw-bg-opacity, 1));
}

.crs-mattress-tab-nav.active {
  background: #3589da;
  color: #fff;
}

.crs-mattress-tab {
  display: none;
}

.crs-mattress-tab.active {
  display: block;
}

.crs-mattress-list {
  margin-top: 12px;
  display: flex;
  gap: 8px;
}

.crs-mattress-item {
  flex: 1 1 calc(33.333% - 16px);
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 140px;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
}

.crs-mattress-item.hidden {
  display: none;
}
.crs-mattress-image {
  position: relative;
  width: 100% !important;
  height: 132px !important;
}
.crs-mattress-item img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  border-radius: 0 !important;
}

.crs-mattress-category {
  position: absolute;
  bottom: 5px;
  right: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 53px;
  padding: 5px;
  border-radius: 8px;
  background: rgba(30, 56, 81, 0.53);
  color: #fff;
  text-align: center;
  font-size: 10px;
  font-weight: 500;
  line-height: 10px;
  letter-spacing: 0.25px;
  text-transform: capitalize;
}
.crs-mattress-item h3 {
  padding-inline: 8px;
  color: #1e3851;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

.crs-mattress-prices {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 8px;
}

.crs-mattress-price {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.crs-mattress-price del {
  color: #1e3851;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.325px;
  text-decoration: line-through;
}

.crs-mattress-price ins {
  color: #1e3851;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-decoration: none;
}

.crs-mattress-discount {
  padding: 5px;
  border-radius: 2px;
  background: #e00d46;
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  line-height: 24px;
}

.crs-mattress-footer {
  padding-inline: 8px;
  padding-bottom: 8px;
}

.crs-mattress-footer button {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  background: #3589da;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  cursor: pointer;
}

.crs-mattress-see-all {
  display: flex;
  padding-inline: 4px;
  justify-content: center;
  align-items: center;
  background: #3589da;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
}

.crs-mattress-see-all span {
  width: 28px;
  height: 28px;
  background-color: #fff;
  border-radius: 4px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" fill="none"><path stroke="%233589DA" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.806" d="M1.24 12.665 6.885 7.02 1.24 1.375"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

.crs-mattress-chosen {
  align-items: flex-start;
  border: none;
  border-radius: 8px;
  background: #fff;
}

.crs-mattress-chosen .card-button {
  flex-shrink: 0;
  display: flex;
  gap: 6px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  height: 100%;
}

.crs-mattress-chosen .card-button button {
  padding: 0;
  font-size: 12px;
  line-height: 20px;
}
.crs-mattress-chosen .card-pricing-details {
  display: flex;
  gap: 6px;
}

.crs-mattress-chosen .card-pricing-details .price {
  flex-direction: column;
  align-items: flex-start !important;
  gap: 0 !important;
}

.crs-mattress-chosen .card-pricing-details .price > span {
  order: 0;
  color: #1e3851;
  font-size: 12px;
  line-height: 16px;
}
.crs-mattress-chosen .card-pricing-details .price > label {
  order: 1;
  color: #1e3851;
  font-size: 16px;
  line-height: 20px;
}

.crs-mattress-chosen .card-pricing-details .save-price {
  align-items: flex-end !important;
}

@media (max-width: 768px) {
  .cart-product-item {
    margin-top: 12px;
    padding: 8px !important;
    border-bottom: 1px solid #e2e2e2;
    border-radius: 12px 12px 0 0;
  }
  :is(.crs-mattress-upsell, .crs-mattress-chosen) {
    margin-bottom: 16px;
    padding: 8px;
    background: #f5f5f5;
  }

  .crs-mattress-chosen {
    position: relative;
    margin-top: 0 !important;
    padding-top: 12px;
    padding-inline: 16px !important;
    border-radius: 0 0 12px 12px;
  }

  .crs-mattress-chosen::before {
    content: '';
    position: absolute;
    top: 0;
    left: 8px;
    width: calc(100% - 16px);
    height: calc(100% - 8px);
    background-color: #fff;
    border-radius: 8px;
  }

  .crs-mattress-chosen :is(.card-body, .card-button) {
    position: relative;
    z-index: 1;
  }
  .crs-mattress-upsell {
    margin-top: 0;
    padding-top: 16px;
    border-radius: 0 0 12px 12px;
  }

  .crs-mattress-upsell-title {
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
  }

  .crs-mattress-upsell-description {
    margin-top: 12px;
    font-size: 12px;
    font-weight: 600;
    line-height: 22px;
  }

  .crs-mattress-upsell--chosen .crs-mattress-upsell-description {
    display: none;
  }
  .crs-mattress-upsell-tabs {
    margin-top: 16px;
  }

  .crs-mattress-tab-nav {
    width: 59px;
    height: 64px;
  }

  .crs-mattress-list {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 0;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .crs-mattress-item {
    max-width: 148px;
  }

  .crs-mattress-list::-webkit-scrollbar {
    display: none;
  }

  .crs-mattress-item {
    flex: 0 0 auto;
    max-width: 140px;
  }

  .crs-mattress-price del {
    color: #989898;
  }

  .crs-mattress-see-all {
    display: none;
  }
}
`;
  class nt {
    constructor() {
      this.init(), this.cartItems = [], this.mattresses = [], this.device = window.innerWidth < 768 ? "mobile" : "desktop";
    }
    init() {
      this.addStyles(), this.observeChooseMattressDialog(), this.getCartData(), this.observeMattressButtons();
    }
    async getCartData() {
      const { data: t, error: e } = await X();
      if (e || !t) {
        console.error("Error fetching cart data:", e);
        return;
      }
      const { items: n } = t;
      this.cartItems = n;
    }
    // Add memoization to fetchMattresses using sessionStorage
    async fetchMattresses(t) {
      const e = sessionStorage.getItem(`mattresses_${t}`);
      if (e)
        return JSON.parse(e);
      const { data: n, error: a } = await K(t);
      if (n && n.mattresses) {
        const c = [
          "Medium/Firm",
          "Firm",
          "Medium",
          "Extra Firm",
          "Soft"
        ].reduce(
          (d, u) => ({ ...d, [u]: [] }),
          {}
        );
        n.mattresses.forEach(({ tags: d, ...u }) => {
          var m;
          const p = (m = d.find((I) => I.startsWith("firmness:"))) == null ? void 0 : m.split(":")[1];
          p && c[p] && c[p].push(u);
        }), this.mattresses = n.mattresses;
        const o = {
          categorizedMattresses: c,
          currentVariant: n.current_varrint_size_varients,
          allMattresses: n.mattresses
        };
        return sessionStorage.setItem(`mattresses_${t}`, JSON.stringify(o)), o;
      }
      return a && console.error("Error fetching product data:", a), { categorizedMattresses: {}, currentVariant: "", allMattresses: [] };
    }
    extractIdFromUrl(t) {
      const e = t.match(/variant=(\d+)/);
      return e ? +e[1] : null;
    }
    async renderUpsell(t) {
      var $, v;
      if (!t) {
        console.error("Mattress button not found");
        return;
      }
      let e;
      this.device === "desktop" ? e = t.closest(".cart-product-item") : e = ($ = t.closest("section")) == null ? void 0 : $.previousElementSibling;
      const n = e == null ? void 0 : e.querySelector(
        ".cart-product-info a"
      );
      if (!n) return;
      const a = n.href, s = this.extractIdFromUrl(a), c = t.querySelector("button");
      if (!c) {
        console.error("Add Mattress button not found");
        return;
      }
      const o = (v = this.cartItems.find((r) => r.id === s)) == null ? void 0 : v.handle, { categorizedMattresses: d, currentVariant: u } = await this.fetchMattresses(o), p = `mattress-upsell-${Math.random().toString(36).substr(2, 9)}`, m = (r, l, f) => {
        const w = l.map(({ id: h, title: k, images: E, variants: g }, S) => {
          const { price: b, compare_at_price: x } = g.find(
            (y) => y.title.toLowerCase() === u.toLowerCase()
          );
          return (
            /* HTML */
            `
            <div
              class="crs-mattress-item ${this.device === "desktop" && S >= 3 ? "hidden" : ""}"
              data-mattress-id="${h}"
            >
              <div class="crs-mattress-image">
                <img
                  src="${E == null ? void 0 : E[0]}"
                  alt="${k}"
                  width="140"
                  height="132"
                  loading="lazy"
                />
                <div class="crs-mattress-category">
                  ${_}
                  ${r === "Medium/Firm" ? "Medium Firm" : r}
                </div>
              </div>
              <h3>${k}</h3>
              <div class="crs-mattress-prices">
                <div class="crs-mattress-price">
                  ${x ? `<del>£${(x / 100).toFixed(2)}</del>` : ""}
                  <ins>£${(b / 100).toFixed(2)}</ins>
                </div>
                <span class="crs-mattress-discount">
                  ${x ? `Save £${((x - b) / 100).toFixed(2)}` : ""}
                </span>
              </div>
              <div class="crs-mattress-footer">
                <button data-variant-id="${h}" class="crs-add-to-cart">
                  Add
                </button>
              </div>
            </div>
          `
          );
        }).join(""), M = l.length > 3 ? (
          /* HTML */
          `<button
              class=" crs-mattress-item crs-mattress-see-all"
              data-category="${r}"
              data-upsell-id="${p}"
            >
              ${tt} See all mattresses
              <span></span>
            </button>`
        ) : "";
        return (
          /* HTML */
          `
        <div
          class="crs-mattress-tab ${f ? "active" : ""}"
          data-category="${r}"
          data-upsell-id="${p}"
        >
          <div class="crs-mattress-list">${w}${M}</div>
        </div>
      `
        );
      }, I = Object.keys(d).map(
        (r, l) => m(
          r,
          d[r] || [],
          l === 0
        )
      ).join(""), F = Object.keys(d).map(
        (r, l) => (
          /* HTML */
          `
          <button
            class="crs-mattress-tab-nav ${l === 0 ? "active" : ""}"
            data-category="${r}"
            data-upsell-id="${p}"
          >
            ${_}
            ${r === "Medium/Firm" ? "Medium Firm" : r}
          </button>
        `
        )
      ).join("");
      t.insertAdjacentHTML(
        "afterend",
        /* HTML */
        `
        <div class="crs-mattress-upsell" id="${p}">
          <div class="crs-mattress-upsell-title">Add Matress & Save:</div>
          <div class="crs-mattress-upsell-description">
            Enjoy a <span>60-Night Free Trial</span>! Choose your mattress with
            confidence—if it’s not perfect, we’ll arrange a
            <span>hassle-free return or exchange</span>
          </div>
          <div class="crs-mattress-upsell-tabs">
            <div class="crs-mattress-tabs-nav">${F}</div>
            ${I}
          </div>
        </div>
      `
      );
      const C = (r, l, f) => {
        document.querySelectorAll(r).forEach((w) => w.addEventListener(l, f));
      };
      C(
        `.crs-mattress-tab-nav[data-upsell-id="${p}"]`,
        "click",
        (r) => {
          var w;
          const { category: l, upsellId: f } = r.target.dataset;
          Z(
            "exp_m_upsell_click_01",
            l,
            "click",
            "Add Matress & Save"
          ), document.querySelectorAll(
            `.crs-mattress-tab[data-upsell-id="${f}"], .crs-mattress-tab-nav[data-upsell-id="${f}"]`
          ).forEach((M) => M.classList.remove("active")), (w = document.querySelector(
            `.crs-mattress-tab[data-category="${l}"][data-upsell-id="${f}"]`
          )) == null || w.classList.add("active"), r.target.classList.add("active");
        }
      ), C(
        `.crs-mattress-see-all[data-upsell-id="${p}"]`,
        "click",
        (r) => {
          const { category: l, upsellId: f } = r.target.dataset;
          c.click(), Z(
            "exp_m_upsell_click_04",
            "See all",
            "click",
            "Add Matress & Save"
          );
        }
      ), C(`#${p} .crs-add-to-cart`, "click", (r) => {
        var M, h;
        const l = r.target.dataset.variantId, f = (h = (M = r.target.closest(".crs-mattress-item")) == null ? void 0 : M.querySelector("h3")) == null ? void 0 : h.textContent;
        document.body.classList.add("modal-open-hidden"), Z(
          "exp_m_upsell_click_03",
          f,
          "click",
          "Add Matress & Save"
        ), c.click();
        const w = new MutationObserver((k) => {
          k.forEach((E) => {
            if (E.type === "childList" && document.querySelector('[role="dialog"]')) {
              w.disconnect();
              const g = document.querySelector(
                '[role="dialog"][data-state="open"]'
              ), S = Array.from(
                (g == null ? void 0 : g.querySelectorAll(".ss-tabs a")) || []
              ).find(
                (b) => {
                  var x;
                  return ((x = b.textContent) == null ? void 0 : x.trim()) === Object.keys(d).find(
                    (y) => d[y].some(
                      (L) => L.id == l
                    )
                  );
                }
              );
              S == null || S.click(), setTimeout(() => {
                g == null || g.querySelectorAll(".card-addons").forEach((b) => {
                  var x, y, L;
                  ((x = b.querySelector(".title-card")) == null ? void 0 : x.textContent) === f && (b.click(), (y = g.querySelector(".card-button button")) == null || y.click(), (L = document.querySelector(`#${p}`)) == null || L.remove(), setTimeout(() => {
                    document.body.classList.remove("modal-open-hidden");
                  }, 1e3));
                });
              }, 1e3);
            }
          });
        });
        w.observe(document.body, {
          childList: !0,
          subtree: !0
        });
      }), C(
        ".crs-mattress-item:not(.crs-mattress-see-all) > *:not(.crs-mattress-footer)",
        "click",
        (r) => {
          var w, M;
          const l = r.target.closest(".crs-mattress-item").dataset.mattressId, f = (M = (w = r.target.closest(".crs-mattress-item")) == null ? void 0 : w.querySelector("h3")) == null ? void 0 : M.textContent;
          document.body.classList.add("modal-open-hidden"), Z(
            "exp_m_upsell_click_02",
            f,
            "click",
            "Add Matress & Save"
          ), c.click(), q('[role="dialog"][data-state="open"]').then(() => {
            const h = document.querySelector(
              '[role="dialog"][data-state="open"]'
            ), k = h == null ? void 0 : h.querySelector("h2 + button"), E = Array.from(
              (h == null ? void 0 : h.querySelectorAll(".ss-tabs a")) || []
            ).find(
              (g) => {
                var S;
                return ((S = g.textContent) == null ? void 0 : S.trim()) === Object.keys(d).find(
                  (b) => d[b].some(
                    (x) => x.id == l
                  )
                );
              }
            );
            E == null || E.click(), setTimeout(() => {
              h == null || h.querySelectorAll(".card-addons").forEach((g) => {
                var S;
                if (((S = g.querySelector(".title-card")) == null ? void 0 : S.textContent) === f) {
                  const b = g.querySelector("button");
                  b == null || b.click(), q(
                    '[role="dialog"][data-state="open"] .mattress-details'
                  ).then((x) => {
                    var z;
                    const y = x.closest(
                      '[role="dialog"]'
                    ), L = y == null ? void 0 : y.querySelector("h2 + button");
                    L == null || L.addEventListener("click", () => {
                      k == null || k.click(), setTimeout(() => {
                        document.body.classList.remove("modal-open-hidden");
                      }, 500);
                    }), (z = y == null ? void 0 : y.previousElementSibling) == null || z.addEventListener(
                      "click",
                      (rt) => {
                        rt.target.closest("[data-vaul-overlay]") && (k == null || k.click(), setTimeout(() => {
                          document.body.classList.remove("modal-open-hidden");
                        }, 500));
                      }
                    );
                  });
                }
              });
            }, 500);
          });
        }
      );
    }
    async observeMattressButtons() {
      await q(".cart-product-image");
      let t;
      this.device === "desktop" ? t = document.querySelectorAll(".cart-product-image") : t = document.querySelectorAll(
        ".cart-product-item + .block.md\\:hidden"
      );
      const e = new MutationObserver((n) => {
        n.forEach((a) => {
          a.addedNodes.forEach((s) => {
            var c, o, d, u, p;
            if (s instanceof HTMLElement) {
              if (s.classList.contains("card-addons") && ((c = s.textContent) != null && c.includes("Add Mattress & Save"))) {
                s.classList.add("crs-mattress-control-btn"), this.renderUpsell(s);
                const m = (o = s.closest(".cart-product-items > div")) == null ? void 0 : o.querySelector(".crs-mattress-upsell--chosen");
                m && m.remove();
              }
              if (s.classList.contains("card-addons") && ((d = s.textContent) != null && d.includes("Remove")) && ((u = s.textContent) != null && u.includes("See Details"))) {
                const m = (p = s.closest(".cart-product-items > div")) == null ? void 0 : p.querySelector(".crs-mattress-upsell");
                m && m.remove(), s.classList.add("crs-mattress-chosen"), this.changeChosenMattressElement(s);
              }
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
    observeChooseMattressDialog() {
      new MutationObserver((e) => {
        e.forEach((n) => {
          n.addedNodes.forEach((a) => {
            var s;
            a instanceof HTMLElement && a.role === "dialog" && a.querySelector(".ss-tabs") && (a.classList.add("crs-mattress-dialog"), (s = a.previousElementSibling) == null || s.classList.add(
              "crs-mattress-dialog-backdrop"
            ));
          });
        });
      }).observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
    async changeChosenMattressElement(t) {
      var F, C, $;
      const e = t.querySelectorAll("button");
      t.querySelector(".image-card  img"), t.querySelector(".title-card").textContent;
      let n = null, a = null, s;
      this.device === "desktop" ? s = t.closest(".cart-product-item") : s = (F = t.closest("section")) == null ? void 0 : F.previousElementSibling;
      const c = s == null ? void 0 : s.querySelector(
        ".cart-product-info a"
      );
      if (!c) return;
      const o = c.href, d = this.extractIdFromUrl(o), u = (C = this.cartItems.find((v) => v.id === d)) == null ? void 0 : C.handle, { allMattresses: p } = await this.fetchMattresses(u);
      e.forEach((v) => {
        var r, l;
        (r = v.textContent) != null && r.includes("See Details") && (v.classList.add("crs-mattress-details-btn"), n = v), (l = v.textContent) != null && l.includes("Remove") && (a = v, v.classList.add("crs-mattress-remove-btn"));
      });
      const m = t.querySelector(
        ".card-pricing-details .price > span"
      );
      if (m) {
        const v = ($ = m.textContent) == null ? void 0 : $.replace(/Was:\s*/, "").trim();
        m.textContent = v || "";
      }
      a && n && a.insertAdjacentElement(
        "afterend",
        n
      ), t.insertAdjacentHTML(
        "beforebegin",
        /* HTML */
        `<div
      class="crs-mattress-upsell crs-mattress-upsell--chosen"
    >
      <div class="crs-mattress-upsell-title">Add Matress & Save:</div>
      <div class="crs-mattress-upsell-description">
        Enjoy a <span>60-Night Free Trial</span>! Choose your mattress with
        confidence—if it’s not perfect, we’ll arrange a
        <span>hassle-free return or exchange</span>
      </div>
    </div>`
      );
    }
    addStyles() {
      const t = document.createElement("style");
      t.innerHTML = et, document.head.appendChild(t);
    }
  }
  class st {
    constructor() {
      this.init();
    }
    init() {
      new J(), new nt(), new Y(), new G(), new D(), new R();
    }
  }
  H({
    name: "Cart Changes v2",
    dev: "OS"
  }), T("mattress_upsell");
  class j {
    constructor() {
      this.init();
    }
    init() {
      this.isInCart() && new st();
    }
    isInCart() {
      return window.location.href.includes("/cart");
    }
  }
  return new j(), {
    LaunchExperiment: j
  };
}();
