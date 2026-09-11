(function(){var e=(e,t,n,r=``)=>{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:`event-to-ga4`,event_name:e,event_desc:t,event_type:n,event_loc:r}),`${e}${t}${n}${r}`},t=({name:e,dev:t})=>{},n=e=>{let t=setInterval(function(){typeof window.clarity==`function`&&(clearInterval(t),window.clarity(`set`,e,`variant_1`))},1e3)},r=(t,n,r,i,a=1e3,o=.5)=>{let s,c;if(s=new IntersectionObserver(function(t){t[0].isIntersecting===!0?c=setTimeout(()=>{e(n,t[0].target.dataset.visible||i||``,`view`,r),s.disconnect()},a):clearTimeout(c)},{threshold:[o]}),typeof t==`string`){let e=document.querySelector(t);e&&s.observe(e)}else s.observe(t)},i=`@font-face {
  font-family: 'CrsHayabusaCnd';
  src: url('https://cdn.shopify.com/oxygen-v2/43188/37999/79895/4309125/fonts/HayabusaCndRegular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
  ascent-override: 82.5%;
  descent-override: 12.5%;
  line-gap-override: 0%;
}

@font-face {
  font-family: 'CrsHayabusaCnd';
  src: url('https://cdn.shopify.com/oxygen-v2/43188/37999/79895/4309125/fonts/HayabusaCndBold.woff2') format('woff2');
  font-weight: 600;
  font-display: swap;
  ascent-override: 82.5%;
  descent-override: 12.5%;
  line-gap-override: 0%;
}

@font-face {
  font-family: 'CrsHayabusaCnd';
  src: url('https://cdn.shopify.com/oxygen-v2/43188/37999/79895/4309125/fonts/HayabusaCndBlack.woff2') format('woff2');
  font-weight: 800;
  font-display: swap;
  ascent-override: 82.5%;
  descent-override: 12.5%;
  line-gap-override: 0%;
}

.crs-aside,
.crs-header,
.crs-quiz-tile,
.crs-ships,
.crs-rating-text,
.crs-badge,
.crs-drawer,
.crs-mchips {
  display: none;
}

body.crs-plp-on {
  --crs-border: #e9e9e9;
  --crs-muted: rgba(0, 0, 0, 0.4);
  --crs-green: #008236;
  --crs-red: rgba(212, 0, 0, 0.7);
  --crs-cond: 'Roboto Condensed', ui-sans-serif, system-ui, sans-serif;
  --crs-haya: CrsHayabusaCnd, HayabusaCnd, ui-sans-serif, system-ui, sans-serif;
}

body.crs-plp-on .crs-h1-block {
  display: none !important;
}

body.crs-plp-on .cfv-content>div:has(> .cfv-chip) {
  display: none !important;
}

body.crs-plp-on .crs-header {
  display: block;
}

body.crs-plp-on .crs-h1 {
  text-align: left;
}

body.crs-plp-on .crs-chips-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}

body.crs-plp-on .crs-chip {
  display: inline-flex;
  align-items: center;
  height: 34px;
  padding: 0 16px;
  border: 1px solid #e9e9e9;
  border-radius: 999px;
  background: #fff;
  font-family: var(--crs-cond);
  font-size: 12.5px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
  transition: border-color 0.15s, background 0.15s, color 0.15s;
}

body.crs-plp-on .crs-chip:hover {
  border-color: #000;
}

body.crs-plp-on .crs-chip-active {
  background: #000;
  border-color: #000;
  color: #fff;
}

body.crs-plp-on .crs-hide {
  display: none !important;
}

body.crs-plp-on .crs-card-info {
  display: flex;
  flex-direction: column;
}

body.crs-plp-on .crs-title-link {
  order: 1;
}

body.crs-plp-on .crs-rating-row {
  position: static !important;
  order: 2;
  display: flex !important;
  align-items: center;
  gap: 4px;
  margin: 8px 0 0;
  height: auto;
}

body.crs-plp-on .crs-rating-row .okendo-summary-stars svg {
  width: 15px;
  height: 15px;
}

body.crs-plp-on .crs-rating-row .okendo-summary-count {
  display: none;
}

body.crs-plp-on .crs-rating-row .text-review-star,
body.crs-plp-on .crs-rating-row .okendo-summary-stars {
  color: #000;
}

body.crs-plp-on .crs-rating-text {
  display: inline;
  font-family: var(--crs-haya);
  font-size: 14px;
  letter-spacing: 0.3px;
  color: #000;
  font-variant-numeric: tabular-nums;
  line-height: 14px;
}

body.crs-plp-on .crs-title-link h4 {
  color: #1a1a1a;
}

body.crs-plp-on .crs-price-row {
  order: 3;
}

body.crs-plp-on .crs-card-info .okendo-rating-card-mobile {
  display: none;
}

body.crs-plp-on .crs-ships {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  position: absolute;
  right: 0;
  height: 20px;
  font-family: var(--crs-cond);
  font-size: 13px;
  font-weight: 500;
  color: var(--crs-green);
  line-height: 1;
}

body.crs-plp-on .crs-ships::before {
  content: '';
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -960 960 960' fill='%23008236'><path d='M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120Z'/></svg>") no-repeat center / contain;
}

body.crs-plp-on .crs-badge-row {
  display: none !important;
}

body.crs-plp-on .crs-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 5;
  display: inline-block;
  padding: 5px 8px;
  background: #000;
  border-radius: 2px;
  color: #fff;
  font-family: var(--crs-cond);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 1;
}

body.crs-plp-on .crs-badge--bestseller {
  background: #f59d11;
  color: #000;
}

body.crs-plp-on .crs-badge--sale {
  background: #c8102e;
}

body.crs-plp-on .crs-quiz-tile {
  position: relative;
  display: flex;
  flex-direction: column;
  /* both cards are laid out in cqw against their artboard — 329 px wide on
     desktop (Figma 1591:1703), 166 px on mobile (Figma 1602:2924) */
  container-type: inline-size;
}

body.crs-plp-on .crs-quiz-scale {
  position: absolute;
  display: flex;
  align-items: stretch;
}

body.crs-plp-on .crs-quiz-oz {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  font-family: var(--crs-cond);
  font-weight: 500;
  line-height: 1.5;
}

body.crs-plp-on .crs-quiz-gloves {
  position: absolute;
  display: block;
}

body.crs-plp-on .crs-quiz-gloves img {
  display: block;
  width: 100%;
  height: auto;
}

/* the quiz tile adds a slot, so the promo it pushes down gives one back — matched
   as the second of two adjacent promos, which only our reorder ever produces */
body.crs-plp-on .merch-card+.merch-card {
  display: none !important;
}

body.crs-plp-on .crs-quiz-overline {
  display: block;
  font-family: var(--crs-cond);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: #6f6f6f;
  margin-bottom: 11px;
}

body.crs-plp-on .crs-quiz-title {
  font-family: var(--crs-haya);
  font-weight: 900;
  letter-spacing: 0.54px;
  line-height: 28px;
  text-transform: uppercase;
  color: #1a1a1a;
  margin-bottom: 13px;
}

body.crs-plp-on .crs-quiz-text {
  font-family: var(--crs-cond);
  font-weight: 500;
  line-height: 20px;
  color: #6f6f6f;
  margin-bottom: 20px;
}

body.crs-plp-on .crs-quiz-cta {
  display: block;
  width: 100%;
  height: 36px;
  line-height: 36px;
  padding: 0;
  background: #000;
  color: #fff;
  font-family: var(--crs-cond);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
}

/* the CTA is stretched over the whole tile — one anchor, so the card keeps a
   single link, a single target and a single quiz-start event */
body.crs-plp-on .crs-quiz-cta::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
}

body.crs-plp-on .crs-quiz-cta:hover {
  opacity: 0.85;
}

body.crs-plp-on .crs-group {
  padding: 14px 0;
  border-bottom: 1px solid var(--crs-border);
}

body.crs-plp-on .crs-group-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 0;
  background: none;
  padding: 0;
  cursor: pointer;
}

body.crs-plp-on .crs-group-title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--crs-haya);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: #1a1a1a;
  text-transform: uppercase;
}

body.crs-plp-on .crs-chevron {
  display: inline-block;
  width: 14px;
  height: 14px;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2'><path d='M6 9l6 6 6-6'/></svg>") no-repeat center / contain;
  opacity: 0.6;
  transition: transform 0.2s;
}

body.crs-plp-on .crs-collapsed .crs-chevron {
  transform: rotate(-90deg);
}

body.crs-plp-on .crs-group-body {
  margin-top: 12px;
}

body.crs-plp-on .crs-collapsed .crs-group-body {
  display: none;
}

body.crs-plp-on .crs-opt {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 0;
  font-family: var(--crs-cond);
  font-size: 13px;
  cursor: pointer;
  user-select: none;
}

body.crs-plp-on .crs-opt-check {
  appearance: none;
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  display: inline-block;
  position: relative;
}

body.crs-plp-on .crs-opt-check:checked {
  background: #000 url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3.5'><path d='M5 12.5l5 5L19 7'/></svg>") no-repeat center / 13px;
  border-color: #000;
}

body.crs-plp-on .crs-opt-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.3;
}

body.crs-plp-on .crs-opt-count {
  font-size: 13px;
  font-weight: 500;
  color: var(--crs-muted);
  font-variant-numeric: tabular-nums;
}

body.crs-plp-on .crs-opt-empty {
  opacity: 0.4;
}

body.crs-plp-on .crs-chips-body {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

body.crs-plp-on .crs-size {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 40px;
  padding: 0 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background: #fff;
  font-family: var(--crs-cond);
  font-size: 13px;
  line-height: 1;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s, color 0.15s;
}

body.crs-plp-on .crs-size b {
  font-weight: 600;
}

body.crs-plp-on .crs-size-count {
  font-size: 12px;
  font-weight: 500;
  color: var(--crs-muted);
  font-variant-numeric: tabular-nums;
}

body.crs-plp-on .crs-size:hover {
  border-color: #000;
}

body.crs-plp-on .crs-size-active {
  background: #000;
  border-color: #000;
  color: #fff;
}

body.crs-plp-on .crs-size-active .crs-size-count {
  color: rgba(255, 255, 255, 0.6);
}

body.crs-plp-on .crs-active-chips {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

body.crs-plp-on .crs-active-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.04);
  font-family: var(--crs-cond);
  font-size: 12px;
  font-weight: 600;
  color: #000;
  line-height: 1;
  cursor: pointer;
}

body.crs-plp-on .crs-active-chip:hover {
  border-color: rgba(0, 0, 0, 0.4);
}

body.crs-plp-on .crs-active-chip-x {
  display: inline-block;
  width: 7px;
  height: 7px;
  font-size: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.5'><path d='M4 4l16 16M20 4L4 20'/></svg>") no-repeat center / contain;
}

body.crs-plp-on .crs-info {
  position: relative;
  display: inline-block;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none'><rect width='13' height='13' x='.5' y='.5' stroke='%23b9b9b9' rx='6.5'/><path fill='%23000' fill-opacity='.4' d='M6.526 4.002h1.242v1.062H6.526zm0 1.656h1.242V10.5H6.526z'/></svg>")
    no-repeat center / contain;
  cursor: help;
}

body.crs-plp-on .crs-tip {
  position: absolute;
  left: calc(-8px + var(--crs-tip-shift, 0px));
  bottom: calc(100% + 8px);
  box-sizing: border-box;
  width: 193px;
  padding: 12px;
  border-radius: 4px;
  background: #0a0a0a;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  font-family: var(--crs-cond);
  line-height: 1.35;
  text-align: left;
  text-transform: none;
  letter-spacing: 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.15s;
  z-index: 50;
  pointer-events: none;
  cursor: default;
}

body.crs-plp-on .crs-info::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: calc(100% + 2px);
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 6px solid #0a0a0a;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.15s;
  z-index: 50;
  pointer-events: none;
}

body.crs-plp-on .crs-info:hover .crs-tip,
body.crs-plp-on .crs-info:hover::before,
body.crs-plp-on .crs-info-open .crs-tip,
body.crs-plp-on .crs-info-open::before {
  opacity: 1;
  visibility: visible;
}

body.crs-plp-on .crs-info-open .crs-tip {
  pointer-events: auto;
}

body.crs-plp-on .crs-tip-x {
  display: none;
  position: absolute;
  top: 12px;
  right: 10px;
  width: 8px;
  height: 8px;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='8' height='8' fill='none'><path stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' d='m7.5.5-7 7M.5.5l7 7'/></svg>")
    no-repeat center / contain;
  cursor: pointer;
}

body.crs-plp-on .crs-tip-x::after {
  content: '';
  position: absolute;
  inset: -10px;
}

@media (min-width: 1024px) {
   body.crs-plp-on .cfv-aside {
    padding-left: 0;
   }

  body.crs-plp-on .cfv-aside> :not(.crs-aside) {
    display: none !important;
  }

  body.crs-plp-on .cfv-content>div:has(.cfv-sort-select) {
    display: none !important;
  }

  body.crs-plp-on .crs-header {
    margin: 32px 0 4px;
    &::after {
      content: '';
      display: block;
      transform: translateX(-4rem);
      width: calc(100% + 6rem);
      height: 1px;
      margin-block: 20px 24px;
      background: var(--crs-border);
    }
  }

  body.crs-plp-on .crs-h1 {
    font-size: 44px;
    font-weight: 700;
    line-height: 44px;
    color: #1a1a1a;
    margin-bottom: 12px;
  }

  body.crs-plp-on .crs-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 8px;
    min-height: 36px;
  }

  body.crs-plp-on .crs-toolbar-left {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    min-width: 0;
  }

  body.crs-plp-on .crs-results {
    font-family: var(--crs-cond);
    font-size: 16px;
    font-weight: 500;
    color: var(--crs-muted);
    white-space: nowrap;
    font-variant-numeric: tabular-nums;
  }

  body.crs-plp-on .crs-clear {
    border: 0;
    background: none;
    padding: 6px 2px;
    font-family: var(--crs-cond);
    font-size: 14px;
    font-weight: 500;
    color: var(--crs-red);
    text-decoration: underline;
    text-underline-offset: 3px;
    cursor: pointer;
  }

  body.crs-plp-on .crs-sort {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }

  body.crs-plp-on .crs-sort-label {
    font-family: var(--crs-haya);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #000;
  }

  body.crs-plp-on .crs-sort-select {
    appearance: none;
    height: 36px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    background: #fff url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='14' height='14' fill='none' stroke='black' stroke-width='2'><path d='M6 9l6 6 6-6'/></svg>") no-repeat right 10px center;
    padding: 0 32px 0 12px;
    font-family: var(--crs-cond);
    font-size: 13px;
    font-weight: 700;
    color: #1a1a1a;
    cursor: pointer;
    min-width: 116px;
  }

  body.crs-plp-on .crs-aside {
    display: block;
  }

  body.crs-plp-on .crs-card-info {
    margin-top: 19px;
  }

  body.crs-plp-on .crs-title-link {
    padding-right: 84px;
  }

  body.crs-plp-on .crs-ships {
    top: 0;
  }

  body.crs-plp-on .crs-price-row,
  body.crs-plp-on .crs-price-row p,
  body.crs-plp-on .crs-price-row span {
    font-family: var(--crs-cond);
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.35px;
  }

  /* Figma 1591:1703 — the 329 px artboard; cqw resolves against the tile, not the
     padded box, because a container query length uses the container's content box */
  body.crs-plp-on .crs-quiz-graphic {
    display: contents;
  }

  body.crs-plp-on .crs-quiz-inner {
    position: relative;
    overflow: hidden;
    padding: 7.6cqw;
    background: #f3f5f7;
  }

  /* below ~1200 px the three columns leave a card too narrow for the artboard —
     the copy would run into the ruler, so the plain tile takes over */
  @container (min-width: 260px) {
    body.crs-plp-on .crs-quiz-inner {
      aspect-ratio: 1;
    }

    /* the gaps scale with the card too — a fixed px rhythm pushes the copy
       into the shot on the narrower three-column widths */
    body.crs-plp-on .crs-quiz-overline {
      font-size: clamp(12px, 4.9cqw, 16px);
      line-height: 1;
      color: #000;
      margin-bottom: 3.34cqw;
    }

    body.crs-plp-on .crs-quiz-title {
      font-size: clamp(18px, 7.3cqw, 24px);
      line-height: 1.17;
      color: #000;
      margin-bottom: 2.43cqw;
    }

    body.crs-plp-on .crs-quiz-text {
      font-size: clamp(12px, 4.3cqw, 14px);
      font-weight: 400;
      line-height: 1.57;
      color: #000;
      margin-bottom: 0;
    }

    body.crs-plp-on .crs-quiz-scale {
      left: 7.6cqw;
      bottom: 3.8cqw;
      gap: 0.8cqw;
      height: 41cqw;
    }

    body.crs-plp-on .crs-quiz-ruler {
      width: 6.1cqw;
      background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 135' fill='%23212121'><rect y='0.0' width='9.26' height='1.45'/><rect y='5.99' width='13.68' height='1.45'/><rect y='12.16' width='9.26' height='1.45'/><rect y='18.15' width='11.16' height='1.27'/><rect y='24.13' width='9.26' height='1.45'/><rect y='29.94' width='20.0' height='2.18'/><rect y='36.65' width='9.26' height='1.27'/><rect y='42.46' width='11.16' height='1.45'/><rect y='48.63' width='9.26' height='1.45'/><rect y='54.62' width='13.68' height='1.45'/><rect y='60.6' width='9.26' height='1.45'/><rect y='66.77' width='11.16' height='1.45'/><rect y='72.76' width='9.26' height='1.27'/><rect y='78.57' width='20.0' height='2.18'/><rect y='85.1' width='9.26' height='1.45'/><rect y='91.09' width='11.16' height='1.45'/><rect y='97.08' width='9.26' height='1.45'/><rect y='103.25' width='13.68' height='1.27'/><rect y='109.23' width='9.26' height='1.45'/><rect y='115.22' width='11.16' height='1.45'/><rect y='121.39' width='9.26' height='1.27'/><rect y='127.02' width='20.0' height='2.18'/><rect y='133.55' width='9.26' height='1.45'/></svg>") no-repeat center / 100% 100%;
    }

    body.crs-plp-on .crs-quiz-oz {
      padding: 0.6cqw 0 2.4cqw;
      font-size: clamp(11px, 4.9cqw, 16px);
      color: #000;
    }

    /* the chip's padding is pulled back so the digits stay on the labels' left edge */
    body.crs-plp-on .crs-quiz-oz-on {
      margin-left: -4px;
      padding: 0 4px;
      border-radius: 4px;
      background: #f59d11;
    }

    body.crs-plp-on .crs-quiz-gloves {
      right: 8.8cqw;
      bottom: 2.9cqw;
      width: 59.9cqw;
    }
  }

  @container (max-width: 259.98px) {
    body.crs-plp-on .crs-quiz-inner {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      padding: 24px 20px;
    }

    body.crs-plp-on .crs-quiz-title {
      font-size: 20px;
    }

    body.crs-plp-on .crs-quiz-text {
      font-size: 13px;
    }

    body.crs-plp-on .crs-quiz-scale,
    body.crs-plp-on .crs-quiz-gloves {
      display: none;
    }
  }

  body.crs-plp-on .crs-quiz-cta {
    box-sizing: border-box;
    width: 84.2%;
    height: auto;
    margin: 22px auto 0;
    padding: 13px 8px;
    border: 1px solid #fff;
    background:
      linear-gradient(67.5deg, rgba(128, 128, 128, 0.5) 50%, rgba(128, 128, 128, 0) 50%),
      #000;
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0;
  }
}

@media (max-width: 1023px) {
  body.crs-plp-on .crs-header {
    margin: 24px 0 0;
  }

  body.crs-plp-on .crs-h1 {
    font-size: 24px;
    margin-bottom: 12px;
  }

  body.crs-plp-on .crs-header .crs-toolbar {
    display: none;
  }

  body.crs-plp-on .crs-chips-row {
    margin-left: -1rem;
    width: calc(100% + 2rem);
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 2px 1rem 10px;
    margin-bottom: 0;
    scrollbar-width: none;
  }

  body.crs-plp-on .crs-chips-row::-webkit-scrollbar {
    display: none;
  }

  body.crs-plp-on .crs-chip {
    flex-shrink: 0;
  }

  body.crs-plp-on .crs-chip-active {
    border-color: #000;
  }

  body.crs-plp-on .cfv-content>div:has(.cfv-sort-select) {
    flex-direction: row-reverse;
  }

  body.crs-plp-on .cfv-content>div:has(.cfv-sort-select) .tabular-nums {
    margin-left: 0;
    font-size: 0;
    color: rgba(0, 0, 0, 0.4);
  }

  body.crs-plp-on .cfv-content>div:has(.cfv-sort-select) .tabular-nums::after {
    content: attr(data-crs-results);
    font-size: 15px;
  }

  body.crs-plp-on .cfv-content>div:has(.cfv-sort-select) select.cfv-sort-select {
    display: none;
  }

  body.crs-plp-on .cfv-content>div:has(.cfv-sort-select) button[aria-controls='cfv-mobile-drawer'] {
    font-size: 0;
    letter-spacing: 0;
    gap: 0;
    height: auto;
    padding: 10px 14px;
    border: 1px solid #0a0a0a;
  }

  body.crs-plp-on .cfv-content>div:has(.cfv-sort-select) button[aria-controls='cfv-mobile-drawer'] svg {
    display: none;
  }

  body.crs-plp-on .cfv-content>div:has(.cfv-sort-select) button[aria-controls='cfv-mobile-drawer']::after {
    content: 'Filter & Sort';
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #1a1a1a;
    line-height: 1;
  }

  body.crs-plp-on .crs-tip {
    width: 254px;
    padding-right: 30px;
  }

  body.crs-plp-on .crs-tip-x {
    display: block;
  }

  body.crs-plp-on .crs-mchips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: -8px 0 14px;
  }

  body.crs-plp-on .crs-mchips:empty {
    display: none;
  }

  body.crs-plp-on .crs-active-chip {
    height: auto;
    padding: 9px 12px;
    font-size: 13px;
  }

  body.crs-plp-on .crs-card-info>div.md\\:hidden {
    order: 4;
    margin-top: 12px;
  }

  body.crs-plp-on .crs-card-info {
    padding-top: 8px;
  }

  body.crs-plp-on .crs-title-link h4 {
    min-height: 0;
  }

  body.crs-plp-on .crs-rating-row .okendo-summary-stars svg {
    width: 13px;
    height: 13px;
  }

  body.crs-plp-on .crs-rating-text {
    font-size: 13px;
  }

  body.crs-plp-on .crs-ships {
    bottom: 44px;
    font-size: 11px;
  }

  body.crs-plp-on .crs-ships::before {
    width: 15px;
    height: 15px;
  }

  body.crs-plp-on .crs-card-info button.w-full {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.3px;
  }

  /* Figma 1602:2924 — the dark card, artboard 166 px wide. Same markup as
     desktop: black ground, orange overline, white rule, and a glove shot that
     runs off the right edge, so the tile clips. */
  body.crs-plp-on .crs-quiz-tile {
    background: #000;
    overflow: hidden;
  }

  body.crs-plp-on .crs-quiz-inner {
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 14.9cqw 9.64cqw 0;
  }

  body.crs-plp-on .crs-quiz-graphic {
    position: relative;
    flex: none;
    height: 73.4cqw;
    margin: auto 0 15.66cqw;
  }

  body.crs-plp-on .crs-quiz-overline {
    font-size: clamp(9px, 6.02cqw, 12px);
    color: #f59d11;
    margin-bottom: 3.61cqw;
  }

  body.crs-plp-on .crs-quiz-title {
    font-size: clamp(15px, 10.84cqw, 20px);
    line-height: 1.3;
    color: #fff;
    margin-bottom: 1.2cqw;
  }

  body.crs-plp-on .crs-quiz-text {
    font-size: clamp(10px, 7.23cqw, 13px);
    font-weight: 400;
    line-height: 1.33;
    color: #fff;
    margin-bottom: 0;
  }

  body.crs-plp-on .crs-quiz-scale {
    left: -6.63cqw;
    bottom: 2.56cqw;
    gap: 1.42cqw;
    height: 63.81cqw;
  }

  body.crs-plp-on .crs-quiz-ruler {
    width: 12.76cqw;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 135' fill='%23ffffff'><rect y='0.0' width='9.26' height='1.45'/><rect y='5.99' width='13.68' height='1.45'/><rect y='12.16' width='9.26' height='1.45'/><rect y='18.15' width='11.16' height='1.27'/><rect y='24.13' width='9.26' height='1.45'/><rect y='29.94' width='20.0' height='2.18'/><rect y='36.65' width='9.26' height='1.27'/><rect y='42.46' width='11.16' height='1.45'/><rect y='48.63' width='9.26' height='1.45'/><rect y='54.62' width='13.68' height='1.45'/><rect y='60.6' width='9.26' height='1.45'/><rect y='66.77' width='11.16' height='1.45'/><rect y='72.76' width='9.26' height='1.27'/><rect y='78.57' width='20.0' height='2.18'/><rect y='85.1' width='9.26' height='1.45'/><rect y='91.09' width='11.16' height='1.45'/><rect y='97.08' width='9.26' height='1.45'/><rect y='103.25' width='13.68' height='1.27'/><rect y='109.23' width='9.26' height='1.45'/><rect y='115.22' width='11.16' height='1.45'/><rect y='121.39' width='9.26' height='1.27'/><rect y='127.02' width='20.0' height='2.18'/><rect y='133.55' width='9.26' height='1.45'/></svg>") no-repeat center / 100% 100%;
  }

  body.crs-plp-on .crs-quiz-oz {
    padding: 2.36cqw 0 0.48cqw;
    font-size: clamp(10px, 7.56cqw, 14px);
    color: #fff;
  }

  body.crs-plp-on .crs-quiz-oz-on {
    margin-left: -3px;
    padding: 0 3px;
    border-radius: 3px;
    background: #f59d11;
    color: #000;
  }

  body.crs-plp-on .crs-quiz-gloves {
    top: 0;
    left: 14.75cqw;
    width: 87.06cqw;
  }

  body.crs-plp-on .crs-quiz-cta {
    height: 42px;
    border-top: 6px solid #fff;
    background: #f59d11;
    color: #000;
    font-size: 14px;
    font-weight: 700;
  }

  body.crs-plp-on.crs-toolbar-stuck .cfv-content>div:has(.cfv-sort-select) {
    position: fixed;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 39;
    height: 46px;
    margin: 0;
    padding: 0;
    background: #0a0a0a;
    animation: crs-bar-in 0.25s ease;
  }

  body.crs-plp-on.crs-toolbar-stuck .cfv-content>div:has(.cfv-sort-select) .tabular-nums {
    display: none;
  }

  body.crs-plp-on.crs-toolbar-stuck .cfv-content>div:has(.cfv-sort-select)>div.flex.items-center {
    flex: 1;
    height: 100%;
  }

  body.crs-plp-on.crs-toolbar-stuck .cfv-content>div:has(.cfv-sort-select) button[aria-controls='cfv-mobile-drawer'] {
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    justify-content: center;
  }

  body.crs-plp-on.crs-toolbar-stuck .cfv-content>div:has(.cfv-sort-select) button[aria-controls='cfv-mobile-drawer']::after {
    color: #fff;
    font-size: 13px;
    letter-spacing: 1.56px;
  }

  @keyframes crs-bar-in {
    from {
      transform: translateY(100%);
    }

    to {
      transform: translateY(0);
    }
  }

  body.crs-plp-on main~section {
    margin-bottom: 46px;
  }

  body.crs-plp-on.crs-drawer-open {
    overflow: hidden;
  }

  body.crs-plp-on .crs-drawer {
    position: fixed;
    inset: 0;
    z-index: 80;
    background: #fff;
    flex-direction: column;
  }

  body.crs-plp-on.crs-drawer-open .crs-drawer {
    display: flex;
    animation: crs-drawer-in 0.25s ease;
  }

  @keyframes crs-drawer-in {
    from {
      transform: translateY(6%);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  body.crs-plp-on .crs-drawer-head {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 57px;
    padding: 0 20px;
    border-bottom: 1px solid var(--crs-border);
  }

  body.crs-plp-on .crs-drawer-title {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  body.crs-plp-on .crs-drawer-x {
    border: 0;
    background: none;
    width: 28px;
    padding: 0 0 3px;
    font-size: 26px;
    line-height: 1;
    cursor: pointer;
  }

  body.crs-plp-on .crs-drawer-body {
    flex: 1;
    min-height: 0;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 24px;
  }

  body.crs-plp-on .crs-drawer-foot {
    flex-shrink: 0;
    display: flex;
    gap: 8px;
    padding: 9px 20px;
    border-top: 1px solid var(--crs-border);
    background: #fff;
  }

  body.crs-plp-on .crs-drawer-clear {
    flex-shrink: 0;
    height: 44px;
    padding: 0 15px;
    background: #fff;
    border: 1px solid #0a0a0a;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
  }

  body.crs-plp-on .crs-drawer-show {
    flex: 1;
    height: 44px;
    border: 0;
    background: #0a0a0a;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
  }

  body.crs-plp-on .crs-drawer-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 14px 20px;
    border-bottom: 1px solid var(--crs-border);
  }

  body.crs-plp-on .crs-drawer-chips:empty {
    display: none;
  }

  body.crs-plp-on .crs-drawer .crs-active-chip {
    background: #fff;
    border-color: rgba(0, 0, 0, 0.35);
    padding: 9px 12px;
    font-size: 13px;
  }

  body.crs-plp-on .crs-drawer-sort {
    display: flex;
    flex-direction: column;
    padding: 16px 20px 18px;
    border-bottom: 1px solid var(--crs-border);
  }

  body.crs-plp-on .crs-drawer-sort-title {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  body.crs-plp-on .crs-radio {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 0;
    font-size: 13px;
    cursor: pointer;
    user-select: none;
  }

  body.crs-plp-on .crs-radio-input {
    appearance: none;
    width: 22px;
    height: 22px;
    margin: 0;
    flex-shrink: 0;
    border: 1.5px solid rgba(0, 0, 0, 0.45);
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }

  body.crs-plp-on .crs-radio-input:checked {
    border-color: #000;
    background: radial-gradient(circle, #000 0 40%, transparent 46%);
  }

  body.crs-plp-on .crs-drawer .crs-group {
    padding: 16px 20px;
    border-bottom: 1px solid var(--crs-border);
  }
}`,a=`/collections/boxing-gloves`,o=`/pages/glove-guide-quiz`,s=e=>/youth|kids/i.test(e.title),c=e=>/^pro\b|t3d/i.test(e.title),l=e=>!c(e)&&(/\bs4\b|\be1\b|contender/i.test(e.title)||s(e)),u=[`beginner`],ee=[`intermediate`],d=[`beginner`,`intermediate`],f=[`intermediate`,`advanced`],te={"hayabusa-batroc-boxing-gloves":f,"hayabusa-black-widow-boxing-gloves":f,"hayabusa-captain-america-sam-wilson-boxing-gloves":f,"hayabusa-daredevil-boxing-gloves":f,"hayabusa-deadpool-boxing-gloves":f,"hayabusa-e1-boxing-gloves":d,"hayabusa-e1-kids-boxing-gloves":d,"hayabusa-e1-leather-boxing-gloves":d,"hayabusa-hulk-boxing-gloves":f,"hayabusa-miles-morales-boxing-gloves":f,"hayabusa-s4-lace-up-boxing-gloves":ee,"hayabusa-s4-leather-boxing-gloves":u,"hayabusa-s4-youth-epic-boxing-gloves":u,"hayabusa-t3-lace-up-boxing-gloves":f,"hayabusa-t3-lx-boxing-gloves":f,"hayabusa-t3-neon-boxing-gloves":f,"hayabusa-t360-boxing-gloves":f,"hayabusa-t360-leather-boxing-gloves":f,"hayabusa-t3d-boxing-gloves":f,"hayabusa-thanos-boxing-gloves":f,"hayabusa-thor-boxing-gloves":f,"hayabusa-wolverine-boxing-gloves":f,"marvel-black-panther-boxing-gloves":f,"marvel-captain-america-boxing-gloves":f,"marvel-captain-marvel-boxing-gloves":f,"marvel-iron-man-boxing-gloves":f,"marvel-the-punisher-boxing-gloves":f,"marvel-venom-boxing-gloves":f,"mayweather-champ-boxing-gloves":f,"mayweather-contender-boxing-gloves":d,"s4-boxing-gloves":u,"s4-youth-boxing-gloves":u,"t3-boxing-gloves":f,"t3-kanpeki-boxing-gloves":f},p=(e,t)=>{let n=te[e.handle];return n?n.includes(t):t===`advanced`?c(e):t===`beginner`?l(e):!c(e)&&!l(e)},m=e=>[{group:`Glove Use`,option:e}],ne=e=>({group:`Glove Surface Material`,option:e}),h=[{title:`Training Type`,tip:`What you'll do in these gloves most days. Mixing bag, pads and classes? Choose All-Purpose.`,options:[{label:`All-Purpose Training`,tip:`One glove for everything — heavy bag, pads, mitts and class work. The right first pair for most people.`,native:m(`All-Purpose Training`)},{label:`Bag Work`,tip:`Firmer, denser padding built to take heavy bag impact round after round. Not for hitting a partner.`,native:m(`Bag Work`)},{label:`Sparring`,tip:`Softer, thicker padding — usually 16 oz — that protects your hands and your training partner.`,native:m(`Sparring`)},{label:`Competition`,tip:`Lighter, fight-approved construction built to ring rules. For competing, not daily training.`,native:m(`Competition`)}]},{title:`Glove Weight`,tip:`Ounces measure padding, not hand size — more ounces, more protection. Common picks: 12 oz bag work · 14 oz all-purpose · 16 oz sparring standard. Kids: 6–10 oz.`,chips:!0,dynamicNative:{group:`Glove Weight`,pattern:/oz$/i},options:[]},{title:`Experience Level`,tip:`Pick where you are today. Each level matches glove firmness, feedback and construction — it's about fit for your training, not a skill test.`,options:[{label:`Beginner`,tip:`New or coming back to training. Forgiving fit, softer impact feel, easy on-off closures.`,match:e=>p(e,`beginner`)},{label:`Intermediate`,tip:`Training regularly, starting to spar. Balanced padding with more feedback on every punch.`,match:e=>p(e,`intermediate`)},{label:`Advanced`,tip:`Years in the gym or competing. Pro-level construction, premium materials, firmer feedback.`,match:e=>p(e,`advanced`)}]},{title:`Price`,options:[{label:`Under $100`,match:e=>e.price<100},{label:`$100 – $200`,match:e=>e.price>=100&&e.price<200},{label:`$200+`,match:e=>e.price>=200}]},{title:`Closure`,tip:`How the glove tightens around your wrist — this decides wrist support and whether you can glove up without help.`,collapsed:!0,options:[{label:`Dual-X`,tip:`Hayabusa's double-strap closure — wraps the wrist from both sides for lace-like support you can put on yourself.`,native:[{group:`Glove Closure`,option:`Dual-X`}]},{label:`Hook & Loop`,tip:`Velcro strap — on and off in seconds. Ideal for classes and training on your own.`,native:[{group:`Glove Closure`,option:`Hook and loop`}]},{label:`Lace-Up`,tip:`The tightest, most locked-in fit, but you'll need a partner to tie them. The choice for sparring and fight night.`,native:[{group:`Glove Closure`,option:`Lace`}]}]},{title:`Age Group`,collapsed:!0,options:[{label:`Adult`,match:e=>!s(e)},{label:`Kids & Youth`,tip:`Built for smaller hands — 6 to 10 oz. Match size to your child's age and weight with the size guide.`,match:s}]},{title:`Discipline`,collapsed:!0,options:[{label:`Boxing`,native:[{group:`Discipline`,option:`Boxing`}]},{label:`Kickboxing`,native:[{group:`Discipline`,option:`Kickboxing`}]},{label:`Muay Thai`,native:[{group:`Discipline`,option:`Muay Thai`}]},{label:`MMA`,native:[{group:`Discipline`,option:`MMA`}]}]},{title:`Material`,collapsed:!0,options:[{label:`Vylar Engineered Leather`,tip:`Hayabusa's engineered leather — outlasts traditional leather under heavy use, and it's animal-free.`,native:[ne(`Vylar`)]},{label:`Genuine Leather`,tip:`Full- and top-grain natural leather — premium feel that softens and molds to your hand over time.`,native:[`Top Grain Leather`,`Microfiber Leather`,`Full Grain Leather`,`Genuine Leather`].map(ne)}]},{title:`Collection`,collapsed:!0,options:[{label:`T3 Series`,match:e=>/\bt3\b/i.test(e.title)&&!/t3d/i.test(e.title)},{label:`S4 Series`,match:e=>/\bs4\b/i.test(e.title)},{label:`T360`,match:e=>/t360/i.test(e.title)},{label:`E1`,match:e=>/\be1\b/i.test(e.title)},{label:`PRO Series`,match:e=>/^pro\b/i.test(e.title)},{label:`T3D`,match:e=>/t3d/i.test(e.title)},{label:`Marvel`,match:e=>/marvel/i.test(e.title)},{label:`Mayweather`,match:e=>/mayweather/i.test(e.title)}]},{title:`Padding Profile`,collapsed:!0,options:[{label:`Balanced`,native:[{group:`Glove Padding Profile`,option:`Balanced`}]},{label:`Soft Impact`,native:[{group:`Glove Padding Profile`,option:`Soft Impact`}]},{label:`Precision`,native:[{group:`Glove Padding Profile`,option:`Precision`}]}]},{title:`Color`,collapsed:!0,dynamicNative:{group:`Color`,pattern:/./},options:[]},{title:`Quick`,hidden:!0,options:[{label:`Bestsellers`,match:e=>e.bestseller}]}],re=[{label:`Bestsellers`,group:`Quick`,option:`Bestsellers`},{label:`Sparring-Ready`,group:`Training Type`,option:`Sparring`},{label:`Bag Work`,group:`Training Type`,option:`Bag Work`},{label:`Best for Beginners`,group:`Experience Level`,option:`Beginner`},{label:`Kids & Youth`,group:`Age Group`,option:`Kids & Youth`},{label:`Premium Leather`,group:`Material`,option:`Genuine Leather`}],ie=[{value:`featured`,label:`Featured`},{value:`price-low-high`,label:`Price: Low to High`},{value:`price-high-low`,label:`Price: High to Low`},{value:`newest`,label:`Newest`}],ae=`data:image/webp;base64,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`,oe=`data:image/webp;base64,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`;function g(e,t){if(!(t==null||typeof t==`boolean`)){if(Array.isArray(t)){for(let n of t)g(e,n);return}e.appendChild(t instanceof Node?t:document.createTextNode(String(t)))}}function _(e,t,n){if(typeof e==`function`)return e(t??{});let{children:r,...i}=t??{},a=document.createElement(e);for(let[e,t]of Object.entries(i))e.startsWith(`on`)&&typeof t==`function`?a.addEventListener(e.slice(2).toLowerCase(),t):t===!0?a.setAttribute(e,``):t!==!1&&t!=null&&a.setAttribute(e,String(t));return g(a,r),a}var v=_,se=`Filters Panel`,ce=new Set,le=(t,n)=>{let r=se,i=`${r}|${n}`;ce.has(i)||(ce.add(i),e(`exp_plp_tooltip`,n,`view`,r))},y,b=(e,t)=>_(`span`,{class:`crs-info`,onMouseEnter:e=>{if(!matchMedia(`(hover: hover) and (pointer: fine)`).matches)return;let n=e.currentTarget;y=setTimeout(()=>le(n,t),400)},onMouseLeave:()=>clearTimeout(y),onClick:e=>{e.preventDefault(),e.stopPropagation();let n=e.currentTarget;if(document.querySelectorAll(`.crs-info-open`).forEach(e=>e!==n&&e.classList.remove(`crs-info-open`)),n.classList.toggle(`crs-info-open`),n.classList.contains(`crs-info-open`)){le(n,t);let e=innerWidth<1024?254:193,r=n.getBoundingClientRect().left-8+e-(innerWidth-16);n.style.setProperty(`--crs-tip-shift`,r>0?`${-r}px`:`0px`)}},children:v(`span`,{class:`crs-tip`,children:[e,_(`span`,{class:`crs-tip-x`,onClick:e=>{e.preventDefault(),e.stopPropagation(),e.currentTarget.closest(`.crs-info`)?.classList.remove(`crs-info-open`)}})]})}),ue=()=>_(`span`,{class:`crs-chevron`}),de=(e,t,n)=>v(`label`,{class:`crs-opt`,"data-group":e.title,"data-option":t.label,children:[_(`input`,{type:`checkbox`,class:`crs-opt-check`,onChange:()=>n(e.title,t.label)}),v(`span`,{class:`crs-opt-label`,children:[t.label,t.tip?b(t.tip,t.label):null]}),_(`span`,{class:`crs-opt-count`})]}),fe=(e,t,n)=>v(`button`,{type:`button`,class:`crs-size`,"data-group":e.title,"data-option":t.label,onClick:()=>n(e.title,t.label),children:[_(`b`,{children:t.label}),_(`span`,{class:`crs-size-count`})]}),x=(t,n)=>v(`div`,{class:`crs-group`+(t.collapsed?` crs-collapsed`:``),"data-group":t.title,children:[v(`button`,{type:`button`,class:`crs-group-head`,onClick:n=>{n.currentTarget.closest(`.crs-group`).classList.toggle(`crs-collapsed`),e(`exp_plp_group_toggle`,t.title,`click`,se)},children:[v(`span`,{class:`crs-group-title`,children:[t.title,t.tip?b(t.tip,t.title):null]}),ue()]}),_(`div`,{class:`crs-group-body`+(t.chips?` crs-chips-body`:``),children:t.options.map(e=>t.chips?fe(t,e,n):de(t,e,n))})]}),pe=(e,t)=>_(`div`,{class:`crs-aside`,"data-crs":``,children:e.filter(e=>!e.hidden).map(e=>x(e,t))}),me=(e,t,n,r,i,a)=>v(`div`,{class:`crs-drawer`,"data-crs":``,children:[v(`div`,{class:`crs-drawer-head`,children:[_(`span`,{class:`crs-drawer-title`,children:`Filter & Sort`}),_(`button`,{type:`button`,class:`crs-drawer-x`,"aria-label":`Close filters`,onClick:()=>r(),children:`×`})]}),v(`div`,{class:`crs-drawer-body`,children:[_(`div`,{class:`crs-drawer-chips`}),v(`div`,{class:`crs-drawer-sort`,children:[_(`span`,{class:`crs-drawer-sort-title`,children:`Sort by`}),ie.map(e=>v(`label`,{class:`crs-radio`,children:[_(`input`,{type:`radio`,name:`crs-drawer-sort`,value:e.value,class:`crs-radio-input`,onChange:()=>n(e.value)}),_(`span`,{class:`crs-radio-label`,children:e.label})]}))]}),e.filter(e=>!e.hidden).map(e=>x(e,t))]}),v(`div`,{class:`crs-drawer-foot`,children:[_(`button`,{type:`button`,class:`crs-drawer-clear`,onClick:()=>a(),children:`Clear all`}),_(`button`,{type:`button`,class:`crs-drawer-show`,onClick:()=>i()})]})]}),he=e=>_(`div`,{class:`crs-chips-row`,"data-crs":``,children:re.map(t=>_(`button`,{type:`button`,class:`crs-chip`,"data-group":t.group,"data-option":t.option,onClick:()=>e(t.group,t.option),children:t.label}))}),ge=e=>v(`div`,{class:`crs-toolbar`,"data-crs":``,children:[v(`div`,{class:`crs-toolbar-left`,children:[_(`span`,{class:`crs-results`}),_(`div`,{class:`crs-active-chips`})]}),v(`div`,{class:`crs-sort`,children:[_(`span`,{class:`crs-sort-label`,children:`Sort by`}),_(`select`,{class:`crs-sort-select`,"aria-label":`Sort by`,onChange:t=>e(t.currentTarget.value),children:ie.map(e=>_(`option`,{value:e.value,children:e.label}))})]})]}),S=(e,t)=>v(`button`,{type:`button`,class:`crs-active-chip`,onClick:t,children:[e,_(`span`,{class:`crs-active-chip-x`,children:`×`})]}),_e=e=>_(`button`,{type:`button`,class:`crs-clear`,onClick:e,children:`Clear filters`}),ve=()=>v(`div`,{class:`crs-quiz-tile`,"data-crs":``,children:[v(`div`,{class:`crs-quiz-inner`,children:[_(`span`,{class:`crs-quiz-overline`,children:`Glove Finder`}),_(`h3`,{class:`crs-quiz-title`,children:`Find your glove in 60 seconds`}),_(`p`,{class:`crs-quiz-text`,children:`Five quick questions about how you train, we'll match model and size.`}),v(`div`,{class:`crs-quiz-graphic`,children:[v(`div`,{class:`crs-quiz-scale`,children:[_(`span`,{class:`crs-quiz-ruler`}),v(`span`,{class:`crs-quiz-oz`,children:[_(`span`,{children:`8 oz`}),_(`span`,{children:`10 oz`}),_(`span`,{class:`crs-quiz-oz-on`,children:`12 oz`}),_(`span`,{children:`14 oz`})]})]}),v(`picture`,{class:`crs-quiz-gloves`,children:[_(`source`,{media:`(min-width: 1024px)`,srcset:ae}),_(`img`,{src:oe,alt:``})]})]})]}),_(`a`,{class:`crs-quiz-cta`,href:o,onClick:()=>e(`exp_plp_quiz_start`,`Start the quiz`,`click`,`Glove Finder`),children:`Start the quiz`})]}),ye=()=>_(`span`,{class:`crs-ships`,children:`Ships Free`}),C=new Set,w=(e,t)=>`${e}||${t}`,T=()=>document.querySelector(`.cfv-aside`),E=()=>document.querySelector(`.cfv-content`),D=()=>E()?.querySelector(`:scope > div:has(.cfv-sort-select)`)??null,O=()=>location.pathname===a;function k(e){let t=T();if(!t)return null;let n=[...t.querySelectorAll(`h3`)].find(t=>t.textContent.trim()===e);return n?n.parentElement.parentElement:null}function A(e,t){let n=k(e);return n?[...n.querySelectorAll(`label.cfv-option`)].find(e=>e.querySelector(`.flex-1`)?.textContent.trim()===t)??null:null}function j(e,t){return A(e,t)?.querySelector(`input`)??null}function be(e,t){let n=A(e,t)?.querySelector(`.tabular-nums`);return n&&parseInt(n.textContent.trim(),10)||0}function M(e,t){let n=h.find(t=>t.title===e),r=n?.options.find(e=>e.label===t);return n&&r?{g:n,o:r}:null}function N(e,t){let n=M(e,t);return n?n.o.native?n.o.native.every(e=>j(e.group,e.option)?.checked):C.has(w(e,t)):!1}function P(e,t){let n=e.find(e=>{let n=j(e.group,e.option);return n&&n.checked!==t});if(!n){$();return}j(n.group,n.option).click(),setTimeout(()=>P(e,t),180)}var xe={panel:{name:`exp_plp_filter`,loc:`Filters Panel`},quick:{name:`exp_plp_quick_filter`,loc:`Quick Filters`},chip:{name:`exp_plp_filter_remove`,loc:`Chosen Filters`}};function F(t,n,r=`panel`){let i=M(t,n);if(!i)return;let a=!N(t,n);if(i.o.native)P(i.o.native,a);else{a?C.add(w(t,n)):C.delete(w(t,n));let i=xe[r];e(i.name,`${t}: ${n} ${a?`on`:`off`}`,`click`,i.loc)}$()}function I(){let e=T()?.querySelector(`input[type="checkbox"]:checked`);if(!e){$();return}e.click(),setTimeout(I,180)}function L(t=`exp_plp_clear`,n=`Clear filters`,r=`Chosen Filters`){C.clear(),I(),e(t,n,`click`,r),$()}function R(e){(T()?.querySelector(`input[name="cfv-sort"][value="${e}"]`))?.click(),$()}function z(){return T()?.querySelector(`input[name="cfv-sort"]:checked`)?.value??`featured`}function B(e){let t=(e.querySelector(`a[href^="/products/"]`)?.getAttribute(`href`)??``).split(`?`)[0].split(`/`).pop()??``,n=e.querySelector(`h4`)?.textContent?.trim()??``,r=e.querySelector(`.font-body span`)?.textContent??``;return{handle:t,title:n,price:parseFloat(r.replace(/[^\d.]/g,``))||0,bestseller:[...e.querySelectorAll(`span.font-serif`)].some(e=>/bestseller/i.test(e.textContent))}}function V(){let e=E();return e?[...e.querySelectorAll(`:scope > div.grid`)].find(e=>e.querySelector(`.product-card-hover-shadow`))??null:null}var H=()=>[...V()?.querySelectorAll(`.product-card-hover-shadow`)??[]];function Se(e){if(e.dataset.crsDone)return;let t=e.querySelector(`.text-left`);if(!t)return;e.dataset.crsDone=`1`,t.classList.add(`crs-card-info`);let n=t.querySelector(`:scope > div.absolute`);if(n){n.classList.add(`crs-rating-row`);let e=n.querySelector(`.okendo-summary-stars`)?.getAttribute(`aria-label`)?.match(/([\d.]+) out of 5/)?.[1],t=n.querySelector(`.okendo-summary-count`)?.textContent?.replace(/\D/g,``);if(e){let r=document.createElement(`span`);r.className=`crs-rating-text`,r.textContent=`${e}/5${t?` (${t})`:``}`,n.append(r)}}let r=[...t.querySelectorAll(`:scope > div.h-5`)].find(e=>!e.classList.contains(`crs-rating-row`));if(r){r.classList.add(`crs-badge-row`);let t=r.textContent.trim(),n=e.querySelector(`.bg-gray-100, [class*="dark:bg-"]`);if(t&&n&&!n.querySelector(`.crs-badge`)){let e=document.createElement(`span`);e.className=`crs-badge crs-badge--${t.toLowerCase()}`,e.textContent=t,n.append(e)}}t.querySelector(`:scope > a`)?.classList.add(`crs-title-link`),t.querySelector(`:scope > div.md\\:flex.flex-col`)?.classList.add(`crs-price-row`),B(e).price>=85&&t.append(ye())}function Ce(){let e=new Map;for(let t of h){let n=t.options.filter(e=>e.match&&C.has(w(t.title,e.label)));n.length&&e.set(t.title,n)}return e}function we(){let e=Ce(),t=0;for(let n of H()){let r=B(n),i=!0;for(let t of e.values())if(!t.some(e=>e.match(r))){i=!1;break}n.classList.toggle(`crs-hide`,!i),i&&t++}return t}var U=null;function Te(){for(let e of h){if(!e.dynamicNative||e.options.length)continue;let t=k(e.dynamicNative.group);t&&(e.options=[...t.querySelectorAll(`label.cfv-option .flex-1`)].map(e=>e.textContent.trim()).filter(t=>e.dynamicNative.pattern.test(t)).map(t=>({label:t,native:[{group:e.dynamicNative.group,option:t}]})))}}function Ee(e,t){return t.native?t.native.reduce((e,t)=>e+be(t.group,t.option),0):H().reduce((e,n)=>e+ +!!t.match(B(n)),0)}function De(){if(!U)return;for(let e of[U.sidebar,U.drawer])e.querySelectorAll(`.crs-opt, .crs-size`).forEach(e=>{let t=e.dataset.group,n=e.dataset.option,r=M(t,n);if(!r)return;let i=N(t,n),a=Ee(r.g,r.o);e.classList.contains(`crs-opt`)?(e.querySelector(`.crs-opt-check`).checked=i,e.querySelector(`.crs-opt-count`).textContent=String(a)):(e.classList.toggle(`crs-size-active`,i),e.querySelector(`.crs-size-count`).textContent=String(a)),e.classList.toggle(`crs-opt-empty`,a===0&&!i)});U.chips.querySelectorAll(`.crs-chip`).forEach(e=>{e.classList.toggle(`crs-chip-active`,N(e.dataset.group,e.dataset.option))});let e=z();U.drawer.querySelectorAll(`input[name="crs-drawer-sort"]`).forEach(t=>{t.checked=t.value===e})}function Oe(e){if(!U)return;let t=`${e} result${e===1?``:`s`}`;U.toolbar.querySelector(`.crs-results`).textContent=t,D()?.querySelector(`.tabular-nums`)?.setAttribute(`data-crs-results`,t),U.drawer.querySelector(`.crs-drawer-show`).textContent=`Show ${t}`,U.toolbar.querySelector(`.crs-sort-select`).value=z();let n=[];for(let e of h)for(let t of e.options)N(e.title,t.label)&&n.push({group:e.title,option:t.label});let r=U.toolbar.querySelector(`.crs-active-chips`);r.textContent=``;let i=U.drawer.querySelector(`.crs-drawer-chips`);if(i.textContent=``,U.mchips.textContent=``,n.length){for(let e of n)r.append(S(e.option,()=>F(e.group,e.option,`chip`))),i.append(S(e.option,()=>F(e.group,e.option,`chip`))),U.mchips.append(S(e.option,()=>F(e.group,e.option,`chip`)));r.append(_e(()=>L()))}}var W=null,G=0,K=0;function ke(){let e=D();e&&(W||(W=document.createElement(`div`),W.className=`crs-stuck-sentinel`,W.setAttribute(`data-crs`,``)),W.nextElementSibling!==e&&e.before(W),q())}function q(){let e=document.body;if(!e)return;let t=D();if(!O()||!t||!W?.isConnected||matchMedia(`(min-width: 1024px)`).matches){e.classList.remove(`crs-toolbar-stuck`),W?.style.removeProperty(`height`);return}let n=e.classList.contains(`crs-toolbar-stuck`);n||(G=parseFloat(getComputedStyle(t).top)||0,K=t.offsetHeight);let r=W.getBoundingClientRect().top<=G;r!==n&&(e.classList.toggle(`crs-toolbar-stuck`,r),W.style.height=r?`${K}px`:``)}var J=!1;function Ae(){J||(J=!0,requestAnimationFrame(()=>{J=!1,q()}))}var Y=!1;function je(){Y=!0,document.body.classList.add(`crs-drawer-open`)}function Me(t=`exp_plp_drawer_close`,n=`Close filters`){Y=!1,document.body.classList.remove(`crs-drawer-open`),e(t,n,`click`,`Filter & Sort Drawer`)}function Ne(e){O()&&e.target?.closest?.(`button[aria-controls="cfv-mobile-drawer"]`)&&(e.preventDefault(),e.stopPropagation(),je())}var X=null,Pe=2,Fe=6,Ie=e=>[...e.children].slice(0,7).find(e=>e.classList.contains(`merch-card`))??null;function Le(e,t,n){(t.parentElement!==e||t.nextElementSibling!==n)&&e.insertBefore(t,n)}function Re(){let e=V();if(!e)return;X??=ve();let t=Ie(e),n=[...e.children].filter(e=>e!==X&&e!==t);Le(e,X,n[Pe]??null),t&&Le(e,t,n[Fe-1]??null)}var ze=``,Z=null,Be=!1;function Ve(){Z||(Z=document.createElement(`style`),Z.id=`crs-plp-styles`,Z.textContent=ze);let e=document.head||document.documentElement;e&&Z.parentElement!==e&&e.append(Z)}var Q=!1,He=0;function $(){cancelAnimationFrame(He),He=requestAnimationFrame(Ue)}function Ue(){if(!Q){Q=!0;try{if(Ve(),!O()){Y=!1,document.body?.classList.remove(`crs-plp-on`,`crs-toolbar-stuck`,`crs-drawer-open`);return}let t=T(),n=E(),i=V();if(!t||!n||!i)return;if(document.body.classList.add(`crs-plp-on`),(n.querySelector(`h1`)?.parentElement)?.classList.add(`crs-h1-block`),!U){Te();let e=he((e,t)=>F(e,t,`quick`)),t=ge(R),r=document.createElement(`div`);r.className=`crs-header`,r.setAttribute(`data-crs`,``);let i=document.createElement(`h1`);i.className=`uppercase font-semibold crs-h1`,i.textContent=n.querySelector(`h1`)?.textContent??`Boxing Gloves`,r.append(i,e,t),U={header:r,sidebar:pe(h,F),chips:e,toolbar:t,drawer:me(h,(e,t)=>F(e,t,`panel`),R,()=>Me(),()=>Me(`exp_plp_drawer_show`,`Show results`),()=>L(`exp_plp_drawer_clear`,`Clear all`,`Filter & Sort Drawer`)),mchips:Object.assign(document.createElement(`div`),{className:`crs-mchips`})},U.mchips.setAttribute(`data-crs`,``)}let a=n.parentElement;(U.header.nextElementSibling!==a||U.header.parentElement!==a.parentElement)&&a.before(U.header),t.contains(U.sidebar)||t.prepend(U.sidebar);let o=D();o&&U.mchips.previousElementSibling!==o&&o.after(U.mchips),document.body.contains(U.drawer)||document.body.append(U.drawer),document.body.classList.toggle(`crs-drawer-open`,Y),ke(),Re(),H().forEach(Se);let s=we();De(),Oe(s),Be||(Be=!0,e(`exp_plp_loaded`,`Experiment loaded`,`other`,`PLP`),r(`.crs-quiz-tile`,`exp_plp_quiz_view`,`Glove Finder`,`Visibility`,1e3))}finally{Q=!1}}}function We(e){ze=e,new MutationObserver(e=>{Q||e.some(e=>!(e.target instanceof Element&&e.target.closest(`[data-crs]`)))&&$()}).observe(document,{childList:!0,subtree:!0}),addEventListener(`scroll`,Ae,{passive:!0}),addEventListener(`resize`,Ae),document.addEventListener(`click`,Ne,!0),document.addEventListener(`click`,e=>{e.target?.closest?.(`.crs-info`)||document.querySelectorAll(`.crs-info-open`).forEach(e=>e.classList.remove(`crs-info-open`))}),$()}t({name:`PLP v2`,dev:`OS`}),n(`exp_plp`);var Ge=window;window.top===window.self&&!Ge.__crsPlp&&(Ge.__crsPlp=!0,We(i))})();
