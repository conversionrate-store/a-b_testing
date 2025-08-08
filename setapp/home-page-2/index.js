(function() {
  "use strict";
  const w = (m) => new Promise((t) => {
    const a = document.querySelector(m);
    a && t(a);
    const p = new MutationObserver(() => {
      const e = document.querySelector(m);
      e && (t(e), p.disconnect());
    });
    p.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), _ = ({ name: m, dev: t }) => {
    console.log(
      `%c EXP: ${m} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, v = (m) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", m, "variant_1"));
    }, 1e3);
  }, M = (m, t = "info") => {
    let a;
    switch (t) {
      case "info":
        a = "color: #3498db;";
        break;
      case "warn":
        a = "color: #f39c12;";
        break;
      case "error":
        a = "color: #e74c3c;";
        break;
      case "success":
        a = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${m}`, `${a} font-size: 16px; font-weight: 600`);
  };
  class x {
    constructor() {
      this.init();
    }
    init() {
      this.changeDescriptionText(), this.addTrialDescriptionText();
    }
    changeDescriptionText() {
      const t = document.querySelector(
        "section.header .header__description"
      );
      t && (t.textContent = "Why pay for apps one by one? Setapp gives you an entire toolkit of 260+ top-rated apps — all in one smart, affordable subscription");
    }
    addTrialDescriptionText() {
      const t = (
        /* HTML */
        `
      <div class="crs__trial-description">
        <span>Cancel anytime</span>
        <span class="crs-dot">•</span>
        <span>No charges during trial</span>
      </div>
    `
      ), a = document.querySelector(
        "section.header .header__buttons-container"
      );
      a && a.insertAdjacentHTML("afterend", t);
    }
  }
  const q = `/* Apps Container */
.crs__apps-container {
  background: rgba(0, 0, 0, 0.02);
  border-radius: 24px;
  position: relative;
  width: 100%;
  height: 584px;
  border: 0.5px solid rgba(255, 255, 255, 0.26);
  box-shadow: 0px 20px 25px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.crs__apps-container::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 0.5px solid rgba(255, 255, 255, 0.26);
  border-radius: 24px;
  pointer-events: none;
}

/* Main Content Layout */
.crs__apps-container .crs__apps-main-content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: flex-start;
  padding: 24px 0 0;
  height: 100%;
  overflow: hidden;

  min-height: 0;
  flex: 1;
}

/* Tabs Navigation */
.crs__apps-container .crs__tabs-nav {
  background: rgba(32, 32, 37, 0.5);
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  padding: 6px;
  border-radius: 8px;
  flex-shrink: 0;
}

.crs__apps-container .crs__tabs-nav:has(.crs__back-button-nav.active) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 24px 40px 16px;
  z-index: 2;
  background: rgba(20, 20, 22, 0.5);
  backdrop-filter: blur(12px);
}
/* Tab Buttons Container */
.crs__apps-container .crs__tab-buttons-container {
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
}

/* Back Button Navigation */
.crs__apps-container .crs__back-button-nav {
  background: transparent;
  border: none;
  display: none;
  flex-direction: row;
  gap: 8px;
  height: 28px;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  font-size: 16px;
  line-height: 24px;
  text-align: center;
  white-space: nowrap;
  color: #fff;
}

.crs__apps-container .crs__back-button-nav.active {
  display: flex;
}

.crs__apps-container .crs__back-button-nav svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* Tab Buttons */
.crs__apps-container .crs__tab-button {
  background: transparent;
  border: none;
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 28px;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  font-size: 14px;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
  color: #cfcfcf;

  flex-shrink: 0;
}

.crs__apps-container .crs__tab-button.active {
  background: #ffffff;
  color: #000000;
}

.crs__apps-container .crs__tab-button:hover:not(.active) {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
}

/* Tab Content */
.crs__apps-container .crs__tab-content {
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Tab Panels */
.crs__apps-container .crs__tab-panel {
  display: none;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  min-height: 0;
  flex: 1;
  flex-direction: column;
}

.crs__apps-container .crs__tab-panel.active {
  display: flex;
}

/* Apps Grid */

.crs__apps-container .crs__apps-grid-view {
  display: flex;
  height: 100%;
}
.crs__apps-container .crs__apps-grid {
  margin-inline: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 4px 171px 4px;
  border-radius: 20px;
  width: 100%;

  min-height: 0;
}

/* App Cards */
.crs__apps-container .crs__app-card {
  display: flex;
  flex-direction: row;
  gap: 16px;
  height: 80px;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  width: 262px;
  cursor: pointer;
  transition: transform 0.2s ease;
  border-radius: 8px;

  flex-shrink: 0;
}

@media (max-width: 1240px) {
  .crs__apps-container .crs__app-card {
    width: 46%;
  }
}

/* .crs__apps-container .crs__app-card:hover {
  background: rgba(255, 255, 255, 0.05);
} */

/* App Icon */
.crs__apps-container .crs__app-icon {
  flex-shrink: 0;
  width: 74px;
  height: 74px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top left;
  border-radius: 8px;
  overflow: hidden;
}

.crs__apps-container .crs__app-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* App Info */
.crs__apps-container .crs__app-info {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 0;
  padding: 0;
  color: #ffffff;
  text-align: left;
  flex: 1;
  min-width: 0;
}

/* App Name */
.crs__apps-container .crs__app-name {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  color: #ffffff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  min-width: 0;
}

/* App Description */
.crs__apps-container .crs__app-description {
  font-weight: 400;
  font-size: 13px;
  line-height: 24.92px;
  margin: 0;
  color: #ffffff;
  opacity: 0.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 100%;
  min-width: 0;
}

/* App Details View */
.crs__apps-container .crs__app-details-view {
  margin-inline: 20px;
  display: none;
  width: calc(100% - 40px);
  height: 100%;
  overflow-y: auto;
  padding: 24px 4px 180px 4px;
}

.crs__apps-container .crs__app-details-content {
  padding-top: 24px;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

/* App Detail Header */
.crs__apps-container .crs__app-detail-header {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.crs__apps-container .crs__app-detail-icon {
  flex-shrink: 0;
  width: 104px;
  height: 104px;
  overflow: hidden;
}

.crs__apps-container .crs__app-detail-icon-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}

.crs__apps-container .crs__app-detail-info {
  flex: 1;
  min-width: 0;
}

.crs__apps-container .crs__app-detail-name {
  margin: 0;
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  color: #ffffff;
  text-align: left;
}

.crs__apps-container .crs__app-detail-description {
  margin: 0;
  margin-top: 6px;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #fff;
  text-align: left;
}

.crs__apps-container .crs__app-detail-rating {
  margin-top: 12px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

.crs__apps-container .crs__rating-icon {
  display: flex;
  align-items: center;
}

.crs__apps-container :is(.crs__rating-value, .crs__rating-dot) {
  font-weight: 600;
  font-size: 26px;
  line-height: 1;
  color: #ffffff;
}

.crs__apps-container .crs__rating-count {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.5);
}

/* App Detail Platforms */
.crs__apps-container .crs__app-detail-platforms {
  margin-top: 12px;
}

.crs__apps-container .crs__platforms-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.crs__apps-container .crs__platform-badge {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 4px 12px;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.crs__apps-container .crs__platform-badge:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

/* App Detail Divider */
.crs__apps-container .crs__app-detail-divider {
  height: 1px;
  background: rgba(235, 235, 236, 0.13);
  margin: 25px 0;
}

.crs__apps-container .crs__app-detail-long-description {
  padding-inline: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  margin: 0;
}

/* App Detail Features */
.crs__apps-container .crs__app-detail-features {
  margin-top: 24px;
  padding-inline: 16px;
}

.crs__apps-container .crs__app-features-list {
  display: grid;
  gap: 7px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.crs__apps-container .crs__app-feature-item {
  display: flex;
  gap: 10px;
  align-items: center;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
}

.crs__apps-container .crs__app-feature-item::before {
  content: '';
  width: 12px;
  height: 13px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" fill="none"><path fill="%23fff" d="M.948 7.583a1.531 1.531 0 0 1 0-2.165l3.97-3.97a1.531 1.531 0 0 1 2.164 0l3.97 3.97a1.53 1.53 0 0 1 0 2.165l-3.97 3.969a1.53 1.53 0 0 1-2.165 0L.948 7.582Z" opacity=".65"/></svg>');
  color: #ffffff;
}

/* Pricing Section */
.crs__apps-container .crs__pricing-section {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 147px;
  background: linear-gradient(
    to bottom,
    rgba(28, 27, 30, 0.5),
    rgba(28, 27, 30, 1) 34.956%
  );
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 10;
}

.crs__apps-container .crs__pricing-section::before {
  content: '';
  position: absolute;
  inset: 0;
  border-top: 0.5px solid rgba(255, 255, 255, 0.26);

  pointer-events: none;
  box-shadow: 0px -4px 56px 12px rgba(9, 9, 9, 1);
}

.crs__apps-container .crs__pricing-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  justify-content: center;
  padding: 24px;
  width: 100%;
  height: 100%;
}

.crs__apps-container .crs__pricing-row {
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 21px;
}

.crs__apps-container .crs__pricing-row:first-child {
  font-weight: 400;
  font-size: 18px;
  line-height: normal;
  color: #ffffff;
  opacity: 0.65;
  padding-right: 6px;
}

.crs__apps-container .crs__pricing-row.crs__pricing-highlight {
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
  color: #ffffff;
  padding-right: 6px;
}

.crs__apps-container .crs__pricing-label {
  flex: 1;
  text-align: left;
  min-width: 0;
}

.crs__apps-container .crs__pricing-value {
  text-align: center;
  white-space: nowrap;
}

/* App Modal */
.crs__app-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: none;
  align-items: center;
  justify-content: center;
}

.crs__app-modal.active {
  display: flex;
}

.crs__modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
}

.crs__modal-content {
  position: relative;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  background: rgba(28, 27, 30, 0.95);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.5);
}

.crs__modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
}

.crs__modal-title {
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;
  margin: 0;
}

.crs__modal-close {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 28px;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.crs__modal-close:hover {
  background: rgba(255, 255, 255, 0.1);
}

.crs__modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
}

.crs__modal-loading {
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  padding: 40px 0;
}

.crs__modal-details {
  color: #ffffff;
}

/* App Detail Sections */
.crs__app-detail-section {
  margin-bottom: 32px;
}

.crs__app-detail-section:last-child {
  margin-bottom: 0;
}

.crs__app-detail-section h4 {
  font-weight: 600;
  font-size: 18px;
  margin: 0 0 16px 0;
  color: #ffffff;
}

.crs__app-detail-section p {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 12px 0;
  color: rgba(255, 255, 255, 0.8);
}

.crs__app-detail-section ul {
  margin: 0;
  padding-left: 20px;
}

.crs__app-detail-section li {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.8);
}

/* App Header */
.crs__app-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.crs__app-detail-icon {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0;
}

.crs__app-header-info h3 {
  font-weight: 600;
  font-size: 20px;
  margin: 0 0 8px 0;
  color: #ffffff;
}

.crs__app-header-info p {
  font-weight: 400;
  font-size: 14px;
  margin: 0 0 4px 0;
  color: rgba(255, 255, 255, 0.7);
}

/* App Screenshots */
.crs__app-screenshots {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding: 8px 0;
}

.crs__app-screenshot {
  width: 200px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
}

/* App Tech Info */
.crs__app-tech-info p {
  margin-bottom: 8px;
}

.crs__app-tech-info strong {
  color: #ffffff;
  font-weight: 600;
}

/* App Detail Link */
.crs__app-detail-link {
  display: inline-block;
  background: #007aff;
  color: #ffffff;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 8px;

  font-weight: 600;
  font-size: 14px;
  transition: background-color 0.2s ease;
}

.crs__app-detail-link:hover {
  background: #0056cc;
}

/* Scrollbar Styling - Hidden */
.crs__apps-container .crs__apps-grid::-webkit-scrollbar {
  width: 0;
  display: none;
}

.crs__apps-container .crs__apps-grid::-webkit-scrollbar-track {
  display: none;
}

.crs__apps-container .crs__apps-grid::-webkit-scrollbar-thumb {
  display: none;
}

.crs__apps-container .crs__apps-grid::-webkit-scrollbar-thumb:hover {
  display: none;
}

.crs__modal-body::-webkit-scrollbar {
  width: 0;
  display: none;
}

.crs__modal-body::-webkit-scrollbar-track {
  display: none;
}

.crs__modal-body::-webkit-scrollbar-thumb {
  display: none;
}

.crs__modal-body::-webkit-scrollbar-thumb:hover {
  display: none;
}

/* App Details View Scrollbar Styling - Hidden */
.crs__apps-container .crs__app-details-view::-webkit-scrollbar {
  width: 0;
  display: none;
}

.crs__apps-container .crs__app-details-view::-webkit-scrollbar-track {
  display: none;
}

.crs__apps-container .crs__app-details-view::-webkit-scrollbar-thumb {
  display: none;
}

.crs__apps-container .crs__app-details-view::-webkit-scrollbar-thumb:hover {
  display: none;
}

/* Animation for tab switching */
.crs__apps-container .crs__tab-panel {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.crs__apps-container .crs__tab-panel.active {
  opacity: 1;
  transform: translateY(0);
}

/* Loading state */
.crs__apps-container .crs__app-card.loading {
  opacity: 0.6;
  pointer-events: none;
}

.crs__apps-container .crs__app-card.loading .crs__app-icon {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

.crs__app-details-actions {
  margin-top: 32px;
  display: flex;
  justify-content: center;
}

/* Loading States */
.crs__loading-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;
  color: transparent;
  user-select: none;
}

.crs__error-message {
  color: #ff6b6b;
  font-style: italic;
  opacity: 0.8;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
`, b = [
    {
      name: "Supercharge",
      description: "Supercharge your Mac",
      url: "https://setapp.com/apps/supercharge",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/742/44298/icon-1753962404-688b57a457992.png",
      rating: "100",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Bartender",
      description: "Personalize your menu bar",
      url: "https://setapp.com/apps/bartender",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/153/42799/icon-1748962599-683f0d271f5a8.png",
      rating: "99",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Lungo",
      description: "Keep your Mac awake",
      url: "https://setapp.com/apps/lungo",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/270/42370/icon-1744999749-68029545752bd.png",
      rating: "99",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Paste",
      description: "Never lose anything you copy",
      url: "https://setapp.com/apps/paste",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/98/44331/icon-1754378020-6891af244e3fa.png",
      rating: "98",
      platforms: ["Mac", " iOS"],
      tab: "Optimize"
    },
    {
      name: "BetterTouchTool",
      description: "Save time with custom actions",
      url: "https://setapp.com/apps/bettertouchtool",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/295/42221/icon-1743429358-67ea9eee7ee73.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "AlDente Pro",
      description: "Set battery charging limits",
      url: "https://setapp.com/apps/aldente-pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/483/44047/icon-1751465622-68653e960e1df.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "One Switch",
      description: "Access macOS features fast",
      url: "https://setapp.com/apps/one-switch",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/349/39552/icon-1720703221-668fd8f5909f4.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "QuitAll",
      description: "Speed up Mac by quitting all apps",
      url: "https://setapp.com/apps/quit-all-mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/493/10507/icon-1715515857-6640b1d134f36.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "PopClip",
      description: "Use instant text actions",
      url: "https://setapp.com/apps/popclip",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/159/41304/icon-1734542637-6763052df1bf2.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Mission Control Plus",
      description: "Close windows from Mission Control",
      url: "https://setapp.com/apps/mission-control-plus",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/376/42548/icon-1746731563-681d022b89238.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Unclutter",
      description: "Manage files, notes, clipboard",
      url: "https://setapp.com/apps/unclutter",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/242/41940/icon-1740661852-67c0645c93b70.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "CleanMyMac",
      description: "Tidy up your Mac",
      url: "https://setapp.com/apps/cleanmymac",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/78/44299/icon-1753964561-688b601184b95.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "iStat Menus",
      description: "Track CPU, GPU, sensors, etc.",
      url: "https://setapp.com/apps/istat-menus",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/144/41794/icon-1739274958-67ab3ace7a0bf.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "24 Hour Wallpaper",
      description: "100+ dynamic wallpapers",
      url: "https://setapp.com/apps/24-hour-wallpaper",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/405/41207/icon-1733878798-6758e40ea005c.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "OpenIn",
      description: "Open links in select browsers",
      url: "https://setapp.com/apps/openin",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/459/41451/icon-1736125870-677b2daede071.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Swish",
      description: "Set up quick trackpad actions",
      url: "https://setapp.com/apps/swish",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/403/41992/icon-1741196417-67c88c81798d1.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "TripMode",
      description: "Save internet data",
      url: "https://setapp.com/apps/tripmode",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/244/41564/icon-1737319715-678d6523e2898.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Pareto Security",
      description: "Check your security settings",
      url: "https://setapp.com/apps/pareto-security",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/496/44240/icon-1753431494-68833dc61722b.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "WiFi Explorer",
      description: "Fix WiFi problems",
      url: "https://setapp.com/apps/wifi-explorer",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/74/43908/icon-1751051946-685eeeaa18969.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Magic Window Air",
      description: "Try aerial screen savers",
      url: "https://setapp.com/apps/magic-window-air",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/437/8979/icon-1696301083-651b801b55c0c.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Step Two",
      description: "Simplify two-step authentication",
      url: "https://setapp.com/apps/step-two",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/378/7227/icon-1671473505-63a0a9610bff6.png",
      rating: "97",
      platforms: ["Mac", " iOS"],
      tab: "Optimize"
    },
    {
      name: "Paletro",
      description: "Access app menu commands",
      url: "https://setapp.com/apps/paletro",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/465/41928/icon-1740573715-67bf0c13e78c0.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Transloader",
      description: "Start downloads on Mac remotely",
      url: "https://setapp.com/apps/transloader",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/481/10253/icon-1712837431-6617d33756e3b.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "AirBuddy",
      description: "Monitor your wireless devices",
      url: "https://setapp.com/apps/airbuddy",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/513/40120/icon-1726002236-66e0b43cd7afc.png",
      rating: "96",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "NetSpot",
      description: "Find the best network connection",
      url: "https://setapp.com/apps/netspot",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/223/44191/icon-1752839399-687a34e7a08fc.png",
      rating: "96",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Usage",
      description: "Monitor device performance",
      url: "https://setapp.com/apps/usage",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/637/44267/icon-1753730699-6887ce8b34926.png",
      rating: "96",
      platforms: ["Mac", " iOS"],
      tab: "Optimize"
    },
    {
      name: "Forecast Bar",
      description: "Receive weather alerts",
      url: "https://setapp.com/apps/forecast-bar",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/234/5651/icon-1678734015-640f72bf93fb1.png",
      rating: "95",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "App Tamer",
      description: "Reduce CPU usage",
      url: "https://setapp.com/apps/app-tamer",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/466/39811/icon-1722916151-66b19d375746f.png",
      rating: "95",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Keysmith",
      description: "Create a shortcut for any action",
      url: "https://setapp.com/apps/keysmith",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/438/39289/icon-1718665165-6670bfcd18ac5.png",
      rating: "95",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "start",
      description: "Open any app faster",
      url: "https://setapp.com/apps/start",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/377/42367/icon-1744970349-6802226d6784a.png",
      rating: "95",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Novabench",
      description: "Evaluate computer performance",
      url: "https://setapp.com/apps/novabench",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/605/42189/icon-1743118649-67e5e1394d007.png",
      rating: "95",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Endurance",
      description: "Extend your battery life",
      url: "https://setapp.com/apps/endurance",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/301/42576/icon-1746973828-6820b484ae86f.png",
      rating: "94",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "ToothFairy",
      description: "Connect Bluetooth devices faster",
      url: "https://setapp.com/apps/toothfairy",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/319/43816/icon-1749136211-6841b3535cf06.png",
      rating: "94",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "MenubarX",
      description: "Browse the web from menu bar",
      url: "https://setapp.com/apps/menubarx",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/538/42337/icon-1744644568-67fd29d8898ce.png",
      rating: "94",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Gemini",
      description: "Find and remove duplicates",
      url: "https://setapp.com/apps/gemini",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/79/44089/icon-1753360598-688228d68e918.png",
      rating: "93",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Mosaic",
      description: "Automatically organize windows",
      url: "https://setapp.com/apps/mosaic",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/247/9106/icon-1698836080-65422e70e6dff.png",
      rating: "92",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "CloudMounter",
      description: "Connect cloud storage to Finder",
      url: "https://setapp.com/apps/cloudmounter",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/289/43981/icon-1750771263-685aa63fda941.png",
      rating: "92",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "WiFi Signal",
      description: "Monitor your Wi-Fi connection",
      url: "https://setapp.com/apps/wifi-signal",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/596/42294/icon-1744164549-67f5d6c522359.png",
      rating: "92",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "DisplayBuddy",
      description: "Control settings across monitors",
      url: "https://setapp.com/apps/displaybuddy",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/489/42766/icon-1748774988-683c304c2ca82.png",
      rating: "91",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Almighty",
      description: "Unlock 50+ Mac shortcuts",
      url: "https://setapp.com/apps/almighty",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/487/42639/icon-1747515066-6828f6ba09c10.png",
      rating: "91",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "NotchNook",
      description: "Control Mac from the notch",
      url: "https://setapp.com/apps/notchnook",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/719/44309/icon-1754001551-688bf08f52444.png",
      rating: "90",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Clop",
      description: "Shrink images, video, PDFs",
      url: "https://setapp.com/apps/clop",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/612/43874/icon-1749732049-684acad19b4bc.png",
      rating: "90",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "ClearVPN",
      description: "Use an intuitive VPN",
      url: "https://setapp.com/apps/clearvpn",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/433/43998/icon-1751447766-6864f8d622a63.png",
      rating: "88",
      platforms: ["Mac", " iOS"],
      tab: "Optimize"
    },
    {
      name: "Batteries",
      description: "Track all devices' battery levels",
      url: "https://setapp.com/apps/batteries",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/393/42767/icon-1748785895-683c5ae74dbc9.png",
      rating: "88",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "WidgetWall",
      description: "Add widgets to Mac desktop",
      url: "https://setapp.com/apps/widget-wall",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/528/42687/icon-1747926996-682f3fd48a02b.png",
      rating: "88",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "iBoysoft NTFS for Mac",
      description: "Read/write to NTFS drives",
      url: "https://setapp.com/apps/iboysoft-ntfs-for-mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/384/40354/icon-1727496466-66f7811273225.png",
      rating: "86",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Vivid",
      description: "Double display brightness",
      url: "https://setapp.com/apps/vivid",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/546/39922/icon-1724012110-66c2564e2b09f.png",
      rating: "86",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Get Backup Pro",
      description: "Back up only essential files",
      url: "https://setapp.com/apps/get-backup-pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/210/9272/icon-1699433154-654b4ac208ada.png",
      rating: "86",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "KeyCue",
      description: "Work faster with shortcuts",
      url: "https://setapp.com/apps/keycue",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/752/42675/icon-1749043738-68404a1a28135.png",
      rating: "86",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "mSecure",
      description: "Store and sync passwords",
      url: "https://setapp.com/apps/msecure",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/732/41618/icon-1737736000-6793bf40b30b3.png",
      rating: "83",
      platforms: ["Mac", " iOS"],
      tab: "Optimize"
    },
    {
      name: "Pie Menu",
      description: "Access app actions in a click",
      url: "https://setapp.com/apps/pie-menu",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/697/40821/icon-1730974322-672c927219414.png",
      rating: "81",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Remote Mouse",
      description: "Control Mac from your phone",
      url: "https://setapp.com/apps/remote-mouse",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/193/43854/icon-1751120825-685ffbb93f57e.png",
      rating: "79",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Secrets 4",
      description: "Store and manage passwords",
      url: "https://setapp.com/apps/secrets",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/587/42673/icon-1747819273-682d9b0983304.png",
      rating: "77",
      platforms: ["Mac", " iOS"],
      tab: "Optimize"
    },
    {
      name: "Lacona",
      description: "Tell your Mac what to do",
      url: "https://setapp.com/apps/lacona",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/235/7221/icon-1671243506-639d26f20c993.png",
      rating: "75",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Coherence X",
      description: "Turn websites into apps",
      url: "https://setapp.com/apps/coherence-pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/363/39301/icon-1718731966-6671c4be62880.png",
      rating: "74",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Spotless",
      description: "Auto-hide files and clean up",
      url: "https://setapp.com/apps/spotless",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/294/44133/icon-1752338690-68729102eb82a.png",
      rating: "73",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "AdLock",
      description: "Block annoying browser ads",
      url: "https://setapp.com/apps/adlock",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/517/41861/icon-1740384397-67bc288ddd017.png",
      rating: "70",
      platforms: ["Mac", " iOS"],
      tab: "Optimize"
    },
    {
      name: "Unite",
      description: "Create an app from a website",
      url: "https://setapp.com/apps/unite",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/340/44227/icon-1753296213-68812d5504d40.png",
      rating: "67",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Tab Finder",
      description: "Tabs from all browsers in one spot",
      url: "https://setapp.com/apps/tabfinder",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/488/9319/icon-1700040755-65549033172ca.png",
      rating: "66",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "Sidebar",
      description: "Try a Dock alternative",
      url: "https://setapp.com/apps/sidebar",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/729/44170/icon-1752673269-6877abf53a9dc.png",
      rating: "64",
      platforms: ["Mac"],
      tab: "Optimize"
    },
    {
      name: "CleanMy®Phone",
      description: "Declutter your iPhone",
      url: "https://setapp.com/apps/gemini-photos",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/399/44335/icon-6891b0abeeae5.jpg",
      rating: "59",
      platforms: ["iOS"],
      tab: "Optimize"
    },
    {
      name: "Launcher with Multiple Widgets",
      description: "Customize your home screen",
      url: "https://setapp.com/apps/launcher-with-multiple-widgets-ios",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/535/44092/icon-686cc6abac326.jpg",
      rating: "57",
      platforms: ["iOS"],
      tab: "Optimize"
    },
    {
      name: "CleanShot X",
      description: "Take better screenshots and GIFs",
      url: "https://setapp.com/apps/cleanshot",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/321/44154/icon-1752575164-68762cbc45288.png",
      rating: "99",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "TextSniper",
      description: "Extract text from visuals",
      url: "https://setapp.com/apps/textsniper",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/431/40216/icon-1726504026-66e85c5a39ab4.png",
      rating: "99",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Numi",
      description: "Calculate and convert anything",
      url: "https://setapp.com/apps/numi",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/186/7868/icon-1681314493-6436d2bdefebe.png",
      rating: "99",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Yoink",
      description: "Improve drag and drop",
      url: "https://setapp.com/apps/yoink",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/330/44285/icon-1753885658-688a2bda5f2a1.png",
      rating: "99",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Dropzone",
      description: "Complete everyday tasks faster",
      url: "https://setapp.com/apps/dropzone",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/155/44329/icon-1754365569-68917e814be93.png",
      rating: "99",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "HazeOver",
      description: "Dim background windows",
      url: "https://setapp.com/apps/hazeover",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/212/44065/icon-1752557111-6875e637c0cb6.png",
      rating: "99",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Dato",
      description: "Stay on top of your schedule",
      url: "https://setapp.com/apps/dato",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/571/44232/icon-1753354747-688211fb6683b.png",
      rating: "99",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "In Your Face",
      description: "Get full-screen meeting alerts",
      url: "https://setapp.com/apps/in-your-face",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/591/44056/icon-1751552235-686690eba3f51.png",
      rating: "99",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Session",
      description: "Work in short intervals",
      url: "https://setapp.com/apps/session",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/428/44114/icon-1752144049-686f98b1eaff9.png",
      rating: "98",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "Timing",
      description: "Track time you spend in each app",
      url: "https://setapp.com/apps/timing",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/184/44326/icon-1754316177-6890bd91499f0.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "HoudahSpot",
      description: "Find files faster",
      url: "https://setapp.com/apps/houdahspot",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/452/40620/icon-1729324375-67136557e86ed.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Gifox",
      description: "Capture GIFs from your screen",
      url: "https://setapp.com/apps/gifox",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/197/43971/icon-1750679528-68593fe8cd145.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Hand Mirror",
      description: "Check Mac camera in a click",
      url: "https://setapp.com/apps/hand-mirror",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/564/41679/icon-1738219390-679b1f7e17746.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "TaskPaper",
      description: "Plain-text task management",
      url: "https://setapp.com/apps/taskpaper",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/213/40865/icon-1731425370-6733745a98d57.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Antinote",
      description: "Take notes and do calculations",
      url: "https://setapp.com/apps/antinote",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/757/42717/icon-1748322683-6835497b1e179.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Archiver",
      description: "Compress and unarchive files",
      url: "https://setapp.com/apps/archiver",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/194/10197/icon-1711963165-660a7c1d7fdbc.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "SideNotes",
      description: "Notes on the side of your screen",
      url: "https://setapp.com/apps/sidenotes",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/365/44164/icon-1752650196-687751d465b73.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "NotePlan",
      description: "One space for all your work",
      url: "https://setapp.com/apps/noteplan",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/280/44145/icon-1752494951-6874f36733698.png",
      rating: "97",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "Default Folder X",
      description: "Access recent and favorite files",
      url: "https://setapp.com/apps/default-folder-x",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/396/43976/icon-1750780981-685acc35ed4df.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Due",
      description: "Receive persistent reminders",
      url: "https://setapp.com/apps/due",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/434/43829/icon-1749224796-68430d5cd57f9.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Be Focused",
      description: "Manage to-do lists with timers",
      url: "https://setapp.com/apps/be-focused",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/173/42056/icon-1741873453-67d2e12deefa4.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Awesome Habits",
      description: "Build better habits",
      url: "https://setapp.com/apps/awesome-habits",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/616/43965/icon-1750520300-6856d1ec93a60.png",
      rating: "97",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "Merlin Project Express",
      description: "Manage large projects",
      url: "https://setapp.com/apps/merlin-project-express",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/241/41668/icon-1738139017-6799e5893e6bc.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Godspeed",
      description: "Manage tasks faster",
      url: "https://setapp.com/apps/godspeed",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/714/44327/icon-1754354694-68915406d1a21.png",
      rating: "97",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "BetterZip",
      description: "Create and encrypt archives",
      url: "https://setapp.com/apps/betterzip",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/245/7858/icon-1681236553-6435a249c1fd2.png",
      rating: "96",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "ForkLift",
      description: "Manage files across servers",
      url: "https://setapp.com/apps/forklift",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/253/44276/icon-1753797920-6888d52068ebf.png",
      rating: "96",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "BusyCal",
      description: "Sync your tasks with calendar",
      url: "https://setapp.com/apps/busycal",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/304/43841/icon-1749392085-68459ad5ecfbf.png",
      rating: "96",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Mate Translate",
      description: "Translate anything",
      url: "https://setapp.com/apps/mate-translate",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/248/9552/icon-1703223793-658521f1d6148.png",
      rating: "96",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Renamer",
      description: "Rename a batch of files",
      url: "https://setapp.com/apps/renamer",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/136/40792/icon-1730733142-6728e4563df6a.png",
      rating: "96",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Xnapper",
      description: "Create shareable screenshots",
      url: "https://setapp.com/apps/xnapper",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/549/9000/icon-1696394577-651ced51d24d2.png",
      rating: "96",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Hookmark",
      description: "Link files, webpages, PDFs",
      url: "https://setapp.com/apps/hookmark",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/544/44138/icon-1752468219-68748afb8b7fb.png",
      rating: "96",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Receipts",
      description: "Collect documents digitally",
      url: "https://setapp.com/apps/receipts",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/351/41795/icon-1739276776-67ab41e871a94.png",
      rating: "96",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Studies",
      description: "Try smart study notes",
      url: "https://setapp.com/apps/studies",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/231/39891/icon-1723640492-66bcaaacaa482.png",
      rating: "96",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Timemator",
      description: "Track productivity per project",
      url: "https://setapp.com/apps/timemator",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/380/42266/icon-1743772162-67efda0297d7a.png",
      rating: "95",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "Commander One",
      description: "Two-pane file manager",
      url: "https://setapp.com/apps/commander-one",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/366/42052/icon-1741858073-67d2a5194d1f4.png",
      rating: "95",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "ChronoSync Express",
      description: "Sync and back up folders",
      url: "https://setapp.com/apps/chronosync-express",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/217/40765/icon-1730479186-67250452d2169.png",
      rating: "95",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Time Out",
      description: "Remind yourself to take a break",
      url: "https://setapp.com/apps/time-out",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/364/10078/icon-1710337184-65f1aca0acf44.png",
      rating: "95",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Trickster",
      description: "Quickly access recent files",
      url: "https://setapp.com/apps/trickster",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/357/44186/icon-1752815180-6879d64c9b5dd.png",
      rating: "95",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Euclid",
      description: "Calculate with Excel formulas",
      url: "https://setapp.com/apps/euclid",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/435/8913/icon-1695837595-65146d9b44aa1.png",
      rating: "95",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "Workspaces",
      description: "Set up your work in one click",
      url: "https://setapp.com/apps/workspaces",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/268/42258/icon-1743703876-67eecf44145bb.png",
      rating: "94",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Clariti",
      description: "Boost mental clarity with sound",
      url: "https://setapp.com/apps/clariti",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/754/44241/icon-1753437378-688354c2e4083.png",
      rating: "94",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "ScreenFloat",
      description: "Power up your screenshots",
      url: "https://setapp.com/apps/screenfloat",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/753/44330/icon-1754372294-689198c6c684d.png",
      rating: "94",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "PocketCAS",
      description: "Solve advanced math equations",
      url: "https://setapp.com/apps/pocketcas",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/355/40804/icon-1730880531-672b2413b44d4.png",
      rating: "94",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "BusyContacts",
      description: "Build your contact database",
      url: "https://setapp.com/apps/busycontacts",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/369/43840/icon-1749326776-68449bb851452.png",
      rating: "93",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Prizmo",
      description: "Scan and OCR any document",
      url: "https://setapp.com/apps/prizmo",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/160/41752/icon-1738766542-67a378ce29d98.png",
      rating: "93",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "2Do",
      description: "Schedule tasks and reminders",
      url: "https://setapp.com/apps/2do",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/68/42482/icon-1746151123-681426d399e36.png",
      rating: "93",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "GoodTask",
      description: "Sync to-dos with reminders",
      url: "https://setapp.com/apps/goodtask",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/206/44211/icon-1753100710-687e31a63aab6.png",
      rating: "93",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Pagico",
      description: "Manage teams and projects",
      url: "https://setapp.com/apps/pagico",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/70/42787/icon-1748923372-683e73ec92068.png",
      rating: "93",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Cloud Outliner",
      description: "Create visual outlines",
      url: "https://setapp.com/apps/cloud-outliner",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/174/42713/icon-1748249451-68342b6baac84.png",
      rating: "93",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Path Finder",
      description: "Copy, delete, and sync files",
      url: "https://setapp.com/apps/path-finder",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/362/42172/icon-1743009756-67e437dcb92b8.png",
      rating: "92",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Slidepad",
      description: "Keep most used apps at hand",
      url: "https://setapp.com/apps/slidepad",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/367/42788/icon-1748925454-683e7c0eddcf7.png",
      rating: "92",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "MarginNote",
      description: "Study more productively",
      url: "https://setapp.com/apps/marginnote",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/323/8222/icon-1748318556-6835395c4b07b.png",
      rating: "92",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Dropshare",
      description: "Save space with file sharing",
      url: "https://setapp.com/apps/dropshare",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/250/44280/icon-1753810665-688906e980d11.png",
      rating: "92",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "Chronicle",
      description: "Track bills and subscriptions",
      url: "https://setapp.com/apps/chronicle",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/83/43889/icon-1749843616-684c7ea0387af.png",
      rating: "91",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "Muse",
      description: "Put ideas on a single canvas",
      url: "https://setapp.com/apps/muse",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/628/44212/icon-1753105595-687e44bb80b5e.png",
      rating: "91",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "Focus 2",
      description: "Block websites and apps",
      url: "https://setapp.com/apps/focus",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/266/44325/icon-1754278148-68902904b8617.png",
      rating: "90",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Moment",
      description: "Create countdown events",
      url: "https://setapp.com/apps/moment",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/424/40407/icon-1727793531-66fc097bc6429.png",
      rating: "90",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Daily",
      description: "Track time easily",
      url: "https://setapp.com/apps/daily",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/504/42708/icon-1748198319-683363afddb8c.png",
      rating: "90",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "DeskMinder²",
      description: "Create quick desktop reminders",
      url: "https://setapp.com/apps/deskminder",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/1768/44073/icon-1751941106-686c7ff29f48d.png",
      rating: "90",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Spark Mail",
      description: "Manage emails easier",
      url: "https://setapp.com/apps/spark-mail",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/575/44288/icon-1753890030-688a3cee9f2d4.png",
      rating: "89",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "World Clock Pro",
      description: "Work across time zones",
      url: "https://setapp.com/apps/world-clock-pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/246/41965/icon-1741045317-67c63e4508341.png",
      rating: "89",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "iBoysoft MagicMenu",
      description: "Expand your Mac’s right click",
      url: "https://setapp.com/apps/iboysoft-magicmenu",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/512/42345/icon-1744773554-67ff21b228833.png",
      rating: "89",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "WallCal",
      description: "Pin clear calendar to desktop",
      url: "https://setapp.com/apps/wallcal",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/541/43969/icon-1750639576-6858a3d8e8ad6.png",
      rating: "88",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Expenses",
      description: "Track your spending",
      url: "https://setapp.com/apps/expenses",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/521/44300/icon-1753971236-688b7a24bc067.png",
      rating: "88",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "Focused Work",
      description: "Work with timers",
      url: "https://setapp.com/apps/focused-work-mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/699/42759/icon-1748710157-683b330d4602c.png",
      rating: "88",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "iMeetingX",
      description: "Run meetings effectively",
      url: "https://setapp.com/apps/imeetingx",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/337/9518/icon-1702884273-657ff3b16c0a6.png",
      rating: "87",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "SheetPlanner",
      description: "Plan and track project progress",
      url: "https://setapp.com/apps/sheetplanner",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/453/40067/icon-1725563539-66da0293bf0a3.png",
      rating: "86",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Focus",
      description: "Block websites and social media",
      url: "https://setapp.com/apps/focus-mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/700/28918/icon-1716573034-6650d36a66766.png",
      rating: "86",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "AnyDroid",
      description: "Move files between Mac and Android",
      url: "https://setapp.com/apps/anytrans-for-android",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/336/41846/icon-1739786426-67b308ba38644.png",
      rating: "85",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Invoice Rex",
      description: "Edit and track invoices",
      url: "https://setapp.com/apps/invoice-rex",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/749/44316/icon-1754042952-688c9248d30c8.png",
      rating: "85",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "Canary Mail",
      description: "Write and manage emails",
      url: "https://setapp.com/apps/canary-mail",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/307/44310/icon-1754032405-688c691544e5e.png",
      rating: "84",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "Calendars",
      description: "Track tasks, events, and plans",
      url: "https://setapp.com/apps/calendars",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/623/44018/icon-1751042442-685ec98a78c03.png",
      rating: "84",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "GreenBooks",
      description: "Manage money easily",
      url: "https://setapp.com/apps/greenbooks",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/505/42101/icon-1742439491-67db844380d13.png",
      rating: "84",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "Smmall Cloud",
      description: "Share files and boost your brand",
      url: "https://setapp.com/apps/smmall-cloud",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/744/43918/icon-1750185708-6851b6ec95e90.png",
      rating: "84",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "UpLife",
      description: "Your self-care assistant",
      url: "https://setapp.com/apps/uplife-mental-health-therapy-ios",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/530/44165/icon-687752ae2ba50.jpg",
      rating: "83",
      platforms: ["iOS"],
      tab: "Work"
    },
    {
      name: "DCommander",
      description: "Manage files in a dual-pane view",
      url: "https://setapp.com/apps/dcommander",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/311/41384/icon-1735205346-676d21e2e8634.png",
      rating: "82",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "AppWage",
      description: "Track your app earnings",
      url: "https://setapp.com/apps/appwage",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/711/42286/icon-1744026714-67f3bc5a93dfb.png",
      rating: "82",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "MoneyWiz 2025",
      description: "Budget and manage bills",
      url: "https://setapp.com/apps/moneywiz",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/565/44129/icon-1752247637-68712d55d0060.png",
      rating: "81",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "Chimeful",
      description: "Improve focus and stay mindful",
      url: "https://setapp.com/apps/chimeful",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/759/43927/icon-1750261738-6852dfeadfe8d.png",
      rating: "81",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Boom",
      description: "Level-up your video calls",
      url: "https://setapp.com/apps/boom",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/735/42783/icon-1748875965-683dbabdd428d.png",
      rating: "80",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "iShowU",
      description: "Record screen on Mac",
      url: "https://setapp.com/apps/ishowu",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/720/42317/icon-1744317122-67f82ac23fa0b.png",
      rating: "80",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "ByDesign",
      description: "Organize your work and life",
      url: "https://setapp.com/apps/bydesign",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/760/44238/icon-1753405551-6882d86f0ffe5.png",
      rating: "80",
      platforms: ["Mac", " iOS", " Web"],
      tab: "Work"
    },
    {
      name: "AnyTrans for iOS",
      description: "Move files between macOS and iOS",
      url: "https://setapp.com/apps/anytrans",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/328/42580/icon-1747015439-6821570f0d559.png",
      rating: "78",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Backtrack",
      description: "Record audio from the past",
      url: "https://setapp.com/apps/backtrack",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/381/41528/icon-1736899813-6786fce564982.png",
      rating: "78",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Taskheat",
      description: "Learn to prioritize tasks",
      url: "https://setapp.com/apps/taskheat",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/326/41099/icon-1732998743-674b7657aad16.png",
      rating: "78",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "Moonitor",
      description: "Receive live updates on crypto",
      url: "https://setapp.com/apps/moonitor",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/314/8672/icon-1706610205-65b8ce1de936e.png",
      rating: "75",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Subjects",
      description: "Track class schedule, homework",
      url: "https://setapp.com/apps/subjects",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/619/41415/icon-1735670378-67743a6a3647c.png",
      rating: "74",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "CleanPresenter",
      description: "Present a single window",
      url: "https://setapp.com/apps/cleanpresenter",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/581/40679/icon-1729846239-671b5bdf41873.png",
      rating: "73",
      platforms: ["Mac"],
      tab: "Work"
    },
    {
      name: "Numerics",
      description: "Monitor your business data",
      url: "https://setapp.com/apps/numerics",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/594/42160/icon-1742954658-67e360a2042df.png",
      rating: "73",
      platforms: ["Mac", " iOS"],
      tab: "Work"
    },
    {
      name: "Headway",
      description: "Get summaries for nonfiction",
      url: "https://setapp.com/apps/headway",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/618/44323/icon-688f0db700946.jpg",
      rating: "68",
      platforms: ["iOS", " Web"],
      tab: "Work"
    },
    {
      name: "Leave Me Alone",
      description: "Manage email subscriptions",
      url: "https://setapp.com/apps/leave-me-alone",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/709/main/icon-7777ffdacb9dc.png",
      rating: "0",
      platforms: ["Web"],
      tab: "Work"
    },
    {
      name: "Ulysses",
      description: "Write and publish from one app",
      url: "https://setapp.com/apps/ulysses",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/67/43954/icon-1750766417-685a9351a0e77.png",
      rating: "99",
      platforms: ["Mac", " iOS"],
      tab: "Create"
    },
    {
      name: "MindNode Classic",
      description: "Mind map and brainstorm ideas",
      url: "https://setapp.com/apps/mindnode",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/320/44317/icon-1754044951-688c9a1700ece.png",
      rating: "99",
      platforms: ["Mac", " iOS"],
      tab: "Create"
    },
    {
      name: "PixelSnap",
      description: "Measure anything on the screen",
      url: "https://setapp.com/apps/pixelsnap",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/358/41224/icon-1734003597-675acb8d48307.png",
      rating: "99",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "TextSoap",
      description: "Make sure your text has no errors",
      url: "https://setapp.com/apps/textsoap",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/284/42084/icon-1742216932-67d81ee49773c.png",
      rating: "99",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "IconJar",
      description: "Organize your icon sets",
      url: "https://setapp.com/apps/iconjar",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/264/39405/icon-1719519131-667dc79b49105.png",
      rating: "99",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "SnapMotion",
      description: "Capture snaps from your videos",
      url: "https://setapp.com/apps/snapmotion",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/509/41065/icon-1732813283-6748a1e33ce65.png",
      rating: "99",
      platforms: ["Mac", " iOS"],
      tab: "Create"
    },
    {
      name: "Downie",
      description: "Download YouTube videos",
      url: "https://setapp.com/apps/downie",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/222/44314/icon-1754041581-688c8ceddf3a8.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Permute",
      description: "Convert audio, images, and videos",
      url: "https://setapp.com/apps/permute",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/219/44315/icon-1754042487-688c90772b06e.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "PDF Squeezer",
      description: "Compress PDFs without quality loss",
      url: "https://setapp.com/apps/pdf-squeezer",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/188/41776/icon-1739380114-67acd5926e8ff.png",
      rating: "98",
      platforms: ["Mac", " iOS"],
      tab: "Create"
    },
    {
      name: "Pulltube",
      description: "Download and trim videos",
      url: "https://setapp.com/apps/pulltube",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/371/44322/icon-1754155811-688e4b23d5748.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Elmedia Player",
      description: "Versatile media player",
      url: "https://setapp.com/apps/elmedia-player",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/178/43944/icon-1750347306-68542e2a3b99e.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Movist Pro",
      description: "Play all video formats",
      url: "https://setapp.com/apps/movist-pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/344/43946/icon-1750390319-6854d62fce13b.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Typeface",
      description: "Find the perfect font",
      url: "https://setapp.com/apps/typeface",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/315/44272/icon-1753786664-6888a9284b969.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "TouchRetouch",
      description: "Remove objects from photos",
      url: "https://setapp.com/apps/touchretouch",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/298/8541/icon-1691068510-64cba85e8b087.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Bike",
      description: "Outline ideas and projects",
      url: "https://setapp.com/apps/bike-outliner",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/598/41510/icon-1736770872-678505384e5f5.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Goldie App",
      description: "Measure golden ratio in designs",
      url: "https://setapp.com/apps/goldie-app",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/345/42291/icon-1744380820-67f92394afe8e.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "PhotoBulk",
      description: "Resize and watermark photos",
      url: "https://setapp.com/apps/photobulk",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/286/42242/icon-1743778095-67eff12f33d65.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Meta",
      description: "Manage music libraries",
      url: "https://setapp.com/apps/meta",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/389/7448/icon-1675335200-63db9620a3946.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Diarly",
      description: "Create a private personal diary",
      url: "https://setapp.com/apps/diarly",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/347/44289/icon-1753891693-688a436d2a400.png",
      rating: "97",
      platforms: ["Mac", " iOS"],
      tab: "Create"
    },
    {
      name: "KeyKey Typing Tutor",
      description: "Boost your typing speed",
      url: "https://setapp.com/apps/keykey-typing-tutor",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/274/39421/icon-1720817328-669196b02ad52.png",
      rating: "96",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "News Explorer",
      description: "Create your perfect RSS feed",
      url: "https://setapp.com/apps/news-explorer",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/249/44243/icon-1753444719-6883716fcc401.png",
      rating: "96",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "PhotosRevive",
      description: "Colorize your old photos",
      url: "https://setapp.com/apps/photosrevive",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/508/41064/icon-1732756775-6747c527cfab2.png",
      rating: "96",
      platforms: ["Mac", " iOS"],
      tab: "Create"
    },
    {
      name: "Paper",
      description: "Write without distractions",
      url: "https://setapp.com/apps/paper",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/746/43856/icon-1752409396-6873a5344b51c.png",
      rating: "96",
      platforms: ["Mac", " iOS"],
      tab: "Create"
    },
    {
      name: "Flinto",
      description: "Design interactive app prototypes",
      url: "https://setapp.com/apps/flinto",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/419/10164/icon-1711471249-6602fa9155d9b.png",
      rating: "96",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Craft",
      description: "Create and structure documents",
      url: "https://setapp.com/apps/craft",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/554/44320/icon-1754062044-688cdcdc091bf.png",
      rating: "95",
      platforms: ["Mac", " iOS", " Web"],
      tab: "Create"
    },
    {
      name: "Folx",
      description: "Download videos and torrents",
      url: "https://setapp.com/apps/folx",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/202/43940/icon-1750328709-6853e585b2d76.png",
      rating: "95",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Presentify",
      description: "Give better presentations",
      url: "https://setapp.com/apps/presentify",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/401/44126/icon-1752234029-6870f82d8e2e8.png",
      rating: "95",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "iFlicks",
      description: "Upload videos to iTunes",
      url: "https://setapp.com/apps/iflicks",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/229/42760/icon-1752442375-68742607ddec9.png",
      rating: "95",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Glyphs Mini",
      description: "Edit and manage icon designs",
      url: "https://setapp.com/apps/glyphs-mini",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/469/4408/icon-1618232817-607445f1711ef.png",
      rating: "95",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Asset Catalog Creator Pro",
      description: "Prepare icons and app assets",
      url: "https://setapp.com/apps/asset-catalog-creator-pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/426/41835/icon-1739661896-67b1224841142.png",
      rating: "95",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Sip",
      description: "Pick colors for your designs",
      url: "https://setapp.com/apps/sip",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/232/44183/icon-1752792902-68797f4636b2e.png",
      rating: "94",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Mockuuups Studio",
      description: "Generate mockups for all devices",
      url: "https://setapp.com/apps/mockuuups-studio",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/373/10202/icon-1712050881-660bd2c1d13ba.png",
      rating: "94",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Marked",
      description: "Live Markdown preview",
      url: "https://setapp.com/apps/marked",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/80/42026/icon-1741607738-67ced33aba53e.png",
      rating: "94",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Lofi Garden",
      description: "Play lofi music in a click",
      url: "https://setapp.com/apps/lofi-garden",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/506/7515/icon-1677325365-63f9f435a368b.png",
      rating: "94",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Movie Explorer Pro",
      description: "Curate your movie collection",
      url: "https://setapp.com/apps/movie-explorer-pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/335/43932/icon-1750281486-68532d0e2d54a.png",
      rating: "94",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "GlueMotion",
      description: "Turn photos into time lapses",
      url: "https://setapp.com/apps/gluemotion",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/324/41063/icon-1732813247-6748a1bf4f1a8.png",
      rating: "94",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Noizio",
      description: "Turn on ambient sounds to focus",
      url: "https://setapp.com/apps/noizio",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/130/44297/icon-1753947443-688b1d33cf7f8.png",
      rating: "93",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "MetaImage",
      description: "Edit image metadata",
      url: "https://setapp.com/apps/metaimage",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/356/41358/icon-1734915652-6768b644d8129.png",
      rating: "93",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Swift Publisher",
      description: "Self-publish books or booklets",
      url: "https://setapp.com/apps/swift-publisher",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/95/43939/icon-1750328529-6853e4d1f3326.png",
      rating: "93",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Focused",
      description: "Focus on your writing",
      url: "https://setapp.com/apps/focused",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/134/9293/icon-1699654599-654eabc721744.png",
      rating: "93",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "MarsEdit",
      description: "Create your text content offline",
      url: "https://setapp.com/apps/marsedit",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/343/42338/icon-1744655073-67fd52e16f243.png",
      rating: "93",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Squash",
      description: "Compress and resize images",
      url: "https://setapp.com/apps/squash",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/209/40929/icon-1731928296-673b20e8a961c.png",
      rating: "92",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "VidCap",
      description: "Generate captions for video",
      url: "https://setapp.com/apps/vidcap",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/558/44082/icon-1751785740-686a210c43f75.png",
      rating: "92",
      platforms: ["Mac", " iOS"],
      tab: "Create"
    },
    {
      name: "Tripsy",
      description: "Plan trips on Mac and iOS",
      url: "https://setapp.com/apps/tripsy",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/523/44199/icon-1752872722-687ab712a554c.png",
      rating: "92",
      platforms: ["Mac", " iOS"],
      tab: "Create"
    },
    {
      name: "PDF Search",
      description: "Find anything in a PDF with AI",
      url: "https://setapp.com/apps/pdf-search",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/272/39404/icon-1719522579-667dd513092fa.png",
      rating: "92",
      platforms: ["Mac", " iOS"],
      tab: "Create"
    },
    {
      name: "Eter",
      description: "Listen to internet radio",
      url: "https://setapp.com/apps/eter",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/627/42268/icon-1743775680-67efe7c02e15f.png",
      rating: "92",
      platforms: ["Mac", " iOS"],
      tab: "Create"
    },
    {
      name: "Teleprompter App",
      description: "Record video with teleprompter",
      url: "https://setapp.com/apps/teleprompter-app",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/609/44008/icon-1751013832-685e59c84a5de.png",
      rating: "92",
      platforms: ["Mac", " iOS"],
      tab: "Create"
    },
    {
      name: "Boom 3D",
      description: "Boost volume and audio quality",
      url: "https://setapp.com/apps/boom-3d",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/291/43826/icon-1749207472-6842c9b062dd4.png",
      rating: "91",
      platforms: ["Mac", " iOS"],
      tab: "Create"
    },
    {
      name: "ChatMate for WhatsApp",
      description: "Personalize WhatsApp",
      url: "https://setapp.com/apps/chatmate-for-whatsapp",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/240/40674/icon-1729783133-671a655d54dbe.png",
      rating: "91",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Diagrams",
      description: "Visualize with diagrams",
      url: "https://setapp.com/apps/diagrams",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/408/40176/icon-1726300270-66e5406e6521f.png",
      rating: "91",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Luminar Neo",
      description: "Improve your photos like a pro",
      url: "https://setapp.com/apps/luminar-neo",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/566/44192/icon-1752850170-687a5efa43d68.png",
      rating: "90",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "CameraBag Pro",
      description: "Edit photos and videos",
      url: "https://setapp.com/apps/camerabag-pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/299/42519/icon-1746576494-681aa46e5c360.png",
      rating: "90",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Nitro PDF Pro",
      description: "Work with your PDFs",
      url: "https://setapp.com/apps/nitro-pdf-pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/518/44279/icon-1753891430-688a4266da995.png",
      rating: "89",
      platforms: ["Mac", " iOS"],
      tab: "Create"
    },
    {
      name: "Capto",
      description: "Create screen recordings",
      url: "https://setapp.com/apps/capto",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/175/42078/icon-1742193995-67d7c54b2f8f8.png",
      rating: "87",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "PliimPRO",
      description: "Share screen distraction-free",
      url: "https://setapp.com/apps/pliimpro",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/406/9104/icon-1697480465-652d7f11a4cad.png",
      rating: "85",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "MonsterWriter",
      description: "Write complex texts easily",
      url: "https://setapp.com/apps/monsterwriter",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/502/42757/icon-1748691704-683aeaf8555d7.png",
      rating: "85",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Rocket Typist",
      description: "Save time typing with text snippets",
      url: "https://setapp.com/apps/rocket-typist",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/276/44290/icon-1753916953-688aa619f309e.png",
      rating: "84",
      platforms: ["Mac", " iOS"],
      tab: "Create"
    },
    {
      name: "Hustl",
      description: "Create timelapses of your screen",
      url: "https://setapp.com/apps/hustl",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/436/5289/icon-1637696825-619d453928e34.png",
      rating: "84",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "IM+",
      description: "Bring all messengers into one",
      url: "https://setapp.com/apps/im+",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/296/3685/icon-1605729873-5fb57e510c414.png",
      rating: "83",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Speeko",
      description: "Get better at public speaking",
      url: "https://setapp.com/apps/speeko",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/477/42496/icon-1746321274-6816bf7a5ee04.png",
      rating: "83",
      platforms: ["Mac", " iOS"],
      tab: "Create"
    },
    {
      name: "Mimir",
      description: "Play and manage podcasts",
      url: "https://setapp.com/apps/mimir",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/451/43827/icon-1749222527-6843047f5921c.png",
      rating: "83",
      platforms: ["Mac", " iOS"],
      tab: "Create"
    },
    {
      name: "Silenz",
      description: "Focus mode sound",
      url: "https://setapp.com/apps/silenz",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/350/8914/icon-1695550446-65100beee3749.png",
      rating: "82",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "JustStream",
      description: "Mirror Mac screen to TV",
      url: "https://setapp.com/apps/juststream",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/370/42243/icon-1743592902-67ed1dc64ffe1.png",
      rating: "80",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "FreeYourMusic",
      description: "Transfer your playlists",
      url: "https://setapp.com/apps/freeyourmusic",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/737/44101/icon-1751970438-686cf286ecbe4.png",
      rating: "78",
      platforms: ["Mac", " iOS"],
      tab: "Create"
    },
    {
      name: "Filmage Editor",
      description: "Easily edit videos like a pro",
      url: "https://setapp.com/apps/filmage-editor",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/545/44119/icon-1752199863-687072b73f725.png",
      rating: "72",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Mental Walk",
      description: "Reflect on your life",
      url: "https://setapp.com/apps/mentalwalk",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/494/6892/icon-1666616857-63568e19275d5.png",
      rating: "67",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "n-Track Studio",
      description: "Record and edit music on Mac",
      url: "https://setapp.com/apps/n-track-studio",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/238/44306/icon-1753980628-688b9ed4c9317.png",
      rating: "66",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "Voice Dream Reader",
      description: "Listen to your texts",
      url: "https://setapp.com/apps/voice-dream-reader",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/717/41922/icon-1740505258-67be00aa89d1a.png",
      rating: "47",
      platforms: ["Mac"],
      tab: "Create"
    },
    {
      name: "TablePlus",
      description: "Query, edit, and manage databases",
      url: "https://setapp.com/apps/tableplus",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/297/44155/icon-1752583337-68764ca95affb.png",
      rating: "99",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "DevUtils",
      description: "Offline development toolkit",
      url: "https://setapp.com/apps/devutils.app",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/445/7963/icon-1682658507-644b54cbceb37.png",
      rating: "99",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "Dash",
      description: "Access API documentation offline",
      url: "https://setapp.com/apps/dash",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/152/41998/icon-1741245191-67c94b07a2ef0.png",
      rating: "99",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "Proxyman",
      description: "Debug your web traffic",
      url: "https://setapp.com/apps/proxyman",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/346/44222/icon-1753258299-6880993b181ff.png",
      rating: "99",
      platforms: ["Mac", " iOS"],
      tab: "Develop"
    },
    {
      name: "SnippetsLab",
      description: "Create a library of code snippets",
      url: "https://setapp.com/apps/snippetslab",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/125/41422/icon-1735798322-67762e322edcd.png",
      rating: "99",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "Buildwatch",
      description: "Track your build time in Xcode",
      url: "https://setapp.com/apps/buildwatch",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/467/8800/icon-1695307195-650c55bbf4200.png",
      rating: "99",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "Base",
      description: "Simplify SQLite file management",
      url: "https://setapp.com/apps/base",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/135/9151/icon-1697967585-6534ede1ef890.png",
      rating: "98",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "SQLPro Studio",
      description: "Manage multiple DBMS",
      url: "https://setapp.com/apps/sqlpro-studio",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/230/41517/icon-1736865184-678675a0afa1f.png",
      rating: "97",
      platforms: ["Mac", " iOS"],
      tab: "Develop"
    },
    {
      name: "SSH Config Editor",
      description: "Manage SSH client config files",
      url: "https://setapp.com/apps/ssh-config-editor",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/395/43809/icon-1749051292-6840679c82bf3.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "Hype",
      description: "Create animated HTML5 content",
      url: "https://setapp.com/apps/hype",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/192/41603/icon-1737573990-67914666d5d5f.png",
      rating: "97",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "CodeRunner",
      description: "Edit and run code faster",
      url: "https://setapp.com/apps/coderunner",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/122/41549/icon-1737112183-678a3a77b43aa.png",
      rating: "96",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "Expressions",
      description: "Speed up work with regex",
      url: "https://setapp.com/apps/expressions",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/243/42471/icon-1746014049-68120f61e101a.png",
      rating: "96",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "Whisk",
      description: "Code editor with live preview",
      url: "https://setapp.com/apps/whisk",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/463/8892/icon-1695310657-650c634147f17.png",
      rating: "96",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "SQLPro for SQLite",
      description: "Control SQLite databases",
      url: "https://setapp.com/apps/sqlpro-for-sqlite",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/333/42122/icon-1742478513-67dc1cb168fd3.png",
      rating: "96",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "Gitfox",
      description: "Commit faster with superior diffs",
      url: "https://setapp.com/apps/gitfox",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/385/41675/icon-1738172457-679a6829c6cd0.png",
      rating: "95",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "Core Shell",
      description: "Full-featured SSH terminal",
      url: "https://setapp.com/apps/core-shell",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/339/40002/icon-1724861736-66cf4d28414e0.png",
      rating: "93",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "XCOrganizer",
      description: "Organize Xcode projects",
      url: "https://setapp.com/apps/xcorganizer",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/407/8157/icon-1685704795-6479d05b0e326.png",
      rating: "93",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "GetAPI",
      description: "Manage API interactions easier",
      url: "https://setapp.com/apps/getapi",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/756/44004/icon-1750992733-685e075debf86.png",
      rating: "91",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "Clobbr",
      description: "Load test API endpoints",
      url: "https://setapp.com/apps/clobbr",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/593/41323/icon-1734653161-6764b4e997d42.png",
      rating: "85",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "Simon",
      description: "Control and troubleshoot servers",
      url: "https://setapp.com/apps/simon",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/201/7859/icon-1681321139-6436ecb3343c6.png",
      rating: "78",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "TeaCode",
      description: "Speed up coding with expanders",
      url: "https://setapp.com/apps/teacode",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/308/40239/icon-1726668573-66eadf1df1cc3.png",
      rating: "76",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "TaoGit",
      description: "Streamline your work with Git",
      url: "https://setapp.com/apps/taogit",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/516/40716/icon-1730208153-6720e19925f0f.png",
      rating: "61",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "SwiftyLaunch",
      description: "Build iOS apps faster",
      url: "https://setapp.com/apps/swiftylaunch",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/738/42635/icon-1747402833-68274051f26a0.png",
      rating: "60",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "Code Snippets AI",
      description: "Fix and organize code with AI",
      url: "https://setapp.com/apps/code-snippets-ai",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/603/43930/icon-1750285729-68533da18e620.png",
      rating: "43",
      platforms: ["Mac"],
      tab: "Develop"
    },
    {
      name: "Soulver",
      description: "Convert and calculate in notes",
      url: "https://setapp.com/apps/soulver",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/551/42488/icon-1746240116-6815827493d38.png",
      rating: "99",
      platforms: ["Mac", " iOS"],
      tab: "Solve with AI+"
    },
    {
      name: "BoltAI",
      description: "Write, code, learn with AI",
      url: "https://setapp.com/apps/boltai",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/626/44254/icon-1753610035-6885f733cd016.png",
      rating: "95",
      platforms: ["Mac"],
      tab: "Solve with AI+"
    },
    {
      name: "TypingMind",
      description: "Use new UI to chat with AI",
      url: "https://setapp.com/apps/typingmind",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/583/40440/icon-1727938430-66fe3f7ee68ac.png",
      rating: "90",
      platforms: ["Mac", " Web"],
      tab: "Solve with AI+"
    },
    {
      name: "PDF Pals",
      description: "Chat with your PDFs",
      url: "https://setapp.com/apps/pdf-pals",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/606/42481/icon-1746107539-68137c9375583.png",
      rating: "89",
      platforms: ["Mac"],
      tab: "Solve with AI+"
    },
    {
      name: "Elephas",
      description: "Manage knowledge with AI",
      url: "https://setapp.com/apps/elephas",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/576/42780/icon-1748860950-683d8016cd020.png",
      rating: "87",
      platforms: ["Mac", " iOS"],
      tab: "Solve with AI+"
    },
    {
      name: "Plus",
      description: "Work with text using AI",
      url: "https://setapp.com/apps/plus",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/584/42484/icon-1746174118-681480a6e0e16.png",
      rating: "86",
      platforms: ["Mac"],
      tab: "Solve with AI+"
    },
    {
      name: "Substage",
      description: "Control Finder with natural language",
      url: "https://setapp.com/apps/substage",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/764/44303/icon-1753972915-688b80b33e119.png",
      rating: "85",
      platforms: ["Mac"],
      tab: "Solve with AI+"
    },
    {
      name: "Spellar AI",
      description: "Smart Meeting Notes with AI",
      url: "https://setapp.com/apps/spellar-ai",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/635/44268/icon-1753741576-6887f9085e018.png",
      rating: "84",
      platforms: ["Mac", " Web"],
      tab: "Solve with AI+"
    },
    {
      name: "MurmurType",
      description: "Transcribe your speech",
      url: "https://setapp.com/apps/murmur",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/592/44245/icon-1753460435-6883aed3213e2.png",
      rating: "82",
      platforms: ["Mac"],
      tab: "Solve with AI+"
    },
    {
      name: "WhisperTranscribe",
      description: "Turn voice into text content",
      url: "https://setapp.com/apps/whisper-transcribe",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/691/44261/icon-1753708265-688776e9f3c28.png",
      rating: "82",
      platforms: ["Mac"],
      tab: "Solve with AI+"
    },
    {
      name: "Keep It Shot",
      description: "Rename screenshots with AI",
      url: "https://setapp.com/apps/keep-it-shot",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/688/41516/icon-1736865151-6786757f32e88.png",
      rating: "75",
      platforms: ["Mac"],
      tab: "Solve with AI+"
    },
    {
      name: "Ready to Send",
      description: "Generate draft email replies",
      url: "https://setapp.com/apps/ready-to-send",
      icon: "https://setapp.com/cdn-cgi/image/quality=100,format=auto,width=80/https://store.setapp.com/app/607/main/icon-65719fa98f5e6.png",
      rating: "0",
      platforms: ["Web"],
      tab: "Solve with AI+"
    }
  ];
  class k {
    constructor() {
      this.appDetailsCache = /* @__PURE__ */ new Map();
    }
    /**
     * Fetch app details from the given URL
     */
    async fetchAppDetails(t) {
      var a, p, e;
      try {
        const o = await (await fetch(t)).text(), c = new DOMParser().parseFromString(o, "text/html"), s = {
          name: "",
          description: "",
          url: t,
          icon: "",
          rating: "",
          platforms: [],
          tab: "",
          longDescription: "",
          features: [],
          rawHtml: o,
          sections: {}
        }, r = c.querySelector(
          ".app-screenshots__description-container > div:first-child"
        );
        if (r) {
          let l = ((a = r.textContent) == null ? void 0 : a.trim()) || "";
          l = this.filterUnwantedContent(l), s.longDescription = l;
        }
        const g = c.querySelectorAll(
          ".app-features__items-container h4"
        );
        s.features = Array.from(g).map((l) => {
          var u;
          return ((u = l.textContent) == null ? void 0 : u.trim()) || "";
        }).slice(0, 4).filter(Boolean);
        const d = ((e = (p = c.querySelector(".app-rating-stats__amount")) == null ? void 0 : p.textContent) == null ? void 0 : e.trim()) || "";
        return s.sections = {
          longDescription: s.longDescription || "",
          features: s.features || [],
          totalRatingAmount: d || ""
        }, s;
      } catch (n) {
        throw console.error("Error fetching app details:", n), n;
      }
    }
    /**
     * Get app details with caching
     */
    async getAppDetails(t) {
      if (this.appDetailsCache.has(t))
        return this.appDetailsCache.get(t);
      const a = await this.fetchAppDetails(t);
      return this.appDetailsCache.set(t, a), a;
    }
    /**
     * Prefetch app details in background
     */
    async prefetchAppDetails(t) {
      try {
        const a = await this.fetchAppDetails(t);
        this.appDetailsCache.set(t, a);
      } catch (a) {
        console.error("Prefetch failed for:", t, a);
      }
    }
    /**
     * Filter out unwanted content from text
     */
    filterUnwantedContent(t) {
      if (!t) return "";
      const a = [
        "**IMPORTANT: if you just upgraded to macOS Big Sur, you need to uninstall TripMode completely from within Setapp, and reinstall it to get TripMode 3**",
        "IMPORTANT: if you just upgraded to macOS Big Sur, you need to uninstall TripMode completely from within Setapp, and reinstall it to get TripMode 3"
        // Add more unwanted content here as needed
      ];
      let p = t;
      return a.forEach((e) => {
        p = p.replace(
          new RegExp(this.escapeRegExp(e), "gi"),
          ""
        );
      }), p = p.replace(/\s+/g, " ").replace(/\s*\.\s*\.\s*\./g, "...").replace(/\s*,\s*,/g, ",").replace(/^\s*[.,]\s*/g, "").replace(/\s*[.,]\s*$/g, "").trim(), p;
    }
    /**
     * Escape regex special characters
     */
    escapeRegExp(t) {
      return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    /**
     * Limit text to three sentences
     */
    limitToThreeSentences(t) {
      if (!t) return "";
      const a = t.split(new RegExp("(?<=[.!?])\\s+")).filter((e) => e.trim().length > 0);
      return a.length <= 3 ? t : a.slice(0, 3).join(" ") + "...";
    }
    /**
     * Clear the cache
     */
    clearCache() {
      this.appDetailsCache.clear();
    }
    /**
     * Get cache statistics
     */
    getCacheStats() {
      return {
        size: this.appDetailsCache.size,
        keys: Array.from(this.appDetailsCache.keys())
      };
    }
    /**
     * Check if an app URL is cached
     */
    isCached(t) {
      return this.appDetailsCache.has(t);
    }
    /**
     * Get specific content from fetched app details
     */
    getAppContent(t, a) {
      return t[a] || null;
    }
    /**
     * Get custom section content from parsed data
     */
    getAppSection(t, a) {
      var p;
      return ((p = t.sections) == null ? void 0 : p[a]) || null;
    }
    /**
     * Get all available sections from parsed app data
     */
    getAllAppSections(t) {
      return t.sections || {};
    }
    /**
     * Get raw HTML content for custom parsing
     */
    getRawHtml(t) {
      return t.rawHtml || "";
    }
    /**
     * Example usage method - demonstrates how to use the fetched data
     */
    async exampleUsage(t) {
      try {
        const a = await this.getAppDetails(t), p = this.getAppContent(a, "name"), e = this.getAppContent(a, "features"), n = this.getAppSection(a, "screenshots"), o = this.getAppSection(a, "developer"), i = this.getAppSection(a, "version"), c = this.getAllAppSections(a), s = this.getRawHtml(a);
        return {
          appName: p,
          appFeatures: e,
          appScreenshots: n,
          developer: o,
          version: i,
          allSections: c,
          rawHtmlLength: s.length
        };
      } catch (a) {
        throw console.error("Error in example usage:", a), a;
      }
    }
  }
  const h = ({
    eventCategory: m,
    eventAction: t,
    eventLabel: a
  }) => {
    const p = {
      eventCategory: m,
      eventAction: t,
      eventLabel: a
    }, e = {
      event: "crs-setapp",
      ...p,
      eventLabel2: "",
      //cd8
      eventValue: "",
      eventNonInteraction: !0,
      intercomLoaded: !0
    };
    window.dataLayer.push(e), M("Data pushed to dataLayer", "info"), console.table(p);
  }, S = (m, t, a, p = 1e3) => {
    var c;
    let e, n = !1;
    const o = () => {
      var y;
      if (n) return;
      const s = typeof m == "string" ? document.querySelector(m) : m;
      if (!s) return;
      const r = s.closest(".crs__app-details-view");
      if (!r)
        return;
      const g = (y = r.parentElement) == null ? void 0 : y.querySelector(
        ".crs__pricing-section"
      );
      if (!g)
        return;
      const d = r.getBoundingClientRect(), l = s.getBoundingClientRect(), u = g.getBoundingClientRect(), D = l.top - d.top, f = l.bottom - d.top, T = u.top - d.top, W = D < d.height && f > 0, z = f <= T, P = f < d.height - 20;
      W && z && P && (e = setTimeout(() => {
        h({
          eventCategory: t,
          eventAction: "View",
          eventLabel: a
        }), n = !0;
      }, p));
    }, i = typeof m == "string" ? (c = document.querySelector(m)) == null ? void 0 : c.closest(".crs__app-details-view") : m.closest(".crs__app-details-view");
    return i && i.addEventListener("scroll", o, { passive: !0 }), window.addEventListener("resize", o, { passive: !0 }), o(), () => {
      i && i.removeEventListener("scroll", o), window.removeEventListener("resize", o), clearTimeout(e);
    };
  };
  class C {
    constructor() {
      this.currentView = "apps_grid", this.currentAppDetails = null, this.appDataService = new k(), this.init();
    }
    init() {
      this.addStyles(), this.render(), this.initTabs(), this.initAppCards();
    }
    render() {
      const t = [...new Set(b.map((n) => n.tab))], a = t.reduce((n, o) => (n[o] = b.filter((i) => i.tab === o), n), {}), p = (
        /* HTML */
        `
      <div class="crs__apps-container">
        <div class="crs__apps-main-content">
          <!-- Tabs Navigation -->
          <div class="crs__tabs-nav">
            <!-- Back Button (hidden by default) -->
            <button class="crs__back-button-nav">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><g clip-path="url(#a)"><path fill="#fff" d="M3.842 7.43c-.311.31-.311.83 0 1.141l7.174 7.193a.806.806 0 1 0 1.14-1.141L5.55 8l6.605-6.622a.806.806 0 1 0-1.14-1.142L3.842 7.43Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 16V0h16v16z"/></clipPath></defs></svg>
              </svg>
              Back
            </button>

            <!-- Tab Buttons -->
            <div class="crs__tab-buttons-container">
              ${t.map(
          (n, o) => `
                <button class="crs__tab-button ${o === 0 ? "active" : ""}" data-tab="${n}">
                  ${n}
                </button>
              `
        ).join("")}
            </div>
          </div>

          <!-- Tab Content -->
          <div class="crs__tab-content">
            ${t.map(
          (n, o) => (
            /* HTML */
            `
                  <div
                    class="crs__tab-panel ${o === 0 ? "active" : ""}"
                    data-tab="${n}"
                  >
                    <!-- Apps Grid View -->
                    <div class="crs__apps-grid-view">
                      <div class="crs__apps-grid">
                        ${a[n].map(
              (i) => (
                /* HTML */
                `
                              <div
                                class="crs__app-card"
                                data-name="${i.name}"
                                data-description="${i.description}"
                                data-url="${i.url}"
                                data-iconsrc="${i.icon}"
                                data-rating="${i.rating}"
                                data-platforms="${i.platforms.join(",")}"
                              >
                                <div class="crs__app-icon">
                                  <img src="${i.icon}" alt="${i.name}" />
                                </div>
                                <div class="crs__app-info">
                                  <h3 class="crs__app-name">${i.name}</h3>
                                  <p class="crs__app-description">
                                    ${i.description}
                                  </p>
                                </div>
                              </div>
                            `
              )
            ).join("")}
                      </div>
                    </div>

                    <!-- App Details View -->
                    <div class="crs__app-details-view" style="display: none;">
                      <div class="crs__app-details-content">
                        <!-- App Header -->
                        <div class="crs__app-detail-header">
                          <div class="crs__app-detail-icon">
                            <img
                              src=""
                              alt=""
                              class="crs__app-detail-icon-img"
                            />
                          </div>
                          <div class="crs__app-detail-info">
                            <h2 class="crs__app-detail-name"></h2>
                            <p class="crs__app-detail-description"></p>
                            <div class="crs__app-detail-rating">
                              <div class="crs__rating-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.6375 7.41008C9.21752 8.24811 8.99921 9.1727 9 10.1101V16.5001C9 18.1501 10.3425 19.5001 12 19.5001H17.343C18.627 19.5001 19.7685 18.6901 20.1825 17.4751L22.071 11.9251C22.734 9.99008 21.2865 7.96508 19.23 7.96508H15V2.98508C14.9988 2.65256 14.8861 2.33007 14.6798 2.06925C14.4736 1.80843 14.1857 1.62438 13.8624 1.54659C13.5392 1.46879 13.1991 1.50175 12.8968 1.64018C12.5945 1.77861 12.3473 2.01451 12.195 2.31008L9.6375 7.41008ZM3.75 7.96508C2.508 7.96508 1.5 8.97008 1.5 10.2151V17.2501C1.5 17.8468 1.73705 18.4191 2.15901 18.8411C2.58097 19.263 3.15326 19.5001 3.75 19.5001C4.34674 19.5001 4.91903 19.263 5.34099 18.8411C5.76295 18.4191 6 17.8468 6 17.2501V10.2151C6 8.97008 4.992 7.96508 3.75 7.96508Z"
                                    fill="#9D9CA2"
                                  />
                                </svg>
                              </div>
                              <span class="crs__rating-value"></span>
                              <span class="crs__rating-dot">•</span>
                              <span class="crs__rating-count"></span>
                            </div>
                          </div>
                        </div>

                        <!-- Divider -->
                        <div class="crs__app-detail-divider"></div>

                        <!-- App Long Description -->
                        <div class="crs__app-detail-description-full">
                          <p class="crs__app-detail-long-description"></p>
                        </div>

                        <!-- App Features -->
                        <div class="crs__app-detail-features">
                          <ul class="crs__app-features-list"></ul>
                        </div>

                        <div class="crs__app-details-actions">
                          <button class="btn btn_light">
                            Try it 7 days for free with Setapp
                          </button>
                        </div>
                      </div>
                    </div>

                    <!-- Pricing Section -->
                    <div class="crs__pricing-section">
                      <div class="crs__pricing-content">
                        <div class="crs__pricing-row">
                          <div class="crs__pricing-label">
                            Full Price (260+ apps):
                          </div>
                          <div class="crs__pricing-value">
                            $ 500.00+ / month
                          </div>
                        </div>
                        <div class="crs__pricing-row crs__pricing-highlight">
                          <div class="crs__pricing-label">
                            Your Price with Setapp:
                          </div>
                          <div class="crs__pricing-value">$ 9,99 / month</div>
                        </div>
                      </div>
                    </div>
                  </div>
                `
          )
        ).join("")}
          </div>
        </div>
      </div>
    `
      ), e = document.querySelector(
        "section.header .header__buttons-container"
      );
      e && e.insertAdjacentHTML("afterend", p);
    }
    initDetailsActions() {
      const t = document.querySelector(".crs__apps-container");
      if (!t) return;
      const a = t.querySelector(".crs__tab-panel.active");
      if (!a) return;
      const p = a.querySelector(
        ".crs__app-details-actions button"
      ), e = document.querySelector(
        ".header__cta-button"
      );
      p && (S(
        p,
        "Try it 7 days for free with Setapp",
        "",
        0
      ), p.addEventListener("click", () => {
        e == null || e.click(), h({
          eventCategory: "Try it 7 days for free with Setapp",
          eventAction: "click",
          eventLabel: ""
        });
      }));
    }
    initTabs() {
      const t = document.querySelector(".crs__apps-container");
      if (!t) return;
      const a = t.querySelectorAll(".crs__tab-button"), p = t.querySelectorAll(".crs__tab-panel"), e = t.querySelector(".crs__back-button-nav"), n = t.querySelector(
        ".crs__tab-buttons-container"
      );
      a.forEach((o) => {
        o.addEventListener("click", () => {
          const i = o.getAttribute("data-tab");
          if (!i) return;
          a.forEach((r) => r.classList.remove("active")), p.forEach((r) => r.classList.remove("active")), o.classList.add("active");
          const c = t.querySelector(
            `.crs__tab-panel[data-tab="${i}"]`
          );
          c && c.classList.add("active"), this.showAppsGridView();
          const s = t.querySelector(
            ".crs__tab-panel.active"
          );
          if (h({
            eventCategory: "Tab",
            eventAction: "click",
            eventLabel: (s == null ? void 0 : s.getAttribute("data-tab")) || ""
          }), s) {
            const r = s.querySelector(".crs__apps-grid-view");
            r && (r.scrollTop = 0);
          }
          setTimeout(() => {
            this.prefetchAllAppsInCurrentTab();
          }, 100);
        });
      }), e == null || e.addEventListener("click", () => {
        this.showAppsGridView();
      }), n == null || n.addEventListener("click", (o) => {
        const i = o.target;
        i.classList.contains("crs__tab-button") && !i.classList.contains("active") ? e.classList.add("active") : e.classList.remove("active");
      });
    }
    initAppCards() {
      const t = document.querySelector(".crs__apps-container");
      if (!t) return;
      t.querySelectorAll(".crs__app-card").forEach((p) => {
        p.addEventListener("click", async () => {
          const e = p.getAttribute("data-name"), n = p.getAttribute("data-url"), o = p.getAttribute("data-iconsrc"), i = p.getAttribute("data-description"), c = p.getAttribute("data-rating"), s = p.getAttribute("data-platforms");
          if (!e || !n || !o || !i || !c || !s)
            return;
          h({
            eventCategory: "App block",
            eventAction: "click",
            eventLabel: e
          });
          const r = s.split(",");
          await this.showAppDetailsView(
            e,
            n,
            o,
            i,
            c,
            r
          );
        }), p.addEventListener("mouseenter", () => {
          const e = p.getAttribute("data-url");
          e && !this.appDataService.isCached(e) && this.appDataService.prefetchAppDetails(e);
        });
      }), this.initIntelligentPrefetching();
    }
    async prefetchAppDetails(t) {
      try {
        await this.appDataService.prefetchAppDetails(t);
      } catch (a) {
        console.error("Prefetch failed for:", t, a);
      }
    }
    initIntelligentPrefetching() {
      this.prefetchAllAppsInCurrentTab();
    }
    prefetchAllAppsInCurrentTab() {
      const t = document.querySelector(".crs__apps-container");
      if (!t) return;
      const a = t.querySelector(".crs__tab-panel.active");
      if (!a) return;
      a.querySelectorAll(".crs__app-card").forEach((e) => {
        const n = e.getAttribute("data-url");
        n && !this.appDataService.isCached(n) && this.appDataService.prefetchAppDetails(n);
      });
    }
    async showAppDetailsView(t, a, p, e, n, o) {
      const i = document.querySelector(".crs__apps-container");
      if (!i) return;
      this.clearAppDetailsContent();
      const c = i.querySelector(".crs__tab-panel.active");
      if (!c) return;
      const s = i.querySelector(
        ".crs__tab-buttons-container"
      ), r = i.querySelector(
        ".crs__back-button-nav"
      );
      s && (s.style.display = "none"), r && r.classList.add("active");
      const g = c.querySelector(
        ".crs__apps-grid-view"
      );
      g && (g.style.display = "none");
      const d = c.querySelector(
        ".crs__app-details-view"
      );
      d && (d.style.display = "block", d.scrollTop = 0), this.updateAppDetailsContent(
        t,
        p,
        e,
        n,
        o
      ), this.showLoadingState();
      try {
        const l = await this.appDataService.getAppDetails(a);
        this.hideLoadingState(), this.updateAppDetailsWithParsedData(l), this.initDetailsActions();
      } catch (l) {
        console.error("Error fetching app details:", l), this.hideLoadingState(), this.showErrorState();
      }
    }
    showAppsGridView() {
      const t = document.querySelector(".crs__apps-container");
      if (!t) return;
      const a = t.querySelector(
        ".crs__tab-buttons-container"
      ), p = t.querySelector(
        ".crs__back-button-nav"
      );
      a && (a.style.display = "flex"), p && p.classList.remove("active");
      const e = t.querySelector(".crs__tab-panel.active");
      if (!e) return;
      const n = e.querySelector(
        ".crs__apps-grid-view"
      );
      n && (n.style.display = "", n.scrollTop = 0);
      const o = e.querySelector(
        ".crs__app-details-view"
      );
      o && (o.style.display = "none"), setTimeout(() => {
        this.prefetchAllAppsInCurrentTab();
      }, 100);
    }
    clearAppDetailsContent() {
      const t = document.querySelector(".crs__apps-container");
      if (!t) return;
      const a = t.querySelector(".crs__tab-panel.active");
      if (!a) return;
      const p = a.querySelector(
        ".crs__app-detail-icon-img"
      );
      p && (p.src = "", p.alt = "");
      const e = a.querySelector(".crs__app-detail-name");
      e && (e.textContent = "");
      const n = a.querySelector(
        ".crs__app-detail-description"
      );
      n && (n.textContent = "");
      const o = a.querySelector(".crs__rating-value");
      o && (o.textContent = "");
      const i = a.querySelector(".crs__rating-count");
      i && (i.textContent = "");
      const c = a.querySelector(
        ".crs__platforms-list"
      );
      c && (c.innerHTML = "");
      const s = a.querySelector(
        ".crs__app-detail-long-description"
      );
      s && (s.textContent = "");
      const r = a.querySelector(".crs__app-features-list");
      r && (r.innerHTML = "");
    }
    updateAppDetailsContent(t, a, p, e, n) {
      const o = document.querySelector(".crs__apps-container");
      if (!o) return;
      const i = o.querySelector(".crs__tab-panel.active");
      if (!i) return;
      const c = i.querySelector(
        ".crs__app-detail-icon-img"
      );
      c && (c.src = a, c.alt = t);
      const s = i.querySelector(".crs__app-detail-name");
      s && (s.textContent = t);
      const r = i.querySelector(
        ".crs__app-detail-description"
      );
      r && (r.textContent = p);
      const g = i.querySelector(".crs__rating-value");
      if (e === "0") {
        const l = i.querySelector(
          ".crs__app-detail-rating"
        );
        l && l.classList.add("d-none");
      } else g && (g.textContent = `${e}%`);
      const d = i.querySelector(
        ".crs__platforms-list"
      );
      d && n.length > 0 && (d.innerHTML = n.map(
        (l) => `<span class="crs__platform-badge">${l}</span>`
      ).join(""));
    }
    updateAppDetailsWithParsedData(t) {
      var i, c;
      const a = document.querySelector(".crs__apps-container");
      if (!a) return;
      const p = a.querySelector(".crs__tab-panel.active");
      if (!p) return;
      const e = p.querySelector(
        ".crs__app-detail-long-description"
      );
      e && t.longDescription && (e.textContent = this.limitToThreeSentences(
        t.longDescription
      ));
      const n = p.querySelector(".crs__rating-count");
      n && ((i = t.sections) != null && i.totalRatingAmount) && (n.textContent = (c = t.sections) == null ? void 0 : c.totalRatingAmount);
      const o = p.querySelector(".crs__app-features-list");
      o && t.features && t.features.length > 0 && (o.innerHTML = t.features.map((s) => `<li class="crs__app-feature-item">${s}</li>`).join(""));
    }
    limitToThreeSentences(t) {
      return this.appDataService.limitToThreeSentences(t);
    }
    showLoadingState() {
      const t = document.querySelector(".crs__apps-container");
      if (!t) return;
      const a = t.querySelector(".crs__tab-panel.active");
      if (!a) return;
      const p = a.querySelector(
        ".crs__app-detail-long-description"
      );
      p && (p.innerHTML = '<div class="crs__loading-skeleton">Loading description...</div>');
      const e = a.querySelector(".crs__app-features-list");
      e && (e.innerHTML = `
        <li class="crs__loading-skeleton">Loading features...</li>
        <li class="crs__loading-skeleton">Loading features...</li>
        <li class="crs__loading-skeleton">Loading features...</li>
      `);
      const n = a.querySelector(".crs__rating-count");
      n && (n.innerHTML = '<span class="crs__loading-skeleton">Loading...</span>');
    }
    hideLoadingState() {
      const t = document.querySelector(".crs__apps-container");
      if (!t) return;
      const a = t.querySelector(".crs__tab-panel.active");
      if (!a) return;
      a.querySelectorAll(
        ".crs__loading-skeleton"
      ).forEach((e) => {
        e.remove();
      });
    }
    showErrorState() {
      const t = document.querySelector(".crs__apps-container");
      if (!t) return;
      const a = t.querySelector(".crs__tab-panel.active");
      if (!a) return;
      const p = a.querySelector(
        ".crs__app-detail-long-description"
      );
      p && (p.textContent = "Unable to load additional details.");
      const e = a.querySelector(".crs__app-features-list");
      e && (e.innerHTML = '<li class="crs__error-message">Unable to load features.</li>');
      const n = a.querySelector(".crs__rating-count");
      n && (n.textContent = "N/A");
    }
    /**
     * Clear the app details cache
     */
    clearCache() {
      this.appDataService.clearCache();
    }
    /**
     * Get cache statistics
     */
    getCacheStats() {
      return this.appDataService.getCacheStats();
    }
    /**
     * Check if an app URL is cached
     */
    isCached(t) {
      return this.appDataService.isCached(t);
    }
    async parseApps() {
      await w("app-details"), document.querySelectorAll("app-details:not(.d-none)").forEach((a) => {
        var p, e, n, o;
        a.getAttribute("name"), a.getAttribute("description"), a.getAttribute("url"), (p = a.getAttribute("iconsrc")) == null || p.replace("quality=75", "quality=100"), a.getAttribute("rating"), (e = a.getAttribute("platforms")) == null || e.split(","), (o = (n = document.querySelector(
          ".applications-categories .applications-categories__item_active"
        )) == null ? void 0 : n.textContent) == null || o.trim();
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = q, document.head.appendChild(t);
    }
  }
  const A = `section.header :is(.header__logo, .header__badge),
.eney-promo-banner {
  display: none;
}

.layout__main .home {
  background: linear-gradient(0deg, #1a1a1d 0%, #1a1a1d 100%), #fff;
}

.layout__main_with-header-banner section.header {
  padding-top: 64px;
}

section.header .header__content {
  display: grid;
  grid-template-columns: minmax(0, 560px) minmax(0, 608px);
  grid-template-rows: 1.5fr repeat(2, auto) 1fr;
  align-items: start;
  gap: 0 32px;
  max-width: 1200px;
}

section.header h1.header__title.h1_hero {
  grid-column: 1 / 2;
  align-self: end;
  margin: 0;
  text-align: left;
  font-size: 62px;
  font-weight: 750;
  line-height: 67.84px;
  letter-spacing: 1px;
}

section.header .header__description {
  margin-top: 28px;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  max-width: 100%;
  text-align: left;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
}

section.header .header__buttons-container {
  margin-top: 28px;
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}

.crs__trial-description {
  margin-top: 16px;
  grid-column: 1 / 2;
  grid-row: 4 / 5;
  display: flex;
  gap: 12px;
  color: #fff;
  opacity: 0.5;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  font-family: 'Open Sans', sans-serif;
}

.crs__apps-container {
  grid-column: 2 / 3;
  grid-row: 1 / 5;
}
`;
  _({ name: "Home page", dev: "OS" }), v("exp_hp");
  class O {
    constructor() {
      this.device = window.innerWidth < 768 ? "mobile" : "desktop", this.init();
    }
    init() {
      location.pathname !== "/" || this.device === "mobile" || (this.addStyles(), new x(), new C());
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = A, document.head.appendChild(t);
    }
  }
  new O();
})();
