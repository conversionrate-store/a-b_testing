(function(){var e=({name:e,dev:t})=>{},t=e=>{let t=setInterval(function(){typeof window.clarity==`function`&&(clearInterval(t),window.clarity(`set`,e,`variant_1`))},1e3)},n=`.ui-modal__dialog:has(.crs-banner, .crs-provider) {
  max-width: 436px !important;
  width: calc(100% - 32px) !important;
}

.auth-modal-shell:has(.crs-banner, .crs-provider) {
  min-height: 0 !important;
  background: transparent !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}

.auth-modal-shell:has(.crs-banner, .crs-provider) .auth-modal-shell__content {
  display: flex !important;
  flex-direction: column !important;
  gap: 15px !important;
  min-height: 0 !important;
  padding: 0 !important;
}

.auth-modal-shell:has(.crs-banner, .crs-provider) .auth-v1-start-screen,
.auth-modal-shell:has(.crs-banner, .crs-provider) .auth-v1-sms-screen,
.auth-modal-shell:has(.crs-banner, .crs-provider) .auth-v1-provider-screen {
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 30px 30px 20px !important;
  box-sizing: border-box !important;
  background: #fff url('data:image/webp;base64,UklGRl4CAABXRUJQVlA4IFICAABQFwCdASraAPUAPlEokkcjoqGhICgAcAoJaW7gPO3ORZof0NU+On+fdu9VfsAVm+f7elXGmryaZG4WawUUsojH3YiMVrUpmJd3jIXoaWsfYGbvhZq756iozdVg2m6eqAzvuKubsvyaYADukUjxDxEhUCyuxAgQICBAgXhGQ5K+xVGP6vAGwop+naRX+Q7tQKDvYENpDRCLTuX9tpjt7D2crzvnfBTLCCXjVl1CkryVnQtPsDQIRPEefxir9Ic4nS3j/oAA/vob+9v94fQvwzHPu25viQ8qZYwEIqIm2O3FLmR5xQGDe/yq974gZAcdn/wUExlE5CENNxLJYZq0hDQVCfbqVJrhiGex67ojwoA19OeuMaAK+yseNUQbq62NfkNPSVTLszcuN8rg+TtGUthsF3t1M8i33raUtw/0Fqr0fVInJJUoTbQzn3DcjqLHqSIVkKyYOGflSDv77ROpDqXNBcEhvl4yM12pnwabBUlNXFXg7KwplIhW5rLR+/7UjRUpmzdhiVhCaftl1jP4SAEJ12Eq5u7ZARoUrl30wTOhNMrL1cTg6Oy6sAeoe4MGl+KoJ0foayzENzKGsmK9qmEp1QSbjAOd6uLy49+vQSuf4G69hNtY9lyX8j+9ZXNotJxSDdQujcxOoLq5zU7KywwfP+RYE4k2wAKA7i9REl+KmV3ES9wGQuUWSYNbDrKoFlt5DqFz9Ehq6VyZ8rU72bDzbZ42TiAELqoWlFehcs4IM/GMCPIs+rGUnYsGPkcsR0/zlxMaMSOPlRw8AAAAAJ7AAAA=') no-repeat center top / 100% auto !important;
  border: 1px solid #1fb3bf !important;
  border-radius: 16px !important;
}

.auth-modal-shell:has(.crs-banner, .crs-provider) .auth-v1-sms-screen,
.auth-modal-shell:has(.crs-banner, .crs-provider) .auth-v1-provider-screen {
  padding: 40px 30px 30px !important;
}

@media (max-height: 720px) {
  .auth-modal-shell:has(.crs-banner, .crs-provider) .auth-modal-shell__content {
    max-height: calc(100vh - 32px) !important;
    max-height: calc(100dvh - 32px) !important;
    overflow: hidden auto !important;
    scrollbar-width: none !important;
  }
}

.auth-modal-shell:has(.crs-banner, .crs-provider) .auth-modal-shell__close,
.auth-modal-shell:has(.crs-banner, .crs-provider) .auth-modal-shell__back {
  top: 17px !important;
  width: 24px !important;
  height: 24px !important;
  min-width: 0 !important;
  min-height: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  color: rgba(0, 0, 0, 0.92) !important;
  z-index: 1 !important;
}

.auth-modal-shell:has(.crs-banner, .crs-provider) .auth-modal-shell__close {
  top: 18px !important;
  right: 31px !important;
  width: 22px !important;
  height: 22px !important;
}

.auth-modal-shell:has(.crs-banner, .crs-provider) .auth-modal-shell__back {
  left: 31px !important;
}

.auth-modal-shell:has(.crs-banner, .crs-provider) .auth-modal-shell__close::before,
.auth-modal-shell:has(.crs-banner, .crs-provider) .auth-modal-shell__back::before {
  content: '';
  position: absolute;
  inset: -10px;
}

@media (max-width: 767px) {
  .ui-modal__dialog:has(.crs-banner, .crs-provider) {
    max-width: none !important;
    width: 100% !important;
  }

  .auth-modal-shell:has(.crs-banner, .crs-provider) {
    background: #fff url('data:image/webp;base64,UklGRkYCAABXRUJQVlA4IDoCAACwFACdASq7AA8BPlEokkcjoqGhICgAcAoJaW7gT04xQ2orVM+EUWSIFl/6f5/u71gCs3a80jxC5Cb/VgTko791NlaA4Q5HHMZdb0csfdFKS+ximRGA0R13BOP9NgLEvrjb+1pax4h1EH4I4QAC8GvUPdtT1tP0NEv4Q1+jk/O8XN2I8+tqoO6se825sXfvFlFwJW025kBEeHP1MVYErRv7TtubjePbO3R/n+UqpAAA/vocB5v5m+OvgbvlEgIle8iIrv3gcCMyieODcYZ4PhUrbfP7zLZPMpBo6rYZLexI66SQOOVbMDrRUvC4gJCLbUfdw9aiPfLBIhA/ftVWZYNHj9nRrUFq7OQU+LbHemLC/drCt24i8yYmVDgNCAWiz7Y7IAC3Iop6jsoJ3QLyPhgjiXXVRy9pQ/Sg31wxw3jFxwS+uZmilVK4LM22uJC5TNz/W6WfQAi44hBWoz93LSLBql+FL6GHmOWX2yjm1D9QBlFaD6pXN/DKaA2eCZhm2KBGfWguT8Xx0/bBSyd6g1GWaVjMIf0AzIImjqUyD3t80bhjRKWL9Regp11waeZHh+D8LFwKvIq/lsIbCfsZkDTnQcnkNX7+bBGGi7Xqdz2p4DrA/bBmasg8M7PbE6BkQmz167PF5r6GfLs5vTIWiPVb4FKS8FJbGvuBtfONTR7n7I5N8EdtihzenCWTeGcSSGxQdVxg5YmTH9R0D2AGkSdUUOEGeRs3BhNgTDyKXdVLgACccAg5mHrwAAA=') no-repeat center top / 100% auto !important;
  }

  .auth-modal-shell:has(.crs-banner, .crs-provider) .auth-modal-shell__content {
    justify-content: center !important;
    gap: 37px !important;
    min-height: 100vh !important;
    min-height: 100dvh !important;
    max-height: none !important;
    padding: 72px 21px 32px !important;
    box-sizing: border-box !important;
  }

  .auth-modal-shell--screen-v1-sms:has(.crs-banner, .crs-provider) .auth-modal-shell__content {
    gap: 26px !important;
  }

  .auth-modal-shell:has(.crs-banner, .crs-provider) .auth-v1-start-screen,
  .auth-modal-shell:has(.crs-banner, .crs-provider) .auth-v1-sms-screen,
  .auth-modal-shell:has(.crs-banner, .crs-provider) .auth-v1-provider-screen {
    padding: 0 !important;
    background: none !important;
    border: 0 !important;
    border-radius: 0 !important;
  }

  .auth-modal-shell:has(.crs-banner, .crs-provider) .auth-modal-shell__back {
    top: 24px !important;
    left: 20px !important;
  }

  .auth-modal-shell:has(.crs-banner, .crs-provider) .auth-modal-shell__close {
    top: 25px !important;
    right: 20px !important;
  }
}
`,r=`@keyframes crs-caret-blink {
  50% {
    background-size: 0 0;
  }
}

.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__phone-input .ui-input__field {
  display: flex !important;
  align-items: center !important;
  gap: 7px !important;
  height: 68px !important;
  min-height: 0 !important;
  padding: 0 16px !important;
  box-sizing: border-box !important;
  background: #fff !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  border-radius: 16px !important;
  box-shadow: 0 9px 29px rgba(0, 0, 0, 0.1) !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__phone-input .ui-input__prefix {
  display: flex !important;
  align-items: center !important;
  gap: 2px !important;
  height: auto !important;
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  border: 0 !important;
}

.auth-modal-shell:has(.crs-banner) .auth-phone-country-select__trigger {
  gap: 6px !important;
  padding: 0 !important;
}

.auth-modal-shell:has(.crs-banner) .auth-phone-country-select__arrow {
  color: #000 !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__phone-input .ui-input__suffix:empty {
  display: none !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__phone-prefix {
  color: rgba(0, 0, 0, 0.9) !important;
  font-size: 18px !important;
  line-height: 24px !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__phone-input .ui-input__input {
  flex: 1 1 auto !important;
  min-width: 0 !important;
  height: 24px !important;
  margin: 0 !important;
  padding: 0 !important;
  background-color: transparent !important;
  background-image: none !important;
  border: 0 !important;
  box-shadow: none !important;
  color: #000 !important;
  caret-color: #000 !important;
  font-size: 18px !important;
  line-height: 24px !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__phone-input .ui-input__input:placeholder-shown:not(:focus) {
  background-image: linear-gradient(#000, #000) !important;
  background-repeat: no-repeat !important;
  background-position: 0 1px !important;
  background-size: 1px 21px;
  animation: crs-caret-blink 1s steps(1) infinite;
}

@supports (-webkit-touch-callout: none) {
  .auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__phone-input .ui-input__input:placeholder-shown:not(:focus) {
    background-size: 2px 21px;
  }
}

.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__phone-input .ui-input__input::placeholder {
  padding-left: 11px !important;
  color: rgba(0, 0, 0, 0.38) !important;
  opacity: 1 !important;
}
`,i=[],a=null;function o(e,t){i.push({selector:e,onAppear:t,seen:new WeakSet}),a||(a=new MutationObserver(s),a.observe(document.documentElement,{childList:!0,subtree:!0})),s()}function s(){i.forEach(({selector:e,onAppear:t,seen:n})=>{let r=document.querySelector(e);!r||n.has(r)||(n.add(r),t(r))})}function c(e,t){if(!(t==null||typeof t==`boolean`)){if(Array.isArray(t)){for(let n of t)c(e,n);return}e.appendChild(t instanceof Node?t:document.createTextNode(String(t)))}}function l(e,t,n){if(typeof e==`function`)return e(t??{});let{children:r,...i}=t??{},a=document.createElement(e);for(let[e,t]of Object.entries(i))e.startsWith(`on`)&&typeof t==`function`?a.addEventListener(e.slice(2).toLowerCase(),t):t===!0?a.setAttribute(e,``):t!==!1&&t!=null&&a.setAttribute(e,String(t));return c(a,r),a}var u=l,d=(e,t)=>u(`div`,{class:e?`crs-banner crs-banner--content`:`crs-banner`,children:[l(`span`,{class:`crs-banner__image`}),u(`div`,{class:`crs-banner__text`,children:[l(`p`,{class:`crs-banner__title`,children:e?`${e} вже чекає на тебе`:`Твої 7 безкоштовних днів вже чекають`}),l(`p`,{class:`crs-banner__subtitle`,children:t})]})]}),f=[`movie`,`series`,`cartoon`,`tv`,`free-tv`],p=new Map;function m(){let[,,e,t]=location.pathname.split(`/`);if(!f.includes(e)||!t)return null;let n=`useNuxtApp`in window?window.useNuxtApp():null;if(!n?.$pinia)return null;if(e===`tv`||e===`free-tv`){let e=n.$pinia.state.value.tvList?.tvCurrentChannel;return e?.slug===t?e.title:null}let r=location.pathname.split(`/`).filter(Boolean).join(`:`),i=n.payload.data[`movie-info:${r}`]?.movie;return i?i.released?(p.set(`${e}:${t}`,i.title),i.title):null:p.get(`${e}:${t}`)??null}var h=`.crs-banner {
  order: 99;
  display: flex;
  align-items: center;
  gap: 18px;
  width: 100%;
  padding: 16px 18px;
  box-sizing: border-box;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.11);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  color: #fff;
  text-align: left;
}

.crs-banner__image {
  flex: 0 0 47px;
  width: 47px;
  height: 42px;
  background: url('data:image/webp;base64,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') no-repeat center / cover;
}

.crs-banner--content .crs-banner__image {
  background-image: url('data:image/webp;base64,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');
}

.crs-banner__text {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
  font-size: 14px;
  line-height: 18px;
}

.crs-banner__title,
.crs-banner__subtitle {
  margin: 0;
}

.crs-banner__title {
  font-weight: 700;
}

.crs-banner__subtitle {
  font-weight: 400;
  opacity: 0.6;
}

@media (max-width: 767px) {
  .crs-banner {
    gap: 16px;
    padding: 17px 0 0;
    border-top: 1px solid rgba(185, 197, 201, 0.2);
    border-radius: 0;
    background: none;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    color: #000;
  }

  .crs-banner__image {
    flex-basis: 40px;
    width: 40px;
    height: 40px;
    background-size: 117.5% 106.96%;
    background-position: -7px -1.4px;
  }

  .crs-banner--content .crs-banner__image {
    background-size: cover;
    background-position: center;
  }

  .crs-banner__subtitle {
    font-size: 13px;
  }
}
`;function g(e,t){let n=e.parentElement;n.querySelector(`.crs-banner, .crs-provider`)?.remove(),n.append(d(m(),t))}var _=`.auth-modal-shell__content > :not(.auth-v1-start-screen, .auth-v1-sms-screen, .auth-v1-provider-screen, .crs-banner, .crs-provider)`;function v(){o(_,e=>{e.parentElement.querySelector(`.crs-banner, .crs-provider`)?.remove()})}var y=`.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__body-info-step,
.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__body-info-text,
.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__body-form-text,
.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__body-secure {
  display: none !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__body {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 24px !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__body-info {
  max-width: none !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 20px !important;
  width: 100% !important;
  margin: 0 !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__body-info::before {
  content: '';
  width: 163px;
  height: 29px;
  background: url('https://sweet.tv/images/logo_sweettv_light.svg') no-repeat center / contain;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__body-info-title {
  display: flex !important;
  flex-direction: column !important;
  gap: 4px !important;
  margin: 0 !important;
  color: #000 !important;
  font-size: 32px !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  text-align: center !important;
}

.auth-modal-shell:has(.crs-banner) .crs-title-accent {
  color: #ff003c;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__body-form {
  max-width: none !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 15px !important;
  width: 100% !important;
  margin: 0 !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__phone-input .ui-input__error:empty,
.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__phone-input .ui-input__warning:empty {
  display: none !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__body-form-button {
  width: 100% !important;
  height: 66px !important;
  min-height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  background: #ff003c !important;
  color: #fff !important;
  border-radius: 16px !important;
  gap: 0 !important;
  font-size: 18px !important;
  font-weight: 700 !important;
  line-height: 26px !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__body-form-button:not(:has(.ui-button__loader))::after {
  content: '\\00a0з SMS';
}

.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__body-options {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 20px !important;
  width: 100% !important;
  max-width: none !important;
  margin: 0 !important;
}

.auth-modal-shell:has(.crs-banner)
  .auth-v1-start-screen__body-options:not(
    :has(
      .auth-social-buttons:not([hidden]):not([style*='display:none']):not([style*='display: none'])
    )
  ):not(:has(.auth-v1-start-screen__provider)) {
  display: none !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__body-options-title {
  display: flex !important;
  align-items: center !important;
  gap: 24px !important;
  width: 100% !important;
  margin: 0 !important;
  color: #000 !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  line-height: 16px !important;
  white-space: nowrap !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__body-options-title::before,
.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__body-options-title::after {
  content: '';
  flex: 1 0 0;
  min-width: 1px;
  height: 1px;
  background: rgba(135, 147, 151, 0.2);
}

.auth-modal-shell:has(.crs-banner) .auth-social-buttons {
  gap: 22px !important;
  margin: 0 !important;
}

.auth-modal-shell:has(.crs-banner) .auth-social-buttons__slot {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 55px !important;
  height: 55px !important;
}

.auth-modal-shell:has(.crs-banner) .auth-facebook-login-button,
.auth-modal-shell:has(.crs-banner) .auth-apple-sign-in-button,
.auth-modal-shell:has(.crs-banner) .auth-social-buttons__placeholder:not(.auth-social-buttons__placeholder--hidden) {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 55px !important;
  height: 55px !important;
  background: #fff !important;
  border-radius: 50% !important;
  box-shadow: 0 9px 29px rgba(0, 0, 0, 0.1) !important;
}

.auth-modal-shell:has(.crs-banner) .auth-facebook-login-button .iconify,
.auth-modal-shell:has(.crs-banner) .auth-apple-sign-in-button .iconify {
  font-size: 48px !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__provider {
  height: auto !important;
  min-height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  color: #000 !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 18px !important;
}

.auth-modal-shell:has(.crs-banner) .auth-google-identity-button {
  transform: scale(1.275);
  box-shadow: 0 0 0 1.6px #fff;
  filter: drop-shadow(0 7px 11.4px rgba(0, 0, 0, 0.1));
}

.auth-modal-shell:has(.crs-banner) .auth-google-identity-button [role='button'] {
  border-color: transparent !important;
}

@media (max-width: 767px) {
  .auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__body-info {
    gap: 19px !important;
  }

  .auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__body-info-title {
    font-size: min(30px, 8vw) !important;
  }

  .auth-modal-shell:has(.crs-banner) .crs-title-accent {
    color: #e70843;
  }

  .auth-modal-shell:has(.crs-banner) .auth-v1-start-screen__body-form-button::after {
    content: none !important;
  }
}
`,b=`.auth-v1-start-screen`,x=`.auth-v1-start-screen__body-info-title`,S=`<span>Підтверди номер</span><span>і <span class="crs-title-accent">дивись безкоштовно</span></span>`,C=`.auth-v1-start-screen__body-options-title`,w=`Або увійди через`;function T(){o(b,e=>{g(e,`Підтверди номер та почни перегляд`),e.querySelector(x).innerHTML=S;let t=e.querySelector(C);t&&(t.textContent=w)})}var E=`.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__info-text:first-child,
.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__form-text {
  display: none !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 24px !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__info {
  max-width: none !important;
  display: flex !important;
  flex-flow: row wrap !important;
  justify-content: center !important;
  align-items: center !important;
  gap: 0 11px !important;
  width: 100% !important;
  margin: 0 !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__info::before {
  content: '';
  flex: 0 0 100%;
  height: 29px;
  margin-bottom: 20px;
  background: url('https://sweet.tv/images/logo_sweettv_light.svg') no-repeat center / 163px 29px;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__info-title {
  flex: 1 0 100% !important;
  margin: 0 0 12px !important;
  color: #000 !important;
  font-size: 30px !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
  text-align: center !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__info-text {
  margin: 0 !important;
  color: #000 !important;
  opacity: 1 !important;
  font-size: 13px !important;
  line-height: 24px !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__info-number {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  margin: 0 !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__info-number-text {
  color: #000 !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 24px !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__info-number-icon {
  width: 18px !important;
  height: 18px !important;
  margin: 0 !important;
  color: #000 !important;
  opacity: 1 !important;
  cursor: pointer;
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg width=%2218.0009%22 height=%2217.7641%22 viewBox=%220 0 18.0009 17.7641%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M2.41342 11.7828L6.03302 15.3522M10.9208 3.39338L14.5404 6.96279M5.65433 15.7778C5.12839 16.2964 4.44609 16.6328 3.70978 16.7365L0.590418 17.176L1.03605 14.0999C1.14123 13.3738 1.48241 12.7009 2.0083 12.1823L13.3514 0.99643C14.0227 0.334523 15.1109 0.334523 15.7821 0.99643L16.9975 2.19491C17.6687 2.85681 17.6687 3.92999 16.9975 4.5919L5.65433 15.7778Z%22 stroke=%22black%22 stroke-miterlimit=%2210%22/%3E%3C/svg%3E") !important;
  mask-image: url("data:image/svg+xml,%3Csvg width=%2218.0009%22 height=%2217.7641%22 viewBox=%220 0 18.0009 17.7641%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M2.41342 11.7828L6.03302 15.3522M10.9208 3.39338L14.5404 6.96279M5.65433 15.7778C5.12839 16.2964 4.44609 16.6328 3.70978 16.7365L0.590418 17.176L1.03605 14.0999C1.14123 13.3738 1.48241 12.7009 2.0083 12.1823L13.3514 0.99643C14.0227 0.334523 15.1109 0.334523 15.7821 0.99643L16.9975 2.19491C17.6687 2.85681 17.6687 3.92999 16.9975 4.5919L5.65433 15.7778Z%22 stroke=%22black%22 stroke-miterlimit=%2210%22/%3E%3C/svg%3E") !important;
  -webkit-mask-size: 100% 100% !important;
  mask-size: 100% 100% !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__form {
  max-width: none !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: stretch !important;
  gap: 15px !important;
  width: 100% !important;
  margin: 0 !important;
}

.auth-modal-shell:has(.crs-banner) .ui-code-input__cells {
  display: flex !important;
  justify-content: center !important;
  gap: 15px !important;
}

.auth-modal-shell:has(.crs-banner) .ui-code-input__cell {
  width: 68px !important;
  height: 68px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: #fff !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  border-radius: 16px !important;
  box-shadow: 0 9px 29px rgba(0, 0, 0, 0.1) !important;
  box-sizing: border-box !important;
  color: #000 !important;
  font-size: 18px !important;
  font-weight: 400 !important;
  line-height: 24px !important;
}

.auth-modal-shell:has(.crs-banner) .ui-code-input__cell--box {
  border-color: #e70843 !important;
}

.auth-modal-shell:has(.crs-banner) .ui-code-input__cell--empty:not(.ui-code-input__cell--box) {
  font-size: 0 !important;
}

.auth-modal-shell:has(.crs-banner) .ui-code-input__cell--empty:not(.ui-code-input__cell--box)::before {
  content: '–';
  font-size: 18px;
  line-height: 24px;
}

.auth-modal-shell:has(.crs-banner) .ui-code-input__cell--box::after {
  height: 22px !important;
  background: #e70843 !important;
}

.auth-modal-shell:has(.crs-banner) .ui-code-input__error:empty {
  display: none !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__submit {
  width: 100% !important;
  max-width: none !important;
  height: 66px !important;
  min-height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  background: #ff003c !important;
  color: #fff !important;
  border-radius: 16px !important;
  font-size: 0 !important;
  font-weight: 700 !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__submit::after {
  content: 'Почати перегляд';
  font-size: 18px;
  line-height: 26px;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__submit:has(.ui-button__loader)::after {
  content: none;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__actions {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 11px !important;
  margin: 0 !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__actions-resend,
.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__actions-change {
  height: auto !important;
  min-height: 0 !important;
  padding: 0 !important;
  color: #000 !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 18px !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__actions-change,
.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__actions-resend::after {
  text-decoration: underline !important;
  text-underline-offset: 2px;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__actions-resend {
  gap: 0 !important;
  font-size: 0 !important;
  opacity: 1 !important;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__actions-resend::before {
  content: 'Не отримав код?\\00a0';
  font-size: 14px;
  line-height: 18px;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__actions-resend::after {
  content: 'Надіслати повторно' attr(data-crs-timer);
  font-size: 14px;
  line-height: 18px;
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__actions-resend--disabled::after {
  color: rgba(0, 0, 0, 0.4);
}

.auth-modal-shell:has(.crs-banner) .auth-v1-sms-screen__notice {
  position: static !important;
  order: 99 !important;
  width: 100% !important;
}
`,D=`.auth-v1-sms-screen`,O=`.auth-v1-sms-screen__info-title`,k=`Введи код з SMS`,A=`.auth-v1-sms-screen__info-text:not(:first-child)`,j=`Код надіслано на`,M=`.auth-v1-sms-screen__actions-resend`;function N(e){let t=()=>{let t=e.textContent.match(/\d+:\d+/),n=t?`\u00a0${t[0]}`:``;e.dataset.crsTimer!==n&&(e.dataset.crsTimer=n)};t(),new MutationObserver(t).observe(e,{characterData:!0,childList:!0,subtree:!0})}function P(){o(D,e=>{g(e,`Введи код та почни перегляд`),e.querySelector(O).textContent=k,e.querySelector(A).textContent=j,N(e.querySelector(M))})}var F=`.auth-modal-shell:has(.crs-provider) .auth-v1-provider-screen {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 0 !important;
  text-align: center !important;
}

.auth-modal-shell:has(.crs-provider) .auth-v1-provider-screen__brand {
  margin: 0 0 20px !important;
}

.auth-modal-shell:has(.crs-provider) .auth-v1-provider-screen__brand img {
  width: 163px !important;
  height: 29px !important;
  object-fit: contain !important;
}

.auth-modal-shell:has(.crs-provider) .auth-v1-provider-screen__title {
  margin: 0 0 12px !important;
  color: #000 !important;
  font-size: 30px !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
}

.auth-modal-shell:has(.crs-provider) .auth-v1-provider-screen__description {
  max-width: none !important;
  margin: 0 0 24px !important;
  color: rgba(0, 0, 0, 0.6) !important;
  font-size: 14px !important;
  line-height: 20px !important;
}

.auth-modal-shell:has(.crs-provider) .auth-v1-provider-screen__input {
  width: 100% !important;
  max-width: none !important;
  margin: 0 0 15px !important;
}

.auth-modal-shell:has(.crs-provider) .auth-v1-provider-screen__input .ui-input__field {
  display: flex !important;
  align-items: center !important;
  height: 68px !important;
  min-height: 0 !important;
  padding: 0 16px !important;
  box-sizing: border-box !important;
  background: #fff !important;
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  border-radius: 16px !important;
  box-shadow: 0 9px 29px rgba(0, 0, 0, 0.1) !important;
}

.auth-modal-shell:has(.crs-provider) .auth-v1-provider-screen__input .ui-input__field:focus-within {
  border-color: #e70843 !important;
}

.auth-modal-shell:has(.crs-provider) .auth-v1-provider-screen__input .ui-input__input {
  width: 100% !important;
  height: 28px !important;
  margin: 0 !important;
  padding: 0 !important;
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  color: #000 !important;
  caret-color: #e70843 !important;
  font-size: 22px !important;
  line-height: 28px !important;
  letter-spacing: 2px !important;
  text-align: center !important;
}

.auth-modal-shell:has(.crs-provider) .auth-v1-provider-screen__input .ui-input__input::placeholder {
  color: rgba(0, 0, 0, 0.38) !important;
  opacity: 1 !important;
}

.auth-modal-shell:has(.crs-provider) .auth-v1-provider-screen__input .ui-input__suffix:empty,
.auth-modal-shell:has(.crs-provider) .auth-v1-provider-screen__input .ui-input__error:empty,
.auth-modal-shell:has(.crs-provider) .auth-v1-provider-screen__input .ui-input__warning:empty {
  display: none !important;
}

.auth-modal-shell:has(.crs-provider) .auth-v1-provider-screen__input .ui-input__error {
  margin: 8px 0 0 !important;
  color: #e70843 !important;
  font-size: 13px !important;
  line-height: 18px !important;
  text-align: center !important;
}

.auth-modal-shell:has(.crs-provider) .auth-v1-provider-screen__submit {
  width: 100% !important;
  max-width: none !important;
  height: 66px !important;
  min-height: 0 !important;
  margin: 0 0 20px !important;
  padding: 0 !important;
  background: #ff003c !important;
  color: #fff !important;
  border: 0 !important;
  border-radius: 16px !important;
  font-size: 18px !important;
  font-weight: 700 !important;
  line-height: 26px !important;
}

.auth-modal-shell:has(.crs-provider) .auth-v1-provider-screen__back {
  width: auto !important;
  height: auto !important;
  min-height: 0 !important;
  margin: 0 0 11px !important;
  padding: 0 !important;
  background: none !important;
  border: 0 !important;
  color: #000 !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 18px !important;
  text-decoration: underline !important;
  text-underline-offset: 2px;
}

.auth-modal-shell:has(.crs-provider) .auth-v1-provider-screen__code {
  margin: 0 !important;
  color: rgba(0, 0, 0, 0.6) !important;
  font-size: 13px !important;
  line-height: 18px !important;
}

@media (max-width: 767px) {
  .auth-modal-shell:has(.crs-provider) .auth-v1-provider-screen__title {
    font-size: min(30px, 8vw) !important;
  }
}
`,I=`.auth-v1-provider-screen`;function L(){o(I,e=>{let t=e.parentElement;t.querySelector(`.crs-banner`)?.remove(),t.append(l(`i`,{class:`crs-provider`,hidden:!0}))})}e({name:`Auth Popup`,dev:`OS`}),t(`exp_auth_popup`);var R=`crs-auth-popup`;function z(e){return!e||e===`undefined`||e===`null`?``:e}new class{constructor(){this.init()}init(){this.ensureStyles([``,n,y,r,E,F,h]),!window.__crsAuthPopupInit&&(window.__crsAuthPopupInit=!0,T(),P(),L(),v())}isUserLoggedOut(){let e=document.cookie.match(/(?:^|; )refresh_token=([^;]+)/),t=z(e?e[1]:``);if(t===``)try{t=z(localStorage.getItem(`refresh_token`))}catch{t=``}return t===``}ensureStyles(e){queueMicrotask(()=>{if(document.getElementById(R))return;let t=document.createElement(`style`);t.id=R,t.textContent=e.join(`
`),document.head.appendChild(t)})}}})();
