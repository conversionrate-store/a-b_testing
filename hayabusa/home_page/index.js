(function(){var e=(e,t,n,r=``)=>{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:`event-to-ga4`,event_name:e,event_desc:t,event_type:n,event_loc:r}),a(`Event: ${e} | ${t} | ${n} | ${r}`,`success`)},t=e=>new Promise(t=>{let n=document.querySelector(e);if(n){t(n);return}let r=new MutationObserver(()=>{let n=document.querySelector(e);n&&(t(n),r.disconnect())});r.observe(document.documentElement,{childList:!0,subtree:!0})}),n=({name:e,dev:t})=>{console.log(`%c EXP: ${e} (DEV: ${t})`,`background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;`)},r=e=>{let t=setInterval(function(){typeof window.clarity==`function`&&(clearInterval(t),window.clarity(`set`,e,`variant_1`))},1e3)},i=(t,n,r,i,o=1e3,s=.5)=>{let c,l;if(c=new IntersectionObserver(function(t){t[0].isIntersecting===!0?l=setTimeout(()=>{e(n,t[0].target.dataset.visible||i||``,`view`,r),c.disconnect()},o):(a(`Element is not fully visible`,`warn`),clearTimeout(l))},{threshold:[s]}),typeof t==`string`){let e=document.querySelector(t);e&&c.observe(e)}else c.observe(t)},a=(e,t=`info`)=>{let n;switch(t){case`info`:n=`color: #3498db;`;break;case`warn`:n=`color: #f39c12;`;break;case`error`:n=`color: #e74c3c;`;break;case`success`:n=`color: #2ecc71;`;break}console.log(`%c>>> ${e}`,`${n} font-size: 16px; font-weight: 600`)},o=()=>location.pathname===`/`;function s(e){if(o()){e();return}let t=new MutationObserver(()=>{o()&&(t.disconnect(),e())});t.observe(document,{childList:!0,subtree:!0})}var c=[],l;function u(){for(let{node:e,into:t}of c)o()?e.isConnected||t()?.append(e):e.remove()}function d(e,t){c.push({node:e,into:t}),l||(l=new MutationObserver(u),l.observe(document,{childList:!0,subtree:!0})),u()}function f(e,t){if(document.querySelector(`.${t}`))return;let n=document.createElement(`style`);n.className=t,n.textContent=e,d(n,()=>document.head||document.documentElement)}function p(e,t){let n=()=>{let[t,n]=e.children;return n.getBoundingClientRect().left-t.getBoundingClientRect().left},r=()=>{let r=n()*t;if(!r)return;let i=r+((e.scrollLeft-r)%r+r)%r;Math.abs(i-e.scrollLeft)>1&&(e.scrollLeft=i)},i;return e.addEventListener(`scroll`,()=>{clearTimeout(i),i=setTimeout(r,120)}),requestAnimationFrame(r),t=>{r();let i=n(),a=i*Math.max(1,Math.round(e.clientWidth/i));e.scrollBy({left:t*a,behavior:`smooth`})}}var m=`exp_hp`,h=e=>e.toLowerCase().replace(/[^a-z0-9]+/g,`_`);function g(e,t){i(t,`${m}_${h(e)}_view`,e,`Visibility`)}function _(t,n,r){e([m,h(t),r&&h(r),`click`].filter(Boolean).join(`_`),n,`click`,t)}var v=`/*
  Type and button match the site's own full-bleed banners (Boxing Shoes) rather
  than the comp's redraw of them, so the new slider reads as native.
*/
.exp-banner-slider {
  --exp-banner-cnd: HayabusaCnd, ui-sans-serif, system-ui, sans-serif;
  --exp-banner-rc: 'Roboto Condensed', ui-sans-serif, system-ui, sans-serif;
  --exp-banner-shadow: 2px 2px 25px rgb(0 0 0);

  position: relative;
  width: 100%;
}

.exp-banner-slider__track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.exp-banner-slider__track::-webkit-scrollbar {
  display: none;
}

.exp-banner-slider__slide {
  position: relative;
  flex: 0 0 100%;
  aspect-ratio: 375 / 500;
  scroll-snap-align: start;
  color: #fff;
  text-decoration: none;
}

/* Scrim behind the copy — the site darkens its own image tiles the same way.
   The photos are product-lit and bright, and text-shadow alone doesn't hold. */
.exp-banner-slider__slide::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgb(0 0 0 / 70%), rgb(0 0 0 / 0%) 55%);
}

.exp-banner-slider__media {
  position: absolute;
  inset: 0;
}

.exp-banner-slider__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.exp-banner-slider__copy {
  position: absolute;
  z-index: 1; /* Above the scrim, which paints after the slide's children. */
  right: 0;
  bottom: 32px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;
  text-align: center;
}

/* Colour is set on the headings themselves, not inherited from the slide —
   the host styles h2 and p directly, which beats inheritance. */
.exp-banner-slider__title {
  margin: 0;
  color: #fff;
  font-family: var(--exp-banner-cnd);
  font-size: 32px;
  font-weight: 800;
  line-height: 35px;
  text-shadow: var(--exp-banner-shadow);
  text-transform: uppercase;
}

.exp-banner-slider__subtitle {
  margin: 0 0 16px;
  color: #fff;
  font-family: var(--exp-banner-rc);
  font-size: 18px;
  line-height: 25px;
  text-shadow: var(--exp-banner-shadow);
  text-transform: uppercase;
}

.exp-banner-slider__cta {
  padding: 10px 16px;
  background: #fff;
  box-shadow: 2px 2px 25px rgb(0 0 0 / 60%);
  color: #000;
  font-family: var(--exp-banner-rc);
  font-size: 16px;
  text-transform: uppercase;
}

.exp-banner-slider__nav {
  position: absolute;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  transform: translateY(-50%);
  border: 0;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
  color: #000;
  cursor: pointer;
}

/* CSS chevron: the JSX runtime builds nodes with createElement, so an inline
   <svg> would come out as an HTML element and never render. */
.exp-banner-slider__nav::before {
  content: '';
  width: 8px;
  height: 8px;
  border-top: 2px solid currentColor;
  border-right: 2px solid currentColor;
}

.exp-banner-slider__nav--prev {
  left: 16px;
}

.exp-banner-slider__nav--prev::before {
  margin-left: 3px;
  transform: rotate(-135deg);
}

.exp-banner-slider__nav--next {
  right: 16px;
}

.exp-banner-slider__nav--next::before {
  margin-right: 3px;
  transform: rotate(45deg);
}

@media (min-width: 768px) {
  .exp-banner-slider__slide {
    aspect-ratio: 1440 / 855;
  }

  .exp-banner-slider__slide::after {
    background: linear-gradient(to left, rgb(0 0 0 / 65%), rgb(0 0 0 / 0%) 55%);
  }

  /* Copy moves off the bottom and onto the right, clear of the arrows. */
  .exp-banner-slider__copy {
    top: 50%;
    right: 11%;
    bottom: auto;
    left: auto;
    align-items: flex-end;
    max-width: 40%;
    padding: 0;
    transform: translateY(-50%);
    text-align: right;
  }

  .exp-banner-slider__title {
    font-size: 56px;
    line-height: 62px;
  }

  .exp-banner-slider__subtitle {
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 34px;
  }

  .exp-banner-slider__cta {
    padding: 12px 32px;
  }

  .exp-banner-slider__nav--prev {
    left: 44px;
  }

  .exp-banner-slider__nav--next {
    right: 44px;
  }
}
`;function y(e,t){if(!(t==null||typeof t==`boolean`)){if(Array.isArray(t)){for(let n of t)y(e,n);return}e.appendChild(t instanceof Node?t:document.createTextNode(String(t)))}}function b(e,t,n){if(typeof e==`function`)return e(t??{});let{children:r,...i}=t??{},a=document.createElement(e);for(let[e,t]of Object.entries(i))e.startsWith(`on`)&&typeof t==`function`?a.addEventListener(e.slice(2).toLowerCase(),t):t===!0?a.setAttribute(e,``):t!==!1&&t!=null&&a.setAttribute(e,String(t));return y(a,r),a}var x=b,S=`Featured Banners`,C=`https://crsoptimizer.conversionrate.store/uploads/img/hayabusa`,w=[800,1600,2400],T=[480,800,1200],E=(e,t,n)=>n.map(n=>`${C}/${e}-${t}-${n}.webp ${n}w`).join(`, `),D=[{title:`T360 Leather`,subtitle:`Time-Honored Craftsmanship`,href:`/products/hayabusa-t360-leather-boxing-gloves?Color=French+Roast&Size=12oz&from_collection=boxing-gloves`,image:`t360-leather`},{title:`Marvel Hero Elite Boxing Gloves`,subtitle:`T3 Wrist Support & Hand Protection in Marvel Custom Design`,href:`/products/marvels-youth-captain-america-boxing-gloves?Color=Red%2FWhite%2FBlue&Size=10+oz`,image:`marvel-hero-elite`},{title:`T3 Neon Boxing Gloves`,subtitle:`Bright, Bold, and Brilliant`,href:`/products/hayabusa-t3-neon-boxing-gloves`,image:`t3-neon`}],O=({title:e,subtitle:t,href:n,image:r})=>x(`a`,{class:`exp-banner-slider__slide`,href:n,onClick:()=>_(S,e),children:[x(`picture`,{class:`exp-banner-slider__media`,children:[b(`source`,{media:`(min-width: 768px)`,srcset:E(r,`d`,w),sizes:`100vw`}),b(`img`,{class:`exp-banner-slider__image`,src:`${C}/${r}-m-800.webp`,srcset:E(r,`m`,T),sizes:`100vw`,alt:e,loading:`lazy`,decoding:`async`})]}),x(`div`,{class:`exp-banner-slider__copy`,children:[b(`h2`,{class:`exp-banner-slider__title`,children:e}),b(`p`,{class:`exp-banner-slider__subtitle`,children:t}),b(`span`,{class:`exp-banner-slider__cta`,children:`Explore Now`})]})]}),k=()=>{f(v,`exp-banner-slider-styles`);let e=x(`div`,{class:`exp-banner-slider__track`,children:[D.map(O),D.map(O),D.map(O)]}),t=p(e,D.length),n=x(`section`,{class:`exp-banner-slider`,children:[e,b(`button`,{class:`exp-banner-slider__nav exp-banner-slider__nav--prev`,type:`button`,"aria-label":`Previous slide`,onClick:()=>{t(-1),_(S,`Previous slide`,`arrow`)}}),b(`button`,{class:`exp-banner-slider__nav exp-banner-slider__nav--next`,type:`button`,"aria-label":`Next slide`,onClick:()=>{t(1),_(S,`Next slide`,`arrow`)}})]});return g(S,n),n};function A(e,t){let n=new WeakSet,r=()=>{if(!o())return;let r=document.querySelector(e);!r||n.has(r)||(n.add(r),t(r))};new MutationObserver(r).observe(document,{childList:!0,subtree:!0}),r()}var j=`/*
  Mobile only: the control stacks three full-width 3:4 tiles, which pushes the
  whole segmentation far down the page. The variant puts Men and Women side by
  side as tall portraits and gives Kids a full-width band, matching the comp.

  The section is matched by its Kids link, not by its position — while the page
  streams in, :nth-child() briefly points at whichever block has arrived so far.
  Desktop is untouched.
*/
@media (max-width: 767px) {
  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) > div > .flex {
    flex-flow: row wrap;
    gap: 8px;
  }

  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) .module-media-width {
    flex: 0 0 calc((100% - 8px) / 2);
    width: auto;
  }

  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) .module-media-width:nth-child(3) {
    flex-basis: 100%;
  }

  /* Ratios rather than the comp's 375px/183px heights, so the tiles keep their
     proportions on narrower and wider phones alike. */
  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) .module-media-width > a {
    aspect-ratio: 183 / 375;
  }

  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) .module-media-width:nth-child(3) > a {
    aspect-ratio: 375 / 183;
  }

  /* The caption block: centred over the tile instead of pinned bottom-left. */
  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) .module-media-width > a > div:last-child {
    align-items: center;
    padding: 0 8px 53px;
  }

  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) .module-media-width h4 {
    font-size: 20px;
    line-height: 24px;
  }
}
`,M=`Shop By Gender`,N=`.page-transition > .flex.flex-col > .module-row:has(a[href="/collections/kids"])`,P=()=>{f(j,`exp-gender-styles`),A(N,e=>{g(M,e),e.addEventListener(`click`,e=>{let t=e.target.closest(`a`);t&&_(M,t.querySelector(`h4 span`).textContent.trim())})})},F=`.exp-gloves {
  --exp-gloves-cnd: HayabusaCnd, ui-sans-serif, system-ui, sans-serif;
  --exp-gloves-rc: 'Roboto Condensed', ui-sans-serif, system-ui, sans-serif;
  /* Fixed so every card is the same height and the arrows stay centred on the image. */
  --exp-gloves-info-h: 92px;

  /* Spacing above the section belongs to the page rhythm — see globals.css. */
  width: 100%;
  padding: 0 16px;
}

.exp-gloves__title {
  margin: 0 0 16px;
  font-family: var(--exp-gloves-cnd);
  font-size: 24px;
  font-weight: 800;
  text-transform: uppercase;
}

.exp-gloves__viewport {
  position: relative;
}

.exp-gloves__track {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
}

.exp-gloves__track::-webkit-scrollbar {
  display: none;
}

.exp-gloves__card {
  flex: 0 0 100%;
  scroll-snap-align: start;
  color: #000;
  text-decoration: none;
}

.exp-gloves__media {
  padding: 8px;
  background: #f3f4f6;
  aspect-ratio: 1 / 1;
}

.exp-gloves__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.exp-gloves__info {
  height: var(--exp-gloves-info-h);
  padding-top: 12px;
}

.exp-gloves__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 18px;
}

.exp-gloves__badge {
  color: #ff9c00;
  font-family: HayabusaIndustry, Palatino, ui-serif;
  font-size: 13px;
  line-height: 1;
  text-transform: uppercase;
}

.exp-gloves__name {
  display: -webkit-box;
  overflow: hidden;
  margin: 6px 0 4px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-family: var(--exp-gloves-cnd);
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
}

.exp-gloves__price {
  font-family: var(--exp-gloves-rc);
  font-size: 16px;
}

.exp-gloves__nav {
  position: absolute;
  top: calc((100% - var(--exp-gloves-info-h)) / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  transform: translateY(-50%);
  border: 0;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
  color: #000;
  cursor: pointer;
}

/* CSS chevron: the JSX runtime builds nodes with createElement, so an inline
   <svg> would come out as an HTML element and never render. */
.exp-gloves__nav::before {
  content: '';
  width: 8px;
  height: 8px;
  border-top: 2px solid currentColor;
  border-right: 2px solid currentColor;
}

.exp-gloves__nav--prev {
  left: 8px;
}

.exp-gloves__nav--prev::before {
  margin-left: 3px;
  transform: rotate(-135deg);
}

.exp-gloves__nav--next {
  right: 8px;
}

.exp-gloves__nav--next::before {
  margin-right: 3px;
  transform: rotate(45deg);
}

.exp-gloves__cta {
  display: block;
  width: fit-content;
  margin: 24px auto 0;
  padding: 14px 32px;
  border: 1px solid #000;
  color: #000;
  font-family: var(--exp-gloves-rc);
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.exp-gloves__cta:hover {
  background: #000;
  color: #fff;
}

@media (min-width: 768px) {
  .exp-gloves {
    padding: 0 32px;
  }

  .exp-gloves__title {
    margin-bottom: 24px;
    font-size: 32px;
    text-align: center;
  }

  .exp-gloves__track {
    gap: 16px;
  }

  /* Four per view — the 1440w frame's 332px cards. */
  .exp-gloves__card {
    flex: 0 0 calc((100% - 48px) / 4);
  }

  .exp-gloves__media {
    padding: 32px;
  }
}
`,I=`Boxing Gloves`,L=`/collections/boxing-gloves`,R=12,z=e=>e?.textContent?.trim()??``;async function B(){let e=await(await fetch(L)).text();return[...new DOMParser().parseFromString(e,`text/html`).querySelectorAll(`.product-card-hover-shadow`)].filter(e=>e.querySelector(`.okendo-summary-inline`)).map(e=>({href:e.querySelector(`a[href]`).getAttribute(`href`),title:z(e.querySelector(`h4`)),price:z([...e.querySelectorAll(`span`)].find(e=>!e.children.length&&/^\$[\d,.]+$/.test(z(e)))??null),badge:z(e.querySelector(`span.uppercase.font-serif`)),reviews:Number(z(e.querySelector(`.okendo-summary-count`)).replace(/\D/g,``)),image:document.importNode(e.querySelector(`img`),!0),stars:document.importNode(e.querySelector(`.okendo-summary-inline`),!0)})).sort((e,t)=>t.reviews-e.reviews).slice(0,R)}var V=({href:e,title:t,price:n,badge:r,image:i,stars:a})=>x(`a`,{class:`exp-gloves__card`,href:e,onClick:()=>_(I,t),children:[b(`div`,{class:`exp-gloves__media`,children:i.cloneNode(!0)}),x(`div`,{class:`exp-gloves__info`,children:[x(`div`,{class:`exp-gloves__row`,children:[b(`span`,{class:`exp-gloves__badge`,children:r}),a.cloneNode(!0)]}),b(`h4`,{class:`exp-gloves__name`,children:t}),b(`span`,{class:`exp-gloves__price`,children:n})]})]}),H=async()=>{f(F,`exp-gloves-styles`);let e=await B(),t=x(`div`,{class:`exp-gloves__track`,children:[e.map(V),e.map(V),e.map(V)]}),n=p(t,e.length),r=x(`section`,{class:`exp-gloves`,children:[b(`h2`,{class:`exp-gloves__title`,children:`Boxing Gloves`}),x(`div`,{class:`exp-gloves__viewport`,children:[t,b(`button`,{class:`exp-gloves__nav exp-gloves__nav--prev`,type:`button`,"aria-label":`Previous slide`,onClick:()=>{n(-1),_(I,`Previous slide`,`arrow`)}}),b(`button`,{class:`exp-gloves__nav exp-gloves__nav--next`,type:`button`,"aria-label":`Next slide`,onClick:()=>{n(1),_(I,`Next slide`,`arrow`)}})]}),b(`a`,{class:`exp-gloves__cta`,href:L,onClick:()=>_(I,`Explore All Boxing Gloves`,`cta`),children:`Explore All Boxing Gloves`})]});return g(I,r),r},U=`/* Spacing above the section belongs to the page rhythm — see globals.css. */
.exp-quick-links {
  width: 100%;
}

.exp-quick-links__row {
  display: flex;
  gap: 8px;
  padding: 0 16px;
  overflow-x: auto;
  scrollbar-width: none;
}

.exp-quick-links__row::-webkit-scrollbar {
  display: none;
}

.exp-quick-links__item {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  /* Narrow enough that two-word labels wrap onto two lines, as in the design. */
  min-width: 104px;
  max-width: 110px;
  height: 68px;
  padding: 8px 12px;
  background: #000;
  color: #fff;
  font-family: HayabusaCnd, ui-sans-serif, system-ui, sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.exp-quick-links__item:hover {
  opacity: 0.8;
}

@media (min-width: 768px) {
  .exp-quick-links__row {
    gap: 12px;
    padding: 0 32px;
    overflow-x: visible;
  }

  /* 8 equal columns — matches the 161.5px pills of the 1440w Figma frame. */
  .exp-quick-links__item {
    flex: 1 1 0;
    min-width: 0;
    max-width: none;
    font-size: 20px;
  }
}
`,W=`Quick Links`,G=[{title:`Boxing Gloves`,href:`/collections/boxing-gloves`},{title:`Footwear`,href:`/collections/footwear`},{title:`Punching Bags`,href:`/collections/punching-bags`},{title:`Fight Shorts`,href:`/collections/fight-shorts`},{title:`Rash Guards`,href:`/collections/rash-guards`},{title:`Shin Guards`,href:`/collections/shin-guards`},{title:`Jiu Jitsu Gis`,href:`/collections/jiu-jitsu-gis`},{title:`Hand Wraps`,href:`/collections/hand-wraps`}],K=()=>{f(U,`exp-quick-links-styles`);let e=b(`nav`,{class:`exp-quick-links`,"aria-label":`Shop by category`,children:b(`div`,{class:`exp-quick-links__row`,children:G.map(({title:e,href:t})=>b(`a`,{class:`exp-quick-links__item`,href:t,onClick:()=>_(W,e),children:e}))})});return g(W,e),e},q=`/*
  The homepage sections are direct children of one \`display:flex; flex-direction:column\`
  wrapper, so the whole re-order is plain CSS \`order\` — no DOM moves, nothing for
  Hydrogen's React tree to reconcile away, and no reorder flash.

  :nth-child() indexes below are the CONTROL layout. \`checkSectionOrder()\` in index.ts
  logs loudly in dev if Hayabusa ships a section and the mapping drifts.
*/
.page-transition > .flex.flex-col > :nth-child(1) {
  order: 1; /* Hero video — Back To The Grind */
}

.page-transition > .flex.flex-col > :nth-child(2) {
  display: none; /* "Back To The Grind - Features" slider — replaced by the Boxing Gloves slider */
}

.page-transition > .flex.flex-col > :nth-child(3) {
  order: 7; /* Precision Fit Gis banner */
}

.page-transition > .flex.flex-col > :nth-child(4) {
  order: 8; /* Three All-New Gis slider */
}

.page-transition > .flex.flex-col > :nth-child(5) {
  display: none; /* Hayabusa Wrestling banner — removed */
}

.page-transition > .flex.flex-col > :nth-child(6) {
  display: none; /* Wrestling products slider — removed */
}

.page-transition > .flex.flex-col > :nth-child(7) {
  order: 5; /* Boxing Shoes banner */
}

.page-transition > .flex.flex-col > :nth-child(8) {
  order: 6; /* Shop By Collection */
}

.page-transition > .flex.flex-col > :nth-child(9) {
  order: 4; /* Shop Men / Women / Kids segmentation */
}

.page-transition > .flex.flex-col > :nth-child(10) {
  order: 10; /* Hayabusa Blog */
}

.page-transition > .flex.flex-col > :nth-child(11) {
  order: 11; /* Brand tagline */
}

/*
  Vertical rhythm. The site spaces its sections 64px / 128px apart, and unevenly
  — full-bleed banners carry no margin at all, so a re-order can leave two of
  them touching. The comp uses a flat 32px / 44px, with the new blocks sitting
  closer to what's above them. Gaps live on \`margin-top\` only, so each one is
  written in exactly one place.
*/
.page-transition > .flex.flex-col > * {
  margin-top: 32px;
  margin-bottom: 0;
}

.page-transition > .flex.flex-col > :nth-child(1) {
  margin-top: 0; /* Hero video runs flush under the header. */
}

.page-transition > .flex.flex-col > .exp-quick-links,
.page-transition > .flex.flex-col > .exp-gloves,
.page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) {
  margin-top: 16px;
}

@media (min-width: 768px) {
  .page-transition > .flex.flex-col > * {
    margin-top: 44px;
  }

  .page-transition > .flex.flex-col > .exp-quick-links {
    margin-top: 24px;
  }

  .page-transition > .flex.flex-col > .exp-gloves {
    margin-top: 36px;
  }

  /* No longer an exception on desktop — the comp gives it the standard gap. */
  .page-transition > .flex.flex-col > .module-row:has(a[href='/collections/kids']) {
    margin-top: 44px;
  }
}

/* Sections we append live at the end of the DOM and are placed purely by \`order\`. */
.exp-quick-links {
  order: 2;
}

.exp-gloves {
  order: 3;
}

.exp-banner-slider {
  order: 9;
}
`;function J(e){let t=window;return t[e]?!1:(t[e]=!0,!0)}function Y(){return document.documentElement?Promise.resolve():new Promise(e=>{let t=()=>document.documentElement?e():setTimeout(t);t()})}n({name:`HP`,dev:`OS`}),r(`exp_hp`);var X=`.page-transition > .flex.flex-col`,Z=[`Back To The Grind`,`BACK TO THE GRIND - FEATURES`,`PRECISION FIT GIS`,`THREE ALL-NEW GIS`,`HAYABUSA WRESTLING`,``,`Boxing Shoes`,`SHOP BY COLLECTION`,``,`HAYABUSA BLOG`,``];function Q(e){Z.forEach((t,n)=>{if(!t)return;let r=e.children[n]?.querySelector(`h2`)?.textContent?.trim();r!==t&&a(`Section ${n+1} drifted — expected "${t}", got "${r}"`,`error`)})}async function $(){await Y(),f(q,`exp-hp-styles`),Q(await t(X)),P();let e=()=>document.querySelector(X);d(K(),e),d(k(),e),d(await H(),e)}window.top===window.self&&J(`__exp_hp`)&&s($)})();
