(function() {
  "use strict";
  const _ = `#lp-pom-image-16,
#lp-pom-button-15,
#lp-pom-text-14,
#lp-pom-image-17 {
  display: none;
}

.spark_hero {
  background: #091d27;
  padding: 100px 20px 40px;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.spark_hero__container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
@media (min-width: 768px) {
  .spark_hero__container {
    flex-direction: row;
    align-items: flex-end;
    gap: 60px;
  }
}
.spark_hero__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.spark_hero__logo {
  margin-bottom: 20px;
}
.spark_hero__logo img {
  height: 40px;
  width: auto;
}
@media (min-width: 768px) {
  .spark_hero__logo img {
    height: 70px;
  }
}
.spark_hero__title {
  color: #fff !important;
  font-size: 32px !important;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
}
@media (min-width: 768px) {
  .spark_hero__title {
    font-size: 42px !important;
  }
}
.spark_hero__subtitle {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
  opacity: 0.9;
}
@media (min-width: 768px) {
  .spark_hero__subtitle {
    font-size: 30px;
  }
}
.spark_hero__buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
}
@media (min-width: 768px) {
  .spark_hero__buttons {
    flex-direction: row;
    gap: 20px;
  }
}
.spark_hero__btn {
  padding: 16px 32px;
  font-size: 18px !important;
  font-weight: 500 !important;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  text-transform: unset !important;
}
.spark_hero__btn--primary {
  background: #e66558;
  color: #fff;
}
.spark_hero__btn--primary:hover {
  background: #d95449;
}
.spark_hero__btn--secondary {
  background: #c8d5dc !important;
  color: #0d2932;
}
.spark_hero__btn--secondary:hover {
  background: #b5c4cc !important;
}
@media (min-width: 768px) {
  .spark_hero__btn {
    padding: 18px 40px;
    font-size: 22px !important;
  }
}
.spark_hero__image {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.spark_hero__image picture {
  width: 95%;
  display: block;
}
.spark_hero__image img {
  width: 100%;
  height: auto;
  display: block;
}
.spark_hero__badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
  color: #ffffff;
  font-weight: 600;
  bottom: 0;
  font-size: 20px;
}
.spark_hero__badge img {
  width: 36px;
  height: 36px;
}

.spark_quiz_popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  display: none;
  align-items: center;
  justify-content: center;
}
.spark_quiz_popup.active {
  display: flex;
}
.spark_quiz_popup *, .spark_quiz_popup *::before, .spark_quiz_popup *::after {
  box-sizing: border-box;
}

.spark_quiz_overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #091d27;
}

.spark_quiz_modal {
  position: relative;
  width: 90%;
  max-width: 500px;
  background: #1f3d47;
  border-radius: 24px;
  padding: 24px;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}
@media (min-width: 768px) {
  .spark_quiz_modal {
    max-width: 600px;
    padding: 32px;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.spark_quiz_close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 32px;
  line-height: 1;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;
}
.spark_quiz_close:hover {
  opacity: 1;
}

.spark_quiz_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.spark_quiz_back {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  padding: 8px 0;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
}
.spark_quiz_back:hover {
  opacity: 0.8;
}

.spark_quiz_logo {
  height: 50px;
  width: auto;
}

.spark_quiz_step {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}

.spark_quiz_progress {
  width: 100%;
  height: 8px;
  background: #2d5360;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 32px;
}

.spark_quiz_progress_bar {
  height: 100%;
  background: linear-gradient(90deg, var(--color-red-63, #ea5e58) 0%, var(--color-red-73, #ff8f73) 100%);
  border-radius: 4px;
  transition: width 0.3s ease;
  width: 16.66%;
}

.spark_quiz_content {
  color: #fff;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.spark_quiz_title {
  font-size: 28px !important;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: #fff !important;
}
@media (min-width: 768px) {
  .spark_quiz_title {
    font-size: 32px !important;
  }
}

.spark_quiz_subtitle {
  font-size: 16px;
  margin: 0 0 24px 0;
  opacity: 0.9;
}
@media (min-width: 768px) {
  .spark_quiz_subtitle {
    font-size: 18px;
  }
}

.spark_quiz_select_wrapper {
  position: relative;
  margin-bottom: 32px;
}
.spark_quiz_select_wrapper::after {
  content: "";
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #333;
  pointer-events: none;
}

.spark_quiz_select {
  width: 100%;
  padding: 16px 20px;
  font-size: 16px;
  background: #fff;
  border: none;
  border-radius: 12px;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  cursor: pointer;
  color: #333;
}
.spark_quiz_select:focus {
  outline: 2px solid #e66558;
}

.spark_quiz_buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
  padding: 0;
}

.spark_quiz_option {
  padding: 16px 20px;
  font-size: 16px;
  background: #fff;
  border: 2px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  color: #333;
  text-align: left;
  list-style: none;
}
.spark_quiz_option:hover {
  background: #f5f5f5;
}
.spark_quiz_option.active {
  background: #e66558;
  color: #fff;
  border: 2px solid #ffffff;
  box-shadow: 0 0 20px 0 rgba(242, 0, 0, 0.72);
}

.spark_quiz_inputs {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
}

.spark_quiz_input_group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.spark_quiz_label {
  font-size: 14px;
  font-weight: 500;
  color: #fff;
}
.spark_quiz_label.required::after {
  content: "*";
  color: #e66558;
  margin-left: 4px;
}

.spark_quiz_input {
  width: 100%;
  padding: 16px 20px;
  font-size: 16px;
  background: #fff;
  border: 2px solid transparent;
  border-radius: 12px;
  color: #333;
}
.spark_quiz_input:focus {
  outline: none;
  border-color: #e66558;
}
.spark_quiz_input::-moz-placeholder {
  color: #999;
}
.spark_quiz_input::placeholder {
  color: #999;
}

.spark_quiz_next {
  width: 100%;
  padding: 18px 32px;
  font-size: 18px;
  font-weight: 600;
  background: #e66558;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: auto;
}
.spark_quiz_next:hover:not(:disabled) {
  background: #d95449;
}
.spark_quiz_next:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
@media (min-width: 768px) {
  .spark_quiz_next {
    font-size: 20px;
  }
}

.spark_quiz_spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-right: 8px;
  vertical-align: middle;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}/*# sourceMappingURL=style.css.map */`, c = (a) => new Promise((n) => {
    const e = document.querySelector(a);
    e && n(e);
    const t = new MutationObserver(() => {
      const s = document.querySelector(a);
      s && (n(s), t.disconnect());
    });
    t.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), f = ({ name: a, dev: n }) => {
    console.log(
      `%c EXP: ${a} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class l {
    constructor(n) {
      this.elements = n instanceof l ? n.elements : typeof n == "string" ? Array.from(document.querySelectorAll(n)) : n instanceof Element ? [n] : Array.isArray(n) ? n : Array.from(n);
    }
    on(n, e, t) {
      return typeof e == "function" && (t = e, e = ""), this.elements.forEach((s) => {
        s.addEventListener(n, function(i) {
          var o;
          if (e !== "") {
            let p = (o = i.target) == null ? void 0 : o.closest(e);
            p && (t == null || t.call(p, i));
          } else
            t == null || t.call(s, i);
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
        n(new l(e), this.elements.indexOf(e));
      return this;
    }
    style(n, e) {
      const t = n.split("-").map((s, i) => i === 0 ? s : s.charAt(0).toUpperCase() + s.slice(1)).join("");
      return this.elements.forEach(function(s) {
        s.style[t] = e;
      }), this;
    }
    find(n) {
      const e = this.elements.map((t) => Array.from(t.querySelectorAll(n)));
      return new l(e.flat());
    }
    attr(n, e) {
      return e ? (this.elements.forEach(function(t) {
        t.setAttribute(n, e);
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
  const r = (a) => new l(a), m = (a) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", a, "variant_1"));
    }, 1e3);
  }, d = "https://conversionrate-store.github.io/a-b_images/spark/", h = (
    /* HTML */
    `
  <section class="spark_hero">
    <div class="spark_hero__container">
      <div class="spark_hero__content">
        <div class="spark_hero__logo">
          <img
            src="https://d9hhrg4mnvzow.cloudfront.net/try.sparkmembership.com/spark-software/6215cf2b-logo-svg-recreated.svg"
            alt="Spark Membership"
          />
        </div>
        <h1 class="spark_hero__title">
          Do you want to turn more prospects into active students for your Martial Arts Studio
        </h1>

        <p class="spark_hero__subtitle">while saving time on communications, billing, finance, etc?</p>

        <div class="spark_hero__buttons">
          <a href="https://sparkmembership.com/pricing" class="spark_hero__btn spark_hero__btn--primary"
            >Yes, show me how!</a
          >
          <button class="spark_hero__btn spark_hero__btn--secondary">No, thanks</button>
        </div>
      </div>

      <div class="spark_hero__image">
        <picture>
          <source media="(min-width: 768px)" srcset="${d}home_d.webp" />
          <img src="${d}home_m.webp" alt="Spark Platform" />
        </picture>

        <div class="spark_hero__badge">
          <img src="${d}schedule.svg" alt="Trial" />
          <span class="spark_hero__badge-label">30 DAYS FREE</span>
        </div>
      </div>
    </div>
  </section>
`
  ), b = (
    /* HTML */
    `
  <div class="spark_quiz_popup">
    <div class="spark_quiz_overlay"></div>
    <div class="spark_quiz_modal">
      <div class="spark_quiz_header">
        <div class="spark_quiz_back">
          <img src="${d}back.svg" alt="Back" />
          Back
        </div>
        <img
          src="https://sparkmembership.com/wp-content/smush-webp/2021/11/site_logo2.png.webp"
          alt="Spark"
          class="spark_quiz_logo"
        />
        <span class="spark_quiz_step">1/5</span>
      </div>

      <div class="spark_quiz_progress">
        <div class="spark_quiz_progress_bar"></div>
      </div>

      <div class="spark_quiz_content">
        <!-- Steps will be injected here -->
      </div>
    </div>
  </div>
`
  );
  f({ name: "Spark Quiz", dev: "YK" }), m("spark_quiz");
  const k = [
    {
      step: 1,
      title: "Primary Discipline",
      subtitle: "Please specify your primary discipline",
      type: "select",
      options: [
        "Taekwondo",
        "Karate",
        "Brazilian Jiu-Jitsu",
        "Kickboxing",
        "Mixed Martial Arts (MMA)",
        "Krav Maga",
        "Other"
      ]
    },
    {
      step: 2,
      title: "Active Students",
      subtitle: "Approximately how many active students do you have today?",
      type: "select",
      options: ["Under 50 Students", "50 to 250 Students", "Over 250 Students"]
    },
    {
      step: 3,
      title: "Growth Potential",
      subtitle: "How many more students can you take in your studio?",
      type: "buttons",
      options: [
        "Up to 25% more students",
        "Up to 50% more students",
        "Up to 100% more students",
        "More than 100% more students"
      ]
    },
    {
      step: 4,
      title: "Personal Details",
      subtitle: "",
      type: "inputs",
      fields: [
        { label: "First name", placeholder: "Please select", type: "text", required: !0 },
        { label: "Last name", placeholder: "Please select", type: "text", required: !0 }
      ]
    },
    {
      step: 5,
      title: "Company Information",
      subtitle: "",
      type: "inputs",
      fields: [{ label: "Company name", placeholder: "Please select", type: "text", required: !0 }]
    },
    {
      step: 6,
      title: "Contact Details",
      subtitle: "",
      type: "inputs",
      fields: [
        { label: "Email", placeholder: "Please select", type: "email", required: !0 },
        { label: "Phone number", placeholder: "Please select", type: "tel", required: !0 }
      ]
    }
  ];
  class x {
    constructor() {
      this.currentStep = 1, this.quizData = {}, this.init();
    }
    async init() {
      await c("body"), r("body").elements[0].insertAdjacentHTML("afterbegin", `<style>${_}</style>`), window.location.href === "https://try.sparkmembership.com/spark-software/" && (await c(".lp-positioned-content"), r(".lp-positioned-content").elements[0].insertAdjacentHTML("afterbegin", h), await c(".spark_hero__btn--secondary"), r(".spark_hero__btn--secondary").on("click", () => {
        r(".spark_hero").elements[0];
        const n = r("#lp-pom-block-18").elements[0];
        n && n.scrollIntoView({ behavior: "smooth", block: "start" });
      }), await c("#lp-pom-button-264"), r("#lp-pom-button-264, #lp-pom-button-273").on("click", (n) => {
        n.preventDefault(), window.location.href = "https://sparkmembership.com/pricing";
      })), window.location.href.includes("/pricing") && (this.initQuiz(), this.openQuiz());
    }
    initQuiz() {
      document.body.insertAdjacentHTML("beforeend", b), r(".spark_quiz_back").on("click", () => this.prevStep()), this.renderStep();
    }
    openQuiz() {
      r(".spark_quiz_popup").elements[0].classList.add("active"), document.body.style.overflow = "hidden";
    }
    closeQuiz() {
      r(".spark_quiz_popup").elements[0].classList.remove("active"), document.body.style.overflow = "";
    }
    renderStep() {
      const n = k[this.currentStep - 1], e = r(".spark_quiz_content").elements[0];
      r(".spark_quiz_step").text(`${this.currentStep}/6`), r(".spark_quiz_progress_bar").elements[0].style.width = `${this.currentStep / 6 * 100}%`, this.currentStep === 1 ? r(".spark_quiz_back").elements[0].style.visibility = "hidden" : r(".spark_quiz_back").elements[0].style.visibility = "visible";
      let t = `
      <h2 class="spark_quiz_title">${n.title}</h2>
      ${n.subtitle ? `<p class="spark_quiz_subtitle">${n.subtitle}</p>` : ""}
    `;
      n.type === "select" ? t += `
        <div class="spark_quiz_select_wrapper">
          <select class="spark_quiz_select" data-step="${n.step}">
            <option value="">Please select</option>
            ${n.options && n.options.map((i) => `<option value="${i}">${i}</option>`).join("")}
          </select>
        </div>
      ` : n.type === "buttons" ? t += `
        <ul class="spark_quiz_buttons">
          ${n.options && n.options.map((i) => `<li class="spark_quiz_option" data-value="${i}">${i}</li>`).join("")}
        </ul>
      ` : n.type === "inputs" && (t += `
        <div class="spark_quiz_inputs">
          ${n.fields && n.fields.map(
        (i) => `
            <div class="spark_quiz_input_group">
              <label class="spark_quiz_label${i.required ? " required" : ""}">${i.label}</label>
              <input 
                type="${i.type}" 
                class="spark_quiz_input" 
                placeholder="${i.placeholder}"
                data-field="${i.label}"
                ${i.required ? "required" : ""}
              />
            </div>
          `
      ).join("")}
        </div>
      `);
      const s = this.currentStep === 6 ? "Request Demo" : "Next step";
      t += `<button class="spark_quiz_next" disabled>${s}</button>`, e.innerHTML = t, this.addStepListeners(n);
    }
    addStepListeners(n) {
      if (n.type === "select")
        r(".spark_quiz_select").on("change", (e) => {
          const t = e.target.value;
          this.quizData[`step${n.step}`] = t, r(".spark_quiz_next").elements[0].disabled = !t, this.fillFormField(n.step, t);
        });
      else if (n.type === "buttons")
        r(".spark_quiz_option").on("click", (e) => {
          r(".spark_quiz_option").elements.forEach((t) => t.classList.remove("active")), e.target.classList.add("active"), this.quizData[`step${n.step}`] = e.target.dataset.value, r(".spark_quiz_next").elements[0].disabled = !1, this.fillFormField(n.step, e.target.dataset.value);
        });
      else if (n.type === "inputs") {
        const e = r(".spark_quiz_input").elements, t = () => {
          const s = Array.from(e).filter((o) => o.required);
          let i = !0;
          i = s.every((o) => o.value.trim()), n.step === 6 && i && e.forEach((o) => {
            const p = o.dataset.field, u = o.value.trim();
            p === "Email" ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u) || (i = !1) : p === "Phone number" && u.replace(/\D/g, "").length < 10 && (i = !1);
          }), r(".spark_quiz_next").elements[0].disabled = !i, e.forEach((o) => {
            const p = o.dataset.field;
            this.quizData[p] = o.value, this.fillFormField(n.step, o.value, p);
          });
        };
        e.forEach((s) => {
          s.addEventListener("input", t);
        });
      }
      r(".spark_quiz_next").on("click", () => this.nextStep());
    }
    nextStep() {
      this.currentStep < 6 ? (this.currentStep++, this.renderStep()) : this.submitQuiz();
    }
    prevStep() {
      this.currentStep > 1 && (this.currentStep--, this.renderStep());
    }
    fillFormField(n, e, t) {
      let s = "";
      if (n === 1 ? s = "form-field-ma_discipline" : n === 2 ? s = "form-field-student_count" : n === 4 ? t === "First name" ? s = "form-field-field_ecdec81" : t === "Last name" && (s = "form-field-field_f5d38ef") : n === 5 ? s = "form-field-company_name" : n === 6 && (t === "Email" ? s = "form-field-field_5b5cb8f" : t === "Phone number" && (s = "form-field-field_9b0a1af")), s) {
        const i = document.getElementById(s);
        i && (i.value = e, i.dispatchEvent(new Event("change", { bubbles: !0 })), i.dispatchEvent(new Event("input", { bubbles: !0 })));
      }
    }
    submitQuiz() {
      console.log("Quiz submitted:", this.quizData);
      const n = r(".spark_quiz_next").elements[0];
      n && (n.disabled = !0, n.innerHTML = '<span class="spark_quiz_spinner"></span> Loading...');
      const e = document.querySelector('.elementor-form button[type="submit"]');
      e && e.click();
    }
  }
  new x();
})();
//# sourceMappingURL=index.js.map
