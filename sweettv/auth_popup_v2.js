(function(){var e=({name:e,dev:t})=>{},t=e=>{let t=setInterval(function(){typeof window.clarity==`function`&&(clearInterval(t),window.clarity(`set`,e,`variant_1`))},1e3)},n=`.ui-modal__dialog:has(.crs-card) {
  max-width: 480px !important;
  width: 95% !important;
}

.auth-modal-shell:has(.crs-card) {
  min-height: 0 !important;
  background: #0d1922 !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  border-radius: 16px !important;
}

.auth-modal-shell:has(.crs-card) .auth-modal-shell__content {
  min-height: 0 !important;
  padding: 66px 30px 32px !important;
}

@media (max-height: 760px) {
  .auth-modal-shell:has(.crs-card) .auth-modal-shell__content {
    max-height: calc(100vh - 48px) !important;
    max-height: calc(100dvh - 48px) !important;
    overflow: hidden auto !important;
    scrollbar-width: none !important;
  }
}

.auth-modal-shell:has(.crs-card) .auth-modal-shell__close,
.auth-modal-shell:has(.crs-card) .auth-modal-shell__back {
  top: 22px !important;
  width: 24px !important;
  height: 24px !important;
  min-width: 0 !important;
  min-height: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  color: rgba(255, 255, 255, 0.92) !important;
  z-index: 1 !important;
}

.auth-modal-shell:has(.crs-card) .auth-modal-shell__close {
  right: 22px !important;
  width: 22px !important;
  height: 22px !important;
}

.auth-modal-shell:has(.crs-card) .auth-modal-shell__back {
  left: 22px !important;
}

.auth-modal-shell:has(.crs-card) .auth-modal-shell__close::before,
.auth-modal-shell:has(.crs-card) .auth-modal-shell__back::before {
  content: '';
  position: absolute;
  inset: -10px;
}

@media (max-width: 767px) {
  .ui-modal__dialog:has(.crs-card) {
    max-width: none !important;
    width: 100% !important;
  }

  .auth-modal-shell:has(.crs-card) {
    border: 0 !important;
    border-radius: 0 !important;
  }

  .auth-modal-shell:has(.crs-card) .auth-modal-shell__content {
    max-height: none !important;
    padding: 65px 20px 32px !important;
  }

  .auth-modal-shell:has(.crs-card) .auth-modal-shell__back {
    top: 24px !important;
  }

  .auth-modal-shell:has(.crs-card) .auth-modal-shell__close {
    top: 25px !important;
  }

  .auth-modal-shell:has(.crs-card) .auth-modal-shell__close {
    right: 20px !important;
  }

  .auth-modal-shell:has(.crs-card) .auth-modal-shell__back {
    left: 20px !important;
  }
}
`,r=`.crs-card {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 80px;
  padding: 17px 11px 17px 143px;
  box-sizing: border-box;
  border-radius: 16px;
  overflow: hidden;
  background-image: linear-gradient(90deg, rgba(32, 190, 198, 0.1) 0%, rgba(32, 190, 198, 0) 100%),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.03) 100%);
  margin-bottom: -6px;
  text-align: left;
}

.crs-card--no-poster {
  padding-left: 17px;
}

.crs-card__poster {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 126px;
  height: 100%;
  object-fit: cover;
}

.crs-card__text {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
  color: #fff;
  font-size: 14px;
  line-height: 18px;
}

.crs-card__title,
.crs-card__subtitle {
  margin: 0;
}

.crs-card__title {
  font-weight: 700;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.crs-card__subtitle {
  font-weight: 400;
  opacity: 0.6;
}

@media (max-width: 767px) {
  .auth-v1-start-screen .crs-card {
    margin-bottom: -1px;
  }
}
`;function i(e,t){if(!(t==null||typeof t==`boolean`)){if(Array.isArray(t)){for(let n of t)i(e,n);return}e.appendChild(t instanceof Node?t:document.createTextNode(String(t)))}}function a(e,t,n){if(typeof e==`function`)return e(t??{});let{children:r,...a}=t??{},o=document.createElement(e);for(let[e,t]of Object.entries(a))e.startsWith(`on`)&&typeof t==`function`?o.addEventListener(e.slice(2).toLowerCase(),t):t===!0?o.setAttribute(e,``):t!==!1&&t!=null&&o.setAttribute(e,String(t));return i(o,r),o}var o=a,s=e=>o(`div`,{class:e.posterUrl?`crs-card`:`crs-card crs-card--no-poster`,children:[e.posterUrl?a(`img`,{class:`crs-card__poster`,src:e.posterUrl,fetchpriority:`high`,alt:``}):``,o(`div`,{class:`crs-card__text`,children:[a(`p`,{class:`crs-card__title`,children:e.title}),a(`p`,{class:`crs-card__subtitle`,children:`Почни перегляд після входу`})]})]}),c=r,l=`@keyframes crs-caret-blink {
  50% {
    background-size: 0 0;
  }
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__phone-input .ui-input__field {
  display: flex !important;
  align-items: center !important;
  gap: 17px !important;
  height: 68px !important;
  min-height: 0 !important;
  padding: 0 19px !important;
  box-sizing: border-box !important;
  background: rgba(255, 255, 255, 0.08) !important;
  border: 1px solid #20bec6 !important;
  border-radius: 16px !important;
  box-shadow: none !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__phone-input .ui-input__prefix {
  display: flex !important;
  align-items: center !important;
  gap: 6px !important;
  height: auto !important;
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  border: 0 !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__phone-input .ui-input__suffix:empty {
  display: none !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__phone-prefix {
  color: rgba(255, 255, 255, 0.9) !important;
  font-size: 18px !important;
  line-height: 24px !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__phone-input .ui-input__input {
  flex: 1 1 auto !important;
  min-width: 0 !important;
  height: 24px !important;
  margin: 0 !important;
  padding: 0 !important;
  background-color: transparent !important;
  background-image: none !important;
  border: 0 !important;
  box-shadow: none !important;
  color: #fff !important;
  caret-color: #20bec6 !important;
  font-size: 18px !important;
  line-height: 24px !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__phone-input .ui-input__input:placeholder-shown:not(:focus) {
  background-image: linear-gradient(#20bec6, #20bec6) !important;
  background-repeat: no-repeat !important;
  background-position: 0 1px !important;
  background-size: 1px 21px;
  animation: crs-caret-blink 1s steps(1) infinite;
}

@supports (-webkit-touch-callout: none) {
  .auth-modal-shell:has(.crs-card) .auth-v1-start-screen__phone-input .ui-input__input:placeholder-shown:not(:focus) {
    background-size: 2px 21px;
  }
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__phone-input .ui-input__input::placeholder {
  padding-left: 11px !important;
  color: rgba(255, 255, 255, 0.38) !important;
  opacity: 1 !important;
}

@media (max-width: 767px) {
  .auth-modal-shell:has(.crs-card) .auth-v1-start-screen__phone-input .ui-input__field {
    gap: 10px !important;
    height: 60px !important;
    padding: 0 18px !important;
  }

  .auth-modal-shell:has(.crs-card) .auth-v1-start-screen__phone-input .ui-input__prefix {
    gap: 12px !important;
  }
}
`,u=[],d=null;function f(e,t){u.push({selector:e,onAppear:t,seen:new WeakSet}),d||(d=new MutationObserver(p),d.observe(document.documentElement,{childList:!0,subtree:!0})),p()}function p(){u.forEach(({selector:e,onAppear:t,seen:n})=>{let r=document.querySelector(e);!r||n.has(r)||(n.add(r),t(r))})}var m={movie:`movie`,series:`series`,cartoon:`cartoon`,tv:`channel`,"free-tv":`channel`},h=e=>e?`https://sweet.tv/cdn-cgi/image/f=auto,q=80,fit=cover,w=252,h=196/${e}`:null,g=`https://sweet-tv-static.sweet.tv/web/nuxt/pages/tv/player-frame/bg.png`,_=`Телебачення онлайн`;function v(){b(e=>{e.posterUrl&&(new Image().src=e.posterUrl)})}var y=new Map;function b(e,t=20){let n=x();if(n){e(n);return}t&&setTimeout(()=>b(e,t-1),100)}function x(){let[,,e,t]=location.pathname.split(`/`),n=m[e];if(!n)return null;if(e===`tv`&&!t)return{kind:n,title:_,posterUrl:h(g)};if(!t)return null;let r=`useNuxtApp`in window?window.useNuxtApp():null;if(!r?.$pinia)return null;if(n===`channel`){let e=r.$pinia.state.value.tvList?.tvCurrentChannel;return e?.slug===t?{kind:n,title:e.title,posterUrl:h(e.banner_url)}:null}let i=location.pathname.split(`/`).filter(Boolean).join(`:`),a=r.payload.data[`movie-info:${i}`]?.movie;if(!a)return y.get(`${e}:${t}`)??null;if(!a.released)return null;let o={kind:n,title:a.title,posterUrl:h(a.horizontal_poster_url||a.banner_url||a.poster_url)};return y.set(`${e}:${t}`,o),o}var S=`.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-info-step,
.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-info-text {
  display: none !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen {
  width: 100% !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 30px !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-info {
  max-width: none !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  width: 100% !important;
  margin: 0 !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-info-title {
  margin: 0 !important;
  color: #fff !important;
  font-size: 32px !important;
  font-weight: 700 !important;
  line-height: 1.3 !important;
  text-align: center !important;
  white-space: pre-line !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-form {
  max-width: none !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 15px !important;
  width: 100% !important;
  margin: 0 !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-form-text {
  margin: 0 !important;
  color: rgba(255, 255, 255, 0.6) !important;
  font-size: 16px !important;
  line-height: 24px !important;
  text-align: center !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-form-button {
  width: 100% !important;
  height: 68px !important;
  min-height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  background: #20bec6 !important;
  color: #0f1c26 !important;
  border-radius: 16px !important;
  font-size: 18px !important;
  font-weight: 700 !important;
  line-height: 26px !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-options {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 24px !important;
  width: 100% !important;
  max-width: 380px !important;
  margin: 0 !important;
}

.auth-modal-shell:has(.crs-card)
  .auth-v1-start-screen__body-options:not(
    :has(
      .auth-social-buttons:not([hidden]):not([style*='display:none']):not([style*='display: none'])
    )
  ):not(:has(.auth-v1-start-screen__provider)) {
  display: none !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-options-title {
  display: flex !important;
  align-items: center !important;
  gap: 24px !important;
  width: 100% !important;
  margin: 0 !important;
  color: #9ca3af !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  line-height: 16px !important;
  white-space: nowrap !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-options-title::before,
.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-options-title::after {
  content: '';
  flex: 1 0 0;
  min-width: 1px;
  height: 1px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 100%);
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-options-title::after {
  transform: scaleX(-1);
}

.auth-modal-shell:has(.crs-card) .auth-social-buttons {
  gap: 37px !important;
  margin: 8px 0 !important;
}

.auth-modal-shell:has(.crs-card) .auth-social-buttons__slot {
  transform: scale(1.375);
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-secure {
  max-width: none !important;
  display: flex !important;
  align-items: center !important;
  gap: 16px !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 12px 11px !important;
  box-sizing: border-box !important;
  background: rgba(255, 255, 255, 0.03) !important;
  border: 0 !important;
  border-radius: 16px !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-secure-icon {
  flex: 0 0 48px !important;
  width: 48px !important;
  height: 48px !important;
  background: rgba(32, 190, 198, 0.1) url("data:image/webp;base64,UklGRp4HAABXRUJQVlA4WAoAAAAQAAAAXAAAXAAAQUxQSPkBAAABkEPbtqk95/w2Y9u2bduobCedbSeVSztpbdtOftsf3m/tfcuviIgJEBfQntU7VPM0k3v57ivPf0v+en5F9/LuZtHQtnNOv0vJLjjl7ek5bULVEAFNpx15Em9lF92Kf3JkWtMANp86o3feinJkl6wj6tbO0XV8WDyrDlh7848tu3Rtv2+u6V/FE829XLfl575kZGNmfD67rGs5dxQNaTP75JuUbGgr5c3J2W1CFKHslQQrm9FKuFIWodr3bNbv1VwgVPlG87UyQoWPNB8qIIS9oHkehhBwj+ZOAILXVZorngh6nOaYQG6i2YAxk2YGRr8Mkoy+GA3+k/yrjxHymORRMIbbCZLjiiELSRYIaOckiqTOKGVeUDwvgyJHKA4L7BgbQdYonGqfCD5UxtGjBEcURwalwaUNFODQu3B3Q5FkkQVmLRLomh/BPtbEkg1g6wW8wTeobw3QZA3UGoGv8RbodQ08mW2Dsc0SwuDrMNeCGaRrBEhEF6HU1Q4I+yrlkJBzEGeChbXhS4AX9YW39+9S+91LmMfHlFL0OKHW6TGlEjNFucRt4r9S+DdBhb7fmxJ700/FgI3O20rEdrahmDF40fcS+L4oSEypjQ5EFCNiXyMVg3q02PI2s5DMt1tauIthteKI/fcjUiPu7xteQcXEGtSwa8MgFdfPAFZQOCB+BQAAcB0AnQEqXQBdAD4xFolDoiEhE5oFkCADBLMASgB+AHeGdb7N+O/4gdJdvl38496gP6r54/HH+O+4D3Af2v2G+YB+kf9z+3ruAeYD9SP87/XveG9AH6jfoB/VfkA/o/+A6y70Cv1z9JL9j/gs/Zb9n/gR/YD/r3lV9w6ALwafSfjc5T/T98MyHxI6QLGl/u/UqzwvR3ni9jP0XWYfN8Zq3KpuuPMMy7kayzYbbBQoY5iO07SjR//TAa5Ty1oiNXJ3+UoomaBU2q9G/zn2tBlPNssHu6wQw/bjsFPTEKHCJaTTu1eC9lokcQ/6y+9Ug2I8bJvIQAD+/2AZo//Xlo98bj6v8vlO4SlOCbhEie589uM2gOEHxQMaNWhII+O9Y/985cSQcgm1nNwBi+tFIRnK08g1oATL8DDlQPjP+acf0eUhIB0hyU70P3/f1uosT1qnJFblDVkNNag7yTfI4//dVM35eI6jFO0vL2AGoVn+Zf1ESbHalng/1VHhtq4qNaz8ypadzBs7R1tD5xW5W67QlrsGoADJ957HpCwecHbawQsBjmW+Fjgb++tc+YvPcEipY8dv5XgB0WfOfPur/pYOuP49Xkw2fKepNF6hGindNOMpp1DXl+ke/Upm688sx7TI1QR70Eh+bix2GCjjCeodnyjumKkDFeF5NyERzUMozB0sn0NfEb/Xf/6mmPrHVQx4pxlficj8wix9EEWn0IBFQz06lnmfTIh2qlUutHwHJd5kadB/mZE/FvOiA3P/jBSSbWB7F09NjVfeVlMr6EE8qx31kR8ejOs03BXB3b0CGUkpE6cNwFNHJTI9MDFIxvzY6lWuFV3bOJ+zgBX8cnEoxUXtaiqQ6xMuablAY2lM0nEASgo+f6LPnly7+b4RUyeukqfYHmHtIHWlxS/B0D6QoRPGQ8PCold3Ex5ofxl5tHAET2MJ1+qlzQVS71tshXPG7FRVn/SFlf3/ns5OVyaMI/iK0NIdxsoNCmdP1L5QvTXgr/+j9t5rc7eCLFKGhlEh2+gGqXTyubYIBfjgIBXqUEeCgX42Th4yGCG9Qw9r1mQdgPiSWn0zeDdzvDuTGVQ4ezIfNXjSuqNj66k17GWTy368863HP+VmhQGH0WKbfdLzzTOECHnrlqAU2bTx0Vw9TMPNJFf7PVah6kNQaGsOefXV9tzn/puqC4vMfhk5REoOa+pwLh1Rm454dkLJdazihNtG5YHGMlypXJROC8nmlZvdYNSV4IKyaESL4ZD4YGsnwm+8Xk2ivPIfQAt4t2hC/fMXWALqJcfcJE6yWp76ocI4nyXFcUOcjvw8lNq/3ULdEwb5KS813Jw+gQHl//O//ane2038E2OmnywEur5t8igRF4hKXnGkGCgP8kSSwdvg09jLpMtEq+KWWfAUvnMLtuJfhBPaOpIhsPEMvq4tGJhi43O6+rB1huZm9f6rFdcjjPzIbrgY+TXsnURqYYsjBaxvLh9J5nbYavRWw127aiG060GXz5CEyXMfZZjS+EjMIZTqAwA5q+3cvpMcZHE61M1ppgsHDcGVf8xLXdYVfkrjVgDI97KB1KT4RrcGpbGnOcfWLKl/YubLo/k98+Er8n/IohR2e77yJrZXKwyA4CvGB3lHh6H+zRsLCnz37WzSh+nRFzT2Z1aJySMSxrRKJryboOvlPi+tKlwZwgZPesQoc0kkSLiWzPzg9XMigqkfUYkICj+XrK+wOTrHRDSajXlbDb+jvQENNdD9z/aMfl75survxYsj24rsPoDo/bxO9faVEQWx+BlOKsscHl7h4NmeGEGQsG1gXiYfz8MSSJj81aAaRdgNOlv/6es/yGXU8paY0Ykt6zq5+/+ByGaS42LsrWTrHESiAAAAAAA=") no-repeat center / 31px 31px !important;
  border-radius: 10px !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-secure-icon > * {
  display: none !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-secure-info {
  display: flex !important;
  flex-direction: column !important;
  gap: 2px !important;
  min-width: 0 !important;
  text-align: left !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-secure-info-title,
.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-secure-info-text {
  color: #fff !important;
  font-size: 14px !important;
  line-height: 18px !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-secure-info-title {
  font-weight: 700 !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-secure-info-text {
  font-weight: 400 !important;
  opacity: 0.6 !important;
}

@media (max-width: 767px) {
  .auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-info-title {
    font-size: 28px !important;
  }

  .auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-form-button {
    height: 60px !important;
  }

  .auth-modal-shell:has(.crs-card) .auth-v1-start-screen__body-options-title {
    flex: 0 0 auto !important;
    width: calc(100% + 45px) !important;
  }

  .auth-modal-shell:has(.crs-card) .auth-social-buttons {
    gap: 27px !important;
    margin: 3px 0 !important;
  }

  .auth-modal-shell:has(.crs-card) .auth-social-buttons__slot {
    transform: scale(1.125);
  }
}
`,C=`.auth-v1-start-screen`,w=`.auth-v1-start-screen__body-info-title`,T=`Введи номер телефону
і почни перегляд`,E=`.auth-v1-start-screen__body-options-title`,D=`Або увійти через`;function O(){f(C,e=>{b(t=>{e.querySelector(`.auth-v1-start-screen__body`).prepend(s(t)),e.querySelector(w).textContent=T;let n=e.querySelector(E);n&&(n.textContent=D),`${t.kind}${t.title}`})})}var k=`.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__info-text:first-child,
.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__form-text {
  display: none !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 30px !important;
  width: 100% !important;
  max-width: none !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__info {
  max-width: none !important;
  display: flex !important;
  flex-flow: row wrap !important;
  justify-content: center !important;
  align-items: center !important;
  gap: 11px !important;
  width: 100% !important;
  margin: 0 !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__info-title {
  flex: 1 0 100% !important;
  margin: 0 !important;
  color: #fff !important;
  font-size: 32px !important;
  font-weight: 700 !important;
  line-height: 1.3 !important;
  text-align: center !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__info-text {
  margin: 0 !important;
  color: rgba(255, 255, 255, 0.6) !important;
  font-size: 16px !important;
  line-height: 24px !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__info-number {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  margin: 0 !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__info-number-text {
  color: #fff !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 24px !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__info-number-icon {
  margin-left: -4px !important;
  font-size: 24px !important;
  color: #fff !important;
  opacity: 1 !important;
  cursor: pointer;
}

.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__form {
  max-width: none !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: stretch !important;
  gap: 30px !important;
  width: 100% !important;
  margin: 0 !important;
}

.auth-modal-shell:has(.crs-card) .ui-code-input__cells {
  display: flex !important;
  justify-content: center !important;
  gap: 15px !important;
}

.auth-modal-shell:has(.crs-card) .ui-code-input__cell {
  width: 68px !important;
  height: 68px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: rgba(255, 255, 255, 0.08) !important;
  border: 1px solid #20bec6 !important;
  border-radius: 16px !important;
  box-sizing: border-box !important;
  color: rgba(255, 255, 255, 0.9) !important;
  font-size: 18px !important;
  font-weight: 400 !important;
  line-height: 24px !important;
}

.auth-modal-shell:has(.crs-card) .ui-code-input__cell--empty:not(.ui-code-input__cell--box) {
  font-size: 0 !important;
}

.auth-modal-shell:has(.crs-card) .ui-code-input__cell--empty:not(.ui-code-input__cell--box)::before {
  content: '–';
  font-size: 18px;
  line-height: 24px;
}

.auth-modal-shell:has(.crs-card) .ui-code-input__cell--box::after {
  height: 22px !important;
  background: #20bec6 !important;
}

.auth-modal-shell:has(.crs-card) .ui-code-input__error:empty {
  display: none !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__submit {
  width: 100% !important;
  max-width: none !important;
  height: 60px !important;
  min-height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  background: #20bec6 !important;
  color: #0f1c26 !important;
  border-radius: 16px !important;
  font-size: 0 !important;
  font-weight: 700 !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__submit::after {
  content: 'Почати перегляд';
  font-size: 18px;
  line-height: 26px;
}

.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__submit:has(.ui-button__loader)::after {
  content: none;
}

.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__actions {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 11px !important;
  margin: 2px 0 0 !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__actions-resend,
.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__actions-change {
  height: auto !important;
  min-height: 0 !important;
  padding: 0 !important;
  color: #20bec6 !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 18px !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__actions-resend {
  gap: 0 !important;
  font-size: 0 !important;
  opacity: 1 !important;
}

.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__actions-resend::before {
  content: 'Не отримав код?\\00a0';
  color: #fff;
  font-size: 14px;
  line-height: 18px;
}

.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__actions-resend::after {
  content: 'Надіслати повторно\\00a0' attr(data-crs-timer);
  font-size: 14px;
  line-height: 18px;
}

.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__actions-resend--disabled::after {
  color: rgba(255, 255, 255, 0.5);
}

.auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__notice {
  position: static !important;
  order: 99 !important;
  width: 100% !important;
}

@media (max-width: 767px) {
  .auth-modal-shell:has(.crs-card) .auth-v1-sms-screen__info-title {
    font-size: 27px !important;
  }
}
`,A=`.auth-v1-sms-screen`,j=`.auth-v1-sms-screen__info-text:not(:first-child)`,M=`Код надіслано на`,N=`.auth-v1-sms-screen__actions-resend`;function P(e){let t=()=>{let t=e.textContent.match(/\d+:\d+/)?.[0]??``;e.dataset.crsTimer!==t&&(e.dataset.crsTimer=t)};t(),new MutationObserver(t).observe(e,{characterData:!0,childList:!0,subtree:!0})}function F(){f(A,e=>{b(t=>{e.prepend(s(t)),e.querySelector(j).textContent=M,P(e.querySelector(N))})})}e({name:`Auth Popup`,dev:`OS`}),t(`exp_auth_popup`);var I=`crs-auth-popup`;function L(e){return!e||e===`undefined`||e===`null`?``:e}new class{constructor(){this.init()}init(){this.ensureStyles([``,n,c,S,l,k]),v(),!window.__crsAuthPopupInit&&(window.__crsAuthPopupInit=!0,O(),F())}isUserLoggedOut(){let e=document.cookie.match(/(?:^|; )refresh_token=([^;]+)/),t=L(e?e[1]:``);if(t===``)try{t=L(localStorage.getItem(`refresh_token`))}catch{t=``}return t===``}ensureStyles(e){queueMicrotask(()=>{if(document.getElementById(I))return;let t=document.createElement(`style`);t.id=I,t.textContent=e.join(`
`),document.head.appendChild(t)})}}})();
