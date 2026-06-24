//#region src/merkury/unsubscribe-flow/style.css?raw
(function() {
	var e = ".mks-cancel__hidden {\n  display: none;\n}\n\n.mks-cancel {\n  position: relative;\n  width: 100%;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.mks-cancel__bg {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n}\n.mks-cancel__bg::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n.mks-cancel__bg-img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: bottom;\n     object-position: bottom;\n}\n.mks-cancel__inner {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.mks-cancel__top {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.mks-cancel__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mks-cancel__header-title {\n  font-family: Arial, sans-serif;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 28px;\n  color: #fff;\n}\n.mks-cancel__close {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  line-height: 0;\n}\n.mks-cancel__divider {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.3);\n}\n.mks-cancel__body {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.mks-cancel__hero {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.mks-cancel__hero-icon {\n  position: relative;\n  flex-shrink: 0;\n  width: 60px;\n  height: 60px;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  border-radius: 12px;\n}\n.mks-cancel__hero-camera {\n  position: absolute;\n  top: 8px;\n  left: 16px;\n  width: 27px;\n  height: 44px;\n  display: block;\n}\n.mks-cancel__hero-badge {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 26px;\n  height: 26px;\n  display: block;\n}\n.mks-cancel__hero-title {\n  margin: 0;\n  flex: 1;\n  font-family: Arial, sans-serif;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 28px;\n  color: #fff;\n}\n.mks-cancel__hero-danger {\n  color: #ff5959;\n}\n.mks-cancel__features {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.mks-cancel__feature {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 12px;\n  background: rgba(255, 255, 255, 0.12);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border-radius: 12px;\n  box-sizing: border-box;\n}\n.mks-cancel__feature-icon {\n  display: block;\n  flex-shrink: 0;\n  width: 24px;\n  height: 24px;\n}\n.mks-cancel__feature-icon--flip {\n  transform: scaleX(-1);\n}\n.mks-cancel__feature-body {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n}\n.mks-cancel__feature-title {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 24px;\n  color: #fff;\n}\n.mks-cancel__feature-desc {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #fff;\n}\n.mks-cancel__actions {\n  margin-top: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.mks-cancel__btn {\n  display: block;\n  width: 100%;\n  height: 48px;\n  border-radius: 8px;\n  font-family: Arial, sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 21px;\n  color: #fff;\n  cursor: pointer;\n  box-sizing: border-box;\n  letter-spacing: -0.15px;\n}\n.mks-cancel__btn--primary {\n  background: #37766f;\n  border: 1px solid #37766f;\n}\n.mks-cancel__btn--secondary {\n  background: transparent;\n  border: 1px solid #fff;\n}/*# sourceMappingURL=style.css.map */", t = (e, t, n, r = "") => {
		window.dataLayer = window.dataLayer || [], window.dataLayer.push({
			event: "event-to-ga4",
			event_name: e,
			event_desc: t,
			event_type: n,
			event_loc: r
		}), o(`Event: ${e} | ${t} | ${n} | ${r}`, "success");
	}, n = (e) => new Promise((t) => {
		let n = document.querySelector(e);
		n && t(n);
		let r = new MutationObserver(() => {
			let n = document.querySelector(e);
			n && (t(n), r.disconnect());
		});
		r.observe(document.documentElement, {
			childList: !0,
			subtree: !0
		});
	}), r = ({ name: e, dev: n }) => {
		let r = e.toLowerCase().replace(/\s/g, "_");
		t(`${r}_started`, `Experiment ${e} started`, "other", r), console.log(`%c EXP: ${e} (DEV: ${n})`, "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;");
	}, i = class e {
		elements;
		constructor(t) {
			this.elements = t instanceof e ? t.elements : typeof t == "string" ? Array.from(document.querySelectorAll(t)) : t instanceof Element ? [t] : Array.isArray(t) ? t : Array.from(t);
		}
		on(e, t, n) {
			return typeof t == "function" && (n = t, t = ""), this.elements.forEach((r) => {
				r.addEventListener(e, function(e) {
					if (t !== "") {
						let r = e.target?.closest(t);
						r && n?.call(r, e);
					} else n?.call(r, e);
				});
			}), this;
		}
		addClass(e) {
			return this.elements.forEach(function(t) {
				t.classList.add(e);
			}), this;
		}
		removeClass(e) {
			return this.elements.forEach(function(t) {
				t.classList.remove(e);
			}), this;
		}
		toggleClass(e) {
			return this.elements.forEach(function(t) {
				t.classList.toggle(e);
			}), this;
		}
		each(t) {
			for (let n of this.elements) t(new e(n), this.elements.indexOf(n));
			return this;
		}
		style(e, t) {
			let n = e.split("-").map((e, t) => t === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1)).join("");
			return this.elements.forEach(function(e) {
				e.style[n] = t;
			}), this;
		}
		find(t) {
			return new e(this.elements.map((e) => Array.from(e.querySelectorAll(t))).flat());
		}
		attr(e, t) {
			return t ? (this.elements.forEach(function(n) {
				n.setAttribute(e, t);
			}), this) : this.elements[0].getAttribute(e);
		}
		text(e) {
			return e ? (this.elements.forEach(function(t) {
				t.textContent = e;
			}), this) : this.elements[0].textContent || "";
		}
		html(e) {
			return e ? (this.elements.forEach(function(t) {
				t.innerHTML = e;
			}), this) : this.elements[0].innerHTML;
		}
	}, a = (e) => new i(e), o = (e, t = "info") => {
		let n;
		switch (t) {
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
		console.log(`%c>>> ${e}`, `${n} font-size: 16px; font-weight: 600`);
	}, s = {
		no_alerts: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\">\n		<path d=\"M12.0016 21.7999C12.5016 21.7999 13.0016 21.6999 13.4016 21.4999C13.9016 21.2999 14.3016 20.9999 14.6016 20.6999C15.0016 20.3999 15.2016 19.8999 15.4016 19.4999C15.7016 18.9999 15.7016 18.4999 15.7016 17.9999V17.6999H20.0016C20.3016 17.6999 20.5016 17.5999 20.6016 17.2999C20.7016 16.9999 20.7016 16.7999 20.6016 16.5999C20.6016 16.5999 19.0016 13.2999 18.7016 9.8999C18.7016 9.4999 18.3016 9.1999 17.9016 9.1999C17.5016 9.1999 17.2016 9.5999 17.2016 9.9999C17.4016 12.4999 18.2016 14.8999 18.8016 16.1999H11.5016C11.1016 16.1999 10.7016 16.4999 10.7016 16.9999C10.7016 17.4999 11.0016 17.7999 11.5016 17.7999H14.2016V17.9999C14.2016 18.2999 14.1016 18.5999 14.0016 18.8999C13.9016 19.1999 13.7016 19.3999 13.5016 19.5999C13.3016 19.7999 13.0016 19.9999 12.8016 20.0999C12.3016 20.2999 11.6016 20.2999 11.1016 20.0999C10.8016 19.9999 10.6016 19.7999 10.4016 19.5999C10.2016 19.3999 10.0016 19.0999 9.90156 18.8999C9.70156 18.4999 9.30156 18.2999 8.90156 18.4999C8.50156 18.6999 8.30156 19.0999 8.50156 19.4999C8.70156 19.9999 9.00156 20.3999 9.30156 20.6999C9.60156 20.9999 10.1016 21.2999 10.5016 21.4999C11.0016 21.6999 11.5016 21.7999 12.0016 21.7999ZM3.00156 21.7999C3.20156 21.7999 3.40156 21.6999 3.50156 21.5999L21.5016 3.5999C21.8016 3.2999 21.8016 2.7999 21.5016 2.4999C21.2016 2.1999 20.7016 2.1999 20.4016 2.4999L2.40156 20.4999C2.10156 20.7999 2.10156 21.2999 2.40156 21.5999C2.60156 21.6999 2.80156 21.7999 3.00156 21.7999ZM4.70156 15.7999C5.00156 15.7999 5.30156 15.5999 5.40156 15.2999C6.00156 13.4999 6.70156 10.8999 6.70156 9.0999C6.70156 7.6999 7.20156 6.3999 8.20156 5.3999C9.90156 3.6999 12.8016 3.3999 14.8016 4.6999C15.1016 4.8999 15.6016 4.7999 15.8016 4.4999C16.0016 4.1999 15.9016 3.6999 15.6016 3.4999C14.5016 2.7999 13.2016 2.3999 11.9016 2.3999C10.1016 2.3999 8.40156 3.0999 7.10156 4.3999C5.80156 5.6999 5.10156 7.3999 5.10156 9.1999C5.10156 10.8999 4.40156 13.2999 3.90156 14.9999C3.80156 15.3999 4.00156 15.7999 4.40156 15.8999C4.60156 15.6999 4.60156 15.7999 4.70156 15.7999Z\" fill=\"#FF5959\"/>\n		</svg>",
		no_footage: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\">\n		<g clip-path=\"url(#clip0_166_2300)\">\n		<path d=\"M0.75 19.5C1.164 19.5 1.5 19.164 1.5 18.75V6.75C1.5 6.336 1.836 6 2.25 6H15.03C15.444 6 15.78 5.664 15.78 5.25C15.78 4.836 15.444 4.5 15.03 4.5H2.25C1.0095 4.5 0 5.5095 0 6.75V18.75C0 19.164 0.336 19.5 0.75 19.5Z\" fill=\"#FF5959\"/>\n		<path d=\"M22.9129 6.07939L17.9989 8.53639V7.06039L23.7799 1.27939C24.0724 0.986887 24.0724 0.511387 23.7799 0.218887C23.4874 -0.0736133 23.0119 -0.0736133 22.7194 0.218887L0.219375 22.7189C-0.073125 23.0114 -0.073125 23.4869 0.219375 23.7794C0.511875 24.0719 0.987375 24.0719 1.27987 23.7794L5.55937 19.4999H15.7489C16.9894 19.4999 17.9989 18.4904 17.9989 17.2499V15.4634L22.9129 17.9204C23.1499 18.0389 23.4259 18.0224 23.6419 17.8874C23.8639 17.7509 23.9989 17.5094 23.9989 17.2499V6.74989C23.9989 6.49039 23.8639 6.24889 23.6434 6.11239C23.4214 5.97289 23.1454 5.96239 22.9129 6.07939ZM15.7489 17.9999H7.05937L16.4989 8.56039V17.2499C16.4989 17.6639 16.1629 17.9999 15.7489 17.9999ZM22.4989 16.0364L17.9989 13.7864V10.2134L22.4989 7.96339V16.0364Z\" fill=\"#FF5959\"/>\n		</g>\n		<defs>\n		<clipPath id=\"clip0_166_2300\">\n		<rect width=\"24\" height=\"24\" fill=\"white\"/>\n		</clipPath>\n		</defs>\n		</svg>",
		history_deleted: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"25\" height=\"25\" viewBox=\"0 0 25 25\" fill=\"none\">\n		<path d=\"M21.75 20C21.75 20.5522 21.3137 20.9998 20.7754 21H7.28516L8.78516 19.5H9.0752V19.21L10.5371 17.748V19.5H13.4629V16.5H11.7852L13.2852 15H20.2871V8.5H19.7852L21.75 6.53516V20ZM14.9248 19.5H17.3623V16.5H14.9248V19.5ZM18.8252 19.5H20.2871V16.5H18.8252V19.5ZM16.7148 4.5H14.9248V6.29004L12.7148 8.5H3.71289V15H6.21484L4.71484 16.5H3.71289V17.502L2.25 18.9648V4C2.25 3.44785 2.68631 3.00022 3.22461 3H18.2148L16.7148 4.5ZM3.71289 7H5.1748V4.5H3.71289V7ZM6.6377 7H9.0752V4.5H6.6377V7ZM10.5371 7H13.4629V4.5H10.5371V7Z\" fill=\"#FF5959\"/>\n		<path d=\"M1.5 23.25L23.25 1.5\" stroke=\"#FF5959\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n		</svg>",
		close: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"10\" viewBox=\"0 0 10 10\" fill=\"none\">\n		<g clip-path=\"url(#clip0_166_2324)\">\n		<path d=\"M5.91615 5.00827L9.80996 1.11435C10.0634 0.861071 10.0634 0.451547 9.80996 0.198263C9.55667 -0.0550201 9.14715 -0.0550201 8.89386 0.198263L4.99994 4.09218L1.10614 0.198263C0.85274 -0.0550201 0.443335 -0.0550201 0.190051 0.198263C-0.0633505 0.451547 -0.0633505 0.861071 0.190051 1.11435L4.08385 5.00827L0.190051 8.90219C-0.0633505 9.15548 -0.0633505 9.565 0.190051 9.81829C0.316278 9.94463 0.482247 10.0081 0.648097 10.0081C0.813947 10.0081 0.979797 9.94463 1.10614 9.81829L4.99994 5.92437L8.89386 9.81829C9.02021 9.94463 9.18606 10.0081 9.35191 10.0081C9.51776 10.0081 9.68361 9.94463 9.80996 9.81829C10.0634 9.565 10.0634 9.15548 9.80996 8.90219L5.91615 5.00827Z\" fill=\"white\"/>\n		</g>\n		<defs>\n		<clipPath id=\"clip0_166_2324\">\n		<rect width=\"10\" height=\"10\" fill=\"white\"/>\n		</clipPath>\n		</defs>\n		</svg>"
	}, c = `
  <div class="mks-cancel">
    <div class="mks-cancel__bg">
      <img src="https://conversionrate-store.github.io/a-b_images/merkury/bg_unsub_step.webp" alt="" class="mks-cancel__bg-img" />
    </div>
    <div class="mks-cancel__inner">
      <div class="mks-cancel__top">
        <div class="mks-cancel__header">
          <span class="mks-cancel__header-title">Cancel Subscription</span>
          <button class="mks-cancel__close" type="button" aria-label="Close">${s.close}</button>
        </div>
        <div class="mks-cancel__divider"></div>
      </div>
      <div class="mks-cancel__body">
        <div class="mks-cancel__hero">
          <div class="mks-cancel__hero-icon">
            <img src="https://conversionrate-store.github.io/a-b_images/merkury/camera_icon.webp" alt="" class="mks-cancel__hero-icon-img" />
          </div>
          <h2 class="mks-cancel__hero-title">
            Your home will be <span class="mks-cancel__hero-danger">unprotected</span> when your plan ends
          </h2>
        </div>
        <div class="mks-cancel__features">
          <div class="mks-cancel__feature">
            ${s.no_alerts}
            <div class="mks-cancel__feature-body">
              <h3 class="mks-cancel__feature-title">No alerts when it matters</h3>
              <p class="mks-cancel__feature-desc">People and vehicles approach undetected.</p>
            </div>
          </div>
          <div class="mks-cancel__feature">
            ${s.no_footage}
            <div class="mks-cancel__feature-body">
              <h3 class="mks-cancel__feature-title">No footage. No proof</h3>
              <p class="mks-cancel__feature-desc">Incidents go unrecorded — nothing to show police or insurance.</p>
            </div>
          </div>
          <div class="mks-cancel__feature">
            ${s.history_deleted}
            <div class="mks-cancel__feature-body">
              <h3 class="mks-cancel__feature-title">Your recorded history will be permanently deleted</h3>
              <p class="mks-cancel__feature-desc">Everything stored today will be gone once your plan ends.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mks-cancel__actions">
        <button class="mks-cancel__btn mks-cancel__btn--primary" type="button">Keep my home protected</button>
        <button class="mks-cancel__btn mks-cancel__btn--secondary" type="button">I'll take the risk</button>
      </div>
    </div>
  </div>
`;
	r({
		name: "Unsubscribe Flow",
		dev: "YK"
	}), new class {
		constructor() {
			this.init();
		}
		async init() {
			await n("body"), a("body").elements[0].insertAdjacentHTML("afterbegin", `<style>${e}</style>`), this.updateStep();
		}
		async updateStep() {
			let e = new MutationObserver(async () => {
				if (a("[data-testid=\"cancel-plan-modal\"]").elements[0]) if (a("[data-testid=\"cancel-plan-modal\"]").elements[0].innerText.includes("Important Information:")) {
					e.disconnect(), t("unsubscribe_flow_step_view", "step_1", "view", "unsubscribe_flow"), a("[data-testid=\"cancel-plan-modal\"] .flex.min-h-full>div>*:not(.mks-cancel)").elements.forEach((e) => {
						e.classList.add("mks-cancel__hidden");
					}), a("[data-testid=\"cancel-plan-modal\"] .flex.min-h-full>div").elements[0].insertAdjacentHTML("afterbegin", c);
					let n = a("[data-testid=\"cancel-plan-modal-action-button-0\"]").elements[0], r = a("[data-testid=\"cancel-plan-modal-action-button-1\"]").elements[0];
					a(".mks-cancel__close").elements[0].addEventListener("click", () => {
						n.click(), t("unsubscribe_flow_step_click_close", "step_1", "click", "unsubscribe_flow");
					}), a(".mks-cancel__btn--secondary").elements[0].addEventListener("click", () => {
						r.click(), t("unsubscribe_flow_step_click_continue", "To next cancel step", "click", "unsubscribe_flow");
					}), a(".mks-cancel__btn--primary").elements[0].addEventListener("click", () => {
						n.click(), t("unsubscribe_flow_step_click_keep", "To keep subscription", "click", "unsubscribe_flow");
					}), e.observe(document.body, {
						childList: !0,
						subtree: !0
					});
				} else a(".mks-cancel").elements.forEach((e) => e.remove()), a("[data-testid=\"cancel-plan-modal\"] .flex.min-h-full>div>*:not(.mks-cancel)").elements.forEach((e) => {
					e.classList.remove("mks-cancel__hidden");
				});
			});
			e.observe(document.body, {
				childList: !0,
				subtree: !0
			});
		}
	}();
})();
//#endregion

//# sourceMappingURL=index.js.map
