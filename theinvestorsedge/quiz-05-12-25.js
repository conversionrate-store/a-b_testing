(function() {
  "use strict";
  const g = (a) => new Promise((e) => {
    const n = document.querySelector(a);
    n && e(n);
    const s = new MutationObserver(() => {
      const r = document.querySelector(a);
      r && (e(r), s.disconnect());
    });
    s.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), $ = ({ name: a, dev: e }) => {
    console.log(
      `%c EXP: ${a} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class f {
    constructor(e) {
      this.elements = e instanceof f ? e.elements : typeof e == "string" ? Array.from(document.querySelectorAll(e)) : e instanceof Element ? [e] : Array.isArray(e) ? e : Array.from(e);
    }
    on(e, n, s) {
      return typeof n == "function" && (s = n, n = ""), this.elements.forEach((r) => {
        r.addEventListener(e, function(l) {
          var o;
          if (n !== "") {
            let i = (o = l.target) == null ? void 0 : o.closest(n);
            i && (s == null || s.call(i, l));
          } else
            s == null || s.call(r, l);
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
        e(new f(n), this.elements.indexOf(n));
      return this;
    }
    style(e, n) {
      const s = e.split("-").map((r, l) => l === 0 ? r : r.charAt(0).toUpperCase() + r.slice(1)).join("");
      return this.elements.forEach(function(r) {
        r.style[s] = n;
      }), this;
    }
    find(e) {
      const n = this.elements.map((s) => Array.from(s.querySelectorAll(e)));
      return new f(n.flat());
    }
    attr(e, n) {
      return n ? (this.elements.forEach(function(s) {
        s.setAttribute(e, n);
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
  const t = (a) => new f(a), k = (a) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", a, "variant_1"));
    }, 1e3);
  }, m = "https://conversionrate-store.github.io/a-b_images/theinvestorsedge/", v = {
    back: `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16" fill="none">
		<path d="M0 8.00005C0 8.30737 0.117512 8.56956 0.361583 8.80456L7.4124 15.7017C7.60228 15.9006 7.85533 16 8.14459 16C8.73227 16 9.19324 15.5481 9.19324 14.9515C9.19324 14.6622 9.07568 14.4 8.8769 14.2012L2.52204 8.00005L8.8769 1.79888C9.07568 1.59096 9.19324 1.32882 9.19324 1.03955C9.19324 0.451984 8.73227 0 8.14459 0C7.85533 0 7.60228 0.0994383 7.4124 0.298303L0.361583 7.19554C0.117512 7.43054 0.00903668 7.69274 0 8.00005Z" fill="white"/>
		</svg>`,
    down: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none">
		<path d="M0.729492 0.68396L8.22949 8.68396L15.7295 0.68396" stroke="#09233E" stroke-width="2"/>
		</svg>`
  }, E = (
    /* HTML */
    `
  <div class="crs_quiz_container">
    <div class="crs_quiz_header">
      <div class="crs_quiz_max_width">
        <div class="crs_quiz_logo">
          ${v.back}
          <img src="${m}logo.svg" alt="Quiz Header" />
        </div>
        <div class="crs_quiz_progress">
          <div class="crs_quiz_progress_bar"></div>
        </div>
      </div>
    </div>
    <div class="crs_first_screen active">
      <div class="crs_top">
        <div class="crs_quiz_max_width">For flippers seeking no-money-down financing to acquire a property</div>
      </div>
      <div class="crs_quiz_max_width">
        <h2>Are You Looking for 100% Hard Money Financing?</h2>
        <p>Even if you dont have real estate investing experience or first property in mind</p>
        <div class="crs_quiz_buttons">
          <button class="crs_start_quiz">YES — Check If I Qualify</button>
          <button class="crs_cancel_quiz">No, I don’t need financing</button>
        </div>
        <img src="${m}/quiz_rating.webp" alt="rating" class="crs_rating_m" />
        <img src="${m}/quiz_rating_d.webp" alt="rating" class="crs_rating_d" />
      </div>
    </div>
    <div class="crs_quiz_steps">
      <div class="crs_quiz_max_width">
        <div class="crs_quiz_step_container"></div>
        <p class="crs_error">Please select an answer to continue</p>
        <button>Continue</button>
      </div>
    </div>
  </div>
`
  ), C = (a, e, n) => {
    let s = "";
    return n ? s = n.map(
      (r) => (
        /* HTML */
        `
          <label class="crs_quiz_answer_radio_label">
            <input type="radio" value="${r.value}" name="step${a}" />
            <div><span></span>${r.label}</div>
          </label>
        `
      )
    ).join("") : s = /* HTML */
    `
      <label class="crs_quiz_answer_input_label">
        <span>First Name</span>
        <input type="text" name="crs_name" placeholder="First Name" data-relation="firstname" />
      </label>
      <label class="crs_quiz_answer_input_label">
        <span>Last Name</span>
        <input type="text" name="crs_last_name" placeholder="Last Name" data-relation="lastname" />
      </label>
      <label class="crs_quiz_answer_input_label">
        <span>Phone number</span>
        <input type="text" name="crs_phone" placeholder="Phone number" data-relation="mobilephone" />
      </label>
      <label class="crs_quiz_answer_input_label">
        <span>Email</span>
        <input type="email" name="crs_email" placeholder="Email" data-relation="email" />
      </label>
      <label class="crs_quiz_answer_select_label">
        <span>Your State</span>
        <select name="crs_state" placeholder="Select your state"></select>
        ${v.down}
      </label>
    `, /* HTML */
    `
    <div class="crs_quiz_step" data-step="${a}">
      <h3>${e}</h3>
      <div class="crs_quiz_answers">${s}</div>
    </div>
  `;
  }, L = `.crs_quiz_container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100000;
  background: #ffffff;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background: #eee;
}

.crs_quiz_max_width {
  width: 100%;
  max-width: 680px;
  padding: 0 20px;
  margin: 0 auto;
}

.crs_quiz_header {
  background: #09233e;
  padding-bottom: 10px;
}

.crs_quiz_logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 0;
  position: relative;
}
.crs_quiz_logo svg {
  width: 9px;
  height: 16px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  display: none;
}
.crs_quiz_logo svg.active {
  display: block;
}

.crs_quiz_progress {
  width: 100%;
  height: 4px;
  background: #cfe2f3;
  border-radius: 10px;
  position: relative;
  margin-top: 10px;
  display: none;
}
.crs_quiz_progress.active {
  display: block;
}

.crs_quiz_progress_bar {
  width: 0;
  height: 100%;
  background: #ff9902;
  border-radius: 10px;
  transition: width 0.3s ease;
}

.crs_first_screen .crs_top {
  background: #cfe2f3;
  padding: 24px;
  color: #09233e;
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
}
.crs_first_screen h2 {
  font-family: "Inter", sans-serif;
  font-size: 42px;
  margin-top: 60px;
  margin-bottom: 16px;
  color: #09233e;
  line-height: 52px;
}
.crs_first_screen h2 + p {
  font-size: 24px;
  margin: 0 0 24px;
  color: #09233e;
  line-height: 34px;
}

.crs_quiz_buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.crs_quiz_buttons button {
  width: 100%;
  padding: 16px;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  color: #09233e;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #ff9902;
  border: none;
  cursor: pointer;
}
.crs_quiz_buttons button:last-of-type {
  border: 2px solid #ff9902;
  background: transparent;
}

.crs_first_screen .crs_quiz_max_width {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
}
.crs_first_screen .crs_quiz_max_width img {
  margin-top: auto;
}

.crs_rating_m {
  display: none;
}
@media (max-width: 768px) {
  .crs_rating_m {
    display: block;
  }
}

.crs_rating_d {
  display: block;
}
@media (max-width: 768px) {
  .crs_rating_d {
    display: none;
  }
}

.crs_quiz_results,
.crs_quiz_steps,
.crs_first_screen {
  display: none;
  flex-direction: column;
  flex: 1;
}
.crs_quiz_results.active,
.crs_quiz_steps.active,
.crs_first_screen.active {
  display: flex;
}

.crs_blue_bg {
  background: #3d85c6;
  padding: 20px 0;
}
.crs_blue_bg p {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
}

.crs_quiz_steps .crs_quiz_max_width {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 32px;
  gap: 20px;
}

.crs_quiz_steps button {
  width: 100%;
  padding: 16px;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  color: #09233e;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #ff9902;
  border: none;
  cursor: pointer;
}

.crs_quiz_step {
  padding-top: 40px;
}
.crs_quiz_step h3 {
  font-size: 32px;
  line-height: 42px;
  color: #09233e;
  margin-bottom: 32px;
}

.crs_quiz_answer_radio_label input {
  height: 1px;
  width: 1px;
  position: absolute;
  opacity: 0;
}

.crs_quiz_answer_radio_label > div {
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  border: 1px solid #cfe2f3;
  background: #fff;
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  padding: 19px 16px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}
.crs_quiz_answer_radio_label > div span {
  display: flex;
  width: 20px;
  height: 20px;
  border: 2px solid #09233e;
  border-radius: 50%;
  position: relative;
}
.crs_quiz_answer_radio_label > div span::after {
  content: "";
  width: 12px;
  height: 12px;
  background: #09233e;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.crs_quiz_answer_radio_label input:checked + div {
  border: 2px solid #09233e;
  background: #cfe2f3;
}
.crs_quiz_answer_radio_label input:checked + div span::after {
  opacity: 1;
}

.crs_quiz_answers {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.crs_quiz_answer_input_label span {
  font-size: 14px;
  margin-bottom: 8px;
  display: block;
}
.crs_quiz_answer_input_label input {
  width: 100%;
  padding: 18px 16px !important;
  font-size: 14px;
  border: 1px solid #cfe2f3 !important;
  border-radius: 4px;
  background: #fff !important;
}
.crs_quiz_answer_input_label input::-moz-placeholder {
  color: #a9a9a9;
}
.crs_quiz_answer_input_label input::placeholder {
  color: #a9a9a9;
}

.crs_quiz_answer_select_label {
  position: relative;
}
.crs_quiz_answer_select_label span {
  font-size: 14px;
  margin-bottom: 8px;
  display: block;
}
.crs_quiz_answer_select_label select {
  width: 100%;
  padding: 18px 16px !important;
  font-size: 14px;
  border: 1px solid #cfe2f3 !important;
  border-radius: 4px;
  background: #fff !important;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.crs_quiz_answer_select_label svg {
  width: 15px;
  height: 8px;
  background: url("") no-repeat center center;
  background-size: contain;
  position: absolute;
  bottom: 22px;
  right: 16px;
  pointer-events: none;
}
.crs_quiz_answer_select_label::-moz-placeholder {
  color: #a9a9a9;
}
.crs_quiz_answer_select_label::placeholder {
  color: #a9a9a9;
}

.crs_error {
  color: rgb(255, 109, 109);
  display: none;
  margin: 0;
}
.crs_error.active {
  display: block;
}

.crs_input_error {
  color: rgb(255, 109, 109);
  margin: 10px 0 0;
  line-height: 1;
  font-size: 12px;
}/*# sourceMappingURL=style.css.map */`;
  $({ name: "Quiz", dev: "YK" }), k("quiz");
  const u = [
    {
      question: "Do you already have a property picked out?",
      answers: [
        { label: "I already have a property under contract", value: "1" },
        { label: "I’m actively looking for a deal", value: "0" },
        { label: "I want to learn how to find the best deal", value: "0" }
      ],
      relation: "property_in_mind"
    },
    {
      question: "Have you done a fix & flip deal before?",
      answers: [
        { label: "No, this will be my first", value: "Brand New - 0 Properties Flipped" },
        { label: "I’ve flipped 1–2 properties", value: "Starting Out - 1 to 2 Properties Flipped" },
        { label: "I’ve flipped 3–6 properties", value: "Intermediate - 3 to 6 Properties Flipped" },
        { label: "I’ve flipped 7+ properties", value: "Expert - 7 or More Properties Flipped" }
      ],
      relation: "how_much_experience_do_you_have_"
    },
    {
      question: "If everything went well, what profit range would you ideally target?",
      answers: [
        { label: "Under $25,000", value: "Under $25,000" },
        { label: "$25,000–$50,000", value: "$25,000–$50,000" },
        { label: "$50,000–$100,000", value: "$50,000–$100,000" },
        { label: "$100,000+", value: "$100,000+" }
      ]
    },
    {
      question: "How much cash do you currently have available for a deal?",
      answers: [
        { label: "$1,000 to $2,499", value: "$1,000 to $2,499" },
        { label: "$2,500 to $5,000", value: "$2,500 to $5,000" },
        { label: "$5,001 to $10,000", value: "$5,001 to $10,000" },
        { label: "$10,001 to $20,000", value: "$10,001 to $20,000" },
        { label: "$20,001 or more", value: "$20,001 or more" }
      ],
      relation: "amount_of_money_to_invest_in_real_estate_"
    },
    {
      question: "Fill out the application for a free pre-qualification consultation for 100% financing"
    }
  ];
  class A {
    constructor() {
      this.answers = [], this.init(), this.step = 0, this.setup();
    }
    async init() {
      await g("body"), t("body").elements[0].insertAdjacentHTML("afterbegin", `<style class="crs_style">${L}</style>`), t("body").elements[0].insertAdjacentHTML("afterbegin", E);
    }
    async setup() {
      await g(".crs_quiz_container");
      const e = t(".crs_first_screen"), n = t(".crs_quiz_steps"), s = t(".crs_quiz_logo svg"), r = t(".crs_start_quiz"), l = t(".crs_quiz_progress");
      t(".crs_quiz_results"), t(".crs_cancel_quiz");
      const o = t(".crs_quiz_steps button");
      s.on("click", () => {
        this.setStep(this.step - 1), this.step === 0 && (e.addClass("active"), n.removeClass("active"), s.removeClass("active"), l.removeClass("active")), this.step -= 1;
      }), r.on("click", () => {
        e.removeClass("active"), n.addClass("active"), s.addClass("active"), l.addClass("active"), this.setStep(this.step);
      }), o.on("click", () => {
        var i, c;
        if (this.step < u.length - 1) {
          t(".crs_error").removeClass("active");
          const p = n.elements[0].querySelector('input[type="radio"]:checked');
          if (p)
            u[this.step].relation && (t(`[name="${u[this.step].relation}"]`).elements[0].value = p.getAttribute("value") || "");
          else {
            t(".crs_error").addClass("active");
            return;
          }
          this.answers[this.step] = p.getAttribute("value") || "", this.setStep(this.step + 1), this.step += 1;
        } else {
          let _ = !1;
          if (n.elements[0].querySelectorAll(
            ".crs_quiz_answer_input_label input"
          ).forEach((d) => {
            var h, b;
            if (d.value === "") {
              if (_ = !0, (h = d.closest("label")) != null && h.querySelector(".crs_input_error")) return;
              (b = d.closest("label")) == null || b.insertAdjacentHTML("beforeend", '<p class="crs_input_error">This field is required.</p>');
            }
          }), n.elements[0].querySelector('select[name="crs_state"]').value === "") {
            if (_ = !0, (i = n.elements[0].querySelector('select[name="crs_state"]').closest("label")) != null && i.querySelector(".crs_input_error"))
              return;
            (c = n.elements[0].querySelector('select[name="crs_state"]').closest("label")) == null || c.insertAdjacentHTML("beforeend", '<p class="crs_input_error">This field is required.</p>');
          }
          if (_) return;
          const x = t(".hs-error-msg").elements;
          x.length !== 0 && x.forEach((d) => {
            var w, y, z, q;
            const h = ((w = d.textContent) == null ? void 0 : w.toLowerCase()) || "", b = ((z = (y = d.closest(".hs-form-field")) == null ? void 0 : y.querySelector("input")) == null ? void 0 : z.getAttribute("name")) || "";
            (q = t(`input[data-relation="${b}"]`).elements[0].closest("label")) == null || q.insertAdjacentHTML("beforeend", `<p class="crs_input_error">${h}</p>`);
          }), t(".hs_submit input").elements[0].click();
        }
      });
    }
    async setStep(e) {
      const n = t('select[name="your_state__united_states__"] option').elements.map((o) => ({
        label: o.textContent || "",
        value: o.getAttribute("value") || ""
      })), s = t(".crs_quiz_step_container"), r = t(".crs_quiz_progress_bar");
      s.html(C(e + 1, u[e].question, u[e].answers));
      const l = (e + 1) / u.length * 100;
      if (r.elements[0].style.width = `${l}%`, this.answers[e] && t(`input[value="${this.answers[e]}"]`).elements[0].setAttribute("checked", "true"), e === u.length - 1) {
        const o = t('select[name="crs_state"]').elements[0];
        n.forEach((i) => {
          const c = document.createElement("option");
          c.value = i.value, c.textContent = i.label, o.appendChild(c);
        }), o.addEventListener("change", () => {
          var i;
          (i = t(".crs_quiz_answer_select_label .crs_input_error").elements[0]) == null || i.remove(), t('select[name="your_state__united_states__"]').elements[0].value = o.value;
        }), t(".crs_quiz_answer_input_label input").on("input", (i) => {
          const c = i.target, _ = c.getAttribute("data-relation") || "";
          t(`input[name="${_}"]`).elements[0].value = c.value, t(`input[name="${_}"]`).elements[0].dispatchEvent(new Event("input")), t(".crs_quiz_answer_input_label .crs_input_error").elements.forEach((p) => p == null ? void 0 : p.remove());
        });
      }
    }
    async setFormField() {
    }
  }
  new A();
})();
//# sourceMappingURL=index.js.map
