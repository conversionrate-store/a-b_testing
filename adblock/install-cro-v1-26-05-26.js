(function() {
  "use strict";
  const E = `@charset "UTF-8";
.laptop-wrap {
  position: relative;
  width: 100%;
  z-index: 10;
}

.laptop-lid {
  background: linear-gradient(180deg, #23263a 0%, #1a1d2e 100%);
  border-radius: 14px 14px 6px 6px;
  padding: 12px 12px 8px 12px;
  box-shadow: 0 28px 90px rgba(20, 40, 100, 0.24), 0 6px 20px rgba(20, 40, 100, 0.12);
}

.screen-inner {
  background: #f0f3fb;
  border-radius: 8px;
  height: 340px;
  overflow: hidden;
  position: relative;
}

.screen-chrome {
  height: 26px;
  background: #e2e6f2;
  border-bottom: 1px solid #d0d5e8;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0 10px;
  flex-shrink: 0;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.d1 {
  background: #f08080;
}

.d2 {
  background: #f0c060;
}

.d3 {
  background: #80c080;
}

.tab-bar {
  display: flex;
  gap: 2px;
  margin-left: 8px;
}

.tab {
  height: 15px;
  background: #d8dcee;
  border-radius: 3px 3px 0 0;
  padding: 0 9px;
  display: flex;
  align-items: center;
}

.tab.active {
  background: #f0f3fb;
}

.tab-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #a0a8c0;
  margin-right: 4px;
}

.tab-line {
  width: 28px;
  height: 4px;
  border-radius: 2px;
  background: #b8c0d8;
}

.url-wrap {
  flex: 1;
  height: 14px;
  background: #d8dcee;
  border-radius: 6px;
  margin: 0 8px;
}

.screen-body {
  height: 314px;
  position: relative;
  overflow: hidden;
}

/* FLOAT WINDOWS */
.float-win {
  position: absolute;
  inset: 10px;
  background: rgba(255, 255, 255, 0.97);
  border: 0.5px solid rgba(100, 140, 220, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(30, 60, 120, 0.1);
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  transform: scale(0.97);
}

.float-win.visible {
  opacity: 1;
  transform: scale(1);
}

.float-win.hiding {
  opacity: 0;
  transform: scale(0.96);
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.fw-bar {
  height: 24px;
  background: #edf0f8;
  border-bottom: 0.5px solid rgba(100, 140, 220, 0.12);
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
}

.fw-d {
  width: 5px;
  height: 5px;
  border-radius: 50%;
}

.fwd1 {
  background: #f08080;
}

.fwd2 {
  background: #f0c060;
}

.fwd3 {
  background: #80c080;
}

.fw-url {
  flex: 1;
  height: 9px;
  background: #d8dcea;
  border-radius: 4px;
  margin: 0 8px;
}

.fw-body {
  padding: 14px 16px;
  height: calc(100% - 24px);
  display: flex;
  flex-direction: column;
}

/* BOTTOM TOAST BANNER */
.block-banner {
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: rgba(20, 28, 52, 0.92);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: 7px 14px 7px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  opacity: 0;
  pointer-events: none;
  z-index: 50;
  box-shadow: 0 4px 20px rgba(10, 20, 60, 0.22), 0 0 0 0.5px rgba(74, 143, 224, 0.2);
  transition: opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1), transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  white-space: nowrap;
}

.block-banner.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.block-banner.hide {
  opacity: 0;
  transform: translateX(-50%) translateY(6px);
}

.block-banner-icon {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4a8fe0, #2563c4);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.block-banner-icon i {
  font-size: 12px;
  color: white;
}

.block-banner-ripple {
  display: none;
}

.block-banner-ripple2 {
  display: none;
}

.block-banner-texts {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.block-banner-title {
  font-size: 10px;
  font-weight: 700;
  color: white;
  letter-spacing: 0.2px;
}

.block-banner-sub {
  font-size: 8px;
  color: rgba(255, 255, 255, 0.45);
  font-weight: 400;
}

.scene-tag {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 9px;
  color: #4a8fe0;
  font-weight: 700;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  background: rgba(74, 143, 224, 0.1);
  border-radius: 4px 4px 0 0;
  padding: 3px 10px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s;
}

.scene-tag.visible {
  opacity: 1;
}

.laptop-base {
  height: 16px;
  background: linear-gradient(180deg, #2a2e42, #1e2236);
  border-radius: 0 0 8px 8px;
  margin: 0 -4px;
}

.laptop-foot {
  height: 7px;
  background: #c2c8d8;
  border-radius: 0 0 6px 6px;
  margin: 0 10px;
  box-shadow: 0 2px 10px rgba(20, 40, 100, 0.13);
}

/* ── SPOTIFY ── */
.sp-logo {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #1db954;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.sp-brand {
  font-size: 11px;
  font-weight: 700;
  color: #1db954;
  letter-spacing: -0.3px;
}

.sp-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.sp-art {
  width: 68px;
  height: 68px;
  background: linear-gradient(135deg, #6a8fd8, #a0b8f0);
  border-radius: 8px;
  flex-shrink: 0;
}

.sp-info {
  margin-left: 10px;
  flex: 1;
}

.sp-t {
  height: 10px;
  width: 100px;
  background: #2a2e42;
  border-radius: 5px;
  margin-bottom: 7px;
}

.sp-a {
  height: 7px;
  width: 65px;
  background: #b0b8cc;
  border-radius: 4px;
}

.sp-row {
  display: flex;
  align-items: center;
}

.sp-prog-wrap {
  margin-top: 12px;
  position: relative;
}

/* Single flat track, ad is an overlay marker */
.sp-track-bg {
  height: 5px;
  background: #dde2f0;
  border-radius: 3px;
  position: relative;
  overflow: visible;
}

/* Progress fill — full width element clipped by width */
.sp-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #1db954;
  border-radius: 3px;
  width: 0%;
}

/* AD segment marker sitting on top of the track */
.sp-ad-marker {
  position: absolute;
  top: -4px;
  height: 13px;
  border-radius: 3px;
  background: rgba(224, 80, 80, 0.82);
  border: 1px solid rgba(200, 50, 50, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* left & width set by JS */
  transition: width 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease, transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}

.sp-ad-marker-txt {
  font-size: 6.5px;
  font-weight: 800;
  color: white;
  letter-spacing: 0.4px;
  white-space: nowrap;
}

.sp-ad-label {
  position: absolute;
  top: -22px;
  font-size: 9px;
  color: #e05050;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 3px;
  opacity: 0;
  transition: opacity 0.25s;
  /* left set by JS */
}

.sp-ad-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #e05050;
  animation: pulse-r 0.9s ease-in-out infinite;
}

@keyframes pulse-r {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(0.65);
  }
}
.sp-time {
  display: flex;
  justify-content: space-between;
  font-size: 8px;
  color: #8890a8;
  margin-top: 4px;
}

.sp-ctrls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 10px;
}

.sp-prev,
.sp-next {
  width: 10px;
  height: 10px;
  background: #b0b8cc;
  border-radius: 50%;
}

.sp-play {
  width: 28px;
  height: 28px;
  background: #1db954;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sp-play-tri {
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 9px solid white;
  margin-left: 2px;
}

/* ── YOUTUBE ── */
.yt-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.yt-logo-icon {
  width: 28px;
  height: 20px;
  background: #ff0000;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.yt-brand {
  font-size: 13px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.5px;
}

.yt-vid {
  background: #111827;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  height: 140px;
}

.yt-bg {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a2a4a, #2a3d6a);
}

/* video play icon hint */
.yt-play-hint {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.yt-play-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}

.yt-play-circle i {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
}

/* bottom controls bar */
.yt-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5px 8px 5px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
}

.yt-prog-bar {
  height: 3px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 2px;
  position: relative;
  overflow: visible;
  margin-bottom: 4px;
}

.yt-prog-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: #ff0000;
  border-radius: 2px;
  width: 0%;
}

/* Red AD marker on video progress */
.yt-ad-zone {
  position: absolute;
  top: -2px;
  height: 7px;
  border-radius: 2px;
  background: rgba(255, 200, 0, 0.85);
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.yt-time-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.yt-time-txt {
  font-size: 7px;
  color: rgba(255, 255, 255, 0.75);
}

.yt-vol {
  width: 14px;
  height: 7px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  margin-left: auto;
}

.yt-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}

.yt-av {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: linear-gradient(135deg, #a0c0f0, #6090e0);
  flex-shrink: 0;
}

.yt-tl {
  flex: 1;
}

.yt-t1 {
  height: 7px;
  background: #2a2e42;
  border-radius: 3px;
  width: 85%;
  margin-bottom: 4px;
}

.yt-t2 {
  height: 6px;
  background: #b0b8cc;
  border-radius: 3px;
  width: 55%;
}

/* ── WEBSITE ── */
.ws-hdr-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.ws-hdr-logo {
  width: 60px;
  height: 10px;
  background: #2a2e42;
  border-radius: 5px;
}

.ws-hdr-nav {
  display: flex;
  gap: 5px;
}

.ws-hdr-ni {
  width: 30px;
  height: 8px;
  background: #c8d0e8;
  border-radius: 4px;
}

.ws-layout {
  display: flex;
  gap: 10px;
  flex: 1;
}

.ws-main {
  flex: 2.2;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ws-sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.ws-l {
  height: 6px;
  border-radius: 3px;
}

.ws-l1 {
  background: #2a2e42;
  width: 88%;
}

.ws-l2 {
  background: #dde2f0;
}

.ws-l3 {
  background: #e0e4f0;
  width: 78%;
}

.ws-l4 {
  background: #e8eaf8;
  width: 60%;
}

.ws-img {
  height: 65px;
  background: linear-gradient(135deg, #dde6f8, #ccd4f0);
  border-radius: 6px;
}

.ws-more-lines {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
}

.ad-banner {
  border-radius: 7px;
  position: relative;
  overflow: hidden;
  background: rgba(224, 80, 80, 0.07);
  border: 0.5px dashed rgba(200, 60, 60, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3px;
}

.ad-banner-label {
  font-size: 8px;
  color: rgba(180, 50, 50, 0.5);
  font-weight: 700;
  letter-spacing: 0.4px;
}

.ad-banner-line {
  height: 5px;
  border-radius: 3px;
  background: rgba(200, 60, 60, 0.12);
}

.ad-b1 {
  height: 52px;
}

.ad-b2 {
  height: 42px;
}

.ad-blocked-cover {
  position: absolute;
  inset: 0;
  border-radius: 7px;
  background: rgba(235, 240, 255, 0.97);
  border: 0.5px solid rgba(74, 143, 224, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  opacity: 0;
  transition: opacity 0.3s;
}

.ad-blocked-cover i {
  font-size: 14px;
  color: #4a8fe0;
}

.ad-blocked-cover span {
  font-size: 8px;
  color: #4a8fe0;
  font-weight: 700;
  letter-spacing: 0.5px;
}

/* ── COOKIE ── */
.ck-page {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.ck-ph {
  height: 7px;
  border-radius: 4px;
}

.ck-ph1 {
  background: #2a2e42;
  width: 55%;
}

.ck-ph2 {
  background: #dde2f0;
}

.ck-ph3 {
  background: #e0e4f0;
  width: 80%;
}

.ck-ph4 {
  background: #e8eaf8;
  width: 62%;
}

.ck-ph5 {
  background: #dde2f0;
  width: 92%;
}

.ck-ph6 {
  background: #e4e8f4;
  width: 68%;
}

.ck-popup-wrap {
  position: absolute;
  inset: 36px 16px 16px;
  pointer-events: none;
}

.ck-popup {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  border: 0.5px solid rgba(100, 140, 220, 0.25);
  border-radius: 10px;
  padding: 12px 14px;
  box-shadow: 0 6px 24px rgba(30, 60, 120, 0.14);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: bottom center;
}

.ck-icon-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 5px;
}

.ck-cookie-icon {
  font-size: 16px;
  color: #ba7517;
}

.ck-title {
  font-size: 10.5px;
  font-weight: 700;
  color: #2a2e42;
}

.ck-body {
  font-size: 8px;
  color: #6070a0;
  line-height: 1.5;
  margin-bottom: 9px;
}

.ck-btns {
  display: flex;
  gap: 6px;
}

.ck-ok {
  flex: 1;
  height: 20px;
  background: #4a8fe0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  font-weight: 700;
  color: white;
}

.ck-no {
  flex: 1;
  height: 20px;
  background: #dde2f0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
  font-weight: 600;
  color: #6070a0;
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
}/*# sourceMappingURL=style.css.map */`, g = (a, n, i, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: a,
      event_desc: n,
      event_type: i,
      event_loc: s
    }), M(`Event: ${a} | ${n} | ${i} | ${s}`, "success");
  }, z = (a) => new Promise((n) => {
    const i = document.querySelector(a);
    i && n(i);
    const s = new MutationObserver(() => {
      const o = document.querySelector(a);
      o && (n(o), s.disconnect());
    });
    s.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), S = ({ name: a, dev: n }) => {
    const i = a.toLowerCase().replace(/\s/g, "_");
    g(`${i}_started`, `Experiment ${a} started`, "other", i), console.log(
      `%c EXP: ${a} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class u {
    constructor(n) {
      this.elements = n instanceof u ? n.elements : typeof n == "string" ? Array.from(document.querySelectorAll(n)) : n instanceof Element ? [n] : Array.isArray(n) ? n : Array.from(n);
    }
    on(n, i, s) {
      return typeof i == "function" && (s = i, i = ""), this.elements.forEach((o) => {
        o.addEventListener(n, function(h) {
          var r;
          if (i !== "") {
            let f = (r = h.target) == null ? void 0 : r.closest(i);
            f && (s == null || s.call(f, h));
          } else
            s == null || s.call(o, h);
        });
      }), this;
    }
    addClass(n) {
      return this.elements.forEach(function(i) {
        i.classList.add(n);
      }), this;
    }
    removeClass(n) {
      return this.elements.forEach(function(i) {
        i.classList.remove(n);
      }), this;
    }
    toggleClass(n) {
      return this.elements.forEach(function(i) {
        i.classList.toggle(n);
      }), this;
    }
    each(n) {
      for (let i of this.elements)
        n(new u(i), this.elements.indexOf(i));
      return this;
    }
    style(n, i) {
      const s = n.split("-").map((o, h) => h === 0 ? o : o.charAt(0).toUpperCase() + o.slice(1)).join("");
      return this.elements.forEach(function(o) {
        o.style[s] = i;
      }), this;
    }
    find(n) {
      const i = this.elements.map((s) => Array.from(s.querySelectorAll(n)));
      return new u(i.flat());
    }
    attr(n, i) {
      return i ? (this.elements.forEach(function(s) {
        s.setAttribute(n, i);
      }), this) : this.elements[0].getAttribute(n);
    }
    text(n) {
      return n ? (this.elements.forEach(function(i) {
        i.textContent = n;
      }), this) : this.elements[0].textContent || "";
    }
    html(n) {
      return n ? (this.elements.forEach(function(i) {
        i.innerHTML = n;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const k = (a) => new u(a), C = (a, n, i, s, o = 1e3, h = 0.5) => {
    let r, f;
    if (r = new IntersectionObserver(
      function(b) {
        b[0].isIntersecting === !0 ? f = setTimeout(() => {
          g(
            n,
            b[0].target.dataset.visible || s || "",
            "view",
            i
          ), r.disconnect();
        }, o) : (M("Element is not fully visible", "warn"), clearTimeout(f));
      },
      { threshold: [h] }
    ), typeof a == "string") {
      const b = document.querySelector(a);
      b && r.observe(b);
    } else
      r.observe(a);
  }, M = (a, n = "info") => {
    let i;
    switch (n) {
      case "info":
        i = "color: #3498db;";
        break;
      case "warn":
        i = "color: #f39c12;";
        break;
      case "error":
        i = "color: #e74c3c;";
        break;
      case "success":
        i = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${a}`, `${i} font-size: 16px; font-weight: 600`);
  }, $ = [
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
  ], Y = [
    { feature: "YouTube ads", ext: !0, app: !0 },
    { feature: "YouTube sponsor segment skip", ext: !1, app: !0 },
    { feature: "Spotify & desktop apps", ext: !1, app: !0 },
    { feature: "All browsers", ext: !1, app: !0 },
    { feature: "All websites", ext: !1, app: !0 },
    { feature: "Cookie consent auto-denial", ext: !1, app: !0 }
  ], H = "https://conversionrate-store.github.io/a-b_images/adblock/", p = {
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
  }, D = "/_astro/horizontal-aby-logo.Be8n11XS_Z59DT.svg", j = $.map(
    ({ icon: a, title: n, desc: i }) => (
      /* html */
      `
  <div class="ip2-safe__feature">
    <img class="ip2-safe__feature-icon" src="${H}${a}.webp" alt="${n}" />
    <h3 class="ip2-safe__feature-title">${n}</h3>
    <p class="ip2-safe__feature-desc">${i}</p>
  </div>`
    )
  ).join(""), q = Y.map(
    ({ feature: a, ext: n, app: i }, s) => (
      /* html */
      `
  <div class="ip2-comp__row${s % 2 === 0 ? " ip2-comp__row--odd" : ""}">
    <span class="ip2-comp__feature">${a}</span>
    <span class="ip2-comp__cell">${n ? p.check : p.cancel}</span>
    <span class="ip2-comp__cell">${i ? p.check : p.cancel}</span>
  </div>`
    )
  ).join(""), I = (
    /* html */
    `
<div class="ip2">

  <section class="ip2-hero">
    <div class="ip2-hero__inner">
      <div class="ip2-hero__left">
        <div class="ip2-hero__header">
          <a class="ip2-hero__logo" href="/">${p.adBlockLogo}</a>
          <span class="ip2-hero__badge">From the team behind Adblock for Youtube™</span>
        </div>
        <div class="ip2-hero__content">
          <h1 class="ip2-hero__title">You blocked YouTube ads. Now block them everywhere</h1>
          <p class="ip2-hero__desc">One more install. Ads gone from every app, browser and website on your PC — privately and securely.</p>
        </div>
        <div class="ip2-hero__cta">
          <a class="ip2-hero__btn" href="#">
            ${p.windows}
            Download AdBlock360
          </a>
          <div class="ip2-hero__meta">
            <span class="ip2-hero__meta-item">${p.shieldGray} Trusted by 17M users</span>
            <span class="ip2-hero__meta-item">${p.noCard} No credit card</span>
          </div>
        </div>
      </div>
      <div class="ip2-hero__right">
        
<div class="laptop-wrap">
    <div class="laptop-lid">
      <div class="screen-inner">
        <div class="screen-chrome">
          <div class="dot d1"></div><div class="dot d2"></div><div class="dot d3"></div>
          <div class="tab-bar">
            <div class="tab active"><div class="tab-dot"></div><div class="tab-line"></div></div>
            <div class="tab"><div class="tab-dot"></div><div class="tab-line" style="width:20px;"></div></div>
          </div>
          <div class="url-wrap"></div>
        </div>
        <div class="screen-body">

          <!-- SPOTIFY -->
          <div class="float-win" id="winSp">
            <div class="fw-bar"><div class="fw-d fwd1"></div><div class="fw-d fwd2"></div><div class="fw-d fwd3"></div><div class="fw-url"></div></div>
            <div class="fw-body">
              <div class="sp-header">
                <div class="sp-logo"><svg viewBox="0 0 168 168" width="14" height="14" fill="white"><path d="M84 0C37.6 0 0 37.6 0 84s37.6 84 84 84 84-37.6 84-84S130.4 0 84 0zm38.5 121.2c-1.5 2.5-4.7 3.2-7.2 1.7-19.8-12.1-44.7-14.8-74.1-8.1-2.8.6-5.6-1.1-6.3-3.9-.6-2.8 1.1-5.6 3.9-6.3 32.1-7.3 59.6-4.2 81.9 9.4 2.5 1.5 3.3 4.7 1.8 7.2zm10.3-22.9c-1.9 3.1-6 4.1-9.1 2.2-22.7-13.9-57.2-18-84-9.9-3.5 1-7.1-1-8.1-4.5-1-3.5 1-7.1 4.5-8.1 30.7-9.3 68.8-4.8 95 11.2 3 1.9 4 6 2.1 9.1h-.4zm.9-23.8c-27.2-16.2-72.1-17.7-98.1-9.8-4.1 1.2-8.5-1.1-9.7-5.2-1.2-4.1 1.1-8.5 5.2-9.7 29.8-9 79.3-7.3 110.6 11.3 3.7 2.2 4.9 7 2.7 10.7-2.2 3.7-7.1 4.9-10.7 2.7z"/></svg></div>
                <span class="sp-brand">Spotify</span>
              </div>
              <div class="sp-row">
                <div class="sp-art"></div>
                <div class="sp-info"><div class="sp-t"></div><div class="sp-a"></div></div>
              </div>
              <div class="sp-prog-wrap">
                <div class="sp-ad-label" id="spAdLbl"><div class="sp-ad-dot"></div>AD BREAK</div>
                <div class="sp-track-bg">
                  <div class="sp-fill" id="spFill"></div>
                  <div class="sp-ad-marker" id="spAdMarker"><div class="sp-ad-marker-txt">AD</div></div>
                </div>
                <div class="sp-time"><span id="spTimeL">0:00</span><span>3:42</span></div>
              </div>
              <div class="sp-ctrls">
                <div class="sp-prev"></div>
                <div class="sp-play"><div class="sp-play-tri"></div></div>
                <div class="sp-next"></div>
              </div>
            </div>
            <!-- Centered block banner -->
            <div class="block-banner" id="spBanner">
              <div class="block-banner-icon">
                <div class="block-banner-ripple"></div>
                <div class="block-banner-ripple2"></div>
                <i class="ti ti-shield-check"></i>
              </div>
              <div class="block-banner-texts"><div class="block-banner-title">Ad Blocked</div><div class="block-banner-sub">Spotify ad removed from track</div></div>
            </div>
          </div>

          <!-- YOUTUBE -->
          <div class="float-win" id="winYt">
            <div class="fw-bar"><div class="fw-d fwd1"></div><div class="fw-d fwd2"></div><div class="fw-d fwd3"></div><div class="fw-url"></div></div>
            <div class="fw-body">
              <div class="yt-header">
                <div class="yt-logo-icon"><svg viewBox="0 0 24 24" width="12" height="12" fill="white"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.5v-7l6.3 3.5-6.3 3.5z"/></svg></div>
                <span class="yt-brand">YouTube</span>
              </div>
              <div class="yt-vid">
                <div class="yt-bg"></div>
                <div class="yt-play-hint"><div class="yt-play-circle"><i class="ti ti-player-play-filled"></i></div></div>
                <div class="yt-controls">
                  <div class="yt-prog-bar">
                    <div class="yt-prog-fill" id="ytFill"></div>
                    <div class="yt-ad-zone" id="ytAdZone" style="left:28%;width:14%;"></div>
                  </div>
                  <div class="yt-time-row">
                    <span class="yt-time-txt" id="ytTimeL">0:00</span>
                    <span class="yt-time-txt">/ 12:34</span>
                    <div class="yt-vol"></div>
                  </div>
                </div>
              </div>
              <div class="yt-meta"><div class="yt-av"></div><div class="yt-tl"><div class="yt-t1"></div><div class="yt-t2"></div></div></div>
            </div>
            <!-- Centered block banner -->
            <div class="block-banner" id="ytBanner">
              <div class="block-banner-icon">
                <div class="block-banner-ripple"></div>
                <div class="block-banner-ripple2"></div>
                <i class="ti ti-shield-check"></i>
              </div>
              <div class="block-banner-texts"><div class="block-banner-title">Ad Blocked</div><div class="block-banner-sub">YouTube ad skipped automatically</div></div>
            </div>
          </div>

          <!-- WEBSITE -->
          <div class="float-win" id="winWs">
            <div class="fw-bar"><div class="fw-d fwd1"></div><div class="fw-d fwd2"></div><div class="fw-d fwd3"></div><div class="fw-url"></div></div>
            <div class="fw-body">
              <div class="ws-hdr-bar">
                <div class="ws-hdr-logo"></div>
                <div class="ws-hdr-nav"><div class="ws-hdr-ni"></div><div class="ws-hdr-ni"></div><div class="ws-hdr-ni"></div></div>
              </div>
              <div class="ws-layout">
                <div class="ws-main">
                  <div class="ws-l ws-l1"></div><div class="ws-l ws-l2"></div><div class="ws-l ws-l3"></div>
                  <div class="ws-img"></div>
                  <div class="ws-more-lines"><div class="ws-l ws-l4"></div><div class="ws-l ws-l2"></div><div class="ws-l ws-l3"></div></div>
                </div>
                <div class="ws-sidebar">
                  <div class="ad-banner ad-b1" id="adB1">
                    <div class="ad-banner-line" style="width:55%;"></div>
                    <div class="ad-banner-label">ADVERTISEMENT</div>
                    <div class="ad-banner-line" style="width:40%;"></div>
                    <div class="ad-blocked-cover" id="adB1Cover"><i class="ti ti-ban"></i><span>AD BLOCKED</span></div>
                  </div>
                  <div class="ad-banner ad-b2" id="adB2">
                    <div class="ad-banner-label">AD</div>
                    <div class="ad-blocked-cover" id="adB2Cover"><i class="ti ti-ban"></i><span>AD BLOCKED</span></div>
                  </div>
                  <div class="ws-l ws-l2" style="margin-top:2px;"></div>
                  <div class="ws-l ws-l3"></div>
                </div>
              </div>
            </div>
            <div class="block-banner" id="wsBanner">
              <div class="block-banner-icon">
                <div class="block-banner-ripple"></div>
                <div class="block-banner-ripple2"></div>
                <i class="ti ti-shield-check"></i>
              </div>
              <div class="block-banner-texts"><div class="block-banner-title">2 Ads Blocked</div><div class="block-banner-sub">Banner ads removed from page</div></div>
            </div>
          </div>

          <!-- COOKIE -->
          <div class="float-win" id="winCk">
            <div class="fw-bar"><div class="fw-d fwd1"></div><div class="fw-d fwd2"></div><div class="fw-d fwd3"></div><div class="fw-url"></div></div>
            <div class="fw-body" style="position:relative;">
              <div class="ck-page">
                <div class="ck-ph ck-ph1"></div><div class="ck-ph ck-ph2"></div>
                <div class="ck-ph ck-ph3"></div><div class="ck-ph ck-ph4"></div>
                <div class="ck-ph ck-ph5"></div><div class="ck-ph ck-ph6"></div>
              </div>
              <div class="ck-popup-wrap">
                <div class="ck-popup" id="ckPopup">
                  <div class="ck-icon-row">
                    <i class="ti ti-cookie ck-cookie-icon"></i>
                    <span class="ck-title">Cookie Notice</span>
                  </div>
                  <div class="ck-body">We use cookies to enhance your browsing experience and analyze site traffic. By clicking "Accept All" you consent to our use of cookies.</div>
                  <div class="ck-btns">
                    <div class="ck-ok">Accept All</div>
                    <div class="ck-no">Decline</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="block-banner" id="ckBanner">
              <div class="block-banner-icon">
                <div class="block-banner-ripple"></div>
                <div class="block-banner-ripple2"></div>
                <i class="ti ti-cookie-off"></i>
              </div>
              <div class="block-banner-texts"><div class="block-banner-title">Cookie Blocked</div><div class="block-banner-sub">Consent popup auto-dismissed</div></div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="laptop-base"></div>
    <div class="laptop-foot"></div>
  </div>

      </div>
    </div>
  </section>

  <section class="ip2-safe">
    <div class="ip2-safe__inner">
      <div class="ip2-safe__head">
        <h2 class="ip2-safe__title">Is AdBlock360 Safe?</h2>
        <p class="ip2-safe__subtitle">AdBlock360 is the real app. Fully vetted, zero adware — unlike the fake "AdBlock 360" showing up in your search results.</p>
      </div>
      <div class="ip2-safe__features">${j}</div>
      <div class="ip2-safe__bottom">
        <div class="ip2-safe__faq">
          <div class="ip2-safe__faq-icon">${p.sysAccess}</div>
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
						<img src="${H}cyber_news.webp" alt="Cybernews logo" height="103" width="103">
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
          ${p.check}
          <span>AdBlock360 doesn't replace your extension. It finishes the job.</span>
        </div>
      </div>
      <div class="ip2-comp__right">
        <div class="ip2-comp__table">
          <div class="ip2-comp__table-head">
            <div></div>
            <div class="ip2-comp__col-logo ip2-comp__col-logo--yt">
              <img src="${D}" alt="Adblock for YouTube" height="23">
            </div>
            <div class="ip2-comp__col-logo">${p.adBlockLogo}</div>
          </div>
          ${q}
        </div>
      </div>
    </div>
  </section>

</div>
`
  ), O = (
    /* html */
    `
<div class="ip2-sticky">
  <div class="ip2-sticky__inner">
    <span class="ip2-sticky__meta">
      ${p.noCard}
      No credit card
    </span>
    <a class="ip2-sticky__btn" href="#">
      ${p.windows}
      Download AdBlock360
    </a>
  </div>
</div>
`
  );
  S({ name: "Install Page 1", dev: "YK" });
  class P {
    constructor() {
      this.init();
    }
    async init() {
      await z("body"), document.head.insertAdjacentHTML("beforeend", `<style class="ip2-style">${E}</style>`), await z("main"), k("main").elements[0].insertAdjacentHTML("beforebegin", I), document.body.insertAdjacentHTML("beforeend", O), this.initStickyBar(), this.initCtaClicks(), this.initHeroAnimation(), this.initSectionsVisibility(), g("ip2_view", "Install Page 2 viewed", "view", "install_page_2");
    }
    initStickyBar() {
      const n = document.querySelector(".ip2-hero__btn"), i = document.querySelector(".ip2-sticky");
      if (!n || !i) return;
      new IntersectionObserver(
        ([o]) => {
          i.classList.toggle("is-visible", !o.isIntersecting);
        },
        { threshold: 0 }
      ).observe(n);
    }
    initCtaClicks() {
      const n = document.querySelector('#main-cta, [data-event="download"]');
      k(".ip2-hero__btn").on("click", () => {
        n == null || n.click(), g("ip2_hero_cta_click", "Download AdBlock360 — hero", "click", "install_page_2");
      }), k(".ip2-sticky__btn").on("click", () => {
        n == null || n.click(), g("ip2_sticky_cta_click", "Download AdBlock360 — sticky", "click", "install_page_2");
      });
    }
    initHeroAnimation() {
      const n = (e) => new Promise((t) => setTimeout(t, e)), i = (e) => document.getElementById(e);
      function s(e) {
        const t = i(e);
        t.classList.remove("hiding"), t.classList.add("visible");
      }
      function o(e) {
        return new Promise((t) => {
          const c = i(e);
          c.classList.remove("visible"), c.classList.add("hiding"), setTimeout(() => {
            c.classList.remove("hiding"), t();
          }, 260);
        });
      }
      function h(e) {
        i(e).classList.add("show"), i(e).classList.remove("hide");
      }
      function r(e) {
        i(e).classList.remove("show"), i(e).classList.add("hide"), setTimeout(() => i(e).classList.remove("hide"), 400);
      }
      const f = 35, b = 53;
      let x = null;
      async function F() {
        const e = i("spFill"), t = i("spAdMarker"), c = i("spAdLbl"), d = i("spTimeL");
        e.style.transition = "none", e.style.width = "0%", t.style.transition = "none", t.style.left = f + "%", t.style.width = b - f + "%", t.style.opacity = "1", t.style.transform = "scaleY(1)", c.style.opacity = "0", c.style.left = f + "%", x && (clearInterval(x), x = null), r("spBanner"), s("winSp"), await n(400);
        let l = 0, m = !1;
        e.style.transition = "width 0.04s linear", await new Promise((A) => {
          x = setInterval(() => {
            l += 0.55;
            const _ = l >= f && l < b && m ? b : l;
            e.style.width = Math.min(_, 100) + "%";
            const Z = Math.floor(l / 100 * 222);
            d.textContent = `${Math.floor(Z / 60)}:${String(Z % 60).padStart(2, "0")}`, l >= f - 8 && l < f && !m && (c.style.opacity = "1"), l >= f && !m && (m = !0, c.style.opacity = "0", h("spBanner"), t.style.transition = "width 0.5s cubic-bezier(.4,0,.2,1), opacity 0.4s ease, transform 0.4s cubic-bezier(.4,0,.2,1)", t.style.width = "0%", t.style.opacity = "0", t.style.transform = "scaleY(0)", setTimeout(() => {
              e.style.transition = "none", l = b, e.style.width = l + "%", e.style.transition = "width 0.04s linear";
            }, 300), setTimeout(() => r("spBanner"), 1400)), l >= 90 && (clearInterval(x), x = null, A());
          }, 22);
        }), await n(300);
      }
      const w = 28, y = 42;
      let v = null;
      async function N() {
        const e = i("ytFill"), t = i("ytAdZone"), c = i("ytTimeL");
        e.style.transition = "none", e.style.width = "0%", t.style.transition = "none", t.style.left = w + "%", t.style.width = y - w + "%", t.style.opacity = "1", t.style.transform = "scaleY(1)", v && (clearInterval(v), v = null), r("ytBanner"), s("winYt"), await n(400);
        let d = 0, l = !1;
        e.style.transition = "width 0.04s linear", await new Promise((m) => {
          v = setInterval(() => {
            d += 0.5;
            const A = d >= w && d < y && l ? y : d;
            e.style.width = Math.min(A, 100) + "%";
            const _ = Math.floor(d / 100 * 754);
            c.textContent = `${Math.floor(_ / 60)}:${String(_ % 60).padStart(2, "0")}`, d >= w && !l && (l = !0, h("ytBanner"), t.style.transition = "width 0.5s cubic-bezier(.4,0,.2,1), opacity 0.4s ease, transform 0.4s ease", t.style.width = "0%", t.style.opacity = "0", t.style.transform = "scaleY(0)", setTimeout(() => {
              e.style.transition = "none", d = y, e.style.width = d + "%", e.style.transition = "width 0.04s linear";
            }, 300), setTimeout(() => r("ytBanner"), 1400)), d >= 90 && (clearInterval(v), v = null, m());
          }, 22);
        }), await n(300);
      }
      async function W() {
        const e = i("adB1"), t = i("adB2"), c = i("adB1Cover"), d = i("adB2Cover");
        e.style.transition = "none", t.style.transition = "none", e.style.opacity = "1", e.style.transform = "scale(1)", t.style.opacity = "1", t.style.transform = "scale(1)", c.style.opacity = "0", d.style.opacity = "0", r("wsBanner"), s("winWs"), await n(500), c.style.opacity = "1", await n(200), d.style.opacity = "1", await n(100), h("wsBanner"), await n(1e3), r("wsBanner"), await n(300), e.style.transition = "opacity 0.35s ease, transform 0.35s ease", t.style.transition = "opacity 0.35s ease, transform 0.35s ease", e.style.opacity = "0", e.style.transform = "scale(0.85)", await n(120), t.style.opacity = "0", t.style.transform = "scale(0.85)", await n(500);
      }
      async function R() {
        const e = i("ckPopup");
        e.style.transition = "none", e.style.opacity = "1", e.style.transform = "translateY(0) scale(1)", r("ckBanner"), s("winCk"), await n(700), e.style.transition = "all 0.35s cubic-bezier(.4,0,.2,1)", e.style.opacity = "0", e.style.transform = "translateY(14px) scale(0.88)", await n(200), h("ckBanner"), await n(1600), r("ckBanner"), await n(300);
      }
      const V = [
        ["winSp", F],
        ["winYt", N],
        ["winWs", W],
        ["winCk", R]
      ];
      let L = 0;
      async function T() {
        const [e, t] = V[L];
        await t(), await o(e), await n(300), L = (L + 1) % V.length, T();
      }
      setTimeout(T, 350);
      const B = document.getElementById("main-cta");
      [
        {
          selector: ".sp-play",
          eventName: "ip2_anim_spotify_click",
          desc: "Animation click: Spotify play control"
        },
        {
          selector: ".yt-play-hint",
          eventName: "ip2_anim_youtube_click",
          desc: "Animation click: YouTube play control"
        },
        {
          selector: ".ck-ok",
          eventName: "ip2_anim_cookie_accept_click",
          desc: "Animation click: Cookie Accept All"
        },
        {
          selector: ".ck-no",
          eventName: "ip2_anim_cookie_decline_click",
          desc: "Animation click: Cookie Decline"
        }
      ].forEach(({ selector: e, eventName: t, desc: c }) => {
        document.querySelectorAll(e).forEach((d) => {
          d.addEventListener("click", (l) => {
            l.preventDefault(), B == null || B.click(), g(t, c, "click", "install_page_2");
          });
        });
      });
    }
    initSectionsVisibility() {
      C(".ip2-hero", "ip2_hero_visible", "install_page_2", "Hero section visible"), C(".ip2-safe", "ip2_safe_visible", "install_page_2", "Safe section visible"), C(".ip2-comp", "ip2_comp_visible", "install_page_2", "Comparison section visible");
    }
  }
  new P();
})();
//# sourceMappingURL=index.js.map
