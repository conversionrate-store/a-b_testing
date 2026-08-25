//#region src/xotic/fitment/style.css?raw
(function() {
	var e = ".xtc-fit {\n  font-family: \"Nunito Sans\", sans-serif;\n  background: #f2f2f7;\n  border: 2px solid #d0e3fb;\n  border-radius: 16px;\n  overflow: hidden;\n}\n.xtc-fit--steps {\n  padding-top: 16px;\n}\n@media (min-width: 769px) {\n  .xtc-fit--steps {\n    padding-top: 20px;\n  }\n}\n.xtc-fit__header {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n@media (min-width: 769px) {\n  .xtc-fit__header {\n    gap: 16px;\n    padding: 0 24px;\n  }\n}\n.xtc-fit__shield {\n  flex-shrink: 0;\n  width: 32px;\n  height: 32px;\n}\n@media (min-width: 769px) {\n  .xtc-fit__shield {\n    width: 42px;\n    height: 42px;\n  }\n}\n.xtc-fit__shield svg {\n  width: 100%;\n  height: 100%;\n}\n.xtc-fit__title {\n  font-family: \"basic-sans-black\", sans-serif;\n  font-weight: 800;\n  font-size: 16px;\n  line-height: 20px;\n  color: #204ed8;\n  text-transform: uppercase;\n}\n@media (min-width: 769px) {\n  .xtc-fit__title {\n    font-size: 20px;\n    line-height: 26px;\n  }\n}\n.xtc-fit__subtitle {\n  font-size: 14px;\n  line-height: 22px;\n  color: #4d4d4d;\n}\n@media (min-width: 769px) {\n  .xtc-fit__subtitle {\n    font-size: 16px;\n    line-height: 24px;\n  }\n}\n.xtc-fit__panel {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  background: #d0e3fb;\n  padding: 16px 16px 14px;\n  border-bottom-left-radius: 14px;\n  border-bottom-right-radius: 14px;\n}\n@media (min-width: 769px) {\n  .xtc-fit__panel {\n    gap: 24px;\n    padding: 20px 24px;\n  }\n}\n.xtc-fit__pill {\n  position: relative;\n  flex: 1 1 calc(50% - 6px);\n  min-width: 130px;\n}\n@media (min-width: 769px) {\n  .xtc-fit__pill {\n    flex: 1 1 calc(50% - 12px);\n  }\n}\n.xtc-fit__select {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  width: 100%;\n  background: #fff;\n  border: 1px solid #d3d3da;\n  border-radius: 12px;\n  padding: 14px 36px 14px 16px;\n  font: inherit;\n  font-size: 14px;\n  color: #232323;\n}\n.xtc-fit__select:invalid {\n  color: #757575;\n}\n.xtc-fit__select:disabled {\n  color: #b7b7c0;\n  cursor: not-allowed;\n}\n.xtc-fit__chevron {\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  display: flex;\n}\n.xtc-fit--result {\n  padding-top: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n@media (min-width: 769px) {\n  .xtc-fit--result {\n    padding-top: 20px;\n    gap: 20px;\n  }\n}\n.xtc-fit--yes {\n  border-color: #3c9342;\n  background: rgba(60, 147, 66, 0.1);\n}\n.xtc-fit--no {\n  border-color: #c70017;\n  background: rgba(199, 0, 23, 0.1);\n}\n.xtc-fit__result-head {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n@media (min-width: 769px) {\n  .xtc-fit__result-head {\n    gap: 8px;\n  }\n}\n.xtc-fit__result-title {\n  font-family: \"basic-sans-black\", sans-serif;\n  font-weight: 800;\n  font-size: 16px;\n  text-transform: uppercase;\n  text-align: center;\n}\n.xtc-fit--yes .xtc-fit__result-title {\n  color: #3c9342;\n}\n.xtc-fit--no .xtc-fit__result-title {\n  color: #c70017;\n}\n@media (min-width: 769px) {\n  .xtc-fit__result-title {\n    font-size: 20px;\n  }\n}\n.xtc-fit__result-vehicle {\n  font-family: \"Nunito Sans\", sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  color: #1d1d1d;\n  text-align: center;\n}\n@media (min-width: 769px) {\n  .xtc-fit__result-vehicle {\n    font-size: 16px;\n  }\n}\n.xtc-fit__result-footer {\n  width: 100%;\n  background: #fff;\n  border-bottom-left-radius: 14px;\n  border-bottom-right-radius: 14px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n@media (min-width: 769px) {\n  .xtc-fit__result-footer {\n    padding: 20px 16px;\n  }\n}\n.xtc-fit__cta {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  width: 100%;\n  max-width: 301px;\n  padding: 12px 18px;\n  border: 2px solid #0040ff;\n  border-radius: 8px;\n  color: #0040ff;\n  font-family: \"basic-sans-semibold\", sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n@media (min-width: 769px) {\n  .xtc-fit__cta {\n    max-width: 604px;\n    font-size: 16px;\n  }\n}\n.xtc-fit__change {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: none;\n  padding: 0;\n  color: #0040ff;\n  font-family: \"basic-sans-semibold\", sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  text-transform: uppercase;\n  text-decoration: underline;\n  cursor: pointer;\n}/*# sourceMappingURL=style.css.map */", t = (e, t, n, r = "") => {
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
	}, s = (e, t) => e.find((e) => e.field === t);
	function c(e) {
		if (e.template === "unknown") return { kind: "none" };
		if (e.template === "locked") return {
			kind: "result",
			outcome: e.locked.outcome,
			vehicleLine: e.locked.vehicleLine,
			compatiblePartsHref: e.locked.compatiblePartsHref
		};
		if (e.selects.length < 4) return { kind: "none" };
		let t = s(e.selects, "Engine"), n = s(e.selects, "Litres");
		return !t || t.disabled ? {
			kind: "step",
			step: 1,
			fields: ["Year", "Make"]
		} : !n || n.disabled ? {
			kind: "step",
			step: 2,
			fields: [
				"Year",
				"Make",
				"Engine"
			]
		} : {
			kind: "step",
			step: 3,
			fields: [
				"Year",
				"Make",
				"Engine",
				"Litres"
			]
		};
	}
	//#endregion
	//#region src/xotic/fitment/dom-snapshot.ts
	var l = [
		"Year",
		"Make",
		"Engine",
		"Litres"
	], u = (e, t) => {
		let n = e.querySelector(`select[aria-label="${t}"]`);
		if (!n) return null;
		let r = Array.from(n.options).filter((e) => e.value !== "").map((e) => ({
			value: e.value,
			label: (e.textContent || e.value).trim()
		}));
		return {
			field: t,
			disabled: n.disabled,
			value: n.value,
			options: r
		};
	}, d = (e) => {
		let t = e.querySelector(".cm_verify-fitment");
		if (t?.classList.contains("cm_verify-fitment__unknown")) return { template: "unknown" };
		if (t?.classList.contains("cm_verify-fitment__yes") || t?.classList.contains("cm_verify-fitment__no")) {
			let n = t.classList.contains("cm_verify-fitment__yes") ? "yes" : "no", r = (e.querySelector(".cm_verify-fitment_vehicle")?.textContent || "").trim(), i = e.querySelector("a.cm_verify-fitment_button-compatible-parts");
			return {
				template: "locked",
				locked: {
					outcome: n,
					vehicleLine: r,
					compatiblePartsHref: i ? i.getAttribute("href") : null
				}
			};
		}
		return {
			template: "active",
			selects: l.map((t) => u(e, t)).filter((e) => e !== null)
		};
	}, f = (e, t, n) => {
		let r = e.querySelector(`select[aria-label="${t}"]`);
		if (!r) throw Error(`Cannot find "${t}" select to drive`);
		r.value = n, r.dispatchEvent(new Event("change", { bubbles: !0 }));
	}, p = (e) => {
		Array.from(e.querySelectorAll(".cm_verify-fitment_button")).find((e) => !e.classList.contains("cm_verify-fitment_button-compatible-parts"))?.click();
	}, m = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#39;"
	}, h = (e) => String(e).replace(/[&<>"']/g, (e) => m[e]), g = (e) => {
		if (!e) return "#";
		try {
			let t = new URL(e, location.origin);
			return /^https?:$/.test(t.protocol) ? h(t.toString()) : "#";
		} catch {
			return "#";
		}
	}, _ = {
		shield: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"42\" height=\"42\" viewBox=\"0 0 42 42\" fill=\"none\">\n<g clip-path=\"url(#clip0_118_28790)\">\n<path d=\"M38.6002 10.8142C38.5786 9.68029 38.558 8.60907 38.558 7.57275C38.558 6.76085 37.9 6.10264 37.0879 6.10264C30.8008 6.10264 26.0139 4.29578 22.0238 0.416261C21.453 -0.138852 20.5447 -0.138656 19.9741 0.416261C15.9844 4.29578 11.1983 6.10264 4.91157 6.10264C4.09968 6.10264 3.44146 6.76085 3.44146 7.57275C3.44146 8.60927 3.42108 9.68088 3.39932 10.815C3.19781 21.3676 2.92183 35.82 20.5175 41.919C20.6735 41.9731 20.8362 42.0001 20.9989 42.0001C21.1616 42.0001 21.3244 41.9731 21.4803 41.919C39.0773 35.8198 38.8017 21.3671 38.6002 10.8142ZM20.9991 38.9699C5.9085 33.488 6.13666 21.4792 6.33914 10.8711C6.35129 10.2344 6.36305 9.61737 6.37129 9.01247C12.2596 8.76393 16.9682 6.97961 20.9991 3.4682C25.0303 6.97961 29.7397 8.76412 35.6284 9.01247C35.6366 9.61718 35.6484 10.2338 35.6605 10.8701C35.8628 21.4786 36.0908 33.4878 20.9991 38.9699Z\" fill=\"#204ED8\"/>\n<path d=\"M26.0616 15.8931L18.9661 22.9883L15.9382 19.9604C15.3641 19.3865 14.4332 19.3865 13.8593 19.9604C13.2852 20.5348 13.2852 21.4654 13.8593 22.0396L17.9266 26.1069C18.2136 26.3938 18.5899 26.5373 18.9661 26.5373C19.3422 26.5373 19.7186 26.3938 20.0055 26.1069L28.1403 17.9723C28.7146 17.3981 28.7146 16.4673 28.1405 15.8933C27.5666 15.3192 26.6357 15.319 26.0616 15.8931Z\" fill=\"#204ED8\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_118_28790\">\n<rect width=\"42\" height=\"42\" fill=\"white\"/>\n</clipPath>\n</defs>\n</svg>",
		chevron: "<svg width=\"14\" height=\"10\" viewBox=\"0 0 14 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 1l6 7 6-7\" stroke=\"#757575\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
		check: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"19\" viewBox=\"0 0 19 19\" fill=\"none\">\n<path d=\"M2.7494 2.80949C-0.936389 6.53534 -0.916358 12.5648 2.80949 16.2506C6.53534 19.9364 12.5648 19.9164 16.2506 16.1905C19.9364 12.4647 19.9164 6.43519 16.1905 2.7494C12.4647 -0.936389 6.43519 -0.916358 2.7494 2.80949ZM14.1273 7.67714L8.95915 12.9053C8.51846 13.346 7.79733 13.346 7.35663 12.9053L7.15632 12.705L6.55538 12.1041L4.87273 10.4415C4.43204 10.0008 4.43204 9.27965 4.87273 8.83896C5.31343 8.39827 6.03456 8.39827 6.47525 8.83896L8.15789 10.5016L12.5248 6.09465C12.9654 5.65396 13.6866 5.65396 14.1273 6.09465C14.568 6.51531 14.568 7.23644 14.1273 7.67714Z\" fill=\"#3C9342\"/>\n</svg>",
		warning: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"19\" viewBox=\"0 0 20 19\" fill=\"none\">\n<path d=\"M19.6002 13.6401L12.5933 1.50367C11.4489 -0.501224 8.55474 -0.501224 7.41438 1.50367L0.403419 13.6401C-0.741059 15.645 0.683363 18.1357 2.9929 18.1357H16.986C19.2955 18.1357 20.7447 15.6203 19.6002 13.6401ZM9.99974 15.4432C9.39045 15.4432 8.88408 14.9369 8.88408 14.3276C8.88408 13.7183 9.39045 13.2119 9.99974 13.2119C10.609 13.2119 11.1154 13.7183 11.0907 14.3564C11.1195 14.9369 10.5843 15.4432 9.99974 15.4432ZM11.0166 8.23057C10.9672 9.0951 10.9137 9.95552 10.8643 10.8201C10.8396 11.1 10.8396 11.3552 10.8396 11.6311C10.8149 12.088 10.4567 12.4421 9.99974 12.4421C9.54278 12.4421 9.18873 12.1127 9.15991 11.6558C9.08581 10.3096 9.00759 8.98806 8.93349 7.64186C8.90878 7.28781 8.88408 6.92965 8.85527 6.5756C8.85527 5.99101 9.18461 5.50934 9.7198 5.35702C10.255 5.2294 10.7861 5.48464 11.0166 5.99101C11.0948 6.16804 11.1195 6.34506 11.1195 6.5509C11.0948 7.11491 11.0413 7.6748 11.0166 8.23057Z\" fill=\"#C70017\"/>\n</svg>",
		undo: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"15\" height=\"15\" viewBox=\"0 0 15 15\" fill=\"none\">\n<path d=\"M3.31888 0.000210868C3.14568 0.00537261 2.98129 0.0777819 2.86055 0.202059L0.193881 2.86877C0.0697016 2.99369 0 3.16268 0 3.33882C0 3.51497 0.0697016 3.68396 0.193881 3.80888L2.86055 6.47682C2.98598 6.6018 3.15588 6.67191 3.33295 6.67175C3.51002 6.67159 3.67979 6.60118 3.80499 6.47597C3.9302 6.35077 4.00061 6.18099 4.00077 6.00392C4.00093 5.82685 3.93083 5.65691 3.80585 5.53148L2.28112 4.00681H12.6691V6.04844C12.6609 6.14065 12.6719 6.23362 12.7015 6.32134C12.7311 6.40906 12.7786 6.48961 12.8411 6.55794C12.9036 6.62628 12.9796 6.68085 13.0643 6.71819C13.149 6.75553 13.2406 6.77486 13.3332 6.77486C13.4258 6.77486 13.5174 6.75553 13.6021 6.71819C13.6868 6.68085 13.7628 6.62628 13.8253 6.55794C13.8878 6.48961 13.9353 6.40906 13.9649 6.32134C13.9945 6.23362 14.0055 6.14065 13.9973 6.04844V4.00681C13.9973 3.27968 13.3963 2.67215 12.6691 2.67215H2.27461L3.80585 1.14217C3.90143 1.04822 3.96648 0.927696 3.9925 0.796225C4.01853 0.664753 4.00433 0.528496 3.95176 0.405215C3.89918 0.281934 3.81068 0.177324 3.69778 0.105095C3.58489 0.0328667 3.45285 -0.00372496 3.31888 0.000210868ZM11.3254 7.99764C11.1927 7.99793 11.0631 8.0378 10.9533 8.11214C10.8434 8.18648 10.7582 8.29191 10.7085 8.41495C10.6589 8.53799 10.6471 8.67303 10.6746 8.80281C10.7022 8.93259 10.7678 9.05118 10.8631 9.14345L12.3931 10.6747H1.99987V8.69162C2.00091 8.60275 1.98417 8.51463 1.95065 8.43233C1.91712 8.35003 1.86748 8.27525 1.80464 8.21241C1.7418 8.14957 1.66703 8.09992 1.58473 8.06639C1.50243 8.03286 1.41425 8.01614 1.32539 8.01717C1.14858 8.01925 0.979831 8.09145 0.856273 8.21795C0.732715 8.34444 0.664464 8.5148 0.666535 8.69162V10.6747C0.666535 11.4019 1.27273 12.0029 1.99987 12.0029H12.3931L10.8631 13.5341C10.7968 13.5948 10.7435 13.6683 10.7063 13.7501C10.6691 13.832 10.6488 13.9206 10.6468 14.0105C10.6447 14.1004 10.6608 14.1897 10.6942 14.2732C10.7275 14.3568 10.7774 14.4327 10.8409 14.4964C10.9043 14.5601 10.98 14.6103 11.0634 14.644C11.1467 14.6777 11.2361 14.6942 11.326 14.6925C11.4159 14.6908 11.5045 14.671 11.5865 14.6341C11.6685 14.5973 11.7423 14.5442 11.8033 14.4781L14.4699 11.8114C14.5322 11.7494 14.5816 11.6758 14.6153 11.5947C14.649 11.5136 14.6664 11.4266 14.6664 11.3388C14.6664 11.251 14.649 11.164 14.6153 11.0829C14.5816 11.0018 14.5322 10.9281 14.4699 10.8661L11.8033 8.19949C11.7411 8.13563 11.6668 8.08483 11.5848 8.05016C11.5027 8.0155 11.4145 7.99765 11.3254 7.99764Z\" fill=\"#0040FF\"/>\n</svg>",
		search: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"7\" cy=\"7\" r=\"5\" stroke=\"#0040FF\" stroke-width=\"1.6\"/><path d=\"M11 11l3.5 3.5\" stroke=\"#0040FF\" stroke-width=\"1.6\" stroke-linecap=\"round\"/></svg>"
	}, v = {
		Year: "Year",
		Make: "Make",
		Engine: "Engine",
		Litres: "Litres"
	}, y = (e) => `<option value=""${e.value ? "" : " selected"}>${h(v[e.field])}</option>` + e.options.map((t) => `<option value="${h(t.value)}"${t.value === e.value ? " selected" : ""}>${h(t.label)}</option>`).join(""), b = (e) => `
  <div class="xtc-fit__pill">
    <select class="xtc-fit__select" data-field="${h(e.field)}" aria-label="${h(e.field)}" required${e.disabled ? " disabled" : ""}>
      ${y(e)}
    </select>
    <span class="xtc-fit__chevron">${_.chevron}</span>
  </div>
`, x = (e, t) => {
		let n = e.map((e) => t.find((t) => t.field === e)).filter((e) => !!e).map(b).join("");
		return `
    <div class="xtc-fit xtc-fit--steps">
      <div class="xtc-fit__header">
        <span class="xtc-fit__shield">${_.shield}</span>
        <div class="xtc-fit__heading">
          <div class="xtc-fit__title">Guaranteed Fitment</div>
          <div class="xtc-fit__subtitle">Select your vehicle to check the fitment</div>
        </div>
      </div>
      <div class="xtc-fit__panel">${n}</div>
    </div>
  `;
	}, S = (e, t, n) => {
		let r = e === "yes";
		return `
    <div class="xtc-fit xtc-fit--result xtc-fit--${e}">
      <div class="xtc-fit__result-head">
        <span class="xtc-fit__result-icon">${r ? _.check : _.warning}</span>
        <span class="xtc-fit__result-title">${r ? "Guaranteed to Fit Your" : "This Product DOES NOT Fit Your"}</span>
      </div>
      <div class="xtc-fit__result-vehicle">${h(t)}</div>
      <div class="xtc-fit__result-footer">
        ${r ? "" : `<a class="xtc-fit__cta" href="${g(n)}">${_.search}FIND COMPATIBLE PRODUCTS</a>`}
        <button type="button" class="xtc-fit__change">${_.undo}Change Vehicle</button>
      </div>
    </div>
  `;
	};
	new class {
		root;
		mount;
		observer;
		constructor() {
			this.init();
		}
		async init() {
			await n("body"), a("body").elements[0].insertAdjacentHTML("afterbegin", `<style>${e}</style>`), this.root = await n("#cm-verify-fitment"), this.mount = document.createElement("div"), this.root.insertAdjacentElement("afterend", this.mount), r({
				name: "Xotic Fitment Widget",
				dev: "YK"
			}), this.renderFromLiveDom(), this.observer = new MutationObserver(() => this.renderFromLiveDom()), this.observer.observe(this.root, {
				childList: !0,
				subtree: !0,
				attributes: !0
			});
		}
		renderFromLiveDom() {
			let e = d(this.root), n = c(e);
			if (e.template === "unknown") {
				this.mount.innerHTML = "";
				return;
			}
			let r = this.root.querySelector(".cm_vehicle-widget");
			if (r && (r.style.display = "none"), n.kind === "none") {
				this.mount.innerHTML = "";
				return;
			}
			if (n.kind === "result") {
				this.mount.innerHTML = S(n.outcome, n.vehicleLine, n.compatiblePartsHref), this.mount.querySelector(".xtc-fit__change")?.addEventListener("click", () => {
					t("xotic_fitment_change_vehicle_click", n.outcome, "click", n.vehicleLine), p(this.root);
				}), t("xotic_fitment_result_view", n.outcome, "view", n.vehicleLine);
				return;
			}
			e.template === "active" && (this.mount.innerHTML = x(n.fields, e.selects), n.fields.forEach((e) => {
				let n = this.mount.querySelector(`select[data-field="${e}"]`);
				n?.addEventListener("change", () => {
					t("xotic_fitment_field_selected", e, "change", n.value), f(this.root, e, n.value);
				});
			}), t("xotic_fitment_step_view", `step_${n.step}`, "view", "xotic_fitment"));
		}
	}();
})();
//#endregion

//# sourceMappingURL=index.js.map
