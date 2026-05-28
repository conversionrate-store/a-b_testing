(function() {
  "use strict";
  const U = `@charset "UTF-8";
/* Adblock360 — Animated Hero
 * Drop-in responsive block. All styles are scoped under .adblock-hero.
 *
 * Usage:
 *   <link rel="stylesheet" href="adblock-hero/hero.css">
 *   <div class="adblock-hero"></div>
 *   <script src="adblock-hero/hero.js" defer><\/script>
 *
 * The block fills the width of its parent and keeps a fixed 8:5 aspect ratio.
 */
.adblock-hero {
  /* Outer responsive wrapper */
  position: relative;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 8/5;
  margin: 0 auto;
  font-family: -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #1a1a1a;
}

.adblock-hero *,
.adblock-hero *::before,
.adblock-hero *::after {
  box-sizing: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

/* Internal 800×500 stage — scaled to fit the wrapper by JS */
.adblock-hero .ah-stage {
  position: absolute;
  top: 0;
  left: 0;
  width: 800px;
  height: 500px;
  transform-origin: top left;
  background: transparent;
  will-change: transform;
}

/* Laptop base PNG */
.adblock-hero .ah-laptop {
  position: absolute;
  top: 0;
  left: 25px;
  width: 750px;
  height: auto;
  z-index: 1;
  -webkit-user-drag: none;
  pointer-events: none;
}

/* Screen viewport — hardcoded to match the laptop PNG */
.adblock-hero .ah-screen {
  position: absolute;
  left: 161px;
  top: 70px;
  width: 477px;
  height: 339px;
  z-index: 2;
  background: transparent;
  overflow: visible;
}

/* Icon grid */
.adblock-hero .ah-grid {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 56px;
  transition: opacity 380ms cubic-bezier(0.34, 1.2, 0.64, 1);
}

.adblock-hero .ah-grid.is-dim {
  opacity: 0.35;
}

.adblock-hero .ah-cell {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.adblock-hero .ah-icon {
  width: 88px;
  height: 88px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 220ms ease;
}

.adblock-hero .ah-cell:hover .ah-icon {
  transform: scale(1.07);
}

.adblock-hero .ah-icon img {
  width: 88px;
  height: 88px;
  display: block;
  filter: none;
  box-shadow: none;
  -webkit-user-drag: none;
}

/* Completed-state checkmark */
.adblock-hero .ah-check {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #2e7d32;
  border: 2px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  transition: transform 250ms cubic-bezier(0.34, 1.4, 0.64, 1);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.18);
  z-index: 3;
}

.adblock-hero .ah-cell.is-done .ah-check {
  transform: scale(1);
}

/* Popup card */
.adblock-hero .ah-popup {
  position: absolute;
  width: 440px;
  height: 300px;
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.06);
  z-index: 10;
  pointer-events: none;
  opacity: 0;
  transform-origin: top left;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.adblock-hero .ah-pop-header {
  height: 64px;
  flex: 0 0 64px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 18px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.adblock-hero .ah-mini-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.adblock-hero .ah-mini-icon img {
  width: 44px;
  height: 44px;
  display: block;
  -webkit-user-drag: none;
}

.adblock-hero .ah-app-name {
  font-size: 17px;
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing: -0.2px;
}

.adblock-hero .ah-pop-body {
  flex: 1;
  padding: 16px;
  position: relative;
  overflow: hidden;
}

.adblock-hero .ah-pop-footer {
  height: 48px;
  flex: 0 0 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.adblock-hero .ah-pill {
  background: #e8f5e9;
  color: #2e7d32;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  padding: 6px 14px;
  opacity: 0;
  transition: opacity 280ms ease;
  letter-spacing: 0.3px;
  white-space: nowrap;
}

.adblock-hero .ah-pill.is-show {
  opacity: 1;
}

.adblock-hero .ah-skip {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1.5px solid #ddd;
  background: #ffffff;
  color: #666;
  font-size: 18px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition: background 150ms ease, color 150ms ease, border-color 150ms ease;
  font-family: inherit;
}

.adblock-hero .ah-skip:hover {
  background: #f5f5f5;
  color: #1a1a1a;
  border-color: #bbb;
}

/* Spotify body — bar waveform */
.adblock-hero .ah-wave {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 3px;
  padding: 16px 18px 22px;
}

.adblock-hero .ah-bar {
  width: 11px;
  border-radius: 3px 3px 0 0;
  background: #ccc;
  transition: height 350ms ease-in;
}

.adblock-hero .ah-bar.is-ad {
  background: #e53935;
}

.adblock-hero .ah-ad-label {
  position: absolute;
  top: 6px;
  left: 0;
  font-size: 13px;
  font-weight: 700;
  color: #e53935;
  letter-spacing: 1px;
  transition: opacity 280ms ease;
}

@keyframes ah-shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-4px);
  }
  50% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(4px);
  }
}
.adblock-hero .ah-bar.is-shake {
  animation: ah-shake 100ms ease-in-out 4;
}

/* YouTube body — video player */
.adblock-hero .ah-player {
  width: 100%;
  height: 145px;
  background: #111;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  margin-top: 14px;
}

.adblock-hero .ah-vid-content {
  position: absolute;
  inset: 0;
  transition: transform 350ms ease-in;
}

.adblock-hero .ah-vid-content.is-wipe {
  transform: translateX(-120%);
}

.adblock-hero .ah-play-btn {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 280ms ease;
}

.adblock-hero .ah-play-btn.is-show {
  opacity: 1;
}

.adblock-hero .ah-progress-track {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  width: 100%;
  background: #333;
}

.adblock-hero .ah-progress-bar {
  height: 100%;
  background: #e53935;
  width: 0;
  transition: width 1.8s linear;
}

.adblock-hero .ah-progress-bar.is-fill {
  width: 35%;
}

/* Chrome body — skeleton browser */
.adblock-hero .ah-browser {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.adblock-hero .ah-b-bar {
  height: 34px;
  flex: 0 0 34px;
  background: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
}

.adblock-hero .ah-dots {
  display: flex;
  gap: 5px;
}

.adblock-hero .ah-dots span {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  display: block;
}

.adblock-hero .ah-dots .r {
  background: #ff5f57;
}

.adblock-hero .ah-dots .y {
  background: #febc2e;
}

.adblock-hero .ah-dots .g {
  background: #28c840;
}

.adblock-hero .ah-url {
  flex: 1;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 13px;
  color: #666;
  padding: 3px 10px;
  line-height: 16px;
}

.adblock-hero .ah-b-content {
  flex: 1;
  padding: 12px 14px;
  overflow: hidden;
  position: relative;
}

.adblock-hero .ah-skel-line {
  height: 10px;
  background: #e8e8e8;
  border-radius: 4px;
  margin-bottom: 8px;
}

.adblock-hero .ah-adbanner {
  height: 34px;
  background: #fff5f5;
  border: 1.5px solid #e53935;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  margin-bottom: 6px;
  gap: 10px;
  overflow: hidden;
  transition: height 350ms ease-in, padding 350ms ease-in, opacity 350ms ease-in, margin 350ms ease-in;
}

.adblock-hero .ah-adbanner.is-collapse {
  height: 0 !important;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
  opacity: 0;
  border-width: 0;
}

.adblock-hero .ah-ad-tag {
  font-size: 13px;
  font-weight: 700;
  color: #e53935;
  letter-spacing: 0.5px;
}

.adblock-hero .ah-ad-copy {
  font-size: 13px;
  color: #aaa;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@keyframes ah-adpulse {
  0%, 100% {
    border-color: #e53935;
  }
  50% {
    border-color: #ff8a80;
  }
}
.adblock-hero .ah-adbanner.is-pulse {
  animation: ah-adpulse 250ms ease-in-out 2;
}

.adblock-hero .ah-shield-badge {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.adblock-hero .ah-shield-badge .ah-chip {
  background: #e8f5e9;
  color: #2e7d32;
  font-size: 14px;
  font-weight: 700;
  border-radius: 20px;
  padding: 6px 16px;
  letter-spacing: 0.5px;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 320ms ease, transform 320ms cubic-bezier(0.34, 1.4, 0.64, 1);
  box-shadow: 0 2px 8px rgba(46, 125, 50, 0.18);
}

.adblock-hero .ah-shield-badge.is-show .ah-chip {
  opacity: 1;
  transform: translateY(0);
}

.ip2 * {
  box-sizing: border-box;
  font-family: inherit;
}

main {
  display: none !important;
}

.ip2-hero {
  background: #fff;
}
.ip2-hero__inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 112px;
  display: flex;
  align-items: center;
  gap: 60px;
  min-height: 511px;
}
@media (max-width: 768px) {
  .ip2-hero__inner {
    padding: 40px 20px;
    flex-direction: column;
    min-height: 0;
  }
}
.ip2-hero__left {
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
@media (max-width: 768px) {
  .ip2-hero__left {
    flex: 1;
    width: 100%;
  }
}
.ip2-hero__right {
  flex: 1;
  min-height: 421px;
  border-radius: 16px;
  display: flex;
}
@media (max-width: 768px) {
  .ip2-hero__right {
    min-height: 220px;
    width: 100%;
  }
}
.ip2-hero__header {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.ip2-hero__logo {
  display: flex;
  flex-shrink: 0;
  text-decoration: none;
}
.ip2-hero__logo svg {
  display: block;
}
.ip2-hero__badge {
  display: inline-flex;
  align-items: center;
  height: 38px;
  padding: 0 16px;
  background: rgba(27, 134, 250, 0.15);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  color: #005dd8;
  white-space: nowrap;
}
.ip2-hero__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.ip2-hero__title {
  font-size: 42px;
  font-weight: 700;
  line-height: 1.2;
  color: #0b1936;
  margin: 0;
}
@media (max-width: 768px) {
  .ip2-hero__title {
    font-size: 28px;
  }
}
.ip2-hero__desc {
  font-size: 18px;
  line-height: 1.6;
  color: #2e353f;
  margin: 0;
}
@media (max-width: 768px) {
  .ip2-hero__desc {
    font-size: 16px;
  }
}
.ip2-hero__cta {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.ip2-hero__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 64px;
  background: #1452d3;
  color: #fff;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
}
.ip2-hero__btn svg {
  flex-shrink: 0;
}
.ip2-hero__btn:hover {
  background: #1040b8;
}
.ip2-hero__meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
@media (max-width: 768px) {
  .ip2-hero__meta {
    gap: 16px;
  }
}
.ip2-hero__meta-item {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #2e353f;
}
.ip2-hero__meta-item svg {
  flex-shrink: 0;
}

.ip2-safe {
  background: #f3f4f6;
}
.ip2-safe__inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 90px 120px;
}
@media (max-width: 768px) {
  .ip2-safe__inner {
    padding: 48px 20px;
  }
}
.ip2-safe__head {
  text-align: center;
  max-width: 560px;
  margin: 0 auto 52px;
}
.ip2-safe__title {
  font-size: 42px;
  font-weight: 700;
  line-height: 1.2;
  color: #0b1936;
  margin: 0 0 20px;
}
@media (max-width: 768px) {
  .ip2-safe__title {
    font-size: 28px;
  }
}
.ip2-safe__subtitle {
  font-size: 18px;
  line-height: 1.6;
  color: #2e353f;
  margin: 0;
}
.ip2-safe__features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 60px;
}
@media (max-width: 768px) {
  .ip2-safe__features {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}
.ip2-safe__feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
}
.ip2-safe__feature-title {
  font-size: 24px;
  font-weight: 700;
  color: #0b1936;
  margin: 0;
}
.ip2-safe__feature-desc {
  font-size: 16px;
  line-height: 1.6;
  color: #2e353f;
  margin: 0;
}
.ip2-safe__feature-icon {
  width: 90px;
  height: 90px;
}
.ip2-safe__bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  padding-top: 52px;
  border-top: 1px solid #e5e7eb;
}
@media (max-width: 768px) {
  .ip2-safe__bottom {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
.ip2-safe__faq {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.ip2-safe__faq-icon {
  flex-shrink: 0;
  margin-top: 2px;
}
.ip2-safe__faq-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.ip2-safe__faq-title {
  font-size: 26px;
  font-weight: 700;
  color: #0b1936;
  margin: 0;
}
.ip2-safe__faq-desc {
  font-size: 16px;
  line-height: 1.7;
  color: #2e353f;
  margin: 0;
}
.ip2-safe__faq-more {
  font-size: 18px;
  font-weight: 700;
  color: #0b1936;
  margin: 8px 0 0;
}
.ip2-safe__faq-link {
  font-size: 16px;
  color: #1452d3;
  text-decoration: none;
}
.ip2-safe__faq-link:hover {
  text-decoration: underline;
}
.ip2-safe__review {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}
.ip2-safe__review-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 28px;
  border-left: 2px solid #d1d5db;
}
.ip2-safe__quote {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.55;
  color: #0b1936;
  margin: 0;
  font-style: normal;
}
.ip2-safe__review-link {
  font-size: 16px;
  color: #1452d3;
  text-decoration: none;
}
.ip2-safe__review-link:hover {
  text-decoration: underline;
}

.ip2-comp {
  background: #fff;
}
.ip2-comp__inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 90px 120px;
  display: flex;
  align-items: flex-start;
  gap: 60px;
}
@media (max-width: 768px) {
  .ip2-comp__inner {
    padding: 48px 20px;
    flex-direction: column;
  }
}
.ip2-comp__left {
  flex: 0 0 600px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 78px;
}
@media (max-width: 768px) {
  .ip2-comp__left {
    flex: 1;
    width: 100%;
    padding-top: 0;
  }
}
.ip2-comp__right {
  flex: 0 0 540px;
}
@media (max-width: 768px) {
  .ip2-comp__right {
    flex: 1;
    width: 100%;
  }
}
.ip2-comp__title {
  font-size: 42px;
  font-weight: 700;
  line-height: 1.2;
  color: #0b1936;
  margin: 0;
}
@media (max-width: 768px) {
  .ip2-comp__title {
    font-size: 28px;
  }
}
.ip2-comp__desc {
  font-size: 18px;
  line-height: 1.6;
  color: #2e353f;
  margin: 0;
}
@media (max-width: 768px) {
  .ip2-comp__desc {
    font-size: 16px;
  }
}
.ip2-comp__tag {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  font-weight: 700;
  color: #0b1936;
}
.ip2-comp__tag svg {
  flex-shrink: 0;
}
.ip2-comp__table {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07);
}
.ip2-comp__table-head {
  display: grid;
  grid-template-columns: 1fr 140px 140px;
  align-items: center;
  padding: 20px;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
}
.ip2-comp__table-head img {
  display: block;
  height: 23px;
  width: auto;
}
.ip2-comp__col-logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
.ip2-comp__col-logo svg {
  display: block;
}
.ip2-comp__col-logo--yt img {
  position: relative;
  left: -20px;
}
.ip2-comp__row {
  display: grid;
  grid-template-columns: 1fr 140px 140px;
  align-items: center;
  height: 56px;
  padding: 0 20px;
}
.ip2-comp__row--odd {
  background: #f3f4f6;
}
.ip2-comp__feature {
  font-size: 14px;
  color: #0b1936;
  font-weight: 700;
}
.ip2-comp__cell {
  display: flex;
  align-items: center;
  justify-content: center;
}

.ip2-sticky {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #fff;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(110%);
  transition: transform 0.3s ease;
}
.ip2-sticky.is-visible {
  transform: translateY(0);
}
.ip2-sticky__inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 12px 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
@media (max-width: 768px) {
  .ip2-sticky__inner {
    padding: 12px 20px;
  }
}
.ip2-sticky__meta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #2e353f;
}
.ip2-sticky__meta svg {
  flex-shrink: 0;
}
@media (max-width: 768px) {
  .ip2-sticky__meta {
    display: none;
  }
}
.ip2-sticky__btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 64px;
  padding: 0 42px;
  background: #1452d3;
  color: #fff;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
}
.ip2-sticky__btn svg {
  flex-shrink: 0;
}
.ip2-sticky__btn:hover {
  background: #1040b8;
}
@media (max-width: 768px) {
  .ip2-sticky__btn {
    width: 100%;
    justify-content: center;
    height: 52px;
    font-size: 16px;
  }
}/*# sourceMappingURL=style.css.map */`, L = (l, n, e, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: l,
      event_desc: n,
      event_type: e,
      event_loc: s
    }), F(`Event: ${l} | ${n} | ${e} | ${s}`, "success");
  }, Y = (l) => new Promise((n) => {
    const e = document.querySelector(l);
    e && n(e);
    const s = new MutationObserver(() => {
      const p = document.querySelector(l);
      p && (n(p), s.disconnect());
    });
    s.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), G = ({ name: l, dev: n }) => {
    const e = l.toLowerCase().replace(/\s/g, "_");
    L(`${e}_started`, `Experiment ${l} started`, "other", e), console.log(
      `%c EXP: ${l} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class H {
    constructor(n) {
      this.elements = n instanceof H ? n.elements : typeof n == "string" ? Array.from(document.querySelectorAll(n)) : n instanceof Element ? [n] : Array.isArray(n) ? n : Array.from(n);
    }
    on(n, e, s) {
      return typeof e == "function" && (s = e, e = ""), this.elements.forEach((p) => {
        p.addEventListener(n, function(u) {
          var m;
          if (e !== "") {
            let w = (m = u.target) == null ? void 0 : m.closest(e);
            w && (s == null || s.call(w, u));
          } else
            s == null || s.call(p, u);
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
        n(new H(e), this.elements.indexOf(e));
      return this;
    }
    style(n, e) {
      const s = n.split("-").map((p, u) => u === 0 ? p : p.charAt(0).toUpperCase() + p.slice(1)).join("");
      return this.elements.forEach(function(p) {
        p.style[s] = e;
      }), this;
    }
    find(n) {
      const e = this.elements.map((s) => Array.from(s.querySelectorAll(n)));
      return new H(e.flat());
    }
    attr(n, e) {
      return e ? (this.elements.forEach(function(s) {
        s.setAttribute(n, e);
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
  const B = (l) => new H(l), z = (l, n, e, s, p = 1e3, u = 0.5) => {
    let m, w;
    if (m = new IntersectionObserver(
      function(k) {
        k[0].isIntersecting === !0 ? w = setTimeout(() => {
          L(
            n,
            k[0].target.dataset.visible || s || "",
            "view",
            e
          ), m.disconnect();
        }, p) : (F("Element is not fully visible", "warn"), clearTimeout(w));
      },
      { threshold: [u] }
    ), typeof l == "string") {
      const k = document.querySelector(l);
      k && m.observe(k);
    } else
      m.observe(l);
  }, F = (l, n = "info") => {
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
    console.log(`%c>>> ${l}`, `${e} font-size: 16px; font-weight: 600`);
  }, K = [
    {
      icon: "ev_code",
      title: "EV Code Signed",
      desc: "Your OS verifies our identity<br>before install"
    },
    {
      icon: "app_cert",
      title: "AppEsteem Certified",
      desc: "Independently audited.<br>No bundleware"
    },
    {
      icon: "no_data",
      title: "No data collection",
      desc: "Zero personal data collected —<br>only anonymized crash reports"
    },
    {
      icon: "trusted",
      title: "Trusted by 17M users",
      desc: "Same team behind AdBlock<br>for YouTube™"
    }
  ], W = [
    { feature: "YouTube ads", ext: !0, app: !0 },
    { feature: "YouTube sponsor segment skip", ext: !1, app: !0 },
    { feature: "Spotify & desktop apps", ext: !1, app: !0 },
    { feature: "All browsers", ext: !1, app: !0 },
    { feature: "All websites", ext: !1, app: !0 },
    { feature: "Cookie consent auto-denial", ext: !1, app: !0 }
  ], Z = "https://conversionrate-store.github.io/a-b_images/adblock/", h = {
    adBlockLogo: `<svg xmlns="http://www.w3.org/2000/svg" width="140" height="24" viewBox="0 0 140 24" fill="none">
		<g clip-path="url(#clip0_503_377)">
		<path d="M137.616 17.351C136.646 18.7315 135.275 19.4208 133.505 19.4208C131.734 19.4208 130.357 18.7315 129.373 17.351C128.404 15.9571 127.919 14.0986 127.919 11.7754C127.919 9.45216 128.404 7.60128 129.373 6.2208C130.357 4.82688 131.734 4.12992 133.505 4.12992C135.275 4.12992 136.646 4.82688 137.616 6.2208C138.6 7.60128 139.091 9.45216 139.091 11.7754C139.091 14.0986 138.6 15.9571 137.616 17.351ZM130.47 16.3584C131.2 17.4432 132.212 17.9846 133.505 17.9846C134.798 17.9846 135.802 17.4432 136.52 16.3584C137.25 15.2736 137.616 13.7472 137.616 11.7754C137.616 9.80448 137.25 8.27712 136.52 7.19232C135.802 6.10752 134.798 5.56608 133.505 5.56608C132.212 5.56608 131.2 6.10848 130.47 7.19232C129.753 8.27712 129.394 9.80352 129.394 11.7754C129.394 13.7472 129.753 15.2746 130.47 16.3584ZM121.273 9.66336C122.721 9.66336 123.908 10.1213 124.835 11.0362C125.763 11.9386 126.226 13.1059 126.226 14.5421C126.226 15.9782 125.763 17.1542 124.835 18.0691C123.908 18.9715 122.721 19.4208 121.273 19.4208C119.825 19.4208 118.638 18.9706 117.71 18.0691C116.783 17.1542 116.319 15.9782 116.319 14.5421C116.319 13.4304 116.622 12.4445 117.226 11.5853L122.053 4.38336H123.718L120.093 9.79008C120.48 9.70472 120.876 9.66223 121.273 9.66336ZM118.743 17.0342C119.39 17.6678 120.233 17.9846 121.273 17.9846C122.313 17.9846 123.149 17.6678 123.781 17.0342C124.428 16.4006 124.751 15.5702 124.751 14.5421C124.751 13.5149 124.428 12.6835 123.781 12.0499C123.149 11.4163 122.313 11.0995 121.273 11.0995C120.233 11.0995 119.39 11.4163 118.743 12.0499C118.111 12.6835 117.795 13.5149 117.795 14.5421C117.795 15.5702 118.111 16.4006 118.743 17.0342ZM110.769 10.5293C111.949 10.6848 112.919 11.1418 113.678 11.9021C114.451 12.649 114.837 13.6416 114.837 14.88C114.837 16.2883 114.352 17.401 113.383 18.217C112.427 19.0195 111.261 19.4208 109.883 19.4208C108.787 19.4208 107.811 19.1674 106.954 18.6605C106.111 18.172 105.469 17.4014 105.14 16.4851L106.363 15.767C106.602 16.4995 107.03 17.0554 107.65 17.4355C108.268 17.8022 109.012 17.9846 109.883 17.9846C110.895 17.9846 111.725 17.7178 112.371 17.1821C113.031 16.633 113.362 15.8669 113.362 14.88C113.362 13.895 113.031 13.1347 112.371 12.599C111.725 12.0499 110.895 11.7754 109.883 11.7754V11.7542L109.862 11.7754H109.462L108.829 10.8038L112.498 5.77728H105.562V4.38336H114.205V5.77728L110.769 10.5293ZM104.395 19.1674H101.233L97.3967 14.3731V19.1674H94.6771V4.38336H97.3967V13.2538L101.022 8.60736H104.268L100.031 13.824L104.395 19.1674ZM88.4745 19.463C86.8867 19.463 85.559 18.9283 84.4905 17.8579C83.4364 16.7885 82.9094 15.4646 82.9094 13.8874C82.9094 12.3101 83.4374 10.9872 84.4905 9.9168C85.559 8.84736 86.8867 8.31168 88.4745 8.31168C89.5007 8.31168 90.4348 8.5584 91.2777 9.05088C92.0941 9.51551 92.7601 10.2045 93.1967 11.0362L90.8562 12.409C90.6462 11.9732 90.3079 11.612 89.8867 11.3741C89.4532 11.1174 88.9571 10.9858 88.4534 10.9939C87.6383 10.9939 86.9644 11.2685 86.4297 11.8176C85.8959 12.3523 85.629 13.0426 85.629 13.8874C85.629 14.7187 85.8959 15.408 86.4297 15.9571C86.9644 16.4928 87.6393 16.7597 88.4534 16.7597C89.0015 16.7597 89.4863 16.6406 89.9078 16.4006C90.329 16.1627 90.6673 15.8015 90.8774 15.3658L93.239 16.7174C92.7751 17.5483 92.0985 18.2408 91.2786 18.7238C90.4348 19.2163 89.4998 19.463 88.4745 19.463ZM79.9209 17.8579C78.839 18.9283 77.518 19.463 75.958 19.463C74.398 19.463 73.078 18.9283 71.9951 17.8579C70.9267 16.7731 70.3929 15.4502 70.3929 13.8874C70.3929 12.3245 70.9267 11.0074 71.9951 9.93792C73.0771 8.85312 74.398 8.31168 75.958 8.31168C77.518 8.31168 78.839 8.85408 79.9209 9.93792C81.0028 11.0083 81.5443 12.3245 81.5443 13.8874C81.5443 15.4502 81.0028 16.7741 79.9209 17.8579ZM73.9132 15.9782C74.4614 16.5274 75.143 16.8019 75.958 16.8019C76.774 16.8019 77.4556 16.5274 78.0028 15.9782C78.551 15.4291 78.8246 14.7322 78.8246 13.8874C78.8246 13.0426 78.551 12.3456 78.0028 11.7965C77.4556 11.2474 76.774 10.9728 75.958 10.9728C75.143 10.9728 74.4614 11.2474 73.9132 11.7965C73.3794 12.3456 73.1126 13.0426 73.1126 13.8874C73.1126 14.7322 73.3794 15.4291 73.9132 15.9782ZM65.734 19.1674V3.74976H68.4527V19.1674H65.734ZM62.0131 11.5008C63.3062 12.2477 63.9522 13.3738 63.9522 14.88C63.9522 16.1338 63.5097 17.161 62.6246 17.9635C61.7395 18.7661 60.6499 19.1674 59.3567 19.1674H53.0975V4.38336H58.9151C60.1804 4.38336 61.2412 4.77792 62.0985 5.56608C62.9692 6.3408 63.405 7.33344 63.405 8.544C63.405 9.76896 62.9414 10.7549 62.0131 11.5008ZM58.9142 7.10784H56.0054V10.3603H58.9142C59.3634 10.3603 59.7359 10.2067 60.0316 9.89568C60.3407 9.58656 60.4953 9.19872 60.4953 8.73408C60.4953 8.26944 60.3475 7.88256 60.0527 7.57248C59.757 7.26336 59.3778 7.10784 58.9142 7.10784ZM59.3567 16.4429C59.8492 16.4429 60.2562 16.2816 60.5798 15.9571C60.9033 15.6192 61.0646 15.1968 61.0646 14.6899C61.0646 14.1974 60.9023 13.7894 60.5798 13.465C60.2562 13.127 59.8492 12.9581 59.3567 12.9581H56.0063V16.4429H59.3567ZM47.7638 4.38336H50.4835V19.1674H47.7638V17.9213C46.9631 18.9494 45.8246 19.463 44.349 19.463C42.9292 19.463 41.7138 18.9283 40.701 17.8579C39.7046 16.7741 39.2054 15.4502 39.2054 13.8874C39.2054 12.3245 39.7046 11.0083 40.702 9.93792C41.7138 8.85408 42.9292 8.31168 44.349 8.31168C45.8246 8.31168 46.9622 8.82624 47.7638 9.85344V4.38336ZM42.7468 16.0416C43.3084 16.5907 44.0111 16.8653 44.855 16.8653C45.6978 16.8653 46.3938 16.5907 46.942 16.0416C47.4892 15.479 47.7638 14.761 47.7638 13.8874C47.7638 13.0147 47.4902 12.3034 46.942 11.7542C46.3938 11.1917 45.6978 10.9094 44.855 10.9094C44.0111 10.9094 43.3094 11.1917 42.7468 11.7542C42.1986 12.3034 41.9251 13.0147 41.9251 13.8874C41.9251 14.761 42.1986 15.479 42.7468 16.0416ZM35.5948 19.1674L34.7087 16.5062H28.8287L27.9436 19.1674H24.8025L29.9673 4.38336H33.5721L38.7571 19.1674H35.5948ZM29.7551 13.7818H33.8025L31.7788 7.74144L29.7551 13.7818Z" fill="#0B1936"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M9.45696 23.1149V17.8704C6.43008 15.3235 4.4832 12.264 4.19136 8.32992L0 5.9136V7.37472C0.03648 13.4909 3.01152 18.1882 7.7664 21.8266L9.45216 23.1149H9.45696ZM5.0736 6.9312L10.2816 4.5504L15.4954 6.9312L19.9008 4.38912L10.2816 0L0.66816 4.38912L5.0736 6.9312ZM16.3766 8.32992C16.0838 12.2698 14.137 15.3283 11.1101 17.8704V23.1149L12.7958 21.8266C17.5507 18.1882 20.5306 13.4861 20.5565 7.37472V5.9136L16.3766 8.32992Z" fill="#005DD8"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2811 16.3993C12.7598 14.2489 14.4091 11.7068 14.7067 8.39289L10.2811 6.37305L5.85547 8.39289C6.15787 11.702 7.80715 14.2489 10.2811 16.3993Z" fill="#1B86FA"/>
		</g>
		<defs>
		<clipPath id="clip0_503_377">
		<rect width="139.2" height="24" fill="white"/>
		</clipPath>
		</defs>
		</svg>`,
    windows: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path d="M3 5.549L10.195 4.582V11.611L3.007 11.665L3 5.549ZM10.195 12.391V19.496L3.005 18.511V12.391H10.195ZM11.113 4.456L20.998 3V11.533L11.113 11.611V4.456ZM21 12.505L20.998 21L11.113 19.647V12.505H21Z" fill="white"/>
		</svg>`,
    shieldGray: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path d="M12 1.45117L3 4.72437V11.9995C3 20.2202 11.7334 22.4563 11.8213 22.4783L12 22.5215L12.1787 22.4783C12.2666 22.4563 21 20.2202 21 11.9995V4.72437L12 1.45117ZM19.5 11.9995C19.5 18.5085 13.1931 20.6296 12.0029 20.9717C10.8552 20.6318 4.5 18.4529 4.5 11.9995V5.77466L12 3.04785L19.5 5.77466V11.9995Z" fill="#2E353F"/>
		<path d="M8.03027 11.4688L6.96973 12.5293L10.5 16.0596L17.0303 9.5293L15.9697 8.46875L10.5 13.9385L8.03027 11.4688Z" fill="#2E353F"/>
		</svg>`,
    noCard: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path d="M21.0439 6.18603C20.6785 6.38159 20.5408 6.83569 20.7363 7.20117C20.7745 7.27245 20.7924 7.34912 20.8223 7.42268C20.9297 7.687 21 7.96124 21 8.25V8.625H18.8701C18.4556 8.625 18.1201 8.96045 18.1201 9.375C18.1201 9.58223 18.204 9.76973 18.3396 9.90541C18.4753 10.0411 18.6628 10.125 18.8701 10.125H21V15.75C21 16.9907 19.9907 18 18.75 18H9.49512C9.08057 18 8.74512 18.3354 8.74512 18.75C8.74512 19.1646 9.08057 19.5 9.49512 19.5H18.75C20.8176 19.5 22.5 17.8176 22.5 15.75V8.25C22.5 7.63184 22.3513 7.04077 22.0591 6.49365C21.8635 6.12817 21.4102 5.99194 21.0439 6.18603Z" fill="black"/>
		<path d="M21.2197 1.71973L18.4395 4.5H5.25C3.18237 4.5 1.5 6.18237 1.5 8.25V15.75C1.5 16.3682 1.64868 16.9592 1.93872 17.5027C2.34338 18.2692 2.98769 18.8543 3.75183 19.1876L1.71973 21.2197C1.42676 21.5127 1.42676 21.9873 1.71973 22.2803C1.86621 22.4268 2.05811 22.5 2.25 22.5C2.44189 22.5 2.63379 22.4268 2.78027 22.2803L22.2803 2.78027C22.5732 2.4873 22.5732 2.0127 22.2803 1.71973C21.9873 1.42676 21.5127 1.42676 21.2197 1.71973ZM3.26367 16.7988C3.08862 16.4714 3 16.1191 3 15.75V10.125H12.8145L4.95937 17.9801C4.24228 17.8871 3.60942 17.4541 3.26367 16.7988ZM5.25 6H16.9395L14.3145 8.625H3V8.25C3 7.00928 4.00928 6 5.25 6Z" fill="black"/>
		</svg>`,
    sysAccess: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M35.1595 38.4395H4.83953C3.03953 38.4395 1.51953 36.9595 1.51953 35.1195V4.83953C1.51953 3.03953 2.99953 1.51953 4.83953 1.51953H35.1595C36.9595 1.51953 38.4795 2.99953 38.4795 4.83953V35.1595C38.4395 36.9595 36.9595 38.4395 35.1595 38.4395ZM3.15953 8.31953V35.1595C3.15953 36.0795 3.91953 36.8795 4.87953 36.8795H35.1995C36.1195 36.8795 36.9195 36.1195 36.9195 35.1595V8.31953H3.15953ZM3.15953 6.71953H36.8795V4.87953C36.8795 3.95953 36.1195 3.15953 35.1595 3.15953H4.83953C3.91953 3.15953 3.11953 3.91953 3.11953 4.87953V6.71953H3.15953ZM27.5195 34.5595H12.5195C11.2395 34.5595 10.1595 33.5195 10.1595 32.1995V22.5595C10.1595 21.2795 11.1995 20.1995 12.5195 20.1995H13.4395V16.5195C13.4395 12.8795 16.3995 9.95953 19.9995 9.95953C23.5995 9.95953 26.5595 12.9195 26.5595 16.5195V20.1995H27.4795C28.7595 20.1995 29.8395 21.2395 29.8395 22.5595V32.1995C29.8395 33.4795 28.7995 34.5595 27.5195 34.5595ZM12.5195 21.7995C12.1195 21.7995 11.7595 22.1195 11.7595 22.5595V32.1995C11.7595 32.5995 12.0795 32.9595 12.5195 32.9595H27.5195C27.9195 32.9595 28.2795 32.6395 28.2795 32.1995V22.5595C28.2795 22.1595 27.9595 21.7995 27.5195 21.7995H12.5195ZM24.1595 20.1995H24.9595V16.5195C24.9595 13.7595 22.7195 11.5595 19.9995 11.5595C17.2795 11.5595 15.0395 13.7995 15.0395 16.5195V20.1995H15.8395V16.5195C15.8395 14.1995 17.7195 12.3595 19.9995 12.3595C22.2795 12.3595 24.1595 14.2395 24.1595 16.5195V20.1995ZM17.4395 20.1995H22.5995V16.5195C22.5995 15.1195 21.4395 13.9595 20.0395 13.9595C18.6395 13.9595 17.4795 15.1195 17.4795 16.5195V20.1995H17.4395ZM19.9995 31.3595C19.5595 31.3595 19.1995 30.9995 19.1995 30.5595V28.9195C18.1995 28.5995 17.4395 27.6395 17.4395 26.4795C17.4395 25.0795 18.5995 23.9195 19.9995 23.9195C21.3995 23.9195 22.5595 25.0795 22.5595 26.4795C22.5595 27.5995 21.8395 28.5595 20.7995 28.9195V30.5595C20.7995 30.9995 20.4395 31.3595 19.9995 31.3595ZM19.9995 25.5595C19.4795 25.5595 19.0395 25.9995 19.0395 26.5195C19.0395 27.0395 19.4795 27.4795 19.9995 27.4795C20.5195 27.4795 20.9595 27.0395 20.9595 26.5195C20.9595 25.9995 20.5195 25.5595 19.9995 25.5595ZM33.9195 5.71953H23.4395C22.9995 5.71953 22.6395 5.35953 22.6395 4.91953C22.6395 4.47953 22.9995 4.11953 23.4395 4.11953H33.8795C34.3195 4.11953 34.6795 4.47953 34.6795 4.91953C34.6795 5.35953 34.3595 5.71953 33.9195 5.71953ZM14.1995 5.71953H11.0795C10.6395 5.71953 10.2795 5.35953 10.2795 4.91953C10.2795 4.47953 10.6395 4.11953 11.0795 4.11953H14.1995C14.6395 4.11953 14.9995 4.47953 14.9995 4.91953C14.9995 5.35953 14.6395 5.71953 14.1995 5.71953ZM8.79953 5.71953H4.91953C4.47953 5.71953 4.11953 5.35953 4.11953 4.91953C4.11953 4.47953 4.47953 4.11953 4.91953 4.11953H8.79953C9.23953 4.11953 9.59953 4.47953 9.59953 4.91953C9.59953 5.35953 9.23953 5.71953 8.79953 5.71953Z" fill="#2E353F"/>
</svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
	<path d="M14.3165 0.298415C14.7016 -0.0994735 15.326 -0.0994702 15.7111 0.298415C16.0963 0.696306 16.0963 1.34126 15.7111 1.73915L6.06724 11.7016C5.68207 12.0995 5.05774 12.0995 4.67257 11.7016L0.288876 7.17308C-0.096292 6.77519 -0.096292 6.13024 0.288876 5.73235C0.674044 5.33446 1.29838 5.33446 1.68354 5.73235L5.36991 9.54048L14.3165 0.298415Z" fill="#0BA43F"/>
	</svg>`,
    cancel: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M13.8661 0.366117C14.3543 -0.122039 15.1455 -0.122039 15.6337 0.366117C16.1218 0.854279 16.1218 1.64557 15.6337 2.13369L9.76748 7.99991L15.6337 13.8661C16.1218 14.3543 16.1218 15.1456 15.6337 15.6337C15.1456 16.1218 14.3543 16.1218 13.8661 15.6337L7.9999 9.76748L2.13369 15.6337C1.64557 16.1218 0.854278 16.1218 0.366116 15.6337C-0.122039 15.1455 -0.122038 14.3543 0.366116 13.8661L6.23233 7.99991L0.366116 2.13369C-0.122039 1.64554 -0.122038 0.854272 0.366116 0.366117C0.854271 -0.122039 1.64554 -0.122039 2.13369 0.366117L7.9999 6.23233L13.8661 0.366117Z" fill="#D61717"/>
</svg>`
  }, J = "/_astro/horizontal-aby-logo.Be8n11XS_Z59DT.svg", Q = K.map(
    ({ icon: l, title: n, desc: e }) => (
      /* html */
      `
  <div class="ip2-safe__feature">
    <img class="ip2-safe__feature-icon" src="${Z}${l}.webp" alt="${n}" />
    <h3 class="ip2-safe__feature-title">${n}</h3>
    <p class="ip2-safe__feature-desc">${e}</p>
  </div>`
    )
  ).join(""), nn = W.map(
    ({ feature: l, ext: n, app: e }, s) => (
      /* html */
      `
  <div class="ip2-comp__row${s % 2 === 0 ? " ip2-comp__row--odd" : ""}">
    <span class="ip2-comp__feature">${l}</span>
    <span class="ip2-comp__cell">${n ? h.check : h.cancel}</span>
    <span class="ip2-comp__cell">${e ? h.check : h.cancel}</span>
  </div>`
    )
  ).join(""), en = (
    /* html */
    `
<div class="adblock-hero" data-asset-base="${Z}"></div>
`
  ), tn = (
    /* html */
    `
<div class="ip2">

  <section class="ip2-hero">
    <div class="ip2-hero__inner">
      <div class="ip2-hero__left">
        <div class="ip2-hero__header">
          <a class="ip2-hero__logo" href="/">${h.adBlockLogo}</a>
          <span class="ip2-hero__badge">From the team behind Adblock for Youtube™</span>
        </div>
        <div class="ip2-hero__content">
          <h1 class="ip2-hero__title">You blocked YouTube ads. Now block them everywhere</h1>
          <p class="ip2-hero__desc">One more install. Ads gone from every app, browser and website on your PC — privately and securely.</p>
        </div>
        <div class="ip2-hero__cta">
          <a class="ip2-hero__btn" href="#">
            ${h.windows}
            Download AdBlock360
          </a>
          <div class="ip2-hero__meta">
            <span class="ip2-hero__meta-item">${h.shieldGray} Trusted by 17M users</span>
            <span class="ip2-hero__meta-item">${h.noCard} No credit card</span>
          </div>
        </div>
      </div>
      <div class="ip2-hero__right">
        ${en}
      </div>
    </div>
  </section>

  <section class="ip2-safe">
    <div class="ip2-safe__inner">
      <div class="ip2-safe__head">
        <h2 class="ip2-safe__title">Is AdBlock360 Safe?</h2>
        <p class="ip2-safe__subtitle">AdBlock360 is the real app. Fully vetted, zero adware — unlike the fake "AdBlock 360" showing up in your search results.</p>
      </div>
      <div class="ip2-safe__features">${Q}</div>
      <div class="ip2-safe__bottom">
        <div class="ip2-safe__faq">
          <div class="ip2-safe__faq-icon">${h.sysAccess}</div>
          <div class="ip2-safe__faq-body">
            <h3 class="ip2-safe__faq-title">Why does it need system access?</h3>
            <p class="ip2-safe__faq-desc">AdBlock360 blocks ads at the network level — covering Spotify, games and every browser at once, not just Chrome. The Windows security prompt is normal. Every legitimate system-level app triggers it, including AdGuard.</p>
            <p class="ip2-safe__faq-more">Have more questions?</p>
            <a class="ip2-safe__faq-link" href="#">Read our privacy policy — written in plain language, not legalese →</a>
          </div>
        </div>
        <div class="ip2-safe__review">
					<div class="ip2-safe__review-content">
						<blockquote class="ip2-safe__quote">"No suspicious connections or hidden data transfers detected"</blockquote>
						<a class="ip2-safe__review-link" href="#">Cybernews independent security review →</a>
					</div>
					<div class="ip2-safe__review-logo">
						<img src="${Z}cyber_news.webp" alt="Cybernews logo" height="103" width="103">
					</div>
        </div>
      </div>
    </div>
  </section>

  <section class="ip2-comp">
    <div class="ip2-comp__inner">
      <div class="ip2-comp__left">
        <h2 class="ip2-comp__title">One install. Every ad, everywhere. Done.</h2>
        <p class="ip2-comp__desc">AdBlock for YouTube protects one tab. AdBlock360 protects your entire computer.</p>
        <div class="ip2-comp__tag">
          ${h.check}
          <span>AdBlock360 doesn't replace your extension. It finishes the job.</span>
        </div>
      </div>
      <div class="ip2-comp__right">
        <div class="ip2-comp__table">
          <div class="ip2-comp__table-head">
            <div></div>
            <div class="ip2-comp__col-logo ip2-comp__col-logo--yt">
              <img src="${J}" alt="Adblock for YouTube" height="23">
            </div>
            <div class="ip2-comp__col-logo">${h.adBlockLogo}</div>
          </div>
          ${nn}
        </div>
      </div>
    </div>
  </section>

</div>
`
  ), an = (
    /* html */
    `
<div class="ip2-sticky">
  <div class="ip2-sticky__inner">
    <span class="ip2-sticky__meta">
      ${h.noCard}
      No credit card
    </span>
    <a class="ip2-sticky__btn" href="#">
      ${h.windows}
      Download AdBlock360
    </a>
  </div>
</div>
`
  );
  G({ name: "Install Page 1", dev: "YK" });
  class on {
    constructor() {
      this.init();
    }
    async init() {
      await Y("body"), document.head.insertAdjacentHTML("beforeend", `<style class="ip2-style">${U}</style>`), await Y("main"), B("main").elements[0].insertAdjacentHTML("beforebegin", tn), document.body.insertAdjacentHTML("beforeend", an), this.initStickyBar(), this.initCtaClicks(), this.initHeroAnimation(), this.initSectionsVisibility(), L("ip2_view", "Install Page 2 viewed", "view", "install_page_2");
    }
    initStickyBar() {
      const n = document.querySelector(".ip2-hero__btn"), e = document.querySelector(".ip2-sticky");
      if (!n || !e) return;
      new IntersectionObserver(
        ([p]) => {
          e.classList.toggle("is-visible", !p.isIntersecting);
        },
        { threshold: 0 }
      ).observe(n);
    }
    initCtaClicks() {
      const n = document.querySelector('#main-cta, [data-event="download"]');
      B(".ip2-hero__btn").on("click", () => {
        n == null || n.click(), L("ip2_hero_cta_click", "Download AdBlock360 — hero", "click", "install_page_2");
      }), B(".ip2-sticky__btn").on("click", () => {
        n == null || n.click(), L("ip2_sticky_cta_click", "Download AdBlock360 — sticky", "click", "install_page_2");
      });
    }
    initHeroAnimation() {
      (function() {
        var n = 800, e = 500, s = 440, p = 300, u = (n - s) / 2, m = 70 - Math.round(0.17 * p);
        function w() {
          var o = document.currentScript;
          if (!o) {
            var r = document.getElementsByTagName("script");
            o = r[r.length - 1];
          }
          if (!o || !o.src) return "";
          var v = o.src;
          return v.substring(0, v.lastIndexOf("/") + 1);
        }
        var k = w();
        function sn(o) {
          var r = o || "";
          return '<div class="ah-stage"><img class="ah-laptop" src="' + r + 'laptop.webp" alt=""><div class="ah-screen"><div class="ah-grid">' + E("music", r + "spotify.webp") + E("video", r + "youtube.webp") + E("browser", r + "chrome.webp") + '</div></div><div class="ah-popup"><div class="ah-pop-header"><div class="ah-mini-icon"></div><div class="ah-app-name"></div></div><div class="ah-pop-body"></div><div class="ah-pop-footer"><div class="ah-pill">AD BLOCKED ✓</div><div style="flex:1"></div><button class="ah-skip" type="button" aria-label="Skip">›</button></div></div></div>';
        }
        function E(o, r) {
          return '<div class="ah-cell" data-app="' + o + '"><div class="ah-icon"><img src="' + r + '" alt="" draggable="false"></div><div class="ah-check"><svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.2L5 8.7L9.6 3.6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>';
        }
        function rn(o) {
          if (o === "music") {
            for (var r = [22, 38, 55, 30, 48, 60, 28, 42, 70, 34, 50, 24, 46, 58, 32, 44, 52, 28, 38, 22], v = "", _ = 0; _ < r.length; _++) {
              var C = _ < 5;
              v += '<div class="ah-bar' + (C ? " is-ad" : "") + '" data-i="' + _ + '" style="height:' + r[_] + 'px"></div>';
            }
            return '<div class="ah-wave" data-role="wave">' + v + '</div><div class="ah-ad-label" data-role="adLabel">AD</div>';
          }
          return o === "video" ? '<div class="ah-player"><div class="ah-vid-content" data-role="vidContent"><div class="ah-progress-track"><div class="ah-progress-bar" data-role="vidBar"></div></div></div><div class="ah-play-btn" data-role="playBtn"><svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="19" stroke="#fff" stroke-width="1.5" fill="rgba(255,255,255,0.08)"/><path d="M16 13L28 20L16 27V13Z" fill="#fff"/></svg></div></div>' : '<div class="ah-browser"><div class="ah-b-bar"><div class="ah-dots"><span class="r"></span><span class="y"></span><span class="g"></span></div><div class="ah-url">dailynews.example</div></div><div class="ah-b-content"><div class="ah-skel-line" style="width:85%"></div><div class="ah-skel-line" style="width:60%"></div><div class="ah-adbanner" data-role="ad1"><span class="ah-ad-tag">AD</span><span class="ah-ad-copy">Sponsored content</span></div><div class="ah-skel-line" style="width:75%"></div><div class="ah-skel-line" style="width:55%"></div><div class="ah-adbanner" data-role="ad2"><span class="ah-ad-tag">AD</span><span class="ah-ad-copy">Limited offer</span></div><div class="ah-skel-line" style="width:70%"></div><div class="ah-shield-badge" data-role="shieldBadge"><div class="ah-chip">2 ADS REMOVED ✓</div></div></div></div>';
        }
        function ln(o) {
          if (o.__adblockMounted) return;
          o.__adblockMounted = !0;
          var r = o.getAttribute("data-asset-base");
          r == null && (r = k), r && r.charAt(r.length - 1) !== "/" && (r += "/"), o.innerHTML = sn(r);
          var v = o.querySelector(".ah-stage"), _ = o.querySelector(".ah-grid"), C = o.querySelectorAll(".ah-cell"), f = o.querySelector(".ah-popup"), cn = o.querySelector(".ah-mini-icon"), pn = o.querySelector(".ah-app-name"), x = o.querySelector(".ah-pop-body"), M = o.querySelector(".ah-pill"), dn = o.querySelector(".ah-skip"), T = o.querySelector(".ah-laptop"), $ = [
            { key: "music", name: "Spotify", img: r + "spotify.webp" },
            { key: "video", name: "YouTube", img: r + "youtube.webp" },
            { key: "browser", name: "Chrome", img: r + "chrome.webp" }
          ];
          function P() {
            var i = o.clientWidth || n, t = o.clientHeight || e, a = Math.min(i / n, t / e);
            (!isFinite(a) || a <= 0) && (a = 1);
            var c = (i - n * a) / 2, g = (t - e * a) / 2;
            v.style.transform = "translate(" + c + "px, " + g + "px) scale(" + a + ")";
          }
          if (typeof ResizeObserver < "u") {
            var hn = new ResizeObserver(P);
            hn.observe(o);
          }
          window.addEventListener("resize", P), P();
          var V = [];
          function d(i, t) {
            var a = setTimeout(i, t);
            return V.push(a), a;
          }
          function fn() {
            for (var i = 0; i < V.length; i++) clearTimeout(V[i]);
            V = [];
          }
          var j = 0, A = !1;
          function gn(i) {
            cn.innerHTML = '<img src="' + i.img + '" alt="" draggable="false">';
          }
          function un() {
            var i = x.querySelector('[data-role="wave"]'), t = x.querySelector('[data-role="adLabel"]');
            if (!(!i || !t)) {
              var a = i.querySelector('.ah-bar[data-i="0"]'), c = i.querySelector('.ah-bar[data-i="4"]');
              if (!(!a || !c)) {
                var g = i.getBoundingClientRect(), b = a.getBoundingClientRect(), y = c.getBoundingClientRect(), S = (b.left + y.right) / 2 - g.left, q = D(), yn = S / q;
                t.style.left = "0", t.style.right = "auto", t.style.width = g.width / q + "px", t.style.textAlign = "left", t.style.paddingLeft = yn - 12 + "px", t.style.top = "6px";
              }
            }
          }
          function D() {
            var i = v.style.transform || "", t = i.match(/scale\(([0-9.]+)\)/);
            return t ? parseFloat(t[1]) : 1;
          }
          function mn(i, t) {
            var a = $[i], c = C[i];
            M.classList.remove("is-show"), M.textContent = a.key === "browser" ? "ADS BLOCKED ✓" : "AD BLOCKED ✓", gn(a), pn.textContent = a.name, x.innerHTML = rn(a.key);
            var g = v.getBoundingClientRect(), b = c.querySelector(".ah-icon").getBoundingClientRect(), y = D() || 1, S = (b.left - g.left) / y + b.width / y / 2, q = (b.top - g.top) / y + b.height / y / 2;
            f.style.left = u + "px", f.style.top = m + "px", f.style.transformOrigin = "top left", f.style.transition = "none", f.style.transform = "translate(" + (S - u - s * 0.04) + "px, " + (q - m - p * 0.04) + "px) scale(0.08)", f.style.opacity = "0", _.classList.add("is-dim"), requestAnimationFrame(function() {
              requestAnimationFrame(function() {
                f.style.transition = "transform 380ms cubic-bezier(0.34, 1.2, 0.64, 1), opacity 220ms ease-out", f.style.transform = "translate(0, 0) scale(1)", f.style.opacity = "1", d(function() {
                  a.key === "music" && un(), t && t();
                }, 400);
              });
            });
          }
          function X(i, t) {
            var a = C[i], c = v.getBoundingClientRect(), g = a.querySelector(".ah-icon").getBoundingClientRect(), b = D() || 1, y = (g.left - c.left) / b + g.width / b / 2, S = (g.top - c.top) / b + g.height / b / 2;
            f.style.transition = "transform 280ms ease-in, opacity 220ms ease-in", f.style.transform = "translate(" + (y - u - s * 0.04) + "px, " + (S - m - p * 0.04) + "px) scale(0.08)", f.style.opacity = "0", _.classList.remove("is-dim"), d(function() {
              a.classList.add("is-done"), t && t();
            }, 290);
          }
          function xn(i) {
            var t = x.querySelectorAll(".ah-bar.is-ad"), a = x.querySelector('[data-role="adLabel"]');
            t.forEach(function(c) {
              c.classList.add("is-shake");
            }), d(function() {
              t.forEach(function(c) {
                c.classList.remove("is-shake"), c.style.height = "0px";
              }), a && (a.style.opacity = "0");
            }, 400), d(function() {
              M.classList.add("is-show");
            }, 900), d(function() {
              i && i();
            }, 2e3);
          }
          function bn(i) {
            var t = x.querySelector('[data-role="vidBar"]'), a = x.querySelector('[data-role="vidContent"]'), c = x.querySelector('[data-role="playBtn"]');
            requestAnimationFrame(function() {
              t && t.classList.add("is-fill");
            }), d(function() {
              a && a.classList.add("is-wipe");
            }, 1800), d(function() {
              c && c.classList.add("is-show");
            }, 2e3), d(function() {
              M.classList.add("is-show");
            }, 2200), d(function() {
              i && i();
            }, 2500);
          }
          function vn(i) {
            var t = x.querySelector('[data-role="ad1"]'), a = x.querySelector('[data-role="ad2"]'), c = x.querySelector('[data-role="shieldBadge"]');
            t && t.classList.add("is-pulse"), a && a.classList.add("is-pulse"), d(function() {
              t && t.classList.add("is-collapse");
            }, 500), d(function() {
              a && a.classList.add("is-collapse");
            }, 850), d(function() {
              c && c.classList.add("is-show");
            }, 1300), d(function() {
              M.classList.add("is-show");
            }, 1600), d(function() {
              i && i();
            }, 2400);
          }
          function _n(i, t) {
            var a = $[i].key;
            if (a === "music") return xn(t);
            if (a === "video") return bn(t);
            if (a === "browser") return vn(t);
          }
          function O(i) {
            A || (A = !0, j = i, mn(i, function() {
              _n(i, function() {
                X(i, function() {
                  d(function() {
                    A = !1, N();
                  }, 500);
                });
              });
            }));
          }
          function N() {
            var i = j + 1;
            if (i >= $.length) {
              d(function() {
                for (var t = 0; t < C.length; t++) C[t].classList.remove("is-done");
                d(function() {
                  O(0);
                }, 350);
              }, 200);
              return;
            }
            O(i);
          }
          dn.addEventListener("click", function() {
            A && (fn(), X(j, function() {
              d(function() {
                A = !1, N();
              }, 250);
            }));
          });
          function R() {
            d(function() {
              O(0);
            }, 600);
          }
          T.complete ? R() : (T.addEventListener("load", R), T.addEventListener("error", R));
        }
        function I() {
          for (var o = document.querySelectorAll(".adblock-hero"), r = 0; r < o.length; r++) ln(o[r]);
        }
        document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", I) : I();
      })();
    }
    initSectionsVisibility() {
      z(".ip2-hero", "ip2_hero_visible", "install_page_2", "Hero section visible"), z(".ip2-safe", "ip2_safe_visible", "install_page_2", "Safe section visible"), z(".ip2-comp", "ip2_comp_visible", "install_page_2", "Comparison section visible");
    }
  }
  new on();
})();
//# sourceMappingURL=index.js.map
