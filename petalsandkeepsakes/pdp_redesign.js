(function(){var e=(e,t,n,r=``)=>{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:`event-to-ga4`,event_name:e,event_desc:t,event_type:n,event_loc:r}),a(`Event: ${e} | ${t} | ${n} | ${r}`,`success`)},t=e=>new Promise(t=>{let n=document.querySelector(e);if(n){t(n);return}let r=new MutationObserver(()=>{let n=document.querySelector(e);n&&(t(n),r.disconnect())});r.observe(document.documentElement,{childList:!0,subtree:!0})}),n=({name:e,dev:t})=>{console.log(`%c EXP: ${e} (DEV: ${t})`,`background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;`)},r=e=>{let t=setInterval(function(){typeof window.clarity==`function`&&(clearInterval(t),window.clarity(`set`,e,`variant_1`))},1e3)},i=(t,n,r,i,o=1e3,s=.5)=>{let c,l;if(c=new IntersectionObserver(function(t){t[0].isIntersecting===!0?l=setTimeout(()=>{e(n,t[0].target.dataset.visible||i||``,`view`,r),c.disconnect()},o):(a(`Element is not fully visible`,`warn`),clearTimeout(l))},{threshold:[s]}),typeof t==`string`){let e=document.querySelector(t);e&&c.observe(e)}else c.observe(t)},a=(e,t=`info`)=>{let n;switch(t){case`info`:n=`color: #3498db;`;break;case`warn`:n=`color: #f39c12;`;break;case`error`:n=`color: #e74c3c;`;break;case`success`:n=`color: #2ecc71;`;break}console.log(`%c>>> ${e}`,`${n} font-size: 16px; font-weight: 600`)},o=`/* PDP redesign — injected into the live Dawn theme.
   Everything is scoped under .crs-pdp so nothing leaks to other templates. */

.crs-pdp {
  --crs-accent: #a72561;
  --crs-accent-text: #a33f6e;
  --crs-accent-soft: rgba(167, 37, 97, 0.05);
  --crs-accent-tint: #fdf1f6;
  --crs-line: #dbdbdb;
  --crs-ink: #121212;
  --crs-muted: rgba(25, 25, 25, 0.75);
  /* None of these ship with the theme (it uses Assistant); all are loaded in index.ts. */
  --crs-head: 'Forum', Georgia, serif;
  --crs-body: 'Jost', 'Assistant', sans-serif;
  /* Only the How-to-order step numbers use this face. */
  --crs-num: 'Overlock', Georgia, serif;
}

/* ---------- layout ---------- */

/* The design gives the product section a wider container than the rest of the site:
   1277px of content at a 1440px canvas (vs the theme's 1100), split 715 / 40 / 522.
   Only the product section widens — the header keeps the site's 1200px container. */
@media screen and (min-width: 990px) {
  .crs-product .page-width {
    max-width: 137.7rem;
  }
  .crs-product .product.product--large {
    gap: 3.14%;
  }
  /* Heavier than it looks: the theme's own
     \`.product--large:not(.product--no-media) .product__info-wrapper\` sets 35%. */
  .crs-product .product.product--large .product__media-wrapper {
    flex: 0 0 56%;
    max-width: 56%;
    width: 56%;
  }
  .crs-product .product.product--large .product__info-wrapper {
    flex: 0 0 40.86%;
    max-width: 40.86%;
    width: 40.86%;
    padding-left: 0;
  }
}

/* An app stylesheet out-specifies a bare \`.crs-info\` on \`display\`, so this
   selector is deliberately heavier than it looks. */
.crs-pdp section.crs-info.product__info-container {
  display: flex;
  flex-direction: column;
  gap: 0;
  font-family: var(--crs-body);
}

/* The theme puts \`margin: 15px 0\` on every info-column child (25px on product-form),
   which out-specifies a plain class selector. Clear it, then set the design's own
   rhythm below — those rules match this specificity and win on source order.
   rating 6 title 16 price 24 —— 24 options 16 cta 16 badges 12 —— 12 help 12 details */
.crs-pdp .crs-info > *,
.crs-pdp .crs-info product-form {
  margin-top: 0;
  margin-bottom: 0;
}

/* Direct child only: the theme nests a second, hidden \`a.product__title\` inside this
   wrapper, and a descendant selector would give it a display and reveal a duplicate title. */
.crs-pdp .crs-info > .product__title {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 0;
}
/* The rating sits above the title in the design; the theme injects it after the h1. */
.crs-pdp .crs-info > .product__title > h1 {
  order: 1;
}
.crs-pdp .crs-info > .product__title > .fera-storeReviewsSummary {
  order: 0;
  /* Fera's own stylesheet sets \`margin-bottom: -14px\` from a cross-origin sheet that
     out-ranks even this selector — !important is the only lever that reaches it. */
  margin: 0 !important;
}
.crs-pdp .crs-info > [id^='price-'] {
  margin-top: 16px;
}
.crs-pdp .crs-info > .crs-options {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--crs-line);
}
.crs-pdp .crs-info > div:has(> product-form) {
  margin-top: 16px;
}
.crs-pdp .crs-info > .crs-trust {
  margin-top: 16px;
}
.crs-pdp .crs-info > .crs-help {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--crs-line);
}
.crs-pdp .crs-info > .crs-details {
  margin-top: 12px;
}
.crs-pdp .crs-info > .crs-reels,
.crs-pdp .crs-info > .crs-howto,
.crs-pdp .crs-info > .crs-bottom {
  margin-top: 24px;
}

/* Host blocks the redesign supersedes: \`.atc_steps\` is the old "How It Works"
   list (replaced by .crs-howto) and \`.custom.dwa\` is the old warranty / mailing
   info box (replaced by .crs-trust + the Mailing Instructions modal). They live
   inside the <form>, so they are hidden rather than removed. */
.crs-product .product-form .atc_steps,
.crs-product .product-form .custom.dwa {
  display: none;
}

/* The theme's native pickers stay in the DOM as the source of truth, but the
   redesigned cards are what the user sees. */
.crs-info variant-selects {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.crs-info .product__title h1 {
  font-family: var(--crs-head);
  font-size: 40px;
  line-height: 52px;
  color: var(--crs-ink);
  margin: 0;
}

/* ---------- utility bar ---------- */

/* The theme paints this bar from its \`color-background-2\` scheme; the design gives
   it a solid mauve. The scheme classes set \`--color-background\` on the element
   itself, so overriding the variable also fixes anything nested that reads it. */
.crs-pdp .crs-utility {
  --color-background: 159, 101, 128;
  background: #9f6580;
  border-bottom: 1px solid rgba(253, 253, 253, 0.08);
}
.crs-pdp .crs-utility .utility-bar__grid {
  justify-content: center;
}
/* The design's single 1440px row is nowrap; below ~900px the two messages no longer
   fit side by side, and the mobile frame keeps the shipping message alone. */
.crs-pdp .crs-utility .announcement-bar__message {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 4px 16px;
  padding: 10px 0;
  font-family: var(--crs-body);
  font-size: 13px;
  font-weight: 400;
  line-height: 16.9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fdfdfd;
}
.crs-pdp .crs-utility .announcement-bar__message > span {
  white-space: nowrap;
}

/* Hidden rather than never appended: the bar is built once, and the pair has to come
   back on a resize past 900px without re-running any of this. */
@media screen and (max-width: 900px) {
  .crs-pdp .crs-utility__sep,
  .crs-pdp .crs-utility__warranty {
    display: none;
  }
}

/* ---------- rating (the host's Fera widget, restyled in place) ---------- */

/* Fera pads this widget out to 52px tall; the design's rating row is a single 16.5px line. */
.crs-info .fera-storeReviewsSummary {
  margin: 0;
  font-family: var(--crs-body);
  font-size: 14px;
  line-height: 16px;
}
.crs-info .fera-storeReviewsSummary-content {
  display: flex;
  align-items: center;
  gap: 12px;
}
.crs-info .fera-storeReviewsSummary-avgRatingWrapper,
.crs-info .fera-storeReviewsSummary-wrapper {
  padding: 0;
}
.crs-info .fera-storeReviewsSummary-block {
  display: flex;
  align-items: center;
}
/* Fera sizes each of these elements directly, so a rule on the widget root above is
   inherited by none of them — the design's 14px has to be set where Fera set its own. */
.crs-info .fera-storeReviewsSummary-avgRating {
  /* Fera's own 15px/28px is what stretches the row past the design's single line. */
  font-size: 14px;
  line-height: 16px;
  color: var(--crs-ink);
  letter-spacing: 0.6px;
}
/* The stars are ★ glyphs (a ::before on -stars-bg), not an image, so the design's 87px
   row is sized by the type: at 18px the glyph advance is 15px, and a 3px letter-spacing
   makes the 18px pitch. The negative margin trims the letter-spacing trailing the fifth
   star, which would otherwise widen the gap to the review count past the design's 5px. */
.crs-info .fera-storeReviewsSummary-stars,
.crs-info .fera-storeReviewsSummary-stars-rating,
.crs-info .fera-storeReviewsSummary-stars-bg {
  font-size: 18px;
  letter-spacing: 3px;
}
.crs-info .fera-storeReviewsSummary-stars {
  margin-right: -3px;
}
.crs-info .fera-storeReviewsSummary-verifiedBadgeWrapper,
.crs-info .fera-storeReviewsSummary-verifiedBadge,
.crs-info .fera-storeReviewsSummary-verifiedBadge-preTextNumber {
  font-size: 14px;
}

/* ---------- price ---------- */

.crs-product .price {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--crs-body);
}
/* Both price blocks are always in the markup; the theme shows one via \`display: none\`.
   Scope this to \`.price--on-sale\`, or it out-specifies that and reveals the sale block —
   and its strikethrough — on products with no discount, next to the regular price. */
.crs-product .price--on-sale .price__sale {
  display: flex;
  align-items: center;
  gap: 11px;
}
/* Dawn renders the compare-at price first; the design leads with the sale price. */
.crs-product .price--on-sale .price__sale .price-item--sale {
  order: -1;
}
.crs-product .price .price-item--sale,
.crs-product .price .price-item--regular {
  font-size: 20px;
  font-weight: 500;
  color: var(--crs-accent-text);
}
.crs-product .price__sale s.price-item--regular {
  font-size: 16px;
  font-weight: 400;
  color: var(--crs-muted);
}
/* The design's discount pill, on the main product only. */
.crs-product .price__badge-sale {
  padding: 6px 8px;
  border-radius: 111px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(167, 37, 97, 0.1);
  color: var(--crs-accent-text);
  font-family: var(--crs-body);
  font-size: 14px;
  letter-spacing: 1px;
}

/* ---------- option cards ---------- */

.crs-options {
  display: flex;
  flex-direction: column;
  gap: 28px;
}
.crs-opt {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.crs-opt-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.crs-opt-head__label {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.84px;
  text-transform: uppercase;
  color: var(--crs-muted);
}
.crs-opt-head__value {
  color: var(--crs-accent-text);
  text-transform: none;
  letter-spacing: 0.28px;
}
.crs-guide-link {
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  font-family: var(--crs-body);
  font-size: 14px;
  letter-spacing: 0.28px;
  color: var(--crs-muted);
  text-decoration: underline;
}
.crs-guide-link:hover {
  color: var(--crs-accent);
}

.crs-opt__list--swatches {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
}
.crs-opt__list--sizes {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.crs-swatch,
.crs-size {
  cursor: pointer;
  background: #fff;
  border: 1px solid var(--crs-line);
  border-radius: 6px;
  font-family: var(--crs-body);
  color: var(--crs-ink);
  transition: border-color 0.15s, background-color 0.15s, box-shadow 0.15s;
}
/* Cards stretch to the tallest label in the row (three lines), so centering the content
   would drop the dot by half a line for every line the label is short. Pin the content to
   the top instead: the dot and the label's first line then start at the same y in every
   card, and the slack collects under the shorter labels. */
.crs-swatch {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 12px 6px;
}
.crs-swatch__dot {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.crs-swatch__label {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.28px;
  text-align: center;
}
/* The theme's button padding plus \`min-width: auto\` on a flex item lets a long value
   (e.g. a half size) push the box past its width, so the row comes out ragged. Pin the
   box on both axes and zero the padding so every size renders as the same 46px square. */
.crs-size {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex: 0 0 46px;
  width: 46px;
  min-width: 46px;
  max-width: 46px;
  height: 46px;
  min-height: 46px;
  padding: 0;
  font-size: 14px;
  letter-spacing: 0.28px;
}
.crs-swatch:hover,
.crs-size:hover {
  border-color: var(--crs-accent);
}
/* The design's selected card has a 2px border, but growing the border from 1px to 2px
   shrinks the content box by 2px and re-wraps the label. The second pixel is painted
   with an inset shadow instead: it lands over the padding, inside the 1px border, so it
   reads as a 2px ring while the border — and therefore the layout — never changes. */
.crs-swatch.is-selected,
.crs-size.is-selected {
  border-color: var(--crs-accent);
  box-shadow: inset 0 0 0 1px var(--crs-accent);
  background: var(--crs-accent-soft);
}
.crs-size.is-unavailable {
  color: rgba(18, 18, 18, 0.35);
  background: repeating-linear-gradient(-45deg, #fff, #fff 5px, #f4f4f4 5px, #f4f4f4 6px);
}

/* ---------- add to cart ---------- */

/* The design has a single full-width CTA; quantity is adjustable in the cart. */
.crs-product .product-form__buttons quantity-input {
  display: none;
}
/* The theme caps this row at \`max-width: 44rem\`, which stops the CTA short of the
   522px column the design gives it. */
.crs-product .product-form__buttons {
  display: block;
  max-width: none;
  width: 100%;
  margin: 0;
}
.crs-product .product-form__submit {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 56px;
  margin: 0;
  padding: 15px 16px;
  background: var(--crs-accent);
  color: #fff;
  border: 0;
  border-radius: 6px;
  font-family: var(--crs-body);
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 1.08px;
  text-transform: uppercase;
  box-shadow: none;
}
.crs-product .product-form__submit:hover:not([disabled]) {
  background: #8e1e53;
}
.crs-product .product-form__submit::after,
.crs-product .product-form__submit::before {
  display: none;
}
/* The sticky-add-to-cart app re-clones the PDP button whenever its bar appears, which
   copies this span out with it. That bar is not part of the redesign, so a clone must
   never show a price — JS strips it when we next run, and this guarantees it is invisible
   in the meantime, whatever order the app decides to clone in. */
.crs-atc-price {
  display: none;
}
.crs-product .crs-atc-price {
  display: inline;
  margin-left: 6px;
}

/* ---------- trust + help ---------- */

.crs-trust {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  font-size: 12px;
  line-height: 30px;
  letter-spacing: 0.24px;
  color: var(--crs-ink);
}
.crs-trust__item {
  display: flex;
  align-items: center;
  gap: 10px;
}
.crs-trust__icon {
  flex: none;
  display: block;
  width: 28px;
  height: 28px;
  object-fit: cover;
}
.crs-trust__icon--svg {
  width: 20px;
  height: 20px;
}
.crs-trust__icon--svg svg {
  width: 100%;
  height: 100%;
  display: block;
}

.crs-help {
  text-align: center;
  font-size: 15px;
  line-height: 28.8px;
  color: var(--crs-ink);
}
.crs-help a {
  color: inherit;
  text-decoration: none;
}

/* ---------- accordions ---------- */

.crs-accord__item {
  border-top: 1px solid var(--crs-line);
}
.crs-accord__item:last-child {
  border-bottom: 1px solid var(--crs-line);
}
.crs-accord__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 22px 0;
  border: 0;
  background: none;
  cursor: pointer;
  font-family: var(--crs-head);
  font-size: 18px;
  text-align: left;
  color: var(--crs-ink);
}
.crs-accord__sign {
  position: relative;
  flex: none;
  width: 14px;
  height: 14px;
}
.crs-accord__sign::before,
.crs-accord__sign::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1.5px;
  background: var(--crs-ink);
  transition: transform 0.2s;
}
.crs-accord__sign::after {
  transform: rotate(90deg);
}
/* Outside a drawer the marker is the +/- drawn above; the chevron is carried but unused. */
.crs-accord__sign svg {
  display: none;
}
.crs-accord__head[aria-expanded='true'] .crs-accord__sign::after {
  transform: rotate(0deg);
}
.crs-accord__panel {
  padding-bottom: 24px;
}

.crs-details__list {
  margin: 0;
  padding: 0 0 0 18px;
  list-style: none;
}
.crs-details__list li {
  position: relative;
  font-size: 15px;
  line-height: 24px;
  color: var(--crs-muted);
}
.crs-details__list li::before {
  content: '·';
  position: absolute;
  left: -14px;
}
.crs-details__toggle {
  margin-top: 8px;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  font-family: var(--crs-body);
  font-size: 15px;
  color: var(--crs-accent-text);
  text-decoration: underline;
}

/* ---------- reels ---------- */

.crs-reels {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 24px 0;
  border-radius: 8px;
  background: var(--crs-accent-soft);
  overflow: hidden;
}
.crs-reels__head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 0 32px;
}
.crs-reels__title {
  max-width: 389px;
  margin: 0;
  font-family: var(--crs-head);
  font-size: 30px;
  line-height: 34px;
  font-weight: 400;
  color: var(--crs-accent);
  text-align: center;
}
.crs-reels__subtitle {
  max-width: 374px;
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.32px;
  color: var(--crs-ink);
  text-align: center;
}

/* Swiper's own base rules, inlined and scoped to this block. Importing \`swiper/css\`
   would have Vite emit a second asset, and the experiment ships as one injected file;
   scoping them keeps our carousel from restyling any Swiper the host site runs itself.
   The gap comes from Swiper's \`spaceBetween\`, which writes margins onto the slides. */
.crs-reels .swiper {
  position: relative;
  display: block;
  margin-inline: auto;
  padding: 0;
  overflow: hidden;
  list-style: none;
  z-index: 1;
}
.crs-reels .swiper-wrapper {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: content-box;
  transition-property: transform;
  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);
  z-index: 1;
}
/* No width/height here on purpose: \`slidesPerView: 'auto'\` measures each slide, and a
   base \`width: 100%\` would out-specify \`.crs-reel\` and collapse the whole strip. */
.crs-reels .swiper-slide {
  position: relative;
  flex-shrink: 0;
  display: block;
  transition-property: transform;
}
.crs-reels__strip {
  width: 100%;
}
/* Centred slides put the design's three on screen with a sliver of each neighbour. */
.crs-reels__list {
  overflow: visible;
}
.crs-reel {
  position: relative;
  flex: none;
  width: 155px;
  height: 276px;
  border-radius: 4px;
  overflow: hidden;
  background: rgba(167, 37, 97, 0.08);
}
.crs-reel__poster,
.crs-reel video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.crs-reel__poster {
  cursor: pointer;
}
.crs-reel__poster img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.crs-reel video {
  display: none;
}
.crs-reel.is-playing video {
  display: block;
}
.crs-reel.is-playing .crs-reel__poster,
.crs-reel.is-playing .crs-reel__play {
  display: none;
}
.crs-reel video::-webkit-media-controls-panel {
  overflow: hidden;
}

.crs-reel__play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: #fff;
  backdrop-filter: blur(2px);
  cursor: pointer;
  line-height: 0;
  transition: transform 0.2s, opacity 0.2s;
}
.crs-reel__play svg {
  display: block;
  width: 44px;
  height: 44px;
}
/* The theme fills every svg path with currentColor, which would recolour this glyph. */
.crs-reel__play svg path {
  fill: #191919;
}
@media (hover: hover) {
  .crs-reel__play:hover {
    transform: translate(-50%, -50%) scale(1.08);
    opacity: 0.85;
  }
}

/* Only offered once a reel is running — there is nothing to enlarge before that. */
.crs-reel__expand {
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0px;
  border: 0;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.4);
  color: #191919;
  cursor: pointer;
  transition: background-color 0.2s, opacity 0.2s;
  z-index: 2;
}
.crs-reel:not(.is-playing) .crs-reel__expand {
  opacity: 0;
  pointer-events: none;
}
.crs-reel__expand svg {
  display: block;
  width: 100%;
  height: 100%;
}
.crs-reel__expand svg path {
  fill: none;
  stroke: currentColor;
}
@media (hover: hover) {
  .crs-reel__expand:hover {
    background: #fff;
  }
}

.crs-reels__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.crs-reels__arrow {
  width: 24px;
  height: 24px;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  line-height: 0;
  transition: opacity 0.2s;
}
.crs-reels__arrow svg {
  display: block;
  width: 24px;
  height: 24px;
}
.crs-reels__arrow svg path {
  fill: none;
  stroke: #191919;
}
.crs-reels__arrow--next svg {
  transform: scaleX(-1);
}
@media (hover: hover) {
  .crs-reels__arrow:hover {
    opacity: 0.7;
  }
}
.crs-reels__dots {
  display: flex;
  align-items: center;
  gap: 10px;
}
.crs-reels__dot {
  width: 10px;
  height: 10px;
  padding: 0;
  border: 1px solid #191919;
  border-radius: 50%;
  background: none;
  cursor: pointer;
  transition: background-color 0.2s;
}
.crs-reels__dot.is-active {
  background: #191919;
}

/* ---------- reel lightbox ---------- */

.crs-lightbox {
  position: fixed;
  inset: 0;
  z-index: 2147483646;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
  padding: 15px;
  opacity: 0;
  transition: opacity 0.35s;
}
.crs-lightbox--open {
  opacity: 1;
}
/* Two classes deep to outrank the theme's \`div:empty { display: none }\` in base.css. */
.crs-lightbox .crs-lightbox__overlay {
  position: absolute;
  inset: 0;
  display: block;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(1px);
}
.crs-lightbox__stage {
  position: relative;
  line-height: 0;
}
.crs-lightbox video {
  display: block;
  width: auto;
  max-width: 100%;
  max-height: 90vh;
  border-radius: 4px;
}
/* Reels stream from GitHub Pages, so a cold open on a slow connection sits on a blank
   rectangle until the first frame lands. Shown on \`loadstart\`/\`waiting\`, hidden again
   on \`canplay\`/\`loadeddata\`. */
.crs-lightbox__spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  display: none;
  z-index: 10;
}
.crs-lightbox__spinner.is-active {
  display: block;
  animation: crs-spin 0.8s linear infinite;
}
@keyframes crs-spin {
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.crs-lightbox__arrow,
.crs-lightbox__close {
  position: relative;
  padding: 0;
  border: 0;
  background: none;
  color: #fff;
  cursor: pointer;
  line-height: 0;
  transition: opacity 0.2s;
}
.crs-lightbox__arrow {
  flex: none;
  width: 28px;
  height: 49px;
}
.crs-lightbox__arrow svg {
  display: block;
  width: 28px;
  height: 49px;
}
.crs-lightbox__arrow--next svg {
  transform: scaleX(-1);
}
.crs-lightbox__close {
  position: absolute;
  top: -44px;
  right: 0;
  width: 24px;
  height: 24px;
  z-index: 2;
}
.crs-lightbox__close svg {
  display: block;
  width: 24px;
  height: 24px;
}
.crs-lightbox__arrow svg path,
.crs-lightbox__close svg path {
  fill: none;
  stroke: currentColor;
}
@media (hover: hover) {
  .crs-lightbox__arrow:hover,
  .crs-lightbox__close:hover {
    opacity: 0.6;
  }
}

/* ---------- how to order ---------- */

.crs-howto {
  padding: 24px 32px;
  border-radius: 6px;
  background: var(--crs-accent-soft);
}
.crs-howto__title {
  margin: 0 0 24px;
  font-family: var(--crs-head);
  font-size: 24px;
  line-height: 32px;
  color: var(--crs-accent-text);
}
.crs-howto__title--made {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(167, 37, 97, 0.15);
}
.crs-howto p {
  font-size: 15px;
  line-height: 24px;
  color: var(--crs-muted);
}
.crs-steps {
  margin: 0;
  padding: 0;
  list-style: none;
}
.crs-step {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 4px 0;
}
.crs-step + .crs-step {
  position: relative;
  margin-top: 16px;
}
/* The design connects the steps with an exported arrow, not a dashed border: it sits
   in the 16px gap, 16px from the left, under the 40px number circle. */
.crs-step__arrow {
  position: absolute;
  left: 16px;
  top: -16px;
  width: 7px;
  height: 16px;
}
.crs-step__arrow svg {
  display: block;
}
.crs-step__num {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(167, 37, 97, 0.1);
  font-family: var(--crs-num);
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.6px;
  color: var(--crs-accent-text);
}
.crs-step__icon {
  flex: none;
  width: 40px;
  height: 40px;
  margin-left: 16px;
}
.crs-step__icon svg {
  width: 100%;
  height: 100%;
}
.crs-step__text {
  font-size: 15px;
  line-height: 24px;
  color: var(--crs-ink);
}
.crs-inline-link {
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  font: inherit;
  color: var(--crs-accent-text);
  text-decoration: underline;
}

/* ---------- gallery ---------- */

/* Desktop keeps the theme's stacked grid (main image + 2-col grid), which is what
   the design shows — the thumbnail selector is a mobile-only affordance. */
.crs-thumbs {
  display: none;
  gap: 10px;
  margin-top: 12px;
  overflow-x: auto;
  scrollbar-width: none;
}
.crs-created-slot {
  list-style: none;
}

/* Mobile-only, like the thumbnails: on desktop the design's gallery is a stacked grid
   with nothing to swipe. */
.crs-gallery__hint {
  display: none;
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 1;
  padding: 4px 10px;
  border-radius: 999px;
  background: #faf4f7;
  font-family: var(--crs-body);
  font-size: 12px;
  color: #6e4e57;
  pointer-events: none;
}

/* Design: 580 main image and a 520 inclusion block, both centred in the 715 column,
   over a 2-col grid of 352.5 thumbs with a 10px gutter. The theme stacks the first
   image full-bleed at an 8px gutter. */
@media screen and (min-width: 990px) {
  .crs-product .product__media-list {
    gap: 10px;
  }
  .crs-product .product__media-list > li:first-child {
    flex: 0 0 580px;
    max-width: 580px;
    margin-inline: auto;
  }
  .crs-product .product__media-list > .crs-created-slot {
    flex: 0 0 520px;
    max-width: 520px;
    margin-inline: auto;
  }
  .crs-product .product__media-list > .product__media-item:not(:first-child) {
    max-width: calc(50% - 5px);
  }
}
.crs-thumbs::-webkit-scrollbar {
  display: none;
}
.crs-thumb {
  flex: none;
  width: 72px;
  height: 72px;
  padding: 0;
  border: 1px solid var(--crs-line);
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
}
.crs-thumb.is-selected {
  border: 2px solid var(--crs-accent);
}
.crs-thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Design: no panel fill on desktop — 24px gaps, 32/24 padding, closed by a rule
   and an uppercase caption taken from the product's own spec lines. */
.crs-created {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin: 0;
  padding: 24px 32px;
  border-radius: 6px;
}
.crs-created h3 {
  width: 100%;
  margin: 0;
  font-family: var(--crs-head);
  font-size: 24px;
  /* The theme sets line-height:0 here, which collapses the wrapped lines. */
  line-height: 32px;
  color: var(--crs-accent);
  text-align: center;
}
.crs-created .icons_box {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 0;
}
.crs-created .cpi_icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
}
.crs-created .cpi_icons img {
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  padding: 12px;
  border-radius: 50%;
  background: var(--crs-accent-soft);
}
.crs-created .cpi_icons p {
  margin: 0;
  font-family: var(--crs-body);
  font-size: 14px;
  line-height: 20px;
  color: #191919;
  white-space: nowrap;
}
.crs-created__caption {
  width: 100%;
  margin: 0;
  padding-top: 24px;
  border-top: 1px solid var(--crs-line);
  font-family: var(--crs-body);
  font-size: 14px;
  line-height: 19.5px;
  letter-spacing: 0.84px;
  text-align: center;
  text-transform: uppercase;
  color: #191919;
}

/* ---------- modal ----------
 * A rebuild of the theme's Ring Sizing Guide drawer (#custom_notifications):
 * right-hand 420px panel, 20px padding, 0.5s slide, title left / round close right.
 */

body.crs-modal-open {
  overflow: hidden;
}
.crs-modal {
  position: fixed;
  inset: 0;
  z-index: 2147483646;
  font-family: var(--crs-body);
}
/* Two classes deep to outrank the theme's \`div:empty { display: none }\` in base.css —
   this div is childless by design. */
.crs-modal .crs-modal__overlay {
  position: absolute;
  inset: 0;
  display: block;
  /* Same scrim the theme paints for its guide drawer (.section-header.cust_noti::before). */
  background: rgba(0, 0, 0, 0.57);
}
.crs-modal__dialog {
  position: absolute;
  top: 0;
  right: 0;
  width: 420px;
  max-width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fff;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 0.5s;
}
.crs-modal--open .crs-modal__dialog {
  transform: translateX(0);
}
.crs-modal__head {
  flex: none;
  display: flex;
  justify-content: space-between;
  /* Reversed row, so the close button aligns to the top-right while the title keeps its 15px lead-in. */
  flex-direction: row-reverse;
  align-items: flex-start;
  gap: 16px;
}
.crs-modal__title {
  margin: 15px 0 0;
  font-family: var(--crs-body);
  font-size: 22px;
  line-height: 28px;
  font-weight: 500;
  color: var(--crs-ink);
}
.crs-modal__close {
  flex: none;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: none;
  cursor: pointer;
  color: var(--crs-ink);
}
.crs-modal__close svg {
  display: block;
  width: 16px;
  height: 16px;
}
/* The theme fills every svg path with currentColor, which erases a stroked icon. */
.crs-modal__close svg path {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
}
/* The body is the drawer's flow: every block is spaced by the 16px gap, never by
   margins. The remote drawers nest their content one wrapper deeper, so the flow
   has to pass through it. */
.crs-modal__body,
.crs-modal__body > .crs-rte,
.crs-modal__body > .crs-remote,
.crs-modal__body > .crs-remote > .crs-rte {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
/* Only the blocks the gap governs; the accordion panels keep their own margins. */
.crs-modal__body > *,
.crs-modal__body > .crs-rte > *,
.crs-modal__body > .crs-remote > *,
.crs-modal__body > .crs-remote > .crs-rte > * {
  margin: 0;
}
.crs-modal__intro {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.crs-modal__intro p {
  margin: 0;
  font-size: 15px;
  line-height: 24px;
  color: rgba(18, 18, 18, 0.75);
}
.crs-note {
  margin-bottom: 20px;
  padding: 16px;
  border-radius: 8px;
  background: var(--crs-accent-tint);
  font-style: italic;
  font-size: 15px;
  line-height: 22px;
  color: var(--crs-accent-text);
}
.crs-rte h3,
.crs-rte__h {
  margin: 20px 0 6px;
  font-family: var(--crs-head);
  font-size: 20px;
  color: var(--crs-ink);
}
.crs-rte p,
.crs-rte li {
  font-size: 15px;
  line-height: 24px;
  color: var(--crs-muted);
}
.crs-rte a {
  color: var(--crs-accent-text);
}
/* Inside the drawer, type follows the guide panel rather than the redesign scale. */
.crs-modal .crs-note {
  margin: 0;
  padding: 8px 12px;
  background: rgba(167, 37, 97, 0.05);
  font-size: 14px;
  line-height: 18px;
  color: #a72561;
}
.crs-modal .crs-rte h3,
.crs-modal .crs-rte__h {
  margin: 0;
  font-family: var(--crs-body);
  font-size: 16px;
  line-height: 20.8px;
  font-weight: 500;
  color: #000;
}
.crs-modal .crs-rte p,
.crs-modal .crs-rte li,
.crs-modal .crs-accord__panel p,
.crs-modal .crs-accord__panel li {
  font-size: 15px;
  line-height: 24px;
  color: rgba(18, 18, 18, 0.75);
}
.crs-modal .crs-accord__item {
  border-top: 1px solid #c2bfbf;
}
.crs-modal .crs-accord__item:last-child {
  border-bottom: 0;
}
/* The drawer swaps the +/- for the chevron and spins it open. */
.crs-modal .crs-accord__sign {
  width: 20px;
  height: 20px;
  color: #000;
}
.crs-modal .crs-accord__sign::before,
.crs-modal .crs-accord__sign::after {
  display: none;
}
.crs-modal .crs-accord__sign svg {
  display: block;
  width: 20px;
  height: 20px;
  transition: transform 0.2s;
}
/* The theme fills every svg path with currentColor, which erases a stroked icon. */
.crs-modal .crs-accord__sign svg path {
  fill: none;
  stroke: currentColor;
}
.crs-modal .crs-accord__head[aria-expanded='true'] .crs-accord__sign svg {
  transform: rotate(180deg);
}
.crs-modal .crs-accord__head {
  gap: 10px;
  padding: 15px 0;
  font-family: var(--crs-body);
  font-size: 16px;
  line-height: 20.8px;
  font-weight: 500;
  color: #000;
}

/* ---------- Ring Size Guide ----------
 * The theme's own drawer (#custom_notifications), which the size trigger opens.
 * We reuse it rather than rebuilding it, so this only restates the type and the
 * header to match .crs-modal — its 420px panel, 20px padding and 1px #c2bfbf
 * accordion rules already line up. Scoped to body.crs-pdp so the drawer is
 * untouched on any other template.
 */

/* The drawer lives inside the header section (z-index: 3), so its own
   z-index is trapped in that stacking context and the announcement bar's
   section (z-index: 99) paints over the close button. The theme flags the
   section with .cust_noti while the drawer is open — lift it only then. */
body.crs-pdp .section-header.cust_noti {
  z-index: 100;
}
body.crs-pdp #custom_notifications {
  font-family: var(--crs-body);
}
body.crs-pdp #custom_notifications .modal-header-amor h3 {
  /* 15px lead-in above, 16px flow gap below — the header owns both. */
  margin: 15px 0 16px;
  font-family: var(--crs-body);
  font-size: 22px;
  line-height: 28px;
  font-weight: 500;
  color: var(--crs-ink);
}
body.crs-pdp #custom_notifications .modal-header-amor button.close {
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: none;
  color: var(--crs-ink);
}
/* dressGuideClose() swaps the theme's Font Awesome glyph for the .crs-modal SVG. */
body.crs-pdp #custom_notifications .modal-header-amor button.close svg {
  display: block;
  width: 16px;
  height: 16px;
}
/* The theme fills every svg path with currentColor, which erases a stroked icon. */
body.crs-pdp #custom_notifications .modal-header-amor button.close svg path {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.6;
}
body.crs-pdp #custom_notifications .header-description,
body.crs-pdp #custom_notifications .panel-body p.fs14 {
  font-size: 15px;
  line-height: 24px;
  color: rgba(18, 18, 18, 0.75);
}
/* The rows carry their own 15px margins, so only the lead-in gap is missing. */
body.crs-pdp #custom_notifications .accord {
  margin-top: 16px;
}
body.crs-pdp #custom_notifications .accord-heading {
  font-family: var(--crs-body);
  font-size: 16px;
  line-height: 20.8px;
  font-weight: 500;
  color: #000;
}

/* ---------- mobile ----------
 * The mobile frame keeps every block the desktop has, re-cut for a 375px canvas:
 * the type drops a step throughout, the gallery and the two pink panels run
 * full-bleed, and every horizontal list becomes a swipe strip.
 *
 * The design's 16px gutter is the theme's own \`1.5rem\` to within a pixel (Dawn's
 * root is 62.5%, so 1.5rem = 15px), so \`-1.5rem\` is what takes a block full-bleed
 * and \`1.5rem\` is what lines an inset block's content back up with the column.
 */

@media screen and (max-width: 749px) {
  /* The theme letter-spaces its body copy, and that reaches every string the redesign
     does not set a tracking on. The design tracks the small type only — the title, the
     price and the details copy are untracked, so they have to say so. */
  /* The theme stacks the two columns flush on mobile; the design floats the buybox
     16px below the thumbnail strip. Padding rather than a margin: the info wrapper has
     no padding or border of its own, so a margin here would collapse out of it. */
  .crs-pdp section.crs-info.product__info-container {
    padding-top: 16px;
  }
  /* Mobile opens the rating-to-title gap by a pixel over the desktop's 6. */
  .crs-pdp .crs-info > .product__title {
    gap: 7px;
  }
  .crs-info .product__title h1 {
    font-size: 28px;
    line-height: 38px;
    letter-spacing: normal;
  }
  .crs-pdp .crs-info > [id^='price-'] {
    margin-top: 9px;
  }
  .crs-product .price .price-item--sale,
  .crs-product .price .price-item--regular {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: normal;
  }
  .crs-product .price__sale s.price-item--regular {
    font-size: 15px;
    line-height: 20px;
    letter-spacing: normal;
  }
  .crs-product .price__badge-sale {
    font-size: 13px;
  }

  /* The inclusion icons sit above the gallery on mobile. */
  .crs-media {
    display: flex;
    flex-direction: column;
  }
  /* Mobile keeps the pale-pink band, runs it full-bleed and drops the caption. */
  .crs-created {
    order: -1;
    gap: 12px;
    margin: 0 -1.5rem 16px;
    padding: 16px 8px;
    border-radius: 0;
    background: var(--crs-accent-tint);
  }
  .crs-created__caption {
    display: none;
  }
  .crs-created h3 {
    margin-bottom: 12px;
    font-size: 20px;
    line-height: 26px;
  }
  /* All five inclusions spread across the 375px viewport. */
  .crs-created .icons_box {
    gap: 0;
    justify-content: space-between;
  }
  .crs-created .cpi_icons img {
    width: 42px;
    height: 42px;
    padding: 10px;
  }
  .crs-created .cpi_icons p {
    font-size: 11px;
    white-space: nowrap;
  }

  /* The theme already bleeds the slider itself, but keeps Dawn's "peek" — a sliver of
     the next slide, at the cost of a gutter either side. The design gives the image the
     whole 375 and hints the swipe with a badge instead. */
  .crs-media .product__media-list.slider--mobile {
    padding-inline: 0;
    scroll-padding-left: 0;
  }
  .crs-media .product__media-list.slider--mobile > .product__media-item {
    width: 100%;
    max-width: 100%;
  }
  /* The design gives the image the full 375. The theme's own images are always
     \`object-fit: cover\`; what makes them read as "contain" is \`constrain-height\`
     capping the frame's *width* to the image's ratio (\`--contained-width\`) and centring
     it — which is what leaves the design's width unspent. Releasing that cap is the
     whole fix: the frame still takes its height from the image's own ratio, so nothing
     is cropped, and the portrait lifestyle shots stay whole alongside the square
     product ones. Do not pin a height here — the frame would keep \`cover\` and crop. */
  .crs-media .product__media-list.slider--mobile .product-media-container.constrain-height {
    width: 100%;
  }
  .crs-media slider-component {
    position: relative;
  }
  .crs-gallery__hint {
    display: block;
  }
  .crs-thumbs {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }
  .crs-thumb {
    width: 48px;
    height: 48px;
  }

  /* 16px from the price to the rule, 24px on to the label. */
  .crs-pdp .crs-info > .crs-options {
    margin-top: 16px;
  }
  .crs-options {
    gap: 32px;
  }
  .crs-opt-head__label {
    line-height: 19.5px;
  }
  .crs-opt-head__value {
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.24px;
    color: var(--crs-accent);
  }
  .crs-guide-link {
    font-size: 13px;
    line-height: 14px;
    letter-spacing: 0.26px;
  }
  /* Both lists overflow 375px, so they swipe rather than wrap. The negative margin
     lets them scroll edge to edge while their content still starts on the gutter. */
  .crs-opt__list--swatches {
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
    gap: 8px;
    margin: 0 -1.5rem;
    padding: 2px 1.5rem;
  }
  .crs-opt__list--sizes {
    flex-wrap: nowrap;
    overflow-x: auto;
    scrollbar-width: none;
    gap: 8px;
    margin: 0 -1.5rem;
    padding: 2px 1.5rem;
  }
  .crs-opt__list--swatches::-webkit-scrollbar,
  .crs-opt__list--sizes::-webkit-scrollbar {
    display: none;
  }
  .crs-swatch {
    flex: none;
    width: 78px;
    padding: 12px 4px;
  }
  .crs-swatch__label {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.24px;
  }

  .crs-pdp .crs-info > .crs-trust {
    margin-top: 16px;
  }
  .crs-trust {
    gap: 16px;
  }
  .crs-trust__icon {
    width: 26px;
    height: 26px;
  }
  /* The design's only full-bleed rule: the one over the help line. */
  .crs-pdp .crs-info > .crs-help {
    margin: 16px -1.5rem 0;
    padding: 16px 1.5rem 0;
  }
  .crs-help {
    font-size: 14px;
    color: var(--crs-muted);
  }
  /* The design darkens the number alone, which is what reads as the link. */
  .crs-help a {
    color: #575757;
  }
  .crs-pdp .crs-info > .crs-details {
    margin-top: 16px;
  }

  /* Mobile drops the serif accordion head for the body face, a step smaller.
     \`.crs-modal .crs-accord__head\` outranks this, so the drawers keep their own. */
  .crs-accord__head {
    padding: 18px 0;
    font-family: var(--crs-body);
    font-size: 15px;
    letter-spacing: 0.3px;
  }
  .crs-accord__panel {
    padding-bottom: 18px;
  }
  .crs-details__list li {
    font-size: 14px;
    line-height: 23.8px;
    letter-spacing: normal;
    color: #6b5f64;
  }
  .crs-details__toggle {
    font-size: 14px;
    font-weight: 500;
    color: var(--crs-accent);
  }

  /* Both pink panels lose their rounded card and become full-bleed bands. The theme's
     \`margin: 15px 0\` on every info-column child is a shorthand, so it zeroes the inline
     margins too — the bleed has to be set at that same weight, like the rhythm above. */
  .crs-pdp .crs-info > .crs-reels,
  .crs-pdp .crs-info > .crs-howto {
    margin-inline: -1.5rem;
  }
  /* The desktop's 24px between these blocks closes to the buybox's own 16px. */
  .crs-pdp .crs-info > .crs-reels,
  .crs-pdp .crs-info > .crs-howto,
  .crs-pdp .crs-info > .crs-bottom {
    margin-top: 16px;
  }
  .crs-reels,
  .crs-howto {
    border-radius: 0;
  }
  .crs-reels__head {
    gap: 8px;
    padding: 0 1.5rem;
  }
  .crs-reels__title {
    max-width: none;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: normal;
  }
  .crs-reels__subtitle {
    max-width: 289px;
    font-size: 14px;
    letter-spacing: 0.28px;
  }

  .crs-howto {
    padding: 24px 1.5rem;
  }
  .crs-howto__title {
    margin-bottom: 20px;
  }
  .crs-howto__title--made {
    margin-top: 20px;
    padding-top: 20px;
  }
  .crs-howto p,
  .crs-step__text {
    font-size: 14px;
    letter-spacing: 0.28px;
  }
  /* Design: 24px from the number to the icon (the desktop's 32px), 16px on to the text. */
  .crs-step__icon {
    margin-left: 8px;
  }
}
`,s=`<div class="crs-note">
  We know how precious your inclusions are. Choosing the right metal ensures your keepsake fits
  your lifestyle and lasts as long as your memories.
</div>

<h3 class="crs-rte__h">Sterling Silver</h3>
<p>
  A beautiful, timeless, and accessible choice for your meaningful piece. Solid sterling silver is
  durable enough for everyday wear, though it naturally tarnishes over time depending on your skin's
  chemistry. It will require occasional, gentle polishing with a soft cloth to maintain its bright,
  silver finish.
</p>

<h3 class="crs-rte__h">Gold Filled</h3>
<p>
  A wonderful balance of quality and affordability. This features a thick layer of real gold
  permanently bonded to a jeweler's brass core. While significantly more durable than standard gold
  plating, the gold layer can eventually wear down over time with heavy daily use or exposure to
  water and chemicals. We recommend this option for pieces you plan to wear gently or occasionally,
  rather than 24/7.
</p>

<h3 class="crs-rte__h">14K Gold</h3>
<p>
  The ultimate standard for a forever keepsake. Solid 14k gold is a single, continuous alloy that
  will never rub off, flake, or fade. If you work with your hands, want to wear your piece 24/7 with
  complete peace of mind, and desire a true heirloom to pass down through generations, this is the
  safest and most durable investment for your precious memories.
</p>
`,c=()=>fetch(`${location.pathname}.js`).then(e=>e.json()),l=e=>document.querySelector(`select[name="options[${e}]"]`),u=(e,t)=>{let n=l(e);!n||n.value===t||(n.value=t,n.dispatchEvent(new Event(`change`,{bubbles:!0})))},d=e=>e.options.map(e=>l(e.name)?.value??``),f=e=>{for(let t=0;t<e.options.length;t++){let n=new Map;e.variants.forEach(e=>{if(!e.featured_image)return;let r=e.options[t];n.has(r)||n.set(r,new Set),n.get(r).add(e.featured_image.src)});let r=new Set([...n.values()].flatMap(e=>[...e]));if(n.size>1&&r.size>1&&[...n.values()].every(e=>e.size===1))return t}return 0},p=(e,t)=>{let n={};return e.variants.forEach(e=>{let r=e.options[t];e.featured_image&&!n[r]&&(n[r]=e.featured_image.src)}),n},m=(e,t,n)=>{let r=d(e);return e.variants.some(e=>e.available&&e.options[t]===n&&e.options.every((e,n)=>n===t||e===r[n]))},h=/\d[\d.,   ]*\d|\d/,g=e=>{let t=e.match(h);if(!t)return null;let n=t[0],r=Math.max(n.lastIndexOf(`.`),n.lastIndexOf(`,`)),i=r>-1&&/^[.,]\d{1,2}$/.test(n.slice(r)),a=i?n.slice(0,r):n;return{raw:n,decimalSep:i?n[r]:``,groupSep:a.match(/[.,   ]/)?.[0]??``,decimals:i?n.length-r-1:0}},_=e=>{let t=g(e);if(!t)return NaN;let{raw:n,decimalSep:r}=t,i=r?Math.max(n.lastIndexOf(`.`),n.lastIndexOf(`,`)):-1,a=(i>-1?n.slice(0,i):n).replace(/\D/g,``),o=i>-1?n.slice(i+1):``;return Number(`${a}.${o||0}`)},v=e=>e.trim().replace(/\s+[A-Z]{3}$/,``),y=(e,t)=>{let n=g(e);if(!n)return String(t);let[r,i]=t.toFixed(n.decimals).split(`.`),a=n.groupSep?r.replace(/\B(?=(\d{3})+(?!\d))/g,n.groupSep):r;return e.replace(n.raw,i?a+n.decimalSep+i:a)},b=e=>{let t=document.createElement(`div`);return t.innerHTML=e,t.textContent.replace(/ /g,` `).trim()},x=e=>{let t=document.querySelector(`.product__title h1`)?.textContent?.trim(),n=[],r=[];return e.querySelectorAll(`:scope > p`).forEach(e=>{let i=e.innerHTML.split(/<br[^>]*>/gi).map(b).filter(Boolean).filter(e=>e.startsWith(`-`));if(i.length>=2){n.push(...i.map(e=>e.replace(/^-\s*/,``)));return}t&&b(e.innerHTML).replace(/\s*\(#\d+\)$/,``)===t||e.textContent.trim()&&r.push(e.cloneNode(!0))}),{specs:n,prose:r}},S=e=>e.find(e=>/fused/i.test(e))??e.find(e=>/inclusion/i.test(e)),C=`data:image/png;base64,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`,w=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="20" fill="#F5F5F5"/>
<g id="PDP update">
<path d="M-3899.5 -1034.5C-3899.5 -1035.6 -3898.6 -1036.5 -3897.5 -1036.5H3021.5C3022.6 -1036.5 3023.5 -1035.6 3023.5 -1034.5V4505.5C3023.5 4506.6 3022.6 4507.5 3021.5 4507.5H-3897.5C-3898.6 4507.5 -3899.5 4506.6 -3899.5 4505.5V-1034.5Z" fill="#F0D6D6"/>
<path d="M-3897.5 -1036.5V-1035.5H3021.5V-1036.5V-1037.5H-3897.5V-1036.5ZM3023.5 -1034.5H3022.5V4505.5H3023.5H3024.5V-1034.5H3023.5ZM3021.5 4507.5V4506.5H-3897.5V4507.5V4508.5H3021.5V4507.5ZM-3899.5 4505.5H-3898.5V-1034.5H-3899.5H-3900.5V4505.5H-3899.5ZM-3897.5 4507.5V4506.5C-3898.05 4506.5 -3898.5 4506.05 -3898.5 4505.5H-3899.5H-3900.5C-3900.5 4507.16 -3899.16 4508.5 -3897.5 4508.5V4507.5ZM3023.5 4505.5H3022.5C3022.5 4506.05 3022.05 4506.5 3021.5 4506.5V4507.5V4508.5C3023.16 4508.5 3024.5 4507.16 3024.5 4505.5H3023.5ZM3021.5 -1036.5V-1035.5C3022.05 -1035.5 3022.5 -1035.05 3022.5 -1034.5H3023.5H3024.5C3024.5 -1036.16 3023.16 -1037.5 3021.5 -1037.5V-1036.5ZM-3897.5 -1036.5V-1037.5C-3899.16 -1037.5 -3900.5 -1036.16 -3900.5 -1034.5H-3899.5H-3898.5C-3898.5 -1035.05 -3898.05 -1035.5 -3897.5 -1035.5V-1036.5Z" fill="black" fill-opacity="0.1"/>
<g id="alt" clip-path="url(#clip0_3369_82)">
<rect width="1440" height="2419.3" transform="translate(-1115.5 -725.5)" fill="white"/>
<rect width="1440" height="2419.3" transform="translate(-1115.5 -725.5)" fill="white"/>
<g id="Frame 1321314117">
<g id="Frame 1321314117_2">
<g id="Frame 1321314117_3">
<g id="Frame 1321314106">
<g id="product-form &#226;&#134;&#146; Form">
<g id="Frame 1321314117_4">
<g id="Frame 1321314117_5">
<g id="Frame 1321314117_6">
<g id="Frame 1321314119">
<g id="Frame 1321314162">
<g id="Frame 1321314117_7">
<g id="Frame 1321314119_2">
<g id="infinity-svgrepo-com 1">
<rect width="20" height="20" rx="3" fill="url(#paint0_linear_3369_82)"/>
<g id="Frame" clip-path="url(#clip1_3369_82)">
<path id="Vector" d="M9.73037 14.423C8.22501 13.9564 6.9637 12.9162 6.21897 11.5272C5.47425 10.1383 5.30592 8.51205 5.75037 7C7.30813 7.07128 8.83245 6.53329 10.0004 5.5C11.1683 6.53329 12.6926 7.07128 14.2504 7C14.5897 8.15455 14.574 9.38447 14.2054 10.53" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Vector_2" d="M11.5 13.5L12.5 14.5L14.5 12.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_3369_82" x1="10" y1="0" x2="10" y2="20" gradientUnits="userSpaceOnUse">
<stop stop-color="#CCA7DE"/>
<stop offset="1" stop-color="#A72561"/>
</linearGradient>
<clipPath id="clip0_3369_82">
<rect width="1440" height="2419.3" fill="white" transform="translate(-1115.5 -725.5)"/>
</clipPath>
<clipPath id="clip1_3369_82">
<rect width="12" height="12" fill="white" transform="translate(4 4)"/>
</clipPath>
</defs>
</svg>
`,T=0,E=e=>{let t=`crs${T++}`;return e.replace(/id="([^"]+)"/g,(e,n)=>`id="${t}-${n}"`).replace(/url\(#([^)]+)\)/g,(e,n)=>`url(#${t}-${n})`).replace(/href="#([^"]+)"/g,(e,n)=>`href="#${t}-${n}"`)};function D(e,t){if(!(t==null||typeof t==`boolean`)){if(Array.isArray(t)){for(let n of t)D(e,n);return}e.appendChild(t instanceof Node?t:document.createTextNode(String(t)))}}function O(e,t,n){if(typeof e==`function`)return e(t??{});let{children:r,...i}=t??{},a=document.createElement(e);for(let[e,t]of Object.entries(i))e.startsWith(`on`)&&typeof t==`function`?a.addEventListener(e.slice(2).toLowerCase(),t):t===!0?a.setAttribute(e,``):t!==!1&&t!=null&&a.setAttribute(e,String(t));return D(a,r),a}var k=O,A=[[/rose|pink|copper/i,`linear-gradient(205deg, #e8c2bd 11%, #fff 31%, #e1b7b2 50%)`],[/white|silver|platinum|steel/i,`linear-gradient(205deg, #dedede 11%, #fff 31%, #d8d8d8 50%)`],[/gold|brass|vermeil/i,`linear-gradient(205deg, #edce9b 11%, #fff 31%, #eac995 50%)`]],ee=e=>A.find(([t])=>t.test(e))?.[1]??A[1][1],te=e=>/material|metal|colou?r|finish/i.test(e),ne=(e,t)=>O(`button`,{class:`crs-guide-link`,type:`button`,onClick:t,children:e}),re=(e,t,n)=>{let r=document.createElement(`div`);r.className=`crs-options`;let i=[];return e.options.forEach((a,o)=>{let s=te(a.name),c=O(`span`,{class:`crs-opt-head__value`}),d=e=>O(`button`,{class:s?`crs-swatch`:`crs-size`,type:`button`,"data-value":e,onClick:()=>{u(a.name,e)},children:s?[O(`span`,{class:`crs-swatch__dot`,style:`background-image:${ee(e)}`,"aria-hidden":`true`}),O(`span`,{class:`crs-swatch__label`,children:e})]:document.createTextNode(e)}),f=/size/i.test(a.name)?document.querySelector(`#guide_desc`):null,p=s?ne(`Material Guide`,t):f?ne(f.textContent.trim()||`Size Guide`,()=>n(f)):null,h=O(`div`,{class:`crs-opt__list ${s?`crs-opt__list--swatches`:`crs-opt__list--sizes`}`,children:a.values.map(d)});r.append(k(`div`,{class:`crs-opt`,children:[k(`div`,{class:`crs-opt-head`,children:[k(`span`,{class:`crs-opt-head__label`,children:[a.name,`:`,c]}),p??document.createTextNode(``)]}),h]})),s&&h.style.setProperty(`--crs-swatch-count`,String(a.values.length)),i.push(()=>{let t=l(a.name)?.value;c.textContent=t?` ${t}`:``,h.querySelectorAll(`[data-value]`).forEach(n=>{n.classList.toggle(`is-selected`,n.dataset.value===t),n.classList.toggle(`is-unavailable`,!m(e,o,n.dataset.value))})})}),{root:r,sync:()=>i.forEach(e=>e())}},ie=`<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,ae=500,oe=`<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M1 1 13 13M13 1 1 13" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" /></svg>`,j=(t,n,r,i,a=n)=>{let o=()=>{u.classList.remove(`crs-modal--open`),document.body.classList.remove(`crs-modal-open`),document.removeEventListener(`keydown`,c),setTimeout(()=>u.remove(),ae)},s=(t,n)=>{o(),e(t,n,`click`,i)},c=e=>{e.key===`Escape`&&o()},l=O(`button`,{class:`crs-modal__close`,type:`button`,"aria-label":`Close`,onClick:()=>s(`exp_pdp_${t}_close`,`Close`)});l.innerHTML=oe;let u=k(`div`,{class:`crs-modal`,role:`dialog`,"aria-modal":`true`,"aria-label":n,children:[O(`div`,{class:`crs-modal__overlay`,onClick:()=>s(`exp_pdp_${t}_backdrop`,`Backdrop`)}),k(`div`,{class:`crs-modal__dialog`,children:[k(`div`,{class:`crs-modal__head`,children:[l,O(`h3`,{class:`crs-modal__title`,children:n})]}),O(`div`,{class:`crs-modal__body`,children:r})]})]});document.addEventListener(`keydown`,c),document.body.appendChild(u),document.body.classList.add(`crs-modal-open`),requestAnimationFrame(()=>u.classList.add(`crs-modal--open`)),u.querySelector(`.crs-modal__close`).focus(),e(`exp_pdp_${t}_open`,a,`click`,`PDP`)},se=(t,n,r)=>O(`div`,{class:`crs-accord`,children:t.map(t=>{let i=O(`span`,{class:`crs-accord__sign`,"aria-hidden":`true`});if(i.innerHTML=ie,t.open)return O(`div`,{class:`crs-accord__item`,children:k(`button`,{class:`crs-accord__head`,type:`button`,onClick:t.open,children:[O(`span`,{children:t.title}),i]})});let a=O(`div`,{class:`crs-accord__panel`,hidden:!0,children:t.body}),o=k(`button`,{class:`crs-accord__head`,type:`button`,"aria-expanded":`false`,onClick:()=>{let i=o.getAttribute(`aria-expanded`)===`true`;o.setAttribute(`aria-expanded`,String(!i)),a.hidden=i,i||e(r,t.title,`click`,n)},children:[O(`span`,{children:t.title}),i]});return k(`div`,{class:`crs-accord__item`,children:[o,a]})})}),ce=5,le=(t,n)=>{let r=t.slice(0,ce),i=t.slice(ce),a=t.length?[]:n.slice(0,1),o=t.length?n:n.slice(1),s=k(`div`,{class:`crs-details__more`,hidden:!0,children:[O(`ul`,{class:`crs-details__list`,children:i.map(e=>O(`li`,{children:e}))}),O(`div`,{class:`crs-rte`,children:o})]}),c=O(`button`,{class:`crs-details__toggle`,type:`button`,onClick:()=>{let t=!s.hidden;s.hidden=t,c.textContent=t?`Show more`:`Show less`,t||e(`exp_pdp_details_more`,`Show more`,`click`,`PDP`)},children:`Show more`});!i.length&&!o.length&&(c.hidden=!0);let l=k(`div`,{class:`crs-accord__panel`,children:[O(`ul`,{class:`crs-details__list`,children:r.map(e=>O(`li`,{children:e}))}),O(`div`,{class:`crs-rte`,children:a}),s,c]}),u=k(`button`,{class:`crs-accord__head`,type:`button`,"aria-expanded":`true`,onClick:()=>{let t=u.getAttribute(`aria-expanded`)===`true`;u.setAttribute(`aria-expanded`,String(!t)),l.hidden=t,t||e(`exp_pdp_accordion_open`,`Product details`,`click`,`PDP`)},children:[O(`span`,{children:`Product details`}),O(`span`,{class:`crs-accord__sign`,"aria-hidden":`true`})]});return O(`div`,{class:`crs-details crs-accord`,children:k(`div`,{class:`crs-accord__item`,children:[u,l]})})},ue=e=>e.split(`/`).pop().split(`?`)[0],de=(t,n)=>{let r=document.createElement(`div`);r.className=`crs-thumbs`;let i=document.createElement(`li`);i.className=`crs-created-slot`,n&&i.append(n);let a=O(`span`,{class:`crs-gallery__hint`,"aria-hidden":`true`,children:`Swipe →`}),o=()=>document.querySelector(`.product__media-list`),s=()=>Array.from(o()?.children??[]).filter(e=>!e.classList.contains(`crs-created-slot`)),c=e=>r.querySelectorAll(`.crs-thumb`).forEach((t,n)=>t.classList.toggle(`is-selected`,n===e)),l=e=>{let t=s()[e];t&&(s().forEach(e=>e.classList.remove(`is-active`)),t.classList.add(`is-active`),t.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`start`}),c(e))},u=()=>{r.textContent=``,s().forEach((t,n)=>{let i=t.querySelector(`img`);i&&r.append(O(`button`,{class:`crs-thumb`,type:`button`,"aria-label":`Show image ${n+1}`,onClick:()=>{l(n),e(`exp_pdp_gallery_thumb`,`Image ${n+1}`,`click`,`PDP`)},children:O(`img`,{src:i.currentSrc||i.src,alt:``,loading:`lazy`})}))})},d=()=>{let e=t(),n=o();if(!e||!n)return;let r=s().find(t=>{let n=t.querySelector(`img`);return n?ue(n.src).includes(ue(e)):!1});r&&r!==n.firstElementChild&&n.prepend(r)},f=()=>{let e=o();if(!(!n||!e))if(window.matchMedia(`(min-width: 750px)`).matches){n.parentElement!==i&&i.append(n);let e=s()[0];e&&e.nextElementSibling!==i&&e.after(i)}else{let e=document.querySelector(`.crs-media`);if(!e||e.firstElementChild===n)return;i.remove(),e.prepend(n)}},p=e=>{let t=!1;e.addEventListener(`scroll`,()=>{t||(t=!0,requestAnimationFrame(()=>{t=!1;let n=s().map(t=>Math.abs(t.offsetLeft-e.scrollLeft));c(n.indexOf(Math.min(...n)))}))})},m=null,h;return window.addEventListener(`resize`,f),{sync:()=>{let e=o();if(!e)return;f();let n=t();if(e===m&&n===h)return;let i=e!==m;m=e,h=n,d(),u(),l(0),a.isConnected||e.parentElement?.append(a),r.isConnected||e.parentElement?.after(r),i&&p(e)}}},fe=`<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="34" height="34" fill="#F5F5F5"/>
<g id="PDP update">
<path d="M-3728 -1988.3C-3728 -1989.4 -3727.1 -1990.3 -3726 -1990.3H3193C3194.1 -1990.3 3195 -1989.4 3195 -1988.3V3551.7C3195 3552.8 3194.1 3553.7 3193 3553.7H-3726C-3727.1 3553.7 -3728 3552.8 -3728 3551.7V-1988.3Z" fill="#F0D6D6"/>
<path d="M-3726 -1990.3V-1989.3H3193V-1990.3V-1991.3H-3726V-1990.3ZM3195 -1988.3H3194V3551.7H3195H3196V-1988.3H3195ZM3193 3553.7V3552.7H-3726V3553.7V3554.7H3193V3553.7ZM-3728 3551.7H-3727V-1988.3H-3728H-3729V3551.7H-3728ZM-3726 3553.7V3552.7C-3726.55 3552.7 -3727 3552.25 -3727 3551.7H-3728H-3729C-3729 3553.36 -3727.66 3554.7 -3726 3554.7V3553.7ZM3195 3551.7H3194C3194 3552.25 3193.55 3552.7 3193 3552.7V3553.7V3554.7C3194.66 3554.7 3196 3553.36 3196 3551.7H3195ZM3193 -1990.3V-1989.3C3193.55 -1989.3 3194 -1988.85 3194 -1988.3H3195H3196C3196 -1989.96 3194.66 -1991.3 3193 -1991.3V-1990.3ZM-3726 -1990.3V-1991.3C-3727.66 -1991.3 -3729 -1989.96 -3729 -1988.3H-3728H-3727C-3727 -1988.85 -3726.55 -1989.3 -3726 -1989.3V-1990.3Z" fill="black" fill-opacity="0.1"/>
<g id="alt" clip-path="url(#clip0_3369_82)">
<rect width="1440" height="2419.3" transform="translate(-944 -1679.3)" fill="white"/>
<rect width="1440" height="2419.3" transform="translate(-944 -1679.3)" fill="white"/>
<g id="Frame 1321314117">
<g id="Frame 1321314117_2">
<g id="Frame 1321314117_3">
<g id="Frame 1321314106">
<g id="product-form &#226;&#134;&#146; Form">
<g id="Frame 1321314117_4">
<g id="Frame 1321314117_5">
<g id="Frame 1321314118">
<rect x="-107" y="-79" width="520" height="568" rx="6" fill="#A72561" fill-opacity="0.05"/>
<g id="Frame 1321314118_2">
<g id="Frame 1321314119">
<g id="Frame 1321314117_6">
<g id="Frame 1321314117_7">
<g id="Frame 1321314118_3">
<g id="diamond-ring.svg" clip-path="url(#clip1_3369_82)">
<path id="Vector" d="M5.26758 4.88597H6.31501C6.59006 4.88597 6.81302 4.66304 6.81302 4.38792C6.81302 4.1128 6.59006 3.88988 6.31501 3.88988H5.26758C4.99252 3.88988 4.76953 4.1128 4.76953 4.38792C4.76953 4.66304 4.99252 4.88597 5.26758 4.88597Z" fill="black"/>
<path id="Vector_2" d="M6.77817 6.00046L6.03748 6.74109C5.84298 6.93559 5.84298 7.25097 6.03748 7.44538C6.1347 7.54269 6.2622 7.59131 6.38963 7.59131C6.51707 7.59131 6.64457 7.54269 6.74179 7.44545L7.48246 6.70483C7.677 6.51032 7.677 6.19496 7.48246 6.00052C7.28804 5.80602 6.97266 5.80609 6.77817 6.00046Z" fill="black"/>
<path id="Vector_3" d="M6.77524 2.774C6.87245 2.87122 6.99995 2.91982 7.12738 2.91982C7.25481 2.91982 7.38231 2.87122 7.47955 2.77393C7.67403 2.57942 7.67403 2.26406 7.47955 2.06963L6.73886 1.329C6.54435 1.13456 6.22899 1.13449 6.03455 1.32906C5.84005 1.52357 5.84005 1.83893 6.03455 2.03337L6.77524 2.774Z" fill="black"/>
<path id="Vector_4" d="M27.1875 4.38794C27.1875 4.66306 27.4104 4.88598 27.6855 4.88598H28.733C29.0081 4.88598 29.231 4.66306 29.231 4.38794C29.231 4.11282 29.0081 3.88989 28.733 3.88989H27.6855C27.4104 3.88989 27.1875 4.11288 27.1875 4.38794Z" fill="black"/>
<path id="Vector_5" d="M27.2575 7.44551C27.3548 7.54275 27.4823 7.59131 27.6098 7.59131C27.7372 7.59131 27.8647 7.54275 27.962 7.44551C28.1565 7.25097 28.1565 6.93565 27.962 6.74114L27.2214 6.00044C27.0267 5.80601 26.7115 5.80601 26.517 6.00044C26.3225 6.19501 26.3225 6.51031 26.517 6.70481L27.2575 7.44551Z" fill="black"/>
<path id="Vector_6" d="M26.873 2.91988C27.0005 2.91988 27.128 2.87127 27.2251 2.77405L27.9659 2.03342C28.1604 1.83892 28.1604 1.52355 27.9659 1.32911C27.7714 1.13467 27.4561 1.13455 27.2616 1.32905L26.5209 2.06967C26.3264 2.26418 26.3264 2.57955 26.5209 2.77398C26.6181 2.8712 26.7455 2.91988 26.873 2.91988Z" fill="black"/>
<path id="Vector_7" d="M16.9995 11.0825C11.4653 11.0825 6.96289 15.5849 6.96289 21.119C6.96289 24.1403 8.30575 26.9722 10.6472 28.8886C10.8601 29.0627 11.1739 29.0315 11.3481 28.8186C11.5222 28.6058 11.4909 28.292 11.2781 28.1178C9.16881 26.3913 7.95902 23.8403 7.95902 21.1189C7.95902 16.134 12.0145 12.0785 16.9995 12.0785C21.9844 12.0785 26.0399 16.134 26.0399 21.1189C26.0399 26.1039 21.9844 30.1595 16.9995 30.1595C15.555 30.1595 14.1731 29.8275 12.8923 29.1729C12.6475 29.0479 12.3474 29.1448 12.2221 29.3898C12.097 29.6347 12.1941 29.9347 12.439 30.06C13.8615 30.787 15.3958 31.1556 16.9995 31.1556C22.5336 31.1556 27.036 26.6532 27.036 21.119C27.036 15.5849 22.5337 11.0825 16.9995 11.0825Z" fill="black"/>
<path id="Vector_8" d="M20.703 8.78118L24.4534 4.7254C24.455 4.72361 24.4562 4.72155 24.4578 4.71969C24.6092 4.55115 24.624 4.3099 24.5119 4.12728C24.5108 4.12542 24.5101 4.12343 24.5089 4.12157L23.7686 2.94791C23.6218 2.71508 23.3142 2.64562 23.0817 2.79232C22.849 2.93908 22.7793 3.24667 22.9261 3.47929L23.1846 3.88921H20.3567L19.5911 0.996091H21.3595L21.8513 1.77557C21.998 2.00819 22.3057 2.07779 22.5382 1.93103C22.7708 1.78427 22.8405 1.47674 22.6937 1.24405L22.0554 0.232289C21.9642 0.0876561 21.805 0 21.6342 0H18.9441H15.0564H12.3664C12.1953 0 12.0363 0.0876561 11.9451 0.232289L9.4916 4.12151C9.37294 4.30977 9.39245 4.55786 9.54722 4.7254L13.2975 8.78118C7.99403 10.3758 4.11914 15.303 4.11914 21.119C4.11921 28.2215 9.89763 34 17.0002 34C24.1028 34 29.8813 28.2215 29.8813 21.1189C29.8813 15.303 26.0064 10.3758 20.703 8.78118ZM18.9563 8.38617L20.3142 4.88538H22.9487L19.604 8.50252C19.39 8.45838 19.174 8.41942 18.9563 8.38617ZM16.068 8.27125L14.7547 4.88538H19.2459L17.9325 8.27125C17.3191 8.22725 16.6821 8.22718 16.068 8.27125ZM18.5607 0.996091L19.3263 3.88921H14.6743L15.4398 0.996091H18.5607ZM12.641 0.996091H14.4094L13.6439 3.88921H10.8159L12.641 0.996091ZM11.0517 4.88531H13.6862L15.0441 8.3861C14.8264 8.41942 14.6104 8.45832 14.3964 8.50238L11.0517 4.88531ZM17.0002 33.0039C10.4468 33.0039 5.11523 27.6723 5.11523 21.1189C5.11523 14.8369 10.0145 9.67858 16.1927 9.26194C23.1396 8.79832 28.8851 14.3303 28.8851 21.1189C28.8851 27.6723 23.5536 33.0039 17.0002 33.0039Z" fill="black"/>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
<defs>
<clipPath id="clip0_3369_82">
<rect width="1440" height="2419.3" fill="white" transform="translate(-944 -1679.3)"/>
</clipPath>
<clipPath id="clip1_3369_82">
<rect width="34" height="34" fill="white"/>
</clipPath>
</defs>
</svg>
`,pe=`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" fill="#F5F5F5"/>
<g id="PDP update">
<path d="M-3725 -2049.3C-3725 -2050.4 -3724.1 -2051.3 -3723 -2051.3H3196C3197.1 -2051.3 3198 -2050.4 3198 -2049.3V3490.7C3198 3491.8 3197.1 3492.7 3196 3492.7H-3723C-3724.1 3492.7 -3725 3491.8 -3725 3490.7V-2049.3Z" fill="#F0D6D6"/>
<path d="M-3723 -2051.3V-2050.3H3196V-2051.3V-2052.3H-3723V-2051.3ZM3198 -2049.3H3197V3490.7H3198H3199V-2049.3H3198ZM3196 3492.7V3491.7H-3723V3492.7V3493.7H3196V3492.7ZM-3725 3490.7H-3724V-2049.3H-3725H-3726V3490.7H-3725ZM-3723 3492.7V3491.7C-3723.55 3491.7 -3724 3491.25 -3724 3490.7H-3725H-3726C-3726 3492.36 -3724.66 3493.7 -3723 3493.7V3492.7ZM3198 3490.7H3197C3197 3491.25 3196.55 3491.7 3196 3491.7V3492.7V3493.7C3197.66 3493.7 3199 3492.36 3199 3490.7H3198ZM3196 -2051.3V-2050.3C3196.55 -2050.3 3197 -2049.85 3197 -2049.3H3198H3199C3199 -2050.96 3197.66 -2052.3 3196 -2052.3V-2051.3ZM-3723 -2051.3V-2052.3C-3724.66 -2052.3 -3726 -2050.96 -3726 -2049.3H-3725H-3724C-3724 -2049.85 -3723.55 -2050.3 -3723 -2050.3V-2051.3Z" fill="black" fill-opacity="0.1"/>
<g id="alt" clip-path="url(#clip0_3369_82)">
<rect width="1440" height="2419.3" transform="translate(-941 -1740.3)" fill="white"/>
<rect width="1440" height="2419.3" transform="translate(-941 -1740.3)" fill="white"/>
<g id="Frame 1321314117">
<g id="Frame 1321314117_2">
<g id="Frame 1321314117_3">
<g id="Frame 1321314106">
<g id="product-form &#226;&#134;&#146; Form">
<g id="Frame 1321314117_4">
<g id="Frame 1321314117_5">
<g id="Frame 1321314118">
<rect x="-104" y="-140" width="520" height="568" rx="6" fill="#A72561" fill-opacity="0.05"/>
<g id="Frame 1321314118_2">
<g id="Frame 1321314119">
<g id="Frame 1321314117_6">
<g id="Frame 1321314117_7">
<g id="mail" clip-path="url(#clip1_3369_82)">
<g id="email.svg fill" clip-path="url(#clip2_3369_82)">
<g id="email.svg fill_2" clip-path="url(#clip3_3369_82)">
<g id="email.svg">
<g id="Clip path group">
<path id="Vector" d="M32.166 11.8224H8.83466C7.84078 11.8224 7.03223 12.6309 7.03223 13.6247V28.3603C7.03223 29.3542 7.84085 30.1627 8.83466 30.1627H32.166C33.1598 30.1627 33.9683 29.3541 33.9683 28.3603V13.6249C33.9683 12.6309 33.1597 11.8224 32.166 11.8224ZM8.83466 12.9713H32.166C32.4398 12.9713 32.6744 13.1407 32.7714 13.3801L22.6947 21.1815C21.4027 22.1818 19.5977 22.1818 18.3057 21.1815L8.22909 13.3802C8.32611 13.1408 8.56085 12.9713 8.83466 12.9713ZM32.8194 27.1891L26.3778 22.202C26.1269 22.0078 25.7661 22.0537 25.5718 22.3045C25.3776 22.5554 25.4236 22.9162 25.6744 23.1105L32.7714 28.6049C32.6743 28.8443 32.4398 29.0138 32.166 29.0138H8.83466C8.56085 29.0138 8.32611 28.8444 8.22909 28.605L15.3261 23.1105C15.5769 22.9163 15.6229 22.5555 15.4286 22.3046C15.2344 22.0538 14.8736 22.0078 14.6227 22.2021L8.18109 27.1891V14.7961L17.6023 22.09C18.4554 22.7505 19.4778 23.0807 20.5001 23.0807C21.5225 23.0807 22.5449 22.7505 23.398 22.09L32.8194 14.7961V27.1891Z" fill="#191919"/>
</g>
</g>
<path id="Vector_2" d="M4.5 5.5L5.40741 8.09259L8 9L5.40741 9.90741L4.5 12.5L3.59259 9.90741L1 9L3.59259 8.09259L4.5 5.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
<defs>
<clipPath id="clip0_3369_82">
<rect width="1440" height="2419.3" fill="white" transform="translate(-941 -1740.3)"/>
</clipPath>
<clipPath id="clip1_3369_82">
<rect width="40" height="40" fill="white"/>
</clipPath>
<clipPath id="clip2_3369_82">
<rect width="40" height="40" fill="white"/>
</clipPath>
<clipPath id="clip3_3369_82">
<rect width="40" height="40" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>
`,me=`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" fill="#F5F5F5"/>
<g id="PDP update">
<path d="M-3725 -2113.3C-3725 -2114.4 -3724.1 -2115.3 -3723 -2115.3H3196C3197.1 -2115.3 3198 -2114.4 3198 -2113.3V3426.7C3198 3427.8 3197.1 3428.7 3196 3428.7H-3723C-3724.1 3428.7 -3725 3427.8 -3725 3426.7V-2113.3Z" fill="#F0D6D6"/>
<path d="M-3723 -2115.3V-2114.3H3196V-2115.3V-2116.3H-3723V-2115.3ZM3198 -2113.3H3197V3426.7H3198H3199V-2113.3H3198ZM3196 3428.7V3427.7H-3723V3428.7V3429.7H3196V3428.7ZM-3725 3426.7H-3724V-2113.3H-3725H-3726V3426.7H-3725ZM-3723 3428.7V3427.7C-3723.55 3427.7 -3724 3427.25 -3724 3426.7H-3725H-3726C-3726 3428.36 -3724.66 3429.7 -3723 3429.7V3428.7ZM3198 3426.7H3197C3197 3427.25 3196.55 3427.7 3196 3427.7V3428.7V3429.7C3197.66 3429.7 3199 3428.36 3199 3426.7H3198ZM3196 -2115.3V-2114.3C3196.55 -2114.3 3197 -2113.85 3197 -2113.3H3198H3199C3199 -2114.96 3197.66 -2116.3 3196 -2116.3V-2115.3ZM-3723 -2115.3V-2116.3C-3724.66 -2116.3 -3726 -2114.96 -3726 -2113.3H-3725H-3724C-3724 -2113.85 -3723.55 -2114.3 -3723 -2114.3V-2115.3Z" fill="black" fill-opacity="0.1"/>
<g id="alt" clip-path="url(#clip0_3369_82)">
<rect width="1440" height="2419.3" transform="translate(-941 -1804.3)" fill="white"/>
<rect width="1440" height="2419.3" transform="translate(-941 -1804.3)" fill="white"/>
<g id="Frame 1321314117">
<g id="Frame 1321314117_2">
<g id="Frame 1321314117_3">
<g id="Frame 1321314106">
<g id="product-form &#226;&#134;&#146; Form">
<g id="Frame 1321314117_4">
<g id="Frame 1321314117_5">
<g id="Frame 1321314118">
<rect x="-104" y="-204" width="520" height="568" rx="6" fill="#A72561" fill-opacity="0.05"/>
<g id="Frame 1321314118_2">
<g id="Frame 1321314119">
<g id="Frame 1321314117_6">
<g id="Frame 1321314117_7">
<g id="diamond-on-hand" clip-path="url(#clip1_3369_82)">
<g id="diamond_on_hand.svg fill" clip-path="url(#clip2_3369_82)">
<g id="diamond_on_hand.svg" clip-path="url(#clip3_3369_82)">
<g id="Clip path group">
<mask id="mask0_3369_82" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
<g id="a">
<path id="Vector" d="M39.4331 0.425781H0.28418V39.5747H39.4331V0.425781Z" fill="white"/>
</g>
</mask>
<g mask="url(#mask0_3369_82)">
<g id="Group">
<path id="Vector_2" d="M30.4344 6.11736L27.028 1.04803C26.7661 0.658378 26.3297 0.425781 25.8603 0.425781H13.8558C13.3865 0.425781 12.95 0.658378 12.6882 1.04795L11.6576 2.58162C11.4809 2.84457 11.5508 3.20088 11.8136 3.37744C12.0767 3.55421 12.433 3.48418 12.6095 3.22138L13.5072 1.88544L18.3817 6.34537H10.5104L11.2157 5.29571C11.3923 5.03283 11.3223 4.67652 11.0594 4.49989C10.7967 4.32334 10.4403 4.39322 10.2636 4.6561L9.28188 6.11721C8.94843 6.61321 8.96545 7.2678 9.32401 7.74577L18.7325 20.2936C19.0008 20.6514 19.411 20.8565 19.8581 20.8565C20.3053 20.8565 20.7155 20.6513 20.9837 20.2936L30.3921 7.74592C30.7507 7.26788 30.7677 6.61337 30.4344 6.11736ZM29.1487 7.49237L23.0925 15.5693L25.0244 7.49237H29.1487ZM24.8517 1.57278L19.8581 6.1416L14.8644 1.57278H24.8517ZM26.2089 1.88544L29.2058 6.34537H21.3344L26.2089 1.88544ZM14.6918 7.49237L16.6237 15.5694L10.5675 7.49237H14.6918ZM20.066 19.6057C19.9981 19.6962 19.9066 19.7097 19.858 19.7097C19.8095 19.7097 19.718 19.6962 19.6501 19.6057L18.3305 17.8458C18.3305 17.8014 18.326 17.7567 18.3152 17.7117L15.871 7.49237H23.8452L21.3946 17.7381C21.3852 17.7771 21.3802 17.816 21.379 17.8545L20.066 19.6057Z" fill="#191919"/>
<path id="Vector_3" d="M16.9412 27.339L10.9873 23.6253C10.9418 23.5968 10.8952 23.5707 10.8485 23.5457L7.6116 14.6238C7.16047 13.3805 5.82407 12.7341 4.56965 13.1525C3.31032 13.5723 2.6214 14.9404 3.03391 16.2021C3.04721 16.2427 3.06481 16.2805 3.08567 16.3157C2.78885 16.4848 2.5389 16.7281 2.35784 17.0303C2.07424 17.5038 1.99724 18.0581 2.14107 18.591L3.34098 23.0364C3.42356 23.3422 3.73858 23.523 4.04405 23.4407C4.34982 23.358 4.53081 23.0433 4.4483 22.7376L3.24839 18.2921C3.18638 18.0625 3.21956 17.8236 3.34175 17.6196C3.46401 17.4156 3.65891 17.2736 3.89067 17.2198C4.31831 17.1205 4.75384 17.3573 4.90325 17.7702L7.43949 24.7774C7.27264 25.187 7.22119 25.6359 7.29466 26.0851C7.40209 26.7413 7.76192 27.3118 8.30794 27.6915L12.5737 30.6573C12.8335 30.838 13.191 30.7738 13.3718 30.5138C13.5526 30.2539 13.4884 29.8964 13.2283 29.7156L8.96262 26.7498C8.67377 26.5489 8.48334 26.247 8.42653 25.8999C8.36972 25.5527 8.4539 25.2058 8.66381 24.9235C9.061 24.3886 9.81496 24.2459 10.3802 24.5984L16.3339 28.3122C16.8019 28.6041 17.0812 29.1075 17.0812 29.659V38.1367C17.0812 38.2972 16.9507 38.4276 16.7903 38.4276H11.9507C11.7903 38.4276 11.6599 38.2972 11.6599 38.1367V34.8721C11.6599 34.0801 11.3169 33.3278 10.719 32.8083L6.44327 29.0931C6.20432 28.8855 6.03442 28.6143 5.95192 28.3087L5.08967 25.1139C5.00701 24.8081 4.69198 24.627 4.38659 24.7097C4.08082 24.7922 3.89984 25.107 3.98235 25.4127L4.8446 28.6076C4.98675 29.134 5.27951 29.6013 5.69104 29.9589L9.9667 33.6741C10.3139 33.9756 10.5129 34.4123 10.5129 34.8721V38.1367C10.5129 38.9295 11.1579 39.5745 11.9507 39.5745H16.7903C17.583 39.5745 18.2281 38.9295 18.2281 38.1367V29.6589C18.2282 28.7089 17.747 27.8417 16.9412 27.339ZM8.27567 23.7176L5.98174 17.3799C5.69555 16.5893 4.95838 16.0779 4.15125 16.0519C4.15461 15.9839 4.14643 15.9142 4.12402 15.8456C3.90687 15.1815 4.26945 14.4615 4.93223 14.2406C5.59278 14.0204 6.29592 14.3607 6.53333 15.015L9.5273 23.2674C9.08075 23.2999 8.64543 23.4534 8.27567 23.7176Z" fill="#191919"/>
<path id="Vector_4" d="M36.6443 16.3222L36.6836 16.2017C37.0962 14.94 36.4072 13.572 35.1479 13.1521C33.8931 12.7341 32.557 13.3801 32.1059 14.6235L28.8692 23.5453C28.8224 23.5703 28.7759 23.5965 28.7304 23.6249L22.7766 27.3386C21.9706 27.8413 21.4894 28.7085 21.4894 29.6585V31.7218C21.4894 32.0386 21.7461 32.2953 22.0629 32.2953C22.3796 32.2953 22.6363 32.0386 22.6363 31.7218V29.6585C22.6363 29.107 22.9156 28.6036 23.3836 28.3118L29.3373 24.598C29.9024 24.2455 30.6564 24.3881 31.0537 24.9229C31.2636 25.2054 31.3478 25.5522 31.291 25.8994C31.2342 26.2466 31.0438 26.5485 30.7549 26.7492L26.4892 29.7151C26.2291 29.8959 26.1649 30.2533 26.3457 30.5133C26.5264 30.7735 26.8839 30.8376 27.1438 30.6568L31.4096 27.6909C31.9556 27.3113 32.3154 26.7409 32.4229 26.0845C32.4963 25.6355 32.4447 25.1868 32.2779 24.7771L34.8143 17.7697C34.9636 17.3569 35.3991 17.1199 35.8268 17.2193C36.0585 17.273 36.2535 17.4151 36.3757 17.6192C36.4979 17.8232 36.531 18.062 36.4691 18.2917L33.7654 28.3081C33.683 28.6138 33.513 28.885 33.2741 29.0926L28.9984 32.8078C28.4005 33.3273 28.0575 34.0796 28.0575 34.8717V38.1364C28.0575 38.2968 27.927 38.4273 27.7666 38.4273H22.927C22.7666 38.4273 22.6362 38.2968 22.6362 38.1364V34.2211C22.6362 33.9044 22.3795 33.6476 22.0627 33.6476C21.7459 33.6476 21.4893 33.9044 21.4893 34.2211V38.1364C21.4893 38.9291 22.1342 39.5742 22.927 39.5742H27.7666C28.5594 39.5742 29.2044 38.9291 29.2044 38.1364V34.8719C29.2044 34.412 29.4036 33.9753 29.7506 33.6737L34.0263 29.9586C34.4379 29.601 34.7306 29.1337 34.8727 28.6071L37.5764 18.5907C37.7202 18.0577 37.6433 17.5035 37.3596 17.03C37.1812 16.7319 36.9357 16.4911 36.6443 16.3222ZM33.7359 17.3795L31.442 23.7171C31.0722 23.453 30.6369 23.2994 30.1904 23.2669L33.1842 15.0146C33.4216 14.3602 34.1252 14.0199 34.7852 14.2402C35.4481 14.4611 35.8106 15.1812 35.5935 15.8452L35.5256 16.0529C34.7348 16.0946 34.0172 16.6024 33.7359 17.3795Z" fill="#191919"/>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
<defs>
<clipPath id="clip0_3369_82">
<rect width="1440" height="2419.3" fill="white" transform="translate(-941 -1804.3)"/>
</clipPath>
<clipPath id="clip1_3369_82">
<rect width="40" height="40" fill="white"/>
</clipPath>
<clipPath id="clip2_3369_82">
<rect width="40" height="40" fill="white"/>
</clipPath>
<clipPath id="clip3_3369_82">
<rect width="40" height="39.1489" fill="white" transform="translate(0 0.425781)"/>
</clipPath>
</defs>
</svg>
`,he=`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" fill="#F5F5F5"/>
<g id="PDP update">
<path d="M-3725 -2177.3C-3725 -2178.4 -3724.1 -2179.3 -3723 -2179.3H3196C3197.1 -2179.3 3198 -2178.4 3198 -2177.3V3362.7C3198 3363.8 3197.1 3364.7 3196 3364.7H-3723C-3724.1 3364.7 -3725 3363.8 -3725 3362.7V-2177.3Z" fill="#F0D6D6"/>
<path d="M-3723 -2179.3V-2178.3H3196V-2179.3V-2180.3H-3723V-2179.3ZM3198 -2177.3H3197V3362.7H3198H3199V-2177.3H3198ZM3196 3364.7V3363.7H-3723V3364.7V3365.7H3196V3364.7ZM-3725 3362.7H-3724V-2177.3H-3725H-3726V3362.7H-3725ZM-3723 3364.7V3363.7C-3723.55 3363.7 -3724 3363.25 -3724 3362.7H-3725H-3726C-3726 3364.36 -3724.66 3365.7 -3723 3365.7V3364.7ZM3198 3362.7H3197C3197 3363.25 3196.55 3363.7 3196 3363.7V3364.7V3365.7C3197.66 3365.7 3199 3364.36 3199 3362.7H3198ZM3196 -2179.3V-2178.3C3196.55 -2178.3 3197 -2177.85 3197 -2177.3H3198H3199C3199 -2178.96 3197.66 -2180.3 3196 -2180.3V-2179.3ZM-3723 -2179.3V-2180.3C-3724.66 -2180.3 -3726 -2178.96 -3726 -2177.3H-3725H-3724C-3724 -2177.85 -3723.55 -2178.3 -3723 -2178.3V-2179.3Z" fill="black" fill-opacity="0.1"/>
<g id="alt" clip-path="url(#clip0_3369_82)">
<rect width="1440" height="2419.3" transform="translate(-941 -1868.3)" fill="white"/>
<rect width="1440" height="2419.3" transform="translate(-941 -1868.3)" fill="white"/>
<g id="Frame 1321314117">
<g id="Frame 1321314117_2">
<g id="Frame 1321314117_3">
<g id="Frame 1321314106">
<g id="product-form &#226;&#134;&#146; Form">
<g id="Frame 1321314117_4">
<g id="Frame 1321314117_5">
<g id="Frame 1321314118">
<rect x="-104" y="-268" width="520" height="568" rx="6" fill="#A72561" fill-opacity="0.05"/>
<g id="Frame 1321314118_2">
<g id="Frame 1321314119">
<g id="Frame 1321314117_6">
<g id="Frame 1321314117_7">
<g id="diamond-ring-on-box" clip-path="url(#clip1_3369_82)">
<g id="diamond_ring_on_box.svg fill" clip-path="url(#clip2_3369_82)">
<g id="diamond_ring_on_box.svg" clip-path="url(#clip3_3369_82)">
<path id="Vector" d="M36.2313 28.8647C36.2299 28.7781 36.2071 28.6927 36.1693 28.615L31.5006 19.3471L35.4283 7.30157C35.4476 7.24304 35.4559 7.18125 35.4573 7.11953V2.7393C35.4572 1.22883 34.2283 0 32.7179 0H7.28262C5.77222 0 4.54332 1.22883 4.54332 2.7393V7.11961C4.54456 7.18125 4.55285 7.2432 4.57222 7.30164L8.49988 19.3471L3.83129 28.615C3.79082 28.697 3.76925 28.7876 3.76855 28.879V37.2607C3.76855 38.7711 4.99738 40 6.50785 40H26.578C26.9023 40 27.1651 39.7372 27.1651 39.4129C27.1651 39.0886 26.9023 38.8257 26.578 38.8257H6.50785C5.6448 38.8257 4.94269 38.1237 4.94269 37.2606V29.466H10.5038C10.828 29.466 11.0909 29.2032 11.0909 28.8789C11.0909 28.5547 10.828 28.2918 10.5038 28.2918H5.30871L9.49464 19.9821H13.2153C12.1233 21.2517 11.4106 22.7986 11.1586 24.4574H10.3625C10.0382 24.4574 9.77534 24.7203 9.77534 25.0445C9.77534 25.3689 10.0382 25.6317 10.3625 25.6317H29.6381C29.9624 25.6317 30.2252 25.3688 30.2252 25.0445C30.2252 24.7203 29.9624 24.4574 29.6381 24.4574H28.8419C28.5899 22.7986 27.8773 21.2517 26.7852 19.9821H30.5059L34.6919 28.2918H12.8521C12.5279 28.2918 12.2651 28.5547 12.2651 28.8789C12.2651 29.2031 12.5279 29.466 12.8521 29.466H35.0579V37.2606C35.0579 38.1237 34.3558 38.8257 33.4927 38.8257H28.9264C28.602 38.8257 28.3393 39.0887 28.3393 39.4129C28.3393 39.7371 28.602 40 28.9264 40H33.4927C35.0033 40 36.232 38.7711 36.232 37.2607C36.232 37.2607 36.2313 28.8696 36.2313 28.8647ZM26.578 6.5325H5.71746V2.7393C5.71746 1.87633 6.41956 1.17414 7.28262 1.17414H32.7179C33.5808 1.17414 34.2829 1.87625 34.2829 2.7393V6.5325H28.9262C28.6019 6.5325 28.3391 6.79539 28.3391 7.11961C28.3391 7.44383 28.6019 7.70672 28.9262 7.70672H34.0611L30.4412 18.8081H25.5655C24.9132 18.2889 24.1971 17.8671 23.4376 17.551L25.6304 14.1835C25.7507 13.9985 25.7573 13.7617 25.6473 13.5703L23.9401 10.6019C23.8353 10.4197 23.6412 10.3075 23.4312 10.3075H16.5689C16.3589 10.3075 16.1647 10.4197 16.06 10.6019L14.3531 13.5703C14.2429 13.7619 14.2497 13.999 14.3705 14.184L16.5673 17.549C15.8061 17.8654 15.0884 18.2878 14.4349 18.8081H9.55916L5.93933 7.70664H26.578C26.9023 7.70664 27.1651 7.44375 27.1651 7.11953C27.1651 6.79531 26.9022 6.5325 26.578 6.5325ZM17.7162 17.1611L15.9464 14.4502H24.0557L22.2895 17.1626C21.5493 16.9671 20.7807 16.8659 20.0002 16.8659C19.2215 16.8659 18.4547 16.9665 17.7162 17.1611ZM15.8768 13.2759L16.9087 11.4817H23.0917L24.1236 13.2759H15.8768ZM15.0886 24.4575C15.6872 22.283 17.6909 20.715 20.0003 20.715C22.3097 20.715 24.3135 22.283 24.9119 24.4575H15.0886ZM26.1218 24.4575C25.4966 21.621 22.9507 19.5409 20.0003 19.5409C17.0497 19.5409 14.504 21.621 13.8788 24.4575H12.3478C12.6419 22.7829 13.4797 21.2489 14.7472 20.085C16.1834 18.7663 18.049 18.0401 20.0003 18.0401C21.9515 18.0401 23.8172 18.7663 25.2534 20.085C26.521 21.2489 27.3587 22.7829 27.6527 24.4575H26.1218Z" fill="#191919"/>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
<defs>
<clipPath id="clip0_3369_82">
<rect width="1440" height="2419.3" fill="white" transform="translate(-941 -1868.3)"/>
</clipPath>
<clipPath id="clip1_3369_82">
<rect width="40" height="40" fill="white"/>
</clipPath>
<clipPath id="clip2_3369_82">
<rect width="40" height="40" fill="white"/>
</clipPath>
<clipPath id="clip3_3369_82">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>
`,ge=`<!-- Exported from Figma node 3516:3962. The export wraps this path in the entire
     artboard — an opaque #F5F5F5 rect, the page background, the buy-box panel — which
     would paint a block over the steps, so only the path is kept, in the export's own
     7x16 viewBox. The arrowhead sits at y≈31–35 and is clipped away by that viewBox,
     exactly as the design clips it: the connector is the tapering tail alone. -->
<svg width="7" height="16" viewBox="0 0 7 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.23228 35.2291C2.35881 35.435 2.62826 35.4993 2.8341 35.3727L6.18853 33.3107C6.39438 33.1842 6.45868 32.9148 6.33214 32.7089C6.20561 32.5031 5.93616 32.4388 5.73032 32.5653L2.7486 34.3982L0.915745 31.4164C0.789213 31.2106 0.519768 31.1463 0.313923 31.2728C0.108079 31.3994 0.0437834 31.6689 0.170316 31.8747L2.23228 35.2291ZM2.21297 0.680771C1.63102 1.85536 1.35911 3.45963 1.26726 5.20233C1.17489 6.95508 1.2629 8.89359 1.43082 10.765C1.76643 14.5056 2.42693 18.0304 2.63027 19.3182L3.49456 19.1817C3.28645 17.8637 2.63446 14.3886 2.30232 10.6868C2.13636 8.83715 2.05169 6.94394 2.14105 5.24838C2.23094 3.54276 2.49517 2.08214 2.99702 1.06922L2.21297 0.680771ZM2.63027 19.3182C3.93012 27.5507 2.59074 33.1748 2.17945 34.8984L3.03055 35.1016C3.45443 33.3252 4.8197 27.5743 3.49456 19.1817L2.63027 19.3182Z" fill="#A72561" fill-opacity="0.3"/>
</svg>
`,_e=e=>{let t=document.createElement(`span`);return t.className=`crs-step__icon`,t.setAttribute(`aria-hidden`,`true`),t.innerHTML=E(e),t},M=(e,t,n)=>k(`li`,{class:`crs-step`,children:[O(`span`,{class:`crs-step__num`,"aria-hidden":`true`,children:String(e)}),_e(t),O(`span`,{class:`crs-step__text`,children:n})]}),ve=()=>{let e=document.createElement(`span`);return e.className=`crs-step__arrow`,e.setAttribute(`aria-hidden`,`true`),e.innerHTML=E(ge),e},ye=e=>{let t=O(`button`,{class:`crs-inline-link`,type:`button`,onClick:e,children:`mailing instructions`}),n=document.createDocumentFragment();n.append(`Mail your inclusions according to `,t);let r=[M(1,fe,document.createTextNode(`Pick your jewelry & place an order`)),M(2,pe,n),M(3,me,document.createTextNode(`We handcraft your jewelry with your inclusions`)),M(4,he,document.createTextNode(`Receive your jewelry that lasts a lifetime`))];r.slice(1).forEach(e=>e.prepend(ve()));let i=O(`ol`,{class:`crs-steps`});return i.append(...r),k(`section`,{class:`crs-howto`,children:[O(`h2`,{class:`crs-howto__title`,children:`How to order your piece with inclusion`}),i,O(`h2`,{class:`crs-howto__title crs-howto__title--made`,children:`How your piece is made`}),O(`p`,{children:`Your keepsake is crafted by one artisan from start to finish, and tracked every step of the way. Any unused inclusions are returned to you with your finished piece — and every item passes a 4-stage quality inspection.`}),O(`p`,{children:`Turnaround time is approximately 6–8 weeks after we receive your inclusions — a memory made by hand, to order.`})]})},be=`Mailing Instructions Popup`,xe=`FAQ Popup`,Se=`exp_pdp_mailing_accordion_open`,Ce=`exp_pdp_faq_accordion_open`,we=(e,t)=>{let n=O(`div`,{class:`crs-remote`,children:`Loading…`}),r=(window.Shopify?.routes?.root??`/`).replace(/\/$/,``)+e,i=()=>fetch(r,{cache:`no-store`}).then(e=>{if(!e.ok)throw Error(`${r} → HTTP ${e.status}`);return e.text()}).then(e=>{let n=new DOMParser().parseFromString(e,`text/html`).querySelector(`.rte`);if(!n)throw Error(`${r} → no .rte (${e.length} bytes)`);return t(n)});return i().catch(e=>(a(`PDP redesign: ${e.message} — retrying`,`warn`),i())).then(e=>{n.textContent=``,n.append(e)}).catch(e=>{a(`PDP redesign: ${e.message}`,`error`),n.textContent=``,n.append(k(`p`,{children:[`This content couldn't be loaded. `,O(`a`,{href:r,children:`Open it in a new page`}),`.`]}))}),n},N=e=>(e.querySelectorAll(`meta, style, script`).forEach(e=>e.remove()),e),Te=e=>!e.textContent.replace(/\s| /g,``),Ee={Cremations:`Cremations`,"Clothing/Fabric":`Clothing/Fabric`,"Flowers/Petals":`Flowers/Petals`,Hair:`Hair/Fur`,"Breast Milk":`Breast Milk`},De=e=>{let t=[],n=document.createElement(`div`);n.className=`crs-rte`;let r=null;Array.from(e.children).forEach(e=>{let i=e.textContent.trim().replace(/:$/,``),a=Ee[i];if(a){r=document.createElement(`div`),r.className=`crs-rte`,t.push({title:a,body:r});return}if(!Te(e)){if(/^Other Inclusions:|^Mailing more than one inclusion:/i.test(i)){r=null,n.append(N(e.cloneNode(!0)));return}r?.append(N(e.cloneNode(!0)))}});let i=document.createDocumentFragment();return i.append(k(`div`,{class:`crs-modal__intro`,children:[O(`p`,{children:`Send us a tiny amount of your keepsake, and we'll create a memorial jewelry piece to last a lifetime.`}),O(`p`,{children:`Learn more in the tabs below.`})]}),se(t,be,Se),n),i},Oe=()=>we(`/pages/sending-your-petals-cremations-breastmilk`,De),ke=e=>{let t=document.createElement(`div`);t.className=`crs-rte`;let n=[],r=null;Array.from(e.children).forEach(e=>{if(e.tagName===`H3`){r=document.createElement(`div`),r.className=`crs-rte`,n.push({title:e.textContent.trim(),body:r});return}e.tagName!==`H2`&&(Te(e)||(r??t).append(N(e.cloneNode(!0))))});let i=n.find(e=>/waterproof/i.test(e.title)),a=n.find(e=>/how much does/i.test(e.title));if(i&&a){let e=i.body;i.body=a.body,a.body=e}let o=document.createDocumentFragment();return o.append(t,se(n,xe,Ce)),o},Ae=()=>we(`/pages/faq`,ke),je=()=>j(`mailing`,`How To Send Your Inclusions`,Oe(),be,`Mailing Instructions`),Me=()=>j(`faq`,`How to Order Memorial Jewelry & FAQs`,Ae(),xe),Ne=e=>{let t=[{title:`From Order to Keepsake`,body:e.find(e=>/from order to keepsake/i.test(e.title))?.body??document.createTextNode(``)},{title:`How to send your inclusions`,open:je},{title:`How to Order Memorial Jewelry & FAQs`,open:Me}],n=document.createElement(`div`);return n.className=`crs-bottom`,n.append(se(t,`PDP`,`exp_pdp_accordion_open`)),n};function Pe(e){return typeof e==`object`&&!!e&&`constructor`in e&&e.constructor===Object}function P(e,t){e===void 0&&(e={}),t===void 0&&(t={});let n=[`__proto__`,`constructor`,`prototype`];Object.keys(t).filter(e=>n.indexOf(e)<0).forEach(n=>{e[n]===void 0?e[n]=t[n]:Pe(t[n])&&Pe(e[n])&&Object.keys(t[n]).length>0&&P(e[n],t[n])})}var Fe={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:``},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:``,host:``,hostname:``,href:``,origin:``,pathname:``,protocol:``,search:``}};function F(){let e=typeof document<`u`?document:{};return P(e,Fe),e}var Ie={document:Fe,navigator:{userAgent:``},location:{hash:``,host:``,hostname:``,href:``,origin:``,pathname:``,protocol:``,search:``},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return``}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>`u`?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>`u`||clearTimeout(e)}};function I(){let e=typeof window<`u`?window:{};return P(e,Ie),e}function Le(e){return e===void 0&&(e=``),e.trim().split(` `).filter(e=>!!e.trim())}function Re(e){let t=e;Object.keys(t).forEach(e=>{try{t[e]=null}catch{}try{delete t[e]}catch{}})}function ze(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function L(){return Date.now()}function Be(e){let t=I(),n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||=e.style,n}function Ve(e,t){t===void 0&&(t=`x`);let n=I(),r,i,a,o=Be(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(`,`).length>6&&(i=i.split(`, `).map(e=>e.replace(`,`,`.`)).join(`, `)),a=new n.WebKitCSSMatrix(i===`none`?``:i)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue(`transform`).replace(`translate(`,`matrix(1, 0, 0, 1,`),r=a.toString().split(`,`)),t===`x`&&(i=n.WebKitCSSMatrix?a.m41:parseFloat(r.length===16?r[12]:r[4])),t===`y`&&(i=n.WebKitCSSMatrix?a.m42:parseFloat(r.length===16?r[13]:r[5])),i||0}function R(e){return typeof e==`object`&&!!e&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)===`Object`}function He(e){return typeof window<`u`&&window.HTMLElement!==void 0?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function z(){let e=Object(arguments.length<=0?void 0:arguments[0]),t=[`__proto__`,`constructor`,`prototype`];for(let n=1;n<arguments.length;n+=1){let r=n<0||arguments.length<=n?void 0:arguments[n];if(r!=null&&!He(r)){let n=Object.keys(Object(r)).filter(e=>t.indexOf(e)<0);for(let t=0,i=n.length;t<i;t+=1){let i=n[t],a=Object.getOwnPropertyDescriptor(r,i);a!==void 0&&a.enumerable&&(R(e[i])&&R(r[i])?r[i].__swiper__?e[i]=r[i]:z(e[i],r[i]):!R(e[i])&&R(r[i])?(e[i]={},r[i].__swiper__?e[i]=r[i]:z(e[i],r[i])):e[i]=r[i])}}}return e}function B(e,t,n){e.style.setProperty(t,n)}function Ue(e){let{swiper:t,targetPosition:n,side:r}=e,i=I(),a=-t.translate,o=null,s,c=t.params.speed;t.wrapperEl.style.scrollSnapType=`none`,i.cancelAnimationFrame(t.cssModeFrameID);let l=n>a?`next`:`prev`,u=(e,t)=>l===`next`&&e>=t||l===`prev`&&e<=t,d=()=>{s=new Date().getTime(),o===null&&(o=s);let e=Math.max(Math.min((s-o)/c,1),0),l=.5-Math.cos(e*Math.PI)/2,f=a+l*(n-a);if(u(f,n)&&(f=n),t.wrapperEl.scrollTo({[r]:f}),u(f,n)){t.wrapperEl.style.overflow=`hidden`,t.wrapperEl.style.scrollSnapType=``,setTimeout(()=>{t.wrapperEl.style.overflow=``,t.wrapperEl.scrollTo({[r]:f})}),i.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=i.requestAnimationFrame(d)};d()}function V(e,t){t===void 0&&(t=``);let n=I(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(e=>e.matches(t)):r}function We(e,t){let n=[t];for(;n.length>0;){let t=n.shift();if(e===t)return!0;n.push(...t.children,...t.shadowRoot?t.shadowRoot.children:[],...t.assignedElements?t.assignedElements():[])}}function Ge(e,t){let n=I(),r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||=We(e,t)),r}function H(e){try{console.warn(e);return}catch{}}function U(e,t){t===void 0&&(t=[]);let n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:Le(t)),n}function Ke(e,t){let n=[];for(;e.previousElementSibling;){let r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function qe(e,t){let n=[];for(;e.nextElementSibling;){let r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function W(e,t){return I().getComputedStyle(e,null).getPropertyValue(t)}function Je(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function Ye(e,t){let n=[],r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function Xe(e,t,n){let r=I();return n?e[t===`width`?`offsetWidth`:`offsetHeight`]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t===`width`?`margin-right`:`margin-top`))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t===`width`?`margin-left`:`margin-bottom`)):e.offsetWidth}var Ze;function Qe(){let e=I(),t=F();return{smoothScroll:t.documentElement&&t.documentElement.style&&`scrollBehavior`in t.documentElement.style,touch:!!(`ontouchstart`in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function $e(){return Ze||=Qe(),Ze}var et;function tt(e){let{userAgent:t}=e===void 0?{}:e,n=$e(),r=I(),i=r.navigator.platform,a=t||r.navigator.userAgent,o={ios:!1,android:!1},s=r.screen.width,c=r.screen.height,l=a.match(/(Android);?[\s\/]+([\d.]+)?/),u=a.match(/(iPad).*OS\s([\d_]+)/),d=a.match(/(iPod)(.*OS\s([\d_]+))?/),f=!u&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=i===`Win32`,m=i===`MacIntel`;return!u&&m&&n.touch&&[`1024x1366`,`1366x1024`,`834x1194`,`1194x834`,`834x1112`,`1112x834`,`768x1024`,`1024x768`,`820x1180`,`1180x820`,`810x1080`,`1080x810`].indexOf(`${s}x${c}`)>=0&&(u=a.match(/(Version)\/([\d.]+)/),u||=[0,1,`13_0_0`],m=!1),l&&!p&&(o.os=`android`,o.android=!0),(u||f||d)&&(o.os=`ios`,o.ios=!0),o}function nt(e){return e===void 0&&(e={}),et||=tt(e),et}var rt;function it(){let e=I(),t=nt(),n=!1;function r(){let t=e.navigator.userAgent.toLowerCase();return t.indexOf(`safari`)>=0&&t.indexOf(`chrome`)<0&&t.indexOf(`android`)<0}if(r()){let t=String(e.navigator.userAgent);if(t.includes(`Version/`)){let[e,r]=t.split(`Version/`)[1].split(` `)[0].split(`.`).map(e=>Number(e));n=e<16||e===16&&r<2}}let i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),a=r();return{isSafari:n||a,needPerspectiveFix:n,need3dFix:a||i&&t.ios,isWebView:i}}function at(){return rt||=it(),rt}function ot(e){let{swiper:t,on:n,emit:r}=e,i=I(),a=null,o=null,s=()=>{!t||t.destroyed||!t.initialized||(r(`beforeResize`),r(`resize`))},c=()=>{!t||t.destroyed||!t.initialized||(a=new ResizeObserver(e=>{o=i.requestAnimationFrame(()=>{let{width:n,height:r}=t,i=n,a=r;e.forEach(e=>{let{contentBoxSize:n,contentRect:r,target:o}=e;o&&o!==t.el||(i=r?r.width:(n[0]||n).inlineSize,a=r?r.height:(n[0]||n).blockSize)}),(i!==n||a!==r)&&s()})}),a.observe(t.el))},l=()=>{o&&i.cancelAnimationFrame(o),a&&a.unobserve&&t.el&&(a.unobserve(t.el),a=null)},u=()=>{!t||t.destroyed||!t.initialized||r(`orientationchange`)};n(`init`,()=>{if(t.params.resizeObserver&&i.ResizeObserver!==void 0){c();return}i.addEventListener(`resize`,s),i.addEventListener(`orientationchange`,u)}),n(`destroy`,()=>{l(),i.removeEventListener(`resize`,s),i.removeEventListener(`orientationchange`,u)})}function st(e){let{swiper:t,extendParams:n,on:r,emit:i}=e,a=[],o=I(),s=function(e,n){n===void 0&&(n={});let r=new(o.MutationObserver||o.WebkitMutationObserver)(e=>{if(t.__preventObserver__)return;if(e.length===1){i(`observerUpdate`,e[0]);return}let n=function(){i(`observerUpdate`,e[0])};o.requestAnimationFrame?o.requestAnimationFrame(n):o.setTimeout(n,0)});r.observe(e,{attributes:n.attributes===void 0||n.attributes,childList:t.isElement||(n.childList===void 0||n).childList,characterData:n.characterData===void 0||n.characterData}),a.push(r)};n({observer:!1,observeParents:!1,observeSlideChildren:!1}),r(`init`,()=>{if(t.params.observer){if(t.params.observeParents){let e=Ye(t.hostEl);for(let t=0;t<e.length;t+=1)s(e[t])}s(t.hostEl,{childList:t.params.observeSlideChildren}),s(t.wrapperEl,{attributes:!1})}}),r(`destroy`,()=>{a.forEach(e=>{e.disconnect()}),a.splice(0,a.length)})}var ct={on(e,t,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!=`function`)return r;let i=n?`unshift`:`push`;return e.split(` `).forEach(e=>{r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][i](t)}),r},once(e,t,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!=`function`)return r;function i(){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var n=arguments.length,a=Array(n),o=0;o<n;o++)a[o]=arguments[o];t.apply(r,a)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){let n=this;if(!n.eventsListeners||n.destroyed||typeof e!=`function`)return n;let r=t?`unshift`:`push`;return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;let n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){let n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(` `).forEach(e=>{t===void 0?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach((r,i)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[e].splice(i,1)})}),n},emit(){let e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,n,r;for(var i=arguments.length,a=Array(i),o=0;o<i;o++)a[o]=arguments[o];return typeof a[0]==`string`||Array.isArray(a[0])?(t=a[0],n=a.slice(1,a.length),r=e):(t=a[0].events,n=a[0].data,r=a[0].context||e),n.unshift(r),(Array.isArray(t)?t:t.split(` `)).forEach(t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(e=>{e.apply(r,[t,...n])}),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach(e=>{e.apply(r,n)})}),e}};function lt(){let e=this,t,n,r=e.el;t=e.params.width!==void 0&&e.params.width!==null?e.params.width:r.clientWidth,n=e.params.height!==void 0&&e.params.height!==null?e.params.height:r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(W(r,`padding-left`)||0,10)-parseInt(W(r,`padding-right`)||0,10),n=n-parseInt(W(r,`padding-top`)||0,10)-parseInt(W(r,`padding-bottom`)||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function ut(){let e=this;function t(t,n){return parseFloat(t.getPropertyValue(e.getDirectionLabel(n))||0)}let n=e.params,{wrapperEl:r,slidesEl:i,size:a,rtlTranslate:o,wrongRTL:s}=e,c=e.virtual&&n.virtual.enabled,l=c?e.virtual.slides.length:e.slides.length,u=V(i,`.${e.params.slideClass}, swiper-slide`),d=c?e.virtual.slides.length:u.length,f=[],p=[],m=[],h=n.slidesOffsetBefore;typeof h==`function`&&(h=n.slidesOffsetBefore.call(e));let g=n.slidesOffsetAfter;typeof g==`function`&&(g=n.slidesOffsetAfter.call(e));let _=e.snapGrid.length,v=e.slidesGrid.length,y=n.spaceBetween,b=-h,x=0,S=0;if(a===void 0)return;typeof y==`string`&&y.indexOf(`%`)>=0?y=parseFloat(y.replace(`%`,``))/100*a:typeof y==`string`&&(y=parseFloat(y)),e.virtualSize=-y,u.forEach(e=>{o?e.style.marginLeft=``:e.style.marginRight=``,e.style.marginBottom=``,e.style.marginTop=``}),n.centeredSlides&&n.cssMode&&(B(r,`--swiper-centered-offset-before`,``),B(r,`--swiper-centered-offset-after`,``));let C=n.grid&&n.grid.rows>1&&e.grid;C?e.grid.initSlides(u):e.grid&&e.grid.unsetSlides();let w,T=n.slidesPerView===`auto`&&n.breakpoints&&Object.keys(n.breakpoints).filter(e=>n.breakpoints[e].slidesPerView!==void 0).length>0;for(let r=0;r<d;r+=1){w=0;let i;if(u[r]&&(i=u[r]),C&&e.grid.updateSlide(r,i,u),!(u[r]&&W(i,`display`)===`none`)){if(n.slidesPerView===`auto`){T&&(u[r].style[e.getDirectionLabel(`width`)]=``);let a=getComputedStyle(i),o=i.style.transform,s=i.style.webkitTransform;if(o&&(i.style.transform=`none`),s&&(i.style.webkitTransform=`none`),n.roundLengths)w=e.isHorizontal()?Xe(i,`width`,!0):Xe(i,`height`,!0);else{let e=t(a,`width`),n=t(a,`padding-left`),r=t(a,`padding-right`),o=t(a,`margin-left`),s=t(a,`margin-right`),c=a.getPropertyValue(`box-sizing`);if(c&&c===`border-box`)w=e+o+s;else{let{clientWidth:t,offsetWidth:a}=i;w=e+n+r+o+s+(a-t)}}o&&(i.style.transform=o),s&&(i.style.webkitTransform=s),n.roundLengths&&(w=Math.floor(w))}else w=(a-(n.slidesPerView-1)*y)/n.slidesPerView,n.roundLengths&&(w=Math.floor(w)),u[r]&&(u[r].style[e.getDirectionLabel(`width`)]=`${w}px`);u[r]&&(u[r].swiperSlideSize=w),m.push(w),n.centeredSlides?(b=b+w/2+x/2+y,x===0&&r!==0&&(b=b-a/2-y),r===0&&(b=b-a/2-y),Math.abs(b)<1/1e3&&(b=0),n.roundLengths&&(b=Math.floor(b)),S%n.slidesPerGroup===0&&f.push(b),p.push(b)):(n.roundLengths&&(b=Math.floor(b)),(S-Math.min(e.params.slidesPerGroupSkip,S))%e.params.slidesPerGroup===0&&f.push(b),p.push(b),b=b+w+y),e.virtualSize+=w+y,x=w,S+=1}}if(e.virtualSize=Math.max(e.virtualSize,a)+g,o&&s&&(n.effect===`slide`||n.effect===`coverflow`)&&(r.style.width=`${e.virtualSize+y}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel(`width`)]=`${e.virtualSize+y}px`),C&&e.grid.updateWrapperSize(w,f),!n.centeredSlides){let t=[];for(let r=0;r<f.length;r+=1){let i=f[r];n.roundLengths&&(i=Math.floor(i)),f[r]<=e.virtualSize-a&&t.push(i)}f=t,Math.floor(e.virtualSize-a)-Math.floor(f[f.length-1])>1&&f.push(e.virtualSize-a)}if(c&&n.loop){let t=m[0]+y;if(n.slidesPerGroup>1){let r=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),i=t*n.slidesPerGroup;for(let e=0;e<r;e+=1)f.push(f[f.length-1]+i)}for(let r=0;r<e.virtual.slidesBefore+e.virtual.slidesAfter;r+=1)n.slidesPerGroup===1&&f.push(f[f.length-1]+t),p.push(p[p.length-1]+t),e.virtualSize+=t}if(f.length===0&&(f=[0]),y!==0){let t=e.isHorizontal()&&o?`marginLeft`:e.getDirectionLabel(`marginRight`);u.filter((e,t)=>!n.cssMode||n.loop?!0:t!==u.length-1).forEach(e=>{e.style[t]=`${y}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let e=0;m.forEach(t=>{e+=t+(y||0)}),e-=y;let t=e>a?e-a:0;f=f.map(e=>e<=0?-h:e>t?t+g:e)}if(n.centerInsufficientSlides){let e=0;m.forEach(t=>{e+=t+(y||0)}),e-=y;let t=(n.slidesOffsetBefore||0)+(n.slidesOffsetAfter||0);if(e+t<a){let n=(a-e-t)/2;f.forEach((e,t)=>{f[t]=e-n}),p.forEach((e,t)=>{p[t]=e+n})}}if(Object.assign(e,{slides:u,snapGrid:f,slidesGrid:p,slidesSizesGrid:m}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){B(r,`--swiper-centered-offset-before`,`${-f[0]}px`),B(r,`--swiper-centered-offset-after`,`${e.size/2-m[m.length-1]/2}px`);let t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(e=>e+t),e.slidesGrid=e.slidesGrid.map(e=>e+n)}if(d!==l&&e.emit(`slidesLengthChange`),f.length!==_&&(e.params.watchOverflow&&e.checkOverflow(),e.emit(`snapGridLengthChange`)),p.length!==v&&e.emit(`slidesGridLengthChange`),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit(`slidesUpdated`),!c&&!n.cssMode&&(n.effect===`slide`||n.effect===`fade`)){let t=`${n.containerModifierClass}backface-hidden`,r=e.el.classList.contains(t);d<=n.maxBackfaceHiddenSlides?r||e.el.classList.add(t):r&&e.el.classList.remove(t)}}function dt(e){let t=this,n=[],r=t.virtual&&t.params.virtual.enabled,i=0,a;typeof e==`number`?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);let o=e=>r?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if(t.params.slidesPerView!==`auto`&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(e=>{n.push(e)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){let e=t.activeIndex+a;if(e>t.slides.length&&!r)break;n.push(o(e))}else n.push(o(t.activeIndex));for(a=0;a<n.length;a+=1)if(n[a]!==void 0){let e=n[a].offsetHeight;i=e>i?e:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function ft(){let e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}var pt=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function mt(e){e===void 0&&(e=this&&this.translate||0);let t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:a}=t;if(r.length===0)return;r[0].swiperSlideOffset===void 0&&t.updateSlidesOffset();let o=-e;i&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s==`string`&&s.indexOf(`%`)>=0?s=parseFloat(s.replace(`%`,``))/100*t.size:typeof s==`string`&&(s=parseFloat(s));for(let e=0;e<r.length;e+=1){let c=r[e],l=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(l-=r[0].swiperSlideOffset);let u=(o+(n.centeredSlides?t.minTranslate():0)-l)/(c.swiperSlideSize+s),d=(o-a[0]+(n.centeredSlides?t.minTranslate():0)-l)/(c.swiperSlideSize+s),f=-(o-l),p=f+t.slidesSizesGrid[e],m=f>=0&&f<=t.size-t.slidesSizesGrid[e],h=f>=0&&f<t.size-1||p>1&&p<=t.size||f<=0&&p>=t.size;h&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(e)),pt(c,h,n.slideVisibleClass),pt(c,m,n.slideFullyVisibleClass),c.progress=i?-u:u,c.originalProgress=i?-d:d}}function ht(e){let t=this;e===void 0&&(e=t&&t.translate&&t.translate*(t.rtlTranslate?-1:1)||0);let n=t.params,r=t.maxTranslate()-t.minTranslate(),{progress:i,isBeginning:a,isEnd:o,progressLoop:s}=t,c=a,l=o;if(r===0)i=0,a=!0,o=!0;else{i=(e-t.minTranslate())/r;let n=Math.abs(e-t.minTranslate())<1,s=Math.abs(e-t.maxTranslate())<1;a=n||i<=0,o=s||i>=1,n&&(i=0),s&&(i=1)}if(n.loop){let n=t.getSlideIndexByData(0),r=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[n],a=t.slidesGrid[r],o=t.slidesGrid[t.slidesGrid.length-1],c=Math.abs(e);s=c>=i?(c-i)/o:(c+o-a)/o,s>1&&--s}Object.assign(t,{progress:i,progressLoop:s,isBeginning:a,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!c&&t.emit(`reachBeginning toEdge`),o&&!l&&t.emit(`reachEnd toEdge`),(c&&!a||l&&!o)&&t.emit(`fromEdge`),t.emit(`progress`,i)}var G=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function gt(){let e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,a=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,s=e=>V(r,`.${n.slideClass}${e}, swiper-slide${e}`)[0],c,l,u;if(a)if(n.loop){let t=i-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),c=s(`[data-swiper-slide-index="${t}"]`)}else c=s(`[data-swiper-slide-index="${i}"]`);else o?(c=t.find(e=>e.column===i),u=t.find(e=>e.column===i+1),l=t.find(e=>e.column===i-1)):c=t[i];c&&(o||(u=qe(c,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),l=Ke(c,`.${n.slideClass}, swiper-slide`)[0])),t.forEach(e=>{G(e,e===c,n.slideActiveClass),G(e,e===u,n.slideNextClass),G(e,e===l,n.slidePrevClass)}),e.emitSlidesClasses()}var K=(e,t)=>{if(!e||e.destroyed||!e.params)return;let n=t.closest(e.isElement?`swiper-slide`:`.${e.params.slideClass}`);if(n){let t=n.querySelector(`.${e.params.lazyPreloaderClass}`);!t&&e.isElement&&(n.shadowRoot?t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),t&&t.remove())})),t&&t.remove()}},q=(e,t)=>{if(!e.slides[t])return;let n=e.slides[t].querySelector(`[loading="lazy"]`);n&&n.removeAttribute(`loading`)},J=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext,n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);let r=e.params.slidesPerView===`auto`?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){let n=i,a=[n-t];a.push(...Array.from({length:t}).map((e,t)=>n+r+t)),e.slides.forEach((t,n)=>{a.includes(t.column)&&q(e,n)});return}let a=i+r-1;if(e.params.rewind||e.params.loop)for(let r=i-t;r<=a+t;r+=1){let t=(r%n+n)%n;(t<i||t>a)&&q(e,t)}else for(let r=Math.max(i-t,0);r<=Math.min(a+t,n-1);r+=1)r!==i&&(r>a||r<i)&&q(e,r)};function _t(e){let{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate,i;for(let e=0;e<t.length;e+=1)t[e+1]===void 0?r>=t[e]&&(i=e):r>=t[e]&&r<t[e+1]-(t[e+1]-t[e])/2?i=e:r>=t[e]&&r<t[e+1]&&(i=e+1);return n.normalizeSlideIndex&&(i<0||i===void 0)&&(i=0),i}function vt(e){let t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:a,realIndex:o,snapIndex:s}=t,c=e,l,u=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(c===void 0&&(c=_t(t)),r.indexOf(n)>=0)l=r.indexOf(n);else{let e=Math.min(i.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/i.slidesPerGroup)}if(l>=r.length&&(l=r.length-1),c===a&&!t.params.loop){l!==s&&(t.snapIndex=l,t.emit(`snapIndexChange`));return}if(c===a&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(c);return}let d=t.grid&&i.grid&&i.grid.rows>1,f;if(t.virtual&&i.virtual.enabled&&i.loop)f=u(c);else if(d){let e=t.slides.find(e=>e.column===c),n=parseInt(e.getAttribute(`data-swiper-slide-index`),10);Number.isNaN(n)&&(n=Math.max(t.slides.indexOf(e),0)),f=Math.floor(n/i.grid.rows)}else if(t.slides[c]){let e=t.slides[c].getAttribute(`data-swiper-slide-index`);f=e?parseInt(e,10):c}else f=c;Object.assign(t,{previousSnapIndex:s,snapIndex:l,previousRealIndex:o,realIndex:f,previousIndex:a,activeIndex:c}),t.initialized&&J(t),t.emit(`activeIndexChange`),t.emit(`snapIndexChange`),(t.initialized||t.params.runCallbacksOnInit)&&(o!==f&&t.emit(`realIndexChange`),t.emit(`slideChange`))}function yt(e,t){let n=this,r=n.params,i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(e=>{!i&&e.matches&&e.matches(`.${r.slideClass}, swiper-slide`)&&(i=e)});let a=!1,o;if(i){for(let e=0;e<n.slides.length;e+=1)if(n.slides[e]===i){a=!0,o=e;break}}if(i&&a)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute(`data-swiper-slide-index`),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var bt={updateSize:lt,updateSlides:ut,updateAutoHeight:dt,updateSlidesOffset:ft,updateSlidesProgress:mt,updateProgress:ht,updateSlidesClasses:gt,updateActiveIndex:vt,updateClickedSlide:yt};function xt(e){e===void 0&&(e=this.isHorizontal()?`x`:`y`);let t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:a}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=Ve(a,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function St(e,t){let n=this,{rtlTranslate:r,params:i,wrapperEl:a,progress:o}=n,s=0,c=0;n.isHorizontal()?s=r?-e:e:c=e,i.roundLengths&&(s=Math.floor(s),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:c,i.cssMode?a[n.isHorizontal()?`scrollLeft`:`scrollTop`]=n.isHorizontal()?-s:-c:i.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),a.style.transform=`translate3d(${s}px, ${c}px, 0px)`);let l,u=n.maxTranslate()-n.minTranslate();l=u===0?0:(e-n.minTranslate())/u,l!==o&&n.updateProgress(e),n.emit(`setTranslate`,n.translate,t)}function Ct(){return-this.snapGrid[0]}function wt(){return-this.snapGrid[this.snapGrid.length-1]}function Tt(e,t,n,r,i){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),n===void 0&&(n=!0),r===void 0&&(r=!0);let a=this,{params:o,wrapperEl:s}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;let c=a.minTranslate(),l=a.maxTranslate(),u;if(u=r&&e>c?c:r&&e<l?l:e,a.updateProgress(u),o.cssMode){let e=a.isHorizontal();if(t===0)s[e?`scrollLeft`:`scrollTop`]=-u;else{if(!a.support.smoothScroll)return Ue({swiper:a,targetPosition:-u,side:e?`left`:`top`}),!0;s.scrollTo({[e?`left`:`top`]:-u,behavior:`smooth`})}return!0}return t===0?(a.setTransition(0),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionEnd`))):(a.setTransition(t),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionStart`)),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||=function(e){!a||a.destroyed||e.target===this&&(a.wrapperEl.removeEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,n&&a.emit(`transitionEnd`))},a.wrapperEl.addEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd))),!0}var Et={getTranslate:xt,setTranslate:St,minTranslate:Ct,maxTranslate:wt,translateTo:Tt};function Dt(e,t){let n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?`0ms`:``),n.emit(`setTransition`,e,t)}function Ot(e){let{swiper:t,runCallbacks:n,direction:r,step:i}=e,{activeIndex:a,previousIndex:o}=t,s=r;s||=a>o?`next`:a<o?`prev`:`reset`,t.emit(`transition${i}`),n&&s===`reset`?t.emit(`slideResetTransition${i}`):n&&a!==o&&(t.emit(`slideChangeTransition${i}`),t.emit(s===`next`?`slideNextTransition${i}`:`slidePrevTransition${i}`))}function kt(e,t){e===void 0&&(e=!0);let n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Ot({swiper:n,runCallbacks:e,direction:t,step:`Start`}))}function At(e,t){e===void 0&&(e=!0);let n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Ot({swiper:n,runCallbacks:e,direction:t,step:`End`}))}var jt={setTransition:Dt,transitionStart:kt,transitionEnd:At};function Mt(e,t,n,r,i){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e==`string`&&(e=parseInt(e,10));let a=this,o=e;o<0&&(o=0);let{params:s,snapGrid:c,slidesGrid:l,previousIndex:u,activeIndex:d,rtlTranslate:f,wrapperEl:p,enabled:m}=a;if(!m&&!r&&!i||a.destroyed||a.animating&&s.preventInteractionOnTransition)return!1;t===void 0&&(t=a.params.speed);let h=Math.min(a.params.slidesPerGroupSkip,o),g=h+Math.floor((o-h)/a.params.slidesPerGroup);g>=c.length&&(g=c.length-1);let _=-c[g];if(s.normalizeSlideIndex)for(let e=0;e<l.length;e+=1){let t=-Math.floor(_*100),n=Math.floor(l[e]*100),r=Math.floor(l[e+1]*100);l[e+1]===void 0?t>=n&&(o=e):t>=n&&t<r-(r-n)/2?o=e:t>=n&&t<r&&(o=e+1)}if(a.initialized&&o!==d&&(!a.allowSlideNext&&(f?_>a.translate&&_>a.minTranslate():_<a.translate&&_<a.minTranslate())||!a.allowSlidePrev&&_>a.translate&&_>a.maxTranslate()&&(d||0)!==o))return!1;o!==(u||0)&&n&&a.emit(`beforeSlideChangeStart`),a.updateProgress(_);let v;v=o>d?`next`:o<d?`prev`:`reset`;let y=a.virtual&&a.params.virtual.enabled;if(!(y&&i)&&(f&&-_===a.translate||!f&&_===a.translate))return a.updateActiveIndex(o),s.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),s.effect!==`slide`&&a.setTranslate(_),v!==`reset`&&(a.transitionStart(n,v),a.transitionEnd(n,v)),!1;if(s.cssMode){let e=a.isHorizontal(),n=f?_:-_;if(t===0)y&&(a.wrapperEl.style.scrollSnapType=`none`,a._immediateVirtual=!0),y&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[e?`scrollLeft`:`scrollTop`]=n})):p[e?`scrollLeft`:`scrollTop`]=n,y&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType=``,a._immediateVirtual=!1});else{if(!a.support.smoothScroll)return Ue({swiper:a,targetPosition:n,side:e?`left`:`top`}),!0;p.scrollTo({[e?`left`:`top`]:n,behavior:`smooth`})}return!0}let b=at().isSafari;return y&&!i&&b&&a.isElement&&a.virtual.update(!1,!1,o),a.setTransition(t),a.setTranslate(_),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit(`beforeTransitionStart`,t,r),a.transitionStart(n,v),t===0?a.transitionEnd(n,v):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||=function(e){!a||a.destroyed||e.target===this&&(a.wrapperEl.removeEventListener(`transitionend`,a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,v))},a.wrapperEl.addEventListener(`transitionend`,a.onSlideToWrapperTransitionEnd)),!0}function Nt(e,t,n,r){e===void 0&&(e=0),n===void 0&&(n=!0),typeof e==`string`&&(e=parseInt(e,10));let i=this;if(i.destroyed)return;t===void 0&&(t=i.params.speed);let a=i.grid&&i.params.grid&&i.params.grid.rows>1,o=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o+=i.virtual.slidesBefore;else{let e;if(a){let t=o*i.params.grid.rows;e=i.slides.find(e=>e.getAttribute(`data-swiper-slide-index`)*1===t).column}else e=i.getSlideIndexByData(o);let t=a?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:n}=i.params,s=i.params.slidesPerView;s===`auto`?s=i.slidesPerViewDynamic():(s=Math.ceil(parseFloat(i.params.slidesPerView,10)),n&&s%2==0&&(s+=1));let c=t-e<s;if(n&&(c||=e<Math.ceil(s/2)),r&&n&&i.params.slidesPerView!==`auto`&&!a&&(c=!1),c){let r=n?e<i.activeIndex?`prev`:`next`:e-i.activeIndex-1<i.params.slidesPerView?`next`:`prev`;i.loopFix({direction:r,slideTo:!0,activeSlideIndex:r===`next`?e+1:e-t+1,slideRealIndex:r===`next`?i.realIndex:void 0})}if(a){let e=o*i.params.grid.rows;o=i.slides.find(t=>t.getAttribute(`data-swiper-slide-index`)*1===e).column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}function Pt(e,t,n){t===void 0&&(t=!0);let r=this,{enabled:i,params:a,animating:o}=r;if(!i||r.destroyed)return r;e===void 0&&(e=r.params.speed);let s=a.slidesPerGroup;a.slidesPerView===`auto`&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic(`current`,!0),1));let c=r.activeIndex<a.slidesPerGroupSkip?1:s,l=r.virtual&&a.virtual.enabled;if(a.loop){if(o&&!l&&a.loopPreventsSliding)return!1;if(r.loopFix({direction:`next`}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+c,e,t,n)}),!0}return r.slideTo(a.rewind&&r.isEnd?0:r.activeIndex+c,e,t,n)}function Ft(e,t,n){t===void 0&&(t=!0);let r=this,{params:i,snapGrid:a,slidesGrid:o,rtlTranslate:s,enabled:c,animating:l}=r;if(!c||r.destroyed)return r;e===void 0&&(e=r.params.speed);let u=r.virtual&&i.virtual.enabled;if(i.loop){if(l&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:`prev`}),r._clientLeft=r.wrapperEl.clientLeft}let d=s?r.translate:-r.translate;function f(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}let p=f(d),m=a.map(e=>f(e)),h=i.freeMode&&i.freeMode.enabled,g=a[m.indexOf(p)-1];if(g===void 0&&(i.cssMode||h)){let e;a.forEach((t,n)=>{p>=t&&(e=n)}),e!==void 0&&(g=h?a[e]:a[e>0?e-1:e])}let _=0;if(g!==void 0&&(_=o.indexOf(g),_<0&&(_=r.activeIndex-1),i.slidesPerView===`auto`&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(_=_-r.slidesPerViewDynamic(`previous`,!0)+1,_=Math.max(_,0))),i.rewind&&r.isBeginning){let i=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(i,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(_,e,t,n)}),!0;return r.slideTo(_,e,t,n)}function It(e,t,n){t===void 0&&(t=!0);let r=this;if(!r.destroyed)return e===void 0&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function Lt(e,t,n,r){t===void 0&&(t=!0),r===void 0&&(r=.5);let i=this;if(i.destroyed)return;e===void 0&&(e=i.params.speed);let a=i.activeIndex,o=Math.min(i.params.slidesPerGroupSkip,a),s=o+Math.floor((a-o)/i.params.slidesPerGroup),c=i.rtlTranslate?i.translate:-i.translate;if(c>=i.snapGrid[s]){let e=i.snapGrid[s],t=i.snapGrid[s+1];c-e>(t-e)*r&&(a+=i.params.slidesPerGroup)}else{let e=i.snapGrid[s-1],t=i.snapGrid[s];c-e<=(t-e)*r&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,e,t,n)}function Rt(){let e=this;if(e.destroyed)return;let{params:t,slidesEl:n}=e,r=t.slidesPerView===`auto`?e.slidesPerViewDynamic():t.slidesPerView,i=e.getSlideIndexWhenGrid(e.clickedIndex),a,o=e.isElement?`swiper-slide`:`.${t.slideClass}`,s=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;a=parseInt(e.clickedSlide.getAttribute(`data-swiper-slide-index`),10),t.centeredSlides?e.slideToLoop(a):i>(s?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(V(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),ze(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var zt={slideTo:Mt,slideToLoop:Nt,slideNext:Pt,slidePrev:Ft,slideReset:It,slideToClosest:Lt,slideToClickedSlide:Rt};function Bt(e,t){let n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;let a=()=>{V(i,`.${r.slideClass}, swiper-slide`).forEach((e,t)=>{e.setAttribute(`data-swiper-slide-index`,t)})},o=()=>{let e=V(i,`.${r.slideBlankClass}`);e.forEach(e=>{e.remove()}),e.length>0&&(n.recalcSlides(),n.updateSlides())},s=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||s)&&o();let c=r.slidesPerGroup*(s?r.grid.rows:1),l=n.slides.length%c!==0,u=s&&n.slides.length%r.grid.rows!==0,d=e=>{for(let t=0;t<e;t+=1){let e=n.isElement?U(`swiper-slide`,[r.slideBlankClass]):U(`div`,[r.slideClass,r.slideBlankClass]);n.slidesEl.append(e)}};l?(r.loopAddBlankSlides?(d(c-n.slides.length%c),n.recalcSlides(),n.updateSlides()):H(`Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`),a()):(u&&(r.loopAddBlankSlides?(d(r.grid.rows-n.slides.length%r.grid.rows),n.recalcSlides(),n.updateSlides()):H(`Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`)),a()),n.loopFix({slideRealIndex:e,direction:r.centeredSlides?void 0:`next`,initial:t})}function Vt(e){let{slideRealIndex:t,slideTo:n=!0,direction:r,setTranslate:i,activeSlideIndex:a,initial:o,byController:s,byMousewheel:c}=e===void 0?{}:e,l=this;if(!l.params.loop)return;l.emit(`beforeLoopFix`);let{slides:u,allowSlidePrev:d,allowSlideNext:f,slidesEl:p,params:m}=l,{centeredSlides:h,initialSlide:g}=m;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&m.virtual.enabled){n&&(!m.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):m.centeredSlides&&l.snapIndex<m.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=f,l.emit(`loopFix`);return}let _=m.slidesPerView;_===`auto`?_=l.slidesPerViewDynamic():(_=Math.ceil(parseFloat(m.slidesPerView,10)),h&&_%2==0&&(_+=1));let v=m.slidesPerGroupAuto?_:m.slidesPerGroup,y=h?Math.max(v,Math.ceil(_/2)):v;y%v!==0&&(y+=v-y%v),y+=m.loopAdditionalSlides,l.loopedSlides=y;let b=l.grid&&m.grid&&m.grid.rows>1;u.length<_+y||l.params.effect===`cards`&&u.length<_+y*2?H(`Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters`):b&&m.grid.fill===`row`&&H("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");let x=[],S=[],C=b?Math.ceil(u.length/m.grid.rows):u.length,w=o&&C-g<_&&!h,T=w?g:l.activeIndex;a===void 0?a=l.getSlideIndex(u.find(e=>e.classList.contains(m.slideActiveClass))):T=a;let E=r===`next`||!r,D=r===`prev`||!r,O=0,k=0,A=(b?u[a].column:a)+(h&&i===void 0?-_/2+.5:0);if(A<y){O=Math.max(y-A,v);for(let e=0;e<y-A;e+=1){let t=e-Math.floor(e/C)*C;if(b){let e=C-t-1;for(let t=u.length-1;t>=0;--t)u[t].column===e&&x.push(t)}else x.push(C-t-1)}}else if(A+_>C-y){k=Math.max(A-(C-y*2),v),w&&(k=Math.max(k,_-C+g+1));for(let e=0;e<k;e+=1){let t=e-Math.floor(e/C)*C;b?u.forEach((e,n)=>{e.column===t&&S.push(n)}):S.push(t)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),l.params.effect===`cards`&&u.length<_+y*2&&(S.includes(a)&&S.splice(S.indexOf(a),1),x.includes(a)&&x.splice(x.indexOf(a),1)),D&&x.forEach(e=>{u[e].swiperLoopMoveDOM=!0,p.prepend(u[e]),u[e].swiperLoopMoveDOM=!1}),E&&S.forEach(e=>{u[e].swiperLoopMoveDOM=!0,p.append(u[e]),u[e].swiperLoopMoveDOM=!1}),l.recalcSlides(),m.slidesPerView===`auto`?l.updateSlides():b&&(x.length>0&&D||S.length>0&&E)&&l.slides.forEach((e,t)=>{l.grid.updateSlide(t,e,l.slides)}),m.watchSlidesProgress&&l.updateSlidesOffset(),n){if(x.length>0&&D){if(t===void 0){let e=l.slidesGrid[T],t=l.slidesGrid[T+O]-e;c?l.setTranslate(l.translate-t):(l.slideTo(T+Math.ceil(O),0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-t,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-t))}else if(i){let e=b?x.length/m.grid.rows:x.length;l.slideTo(l.activeIndex+e,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(S.length>0&&E)if(t===void 0){let e=l.slidesGrid[T],t=l.slidesGrid[T-k]-e;c?l.setTranslate(l.translate-t):(l.slideTo(T-k,0,!1,!0),i&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-t,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-t))}else{let e=b?S.length/m.grid.rows:S.length;l.slideTo(l.activeIndex-e,0,!1,!0)}}if(l.allowSlidePrev=d,l.allowSlideNext=f,l.controller&&l.controller.control&&!s){let e={slideRealIndex:t,direction:r,setTranslate:i,activeSlideIndex:a,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(t=>{!t.destroyed&&t.params.loop&&t.loopFix({...e,slideTo:t.params.slidesPerView===m.slidesPerView&&n})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...e,slideTo:l.controller.control.params.slidesPerView===m.slidesPerView&&n})}l.emit(`loopFix`)}function Ht(){let e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();let r=[];e.slides.forEach(e=>{let t=e.swiperSlideIndex===void 0?e.getAttribute(`data-swiper-slide-index`)*1:e.swiperSlideIndex;r[t]=e}),e.slides.forEach(e=>{e.removeAttribute(`data-swiper-slide-index`)}),r.forEach(e=>{n.append(e)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Ut={loopCreate:Bt,loopFix:Vt,loopDestroy:Ht};function Wt(e){let t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;let n=t.params.touchEventsTarget===`container`?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor=`move`,n.style.cursor=e?`grabbing`:`grab`,t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function Gt(){let e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget===`container`?`el`:`wrapperEl`].style.cursor=``,e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Kt={setGrabCursor:Wt,unsetGrabCursor:Gt};function qt(e,t){t===void 0&&(t=this);function n(t){if(!t||t===F()||t===I())return null;t.assignedSlot&&(t=t.assignedSlot);let r=t.closest(e);return!r&&!t.getRootNode?null:r||n(t.getRootNode().host)}return n(t)}function Jt(e,t,n){let r=I(),{params:i}=e,a=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return a&&(n<=o||n>=r.innerWidth-o)?a===`prevent`?(t.preventDefault(),!0):!1:!0}function Yt(e){let t=this,n=F(),r=e;r.originalEvent&&(r=r.originalEvent);let i=t.touchEventsData;if(r.type===`pointerdown`){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type===`touchstart`&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type===`touchstart`){Jt(t,r,r.targetTouches[0].pageX);return}let{params:a,touches:o,enabled:s}=t;if(!s||!a.simulateTouch&&r.pointerType===`mouse`||t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let c=r.target;if(a.touchEventsTarget===`wrapper`&&!Ge(c,t.wrapperEl)||`which`in r&&r.which===3||`button`in r&&r.button>0||i.isTouched&&i.isMoved)return;let l=!!a.noSwipingClass&&a.noSwipingClass!==``,u=r.composedPath?r.composedPath():r.path;l&&r.target&&r.target.shadowRoot&&u&&(c=u[0]);let d=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`;if(a.noSwiping&&(r.target&&r.target.shadowRoot?qt(d,c):c.closest(d))){t.allowClick=!0;return}if(a.swipeHandler&&!c.closest(a.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;let f=o.currentX,p=o.currentY;if(!Jt(t,r,f))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=f,o.startY=p,i.touchStartTime=L(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(i.allowThresholdMove=!1);let m=!0;c.matches(i.focusableElements)&&(m=!1,c.nodeName===`SELECT`&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==c&&(r.pointerType===`mouse`||r.pointerType!==`mouse`&&!c.matches(i.focusableElements))&&n.activeElement.blur(),(a.touchStartForcePreventDefault||m&&t.allowTouchMove&&a.touchStartPreventDefault)&&!c.isContentEditable&&r.preventDefault(),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit(`touchStart`,r)}function Xt(e){let t=F(),n=this,r=n.touchEventsData,{params:i,touches:a,rtlTranslate:o,enabled:s}=n;if(!s||!i.simulateTouch&&e.pointerType===`mouse`)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),c.type===`pointermove`&&(r.touchId!==null||c.pointerId!==r.pointerId))return;let l;if(c.type===`touchmove`){if(l=[...c.changedTouches].find(e=>e.identifier===r.touchId),!l||l.identifier!==r.touchId)return}else l=c;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit(`touchMoveOpposite`,c);return}let u=l.pageX,d=l.pageY;if(c.preventedByNestedSwiper){a.startX=u,a.startY=d;return}if(!n.allowTouchMove){c.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(a,{startX:u,startY:d,currentX:u,currentY:d}),r.touchStartTime=L());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(d<a.startY&&n.translate<=n.maxTranslate()||d>a.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(o&&(u>a.startX&&-n.translate<=n.maxTranslate()||u<a.startX&&-n.translate>=n.minTranslate()))return;else if(!o&&(u<a.startX&&n.translate<=n.maxTranslate()||u>a.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==c.target&&c.pointerType!==`mouse`&&t.activeElement.blur(),t.activeElement&&c.target===t.activeElement&&c.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit(`touchMove`,c),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=u,a.currentY=d;let f=a.currentX-a.startX,p=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(f**2+p**2)<n.params.threshold)return;if(r.isScrolling===void 0){let e;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?r.isScrolling=!1:f*f+p*p>=25&&(e=Math.atan2(Math.abs(p),Math.abs(f))*180/Math.PI,r.isScrolling=n.isHorizontal()?e>i.touchAngle:90-e>i.touchAngle)}if(r.isScrolling&&n.emit(`touchMoveOpposite`,c),r.startMoving===void 0&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(r.startMoving=!0),r.isScrolling||c.type===`touchmove`&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&c.cancelable&&c.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&c.stopPropagation();let m=n.isHorizontal()?f:p,h=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;i.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),h=Math.abs(h)*(o?1:-1)),a.diff=m,m*=i.touchRatio,o&&(m=-m,h=-h);let g=n.touchesDirection;n.swipeDirection=m>0?`prev`:`next`,n.touchesDirection=h>0?`prev`:`next`;let _=n.params.loop&&!i.cssMode,v=n.touchesDirection===`next`&&n.allowSlideNext||n.touchesDirection===`prev`&&n.allowSlidePrev;if(!r.isMoved){if(_&&v&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){let e=new window.CustomEvent(`transitionend`,{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(e)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit(`sliderFirstMove`,c)}if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&g!==n.touchesDirection&&_&&v&&Math.abs(m)>=1){Object.assign(a,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit(`sliderMove`,c),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let y=!0,b=i.resistanceRatio;if(i.touchReleaseOnEdges&&(b=0),m>0?(_&&v&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!==`auto`&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:`prev`,setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(y=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+m)**b))):m<0&&(_&&v&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!==`auto`&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:`next`,setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView===`auto`?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(y=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-m)**b))),y&&(c.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection===`next`&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection===`prev`&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(m)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,r.currentTranslate=r.startTranslate,a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function Zt(e){let t=this,n=t.touchEventsData,r=e;r.originalEvent&&(r=r.originalEvent);let i;if(!(r.type===`touchend`||r.type===`touchcancel`)){if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}else if(i=[...r.changedTouches].find(e=>e.identifier===n.touchId),!i||i.identifier!==n.touchId)return;if([`pointercancel`,`pointerout`,`pointerleave`,`contextmenu`].includes(r.type)&&!([`pointercancel`,`contextmenu`].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;let{params:a,touches:o,rtlTranslate:s,slidesGrid:c,enabled:l}=t;if(!l||!a.simulateTouch&&r.pointerType===`mouse`)return;if(n.allowTouchCallbacks&&t.emit(`touchEnd`,r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);let u=L(),d=u-n.touchStartTime;if(t.allowClick){let e=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(e&&e[0]||r.target,e),t.emit(`tap click`,r),d<300&&u-n.lastClickTime<300&&t.emit(`doubleTap doubleClick`,r)}if(n.lastClickTime=L(),ze(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||o.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let f;if(f=a.followFinger?s?t.translate:-t.translate:-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}let p=f>=-t.maxTranslate()&&!t.params.loop,m=0,h=t.slidesSizesGrid[0];for(let e=0;e<c.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){let t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;c[e+t]===void 0?(p||f>=c[e])&&(m=e,h=c[c.length-1]-c[c.length-2]):(p||f>=c[e]&&f<c[e+t])&&(m=e,h=c[e+t]-c[e])}let g=null,_=null;a.rewind&&(t.isBeginning?_=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));let v=(f-c[m])/h,y=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(d>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection===`next`&&t.slideTo(v>=a.longSwipesRatio?a.rewind&&t.isEnd?g:m+y:m),t.swipeDirection===`prev`&&(v>1-a.longSwipesRatio?t.slideTo(m+y):t.slideTo(_!==null&&v<0&&Math.abs(v)>a.longSwipesRatio?_:m))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?t.slideTo(r.target===t.navigation.nextEl?m+y:m):(t.swipeDirection===`next`&&t.slideTo(g===null?m+y:g),t.swipeDirection===`prev`&&t.slideTo(_===null?m:_))}}function Qt(){let e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();let{allowSlideNext:r,allowSlidePrev:i,snapGrid:a}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),(t.slidesPerView===`auto`||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!(o&&t.loop)?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function $t(e){let t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function en(){let e=this,{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i,a=e.maxTranslate()-e.minTranslate();i=a===0?0:(e.translate-e.minTranslate())/a,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit(`setTranslate`,e.translate,!1)}function tn(e){let t=this;K(t,e.target),!(t.params.cssMode||t.params.slidesPerView!==`auto`&&!t.params.autoHeight)&&t.update()}function nn(){let e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction=`auto`))}var rn=(e,t)=>{let n=F(),{params:r,el:i,wrapperEl:a,device:o}=e,s=!!r.nested,c=t===`on`?`addEventListener`:`removeEventListener`,l=t;!i||typeof i==`string`||(n[c](`touchstart`,e.onDocumentTouchStart,{passive:!1,capture:s}),i[c](`touchstart`,e.onTouchStart,{passive:!1}),i[c](`pointerdown`,e.onTouchStart,{passive:!1}),n[c](`touchmove`,e.onTouchMove,{passive:!1,capture:s}),n[c](`pointermove`,e.onTouchMove,{passive:!1,capture:s}),n[c](`touchend`,e.onTouchEnd,{passive:!0}),n[c](`pointerup`,e.onTouchEnd,{passive:!0}),n[c](`pointercancel`,e.onTouchEnd,{passive:!0}),n[c](`touchcancel`,e.onTouchEnd,{passive:!0}),n[c](`pointerout`,e.onTouchEnd,{passive:!0}),n[c](`pointerleave`,e.onTouchEnd,{passive:!0}),n[c](`contextmenu`,e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[c](`click`,e.onClick,!0),r.cssMode&&a[c](`scroll`,e.onScroll),e[l](r.updateOnWindowResize?o.ios||o.android?`resize orientationchange observerUpdate`:`resize observerUpdate`:`observerUpdate`,Qt,!0),i[c](`load`,e.onLoad,{capture:!0}))};function an(){let e=this,{params:t}=e;e.onTouchStart=Yt.bind(e),e.onTouchMove=Xt.bind(e),e.onTouchEnd=Zt.bind(e),e.onDocumentTouchStart=nn.bind(e),t.cssMode&&(e.onScroll=en.bind(e)),e.onClick=$t.bind(e),e.onLoad=tn.bind(e),rn(e,`on`)}function on(){rn(this,`off`)}var sn={attachEvents:an,detachEvents:on},cn=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function ln(){let e=this,{realIndex:t,initialized:n,params:r,el:i}=e,a=r.breakpoints;if(!a||a&&Object.keys(a).length===0)return;let o=F(),s=r.breakpointsBase===`window`||!r.breakpointsBase?r.breakpointsBase:`container`,c=[`window`,`container`].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:o.querySelector(r.breakpointsBase),l=e.getBreakpoint(a,s,c);if(!l||e.currentBreakpoint===l)return;let u=(l in a?a[l]:void 0)||e.originalParams,d=cn(e,r),f=cn(e,u),p=e.params.grabCursor,m=u.grabCursor,h=r.enabled;d&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill===`column`||!u.grid.fill&&r.grid.fill===`column`)&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!m?e.unsetGrabCursor():!p&&m&&e.setGrabCursor(),[`navigation`,`pagination`,`scrollbar`].forEach(t=>{if(u[t]===void 0)return;let n=r[t]&&r[t].enabled,i=u[t]&&u[t].enabled;n&&!i&&e[t].disable(),!n&&i&&e[t].enable()});let g=u.direction&&u.direction!==r.direction,_=r.loop&&(u.slidesPerView!==r.slidesPerView||g),v=r.loop;g&&n&&e.changeDirection(),z(e.params,u);let y=e.params.enabled,b=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),h&&!y?e.disable():!h&&y&&e.enable(),e.currentBreakpoint=l,e.emit(`_beforeBreakpoint`,u),n&&(_?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!v&&b?(e.loopCreate(t),e.updateSlides()):v&&!b&&e.loopDestroy()),e.emit(`breakpoint`,u)}function un(e,t,n){if(t===void 0&&(t=`window`),!e||t===`container`&&!n)return;let r=!1,i=I(),a=t===`window`?i.innerHeight:n.clientHeight,o=Object.keys(e).map(e=>{if(typeof e==`string`&&e.indexOf(`@`)===0){let t=parseFloat(e.substr(1));return{value:a*t,point:e}}return{value:e,point:e}});o.sort((e,t)=>parseInt(e.value,10)-parseInt(t.value,10));for(let e=0;e<o.length;e+=1){let{point:a,value:s}=o[e];t===`window`?i.matchMedia(`(min-width: ${s}px)`).matches&&(r=a):s<=n.clientWidth&&(r=a)}return r||`max`}var dn={setBreakpoint:ln,getBreakpoint:un};function fn(e,t){let n=[];return e.forEach(e=>{typeof e==`object`?Object.keys(e).forEach(r=>{e[r]&&n.push(t+r)}):typeof e==`string`&&n.push(t+e)}),n}function pn(){let e=this,{classNames:t,params:n,rtl:r,el:i,device:a}=e,o=fn([`initialized`,n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill===`column`},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function mn(){let e=this,{el:t,classNames:n}=e;!t||typeof t==`string`||(t.classList.remove(...n),e.emitContainerClasses())}var hn={addClasses:pn,removeClasses:mn};function gn(){let e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){let t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+r*2;e.isLocked=e.size>n}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?`lock`:`unlock`)}var _n={checkOverflow:gn},vn={init:!0,direction:`horizontal`,oneWayMovement:!1,swiperElementNodeName:`SWIPER-CONTAINER`,touchEventsTarget:`wrapper`,initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:`swiper`,enabled:!0,focusableElements:`input, select, option, textarea, button, video, label`,width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:`slide`,breakpoints:void 0,breakpointsBase:`window`,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:`swiper-no-swiping`,noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:`swiper-`,slideClass:`swiper-slide`,slideBlankClass:`swiper-slide-blank`,slideActiveClass:`swiper-slide-active`,slideVisibleClass:`swiper-slide-visible`,slideFullyVisibleClass:`swiper-slide-fully-visible`,slideNextClass:`swiper-slide-next`,slidePrevClass:`swiper-slide-prev`,wrapperClass:`swiper-wrapper`,lazyPreloaderClass:`swiper-lazy-preloader`,lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function yn(e,t){return function(n){n===void 0&&(n={});let r=Object.keys(n)[0],i=n[r];if(typeof i!=`object`||!i){z(t,n);return}if(e[r]===!0&&(e[r]={enabled:!0}),r===`navigation`&&e[r]&&e[r].enabled&&!e[r].prevEl&&!e[r].nextEl&&(e[r].auto=!0),[`pagination`,`scrollbar`].indexOf(r)>=0&&e[r]&&e[r].enabled&&!e[r].el&&(e[r].auto=!0),!(r in e&&`enabled`in i)){z(t,n);return}typeof e[r]==`object`&&!(`enabled`in e[r])&&(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),z(t,n)}}var bn={eventsEmitter:ct,update:bt,translate:Et,transition:jt,slide:zt,loop:Ut,grabCursor:Kt,events:sn,breakpoints:dn,checkOverflow:_n,classes:hn},xn={},Sn=class e{constructor(){let t,n;var r=[...arguments];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)===`Object`?n=r[0]:[t,n]=r,n||={},n=z({},n),t&&!n.el&&(n.el=t);let i=F();if(n.el&&typeof n.el==`string`&&i.querySelectorAll(n.el).length>1){let t=[];return i.querySelectorAll(n.el).forEach(r=>{let i=z({},n,{el:r});t.push(new e(i))}),t}let a=this;a.__swiper__=!0,a.support=$e(),a.device=nt({userAgent:n.userAgent}),a.browser=at(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],n.modules&&Array.isArray(n.modules)&&a.modules.push(...n.modules);let o={};return a.modules.forEach(e=>{e({params:n,swiper:a,extendParams:yn(n,o),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})}),a.params=z({},z({},vn,o),xn,n),a.originalParams=z({},a.params),a.passedParams=z({},n),a.params&&a.params.on&&Object.keys(a.params.on).forEach(e=>{a.on(e,a.params.on[e])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction===`horizontal`},isVertical(){return a.params.direction===`vertical`},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit(`_swiper`),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:`height`,"margin-top":`margin-left`,"margin-bottom ":`margin-right`,"margin-left":`margin-top`,"margin-right":`margin-bottom`,"padding-left":`padding-top`,"padding-right":`padding-bottom`,marginRight:`marginBottom`}[e]}getSlideIndex(e){let{slidesEl:t,params:n}=this,r=Je(V(t,`.${n.slideClass}, swiper-slide`)[0]);return Je(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute(`data-swiper-slide-index`)*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill===`column`?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill===`row`&&(e%=Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){let e=this,{slidesEl:t,params:n}=e;e.slides=V(t,`.${n.slideClass}, swiper-slide`)}enable(){let e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit(`enable`))}disable(){let e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit(`disable`))}setProgress(e,t){let n=this;e=Math.min(Math.max(e,0),1);let r=n.minTranslate(),i=(n.maxTranslate()-r)*e+r;n.translateTo(i,t===void 0?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=e.el.className.split(` `).filter(t=>t.indexOf(`swiper`)===0||t.indexOf(e.params.containerModifierClass)===0);e.emit(`_containerClasses`,t.join(` `))}getSlideClasses(e){let t=this;return t.destroyed?``:e.className.split(` `).filter(e=>e.indexOf(`swiper-slide`)===0||e.indexOf(t.params.slideClass)===0).join(` `)}emitSlidesClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=[];e.slides.forEach(n=>{let r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit(`_slideClass`,n,r)}),e.emit(`_slideClasses`,t)}slidesPerViewDynamic(e,t){e===void 0&&(e=`current`),t===void 0&&(t=!1);let{params:n,slides:r,slidesGrid:i,slidesSizesGrid:a,size:o,activeIndex:s}=this,c=1;if(typeof n.slidesPerView==`number`)return n.slidesPerView;if(n.centeredSlides){let e=r[s]?Math.ceil(r[s].swiperSlideSize):0,t;for(let n=s+1;n<r.length;n+=1)r[n]&&!t&&(e+=Math.ceil(r[n].swiperSlideSize),c+=1,e>o&&(t=!0));for(let n=s-1;n>=0;--n)r[n]&&!t&&(e+=r[n].swiperSlideSize,c+=1,e>o&&(t=!0))}else if(e===`current`)for(let e=s+1;e<r.length;e+=1)(t?i[e]+a[e]-i[s]<o:i[e]-i[s]<o)&&(c+=1);else for(let e=s-1;e>=0;--e)i[s]-i[e]<o&&(c+=1);return c}update(){let e=this;if(!e||e.destroyed)return;let{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll(`[loading="lazy"]`)].forEach(t=>{t.complete&&K(e,t)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){let t=e.rtlTranslate?e.translate*-1:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let i;n.freeMode&&n.freeMode.enabled&&!n.cssMode?(r(),n.autoHeight&&e.updateAutoHeight()):(i=e.slideTo((n.slidesPerView===`auto`||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides?(e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides).length-1:e.activeIndex,0,!1,!0),i||r()),n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit(`update`)}changeDirection(e,t){t===void 0&&(t=!0);let n=this,r=n.params.direction;return e||=r===`horizontal`?`vertical`:`horizontal`,e===r||e!==`horizontal`&&e!==`vertical`?n:(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(t=>{e===`vertical`?t.style.width=``:t.style.height=``}),n.emit(`changeDirection`),t&&n.update(),n)}changeLanguageDirection(e){let t=this;t.rtl&&e===`rtl`||!t.rtl&&e===`ltr`||(t.rtl=e===`rtl`,t.rtlTranslate=t.params.direction===`horizontal`&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir=`rtl`):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir=`ltr`),t.update())}mount(e){let t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n==`string`&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);let r=()=>`.${(t.params.wrapperClass||``).trim().split(` `).join(`.`)}`,i=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(r()):V(n,r())[0];return!i&&t.params.createElements&&(i=U(`div`,t.params.wrapperClass),n.append(i),V(n,`.${t.params.slideClass}`).forEach(e=>{i.append(e)})),Object.assign(t,{el:n,wrapperEl:i,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:i,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()===`rtl`||W(n,`direction`)===`rtl`,rtlTranslate:t.params.direction===`horizontal`&&(n.dir.toLowerCase()===`rtl`||W(n,`direction`)===`rtl`),wrongRTL:W(i,`display`)===`-webkit-box`}),!0}init(e){let t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit(`beforeInit`),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.slideTo(t.params.loop&&t.virtual&&t.params.virtual.enabled?t.params.initialSlide+t.virtual.slidesBefore:t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();let n=[...t.el.querySelectorAll(`[loading="lazy"]`)];return t.isElement&&n.push(...t.hostEl.querySelectorAll(`[loading="lazy"]`)),n.forEach(e=>{e.complete?K(t,e):e.addEventListener(`load`,e=>{K(t,e.target)})}),J(t),t.initialized=!0,J(t),t.emit(`init`),t.emit(`afterInit`),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);let n=this,{params:r,el:i,wrapperEl:a,slides:o}=n;return n.params===void 0||n.destroyed?null:(n.emit(`beforeDestroy`),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),i&&typeof i!=`string`&&i.removeAttribute(`style`),a&&a.removeAttribute(`style`),o&&o.length&&o.forEach(e=>{e.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),e.removeAttribute(`style`),e.removeAttribute(`data-swiper-slide-index`)})),n.emit(`destroy`),Object.keys(n.eventsListeners).forEach(e=>{n.off(e)}),e!==!1&&(n.el&&typeof n.el!=`string`&&(n.el.swiper=null),Re(n)),n.destroyed=!0,null)}static extendDefaults(e){z(xn,e)}static get extendedDefaults(){return xn}static get defaults(){return vn}static installModule(t){e.prototype.__modules__||(e.prototype.__modules__=[]);let n=e.prototype.__modules__;typeof t==`function`&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(t=>e.installModule(t)),e):(e.installModule(t),e)}};Object.keys(bn).forEach(e=>{Object.keys(bn[e]).forEach(t=>{Sn.prototype[t]=bn[e][t]})}),Sn.use([ot,st]);var Cn=`<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.3666 23.7687L19.7082 29.4179C18.3749 30.1977 16.6985 29.2361 16.6985 27.6915V16.3286C16.6985 14.7796 18.3836 13.8186 19.7168 14.6073L29.3752 20.3209C30.6879 21.0975 30.6832 22.9986 29.3666 23.7687Z" fill="#191919"/>
</svg>
`,wn=`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19" stroke="#191919" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12L9 16" stroke="#191919" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12L9 8" stroke="#191919" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,Y=`https://conversionrate-store.github.io/a-b_images/petalsandkeepsakes/reels`,X=[2,3,1],Z=X.length,Tn=Math.max(Z,Math.ceil(9/Z)*Z),En=`<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 4H4v5M20 9V4h-5M15 20h5v-5M4 15v5h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>`,Dn=`<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M1 1 13 13M13 1 1 13" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" /></svg>`,On=`<svg viewBox="0 0 28 49" fill="none" aria-hidden="true"><path d="M25.83 1.41 2.83 24.41l23 23" stroke="currentColor" stroke-width="4" fill="none" /></svg>`,kn=(e,t,n=!1)=>{let r=document.createElement(`span`);return r.className=t,r.setAttribute(`aria-hidden`,`true`),r.innerHTML=n?E(e):e,r},Q=new WeakSet,An=e=>{Q.add(e),e.play().catch(()=>{}).finally(()=>Q.delete(e))},jn=e=>{e.paused||(Q.add(e),e.pause())},$=e=>{let t=e.querySelector(`video`);jn(t),t.currentTime=0,t.removeAttribute(`controls`),e.classList.remove(`is-playing`)},Mn=e=>Array.from(e.querySelectorAll(`.crs-reel.is-playing`)),Nn=()=>{let n=(t,n)=>{let r=k(`div`,{class:`swiper-slide crs-reel`,"data-index":String(t),"data-position":String(n),children:[k(`picture`,{class:`crs-reel__poster`,children:[O(`source`,{srcset:`${Y}/preview_${t}.avif`,type:`image/avif`}),O(`img`,{src:`${Y}/preview_${t}.gif`,alt:``,loading:`lazy`})]}),O(`video`,{preload:`metadata`,playsinline:!0,controlsList:`nodownload noremoteplayback noplaybackrate${window.innerWidth>767?` nofullscreen`:``}`,disablePictureInPicture:!0,children:O(`source`,{src:`${Y}/video_${t}.mp4`,type:`video/mp4`})}),O(`button`,{class:`crs-reel__play`,type:`button`,"aria-label":`Play reel ${n}`}),O(`button`,{class:`crs-reel__expand`,type:`button`,"aria-label":`Watch reel ${n} full size`})]});r.querySelector(`.crs-reel__play`).append(kn(Cn,`crs-reel__play-icon`,!0)),r.querySelector(`.crs-reel__expand`).innerHTML=En;let i=r.querySelector(`video`);return i.addEventListener(`play`,()=>{Q.has(i)||e(`exp_reels_play`,`Play Video - ${n}`,`click`,`reels section`)}),i.addEventListener(`pause`,()=>{if(Q.has(i)){Q.delete(i);return}i.ended||e(`exp_reels_pause`,`Pause Video - ${n}`,`click`,`reels section`)}),r},r=O(`div`,{class:`swiper-wrapper crs-reels__list`});for(let e=0;e<Tn;e++){let t=e%Z;r.append(n(X[t],t+1))}let a=O(`div`,{class:`swiper crs-reels__strip`,role:`group`,"aria-label":`Customer reels`,children:r}),o=O(`div`,{class:`crs-reels__dots`}),s=O(`button`,{class:`crs-reels__arrow crs-reels__arrow--prev`,type:`button`,"aria-label":`Previous reel`}),c=O(`button`,{class:`crs-reels__arrow crs-reels__arrow--next`,type:`button`,"aria-label":`Next reel`});s.append(kn(wn,`crs-reels__arrow-icon`,!0)),c.append(kn(wn,`crs-reels__arrow-icon`,!0));let l=k(`section`,{class:`crs-reels`,children:[k(`div`,{class:`crs-reels__head`,children:[O(`h2`,{class:`crs-reels__title`,children:`Trusted by 25,000+ families to keep their loved ones close`}),O(`p`,{class:`crs-reels__subtitle`,children:`Real stories from people who carry someone they love — every single day`})]}),a,k(`div`,{class:`crs-reels__nav`,children:[s,o,c]})]}),u=()=>Mn(r).forEach($),d=()=>r.querySelector(`.crs-reel.swiper-slide-active`)?.dataset.position??``;return t(`.crs-reels__strip .crs-reel__poster`).then(()=>{i(`.crs-reels`,`exp_reels_visibility`,`reels section`,`Reels`,3e3,.3);let t=new Sn(a,{loop:!0,slidesPerView:`auto`,spaceBetween:8,centeredSlides:!0,initialSlide:0,watchSlidesProgress:!0,longSwipesRatio:.1,freeMode:!1,shortSwipes:!0}),n=()=>r.querySelectorAll(`.crs-reel.is-playing:not(.swiper-slide-visible)`).forEach(e=>{let t=e.querySelector(`video`),n=t.currentTime,i=t.paused,a=r.querySelector(`.crs-reel[data-index="${e.dataset.index}"].swiper-slide-visible`);if(a){let e=a.querySelector(`video`);a.classList.add(`is-playing`),window.innerWidth>767&&e.setAttribute(`controls`,`controls`),e.currentTime=n,i||An(e)}$(e)});X.forEach((n,r)=>{let i=O(`button`,{class:`crs-reels__dot`,type:`button`,"aria-label":`Go to reel ${r+1}`});r===0&&i.classList.add(`is-active`),i.addEventListener(`click`,()=>{t.slideToLoop(r),requestAnimationFrame(()=>e(`exp_reels_pagination`,`Pagination - ${d()}`,`click`,`reels section`))}),o.append(i)}),t.on(`sliderMove`,n),t.on(`slideChangeTransitionEnd`,n),t.on(`slideChange`,()=>{let e=t.realIndex%Z;o.querySelectorAll(`.crs-reels__dot`).forEach((t,n)=>t.classList.toggle(`is-active`,n===e)),u()}),s.addEventListener(`click`,()=>{t.slidePrev(),requestAnimationFrame(()=>e(`exp_reels_nav_arrow`,`Arrow Left - ${d()}`,`click`,`reels section`))}),c.addEventListener(`click`,()=>{t.slideNext(),requestAnimationFrame(()=>e(`exp_reels_nav_arrow`,`Arrow Right - ${d()}`,`click`,`reels section`))});let l=null;t.on(`touchStart`,()=>l=t.realIndex),t.on(`touchEnd`,()=>{if(l===null)return;let n=l;l=null,requestAnimationFrame(()=>{let i=t.realIndex;if(i===n||(e(`exp_reels_swipe`,`Swipe - ${d()}`,`other`,`reels section`),window.innerWidth>767))return;let a=r.children.length,o=((i-n)%a+a)%a;o>a/2&&(o-=a),!(Math.abs(o)<=1)&&t.slideToLoop(((n+Math.sign(o))%a+a)%a)})})}),r.addEventListener(`click`,t=>{let n=t.target,i=n.closest(`.crs-reel__expand`);if(i){let t=i.closest(`.crs-reel`),n=t.querySelector(`video`);e(`exp_reels_fullscreen`,`Fullscreen`,`click`,`reels section`),In(Number(t.dataset.index),n.currentTime);return}let a=n.closest(`video`);if(a){if(a.paused)return;let t=a.closest(`.crs-reel`);e(`exp_reels_pause`,`Pause Video - ${t.dataset.position}`,`click`,`reels section`),$(t);return}if(!n.closest(`.crs-reel__poster`)&&!n.closest(`.crs-reel__play`))return;let o=n.closest(`.crs-reel`),s=o.querySelector(`video`);Mn(r).forEach(e=>e!==o&&$(e)),s.paused&&(s.currentTime=0),e(`exp_reels_play`,`Play Video - ${o.dataset.position}`,`click`,`reels section`),o.classList.add(`is-playing`),window.innerWidth>767&&s.setAttribute(`controls`,`controls`),An(s)}),r.addEventListener(`ended`,e=>{let t=e.target;t.tagName===`VIDEO`&&$(t.closest(`.crs-reel`))},!0),new IntersectionObserver(e=>e.forEach(e=>e.isIntersecting||u()),{threshold:0}).observe(a),t(`cart-drawer`).then(e=>{let t=e.classList.contains(`active`);new MutationObserver(()=>{let n=e.classList.contains(`active`);n&&!t&&u(),t=n}).observe(e,{attributes:!0,attributeFilter:[`class`]})}),l},Pn=null,Fn=()=>{let t=X[0],n=O(`video`,{controls:!0,playsinline:!0,preload:`metadata`,controlsList:`nodownload noremoteplayback noplaybackrate nofullscreen`,disablePictureInPicture:!0}),r=O(`div`,{class:`crs-lightbox__spinner`,"aria-hidden":`true`});n.addEventListener(`loadstart`,()=>r.classList.add(`is-active`)),n.addEventListener(`waiting`,()=>r.classList.add(`is-active`)),n.addEventListener(`canplay`,()=>r.classList.remove(`is-active`)),n.addEventListener(`loadeddata`,()=>r.classList.remove(`is-active`));let i=()=>{jn(n),n.currentTime=0,document.body.classList.remove(`crs-modal-open`),document.removeEventListener(`keydown`,s),d.classList.remove(`crs-lightbox--open`)},a=(t,n)=>{i(),e(t,n,`click`,`reels modal`)},o=n=>{let r=t+n;f(r<1?Z:r>Z?1:r,0),e(`exp_reels_arrow`,n>0?`Arrow Right`:`Arrow Left`,`click`,`reels modal`)},s=e=>{e.key===`Escape`&&i(),e.key===`ArrowLeft`&&o(-1),e.key===`ArrowRight`&&o(1)},c=O(`button`,{class:`crs-lightbox__arrow crs-lightbox__arrow--prev`,type:`button`,"aria-label":`Previous reel`,onClick:()=>o(-1)}),l=O(`button`,{class:`crs-lightbox__arrow crs-lightbox__arrow--next`,type:`button`,"aria-label":`Next reel`,onClick:()=>o(1)}),u=O(`button`,{class:`crs-lightbox__close`,type:`button`,"aria-label":`Close`,onClick:()=>a(`exp_reels_modal_fullscreen`,`Fullscreen Close`)});c.innerHTML=On,l.innerHTML=On,u.innerHTML=Dn;let d=k(`div`,{class:`crs-lightbox`,role:`dialog`,"aria-modal":`true`,"aria-label":`Customer reel`,children:[O(`div`,{class:`crs-lightbox__overlay`,onClick:()=>a(`exp_reels_overlay`,`Overlay close`)}),c,k(`div`,{class:`crs-lightbox__stage`,children:[u,r,n]}),l]}),f=(e,r)=>{(e!==t||!n.src)&&(t=e,n.src=`${Y}/video_${t}.mp4`),n.currentTime=r,d.classList.contains(`crs-lightbox--open`)||(document.addEventListener(`keydown`,s),document.body.classList.add(`crs-modal-open`),requestAnimationFrame(()=>d.classList.add(`crs-lightbox--open`))),An(n)};return document.body.append(d),{root:d,video:n,open:f}},In=(e,t)=>{document.querySelectorAll(`.crs-reel.is-playing`).forEach($),Pn??=Fn(),Pn.open(e,t)};n({name:`PDP update`,dev:`OS`}),r(`exp_pdp`),new class{constructor(){this.sid=``,this.imageIndex=0,this.images={},this.sync=[]}async init(){if(document.body.classList.contains(`crs-pdp`))return;this.addStyles(),this.addFonts();let e=await t(`product-info`);this.sid=e.dataset.section,e.classList.add(`crs-product`),this.product=await c(),this.imageIndex=f(this.product),this.images=p(this.product,this.imageIndex),document.body.classList.add(`crs-pdp`),this.buildUtilityBar(),this.buildInfoColumn(),this.buildMediaColumn(),this.apply();let n=new MutationObserver(()=>{n.disconnect(),this.apply(),n.observe(e,{childList:!0,subtree:!0})});n.observe(e,{childList:!0,subtree:!0}),a(`PDP redesign applied`,`success`)}addStyles(){let e=document.createElement(`style`);e.textContent=o,document.head.appendChild(e)}addFonts(){let e=`https://fonts.googleapis.com/css2?family=Forum&family=Jost:wght@400;500&family=Overlock&display=swap`;if(document.querySelector(`link[href="${e}"]`))return;let t=document.createElement(`link`);t.rel=`stylesheet`,t.href=e,document.head.appendChild(t)}apply(){this.sync.forEach(e=>e()),this.stripCurrencyCodes(),this.priceInButton(),this.saveBadge()}stripCurrencyCodes(){document.querySelectorAll(`#price-${this.sid} .price-item`).forEach(e=>e.textContent=v(e.textContent))}saveBadge(){let e=document.querySelector(`#price-${this.sid}`),t=e?.querySelector(`.price__badge-sale`);if(!e||!t||!e.querySelector(`.price--on-sale`))return;let n=e.querySelector(`.price__sale s.price-item--regular`)?.textContent,r=e.querySelector(`.price__sale .price-item--sale`)?.textContent;if(!n||!r)return;let i=_(n)-_(r);i>0&&(t.textContent=`Save ${y(r.trim(),i)}`)}priceInButton(){let e=document.querySelector(`product-info`),t=e.querySelector(`#price-${this.sid}`),n=e.querySelector(`.product-form__submit`);if(!t||!n)return;let r=t.querySelector(t.querySelector(`.price--on-sale`)?`.price__sale .price-item--sale`:`.price__regular .price-item--regular`);if(!r)return;let i=n.querySelector(`.crs-atc-price`);i||(i=document.createElement(`span`),i.className=`crs-atc-price`,n.querySelector(`span`)?.after(i)),i.textContent=`· ${r.textContent.trim()}`,document.querySelectorAll(`.crs-atc-price`).forEach(t=>e.contains(t)?void 0:t.remove())}async buildUtilityBar(){let e=await t(`.utility-bar .announcement-bar__message`);if(e.closest(`.utility-bar`).classList.add(`crs-utility`),e.querySelector(`.crs-utility__warranty`))return;let n=document.createElement(`span`);n.className=`crs-utility__sep`,n.setAttribute(`aria-hidden`,`true`),n.textContent=`·`;let r=document.createElement(`span`);r.className=`crs-utility__warranty`,r.textContent=`Lifetime Warranty`,e.append(n,r)}order(e,t){e instanceof HTMLElement&&(e.style.order=String(t))}buildInfoColumn(){let t=document.querySelector(`#ProductInfo-${this.sid}`);t.classList.add(`crs-info`);let n=re(this.product,()=>j(`material`,`Material Guide`,this.rte(s),`Material Guide Popup`),t=>{t.click(),this.dressGuideClose(),e(`exp_pdp_size_open`,`Ring Sizing Guide`,`click`,`PDP`)});this.sync.push(n.sync);let r=Array.from(t.querySelectorAll(`.product__accordion`)).map(e=>({title:e.querySelector(`.accordion__title`).textContent.trim(),body:e.querySelector(`.accordion__content`).cloneNode(!0)})),i=document.querySelector(`.product__description`);this.description=x(i),i.hidden=!0;let a=this.trustRow(),o=this.helpRow(),c=le(this.description.specs,this.description.prose),l=ye(je),u=Ne(r),d=Nn();this.order(t.querySelector(`.product__title`),1),this.order(t.querySelector(`#price-${this.sid}`),2),this.order(n.root,3),this.order(t.querySelector(`variant-selects`),4),this.order(t.querySelector(`product-form`)?.parentElement,5),this.order(a,6),this.order(o,7),this.order(t.querySelector(`[id^="product-form-installment"]`)?.parentElement,8),this.order(t.querySelector(`#Quantity-Form-${this.sid}`),9),this.order(c,10),this.order(d,11),this.order(l,12),this.order(u,13),this.order(t.querySelector(`.product__view-details`),20),t.querySelectorAll(`.product__accordion`).forEach(e=>e.remove()),t.append(n.root,a,o,c,d,l,u)}buildMediaColumn(){document.querySelector(`.product__media-wrapper`).classList.add(`crs-media`);let e=document.querySelector(`.customProductImage`);e?.classList.add(`crs-created`);let t=S(this.description.specs);if(e&&t){let n=document.createElement(`p`);n.className=`crs-created__caption`,n.textContent=t,e.append(n)}let n=de(()=>this.images[d(this.product)[this.imageIndex]],e);this.sync.push(n.sync)}async dressGuideClose(){let e=await t(`#custom_notifications button.close`);e.querySelector(`svg`)||(e.innerHTML=oe)}rte(e){let t=document.createElement(`div`);return t.className=`crs-rte`,t.innerHTML=e,t}trustRow(){let e=document.createElement(`div`);return e.className=`crs-trust`,e.innerHTML=`<span class="crs-trust__item"><img class="crs-trust__icon" src="${C}" alt="" width="28" height="28">Handcrafted in USA</span><span class="crs-trust__item"><span class="crs-trust__icon crs-trust__icon--svg" aria-hidden="true">${E(w)}</span>Lifetime Warranty</span>`,e}helpRow(){let e=document.createElement(`div`);return e.className=`crs-help`,e.innerHTML=`Need Help? Call/Text <a href="tel:6626691586">662-669-1586</a> ❤️`,e}}().init()})();
