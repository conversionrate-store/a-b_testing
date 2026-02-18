(function() {
  "use strict";
  const x = `.reviews {\r
  display: none;\r
}\r
\r
.faq-block {\r
  background: #f4f4f4;\r
  border: 3px solid #f4f4f4;\r
  border-radius: 24px;\r
  padding: 45px 3px;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  gap: 32px;\r
}\r
\r
.faq-block__title {\r
  font-family: 'Open Sans', sans-serif;\r
  font-weight: 700;\r
  font-size: 40px;\r
  line-height: 48px;\r
  color: #444;\r
  text-align: center;\r
  margin: 0;\r
}\r
\r
.faq-block__list-wrap {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 12px;\r
  width: 800px;\r
}\r
\r
.faq-block__item {\r
  background: #fff;\r
  border: 1px solid #d8d8d8;\r
  border-radius: 8px;\r
  overflow: hidden;\r
}\r
\r
.faq-block__item.is-open .faq-block__icon--plus {\r
  display: none;\r
}\r
\r
.faq-block__item.is-open .faq-block__icon--minus {\r
  display: flex;\r
}\r
\r
.faq-block__item.is-open .faq-block__answer {\r
  max-height: 1000px;\r
  padding-bottom: 21px;\r
}\r
\r
.faq-block__question {\r
  width: 100%;\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  padding: 21px 25px;\r
  cursor: pointer;\r
  gap: 16px;\r
  box-sizing: border-box;\r
}\r
\r
.faq-block__question-text {\r
  font-family: 'Open Sans', sans-serif;\r
  font-weight: 700;\r
  font-size: 18px;\r
  line-height: 26px;\r
  color: #4e4e4e;\r
  flex: 1;\r
}\r
\r
.faq-block__icon {\r
  flex-shrink: 0;\r
  width: 18px;\r
  height: 18px;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
\r
.faq-block__icon--minus {\r
  display: none;\r
}\r
\r
.faq-block__answer {\r
  max-height: 0;\r
  overflow: hidden;\r
  transition:\r
    max-height 0.3s ease,\r
    padding-bottom 0.3s ease;\r
  padding: 0 25px;\r
  box-sizing: border-box;\r
}\r
\r
.faq-block__answer-inner {\r
  font-family: 'Open Sans', sans-serif;\r
  font-weight: 400;\r
  font-size: 16px;\r
  line-height: 26px;\r
  color: #4e4e4e;\r
}\r
\r
.faq-block__answer-inner ul {\r
  list-style: disc;\r
  padding-left: 24px;\r
  margin: 8px 0;\r
}\r
\r
.faq-block__answer-inner ul li {\r
  margin-bottom: 0;\r
}\r
\r
.faq-block__answer-inner ul li::before {\r
  background-color: #000000 !important;\r
}\r
\r
.faq-block__link {\r
  font-weight: 700;\r
  color: #121417;\r
  text-decoration: underline;\r
  font-size: 16px !important;\r
  line-height: 26px;\r
  font-weight: 700 !important;\r
}\r
\r
@media (max-width: 900px) {\r
  .faq-block {\r
    padding: 40px 16px;\r
    border-radius: 16px;\r
  }\r
\r
  .faq-block__title {\r
    font-size: 28px;\r
    line-height: 36px;\r
  }\r
\r
  .faq-block__list-wrap {\r
    width: 100%;\r
  }\r
\r
  .faq-block__question-text {\r
    font-size: 16px;\r
    line-height: 24px;\r
  }\r
}\r
\r
/* ─── Reviews block ──────────────────────────────────────────────────────────── */\r
\r
.reviews-block {\r
  background: #fff5e2;\r
  padding: 42px 84px;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  gap: 0;\r
\r
  & > img {\r
    width: 100%;\r
    max-width: 260px !important;\r
    margin-bottom: 24px;\r
  }\r
}\r
\r
.reviews-block__title {\r
  font-family: 'Open Sans', sans-serif;\r
  font-weight: 700;\r
  font-size: 40px;\r
  line-height: 48px;\r
  color: #444;\r
  text-align: center;\r
  margin: 0 0 16px;\r
}\r
\r
.reviews-block__subtitle {\r
  font-family: 'Open Sans', sans-serif;\r
  font-weight: 400;\r
  font-size: 20px;\r
  line-height: 28px;\r
  color: #444;\r
  text-align: center;\r
  margin: 0 0 42px;\r
}\r
\r
.reviews-block__section {\r
  width: 100%;\r
  max-width: 1272px;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  gap: 24px;\r
  margin-bottom: 42px;\r
\r
  .tns-outer,\r
  .reviews-block__track {\r
    width: 100%;\r
  }\r
}\r
\r
.reviews-block__section:last-child {\r
  margin-bottom: 0;\r
}\r
\r
.reviews-block__logo {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
\r
.reviews-block__logo svg,\r
.reviews-block__logo img {\r
  max-height: 77px;\r
  width: auto;\r
}\r
\r
.reviews-block__track {\r
  width: 100%;\r
}\r
\r
.tns-outer {\r
  width: 100%;\r
  overflow: hidden;\r
}\r
\r
.reviews-block__slider {\r
  .tns-item {\r
    box-sizing: border-box;\r
    padding: 4px 0;\r
  }\r
}\r
\r
.reviews-block__card {\r
  background: #fff;\r
  border: 1px solid #e8e8e8;\r
  border-radius: 24px;\r
  padding: 32px 24px;\r
  height: 100%;\r
  min-width: 0;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 16px;\r
  box-sizing: border-box;\r
}\r
\r
.reviews-block__card-header {\r
  display: flex;\r
  align-items: center;\r
  gap: 18px;\r
}\r
\r
.reviews-block__avatar {\r
  width: 32px;\r
  height: 32px;\r
  border-radius: 50%;\r
  flex-shrink: 0;\r
  overflow: hidden;\r
  display: block;\r
}\r
\r
.reviews-block__avatar svg {\r
  display: block;\r
  width: 32px;\r
  height: 32px;\r
}\r
\r
.reviews-block__name-wrap {\r
  display: flex;\r
  flex-direction: column;\r
  gap: 2px;\r
}\r
\r
.reviews-block__name {\r
  font-family: 'Open Sans', sans-serif;\r
  font-weight: 700;\r
  font-size: 18px;\r
  line-height: 28px;\r
  color: #000;\r
  letter-spacing: -0.27px;\r
}\r
\r
.reviews-block__date {\r
  font-family: 'Open Sans', sans-serif;\r
  font-weight: 400;\r
  font-size: 16px;\r
  line-height: 32px;\r
  color: #1e1e1e;\r
  letter-spacing: -0.24px;\r
}\r
\r
/* Google card — date is inside .name-wrap, smaller */\r
.reviews-block__name-wrap .reviews-block__date {\r
  font-size: 12px;\r
  line-height: 22px;\r
  color: #828282;\r
  letter-spacing: -0.18px;\r
}\r
\r
.reviews-block__stars {\r
  display: flex;\r
  gap: 4px;\r
  align-items: center;\r
}\r
\r
.reviews-block__star {\r
  display: flex;\r
  align-items: center;\r
  width: 22px;\r
  height: 20px;\r
}\r
\r
.reviews-block__text {\r
  font-family: 'Open Sans', sans-serif;\r
  font-weight: 400;\r
  font-size: 16px;\r
  line-height: 32px;\r
  color: #1e1e1e;\r
  letter-spacing: -0.24px;\r
  margin: 0;\r
  flex: 1;\r
}\r
\r
.reviews-block__footer {\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
}\r
\r
/* tiny-slider overrides */\r
.tns-outer {\r
  width: 100%;\r
}\r
\r
.tns-nav {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 8px;\r
\r
  button {\r
    width: 12px;\r
    height: 12px;\r
    border-radius: 50%;\r
    background: #bbb;\r
    border: none;\r
    padding: 0;\r
    cursor: pointer;\r
    transition: background 0.2s;\r
    flex-shrink: 0;\r
\r
    &.tns-nav-active {\r
      background: #ffb027;\r
    }\r
  }\r
}\r
\r
.reviews-block__nav {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: 16px;\r
  width: 100%;\r
}\r
\r
.reviews-block__nav-dots {\r
  display: flex;\r
  align-items: center;\r
  gap: 8px;\r
\r
  button {\r
    width: 12px;\r
    height: 12px;\r
    border-radius: 50%;\r
    background: #bbb;\r
    border: none;\r
    padding: 0;\r
    cursor: pointer;\r
    transition: background 0.2s;\r
\r
    &.tns-nav-active {\r
      background: #ffb027;\r
    }\r
  }\r
}\r
\r
.reviews-block__arrow {\r
  width: 46px;\r
  height: 46px;\r
  background: #fff;\r
  border-radius: 50%;\r
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  cursor: pointer;\r
  flex-shrink: 0;\r
}\r
\r
/* ─── Mobile ─────────────────────────────────────────────────────────────────── */\r
\r
@media (max-width: 768px) {\r
  .reviews-block {\r
    padding: 32px 16px;\r
  }\r
\r
  .reviews-block__title {\r
    font-size: 28px;\r
    line-height: 36px;\r
  }\r
\r
  .reviews-block__subtitle {\r
    font-size: 16px;\r
    line-height: 24px;\r
  }\r
\r
  .reviews-block__avatar {\r
    width: 42px;\r
    height: 42px;\r
  }\r
\r
  .reviews-block__avatar svg {\r
    width: 42px;\r
    height: 42px;\r
  }\r
\r
  /* Hide tns slider wrapper on mobile */\r
  .reviews-block__section .tns-outer,\r
  .reviews-block__section .reviews-block__track {\r
    width: 100%;\r
    overflow: visible;\r
  }\r
\r
  .reviews-block__section .tns-outer .tns-ovh {\r
    overflow: visible;\r
  }\r
\r
  .reviews-block__slider {\r
    display: flex !important;\r
    flex-direction: column !important;\r
    transform: none !important;\r
    width: 100% !important;\r
  }\r
\r
  .reviews-block__slider .tns-item {\r
    width: 100% !important;\r
    padding: 0 !important;\r
  }\r
\r
  .reviews-block__card {\r
    margin-bottom: 16px;\r
  }\r
}\r
\r
/* ─── Review text clamp ─────────────────────────────────────────────────────── */\r
\r
.reviews-block__text-wrap {\r
  display: flex;\r
  flex-direction: column;\r
  align-items: flex-start;\r
  gap: 6px;\r
  flex: 1;\r
}\r
\r
.reviews-block__text--clamped {\r
  display: -webkit-box;\r
  -webkit-line-clamp: 5;\r
  -webkit-box-orient: vertical;\r
  overflow: hidden;\r
}\r
\r
.reviews-block__read-more {\r
  background: none;\r
  border: none;\r
  padding: 0;\r
  font-family: 'Open Sans', sans-serif;\r
  font-weight: 700;\r
  font-size: 14px;\r
  line-height: 20px;\r
  color: #ffb027;\r
  cursor: pointer;\r
  text-decoration: underline;\r
  flex-shrink: 0;\r
\r
  &:hover {\r
    color: #e09c1a;\r
  }\r
}\r
\r
/* Hidden cards on mobile (load-more pattern) */\r
.rb-hidden {\r
  display: none !important;\r
}\r
\r
/* Load more button */\r
.reviews-block__load-more {\r
  display: block;\r
  margin: 16px auto 0;\r
  padding: 12px 32px;\r
  background: #fdb948;\r
  color: #1e1e1e;\r
  font-family: 'Open Sans', sans-serif;\r
  font-weight: 700;\r
  font-size: 16px;\r
  line-height: 24px;\r
  border: none;\r
  border-radius: 8px;\r
  cursor: pointer;\r
  transition: background 0.2s;\r
  width: 100%;\r
  border-radius: 50px;\r
  max-width: 295px;\r
}\r
`, f = (r) => new Promise((n) => {
    const e = document.querySelector(r);
    e && n(e);
    const t = new MutationObserver(() => {
      const a = document.querySelector(r);
      a && (n(a), t.disconnect());
    });
    t.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), k = ({ name: r, dev: n }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class h {
    constructor(n) {
      this.elements = n instanceof h ? n.elements : typeof n == "string" ? Array.from(document.querySelectorAll(n)) : n instanceof Element ? [n] : Array.isArray(n) ? n : Array.from(n);
    }
    on(n, e, t) {
      return typeof e == "function" && (t = e, e = ""), this.elements.forEach((a) => {
        a.addEventListener(n, function(s) {
          var l;
          if (e !== "") {
            let i = (l = s.target) == null ? void 0 : l.closest(e);
            i && (t == null || t.call(i, s));
          } else
            t == null || t.call(a, s);
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
        n(new h(e), this.elements.indexOf(e));
      return this;
    }
    style(n, e) {
      const t = n.split("-").map((a, s) => s === 0 ? a : a.charAt(0).toUpperCase() + a.slice(1)).join("");
      return this.elements.forEach(function(a) {
        a.style[t] = e;
      }), this;
    }
    find(n) {
      const e = this.elements.map((t) => Array.from(t.querySelectorAll(n)));
      return new h(e.flat());
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
  const m = (r) => new h(r), q = async (r) => {
    const n = (e) => new Promise((t, a) => {
      const s = e.split(".").pop();
      if (s === "js") {
        if (Array.from(document.scripts).map((d) => d.src.toLowerCase()).includes(e.toLowerCase()))
          return p(`Script ${e} allready downloaded!`, "success"), t("");
        const i = document.createElement("script");
        i.src = e, i.onload = t, i.onerror = a, document.head.appendChild(i);
      } else if (s === "css") {
        if (Array.from(document.styleSheets).map((d) => {
          var c;
          return (c = d.href) == null ? void 0 : c.toLowerCase();
        }).includes(e.toLowerCase()))
          return p(`Style ${e} allready downloaded!`, "success"), t("");
        const i = document.createElement("link");
        i.rel = "stylesheet", i.href = e, i.onload = t, i.onerror = a, document.head.appendChild(i);
      }
    });
    for (const e of r)
      p(e), await n(e), p(`Loaded librari ${e}`);
    p("All libraries loaded!", "success");
  }, H = (r) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", r, "variant_1"));
    }, 1e3);
  }, p = (r, n = "info") => {
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
    console.log(`%c>>> ${r}`, `${e} font-size: 16px; font-weight: 600`);
  }, S = [
    {
      question: "Who are we and what do we specialise in?",
      answer: 'We are Hunter Galloway, an award‑winning mortgage brokerage based in Brisbane, Australia. We specialise in helping clients like you secure home loans, refinance existing loans, and find tailored finance solutions. By working with a panel of over 30 Australian banks and lenders, we make sure you get the loan that fits your goals. <a href="https://www.huntergalloway.com.au/home-loans-brisbane/" class="faq-block__link">Learn more about us</a>'
    },
    {
      question: "How are we different from going directly to a bank?",
      answer: `We provide personalised assessments before submitting any application, which helps reduce rejection risk. Our focus is on finding the loan structure that works best for you, whether you're a first home buyer, upgrading your home, or refinancing. Our service is free because we are paid by the lender, not by you. <a href="https://www.huntergalloway.com.au/who-we-help/" class="faq-block__link">See how we help</a>`
    },
    {
      question: "Do we have tools to help me understand borrowing and costs?",
      answer: 'Yes! We offer a range of free calculators to help you plan and prepare:<ul class="faq-block__list"><li><a href="https://www.huntergalloway.com.au/how-much-home-can-i-afford/" class="faq-block__link">How Much Can I Borrow</a></li><li><a href="https://www.huntergalloway.com.au/deposit-calculator/" class="faq-block__link">Deposit Calculator</a></li><li><a href="https://www.huntergalloway.com.au/lvr-calculator/" class="faq-block__link">LVR Calculator</a></li><li><a href="https://www.huntergalloway.com.au/stamp-duty-calculator-queensland/" class="faq-block__link">Stamp Duty Calculator</a></li><li><a href="https://www.huntergalloway.com.au/lmi-calculator/" class="faq-block__link">LMI Calculator</a></li><li><a href="https://www.huntergalloway.com.au/home-loan-extra-repayment-calculator/" class="faq-block__link">Extra Repayments Calculator</a></li></ul>These tools give you a clear picture of what you can afford before you speak to us'
    },
    {
      question: "Can I use a mortgage calculator right now?",
      answer: 'Absolutely - you can use our <a href="https://www.huntergalloway.com.au/mortgage-calculator/" class="faq-block__link">Mortgage Calculator</a> to estimate your borrowing power based on your income, deposit, and loan type.'
    },
    {
      question: "Do we provide guidance for first home buyers?",
      answer: `Yes, we do. We've created guides, checklists, and educational content to help first home buyers make informed decisions. You can explore our resources here: <a href="https://www.huntergalloway.com.au/?s=blog" class="faq-block__link">Resources &amp; Blog</a>`
    },
    {
      question: "Can I get personalised advice before applying?",
      answer: `Definitely. After a quick online assessment or a booked consultation, we'll review your financial situation, explain your borrowing power, and guide you to the most suitable loan options. <a href="https://www.huntergalloway.com.au/contact/" class="faq-block__link">Book a consultation</a>`
    },
    {
      question: "Do you offer refinancing options?",
      answer: 'Yes. We help clients refinance to lower their interest rates, reduce payments, consolidate debt, or access equity - all tailored to your situation. <a href="https://www.huntergalloway.com.au/lower-your-rate" class="faq-block__link">Learn more about refinancing</a>'
    },
    {
      question: "What types of loans do we assist with?",
      answer: 'We focus on residential and investment home loans for owner-occupiers and investors. For specialist commercial or business loans, we can refer you to the right experts. <a href="https://www.huntergalloway.com.au/mortgage-calculator/" class="faq-block__link">More on loans we provide</a>'
    },
    {
      question: "Where are we located and who do we serve?",
      answer: 'Our head office is in Brisbane, Queensland, but we serve clients all over Australia via phone, video, and online consultations. <a href="https://www.huntergalloway.com.au/contact/" class="faq-block__link">Contact us</a>'
    },
    {
      question: "Where can I learn more about mortgages, saving for a deposit, or refinancing?",
      answer: 'We regularly publish guides and blog posts to help you make informed decisions about your home loan. Check out our <a href="https://www.huntergalloway.com.au//?s=blog" class="faq-block__link">Blog &amp; Guides</a> for practical tips and insights.'
    }
  ], o = "", A = [
    {
      name: "Justin",
      avatar: o,
      date: "Feb 18, 2026",
      rating: 5,
      text: "Hunter Galloway is the most professional team I've ever had the privilege of working with. They have helped us with two home loan applications so far and their advice has always been clear, incredibly responsive and accurate.",
      source: "google"
    },
    {
      name: "Jason Nesbitt",
      avatar: o,
      date: "Feb 17, 2026",
      rating: 5,
      text: "I have just finalised my mortgage with Hunter Galloway. Professional from start to finish and extremely helpful in the process of securing the home loan. I highly recommended them.",
      source: "google"
    },
    {
      name: "Monique Roosen",
      avatar: o,
      date: "Feb 17, 2026",
      rating: 5,
      text: "Josh and the Team did an amazing job getting the preapprovals done quickly and efficiently within some very tight timeframes. A huge thank you for all your work with putting some urgency behind the mortgage pre-approval application.",
      source: "google"
    },
    {
      name: "Riley Lehmann",
      avatar: o,
      date: "Feb 16, 2026",
      rating: 5,
      text: "My experience with the Hunter Galloway team has been nothing but great. Ty, Suen and Gabi made the intimidating process of buying mine and my partner's first home a breeze. No matter how many questions we had they were consistently prompt.",
      source: "google"
    },
    {
      name: "Ayurshi Khatri",
      avatar: o,
      date: "Feb 16, 2026",
      rating: 5,
      text: "Had a wonderful experience with the team of Hunter Galloway. They were very knowledgeable and approachable. Special thanks to Jayden and Gemma for assisting us with the process.",
      source: "google"
    },
    {
      name: "Daniel Allison",
      avatar: o,
      date: "Feb 14, 2026",
      rating: 5,
      text: "Fantastic communication. Commitment to getting great rates. Gives great advice when in tough borrowing situations.",
      source: "google"
    },
    {
      name: "Serena Fulford",
      avatar: o,
      date: "Feb 11, 2026",
      rating: 5,
      text: "Responsive, informed and very engaging - Nathan explained my options really clearly. Achieved a good outcome.",
      source: "google"
    },
    {
      name: "Jordan Pyne",
      avatar: o,
      date: "Feb 11, 2026",
      rating: 5,
      text: "Jayden, Gemma, Vin and the team are great! Highly recommend.",
      source: "google"
    },
    {
      name: "Rebecca Mansell",
      avatar: o,
      date: "Feb 4, 2026",
      rating: 5,
      text: "We recently purchased our first home, and Josh and Angela were incredible to work with. As first home buyers, the process felt incredibly daunting at first and we had no idea what to expect. But they made everything feel manageable and were so reassuring every step of the way. We trusted them completely and we were not disappointed. I’d highly recommend Hunter Galloway to anyone looking for a broker, especially first home buyers who might be feeling unsure or overwhelmed. Honestly, I wish I'd given them a call earlier. Thanks so much, Josh and Angela!",
      source: "google"
    },
    {
      name: "Karishma Maganlal",
      avatar: o,
      date: "Feb 4, 2026",
      rating: 5,
      text: "Thank you to Alex and Christian for making my first home purchase a seamless experience. They were always available by phone or email and happy to explain any part of the process. I couldn’t have asked for better support.",
      source: "google"
    }
  ], C = [
    {
      name: "Hayley T",
      avatar: o,
      date: "Nov 2025",
      rating: 5,
      text: "I first used Hunter Galloway a few years ago to refinance my mortgage after our build was complete. Gabi was super friendly and knowledgeable and I really felt she was someone I could trust with a decision such as this. I have been continually liaising with them to make sure I've got the best available rate and package. Thank you Gabi and the team for your professional and most of all, saving money on my home loan.",
      source: "productreview"
    },
    {
      name: "Anas B.",
      avatar: o,
      date: "2023",
      rating: 5,
      text: "Heidi Pearson and Jayden Vecchio were amazing, supportive, responsive and extremely professional throughout the process. Heidi was on top of her work and there was never a single instance where I had to follow-up or was left uninformed. Her due diligence was always up to the mark. She was an absolute delight to work with.",
      source: "productreview"
    },
    {
      name: "Stephanie Whitmore",
      avatar: o,
      date: "2023",
      rating: 5,
      text: "We had an exceptional experience with Hunter Galloway, specifically Nathan and Gemma, during the purchase of our first home. Their professionalism, care, and patience throughout the entire mortgage process were truly commendable. They guided us seamlessly, addressing every concern with expertise and a personal touch.",
      source: "productreview"
    },
    {
      name: "Nima",
      avatar: o,
      date: "2022",
      rating: 5,
      text: "I had my second mortgage sorted by Hunter Galloway and it was another flawless experience. Alex and Christian did a fantastic job, kept me well informed throughout the process and were always there if I had questions. Thanks so much Hunter Galloway, especially Alex and Christian.",
      source: "productreview"
    },
    {
      name: "Natty M",
      avatar: o,
      date: "2022",
      rating: 5,
      text: "From the initial phone call hubby made to Hunter Galloway we are grateful to Nathan, Joshua and Pau who helped us with our home loan refinance. The team worked with us along the application process and are very helpful in all our questions. We're now getting ready for settlement and are so pleased with how efficient the team have been.",
      source: "productreview"
    },
    {
      name: "GMC",
      avatar: o,
      date: "2021",
      rating: 5,
      text: "So happy with the help and support all of the team at Hunter Galloway gave us in our journey to purchase our new home. Everyone was friendly and knowledgeable, and nothing was too much trouble. I would highly recommend.",
      source: "productreview"
    },
    {
      name: "MGC",
      avatar: o,
      date: "2021",
      rating: 5,
      text: "The team at Hunter Galloway provided excellent service throughout the loan application process. They communicated very well with me. I was confident that I knew what the next step was at all times and that they were just a friendly phone call or email away for any questions. This is the second time I have engaged Hunter Galloway and both experiences have been excellent. I would highly recommend them.",
      source: "productreview"
    },
    {
      name: "Bhawana Rai",
      avatar: o,
      date: "2021",
      rating: 5,
      text: "Hunter Galloway helped us with the mortgage consultation and they were absolutely great to work with. Blake Belford was our agent and he was extremely helpful and responsive. I would recommend them to anyone who's looking for a similar service, you'll not be disappointed.",
      source: "productreview"
    },
    {
      name: "Sharon S.",
      avatar: o,
      date: "2021",
      rating: 5,
      text: "Hunter Galloway is true to their mission – home loans made easy! From the initial phone call, I was impressed with the professional response to my general queries. Jayden, Nathan and the team went above and beyond to make the entire process smooth and stress-free.",
      source: "productreview"
    },
    {
      name: "Joel D.",
      avatar: o,
      date: "2021",
      rating: 5,
      text: "A little while back when I had a change of circumstances that made me pull out of a home loan application, I found a video online by Hunter Galloway about how casual and freelance workers can still get home loans. Six months later I found myself in that position and when looking for a broker to help me out, I remembered Hunter Galloway. I have not been disappointed.",
      source: "productreview"
    }
  ], g = " https://conversionrate-store.github.io/a-b_images/huntergalloway/", b = {
    plus: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M16.418 7.41797H10.582V1.58203C10.582 0.708293 9.87374 0 9 0C8.12626 0 7.41797 0.708293 7.41797 1.58203V7.41797H1.58203C0.708293 7.41797 0 8.12626 0 9C0 9.87374 0.708293 10.582 1.58203 10.582H7.41797V16.418C7.41797 17.2917 8.12626 18 9 18C9.87374 18 10.582 17.2917 10.582 16.418V10.582H16.418C17.2917 10.582 18 9.87374 18 9C18 8.12626 17.2917 7.41797 16.418 7.41797Z" fill="#4E4E4E"/>
</svg>`,
    minus: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M10.582 7.41797H16.418C17.2917 7.41797 18 8.12626 18 9C18 9.87374 17.2917 10.582 16.418 10.582H10.582H7.41797H1.58203C0.708293 10.582 0 9.87374 0 9C0 8.12626 0.708293 7.41797 1.58203 7.41797H7.41797H10.582Z" fill="#4E4E4E"/>
</svg>`
  }, L = (
    /* HTML */
    `
  <div class="faq-block">
    <h2 class="faq-block__title">FAQ</h2>
    <div class="faq-block__list-wrap">${S.map(
      (r) => (
        /* HTML */
        ` <div class="faq-block__item">
        <div class="faq-block__question">
          <span class="faq-block__question-text">${r.question}</span>
          <span class="faq-block__icon faq-block__icon--plus">${b.plus}</span>
          <span class="faq-block__icon faq-block__icon--minus">${b.minus}</span>
        </div>
        <div class="faq-block__answer">
          <div class="faq-block__answer-inner">${r.answer}</div>
        </div>
      </div>`
      )
    ).join("")}</div>
  </div>
`
  ), w = {
    star: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
<g clip-path="url(#clip0_46_215)">
<path d="M10.9997 0L13.9092 6.99537L21.4613 7.60081L15.7074 12.5296L17.4653 19.8992L10.9997 15.95L4.53407 19.8992L6.29198 12.5296L0.538086 7.60081L8.09017 6.99537L10.9997 0Z" fill="#FDB948"/>
</g>
<defs>
<clipPath id="clip0_46_215">
<rect width="22" height="20" fill="white"/>
</clipPath>
</defs>
</svg>`,
    arrowLeft: `<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 1L2 8L9 15" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    arrowRight: `<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L8 8L1 15" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    userDefault: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16" cy="16" r="16" fill="#BBBBBB"/>
<circle cx="16" cy="13" r="5" fill="white"/>
<ellipse cx="16" cy="26" rx="9" ry="6" fill="white"/>
</svg>`
  }, v = (r) => Array.from({ length: r }, () => `<span class="reviews-block__star">${w.star}</span>`).join(""), y = (r) => r ? `<img class="reviews-block__avatar" src="${r}" alt="avatar">` : `<span class="reviews-block__avatar">${w.userDefault}</span>`, E = (r) => (
    /* HTML */
    `
  <div class="reviews-block__card__wrap">
    <div class="reviews-block__card">
      <div class="reviews-block__card-header">
        ${y(r.avatar || "")}
        <span class="reviews-block__name">${r.name}</span>
      </div>
      <div class="reviews-block__text-wrap">
        <p class="reviews-block__text reviews-block__text--clamped">${r.text}</p>
        <button class="reviews-block__read-more">Read more</button>
      </div>
      <div class="reviews-block__footer">
        <div class="reviews-block__stars">${v(r.rating)}</div>
        <span class="reviews-block__date">${r.date}</span>
      </div>
    </div>
  </div>
`
  ), $ = (r) => (
    /* HTML */
    `
  <div class="reviews-block__card__wrap">
    <div class="reviews-block__card">
      <div class="reviews-block__card-header">
        ${y(r.avatar || "")}
        <div class="reviews-block__name-wrap">
          <span class="reviews-block__name">${r.name}</span>
          <span class="reviews-block__date">${r.date}</span>
        </div>
      </div>
      <div class="reviews-block__stars">${v(r.rating)}</div>
      <div class="reviews-block__text-wrap">
        <p class="reviews-block__text reviews-block__text--clamped">${r.text}</p>
        <button class="reviews-block__read-more">Read more</button>
      </div>
    </div>
  </div>
`
  ), _ = (r, n, e) => {
    const t = n.map(e).join("");
    return (
      /* HTML */
      `
    <div class="reviews-block__section" data-slider="${r}">
      ${r === "google" ? `
      <div class="reviews-block__logo">
				<img src="${g}google-reviews.webp" alt="google reviews logo" />
			</div>` : ""}
      <div class="reviews-block__track">
        <div class="reviews-block__slider" id="slider-${r}">${t}</div>
      </div>
      <div class="reviews-block__nav">
        <div class="reviews-block__arrow reviews-block__arrow--prev" id="prev-${r}">${w.arrowLeft}</div>
        <div class="reviews-block__arrow reviews-block__arrow--next" id="next-${r}">${w.arrowRight}</div>
      </div>
    </div>
  `
    );
  }, B = (r, n) => (
    /* HTML */
    `
  <div class="reviews-block">
    <img src="${g}logo-reviews.webp" alt="reviews logo" />
    <h2 class="reviews-block__title">We appreciate our customers' feedback!</h2>
    <p class="reviews-block__subtitle">Here's what some of our customers say about our work.</p>
    ${_("productreview", n, E)}
    ${_("google", r, $)}
  </div>
`
  );
  q([
    "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css",
    "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"
  ]), k({ name: "Update Home Page", dev: "YK" }), H("update_home_page");
  class I {
    constructor() {
      this.init();
    }
    async init() {
      await f("body"), m("body").elements[0].insertAdjacentHTML("beforeend", `<style class="crs_styles">${x}</style>`), this.renderFaq(), this.renderReviews();
    }
    async renderFaq() {
      await f(".reviews"), m(".reviews").elements[0].insertAdjacentHTML("beforebegin", L);
      const e = document.querySelector(".faq-block");
      e && this.initAccordion(e);
    }
    initAccordion(n) {
      const e = n.querySelectorAll(".faq-block__item");
      e.forEach((t) => {
        const a = t.querySelector(".faq-block__question");
        a == null || a.addEventListener("click", () => {
          const s = t.classList.contains("is-open");
          e.forEach((l) => l.classList.remove("is-open")), s || t.classList.add("is-open");
        });
      });
    }
    async renderReviews() {
      await f(".reviews"), m(".reviews").elements[0].insertAdjacentHTML("afterend", B(A, C));
      const e = document.querySelector(".reviews-block");
      if (!e) return;
      this.initReadMore(e), window.innerWidth <= 768 ? this.initLoadMore(e) : this.initSliders(e);
    }
    initReadMore(n) {
      n.querySelectorAll(".reviews-block__text-wrap").forEach((e) => {
        const t = e.querySelector(".reviews-block__text"), a = e.querySelector(".reviews-block__read-more");
        !t || !a || requestAnimationFrame(() => {
          if (t.scrollHeight <= t.clientHeight + 2) {
            a.style.display = "none";
            return;
          }
          a.addEventListener("click", () => {
            t.classList.remove("reviews-block__text--clamped"), a.style.display = "none";
          });
        });
      });
    }
    initLoadMore(n) {
      n.querySelectorAll(".reviews-block__section").forEach((a) => {
        const s = a.querySelector(".reviews-block__slider");
        if (!s) return;
        const l = Array.from(s.querySelectorAll(".reviews-block__card"));
        let i = 3;
        l.forEach((c, u) => {
          c.classList.toggle("rb-hidden", u >= 3);
        });
        const d = a.querySelector(".reviews-block__nav");
        if (d && (d.style.display = "none"), l.length > 3) {
          const c = document.createElement("button");
          c.className = "reviews-block__load-more", c.textContent = "Show more", a.appendChild(c), c.addEventListener("click", () => {
            const u = i + 3;
            l.forEach((G, T) => {
              T < u && G.classList.remove("rb-hidden");
            }), i = u, i >= l.length && c.remove();
          });
        }
      });
    }
    initSliders(n) {
      new Promise((t) => {
        const a = () => {
          typeof tns == "function" ? t() : setTimeout(a, 50);
        };
        a();
      }).then(() => {
        n.querySelectorAll(".reviews-block__section").forEach((a) => {
          const s = a.getAttribute("data-slider") || "";
          tns({
            container: `#slider-${s}`,
            items: 1,
            slideBy: 1,
            gutter: 24,
            loop: !1,
            nav: !0,
            navPosition: "bottom",
            controls: !0,
            prevButton: `#prev-${s}`,
            nextButton: `#next-${s}`,
            autoplay: !1,
            responsive: {
              0: { items: 1, slideBy: 1 },
              769: { items: 3, slideBy: 1 }
            }
          });
          const l = a.querySelector(".reviews-block__nav"), i = a.querySelector(".tns-nav"), d = a.querySelector(`#next-${s}`);
          l && i && d && l.insertBefore(i, d);
        });
      });
    }
  }
  new I();
})();
//# sourceMappingURL=index.js.map
