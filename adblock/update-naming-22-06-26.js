//#region src/adblock/update-v2/style.css?raw
(function() {
	var e = ".youTubeAnimation__applicationIcon, exit-layer #main-cta img, exit-layer [class*=_popup__logo] img {\n  display: none !important;\n}/*# sourceMappingURL=style.css.map */", t = (e, t, n, r = "") => {
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
	}, s = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\">\n<path d=\"M6.34629 0.133628C2.82149 0.383228 2.32229 0.558428 1.29669 2.08323C0.371894 3.43443 0.196694 4.95843 0.0462943 12.7336C-0.153706 24.0832 0.246294 27.0336 2.19669 28.6832C2.97189 29.3336 2.87189 29.3088 9.09669 29.7832C12.2967 30.0336 17.1463 30.0336 20.3463 29.7832C26.8967 29.2832 26.4463 29.3584 27.4967 28.4336C28.8471 27.2336 29.1471 25.9832 29.4967 20.408C29.9215 13.384 29.4215 4.48323 28.4967 2.65843C27.6967 1.08323 26.8967 0.533628 25.1463 0.308028C22.5223 0.00802763 9.77189 -0.115972 6.34629 0.133628ZM23.0463 3.50803C24.2223 3.70803 25.3463 4.78323 25.7463 6.05843C26.1223 7.30883 26.3223 18.1584 26.0215 20.9832C25.7719 23.5088 25.2471 24.8832 24.2967 25.4832C23.2967 26.1584 16.0967 26.5088 10.4719 26.1832C5.42149 25.9088 4.99669 25.7584 4.14629 24.0584C3.42149 22.608 3.04629 15.6832 3.42149 10.4832C3.84629 4.28323 4.27189 3.68323 8.37189 3.35843C11.0215 3.13363 21.4719 3.25843 23.0463 3.50883V3.50803Z\" fill=\"white\"/>\n<path d=\"M7.72266 14.6084V22.4828L11.4227 18.7828C13.4475 16.758 15.1979 15.1084 15.2979 15.1084C15.3979 15.1084 15.4723 16.758 15.4723 18.7828V22.4828L19.3979 18.5332L23.3475 14.6076L19.3979 10.6828L15.4723 6.73322V10.4332C15.4723 12.458 15.3979 14.1084 15.2979 14.1084C15.1979 14.1084 13.4475 12.458 11.4227 10.4324L7.72266 6.73242V14.6084Z\" fill=\"white\"/>\n</svg>", c = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\">\n<path d=\"M6.34629 0.133628C2.82149 0.383228 2.32229 0.558428 1.29669 2.08323C0.371894 3.43443 0.196694 4.95843 0.0462943 12.7336C-0.153706 24.0832 0.246294 27.0336 2.19669 28.6832C2.97189 29.3336 2.87189 29.3088 9.09669 29.7832C12.2967 30.0336 17.1463 30.0336 20.3463 29.7832C26.8967 29.2832 26.4463 29.3584 27.4967 28.4336C28.8471 27.2336 29.1471 25.9832 29.4967 20.408C29.9215 13.384 29.4215 4.48323 28.4967 2.65843C27.6967 1.08323 26.8967 0.533628 25.1463 0.308028C22.5223 0.00802763 9.77189 -0.115972 6.34629 0.133628ZM23.0463 3.50803C24.2223 3.70803 25.3463 4.78323 25.7463 6.05843C26.1223 7.30883 26.3223 18.1584 26.0215 20.9832C25.7719 23.5088 25.2471 24.8832 24.2967 25.4832C23.2967 26.1584 16.0967 26.5088 10.4719 26.1832C5.42149 25.9088 4.99669 25.7584 4.14629 24.0584C3.42149 22.608 3.04629 15.6832 3.42149 10.4832C3.84629 4.28323 4.27189 3.68323 8.37189 3.35843C11.0215 3.13363 21.4719 3.25843 23.0463 3.50883V3.50803Z\" fill=\"#D61717\"/>\n<path d=\"M7.72266 14.6084V22.4828L11.4227 18.7828C13.4475 16.758 15.1979 15.1084 15.2979 15.1084C15.3979 15.1084 15.4723 16.758 15.4723 18.7828V22.4828L19.3979 18.5332L23.3475 14.6076L19.3979 10.6828L15.4723 6.73322V10.4332C15.4723 12.458 15.3979 14.1084 15.2979 14.1084C15.1979 14.1084 13.4475 12.458 11.4227 10.4324L7.72266 6.73242V14.6084Z\" fill=\"#D61717\"/>\n</svg>", l = `${s} Get Adblock for YouTube Desktop — It's Free <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
<g clip-path="url(#clip0_634_792)">
<path d="M14.954 18L13.268 16.273L19.378 10.193H0V7.807H19.379L13.268 1.727L14.954 0L24 9L14.954 18Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_634_792">
<rect width="24" height="18" fill="white"/>
</clipPath>
</defs>
</svg>`;
	r({
		name: "Adblock Update V2",
		dev: "YK"
	}), new class {
		constructor() {
			this.init();
		}
		async init() {
			await n("body"), a("body").elements[0].insertAdjacentHTML("afterbegin", `<style>${e}</style>`), a("h1 span").elements[0].innerText = "Upgrade Available: Block Ads Online With Adblock for YouTube Desktop", a("#main-cta").elements[0].innerHTML = l, a("exit-layer #main-cta").elements[0].insertAdjacentHTML("afterbegin", s), a("exit-layer h3").elements[0].innerText = "Adblock for Youtube Desktop: Choose what you want to block", a("exit-layer [class*=_popup__logo]").elements[0].insertAdjacentHTML("afterbegin", c), a("[data-i18n=\"main.description\"]").elements.forEach((e) => {
				e.innerText = e.innerText.replace("AdBlock360", "Adblock for Youtube Desktop");
			});
		}
	}();
})();
//#endregion

//# sourceMappingURL=index.js.map
