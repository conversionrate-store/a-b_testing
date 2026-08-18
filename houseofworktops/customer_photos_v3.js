(function(){var e=(e,t,n,r=``)=>{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:`event-to-ga4`,event_name:e,event_desc:t,event_type:n,event_loc:r}),`${e}${t}${n}${r}`},t=e=>new Promise(t=>{let n=document.querySelector(e);if(n){t(n);return}let r=new MutationObserver(()=>{let n=document.querySelector(e);n&&(t(n),r.disconnect())});r.observe(document.documentElement,{childList:!0,subtree:!0})}),n=({name:e,dev:t})=>{},r=e=>{let t=setInterval(function(){typeof window.clarity==`function`&&(clearInterval(t),window.clarity(`set`,e,`variant_1`))},1e3)},i=(t,n,r,i,a=1e3,o=.5)=>{let s,c;if(s=new IntersectionObserver(function(t){t[0].isIntersecting===!0?c=setTimeout(()=>{e(n,t[0].target.dataset.visible||i||``,`view`,r),s.disconnect()},a):clearTimeout(c)},{threshold:[o]}),typeof t==`string`){let e=document.querySelector(t);e&&s.observe(e)}else s.observe(t)},a=`/* Customer Photos — mirrors the reels-section look (green #093b32, gold heading, square peek slider). */

/* Match Figma: the dark-green section paints a fully opaque #093b32 with the pattern
   at 10% opacity. CSS can't opacity a single background image, so we layer a 90%-opaque
   #093b32 over the pattern over a solid #093b32 — mathematically identical to rendering
   the pattern at 10% over an opaque base, with no extra DOM / z-index churn. */
.reels-section {
  background:
    linear-gradient(rgba(9, 59, 50, 0.5), rgba(9, 59, 50, 0.5)),
    url("https://houseofworktops.co.uk/catalog/view/theme/houseofworktops/dev/image/theme/pattern-dark.svg") 0% 0% / 300% repeat,
    #093b32 !important;
    border-radius: 0;
}

@media (max-width: 768px) {
  .reels-section {
    border-radius: 0 !important;
  }
}
.crs-cp {
  display: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.20);
}

.crs-cp__inner {
  border-radius: 4px;
  overflow: hidden;
  padding: 2rem 0 2.25rem;
}

.crs-cp__head {
  text-align: center;
  padding: 0 16px;
  margin-bottom: 1.5rem; /* 24px gap to the carousel (Figma frame gap-24) */
}

.crs-cp__title {
  color: #ecbb8a;
  font-size: 20px;
  line-height: 30px;
  font-weight: 400; /* Archivo Regular, same as the reels heading */
}

.crs-cp__subtitle {
  color: #fff;
  font-size: 14px;
  line-height: 24px;
  margin: 12px 0 0; /* Figma heading block gap-12 */
}

/* Slider — single centered square card with side peeks */
.crs-cp__slider {
  opacity: 0;
}

.crs-cp__slider.slick-initialized {
  opacity: 1;
}

.crs-cp__slide {
  padding: 0 3px;
  /* 6px gap between cards */
}

.crs-cp__card {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 0;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  background: transparent;
}

.crs-cp__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 4px;
}

/* Nav row: prev ‹ • • • • › next, centered below the slider */
.crs-cp__nav-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 1.5rem; /* 24px gap from the carousel (Figma frame gap-24) */
}

/* Mirror the reels-prev/next buttons: a fixed 10×10 flex box (no padding) with the
   chevron centered, so the arrows sit flush against the dots instead of being pushed
   out by horizontal padding. */
.crs-cp__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
  padding: 0;
  background: transparent;
  border: 0;
  color: #fff;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.crs-cp__nav:hover {
  opacity: 1;
}

.crs-cp__dots {
  display: inline-flex;
}

.crs-cp__dots .slick-dots {
  position: static;
  display: flex !important;
  align-items: center;
  gap: 0.62rem;
  margin: 0;
  padding: 0;
  width: auto;
}

.crs-cp__dots .slick-dots li {
  width: 10px;
  height: 10px;
  margin: 0;
}

.crs-cp__dots .slick-dots li button {
  width: 10px;
  height: 10px;
  padding: 0;
}

/* Dots mirror the reels/Figma style: hollow white-outline circles, solid white when
   active (the gold #ecbb8a is reserved for the heading). */
.crs-cp__dots .slick-dots li button:before {
  content: '';
  width: 10px;
  height: 10px;
  box-sizing: border-box;
  border-radius: 50%;
  background: transparent;
  border: 1px solid #fff;
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
}

.crs-cp__dots .slick-dots li.slick-active button:before {
  background: #fff;
}

/* Lightbox — same geometry as the product-gallery viewer (see
   \`product-gallery/style.css\`) so the two read as one design: a fixed 580px
   square photo box inside a 754px arrow row (23 + 64 + 580 + 64 + 23), the
   product name + size CTA below it, and on mobile a full-width square with the
   arrows overlaid on it. There is no photo-group switcher here. */
.crs-cp-lb {
  /* Photo box side. 140px below reserves the 18px gap + 56px CTA row + margins. */
  --crs-cp-size: min(580px, calc(100vh - 140px), calc(100vw - 210px));
  position: fixed;
  inset: 0;
  z-index: 999999;
  background: rgba(0, 0, 0, 0.86);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.2s, visibility 0.2s;
}

/* The 754px arrow row. Gap is 52px because each arrow carries 12px of padding
   as click target — 52 + 12 lands the chevron 64px from the photo. */
.crs-cp-lb__row {
  display: flex;
  align-items: center;
  gap: 52px;
}

.crs-cp-lb.is-open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

body.crs-cp-modal-open {
  overflow: hidden;
}

/* Loading gate — the modal is a fixed square, so the chrome around it never
   collapses and only needs a spinner while the opened photo decodes. */
.crs-cp-lb__spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 42px;
  height: 42px;
  margin: -21px 0 0 -21px;
  border: 3px solid rgba(255, 255, 255, 0.25);
  border-top-color: #fff;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  animation: crs-cp-spin 0.8s linear infinite;
}

.crs-cp-lb.is-loading .crs-cp-lb__spinner {
  opacity: 1;
}

@keyframes crs-cp-spin {
  to {
    transform: rotate(360deg);
  }
}

.crs-cp-lb__nav {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background: none;
  border: 0;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.2s;
  user-select: none;
}

.crs-cp-lb__nav:hover {
  opacity: 1;
}

.crs-cp-lb .crs-cp__nav-icon {
  display: block;
  width: 23px;
  height: 46px;
  pointer-events: none;
}

/* The 580px photo box. Transparent, so a non-square photo letterboxes onto the
   dimmed overlay rather than a black slab. It is the positioning context for the
   close button, which hangs outside it — hence the separate, clipped stage. */
.crs-cp-lb__modal {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  width: var(--crs-cp-size);
  height: var(--crs-cp-size);
  background: transparent;
}

/* Stage = the clipped photo area (the gesture surface). While zoomed the photo
   overflows it and is dragged around inside, so this is what bounds the zoom —
   and its radius, not the image's corners, is what's on screen there. */
.crs-cp-lb__stage {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 16px;
}

/* Zoom affordance — the photo is click/tap-to-zoom at every viewport. On mobile
   the "Click photo to zoom" pill carries the hint; on desktop the cursor is the
   only signal, so it must read clearly. */
.crs-cp-lb:not(.is-zoomed) .crs-cp-lb__img {
  cursor: zoom-in;
}

.crs-cp-lb.is-zoomed .crs-cp-lb__stage,
.crs-cp-lb.is-zoomed .crs-cp-lb__img {
  cursor: grab;
}

.crs-cp-lb.is-zoomed.is-grabbing .crs-cp-lb__stage,
.crs-cp-lb.is-zoomed.is-grabbing .crs-cp-lb__img {
  cursor: grabbing;
}

/* Sized to the photo itself, not the square box — \`object-fit: contain\` on a
   stretched <img> would letterbox inside the element and the radius would round
   the letterbox instead of the photo. */
.crs-cp-lb__img {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: 16px;
  user-select: none;
  -webkit-user-drag: none;
}

/* Ghost = the incoming neighbour photo, painted alongside the real image while
   a swipe drag/animation is in flight so both are visible with a small gap.
   \`margin: auto\` inside the inset-0 box centres it exactly like the real image;
   JS positions it off-axis via translateX. */
.crs-cp-lb__img--ghost {
  position: absolute;
  inset: 0;
  margin: auto;
  visibility: hidden;
  pointer-events: none;
}

/* Product name + size CTA, 18px below the photo (mirrors the gallery viewer). */
.crs-cp-lb__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: var(--crs-cp-size);
  margin-top: 18px;
}

.crs-cp-lb__title {
  margin: 0;
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  word-break: break-word;
}

.crs-cp-lb__size {
  flex-shrink: 0;
  height: 56px;
  padding: 0 16px;
  border: 1px solid #1f8964;
  border-radius: 4px;
  background: #1f8964;
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  transition: filter 0.2s;
}

.crs-cp-lb__size:hover {
  filter: brightness(1.08);
}

/* "Click photo to zoom" — mobile only, hidden while zoomed. Bottom-centred on
   the image; matches the product gallery pill (Figma 2710:4557). */
.crs-cp-lb__zoom {
  position: absolute;
  left: 50%;
  bottom: 19px;
  transform: translateX(-50%);
  z-index: 10;
  display: none;
  padding: 12px;
  border: 1px solid rgba(255, 238, 224, 0.4);
  border-radius: 34px;
  background: #093b32;
  color: rgba(255, 238, 224, 0.82);
  font-size: 13px;
  letter-spacing: 0.3px;
  white-space: nowrap;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
}

/* The close sits *outside* the photo, at the far right of the 754px arrow row
   (photo right + 64 + 23), level with the photo's top edge. On mobile it moves
   to the viewport's top-right corner. */
.crs-cp-lb__close {
  position: absolute;
  top: 0;
  right: -87px;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  transition: background 0.2s;
}

.crs-cp-lb__close:hover {
  background: #fff;
}

.crs-cp-lb__close svg {
  width: 17px;
  height: 17px;
  stroke: #111;
  stroke-width: 2.5;
  fill: none;
  stroke-linecap: round;
}

/* ---- Mobile: match the product-gallery viewer — a full-width square photo,
   a pinned close, chevron nav buttons, a "Click photo to zoom" pill and the
   same grow-upward zoom. There is no switcher here (single photo group), so the
   square is vertically centred rather than offset. ---- */
@media (max-width: 480px) {
  .crs-cp-lb {
    /* The image + name/CTA are one stack, centred as a unit: \`size + 130px\`
       (32px gap + 98px meta = 26px title + 16px gap + 56px button). The image
       is full-width unless the stack wouldn't fit, and never starts closer than
       64px to the top — that keeps it clear of the 44px close button pinned
       12px down, after which the stack stops centring and sits at that 64px.
       The image keeps the viewport width; it only shrinks when even a 64px top
       margin and a 12px bottom one wouldn't fit (206px = 130 + 64 + 12).
       \`dvh\` is the viewport as it is *right now*, so the stack fills the space
       the user actually sees. The body is scroll-locked while the viewer is
       open, so a collapsing URL bar can't resize it mid-view. (\`svh\` sizes to
       the smallest possible viewport, which shrinks the photo and leaves a dead
       band at the bottom whenever the bar is hidden.) \`vh\` is the fallback for
       older engines. */
    --crs-cp-size: max(180px, min(100vw, calc(100vh - 206px)));
    --crs-cp-size: max(180px, min(100vw, calc(100dvh - 206px)));
    --crs-cp-top: max(64px, calc((100vh - var(--crs-cp-size) - 130px) / 2));
    --crs-cp-top: max(64px, calc((100dvh - var(--crs-cp-size) - 130px) / 2));
  }

  /* Close — pinned to the viewport's top-right corner (like the gallery). */
  .crs-cp-lb__close {
    position: fixed;
    top: 12px;
    right: 13px;
  }

  /* Name + CTA — centred column below the image. */
  .crs-cp-lb__meta {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    top: calc(var(--crs-cp-top) + var(--crs-cp-size) + 32px);
    flex-direction: column;
    justify-content: flex-start;
    gap: 16px;
    width: min(352px, calc(100vw - 32px));
    margin: 0;
  }

  .crs-cp-lb__title {
    font-size: 22px;
    line-height: 26px;
    text-align: center;
  }

  .crs-cp-lb__size {
    font-size: 18px;
    line-height: 24px;
  }

  /* Image — square, bottom edge fixed so it grows *upward* to fill the screen
     on zoom (mirrors the gallery). Centred via \`margin: auto\`, NOT a transform:
     the close is a child and relies on \`position: fixed\` resolving against the
     viewport — a transformed ancestor would become its containing block. */
  .crs-cp-lb__modal {
    position: fixed;
    left: 0;
    right: 0;
    top: var(--crs-cp-top);
    width: var(--crs-cp-size);
    height: var(--crs-cp-size);
    margin: 0 auto;
  }

  /* The photo is full-bleed here, so the stage carries no radius. */
  .crs-cp-lb__stage {
    border-radius: 0;
  }

  .crs-cp-lb.is-zoomed .crs-cp-lb__modal {
    top: 0;
    height: calc(var(--crs-cp-top) + var(--crs-cp-size));
  }

  .crs-cp-lb__img {
    width: 100%;
    height: 100%;
    max-width: none;
    max-height: none;
    object-fit: cover;
    border-radius: 0;
  }

  /* Zoomed: show the whole photo (not a cover-crop) so panning can reach every
     edge; the JS pan clamp is derived from this contained size. */
  .crs-cp-lb.is-zoomed .crs-cp-lb__img {
    object-fit: contain;
  }

  /* Show the zoom pill on the contained image; hide it once zoomed. */
  .crs-cp-lb:not(.is-zoomed) .crs-cp-lb__zoom {
    display: block;
  }

  /* The stage owns horizontal gestures at all times — swipe navigates when not
     zoomed, drag pans when zoomed — so stop the browser from treating the touch
     as a scroll: that would cancel our pointer sequence and kill the swipe. */
  .crs-cp-lb__stage,
  .crs-cp-lb__img {
    touch-action: none;
  }

  /* Chevron arrows — overlaid on the image, 16px in from each edge and pinned to
     the *unzoomed* image's vertical centre so they hold position across states. */
  .crs-cp-lb__nav {
    position: fixed;
    top: calc(var(--crs-cp-top) + var(--crs-cp-size) / 2);
    transform: translateY(-50%);
    padding: 8px;
    z-index: 10;
  }

  .crs-cp-lb__nav--prev {
    left: calc(50vw - var(--crs-cp-size) / 2 + 8px);
  }

  .crs-cp-lb__nav--next {
    right: calc(50vw - var(--crs-cp-size) / 2 + 8px);
  }

  .crs-cp-lb .crs-cp__nav-icon {
    width: 14px;
    height: 28px;
  }
}


.crs-cp+.container {
  margin-top: 0.75rem;
  padding-top: 1.5rem !important;
}`;function o(e){let t=document.createElement(`style`);t.textContent=e,document.head.appendChild(t)}function s(){let e=window.jQuery;e&&e.fn&&e.fn.modal&&e(`#select-size-model`).modal(`show`)}var c=new Set;function l(e){if(!e||c.has(e))return;c.add(e);let t=new Image;t.decoding=`async`,t.src=e}function u(e){let t=window.requestIdleCallback;t?t(e,{timeout:2e3}):setTimeout(e,1200)}var d=`https://conversionrate-store.github.io/a-b_images/houseofworktops/customers_photos`,f={"oak-worktop":{folder:`oak`,count:39},"prime-oak-worktop":{folder:`oak`,count:39},"beech-worktop":{folder:`beech`,count:13},"prime-beech-worktop":{folder:`beech`,count:13},"walnut-worktop":{folder:`walnut`,count:35},"full-stave-deluxe-oak-worktop":{folder:`fs_oak`,count:48},"full-stave-deluxe-rustic-oak-worktop":{folder:`fs_oak`,count:48},"deluxe-oak-worktop":{folder:`dx_oak`,count:8},"black-ash-worktop":{folder:`black_ash`,count:4},"black-walnut-laminate-worktop":{folder:`black_walnut_laminate`,count:10},"athena-marble-compact":{folder:`athena_marble_compact`,count:17},"beige-gold-compact":{folder:`beige_gold`,count:19},"black-gold-compact":{folder:`black_gold`,count:23},"bella-bianche-compact":{folder:`bella_bianche_compact_laminate`,count:45},"bella-bianche-laminate":{folder:`bella_bianca_chipboard`,count:4},"calacatta-marble-compact":{folder:`calacatta_marble_compact_laminate`,count:9},"carrara-solid-surface":{folder:`carrara_marble_solid_surface`,count:5},"carrera-marble-compact-(white-core)":{folder:`carrera_marble_compact_laminate_white_core`,count:7},"carrera-marble-compact-(dark-core)":{folder:`carrera_marble_dark_core`,count:9},"copper-stone-compact":{folder:`copper_stone`,count:5},"cranbury-marble-compact":{folder:`cranburry_marble`,count:8},"distressed-oak-compact-laminate":{folder:`distressed_oak_compact_laminate`,count:19},"gold-vein-compact":{folder:`gold_vein_compact`,count:17},"lucida-white-compact":{folder:`lucida_white_compact`,count:17},"magma-rodolit-compact":{folder:`magma_compact`,count:32},"pure-black-compact":{folder:`pure_matt_black_compact_laminate`,count:5},"terrazzo-worktop-compact-laminate":{folder:`terrazzo_compact`,count:6},"terra-concrete-compact-laminate":{folder:`terra_concrete_oak`,count:17}},p={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`};function m(e){return e.replace(/[&<>"]/g,e=>p[e])}function h(){let e=document.querySelector(`h1`);return m((e&&e.textContent?e.textContent:``).trim()||`Worktop`)}function g(){let e=f[decodeURIComponent(location.pathname.split(`/`).filter(Boolean).pop()||``).toLowerCase()];if(!e)return null;let t=h();return Array.from({length:Math.min(e.count,10)},(n,r)=>({src:`${d}/${e.folder}/${r+1}.webp`,alt:`${t} in a real kitchen`}))}var _={slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!1,dots:!0,speed:400,cssEase:`ease`,centerMode:!0,centerPadding:`70px`,responsive:[{breakpoint:992,settings:{centerPadding:`48px`}},{breakpoint:576,settings:{centerPadding:`35px`}}]},v=`Customer photos section`,y=2,b=20,x=class{constructor(){this.photos=[],this.modalIndex=0,this.lastFocused=null,this.ghostDir=0,this.loadToken=0,this.zoomed=!1,this.dragging=!1,this.moved=!1,this.downOnImg=!1,this.swiping=!1,this.sx=0,this.sy=0,this.startPanX=0,this.startPanY=0,this.panX=0,this.panY=0,this.init()}async init(){if(document.querySelector(`.crs-cp`))return;let e=g();if(!e)return;this.photos=e;let n=await t(`.reels-section`),r=await this.waitForSlick();if(!r)return;this.$=r,o(a);let s=this.buildSection();n.insertAdjacentElement(`afterbegin`,s),this.buildLightbox(),this.initSlider(s),this.wireCards(s),u(()=>this.photos.forEach(e=>l(e.src))),this.$(s).on(`pointerover`,`.crs-cp__card`,e=>{let t=parseInt(e.currentTarget.getAttribute(`data-index`)||`-1`,10);this.photos[t]&&l(this.photos[t].src)}),i(s,`exp_photo_section_view`,v,`Customer photos section viewed`)}waitForSlick(){return new Promise(e=>{let t=30,n=()=>{let r=window.jQuery;if(r&&r.fn&&r.fn.slick)return e(r);if(--t<=0)return e(null);setTimeout(n,100)};n()})}buildSection(){let e=h(),t=this.photos.map((e,t)=>`
        <div class="crs-cp__slide">
          <button class="crs-cp__card" type="button" data-index="${t}" aria-label="View ${e.alt}">
            <img class="crs-cp__img" src="${e.src}" alt="${e.alt}" loading="lazy">
          </button>
        </div>`).join(``),n=document.createElement(`div`);return n.className=`crs-cp`,n.innerHTML=` <div class="crs-cp__inner">
      <div class="crs-cp__head">
        <div class="crs-cp__title">Our ${e} — in Real Kitchens</div>
        <p class="crs-cp__subtitle">See how this ${e} looks once fitted</p>
      </div>
      <div class="crs-cp__slider-wrap">
        <div class="crs-cp__slider">${t}</div>
        <div class="crs-cp__nav-row">
          <button
            class="crs-cp__nav crs-cp__nav--prev"
            type="button"
            aria-label="Previous photo"
          >
            <img src="https://houseofworktops.co.uk/catalog/view/theme/houseofworktops/image/svg-icons/chevron-left-white.svg" alt="" width="10" height="10" aria-hidden="true" />
          </button>
          <div class="crs-cp__dots"></div>
          <button
            class="crs-cp__nav crs-cp__nav--next"
            type="button"
            aria-label="Next photo"
          >
            <img src="https://houseofworktops.co.uk/catalog/view/theme/houseofworktops/image/svg-icons/chevron-right-white.svg" alt="" width="10" height="10" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>`,n}initSlider(t){let n=this.$,r=n(t).find(`.crs-cp__slider`);r.slick({..._,appendDots:n(t).find(`.crs-cp__dots`)});let i=null;r.on(`afterChange`,(t,n,r)=>{i&&=(e(i.name,`${i.desc} - ${r+1}`,i.type,v),null)}),n(t).find(`.crs-cp__nav--prev`).on(`click`,()=>{i={name:`exp_photo_nav_arrow`,desc:`Arrow Left`,type:`click`},r.slick(`slickPrev`)}),n(t).find(`.crs-cp__nav--next`).on(`click`,()=>{i={name:`exp_photo_nav_arrow`,desc:`Arrow Right`,type:`click`},r.slick(`slickNext`)}),n(t).on(`click`,`.crs-cp__dots li`,()=>{i={name:`exp_photo_pagination`,desc:`Pagination`,type:`click`}}),r.on(`swipe`,(e,t,n)=>{i={name:`exp_photo_swipe`,desc:`Swipe ${n}`,type:`other`}})}wireCards(e){this.$(e).on(`click`,`.crs-cp__card`,e=>{let t=e.currentTarget;this.openLightbox(parseInt(t.getAttribute(`data-index`)||`0`,10))})}buildLightbox(){let t=this.$,n=document.createElement(`div`);n.className=`crs-cp-lb`,n.id=`crsCpLightbox`,n.setAttribute(`role`,`dialog`),n.setAttribute(`aria-modal`,`true`),n.setAttribute(`aria-hidden`,`true`),n.setAttribute(`aria-label`,`Customer photo viewer`),n.innerHTML=` <div class="crs-cp-lb__row">
        <button
          class="crs-cp-lb__nav crs-cp-lb__nav--prev"
          type="button"
          aria-label="Previous photo"
        >
          <img
            class="crs-cp__nav-icon"
            src="https://houseofworktops.co.uk/catalog/view/theme/houseofworktops/image/svg-icons/video-previous.svg"
            alt=""
            width="24"
            height="24"
            aria-hidden="true"
          />
        </button>
        <div class="crs-cp-lb__modal" role="document">
          <button class="crs-cp-lb__close" type="button" aria-label="Close">
            <svg viewBox="0 0 14 14" aria-hidden="true" focusable="false">
              <line x1="2" y1="2" x2="12" y2="12"></line>
              <line x1="12" y1="2" x2="2" y2="12"></line>
            </svg>
          </button>
          <div class="crs-cp-lb__stage">
            <img class="crs-cp-lb__img" id="crsCpLightboxImg" alt="" draggable="false" />
            <img class="crs-cp-lb__img crs-cp-lb__img--ghost" alt="" aria-hidden="true" draggable="false" />
            <button class="crs-cp-lb__zoom" type="button">Click photo to zoom</button>
          </div>
        </div>
        <button
          class="crs-cp-lb__nav crs-cp-lb__nav--next"
          type="button"
          aria-label="Next photo"
        >
          <img
            class="crs-cp__nav-icon"
            src="https://houseofworktops.co.uk/catalog/view/theme/houseofworktops/image/svg-icons/video-next.svg"
            alt=""
            width="24"
            height="24"
            aria-hidden="true"
          />
        </button>
      </div>
      <div class="crs-cp-lb__meta">
        <p class="crs-cp-lb__title">${h()}</p>
        <button class="crs-cp-lb__size" type="button">Choose Worktop Size</button>
      </div>
      <div class="crs-cp-lb__spinner" aria-hidden="true"></div>`,document.body.appendChild(n),this.lb=n,this.img=n.querySelector(`#crsCpLightboxImg`),this.ghost=n.querySelector(`.crs-cp-lb__img--ghost`),this.stage=n.querySelector(`.crs-cp-lb__stage`);let r=t(n);r.find(`.crs-cp-lb__close`).on(`click`,()=>{e(`exp_photo_close`,`Close`,`click`,v),this.closeLightbox()}),n.querySelector(`.crs-cp-lb__close`).addEventListener(`pointerdown`,e=>e.stopPropagation()),r.find(`.crs-cp-lb__size`).on(`click`,()=>{e(`exp_photo_size`,`Choose Worktop Size`,`click`,v),this.closeLightbox(),s()}),r.find(`.crs-cp-lb__nav--prev`).on(`click`,()=>this.navigate(-1,`Arrow Left`)),r.find(`.crs-cp-lb__nav--next`).on(`click`,()=>this.navigate(1,`Arrow Right`)),r.on(`click`,t=>{t.target===n&&(e(`exp_photo_overlay`,`Overlay close`,`click`,v),this.closeLightbox())});let i=n.querySelector(`.crs-cp-lb__zoom`);i.addEventListener(`pointerdown`,e=>e.stopPropagation()),i.addEventListener(`click`,e=>{e.stopPropagation(),this.setZoom(!0)}),this.stage.addEventListener(`pointerdown`,e=>this.onPointerDown(e)),this.stage.addEventListener(`pointermove`,e=>this.onPointerMove(e)),this.stage.addEventListener(`pointerup`,e=>this.onPointerUp(e)),this.stage.addEventListener(`pointercancel`,()=>{this.dragging=!1,this.lb.classList.remove(`is-grabbing`),this.zoomed||this.springBack()}),t(document).on(`keydown.crsCp`,e=>{n.getAttribute(`aria-hidden`)!==`true`&&(e.key===`Escape`?this.closeLightbox():e.key===`ArrowLeft`?this.showAt(this.modalIndex-1):e.key===`ArrowRight`?this.showAt(this.modalIndex+1):e.key===`Tab`&&this.trapFocus(n,e))})}trapFocus(e,t){let n=Array.from(e.querySelectorAll(`button`)).filter(e=>e.offsetParent!==null);if(!n.length)return;let r=n[0],i=n[n.length-1],a=document.activeElement;t.shiftKey&&a===r?(t.preventDefault(),i.focus()):!t.shiftKey&&a===i&&(t.preventDefault(),r.focus())}isMobile(){return window.matchMedia(`(max-width: 480px)`).matches}setZoom(t){this.zoomed=t,this.panX=0,this.panY=0,this.lb.classList.toggle(`is-zoomed`,t),this.img.style.transition=`transform 0.25s ease`,t?(requestAnimationFrame(()=>this.applyPan()),e(`exp_photo_zoom`,`Zoom ${this.modalIndex+1}`,`click`,v)):this.img.style.transform=``}applyPan(){let e=this.stage.clientWidth,t=this.stage.clientHeight,n=this.img.naturalWidth,r=this.img.naturalHeight,i,a;if(n&&r){let o=Math.min(e/n,t/r);i=Math.max(0,(n*o*y-e)/2),a=Math.max(0,(r*o*y-t)/2)}else i=(y-1)*e/2,a=(y-1)*t/2;this.panX=Math.min(i,Math.max(-i,this.panX)),this.panY=Math.min(a,Math.max(-a,this.panY)),this.img.style.transform=`translate(${this.panX}px, ${this.panY}px) scale(${y})`}onPointerDown(e){if(!this.swiping){this.dragging=!0,this.moved=!1,this.downOnImg=e.target===this.img,this.img.style.transition=``,this.lb.classList.add(`is-grabbing`),this.sx=e.clientX,this.sy=e.clientY,this.startPanX=this.panX,this.startPanY=this.panY;try{this.stage.setPointerCapture(e.pointerId)}catch{}}}onPointerMove(e){if(!this.dragging)return;let t=e.clientX-this.sx,n=e.clientY-this.sy;if((Math.abs(t)>6||Math.abs(n)>6)&&(this.moved=!0),this.zoomed)this.panX=this.startPanX+t,this.panY=this.startPanY+n,this.applyPan(),e.preventDefault();else if(this.moved&&this.isMobile()){let n=this.swipeW()+b,r=Math.max(-n,Math.min(n,t)),i=t<0?1:-1;this.setGhost(i),this.img.style.transform=`translateX(${r}px)`,this.ghost.style.transform=`translateX(${r+i*n}px)`,e.preventDefault()}}onPointerUp(t){if(this.lb.classList.remove(`is-grabbing`),!this.dragging)return;this.dragging=!1;let n=t.clientX-this.sx;if(this.zoomed){this.moved||this.setZoom(!1);return}if(Math.abs(n)>this.swipeW()/5){let t=n<0?1:-1,r=()=>e(`exp_photo_full_swipe`,`Swipe ${t>0?`left`:`right`} - ${this.modalIndex+1}`,`other`,v);this.isMobile()?this.animateSwipe(t,r):(this.showAt(this.modalIndex+t),r())}else this.moved?this.springBack():this.downOnImg&&this.setZoom(!0)}swipeW(){return this.stage.clientWidth||window.innerWidth}setGhost(e){let t=this.photos.length,n=((this.modalIndex+e)%t+t)%t,r=this.photos[n].src;this.ghost.getAttribute(`src`)!==r&&(this.ghost.src=r),this.ghost.style.visibility=`visible`,this.ghostDir=e}hideGhost(){this.ghost.style.visibility=`hidden`,this.ghost.style.transition=``,this.ghostDir=0}navigate(t,n){if(this.swiping)return;let r=()=>e(`exp_photo_arrow`,`${n} - ${this.modalIndex+1}`,`click`,v);this.isMobile()&&!this.zoomed?this.animateSwipe(t,r):(this.showAt(this.modalIndex+t),r())}animateSwipe(e,t){this.swiping=!0;let n=this.img,r=this.ghost,i=this.swipeW()+b;this.ghostDir!==e&&(this.setGhost(e),r.style.transition=`none`,r.style.transform=`translateX(${e*i}px)`),n.style.transition=r.style.transition=`transform 0.26s ease-out`,n.style.transform=`translateX(${-e*i}px)`,r.style.transform=`translateX(0px)`,setTimeout(()=>{this.showAt(this.modalIndex+e),t(),n.style.transition=`none`;let r=()=>{n.style.transform=``,this.hideGhost(),requestAnimationFrame(()=>{n.style.transition=``,this.swiping=!1})};n.decode?n.decode().then(r,r):r()},270)}springBack(){let e=this.img,t=this.ghost;e.style.transition=`transform 0.18s ease`,e.style.transform=``,this.ghostDir&&(t.style.transition=`transform 0.18s ease`,t.style.transform=`translateX(${this.ghostDir*(this.swipeW()+b)}px)`),setTimeout(()=>{e.style.transition=``,this.hideGhost()},200)}showAt(e){let t=this.photos.length,n=(e+t)%t;this.modalIndex=n,this.zoomed&&this.setZoom(!1),this.setImage(this.photos[n].src,this.photos[n].alt),l(this.photos[(n+1)%t].src),l(this.photos[(n-1+t)%t].src)}setImage(e,t){let n=++this.loadToken,r=!!this.img.naturalWidth;this.img.alt=t,this.img.src=e,r||this.lb.classList.add(`is-loading`);let i=()=>{n===this.loadToken&&this.lb.classList.remove(`is-loading`)};this.img.decode?this.img.decode().then(i,i):i()}openLightbox(t){let n=this.lb;n&&(this.lastFocused=document.activeElement,this.showAt(t),n.classList.add(`is-open`),n.setAttribute(`aria-hidden`,`false`),document.body.classList.add(`crs-cp-modal-open`),n.querySelector(`.crs-cp-lb__close`)?.focus(),e(`exp_photo_open`,`Opened customer photo ${t+1}`,`click`,v))}closeLightbox(){let e=this.lb;e&&(this.zoomed&&this.setZoom(!1),this.swiping=!1,this.img.style.transition=``,this.img.style.transform=``,this.ghost.style.transform=``,this.hideGhost(),this.loadToken++,e.classList.remove(`is-open`,`is-loading`),e.setAttribute(`aria-hidden`,`true`),document.body.classList.remove(`crs-cp-modal-open`),this.lastFocused?.focus(),this.lastFocused=null)}},S=`/* Segmented "Product photos / Real kitchens" switcher rendered straight into the
   PDP gallery — Figma 3283:8032 (desktop) / 3283:8043 (mobile). It never filters:
   a click reorders the two packs, so every photo stays reachable through
   "See More Images" on desktop and by swiping on mobile. */

.crs-gsw {
  display: flex;
  justify-content: center;
  margin: 0 0 12px;
}

.crs-gsw__track {
  position: relative;
  display: inline-flex;
  gap: 12px;
  padding: 8px;
  border-radius: 999px;
  background: #093b32;
}

.crs-gsw__seg {
  position: relative;
  z-index: 1;
  min-height: 46px;
  padding: 12px 26px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: rgba(255, 238, 224, 0.82);
  font-size: 15px;
  line-height: 1;
  letter-spacing: 0.3px;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.25s;
}

.crs-gsw__seg.is-active {
  color: #fff;
}

/* Sliding highlight behind the labels — JS sets its width/position to the active
   segment; the transition animates the travel between the two. */
.crs-gsw__thumb {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  border-radius: 999px;
  background: #1f8964;
  pointer-events: none;
  transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1),
    width 0.32s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Nothing in the gallery opens any more (see \`suppressPopup\`), so the theme's
   tile anchors must stop advertising a click that no longer happens. */
.image-popup a,
.worktop-thumbnail-slider {
  cursor: default;
}

/* Injected photos. The customer set is mixed portrait/landscape while the host
   gallery is square throughout, so crop to a square instead of breaking the
   grid rhythm / slider height. */
.crs-gsw-tile img,
.crs-gsw-slide img {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}

/* Windowed pagination dots (see \`capDots\`). The theme's dot container is clipped
   to MAX_DOTS slots and the strip inside it is translated, so moving past the
   window visibly slides every dot along — hiding the off-window ones instead
   would swap the strip's contents with no motion, leaving the active dot
   apparently frozen mid-row. */
.crs-gsw-dots {
  flex: none;
  overflow: hidden;
}

.crs-gsw-dots ul.slick-dots {
  width: max-content;
  flex-wrap: nowrap;
  transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1);
}

/* \`flex: none\` so the dots keep their pitch inside the narrower viewport. The
   dot at an end the strip continues past is scaled down — rather than resized —
   to read as "there is more this way" without disturbing that pitch. */
.crs-gsw-dots ul.slick-dots > li {
  flex: none;
  transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1);
}

.crs-gsw-dot--edge {
  transform: scale(0.6);
}

@media (max-width: 767px) {
  .crs-gsw__track {
    gap: 8px;
    padding: 6px;
  }

  .crs-gsw__seg {
    min-height: 38px;
    padding: 12px;
    font-size: 13px;
  }
}
`,C=`Product gallery`,w=`.image-popup`,T=`.worktop-thumbnail-slider`,E=`crs-kitchen`,D=4,O=7,k=class{constructor(){this.slider=null,this.segs=[],this.productCount=0,this.kitchenFirst=!1,this.expanded=!1,this.init()}async init(){if(document.querySelector(`.crs-gsw`))return;let e=g();if(!e||!e.length)return;let n=(await t(w)).parentElement;n&&(this.row=n,this.productCount=n.querySelectorAll(w).length,this.slider=document.querySelector(T),o(S),this.suppressPopup(),this.addTiles(e),this.addSlides(e),this.mount(e.length),this.applyOrder(),this.moveThumb(!0),document.getElementById(`loadMore`)?.addEventListener(`click`,()=>{this.expanded=!0,this.applyVisibility()}),window.addEventListener(`resize`,()=>{this.moveThumb(!0),this.capDots()}))}suppressPopup(){document.addEventListener(`click`,e=>{let t=e.target;!t||!t.closest||!t.closest(`${w} a`)||(e.preventDefault(),e.stopImmediatePropagation())},!0)}addTiles(e){let t=e.map(e=>`
          <div class="col-6 image-popup crs-gsw-tile ${E}">
            <div class="mb-4">
              <img src="${e.src}" alt="${e.alt}" loading="lazy" decoding="async" />
            </div>
          </div>`).join(``);this.row.insertAdjacentHTML(`beforeend`,t)}addSlides(e){let t=this.slider;if(!t)return;let n=window.jQuery,r=n&&t.classList.contains(`slick-initialized`);e.forEach(e=>{let i=`<div class="crs-gsw-slide ${E}">
        <img src="${e.src}" alt="${e.alt}" class="d-block w-100 rounded" loading="lazy" decoding="async" />
      </div>`;r?n(t).slick(`slickAdd`,i):t.insertAdjacentHTML(`beforeend`,i)}),n&&(n(t).on(`reInit`,()=>this.syncSlider()),n(t).on(`beforeChange`,(e,t,n,r)=>this.capDots(r)),n(t).on(`init reInit setPosition afterChange`,()=>this.capDots()),this.capDots())}mount(t){let n=document.createElement(`div`);n.className=`crs-gsw`,n.innerHTML=`
      <div class="crs-gsw__track" role="tablist" aria-label="Photo type">
        <span class="crs-gsw__thumb" aria-hidden="true"></span>
        <button class="crs-gsw__seg is-active" type="button" role="tab" aria-selected="true" data-group="product">
          Product photos (${this.productCount})
        </button>
        <button class="crs-gsw__seg" type="button" role="tab" aria-selected="false" data-group="kitchen">
          Real kitchens (${t})
        </button>
      </div>`;let r=this.slider&&this.slider.parentElement||this.row.parentElement.parentElement;r.insertBefore(n,r.firstChild),this.thumb=n.querySelector(`.crs-gsw__thumb`),this.segs=Array.from(n.querySelectorAll(`.crs-gsw__seg`)),this.segs.forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-group`)===`kitchen`;this.setGroup(n),e(`exp_gallery_switch`,n?`Real kitchens`:`Product photos`,`click`,C)})})}setGroup(e){this.kitchenFirst!==e&&(this.kitchenFirst=e,this.applyOrder(),this.syncSlider(),this.moveThumb())}applyOrder(){let e=Array.from(this.row.children),t=e.filter(e=>e.classList.contains(E)),n=e.filter(e=>!e.classList.contains(E));(this.kitchenFirst?t.concat(n):n.concat(t)).forEach(e=>this.row.appendChild(e)),this.applyVisibility(),this.segs.forEach(e=>{let t=e.getAttribute(`data-group`)===`kitchen`===this.kitchenFirst;e.classList.toggle(`is-active`,t),e.setAttribute(`aria-selected`,String(t))})}applyVisibility(){Array.from(this.row.children).forEach((e,t)=>{let n=e,r=this.expanded||t<D,i=getComputedStyle(n).display===`none`;r&&i?n.style.display=`block`:!r&&!i&&(n.style.display=`none`)})}syncSlider(){let e=window.jQuery;!e||!this.slider||this.slider.classList.contains(`slick-initialized`)&&e(this.slider).slick(`slickGoTo`,this.kitchenFirst?this.productCount:0)}capDots(e){let t=this.slider?.slick,n=t&&t.$dots&&t.$dots[0];if(!n)return;let r=Array.from(n.children),i=r.length;if(!i)return;let a=i>1?r[1].offsetLeft-r[0].offsetLeft:r[0].offsetWidth;if(!a)return;let o=n.parentElement;o&&(o.classList.add(`crs-gsw-dots`),o.style.width=`${Math.min(i,O)*a}px`);let s=Math.min(Math.max((typeof e==`number`?e:t.currentSlide||0)-Math.floor(O/2),0),Math.max(i-O,0)),c=Math.min(s+O,i);n.style.transform=`translateX(${-s*a}px)`,r.forEach((e,t)=>e.classList.toggle(`crs-gsw-dot--edge`,t===s&&s>0||t===c-1&&c<i))}moveThumb(e=!1){let t=this.segs.find(e=>e.classList.contains(`is-active`));t&&(e&&(this.thumb.style.transition=`none`),this.thumb.style.width=`${t.offsetWidth}px`,this.thumb.style.height=`${t.offsetHeight}px`,this.thumb.style.transform=`translate(${t.offsetLeft}px, ${t.offsetTop}px)`,e&&(this.thumb.offsetWidth,requestAnimationFrame(()=>this.thumb.style.transition=``)))}},A=`/* Outer spacing for the relocated blocks, matching Figma.

   Desktop (node 2390:5912): 28px gap + inset 1px separator between the green reels
   section and the Free-services block, 25px from the separator to the heading, and a
   24px gap between the carpenter card and the value-badges row.

   Mobile <768px (node 2390:7539 / 2534:2): no separator, heading sits directly below
   the 28px gap, and a 28px gap before the value-badges row. */
/* Postcode / delivery-estimate block (the div.mb-4 holding #delivery_check):
   extra top spacing per Figma. */
/* Scope with the child combinator (\`#delivery_check\` is the form itself) so only the
   inner div directly wrapping it matches — the outer \`.col-md-5.mb-4\` column is also a
   \`.mb-4\` ancestor, and a bare \`:has(#delivery_check)\` would push the whole column down. */
.mb-4:has(> #delivery_check) {
  margin-top: 1.5rem;
}

/* The dropdown trigger inside it carries Bootstrap \`.mb-2\`; drop that bottom gap. */
.mb-4:has(> #delivery_check) .delivery-check-dropdown {
  margin-bottom: 0 !important;
}

/* Separator + top spacing below the green reels section, applied to whichever block
   leads the relocated group: the Free-services card when present, otherwise the
   value-badges row on PDPs that ship no card (e.g. upstands/splashbacks). */
.crs-rb-lead {
  position: relative;
  margin-top: 28px;
  padding-top: 25px !important;
}

.crs-rb-lead::before {
  content: "";
  position: absolute;
  top: 0;
  left: 14px;
  right: 14px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.crs-rb-free h5 {
  margin-top: 0 !important;
}

/* card -> badges gap (only when the badges row follows the card rather than leading) */
.crs-rb-badges:not(.crs-rb-lead) {
  margin-top: 24px;
}

@media (max-width: 767.98px) {
  /* mobile design has no separator; the lead block sits at the top of the group */
  .crs-rb-lead {
    padding-top: 0;
  }

  .crs-rb-lead::before {
    display: none;
  }

  .crs-rb-badges:not(.crs-rb-lead) {
    margin-top: 28px;
  }

  /* Decorative separator above the postcode block — present only in the mobile design
     (Figma node 2390:7466), absent on desktop. The host's own <hr> that drew this line
     is removed together with the Trustpilot widgets, so re-draw it here as a full-width
     border-top (matching the host hr). The block's existing 24px margin-top sits above the
     line; padding-top spaces it from the content. */
  .mb-4:has(> #delivery_check) {
    padding-top: 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  /* Carpenter-support card: the host's \`mx-1\` sets margin-left/right with !important —
     zero them so the card runs full width, and add a small right padding (Figma mobile). */
  .crs-rb-free .row.bg-gray-100 {
    margin: 0 !important;
    padding-right: 0.5rem;
  }
}
`,j=class{constructor(){this.freeEl=null,this.badgesEl=null,this.init()}async init(){if(document.querySelector(`.crs-rb-lead`))return;let e=await t(`.reels-mobile-fullwidth`);for(o(A);e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE;)e.removeChild(e.firstChild);this.relocate(e)}relocate(e,t=0){if(!this.freeEl){for(let t of document.querySelectorAll(`h5`))if(/Free services included/i.test(t.textContent||``)){let n=t.closest(`div.mb-0`);n&&(e.insertAdjacentElement(`afterend`,n),n.classList.add(`crs-rb-free`),this.freeEl=n);break}}if(!this.badgesEl)for(let t of document.querySelectorAll(`div.row.align-items-start.py-2`)){let n=t.textContent||``;if(/Best Value for Money/i.test(n)&&/2 Man Delivery/i.test(n)){(this.freeEl??e).insertAdjacentElement(`afterend`,t),t.classList.add(`crs-rb-badges`),this.badgesEl=t;break}}let n=this.freeEl??this.badgesEl;if(n&&(n.classList.add(`crs-rb-lead`),this.badgesEl&&this.badgesEl!==n&&this.badgesEl.classList.remove(`crs-rb-lead`)),!(this.freeEl&&this.badgesEl)){if(t<20){setTimeout(()=>this.relocate(e,t+1),250);return}!this.freeEl&&this.badgesEl}}},M=`/* Trustpilot rating row (Figma node 2433:1324): centered "Excellent 4.8 ★★★★★ Trustpilot"
   on the dark-green reels section, sitting above the "Trusted by 150,000+" heading. */
.crs-tp {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
  text-decoration: none;
}

.crs-tp:hover {
  text-decoration: none;
}

.crs-tp__rating {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
  color: #fff;
  white-space: nowrap;
}

.crs-tp__stars {
  display: block;
  width: 100px;
  height: auto;
}

.crs-tp__logo {
  display: inline-flex;
  width: 77px;
  height: 19px;
}

.crs-tp__logo svg {
  display: block;
  width: 100%;
  height: 100%;
}
`,N=`<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 77 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Logo &#226;&#134;&#146; Img">
<path id="Vector" d="M20.2159 6.78487H28.0019V8.23389H24.9404V16.3796H23.257V8.23389H20.2091V6.78487H20.2159ZM27.6693 9.43238H29.1084V10.7731H29.1356C29.1831 10.5835 29.2713 10.4007 29.4003 10.2246C29.5293 10.0486 29.6854 9.87928 29.8687 9.73709C30.052 9.58812 30.2556 9.47301 30.4796 9.37822C30.7036 9.29019 30.9344 9.24279 31.1652 9.24279C31.3417 9.24279 31.4707 9.24956 31.5386 9.25633C31.6065 9.26311 31.6744 9.27665 31.749 9.28342V10.7595C31.6404 10.7392 31.5318 10.7257 31.4164 10.7121C31.301 10.6986 31.1924 10.6918 31.0838 10.6918C30.8258 10.6918 30.5815 10.746 30.3507 10.8476C30.1199 10.9491 29.923 11.1049 29.7533 11.3012C29.5836 11.5044 29.4478 11.7481 29.346 12.046C29.2442 12.344 29.1967 12.6825 29.1967 13.0685V16.3728H27.6625V9.43238L27.6693 9.43238ZM38.802 16.3796H37.295V15.4113H37.2678C37.0778 15.7634 36.7995 16.041 36.4261 16.2509C36.0527 16.4608 35.6726 16.5692 35.2857 16.5692C34.3693 16.5692 33.704 16.3457 33.2967 15.892C32.8894 15.4384 32.6858 14.7545 32.6858 13.8404V9.43238H34.2199V13.6914C34.2199 14.3008 34.3353 14.7342 34.5729 14.9847C34.8037 15.2352 35.1363 15.3639 35.5572 15.3639C35.883 15.3639 36.1478 15.3165 36.365 15.2149C36.5822 15.1134 36.7587 14.9847 36.8877 14.8154C37.0235 14.6529 37.1185 14.4498 37.1796 14.2196C37.2407 13.9894 37.2678 13.7388 37.2678 13.468V9.43916H38.802V16.3796ZM41.4154 14.1519C41.463 14.5988 41.6327 14.9102 41.9246 15.0931C42.2232 15.2691 42.5762 15.3639 42.9903 15.3639C43.1329 15.3639 43.2958 15.3504 43.4791 15.33C43.6623 15.3097 43.8388 15.2623 43.995 15.2014C44.1579 15.1405 44.2868 15.0457 44.3955 14.9238C44.4973 14.8019 44.5448 14.6462 44.538 14.4498C44.5312 14.2534 44.4566 14.0909 44.3208 13.969C44.185 13.8404 44.0153 13.7456 43.8049 13.6643C43.5945 13.5899 43.3569 13.5222 43.0853 13.468C42.8138 13.4138 42.5423 13.3529 42.264 13.2919C41.9789 13.231 41.7005 13.1497 41.4358 13.0617C41.1711 12.9737 40.9335 12.8518 40.723 12.6961C40.5126 12.5471 40.3429 12.3507 40.2207 12.1138C40.0917 11.8768 40.0306 11.5856 40.0306 11.2335C40.0306 10.8543 40.1257 10.5428 40.309 10.2855C40.4922 10.0282 40.7298 9.82511 41.0081 9.66937C41.2932 9.51364 41.6055 9.4053 41.9517 9.33759C42.2979 9.27665 42.6305 9.24279 42.9428 9.24279C43.3026 9.24279 43.6488 9.28342 43.9746 9.3579C44.3004 9.43238 44.5991 9.55426 44.8638 9.73031C45.1286 9.89959 45.3458 10.123 45.5223 10.3939C45.6988 10.6647 45.8074 10.9965 45.8549 11.3825H44.2529C44.1782 11.0168 44.0153 10.7663 43.7506 10.6444C43.4858 10.5158 43.1804 10.4548 42.841 10.4548C42.7323 10.4548 42.6034 10.4616 42.454 10.4819C42.3047 10.5022 42.1689 10.5361 42.0332 10.5835C41.9042 10.6309 41.7956 10.7054 41.7005 10.8002C41.6123 10.895 41.5648 11.0168 41.5648 11.1726C41.5648 11.3622 41.6327 11.5111 41.7616 11.6262C41.8906 11.7413 42.0603 11.8361 42.2707 11.9174C42.4812 11.9919 42.7188 12.0596 42.9903 12.1138C43.2618 12.1679 43.5401 12.2289 43.8252 12.2898C44.1036 12.3507 44.3751 12.432 44.6466 12.52C44.9181 12.608 45.1557 12.7299 45.3662 12.8857C45.5766 13.0414 45.7463 13.231 45.8753 13.4612C46.0043 13.6914 46.0721 13.9826 46.0721 14.3211C46.0721 14.7342 45.9771 15.0795 45.787 15.3707C45.597 15.6551 45.3526 15.892 45.0539 16.0681C44.7552 16.2441 44.4158 16.3796 44.0493 16.4608C43.6827 16.5421 43.3161 16.5827 42.9564 16.5827C42.5151 16.5827 42.1078 16.5353 41.7345 16.4337C41.3611 16.3322 41.0353 16.1832 40.7638 15.9868C40.4922 15.7837 40.275 15.5332 40.1189 15.2352C39.9628 14.9373 39.8813 14.5784 39.8677 14.1654H41.4154V14.1519ZM46.4794 9.43238H47.6402V7.34687H49.1744V9.43238H50.5592V10.5767H49.1744V14.2873C49.1744 14.4498 49.1811 14.5852 49.1947 14.7071C49.2083 14.8222 49.2422 14.9238 49.2898 15.005C49.3373 15.0863 49.4119 15.1472 49.5138 15.1879C49.6156 15.2285 49.7446 15.2488 49.9211 15.2488C50.0297 15.2488 50.1383 15.2488 50.2469 15.242C50.3555 15.2352 50.4641 15.2217 50.5727 15.1946V16.3796C50.403 16.3999 50.2333 16.4134 50.0772 16.4337C49.9143 16.4541 49.7514 16.4608 49.5817 16.4608C49.1744 16.4608 48.8485 16.4202 48.6041 16.3457C48.3598 16.2712 48.1629 16.1561 48.0272 16.0072C47.8846 15.8582 47.7964 15.6754 47.742 15.4519C47.6945 15.2285 47.6606 14.9712 47.6538 14.6868V10.5902H46.493V9.43238H46.4794ZM51.6453 9.43238H53.0979V10.3736H53.1251C53.3423 9.9673 53.641 9.68292 54.0279 9.50687C54.4149 9.33082 54.8289 9.24279 55.2837 9.24279C55.8336 9.24279 56.3088 9.33759 56.7161 9.53395C57.1233 9.72354 57.4628 9.98762 57.7343 10.3262C58.0058 10.6647 58.2027 11.0575 58.3384 11.5044C58.4742 11.9512 58.5421 12.432 58.5421 12.9398C58.5421 13.407 58.481 13.8607 58.3588 14.2941C58.2366 14.7342 58.0533 15.1201 57.809 15.4587C57.5646 15.7973 57.2523 16.0613 56.8722 16.2645C56.492 16.4676 56.0508 16.5692 55.5349 16.5692C55.3109 16.5692 55.0869 16.5488 54.8629 16.5082C54.6389 16.4676 54.4216 16.3999 54.218 16.3119C54.0144 16.2238 53.8175 16.1087 53.6478 15.9665C53.4713 15.8243 53.3287 15.6618 53.2066 15.479H53.1794V18.9458H51.6453V9.43238ZM57.008 12.9127C57.008 12.6013 56.9672 12.2966 56.8858 11.9986C56.8043 11.7007 56.6821 11.4434 56.5192 11.2132C56.3563 10.983 56.1526 10.8002 55.915 10.6647C55.6707 10.5293 55.3924 10.4548 55.0801 10.4548C54.4352 10.4548 53.9465 10.6783 53.6206 11.1252C53.2948 11.5721 53.1319 12.1679 53.1319 12.9127C53.1319 13.2648 53.1726 13.5899 53.2609 13.8878C53.3491 14.1857 53.4713 14.443 53.6478 14.6597C53.8175 14.8764 54.0211 15.0457 54.2587 15.1675C54.4963 15.2962 54.7746 15.3571 55.0869 15.3571C55.4399 15.3571 55.7318 15.2826 55.9761 15.1405C56.2205 14.9983 56.4174 14.8087 56.5735 14.5852C56.7296 14.355 56.845 14.0977 56.9129 13.8065C56.974 13.5154 57.008 13.2175 57.008 12.9127ZM59.7164 6.78487H61.2506V8.23389H59.7164V6.78487ZM59.7164 9.43238H61.2506V16.3796H59.7164V9.43238ZM62.6218 6.78487H64.1559V16.3796H62.6218V6.78487ZM68.8602 16.5692C68.3035 16.5692 67.808 16.4744 67.3736 16.2915C66.9391 16.1087 66.5725 15.8514 66.2671 15.5332C65.9684 15.2082 65.7376 14.8222 65.5815 14.3753C65.4253 13.9284 65.3439 13.4341 65.3439 12.8992C65.3439 12.3711 65.4253 11.8835 65.5815 11.4366C65.7376 10.9897 65.9684 10.6038 66.2671 10.2788C66.5657 9.95376 66.9391 9.70323 67.3736 9.52041C67.808 9.33759 68.3035 9.24279 68.8602 9.24279C69.4168 9.24279 69.9123 9.33759 70.3468 9.52041C70.7812 9.70323 71.1478 9.96053 71.4533 10.2788C71.7519 10.6038 71.9827 10.9897 72.1389 11.4366C72.295 11.8835 72.3765 12.3711 72.3765 12.8992C72.3765 13.4341 72.295 13.9284 72.1389 14.3753C71.9827 14.8222 71.7519 15.2082 71.4533 15.5332C71.1546 15.8582 70.7812 16.1087 70.3468 16.2915C69.9123 16.4744 69.4168 16.5692 68.8602 16.5692ZM68.8602 15.3571C69.1996 15.3571 69.4983 15.2826 69.7494 15.1405C70.0006 14.9983 70.2042 14.8087 70.3671 14.5784C70.5301 14.3482 70.6455 14.0842 70.7269 13.793C70.8016 13.5018 70.8423 13.2039 70.8423 12.8992C70.8423 12.6013 70.8016 12.3101 70.7269 12.0122C70.6523 11.7143 70.5301 11.457 70.3671 11.2267C70.2042 10.9965 70.0006 10.8137 69.7494 10.6715C69.4983 10.5293 69.1996 10.4548 68.8602 10.4548C68.5208 10.4548 68.2221 10.5293 67.9709 10.6715C67.7198 10.8137 67.5161 11.0033 67.3532 11.2267C67.1903 11.457 67.0749 11.7143 66.9934 12.0122C66.9187 12.3101 66.878 12.6013 66.878 12.8992C66.878 13.2039 66.9187 13.5018 66.9934 13.793C67.0681 14.0842 67.1903 14.3482 67.3532 14.5784C67.5161 14.8087 67.7198 14.9983 67.9709 15.1405C68.2221 15.2894 68.5208 15.3571 68.8602 15.3571ZM72.8245 9.43238H73.9853V7.34687H75.5194V9.43238H76.9042V10.5767H75.5194V14.2873C75.5194 14.4498 75.5262 14.5852 75.5398 14.7071C75.5533 14.8222 75.5873 14.9238 75.6348 15.005C75.6823 15.0863 75.757 15.1472 75.8588 15.1879C75.9606 15.2285 76.0896 15.2488 76.2661 15.2488C76.3747 15.2488 76.4833 15.2488 76.5919 15.242C76.7005 15.2352 76.8092 15.2217 76.9178 15.1946V16.3796C76.7481 16.3999 76.5784 16.4134 76.4222 16.4337C76.2593 16.4541 76.0964 16.4608 75.9267 16.4608C75.5194 16.4608 75.1936 16.4202 74.9492 16.3457C74.7048 16.2712 74.508 16.1561 74.3722 16.0072C74.2296 15.8582 74.1414 15.6754 74.0871 15.4519C74.0396 15.2285 74.0056 14.9712 73.9988 14.6868V10.5902H72.8381V9.43238L72.8245 9.43238Z" fill="var(--fill-0, white)"/>
<path id="Vector_2" d="M18.4238 6.78487H11.3912L9.21896 0.108528L7.03994 6.78487L0.00735936 6.7781L5.70267 10.9085L3.52365 17.5781L9.21896 13.4544L14.9075 17.5781L12.7353 10.9085L18.4238 6.78487Z" fill="var(--fill-0, #00B67A)"/>
<path id="Vector_3" d="M13.224 12.4185L12.7353 10.9085L9.21896 13.4544L13.224 12.4185Z" fill="var(--fill-0, #005128)"/>
</g>
</svg>
`,P=`https://widget.trustpilot.com/trustbox-data/5419b6ffb0d04a076446a9af?businessUnitId=5de985d57cad6c0001a1286e&locale=en-GB`,F=`https://cdn.trustpilot.net/brand-assets/4.1.0/stars`,I={trustScore:4.8,stars:5,profileUrl:`https://uk.trustpilot.com/review/houseofworktops.co.uk`},L=class{constructor(){this.init()}async init(){if(document.querySelector(`.crs-tp`))return;let e=(await t(`#reels-slider-section .reels-heading`)).parentElement;if(!e)return;o(M),this.hideOriginal();let n=this.buildRow(I);e.insertAdjacentElement(`afterbegin`,n),this.fetchData().then(e=>this.fillRow(n,e))}hideOriginal(){o(`#product .trustpilot-widget{display:none !important;}#product hr.mt-4:has(+ .trustpilot-widget){display:none !important;}`)}async fetchData(){try{let e=await fetch(P);if(!e.ok)throw Error(`HTTP ${e.status}`);let t=await e.json(),n=t.businessUnit||t.businessEntity||{};return{trustScore:typeof n.trustScore==`number`?n.trustScore:I.trustScore,stars:typeof n.stars==`number`?n.stars:I.stars,profileUrl:t.links&&t.links.profileUrl||I.profileUrl}}catch{return{...I}}}label(e){return e>=4.3?`Excellent`:e>=3.8?`Great`:e>=3?`Average`:e>=2?`Poor`:`Bad`}starsFile(e){let t=Math.round(e*2)/2;return t%1==0?String(t):t.toFixed(1)}buildRow(e){let t=document.createElement(`a`);return t.className=`crs-tp`,t.target=`_blank`,t.rel=`noopener noreferrer`,this.fillRow(t,e),t}fillRow(e,t){let n=this.label(t.trustScore),r=t.trustScore.toFixed(1);e.href=t.profileUrl,e.setAttribute(`aria-label`,`${n} ${r} out of 5 on Trustpilot`),e.innerHTML=` <span class="crs-tp__rating">
        <span class="crs-tp__word">${n}</span>
        <span class="crs-tp__score">${r}</span>
      </span>
      <img
        class="crs-tp__stars"
        src="${F}/stars-${this.starsFile(t.stars)}.svg"
        alt=""
        width="100"
      />
      <span class="crs-tp__logo" aria-hidden="true">${N}</span>`}};n({name:`PDP Introducing Customer Photos v3`,dev:`OS`}),r(`exp_pdp_photo`),new class{constructor(){this.init()}init(){o(``),new x,new k,new j,new L}}})();
