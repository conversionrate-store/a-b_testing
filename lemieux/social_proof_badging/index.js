(function() {
  "use strict";
  const p = (r, e, a, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: r,
      event_desc: e,
      event_type: a,
      event_loc: o
    }), C(`Event: ${r} | ${e} | ${a} | ${o}`, "success");
  }, H = ({ name: r, dev: e }) => {
    console.log(
      `%c EXP: ${r} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, C = (r, e = "info") => {
    let a;
    switch (e) {
      case "info":
        a = "color: #3498db;";
        break;
      case "warn":
        a = "color: #f39c12;";
        break;
      case "error":
        a = "color: #e74c3c;";
        break;
      case "success":
        a = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${r}`, `${a} font-size: 16px; font-weight: 600`);
  };
  let v = "", m = [];
  function h() {
    return window.location.href;
  }
  function T() {
    const r = h();
    r !== v && (v = r, m.forEach((e) => {
      try {
        e();
      } catch (a) {
        console.error("[Social Proof] Route change handler error:", a);
      }
    }));
  }
  function P() {
    window.addEventListener("popstate", T);
    const r = history.pushState.bind(history), e = history.replaceState.bind(history);
    history.pushState = function(...a) {
      r(...a), requestAnimationFrame(T);
    }, history.replaceState = function(...a) {
      e(...a), requestAnimationFrame(T);
    }, document.body.addEventListener(
      "click",
      () => requestAnimationFrame(T),
      !0
    );
  }
  function f(r) {
    return m.push(r), m.length === 1 && (v = h(), P()), requestAnimationFrame(() => r()), () => {
      m = m.filter((e) => e !== r);
    };
  }
  const A = [
    "category-view-layout",
    // custom element
    // Fallback: PLP-specific class (from DOM inspection)
    "advanced-commerce-search-view"
  ], L = [
    "product-view-layout",
    // custom element
    // Fallback: PDP-specific elements
    ".product-gallery",
    ".product-image-gallery-container"
  ];
  function E(r) {
    for (const e of r)
      try {
        const a = document.querySelector(e);
        if (a) return a;
      } catch {
      }
    return null;
  }
  function w() {
    return E(L) ? "pdp" : E(A) ? "plp" : "other";
  }
  const D = 1e4, M = 100;
  function Y(r = {}) {
    const e = r.timeout ?? D, a = r.pollInterval ?? M;
    return new Promise((o) => {
      const t = () => {
        const i = w();
        return i !== "other" ? (o(i), !0) : !1;
      };
      if (t()) return;
      const s = Date.now() + e, n = setInterval(() => {
        if (t()) {
          clearInterval(n);
          return;
        }
        Date.now() >= s && (clearInterval(n), o("other"));
      }, a);
    });
  }
  const y = "data-social-proof-baging-id";
  function S(r) {
    return document.querySelector(`[${y}="${r}"]`) !== null;
  }
  const G = [
    "plp-handler-init",
    "pdp-handler-init",
    "products-changes-init"
  ];
  function F() {
    for (const r of G) {
      const e = document.querySelector(`[${y}="${r}"]`);
      e && e.removeAttribute(y);
    }
  }
  const W = `product:is(.crs-bestseller-badge, .crs-selling-fast-badge) {
  position: relative;
}

product:where(.crs-bestseller-badge, .crs-selling-fast-badge)
  div:has(> swiper)::after {
  /* content: ''; */
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  padding: 0.25rem 0.5rem;
  /* font-family: 'Source Sans 3'; */
  font-size: 0.9375rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0625rem;
  /* pointer-events: none; */
  z-index: 1;
  background: rgba(250, 250, 250, 0.8);
  color: #212121;
}

@media (max-width: 1100px) {
  product:is(.crs-bestseller-badge, .crs-selling-fast-badge)
    div:has(> swiper)::after {
    top: auto;
    bottom: 1.94rem;
    left: 0;
  }
}

product.crs-bestseller-badge div:has(> swiper)::after {
  content: 'Best Seller';
}

product.crs-selling-fast-badge div:has(> swiper)::after {
  content: 'Selling Fast';
}

product:is(.crs-bestseller-badge, .crs-selling-fast-badge)
  div.pos-absolute:has(+ wishlist-toggle) {
  display: none;
}
/* 
product wishlist-toggle action {
  width: 44px;
  height: 44px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  border-radius: 1111px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
}

product wishlist-toggle action .wishlist-icon {
  display: none !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

product wishlist-toggle action .button__body::after {
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="%23000" d="M20.474 5.568a5.26 5.26 0 0 0-7.494 0l-.48.485-.48-.485a5.26 5.26 0 0 0-7.493 0c-2.024 2.048-2.037 5.293-.03 7.55 1.83 2.058 7.227 6.503 7.456 6.691a.83.83 0 0 0 .528.19h.018a.8.8 0 0 0 .547-.19c.23-.188 5.627-4.633 7.458-6.691 2.006-2.257 1.993-5.502-.03-7.55m-1.217 6.415c-1.427 1.603-5.35 4.911-6.758 6.085-1.408-1.174-5.329-4.481-6.756-6.085-1.4-1.574-1.413-3.816-.03-5.215a3.6 3.6 0 0 1 2.56-1.071c.928 0 1.855.357 2.56 1.071l1.056 1.067a.8.8 0 0 0 .45.23.83.83 0 0 0 .771-.23l1.056-1.067a3.596 3.596 0 0 1 5.12 0c1.383 1.399 1.37 3.64-.03 5.215"/></svg>');
} */
`;
  function b(r, e = {}) {
    const a = e.timeout ?? 1e4, o = e.root ?? document.body, t = Array.isArray(r) ? r : [r], s = () => {
      for (const n of t)
        try {
          const i = o.querySelector(n);
          if (i) return i;
        } catch {
          continue;
        }
      return null;
    };
    return new Promise((n, i) => {
      const c = s();
      if (c) {
        n(c);
        return;
      }
      const d = Date.now() + a, u = new MutationObserver(() => {
        const g = s();
        g ? (u.disconnect(), n(g)) : Date.now() >= d && (u.disconnect(), i(new Error(`Element not found within ${a}ms`)));
      });
      u.observe(o, {
        childList: !0,
        subtree: !0
      }), setTimeout(() => {
        const g = s();
        g ? (u.disconnect(), n(g)) : (u.disconnect(), i(new Error(`Element not found within ${a}ms`)));
      }, a);
    });
  }
  const O = [
    { sku: "IT08707", variantName: "Junior Field Riding Boots Brown", department: "", subCategory: "Riding Boots", category: "FOOTWEAR" },
    { sku: "IT05661", variantName: "Field Riding Boots Black", department: "", subCategory: "Riding Boots", category: "FOOTWEAR" },
    { sku: "IT04599", variantName: "Close Contact Glove White", department: "ACCESSORIES", subCategory: "Riding", category: "Gloves" },
    { sku: "IT07438", variantName: "Show Jacket Bag Black", department: "ACCESSORIES", subCategory: "Luggage", category: "Bags" },
    { sku: "IT04760", variantName: "Crystal Insert Belt Black", department: "ACCESSORIES", subCategory: "Belts", category: "Belts" },
    { sku: "IT04316", variantName: "Close Contact Gloves Black", department: "ACCESSORIES", subCategory: "Riding", category: "Gloves" },
    { sku: "IT03829", variantName: "Waterproof Gloves Black", department: "ACCESSORIES", subCategory: "Riding", category: "Gloves" },
    { sku: "IT04978", variantName: "Luxe Bridle Bag Navy", department: "ACCESSORIES", subCategory: "Luggage", category: "Bags" },
    { sku: "IT04930", variantName: "Saddle Pad Carry Bag Black", department: "ACCESSORIES", subCategory: "Luggage", category: "Bags" },
    { sku: "IT00010", variantName: "Team Baseball Cap Grey", department: "ACCESSORIES", subCategory: "Baseball Caps", category: "Hats" },
    { sku: "IT00053", variantName: "Classic Riding Gloves Brown", department: "ACCESSORIES", subCategory: "Riding", category: "Gloves" },
    { sku: "IT00056", variantName: "Classic Riding Gloves White", department: "ACCESSORIES", subCategory: "Riding", category: "Gloves" },
    { sku: "IT05719", variantName: "Scrunchie with Crystal Hair Net Navy/Black", department: "ACCESSORIES", subCategory: "Hair", category: "Hair" },
    { sku: "IT04964", variantName: "Luxe Boot Bag Black", department: "ACCESSORIES", subCategory: "Luggage", category: "Bags" },
    { sku: "IT06787", variantName: "Pro Mesh Hat Silk Black", department: "ACCESSORIES", subCategory: "Hat Silks", category: "Hat Silks" },
    { sku: "IT04933", variantName: "Pro Stable Guard Navy", department: "ACCESSORIES", subCategory: "Stable", category: "Bags" },
    { sku: "IT06780", variantName: "Classique Pom Hat Silk Benetton Blue", department: "ACCESSORIES", subCategory: "Hat Silks", category: "Hat Silks" },
    { sku: "IT06784", variantName: "Classique Pom Hat Silk Ice Blue", department: "ACCESSORIES", subCategory: "Hat Silks", category: "Hat Silks" },
    { sku: "IT03589", variantName: "Performance Socks Black", department: "ACCESSORIES", subCategory: "Competition Socks", category: "Socks" },
    { sku: "IT05519", variantName: "Mini Grooming Set Benetton Blue", department: "ACCESSORIES", subCategory: "Grooming", category: "Bags" },
    { sku: "IT02861", variantName: "Competition Socks Hunter Green (Twin Pack)", department: "ACCESSORIES", subCategory: "Competition Socks", category: "Socks" },
    { sku: "IT06781", variantName: "Classique Pom Hat Silk Black", department: "ACCESSORIES", subCategory: "Hat Silks", category: "Hat Silks" },
    { sku: "IT07419", variantName: "Hobby Horse Carry Bag Navy", department: "ACCESSORIES", subCategory: "Luggage", category: "Bags" },
    { sku: "IT04244", variantName: "Elite Pro Grooming Bag Navy", department: "ACCESSORIES", subCategory: "Grooming", category: "Bags" },
    { sku: "IT06390", variantName: "Classic Stock White", department: "ACCESSORIES", subCategory: "Competition Accessories", category: "Accessories" },
    { sku: "IT00042", variantName: "Thermal Work Gloves Black", department: "ACCESSORIES", subCategory: "Working", category: "Gloves" },
    { sku: "IT00273", variantName: "Competition Socks Burgundy (Twin Pack)", department: "ACCESSORIES", subCategory: "Competition Socks", category: "Socks" },
    { sku: "IT03768", variantName: "Elite Pro Boot & Hat Bag Black", department: "ACCESSORIES", subCategory: "Luggage", category: "Bags" },
    { sku: "IT07470", variantName: "Elite ProKit Lite Grooming Bag Black", department: "ACCESSORIES", subCategory: "Luggage", category: "Bags" },
    { sku: "IT00271", variantName: "Competition Socks Black (Twin Pack)", department: "ACCESSORIES", subCategory: "Competition Socks", category: "Socks" },
    { sku: "IT05518", variantName: "Mini Grooming Set Red", department: "ACCESSORIES", subCategory: "Grooming", category: "Bags" },
    { sku: "IT00281", variantName: "Competition Socks Navy (Twin Pack)", department: "ACCESSORIES", subCategory: "Competition Socks", category: "Socks" },
    { sku: "IT01681", variantName: "Gel-Tek Anatomic Dressage Girth Black", department: "HORSE", subCategory: "Girths & Covers", category: "Saddlery & Tack" },
    { sku: "IT02644", variantName: "Kudos Grackle Bridle Havana", department: "HORSE", subCategory: "BRIDLES", category: "Saddlery & Tack" },
    { sku: "IT01682", variantName: "Gel-Tek Anatomic Jumping Girth Black", department: "HORSE", subCategory: "Girths & Covers", category: "Saddlery & Tack" },
    { sku: "IT04866", variantName: "Merino+ ProSorb 2 Pocket Half Pad Black/Black", department: "HORSE", subCategory: "Merino", category: "Saddle Pads" },
    { sku: "IT04126", variantName: "Arika Featherweight Rug 0g Navy", department: "HORSE", subCategory: "Turnout Rugs", category: "Rugs" },
    { sku: "IT04862", variantName: "Merino+ ProSorb Hunter Saddle Pad White/White", department: "HORSE", subCategory: "Merino", category: "Saddle Pads" },
    { sku: "IT01683", variantName: "Gel-Tek Anatomic Jumping Girth Brown", department: "HORSE", subCategory: "Girths & Covers", category: "Saddlery & Tack" },
    { sku: "IT04897", variantName: "ProSorb Plain 2 Pocket GP Square Navy", department: "HORSE", subCategory: "General Purpose", category: "Saddle Pads" },
    { sku: "IT03552", variantName: "Kudos Patent Rolled Dressage Bridle Black", department: "HORSE", subCategory: "BRIDLES", category: "Saddlery & Tack" },
    { sku: "IT04871", variantName: "Merino+ Half Pad Black/Natural", department: "HORSE", subCategory: "Merino", category: "Saddle Pads" },
    { sku: "IT06259", variantName: "Kudos AeroGuard Fly Rug Silver", department: "HORSE", subCategory: "Fly Rugs", category: "Rugs" },
    { sku: "IT05305", variantName: "Arika Ripstop 0g Turnout Rug Alpine", department: "HORSE", subCategory: "Turnout Rugs", category: "Rugs" },
    { sku: "IT08109", variantName: "Cotton Dressage Square White", department: "HORSE", subCategory: "Dressage", category: "Saddle Pads" },
    { sku: "IT02761", variantName: "Fleece Edged Mesh Brushing Boot Black/Natural", department: "HORSE", subCategory: "Brushing", category: "Horse Boots" },
    { sku: "IT08110", variantName: "Cotton Dressage Competition Square White", department: "HORSE", subCategory: "Dressage", category: "Saddle Pads" },
    { sku: "IT05917", variantName: "Essence Dressage Square Stone", department: "HORSE", subCategory: "Dressage", category: "Saddle Pads" },
    { sku: "IT07588", variantName: "Mini Suede Close Contact Square Chilli", department: "HORSE", subCategory: "Close Contact", category: "Saddle Pads" },
    { sku: "IT03582", variantName: "Crystal Suede Dressage Pad Navy", department: "HORSE", subCategory: "Dressage", category: "Saddle Pads" },
    { sku: "IT05553", variantName: "Junior Vector Balance Stirrup Aluminium", department: "HORSE", subCategory: "Stirrups & Stirrups Accessories", category: "Saddlery & Tack" },
    { sku: "IT04891", variantName: "ProSorb Plain 3 Pocket Quilted Half Pad Black", department: "HORSE", subCategory: "Pro-sorb", category: "Saddle Pads" },
    { sku: "IT06381", variantName: "Vector Control Stirrup Rose Gold", department: "HORSE", subCategory: "Stirrups & Stirrups Accessories", category: "Saddlery & Tack" },
    { sku: "IT07585", variantName: "Mini Suede Close Contact Square Ice Blue", department: "HORSE", subCategory: "Close Contact", category: "Saddle Pads" },
    { sku: "IT06382", variantName: "Vector Balance Stirrup Aluminium", department: "HORSE", subCategory: "Stirrups & Stirrups Accessories", category: "Saddlery & Tack" },
    { sku: "IT04128", variantName: "Arika Armour-Tek Fly Rug Stone", department: "HORSE", subCategory: "Fly Rugs", category: "Rugs" },
    { sku: "IT00585", variantName: "ProIce Freeze Boots Black", department: "HORSE", subCategory: "Therapy", category: "Horse Boots" },
    { sku: "IT07596", variantName: "Cotton Close Contact Square White", department: "HORSE", subCategory: "Close Contact", category: "Saddle Pads" },
    { sku: "IT07592", variantName: "Cotton Close Contact Square Black", department: "HORSE", subCategory: "Close Contact", category: "Saddle Pads" },
    { sku: "IT02762", variantName: "Fleece Edged Mesh Brushing Boots White/Natural", department: "HORSE", subCategory: "Brushing", category: "Horse Boots" },
    { sku: "IT06920", variantName: "Ride On Fly Mask Black", department: "HORSE", subCategory: "Fly Masks", category: "Fly Masks" },
    { sku: "IT07606", variantName: "Loire Classic Close Contact Square Black", department: "HORSE", subCategory: "Close Contact", category: "Saddle Pads" },
    { sku: "IT05554", variantName: "Junior Vector Balance Stirrup Black", department: "HORSE", subCategory: "Stirrups & Stirrups Accessories", category: "Saddlery & Tack" },
    { sku: "IT07597", variantName: "Suede Close Contact Square Benetton Blue", department: "HORSE", subCategory: "Close Contact", category: "Saddle Pads" },
    { sku: "IT00731", variantName: "Loire Fly Hood Black", department: "HORSE", subCategory: "Fly Hoods", category: "Fly Hoods" },
    { sku: "IT04142", variantName: "Bug Relief Full Mask Navy", department: "HORSE", subCategory: "Fly Masks", category: "Fly Masks" },
    { sku: "IT01339", variantName: "Loire Classic Dressage Square White", department: "HORSE", subCategory: "Dressage", category: "Saddle Pads" },
    { sku: "IT07602", variantName: "Suede Close Contact Square Navy", department: "HORSE", subCategory: "Close Contact", category: "Saddle Pads" },
    { sku: "IT00739", variantName: "Loire Fly Hood Navy", department: "HORSE", subCategory: "Fly Hoods", category: "Fly Hoods" },
    { sku: "IT02638", variantName: "Kudos Work Bridle Brown", department: "HORSE", subCategory: "BRIDLES", category: "Saddlery & Tack" },
    { sku: "IT01725", variantName: "Vector Pro Stirrup Leather Black", department: "HORSE", subCategory: "Stirrup Leathers", category: "Saddlery & Tack" },
    { sku: "IT01045", variantName: "Arika Stable Sheet Navy", department: "HORSE", subCategory: "Stable Rugs", category: "Rugs" },
    { sku: "IT07601", variantName: "Suede Close Contact Square Ice Blue", department: "HORSE", subCategory: "Close Contact", category: "Saddle Pads" },
    { sku: "IT00586", variantName: "Turnout Boots Black", department: "HORSE", subCategory: "Turnout", category: "Horse Boots" },
    { sku: "IT01409", variantName: "Cotton Dressage Competition Square White", department: "HORSE", subCategory: "Dressage", category: "Saddle Pads" },
    { sku: "IT04436", variantName: "Mesh Brushing Boot Brown", department: "HORSE", subCategory: "Brushing", category: "Horse Boots" },
    { sku: "IT07608", variantName: "Loire Classic Close Contact Square Hunter Green", department: "HORSE", subCategory: "Close Contact", category: "Saddle Pads" },
    { sku: "IT00649", variantName: "Ballistic Over Reach Boots Black", department: "HORSE", subCategory: "Over Reach", category: "Horse Boots" },
    { sku: "IT04893", variantName: "ProSorb Plain 2 Pocket Half Pad Black", department: "HORSE", subCategory: "Pro-sorb", category: "Saddle Pads" },
    { sku: "IT04435", variantName: "Mesh Brushing Boot White", department: "HORSE", subCategory: "Brushing", category: "Horse Boots" },
    { sku: "IT00881", variantName: "Anatomic Headcollar Brown", department: "HORSE", subCategory: "Leather", category: "Headcollars" },
    { sku: "IT00880", variantName: "Anatomic Headcollar Black", department: "HORSE", subCategory: "Leather", category: "Headcollars" },
    { sku: "IT00875", variantName: "Comfort Headcollar Black", department: "HORSE", subCategory: "Comfort", category: "Headcollars" },
    { sku: "IT00760", variantName: "Classic Fly Hood Ice Blue", department: "HORSE", subCategory: "Fly Hoods", category: "Fly Hoods" },
    { sku: "IT00826", variantName: "Vogue Headcollar & Leadrope Black", department: "HORSE", subCategory: "Vogue", category: "Headcollars" },
    { sku: "IT04916", variantName: "Grafter Brushing Boot Black", department: "HORSE", subCategory: "Grafter", category: "Horse Boots" },
    { sku: "IT04844", variantName: "Flexi Soft Body Brush Black", department: "HORSE", subCategory: "Grooming", category: "Horse Care" },
    { sku: "IT03231", variantName: "ProSafe Headcollar Black", department: "HORSE", subCategory: "Other", category: "Headcollars" },
    { sku: "IT00830", variantName: "Vogue Headcollar & Leadrope Chilli", department: "HORSE", subCategory: "Vogue", category: "Headcollars" },
    { sku: "IT00832", variantName: "Vogue Headcollar & Leadrope Hunter Green", department: "HORSE", subCategory: "Vogue", category: "Headcollars" },
    { sku: "IT00651", variantName: "Rubber Bell Boots with Fleece Black", department: "HORSE", subCategory: "Over Reach", category: "Horse Boots" },
    { sku: "IT00947", variantName: "Bridle Number Holder Black", department: "HORSE", subCategory: "Number Holders", category: "Saddlery & Tack" },
    { sku: "IT01922", variantName: "Dressage Saddle Cover Black", department: "HORSE", subCategory: "Other Accessories", category: "Saddlery & Tack" },
    { sku: "IT00907", variantName: "GP Jump Saddle Cover Black", department: "HORSE", subCategory: "Other Accessories", category: "Saddlery & Tack" },
    { sku: "IT01914", variantName: "Hippo Haynet Burgundy", department: "HORSE", subCategory: "Haynets", category: "Horse Care" },
    { sku: "IT01915", variantName: "Hippo Haynet Navy", department: "HORSE", subCategory: "Haynets", category: "Horse Care" },
    { sku: "IT04127", variantName: "Arika Shower-Tek Fly Rug Navy", department: "HORSE", subCategory: "Fly Rugs", category: "Rugs" },
    { sku: "IT07391", variantName: "Mens Hooded Puffer Jacket Black", department: "MENS", subCategory: "Jackets", category: "Coats & Jackets" },
    { sku: "IT08174", variantName: "Mens Hooded Puffer Gilet Navy", department: "MENS", subCategory: "Gilets", category: "Coats & Jackets" },
    { sku: "IT07399", variantName: "Mens Classique Polo Shirt Black", department: "MENS", subCategory: "Polos", category: "Tops" },
    { sku: "IT07406", variantName: "Mens Quarter Neck Sweat Alpine", department: "MENS", subCategory: "Sweats", category: "Tops" },
    { sku: "IT07123", variantName: "Hobby Horse Vogue Headcollar & Leadrope Hunter Green", department: "TOYS", subCategory: "Hobby Horse Accessories", category: "Hobby Horse" },
    { sku: "IT06249", variantName: "Hobby Horse Vogue Headcollar & Leadrope Blossom", department: "TOYS", subCategory: "Hobby Horse Accessories", category: "Hobby Horse" },
    { sku: "IT08686", variantName: "Toy Pony Coco", department: "TOYS", subCategory: "Toy Pony", category: "Toy Pony" },
    { sku: "IT08133", variantName: "Hobby Horse Popcorn", department: "TOYS", subCategory: "Hobby Horse", category: "Hobby Horse" },
    { sku: "IT08126", variantName: "Toy Pony Dream", department: "TOYS", subCategory: "Toy Pony", category: "Toy Pony" },
    { sku: "IT05447", variantName: "Toy Pony Treat Bucket Multi", department: "TOYS", subCategory: "Toy Pony Accessories", category: "Toy Pony" },
    { sku: "IT06956", variantName: "Toy Rider Chloe", department: "TOYS", subCategory: "Toy Rider", category: "Toy Rider" },
    { sku: "IT02101", variantName: "Toy Pony Saddle Black", department: "TOYS", subCategory: "Toy Pony Accessories", category: "Toy Pony" },
    { sku: "IT02100", variantName: "Toy Pony Bridle Black", department: "TOYS", subCategory: "Toy Pony Accessories", category: "Toy Pony" },
    { sku: "IT05776", variantName: "Toy Pony Pad Azure", department: "TOYS", subCategory: "Toy Pony Accessories", category: "Toy Pony" },
    { sku: "IT06395", variantName: "Tiny Pony Dream", department: "TOYS", subCategory: "Toy Pony", category: "Toy Pony" },
    { sku: "IT06957", variantName: "Toy Rider Olivia", department: "TOYS", subCategory: "Toy Rider", category: "Toy Rider" },
    { sku: "IT03311", variantName: "Toy Pony Saddle Brown", department: "TOYS", subCategory: "Toy Pony Accessories", category: "Toy Pony" },
    { sku: "IT03312", variantName: "Toy Pony Bridle Brown", department: "TOYS", subCategory: "Toy Pony Accessories", category: "Toy Pony" },
    { sku: "IT03417", variantName: "Hobby Horse Competition Bridle Black", department: "TOYS", subCategory: "Hobby Horse Accessories", category: "Hobby Horse" },
    { sku: "IT05471", variantName: "Toy Pony Grooming Kit Chilli", department: "TOYS", subCategory: "Toy Pony Accessories", category: "Toy Pony" },
    { sku: "IT04383", variantName: "Hobby Horse Chancer", department: "TOYS", subCategory: "Hobby Horse", category: "Hobby Horse" },
    { sku: "IT06253", variantName: "Hobby Horse Running Martingale Brown", department: "TOYS", subCategory: "Hobby Horse Accessories", category: "Hobby Horse" },
    { sku: "IT03679", variantName: "Hobby Horse Flash", department: "TOYS", subCategory: "Hobby Horse", category: "Hobby Horse" },
    { sku: "IT07124", variantName: "Hobby Horse Vogue Headcollar & Leadrope Chilli", department: "TOYS", subCategory: "Hobby Horse Accessories", category: "Hobby Horse" },
    { sku: "IT03400", variantName: "Mia Mesh Long Sleeve Base Layer Black", department: "WOMENS", subCategory: "Baselayers", category: "Tops" },
    { sku: "IT06271", variantName: "Zip Paddock Boot Brown", department: "WOMENS", subCategory: "Boots", category: "FOOTWEAR" },
    { sku: "IT06619", variantName: "Rose Hooded Puffer Jacket Navy", department: "WOMENS", subCategory: "Jackets", category: "Coats & Jackets" },
    { sku: "IT06143", variantName: "Ladies Team Jacket Navy", department: "WOMENS", subCategory: "Jackets", category: "Coats & Jackets" },
    { sku: "IT03571", variantName: "Amelie Waterproof Lightweight Riding Coat Navy", department: "WOMENS", subCategory: "Coats", category: "Coats & Jackets" },
    { sku: "IT04715", variantName: "Mia Mesh Short Sleeve Base Layer Navy", department: "WOMENS", subCategory: "Baselayers", category: "Tops" },
    { sku: "IT08666", variantName: "Bramshaw Chelsea Welly Olive", department: "WOMENS", subCategory: "WELLIES", category: "FOOTWEAR" },
    { sku: "IT05124", variantName: "Naomi Pull On Breeches Navy", department: "WOMENS", subCategory: "Pull Ons", category: "Bottoms" },
    { sku: "IT05125", variantName: "Naomi Pull On Breeches Black", department: "WOMENS", subCategory: "Pull Ons", category: "Bottoms" },
    { sku: "IT04721", variantName: "Mia Mesh Short Sleeve Base Layer Ice Blue", department: "WOMENS", subCategory: "Baselayers", category: "Tops" },
    { sku: "IT02365", variantName: "Olivia Short Sleeve Show Shirt White", department: "WOMENS", subCategory: "Show Shirts", category: "Tops" },
    { sku: "IT08020", variantName: "Ultra Stride Wellington Boots Navy", department: "WOMENS", subCategory: "WELLIES", category: "FOOTWEAR" },
    { sku: "IT06792", variantName: "Classique Base Layer Ice Blue", department: "WOMENS", subCategory: "Baselayers", category: "Tops" },
    { sku: "IT04722", variantName: "Mia Mesh Short Sleeve Base Layer Hunter Green", department: "WOMENS", subCategory: "Baselayers", category: "Tops" },
    { sku: "IT06790", variantName: "Classique Base Layer Chilli", department: "WOMENS", subCategory: "Baselayers", category: "Tops" },
    { sku: "IT05716", variantName: "Trax Waterproof Trainer Black", department: "WOMENS", subCategory: "Trainers", category: "FOOTWEAR" },
    { sku: "IT02497", variantName: "Dynamique Show Jacket Navy", department: "WOMENS", subCategory: "Show Jackets", category: "Coats & Jackets" },
    { sku: "IT02498", variantName: "Dynamique Show Jacket Black", department: "WOMENS", subCategory: "Show Jackets", category: "Coats & Jackets" },
    { sku: "IT06852", variantName: "Mini Classique Base Layer Navy", department: "YOUNGRIDER", subCategory: "Baselayers", category: "Tops" },
    { sku: "IT05782", variantName: "Mini Pull Ons Navy", department: "YOUNGRIDER", subCategory: "Pull Ons", category: "Bottoms" },
    { sku: "IT05865", variantName: "Young Rider Orla Pull Ons Navy", department: "YOUNGRIDER", subCategory: "Pull Ons", category: "Bottoms" },
    { sku: "IT05864", variantName: "Young Rider Orla Pull Ons Black", department: "YOUNGRIDER", subCategory: "Pull Ons", category: "Bottoms" },
    { sku: "IT06573", variantName: "Young Rider Kennedy Show Jacket Stone", department: "YOUNGRIDER", subCategory: "Show Jackets", category: "Coats & Jackets" },
    { sku: "IT06840", variantName: "Young Rider Soft Shell Jacket Black", department: "YOUNGRIDER", subCategory: "Jackets", category: "Coats & Jackets" },
    { sku: "IT07375", variantName: "Young Rider Boys Classique Breech Beige", department: "YOUNGRIDER", subCategory: "Breeches", category: "Bottoms" },
    { sku: "IT06807", variantName: "Young Rider Classique Base Layer Chilli", department: "YOUNGRIDER", subCategory: "Baselayers", category: "Tops" },
    { sku: "IT06809", variantName: "Young Rider Classique Base Layer Ice Blue", department: "YOUNGRIDER", subCategory: "Baselayers", category: "Tops" },
    { sku: "IT07225", variantName: "Young Rider Kate Quarter Zip Sweat Navy", department: "YOUNGRIDER", subCategory: "Sweats", category: "Tops" },
    { sku: "IT01758", variantName: "Junior Pro Breeches Black", department: "YOUNGRIDER", subCategory: "Breeches", category: "Bottoms" },
    { sku: "IT03022", variantName: "Young Rider Pull On Breeches White", department: "YOUNGRIDER", subCategory: "Pull Ons", category: "Bottoms" }
  ], N = [
    { sku: "IT08524", variantName: "Classique Pom Hat Silk Powder Blue", department: "ACCESSORIES", category: "HATSILKS" },
    { sku: "IT08523", variantName: "Classique Pom Hat Silk Fondant", department: "ACCESSORIES", category: "HATSILKS" },
    { sku: "IT08522", variantName: "Classique Pom Hat Silk Mallow", department: "ACCESSORIES", category: "HATSILKS" },
    { sku: "IT08521", variantName: "Classique Pom Hat Silk Jungle", department: "ACCESSORIES", category: "HATSILKS" },
    { sku: "IT08525", variantName: "Classique Pom Hat Silk Macaron", department: "ACCESSORIES", category: "HATSILKS" },
    { sku: "IT08542", variantName: "Competition Socks 2 Pack Powder Blue", department: "ACCESSORIES", category: "SOCKS" },
    { sku: "IT06853", variantName: "Mini Holdall Aqua", department: "ACCESSORIES", category: "BAGS" },
    { sku: "IT08514", variantName: "Scrunchies 3 Pack Light", department: "ACCESSORIES", category: "HAIR" },
    { sku: "IT08336", variantName: "Vogue Headcollar & Leadrope Mallow", department: "HORSE", category: "HEADCOLLARS" },
    { sku: "IT09067", variantName: "Essence Close Contact Square Fondant", department: "HORSE", category: "SADDLEPADS" },
    { sku: "IT08336", variantName: "Vogue Headcollar & Leadrope Mallow", department: "HORSE", category: "HEADCOLLARS" },
    { sku: "IT08284", variantName: "Loire Classic Close Contact Square Mallow", department: "HORSE", category: "SADDLEPADS" },
    { sku: "IT08338", variantName: "Vogue Headcollar & Leadrope Powder Blue", department: "HORSE", category: "HEADCOLLARS" },
    { sku: "IT08355", variantName: "Polycotton Leadrope Mallow", department: "HORSE", category: "HEADCOLLARS" },
    { sku: "IT08274", variantName: "Suede GP Square Powder Blue", department: "HORSE", category: "SADDLEPADS" },
    { sku: "IT08336", variantName: "Vogue Headcollar & Leadrope Mallow", department: "HORSE", category: "HEADCOLLARS" },
    { sku: "IT08266", variantName: "Suede Close Contact Square Macaron", department: "HORSE", category: "SADDLEPADS" },
    { sku: "IT08311", variantName: "Arika Mesh Brushing Boots Fondant", department: "HORSE", category: "HORSEBOOTS" },
    { sku: "IT08286", variantName: "Loire Classic Close Contact Square Jungle", department: "HORSE", category: "SADDLEPADS" },
    { sku: "IT08285", variantName: "Loire Classic Close Contact Square Powder Blue", department: "HORSE", category: "SADDLEPADS" },
    { sku: "IT08266", variantName: "Suede Close Contact Square Macaron", department: "HORSE", category: "SADDLEPADS" },
    { sku: "IT08281", variantName: "Loire Fly Hood Mallow", department: "HORSE", category: "FLYHOODS" },
    { sku: "IT08292", variantName: "Loire Classic GP Square Jungle", department: "HORSE", category: "SADDLEPADS" },
    { sku: "IT08283", variantName: "Loire Fly Hood Jungle", department: "HORSE", category: "FLYHOODS" },
    { sku: "IT07052", variantName: "Kudos Luxe Lined Stable Rug Damson", department: "HORSE", category: "RUGS" },
    { sku: "IT05306", variantName: "Arika Ripstop 50g Turnout Rug Alpine", department: "HORSE", category: "RUGS" },
    { sku: "IT01072", variantName: "Arika Featherweight Rug 0g Navy", department: "HORSE", category: "RUGS" },
    { sku: "IT08312", variantName: "Arika Mesh Brushing Boots Jungle", department: "HORSE", category: "HORSEBOOTS" },
    { sku: "IT07144", variantName: "Toy Pony Vogue Headcollar & Leadrope Cranberry", department: "TOYS", category: "TOYPONY" },
    { sku: "IT05473", variantName: "Toy Pony Haynet Ember", department: "TOYS", category: "TOYPONY" },
    { sku: "IT05729", variantName: "Toy Pony Reversible Carry Case Grey", department: "TOYS", category: "TOYPONY" },
    { sku: "IT03401", variantName: "Hobby Horse Grackle Bridle Brown", department: "TOYS", category: "HOBBYHORSE" },
    { sku: "IT07121", variantName: "Hobby Horse Vogue Headcollar & Leadrope Lilac", department: "TOYS", category: "HOBBYHORSE" },
    { sku: "IT05962", variantName: "Toy Pony Pad Blossom", department: "TOYS", category: "TOYPONY" },
    { sku: "IT08125", variantName: "Toy Pony Dazzle", department: "TOYS", category: "TOYPONY" },
    { sku: "IT07142", variantName: "Toy Pony Rug Cranberry", department: "TOYS", category: "TOYPONY" },
    { sku: "IT07117", variantName: "Hobby Horse Fly Hood Lilac", department: "TOYS", category: "HOBBYHORSE" },
    { sku: "IT06398", variantName: "Tiny Pony Freya", department: "TOYS", category: "TOYPONY" },
    { sku: "IT07130", variantName: "Toy Pony Gracie", department: "TOYS", category: "TOYPONY" },
    { sku: "IT07129", variantName: "Toy Pony Oskar", department: "TOYS", category: "TOYPONY" },
    { sku: "IT05658", variantName: "Field Riding Boots Black", department: "WOMENS", category: "FOOTWEAR" },
    { sku: "IT08790", variantName: "Bramshaw Chelsea Welly Stone", department: "WOMENS", category: "FOOTWEAR" },
    { sku: "IT05110", variantName: "Brooke Waterproof Hybrid Jacket Navy", department: "WOMENS", category: "COATS&JACKETS" },
    { sku: "IT07886", variantName: "Trax Viva Waterproof Trainer Damson", department: "WOMENS", category: "FOOTWEAR" },
    { sku: "IT08228", variantName: "Kelsie Quarter Neck Sweat Powder Blue", department: "WOMENS", category: "TOPS" },
    { sku: "IT08215", variantName: "Classique Base Layer Powder Blue", department: "WOMENS", category: "TOPS" },
    { sku: "IT05107", variantName: "Amelie Waterproof Lightweight Riding Coat Black", department: "WOMENS", category: "COATS&JACKETS" },
    { sku: "IT08042", variantName: "LeMieux x Stella McCartney Pull On Breeches Midnight Navy", department: "WOMENS", category: "BOTTOMS" },
    { sku: "IT08230", variantName: "Kelsie Quarter Neck Sweat Fondant", department: "WOMENS", category: "TOPS" },
    { sku: "IT08195", variantName: "Naomi Pull On Breech Mallow", department: "WOMENS", category: "BOTTOMS" },
    { sku: "IT08243", variantName: "Simone Cross Over Half Seat Pull On Jungle", department: "WOMENS", category: "BOTTOMS" },
    { sku: "IT08214", variantName: "Halle Leightweight Base Layer Jungle", department: "WOMENS", category: "TOPS" },
    { sku: "IT08220", variantName: "Classique Short Sleeve Base Layer Fondant", department: "WOMENS", category: "TOPS" },
    { sku: "IT08204", variantName: "Juliette Jacket Powder Blue", department: "WOMENS", category: "COATS&JACKETS" },
    { sku: "IT08879", variantName: "Junior Interchangeable Riding Boots Black", department: "YOUNGRIDER", category: "FOOTWEAR" },
    { sku: "IT08567", variantName: "Young Rider Orla Pull On Breech Powder Blue", department: "YOUNGRIDER", category: "BOTTOMS" },
    { sku: "IT08467", variantName: "Young Rider Sia Hoodie Powder Blue", department: "YOUNGRIDER", category: "TOPS" },
    { sku: "IT08466", variantName: "Young Rider Sia Hoodie Fondant", department: "YOUNGRIDER", category: "TOPS" },
    { sku: "IT08866", variantName: "Young Rider Mia Mesh Base Layer Powder Blue", department: "YOUNGRIDER", category: "TOPS" },
    { sku: "IT08564", variantName: "Young Rider Orla Pull On Breech Mallow", department: "YOUNGRIDER", category: "BOTTOMS" },
    { sku: "IT08586", variantName: "Young Rider Classique Base Layer Powder Blue", department: "YOUNGRIDER", category: "TOPS" },
    { sku: "IT08564", variantName: "Young Rider Orla Pull On Breech Mallow", department: "YOUNGRIDER", category: "BOTTOMS" },
    { sku: "IT08565", variantName: "Young Rider Orla Pull On Breech Jungle", department: "YOUNGRIDER", category: "BOTTOMS" },
    { sku: "IT08863", variantName: "Young Rider Mia Mesh Base Layer Fondant", department: "YOUNGRIDER", category: "TOPS" },
    { sku: "IT08567", variantName: "Young Rider Orla Pull On Breech Powder Blue", department: "YOUNGRIDER", category: "BOTTOMS" },
    { sku: "IT08527", variantName: "Mini Double Pom Hat Silk Fondant", department: "YOUNGRIDER", category: "HATSILKS" },
    { sku: "IT08565", variantName: "Young Rider Orla Pull On Breech Jungle", department: "YOUNGRIDER", category: "BOTTOMS" },
    { sku: "IT08073", variantName: "Young Rider HydroShield Robe Cranberry", department: "YOUNGRIDER", category: "COATS&JACKETS" },
    { sku: "IT07325", variantName: "Young Rider Orla Pull Ons Damson", department: "YOUNGRIDER", category: "BOTTOMS" },
    { sku: "IT08866", variantName: "Young Rider Mia Mesh Base Layer Powder Blue", department: "YOUNGRIDER", category: "TOPS" },
    { sku: "IT08466", variantName: "Young Rider Sia Hoodie Fondant", department: "YOUNGRIDER", category: "TOPS" },
    { sku: "IT08475", variantName: "Mini Quinn Quarter Zip Sweat Fondant", department: "YOUNGRIDER", category: "TOPS" },
    { sku: "IT08567", variantName: "Young Rider Orla Pull On Breech Powder Blue", department: "YOUNGRIDER", category: "BOTTOMS" },
    { sku: "IT01040", variantName: "Arika Fleece Hood Navy", department: "HORSE", category: "RUGS" },
    { sku: "IT04514", variantName: "Clima-Tek Exercise Quarter Sheet Navy", department: "HORSE", category: "RUGS" }
  ], l = class l {
    constructor() {
      this.observer = null, this.debounceTimer = null, this.firedEvents = /* @__PURE__ */ new Set(), this.visibilityCleanups = /* @__PURE__ */ new Map(), this.clickListeners = /* @__PURE__ */ new Map();
    }
    init() {
      S(l.INIT_ID) || (document.body.setAttribute(y, l.INIT_ID), this.addStyles(), this.applyBadges(), this.observeChanges());
    }
    addBestSellerBadge() {
      document.querySelectorAll("[cy-listingproductsgrid] product a[cy-listingproductname]").forEach((a) => {
        var s;
        const o = ((s = a.textContent) == null ? void 0 : s.trim()) || "";
        if (!O.some((n) => o.includes(n.variantName)))
          return;
        const t = a.closest("product");
        if (t && (t.classList.add(l.BESTSELLER_BADGE_CLASS), !this.clickListeners.has(t))) {
          const n = a.getAttribute("href") || "", i = () => p("exp_badge_click_plp", n, "click", "PLP Bestseller");
          t.addEventListener("click", i), this.clickListeners.set(t, i);
        }
      });
    }
    addSellingFastBadge() {
      document.querySelectorAll("[cy-listingproductsgrid] product a[cy-listingproductname]").forEach(
        (a) => {
          var s;
          const o = ((s = a.textContent) == null ? void 0 : s.trim()) || "";
          if (!N.some((n) => o.includes(n.variantName)))
            return;
          const t = a.closest("product");
          if (t && (t.classList.add(l.SELLING_FAST_BADGE_CLASS), !this.clickListeners.has(t))) {
            const n = a.getAttribute("href") || "", i = () => p("exp_badge_click_plp", n, "click", "PLP Selling Fast");
            t.addEventListener("click", i), this.clickListeners.set(t, i);
          }
        }
      );
    }
    async applyBadges() {
      await b("[cy-listingproductsgrid] product a[cy-listingproductname]"), this.addSellingFastBadge(), this.addBestSellerBadge(), this.trackBadgeVisibility(`.${l.SELLING_FAST_BADGE_CLASS}`, "exp_badge_view_plp", "PLP", "Selling Fast"), this.trackBadgeVisibility(`.${l.BESTSELLER_BADGE_CLASS}`, "exp_badge_view_plp", "PLP", "Bestseller");
    }
    trackBadgeVisibility(e, a, o, t, s = 1e3, n = 0.5) {
      var u;
      if (this.firedEvents.has(e)) return;
      const i = document.querySelector(e);
      if (!i) return;
      (u = this.visibilityCleanups.get(e)) == null || u();
      let c = null;
      const d = new IntersectionObserver(
        (g) => {
          g[0].isIntersecting ? c = setTimeout(() => {
            p(a, t, "view", o), this.firedEvents.add(e), d.disconnect(), this.visibilityCleanups.delete(e);
          }, s) : c && (clearTimeout(c), c = null);
        },
        { threshold: [n] }
      );
      this.visibilityCleanups.set(e, () => {
        c && clearTimeout(c), d.disconnect();
      }), d.observe(i);
    }
    observeChanges() {
      this.observer = new MutationObserver((e) => {
        e.forEach((a) => {
          a.type === "childList" && (a.addedNodes.length > 0 || a.removedNodes.length > 0) && (this.debounceTimer && clearTimeout(this.debounceTimer), this.debounceTimer = setTimeout(() => {
            document.querySelectorAll(`.${l.BESTSELLER_BADGE_CLASS}`).forEach((t) => t.classList.remove(l.BESTSELLER_BADGE_CLASS)), this.applyBadges();
          }, 200));
        });
      }), this.observer.observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
    cleanup() {
      var o;
      this.debounceTimer && (clearTimeout(this.debounceTimer), this.debounceTimer = null), this.visibilityCleanups.forEach((t) => t()), this.visibilityCleanups.clear(), this.firedEvents.clear(), this.clickListeners.forEach((t, s) => s.removeEventListener("click", t)), this.clickListeners.clear(), (o = this.observer) == null || o.disconnect(), this.observer = null;
      const e = document.getElementById(l.STYLES_ID);
      e && e.remove(), document.body.removeAttribute(y), document.querySelectorAll(`.${l.BESTSELLER_BADGE_CLASS}`).forEach((t) => t.classList.remove(l.BESTSELLER_BADGE_CLASS));
    }
    addStyles() {
      if (S(l.STYLES_ID))
        return;
      const e = document.createElement("style");
      e.id = l.STYLES_ID, e.textContent = W, document.head.appendChild(e);
    }
  };
  l.STYLES_ID = "products-changes-styles", l.INIT_ID = "products-changes-init", l.BESTSELLER_BADGE_CLASS = "crs-bestseller-badge", l.SELLING_FAST_BADGE_CLASS = "crs-selling-fast-badge";
  let k = l;
  const I = "plp-handler-init";
  class q {
    constructor() {
      this.plpProductsChanges = new k(), this.plpProductsChanges = new k();
    }
    run() {
      S(I) || this.init();
    }
    cleanup() {
      this.plpProductsChanges.cleanup();
    }
    init() {
      document.body.setAttribute(y, I), C("PLPHandler initialized"), this.plpProductsChanges.init();
    }
  }
  const _ = `product-view-title .float-right {
  display: none !important;
}

.crs-pdp-bestseller-image,
.crs-pdp-selling-fast-image,
body:has(product-view-title .float-right) product-gallery div:has(> swiper) {
  position: relative;
}

.crs-pdp-bestseller-image::after,
.crs-pdp-selling-fast-image::after,
body:has(product-view-title .float-right)
  product-gallery
  :where(
    .product-gallery
      > div:first-child
      .product-image-gallery-container:first-child,
    div:has(> swiper)
  )::after {
  content: '';
  position: absolute;
  top: 1.112rem;
  right: 0;
  padding: 0.5rem;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0625rem;
  pointer-events: none;
  z-index: 1;
}

body:has(product-view-title .float-right)
  product-gallery
  div:has(> swiper)::after {
    top: auto;
    bottom: 1.56rem;
}

.crs-pdp-bestseller-image::after,
.crs-pdp-selling-fast-image::after,
body:has(
    product-view-title
      .float-right:is(
        [style*='background-color: rgb(250, 250, 250)'],
        [style*='background-color: #fafafa']
      )
  )
  product-gallery
  :is(
    .product-gallery
      > div:first-child
      .product-image-gallery-container:first-child,
    div:has(> swiper)
  )::after {
  background: rgba(250, 250, 250, 0.8);
  color: #212121;
}

body:has(
    product-view-title
      .float-right:is(
        [style*='background-color: rgb(136, 29, 57)'],
        [style*='background-color: #881d39']
      )
  )
  product-gallery
  :is(
    .product-gallery
      > div:first-child
      .product-image-gallery-container:first-child,
    div:has(> swiper)
  )::after {
  content: 'Sale';

  background: rgb(136, 29, 57);
  color: #ffffff;
}

.crs-pdp-bestseller-image::after {
  content: 'Best Seller' !important;
}

.crs-pdp-selling-fast-image::after {
  content: 'Selling Fast' !important;
}

body:has(
    product-view-title
      .float-right:is(
        [style*='background-color: rgb(250, 250, 250)'],
        [style*='background-color: #fafafa;']
      )
  )
  product-gallery
  :is(
    .product-gallery
      > div:first-child
      .product-image-gallery-container:first-child,
    div:has(> swiper)
  )::after {
  content: 'New';
}
`;
  class J {
    constructor() {
      this.observer = null, this.debounceTimer = null, this.firedEvents = /* @__PURE__ */ new Set(), this.visibilityCleanups = /* @__PURE__ */ new Map(), this.STYLE_ID = "crs-pdp-badge-styles";
    }
    init() {
      this.addStyles(), this.addBadges(), this.observeChanges();
    }
    async addBadges() {
      var o;
      const a = ((o = (await b("product-view-title h1")).textContent) == null ? void 0 : o.trim()) || "";
      N.some((t) => a.includes(t.variantName)) && (await this.addBadge("sellingFast"), this.trackBadgeVisibility(".crs-pdp-selling-fast-image", "exp_badge_view_pdp", "PDP", "Selling Fast")), O.some((t) => a.includes(t.variantName)) && (await this.addBadge("bestseller"), this.trackBadgeVisibility(".crs-pdp-bestseller-image", "exp_badge_view_pdp", "PDP", "Bestseller"));
    }
    async addBadge(e) {
      await b("product-gallery img");
      const a = document.querySelectorAll("product-gallery");
      e === "bestseller" ? a.forEach((o) => {
        var s, n;
        const t = o.querySelector("img");
        t && ((s = t.closest(".product-image-gallery-container")) == null || s.classList.add("crs-pdp-bestseller-image"), (n = t.closest("div:has(> swiper)")) == null || n.classList.add("crs-pdp-bestseller-image"));
      }) : e === "sellingFast" && a.forEach((o) => {
        var s, n;
        const t = o.querySelector("img");
        console.log("image", t), t && ((s = t.closest(".product-image-gallery-container")) == null || s.classList.add("crs-pdp-selling-fast-image"), (n = t.closest("div:has(> swiper)")) == null || n.classList.add("crs-pdp-selling-fast-image"));
      });
    }
    observeChanges() {
      this.observer = new MutationObserver((e) => {
        e.forEach((a) => {
          a.type === "childList" && (a.addedNodes.length > 0 || a.removedNodes.length > 0) && (this.debounceTimer && clearTimeout(this.debounceTimer), this.debounceTimer = setTimeout(() => {
            this.removeBadges(), this.addBadges();
          }, 200));
        });
      }), this.observer.observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
    trackBadgeVisibility(e, a, o, t, s = 1e3, n = 0.5) {
      var u;
      if (this.firedEvents.has(e)) return;
      const i = document.querySelector(e);
      if (!i) return;
      (u = this.visibilityCleanups.get(e)) == null || u();
      let c = null;
      const d = new IntersectionObserver(
        (g) => {
          g[0].isIntersecting ? c = setTimeout(() => {
            p(a, t, "view", o), this.firedEvents.add(e), d.disconnect(), this.visibilityCleanups.delete(e);
          }, s) : c && (clearTimeout(c), c = null);
        },
        { threshold: [n] }
      );
      this.visibilityCleanups.set(e, () => {
        c && clearTimeout(c), d.disconnect();
      }), d.observe(i);
    }
    removeBadges() {
      [
        "crs-pdp-bestseller-badge",
        "crs-pdp-selling-fast-badge",
        "crs-pdp-bestseller-image",
        "crs-pdp-selling-fast-image"
      ].forEach((a) => {
        document.querySelectorAll(`.${a}`).forEach((o) => o.classList.remove(a));
      });
    }
    cleanup() {
      var a;
      this.debounceTimer && (clearTimeout(this.debounceTimer), this.debounceTimer = null), this.visibilityCleanups.forEach((o) => o()), this.visibilityCleanups.clear(), this.firedEvents.clear(), (a = this.observer) == null || a.disconnect(), this.observer = null, this.removeBadges();
      const e = document.getElementById(this.STYLE_ID);
      e && e.remove();
    }
    addStyles() {
      if (document.getElementById(this.STYLE_ID)) return;
      const e = document.createElement("style");
      e.id = this.STYLE_ID, e.textContent = _, document.head.appendChild(e);
    }
  }
  const R = "pdp-handler-init";
  class U {
    constructor() {
      this.pdpProductChange = new J();
    }
    run() {
      S(R) || (this.pdpProductChange.cleanup(), this.init());
    }
    cleanup() {
      this.pdpProductChange.cleanup();
    }
    init() {
      document.body.setAttribute(y, R), C("PDPHandler initialized"), this.pdpProductChange.init();
    }
  }
  H({ name: " Social Proof Badging", dev: "OS" });
  const B = "data-social-proof-baging-initialized";
  (function(r, e, a, o, t, s) {
    r.hj = r.hj || function() {
      (r.hj.q = r.hj.q || []).push(arguments);
    }, r._hjSettings = { hjid: 2667925, hjsv: 6 }, t = e.getElementsByTagName("head")[0], s = e.createElement("script"), s.async = !0, s.src = a + r._hjSettings.hjid + o + r._hjSettings.hjsv, t && t.appendChild(s);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_spb");
  class x {
    constructor() {
      this.plpHandler = new q(), this.pdpHandler = new U(), this.init();
    }
    init() {
      document.body.hasAttribute(B) || (document.body.setAttribute(B, "true"), this.addStyles(), this.setupRouteListener());
    }
    addStyles() {
      if (S("test-styles"))
        return;
      const e = document.createElement("style");
      e.setAttribute("data-social-proof-baging-id", "test-styles"), e.textContent = "", document.head.appendChild(e);
    }
    setupRouteListener() {
      this.unsubscribe = f(() => this.handlePageChange());
    }
    handlePageChange() {
      this.pdpHandler.cleanup(), this.plpHandler.cleanup(), F(), setTimeout(() => Y({ timeout: 1e4 }).then((o) => {
        switch (o) {
          case "plp":
            this.plpHandler.run();
            break;
          case "pdp":
            this.pdpHandler.run();
            break;
        }
      }).catch(() => {
      }), 150);
    }
    destroy() {
      var e;
      (e = this.unsubscribe) == null || e.call(this);
    }
  }
  new x();
})();
