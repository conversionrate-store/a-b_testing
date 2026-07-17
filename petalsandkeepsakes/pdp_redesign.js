(function(){var e=(e,t,n,r=``)=>{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:`event-to-ga4`,event_name:e,event_desc:t,event_type:n,event_loc:r}),`${e}${t}${n}${r}`},t=e=>new Promise(t=>{let n=document.querySelector(e);if(n){t(n);return}let r=new MutationObserver(()=>{let n=document.querySelector(e);n&&(t(n),r.disconnect())});r.observe(document.documentElement,{childList:!0,subtree:!0})}),n=({name:e,dev:t})=>{},r=e=>{let t=setInterval(function(){typeof window.clarity==`function`&&(clearInterval(t),window.clarity(`set`,e,`variant_1`))},1e3)},i=(t,n,r,i,a=1e3,o=.5)=>{let s,c;if(s=new IntersectionObserver(function(t){t[0].isIntersecting===!0?c=setTimeout(()=>{e(n,t[0].target.dataset.visible||i||``,`view`,r),s.disconnect()},a):clearTimeout(c)},{threshold:[o]}),typeof t==`string`){let e=document.querySelector(t);e&&s.observe(e)}else s.observe(t)},a=`/* PDP redesign — injected into the live Dawn theme.
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

/* A native snap track rather than a carousel library. It carries three passes of the
   three reels and rests on the middle one; reels.tsx teleports it back a pass whenever
   the scroll settles outside, which is what makes the loop endless. At rest that leaves
   the design's three slides centred with 12px of each neighbour peeking past them. */
.crs-reels__strip {
  display: flex;
  gap: 8px;
  width: 100%;
  padding: 0 20px;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}
.crs-reels__strip::-webkit-scrollbar {
  display: none;
}
.crs-reel {
  position: relative;
  flex: none;
  width: 155px;
  height: 276px;
  border-radius: 4px;
  overflow: hidden;
  scroll-snap-align: center;
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
  padding: 6px;
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
`,o=`<div class="crs-note">
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
`,s=()=>fetch(`${location.pathname}.js`).then(e=>e.json()),c=e=>document.querySelector(`select[name="options[${e}]"]`),l=(e,t)=>{let n=c(e);!n||n.value===t||(n.value=t,n.dispatchEvent(new Event(`change`,{bubbles:!0})))},u=e=>e.options.map(e=>c(e.name)?.value??``),d=e=>{for(let t=0;t<e.options.length;t++){let n=new Map;e.variants.forEach(e=>{if(!e.featured_image)return;let r=e.options[t];n.has(r)||n.set(r,new Set),n.get(r).add(e.featured_image.src)});let r=new Set([...n.values()].flatMap(e=>[...e]));if(n.size>1&&r.size>1&&[...n.values()].every(e=>e.size===1))return t}return 0},f=(e,t)=>{let n={};return e.variants.forEach(e=>{let r=e.options[t];e.featured_image&&!n[r]&&(n[r]=e.featured_image.src)}),n},p=(e,t,n)=>{let r=u(e);return e.variants.some(e=>e.available&&e.options[t]===n&&e.options.every((e,n)=>n===t||e===r[n]))},m=/\d[\d.,   ]*\d|\d/,h=e=>{let t=e.match(m);if(!t)return null;let n=t[0],r=Math.max(n.lastIndexOf(`.`),n.lastIndexOf(`,`)),i=r>-1&&/^[.,]\d{1,2}$/.test(n.slice(r)),a=i?n.slice(0,r):n;return{raw:n,decimalSep:i?n[r]:``,groupSep:a.match(/[.,   ]/)?.[0]??``,decimals:i?n.length-r-1:0}},g=e=>{let t=h(e);if(!t)return NaN;let{raw:n,decimalSep:r}=t,i=r?Math.max(n.lastIndexOf(`.`),n.lastIndexOf(`,`)):-1,a=(i>-1?n.slice(0,i):n).replace(/\D/g,``),o=i>-1?n.slice(i+1):``;return Number(`${a}.${o||0}`)},_=e=>e.trim().replace(/\s+[A-Z]{3}$/,``),v=(e,t)=>{let n=h(e);if(!n)return String(t);let[r,i]=t.toFixed(n.decimals).split(`.`),a=n.groupSep?r.replace(/\B(?=(\d{3})+(?!\d))/g,n.groupSep):r;return e.replace(n.raw,i?a+n.decimalSep+i:a)},y=e=>{let t=document.createElement(`div`);return t.innerHTML=e,t.textContent.replace(/ /g,` `).trim()},b=e=>{let t=document.querySelector(`.product__title h1`)?.textContent?.trim(),n=[],r=[];return e.querySelectorAll(`:scope > p`).forEach(e=>{let i=e.innerHTML.split(/<br[^>]*>/gi).map(y).filter(Boolean).filter(e=>e.startsWith(`-`));if(i.length>=2){n.push(...i.map(e=>e.replace(/^-\s*/,``)));return}t&&y(e.innerHTML).replace(/\s*\(#\d+\)$/,``)===t||e.textContent.trim()&&r.push(e.cloneNode(!0))}),{specs:n,prose:r}},ee=e=>e.find(e=>/fused/i.test(e))??e.find(e=>/inclusion/i.test(e)),te=`data:image/png;base64,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`,ne=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,re=0,x=e=>{let t=`crs${re++}`;return e.replace(/id="([^"]+)"/g,(e,n)=>`id="${t}-${n}"`).replace(/url\(#([^)]+)\)/g,(e,n)=>`url(#${t}-${n})`).replace(/href="#([^"]+)"/g,(e,n)=>`href="#${t}-${n}"`)};function S(e,t){if(!(t==null||typeof t==`boolean`)){if(Array.isArray(t)){for(let n of t)S(e,n);return}e.appendChild(t instanceof Node?t:document.createTextNode(String(t)))}}function C(e,t,n){if(typeof e==`function`)return e(t??{});let{children:r,...i}=t??{},a=document.createElement(e);for(let[e,t]of Object.entries(i))e.startsWith(`on`)&&typeof t==`function`?a.addEventListener(e.slice(2).toLowerCase(),t):t===!0?a.setAttribute(e,``):t!==!1&&t!=null&&a.setAttribute(e,String(t));return S(a,r),a}var w=C,T=[[/rose|pink|copper/i,`linear-gradient(205deg, #e8c2bd 11%, #fff 31%, #e1b7b2 50%)`],[/white|silver|platinum|steel/i,`linear-gradient(205deg, #dedede 11%, #fff 31%, #d8d8d8 50%)`],[/gold|brass|vermeil/i,`linear-gradient(205deg, #edce9b 11%, #fff 31%, #eac995 50%)`]],ie=e=>T.find(([t])=>t.test(e))?.[1]??T[1][1],E=e=>/material|metal|colou?r|finish/i.test(e),D=(e,t)=>C(`button`,{class:`crs-guide-link`,type:`button`,onClick:t,children:e}),O=(t,n,r)=>{let i=document.createElement(`div`);i.className=`crs-options`;let a=[];return t.options.forEach((o,s)=>{let u=E(o.name),d=C(`span`,{class:`crs-opt-head__value`}),f=t=>C(`button`,{class:u?`crs-swatch`:`crs-size`,type:`button`,"data-value":t,onClick:()=>{l(o.name,t),e(`option_select`,`Selected ${o.name} "${t}"`,`click`,`pdp_buybox`)},children:u?[C(`span`,{class:`crs-swatch__dot`,style:`background-image:${ie(t)}`,"aria-hidden":`true`}),C(`span`,{class:`crs-swatch__label`,children:t})]:document.createTextNode(t)}),m=/size/i.test(o.name)?document.querySelector(`#guide_desc`):null,h=u?D(`Material Guide`,n):m?D(m.textContent.trim()||`Size Guide`,()=>r(m)):null,g=C(`div`,{class:`crs-opt__list ${u?`crs-opt__list--swatches`:`crs-opt__list--sizes`}`,children:o.values.map(f)});i.append(w(`div`,{class:`crs-opt`,children:[w(`div`,{class:`crs-opt-head`,children:[w(`span`,{class:`crs-opt-head__label`,children:[o.name,`:`,d]}),h??document.createTextNode(``)]}),g]})),u&&g.style.setProperty(`--crs-swatch-count`,String(o.values.length)),a.push(()=>{let e=c(o.name)?.value;d.textContent=e?` ${e}`:``,g.querySelectorAll(`[data-value]`).forEach(n=>{n.classList.toggle(`is-selected`,n.dataset.value===e),n.classList.toggle(`is-unavailable`,!p(t,s,n.dataset.value))})})}),{root:i,sync:()=>a.forEach(e=>e())}},ae=`<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,oe=500,k=`<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M1 1 13 13M13 1 1 13" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" /></svg>`,A=(t,n,r)=>{let i=()=>{s.classList.remove(`crs-modal--open`),document.body.classList.remove(`crs-modal-open`),document.removeEventListener(`keydown`,a),setTimeout(()=>s.remove(),oe)},a=e=>{e.key===`Escape`&&i()},o=C(`button`,{class:`crs-modal__close`,type:`button`,"aria-label":`Close`,onClick:i});o.innerHTML=k;let s=w(`div`,{class:`crs-modal`,role:`dialog`,"aria-modal":`true`,"aria-label":n,children:[C(`div`,{class:`crs-modal__overlay`,onClick:i}),w(`div`,{class:`crs-modal__dialog`,children:[w(`div`,{class:`crs-modal__head`,children:[o,C(`h3`,{class:`crs-modal__title`,children:n})]}),C(`div`,{class:`crs-modal__body`,children:r})]})]});document.addEventListener(`keydown`,a),document.body.appendChild(s),document.body.classList.add(`crs-modal-open`),requestAnimationFrame(()=>s.classList.add(`crs-modal--open`)),s.querySelector(`.crs-modal__close`).focus(),e(`${t}_open`,`Opened ${n} modal`,`click`,`pdp`)},j=(t,n)=>C(`div`,{class:`crs-accord`,children:t.map(t=>{let r=C(`span`,{class:`crs-accord__sign`,"aria-hidden":`true`});if(r.innerHTML=ae,t.open)return C(`div`,{class:`crs-accord__item`,children:w(`button`,{class:`crs-accord__head`,type:`button`,onClick:t.open,children:[C(`span`,{children:t.title}),r]})});let i=C(`div`,{class:`crs-accord__panel`,hidden:!0,children:t.body}),a=w(`button`,{class:`crs-accord__head`,type:`button`,"aria-expanded":`false`,onClick:()=>{let r=a.getAttribute(`aria-expanded`)===`true`;a.setAttribute(`aria-expanded`,String(!r)),i.hidden=r,r||e(`accordion_open`,`Opened "${t.title}"`,`click`,n)},children:[C(`span`,{children:t.title}),r]});return w(`div`,{class:`crs-accord__item`,children:[a,i]})})}),M=5,se=(t,n)=>{let r=t.slice(0,M),i=t.slice(M),a=t.length?[]:n.slice(0,1),o=t.length?n:n.slice(1),s=w(`div`,{class:`crs-details__more`,hidden:!0,children:[C(`ul`,{class:`crs-details__list`,children:i.map(e=>C(`li`,{children:e}))}),C(`div`,{class:`crs-rte`,children:o})]}),c=C(`button`,{class:`crs-details__toggle`,type:`button`,onClick:()=>{let t=!s.hidden;s.hidden=t,c.textContent=t?`Show more`:`Show less`,t||e(`details_show_more`,`Expanded the full product details`,`click`,`pdp_details`)},children:`Show more`});!i.length&&!o.length&&(c.hidden=!0);let l=w(`div`,{class:`crs-accord__panel`,children:[C(`ul`,{class:`crs-details__list`,children:r.map(e=>C(`li`,{children:e}))}),C(`div`,{class:`crs-rte`,children:a}),s,c]}),u=w(`button`,{class:`crs-accord__head`,type:`button`,"aria-expanded":`true`,onClick:()=>{let e=u.getAttribute(`aria-expanded`)===`true`;u.setAttribute(`aria-expanded`,String(!e)),l.hidden=e},children:[C(`span`,{children:`Product details`}),C(`span`,{class:`crs-accord__sign`,"aria-hidden":`true`})]});return C(`div`,{class:`crs-details crs-accord`,children:w(`div`,{class:`crs-accord__item`,children:[u,l]})})},N=e=>e.split(`/`).pop().split(`?`)[0],ce=(t,n)=>{let r=document.createElement(`div`);r.className=`crs-thumbs`;let i=document.createElement(`li`);i.className=`crs-created-slot`,n&&i.append(n);let a=C(`span`,{class:`crs-gallery__hint`,"aria-hidden":`true`,children:`Swipe →`}),o=()=>document.querySelector(`.product__media-list`),s=()=>Array.from(o()?.children??[]).filter(e=>!e.classList.contains(`crs-created-slot`)),c=e=>r.querySelectorAll(`.crs-thumb`).forEach((t,n)=>t.classList.toggle(`is-selected`,n===e)),l=e=>{let t=s()[e];t&&(s().forEach(e=>e.classList.remove(`is-active`)),t.classList.add(`is-active`),t.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`start`}),c(e))},u=()=>{r.textContent=``,s().forEach((t,n)=>{let i=t.querySelector(`img`);i&&r.append(C(`button`,{class:`crs-thumb`,type:`button`,"aria-label":`Show image ${n+1}`,onClick:()=>{l(n),e(`gallery_thumb`,`Selected gallery image ${n+1}`,`click`,`pdp_gallery`)},children:C(`img`,{src:i.currentSrc||i.src,alt:``,loading:`lazy`})}))})},d=()=>{let e=t(),n=o();if(!e||!n)return;let r=s().find(t=>{let n=t.querySelector(`img`);return n?N(n.src).includes(N(e)):!1});r&&r!==n.firstElementChild&&n.prepend(r)},f=()=>{let e=o();if(!(!n||!e))if(window.matchMedia(`(min-width: 750px)`).matches){n.parentElement!==i&&i.append(n);let e=s()[0];e&&e.nextElementSibling!==i&&e.after(i)}else{let e=document.querySelector(`.crs-media`);if(!e||e.firstElementChild===n)return;i.remove(),e.prepend(n)}},p=e=>{let t=!1;e.addEventListener(`scroll`,()=>{t||(t=!0,requestAnimationFrame(()=>{t=!1;let n=s().map(t=>Math.abs(t.offsetLeft-e.scrollLeft));c(n.indexOf(Math.min(...n)))}))})},m=null,h;return window.addEventListener(`resize`,f),{sync:()=>{let e=o();if(!e)return;f();let n=t();if(e===m&&n===h)return;let i=e!==m;m=e,h=n,d(),u(),l(0),a.isConnected||e.parentElement?.append(a),r.isConnected||e.parentElement?.after(r),i&&p(e)}}},P=`<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,F=`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,I=`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,L=`<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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
`,R=`<!-- Exported from Figma node 3516:3962. The export wraps this path in the entire
     artboard — an opaque #F5F5F5 rect, the page background, the buy-box panel — which
     would paint a block over the steps, so only the path is kept, in the export's own
     7x16 viewBox. The arrowhead sits at y≈31–35 and is clipped away by that viewBox,
     exactly as the design clips it: the connector is the tapering tail alone. -->
<svg width="7" height="16" viewBox="0 0 7 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.23228 35.2291C2.35881 35.435 2.62826 35.4993 2.8341 35.3727L6.18853 33.3107C6.39438 33.1842 6.45868 32.9148 6.33214 32.7089C6.20561 32.5031 5.93616 32.4388 5.73032 32.5653L2.7486 34.3982L0.915745 31.4164C0.789213 31.2106 0.519768 31.1463 0.313923 31.2728C0.108079 31.3994 0.0437834 31.6689 0.170316 31.8747L2.23228 35.2291ZM2.21297 0.680771C1.63102 1.85536 1.35911 3.45963 1.26726 5.20233C1.17489 6.95508 1.2629 8.89359 1.43082 10.765C1.76643 14.5056 2.42693 18.0304 2.63027 19.3182L3.49456 19.1817C3.28645 17.8637 2.63446 14.3886 2.30232 10.6868C2.13636 8.83715 2.05169 6.94394 2.14105 5.24838C2.23094 3.54276 2.49517 2.08214 2.99702 1.06922L2.21297 0.680771ZM2.63027 19.3182C3.93012 27.5507 2.59074 33.1748 2.17945 34.8984L3.03055 35.1016C3.45443 33.3252 4.8197 27.5743 3.49456 19.1817L2.63027 19.3182Z" fill="#A72561" fill-opacity="0.3"/>
</svg>
`,z=e=>{let t=document.createElement(`span`);return t.className=`crs-step__icon`,t.setAttribute(`aria-hidden`,`true`),t.innerHTML=x(e),t},B=(e,t,n)=>w(`li`,{class:`crs-step`,children:[C(`span`,{class:`crs-step__num`,"aria-hidden":`true`,children:String(e)}),z(t),C(`span`,{class:`crs-step__text`,children:n})]}),V=()=>{let e=document.createElement(`span`);return e.className=`crs-step__arrow`,e.setAttribute(`aria-hidden`,`true`),e.innerHTML=x(R),e},H=e=>{let t=C(`button`,{class:`crs-inline-link`,type:`button`,onClick:e,children:`mailing instructions`}),n=document.createDocumentFragment();n.append(`Mail your inclusions according to `,t);let r=[B(1,P,document.createTextNode(`Pick your jewelry & place an order`)),B(2,F,n),B(3,I,document.createTextNode(`We handcraft your jewelry with your inclusions`)),B(4,L,document.createTextNode(`Receive your jewelry that lasts a lifetime`))];r.slice(1).forEach(e=>e.prepend(V()));let i=C(`ol`,{class:`crs-steps`});return i.append(...r),w(`section`,{class:`crs-howto`,children:[C(`h2`,{class:`crs-howto__title`,children:`How to order your piece with inclusion`}),i,C(`h2`,{class:`crs-howto__title crs-howto__title--made`,children:`How your piece is made`}),C(`p`,{children:`Your keepsake is crafted by one artisan from start to finish, and tracked every step of the way. Any unused inclusions are returned to you with your finished piece — and every item passes a 4-stage quality inspection.`}),C(`p`,{children:`Turnaround time is approximately 6–8 weeks after we receive your inclusions — a memory made by hand, to order.`})]})},U=(e,t)=>{let n=C(`div`,{class:`crs-remote`,children:`Loading…`});return fetch(e).then(e=>e.text()).then(e=>{let r=new DOMParser().parseFromString(e,`text/html`).querySelector(`.rte`);n.textContent=``,n.append(t(r))}),n},W=e=>(e.querySelectorAll(`meta, style, script`).forEach(e=>e.remove()),e),G=e=>!e.textContent.replace(/\s| /g,``),le={Cremations:`Cremations`,"Clothing/Fabric":`Clothing/Fabric`,"Flowers/Petals":`Flowers/Petals`,Hair:`Hair/Fur`,"Breast Milk":`Breast Milk`},ue=e=>{let t=[],n=document.createElement(`div`);n.className=`crs-rte`;let r=null;Array.from(e.children).forEach(e=>{let i=e.textContent.trim().replace(/:$/,``),a=le[i];if(a){r=document.createElement(`div`),r.className=`crs-rte`,t.push({title:a,body:r});return}if(!G(e)){if(/^Other Inclusions:|^Mailing more than one inclusion:/i.test(i)){r=null,n.append(W(e.cloneNode(!0)));return}r?.append(W(e.cloneNode(!0)))}});let i=document.createDocumentFragment();return i.append(w(`div`,{class:`crs-modal__intro`,children:[C(`p`,{children:`Send us a tiny amount of your keepsake, and we'll create a memorial jewelry piece to last a lifetime.`}),C(`p`,{children:`Learn more in the tabs below.`})]}),j(t,`mailing_modal`),n),i},de=()=>U(`/pages/sending-your-petals-cremations-breastmilk`,ue),fe=e=>{let t=document.createElement(`div`);t.className=`crs-rte`;let n=[],r=null;Array.from(e.children).forEach(e=>{if(e.tagName===`H3`){r=document.createElement(`div`),r.className=`crs-rte`,n.push({title:e.textContent.trim(),body:r});return}e.tagName!==`H2`&&(G(e)||(r??t).append(W(e.cloneNode(!0))))});let i=n.find(e=>/waterproof/i.test(e.title)),a=n.find(e=>/how much does/i.test(e.title));if(i&&a){let e=i.body;i.body=a.body,a.body=e}let o=document.createDocumentFragment();return o.append(t,j(n,`faq_modal`)),o},pe=()=>U(`/pages/faq`,fe),K=()=>A(`mailing_instructions`,`How To Send Your Inclusions`,de()),me=()=>A(`faq`,`How to Order Memorial Jewelry & FAQs`,pe()),he=e=>{let t=[{title:`From Order to Keepsake`,body:e.find(e=>/from order to keepsake/i.test(e.title))?.body??document.createTextNode(``)},{title:`How to send your inclusions`,open:K},{title:`How to Order Memorial Jewelry & FAQs`,open:me}],n=document.createElement(`div`);return n.className=`crs-bottom`,n.append(j(t,`pdp_bottom`)),n},ge=`<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.3666 23.7687L19.7082 29.4179C18.3749 30.1977 16.6985 29.2361 16.6985 27.6915V16.3286C16.6985 14.7796 18.3836 13.8186 19.7168 14.6073L29.3752 20.3209C30.6879 21.0975 30.6832 22.9986 29.3666 23.7687Z" fill="#191919"/>
</svg>
`,q=`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19" stroke="#191919" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12L9 16" stroke="#191919" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 12L9 8" stroke="#191919" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,J=`https://conversionrate-store.github.io/a-b_images/petalsandkeepsakes/reels`,Y=[2,3,1],X=3,_e=`<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 4H4v5M20 9V4h-5M15 20h5v-5M4 15v5h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>`,ve=`<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M1 1 13 13M13 1 1 13" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" /></svg>`,Z=`<svg viewBox="0 0 28 49" fill="none" aria-hidden="true"><path d="M25.83 1.41 2.83 24.41l23 23" stroke="currentColor" stroke-width="4" fill="none" /></svg>`,Q=(e,t,n=!1)=>{let r=document.createElement(`span`);return r.className=t,r.setAttribute(`aria-hidden`,`true`),r.innerHTML=n?x(e):e,r},$=e=>C(`video`,{preload:`none`,playsinline:!0,controlsList:`nodownload noremoteplayback noplaybackrate`,disablePictureInPicture:!0,children:C(`source`,{src:`${J}/video_${e}.mp4`,type:`video/mp4`})}),ye=()=>{let t=e=>i.querySelectorAll(`.crs-reel.is-playing`).forEach(t=>{let n=t.querySelector(`video`);n!==e&&(n.pause(),n.currentTime=0,n.removeAttribute(`controls`),t.classList.remove(`is-playing`))}),n=(n,r,i)=>{t(r),n.classList.add(`is-playing`),window.innerWidth>767&&r.setAttribute(`controls`,`controls`),r.play().catch(()=>{}),e(`reels_play`,`Played reel ${i}`,`click`,`pdp_reels`)},r=(r,i)=>{let a=$(r),o=w(`div`,{class:`crs-reel`,"data-id":String(r),children:[w(`picture`,{class:`crs-reel__poster`,children:[C(`source`,{srcset:`${J}/preview_${r}.avif`,type:`image/avif`}),C(`img`,{src:`${J}/preview_${r}.gif`,alt:``,loading:`lazy`})]}),a,C(`button`,{class:`crs-reel__play`,type:`button`,"aria-label":`Play reel ${i}`,onClick:()=>n(o,a,i)}),C(`button`,{class:`crs-reel__expand`,type:`button`,"aria-label":`Watch reel ${i} full size`,onClick:()=>{let n=a.currentTime;t(),be(Y.indexOf(r),n),e(`reels_expand`,`Expanded reel ${i}`,`click`,`pdp_reels`)}})]});return o.querySelector(`.crs-reel__play`).append(Q(ge,`crs-reel__play-icon`,!0)),o.querySelector(`.crs-reel__expand`).innerHTML=_e,o.querySelector(`.crs-reel__poster`).addEventListener(`click`,()=>n(o,a,i)),a.addEventListener(`click`,()=>{a.paused||(a.pause(),e(`reels_pause`,`Paused reel ${i}`,`click`,`pdp_reels`))}),a.addEventListener(`ended`,()=>{a.currentTime=0,a.removeAttribute(`controls`),o.classList.remove(`is-playing`)}),o},i=C(`div`,{class:`crs-reels__strip`});i.append(...Array.from({length:X},()=>Y).flat().map((e,t)=>r(e,t%Y.length+1)));let a=C(`div`,{class:`crs-reels__dots`}),o=C(`button`,{class:`crs-reels__arrow crs-reels__arrow--prev`,type:`button`,"aria-label":`Previous reel`}),s=C(`button`,{class:`crs-reels__arrow crs-reels__arrow--next`,type:`button`,"aria-label":`Next reel`});o.append(Q(q,`crs-reels__arrow-icon`,!0)),s.append(Q(q,`crs-reels__arrow-icon`,!0));let c=()=>Array.from(i.children),l=()=>{let e=i.scrollLeft+i.clientWidth/2,t=c().map(t=>Math.abs(t.offsetLeft+t.offsetWidth/2-e));return t.reduce((e,n,r)=>n<t[e]?r:e,0)},u=e=>e.offsetLeft-(i.clientWidth-e.offsetWidth)/2,d=(e,t=`smooth`)=>{let n=c()[e];n&&i.scrollTo({left:u(n),behavior:t})},f=()=>c()[Y.length].offsetLeft-c()[0].offsetLeft,p=()=>{let e=l();e>=Y.length&&e<Y.length*2||(i.scrollLeft+=e<Y.length?f():-f())};Y.forEach((t,n)=>{let r=C(`button`,{class:`crs-reels__dot`,type:`button`,"aria-label":`Go to reel ${n+1}`,onClick:()=>{d(Y.length+n),e(`reels_dot`,`Jumped to reel ${n+1}`,`click`,`pdp_reels`)}});a.append(r)});let m=-1,h=()=>{let e=l();m!==-1&&e!==m&&t(),m=e,a.querySelectorAll(`.crs-reels__dot`).forEach((t,n)=>t.classList.toggle(`is-active`,n===e%Y.length))};o.addEventListener(`click`,()=>{d(l()-1),e(`reels_arrow`,`Previous reel`,`click`,`pdp_reels`)}),s.addEventListener(`click`,()=>{d(l()+1),e(`reels_arrow`,`Next reel`,`click`,`pdp_reels`)});let g=!1,_;i.addEventListener(`scroll`,()=>{clearTimeout(_),_=setTimeout(p,150),!g&&(g=!0,requestAnimationFrame(()=>{g=!1,h()}))});let v=w(`section`,{class:`crs-reels`,children:[w(`div`,{class:`crs-reels__head`,children:[C(`h2`,{class:`crs-reels__title`,children:`Trusted by 25,000+ families to keep their loved ones close`}),C(`p`,{class:`crs-reels__subtitle`,children:`Real stories from people who carry someone they love — every single day`})]}),i,w(`div`,{class:`crs-reels__nav`,children:[o,a,s]})]});return new IntersectionObserver(e=>e.forEach(e=>e.isIntersecting||t()),{threshold:0}).observe(i),requestAnimationFrame(()=>{d(Y.length,`instant`),h()}),v},be=(t,n)=>{let r=$(Y[t]);r.setAttribute(`controls`,`controls`),r.preload=`auto`;let i=()=>{r.pause(),document.body.classList.remove(`crs-modal-open`),document.removeEventListener(`keydown`,o),u.classList.remove(`crs-lightbox--open`),setTimeout(()=>u.remove(),350)},a=n=>{t=(t+n+Y.length)%Y.length,r.querySelector(`source`).src=`${J}/video_${Y[t]}.mp4`,r.load(),r.play().catch(()=>{}),e(`reels_modal_arrow`,n>0?`Next reel`:`Previous reel`,`click`,`pdp_reels_modal`)},o=e=>{e.key===`Escape`&&i(),e.key===`ArrowLeft`&&a(-1),e.key===`ArrowRight`&&a(1)},s=C(`button`,{class:`crs-lightbox__arrow crs-lightbox__arrow--prev`,type:`button`,"aria-label":`Previous reel`,onClick:()=>a(-1)}),c=C(`button`,{class:`crs-lightbox__arrow crs-lightbox__arrow--next`,type:`button`,"aria-label":`Next reel`,onClick:()=>a(1)}),l=C(`button`,{class:`crs-lightbox__close`,type:`button`,"aria-label":`Close`,onClick:i});s.innerHTML=Z,c.innerHTML=Z,l.innerHTML=ve;let u=w(`div`,{class:`crs-lightbox`,role:`dialog`,"aria-modal":`true`,"aria-label":`Customer reel`,children:[C(`div`,{class:`crs-lightbox__overlay`,onClick:i}),s,w(`div`,{class:`crs-lightbox__stage`,children:[l,r]}),c]});document.addEventListener(`keydown`,o),document.body.append(u),document.body.classList.add(`crs-modal-open`),requestAnimationFrame(()=>u.classList.add(`crs-lightbox--open`)),r.addEventListener(`loadedmetadata`,()=>r.currentTime=n,{once:!0}),r.play().catch(()=>{}),e(`reels_modal_open`,`Opened the reel player`,`click`,`pdp_reels`)};n({name:`PDP update`,dev:`OS`}),r(`exp_pdp`),new class{constructor(){this.sid=``,this.imageIndex=0,this.images={},this.sync=[]}async init(){if(document.body.classList.contains(`crs-pdp`))return;this.addStyles(),this.addFonts();let e=await t(`product-info`);this.sid=e.dataset.section,e.classList.add(`crs-product`),this.product=await s(),this.imageIndex=d(this.product),this.images=f(this.product,this.imageIndex),document.body.classList.add(`crs-pdp`),this.buildUtilityBar(),this.buildInfoColumn(),this.buildMediaColumn(),this.apply();let n=new MutationObserver(()=>{n.disconnect(),this.apply(),n.observe(e,{childList:!0,subtree:!0})});n.observe(e,{childList:!0,subtree:!0}),i(`.crs-options`,`pdp_variant_view`,`pdp`,`Redesigned PDP seen`,1e3)}addStyles(){let e=document.createElement(`style`);e.textContent=a,document.head.appendChild(e)}addFonts(){let e=`https://fonts.googleapis.com/css2?family=Forum&family=Jost:wght@400;500&family=Overlock&display=swap`;if(document.querySelector(`link[href="${e}"]`))return;let t=document.createElement(`link`);t.rel=`stylesheet`,t.href=e,document.head.appendChild(t)}apply(){this.sync.forEach(e=>e()),this.stripCurrencyCodes(),this.priceInButton(),this.saveBadge()}stripCurrencyCodes(){document.querySelectorAll(`#price-${this.sid} .price-item`).forEach(e=>e.textContent=_(e.textContent))}saveBadge(){let e=document.querySelector(`#price-${this.sid}`),t=e?.querySelector(`.price__badge-sale`);if(!e||!t||!e.querySelector(`.price--on-sale`))return;let n=e.querySelector(`.price__sale s.price-item--regular`)?.textContent,r=e.querySelector(`.price__sale .price-item--sale`)?.textContent;if(!n||!r)return;let i=g(n)-g(r);i>0&&(t.textContent=`Save ${v(r.trim(),i)}`)}priceInButton(){let e=document.querySelector(`product-info`),t=e.querySelector(`#price-${this.sid}`),n=e.querySelector(`.product-form__submit`);if(!t||!n)return;let r=t.querySelector(t.querySelector(`.price--on-sale`)?`.price__sale .price-item--sale`:`.price__regular .price-item--regular`);if(!r)return;let i=n.querySelector(`.crs-atc-price`);i||(i=document.createElement(`span`),i.className=`crs-atc-price`,n.querySelector(`span`)?.after(i)),i.textContent=`· ${r.textContent.trim()}`,document.querySelectorAll(`.crs-atc-price`).forEach(t=>e.contains(t)?void 0:t.remove())}async buildUtilityBar(){let e=await t(`.utility-bar .announcement-bar__message`);if(e.closest(`.utility-bar`).classList.add(`crs-utility`),e.querySelector(`.crs-utility__warranty`))return;let n=document.createElement(`span`);n.className=`crs-utility__sep`,n.setAttribute(`aria-hidden`,`true`),n.textContent=`·`;let r=document.createElement(`span`);r.className=`crs-utility__warranty`,r.textContent=`Lifetime Warranty`,e.append(n,r)}order(e,t){e instanceof HTMLElement&&(e.style.order=String(t))}buildInfoColumn(){let t=document.querySelector(`#ProductInfo-${this.sid}`);t.classList.add(`crs-info`);let n=O(this.product,()=>A(`material_guide`,`Material Guide`,this.rte(o)),t=>{t.click(),this.dressGuideClose(),e(`size_guide_open`,`Opened the size guide`,`click`,`pdp_buybox`)});this.sync.push(n.sync);let r=Array.from(t.querySelectorAll(`.product__accordion`)).map(e=>({title:e.querySelector(`.accordion__title`).textContent.trim(),body:e.querySelector(`.accordion__content`).cloneNode(!0)})),i=document.querySelector(`.product__description`);this.description=b(i),i.hidden=!0;let a=this.trustRow(),s=this.helpRow(),c=se(this.description.specs,this.description.prose),l=H(K),u=he(r),d=ye();this.order(t.querySelector(`.product__title`),1),this.order(t.querySelector(`#price-${this.sid}`),2),this.order(n.root,3),this.order(t.querySelector(`variant-selects`),4),this.order(t.querySelector(`product-form`)?.parentElement,5),this.order(a,6),this.order(s,7),this.order(t.querySelector(`[id^="product-form-installment"]`)?.parentElement,8),this.order(t.querySelector(`#Quantity-Form-${this.sid}`),9),this.order(c,10),this.order(d,11),this.order(l,12),this.order(u,13),this.order(t.querySelector(`.product__view-details`),20),t.querySelectorAll(`.product__accordion`).forEach(e=>e.remove()),t.append(n.root,a,s,c,d,l,u)}buildMediaColumn(){document.querySelector(`.product__media-wrapper`).classList.add(`crs-media`);let e=document.querySelector(`.customProductImage`);e?.classList.add(`crs-created`);let t=ee(this.description.specs);if(e&&t){let n=document.createElement(`p`);n.className=`crs-created__caption`,n.textContent=t,e.append(n)}let n=ce(()=>this.images[u(this.product)[this.imageIndex]],e);this.sync.push(n.sync)}async dressGuideClose(){let e=await t(`#custom_notifications button.close`);e.querySelector(`svg`)||(e.innerHTML=k)}rte(e){let t=document.createElement(`div`);return t.className=`crs-rte`,t.innerHTML=e,t}trustRow(){let e=document.createElement(`div`);return e.className=`crs-trust`,e.innerHTML=`<span class="crs-trust__item"><img class="crs-trust__icon" src="${te}" alt="" width="28" height="28">Handcrafted in USA</span><span class="crs-trust__item"><span class="crs-trust__icon crs-trust__icon--svg" aria-hidden="true">${x(ne)}</span>Lifetime Warranty</span>`,e}helpRow(){let t=document.createElement(`div`);return t.className=`crs-help`,t.innerHTML=`Need Help? Call/Text <a href="tel:6626691586">662-669-1586</a> ❤️`,t.querySelector(`a`).addEventListener(`click`,()=>e(`help_call`,`Clicked the help phone number`,`click`,`pdp_buybox`)),t}}().init()})();
