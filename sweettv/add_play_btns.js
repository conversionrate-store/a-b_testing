(function(){var e=(e,t,n,r=``)=>{window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:`event-to-ga4`,event_name:e,event_desc:t,event_type:n,event_loc:r}),`${e}${t}${n}${r}`},t=({name:e,dev:t})=>{},n=e=>{let t=setInterval(function(){typeof window.clarity==`function`&&(clearInterval(t),window.clarity(`set`,e,`variant_1`))},1e3)},r=(t,n,r,i,a=1e3,o=.5)=>{let s,c;if(s=new IntersectionObserver(function(t){t[0].isIntersecting===!0?c=setTimeout(()=>{e(n,t[0].target.dataset.visible||i||``,`view`,r),s.disconnect()},a):clearTimeout(c)},{threshold:[o]}),typeof t==`string`){let e=document.querySelector(t);e&&s.observe(e)}else s.observe(t)},i=`:root {
  --crs-play-glyph: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19.1336 10.0398C20.699 10.8905 20.6989 13.1131 19.1336 13.9638L7.97341 20.0291C6.46319 20.8499 4.61531 19.7702 4.61531 18.0671L4.61531 5.93646C4.61531 4.23333 6.46319 3.15369 7.97341 3.97446L19.1336 10.0398Z' fill='%23fff'/%3E%3C/svg%3E");
  --crs-play-red: #ff0d0d;
  --crs-play-size: 56px;
  --crs-play-glyph-size: 28px;
}
`,a=[],o=null,s=!1;function c(e){let t=window.useNuxtApp?.();if(t&&!t.isHydrating){e();return}requestAnimationFrame(()=>c(e))}function l(e){a.push(e),o||(o=new MutationObserver(u),o.observe(document.body,{childList:!0,subtree:!0})),u()}function u(){s||(s=!0,requestAnimationFrame(()=>{s=!1,a.forEach(e=>e())}))}function d(e,t){if(!(t==null||typeof t==`boolean`)){if(Array.isArray(t)){for(let n of t)d(e,n);return}e.appendChild(t instanceof Node?t:document.createTextNode(String(t)))}}function f(e,t,n){if(typeof e==`function`)return e(t??{});let{children:r,...i}=t??{},a=document.createElement(e);for(let[e,t]of Object.entries(i))e.startsWith(`on`)&&typeof t==`function`?a.addEventListener(e.slice(2).toLowerCase(),t):t===!0?a.setAttribute(e,``):t!==!1&&t!=null&&a.setAttribute(e,String(t));return d(a,r),a}var p=({onPlay:e})=>f(`button`,{class:`crs-play`,type:`button`,tabindex:`-1`,"aria-hidden":`true`,onClick:e}),m=`.crs-play {
  float: right;
  width: var(--crs-play-size);
  height: var(--crs-play-size);
  margin-left: 12px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: var(--crs-play-red) var(--crs-play-glyph) no-repeat center /
    var(--crs-play-glyph-size);
  cursor: pointer;
}

@media screen and (width >= 768px) {
  .crs-play {
    display: none;
  }
}

@media screen and (width <= 767px) {
  .movie-content__title::before,
  .stub__info-title::before {
    content: '';
    float: right;
    width: var(--crs-play-size);
    height: var(--crs-play-size);
    margin-left: 12px;
    border-radius: 50%;
    background: var(--crs-play-red) var(--crs-play-glyph) no-repeat center /
      var(--crs-play-glyph-size);
  }

  .movie-content__title:has(> .crs-play)::before,
  .stub__info-title:has(> .crs-play)::before {
    content: none;
  }

  .movie-content__player_watch-icon {
    display: none !important;
  }

  .stub__info-title {
    width: 100% !important;
  }
}
`,h=[[`.movie-content__title`,`.movie-content__actions-watch`],[`.stub__info-title`,`.tv-mobile__stub-action-button, .stub__action-button`]];function g(){l(()=>{h.forEach(([t,n])=>{let i=document.querySelector(t);if(!i||i.querySelector(`.crs-play`))return;let a=p({onPlay:()=>{e(`play_btn_title_click`,`Click on the play button next to the title`,`click`,`title`),[...document.querySelectorAll(n)].find(e=>e.getClientRects().length>0)?.click()}});i.prepend(a),r(a,`play_btn_title_view`,`title`,`Play button next to the title seen`)})})}var _=`.episode-card__image::after {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  width: var(--crs-play-size);
  height: var(--crs-play-size);
  border-radius: 50%;
  background: var(--crs-play-red) var(--crs-play-glyph) no-repeat center /
    var(--crs-play-glyph-size);
  pointer-events: none;
}
`;function v(){document.addEventListener(`click`,t=>{t.target.closest(`.episode-card__image`)&&e(`play_btn_episode_click`,`Click on an episode card`,`click`,`series`)},!0)}var y={tv:!0,movie:!1,series:!1},b={tv:`tv`,movie:`movie`,series:`series`};function x(){return b[location.pathname.split(`/`)[2]]??null}function S(){let[,e,t,n]=location.pathname.split(`/`),r=window.useNuxtApp?.();return r?x()===`tv`?r.$pinia.state.value.tvList?.tvCurrentChannel?.title??``:r.payload.data[`movie-info:${e}:${t}:${n}`]?.movie?.title??``:``}var C={tv:`.stub__action-button, .tv-mobile__stub-action-button`,movie:`.movie-content__actions-watch`,series:`.movie-content__actions-watch`},w=`Дивитися`;function T(){l(()=>{let e=x();if(!e||!y[e])return;let t=S();t&&document.querySelectorAll(C[e]).forEach(e=>{let n=[...e.childNodes].find(e=>e.nodeValue?.includes(w));if(!n)return;e.dataset.crsLabel??=n.nodeValue;let r=e.dataset.crsLabel.replace(w,`${w} ${t}`);n.nodeValue!==r&&(n.nodeValue=r)})})}t({name:`Additional play buttons`,dev:`OS`}),n(`exp_play_btns`);var E=`crs-play-btns`;new class{constructor(){this.init()}init(){this.ensureStyles([i,m,_]),!window.__crsPlayBtnsInit&&(window.__crsPlayBtnsInit=!0,v(),c(()=>{g(),T()}))}ensureStyles(e){queueMicrotask(()=>{if(!document.head){requestAnimationFrame(()=>this.ensureStyles(e));return}if(document.getElementById(E))return;let t=document.createElement(`style`);t.id=E,t.textContent=e.join(`
`),document.head.appendChild(t)})}}})();
