(function() {
  "use strict";
  const v = `.crs3-how-works,
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
`, d = (t, n, e, a = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: n,
      event_type: e,
      event_loc: a
    }), l(`Event: ${t} | ${n} | ${e} | ${a}`, "success");
  }, _ = (t) => new Promise((n) => {
    const e = document.querySelector(t);
    e && n(e);
    const a = new MutationObserver(() => {
      const o = document.querySelector(t);
      o && (n(o), a.disconnect());
    });
    a.observe(document, {
      childList: !0,
      subtree: !0
    });
  }), b = ({ name: t, dev: n }) => {
    const e = t.toLowerCase().replace(/\s/g, "_");
    d(`${e}_started`, `Experiment ${t} started`, "other", e), console.log(
      `%c EXP: ${t} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, k = async (t) => {
    const n = (e) => new Promise((a, o) => {
      const r = e.split(".").pop();
      if (r === "js") {
        if (Array.from(document.scripts).map((i) => i.src.toLowerCase()).includes(e.toLowerCase()))
          return l(`Script ${e} allready downloaded!`, "success"), a("");
        const s = document.createElement("script");
        s.src = e, s.onload = a, s.onerror = o, document.head.appendChild(s);
      } else if (r === "css") {
        if (Array.from(document.styleSheets).map((i) => {
          var y;
          return (y = i.href) == null ? void 0 : y.toLowerCase();
        }).includes(e.toLowerCase()))
          return l(`Style ${e} allready downloaded!`, "success"), a("");
        const s = document.createElement("link");
        s.rel = "stylesheet", s.href = e, s.onload = a, s.onerror = o, document.head.appendChild(s);
      }
    });
    for (const e of t)
      l(e), await n(e), l(`Loaded librari ${e}`);
    l("All libraries loaded!", "success");
  }, I = (t) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", t, "variant_1"));
    }, 1e3);
  }, C = (t, n, e, a, o = 1e3, r = 0.5) => {
    let c, s;
    if (c = new IntersectionObserver(
      function(i) {
        i[0].isIntersecting === !0 ? s = setTimeout(() => {
          d(
            n,
            i[0].target.dataset.visible || a || "",
            "view",
            e
          ), c.disconnect();
        }, o) : (l("Element is not fully visible", "warn"), clearTimeout(s));
      },
      { threshold: [r] }
    ), typeof t == "string") {
      const i = document.querySelector(t);
      i && c.observe(i);
    } else
      c.observe(t);
  }, l = (t, n = "info") => {
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
    console.log(`%c>>> ${t}`, `${e} font-size: 16px; font-weight: 600`);
  }, S = [
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
  ], R = ["Purchase price", "Rehab costs", "Closing costs &amp; points", "Interest for the full loan term"], $ = [
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
  ], h = {
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
  }, m = "https://conversionrate-store.github.io/a-b_images/theinvestorsedge/", w = {
    google: `${m}google-logo.webp`,
    user: `${m}user.webp`
  }, g = (t) => (
    /*html*/
    `<p class="crs3-eyebrow">${t}</p>`
  ), u = () => `<span class="crs3-stars">${h.star.repeat(5)}</span>`, f = (t) => t.replace(/[&<>"]/g, (n) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[n]), T = (
    /*html*/
    `
  <section class="crs3-how-works" id="crs3-how-works">
    <div class="crs3-how-works__intro">
      ${g("How it works")}
      <h2 class="crs3-how-works__title"><span>100% Hard Money Financing</span> Sounds Too Good? Here's Why It Works.</h2>
      <p class="crs3-how-works__desc">Unlike traditional lenders who lend against your income and credit, <b>hard money lenders lend against what the property will be worth after renovation.</b> That difference is what makes 100% financing structurally possible.</p>
    </div>
    <h3 class="crs3-how-works__example-title">Here's how it works — on a real example:</h3>
    <div class="crs3-how-works__example">
      <div class="crs3-how-works__stages">
        ${S.map(
      (t) => (
        /*html*/
        `
          <div class="crs3-how-works__stage">
            <div class="crs3-how-works__stage-head">
              <img src="${m}${t.icon}.svg" alt="${t.title}" class="crs3-how-works__stage-icon" />
              <span class="crs3-how-works__stage-tag">${t.tag}</span>
            </div>
            <h4 class="crs3-how-works__stage-title">${t.title}</h4>
            ${t.amount ? `<p class="crs3-how-works__stage-amount">${t.amount}</p>` : (
          /*html*/
          `
                <ul class="crs3-how-works__stage-lines">
                  ${t.lines.map(([n, e]) => `<li><span>${n}</span><b>${e}</b></li>`).join("")}
                  <li class="crs3-how-works__stage-total"><span>Total:</span><span>${t.total}</span></li>
                </ul>
              `
        )}
            <p class="crs3-how-works__stage-desc">${t.desc}</p>
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
            ${R.map((t) => `<li>${t}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  </section>
`
  ), E = (t, n) => (
    /*html*/
    `
  <div class="crs3-reviews__card">
    <div class="crs3-reviews__card-head">
      <img src="${w.user}" alt="" class="crs3-reviews__card-avatar" loading="lazy" />
      <span class="crs3-reviews__card-who">
        <b>${f(t.name)}</b>
        <span>${n}</span>
      </span>
      <img src="${w.google}" alt="Google" class="crs3-reviews__card-g" loading="lazy" />
    </div>
    ${u()}
    <p class="crs3-reviews__card-text">"${f(t.text)}"</p>
    <button class="crs3-reviews__read-more" hidden>Read more</button>
  </div>
`
  ), L = (
    /*html*/
    `
  <section class="crs3-reviews" id="crs3-reviews">
    <div class="crs3-reviews__container">
      <div class="crs3-reviews__head">
        <div>
          ${g("What borrowers say")}
          <h2 class="crs3-reviews__title">Over <span>1,000 Five-Star</span> Reviews</h2>
        </div>
        <div class="crs3-reviews__badge">
          <span class="crs3-reviews__badge-top">
            <img src="${w.google}" alt="Google" />
            ${u()}
            <b>4.8</b>
          </span>
          <span class="crs3-reviews__badge-count">1,000+ Google reviews</span>
        </div>
      </div>
      <div class="crs3-reviews__grid"></div>
      <button class="crs3-reviews__more">${h.refresh} Show more</button>
    </div>
    ${M()}
  </section>
`
  );
  function M() {
    return (
      /*html*/
      `
    <div class="crs3-people" id="crs3-people">
      ${g("Real people. Real deals.")}
      <h2 class="crs3-people__title">People at Your Stage. Real Numbers.</h2>
      <div class="crs3-people__grid">
        ${$.map(
        (t) => (
          /*html*/
          `
          <div class="crs3-people__card">
            <div class="crs3-people__media" data-video="${t.video}">
              <button class="crs3-people__play" aria-label="Play video">${h.play}</button>
            </div>
            <div class="crs3-people__body">
              <div>
                <b class="crs3-people__name">${t.name}</b>
                <p class="crs3-people__role">${t.role.join("<br>")}</p>
              </div>
              <div class="crs3-people__stats">
                ${t.stats.map(([n, e]) => `<span><b>${n}</b>${e}</span>`).join("")}
              </div>
              <div class="crs3-people__result">
                <span>Cash to close: ${t.cash}</span>
                <b>Profit: ${t.profit}</b>
              </div>
              <p class="crs3-people__note">${t.note}</p>
            </div>
          </div>
        `
        )
      ).join("")}
      </div>
      <div class="crs3-people__cta-wrap">
        <button class="crs3-people__cta crs_open_quiz">See If This Is A Fit For You</button>
        <div class="crs3-people__microcopy">
          <span>${h.no_commitment} No commitment</span>
          <span>${h.no_credit} No credit pull yet</span>
        </div>
      </div>
    </div>
  `
    );
  }
  const x = [
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
    }
  ];
  b({ name: "100 HMF V3 - Legitimacy Proof", dev: "YK" }), I("exp_100_hmf_v3");
  const p = "100 HMF V3", z = () => window.matchMedia("(max-width: 768px)").matches, H = (t) => {
    const n = Math.max(0, Math.floor((Date.now() - new Date(t).getTime()) / 864e5)), e = [
      [365, "year"],
      [30, "month"],
      [7, "week"],
      [1, "day"]
    ];
    for (const [a, o] of e) {
      const r = Math.floor(n / a);
      if (r >= 1) return r === 1 ? `a ${o} ago` : `${r} ${o}s ago`;
    }
    return "today";
  };
  class j {
    constructor() {
      this.shownReviews = 0, this.init();
    }
    async init() {
      var n, e;
      await _(".crs_new_content_block .crs-reviews"), !document.querySelector(".crs3-how-works") && (document.head.insertAdjacentHTML("beforeend", `<style class="crs3-style">${v}</style>`), (n = document.querySelector(".crs-hero-below")) == null || n.insertAdjacentHTML("afterend", T), (e = document.querySelector(".crs-reviews")) == null || e.insertAdjacentHTML("afterend", L), document.querySelector(".crs-reviews").style.display = "none", this.renderReviews(), this.bindShowMore(), this.bindVideos(), this.bindCta(), this.trackVisibility());
    }
    renderReviews() {
      const n = document.querySelector(".crs3-reviews__grid"), e = document.querySelector(".crs3-reviews__more");
      if (!n || !e) return;
      const a = z() ? 15 : 30, o = x.slice(this.shownReviews, this.shownReviews + a);
      n.insertAdjacentHTML("beforeend", o.map((r) => E(r, H(r.date))).join("")), this.shownReviews += o.length, e.hidden = this.shownReviews >= x.length, this.bindReadMore();
    }
    bindShowMore() {
      var n;
      (n = document.querySelector(".crs3-reviews__more")) == null || n.addEventListener("click", () => {
        this.renderReviews(), d("exp_100hmf_v3_reviews_more", `Show more: ${this.shownReviews}`, "click", p);
      });
    }
    // Only newly rendered cards get a handler: the button is shown only when the text is actually clamped
    bindReadMore() {
      document.querySelectorAll(".crs3-reviews__read-more:not([data-bound])").forEach((n) => {
        n.dataset.bound = "true";
        const e = n.previousElementSibling;
        e.scrollHeight <= e.clientHeight + 1 || (n.hidden = !1, n.addEventListener("click", () => {
          const a = e.classList.toggle("crs3-reviews__card-text--expanded");
          n.textContent = a ? "Show less" : "Read more", a && d("exp_100hmf_v3_review_read_more", "Read more", "click", p);
        }));
      });
    }
    bindVideos() {
      document.querySelectorAll(".crs3-people__media").forEach((n, e) => {
        var o;
        const a = n.dataset.video;
        a && (n.style.backgroundImage = `url(https://fast.wistia.com/embed/medias/${a}/swatch)`), (o = n.querySelector(".crs3-people__play")) == null || o.addEventListener("click", async () => {
          d("exp_100hmf_v3_video_play", `Case study ${e + 1}`, "click", p), a && (await k(["https://fast.wistia.com/player.js", `https://fast.wistia.com/embed/${a}.js`]), n.innerHTML = `<wistia-player media-id="${a}" autoplay></wistia-player>`, n.classList.add("crs3-people__media--playing"));
        });
      });
    }
    // The site binds its .crs_open_quiz handler on DOMContentLoaded, so injected buttons need their own
    bindCta() {
      var n;
      (n = document.querySelector(".crs3-people__cta")) == null || n.addEventListener("click", () => {
        var e;
        d("exp_100hmf_v3_cta", "See If This Is A Fit For You", "click", p), (e = document.querySelector(".pwr-sec-form__content")) == null || e.scrollIntoView({ behavior: "instant", block: "start" });
      });
    }
    trackVisibility() {
      [
        { selector: ".crs3-how-works", desc: "How it works" },
        { selector: ".crs3-how-works__calc", desc: "How it works - calculation" },
        { selector: ".crs3-reviews__head", desc: "Google reviews" },
        { selector: ".crs3-people", desc: "People at your stage" }
      ].forEach(({ selector: e, desc: a }) => {
        C(e, "exp_100hmf_v3_view", p, a);
      });
    }
  }
  new j();
})();
//# sourceMappingURL=index.js.map
