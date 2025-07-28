(function() {
  "use strict";
  const o = (i, n, e, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: n,
      event_type: e,
      event_loc: t
    }), d(`Event: ${i} | ${n} | ${e} | ${t}`, "success");
  }, p = ({ name: i, dev: n }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, d = (i, n = "info") => {
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
    console.log(`%c>>> ${i}`, `${e} font-size: 16px; font-weight: 600`);
  }, c = {
    subscription: "https://api.therighthairstyles.com/pg_v3/checkout_subscription_session",
    oneTime: "https://api.therighthairstyles.com/pg_v2/checkout_session"
  }, u = {
    postPurchase: async (i) => {
      const n = i === "subscription" ? c.subscription : c.oneTime;
      try {
        const e = await fetch(n, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ package: i })
        });
        if (!e.ok)
          throw new Error("Failed to fetch data");
        return { data: await e.json(), error: null };
      } catch (e) {
        return { data: null, error: e };
      }
    }
  }, l = [
    {
      id: "starter",
      title: "One-Time Glow-Up",
      isPopular: !0,
      features: [
        "20 AI hairstyles",
        "Pay once, no commitment",
        "Perfect for a quick transformation"
      ],
      pricing: {
        originalPrice: "$34.99",
        currentPrice: "$19.80",
        period: "/one-time",
        savings: "You save 55%"
      },
      ctaText: "BUY and Generate up to 20 styles"
    },
    {
      id: "pro",
      title: "Glow-Up Max",
      isPopular: !1,
      features: [
        "40 AI hairstyles",
        "Double the looks, same commitment-free plan"
      ],
      pricing: {
        originalPrice: "$34.99",
        currentPrice: "$29.60",
        period: "/one-time",
        savings: "You save 85%"
      },
      ctaText: "BUY and Generate up to 40 styles"
    },
    {
      id: "subscription",
      title: "Smart Style Plan",
      isPopular: !1,
      features: [
        "40 styles every month",
        "Best for ongoing hair inspo & fresh looks",
        "Exclusive early access to new styles",
        "Members-only offers and discounts",
        "Cancel anytime, no commitment"
      ],
      pricing: {
        originalPrice: null,
        currentPrice: "$9.99",
        period: "/month",
        savings: null
      },
      ctaText: "BUY SMART STYLE PLAN"
    }
  ], g = `/* Figma-Inspired Pricing Popup Styles */
.crs-pricing-popup {
  margin-bottom: 0 !important;
  border: none;
  border-radius: 16px 16px 0 0;
  padding: 0;
  margin: auto;
  background: #fff;
  width: 100vw;
  max-width: 414px;
  height: 90vh;
  max-height: 90vh;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
}

.crs-pricing-popup::backdrop {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
}

.crs-popup-container {
  display: flex;
  height: 100%;
  flex-direction: column;
  flex: 1;
}

/* Header Section */
.crs-popup-header-section {
  flex-shrink: 0;
  background: linear-gradient(135deg, #f5e5e7 0%, #f8f9fa 100%);
}

.crs-popup-content-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 16px;
  overflow-y: auto;
}

.crs-popup-content-section:focus {
  outline: none;
}
.crs-header-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.crs-free-look-notice {
  font-family: 'Roboto', sans-serif;
  padding: 16px;
  background: #f5ede2;
  background: linear-gradient(
    180deg,
    rgba(245, 237, 226, 1) 0%,
    rgba(231, 219, 229, 1) 100%
  );
}

.crs-free-look-text {
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
}

.crs-free-look-text span {
  display: block;
  color: #6b21a8;
  font-weight: 700;
}

.crs-header-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.crs-main-title {
  font-family: 'Times New Roman', serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32.9px;
  color: rgba(0, 0, 0, 0.8);
  margin: 0;
}

.crs-subtitle {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  color: #22190c;
  margin: 0;
}

.crs-highlight {
  display: block;
  color: #6b21a8;
  font-weight: 500;
}

.crs-benefits-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.crs-benefit-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.crs-benefit-item::before {
  content: '';
  width: 16px;
  height: 16px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="%23047F00" d="M11.536 5.462a.625.625 0 0 1 0 .883L7.344 10.54a.625.625 0 0 1-.884 0L4.464 8.542a.625.625 0 1 1 .883-.883l1.554 1.554 3.752-3.751a.625.625 0 0 1 .883 0ZM16 8c0 4.422-3.579 8-8 8-4.422 0-8-3.579-8-8 0-4.422 3.579-8 8-8 4.422 0 8 3.579 8 8Zm-1.25 0c0-3.731-3.02-6.75-6.75-6.75A6.746 6.746 0 0 0 1.25 8c0 3.731 3.02 6.75 6.75 6.75 3.731 0 6.75-3.02 6.75-6.75Z"/></svg>');

  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-repeat: no-repeat;
  background-position: center;
}

.crs-benefit-text {
  font-family: 'Arial', sans-serif;
  font-size: 13px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.8);
}

/* Pricing Plans */
.crs-pricing-plans {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.crs-plan-card {
  border-radius: 20px;
  background: rgba(34, 25, 12, 0.05);
  border-radius: 20px;
  padding: 16px;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;
}

.crs-plan-card:focus-visible {
  outline: 1px solid #6b21a8;
}

.crs-plan-card.selected:focus-visible {
  outline: none;
}

.crs-plan-card.selected {
  background: #f5e5e7;
}

.crs-popular-badge {
  position: absolute;
  top: -12px;
  left: 16px;
  background: #222221;
  color: white;
  padding: 4px 10px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
}

.crs-badge-icon {
  width: 16px;
  height: 16px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="%23F3705A" d="M4.392 14.554c-.734-.834-1.468-1.702-1.936-2.737a6.206 6.206 0 0 1-.367-3.572A7.704 7.704 0 0 1 3.625 4.94a3.184 3.184 0 0 0 .8 2.337c-.333-1.602.201-3.338 1.27-4.606C6.762 1.402 8.23.567 9.766 0c-.768.801-.868 2.07-.568 3.138.3 1.068.935 2.003 1.502 2.97.568.969 1.102 1.97 1.135 3.072.3-.568.635-1.135.835-1.77.2-.634.3-1.301.134-1.936.6.735.934 1.47 1.101 2.404.167.935.134 1.903.034 2.837-.134 1.035-.401 2.103-.969 2.971-.667 1.035-1.735 1.77-2.904 2.17-2.07.367-4.106.067-5.675-1.302Z"/><path fill="%23FFD15C" d="M6.93 15.79c2.737 1.068 5.441-2.17 3.939-4.674 0-.033-.033-.033-.033-.067.133 1.369-.2 2.37-.835 2.938.334-.801.1-1.736-.3-2.537-.4-.768-.968-1.469-1.402-2.203-.434-.768-.768-1.636-.568-2.504-.801.601-1.368 1.502-1.602 2.47-.234.968-.1 2.037.334 2.938-.501-.367-.868-.968-.902-1.602-.534.634-.867 1.468-.834 2.303 0 1.302 1.035 2.47 2.203 2.937Z"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
}

.crs-badge-text {
  font-family: 'Arial', sans-serif;
  text-transform: capitalize;
  letter-spacing: -0.31px;
  line-height: 20px;
}

.crs-plan-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.crs-plan-title {
  margin: 0;
  font-family: 'DM Serif Display', serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 28.98px;
  color: #22190c;
  margin: 0;
}

.crs-plan-radio {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 1px solid #6b21a8;
  border-radius: 50%;
  background: transparent;
}

.selected .crs-plan-radio::before {
  content: '';
  display: block;
  width: 14px;
  height: 14px;
  background: #6b21a8;
  border-radius: 50%;
}

.radio-icon {
  width: 20px;
  height: 20px;
  transition: all 0.2s ease;
  opacity: 0.6;
}

.crs-plan-features {
  margin: 0;
  padding: 0;
  padding-left: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
}

.crs-plan-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.6);
}

.crs-plan-features li::before {
  content: '•';
  display: inline-block;
  text-align: center;
  font-weight: bold;
}

.crs-plan-pricing {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 30px;
}

.crs-price-container {
  display: flex;
  align-items: baseline;
  gap: 5px;
}

.crs-original-price {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
  text-decoration: line-through;
}

.crs-current-price {
  display: flex;
  align-items: baseline;
  gap: 2px;
}

.crs-price {
  font-family: 'DM Serif Display', serif;
  font-size: 18px;
  color: #22190c;
  font-weight: 400;
}

.crs-price-period {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #22190c;
}

.crs-savings-badge {
  background: #6b21a8;
  color: white;
  padding: 4px 12px;
  border-radius: 100px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
}

/* Footer Section */
.crs-popup-footer-section {
  padding: 12px 16px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgba(133, 103, 0, 0.24);
  flex-shrink: 0;
}

.crs-cta-button {
  width: 100%;
  background: #b79625;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 15px 16px;
  font-family: 'Arial', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 8px;
  outline: none;
}

.crs-cta-button:focus-visible {
  outline: 2px solid #6b21a8;
  outline-offset: 2px;
}

.crs-cta-button:hover {
  background: #a08520;
  transform: translateY(-1px);
}

.crs-guarantee-text {
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #22190c;
  margin: 0;
  line-height: 22px;
}

.crs-guarantee-text::before {
  margin-right: 4px;
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" fill="none"><path fill="url(%23a)" d="M0 0h20v20H0z"/><defs><pattern id="a" width="1" height="1" patternContentUnits="objectBoundingBox"><use xlink:href="%23b" transform="scale(.05)"/></pattern><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAAFAAAAACy3fD9AAACr0lEQVQ4EcVUS2hTURC99+bFJtUuNQUrNCa04LILP1A/tdiYqKvipuJCFEqaFCriB3UhbkQQFWmbhYgVqUIr3dSmjbR2U1z4w4UbNVFRERSxYtCE9OWOZ9K8kEdSsLhweHkzd86Zc+d+XoT4Hxa/5m+YiTWt/Zu55VKk2ZuNrsxvY68UsosEhZiHeALxXXeteb/t0PtstdoKwXjMt1NqdRDk/VBYSULkEI8Xi/ehYIUg8QvjUVL6diiceljECs4mGB/096GLK0Sk0c+MlHq4rsYYaz38Ks3suRvNdems7sQkXUJQu5RSgdobiqT6LVHDCthLElvQlXAbytPW/fpbOcZxUXgI4VAi5lujSX4RUrZiXBJUGJQMMxfG1cRKpGIQCKe+coj5bRr2DoXAUpe22XPCyKz29Rk6d6ej9+PnAhOnVF5hEyQp8FQ3PvVsxnkP+B4taz6ANcJMrimvsAkCyDP46HKDO+2q2aBJnTeMfNhtOOd/ZvLjENuOhs4Eo8kR7pbvDXJ8C0pmEwQ4z8iPWpdXmYJI0Q4zr56kzfwnnGgLxE6FepIXmaM9TR4w8NB3Hltm21AIvmBAEjXvjiafS9IBrGcVTrIF1+O4JcacnDY3FbhSPmVvmU1Qm2KKASIZZR+MvJ1zEO3CLnXhrl3inGUk1RHkTafOTFo59mjKbvEBfwLL68BSAqFI8oEdXRxN9q9vF8oxDcGxYORNZznH1iEDDkXH4BbwuzV93evhXLlNDDTWo7th5BbIoBPlGMcVgriwL/HFnEWX9bkFx+OpQe9Wq4i/cyWcz4B5sKenQ93JlIVZvmLJDODw5GTMP4DvOrxIpAT21S2l2FbABV3FAR1dxOzvqoIWBft5ACIXsNXrCjkS73AFTgZ7kqMWZ9meu8W/0OapmHcjx8sW+NeCP+7a+i98U2qYAAAAAElFTkSuQmCC" id="b" width="20" height="20" preserveAspectRatio="none"/></defs></svg>');
  background-repeat: no-repeat;
  background-position: center;
  vertical-align: text-bottom;
}

.crs-popup-close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: 1px solid #000;
  cursor: pointer;
  border-radius: 50%;
  width: 31px;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" fill="none"><path fill="%23000" d="m12.723 1.376-5.054 4.84 5.571 5.339-.345.361-.347.36L6.946 6.91l-5.601 5.367-.347-.36-.346-.361 5.57-5.338L1.17 1.376 1.86.653l5.085 4.871 5.085-4.87.692.722Z"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.2s ease;
  z-index: 10;
  outline: none;
}

/* Animation */
.crs-pricing-popup[open] {
  animation: popup-slide-in 0.3s ease-out;
}

@keyframes popup-slide-in {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
`;
  class f {
    constructor() {
      this.render(), this.addStyles(), this.setupPlanSelection(), this.setupBuyButton(), this.setupCloseButton();
    }
    render() {
      const n = (
        /* HTML */
        `
        <dialog class="crs-pricing-popup" id="crs-pricing-popup">
          <button class="crs-popup-close-btn" tabindex="0"></button>
          <div class="crs-popup-container">
            <div class="crs-popup-header-section">
              <div class="crs-free-look-notice">
                <div class="crs-free-look-text">
                  You've used your first free look!
                  <span class="crs-highlight"
                    >To try more styles, pick a plan below</span
                  >
                </div>
              </div>
            </div>
            <div class="crs-popup-content-section">
              <div class="crs-header-content">
                <div class="crs-header-text">
                  <h2 class="crs-main-title">Feel Confident in Every Look</h2>
                  <div class="crs-subtitle">
                    No more second-guessing.
                    <span class="crs-highlight"
                      >Get the styles that fit you — fast, easy, and
                      stress-free</span
                    >
                  </div>
                </div>
                <ul class="crs-benefits-list">
                  <li class="crs-benefit-item">
                    Save hundreds on stylist consultations
                  </li>
                  <li class="crs-benefit-item">
                    Find your perfect hairstyle without wasting time
                  </li>
                </ul>
              </div>
              <div class="crs-pricing-plans">
                ${l.map(
          (e) => `
                  <div class="crs-plan-card" data-plan="${e.id}" data-plan-title="${e.title}" tabindex="0">
                    ${e.isPopular ? `
                      <div class="crs-popular-badge">
                        <span class="crs-badge-icon"></span>
                        <span class="crs-badge-text">Most Popular</span>
                      </div>
                    ` : ""}
                    <div class="crs-plan-header">
                      <h3 class="crs-plan-title">${e.title}</h3>
                      <div class="crs-plan-radio"></div>
                    </div>
                    <ul class="crs-plan-features">
                      ${e.features.map((t) => `<li>${t}</li>`).join("")}
                    </ul>
                    <div class="crs-plan-pricing">
                      <div class="crs-price-container">
                        ${e.pricing.originalPrice ? `<span class="crs-original-price">${e.pricing.originalPrice}</span>` : ""}
                        <div class="crs-current-price">
                          <span class="crs-price">${e.pricing.currentPrice}</span>
                          <span class="crs-price-period">${e.pricing.period}</span>
                        </div>
                      </div>
                      ${e.pricing.savings ? `
                        <div class="crs-savings-badge">
                          <span>${e.pricing.savings}</span>
                        </div>
                      ` : ""}
                    </div>
                  </div>
                `
        ).join("")}
              </div>
            </div>

            <div class="crs-popup-footer-section">
              <button class="crs-cta-button" id="crs-popup-buy-btn" tabindex="0">
                <span class="crs-button-text">BUY and Generate up to 20 styles</span>
              </button>
              <div class="crs-guarantee-text">7-Day Money-Back Guarantee</div>
            </div>
          </div>
        </dialog>
      `
      );
      document.body.insertAdjacentHTML("beforeend", n);
    }
    addStyles() {
      const n = document.createElement("style");
      n.textContent = g, document.head.appendChild(n);
    }
    show() {
      const n = document.querySelector(".crs-pricing-popup");
      n && (n.showModal(), o(
        "exp_q2_view_03",
        "Popup Visibility",
        "view",
        "Feel Confident in Every Look Popup"
      ));
    }
    close() {
      const n = document.querySelector(".crs-pricing-popup");
      n && n.close();
    }
    setupPlanSelection() {
      document.querySelectorAll(".crs-plan-card").forEach((t) => {
        t.addEventListener("click", (s) => {
          this.selectPlan(t);
        }), t.addEventListener("keydown", (s) => {
          (s.key === "Enter" || s.key === " ") && (s.preventDefault(), this.selectPlan(t));
        });
      });
      const e = document.querySelector(".crs-plan-card");
      e && (e.classList.add("selected"), this.updateCTAButtonText(e.getAttribute("data-plan")));
    }
    selectPlan(n) {
      document.querySelectorAll(".crs-plan-card").forEach((t) => {
        t.classList.remove("selected");
      }), n.classList.add("selected"), this.updateCTAButtonText(n.getAttribute("data-plan"));
      const e = n.getAttribute("data-plan-title");
      o(
        "exp_q2_click_5",
        e || "",
        "click",
        "Feel Confident in Every Look Popup"
      );
    }
    updateCTAButtonText(n) {
      const e = document.getElementById("crs-popup-buy-btn");
      if (!e) return;
      const t = e.querySelector(".crs-button-text");
      if (!t || !n) return;
      const s = l.find((r) => r.id === n);
      s && (t.textContent = s.ctaText);
    }
    setupBuyButton() {
      const n = document.getElementById("crs-popup-buy-btn");
      n && n.addEventListener("click", async () => {
        var t;
        const e = document.querySelector(".crs-plan-card.selected");
        if (e) {
          const s = e.getAttribute("data-plan"), { data: r, error: x } = await u.postPurchase(
            s
          );
          if (r) {
            const a = n.querySelector(".crs-button-text");
            o(
              "exp_q2_click_6",
              ((t = a == null ? void 0 : a.textContent) == null ? void 0 : t.toLowerCase()) || "",
              "click",
              "Feel Confident in Every Look Popup"
            ), setTimeout(() => {
              window.location.href = r.checkout_link;
            }, 200);
          } else
            console.error(x);
        }
      });
    }
    setupCloseButton() {
      const n = document.querySelector(".crs-popup-close-btn");
      n && n.addEventListener("click", () => {
        const e = n.closest(
          ".crs-pricing-popup"
        );
        e && (e.close(), o(
          "exp_q2_click_7",
          "Popup Close",
          "click",
          "Feel Confident in Every Look Popup"
        ));
      });
    }
  }
  p({ name: "Price Page", dev: "OS" });
  class h {
    constructor() {
      this.device = window.innerWidth < 768 ? "mobile" : "desktop", this.init();
    }
    init() {
      location.href !== "https://app.therighthairstyles.com/virtual-styler-test/step-1" || this.device === "desktop" || (this.addStyles(), this.initPopup());
    }
    initPopup() {
      new f();
    }
    showPopupDemo() {
      const n = document.getElementById("crs-pricing-popup");
      n && n.showModal();
    }
    addStyles() {
      const n = document.createElement("style");
      n.textContent = "", document.head.appendChild(n);
    }
  }
  new h();
})();
