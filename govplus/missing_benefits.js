(function(){var e=e=>new Promise(t=>{let n=document.querySelector(e);if(n){t(n);return}let r=new MutationObserver(()=>{let n=document.querySelector(e);n&&(t(n),r.disconnect())});r.observe(document.documentElement,{childList:!0,subtree:!0})}),t=({name:e,dev:t})=>{},n=`
/* Basic not selected: host description as in control; selected: our loss list instead */
[data-crs-basic].is-selected > .SubscriptionOfferOptionCard__body > .GText,
[data-crs-basic]:not(.is-selected) .crs-losses {
  display: none;
}


.crs-loss__title {
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  color: #191919;
}

.crs-loss__desc {
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.45;
  color: #535c62;
  margin-top: 2px;
}

.crs-more {
  display: block;
}

@media (min-width: 600px) {
  div.SubscriptionOfferOptionCard.premium-family-plan-option:not(.is-selected) div.SubscriptionOfferOptionCard__head {
    align-items: flex-start;
  }

  div.SubscriptionOfferOptionCard.premium-family-plan-option:not(.is-selected) div.SubscriptionOfferOptionCard__head-lead {
    align-items: flex-start;
  }

  /* radio (22px) and price row (28px) centred on the 20px title line */
  div.SubscriptionOfferOptionCard.premium-family-plan-option:not(.is-selected) div.SubscriptionOfferOptionCard__radio {
    margin-top: -1px;
  }

  div.SubscriptionOfferOptionCard.premium-family-plan-option:not(.is-selected) div.SubscriptionOfferOptionCard__head-price {
    margin-top: -4px;
  }

  div.SubscriptionOfferOptionCard.premium-family-plan-option:not(.is-selected) div.SubscriptionOfferOptionCard__head-main {
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 8px;
  }

  div.SubscriptionOfferOptionCard.premium-family-plan-option:not(.is-selected) div.SubscriptionOfferOptionCard__head-main > .ant-typography {
    flex-basis: 100%;
  }
}

.crs-moneyback__text {
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.1px;
  color: #6e6e6e;
}
`;t({name:`Highlight Benefits Missing in GOV+ Basic`,dev:`OS`});var r=`<svg width="14" height="14" viewBox="-2.6 -2.6 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38122 0.381368C0.623874 0.138714 1.01821 0.139931 1.26013 0.383321L4.4281 3.57082L7.57653 0.384298C7.81801 0.140325 8.21168 0.139563 8.45446 0.382345C8.69569 0.623597 8.6967 1.01426 8.45642 1.25637L5.28259 4.44875L8.45544 7.64113C8.69631 7.88348 8.69607 8.2755 8.45446 8.51711C8.21185 8.75958 7.81841 8.75835 7.57653 8.51516L4.4281 5.34816L1.26013 8.51711C1.01777 8.75946 0.624587 8.75941 0.382197 8.51711C0.14049 8.2754 0.139582 7.88377 0.380244 7.64113L3.55212 4.44875L0.380244 1.25734C0.139391 1.01502 0.139681 0.622987 0.38122 0.381368Z" fill="#DC2626" stroke="#DC2626" stroke-width="0.4"/></svg>`,i=`<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.00015 7.49951L6.56265 9.06201L9.68765 5.93701" stroke="#6E6E6E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.50015 13.6513C7.50015 13.6513 12.8126 11.1907 12.8126 7.49995V3.19403L7.50015 1.34863L2.18765 3.19403V7.49995C2.18765 11.1907 7.50015 13.6513 7.50015 13.6513Z" stroke="#6E6E6E" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg>`,a=`Once your SSN and passport details are mailed to the government, no one is watching them.`,o=[[/precheck|tsa/i,`Once your SSN and background check info hit a government database, no one's watching it.`],[/social security/i,`Once your SSN and personal info are mailed off to the government, no one's watching it.`],[/birth/i,`Once your personal info is mailed off to a government office, no one's watching it.`],[/address/i,`Once your SSN and new address are filed with the government, no one's watching it.`],[/name/i,`Once your SSN and personal info are filed with the government, no one's watching it.`]],s=(e,t)=>`
  <div class="SubscriptionOfferOptionCard__benefit crs-loss">
    ${r}
    <div class="SubscriptionOfferOptionCard__benefit-text">
      <div class="crs-loss__title">${e}</div>
      <div class="crs-loss__desc">${t}</div>
    </div>
  </div>`,c=()=>{let e=document.createElement(`style`);e.textContent=n,document.head.appendChild(e)},l=async()=>{let[,t,n]=(await e(`.SubscriptionPremiumUpsell__content__header .ant-typography`)).textContent.match(/^Your (.+?) earned you a \$(\d+) credit/),r=o.find(([e])=>e.test(t))?.[1]??a,i=await e(`.SubscriptionOfferOptionsList .SubscriptionOfferOptionCard:not(.is-collapsible)`);if(!i.querySelector(`.crs-losses`))return i.setAttribute(`data-crs-basic`,``),i.querySelector(`.SubscriptionOfferOptionCard__body`).insertAdjacentHTML(`beforeend`,`<div class="SubscriptionOfferOptionCard__benefits crs-losses">
      ${s(`Your $${n} credit`,`It's already applied to this order. Choose Basic and it's gone for good.`)}
      ${s(`Expedited processing`,`Your application drops to the back of the standard queue and waits its turn.`)}
      ${s(`$1M identity theft protection`,r)}
      ${s(`Renewal &amp; Deadlines Watch`,`Never missing a renewal or deadline on key government documents — that's back on you.`)}
    </div>`),n},u=async t=>{let n=await e(`.SubscriptionFooter__primary-buttonWrapper`),r=()=>{let e=n.querySelector(`button .ant-typography`)?.firstChild;e?.nodeValue?.startsWith(`Continue without my`)&&(e.nodeValue=`Lose my $${t} credit. Continue with Basic`)};r(),new MutationObserver(r).observe(n,{subtree:!0,childList:!0,characterData:!0})},d=async()=>{let t=await e(`.SubscriptionOfferOptionsList .SubscriptionOfferOptionCard.is-collapsible`),n=()=>{let e=t.querySelector(`.SubscriptionOfferOptionCard__benefit p`);if(!e)return;let n=e.innerHTML,r=n.replace(/,\s*(and \d+ more)\s*$/,`,<span class="crs-more">$1</span>`);r!==n&&(e.innerHTML=r)};n(),new MutationObserver(n).observe(t,{childList:!0,subtree:!0})},f=async()=>{let t=await e(`.SubscriptioninterstitialPageFooter__footer`);t.querySelector(`.crs-moneyback`)||t.insertAdjacentHTML(`afterbegin`,`<div class="SubscriptioninterstitialPageFooter__footer-item crs-moneyback">
      ${i}
      <div class="crs-moneyback__text">7-day money back</div>
    </div>`)};(async()=>{c(),d();let e=await l();e&&(u(e),f())})()})();
