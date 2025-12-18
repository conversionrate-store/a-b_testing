(function() {
  "use strict";
  const k = (g, e, t, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: g,
      event_desc: e,
      event_type: t,
      event_loc: s
    }), E(`Event: ${g} | ${e} | ${t} | ${s}`, "success");
  }, O = (g) => new Promise((e) => {
    const t = document.querySelector(g);
    t && e(t);
    const s = new MutationObserver(() => {
      const n = document.querySelector(g);
      n && (e(n), s.disconnect());
    });
    s.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), $ = ({ name: g, dev: e }) => {
    console.log(
      `%c EXP: ${g} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, B = (g) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", g, "variant_1"));
    }, 1e3);
  }, E = (g, e = "info") => {
    let t;
    switch (e) {
      case "info":
        t = "color: #3498db;";
        break;
      case "warn":
        t = "color: #f39c12;";
        break;
      case "error":
        t = "color: #e74c3c;";
        break;
      case "success":
        t = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${g}`, `${t} font-size: 16px; font-weight: 600`);
  }, R = `:root {
  /* ============================================
     TYPOGRAPHY & FONT FAMILY
     ============================================ */
  --font-family: 'Red Hat Display', sans-serif, ui-sans-serif, system-ui,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol,
    'Noto Color Emoji';

  /* ============================================
     MODAL BACKGROUNDS
     ============================================ */
  --crs-bg-modal-primary: #12151c;
  --crs-bg-modal-secondary: #0e1015;
  --crs-bg-modal-seller: #192233;
  --crs-bg-input: #13151b;
  --crs-bg-input-seller: #192233;

  /* ============================================
     TEXT COLORS
     ============================================ */
  --crs-text-primary: #11121d;
  --crs-text-secondary: rgba(17, 18, 29, 0.75);
  --crs-text-tertiary: rgba(17, 18, 29, 0.9);
  --crs-text-quaternary: rgba(250, 250, 250, 0.9);
  --crs-text-muted: #71717a;
  --crs-text-title: #a1a1aa;
  --crs-text-heading: #fafafa;
  --crs-text-muted-foreground: #a1a1aa;
  --crs-text-foreground: #fafafa;

  /* ============================================
     BUTTONS & INTERACTIVE ELEMENTS
     ============================================ */
  --crs-btn-close: rgba(156, 163, 175, 0.1);
  --crs-btn-close-alt: #bfbfbf;
  --crs-bg-btn-social: #272a30;
  --crs-bg-btn-social-alt: #28334d;
  --white: #ffffff;

  /* ============================================
     STATUS & BADGES
     ============================================ */
  --crs-status-online: #43b581;
  --crs-status-offline: #747f8d;
  --crs-status-border: #0e1015;
  --crs-text-rating: #4ade80;
  --crs-badge-primary: #66a1ff;
  --crs-text-review-count: rgba(250, 250, 250, 0.9);

  /* ============================================
     MESSAGING UI
     ============================================ */
  --crs-message-bg: rgba(56, 132, 255, 0.1);
  --crs-message-border: rgba(96, 165, 250, 0.3);
  --crs-message-text: #fff;
  --crs-message-typing-text: var(--crs-message-text);

  /* ============================================
     BORDERS & DIVIDERS
     ============================================ */
  --crs-border-mobile: #1f2328;

  /* ============================================
     SHADOWS & EFFECTS
     ============================================ */
  --crs-shadow: rgba(0, 0, 0, 0.32);
  --crs-shadow-light: rgba(0, 0, 0, 0.05);
}

html.light {
  --crs-text-title: #11121d;
  --crs-bg-modal-primary: hsl(0 0% 100%);
  --crs-bg-modal-secondary: hsl(218 29% 97%);
  --crs-bg-input: var(--crs-bg-modal-secondary);
  --crs-message-text: #71717a;
  --crs-text-muted-foreground: hsl(var(--foreground));
  --crs-badge-primary: #2563eb;
  --crs-btn-close: rgba(156, 163, 175, 0.1);
  --crs-text-review-count: rgba(17, 18, 29, 0.9);
  --crs-bg-modal-seller: #fff;
  --crs-text-heading: #11121d;
  --crs-message-bg: #2d2f34;
  --crs-message-text: #fff;
  --crs-message-typing-text: #71717a;
  --crs-text-rating: #16a249;
  --crs-status-online: #16a249;
  --crs-text-foreground: #11121d;
}

body.crs-modal-open-waiting
  [id*='reka-dialog-content'][data-state='open']:has(
    input[autofocus]
  )[data-crs-modal-type] {
  display: none;
}

/* add delay */
 [id*='reka-dialog-content'][data-state='open']:not([data-crs-modal-purpose="signup"]) {
  opacity: 0;
  animation: fadeIn 0.1s ease-out 0.2s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.crs-modal > div {
  max-height: 90dvh;
}
.crs-modal-bg {
  display: flex;
  justify-content: center;
}

.crs-modal-wrap {
  padding-block: 44px;
  font-family: var(--font-family);
  max-width: 285px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.crs-modal-image {
  border-radius: 8px;
}
.crs-modal-image img {
  width: 284px;
  height: 284px;
  object-fit: cover;
  border-radius: 8px;
  overflow: hidden;
}

.crs-modal-wrap.buy {
  gap: 20px;
}

.crs-modal-badges {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-inline: 12px;
}

.crs-modal-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 98px;
}

.crs-modal-badge i {
  color: var(--crs-badge-primary);
}
.crs-modal-badge span {
  color: var(--crs-text-muted-foreground);
  text-align: center;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
}
.crs-modal-badge-separator {
  width: 1px;
  height: calc(100% - 22px);
  background: rgb(161 161 170 / 12%);
}

html:not(.light) .crs-modal input.bg-field {
  min-height: 3.25rem;
  background-color: var(--crs-bg-input) !important;
  border: none;
  box-shadow: 0 0 0 1px #282a2f, 0 1px 2px 0 var(--crs-shadow-light);
}

.crs-modal[data-crs-modal-type='message'] input.bg-field {
  min-height: 3.25rem;
}
html:not(.light) .crs-modal[data-crs-modal-type='message'] input.bg-field {
  background-color: var(--crs-bg-input-seller) !important;
}
/*  */
[data-crs-modal-type='buy'] .crs-modal-bg {
  background: var(--crs-bg-modal-secondary);
}

[data-crs-modal-type='buy'] .crs-modal-bg ~ div:not(.hidden) {
  background: var(--crs-bg-modal-primary);
  padding-inline: 3.13rem !important;
}

[data-crs-modal-type='buy'] .crs-modal-bg .crs-modal-bg-wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
  padding-inline: 4.62rem;
}
html.light [data-crs-modal-type] button:has(.fa-xmark) {
  background: var(--crs-btn-close);
  color: #000;
}

[data-crs-modal-type='message'] {
  max-width: 672px !important;
}
[data-crs-modal-type='message'] > div {
  max-height: 90dvh;
  border-radius: 0.75rem;
}

[data-crs-modal-type='message'] > div:not(.crs-modal-seller) {
  z-index: 10;
}
[data-crs-modal-type='message'] > div:not(.hidden) + .crs-modal-seller {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

[data-crs-modal-type='message'] > .crs-modal-seller {
  width: 100%;
  min-height: 35rem;
  padding: 1.5rem;
  background-color: var(--crs-bg-modal-seller);
}

[data-crs-modal-type='message'] button:has(.fa-xmark) {
  background: var(--crs-btn-close);
}

[data-crs-modal-type='message'] .flex.bg-card {
  margin: 0;
  flex-direction: column;
  min-height: 35rem;
  background: rgba(19, 21, 27, 0.9);

  backdrop-filter: blur(10px);
}
html.light [data-crs-modal-type='message'] .flex.bg-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
}
[data-crs-modal-type='message'] .crs-modal-bg {
  flex-direction: column;
  order: 0;
  width: 100%;
}

[data-crs-modal-type='message'] .crs-modal-bg ~ div:not(.hidden) {
  position: relative;
  margin-inline: auto;
  width: 100%;
  animation: modalSlideIn 0.3s ease-out forwards;
}
[data-crs-animation='true'] .crs-modal-bg ~ div:not(.hidden) {
  animation: modalSlideIn 0.3s ease-out forwards;
}
@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

[data-crs-modal-type='message']
  .crs-modal-bg
  ~ div:not(.hidden)
  .text-muted-foreground {
  color: var(--crs-text-muted-foreground);
}

[data-crs-modal-type='message']
  .crs-modal-bg
  ~ div:not(.hidden)
  .text-foreground {
  color: var(--crs-text-foreground);
}

[data-crs-modal-type='message'] h2 {
  color: var(--crs-text-heading) !important;
  font-family: 'Red Hat Display';
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
}

.crs-modal-wrap {
  display: grid;
  grid-template-columns: 55px auto auto;
  grid-template-areas:
    'seller-avatar seller-name seller-rating'
    'seller-avatar seller-reviews seller-reviews';
  justify-content: start;
  column-gap: 12px;
  width: 100%;
  max-width: 100%;
  padding: 0;
}

.crs-modal-title {
  color: var(--crs-text-title);
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.75rem;
  letter-spacing: -0.0375rem;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
}

.crs-modal-seller-avatar {
  grid-area: seller-avatar;
  position: relative;
}

.crs-modal-seller-avatar img {
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
}

.crs-modal-seller-status {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 20px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
}

.crs-modal-seller-status.online {
  background: var(--crs-status-online);
}

.crs-modal-seller-status.offline {
  background: var(--crs-status-offline);
}

.crs-modal-seller-name {
  display: flex;
  align-items: center;
  gap: 2px;
  grid-area: seller-name;
  color: var(--crs-text-heading);
  font-family: Manrope;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
}
.crs-modal-seller-verified {
  display: none;
}
.crs-modal-seller-rating {
  grid-area: seller-rating;
  margin-left: 12px;
  color: var(--crs-text-rating);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
}

.crs-modal-seller-reviews-count {
  grid-area: seller-reviews;
  color: var(--crs-text-review-count);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
}

.crs-modal-seller-message {
  margin-top: 24px;
  margin-bottom: -10px;
}

.crs-modal-seller-message-title {
  color: var(--crs-text-quaternary);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
}

.crs-modal-seller-message-header {
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 0.4375rem;
  border-radius: 0.5rem 0.5rem 0 0;
  background: rgba(74, 222, 128, 0.1);
  box-shadow: 0 0 0 1px rgba(34, 197, 94, 0.2);
}

.crs-modal-seller-message-header .crs-status {
  color: #4ade80;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
}
.crs-modal-seller-message-content {
  min-height: 10.4rem;
  padding: 0.6875rem;
  background: transparent;
  box-shadow: 0 0 0 1px #303a4f, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border-radius: 0 0 8px 8px;
}
html.light .crs-modal-seller-message-content {
  box-shadow: 0 0 0 1px #d4d4d4, 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.crs-modal-seller-message-header .crs-status-online {
  color: var(--crs-status-online);
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}

.crs-modal-seller-message-header .crs-status-online::before {
  margin-right: 0.5ch;
  content: '';
  display: inline-block;
  width: 12px;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  background-color: var(--crs-status-online);
}

.crs-modal-seller-message-typing {
  color: var(--crs-message-typing-text);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  transition: opacity 0.2s ease-out;
}

.crs-modal-seller-message-typing.hidden {
  opacity: 0;
  pointer-events: none;
  position: absolute;
}

.crs-modal-seller-message-dot {
  display: inline-block;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: var(--crs-text-muted);
  border-radius: 50%;
  animation: blink 2s infinite;
}

.crs-modal-seller-message-dot:nth-child(2) {
  animation-delay: 0.3s;
}

.crs-modal-seller-message-dot:nth-child(3) {
  animation-delay: 0.6s;
}

.crs-modal-seller-action {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.crs-modal-seller-action button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  min-height: 3.25rem;
  border-radius: 0.5rem;
  background: #2563eb;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: var(--white);
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
}

html:not(.light) .crs-modal .space-y-8:has(form) > div:first-child a {
  background-color: var(--crs-bg-btn-social);
}
html:not(.light)
  .crs-modal[data-crs-modal-type='message']
  .space-y-8:has(form)
  > div:first-child
  a {
  background-color: var(--crs-bg-btn-social-alt);
  box-shadow: 0 0 0 1px rgba(156, 163, 175, 0.2),
    0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

[data-crs-modal-purpose='signup'] .space-y-8:has(form) {
  display: flex;
  flex-direction: column;
}
[data-crs-modal-purpose='signup'] .space-y-8:has(form) > div:first-child {
  order: 3;
  margin-top: 1.5rem;
}

[data-crs-modal-purpose='signup'] .space-y-8:has(form) > div:last-of-type {
  margin: 0 !important;
  order: 2;
}

[data-crs-modal-purpose='login'] .space-y-8:has(form) > div:first-child {
  flex-wrap: wrap;
}

[data-crs-modal-purpose='login']
  .space-y-8:has(form)
  > div:first-child
  a[href*='google'] {
  flex: 1 0 100%;
  display: flex;
  gap: 1ch;
}

[data-crs-modal-purpose]
  .space-y-8:has(form)
  > div:first-child
  a[href*='google'] {
  order: -2;
}

[data-crs-modal-purpose]
  .space-y-8:has(form)
  > div:first-child
  a[href*='steam'] {
  order: -1;
}

[data-crs-modal-purpose='signup'] .space-y-8 > span {
  order: 4;
  margin-top: 0.75rem !important;
}

[data-crs-modal-purpose='signup'] .space-y-8 form {
  order: -1;
  display: flex;
  flex-direction: column;
  margin-top: 0 !important;
  margin-bottom: 2rem !important;
}

/* [data-crs-modal-purpose='login'] .space-y-8 form {
  order: -1;
  display: flex;
  flex-direction: column;
  margin-top: 0 !important;
  margin-bottom: 1rem !important;
} */

[data-crs-modal-purpose='signup'] .space-y-8 form input {
  margin: 0 !important;
}

[data-crs-modal-purpose='signup'] .space-y-8 form > div.w-full:last-of-type {
  order: -1;
  margin-bottom: 1rem !important;
}

.crs-add-username:not(.hidden) {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.crs-add-username-label {
  color: var(--crs-text-title);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
}

.crs-add-username-optional-label {
  color: var(--crs-text-muted-foreground);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
}

@keyframes blink {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.crs-modal-message {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.crs-modal-message.show {
  position: static;
  opacity: 1;
  transform: translateY(0);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.crs-message-avatar {
  flex-shrink: 0;
}

.crs-message-avatar img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
}

.crs-message-content {
  padding: 0.75rem;
  border-radius: 5px;
  background: var(--crs-message-bg);
  box-shadow: 0 1px 0 1px rgba(227, 229, 234, 0.05) inset;
  color: var(--crs-message-text);
  font-family: Manrope;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
}

.crs-close-mobile {
  display: none;
}
@media (max-width: 768px) {
  div:has(> .crs-modal-bg) {
    flex-direction: column;
  }

  .crs-modal-bg {
    order: 0;
  }

  .crs-modal-wrap {
    grid-template-areas:
      'seller-avatar seller-name seller-name'
      'seller-avatar seller-reviews seller-reviews';
  }

  .crs-modal-seller-rating {
    display: none;
  }

  .crs-modal-image {
    flex-shrink: 0;
    border-radius: 6px;
  }
  .crs-modal-image img {
    width: 68px;
    height: 68px;
    border-radius: 6px;
    overflow: hidden;
  }

  .crs-modal-title {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }

  [data-crs-modal-type='buy'] .max-h-\\[calc\\(100svh-250px\\)\\] {
    max-height: calc(100svh - 50px);
  }

  [data-crs-modal-type='buy'] .bg-card {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      'title image'
      'login image'
      'content content';
    padding: 3rem 2rem !important;
  }

  [data-crs-modal-type='buy'] .bg-card > :is(.crs-modal-bg, div:not(.hidden)) {
    display: contents;
    padding-inline: 2rem !important;
  }

  [data-crs-modal-type='buy']
    .bg-card
    :is(.crs-modal-title, .crs-modal-badges) {
    display: none;
  }

  [data-crs-modal-type='buy'] .bg-card .crs-modal-bg-wrap {
    grid-area: image;
    padding: 0;
  }

  [data-crs-modal-type='buy'] .bg-card > div:not(.hidden) h2 {
    grid-area: title;
    text-wrap: balance;
  }
  [data-crs-modal-type='buy'] .bg-card > div:not(.hidden) h2 + p {
    grid-area: login;
    display: flex;
    gap: 0.25ch;
    flex-wrap: wrap;
    width: 90%;
  }
  [data-crs-modal-type='buy'] .bg-card > div:not(.hidden) h2 ~ .mt-8 {
    grid-area: content;
  }

  .crs-modal-seller-message {
    margin-top: 16px;
    padding-inline: 0;
  }

  [data-crs-modal-type='buy'] .crs-modal-bg .crs-modal-bg-wrap {
    padding: 0;
  }

  [data-crs-modal-type='buy'] .bg-card {
    background-color: var(--crs-bg-modal-primary);
  }
  [data-crs-modal-type='message'] h2 {
    width: 90%;
  }

  .crs-close-mobile {
    display: inline-flex;
    top: -45px;
    user-select: none;
    pointer-events: none;
    background: var(--crs-color-close-2btn) !important;
    color: #000;
  }

  .crs-message-content {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  /* [data-crs-modal-type='message'] button:has(.fa-xmark):not(.crs-close-mobile) {
    display: none;
  } */
}

@media (max-width: 640px) {
  .crs-modal-bg {
    padding-inline: 2rem;
  }

  [data-crs-modal-type='message'] .crs-modal-bg {
    padding-inline: 24px;
  }
  .crs-modal-wrap {
    max-width: 100%;
  }
}
`, j = {
    regexpLinks: {
      items: /^https:\/\/gameboost\.com\/(?:[^/]+\/)?[^/]+\/items\/[A-Za-z0-9-]+\/?(?:\?.*)?(?:#.*)?$/
    }
  };
  class z {
    closeMobileButton() {
      return (
        /* HTML */
        `<button
      type="button"
      class="crs-close-mobile inline-flex items-center justify-center text-sm transition-colors focus:outline focus:outline-offset-2 focus-visible:outline outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden font-medium active:translate-y-px whitespace-nowrap bg-secondary-light hover:bg-secondary-light-hover text-secondary-light-foreground focus:outline-secondary absolute top-3 right-3 z-10 p-1 w-7 h-7 rounded-full md:text-white/80 sm:w-7 sm:h-7"
    >
      <span class="sr-only">Close</span><i class="fa-solid fa-xmark"></i>
    </button>`
      );
    }
    addUserNameButton() {
      return (
        /* HTML */
        `<button type="button" class="crs-add-username">
      <span class="crs-add-username-label">Add Username +</span>
      <span class="crs-add-username-optional-label">*Optional</span>
    </button>`
      );
    }
    buyModalBackground({
      backgroundClasses: e,
      imageSrc: t,
      initialBg: s,
      initTitle: n,
      title: i,
      isInstantDelivery: o,
      isWarrantyAvailable: r
    }) {
      var a;
      const l = document.querySelector('nav[aria-label="Breadcrumb"]');
      return (
        /* HTML */
        `
      <div class="crs-modal-bg-wrap buy">
        <div class="crs-modal-title">${n || i}</div>
        <div
          class="crs-modal-image  ${e || ""}"
        >
          <img src="${t || s}" alt="" width="284" height="284" />
        </div>
        <div class="crs-modal-badges">
          ${o ? (
          /* HTML */
          `
                <div class="crs-modal-badge crs-modal-badge-instant-delivery">
                  <i class="fa-solid fa-bolt"></i>
                  <span>
                    Instant <br />
                    Delivery
                  </span>
                </div>
              `
        ) : ""}
          ${o && r ? (
          /* HTML */
          '<div class="crs-modal-badge-separator"></div>'
        ) : ""}
          ${r ? (
          /* HTML */
          `
                <div class="crs-modal-badge crs-modal-badge-warranty">
                  <i class="fa-solid fa-shield-halved"></i>
                  ${l && ((a = l.textContent) != null && a.includes("Game Keys")) ? "<span>Valid Key <br> Guarantee</span>" : `<span>
                    14-days <br />
                    Warranty Included
                  </span>`}
                </div>
              `
        ) : ""}
        </div>
      </div>
    `
      );
    }
    sellerOverModal({
      avatarSrc: e,
      sellerName: t,
      isOnline: s,
      isVerified: n,
      reviewText: i,
      rating: o,
      statusText: r
    }) {
      return (
        /* HTML */
        `
      <div
        class="crs-modal-seller overflow-y-auto max-h-[calc(100svh-250px)] relative"
      >
        <button
          type="button"
          class="crs-modal-seller-msg-close inline-flex items-center justify-center text-sm transition-colors focus:outline focus:outline-offset-2 focus-visible:outline outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden font-medium active:translate-y-px whitespace-nowrap bg-secondary-light hover:bg-secondary-light-hover text-secondary-light-foreground focus:outline-secondary absolute top-3 right-3 z-10 p-1 w-7 h-7 rounded-full md:text-white/80 sm:w-7 sm:h-7"
        >
          <span class="sr-only">Close</span><i class="fa-solid fa-xmark"></i>
        </button>
        <div class="crs-modal-wrap">
          <div class="crs-modal-seller-avatar">
            <img
              src="${e}"
              alt="${t}"
              width="55"
              height="55"
            />
            <div
              class="crs-modal-seller-status${s ? " online" : " offline"}"
            >
              <span class="sr-only"> ${r} </span>
            </div>
          </div>
          <div class="crs-modal-seller-name">
            Message ${t}
            ${n ? (
          /* HTML */
          `<i
                  class="crs-modal-seller-verified -blue-500 fa-solid fa-badge-check"
                ></i>`
        ) : ""}
          </div>
          <div class="crs-modal-seller-reviews-count">${i}</div>

          <div class="crs-modal-seller-rating">
            <i class="mr-0.5 fa-solid fa-thumbs-up"></i>${o}%
          </div>
        </div>
        <div class="crs-modal-seller-message">
          <div class="crs-modal-seller-message-title">Message</div>
          <div class="crs-modal-seller-message-header">
            <div class="crs-status-online">Online</div>
          </div>
          <div class="crs-modal-seller-message-content">
            <div class="crs-modal-seller-message-typing">
              ${t} is typing
              <span class="crs-modal-seller-message-dots">
                <span class="crs-modal-seller-message-dot"></span>
                <span class="crs-modal-seller-message-dot"></span>
                <span class="crs-modal-seller-message-dot"></span>
              </span>
            </div>
            <div class="crs-modal-message">
              <div class="crs-message-avatar">
                <img src="${e}" alt="${t}" />
              </div>
              <div class="crs-message-content">
                hey, what question do you have ?
              </div>
            </div>
          </div>
        </div>
        <div class="crs-modal-seller-action">
          <button id="sign-up-to-chat">
            Sign Up to Chat
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="none"
              >
                <path
                  fill="#FAFAFA"
                  d="M15.063.313c.53-.313 1.218.124 1.093.75l-2.25 13.5a.75.75 0 0 1-1.031.593L9 13.5l-2 2.438a.74.74 0 0 1-1.313-.5v-2.532l7.5-9.156c.157-.188-.093-.406-.25-.25L3.97 11.406.625 10C.062 9.781 0 8.969.562 8.656l14.5-8.344Z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    `
      );
    }
  }
  class I {
    constructor() {
      this.pendingModalObservers = [], this.popupRenderer = new z();
    }
    cleanup() {
      var e;
      (e = this.modalAbortController) == null || e.abort(), this.modalAbortController = void 0, this.pendingModalObservers.forEach((t) => t.disconnect()), this.pendingModalObservers = [];
    }
    async init({
      type: e = "buy",
      location: t = "PDP",
      context: s = document,
      skipAnimation: n = !1,
      initialData: i = {},
      preventAutoClickSignup: o = !1
    }) {
      try {
        const r = (i == null ? void 0 : i.title) || "", l = (i == null ? void 0 : i.imageSrc) || "", a = await new Promise((d, b) => {
          const u = '[id*="reka-dialog-content"][data-state="open"]:has(input[autofocus]):not([data-crs-modal-type])', x = document.querySelector(u);
          if (x) {
            d(x);
            return;
          }
          const c = new MutationObserver(() => {
            const y = document.querySelector(u);
            if (y) {
              c.disconnect();
              const w = this.pendingModalObservers.indexOf(c);
              w > -1 && this.pendingModalObservers.splice(w, 1), d(y);
            }
          });
          this.pendingModalObservers.push(c), c.observe(document.documentElement, {
            childList: !0,
            subtree: !0
          });
        }), m = a.querySelector(":scope > div"), f = a.querySelector(
          "button:has(.fa-xmark):not(.crs-close-mobile)"
        ), C = a.querySelectorAll("h2"), h = a.querySelector(
          'div[style*="background-image"]'
        );
        a.classList.add("crs-modal"), a.dataset.crsModalType = e;
        let p = !1;
        const q = a.querySelector(
          ".text-foreground.hover\\:underline"
        );
        if (e === "buy") {
          if (h) {
            const {
              title: d,
              imageSrc: b,
              backgroundClasses: u,
              isInstantDelivery: x,
              isWarrantyAvailable: c
            } = this.getProductData(t, s);
            (b || l && l.trim() !== "") && (a.dataset.bg = b || l, a.dataset.productTitle = (i == null ? void 0 : i.title) || d || "", h.style.backgroundImage = "none", h.classList.add("crs-modal-bg"), h.innerHTML = this.popupRenderer.buyModalBackground({
              backgroundClasses: u,
              imageSrc: b,
              initialBg: l,
              initTitle: r,
              title: d,
              isInstantDelivery: x,
              isWarrantyAvailable: c
            }));
          }
        } else {
          const {
            avatarSrc: d,
            sellerName: b,
            sellerTier: u,
            isOnline: x,
            statusText: c,
            isVerified: y,
            rating: w,
            reviewCount: L,
            reviewText: T,
            totalSales: P
          } = this.getSellerData();
          if (h && m) {
            h.style.backgroundImage = "none", h.classList.add("crs-modal-bg");
            const A = a.querySelector(".crs-modal-seller");
            A && A.remove(), a.dataset.crsModalPurpose === "signup" && m.classList.add("hidden"), m.insertAdjacentHTML(
              "afterend",
              this.popupRenderer.sellerOverModal({
                avatarSrc: d,
                sellerName: b,
                isOnline: x,
                isVerified: y,
                reviewText: T,
                rating: w,
                statusText: c
              })
            );
            const M = a.querySelector(
              ".crs-modal-seller-msg-close"
            ), _ = a.querySelector(
              "#sign-up-to-chat"
            );
            if (M && M.addEventListener(
              "click",
              () => {
                k(
                  "exp_create_acc_to_chat_close",
                  "Create an Account to Chat Step 1 Close",
                  "click",
                  "Registration Popup"
                ), f == null || f.click();
              },
              { signal: this.modalAbortController.signal }
            ), _ && _.addEventListener(
              "click",
              () => {
                k(
                  "exp_create_acc_to_chat_click",
                  "Sign Up to Chat",
                  "click",
                  "Registration Popup"
                ), m.classList.remove("hidden"), k(
                  "exp_create_acc_to_chat_view_2",
                  "Create an Account to Chat Step 2",
                  "view",
                  "Registration Popup"
                );
              },
              { signal: this.modalAbortController.signal }
            ), n) {
              const S = a.querySelector(
                ".crs-modal-seller-message-typing"
              ), v = a.querySelector(
                ".crs-modal-message"
              );
              S && S.classList.add("hidden"), v && v.classList.add("show");
            } else
              setTimeout(() => {
                const S = a.querySelector(
                  ".crs-modal-seller-message-typing"
                ), v = a.querySelector(
                  ".crs-modal-message"
                );
                S && S.classList.add("hidden"), v && v.classList.add("show");
              }, 4e3);
          }
        }
        C.forEach((d) => {
          var b, u;
          if (d && d.textContent === "Login") {
            a.dataset.crsModalPurpose = "login";
            const x = e === "buy";
            if (q && !o) {
              q.click();
              return;
            }
            x ? (d.innerHTML = "Login to Buy", p || (k(
              "exp_login_to_buy_view",
              "Login to Buy",
              "view",
              "Registration Popup"
            ), p = !0)) : (d.innerHTML = "Login to Chat", p || (k(
              "exp_login_to_chat_view",
              "Login to Chat",
              "view",
              "Registration Popup"
            ), p = !0));
            const c = a.querySelector(
              '.space-y-8:has(form) > div:first-child a[href*="google"]'
            );
            c && !c.querySelector(".crs-google-login-text") && c.insertAdjacentHTML(
              "beforeend",
              '<span class="crs-google-login-text">Log in with Google</span>'
            );
          }
          if (d && d.textContent === "Create Account") {
            a.dataset.crsModalPurpose = "signup", e === "buy" ? (d.innerHTML = "Create an Account to Buy", p || (k(
              "exp_create_acc_to_save_view",
              "Create an Account to Buy",
              "view",
              "Registration Popup"
            ), p = !0)) : (d.innerHTML = "Create an Account to Chat", p || (p = !0, k(
              "exp_create_acc_to_chat_view_1",
              "Create an Account to Chat Step 1",
              "view",
              "Registration Popup"
            )));
            const c = a.querySelector(
              '.relative:has(> input[placeholder="Username - Optional"])'
            );
            if (c) {
              (b = c.parentElement) == null || b.insertAdjacentHTML(
                "afterbegin",
                this.popupRenderer.addUserNameButton()
              ), c.classList.add("hidden");
              const L = a.querySelector(
                ".crs-add-username"
              );
              L.addEventListener(
                "click",
                () => {
                  c.classList.remove("hidden"), L.classList.add("hidden"), k(
                    "exp_create_acc_to_save_click",
                    "Add Username",
                    "click",
                    "Registration Popup"
                  );
                },
                { signal: this.modalAbortController.signal }
              );
            }
            const y = a.querySelector(
              ".space-y-8:has(form) > div:last-of-type > div"
            );
            y && (y.textContent = "Or Create an Account with:");
            const w = a.querySelector(".space-y-8 form > span");
            w && y && ((u = y.parentElement) == null || u.insertAdjacentElement(
              "afterend",
              w
            ));
          }
        });
      } catch (r) {
        if (r instanceof Error && r.message.includes("cancelled"))
          return;
        console.error("Error waiting for modal:", r);
      } finally {
        setTimeout(() => {
          document.body.classList.remove("crs-modal-open-waiting");
        }, 100);
      }
    }
    getProductData(e = "PDP", t = document) {
      var s, n, i;
      if (e === "PDP") {
        const o = this.getPdpTitle(), r = this.getPdpImageSrc(), l = document.querySelector('nav[aria-label="Breadcrumb"]');
        let a = !!t.querySelector(".ring-1 .fa-bolt"), m = !!t.querySelector(
          ".ring-1 .fa-shield-halved"
        );
        return l && ((s = l.textContent) != null && s.includes("Game Keys")) && (m = !0, a = !0), { title: o, imageSrc: r, isInstantDelivery: a, isWarrantyAvailable: m };
      }
      if (e === "PLP") {
        const o = t.querySelector(
          ".text-sm.text-foreground\\/80.line-clamp-2.h-\\[40px\\]"
        ), r = t.querySelector(
          'img[src*="https://gameboost.com/cdn-cgi/image"]'
        ), l = !!t.querySelector(".fa-bolt");
        return {
          title: o && o.textContent || "",
          imageSrc: r ? r.src : "",
          isInstantDelivery: l,
          isWarrantyAvailable: l
        };
      }
      if (e === "MODAL") {
        const o = t.querySelector(
          ".text-lg.font-semibold.font-display"
        ), r = t.querySelector(
          'img[src*="steamcommunity"]'
        ), l = (i = (n = t.querySelector(
          'img[src*="steamcommunity"]'
        )) == null ? void 0 : n.parentElement) == null ? void 0 : i.className, a = (() => {
          if (!l) return "";
          const m = l.split(/\s+/), f = m.findIndex((h) => h === "bg-gradient");
          if (f === -1) return "";
          const C = [m[f]];
          return f + 1 < m.length && C.push(m[f + 1]), C.join(" ");
        })();
        return {
          title: o && o.innerHTML || "",
          imageSrc: r ? r.src : "",
          backgroundClasses: a
        };
      }
    }
    getSellerData() {
      var w, L, T, P, A, M, _;
      const e = document.querySelector(
        '.bg-card:has(a[href*="seller"])'
      ), t = e == null ? void 0 : e.querySelector('img[src*="avatar"]'), s = e == null ? void 0 : e.querySelector(
        'a[href*="seller"] .text-sm.font-medium.truncate.text-foreground'
      ), n = e == null ? void 0 : e.querySelector(
        ".text-xs.truncate.text-muted-foreground"
      ), i = ((w = n == null ? void 0 : n.textContent) == null ? void 0 : w.trim()) || "", o = e == null ? void 0 : e.querySelector(
        ".bg-success-light.ring-success-ring"
      ), r = !!o, l = ((L = o == null ? void 0 : o.textContent) == null ? void 0 : L.trim().replace(/\s+/g, " ")) || "", a = !!(s != null && s.querySelector(".fa-badge-check")), m = (T = e == null ? void 0 : e.querySelector(".fa-thumbs-up")) == null ? void 0 : T.parentElement, C = (((P = m == null ? void 0 : m.textContent) == null ? void 0 : P.trim()) || "").match(/([\d.]+)%/), h = C ? parseFloat(C[1]) : 0, p = Array.from(
        (e == null ? void 0 : e.querySelectorAll(".text-muted-foreground")) || []
      ).find((S) => {
        var v;
        return (v = S.textContent) == null ? void 0 : v.includes("Reviews");
      }), q = ((A = p == null ? void 0 : p.textContent) == null ? void 0 : A.trim()) || "", d = q.match(/([\d,]+)\s+Reviews/), b = d ? d[1].replace(/,/g, "") : "0", u = Array.from(
        (e == null ? void 0 : e.querySelectorAll("dd")) || []
      ).find((S) => {
        var v;
        return (v = S.textContent) == null ? void 0 : v.includes("Sold");
      }), c = (((M = u == null ? void 0 : u.textContent) == null ? void 0 : M.trim()) || "").match(/([\d,]+)\s+Sold/), y = c ? c[1].replace(/,/g, "") : "0";
      return {
        avatarSrc: t ? t.src : "",
        sellerName: s && ((_ = s.textContent) == null ? void 0 : _.replace(/\s*\u{f058}\s*$/u, "").trim()) || "",
        sellerTier: i,
        isOnline: r,
        statusText: l,
        isVerified: a,
        rating: h,
        reviewCount: b,
        reviewText: q,
        totalSales: y
      };
    }
    getPdpTitle() {
      const e = document.querySelector("h1");
      return e && e.textContent || "";
    }
    getPdpImageSrc() {
      var s;
      const e = document.querySelector(
        '[aria-roledescription="carousel"]:not(:has(a))'
      ), t = ((s = document.querySelector("h1")) == null ? void 0 : s.textContent) || "";
      if (e) {
        const n = e.querySelector("img");
        if (n)
          return n.src;
      }
      if (location.href.match(j.regexpLinks.items)) {
        const n = document.head.querySelector(
          'meta[property="og:image"]'
        );
        if (n)
          return n.content;
      }
      if (document.querySelector('img[alt="' + t + '"]')) {
        const n = document.querySelector(
          'img[alt="' + t + '"]'
        );
        if (n)
          return n.src;
      }
      return null;
    }
  }
  $({ name: "Іmproved registration / account creation flow v2", dev: "OS" }), B("exp_login_modal");
  class U {
    constructor() {
      this.eventsAborder = new AbortController(), this.popupChanges = new I(), this.init();
    }
    init() {
      this.checkUserLoggedIn().then((e) => {
        e || (this.initChanges(), this.observePageChanges());
      });
    }
    async checkUserLoggedIn() {
      var e, t;
      return await O("nav button"), !((t = (e = document.querySelector("nav button:has(.fa-arrow-right)")) == null ? void 0 : e.textContent) != null && t.includes("Log in"));
    }
    async initChanges() {
      var e;
      (e = this.eventsAborder) == null || e.abort(), this.eventsAborder = new AbortController(), !location.href.includes("checkout") && (this.addStyles(), document.addEventListener(
        "click",
        (t) => {
          var i, o, r, l;
          const s = t.target;
          if (s.closest("nav")) return;
          const n = s.closest("button:not(.crs-close-mobile)");
          if (n && (n.querySelector(".fa-cart-shopping-fast") || (i = n == null ? void 0 : n.textContent) != null && i.includes("Buy") && !n.closest("a") && !n.closest('[data-state="open"]') || (o = n.parentElement) != null && o.classList.contains("fixed") && !n.querySelector(".fa-messages")) && (document.body.classList.add("crs-modal-open-waiting"), new I().init({ type: "buy", location: "PDP" })), n && n.classList.contains("text-foreground") && n.closest("[data-crs-modal-type]")) {
            const a = n.closest("[data-crs-modal-type]"), m = a.dataset.bg || "", f = a.dataset.productTitle;
            document.body.classList.add("crs-modal-open-waiting"), this.popupChanges.init({
              type: n.closest("[data-crs-modal-type]").dataset.crsModalType,
              location: "PDP",
              context: document,
              skipAnimation: !1,
              // Skip animation when switching between login/signup
              initialData: {
                title: f,
                imageSrc: m
              },
              preventAutoClickSignup: !0
            });
          }
          if ((n && n.querySelector(".fa-message") || n != null && n.querySelector(".fa-messages") && n.closest(".fixed")) && (document.body.classList.add("crs-modal-open-waiting"), this.popupChanges.init({ type: "message" })), n && n.querySelector(".fa-arrow-right") && n.closest("a")) {
            const a = n.closest("a");
            a && (document.body.classList.add("crs-modal-open-waiting"), this.popupChanges.init({
              type: "buy",
              location: "PLP",
              context: a
            }));
          }
          if (n && ((l = (r = n.textContent) == null ? void 0 : r.toLowerCase()) != null && l.includes("buy")) && n.closest('[data-state="open"]')) {
            const a = n.closest('[data-state="open"]');
            document.body.classList.add("crs-modal-open-waiting"), this.popupChanges.init({
              type: "buy",
              location: "MODAL",
              context: a
            });
          }
        },
        {
          signal: this.eventsAborder.signal
        }
      ));
    }
    observePageChanges() {
      var t;
      (t = this.pageObserver) == null || t.disconnect();
      let e = location.href;
      this.pageObserver = new MutationObserver(() => {
        if (location.href !== e) {
          e = location.href;
          const s = document.getElementById("crs-styles");
          s && s.remove(), this.initChanges();
        }
      }), this.pageObserver.observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.id = "crs-styles", e.textContent = R, document.head.appendChild(e);
    }
  }
  new U();
})();
