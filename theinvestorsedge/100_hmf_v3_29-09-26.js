(function() {
  "use strict";
  const x = `.crs3-how-works,
.crs3-reviews {
  font-family: "Inter", sans-serif;
  color: #09233e;
}
.crs3-how-works *,
.crs3-reviews * {
  box-sizing: border-box;
}
.crs3-how-works img,
.crs3-reviews img {
  display: block;
  max-width: 100%;
}
.crs3-how-works p,
.crs3-how-works h2,
.crs3-how-works h3,
.crs3-how-works h4,
.crs3-how-works ul,
.crs3-reviews p,
.crs3-reviews h2,
.crs3-reviews h3,
.crs3-reviews h4,
.crs3-reviews ul {
  margin: 0;
}
.crs3-how-works h2,
.crs3-how-works h3,
.crs3-how-works h4,
.crs3-reviews h2,
.crs3-reviews h3,
.crs3-reviews h4 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  letter-spacing: unset;
}
.crs3-how-works button,
.crs3-reviews button {
  font-family: inherit;
  cursor: pointer;
}
.crs3-how-works [hidden],
.crs3-reviews [hidden] {
  display: none !important;
}

.crs3-eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px !important;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
  text-transform: uppercase;
  color: #3d85c6;
}
.crs3-eyebrow::before {
  content: "";
  width: 4px;
  height: 14px;
  margin: 0 4px;
  background: #ff9902;
  transform: rotate(-45deg);
  flex-shrink: 0;
}
@media (max-width: 768px) {
  .crs3-eyebrow {
    font-size: 16px;
    line-height: 26px;
  }
}

.crs3-stars {
  display: flex;
  gap: 4px;
}
.crs3-stars svg {
  display: block;
  flex-shrink: 0;
}

.crs3-how-works {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
}
@media (max-width: 768px) {
  .crs3-how-works {
    padding: 42px 0 0;
  }
}
.crs3-how-works__intro {
  margin-bottom: 42px;
}
@media (max-width: 768px) {
  .crs3-how-works__intro {
    padding: 0 20px;
  }
}
.crs3-how-works__title {
  margin-bottom: 12px !important;
  font-size: 36px;
  line-height: 48px;
  color: #09233e;
}
.crs3-how-works__title span {
  display: block;
  color: #ff9902;
}
@media (max-width: 768px) {
  .crs3-how-works__title {
    font-size: 28px;
    line-height: 38px;
  }
}
.crs3-how-works__desc {
  max-width: 601px;
  font-size: 18px;
  line-height: 28px;
  color: #09233e;
}
.crs3-how-works__desc b {
  font-weight: 700;
}
@media (max-width: 768px) {
  .crs3-how-works__desc {
    font-size: 16px;
    line-height: 26px;
  }
}
.crs3-how-works__example-title {
  margin-bottom: 30px !important;
  font-size: 28px;
  line-height: 38px;
  color: #0d2034;
}
@media (max-width: 768px) {
  .crs3-how-works__example-title {
    margin-bottom: 24px !important;
    padding: 0 20px;
  }
}
@media (max-width: 768px) {
  .crs3-how-works__example {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 42px 20px;
    background: #f4f6fa;
  }
}
.crs3-how-works__stages {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
@media (max-width: 768px) {
  .crs3-how-works__stages {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
.crs3-how-works__stage {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 30px;
  border-radius: 12px;
  background: #f4f6fa;
}
@media (max-width: 768px) {
  .crs3-how-works__stage {
    padding: 0 0 24px;
    border-radius: 0;
    border-bottom: 1px solid #cfe2f3;
  }
}
.crs3-how-works__stage-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 12px;
}
@media (max-width: 768px) {
  .crs3-how-works__stage-head {
    margin-bottom: 4px;
  }
}
.crs3-how-works__stage-icon {
  width: 120px;
  height: 120px;
}
@media (max-width: 768px) {
  .crs3-how-works__stage-icon {
    width: 100px;
    height: 100px;
  }
}
.crs3-how-works__stage-tag {
  padding: 12px 16px;
  border-radius: 8px;
  background: #cfe2f3;
  font-family: Tahoma, "Inter", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #09233e;
}
.crs3-how-works__stage-title {
  font-size: 24px;
  line-height: 34px;
  color: #09233e;
}
.crs3-how-works__stage-amount {
  font-family: "Poppins", sans-serif;
  font-size: 42px;
  line-height: 52px;
  font-weight: 700;
  color: #ff9902;
}
@media (max-width: 768px) {
  .crs3-how-works__stage-amount {
    font-size: 36px;
    line-height: 46px;
  }
}
.crs3-how-works__stage-lines {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 0 12px !important;
  border-bottom: 1px dashed #cfe2f3;
  list-style: none;
}
.crs3-how-works__stage-lines li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  color: #09233e;
}
.crs3-how-works__stage-lines b {
  font-weight: 700;
}
.crs3-how-works__stage-total {
  font-size: 24px !important;
  line-height: 34px !important;
  font-weight: 700;
}
.crs3-how-works__stage-total span:last-child {
  color: #ff9902;
}
.crs3-how-works__stage-desc {
  font-size: 16px;
  line-height: 24px;
  color: #425b76;
}
.crs3-how-works__calc {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  margin-top: 30px;
  padding: 60px;
  border-radius: 8px;
  background: #09233e;
  color: #fff;
}
@media (max-width: 768px) {
  .crs3-how-works__calc {
    flex-direction: column;
    gap: 32px;
    margin: 0;
    padding: 0;
    border-radius: 0;
    background: none;
    color: #0d2034;
  }
}
.crs3-how-works__calc-text {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 640px;
}
.crs3-how-works__calc-text p {
  font-size: 16px;
  line-height: 24px;
}
.crs3-how-works__calc-text b {
  font-weight: 700;
}
@media (max-width: 768px) {
  .crs3-how-works__calc-text {
    gap: 16px;
  }
}
.crs3-how-works__calc-title {
  font-size: 24px;
  line-height: 34px;
  color: #0d2034;
}
@media (min-width: 769px) {
  .crs3-how-works__calc-title {
    display: none;
  }
}
.crs3-how-works__calc-formula {
  max-width: 481px;
  padding-bottom: 20px;
  border-bottom: 1px dashed rgba(207, 226, 243, 0.3);
  font-family: "Poppins", sans-serif;
  font-size: 32px !important;
  line-height: 42px !important;
  font-weight: 700;
}
.crs3-how-works__calc-formula span {
  color: #ff9902;
}
@media (max-width: 768px) {
  .crs3-how-works__calc-formula {
    max-width: none;
    padding-bottom: 16px;
    border-bottom-color: #cfe2f3;
    font-size: 24px !important;
    line-height: 34px !important;
  }
}
.crs3-how-works__calc-need {
  font-weight: 700;
}
@media (max-width: 768px) {
  .crs3-how-works__calc-need .crs3-desk-br {
    display: none;
  }
}
.crs3-how-works__calc-cash {
  font-family: "Poppins", sans-serif;
  font-size: 24px !important;
  line-height: 34px !important;
  font-weight: 700;
  color: #ff9902;
}
@media (max-width: 768px) {
  .crs3-how-works__calc-cash {
    font-size: 20px !important;
    line-height: 30px !important;
  }
}
.crs3-how-works__calc-box {
  flex-shrink: 0;
  padding: 32px;
  border: 1px dashed rgba(207, 226, 243, 0.3);
  border-radius: 12px;
  background: rgba(207, 226, 243, 0.05);
}
.crs3-how-works__calc-box h4 {
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 34px;
  color: #fff;
}
.crs3-how-works__calc-box ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  list-style: none;
}
.crs3-how-works__calc-box li {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0;
  font-size: 18px;
  line-height: 28px;
}
.crs3-how-works__calc-box li::before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ff9902;
  flex-shrink: 0;
}
@media (max-width: 768px) {
  .crs3-how-works__calc-box {
    width: 100%;
    padding: 20px;
    border: none;
    border-radius: 8px;
    background: #cfe2f3;
  }
  .crs3-how-works__calc-box h4 {
    margin-bottom: 16px;
    font-size: 20px;
    line-height: 30px;
    color: #0d2034;
  }
  .crs3-how-works__calc-box li {
    font-size: 16px;
    line-height: 26px;
  }
}

.crs3-reviews {
  padding: 60px 0;
  background: #f4f6fa;
}
@media (max-width: 768px) {
  .crs3-reviews {
    padding: 40px 0 0;
  }
}
.crs3-reviews__container {
  max-width: 1080px;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .crs3-reviews__container {
    padding: 0 20px;
  }
}
.crs3-reviews__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 42px;
}
.crs3-reviews__head .crs3-eyebrow {
  margin-bottom: 16px !important;
}
@media (max-width: 768px) {
  .crs3-reviews__head {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
  }
}
.crs3-reviews__title {
  font-size: 36px;
  line-height: 48px;
  color: #09233e;
}
.crs3-reviews__title span {
  color: #ff9902;
}
@media (max-width: 768px) {
  .crs3-reviews__title {
    font-size: 28px;
    line-height: 38px;
  }
}
.crs3-reviews__badge {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 8px;
  background: #fff;
}
@media (max-width: 768px) {
  .crs3-reviews__badge {
    align-items: center;
    gap: 8px;
    width: 100%;
  }
}
.crs3-reviews__badge-top {
  display: flex;
  align-items: center;
  gap: 8px;
}
.crs3-reviews__badge-top img {
  width: 42px;
  height: 42px;
}
@media (max-width: 768px) {
  .crs3-reviews__badge-top img {
    width: 32px;
    height: 32px;
  }
}
.crs3-reviews__badge-top .crs3-stars {
  gap: 2px;
}
.crs3-reviews__badge-top b {
  margin-left: 4px;
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  line-height: 42px;
  color: #0d2034;
}
.crs3-reviews__badge-count {
  font-family: Tahoma, "Inter", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #09233e;
}
.crs3-reviews__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
@media (max-width: 768px) {
  .crs3-reviews__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
.crs3-reviews__card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 24px;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  background: #fff;
}
.crs3-reviews__card-head {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  width: 100%;
}
.crs3-reviews__card-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  flex-shrink: 0;
}
.crs3-reviews__card-who {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-self: center;
}
.crs3-reviews__card-who b {
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
  letter-spacing: -0.27px;
  color: #0d2034;
}
.crs3-reviews__card-who span {
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.21px;
  color: #5b5b5b;
}
.crs3-reviews__card-g {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
}
.crs3-reviews__card-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  overflow: hidden;
  font-size: 16px;
  line-height: 26px;
  color: #09233e;
  word-break: break-word;
}
.crs3-reviews__card-text--expanded {
  display: block;
  -webkit-line-clamp: unset;
}
.crs3-reviews__read-more {
  margin-top: -8px;
  padding: 0;
  border: none;
  background: none;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #3d85c6;
  text-decoration: underline;
}
.crs3-reviews__more {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 340px;
  max-width: 100%;
  margin: 30px auto 0;
  padding: 15px 24px;
  border: 2px solid #ff9902;
  border-radius: 6px;
  background: none;
  font-family: Arial, sans-serif !important;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  color: #09233e;
  transition: background 0.2s;
}
.crs3-reviews__more svg {
  flex-shrink: 0;
}
@media (min-width: 769px) {
  .crs3-reviews__more svg {
    display: none;
  }
}
.crs3-reviews__more:hover {
  background: rgba(255, 153, 2, 0.08);
}
@media (max-width: 768px) {
  .crs3-reviews__more {
    margin-top: 24px;
  }
}

.crs3-people {
  max-width: 1200px;
  margin: 90px auto 0;
  padding: 60px;
  border-radius: 8px;
  background: #09233e;
  color: #fff;
}
.crs3-people .crs3-eyebrow {
  margin-bottom: 16px !important;
}
@media (max-width: 768px) {
  .crs3-people {
    margin-top: 40px;
    padding: 42px 20px;
    border-radius: 0;
  }
}
.crs3-people__title {
  margin-bottom: 42px !important;
  font-size: 36px;
  line-height: 48px;
  color: #fff;
}
@media (max-width: 768px) {
  .crs3-people__title {
    max-width: 292px;
    margin-bottom: 24px !important;
    font-size: 28px;
    line-height: 38px;
  }
}
.crs3-people__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
@media (max-width: 768px) {
  .crs3-people__grid {
    grid-template-columns: 1fr;
  }
}
.crs3-people__card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 20px;
  overflow: hidden;
  border: 1px solid rgba(207, 226, 243, 0.3);
  border-radius: 12px;
  background: #09233e;
}
.crs3-people__media {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
  background: #425b76 center/cover no-repeat;
}
.crs3-people__media--playing {
  display: block;
  background: #000;
}
.crs3-people__media wistia-player {
  width: 100%;
  height: 100%;
}
.crs3-people__play {
  padding: 0;
  border: none;
  background: none;
  line-height: 0;
  transition: transform 0.2s;
}
.crs3-people__play:hover {
  transform: scale(1.05);
}
.crs3-people__body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 24px;
}
.crs3-people__name {
  display: block;
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  letter-spacing: -0.3px;
}
.crs3-people__role {
  font-size: 14px;
  line-height: 24px;
  font-style: italic;
  letter-spacing: -0.21px;
  color: #3d85c6;
}
@media (min-width: 769px) {
  .crs3-people__role {
    min-height: 48px;
  }
}
.crs3-people__stats {
  display: flex;
  gap: 16px;
}
.crs3-people__stats span {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 6px 12px;
  border-radius: 8px;
  background: rgba(207, 226, 243, 0.2);
  font-family: Tahoma, "Inter", sans-serif;
  font-size: 14px;
  line-height: 24px;
}
.crs3-people__stats b {
  font-size: 16px;
  color: #ff9902;
}
.crs3-people__result {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
  border-radius: 8px;
  background: rgba(207, 226, 243, 0.2);
  font-weight: 700;
}
.crs3-people__result span {
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.21px;
}
.crs3-people__result b {
  font-size: 18px;
  line-height: 24px;
  color: #ff9902;
}
.crs3-people__note {
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.21px;
  color: #808080;
}
.crs3-people__cta-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-top: 42px;
  padding-top: 17px;
}
@media (max-width: 768px) {
  .crs3-people__cta-wrap {
    gap: 16px;
    margin-top: 24px;
    padding-top: 0;
  }
}
.crs3-people__cta {
  width: 480px;
  max-width: 100%;
  padding: 15px 24px;
  border: none;
  border-radius: 6px;
  background: #ff9902;
  font-family: "Poppins", sans-serif !important;
  font-size: 15px;
  line-height: 24px;
  font-weight: 700;
  text-transform: uppercase;
  color: #09233e;
  transition: background 0.2s;
}
.crs3-people__cta:hover {
  background: #e68900;
}
.crs3-people__microcopy {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.crs3-people__microcopy span {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 26px;
}
.crs3-people__microcopy svg {
  flex-shrink: 0;
}
`, l = (a, t, e, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: a,
      event_desc: t,
      event_type: e,
      event_loc: n
    }), d(`Event: ${a} | ${t} | ${e} | ${n}`, "success");
  }, k = (a) => new Promise((t) => {
    const e = document.querySelector(a);
    e && t(e);
    const n = new MutationObserver(() => {
      const o = document.querySelector(a);
      o && (t(o), n.disconnect());
    });
    n.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), b = ({ name: a, dev: t }) => {
    const e = a.toLowerCase().replace(/\s/g, "_");
    l(`${e}_started`, `Experiment ${a} started`, "other", e), console.log(
      `%c EXP: ${a} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, I = async (a) => {
    const t = (e) => new Promise((n, o) => {
      const r = e.split(".").pop();
      if (r === "js") {
        if (Array.from(document.scripts).map((i) => i.src.toLowerCase()).includes(e.toLowerCase()))
          return d(`Script ${e} allready downloaded!`, "success"), n("");
        const s = document.createElement("script");
        s.src = e, s.onload = n, s.onerror = o, document.head.appendChild(s);
      } else if (r === "css") {
        if (Array.from(document.styleSheets).map((i) => {
          var v;
          return (v = i.href) == null ? void 0 : v.toLowerCase();
        }).includes(e.toLowerCase()))
          return d(`Style ${e} allready downloaded!`, "success"), n("");
        const s = document.createElement("link");
        s.rel = "stylesheet", s.href = e, s.onload = n, s.onerror = o, document.head.appendChild(s);
      }
    });
    for (const e of a)
      d(e), await t(e), d(`Loaded librari ${e}`);
    d("All libraries loaded!", "success");
  }, S = (a) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", a, "variant_1"));
    }, 1e3);
  }, M = (a, t, e, n, o = 1e3, r = 0.5) => {
    let h, s;
    if (h = new IntersectionObserver(
      function(i) {
        i[0].isIntersecting === !0 ? s = setTimeout(() => {
          l(
            t,
            i[0].target.dataset.visible || n || "",
            "view",
            e
          ), h.disconnect();
        }, o) : (d("Element is not fully visible", "warn"), clearTimeout(s));
      },
      { threshold: [r] }
    ), typeof a == "string") {
      const i = document.querySelector(a);
      i && h.observe(i);
    } else
      h.observe(a);
  }, d = (a, t = "info") => {
    let e;
    switch (t) {
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
    console.log(`%c>>> ${a}`, `${e} font-size: 16px; font-weight: 600`);
  }, T = [
    {
      tag: "Stage 1",
      title: "Buy",
      icon: "buy",
      amount: "$100,000",
      desc: "You find a distressed home at 40% of its after-repair value."
    },
    {
      tag: "Stage 2",
      title: "Renovate",
      icon: "renovate",
      lines: [
        ["Rehab", "$40,000"],
        ["Closing &amp; points", "$15,000"],
        ["Interest (wrapped)", "$15,000"]
      ],
      total: "$70,000",
      desc: "Rehab, closing costs, and interest — all covered by the loan"
    },
    {
      tag: "Stage 3",
      title: "Sell",
      icon: "sell",
      amount: "$250,000",
      desc: "Once renovated, the property is worth $250,000. That's where your profit comes from."
    }
  ], _ = ["Purchase price", "Rehab costs", "Closing costs &amp; points", "Interest for the full loan term"], H = [
    {
      name: "Marcus T., 38",
      role: ["Warehouse manager · No prior deals", "3 lenders said no"],
      stats: [
        ["$80k", "Purchase"],
        ["$42k", "Rehab"],
        ["$210k", "ARV"]
      ],
      cash: "$0",
      profit: "$50,300",
      note: "Funded in 9 days · Closed in 74 days",
      video: ""
    },
    {
      name: "Jerome W., 42",
      role: ["Self-employed · Bank turned him down twice"],
      stats: [
        ["$80k", "Purchase"],
        ["$42k", "Rehab"],
        ["$210k", "ARV"]
      ],
      cash: "$0",
      profit: "$41,450",
      note: "TIE evaluated the deal — not his tax returns",
      video: ""
    },
    {
      name: "Renée &amp; David K.",
      role: ["Full gut renovation · Three lenders passed"],
      stats: [
        ["$80k", "Purchase"],
        ["$42k", "Rehab"],
        ["$210k", "ARV"]
      ],
      cash: "$0",
      profit: "$82,700",
      note: "Funded in 12 days",
      video: ""
    }
  ], m = {
    star: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
		<path d="M11.0007 0L13.9102 6.99537L21.4623 7.60081L15.7084 12.5296L17.4663 19.8992L11.0007 15.95L4.53504 19.8992L6.29295 12.5296L0.539062 7.60081L8.09114 6.99537L11.0007 0Z" fill="#FDB948"/>
		</svg>`,
    play: `<svg xmlns="http://www.w3.org/2000/svg" width="70" height="52" viewBox="0 0 70 52" fill="none">
		<rect width="70" height="52" rx="12" fill="#54BBFF" fill-opacity="0.7"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M27.4349 14.2665C26.406 13.5852 25 14.2888 25 15.4853V36.5148C25 37.7106 26.406 38.4149 27.4349 37.7336L43.3319 27.2189C43.538 27.0824 43.7065 26.9002 43.8229 26.688C43.9392 26.4757 44 26.2397 44 26.0001C44 25.7604 43.9392 25.5244 43.8229 25.3121C43.7065 25.0999 43.538 24.9177 43.3319 24.7813L27.4349 14.2665Z" fill="white"/>
		</svg>`,
    refresh: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
		<path d="M20.166 10.0832C19.9229 10.0832 19.6897 10.1798 19.5178 10.3517C19.3459 10.5236 19.2494 10.7568 19.2494 10.9999C19.2494 12.6316 18.7655 14.2266 17.859 15.5833C16.9525 16.9401 15.664 17.9975 14.1565 18.6219C12.649 19.2463 10.9902 19.4097 9.38986 19.0914C7.78952 18.773 6.31951 17.9873 5.16572 16.8335C4.01194 15.6797 3.2262 14.2097 2.90787 12.6094C2.58955 11.009 2.75292 9.35024 3.37735 7.84275C4.00177 6.33526 5.05919 5.04679 6.4159 4.14027C7.7726 3.23375 9.36766 2.74989 10.9994 2.74989C12.4199 2.74734 13.8166 3.11577 15.051 3.81873L14.0179 4.85181C13.8898 4.98001 13.8025 5.14332 13.7672 5.32111C13.7318 5.4989 13.75 5.68318 13.8193 5.85066C13.8887 6.01813 14.0061 6.16128 14.1569 6.26201C14.3076 6.36274 14.4847 6.41652 14.666 6.41656H18.3327C18.5758 6.41656 18.809 6.31998 18.9809 6.14807C19.1528 5.97617 19.2494 5.74301 19.2494 5.49989V1.83323C19.2493 1.65196 19.1955 1.47477 19.0948 1.32406C18.9941 1.17335 18.8509 1.05589 18.6835 0.986522C18.516 0.917157 18.3317 0.899005 18.1539 0.934358C17.9761 0.969712 17.8128 1.05698 17.6846 1.18514L16.3912 2.47489C14.7797 1.45097 12.9086 0.910185 10.9994 0.91656C9.00506 0.91656 7.05555 1.50794 5.39735 2.61591C3.73916 3.72388 2.44675 5.29868 1.68357 7.14117C0.920385 8.98366 0.720701 11.0111 1.10977 12.9671C1.49884 14.923 2.45918 16.7197 3.86936 18.1299C5.27954 19.5401 7.07622 20.5004 9.03219 20.8895C10.9882 21.2785 13.0156 21.0789 14.8581 20.3157C16.7006 19.5525 18.2754 18.2601 19.3833 16.6019C20.4913 14.9437 21.0827 12.9942 21.0827 10.9999C21.0827 10.7568 20.9861 10.5236 20.8142 10.3517C20.6423 10.1798 20.4091 10.0832 20.166 10.0832Z" fill="#FF9902"/>
		</svg>`,
    no_commitment: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2978 3.93974C14.4994 3.67842 13.412 3.66687 10.9997 3.66687C9.7058 3.66687 8.78129 3.66736 8.05272 3.71707C7.33238 3.76622 6.87077 3.86039 6.49571 4.01575C5.37266 4.48093 4.48041 5.37319 4.01522 6.49623C3.85987 6.8713 3.7657 7.3329 3.71655 8.05324C3.66684 8.78181 3.66634 9.70633 3.66634 11.0002C3.66634 12.2941 3.66684 13.2186 3.71655 13.9472C3.7657 14.6675 3.85987 15.1291 4.01522 15.5042C4.48041 16.6273 5.37266 17.5194 6.49571 17.9847C6.87077 18.14 7.33238 18.2342 8.05272 18.2833C8.78129 18.3331 9.7058 18.3335 10.9997 18.3335C12.2935 18.3335 13.2181 18.3331 13.9467 18.2833C14.667 18.2342 15.1286 18.14 15.5036 17.9847C16.6267 17.5194 17.5189 16.6273 17.9841 15.5042C18.1395 15.1291 18.2336 14.6675 18.2828 13.9472C18.3326 13.2186 18.333 12.2941 18.333 11.0002C18.333 10.2982 18.333 9.70202 18.3246 9.18163C18.3164 8.67543 18.7202 8.25847 19.2264 8.25032C19.7326 8.24216 20.1496 8.64591 20.1577 9.1521C20.1663 9.68882 20.1663 10.2992 20.1663 10.9943V11.0339C20.1663 12.2867 20.1663 13.2736 20.1119 14.072C20.0563 14.8857 19.9412 15.5701 19.6779 16.2058C19.0266 17.778 17.7775 19.0272 16.2052 19.6785C15.5695 19.9417 14.8851 20.0569 14.0714 20.1124C13.2731 20.1669 12.2862 20.1669 11.0335 20.1669H10.9658C9.71313 20.1669 8.72621 20.1669 7.92792 20.1124C7.11424 20.0569 6.42981 19.9417 5.79413 19.6785C4.22186 19.0272 2.9727 17.778 2.32144 16.2058C2.05814 15.5701 1.94298 14.8857 1.88747 14.072C1.833 13.2736 1.83301 12.2867 1.83301 11.0339V10.9665C1.83301 9.71366 1.833 8.72673 1.88747 7.92844C1.94298 7.11476 2.05814 6.43032 2.32144 5.79464C2.9727 4.22239 4.22186 2.97323 5.79413 2.32197C6.42981 2.05866 7.11424 1.94351 7.92792 1.88799C8.72621 1.83352 9.71313 1.83352 10.9659 1.83353H10.9997C11.066 1.83353 11.1318 1.83352 11.1968 1.83352C13.3506 1.83319 14.7548 1.83297 15.8682 2.19737C16.3492 2.35484 16.6117 2.87255 16.4542 3.3537C16.2967 3.83484 15.779 4.09722 15.2978 3.93974ZM20.0414 4.57989C20.2965 5.01719 20.1488 5.57847 19.7115 5.83356L19.5084 5.95209C16.213 7.87435 13.5654 10.7352 11.9037 14.1692C11.7744 14.4362 11.524 14.6242 11.2315 14.6737C10.939 14.7232 10.6406 14.6282 10.4307 14.4185L6.75169 10.7434C6.39353 10.3856 6.39321 9.80523 6.75101 9.447C7.10879 9.08885 7.6892 9.08854 8.04737 9.44636L10.8437 12.2397C12.6729 8.97998 15.3426 6.25963 18.5845 4.36849L18.7878 4.24998C19.225 3.99489 19.7863 4.14259 20.0414 4.57989Z" fill="white"/>
		</svg>`,
    no_credit: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
		<g clip-path="url(#clip0_crs3_no_credit)">
		<path d="M12.8544 16.01C13.3465 16.5022 12.998 17.3437 12.3019 17.3437H3.125C1.39908 17.3437 0 15.9447 0 14.2187V5.78124C0 5.5397 0.0276184 5.30441 0.0798034 5.07858C0.217438 4.48196 0.960235 4.272 1.39328 4.70504C1.58371 4.89547 1.66199 5.17028 1.60187 5.43273C1.57608 5.54489 1.5625 5.66146 1.5625 5.78124V6.8016H3.32245C3.52951 6.8016 3.72833 6.88384 3.87481 7.03048C4.36691 7.52258 4.0184 8.35937 3.32245 8.35937H1.5625V14.2187C1.5625 15.0816 2.26211 15.7812 3.125 15.7812H12.3019C12.5091 15.7812 12.708 15.8635 12.8544 16.01ZM18.4375 10.3172V8.3641H9.46899L16.8858 15.7809C17.7424 15.775 18.4375 15.0766 18.4375 14.2187C18.4375 13.7872 18.7872 13.4375 19.2187 13.4375C19.6502 13.4375 20 13.7872 20 14.2187C20 15.4809 19.2473 16.57 18.1676 17.0627L19.7711 18.6662C20.0763 18.9714 20.0763 19.4661 19.7711 19.7711C19.6187 19.9237 19.4188 20 19.2187 20C19.0188 20 18.8188 19.9237 18.6664 19.7711L0.228882 1.33362C-0.0762939 1.02859 -0.0762939 0.533905 0.228882 0.228882C0.533905 -0.0762939 1.02859 -0.0762939 1.33362 0.228882L3.76114 2.65625H16.875C18.5982 2.65625 20 4.05807 20 5.78124V10.3172C20 10.7487 19.6502 11.0985 19.2187 11.0985C18.7872 11.0985 18.4375 10.7487 18.4375 10.3172ZM18.4375 6.8016V5.78124C18.4375 4.91958 17.7365 4.21875 16.875 4.21875H5.32363L7.90649 6.8016H18.4375Z" fill="white"/>
		</g>
		<defs><clipPath id="clip0_crs3_no_credit"><rect width="20" height="20"/></clipPath></defs>
		</svg>`
  }, p = "https://conversionrate-store.github.io/a-b_images/theinvestorsedge/", w = {
    google: `${p}google-logo.webp`,
    user: `${p}user.webp`
  }, u = (a) => (
    /*html*/
    `<p class="crs3-eyebrow">${a}</p>`
  ), y = () => `<span class="crs3-stars">${m.star.repeat(5)}</span>`, g = (a) => a.replace(/[&<>"]/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[t]), R = (
    /*html*/
    `
  <section class="crs3-how-works" id="crs3-how-works">
    <div class="crs3-how-works__intro">
      ${u("How it works")}
      <h2 class="crs3-how-works__title"><span>100% Hard Money Financing</span> Sounds Too Good? Here's Why It Works.</h2>
      <p class="crs3-how-works__desc">Unlike traditional lenders who lend against your income and credit, <b>hard money lenders lend against what the property will be worth after renovation.</b> That difference is what makes 100% financing structurally possible.</p>
    </div>
    <h3 class="crs3-how-works__example-title">Here's how it works — on a real example:</h3>
    <div class="crs3-how-works__example">
      <div class="crs3-how-works__stages">
        ${T.map(
      (a) => (
        /*html*/
        `
          <div class="crs3-how-works__stage">
            <div class="crs3-how-works__stage-head">
              <img src="${p}${a.icon}.svg" alt="${a.title}" class="crs3-how-works__stage-icon" />
              <span class="crs3-how-works__stage-tag">${a.tag}</span>
            </div>
            <h4 class="crs3-how-works__stage-title">${a.title}</h4>
            ${a.amount ? `<p class="crs3-how-works__stage-amount">${a.amount}</p>` : (
          /*html*/
          `
                <ul class="crs3-how-works__stage-lines">
                  ${a.lines.map(([t, e]) => `<li><span>${t}</span><b>${e}</b></li>`).join("")}
                  <li class="crs3-how-works__stage-total"><span>Total:</span><span>${a.total}</span></li>
                </ul>
              `
        )}
            <p class="crs3-how-works__stage-desc">${a.desc}</p>
          </div>
        `
      )
    ).join("")}
      </div>
      <div class="crs3-how-works__calc">
        <div class="crs3-how-works__calc-text">
          <h4 class="crs3-how-works__calc-title">Calculate Maximum Loan</h4>
          <p>We lend up to <b>74% of ARV</b> — the property's value after renovation, not the purchase price. That's what determines the max loan amount.</p>
          <p class="crs3-how-works__calc-formula">$250,000 × 74% = <span>$185,000 max loan amount</span></p>
          <p class="crs3-how-works__calc-need">This example deal would only need $170,000,<br class="crs3-desk-br"> so it would qualify for 100% financing.</p>
          <p class="crs3-how-works__calc-cash">Cash to close: $0</p>
        </div>
        <div class="crs3-how-works__calc-box">
          <h4>What's included in the loan</h4>
          <ul>
            ${_.map((a) => `<li>${a}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  </section>
`
  ), D = (a, t) => (
    /*html*/
    `
  <div class="crs3-reviews__card">
    <div class="crs3-reviews__card-head">
      <img src="${w.user}" alt="" class="crs3-reviews__card-avatar" loading="lazy" />
      <span class="crs3-reviews__card-who">
        <b>${g(a.name)}</b>
        <span>${t}</span>
      </span>
      <img src="${w.google}" alt="Google" class="crs3-reviews__card-g" loading="lazy" />
    </div>
    ${y()}
    <p class="crs3-reviews__card-text">"${g(a.text)}"</p>
    <button class="crs3-reviews__read-more" hidden>Read more</button>
  </div>
`
  ), C = (
    /*html*/
    `
  <section class="crs3-reviews" id="crs3-reviews">
    <div class="crs3-reviews__container">
      <div class="crs3-reviews__head">
        <div>
          ${u("What borrowers say")}
          <h2 class="crs3-reviews__title">Over <span>1,000 Five-Star</span> Reviews</h2>
        </div>
        <div class="crs3-reviews__badge">
          <span class="crs3-reviews__badge-top">
            <img src="${w.google}" alt="Google" />
            ${y()}
            <b>4.8</b>
          </span>
          <span class="crs3-reviews__badge-count">1,000+ Google reviews</span>
        </div>
      </div>
      <div class="crs3-reviews__grid"></div>
      <button class="crs3-reviews__more">${m.refresh} Show more</button>
    </div>
    ${A()}
  </section>
`
  );
  function A() {
    return (
      /*html*/
      `
    <div class="crs3-people" id="crs3-people">
      ${u("Real people. Real deals.")}
      <h2 class="crs3-people__title">People at Your Stage. Real Numbers.</h2>
      <div class="crs3-people__grid">
        ${H.map(
        (a) => (
          /*html*/
          `
          <div class="crs3-people__card">
            <div class="crs3-people__media" data-video="${a.video}">
              <button class="crs3-people__play" aria-label="Play video">${m.play}</button>
            </div>
            <div class="crs3-people__body">
              <div>
                <b class="crs3-people__name">${a.name}</b>
                <p class="crs3-people__role">${a.role.join("<br>")}</p>
              </div>
              <div class="crs3-people__stats">
                ${a.stats.map(([t, e]) => `<span><b>${t}</b>${e}</span>`).join("")}
              </div>
              <div class="crs3-people__result">
                <span>Cash to close: ${a.cash}</span>
                <b>Profit: ${a.profit}</b>
              </div>
              <p class="crs3-people__note">${a.note}</p>
            </div>
          </div>
        `
        )
      ).join("")}
      </div>
      <div class="crs3-people__cta-wrap">
        <button class="crs3-people__cta crs_open_quiz">See If This Is A Fit For You</button>
        <div class="crs3-people__microcopy">
          <span>${m.no_commitment} No commitment</span>
          <span>${m.no_credit} No credit pull yet</span>
        </div>
      </div>
    </div>
  `
    );
  }
  const f = [
    {
      name: "Wise A.",
      date: "2026-07-31",
      text: "Reanna has been exceptional with providing world class customer service. The responses are within a reasonable time as well as the follow up to make sure that things are to the customer's liking."
    },
    {
      name: "Elwin W.",
      date: "2026-07-01",
      text: "Working with Investor’s Edge has been a huge part of my growth in real estate. Jeremy has been incredibly helpful throughout the entire process and always made my success feel just as important to him as it was to me. He’s consistently been there to answer questions, guide me, and help me better understand the business. From Reanna, to Jeremy, to Mr. Weber, the entire team has supported me every step of the way. I’m truly grateful for everything they’ve poured into me and the knowledge they’ve shared. Looking forward to continuing to grow with such a solid team behind me."
    },
    {
      name: "Matt O.",
      date: "2026-07-01",
      text: "The integration of the investors edge services has been seamless, my partner and I now have a tremendous understanding of exactly what is necessary to make the correct deals moving forward. With the help of an outstanding team and the support of individuals with great enthusiasm like Reanna York that can help with the attention to detail. What a delightful asset to have, with such encouragement we feel focused and ready for our future deals and many to come."
    },
    {
      name: "Trey I.",
      date: "2026-06-01",
      text: "Great"
    },
    {
      name: "Jonathan S.",
      date: "2026-06-01",
      text: "The perfect person to work with"
    },
    {
      name: "Marty H.",
      date: "2026-06-01",
      text: "The Team was knowledgeable and professional. I couldn't ask for a more rewarding experience."
    },
    {
      name: "Angel P.",
      date: "2026-06-01",
      text: "Reanna was verying helpful in explaining the software and resources to me..."
    },
    {
      name: "Gerard R.",
      date: "2026-05-02",
      text: "She is top quality in the business her style of caring and knowledge of the game should be immulated by all employees there id rather communicate with none other than Mrs York im glad she is a part of investor edge team and community"
    },
    {
      name: "Steven C.",
      date: "2026-05-02",
      text: "We are loving every minute of this process."
    },
    {
      name: "Leah M.",
      date: "2026-05-02",
      text: "My experience as a partner/investor with Investors Edge so far has been nothing short of outstanding. As a licensed real estate agent for over 13 years, and now 4 years into real estate investing, I was actively searching for better financing options- especially 100% financing for fix-and-flips. Having previously used hard money and private lenders (along with my own funds for closing costs, prepaids, points, and monthly interest only payments), Investors Edge immediately stood out. With a relatively small upfront investment and even receiving some of that back after my first project- it truly felt like a no-brainer. I jumped right into the investment edge training, software and tools and began actively searching for properties. Between the Investors Edge tools and the support from my team- Jeremy (loan advisor), Dick (initial project manager), Johanna (lending), and now Eden and Isaac (construction/project management)- the entire process has been incredibly smooth and well-structured. The communication has been excellent, and I’ve always had clarity on who is guiding me through each phase- from acquisition to lending to rehab. I’ve already secured my second property, which is under contract and approved for 100% financing. My total out-of-pocket expenses for both projects? Just over $2,000. Even more impressive- my first draw was deposited within two business days, exactly as expected. Huge thank you to Eden and Isaac for that seamless process. This is just the beginning for me. I’m excited to keep building, growing, and becoming an expert investor by leveraging OPM (other people’s money) while preserving my own capital. Grateful for this opportunity and for the entire Investors Edge team - I appreciate you all! -Leah"
    },
    {
      name: "Cedric S.",
      date: "2026-04-02",
      text: "Reanna is my go to person for anything. She professional and quick to answer any questions I have."
    },
    {
      name: "Todd K.",
      date: "2026-04-02",
      text: "I had an outstanding experience working with Reanna at Investors Edge. Every question I had was answered clearly and promptly, and she took the time to ensure I fully understood so I could deliver clear results. I highly recommend Reanna and Investors Edge."
    },
    {
      name: "Mike K.",
      date: "2026-04-02",
      text: "Reanna York is knowledgeable in helping navigate the website/software. Made sure I didn’t have any questions, and sent me her contact information promptly incase I ever need assistance. Looking forward to working with her."
    },
    {
      name: "Isaac V.",
      date: "2026-04-02",
      text: "Great at providing information and explaining everything ! Thank you so much"
    },
    {
      name: "Miles E.",
      date: "2026-04-02",
      text: "Working with Reanna was a great experience she is friendly & has great communication skills. I hope to continue working with her in the future."
    },
    {
      name: "Carlis L.",
      date: "2026-04-02",
      text: "Excelente Experience Very Good communication"
    },
    {
      name: "Byron Y.",
      date: "2026-03-03",
      text: "Drew Baquerizo, Carlos Baquerizo and Reanna York 10/10 would highly recommend! They are all knowledgeable, concise, and able to effectively communicate the information needed. Investors Edge has been an invaluable asset to our REI business, Young Investment Solutions, thus far. Looking forward to many great years of success!"
    },
    {
      name: "Jamanie B.",
      date: "2026-03-03",
      text: "Extremely knowledgeable and professional workers"
    },
    {
      name: "Deborah A.",
      date: "2026-03-03",
      text: "Working with Reanna has been such a great experience. She has helped me navigate the system with so much patience and clarity, especially when I felt stuck using the software. She’s extremely responsive, a great listener, and always takes the time to make sure I fully understand each step. Her support has made evaluating properties so much easier and more confident for me. I truly appreciate her professionalism and dedication."
    },
    {
      name: "Dorothy R.",
      date: "2026-03-03",
      text: "Anytime I call, I’m thrilled to hear Reanna’s voice because I know I am going to get top of the line service. She is always so very patient with me and all of the questions I had. I enjoyed the call and her attention to detail and making sure that I understood the process. Thank you Reanna!! 🫶🏽✨✨ …"
    },
    {
      name: "Kevin D.",
      date: "2026-03-03",
      text: "Drew Baquerizo was a nice guy. He took the time out to help me learn more about the investors edge software when I missed my welcome to the business Zoom meeting. Drew was not messy, just polite and helpful. Thank you sir so much!!"
    },
    {
      name: "Craig J.",
      date: "2026-02-01",
      text: "Awesome working with Reanna and the team..listening to people goes along way.. thanks for your ear and help.."
    },
    {
      name: "Willie B.",
      date: "2026-02-01",
      text: "reanna york was extremely helpful to me this morning because of her responds and great attitude i believe we picked the right people to partner with thank you reaana york"
    },
    {
      name: "Joey R.",
      date: "2026-01-02",
      text: "My account manager Reanna was very thorough and efficient getting me on board with the website systems and walking me through how the process works from start to finish. I look forward to working with Reanna and The Investors Edge moving forward with my real estate investing ventures."
    },
    {
      name: "Jrc R.",
      date: "2026-01-02",
      text: "We had 100% finance deal fall through with another lender. Investor‘s Edge came through and got it closed! We are so grateful to work with them everything they said they were gonna do they did. Jerilin and Dick were awesome to work with. They’re real people and they relate to everything that was going on. Jerilin is very prompt responded to every text and email in a timely fashion. She was the key in getting this property closed on time. I would definitely recommend these guys for 100% financing and they actually really care and they actually get it done. I think this was probably one of the most elite lender teams I’ve worked with in a long time thanks, Cedric."
    },
    {
      name: "Stephanie Y.",
      date: "2025-12-03",
      text: `Exceptional Experience with Investors Edge - True 100% Financing for My Fix and Flip!" I recently closed on my first investment property, and I have The Investor's Edge to thank for making it happen. The entire process, from finding the deal to securing the funds, was incredibly smooth and efficient. The biggest game-changer for me was their 100% financing program. As a new investor, I was struggling to find a lender who would cover the purchase price, repair costs, and closing costs without a significant cash injection from me. The Investor's Edge was true to their word: they funded the entire project because the deal fit within their criteria. This shifted a significant amount of the financial risk off my shoulders and allowed me to pursue a promising flip I otherwise would have missed. Here’s what I appreciated most: Everyone I have worked with has been great and I appreciate all their help. Dedicated Support: My loan advisor was fantastic. They were responsive and helped me navigate the specific requirements, ensuring all my documentation and contractor bids were correct and compliant with local laws. Clear Criteria: The process for deal evaluation was rigorous but transparent. While some might find their appraisal and work scope estimates tight, I found that their project managers have decades of experience that help prevent new investors from underestimating repair costs, which is crucial for profitability. Prompt Funding: Once the deal was approved and we were under contract, the funding process was quick. This speed is exactly what you need in the fast-paced world of real estate investing. Thanks to The Investor's Edge, I'm well on my way to a successful first flip and stand to make a significant profit. If you have a solid deal and are looking for a reliable funding partner that offers a legitimate path to 100% financing, I highly recommend checking out The Investor's Edge website to learn more about their programs. They genuinely want to see their members succeed.`
    },
    {
      name: "Makalah B.",
      date: "2025-12-03",
      text: "Reanna and Lacie are beyond wonderful!! They are so helpful and informative throughout the whole process. 100% recommend giving them a call!"
    },
    {
      name: "Elijah J.",
      date: "2025-11-03",
      text: "Super helpful and explained everything clearly"
    },
    {
      name: "Canali N.",
      date: "2025-11-03",
      text: "Outstanding Experience with Investors Edge! I had an exceptional experience working with Investors Edge. From start to finish, their team was professional, transparent, and truly committed to helping me reach my goals. They understand the real estate investment process inside and out, and their efficiency made the lending process smooth and stress-free. Communication was clear, every question was answered promptly, and they delivered exactly what they promised—on time. It’s rare to find a lender that combines great rates, reliable service, and genuine care for their clients’ success, but Investors Edge does it all. If you’re looking for a trustworthy partner who goes above and beyond to help investors succeed, I highly recommend Investors Edge. They’ve earned my full confidence and future business!"
    },
    {
      name: "Jonathan S.",
      date: "2025-11-03",
      text: "Across the board great experience. It does cost money but you get it back, both in funds when you make your sale AND in their experience!! I recommend to everyone! Their people, especially Reanna…fantastic experts! I’m loving it!"
    },
    {
      name: "Miguel C.",
      date: "2025-11-03",
      text: "Spencer was great, they are all really helpful thank you🙏 …"
    },
    {
      name: "Brandy K.",
      date: "2025-11-03",
      text: "Reanna has been most helpful through this journey thank you!"
    },
    {
      name: "Kevin",
      date: "2025-11-03",
      text: "As a real estate investor in the Philadelphia market, I’ve now completed my second deal with investors edge and I couldn’t be happier with the experience. Their customer service is outstanding — they are responsive, transparent, and truly make the lending process smooth from start to finish. What really stands out is how reliable and supportive the team is. They don’t just provide funding; they take the time to understand your goals and make sure you have what you need to succeed. In a business where speed and trust matter, Investors edge delivers on both every single time. I’m looking forward to working with them on many more projects. If you’re an investor looking for a hard money lender you can count on, I highly recommend The Investors edge."
    },
    {
      name: "Ashton C.",
      date: "2025-09-29",
      text: "I had a great experience with The Investor’s Edge! I was able to obtain 100% financing for my fix and flip project. The team that assisted me was great and helped me through each step of the process from putting in an offer all the way to completing the rehab of the property and putting it on the market. Jeri Lin, Isaac, Ashley, Dick, Drew, and Eden have all been awesome in guiding me from start to finish in my project. Each step of the process, someone who specializes in that aspect is there to answer questions and make sure that your project stays on track! I’m looking forward to my next project with The Investor’s Edge."
    },
    {
      name: "Tiffany S.",
      date: "2025-09-29",
      text: "I’m excited. Just submitted my first deal! Fingers crossed 🤞🏾 …"
    },
    {
      name: "Keith G.",
      date: "2025-09-29",
      text: "Very informative and there when we need her"
    },
    {
      name: "Breeasia M.",
      date: "2025-09-29",
      text: "I absolutely love how supportive and kind Reanna is! It’s not one question she didn’t or could answer!"
    },
    {
      name: "Fredrick B.",
      date: "2025-09-29",
      text: "I am new into this but has been a while experience without the help I would not be able to make it so far my helper and my guardian angel is walking me through the process what a beautiful help Rihanna can be do you know the best thing about it they always check up on you hello"
    },
    {
      name: "Valli N.",
      date: "2025-09-29",
      text: "Over the past few months, Ashley Horne has been very helpful. She has provided timely updates and guidance, consistently demonstrating professionalism and attentiveness. Even though there were communication challenges in the past from the company, Ashley has been reliable and responsive, making the process much smoother. Her dedication is truly appreciated."
    },
    {
      name: "Dan R.",
      date: "2025-09-29",
      text: "Helpful in every aspect and answered all of my questions."
    },
    {
      name: "Maurice L.",
      date: "2025-09-29",
      text: "I was a great session with plenty of information to help benefit my ongoing progress."
    },
    {
      name: "Miguel J.",
      date: "2025-09-29",
      text: "He was very informative, in explaining and navigating through the tools offered . gave me insight and confidence ."
    },
    {
      name: "Bill M.",
      date: "2025-09-29",
      text: "Spencer done a great job explaining thr program and how it works"
    },
    {
      name: "Shomari F.",
      date: "2025-09-29",
      text: "I really enjoyed my zoom call with Spencer he was highly energetic engaging and informative he made the whole process feel comfortable and completely easy. Thanks Spencer!"
    },
    {
      name: "Lisa L.",
      date: "2025-09-29",
      text: "Spencer was very personable and did a great job welcoming us to the group 😃 …"
    },
    {
      name: "Mikael R.",
      date: "2025-09-29",
      text: "Spencer was Very detailed and a lot of help. Definitely a great Company."
    },
    {
      name: "Supreme G.",
      date: "2025-09-29",
      text: "He was very patient with me"
    },
    {
      name: "Dee T.",
      date: "2025-09-29",
      text: "So glad I chose to take this life changing venture with The Investor’s Edge. So far I’ve received a lot of support and materials to make my first offer. I’m almost ready but still scouting out the first location that’s perfect for me. I’m excited to see all the accomplishments we will achieve once I make my first deal!!!"
    },
    {
      name: "Alex M.",
      date: "2025-09-29",
      text: "Great concept, great software, easy to understand. Spencer was very helpful in getting me started and set up. Highly recommend."
    },
    {
      name: "Jahmel J.",
      date: "2025-09-29",
      text: "Spencer was incredibly informative and helpful throughout the process. If you're looking to learn more about Investor Edge, he's definitely the go-to person. His knowledge and professionalism made the experience smooth and valuable."
    },
    {
      name: "Sandy F.",
      date: "2025-09-29",
      text: "Investors edge offers an amazing opportunity to build my real estate investment opportunities!"
    },
    {
      name: "Alex A.",
      date: "2025-09-29",
      text: "He explained everything very well"
    },
    {
      name: "Gauri P.",
      date: "2025-09-29",
      text: "Spencer was great! He helped us through the steps and was informative"
    },
    {
      name: "Darvin G.",
      date: "2025-09-29",
      text: "Spencer did a great job with his explanation; I was able to understand every step he was saying 🙌 …"
    },
    {
      name: "Xavier R.",
      date: "2025-09-29",
      text: "great experience"
    },
    {
      name: "Jonathan L.",
      date: "2025-09-29",
      text: "Spencer did an amazing job showing me how to use the software, find deals, and submit offers. He was professional, respectful and helpful which I am extremely grateful!"
    },
    {
      name: "William U.",
      date: "2025-09-29",
      text: "Great presentation and patients."
    },
    {
      name: "Ashley S.",
      date: "2025-09-29",
      text: "Spencer was fantastic in explaining the process, helping understand the software, and answering all of my questions! I am so excited to begin this new journey with Investor’s Edge, thanks to Spencer!"
    },
    {
      name: "Cristina C.",
      date: "2025-09-29",
      text: "I used Reanna for my 1st investment and she was outstanding and I would definitely use her for my next deal. Give them a try you will not be dissapointed."
    },
    {
      name: "Sophia B.",
      date: "2025-09-29",
      text: "I am an appraiser and have completed 2 appraisal for them so far. The process has been very smooth and payment for my service has been quick. I hope to do more business for Investors Edge."
    },
    {
      name: "Mike I.",
      date: "2025-09-29",
      text: "I have worked with Reanna at the investors edge and she and everyone there have been outstanding to work with and I would highly recommend them for your investing needs."
    },
    {
      name: "Citlally G.",
      date: "2025-09-29",
      text: "Spencer was very thorough while explaining the process, making it very easy to understand and follow along. High energy, and overall a pleasure to work with."
    },
    {
      name: "Robert T.",
      date: "2025-09-29",
      text: "I absolutely love Spencer’s Energy!! 5 stars isn’t enough, thank you guys for the opportunity and all I have to say is just wait and see what we can do as a team. Skys the limit now it’s the Stars!!!!!"
    },
    {
      name: "Chris W.",
      date: "2025-09-29",
      text: "Spencer does a fine job explaining the details of the program. Look forward to many conversations in the future."
    },
    {
      name: "Brandon E.",
      date: "2025-09-29",
      text: "Spencer was well-prepared, highly professional, and brought a fantastic attitude to the meeting. His enthusiasm clearly reflects his passion and dedication to his work, which helps new investors feel more comfortable and eager to learn."
    },
    {
      name: "Amanda R.",
      date: "2025-09-29",
      text: "Spencer was a great 8 am wake up call! Looking forward to working together."
    },
    {
      name: "Nelson L.",
      date: "2025-09-29",
      text: "Absolutely easy and great to talk to. Questions are answered in the kindest way with respect and integrity. Thanks for everything"
    },
    {
      name: "Guy W.",
      date: "2025-09-29",
      text: "Spencer did a great job introducing me to the investors edge. He made it easy to understand and navigate through the software. Highly recommended."
    },
    {
      name: "Noah W.",
      date: "2025-09-29",
      text: "Such an amazing, outgoing, and shows compassion for people and there success, I appreciate you Reanna, never change, continue to stay patient with those that are new and displaying the energy that is welcoming. It means a lot cause this type of help and people skills are what's heavily lacked in the world today. We need more people like you. Respectfully. Noah"
    },
    {
      name: "Joe S.",
      date: "2025-09-29",
      text: "Always so Helpful and courteous"
    },
    {
      name: "Trey B.",
      date: "2025-09-29",
      text: "Reanna has been a great help"
    },
    {
      name: "Xclusiv",
      date: "2025-09-29",
      text: "I have so far had the pleasure of working with Reanna, she is always prompt and knowledgeable, and really helps sort out what is and what is not! Her personality is radiant and eager to help, even for a complete novice! Definitely an asset if you ask me!"
    },
    {
      name: "Hammers C.",
      date: "2025-09-29",
      text: "Thanks a whole bunch to Reanna York for helpful information and guidance and always being there for support."
    },
    {
      name: "Magdalene K.",
      date: "2025-09-29",
      text: "Reanna York is truly a GEM. Reanna thoroughly answered all of my questions and gave detailed explanations on each step, to ensure my success as a new investor. I’m grateful."
    },
    {
      name: "Glenicia N.",
      date: "2025-09-29",
      text: "Reanna was amazing and sneered every one of my thousand questions!"
    },
    {
      name: "Ken M.",
      date: "2025-09-29",
      text: "I am a real estate investor that helps distressed homeowners in foreclosure. I find solutions to help them out of their ordeal. That includes buying their properties. The Investors Edge allows me to be successful in solving these hurdles"
    },
    {
      name: "Armstrong D.",
      date: "2025-09-29",
      text: "Miss Reanna York I wanna thank you for all your help and always being there to answer all my questions anytime I didn’t understand something."
    },
    {
      name: "Powei O.",
      date: "2025-09-29",
      text: "She was very nice and patient. I had a great time learning from her."
    },
    {
      name: "Eric B.",
      date: "2025-09-29",
      text: "When I inquired, ReRe responded with the direction and information I needed. And if what I needed was beyond her grasp. She pointed me in the right direction. Everyone needs a Reanna York on their team."
    },
    {
      name: "Katie B.",
      date: "2025-09-29",
      text: "Great investor to work with! I am a certified appraiser and can testify that they take care of there clients and offer trustworthy advice."
    },
    {
      name: "Jimmy R.",
      date: "2025-09-29",
      text: "It was a pleasure working with Reanna & Investors Edge. They have been very easy to work with, and I look forward to working with them again."
    },
    {
      name: "Hal M.",
      date: "2025-09-29",
      text: "So easy to work with. Reanna York has been great. Hope to hear from you soon. Thank you."
    },
    {
      name: "Linda M.",
      date: "2025-09-29",
      text: "Reanna has been AMAZING! every question that I have she responds almost immediately which is great! Reanna also points you in the right direction or gives you your next steps based on your previous question. This makes traversing the program and information that much easier."
    },
    {
      name: "Justin A.",
      date: "2025-09-29",
      text: "Reanna and the team at The Investors Edge have been phenomenal to work with. They are informative, very knowledgeable, and communicate consistently throughout the process. If you are an investor give this team a try. You will not be disappointed!"
    },
    {
      name: "Jamaal C.",
      date: "2025-09-29",
      text: "I had my onboarding call with Reanna York, and 4 days later, she was walking me through getting my first deal under contract! My first fix and flip! Thank you, Reanna and team. You're the best!"
    },
    {
      name: "Tersit A.",
      date: "2025-09-29",
      text: "Reanna is an amazing coach. She is knowledgeable of the business, she cares, takes her time to explain and repeat tirelessly when I don’t understand. She is always available for me when I need her I enjoy working with Reanna. It is encouraging to have someone who will go the extra mile to make things easier when you embark on a new business venture. Thank you Reanna."
    },
    {
      name: "Sublime V.",
      date: "2025-09-29",
      text: "We worked with Reanna York, she was knowledgeable, professional, great customer service, and extremely polite to work with. She was great with communicating and being responsive. We received our appraisal payment within 7 days of completing the appraisal order. We would love to continue working with Investor Edge again."
    },
    {
      name: "Seymour R.",
      date: "2025-09-29",
      text: "I had a great experience with the workers at Do Hard money, they were really helpful every time they always walk me through and stay on the phone with me on my questions that I may have, thanks again."
    },
    {
      name: "Joshua H.",
      date: "2025-09-29",
      text: "I honestly can’t express enough how grateful I am for the exceptional service and support I’ve received throughout this process. From the very beginning, speaking with Carlos, to setting up the initial breakdown with Jurell, and then diving deeper into the details with Reanna—everyone has been so helpful and thorough. Whenever I had a question, they were quick to find the answers. Now, I’m excited to be working with Jeri, who is incredibly knowledgeable and truly helps guide you to set yourself up for success. I am genuinely thankful for all the support and couldn’t have asked for a better team. Thank God I found them!"
    },
    {
      name: "Kenneth W.",
      date: "2025-09-29",
      text: "Thankyou To Investors Edge. Where They Make YOUR DREAM Of Real Estate Investing Come TRUE. I’ve Been In THIS Business FULL TIME Now For Over 20yrs Now. Licensed In California and Georgia as a Realtor. I’m Now In a Position To BUY MORE Flips and Resale Them Myself 👏🏾👏🏾👏🏾👏🏾👏🏾👏🏾👏🏾👏🏾💙💙💙💙🙏🏿🙏🏿🙏🏿🙏🏿 …"
    },
    {
      name: "Jamie C.",
      date: "2025-09-29",
      text: "great experience!"
    },
    {
      name: "Vidal H.",
      date: "2025-09-29",
      text: "She was helpful easy to talk to really knowledgeable and hands on. All the round great experience with her. Thanks Reanna"
    },
    {
      name: "Garland R.",
      date: "2025-09-29",
      text: "Reanna was a great help! Was very knowledgeable can't wait to get started!"
    },
    {
      name: "Kevin H.",
      date: "2025-09-29",
      text: "I would like to add the customer service from Jeri Lin and Reanna are best in class!"
    },
    {
      name: "McKay E.",
      date: "2024-09-29",
      text: "I had a wonderful experience with Investor's Edge. They helped me find a great property that yielded returns much higher than I was expecting. I put up a little over 150k and in about 10 months got back a little over 22k for a profit margin of 14.59%!"
    },
    {
      name: "M K.",
      date: "2024-09-29",
      text: "Reanna is great! Very few can 'cut the mustard' in this industry. Reanna is a mustard cutter. I've been in this business for 30 years. It doesn't get better. It (usually) gets worse. However, there are exceptions & Reanna is one of those exceptions. She's a young woman with an old-fashioned business brain. Refreshing! If I ever get a loan, I'm definitely calling Reanna & I look forward to working with her in the future."
    },
    {
      name: "Brendan B.",
      date: "2024-09-29",
      text: "From the start of my partnership with The Investors Edge, from Nathan, my first point of interaction, to JJ, my investment advisor and finally, Reanna, my success manager, it’s been an informative and helpful process. The real estate investment funding and advanced software to find and vet deals, are what they were advertised to be. I’m very happy with my decision to partner with The Investor’s Edge."
    },
    {
      name: "Edward P.",
      date: "2024-09-29",
      text: "After struggling to find the right properties to make offers and flip, The Investors Edge team met with me to understand my concerns and coach me through the situation. I’m now under contract on my first great opportunity and can’t wait to grow my business through EDGE! Very thankful for the guidance and quick support they’ve been providing."
    },
    {
      name: "Breath L.",
      date: "2024-09-29",
      text: "Reanna was very friend, and professional."
    },
    {
      name: "Cassie R.",
      date: "2024-09-29",
      text: "Great experience, Reanna was very helpful and answered all my questions thoroughly. She was also very easy to understand and well spoken and friendly."
    },
    {
      name: "Tara R.",
      date: "2024-09-29",
      text: "Nathan, Kyle, and Reanna have been amazing to work with! They're very knowledgeable, supportive, and responsive - everything I need as I start my journey as an investor. I'm blown away by the software & training modules and it really feels like the whole team really cares about my success."
    },
    {
      name: "Paul V.",
      date: "2024-09-29",
      text: "Extremely helpful and very detailed with the entire process!"
    },
    {
      name: "Warren C.",
      date: "2024-09-29",
      text: "Reanna has been excellent and responsive. She definitely makes feel like I have the support needed to be successful. She has been very helpful in a timely manner throughout the entire process"
    },
    {
      name: "Kim G.",
      date: "2024-09-29",
      text: "Reanna was fantastic! She was patience and helped me understand so much about the IE software, I look forward to having her in my corner during this process!"
    },
    {
      name: "Casey K.",
      date: "2024-09-29",
      text: "Good"
    },
    {
      name: "Kadian B.",
      date: "2024-09-29",
      text: "Reanna, was awesome today, I had so many questions about the program and software how to use them and understand what I was looking at as a new investor., she was amazing she went over all the sections I had questions and explained them thoroughly leaving me feeling confident about doing the new business adventure… thank you so much for your time and patience… i appreciate you."
    },
    {
      name: "Hassan K.",
      date: "2024-09-29",
      text: "Reanna York, she’s very helpful and she explain to me everything about software whenever I need her she’s there ..😊 …"
    },
    {
      name: "Bodizapha15",
      date: "2024-09-29",
      text: "Reanna has been amazing! Super helpful and always just a call or text away!"
    },
    {
      name: "Cedric B.",
      date: "2024-09-29",
      text: "I have been a member of The Investor's Edge Program for two years, and I can confidently say that it has been a game-changer for my real estate investing journey. The support and education they provide have significantly enhanced my skills and success in the industry. From the start, The Investor's Edge Program has offered exceptional support. Tools like the 100% Financing System and the Partner-with-a-Pro Starter System are tailored to meet the needs of investors. The support team is always responsive and knowledgeable, ready to help with any questions or challenges I encounter. The Guaranteed 90-Day Finding System and Guaranteed Finding Starter System have been particularly useful, ensuring I never miss out on lucrative opportunities. I want to give a special thanks to Reanna, who has been incredibly helpful throughout my journey. Her expertise, patience, and dedication have made my experience smoother and more successful. Reanna's support and guidance have been invaluable, and I am deeply grateful for her assistance."
    },
    {
      name: "Bryan M.",
      date: "2024-09-29",
      text: "Been working with IE for about a month now. The customer service has been exceptional. Jurrel and Reanna have been able to answer all my questions or get quick answers from their team, usually within an hour."
    },
    {
      name: "Randall P.",
      date: "2024-09-29",
      text: "Working with Reanna and the Investor's Edge as a real estate appraiser has been a great experience. We appreciate their partnership and look forward to continuing to work together."
    },
    {
      name: "Brad L.",
      date: "2024-09-29",
      text: "I just dealt with an associate named Reanna at the investors edge, Reanna was very professional and when trying to get a hold of her she was easy to contact and if she did not answer the phone she got back to me within minutes which is hard to find with most companies, I would refer this company to anyone who is need. Thank you, Brad"
    },
    {
      name: "Sabrina B.",
      date: "2024-09-29",
      text: "I really appreciate the time that Reanna took to go over the system with me. After our call, I felt very confident with using the system and I feel very confident with being able to take my next step."
    },
    {
      name: "Vernon J.",
      date: "2024-09-29",
      text: "Reanna is very timely and professional. Great opportunity for real estate investing!"
    },
    {
      name: "Noah T.",
      date: "2024-09-29",
      text: "Reanna York is the best! Was able to help clear up all the questions I had and get me on the right track."
    },
    {
      name: "Jair R.",
      date: "2024-09-29",
      text: "The Investor's edge is a real thing, TRUE. They provide all the necessary tools, curses and guidance for you to success in this journey, if you invest your time in learning and working hard finding deals, you will get what you're looking for which is become a real estate investor. You will get a lot of educational videos and if you have questions or concerns, they are very communicative, dedicate and helpful. I been blessed to have Matt G. as my onboarding agent/teacher, he has helped me a lot explaining everything and been there for any additional questions responding on the chat or thought email in minutes. Thanks Matt for all your support!"
    },
    {
      name: "Dr. P.",
      date: "2024-09-29",
      text: "I recently had the pleasure of working with Reanna York at The Investor Edge, and I must say, her assistance was invaluable in my journey towards success. From the very beginning, Reanna proved to be an exceptional professional who went above and beyond to provide me with the necessary steps and guidance I needed. Reanna's expertise and knowledge in the field were evident through her clear explanations and patient demeanor. She took the time to understand my goals and tailor her advice to suit my specific needs. Her dedication to helping me succeed was truly remarkable. Throughout the process, Reanna's communication skills were exemplary. She promptly responded to my queries and provided me with accurate and reliable information. Her attention to detail and commitment to ensuring I understood every step of the process was commendable. What sets Reanna apart is her genuine passion for helping others achieve their financial goals. She consistently displayed a positive attitude and an unwavering commitment to my success. Her encouragement and motivation were instrumental in keeping me focused and motivated throughout the journey. I am incredibly grateful for Reanna's support and guidance. Thanks to her, I now feel confident and equipped with the necessary knowledge to make informed investment decisions. I highly recommend Reanna York at The Investor Edge to anyone seeking exceptional assistance in their pursuit of financial success. Thank you, Reanna, for your outstanding professionalism and dedication. You have truly made a positive impact on my journey towards success!"
    },
    {
      name: "Aljae W.",
      date: "2024-09-29",
      text: "Reanna York super helpful !! She walked me through the software and gave me aggood insight into the program"
    },
    {
      name: "Sanjeev R.",
      date: "2024-09-29",
      text: "Onboarding support staff was great. Reanna took the time to explain everything over a Zoom call and offered follow up sessions as needed."
    },
    {
      name: "Tony R.",
      date: "2024-09-29",
      text: "This organization offers everything required to be a success in Real Estate, and their customer service is excellent! My onboarding agent, Reanna York made everything perfectly clear."
    },
    {
      name: "Darryl S.",
      date: "2024-09-29",
      text: "I have been looking for a way to get into real estate investing with as little risk as possible. Investors's Edge provides the education, tools, and capitol access in order to pursue my dreams within my business. Matt has been exceptional in helping me learn the system and analyze properties so that we all make money walking away from the closing table. Thank you!"
    },
    {
      name: "Sheryll Y.",
      date: "2024-09-29",
      text: "Reanna was absolutely great! She was a pleasure to talk to and was very detailed and informative in her explanation of the process. She was very patient, answered all my questions and cleared up all my concerns. Thanks Reanna for making the process so easy and pleasant for a newbie such as myself!"
    },
    {
      name: "Gwyn P.",
      date: "2024-09-29",
      text: "Reanna York was amazing to work with. She was very prompt in responding to me and was a tremendous help."
    },
    {
      name: "Chad H.",
      date: "2024-09-29",
      text: "Reanna did a fantastic job going over all the great tools that Investors Edge provides to it's members."
    },
    {
      name: "Chepe M.",
      date: "2024-09-29",
      text: "Matt Gregory was a great help in guiding me through all the steps on navigating through the website and made it very easy to understand it."
    },
    {
      name: "Hannah H.",
      date: "2024-09-29",
      text: "We haven’t even gotten a property under contract yet and Investor’s Edge has been phenomenal. JJ and Matt Gregory are fantastic, every time I need something or have a question Matt is always right there with an answer for me. Cannot thank these guys enough!!"
    },
    {
      name: "Justin M.",
      date: "2024-09-29",
      text: "I’m brand new to Investor’s Edge and so far I am absolutely impressed and appreciative of having Matt Gregory as my advisor and leader to my real estate journey! He has helped me so much in providing me such good detail and assistance. Thank you so much Matt! I look forward to our future meetings! 👍🏼👍🏼 …"
    },
    {
      name: "Ali J.",
      date: "2024-09-29",
      text: "Rheanna was great and it was quick and she was helpful."
    },
    {
      name: "Dillon M.",
      date: "2024-09-29",
      text: "Reanna has been so helpful working with me in helping me to understand the software and everything else. Just an incredible company with amazing people!"
    },
    {
      name: "Philip P.",
      date: "2024-09-29",
      text: "She was very helpful with what I needed"
    },
    {
      name: "B K.",
      date: "2024-09-29",
      text: "I'm so happy to have Matt as my advisor/teacher. I actually look forward meeting with him every week. I could not ask for a more professional & knowledgeable partner to assist me on this journey. With him I will not fail."
    },
    {
      name: "Seth W.",
      date: "2024-09-29",
      text: "Absolutely amazing experience in assisting me with my first full fix and flip job. They are extremely communicative, dedicate time to you beyond what is needed, are always there to help educate you or handle any issues, and are the most supportive group of lenders I've ever worked with. 5 star experience!"
    },
    {
      name: "Jovanni B.",
      date: "2024-09-29",
      text: "The softwares and tools provided by The Investors edge are very helpful to grow as an investor. Especially when having someone like Matt Gregory on your side to help out with any questions or problems. Huge thank you to Matt for all his help and guidance."
    },
    {
      name: "Ana R.",
      date: "2024-09-29",
      text: "I have to give 5 stars to Matt! So helpful, so thorough. He made sure I understood everything as well as leaving no room for confusion."
    },
    {
      name: "Cynthia W.",
      date: "2024-09-29",
      text: "Wow, that’s what I say when I get off a call with Matt. He is such a gem. He has so much patience. I say that because I’m not the best with communications nor electronics and for him to be able to have me understanding, showing me tips and tricks and not getting frustrated with me and any step away he goes over and beyond with random questions that I have if he don’t know it, he got back to me right after our call after he confirmed it or verified it with someone else He has been such a great help. I know it’s just three calls that we got, but I feel confident that I’m gonna do great with the investors edge with the help of Matt thank you even with me, feeling confident with the program, he still says he’s only a call or email away so again thank you I really appreciate it"
    },
    {
      name: "Coach C.",
      date: "2024-09-29",
      text: "This is my second flip with dhm. And this time working with jerri has be awesome! And richard always bring a wealth of knowledge."
    },
    {
      name: "Ken W.",
      date: "2024-09-29",
      text: "When I found Investors Edge I had a deal under contract and time was ticking! Other hard money lenders wanted me to have over $100k to be able to close ! The team at Investors Edge looked at my deal and were able to get me 100% financing. I had a $385,000 house under contract for $180,000 and they lent me 70% of the ARV on my first flip! I made over $100k on a flip that took me less than a month to rehab and get back on market. For anyone really serious about getting deals done I recommend Investors Edge!"
    },
    {
      name: "Blenia P.",
      date: "2024-09-29",
      text: "Being new to Real Estate, it’s been a hard journey finding people that are knowledgeable and willing to help you out. Matt Gregory has been phenomenal. I just completed the training course today, and let me say he has been very thorough, patient, and a great teacher/mentor throughout. I have taken prior real estate/wholesaling/investing courses so I am familiar and confident in what I am doing but at the same time still have so much more to learn, so it was hard not having someone to walk me through the process as I didn’t want to make any mistakes, that was of course prior to finding Investors Edge. Accessing the software has been easy due to his guidance. My team and I are getting ready to start our first deal and I can’t wait to see where we go from here. So grateful we found Investors Edge but even more so that I’ve had the opportunity to work with and learn from Matt. Very excited for this journey."
    },
    {
      name: "John T.",
      date: "2024-09-29",
      text: "Matt Gregory has been great. He took a lot of time to show me the software as well as analyze deals with me. Wish I found this sooner- I highly recommend to anyone serious about real estate investing. Incredible company!!"
    },
    {
      name: "Suzan B.",
      date: "2024-09-29",
      text: "Austin was very professional, helpful and knowledgeable! Looking forward to working with the program and software"
    },
    {
      name: "Mike M.",
      date: "2024-09-29",
      text: "Investors Edge has been extremely flexible in working with us in getting the type of funding we were looking for. There was a misunderstanding initially but that was rectified and since been smoothed over. Matt has been especially helpful in getting all of my questions answered promptly. Their customer service has been outstanding towards me."
    },
    {
      name: "Muhammed C.",
      date: "2024-09-29",
      text: "Matt Gregory was great to work with. He was very knowledgeable about the Investor's Edge. I learned a lot from our training and he answered every questions I had. I hope to work with investors edge."
    },
    {
      name: "Jonathan D.",
      date: "2024-09-29",
      text: "The team at Investor's Edge is 2nd to none. Matt Gregory was extremely helpful during the onboarding process! Would recommend to all."
    },
    {
      name: "Jason J.",
      date: "2024-09-29",
      text: "Thank You Matt for your patience and time you are a great teacher. I was able to learn from the way you delivered the material . It's a lot to learn but you were able simplify somethings making it easier to comprehend. Again thank you for the lessons i'm very appreciative."
    },
    {
      name: "Orlando W.",
      date: "2024-09-29",
      text: "Matt is Great!!! Definitely attentive and puts in the effort to truly support your next investment. I would highly recommend him for his knowledge, professionalism, and personable approach. I look forward to closing deals together. Thanks Matt for all your help!"
    },
    {
      name: "Shena J.",
      date: "2024-09-29",
      text: "Matt Gregory has been awesome. We have had 3 great calls to help me get to my first deal! I recommend he and his team for all of your real estate needs! Thanks again"
    },
    {
      name: "Baylor G.",
      date: "2024-09-29",
      text: "Matt is very helpful, takes time to give you a call, even in short notice. The service that I have received from him and Michael has been great. I hope that we can close something soon."
    },
    {
      name: "Paul N.",
      date: "2024-09-29",
      text: "I'm about to follow through with my first deal. Matt Gregory has been there throughout answering any and all questions I've had. This first deal has taken some time but I'm looking forward to many more after this."
    },
    {
      name: "Robert S.",
      date: "2024-09-29",
      text: "This company has given me an opportunity to invest that a bank and other hard money lenders have not. They have an extremely knowledgeable and helpful team that walks you through every step. They have been and will be the vehicle that will bring me to generational wealth. I can’t say thank you enough for all they have done‼️"
    },
    {
      name: "Ethan C.",
      date: "2024-09-29",
      text: "Matt Gregory is the man! Very helpful and truly interested in being there for you every step of the way."
    },
    {
      name: "Lisette B.",
      date: "2024-09-29",
      text: "Investors Edge, with the support of Matt, is an outstanding program for first-time real estate investors. Matt has been instrumental in handholding through every facet. Thanks to Investors Edge and Matt’s guidance, I reached my real estate goals much sooner than expected. Gratitude for the expertise and personalized assistance that made a significant impact on my journey. Highly recommended!"
    },
    {
      name: "Season O.",
      date: "2024-09-29",
      text: "Very helpful, and professional. Great support"
    },
    {
      name: "J S.",
      date: "2024-09-29",
      text: "Matt Gregory was wonderful to work with. He was very knowledgeable about the Investor's Edge Product."
    },
    {
      name: "Carl W.",
      date: "2024-09-29",
      text: "This program is awesome for first time real estate investors. Investors Edge has knowledge staff that will hand walk you through every bit of the software and help you learn how to find deals and execute on them. I am thankful for this program because it helped me reach my real estate goals alot sooner than expected."
    },
    {
      name: "JD H.",
      date: "2024-09-29",
      text: "Wanted to give a shoutout to Matt Gregory for helping me with my troubleshoot issue. I was unable to login and use The Investor’s Edge resources for about 9 days, but as soon as I called he was able to fix the issue in a timely matter. I really do appreciate it. I go to a lot of investor conferences/conventions/ and meet-ups. This experience alone is a fine example of why I will continue to recommend these services. Thank you."
    },
    {
      name: "Gwendolyn J.",
      date: "2024-09-29",
      text: "My experience with investors edge has been amazing. I absolutely love Matt Gregory. He is such a wonderful soul and I am grateful for all the help he has given thus far.🥰 …"
    },
    {
      name: "Brandi S.",
      date: "2024-09-29",
      text: "Everyone I have dealt with, Matt especially, has been truly amazing. Catch me in 3 years when I'm doing millions in business and it will be because of this amazing support team. Quick to communicate with the most helpful advice and guidance."
    },
    {
      name: "Alison B.",
      date: "2024-09-29",
      text: "Austin is very helpful and professional!! Great customer service!"
    },
    {
      name: "Cash H.",
      date: "2024-09-29",
      text: "The trainings are very informative and the tools are user friendly. I lucked out and got paired up with two Rockstars, Austin and Jeri Lin. Thank you both for being patient and available throughout this new Journey!"
    },
    {
      name: "Latisha B.",
      date: "2024-09-29",
      text: "I stumbled upon Investor’s Edge website during a random google search of ways to fund my real estate deals. After doing my due diligence, I decided to give them a try. Upon gaining access to their website, I quickly realized that Investor’s Edge was the real deal! Their website provides formal training in different real estate categories and so much more! Matt Gregory was assigned to be my customer success coach. He provided me with detailed visual instructions on how to assess good and bad deals. Plus, he explained how I can get access to funding. To my surprise, Matt turned out to be an excellent coach and a great source of information. So far, my experience with Matt and Investor’s Edge has exceeded my expectations and it’s going exceptionally well!"
    },
    {
      name: "Lynette J.",
      date: "2024-09-29",
      text: "Honestly, I’m working with Matt and his support is 2nd to none. I’m an enterprise CX manager myself and I know from experience that he is better at his job than most. He is detailed, thorough, isn’t afraid to pick up the phone and call you. It’s early in my partnership, and I have not yet found my perfect property just yet but am sure that with his support I will be just fine."
    },
    {
      name: "Alexandra S.",
      date: "2024-09-29",
      text: "I had the best experience with Matt Gregory he is the absolute best! He has walked me through how to find properties and what to look out for on my next deal. Matt not only is very knowledgeable he is also kind and patient. Matt is the best!!"
    },
    {
      name: "Niyi O.",
      date: "2024-09-29",
      text: "I want to express my sincere gratitude to Matt and the InvestorEdge Team for their tireless dedication and unwavering support in my real estate journey. Matt's expertise, guidance, and commitment were instrumental in helping me find the perfect real estate deals. I must also commend his professionalism, attention to detail, and willingness to go the extra mile in ensuring i succeed in this journey. He patiently answered my questions, offered valuable insights, and ensured I felt confident every step of the way. I couldn't have asked for any better. InvestorEdge is just a one stop destination that provides all the answer in one spot. Thank you, Matt and the InvestorEdge's Team, for your outstanding service."
    },
    {
      name: "Carl R.",
      date: "2023-09-30",
      text: "We work frequently with Ashley, Jeri Linn and JDee and they are wonderful to work with. Very responsible, efficient and knowledgeable. I would highly recommend The Investor's Edge"
    },
    {
      name: "Gwen G.",
      date: "2023-09-30",
      text: "I love what I see about the program so far. Everyone I have spoken with have been helpful, knowledgeable, and a pleasure to speak with. Thank you Drew and Kristi"
    },
    {
      name: "Antoinette Q.",
      date: "2023-09-30",
      text: "Kristi was great. She listened and provided great feedback."
    },
    {
      name: "Joseph C.",
      date: "2023-09-30",
      text: "Great customer support. I was able to chat with a real person and get answers to my questions."
    },
    {
      name: "Calvin F.",
      date: "2023-09-30",
      text: "Love working with this team. Austin, has been very kind and professional in every aspect of the job. He is a pleasure to work with."
    },
    {
      name: "Mr. M.",
      date: "2023-09-30",
      text: "Josh was super helpful with providing me some guidance that I needed to work towards completing my first deal with Do Hard Money!"
    },
    {
      name: "Terri L.",
      date: "2023-09-30",
      text: "DHM has helped us so much. We grew from doing a few deals a year to 30+ at a time. We have been so grateful for all their help and guidance."
    },
    {
      name: "David D.",
      date: "2023-09-30",
      text: "Customer service was quick to respond and was knowledgeable."
    },
    {
      name: "Laura W.",
      date: "2023-09-30",
      text: "Kristi went the extra mile communicating with everyone and saved my transaction! I love working with everyone at DoHardMoney! I feel secure in all the decisions I make because their step by step system truly is designed to have my back!!!"
    },
    {
      name: "Ryan L.",
      date: "2023-09-30",
      text: "Do Hard Money is a great company to work with. I had the pleasure of working with a representative by the name of Austin. He gave me clear and direct instructions on what was required and we finished our deal in days."
    },
    {
      name: "Robert H.",
      date: "2023-09-30",
      text: "Amazing people to work with..Austin was extremely helpful and professional. Seamless smooth process! Thank you!"
    },
    {
      name: "A'cemetric L.",
      date: "2023-09-30",
      text: "Working with Josh Harrell was my best experience so Far! Quick solutions and great response time."
    },
    {
      name: "Mr H.",
      date: "2023-09-30",
      text: "Josh is fantastic! He always helps me out when I need him."
    },
    {
      name: "TueborCpl S.",
      date: "2023-09-30",
      text: "Josh Harrell is an absolute all-star!! He is always available to answer any questions I have. He is very knowledgeable about securing hard money loans for properties and he’s there every step of the way. So glad I have him in my corner!!"
    },
    {
      name: "Donique C.",
      date: "2023-09-30",
      text: "Kristie Snow is wonderful.I was feeling very overwhelmed with what to do, where to start and she was amazing. I am not a computer savvy person so the one-on-one assistance was greatly appreciated. I suggest adding this as an option for older members like myself. Thanks Kristie for pointing me in the right direction."
    },
    {
      name: "Christy R.",
      date: "2023-09-30",
      text: "Kristi was very helpful! I had questions and she answered them step by step on-line. I then asked another question and she asked if I would like a call to go over a couple of things. I immediately said, “YES!” She called within seconds! AMAZING CUSTOMER SERVICE!"
    },
    {
      name: "Jeffery J.",
      date: "2023-09-30",
      text: "Austin answered my questions quickly and thoroughly. Seems to be a great fit."
    },
    {
      name: "Kristin C.",
      date: "2023-09-30",
      text: "Josh is really patient and helpful!"
    },
    {
      name: "Charles M.",
      date: "2023-09-30",
      text: "I found that working with Meaghan and Kristi at Do Hard Money was pleasant and professional. During the weekly update video's Kristi was very helpful in making sure the project stayed on track and was able to address any unexpected issue with calm and clarity. Meaghan covered all of my concerns during the draw process, property listing updates and questions to pay off the loan. It has been a pleasure working with the both of them. We just got three new properties under contract. I'm hopeful that I will be able to work with both on these upcoming projects."
    },
    {
      name: "Samuel H.",
      date: "2022-09-30",
      text: "josh was mad helpful and understanding..."
    },
    {
      name: "Chanice S.",
      date: "2022-09-30",
      text: "Austin was extremely helpful! I feel well prepared to start investing."
    },
    {
      name: "Nestor C.",
      date: "2022-09-30",
      text: "Excellent service and support!! I highly recommend DHM."
    },
    {
      name: "Mamma B.",
      date: "2022-09-30",
      text: "Josh is amazing!! He is friendly, professional, kind, experienced, and is so willing to guide you in the right direction! I am so happy I have him and DoHardMoney in my corner. I am going to be able to build a kingdom with them on my side. This is my first of many homes I plan to buy with DoHardMoney and their team on my side! Thank you Josh for all the great advice."
    },
    {
      name: "Xavier M.",
      date: "2022-09-30",
      text: "My good friend Josh Harrell was more help than I expected to get"
    },
    {
      name: "James G.",
      date: "2022-09-30",
      text: "Great communication. Pleasure to work with. While everyone at DHM is awesome Neelam is the best!"
    },
    {
      name: "Gabriel M.",
      date: "2022-09-30",
      text: "Josh is a pleasure to work with. Very professional. We have great working relationship."
    },
    {
      name: "Gordon P.",
      date: "2022-09-30",
      text: "Working with Neelam was an easy process she knew what needed to be done and executed. Thank you"
    },
    {
      name: "Charmaine M.",
      date: "2022-09-30",
      text: "Neelam Deyoung is very professional at what she does. Neelam is my servicing coordinator for my loan at Do Hard Money, she’s always available to answer any questions and concerns I may having. She makes it her effort to make sure each client is winning, working with Neelam makes my experience with Do Hard Money easy, she demonstrated trust, respect for her client and her service is outstanding!! Thanks Neelam for your help!!"
    },
    {
      name: "Lisa G.",
      date: "2022-09-30",
      text: "Josh has been so helpful throughout this process! He responds to my questions so quickly and is always thorough!"
    },
    {
      name: "Heather A.",
      date: "2022-09-30",
      text: "My experience with Do Hard Money has been on the real estate professional side in assisting with the sale of a local property acquired by the company. In communicating with project managers and counsel for the company, response time has been great and delivered with the utmost professionalism. It's been a pleasure working with them throughout our transaction."
    },
    {
      name: "Donald S.",
      date: "2022-09-30",
      text: "I have been particularly pleased with the weekly updates and progress notes that Neelam DeYoung has provided with my last contract. It is helpful being so far removed from the action to be kept involved with the project. Thank you for your consistent and timely communication."
    },
    {
      name: "Tamara R.",
      date: "2022-09-30",
      text: "Kayla is so helpful and knowledgeable it put me at ease, when starting my first project with Do Hard Money. She was a pleasure to work with and I look forward to working with her again."
    },
    {
      name: "Dylan B.",
      date: "2022-09-30",
      text: "Sterling was very helpful and took the time to answer all my questions!"
    },
    {
      name: "Charlotte M.",
      date: "2022-09-30",
      text: "DoHard Money is an excellent opportunity for first-time investors to get the experience of flipping houses under their belt. Their expertise and knowledge of the housing industry will help you achieve success."
    },
    {
      name: "Green V.",
      date: "2022-09-30",
      text: "Kayla was VERY helpful today.."
    },
    {
      name: "Nicole F.",
      date: "2022-09-30",
      text: "OMG! I can't say enough about Jason Alatinin! I asked tons of questions and Jason was right there on the phone answering all my questions. Jason was so pleasant and very patient and calm to deal with. Carlos was really great as well, he also helped me! Please call Jason or Carlos and ask questions about investing they both will be there to answer? You guys' Rock!"
    },
    {
      name: "Jennifer T.",
      date: "2022-09-30",
      text: "I had the pleasure of working with Meaghan Meyer. She is absolutely amazing! I knew if I had a question or needed information, she was always there to answer them. Kept me informed through the whole process. Always, always responded to my emails in a timely manner. I hope I get to work with her again in the future!"
    },
    {
      name: "Jabril A.",
      date: "2022-09-30",
      text: "Do-Hard-Money is a great company, my experiences with Haley, Neelam, and Meaghan has been nothing but exceptional. As we’ve been closing on multiple deals Haley”s knowledge helping with the rehabs and administrative skills are excellent, Neelam management and drive to get deals closed and houses ready to be sold is such a great resource when trying to get houses on the market, Meaghan customer services and drive to get business done is some of the best I’ve seen in a long time. I could say so much more about DO-Hard from a positive perspective that it would take atleast 5 paragraphs to express the experience but I wanted to specifically give kudos to the staff that has helped me in everything I needed. Thank you, You ladies are Phenomenal!! ☺️💯"
    },
    {
      name: "Josh C.",
      date: "2022-09-30",
      text: "Josh was extremely helpful and was able to answer all of my questions effectively!"
    },
    {
      name: "Ebony B.",
      date: "2022-09-30",
      text: "Kayla has provided a wealth of information to assist me with vetting options and explaining others things. She is knowledgeable, helpful, and patient."
    },
    {
      name: "Gardith N.",
      date: "2022-09-30",
      text: "Darren is the absolute best, I would not be able to close on my loan without his hard work and dedication. Thank you!!!!"
    },
    {
      name: "Denise D.",
      date: "2022-09-30",
      text: "I have worked with Josh on several projects and have always had a great experience. He is very helpful and knowledgeable."
    },
    {
      name: "Michael S.",
      date: "2022-09-30",
      text: "Drew has been solid this far. I'm a very skeptical person and he's been understanding and helpful. I just signed up today (Sunday) which happens to be his birthday. He was adamant on helping me get set up today and extremely supportive throughout the entire process. Carlos was a great initial experience as well. We will see how the first deal goes and I'll update accordingly."
    },
    {
      name: "Shalom W.",
      date: "2022-09-30",
      text: "Drew was great to work with, he was very knowledgeable and easy to talk to and answered all my concerns and questions."
    },
    {
      name: "Greenwood I.",
      date: "2022-09-30",
      text: "Drew was patient with me as I went through some family tragedies. He never made me feel pressured or rushed. He was pleasant and never disregarded any of the questions I asked. He always answered questions/concerns and sent follow-up material to support our discussions."
    },
    {
      name: "David H.",
      date: "2022-09-30",
      text: "Drew is awsome anytime I had questions he's always theyre to answer them and does what he can to help all of his clients"
    },
    {
      name: "Kelly T.",
      date: "2022-09-30",
      text: "Kayla was excellent and very helpful! I’m looking forward to working with her and DHM…"
    },
    {
      name: "Patrick A.",
      date: "2022-09-30",
      text: "Drew was very nice and respectful. He took time out of his Saturday to help me. Very excited to work with this company."
    },
    {
      name: "Jon G.",
      date: "2022-09-30",
      text: "Drew was very nice and helped me understand how hard money works"
    },
    {
      name: "Tavares G.",
      date: "2022-09-30",
      text: "Wonderful with answering questions"
    },
    {
      name: "Kyeth J.",
      date: "2022-09-30",
      text: "Well, Well, I just want to SHOUT OUT to 2 very special lady's Ms. Judy started this and it just evolved and resignated, these Do Hard Money professionals doubled team me, and then came Ms. Kayla with her patience I am not easy to teach, with her wonderful personality she start forcing me to learning this software, and invited me and my partner to come down, and spend lunch together, this is awesome.....KAYLA and JUDY, I don't want to talk to no one else, Sorry! They deserve the GOOD Award for something I will be checking to see, and if there is nothing then I will get it and TAKE BRAGGING rights? Very good job, Ladies!"
    },
    {
      name: "Sandy",
      date: "2022-09-30",
      text: "I am getting back into the groove of things so I contacted DHM to follow-up on changes. From the the very first time I contacted DHM (2016) until today March 10 '22. The customer service just gets better as time goes on. DHM makes adjustments according to the market and the needs of the investors. I want to give a very BIG shout out to Jason and Kayla. Kayla was so kind and sincere regarding my needs. She has excellent customer service skills which is far and few these days. I asked if I could speak to someone so I could get a refresher on things and she assured me I would get a call back. And finally Jason who called me back and filled me in on some of the changes that DHM obviously made in the past couple of years. He listened and made me feel better about my journey. Jason is professional and very kind. I definitely recommend DHM to any investors that may want to start investing."
    },
    {
      name: "Captured P.",
      date: "2022-09-30",
      text: "Josh H has been the best since my coming on board with Do Hard Money. If you need motivation, Josh is the man to fulfill that need. Josh has been very helpful and pleasant on every call. Thank You Josh H !!! Harold J"
    },
    {
      name: "J. P.",
      date: "2022-09-30",
      text: "Kayla was just a breath of fresh air to work with. She was very kind, patient, and knowledgeable. She was able to answer my questions and just deliver great customer service. I use to train call center employees for Comcast and her call quality is 10 out of 10. Great to work with. Keep hiring people like her."
    },
    {
      name: "Jay M.",
      date: "2022-09-30",
      text: "Great experience so far, Kayla has been extremely helpful, and provides quick responses anytime I need assistance!"
    },
    {
      name: "Adrian L.",
      date: "2022-09-30",
      text: "Kayla is dope, she is helping me throughout this whole process!"
    },
    {
      name: "Ramon C.",
      date: "2022-09-30",
      text: "Neesh was very patient and helpful, she took the time to answer all my questions and guide me , it was a great to work with her , thanks"
    },
    {
      name: "Rebecca A.",
      date: "2022-09-30",
      text: "Kayla is super sweet and helpful!"
    },
    {
      name: "Noemi L.",
      date: "2022-09-30",
      text: "very nice professional and helpful with all your questions"
    },
    {
      name: "Shay D.",
      date: "2022-09-30",
      text: "Allie made my experience easy and she is truly one of a kind!!!!!"
    },
    {
      name: "Joseph G.",
      date: "2022-09-30",
      text: "Josh was very patient and really took his time to answer all my questions. He even called back to make he addressed my every concern. I have worked with Judy on a couple of occasions and she has been so professional and an absolute joy to work with. This survey only requires that I give her five stars, but if I could I would give her ten."
    },
    {
      name: "Henry",
      date: "2022-09-30",
      text: "Judy Drake is just amazing !!! She has been so helpful for me and my company with our first time using Do Hard Money. We will be continuing to do more deals with this company thanks to Judy."
    },
    {
      name: "NextStep L.",
      date: "2022-09-30",
      text: "Just joined, so far I'm thrilled with the results! I will provide an update of this review after my first flip."
    },
    {
      name: "Lee C.",
      date: "2022-09-30",
      text: "Kayla, was very pleasant to speak with. She definitely knows the company and what it has to offer to it's members. It was my pleasure working with Kayla today."
    },
    {
      name: "Ben L.",
      date: "2022-09-30",
      text: "With the best loans I've found and a first rate program, I would recommend any real estate investing company give DHM serious consideration."
    },
    {
      name: "Courtney R.",
      date: "2022-09-30",
      text: "Kristy has made this experience with Do hard money amazing. She is always prompt with her service and ready for any questions. She is very professional and on top of her job. She cares about the overall well being of her clients and getting the job done!"
    },
    {
      name: "English P.",
      date: "2022-09-30",
      text: "After speaking with Carlos and Jason I was even more confident with making my decision to partner up with the DoHardMoney team. They made sure I had clarity on every aspect of their process. I’m very excited to take on this journey with the backing of this incredible organization."
    },
    {
      name: "Glen M.",
      date: "2022-09-30",
      text: "Mr.Brandon Whittemore is always in place and ready to assist in anyway he can. If he can not answer your question he got back with you in a timely manner..I'm satisfied with the service I have received"
    },
    {
      name: "Devin B.",
      date: "2022-09-30",
      text: "Brandon Whittemore has been very professional and responsive durning the renovation process."
    },
    {
      name: "Travis K.",
      date: "2022-09-30",
      text: "I’ve worked with Meaghan on several properties and has always been very responsive and an overall joy to work with."
    },
    {
      name: "Larry A.",
      date: "2022-09-30",
      text: "My Judy is the BEST. Judy has been very helpful during this process and a pleasure to talk to. Keep up the great job!! Judy is crushing it!!"
    },
    {
      name: "Trevor N.",
      date: "2022-09-30",
      text: "I have been working with Meaghan Meyer on several transactions recently. Meaghan has always been extremely attentive and helpful. She has proven to be an excellent resource moving through each real estate transaction. I look forward to working with Meaghan on more transactions in the future."
    },
    {
      name: "Kametra",
      date: "2022-09-30",
      text: "During one of the hardest times of my life after losing my husband recently, it was really pleasant to speak with Josh Harrell. My husband and I started this path together and I want to carry it on through. Josh was very encouraging the first time we spoke. Cheered me on to maintaining the goals my husband and I set. He remembered our first conversation which shows me that he does not see me as just another number but cared enough to listen and even remember the details of my concern. It’s not often you get that kind of response and I am so grateful to have chosen to work with DoHard. Thank you so much for your attentiveness Josh. I actually look forward to calling you with more questions."
    },
    {
      name: "Carla E.",
      date: "2022-09-30",
      text: "Working with Meaghan at Do Hard Money in the serving department was like a dream. Meaghan was very responsive and we closed the transaction in 2 weeks with no issues mostly due to her partnership."
    },
    {
      name: "Adrienne K.",
      date: "2022-09-30",
      text: "You've got questions, they have answers."
    },
    {
      name: "Rebecca A.",
      date: "2022-09-30",
      text: "Judy at Do Hard Money is amazing to work with!!!"
    },
    {
      name: "Chef J.",
      date: "2022-09-30",
      text: "Working with Do Hard Money on our 1st deal. Josh has done an excellent job answering all of our questions and reassuring us regarding the process and procedures. Thanks DHM!"
    },
    {
      name: "Ahmeen G.",
      date: "2022-09-30",
      text: "Very friendly people."
    },
    {
      name: "Bernard R.",
      date: "2021-09-30",
      text: "I had a question while I was in the loan application process so I typed it in the chat bar on the right side. Kaiti from Do Hard Money responded. She was patient and knowledgeable. I appreciate her taking the time to help me understand their process."
    },
    {
      name: "James R.",
      date: "2020-09-30",
      text: "I was very pleased with the professional support of Jessica Rodriguez."
    },
    {
      name: "Michael G.",
      date: "2019-10-01",
      text: "The level of support, information and tools I have been provided have been terrfic. I look forward to many profitable transactions using Do Hard Money!"
    },
    {
      name: "Xavier R.",
      date: "2019-10-01",
      text: "Best team, fast response and lowest fees."
    },
    {
      name: "Eric P.",
      date: "2019-10-01",
      text: "Brittni Chase has done a fantastic job in following up with me and my partner. She is always pleasant and cheerful and displays a positive attitude at all times!"
    },
    {
      name: "Meribeth P.",
      date: "2019-10-01",
      text: 'So far, everyone has been super friendly and helpful. I am still trying to figure out the "system," and watching all of the videos that I can, but hopefully will be ready to find and submit an offer on my first property soon! thanks for following up with me, looking forward to everything DHM has to offer.'
    },
    {
      name: "Khan T.",
      date: "2019-10-01",
      text: "Everything was great! They really know what they are talking about. They really hold your hand and walk you through everything. It's my first time and I'm more confident than ever."
    },
    {
      name: "Vincent F.",
      date: "2019-10-01",
      text: "An unexpected great conversation with Preston. He answered all my questions, and i had many! I cant wait to start doing business with DHM"
    },
    {
      name: "Damien J.",
      date: "2019-10-01",
      text: "Rochelle"
    },
    {
      name: "Steve R.",
      date: "2019-10-01",
      text: "Great and easy to do business. Thank you so much guy."
    },
    {
      name: "Brandon F.",
      date: "2019-10-01",
      text: "Rochelle was really great with helping me get reinstated as well as being very knowledgeable with answering all my questions. Thanks for everything."
    },
    {
      name: "Josh L.",
      date: "2019-10-01",
      text: "Just wonderful! Crystal help me understand how everything was done and answer all my question. A very good experience!"
    },
    {
      name: "Xxalreadytakenxx",
      date: "2019-10-01",
      text: "Very helpful and restored great faith in the dohardmoney organization. Thanks so much Carrie!!!"
    },
    {
      name: "Esteban H.",
      date: "2019-10-01",
      text: "Could not have been more helpful and courteous."
    },
    {
      name: "Jarrard P.",
      date: "2019-10-01",
      text: "Spoke with Preston on some preliminary info. He was very helpful and answered all my questions. Looking forward to the next phase of communication."
    },
    {
      name: "Keitia W.",
      date: "2019-10-01",
      text: "Carrie was great! She was very helpful with showing me all the tools and documents in the website."
    },
    {
      name: "Smart M.",
      date: "2019-10-01",
      text: "Rochelle was very attentive to my question and easily answered it for me."
    },
    {
      name: "Tracy B.",
      date: "2019-10-01",
      text: "All my questions were answered quickly. Very friendly to speak with."
    },
    {
      name: "Adell D.",
      date: "2019-10-01",
      text: "My experience with Carlos, was great he took his time with me answered all my questions. I am looking forward working with DHM."
    },
    {
      name: "Tyler P.",
      date: "2019-10-01",
      text: "Very professional and able to give the best advice for our situation. Highly recommended!"
    },
    {
      name: "Marcella U.",
      date: "2019-10-01",
      text: "Rochelle Archuletta was awesome today. She was patient with my questions and concerns and I am confident in moving forward with Do Hard Money as my rehab lender."
    },
    {
      name: "Terence R.",
      date: "2019-10-01",
      text: "Brittni & Don made me feel comfortable with going through with a deal. Thanks again for all your help"
    },
    {
      name: "Charles I.",
      date: "2019-10-01",
      text: "The folks at DHM have been very helpful in getting me setup in the process. Brittni, the rep I spoke with over the phone, was awesome! I had a lot of questions and Brittni was gracious enough to provide me with all the answers I was looking for. Brittni was very knowledgeable, patient, and a pleasure to speak with....Thanks again!"
    },
    {
      name: "Robert F.",
      date: "2019-10-01",
      text: "It was very informative"
    },
    {
      name: "Doug A.",
      date: "2019-10-01",
      text: "Carrie Duran walked me step by step through the process and answered any and all the questions I had. Very professional and friendly 10/10 would recommend."
    },
    {
      name: "Danielle S.",
      date: "2019-10-01",
      text: "DHM is amazing! The level of service received so far has been way above the bar that I'd initially set. I haven't even gone through my first rehab, but I feel so confident and prepared between the training/videos, calls and assistance from the member support team. Josh, Drew and Rochelle have been absolutely outstanding. You can't pay for service like this and I just couldn't even imagine dealing with anyone else. Excited to see what the future holds!"
    },
    {
      name: "Andrew J.",
      date: "2019-10-01",
      text: "Great info and a pleasure to speak with brittni chase! Highly recommended asset to DHM"
    },
    {
      name: "Hunter T.",
      date: "2019-10-01",
      text: "Micheal is very professional, and dealt with my demanding nature very well!"
    },
    {
      name: "Orlando R.",
      date: "2019-10-01",
      text: "Preston did a good job explaining the program. Looking forward to doing business when the time comes."
    },
    {
      name: "Steve J.",
      date: "2019-10-01",
      text: "Rochelle, was very helpful and willing to explain the process until you understand how everything works"
    },
    {
      name: "J R.",
      date: "2019-10-01",
      text: "Do Hard Money has been a great company to work with so far. They do a great job in explaining how the program works, how to get 100% financing, and how to find great deals. Brittni Chase was the person that I had the opportunity to speak with and she did a great job showing me how to maximize the use of the resources."
    },
    {
      name: "Elijah J.",
      date: "2019-10-01",
      text: "Brittany did a wonderful job with us."
    },
    {
      name: "Regina C.",
      date: "2019-10-01",
      text: "Zach is amazing to speak with. He knows his business and is very open and honest with answering questions. I am very excited to work with him."
    },
    {
      name: "Charles B.",
      date: "2019-10-01",
      text: "Perfect explanation of what the programs are . 123"
    },
    {
      name: "The A.",
      date: "2019-10-01",
      text: "She informed Me about both My loans and what were the next steps"
    },
    {
      name: "Tirzah M.",
      date: "2019-10-01",
      text: "My initial experience with Carlos was very positive. Looking forward to continuing with this process!"
    },
    {
      name: "Clifford C.",
      date: "2019-10-01",
      text: "Very good information"
    },
    {
      name: "Nikki M.",
      date: "2019-10-01",
      text: "Great experience. Looking forward to doing business with the company"
    },
    {
      name: "Ryan M.",
      date: "2019-10-01",
      text: "Zach explained everything to a T. Ready to get started!"
    },
    {
      name: "Damon W.",
      date: "2019-10-01",
      text: "Brittini Chase was very helpful and informative. I was a little nervous and concerned prior to our call. After speaking with Brittini, I am excited and look forward to using Do Hard Money."
    },
    {
      name: "Andrea S.",
      date: "2019-10-01",
      text: "It was a pleasure speaking to Rochelle Archuleta today! She took the time to answer my questions, as well as guide me through the process. Thanks Rochelle!"
    },
    {
      name: "Julio N.",
      date: "2019-10-01",
      text: "Carlos was professional and clear on my questions"
    },
    {
      name: "LaShawn W.",
      date: "2019-10-01",
      text: "Great attitude and easy to follow."
    },
    {
      name: "Israel W.",
      date: "2019-10-01",
      text: "Great Guy! Very informative! Thanks again Carlos!"
    },
    {
      name: "Libby R.",
      date: "2019-10-01",
      text: "Great information. Strait forward."
    },
    {
      name: "Shayna B.",
      date: "2019-10-01",
      text: "Nicole was great and explained details and structures offered for financing fix and flips."
    },
    {
      name: "Nate S.",
      date: "2019-10-01",
      text: "Preston was very professional, concise, and knowledgeable."
    },
    {
      name: "Shannon S.",
      date: "2019-10-01",
      text: "I spoke with Zach and he was extremely knowledgeable and personable regarding all my questions concerning Hard Money."
    },
    {
      name: "Camille W.",
      date: "2019-10-01",
      text: "Awesome job Rochelle. Thank you."
    },
    {
      name: "Edward W.",
      date: "2019-10-01",
      text: "Awesome guidance !!!"
    },
    {
      name: "Soria B.",
      date: "2019-10-01",
      text: "Seems like a great opportunity. Awesome ppl also, they shared a lot info on the process can’t wait to get started!"
    },
    {
      name: "Mark S.",
      date: "2019-10-01",
      text: "Polite, knowledgeable and genuine."
    },
    {
      name: "Fidel G.",
      date: "2019-10-01",
      text: "Rochelle was great!"
    },
    {
      name: "AB",
      date: "2019-10-01",
      text: "Very knowledgeable and communicative. Open to answer all questions. I enjoyed my time talking with Crystal."
    },
    {
      name: "Mike P.",
      date: "2019-10-01",
      text: "Nic was very friendly, pleasant and helpful during our call. She walked me through the estimator for a deal I’m working on and talked me through options. She also took the time to orient me on a later call that she kindly scheduled today. I had not been offered an orientation call up to this point. Anyway, Nic was awesome! I even stopped her part of the way through the orientation call to thank her for her kindness, demeanor and patience."
    },
    {
      name: "Ramon W.",
      date: "2019-10-01",
      text: "Excellent and precise very helpful"
    },
    {
      name: "Jimmy E.",
      date: "2019-10-01",
      text: "The conversation I had with Preston went well this morning, looking forward to being able to work with do hard money as I gear up to grow my investment business."
    },
    {
      name: "C H.",
      date: "2019-10-01",
      text: "Preston was very courteous and informative."
    },
    {
      name: "Nmbr2",
      date: "2019-10-01",
      text: "My questions were answered precisely leaving no open ends. Thank you very much. I look forward to doing business with you."
    },
    {
      name: "Starwars M.",
      date: "2019-10-01",
      text: "BrittnI Chase is just fantastic! She is friendly and extremely knowledgeable."
    },
    {
      name: "Rodney S.",
      date: "2019-10-01",
      text: "Rochelle Archuleta"
    },
    {
      name: "Alphonso J.",
      date: "2019-10-01",
      text: "Great Customer Service from Britti Chase"
    },
    {
      name: "Luxdoor N.",
      date: "2019-10-01",
      text: "Rochelle was fantastic"
    },
    {
      name: "Market G.",
      date: "2019-10-01",
      text: "Rochelle was very helpful today!"
    },
    {
      name: "Don C.",
      date: "2019-10-01",
      text: "Brittni was great. Assisted me right away."
    },
    {
      name: "Connor C.",
      date: "2019-10-01",
      text: "Brittni Chase is extremely helpful in answering my questions promptly. DHM is a great company to work with, I will be partnering with them as long as I can."
    },
    {
      name: "Craig S.",
      date: "2019-10-01",
      text: "Brittni Chase was great help today"
    },
    {
      name: "Semaj A.",
      date: "2019-10-01",
      text: "Today I had the pleasure of speaking with Brittni Chase from Do Hard Money and she was AMAZING !"
    },
    {
      name: "Nancy M.",
      date: "2019-10-01",
      text: "Rochelle is a wonderful help! She assists thoroughly and accurately! Definitely pleased she answered my call!"
    },
    {
      name: "Lisa H.",
      date: "2019-10-01",
      text: "I've read the many reviews on Better Business Bureau. I must say from personal experience that my experience has been a positive one. I haven't encountered any problems with communications or scams. They are truthful and upfront about the entire program regarding what it is and what it isn't. What it will do and what it will not do. They are also upfront regarding deals they will and will not fund and why as well as give many opportunities to earn back the initial investment. They are always open for questions, punctual, and quick to respond. I can definitely say DoHardMoney is not a SCAM!!! And no, I haven't made a lot of money or been paid to give this review. I'm still new and learning the program. I'm speaking from personal experience of actually being in the program at the present."
    },
    {
      name: "Orhan A.",
      date: "2019-10-01",
      text: "It was great experience my officer Stevie helped me at every stage. It is so important if you are not familiar with the system. Thank you Stevie."
    },
    {
      name: "Antwan K.",
      date: "2019-10-01",
      text: "Jaydon Hanson is VERY INFORMATIVE"
    },
    {
      name: "Nicole U.",
      date: "2019-10-01",
      text: "My Do Hard Money Rep was very helpful. Stevie Sturgill went through my initial loan application and told me step by step what I needed to correct. She was great and also offered her direct line to me to contact her whenever I have questions."
    },
    {
      name: "Erik M.",
      date: "2019-10-01",
      text: "Rochelle was awesome. Very eager to explain system and answered all my questions. Looking forward to talking to her again tomorrow to learn even more."
    },
    {
      name: "Teresa S.",
      date: "2019-10-01",
      text: "The team at Do Hard Money is fantastic! They are very quick to respond and make sure all of our questions are answered and processes understood. We are looking forward to working with them as we grow our business."
    },
    {
      name: "Richard C.",
      date: "2019-10-01",
      text: "It was enlightening &it addressed all of my questions"
    },
    {
      name: "Michelle P.",
      date: "2019-10-01",
      text: "We are very pleased with the Customer Service we get here at DHM. We are embarking on our journey and are glad to have these guys work with us! Shout out to Derrek and Rochelle Archuleta and your entire team!"
    },
    {
      name: "Marc R.",
      date: "2019-10-01",
      text: "Rochelle Archuleta is amazing. She worked hard on getting me the info I needed and her business personality is infectious."
    },
    {
      name: "Douglas B.",
      date: "2019-10-01",
      text: "Great and able to talk to, knowledgeable with her assistance"
    },
    {
      name: "TaShunia M.",
      date: "2019-10-01",
      text: 'Rochelle Archuleta provided a wealth of comfort and information while patiently answering my many questions on directions how to begin. With respect to her time I was attempting to rush off the phone and locate more information online. She continued to inform me until I was completely satisfied and void of questions. I was welcomed to the firm and I look forward to our future communications in part do to the team unity of same goal efforts exhibited during my introduction. "Thanks Rochelle."'
    },
    {
      name: "A A.",
      date: "2019-10-01",
      text: "Rochelle A. is very knowledgeable and she solved my issue the first time. I am very pleased with her customer service skills."
    },
    {
      name: "Janice M.",
      date: "2019-10-01",
      text: "Big shout to Jaydon Hanson for his expert advice and patience with me! He was great!!"
    },
    {
      name: "Colette D.",
      date: "2019-10-01",
      text: "Everyone is always so helpful and supportive whenever I call. Spoke with Nicole today, and she was very knowledgeable. Glad to be a member of DHM."
    },
    {
      name: "Renee A.",
      date: "2019-10-01",
      text: "Rochelle was very helpful and nice."
    },
    {
      name: "Tony C.",
      date: "2019-10-01",
      text: "Rochelle Archuleta is fantastic!! This was my second time interacting with her via Chat. Absolutely Five Star Support! She got me the information that I needed quickly. She is Sooo personalbe that I would rather interact with her via chat instead of my usual preference to discuss business with other companies by phone. Rochelle is why I LOVE DHM!!"
    },
    {
      name: "Jahda M.",
      date: "2019-10-01",
      text: "Barbara Anderson is very professional and a pleasure to work with!!!!!!!!"
    },
    {
      name: "Jilian R.",
      date: "2019-10-01",
      text: "This is a very easy company to work for. Barbara is always quick to respond to my questions and you get direct deposit payments quickly."
    },
    {
      name: "Susan B.",
      date: "2019-10-01",
      text: "the best and easiest company to do business with. always pay on time. LOVE WORKING WITH THIS COMPANY!!!"
    },
    {
      name: "Dante D.",
      date: "2019-10-01",
      text: "Very easy to work with and listens at my concerns! Very nice"
    },
    {
      name: "Joe C.",
      date: "2019-10-01",
      text: "Nic answered all my questions and helped put my mind at ease!"
    },
    {
      name: "Duke G.",
      date: "2019-10-01",
      text: "The assignments are reasonably close by. The instructions are clear and the website makes it easy to transmit the information requested. I appreciate the realistic turnaround times. The staff is easy to reach by email or phone. I look forward to the next assignment."
    },
    {
      name: "Rojas R.",
      date: "2019-10-01",
      text: "I had a great experience working with Jaydon Hanson and the Do Hard Money team. He was a great help in showing me how to find deals fast and very knowledgeable about real estate investing and funding. I will definitely recommend their team in the future."
    },
    {
      name: "Keith S.",
      date: "2019-10-01",
      text: "Rochelle was very knowledgeable and helpful as she patiently explained the process and the software. DHM gives you everything you need to succeed."
    },
    {
      name: "The G.",
      date: "2019-10-01",
      text: "Stefani is a GREAT Account Advisor - she literally emailed me a deal that she could of passed to someone else. This speaks VOLUMES!!! Love DHM team!"
    },
    {
      name: "Diallo P.",
      date: "2019-10-01",
      text: "Every question that I asked the representative(Stevie Sturgill) was answered clearly and he was very knowledgeable about how the company conducts its business. I will definitely recommend Do Hard Money for any projects you may have."
    },
    {
      name: "Joan S.",
      date: "2019-10-01",
      text: "Rochelle Archuleta provided me with great customer service today."
    },
    {
      name: "William K.",
      date: "2019-10-01",
      text: "So far so good"
    },
    {
      name: "James D.",
      date: "2019-10-01",
      text: "Very helpful and friendly staff!"
    },
    {
      name: "Ronald S.",
      date: "2019-10-01",
      text: "I spoke with Carlos, who was very polite,courteou and professional. Answered all of my questions."
    },
    {
      name: "P10 I.",
      date: "2019-10-01",
      text: "Sean Smith from Do Hard Money was awesome. He was very detailed and made sure everything was done properly."
    },
    {
      name: "Tamesia E.",
      date: "2019-10-01",
      text: "Steve was awesome. Answered my questions with no problem."
    },
    {
      name: "Aaron S.",
      date: "2019-10-01",
      text: "Preston was very helpful and answered my questions very well. And have me some great ideas to where I need to be. Thank you"
    },
    {
      name: "Georgean G.",
      date: "2019-10-01",
      text: "Great Service"
    },
    {
      name: "Andrea B.",
      date: "2019-10-01",
      text: "Nicole was very helpful in answering all of the questions that I had been the extra one I had after our phone call. She was warm and welcoming. At the conclusion of our phone conversation I felt comfortable with being able to return with proper preparation."
    },
    {
      name: "Sgt B.",
      date: "2019-10-01",
      text: "They have great customer service. Very patient and courteous, willing to answer any and all questions you may have. I spent about 13 mins on the phone with a representative, who was very articulate and broke everything down for me to understand how the process work and what I have to do in order to get started. Outstanding service. Service like this is appreciated and goes a long way."
    },
    {
      name: "Tyrone M.",
      date: "2019-10-01",
      text: "Sean Smith was very informative while guiding me through the loan process. He was very patient and considerate. I lool forward to doing lots of business in the future with Do hard money...."
    },
    {
      name: "Don C.",
      date: "2019-10-01",
      text: "Sean Customerservice is awesome. Always follow up and makes good on his word"
    },
    {
      name: "A&t C.",
      date: "2019-10-01",
      text: "As I'm learning the process.. Rashelle has been extremely helpful.. i really hope i spelled her name right.."
    },
    {
      name: "Admin",
      date: "2019-10-01",
      text: "This is my second project with DHM and I must say they have really help me make my Realestate investing dreams come true. My loan representative Sean Smith has played a very important role in the process. Sean is pacient, personable, and really has taken the time to guide me alone with the process. If your looking to get funding for your realestate investing deal DHM & Sean Smith really help me, and I hope they can help you too."
    },
    {
      name: "Waine J.",
      date: "2019-10-01",
      text: "Working with Sean and DoHardMoney has been awesome he's very helpful and resourceful. I plan on continuing my business with DoHardMoney and one reason is because all the support."
    },
    {
      name: "Lavon M.",
      date: "2019-10-01",
      text: "Rochelle was Super GREAT and very informative!!!!!!!!!!!!!"
    },
    {
      name: "Victoria M.",
      date: "2019-10-01",
      text: "Rochelle Archuleta on staff is very knowledgable and helpful"
    },
    {
      name: "Chris H.",
      date: "2019-10-01",
      text: "I couldn't have asked for a better company to work with on my first deal, or any deal for that matter. And my account manager, Stevie has been amazing throughout it all. Their process makes sure that everyone involved gets a great deal all the way around. I can't say enough good things about them. I will be working with Do Hard Money on all of my future deals."
    },
    {
      name: "Kelvin F.",
      date: "2018-10-01",
      text: "I have the opportunity of working with Jaydon Hanson and his team of Account Advisors Nicole and Rochelle. They've been great! I look forward to longevity and much more success. Thank you guys!!"
    },
    {
      name: "Tony B.",
      date: "2018-10-01",
      text: "Rochelle archuleta"
    },
    {
      name: "C P.",
      date: "2018-10-01",
      text: "Very helpful!! Walked me step-by-step through the new Investor's Edge Program!! Excellent customer service!"
    },
    {
      name: "Tonya",
      date: "2018-10-01",
      text: "Rochelle was awesome! looking forward to the process!"
    },
    {
      name: "Adalberto A.",
      date: "2018-10-01",
      text: "thank you very much for getting me on track to start my business."
    },
    {
      name: "JC M.",
      date: "2018-10-01",
      text: "Answered all of my questions. I now feel ready to commence my real estate investing journey."
    },
    {
      name: "Lacho F.",
      date: "2018-10-01",
      text: "The only thing missing if a way for me to give her 10 stars for her excellent performance."
    },
    {
      name: "Warren M.",
      date: "2018-10-01",
      text: "Rochelle is a seasoned professional who is extremely informative, patient, and giving to help contribute to our combined goals for success. Thank you greatly Rochelle."
    },
    {
      name: "Markeen V.",
      date: "2018-10-01",
      text: "Rochelle Archuleta was kind, courteous and professional. She answered all of my questions and also filled me in on all of the new features they have for members!"
    },
    {
      name: "Steven S.",
      date: "2018-10-01",
      text: "Nicole was incredibly helpful in explaining the company's mission and general workings."
    },
    {
      name: "Matthew F.",
      date: "2018-10-01",
      text: "I highly recommend working with Stevie Sturgill at Do Hard Money. She is very knowledgeable and quick to respond to questions. After discussing my opportunity and going through the application process we had a submission and inspection ordered the same day. Looking forward to working with her in the future."
    },
    {
      name: "Lamont C.",
      date: "2018-10-01",
      text: "Carlos was very helpful in answering my questions and providing information"
    },
    {
      name: "Layci L.",
      date: "2018-10-01",
      text: "Rochelle was definitely a pleasure to speak with. She made sure to stop to make sure I understood all that she was explaining. She also reassured me that I could call/chat with the company at any time if I needed guidance. I look forward to speaking with her in the near future."
    },
    {
      name: "Bud E.",
      date: "2018-10-01",
      text: "Rochelle is a sweetheart and extremely helpful. She sent everything as promised within minutes of hanging up."
    },
    {
      name: "Chris K.",
      date: "2018-10-01",
      text: "Rochelle was wonderful, answered all my questions and were very knowledgeable. Looking forward to doing business with DHM."
    },
    {
      name: "John J.",
      date: "2018-10-01",
      text: "Rochelle Archuleta was very helpful."
    },
    {
      name: "Al Y.",
      date: "2018-10-01",
      text: "Stefani S. was a wonderful agent. She explained all the ins and outs exceptionally well. Very helpful indeed. I look forward to working with Do Hard Money. Thank you."
    },
    {
      name: "Tahir O.",
      date: "2018-10-01",
      text: "Sean Smith is a wealth of information. Very knowledgable about his craft and personable. Do Hard Money is fortunate to have a man like Sean on their team!"
    },
    {
      name: "Bill R.",
      date: "2018-10-01",
      text: "Rochelle was very thorough and patiently helpful."
    },
    {
      name: "Bill Z.",
      date: "2018-10-01",
      text: "Jaydon was a great help in explaining the checklist of items"
    },
    {
      name: "Amber B.",
      date: "2018-10-01",
      text: "Jaydon and the team have been extremely helpful!"
    },
    {
      name: "Carl J.",
      date: "2018-10-01",
      text: "Rochelle was great, very informative and professional"
    },
    {
      name: "Trading T.",
      date: "2018-10-01",
      text: "Rochelle Archuletta is a reassuring member of their organization. She was very patient with me as she answered my questions about private money lending."
    },
    {
      name: "Judie",
      date: "2018-10-01",
      text: "I received my first call from Zac today. He was very nice, not to pushy at all. Answered all my questions with no hesitation and was very informed. Looking forward to reviewing the other information he sent."
    },
    {
      name: "Eppy F.",
      date: "2018-10-01",
      text: "Mr. Norman was very HELPFUL in all the questions and concerns had. I look forward in working with Mr. Norman soon."
    },
    {
      name: "Tyson R.",
      date: "2018-10-01",
      text: "Enjoyed our chat, very professional and informative. I will be contacting Carlos at Do Hard Money for my next step."
    },
    {
      name: "Drea J.",
      date: "2018-10-01",
      text: "Rochelle Archuleta has been very helpful through this entire process."
    },
    {
      name: "Dr. K.",
      date: "2018-10-01",
      text: "Herman"
    },
    {
      name: "Arnetta B.",
      date: "2018-10-01",
      text: "Rochelle was an awesome help! She was very knowledgeable when it comes to Do Hard Money! I am excited to continue working with Do Hard Money"
    },
    {
      name: "Montina W.",
      date: "2018-10-01",
      text: "all of my questions were answered in a timely manner"
    },
    {
      name: "James A.",
      date: "2018-10-01",
      text: "My advisor Clay Norman was more than professional it's like he inspired me even more to push to get my career going in fix and flips. I appreciate the words of encouragement so just gotta get to the goal of what I need to get started in which I will."
    },
    {
      name: "Toure H.",
      date: "2018-10-01",
      text: "My name is Tourè henderson founder of wealth of society and QC CONSTRUCTION LLC...ect......I honestly in the thought that it was too good to be true however after working with people like Jaden and Nicole I understand how dedicated the team is when I speak to anybody even from the last conversation I spoke to Rochelle and she connected me directing lead to Shawn Smith my senior advisor he is more than amazing he is very on top of things... I mean these guys make time out of their day outside of their appointments to make sure that we close on deals... Do hard money is the absolute best hard money lender out there they teach you what you need to know to make the money and they help you along the way thank you everyone and thank you most of all mr. Sean Smith"
    },
    {
      name: "Noble M.",
      date: "2018-10-01",
      text: "First I want to say thank you again to Clay what amazing guy to talk to you and find out all the details I need. Thx again"
    },
    {
      name: "Kwame B.",
      date: "2018-10-01",
      text: "Rochelle Archuleta was awesome; she answered my questions clearly and in a professional manner in the integration call...!"
    },
    {
      name: "Wade",
      date: "2018-10-01",
      text: "Answered every question flawlessly. Awesome support. All companies should model his customer service and professionalism."
    },
    {
      name: "Michele R.",
      date: "2018-10-01",
      text: "I had a good conversation with Stefani S. She was very helpful at explaining the loan process."
    },
    {
      name: "Darryl W.",
      date: "2018-10-01",
      text: "Jaydon and the team are amazing. Do hard money makes the hard part easy. I would highly recommend them to anyone!"
    },
    {
      name: "Ebonne D.",
      date: "2018-10-01",
      text: "As usual, my questions and concerns are always answered promptly. I love the feel of being able to recognize the person whom I chat with, and I am sure they remember me, lol"
    },
    {
      name: "Torrian J.",
      date: "2018-10-01",
      text: "Rochelle was very informative, friendly and professional. She delivered quality customer service and was quite knowledgeable as she was able to answer all of my questions. Since becoming a customer, the team at Do Hard Money has been nothing but a great support system."
    },
    {
      name: "Latasha B.",
      date: "2018-10-01",
      text: "Sean Smith, was great to work with in my process of trying to get my loan for a home im trying to acquire. Even though there were a few bumps in the road due to an evaluator taking their time, the entire time Sean kept me calm. So hopefully now that just about everything is in we will be going smooth. Fingers crossed. But over all this is an amazing company thats willing to always help where they can. Just stay strong, be focus and know they will work with you."
    },
    {
      name: "Andrew S.",
      date: "2018-10-01",
      text: "Derek Deppe was very responsive and helpful with his knowledge and answers."
    },
    {
      name: "Tony S.",
      date: "2018-10-01",
      text: "Great company with great staff. I am new to real estate investing and they have always been professional and willing to answer any questions I have, no matter how silly they may seem. I recommend DoHardMoney to anyone looking to get into the real estate game."
    },
    {
      name: "Rare B.",
      date: "2018-10-01",
      text: "Derek Deppe was great and gave a lot of helpful info !"
    },
    {
      name: "Dna C.",
      date: "2018-10-01",
      text: "Stefani Sanchez from DHM is a great agent and has worked thoroughly with me to make my process run simple and smooth"
    },
    {
      name: "Realtor Y.",
      date: "2018-10-01",
      text: "Stevie was very helpful and quick to respond. This is a great added feature"
    },
    {
      name: "London B.",
      date: "2018-10-01",
      text: "Rochelle Archuletta was awesome. Nice and knowledgeable."
    },
    {
      name: "Yen C.",
      date: "2018-10-01",
      text: "Derek D. is very knowledgeable and helpful. He answered all of my questions. If everyone from Do Hard Money is as nice and honest as he is I would love to do business with this company. I am excited about the opportunity to work with them."
    },
    {
      name: "Myoshi S.",
      date: "2018-10-01",
      text: "Rochelle Archuleta"
    },
    {
      name: "Jason B.",
      date: "2018-10-01",
      text: "Customer service is wonderful! Very kind and answered most my questions. Looking to do business with this company."
    },
    {
      name: "Andrew S.",
      date: "2018-10-01",
      text: "Helpful,and straight to the point."
    },
    {
      name: "Frenchena G.",
      date: "2018-10-01",
      text: "Rochelle Archuleta was very helpful in answering my questions about financing."
    },
    {
      name: "Monica M.",
      date: "2018-10-01",
      text: "Nicole Cronin was super helpful and easy to talk with, I would highly recommend her to anyone needing assistance."
    },
    {
      name: "Joseph Y.",
      date: "2018-10-01",
      text: "Rochelle was very helpful with my issues concerning small print on a pre-approval form. Thanks Rochelle"
    },
    {
      name: "Saiheem S.",
      date: "2018-10-01",
      text: "Very professional work and Sean Smith was very professional and polite"
    },
    {
      name: "Darrell D.",
      date: "2018-10-01",
      text: "Just joined DHM and am very please how things have been so far. They seem knowledgeable and are willing to help you step by step. Rochelle was very nice to talk to , professional and courteous to my needs. I definitely recommend DHM weather your new to investing or a pro."
    },
    {
      name: "Angela B.",
      date: "2018-10-01",
      text: "Rochelle, Carlos an Drew have all been so helpful along the way. We look forward to building this relationship!!"
    },
    {
      name: "Mayrose F.",
      date: "2018-10-01",
      text: "Rochelle Archuleta"
    },
    {
      name: "Jerome H.",
      date: "2018-10-01",
      text: "Rochelle was a great help today. I look forward to working with her more."
    },
    {
      name: "Lois C.",
      date: "2018-10-01",
      text: "Rochelle was awesome! She was very friendly and knowledgeable. Rochelle answered my questions quickly and expertly. She took me through the process thoroughly. Although I have had experience in Australia I have none in the US and feeling much like a newbie she put me at ease and made me feel confident for my future. Great customer relations!"
    },
    {
      name: "Lotosha J.",
      date: "2018-10-01",
      text: "Rochelle Archuleta was patient and informative on the live chat"
    },
    {
      name: "Steve D.",
      date: "2018-10-01",
      text: "The support team at Do Hard Money are extremely quick and responsive. Rochelle Archuleta just helped me reschedule a call with my support lead with little time expended. Thanks, Rochelle!"
    },
    {
      name: "Tishawn B.",
      date: "2018-10-01",
      text: "Mr Stevie was great at answering my questions and providing the information that I needed. Great customer service"
    },
    {
      name: "Emmanuel A.",
      date: "2018-10-01",
      text: "Rochelle was nice and courteous! I enjoyed talking to her 👍🏿 …"
    },
    {
      name: "Mark J.",
      date: "2018-10-01",
      text: "BEST BPO COMPANY W/O A DOUBT"
    },
    {
      name: "Karl I.",
      date: "2018-10-01",
      text: "ROCHELLE ARCHULETA ALSO EXCELLENT CUSTOMER SERVICE!!! TEN STARS!!!"
    },
    {
      name: "Mary H.",
      date: "2018-10-01",
      text: "I am a Real Estate Broker In Shreveport, La. I have been doing business with Do Hard Money for several years now, just wanted to put it out there this is a great company, I have been doing BPO'S for Barbara Anderson, absolute the best, so kind, helpful if you have any kind of questions or problems, very prompt to help, and for my services I have always been paid, they direct deposit right into my account, not like companies in the past."
    },
    {
      name: "Linda B.",
      date: "2018-10-01",
      text: "Hi Derek Deppe was very helpful. Thanks"
    },
    {
      name: "Adrian L.",
      date: "2018-10-01",
      text: "Derek Deppe was such a great help! he really helped me understand how easy the process really is! Thanks, Derek!"
    },
    {
      name: "Maria M.",
      date: "2018-10-01",
      text: "I was searching for information on how to find hard money to buy a property and Rochelle Archuleta was very professional by providing me with some information and asked for my name and number to be contacted by an investment adviser. Thank you Rochelle."
    },
    {
      name: "Thomas G.",
      date: "2018-10-01",
      text: "Good knowledge and very helpful"
    },
    {
      name: "Renay C.",
      date: "2018-10-01",
      text: "Derek Deppo was very informative."
    },
    {
      name: "Irene C.",
      date: "2018-10-01",
      text: "Great experience with Rochelle Archuleta. As any new person to real estate investment it can be over whelming and nerve wrecking. From my first call with Rochelle she was able to answer all my questions patiently and she also provided me additional information to review in order to get more detailed answers based on my research on Do Hard. With her help I was also able to find out that I had more options on how to approach the deal and not as limited as I thought. I appreciate her patience and ability to make things so much easier along the way to better success."
    },
    {
      name: "Corey B.",
      date: "2018-10-01",
      text: "I Do Evaluations with Do Hard Money and they are a great company.They have a thorough process, and when doing work for them they pay quickly one the job is complete. I would recommend Do Hard Money to anyone looking for a lender or for any experienced knowledgeable Real Estate Broker wanting to take on Extra work as an Evaluator."
    },
    {
      name: "Dkr K.",
      date: "2018-10-01",
      text: "Rochelle Archuletta , from the first hello to the end Rochelle very pleasant helpful patience , enjoy working with her she help my difficulties with the Website she fixed what needed to be corrected Also waited for me login another device . Rochelle pleasant Customer Service skills was very refreshing made my day !!!"
    },
    {
      name: "Gary S.",
      date: "2018-10-01",
      text: "I would like to mention that Stevie Sturgill was VERY HELPFUL in assisting me with questions and very encouraging to get started. Thanks Stevie, you're the best!"
    },
    {
      name: "Philip D.",
      date: "2018-10-01",
      text: "Working with do hard money has been a smooth process , stefani has been a great person too work with , always providing quick answers too all my questions . Looking foward too doing more deals"
    },
    {
      name: "Cantu H.",
      date: "2018-10-01",
      text: "Just started my journey with Do Hard Money and already Im impressed with their support and team work to help get new investors such as myself the backing and knowledge to be able to make deals happen! Rochelle Archuleta was awesome at explaining my package and what I had access to. Great company and Looking forward to doing many deals with them!"
    },
    {
      name: "Andrew B.",
      date: "2018-10-01",
      text: "Rochelle, at DoHardMoney, provided an excellent synopsis of the DoHardMoney services. Rochelle was enthusiastic, warm, and welcoming when presenting information which I thoroughly appreciated. Thanks for the Fabulous service Rochelle!"
    },
    {
      name: "Zachary H.",
      date: "2018-10-01",
      text: "I am a Charlotte, NC Realtor who has completed valuations for this company. The company is very professional and organized. Moreover the valuation process is smooth and efficient. Barbara has been a joy to work with each time."
    },
    {
      name: "Tammy P.",
      date: "2018-10-01",
      text: "Great program!!! Stephanie S provided valuable information that will help me go far. I believe the wholesale opportunity is just as great as fix and flips. Looking forward to a fruitful relationship."
    },
    {
      name: "Gary M.",
      date: "2018-10-01",
      text: "Always top notch great hard money lender so easy to work with! Money when u need it"
    },
    {
      name: "Derek G.",
      date: "2018-10-01",
      text: "Ranieca Snipes Was a great customer rep. Very respectful and is more then willing to do anything she capable of doing for you."
    },
    {
      name: "Essential A.",
      date: "2018-10-01",
      text: "Great info. Quick approval. Thorough resources. So far so good. Just worked with Derek Deppe to get some info cleared up. He was above and beyond helpful."
    },
    {
      name: "Seun A.",
      date: "2018-10-01",
      text: "Stevie walked me through their loan application process step by step. They really go the extra mile to make sure your deal is well thought through. She was very knowledgeable and answered all my questions. Thanks Stevie!"
    },
    {
      name: "R. I.",
      date: "2018-10-01",
      text: "Derek Deppe informatively answered every question. No wait, no run-around."
    },
    {
      name: "Phillip J.",
      date: "2018-10-01",
      text: "Rochelle Archuleta. Great information. I'm very thankful for the assistance in received."
    },
    {
      name: "Towanna H.",
      date: "2018-10-01",
      text: "Rochelle Archuletta answered all of my questions and was very polite"
    },
    {
      name: "Linda A.",
      date: "2018-10-01",
      text: "All of my questions were answered promptly and thoroughly thank you!!!!"
    },
    {
      name: "Author T.",
      date: "2018-10-01",
      text: "I have been working with DoHardMoney and Barbara Anderson as a property valuator for quite some time now and my experience has been great. Upon initial contact, Barbara was very inviting and very transparent on what was expected of me as a valuator and what I should expect in return from DoHardMoney, which I highly respect. Barbara has always been readily available to me when I have had questions regarding the valuation process or issues with completing my report. Payment is always prompt and I appreciate the professional relationship that we have developed, and I look forward to many more years with this company."
    },
    {
      name: "Maurice N.",
      date: "2018-10-01",
      text: "Very responsive, great to work with. Thanks Barbara"
    },
    {
      name: "Jake D.",
      date: "2018-10-01",
      text: "Derek Deppe was very helpful on the chat feature. I haven't closed any deals yet, but the customer service has been on point."
    },
    {
      name: "Amy B.",
      date: "2018-10-01",
      text: "Ranieca Snipes was super helpful and gave great customer service!"
    },
    {
      name: "Asser M.",
      date: "2018-10-01",
      text: "Very helpful & courteous customer service."
    },
    {
      name: "Kamaria J.",
      date: "2018-10-01",
      text: "stevie sturgill, quick response"
    },
    {
      name: "We F.",
      date: "2018-10-01",
      text: "Ranieca answered all my questions quickly and gave me some hope."
    },
    {
      name: "Míke F.",
      date: "2018-10-01",
      text: "Do Hard Money is a TOP NOTCH organization!! They truly review all aspects of investment properties to insure the investment is sound.The staff is nothing short of AWESOME and extremely PROFESSIONAL. They answer all your questions completely, respectfully and intelligently to help you make the very best decisions possible. I have been a career Real Estate Professional for 19 years now and I Love Do Hard Money!!"
    },
    {
      name: "Jennifer A.",
      date: "2018-10-01",
      text: "Rochelle Archuleta, very quick to respond and knowledgeable!"
    },
    {
      name: "Shawn M.",
      date: "2018-10-01",
      text: "Ranieca was knowledgeable and the response was quick. All questions was answered promptly. Great Customer Service."
    },
    {
      name: "Garrett D.",
      date: "2018-10-01",
      text: "Go nicole"
    },
    {
      name: "V E.",
      date: "2018-10-01",
      text: "Derek was excellent in providing feedback and information"
    },
    {
      name: "Brenton D.",
      date: "2018-10-01",
      text: "Rochelle was great !!"
    },
    {
      name: "Rjk L.",
      date: "2018-10-01",
      text: "Derek Dreppe was very helpful and knowledgible looking forward to completing my project"
    },
    {
      name: "Donald G.",
      date: "2018-10-01",
      text: "Do Hard Money is the best company. They understand the nuances of doing broker price opinions, they are flexible with deadlines and they pay promptly. The employees, especially Barbara Anderson are very helpful and understanding."
    },
    {
      name: "Kevin D.",
      date: "2018-10-01",
      text: "Rochelle Archuleta was very helpful today!"
    },
    {
      name: "Paula H.",
      date: "2018-10-01",
      text: "Rochelle Archuleta has been a big help in working thru the system. She seams to know and do her job well."
    },
    {
      name: "Ti B.",
      date: "2018-10-01",
      text: "Derek Deppe did a great job supplying me with needed information."
    },
    {
      name: "GL",
      date: "2018-10-01",
      text: "Ranieca Snipes did an excellent job of providing the relevant information that I needed during my integration call. She was patient with me as I asked questions, and she genuinely wanted to make sure that I understood everything that was being discussed."
    },
    {
      name: "Invest A.",
      date: "2018-10-01",
      text: "While I have never used Do Hard Money for lending purposes, I have worked with their staff to conduct several BPOs. Their staff is always helpful and quick to respond, and their online portal makes it easy to complete the BPOs."
    },
    {
      name: "Daniel B.",
      date: "2018-10-01",
      text: "The information and material provided is beyond helpful and second to none. For someone who is just starting out this is the best program you can involve yourself in. The customer service is even better from Leo to Mike and Rochelle they walk you through the process give you a comfortable feeling about getting involved and letting you know you’re not alone in the process. Thank you for everything guys."
    },
    {
      name: "Katlyn P.",
      date: "2018-10-01",
      text: "I received exelellent customer service from David Peppe just an all around great experience he was very knowledgeable and quick and very detailed with all of his answers to my questions!"
    },
    {
      name: "Eddie R.",
      date: "2018-10-01",
      text: "Immediately answered questions and was very polite. I hope I get Nicole again when I need to chat."
    },
    {
      name: "Hannah H.",
      date: "2018-10-01",
      text: "Weston M was super friendly. This seems like it’s going to be a great fit for our company. Waiting to find out if we are approved, but we look forward to working with them. Great service so far."
    },
    {
      name: "Vince L.",
      date: "2018-10-01",
      text: "Nicole, she's great to work with and very knowledable"
    },
    {
      name: "Michael N.",
      date: "2018-10-01",
      text: "I've found this company to be very straight forward and professional. It's a fine option for investors seeking funding for real estate deals."
    },
    {
      name: "Kenya W.",
      date: "2018-10-01",
      text: "Awesome experience. I have been working with Do Hard Money for the past 9 years and refer all my clients for their hard money lending needs. Sheila in underwriting is superb. Her attention to detail and friendly customer service skills keeps clients coming back to get their deals done. Do Hard works for new and experienced investors who are seeking an alternative source to fund deals."
    },
    {
      name: "Fly G.",
      date: "2018-10-01",
      text: "To all investors, these guys are the real deal. They helped with clarity throughout the process of my transaction! Thanks to Weston and the team!"
    },
    {
      name: "Bailey W.",
      date: "2018-10-01",
      text: "Barbara is great! Very friendly, responsive, and helpful!"
    },
    {
      name: "Tommy B.",
      date: "2018-10-01",
      text: "Derek answered all my questions, Glad the market opened up for the DC market"
    },
    {
      name: "Stacie B.",
      date: "2018-10-01",
      text: "Quick processing times, I do BPO work for Do Hard Money....easy reports, quick follow up And turn around times"
    },
    {
      name: "Henry M.",
      date: "2018-10-01",
      text: "Everything was easy and the assistance was professional and courteous! The representative I worked with was Derek Deppe."
    },
    {
      name: "Josephine U.",
      date: "2018-10-01",
      text: "Stevie Sturgill was very helpful in clarifying questions when I was using the deal analysis tool"
    },
    {
      name: "Lisa B.",
      date: "2018-10-01",
      text: "Great Customer service from Rae today !"
    },
    {
      name: "Lucy H.",
      date: "2018-10-01",
      text: "today Derek D. was really good thank"
    },
    {
      name: "Gassabian B.",
      date: "2018-10-01",
      text: "Nicole has been absolutely amazing in answering all my questions. A very positive experience over online chat"
    },
    {
      name: "Nether W.",
      date: "2018-10-01",
      text: "VERY QUICK AND EXCELENT."
    },
    {
      name: "Nayasha M.",
      date: "2018-10-01",
      text: "Steve Sturgill was amazing help and he provided me with clear and prompt responses!!!"
    },
    {
      name: "Molinda M.",
      date: "2018-10-01",
      text: "Stevie Sturgill has got the skills to calm a person's nerves that overflowing like water in a cup!! She's awesome!!! She's definitely got the skills for customer service and the knowledge of a pro of any sort!!! SHE AWESOME!!!"
    },
    {
      name: "Phyllis H.",
      date: "2018-10-01",
      text: "Just finished chatting with Stevie Sturgill. He provided excellent customer service. Answered all my questions and was able to assist me in processing document that I was not able to open online. Thanks for his service I am on my way with this deal."
    },
    {
      name: "Mariah L.",
      date: "2018-10-01",
      text: "I'm excited to start working with this company. I had so many questions but Mr. Steve Sturgill answered my questions efficiently and was very informative. Couldn't have asked for a better experience."
    },
    {
      name: "Israel U.",
      date: "2018-10-01",
      text: "Talking to Derek was very useful. I wanted things a bit more clear and he sure answered my questions and concerns to help me get a better understanding on how to go about the whole process. Thanks again and hope to make this deal happen!"
    },
    {
      name: "Gerardo V.",
      date: "2018-10-01",
      text: "Ryan and all of his team are awesome, they are very professional, they been helping me every step of the way to achieve my success. Thanks to all of you."
    },
    {
      name: "Deanne L.",
      date: "2018-10-01",
      text: "Nicole was amazing.She answered all my question in a timely manner."
    },
    {
      name: "John S.",
      date: "2018-10-01",
      text: "A friend of mine sent me a link to an article about DHM. I spent some time reviewing their funding options and was very impressed with all they have to offer. I also like the live chat feature. Nicole Cronin was the agent on that chat and took time to look into some details for me that were not simple to answer. Excellent customer service. Thanks!"
    },
    {
      name: "Gwendolyn E.",
      date: "2018-10-01",
      text: "great customer service"
    },
    {
      name: "Russell W.",
      date: "2018-10-01",
      text: "Weston M was great he understand what I needed to get me started on my loan to close into time, my first DHM loan, I am looking forward to it.. Thank you Weston.."
    },
    {
      name: "Nicolas D.",
      date: "2018-10-01",
      text: "Nicole Cronin was very helpful. I had some more detailed questions about the application phase of getting my contractor vetted. She encourages more questions which allows me to address all of the concerns I have in the loan application process. It allows me to communicate effectively with my contractor and agent."
    },
    {
      name: "Jus 0.",
      date: "2018-10-01",
      text: "Do Hard Money is a excellent company, they where understanding and very professional. I will definitely do business with them again in the near future. By using there System I was able to make awesome profits of cash . From the start to finish they where helpful in every step of the way of the deal I closed . I would recommend this company to any one who is starting out in investmenting in Property. Do Hard Money is a very understanding and flexible company to work with. I started with absolutely nothing and they help me build extra revenue to help me support me an my family I’m forever grateful for the opportunity to have done business with do hard money . They where able to help me compete in a big market like chicago with people who where more experience with more money . Listen to me an please choose do hard money for your financial needs ."
    },
    {
      name: "Dr P.",
      date: "2018-10-01",
      text: "Ranieca Snipes! Way to Go! She's kind and explained things gingerly. I felt comfortable chatting. You can tell when someone is nice even through texting. Nice going Ranieca. Five Star all the way!!! Good Karma!"
    },
    {
      name: "Dave G.",
      date: "2018-10-01",
      text: "Ranieca quickly and efficiently addressed my concerns in Chat mode. Definitely makes me want to proceed to do business here."
    },
    {
      name: "Tory M.",
      date: "2018-10-01",
      text: "Ranieca Snipes took her time with me, answered all my questions, gave me alot of helpful information and explained things so clearly. I can't wait to get started thank yoi.."
    },
    {
      name: "Meztli H.",
      date: "2018-10-01",
      text: "reaieca was great!"
    },
    {
      name: "Marvin T.",
      date: "2018-10-01",
      text: "Do Hard Money is absolutely GREAT!! I am closing my first deal with them and i have only been with them for 2 weeks!! If your looking to do your first flip or even if you are currently doing fix and flips, DHM is a perfect organization to leverage with no money down and maximize your profit. I was very fortunate to work with a guy by the name of Weston and he had EXCELLENT customer service, he walked me through every step of the process and was always there anytime my partner and I had a question that needed to be asked. I would recommend this company to anyone within the Real estate field, first time flippers or even seasoned. Their company is very organized and time proficient when it comes to getting deals closed and thats key!"
    },
    {
      name: "Wendell W.",
      date: "2018-10-01",
      text: "The first part of their process is quick and easy. The online rep was pleasant and very quick.I appreciated that."
    },
    {
      name: "Taheerah A.",
      date: "2018-10-01",
      text: "The chat option is awesome! You are able to have questions answered quickly and professionally."
    },
    {
      name: "Hakeem S.",
      date: "2018-10-01",
      text: "Stevie Sturgill was great! He answered all my questions with ease!"
    },
    {
      name: "Leon C.",
      date: "2018-10-01",
      text: "Renieca is always very helpful and prompt in assisting me with all of my issues. THANK YOU FOR BEING AWESOME!!!!!!!!"
    },
    {
      name: "66x12",
      date: "2018-10-01",
      text: "Ranieca was very professional and answered all my questions in a timely manner. Enjoyed talking with her."
    },
    {
      name: "Kimberly T.",
      date: "2018-10-01",
      text: "Provided very helpful information with obvious knowledge of procedures; and did so in a friendly professional manner."
    },
    {
      name: "Reliable B.",
      date: "2018-10-01",
      text: "Ranieca Snipes provided me with excellent customer service"
    },
    {
      name: "Molinda M.",
      date: "2018-10-01",
      text: "I had another great consultation today with representative, Stevie Sturgill. Stevie is really a great help!!! After Stevie took the time to help me understand my dilemma, tears actually came because I felt more confident in what I was doing and what I was to do as a next step. I mean if you only knew how much money I have invested over the years to get into the business, you'd understand the tears. I believe I have finally found a great team of people to work with that can help me achieve my goals!!! Thanks again Stevie!"
    },
    {
      name: "Luis I.",
      date: "2018-10-01",
      text: "Ranieca helped me greatly, and answered all of my questions. I will definitely explore using DHM again because of her."
    },
    {
      name: "Harold B.",
      date: "2018-10-01",
      text: "I spoke with Stefani and she was very informative and knowledgeable. She returned my phone calls the same day and responded to any and all emails. Stefani is a huge asset to your company and I look forward to working with her on my next deal."
    },
    {
      name: "Corey E.",
      date: "2018-10-01",
      text: "Weston M did a great job explaining, in detail, the DHM process. The conversation I had with him today gave me hope that we can not only come to a great conclusion on this deal, but many more deals between us and DHM in the years to come."
    },
    {
      name: "Adrian G.",
      date: "2018-10-01",
      text: "Thanks for healing me"
    },
    {
      name: "K&d W.",
      date: "2018-10-01",
      text: "Weston M just provided world-class customer service!!"
    },
    {
      name: "Jacob C.",
      date: "2018-10-01",
      text: "Spoke with Weston M today. He was very knowledgeable about the entire process. We covered everything that will be needed and to be expected. He was very helpful and gave me a better understanding of the entire process. Thanks Weston M. Jacob Clarke"
    },
    {
      name: "Donyelle F.",
      date: "2018-10-01",
      text: "Talked to Stevie today. He was very professional and he answered all of my questions. I look forward to moving forward and doing business with DHM."
    },
    {
      name: "Zabala Z.",
      date: "2018-10-01",
      text: "Great experience so far. The company works hard to make numbers work and allow us investors to be funded. Special mention to Weston who has been great during my short time with DHM!"
    },
    {
      name: "Andrew B.",
      date: "2018-10-01",
      text: "Very good and proactive company! Worked with Derek Deppe and he did amazing"
    },
    {
      name: "Taylor S.",
      date: "2018-10-01",
      text: "derek deppe was very helpful...he for sure knows your program....i asked many questions and some werent easy...no delay in any of his responses..pleasure working with him"
    },
    {
      name: "Justin S.",
      date: "2018-10-01",
      text: "Derek Deppe provided great service answering all my questions."
    },
    {
      name: "Pepsicola M.",
      date: "2018-10-01",
      text: "I had a great conversation with Deann yesterday. Thank you as I move in the right direction to financial freedom."
    },
    {
      name: "Ty G.",
      date: "2018-10-01",
      text: "Weston M was very friendly and knowledgeable he explain everything from start to finish and help play through a few different scenarios.. I've never had any one as patient and helpful but I am excited we hope we get approved and are able to close on our property. Dilly dilly..!"
    },
    {
      name: "Bluetime L.",
      date: "2018-10-01",
      text: "Karlee was very helpful and informative. She was cheerful and went above and beyond to provide me with the best answers to my questions."
    },
    {
      name: "Patrick M.",
      date: "2018-10-01",
      text: "Weston M. Was a great help, with my company's first loan application. Weston answered all questions, and concerns, thoroughly. Left no stone unturned, and made sure, there were no questions, at the end of the conversation. Thanks Weston M!"
    },
    {
      name: "Mallory K.",
      date: "2018-10-01",
      text: "Weston M provided me with the best service! He was very understanding and made sure that I was able to get the assistance that I needed. Will definitely recommend using."
    },
    {
      name: "Ileana O.",
      date: "2018-10-01",
      text: "Derek Deppe was great, answered all the questions. Having him in customer service is a huge asset when you need to get answers quickly. So happy to be involved with a company that have professionals like Derek Deppe."
    },
    {
      name: "Sarah E.",
      date: "2018-10-01",
      text: "Derek Deppe was great. He answered all my questions today about getting started and even went through how the whole thing plays out. He was great. Thanks again!!!"
    },
    {
      name: "Sumaiyah Y.",
      date: "2018-10-01",
      text: "Weston M. provided superior customer service! Polite, pleasant, knowledgeable to a fault... Weston answered all of my questions, thoroughly explained their program and the loan offer they made, and responded promptly to every email I ever sent. He allowed me to feel comfortable partnering with DHM. Tje process was easy, clear cut, and lacked all BS and nonsense. Very little red tape to have to deal with. Just overall an exceptional experience. I will use DHM for all my hard money needs!"
    },
    {
      name: "Cheryl C.",
      date: "2018-10-01",
      text: "Live chat with Derek Deppe. Good chat!"
    },
    {
      name: "Shy G.",
      date: "2018-10-01",
      text: "chatted with Derek Deepe. it was great speaking with him and he helped me a lot. will get back to him once i get more info about my flip deal"
    },
    {
      name: "Jim F.",
      date: "2018-10-01",
      text: "Derek in customer service was tremendous. Aimed me right where i needed to go. Look forward to doing business with DoHardMoney."
    },
    {
      name: "ElCampion",
      date: "2018-10-01",
      text: "Derek really helped me with all my questions and made it easy to explain the process of getting a loan."
    },
    {
      name: "Debbie G.",
      date: "2018-10-01",
      text: "Derek Deppe answered all my questions quickly and efficienlty"
    },
    {
      name: "Bro G.",
      date: "2018-10-01",
      text: "Deann jarvi. Very knowledgeable"
    },
    {
      name: "Keven S.",
      date: "2018-10-01",
      text: "Awesome experience"
    },
    {
      name: "Alisha H.",
      date: "2018-10-01",
      text: "Spoke with Megan. She was incredibly helpful, professional and was able to answer questions when others could not. Do Hard Money need to really invest in more people like her."
    },
    {
      name: "Nadia H.",
      date: "2018-10-01",
      text: "Derek Deepe was great."
    },
    {
      name: "Shikila F.",
      date: "2018-10-01",
      text: "i had great help from DEREK DEPPE"
    },
    {
      name: "35daniel T.",
      date: "2018-10-01",
      text: "Derek was extremely prompt and professional as he quickly assisted and responded to my inquiries about loans being offered by DHM. Excellent customer service."
    },
    {
      name: "A J.",
      date: "2018-10-01",
      text: "Derek Deppe, was absolutely wonderful. He was knowledgeable, exuded patience and answered all of my questions. GREAT guy, appears to be an awesome company. Thanks, Derek."
    },
    {
      name: "Tony M.",
      date: "2018-10-01",
      text: "Deann is great. She's my account manager and is knowledgeable and very helpful."
    },
    {
      name: "Terrence W.",
      date: "2018-10-01",
      text: "DeAnn Jarvi, made our experience worth coming back to do more business with DHM. We found your system to be unique and works for beginning and experience Investors along with it's many resources to encourage a profitable flipping experience. Ms. Jarvi displayed a very professional attitude and was informative about how DHM works. I will be calling her again for my next deal. Thanks DeAnn"
    },
    {
      name: "Lorraine Q.",
      date: "2018-10-01",
      text: "A reliable professionally staffed company who provide a sufficient number of assignments, and pay as promised. It's great working with Barbara Anderson and Michelle Ogletree. I highly recommend this company."
    },
    {
      name: "Keith S.",
      date: "2018-10-01",
      text: "I have been impressed with the whole process of each person’s personal attention to wanting to help and see you succeed with their company. I’m in “ Great Hands”."
    },
    {
      name: "Flamur R.",
      date: "2018-10-01",
      text: "Deanne was very helpful, called on time and seemed out the answer from higher ups when I had a complicated question."
    },
    {
      name: "Kate G.",
      date: "2018-10-01",
      text: "Rae was thorough, knowledgeable, and friendly!"
    },
    {
      name: "Kenneth S.",
      date: "2018-10-01",
      text: "Megan was wonderful and explained everything completely...looking forward to doing a lot of business with her in the future..."
    },
    {
      name: "Anna T.",
      date: "2018-10-01",
      text: "Wonderful & Understanding"
    },
    {
      name: "Eddie W.",
      date: "2018-10-01",
      text: "DeAnn Jarvi was great we really enjoyed working with her we look forward to doing business more business with her"
    },
    {
      name: "Monica E.",
      date: "2018-10-01",
      text: "So far , I’m very happy , wit. This company ; you can tell they have , professionals working with the company , I’m looking forward to work with them ."
    },
    {
      name: "ChipKelly N.",
      date: "2018-10-01",
      text: "Rita was very professional and courteous. Answered all of my questions and gave lots of helpful advice as where to start and what to do to get started."
    },
    {
      name: "Doald T.",
      date: "2018-10-01",
      text: "I. FROM THERE STEPS CONSTRUCTION I GUVE DEANN FIVE STARS FOR ALL OF HER HELP AND SUPPORT IN HELPING US TO MOVE FORWARD."
    },
    {
      name: "Robert C.",
      date: "2018-10-01",
      text: "I spoke with Cary about a month ago when I had some questions about hard money lending. I met someone here in Chicago and they gave me her number. She was awesome and helped me find the right person to speak with. I am planning my new year with fixing and reselling homes. I will be doing it with Do Hard Money."
    },
    {
      name: "Sundra E.",
      date: "2018-10-01",
      text: "I love the support that this company gives me when I have questions. All of my issues are addressed in a timely manner and support is available 24 hours a day. The staff is very friendly and easy to speak with. I am very thankful to them."
    },
    {
      name: "Mrs. R.",
      date: "2018-10-01",
      text: "Working with DHM sometimes can be tough but Cary is awesome, She's responsive, knowledgable and a pleasure to work with :)"
    },
    {
      name: "Kelly F.",
      date: "2018-10-01",
      text: "Carey Crowe is great to work with!"
    },
    {
      name: "Jasmin G.",
      date: "2018-10-01",
      text: "Cary Crowe| Loan Coordinator is amazing. She was able to get us an extension on our project and found us a solution to continue until complete."
    },
    {
      name: "Craig S.",
      date: "2018-10-01",
      text: "My dealings with DHM have been Awesome! What is most important to me is the help and guidance of the staff, in particular Cary Crowe. Regardless of my question, she is always quick to respond and solve any problems or issues. To me the customer service level is the most important part of a successful project and DHM has the best folks that want to see borrowers succeed!"
    },
    {
      name: "Chris C.",
      date: "2018-10-01",
      text: "These folks are terrific. A best in class organization. Cary Crowe is a pleasure to deal with. Fast, friendly, and responsive service. I highly recommend doing business with DoHardMoney"
    },
    {
      name: "Eric M.",
      date: "2018-10-01",
      text: "Working with Cary and the team was great."
    },
    {
      name: "Christian O.",
      date: "2018-10-01",
      text: "Good support! Do Hard Money is the best. Thank you, DeAnn Jarvi, for being so Awesome :)"
    },
    {
      name: "Aaron B.",
      date: "2018-10-01",
      text: "Do HARD Money is the way to go! They will give you the tools to make sure that won't get yourself in a bad deal. They are there every step of the way to guide and coach you to success."
    },
    {
      name: "Paul L.",
      date: "2018-10-01",
      text: "Great response and detailed information A place to really look at to invest Thanks!"
    },
    {
      name: "Nawaz M.",
      date: "2018-10-01",
      text: "Very satisfied with all the help with questions you may have or answered they might give, they are very professional with handling business I would recommend everyone to go through hard money for all your needs.."
    },
    {
      name: "Mark E.",
      date: "2018-10-01",
      text: "I want to personally Thank Michael (Diaz.) So far he has been very helpful and patient. I can tell he is very passionate about “DHM”. Every time my team or I had a question he took time out of his day to explain in great detail “to the best of his ability” to make sure we understood in complete confidence. I’m so glad we went with DHM. Excellent Service."
    },
    {
      name: "Burl R.",
      date: "2018-10-01",
      text: "Absolute professional and a pleasure to do business with"
    },
    {
      name: "Hakeem S.",
      date: "2018-10-01",
      text: "The experience that I’ve had so far with DHM has been superb. My team and I wanted to make sure we were prepared to handle all controllable factors of our prospective deals, so we asked Michael (Diaz) a lot of questions. Michael was thorough and transparent and gave us the confidence we needed to move forward. He made sure we understood the fine print of the contract, and set expectations throughout our interaction. Thanks a lot, Michael! Can’t wait to start. #GodBless #Sisney&EdmondLLC"
    },
    {
      name: "Bennette C.",
      date: "2018-10-01",
      text: "Megan was very helpful and answered all my questions."
    },
    {
      name: "Mr A.",
      date: "2018-10-01",
      text: "Awesome to work with for Real Estate Investments! I look forward to every phone call, Email and closed deal!"
    },
    {
      name: "Jennifer H.",
      date: "2018-10-01",
      text: "I am a soon to be owner of an amazing home that was flipped by Coastal Hunter Homes, LLC and funded by Michael Diaz at DHM. He has made all my house dreams come true and I am grateful for all he has done for me! Thanks, Michael!!! :)"
    },
    {
      name: "Jody W.",
      date: "2018-10-01",
      text: "Michael Diaz delivers professionalism with a personal touch. You never feel like your just a number as he takes an interest in you as a person and fights til the end to ensure your needs are met."
    },
    {
      name: "Kevin C.",
      date: "2018-10-01",
      text: "Michael Diaz is the epitome of professionalism. I would certainly consider him to be a true asset to Do Hard Money. He left a very favorable impression on me, and trust me, that's no easy feat. Keep up the awesome work!"
    },
    {
      name: "Torran B.",
      date: "2018-10-01",
      text: "It’s been great so far working with Michael, Carlos and their team at DHM!"
    },
    {
      name: "Parrish M.",
      date: "2018-10-01",
      text: "Last week I receive 100% financing with DO HARD MONEY!!! I got all the help that I need it every step of the process and everyone that helped Showed a real willingness to help. I wish I had time to go to the process step-by-step but I’m in the middle of changing locks on the property. I will have more details to come."
    },
    {
      name: "Sunny B.",
      date: "2018-10-01",
      text: "I have had an incredible experience working with Sandy Brand! She is so sweet, organized and an all-over joy to work with. I am excited to work more with her in the future."
    },
    {
      name: "Jessica S.",
      date: "2018-10-01",
      text: "Sandy is very professional and always has a really nice sense of humor. She always has something positive to say and I can imagine her smiling at the other side of the line. I really loved to work with her and hope this is just the beginning of many more business! :) She was even able to sell me one of my own products! Thank you, Sandy! :)"
    },
    {
      name: "Armend O.",
      date: "2018-10-01",
      text: "Great energy. Very knowledgeable and great help in answering all of my questions. I'd give 10 stars if I could."
    },
    {
      name: "Travis K.",
      date: "2018-10-01",
      text: "Sandy is great to work with!"
    },
    {
      name: "Peter V.",
      date: "2018-10-01",
      text: "My client and I spoke with Megan at Do Hard Money and she was very helpful. We really appreciated she taking the time to explain the process and what to do. We appreciate they have Megan Helping consumers at thIs company because of her dedication and friendly service. Sincerely, Peter Vargas Licensed Texas Realtor."
    },
    {
      name: "Makclia B.",
      date: "2018-10-01",
      text: "All has been great so far! They are super helpful and I'm ready to start my first deal!"
    },
    {
      name: "Mike R.",
      date: "2018-10-01",
      text: "Just starting, everyone seems friendly and helpful 😁 …"
    },
    {
      name: "Arkeatha R.",
      date: "2018-10-01",
      text: "Rita provided great resources and information for me to present on the Q&A call tonight."
    },
    {
      name: "Constance R.",
      date: "2018-10-01",
      text: "I called DHM today for advice and reached Megan S. She was excellent in answering my questions, scheduling an appointment and giving me the help I needed for the next step"
    },
    {
      name: "Pvi",
      date: "2018-10-01",
      text: "Knowledgeable Professional and Helpful."
    },
    {
      name: "Therrie O.",
      date: "2018-10-01",
      text: "I worked with Sandra on orders for her client and even though we had some shipment delivery issues Sandra was always professional and pleasant and very understanding. We were able to resolve everything and it was a delight to work with Do Hard Money and Sandra and I look forward to our next interaction!"
    },
    {
      name: "Sherry C.",
      date: "2018-10-01",
      text: "I've been working with DeAnn on my current deal, her and Do Hard Money have been the best. She has been very proactive to my needs in trying to get my deal done. Her professionalism is excellent. I hope to work with her again."
    },
    {
      name: "Company M.",
      date: "2018-10-01",
      text: "I've been working with Rita, Rita is great, professional and knowledgeable about the company, straight forward and answered pretty much all of my questions before I could ask them."
    },
    {
      name: "Michael P.",
      date: "2018-10-01",
      text: "Great great introduction to the program. Lot of work ahead but I feel like I have a steady Partners now."
    },
    {
      name: "Isaac G.",
      date: "2018-10-01",
      text: "Megan was very helpful!!"
    },
    {
      name: "Tiffany H.",
      date: "2018-10-01",
      text: "Raneica is wonderful. Prompt responses whenever I have a question and very kind. Always willing to help!"
    },
    {
      name: "Tom N.",
      date: "2018-10-01",
      text: "Ranica was very prompt, and helpful. Thank you, Tom Nelson."
    },
    {
      name: "Sundra B.",
      date: "2018-10-01",
      text: "I am very pleased with the exceptional service and information that was provided to me by Megan Schrader. Megan was also able to answer all of the questions that I had and direct me to variety of services that are now available to me. I was filled with positivity! Thank you. ☺"
    },
    {
      name: "Victor R.",
      date: "2018-10-01",
      text: "Megan was very informative and she really made it easier to understand the process, was patient and answered all my Questions not to mention very accessible."
    },
    {
      name: "John C.",
      date: "2018-10-01",
      text: "Megan was awesome! I had a few questions about how the evaluations would work and she took the time out to make sure I understood them perfectly. It’s rare to find people with that level of knowledge and patience to match. Thank you Megan and DHM for making my dreams come true!"
    },
    {
      name: "TheMysslk81",
      date: "2018-10-01",
      text: "Do Hard Money is great program with outstanding customer service. Member representative Megan has provided wonderful customer service."
    },
    {
      name: "Beebeebuys B.",
      date: "2018-10-01",
      text: "Stephanie was great I look forward to working with her further !"
    },
    {
      name: "Lauren S.",
      date: "2018-10-01",
      text: "DeAnn Jarvi was outstanding! She was persistent in resolving my issue by offering multiple options. She was able to educate me in the process to help me successfully find the best one. Thanks :)"
    },
    {
      name: "Mike B.",
      date: "2018-10-01",
      text: 'Stephanie Sanchez from "Do Hard Money" helped me with the orientation of the members site and was very understandable which made everything easy to learn. Thank you, Michael B.'
    },
    {
      name: "Seth D.",
      date: "2018-10-01",
      text: "Very helpful and eager to answer questions!"
    },
    {
      name: "Gid V.",
      date: "2018-10-01",
      text: "Very Informative"
    },
    {
      name: "Marvin C.",
      date: "2018-10-01",
      text: "Megan was very professional and answered all of my questions."
    },
    {
      name: "Lucinda S.",
      date: "2018-10-01",
      text: "I have been very pleased with my experience with Do Hard Money so far. And look forward to continuing my use of their services."
    },
    {
      name: "Bezu F.",
      date: "2017-10-01",
      text: "Stephanie is a wonderful account advisor. She is very professional and took her time to listen to my rehab proposals. She provided great feedback and was very engaged throughout the process. She responds timely to email and phone communications and works in a very organized manner. I would not hesitate to work with her again and recommend her without reservation."
    },
    {
      name: "Michaela T.",
      date: "2017-10-01",
      text: "Sean Smith was great. I loved his enthusiasm. Having someone excited for me is a great help."
    },
    {
      name: "Gina B.",
      date: "2017-10-01",
      text: "Deann is awesome!! She was very friendly & helpful!!"
    },
    {
      name: "Mister R.",
      date: "2017-10-01",
      text: "Very knowledgeable, thorough, and helpful!"
    },
    {
      name: "Kim -.",
      date: "2017-10-01",
      text: "Mbhs4evr..... I worked with Michael Diaz , He was spot on with details when i asked questions. He was very informative and transparent about the process, and i was very comfortable knowing he would be here to assist in any way. He always availed himself to answer my questions, and was very knowledgeable about the contractual process and the market in general. Im super excited to take part in this financial marriage with DOHARDMONEY. :) Kim Taylor"
    },
    {
      name: "Cocolyles L.",
      date: "2017-10-01",
      text: "Did a conference call with Michael Diaz and a new client I was referring. He did an excellent job explaining the process. The new client understood everything that he said to them about the program in its entirety. They signed up after the 45 minute interview. Kudos to Michael for being patiently explaining the program and making the new client totally comfortable with everything."
    },
    {
      name: "Joan S.",
      date: "2017-10-01",
      text: "Comfortable with all questions asked."
    },
    {
      name: "Norma R.",
      date: "2017-10-01",
      text: "I talked to DeAnn Jarvi and she was great. She was very friendly and knowledgeable.👍 …"
    },
    {
      name: "Brian C.",
      date: "2017-10-01",
      text: "Michael Diaz was Johnny on the spot when I needed him. He took time out of his vacation to get my account edited so I could log in and prepare POF. I appreciate the support and look forward to closing the deal."
    },
    {
      name: "Lynda C.",
      date: "2017-10-01",
      text: "Sheila was great! It was exciting to get a call from her to go over more important information to help me be successful. I am looking forward to all future deals using Do Hard Money!! Thank you!"
    },
    {
      name: "Richard L.",
      date: "2017-10-01",
      text: "Michael Diaz explain to us all the process perfectly"
    },
    {
      name: "Darrius G.",
      date: "2017-10-01",
      text: "very helpful, my partner and I are so excited on how much they wanted to work with us, but not just that, they go so far and above to help you as much as they possibly can to make sure you succeed. amazing team to work with.Thank you!!!"
    },
    {
      name: "Carmen M.",
      date: "2017-10-01",
      text: "Michael Diaz was great! Walked me through every step and answered every question I had as well as ones that he anticipated I would ask! Thanks Michael!"
    },
    {
      name: "Marcos C.",
      date: "2017-10-01",
      text: "The information and guidance of the web page Do Hard Money was great with Janitsa Soto thank you"
    },
    {
      name: "Godson G.",
      date: "2017-10-01",
      text: "De Ann is the greatest. She has excellent customer service and follow up. I'm very satisfied with her. Overall great job!"
    },
    {
      name: "Taylor S.",
      date: "2017-10-01",
      text: "Do Hard Money is giving my company the money that's needed for my business to thrive! I would definitely recommend this company! They also teach you some ways to get ahead of your local competition!!"
    },
    {
      name: "Sierra S.",
      date: "2017-10-01",
      text: "Great experience! Very helpful."
    },
    {
      name: "Emory F.",
      date: "2017-10-01",
      text: "Great experience so far. Worked with Mike answered all of my questions in detail"
    },
    {
      name: "Kim J.",
      date: "2017-10-01",
      text: "She was quick on her response & very knowledgeable in information that wasn't set up for call. Well informed & well spoken. She did an Awsome Call .."
    },
    {
      name: "T4thagr8 G.",
      date: "2017-10-01",
      text: "I just finally got thru to someone after 4 days I been trying to get someone and today I finally talked to DeAnn and she changed my life experience for real. She was so helpful, patient, clear, and actually got me to the next chapter in my life. I am so glad to have talked to her. I wish I could have her as my own personal assistant."
    },
    {
      name: "Ron R.",
      date: "2017-10-01",
      text: "Great experience. Took the time to get you acclimated with their programs"
    },
    {
      name: "Albert C.",
      date: "2017-10-01",
      text: "So far it had being a great experience. Michael was very helpful and got me the exact directions I need it."
    },
    {
      name: "Moses M.",
      date: "2017-10-01",
      text: "Sean was a great help, answered all my questions and helped me understand in depth the process of getting a rehab property...very educative."
    },
    {
      name: "Woody55",
      date: "2017-10-01",
      text: "Great experience. Michael was very inviting and kept me at ease. He was very informative and took time to not only give content, but he also took time to get to know me and my future goals. I would strongly recommend this company. Sandralee"
    },
    {
      name: "Monique J.",
      date: "2017-10-01",
      text: "Great experience!"
    },
    {
      name: "Amy K.",
      date: "2017-10-01",
      text: "My experience with Sean Smith is great! Sean takes time to explain every aspect of the of the company and how it works with great details. He's honest and friendly. Sean always returns calls and emails. I'm very pleased with Sean and couldn't ask for a better account advisor. Thank you, Amy Lees"
    },
    {
      name: "Adam A.",
      date: "2017-10-01",
      text: "Karlee Draney was very professional and informative in our meeting. It was a great experience"
    },
    {
      name: "Paula W.",
      date: "2017-10-01",
      text: "Sean is always a great help and very thorough."
    },
    {
      name: "Ian M.",
      date: "2017-10-01",
      text: "I really enjoyed talking with Sean Smith at Do Hard Money, he was informative and gave me answers to my questions in a professional manner. I will keep them in mind on my next project."
    },
    {
      name: "Kevin B.",
      date: "2017-10-01",
      text: "I had a great conversation with Sean Smith this morning. Sean is very knowledgeable and answered every question that I had about the hard money loan process and program. After speaking with Sean I feel more comfortable moving forward with the process."
    },
    {
      name: "Rod A.",
      date: "2017-10-01",
      text: "Awesome!! Michael Diaz, Leo, Sean and Melinda have helped me understand the best way to operate and the path towards getting deals done. My first deal is a wholesale transaction coming soon, once that closes others will follow. I am a better investor because of their assistance."
    },
    {
      name: "Denise J.",
      date: "2017-10-01",
      text: "Janitsa Soto was professional and displayed her excitment along with me concerning this new opportunity. She was totally clear on the steps that need to be taken to complete this project. I'm totally excited and ready to get to work."
    },
    {
      name: "J P.",
      date: "2017-10-01",
      text: "Janitsa Soto is great at what she does. Great guide to have on your sida. Jani thank you!"
    },
    {
      name: "Don W.",
      date: "2017-10-01",
      text: "Everyone I've spoken with, so far, have seemed very interested in answer all questions I've had. Everyone's conduct actually shows their bona fide interest in the investor's success. Looking forward to a mutually beneficial relationship"
    },
    {
      name: "Chernee M.",
      date: "2017-10-01",
      text: "My experience working with Leo and Mike have been great so far. Looking forward to doing business with do hard money!"
    },
    {
      name: "Christopher F.",
      date: "2017-10-01",
      text: "very friendly folks and very helpful with explaining how all things work. webiste is very user friendly as well which is great for someone like me thats not big in to tech."
    },
    {
      name: "Michael T.",
      date: "2017-10-01",
      text: "Mike you sounds like a great guy we enjoyed talking to you and thanks for all your help."
    },
    {
      name: "Sylvia G.",
      date: "2017-10-01",
      text: "Very enthusiastic! Reviewed all necessary steps with me in a timely manner"
    },
    {
      name: "Jason K.",
      date: "2017-10-01",
      text: "I gathered valuable information about crafting profitable deals and what to look for - greatly increasing my chances of success!"
    },
    {
      name: "Howard W.",
      date: "2017-10-01",
      text: "Stefani was great and very informative she took the time to explain in detail the things that she thought we needed to know to be successful"
    },
    {
      name: "Laina A.",
      date: "2017-10-01",
      text: "My experience so far with Michael is amazing. Very responsive and knowledgeable. I recommend highly"
    },
    {
      name: "Middlemin S.",
      date: "2017-10-01",
      text: "I had numerous questions after completing the ADA, more than what I could type in an e-mail. Melinda responded within a few hours, and contacted me via telephone to personally answer all my questions and issues. She provided me with the step by step guide on what to do now that I have found a property that will make financial sense and fit the profitability of all involved. I am hoping to make an offer, and lock into a contract within the next several weeks. I am excited about my new partnership with DHM."
    },
    {
      name: "Jason B.",
      date: "2017-10-01",
      text: "I was helped and signed up to day by Mr. Michael Diaz. He was very helpful and informative!!!!"
    },
    {
      name: "Derek B.",
      date: "2017-10-01",
      text: "Stafani was great. The call was very informative, all of my questions were answered. I'm ready for my first deal with Do Hard Money!"
    },
    {
      name: "Ronald B.",
      date: "2017-10-01",
      text: "Janitsa was extremely helpful. Her energy is electrifying. She is a motivating individual who is truly an asset to me and my partners!"
    },
    {
      name: "William B.",
      date: "2017-10-01",
      text: "The service provided has been amazing! Janitsa was very personable and caring about our business specific needs and questions! I am super excited to partner with a winning team at Do Hard Money!"
    },
    {
      name: "Rob S.",
      date: "2017-10-01",
      text: `Received absolutely phenomenal, very personal service when I connected with Cole Petersen. Very knowledgeable, very professional, very personable. Answered my questions, made sure we genuinely connected, and established great rapport with me. Cole made sure that I was really comfortable before we moved forward with business. And because of that trust being established, I was happy and confident about moving forward! Cole gave me that much needed feeling of confirmation that this newly formed relationship with DHM is one of my best business decisions. Cole, YOU ROCK, sir!!! ~~~~~~~~~~ (Initial post...) Great start already with the Do Hard Money Team! Preston Norton is who I want to really recognize. He & I talked by "accident" late in. Friday evening, as he was in the office pretty late (I'm on East Coast time), and just happened to answer the phone when I was thinking I was going to just leave a message for someone else. This turned out to be a really good thing! Preston was extremely helpful with taking a message for me, but went further to assure me that my call would be returned, and even personally giving me a follow up call afterward, reiterating that I would be contacted to move me forward with DHM. After some gaps in communication continued, I contacted Preston again to request that he become my primary POC with DHM. The level of customer service, listening, and understanding was first class! Preston's professional demeanor was fantastic...felt like this was a partnership that had been established for a long time! And we haven't even gotten started yet! Looking very forward to working with Preston, and working successful RE transactions together!`
    },
    {
      name: "Charles S.",
      date: "2017-10-01",
      text: "I would like to say so far my experience with Dohardmoney has been very pleasant one. Janitsa Soto is very professional and personal. I truly enjoy working with her so far. I can't wait to do my first deal with them. This is the start of a profitable relationship."
    },
    {
      name: "Shawn T.",
      date: "2017-10-01",
      text: "Very professional and answered all my questions"
    },
    {
      name: "Rick L.",
      date: "2017-10-01",
      text: "Stefanie was very informative and professional . She took time to personally to get to know us and our situation for future goals. I feel that Stefanie is a great asset to the company. I personally enjoyed talking with her."
    },
    {
      name: "Latrelle H.",
      date: "2017-10-01",
      text: "Janitsa Soto is a wonder account advisor and has been instrumental with making my experience easy thru this process. Keep up the superb job Janitsa!!!"
    },
    {
      name: "Greg C.",
      date: "2017-10-01",
      text: "Was referred to DHM. If you stick with what they teach you its a big win for everyone! Lover these guys!"
    },
    {
      name: "Nathan M.",
      date: "2017-10-01",
      text: "JANITA SOTO, WAS GREAT! She not only assisted me in how to get our deal done with 100% financing. She was on top of things from beginning to end, held my hand in going through the process, and made me feel like I could be a real pro at flipping houses. She has helped to change not only my life but my partners and our families prospects. Thanks Janita for all of your hard work and encouragement."
    },
    {
      name: "Hope L.",
      date: "2017-10-01",
      text: "Agents are comprehensive and accurate, no ambiguity, straight to the point ! Great experience"
    },
    {
      name: "Elizabeth M.",
      date: "2017-10-01",
      text: "Michael and Leo were such great helps with the information for the loan process. They helped me with all the information I needed to make a proper decision. Thank you for all your help and I would highly recommend them in the future."
    },
    {
      name: "James B.",
      date: "2017-10-01",
      text: "Had some problems with a project dealing with contractors and finances, but Victoria and Richard has been awesome with working with me and trying to assist me in the best way possible. They were reasonable and understanding. They made a way for me to continue, despite the obstacles that were thrown in my path, that were not caused by DHM. I would recommend DHM to anybody, and I already have too many."
    },
    {
      name: "Kathleen F.",
      date: "2017-10-01",
      text: "My Specialist, Victoria, was very helpful in answering my questions and concerns. Thank you!"
    },
    {
      name: "Cameron S.",
      date: "2017-10-01",
      text: "My account managers Victoria Giles & Amanda have been very responsive and helpful through the process so far."
    },
    {
      name: "Alick K.",
      date: "2017-10-01",
      text: "Do hard money is a hard money lender who specializes in fix-and-flips. They offer 100% financing and plenty of mentors to speak to. Within 3 days I was in the system, had access to all the tools and specialists, and was ready to finance a good property. They are 100% punctual and always willing to work with the person and situation, and they always shed a pretty positive light :) I've had nothing but positive experiences with them and plan to return to them for another loan in the future."
    },
    {
      name: "Ivan A.",
      date: "2017-10-01",
      text: "Hey guys, do hard money is where to go as a beginner in real estate, I just closed a deal with them and I am looking forward to do more. Thank you do hard money."
    },
    {
      name: "Gary B.",
      date: "2017-10-01",
      text: "HEY I HAVE MY 1 ST DEAL THANKS DO HARD MONEY AND IT WAS AWSOME THANKS AGAIN I FORWARD TO WORKING WITH U AGAIN"
    },
    {
      name: "Jeremy M.",
      date: "2017-10-01",
      text: "My account advisor is Richard. would definitely recommend this service to any one."
    },
    {
      name: "Rebecca N.",
      date: "2017-10-01",
      text: "I have always dealt with Sean Smith at DHM. He has always been very professional and takes his time to explain everything regarding the application/loan process, etc. Although I have not obtained a property for funding to date, I know that Sean will be there to help me when I do. I would rather have an associate care about my success vs. not care and me make a huge mistake with a property that isn't profitable. Rebecca Napier, Fredericksburg, VA"
    },
    {
      name: "Yolanda G.",
      date: "2017-10-01",
      text: 'Dreams are usually only for the dreamer. In my case, I shared my dreams for becoming a successful real estate Invester with Sean and he "heard" me. He partnered with me to make my dreams come true. He listened, he guided. He is honest and he is fair. He explains and guides in a way that is easy to grasp and hold on to. In this business, accountability is key, Sean and the DO Hard Money program lives up to what they advertise. They are accountable, and I am on my way to success as a result.'
    },
    {
      name: "Burnell H.",
      date: "2017-10-01",
      text: "Janitsa is wonderful,and very informative,thank you"
    },
    {
      name: "Octave V.",
      date: "2017-10-01",
      text: "Do hard money has been very professional and punctual. their response time is always within 24 hours. they give really good advice and guidance. although I am still working on my first deal, they have made this process very enjoyable and very informative. you can tell that they care about you the investors well being. very grateful and thankful for this company."
    },
    {
      name: "Tim P.",
      date: "2017-10-01",
      text: "Victoria is always very attentive and knows her job. She's a real pleasure to work with. The company is well organized and looks out for their client's best interest."
    },
    {
      name: "Jahquan L.",
      date: "2017-10-01",
      text: "So far, so good. I'm dealing with Victoria Giles who has been very helpful. I'm hoping to close next week."
    }
  ];
  b({ name: "100 HMF V3 - Legitimacy Proof", dev: "YK" }), S("exp_100_hmf_v3");
  const c = "100 HMF V3", q = () => window.matchMedia("(max-width: 768px)").matches, E = (a) => {
    const t = Math.max(0, Math.floor((Date.now() - new Date(a).getTime()) / 864e5)), e = [
      [365, "year"],
      [30, "month"],
      [7, "week"],
      [1, "day"]
    ];
    for (const [n, o] of e) {
      const r = Math.floor(t / n);
      if (r >= 1) return r === 1 ? `a ${o} ago` : `${r} ${o}s ago`;
    }
    return "today";
  };
  class J {
    constructor() {
      this.shownReviews = 0, this.init();
    }
    async init() {
      var t, e;
      await k(".crs_new_content_block .crs-reviews"), !document.querySelector(".crs3-how-works") && (document.head.insertAdjacentHTML("beforeend", `<style class="crs3-style">${x}</style>`), (t = document.querySelector(".crs-hero-below")) == null || t.insertAdjacentHTML("afterend", R), (e = document.querySelector(".crs-reviews")) == null || e.insertAdjacentHTML("afterend", C), document.querySelector(".crs-reviews").style.display = "none", this.renderReviews(), this.bindShowMore(), this.bindVideos(), this.bindCta(), this.trackVisibility());
    }
    renderReviews() {
      const t = document.querySelector(".crs3-reviews__grid"), e = document.querySelector(".crs3-reviews__more");
      if (!t || !e) return;
      const n = q() ? 15 : 30, o = f.slice(this.shownReviews, this.shownReviews + n);
      t.insertAdjacentHTML("beforeend", o.map((r) => D(r, E(r.date))).join("")), this.shownReviews += o.length, e.hidden = this.shownReviews >= f.length, this.bindReadMore();
    }
    bindShowMore() {
      var t;
      (t = document.querySelector(".crs3-reviews__more")) == null || t.addEventListener("click", () => {
        this.renderReviews(), l("exp_100hmf_v3_reviews_more", `Show more: ${this.shownReviews}`, "click", c);
      });
    }
    // Only newly rendered cards get a handler: the button is shown only when the text is actually clamped
    bindReadMore() {
      document.querySelectorAll(".crs3-reviews__read-more:not([data-bound])").forEach((t) => {
        t.dataset.bound = "true";
        const e = t.previousElementSibling;
        e.scrollHeight <= e.clientHeight + 1 || (t.hidden = !1, t.addEventListener("click", () => {
          const n = e.classList.toggle("crs3-reviews__card-text--expanded");
          t.textContent = n ? "Show less" : "Read more", n && l("exp_100hmf_v3_review_read_more", "Read more", "click", c);
        }));
      });
    }
    bindVideos() {
      document.querySelectorAll(".crs3-people__media").forEach((t, e) => {
        var o;
        const n = t.dataset.video;
        n && (t.style.backgroundImage = `url(https://fast.wistia.com/embed/medias/${n}/swatch)`), (o = t.querySelector(".crs3-people__play")) == null || o.addEventListener("click", async () => {
          l("exp_100hmf_v3_video_play", `Case study ${e + 1}`, "click", c), n && (await I(["https://fast.wistia.com/player.js", `https://fast.wistia.com/embed/${n}.js`]), t.innerHTML = `<wistia-player media-id="${n}" autoplay></wistia-player>`, t.classList.add("crs3-people__media--playing"));
        });
      });
    }
    // The site binds its .crs_open_quiz handler on DOMContentLoaded, so injected buttons need their own
    bindCta() {
      var t;
      (t = document.querySelector(".crs3-people__cta")) == null || t.addEventListener("click", () => {
        var e;
        l("exp_100hmf_v3_cta", "See If This Is A Fit For You", "click", c), (e = document.querySelector(".pwr-sec-form__content")) == null || e.scrollIntoView({ behavior: "instant", block: "start" });
      });
    }
    trackVisibility() {
      [
        { selector: ".crs3-how-works", desc: "How it works" },
        { selector: ".crs3-how-works__calc", desc: "How it works - calculation" },
        { selector: ".crs3-reviews__head", desc: "Google reviews" },
        { selector: ".crs3-people", desc: "People at your stage" }
      ].forEach(({ selector: e, desc: n }) => {
        M(e, "exp_100hmf_v3_view", c, n);
      });
    }
  }
  new J();
})();
//# sourceMappingURL=index.js.map
