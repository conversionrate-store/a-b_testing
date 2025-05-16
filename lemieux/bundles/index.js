(function() {
  "use strict";
  const I = (c, e, n, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: c,
      event_desc: e,
      event_type: n,
      event_loc: o
    }), console.log(`Event: ${c} | ${e} | ${n} | ${o}`);
  }, T = ({ name: c, dev: e }) => {
    console.log(
      `%c EXP: ${c} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  function k(c) {
    return new Promise((e) => {
      if (document.querySelector(c))
        return e(document.querySelector(c));
      const n = new MutationObserver(() => {
        document.querySelector(c) && (e(document.querySelector(c)), n.disconnect());
      });
      n.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const $ = (c, e, n, o) => {
    let t = [];
    t = document.querySelectorAll(c);
    let s = new IntersectionObserver(
      (l) => {
        l.forEach((r) => {
          r.isIntersecting && (s.unobserve(r.target), setTimeout(function() {
            i.observe(r.target);
          }, 1e3));
        });
      },
      {
        threshold: 0.2
      }
    ), i = new IntersectionObserver((l) => {
      l.forEach((r) => {
        r.isIntersecting ? (I(e, n, "view", o || r.target.id), s.unobserve(r.target)) : s.observe(r.target), i.unobserve(r.target);
      });
    });
    t.forEach((l) => {
      s.observe(l);
    });
  }, C = [
    // Benetton Blue group 1
    {
      name: "Suede Close Contact Square",
      path: "/horse-saddle-pads/close-contact-pads/suede-close-contact-square-benetton",
      bundleGroupId: "benetton-blue-1",
      showPins: !0,
      pinsLinks: [
        "horse-saddle-pads/close-contact-pads/suede-close-contact-square-benetton",
        "/horsewear/boots-bandages/classic-polo-bandages-benetton-blue",
        "/horsewear/fly-hoods/classic-fly-hood-benetton-blue",
        "/clothing/women/base-layer-benetton-blue"
      ]
    },
    {
      name: "Base Layer",
      path: "/clothing/women/base-layer-benetton-blue",
      bundleGroupId: "benetton-blue-1"
    },
    {
      name: "Pom Hat Silk",
      path: "/clothing/accessories/pom-hat-silk-benetton",
      bundleGroupId: "benetton-blue-1"
    },
    {
      name: "Classic Fly Hood",
      path: "/outfit-builder-merchandising/classic-fly-hood-benetton-blue",
      bundleGroupId: "benetton-blue-1"
    },
    // Benetton Blue group 2
    {
      name: "Suede GP Square",
      path: "/horse-saddle-pads/gp-pads/suede-gp-square-benetton-blue",
      bundleGroupId: "benetton-blue-2"
    },
    {
      name: "Base Layer",
      path: "/clothing/women/base-layer-benetton-blue",
      bundleGroupId: "benetton-blue-2"
    },
    {
      name: "Pom Hat Silk",
      path: "/clothing/accessories/pom-hat-silk-benetton",
      bundleGroupId: "benetton-blue-2"
    },
    {
      name: "Classic Fly Hood",
      path: "/outfit-builder-merchandising/classic-fly-hood-benetton-blue",
      bundleGroupId: "benetton-blue-2"
    },
    // Benetton Blue group 3
    {
      name: "YR Base Layer",
      path: "/clothing/children/casual-wear/base-layers/young-rider-base-layer-benetton",
      bundleGroupId: "benetton-blue-3"
    },
    {
      name: "Pom Hat Silk",
      path: "/clothing/accessories/pom-hat-silk-benetton",
      bundleGroupId: "benetton-blue-3"
    },
    {
      name: "YR Pull on Breeches",
      path: "/clothing/children/casual-wear/leggings-breeches/young-rider-pull-on-breech-benetton-blue",
      bundleGroupId: "benetton-blue-3"
    },
    {
      name: "Competition Socks",
      path: "/new-in/ss24/competition-socks-2-pack-benetton",
      bundleGroupId: "benetton-blue-3"
    },
    // Benetton Blue group 4
    {
      name: "Grafter Brushing Boots",
      path: "/spring-sale/grafter-brushing-boot-benetton-blue",
      bundleGroupId: "benetton-blue-4"
    },
    {
      name: "Classic Fly Hood",
      path: "/horsewear/fly-hoods/classic-fly-hood-benetton-blue",
      bundleGroupId: "benetton-blue-4"
    },
    {
      name: "Suede Close Contact Square",
      path: "/horse-saddle-pads/close-contact-pads/suede-close-contact-square-benetton",
      bundleGroupId: "benetton-blue-4"
    },
    // Benetton Blue group 5
    {
      name: "Polo Shirt",
      path: "/spring-sale/polo-shirt-benetton-blue",
      bundleGroupId: "benetton-blue-5"
    },
    {
      name: "Pom Hat Silk",
      path: "/clothing/accessories/pom-hat-silk-benetton",
      bundleGroupId: "benetton-blue-5"
    },
    {
      name: "Classic Fly Hood",
      path: "/horsewear/fly-hoods/classic-fly-hood-benetton-blue",
      bundleGroupId: "benetton-blue-5"
    },
    // Black group 1
    {
      name: "Flexi Curry Comb",
      path: "/horsewear/grooming-care/flexi-curry-comb-black-26462",
      bundleGroupId: "black-1"
    },
    {
      name: "Flexi Soft Body Brush",
      path: "/horsewear/grooming-care/flexi-soft-body-brush-black-26457",
      bundleGroupId: "black-1"
    },
    {
      name: "Flexi Goats Hair Body Brush",
      path: "/horsewear/grooming-care/flexi-goat-hair-body-brush-black",
      bundleGroupId: "black-1"
    },
    {
      name: "Flexi Scrubbing Brush",
      path: "/horsewear/grooming-care/flexi-scrubbing-brush-black",
      bundleGroupId: "black-1"
    },
    // Black group 2
    {
      name: "Base Layer Black",
      path: "/clothing/women/base-layer-black",
      bundleGroupId: "black-2"
    },
    {
      name: "Pom Hat Silk",
      path: "/clothing/accessories/pom-hat-silk-black",
      bundleGroupId: "black-2"
    },
    {
      name: "Competition Socks",
      path: "/clothing/accessories/competition-sock-black-twin-pack",
      bundleGroupId: "black-2"
    },
    // Black group 3
    {
      name: "Loire Classic Close Contact",
      path: "/horse-saddle-pads/close-contact-pads/loire-classic-close-contact-square-black",
      bundleGroupId: "black-3"
    },
    {
      name: "Loire Fly Hood",
      path: "/horsewear/fly-hoods/loire-fly-hood-black",
      bundleGroupId: "black-3"
    },
    // Black group 4
    {
      name: "Suede Close Contact Square",
      path: "/horse-saddle-pads/close-contact-pads/suede-close-contact-square-black",
      bundleGroupId: "black-4"
    },
    {
      name: "Base Layer",
      path: "/clothing/women/base-layer-black",
      bundleGroupId: "black-4"
    },
    {
      name: "Pom Hat Silk",
      path: "/clothing/accessories/pom-hat-silk-black",
      bundleGroupId: "black-4"
    },
    // Brown group 1
    {
      name: "Puisscance Suede Close Contact Square",
      path: "/horse-saddle-pads/close-contact-pads/puissance-suede-cc-pad-brown",
      bundleGroupId: "brown-1"
    },
    {
      name: "Puissance Fly Hood",
      path: "/horsewear/fly-hoods/puissance-fly-hood-brown",
      bundleGroupId: "brown-1"
    },
    // Brown group 2
    {
      name: "Puissance Suede Dressage Square Brown",
      path: "/horse-saddle-pads/dressage-pads/puissance-suede-dressage-square-brown",
      bundleGroupId: "brown-2"
    },
    {
      name: "Mesh Brushing Boots Brown",
      path: "/horsewear/boots-bandages/mesh-brushing-boot-brown",
      bundleGroupId: "brown-2"
    },
    // Burgundy group 1
    {
      name: "Cotton Close Contact Square",
      path: "/horse-saddle-pads/close-contact-pads/cotton-close-contact-square-burgundy",
      bundleGroupId: "burgundy-1"
    },
    {
      name: "Vogue Fly Hood",
      path: "/horsewear/fly-hoods/vogue-fly-hood-burgundy",
      bundleGroupId: "burgundy-1"
    },
    {
      name: "Vogue Headcollar",
      path: "/horsewear/headcollars-leadropes/vogue-headcollar-leadrope-burgundy",
      bundleGroupId: "burgundy-1"
    },
    // Burgundy group 2
    {
      name: "Cotton Close Contact Square",
      path: "/horse-saddle-pads/close-contact-pads/cotton-close-contact-square-burgundy",
      bundleGroupId: "burgundy-2"
    },
    { name: "Pro Mesh Hat Silk", path: "???", bundleGroupId: "burgundy-2" },
    {
      name: "Competition Socks",
      path: "/clothing/accessories/competition-sock-burgundy-twin-pack",
      bundleGroupId: "burgundy-2"
    },
    // Burgundy group 3
    {
      name: "Crystal Suede Close Contact Pad",
      path: "/horse-saddle-pads/close-contact-pads/crystal-suede-close-contact-pad-burgundy",
      bundleGroupId: "burgundy-3"
    },
    {
      name: "Crystal Fly Hood",
      path: "/horsewear/fly-hoods/crystal-fly-hood-burgundy",
      bundleGroupId: "burgundy-3"
    },
    // Chilli group 1
    {
      name: "Suede Close Contact Square",
      path: "/horse-saddle-pads/close-contact-pads/suede-close-contact-square-chilli",
      bundleGroupId: "chilli-1",
      showPins: !0,
      pinsLinks: [
        "/clothing/women/base-layer-chilli",
        "/horse-saddle-pads/close-contact-pads/suede-close-contact-square-chilli",
        "/clothing/accessories/pom-hat-silk-chilli",
        "/horsewear/fly-hoods/loire-fly-hood-chilli"
      ]
    },
    {
      name: "Classic Fly Hood",
      path: "/horsewear/fly-hoods/classic-fly-hood-chilli",
      bundleGroupId: "chilli-1"
    },
    {
      name: "Base Layer",
      path: "/clothing/women/base-layer-chilli",
      bundleGroupId: "chilli-1"
    },
    {
      name: "Pom Hat Silk",
      path: "/clothing/accessories/pom-hat-silk-chilli",
      bundleGroupId: "chilli-1"
    },
    // // Chilli group 2
    // { name: 'Suede Dressage Square', path: '/horse-saddle-pads/dressage-pads/suede-dressage-square-chilli', bundleGroupId: 'chilli-2' },
    // { name: 'Classic Fly Hood', path: '/horsewear/fly-hoods/classic-fly-hood-chilli', bundleGroupId: 'chilli-2' },
    // { name: 'Base Layer', path: '/clothing/women/base-layer-chilli', bundleGroupId: 'chilli-2' },
    // { name: 'Grafter Brushing Boots', path: '', bundleGroupId: 'chilli-2' },
    // Chilli group 3
    {
      name: "Vogue Headcollar & Leadrope",
      path: "/horsewear/headcollars-leadropes/vogue-headcollar-leadrope-chilli",
      bundleGroupId: "chilli-3"
    },
    {
      name: "Suede Close Contact Square",
      path: "/horse-saddle-pads/close-contact-pads/suede-close-contact-square-chilli",
      bundleGroupId: "chilli-3"
    },
    {
      name: "Base Layer",
      path: "/clothing/women/base-layer-chilli",
      bundleGroupId: "chilli-3"
    },
    {
      name: "Pom Hat Silk",
      path: "/clothing/accessories/pom-hat-silk-chilli",
      bundleGroupId: "chilli-3"
    },
    // Chilli group 4
    {
      name: "Suede GP Square",
      path: "/horse-saddle-pads/gp-pads/suede-gp-square-chilli",
      bundleGroupId: "chilli-4"
    },
    {
      name: "Classic Fly Hood",
      path: "/horsewear/fly-hoods/classic-fly-hood-chilli",
      bundleGroupId: "chilli-4"
    },
    {
      name: "Base Layer",
      path: "/clothing/women/base-layer-chilli",
      bundleGroupId: "chilli-4"
    },
    {
      name: "Pom Hat Silk",
      path: "/clothing/accessories/pom-hat-silk-chilli",
      bundleGroupId: "chilli-4"
    },
    // Chilli group 5
    {
      name: "YR Base Layer",
      path: "/clothing/children/casual-wear/base-layers/young-rider-base-layer-chilli",
      bundleGroupId: "chilli-5"
    },
    {
      name: "Pom Hat Silk",
      path: "/clothing/accessories/pom-hat-silk-chilli",
      bundleGroupId: "chilli-5"
    },
    {
      name: "YR Pull on Breeches",
      path: "/clothing/children/casual-wear/leggings-breeches/young-rider-pull-on-breech-chilli",
      bundleGroupId: "chilli-5"
    },
    // Grey group 1
    {
      name: "Suede Close Contact Square",
      path: "/horse-saddle-pads/close-contact-pads/suede-close-contact-square-grey",
      bundleGroupId: "grey-1"
    },
    {
      name: "Vogue Fly Hood Grey",
      path: "/horsewear/fly-hoods/vogue-fly-hood-grey",
      bundleGroupId: "grey-1"
    },
    // Hunter Green group 1
    {
      name: "Suede Close Contact Square",
      path: "/horse-saddle-pads/close-contact-pads/suede-close-contact-square-hunter-green",
      bundleGroupId: "hunter-green-1",
      showPins: !0,
      pinsLinks: [
        "/clothing/accessories/pom-hat-silk-hunter-green",
        "/horse-saddle-pads/close-contact-pads/suede-close-contact-square-hunter-green",
        "/outfit-builder-merchandising/classic-fly-hood-hunter-green",
        "/clothing/women/base-layer-hunter-green"
      ]
    },
    {
      name: "Pom Hat Silk",
      path: "/clothing/accessories/pom-hat-silk-hunter-green",
      bundleGroupId: "hunter-green-1"
    },
    {
      name: "Base Layer",
      path: "/clothing/women/base-layer-hunter-green",
      bundleGroupId: "hunter-green-1"
    },
    {
      name: "Classic Fly Hood",
      path: "/outfit-builder-merchandising/classic-fly-hood-hunter-green",
      bundleGroupId: "hunter-green-1"
    },
    // Hunter Green group 2
    {
      name: "Suede Dressage Square",
      path: "/horse-saddle-pads/dressage-pads/suede-dressage-square-hunter-green",
      bundleGroupId: "hunter-green-2"
    },
    {
      name: "Base Layer",
      path: "/clothing/women/base-layer-hunter-green",
      bundleGroupId: "hunter-green-2"
    },
    {
      name: "Classic Fly Hood",
      path: "/outfit-builder-merchandising/classic-fly-hood-hunter-green",
      bundleGroupId: "hunter-green-2"
    },
    // Hunter Green group 3
    {
      name: "YR Base Layer",
      path: "/clothing/children/casual-wear/base-layers/young-rider-base-layer-hunter-green",
      bundleGroupId: "hunter-green-3"
    },
    {
      name: "Pom Hat Silk",
      path: "/clothing/accessories/pom-hat-silk-hunter-green",
      bundleGroupId: "hunter-green-3"
    },
    {
      name: "Competition Socks",
      path: "/clothing/accessories/competition-sock-hunter-green-twin-pack",
      bundleGroupId: "hunter-green-3"
    },
    // Hunter Green group 4
    {
      name: "Suede GP Square",
      path: "/horse-saddle-pads/gp-pads/suede-gp-square-hunter-green",
      bundleGroupId: "hunter-green-4"
    },
    {
      name: "Base Layer",
      path: "/clothing/women/base-layer-hunter-green",
      bundleGroupId: "hunter-green-4"
    },
    {
      name: "Pom Hat Silk",
      path: "/clothing/accessories/pom-hat-silk-hunter-green",
      bundleGroupId: "hunter-green-4"
    },
    {
      name: "Classic Fly Hood",
      path: "/outfit-builder-merchandising/classic-fly-hood-hunter-green",
      bundleGroupId: "hunter-green-4"
    },
    // Hunter Green group 5
    {
      name: "Vogue Headcollar & Leadrope",
      path: "/horsewear/headcollars-leadropes/vogue-headcollar-leadrope-hunter-green",
      bundleGroupId: "hunter-green-5"
    },
    {
      name: "Base Layer",
      path: "/clothing/women/base-layer-hunter-green",
      bundleGroupId: "hunter-green-5"
    },
    {
      name: "Pom Hat Silk",
      path: "/clothing/accessories/pom-hat-silk-hunter-green",
      bundleGroupId: "hunter-green-5"
    },
    {
      name: "Suede Close Contact Square",
      path: "/horse-saddle-pads/close-contact-pads/suede-close-contact-square-hunter-green",
      bundleGroupId: "hunter-green-5"
    },
    // Ice Blue group 1
    {
      name: "YR Base Layer",
      path: "/clothing/children/young-rider-base-layer-ice-blue",
      bundleGroupId: "ice-blue-1"
    },
    {
      name: "Pom Hat Silk",
      path: "/clothing/accessories/pom-hat-silk-ice-blue",
      bundleGroupId: "ice-blue-1"
    },
    {
      name: "YR Pull on Breeches",
      path: "/clothing/children/young-rider-collection/young-rider-pull-on-breech-ice-blue-34614",
      bundleGroupId: "ice-blue-1"
    },
    // Ice Blue group 2
    {
      name: "Suede Dressage Square",
      path: "/horse-saddle-pads/dressage-pads/suede-dressage-square-ice-blue",
      bundleGroupId: "ice-blue-2"
    },
    {
      name: "Base Layer",
      path: "/clothing/women/base-layer-ice-blue",
      bundleGroupId: "ice-blue-2"
    },
    {
      name: "Classic Fly Hood",
      path: "/outfit-builder-merchandising/classic-fly-hood-ice-blue",
      bundleGroupId: "ice-blue-2"
    },
    // Ice Blue group 3
    {
      name: "Loire Classic Dressage Square",
      path: "/horse-saddle-pads/dressage-pads/loire-classic-dressage-square-ice-blue",
      bundleGroupId: "ice-blue-3"
    },
    {
      name: "Base Layer",
      path: "/clothing/women/base-layer-ice-blue",
      bundleGroupId: "ice-blue-3"
    },
    {
      name: "Classic Fly Hood",
      path: "/outfit-builder-merchandising/classic-fly-hood-ice-blue",
      bundleGroupId: "ice-blue-3"
    },
    // Ice Blue group 4
    {
      name: "Suede Close Contact Square",
      path: "/horse-saddle-pads/close-contact-pads/suede-close-contact-square-ice-blue",
      bundleGroupId: "ice-blue-4",
      showPins: !0,
      pinsLinks: [
        "/clothing/women/base-layer-ice-blue",
        "/horsewear/boots-bandages/grafter-brushing-boot-ice-blue-new",
        "/clothing/accessories/pom-hat-silk-ice-blue",
        "/clothing/women/base-layer-ice-blue",
        "/horse-saddle-pads/close-contact-pads/suede-close-contact-square-ice-blue"
      ]
    },
    {
      name: "Base Layer",
      path: "/clothing/women/base-layer-ice-blue",
      bundleGroupId: "ice-blue-4"
    },
    {
      name: "Classic Fly Hood",
      path: "/outfit-builder-merchandising/classic-fly-hood-ice-blue",
      bundleGroupId: "ice-blue-4"
    },
    {
      name: "Pom Hat Silk",
      path: "/clothing/accessories/pom-hat-silk-ice-blue",
      bundleGroupId: "ice-blue-4"
    },
    // Ice Blue group 5
    {
      name: "Suede GP Square",
      path: "/horse-saddle-pads/gp-pads/suede-gp-square-ice-blue",
      bundleGroupId: "ice-blue-5"
    },
    {
      name: "Base Layer",
      path: "/clothing/women/base-layer-ice-blue",
      bundleGroupId: "ice-blue-5"
    },
    {
      name: "Pom Hat Silk",
      path: "/clothing/accessories/pom-hat-silk-ice-blue",
      bundleGroupId: "ice-blue-5"
    },
    {
      name: "Classic Fly Hood",
      path: "/outfit-builder-merchandising/classic-fly-hood-ice-blue",
      bundleGroupId: "ice-blue-5"
    },
    // Ice Blue group 6
    {
      name: "Loire Classic Close Contact Square",
      path: "/horse-saddle-pads/close-contact-pads/loire-classic-close-contact-square-ice-blue",
      bundleGroupId: "ice-blue-6",
      showPins: !0,
      pinsLinks: [
        "/horse-saddle-pads/close-contact-pads/loire-classic-close-contact-square-ice-blue",
        "/clothing/women/base-layer-ice-blue",
        "/horsewear/fly-hoods/loire-fly-hood-ice-blue",
        "/spring-sale/grafter-brushing-boot-ice-blue"
      ]
    },
    {
      name: "Loire Fly Hood",
      path: "/horsewear/fly-hoods/loire-fly-hood-ice-blue",
      bundleGroupId: "ice-blue-6"
    },
    {
      name: "Base Layer",
      path: "/clothing/women/base-layer-ice-blue",
      bundleGroupId: "ice-blue-6"
    },
    // Navy group 1
    {
      name: "Flexi Curry Comb",
      path: "/horsewear/grooming-care/flexi-curry-comb-apricot",
      bundleGroupId: "navy-1"
    },
    {
      name: "Flexi Soft Body Brush",
      path: "/horsewear/grooming-care/flexi-soft-body-brush-apricot",
      bundleGroupId: "navy-1"
    },
    {
      name: "Flexi Mssage Body Brush",
      path: "/horsewear/grooming-care/flexi-massage-brush-apricot",
      bundleGroupId: "navy-1"
    },
    {
      name: "Flexi Scrubbing Brush",
      path: "/horsewear/grooming-care/flexi-scrubbing-brush-apricot",
      bundleGroupId: "navy-1"
    },
    // Navy group 2
    {
      name: "Loire Classic Close Contact Square",
      path: "/horse-saddle-pads/close-contact-pads/loire-classic-close-contact-square-navy",
      bundleGroupId: "navy-2"
    },
    {
      name: "Loire Fly Hood",
      path: "/horsewear/fly-hoods/loire-fly-hood-navy",
      bundleGroupId: "navy-2"
    },
    {
      name: "Base Layer",
      path: "/clothing/women/base-layer-navy",
      bundleGroupId: "navy-2"
    },
    {
      name: "Pom Hat Silk",
      path: "/clothing/accessories/pom-hat-silk-navy",
      bundleGroupId: "navy-2"
    },
    // Navy group 3
    {
      name: "Junior Pro GP Jump Square",
      path: "/horse-saddle-pads/gp-pads/junior-pro-gp-jump-square-navy",
      bundleGroupId: "navy-3"
    },
    {
      name: "Junior Pro Fly Hood",
      path: "/horsewear/fly-hoods/junior-pro-fly-hood-navy",
      bundleGroupId: "navy-3"
    },
    // Navy group 4
    {
      name: "Suede Close Contact Square",
      path: "/horse-saddle-pads/close-contact-pads/suede-close-contact-square-navy",
      bundleGroupId: "navy-4",
      showPins: !0,
      pinsLinks: [
        "/horsewear/fly-hoods/loire-fly-hood-navy",
        "/clothing/women/naomi-pull-on-breeches-updated-navy",
        "/clothing/accessories/pro-mesh-hat-silk-navy",
        "/clothing/women/base-layer-navy",
        "/horse-saddle-pads/close-contact-pads/suede-close-contact-square-navy"
      ]
    },
    {
      name: "Loire Fly Hood",
      path: "/horsewear/fly-hoods/loire-fly-hood-navy",
      bundleGroupId: "navy-4"
    },
    {
      name: "Base Layer",
      path: "/clothing/women/base-layer-navy",
      bundleGroupId: "navy-4"
    },
    {
      name: "Pom Hat Silk",
      path: "/clothing/accessories/pom-hat-silk-navy",
      bundleGroupId: "navy-4"
    },
    // White group 1
    {
      name: "Le Cool Grip Dressage Pad White",
      path: "/new-in/anti-slip-cooling-dressage-pad-white",
      bundleGroupId: "white-1"
    },
    {
      name: "Le Cool Grip Dressage Pad Navy",
      path: "/new-in/anti-slip-cooling-dressage-pad-navy",
      bundleGroupId: "white-1"
    },
    // White group 2
    {
      name: "Cotton Dressage Square",
      path: "/horse-saddle-pads/dressage-pads/cotton-dressage-square-white",
      bundleGroupId: "white-2"
    },
    {
      name: "Cotton Close Contact Square",
      path: "/horse-saddle-pads/close-contact-pads/cotton-close-contact-square-white",
      bundleGroupId: "white-2"
    },
    // White group 3
    {
      name: "Suede Dressage Square",
      path: "/horse-saddle-pads/dressage-pads/suede-dressage-square-white",
      bundleGroupId: "white-3"
    },
    {
      name: "Suede Close Contact Square",
      path: "/horse-saddle-pads/close-contact-pads/suede-close-contact-square-white",
      bundleGroupId: "white-3"
    },
    // bundle-1
    {
      name: "Toy Pony Bridle Black",
      path: "/gifts/for-children/mini-lemieux-pony-bridle-black",
      bundleGroupId: "bundle-1"
    },
    {
      name: "Toy Pony Saddle Black",
      path: "/gifts/for-children/mini-lemieux-pony-saddle-black",
      bundleGroupId: "bundle-1"
    },
    {
      name: "Toy Pony Grooming Kit Red",
      path: "/toys/toy-pony-accessories/toy-pony-grooming-kit-ember",
      bundleGroupId: "bundle-1"
    },
    // bundle-2
    {
      name: "Toy Pony Saddle Black",
      path: "/gifts/for-children/mini-lemieux-pony-saddle-black",
      bundleGroupId: "bundle-2"
    },
    {
      name: "Toy Pony Bridle Black",
      path: "/gifts/for-children/mini-lemieux-pony-bridle-black",
      bundleGroupId: "bundle-2"
    },
    {
      name: "Toy Pony Grooming Kit Red",
      path: "/toys/toy-pony-accessories/toy-pony-grooming-kit-ember",
      bundleGroupId: "bundle-2"
    },
    // bundle-3
    {
      name: "Toy Pony Grooming Kit Sage",
      path: "/toys/toy-pony-accessories/toy-pony-grooming-kit-sage",
      bundleGroupId: "bundle-3"
    },
    {
      name: "Toy Pony Bridle Black",
      path: "/gifts/for-children/mini-lemieux-pony-bridle-black",
      bundleGroupId: "bundle-3"
    },
    {
      name: "Toy Pony Saddle Black",
      path: "/gifts/for-children/mini-lemieux-pony-saddle-black",
      bundleGroupId: "bundle-3"
    },
    // bundle-4
    {
      name: "Toy Pony Grooming Kit Red",
      path: "/toys/toy-pony-accessories/toy-pony-grooming-kit-ember",
      bundleGroupId: "bundle-4"
    },
    {
      name: "Toy Pony Bridle Black",
      path: "/gifts/for-children/mini-lemieux-pony-bridle-black",
      bundleGroupId: "bundle-4"
    },
    {
      name: "Toy Pony Saddle Black",
      path: "/gifts/for-children/mini-lemieux-pony-saddle-black",
      bundleGroupId: "bundle-4"
    },
    // bundle-5
    {
      name: "Toy Pony Saddle Brown",
      path: "/gifts/for-children/toy-pony-saddle-brown",
      bundleGroupId: "bundle-5"
    },
    {
      name: "Toy Pony Martingale Brown",
      path: "/toys/toy-pony-accessories/toy-pony-martingale-brown",
      bundleGroupId: "bundle-5"
    },
    {
      name: "Toy Pony Bridle Brown",
      path: "/toys/toy-pony-accessories/toy-pony-bridle-brown",
      bundleGroupId: "bundle-5"
    },
    // bundle-6
    {
      name: "Toy Pony Bridle Brown",
      path: "/toys/toy-pony-accessories/toy-pony-bridle-brown",
      bundleGroupId: "bundle-6"
    },
    {
      name: "Toy Pony Saddle Brown",
      path: "/gifts/for-children/toy-pony-saddle-brown",
      bundleGroupId: "bundle-6"
    },
    {
      name: "Toy Pony Martingale Brown",
      path: "/toys/toy-pony-accessories/toy-pony-martingale-brown",
      bundleGroupId: "bundle-6"
    },
    // bundle-7
    {
      name: "Toy Pony Popcorn",
      path: "/new-in/mini-lemieux-pony-popcorn",
      bundleGroupId: "bundle-7"
    },
    {
      name: "Toy Pony Fly Hood Azure",
      path: "/toys/toy-pony-sets/mini-lemieux-pony-fly-hood-azure",
      bundleGroupId: "bundle-7"
    },
    {
      name: "Toy Pony Rug Azure",
      path: "/toys/toy-pony-sets/mini-lemieux-pony-rug-azure",
      bundleGroupId: "bundle-7"
    },
    {
      name: "Toy Pony Pad Azure",
      path: "/toys/toy-pony-pad-azure",
      bundleGroupId: "bundle-7"
    },
    // bundle-8
    {
      name: "Toy Pony Dream",
      path: "/gifts/for-children/toy-pony-dream",
      bundleGroupId: "bundle-8"
    },
    {
      name: "Toy Pony Bridle Black",
      path: "/gifts/for-children/mini-lemieux-pony-bridle-black",
      bundleGroupId: "bundle-8"
    },
    {
      name: "Toy Pony Saddle Black",
      path: "/gifts/for-children/mini-lemieux-pony-saddle-black",
      bundleGroupId: "bundle-8"
    },
    {
      name: "Toy Pony Stable Tek Rug Navy",
      path: "/gifts/for-children/toy-pony-stable-tek-rug-navy",
      bundleGroupId: "bundle-8"
    },
    // bundle-9
    {
      name: "Toy Pony Lemon",
      path: "/toys/toy-ponies/toy-pony-lemon",
      bundleGroupId: "bundle-9"
    },
    {
      name: "Lemon the Rescue Pony Book",
      path: "/gifts/for-children/lemon-the-rescue-pony-book",
      bundleGroupId: "bundle-9"
    },
    {
      name: "Hobby Horse Fly Hood Blossom",
      path: "/us/toys/hobby-horse-accessories/hobby-horse-fly-hood-blossom",
      bundleGroupId: "bundle-9"
    },
    {
      name: "Toy Pony Lemon LeMieux Printed Rug",
      path: "/toys/toy-pony-accessories/toy-pony-lemon-lemieux-printed-rug",
      bundleGroupId: "bundle-9"
    },
    // bundle-10
    {
      name: "Toy Pony Chancer",
      path: "/new-in/toy-pony-collection/toy-pony-chancer",
      bundleGroupId: "bundle-10"
    },
    {
      name: "Toy Pony Racing Brdile Set Black",
      path: "/new-in/toy-pony-collection/toy-pony-racing-bridle-set-black",
      bundleGroupId: "bundle-10"
    },
    {
      name: "Toy Pony Grooming Kit Sage",
      path: "/toys/toy-pony-accessories/toy-pony-grooming-kit-sage",
      bundleGroupId: "bundle-10"
    },
    {
      name: "Toy Pony Racing Saddle Set Black",
      path: "/new-in/toy-pony-collection/toy-pony-racing-saddle-black",
      bundleGroupId: "bundle-10"
    },
    // bundle-11
    {
      name: "Toy Pony Coco",
      path: "/toys/toy-ponies/toy-pony-show-pony-white",
      bundleGroupId: "bundle-11"
    },
    {
      name: "Toy Pony Bridle Black",
      path: "/gifts/for-children/mini-lemieux-pony-bridle-black",
      bundleGroupId: "bundle-11"
    },
    {
      name: "Toy Pony Saddle Black",
      path: "/gifts/for-children/mini-lemieux-pony-saddle-black",
      bundleGroupId: "bundle-11"
    },
    // bundle-12
    {
      name: "Hobby Horse Hunter Bridle Brown",
      path: "/toys/hobby-horse-accessories/hobby-horse-hunter-bridle-brown",
      bundleGroupId: "bundle-12"
    },
    {
      name: "Hobby Horse Vogue Headcollar & Leadrope Blossom",
      path: "/toys/hobby-horse-accessories/hobby-horse-vogue-headcollar-leadrope-blossom",
      bundleGroupId: "bundle-12"
    },
    {
      name: "Hobby Horse Fly Hood Blossom",
      path: "/toys/hobby-horse-accessories/hobby-horse-fly-hood-blossom",
      bundleGroupId: "bundle-12"
    },
    // bundle-13
    {
      name: "Hobby Horse Double Bridle Black",
      path: "/toys/hobby-horse-accessories/hobby-horse-double-bridle-black",
      bundleGroupId: "bundle-13"
    },
    {
      name: "Toy Pony Dressage Saddle Black",
      path: "/new-in/toy-pony-collection/toy-pony-dressage-saddle-black",
      bundleGroupId: "bundle-13"
    },
    {
      name: "Toy Pony Winners Rug Navy",
      path: "/new-in/toy-pony-collection/toy-pony-winners-rug-navy",
      bundleGroupId: "bundle-13"
    },
    // bundle-14
    {
      name: "Hobby Horse Showing Bridle Black",
      path: "/toys/hobby-horse-accessories/hobby-horse-showing-bridle-black",
      bundleGroupId: "bundle-14"
    },
    {
      name: "Hobby Horse Rosette Pack Multi",
      path: "/toys/hobby-horse-accessories/hobby-horse-rosette-pack-multi",
      bundleGroupId: "bundle-14"
    },
    {
      name: "Hobby Horse Fly Hood Lagoon or Blossom",
      path: "/toys/hobby-horse-accessories/hobby-horse-fly-hood-blossom",
      bundleGroupId: "bundle-14"
    },
    // bundle-15
    {
      name: "Hobby Horse Competition Bridle Black",
      path: "/gifts/for-children/hobby-horse-competition-bridle-black",
      bundleGroupId: "bundle-15"
    },
    {
      name: "Hobby Horse Rosette Pack Multi",
      path: "/toys/hobby-horse-accessories/hobby-horse-rosette-pack-multi",
      bundleGroupId: "bundle-15"
    },
    {
      name: "Hobby Horse Fly Hood Black",
      path: "/toys/hobby-horse-accessories/hobby-horse-fly-hood-black",
      bundleGroupId: "bundle-15"
    },
    // bundle-16
    {
      name: "Hobby Horse Grackle Bridle Brown",
      path: "/gifts/for-children/hobby-horse-grackle-bridle-brown",
      bundleGroupId: "bundle-16"
    },
    {
      name: "Hobby Horse Crystal Browband Brown",
      path: "/toys/hobby-horse-accessories/hobby-horse-browband-pack-of-3",
      bundleGroupId: "bundle-16"
    },
    {
      name: "Hobby Horse Fly Hood Black",
      path: "/toys/hobby-horse-accessories/hobby-horse-fly-hood-black",
      bundleGroupId: "bundle-16"
    },
    // bundle-17
    {
      name: "Hobby Horse Dream",
      path: "/toys/hobby-horse/hobby-horse-dream",
      bundleGroupId: "bundle-17"
    },
    {
      name: "Hobby Horse Competition Bridle Black",
      path: "/gifts/for-children/hobby-horse-competition-bridle-black",
      bundleGroupId: "bundle-17"
    },
    {
      name: "Hobby Horse Fly Hood Lagoon or Blossom",
      path: "/toys/hobby-horse-accessories/hobby-horse-fly-hood-blossom",
      bundleGroupId: "bundle-17"
    },
    // bundle-18
    {
      name: "Hobby Horse Chancer",
      path: "/toys/hobby-horse/hobby-horse-chancer",
      bundleGroupId: "bundle-18"
    },
    {
      name: "Hobby Horse Grackle Bridle Brown",
      path: "/gifts/for-children/hobby-horse-grackle-bridle-brown",
      bundleGroupId: "bundle-18"
    },
    {
      name: "Hobby Horse Rosette Pack Multi",
      path: "/toys/hobby-horse-accessories/hobby-horse-rosette-pack-multi",
      bundleGroupId: "bundle-18"
    },
    {
      name: "Hobby Horse Stretch Hood Chilli",
      path: "/new-in/ss24/hobby-horse-stretch-hood-chilli",
      bundleGroupId: "bundle-18"
    },
    // bundle-19
    {
      name: "Hobby Horse Razzle",
      path: "/toys/hobby-horse/hobby-horse-razzle",
      bundleGroupId: "bundle-19"
    },
    {
      name: "Hobby Horse Competition Bridle Black",
      path: "/gifts/for-children/hobby-horse-competition-bridle-black",
      bundleGroupId: "bundle-19"
    },
    {
      name: "Hobby Horse Rosette Pack Multi",
      path: "/toys/hobby-horse-accessories/hobby-horse-rosette-pack-multi",
      bundleGroupId: "bundle-19"
    },
    // bundle-20
    {
      name: "Hobby Horse Popcorn",
      path: "/gifts/for-children/hobby-horse-popcorn",
      bundleGroupId: "bundle-20"
    },
    {
      name: "Hobby Horse Competition Bridle Black",
      path: "/gifts/for-children/hobby-horse-competition-bridle-black",
      bundleGroupId: "bundle-20"
    },
    {
      name: "Hobby Horse Fly Hood Lagoon or Blossom",
      path: "/toys/hobby-horse-accessories/hobby-horse-fly-hood-blossom",
      bundleGroupId: "bundle-20"
    },
    // bundle-21
    {
      name: "Hobby Horse Flash",
      path: "/gifts/for-children/hobby-horse-flash",
      bundleGroupId: "bundle-21"
    },
    {
      name: "Hobby Horse Grackle Bridle Brown",
      path: "/gifts/for-children/hobby-horse-grackle-bridle-brown",
      bundleGroupId: "bundle-21"
    },
    {
      name: "Hobby Horse Standing Martingale Brown",
      path: "/toys/hobby-horse-accessories/hobby-horse-standing-martingale-brown-48508",
      bundleGroupId: "bundle-21"
    },
    // bundle-22
    {
      name: "Hobby Horse Sammy",
      path: "/gifts/for-children/hobby-horse-sam",
      bundleGroupId: "bundle-22"
    },
    {
      name: "Hobby Horse Competition Bridle Black",
      path: "/gifts/for-children/hobby-horse-competition-bridle-black",
      bundleGroupId: "bundle-22"
    },
    {
      name: "Hobby Horse Fly Hood Black",
      path: "/toys/hobby-horse-accessories/hobby-horse-fly-hood-black",
      bundleGroupId: "bundle-22"
    }
  ], B = window.autoInitData.website.websiteCode, x = async (c, e) => {
    const n = B === "base" ? c : `/${B.toLowerCase()}${c}`;
    try {
      const o = await fetch(n, e);
      if (!o.ok)
        throw new Error(o.statusText);
      const t = await o.json();
      if (t.error)
        throw new Error(t.error);
      const { catalog: s, result: i, customer: l } = t;
      if (s) {
        const r = s[0];
        if (r)
          return {
            data: r,
            error: null
          };
      }
      if (i && i.length > 0) {
        const r = i[0];
        return r != null && r.product ? {
          data: r.product,
          error: null
        } : i.length === 1 ? {
          data: i[0],
          error: null
        } : {
          data: i,
          error: null
        };
      }
      return l ? {
        data: l,
        error: null
      } : {
        data: null,
        error: new Error("No data found")
      };
    } catch (o) {
      return console.error("request error", o), { data: null, error: o };
    }
  }, _ = (c) => x(`/api/n/route/${c}?pushDeps=true`), E = (c) => x(
    `/api/n/find?type=block&filter={"url":"size-guide-modal@${c}"}&verbosity=3&limit=1`
  ), F = (c) => x("/api/p/basket/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      products: [
        {
          id: c,
          qty: 1,
          options: {},
          bundle_options: {}
        }
      ]
    })
  }), q = (c) => x("/api/p/basket/remove", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ids: c
    })
  }), H = ({ id: c, qty: e }) => x("/api/p/basket/qty", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: c,
      qty: e
    })
  }), j = () => x("/api/n/attribute/size/verbosity/3"), A = (c) => x(
    `/api/n/load?type=stock&verbosity=1&ids=${c.join(",")}&pushDeps=true`
  ), R = `.cart-popup {
  top: auto;
  bottom: 0;
  width: 100%;
  max-width: 100%;
  padding: 32px 16px 16px;
  border: none;
}

.cart-popup-close {
  position: absolute;
  top: 0;
  right: 0;
  width: 48px;
  height: 48px;
  padding: 16px;
}
.cart-popup-header-title {
  color: var(--Text, #595959);
  font-family: Baskerville;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px; /* 115% */
  letter-spacing: 0.5px;
}

.cart-popup-content {
  margin-top: 16px;
  display: grid;
  gap: 16px;
}

.cart-product {
  display: flex;
  gap: 8px;
  width: 100%;
}

.cart-product-content {
  flex: 1;
}

.cart-product-header {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.cart-product-title {
  color: var(--Text, #595959);
  font-family: 'Source Sans 3';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 133.333% */
  letter-spacing: 1px;
}

.cart-product-price {
  color: var(--Text, #595959);
  font-family: 'Source Sans 3';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: 1px;
}

.cart-product-size,
.cart-product-color {
  color: #acacac;
  font-family: 'Source Sans 3';
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 1px;
}



.quantity-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 69px;
  height: 34px;
  border: 1px solid #cfd2d3;
}

.quantity-wrapper button {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 34px;
}

.quantity-wrapper input {
  text-align: center;
  pointer-events: none;
}

.cart-product-options {
  margin-top: 0.25rem;
  display: flex;
}

.cart-product-options button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
}
.cart-popup-footer {
  margin-top: 24px;
  padding-top: 16px;
  padding-inline: 16px;
  margin-left: -16px;
  margin-right: -16px;
  border-top: 2px solid #cecdcd;
}

.cart-popup-footer :is(a, button) {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 100%;
  border: 1px solid #212121;

  background: #212121;
  color: #fff;
  text-align: center;
  font-family: 'Source Sans 3';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 100% */
  letter-spacing: 1px;
}
`;
  class O {
    constructor() {
      this.dialog = null, this.init();
    }
    init() {
      this.addStyles(), this.render(), this.eventListeners();
    }
    render() {
      document.getElementById("cart-popup") || document.body.insertAdjacentHTML(
        "beforeend",
        /* HTML */
        `
      <dialog class="cart-popup" id="cart-popup">
        <button class="cart-popup-close"><i class="icon-close"></i></button>
        <div class="cart-popup-inner">
          <div class="cart-popup-header">
            <div class="cart-popup-header-title">Added to your bag</div>
          </div>

          <div class="cart-popup-content"></div>
          <div class="cart-popup-footer">
            <a href="">Go to checkout</a>
          </div>
        </div>
      </dialog>
    `
      ), this.dialog = document.getElementById("cart-popup");
    }
    eventListeners() {
      var o, t;
      const e = (o = this.dialog) == null ? void 0 : o.querySelector(".cart-popup-close");
      e && e.addEventListener("click", () => {
        this.close();
      });
      const n = (t = this.dialog) == null ? void 0 : t.querySelector(".cart-popup-content");
      n && n.addEventListener("click", (s) => {
        const i = s.target;
        if (i.classList.contains("remove")) {
          const l = i.closest(".cart-product");
          l && l.remove();
        }
      });
    }
    open({
      productId: e,
      productCartId: n,
      color: o,
      size: t,
      title: s,
      price: i,
      image: l,
      link: r,
      qty: u
    }) {
      var b, g, m, y, w, d;
      const p = (b = this.dialog) == null ? void 0 : b.querySelector(".cart-popup-content");
      if (!p) return;
      const a = (
        // @ts-ignore
        ((w = (y = (m = (g = window == null ? void 0 : window.autoInitData) == null ? void 0 : g.website) == null ? void 0 : m.currency) == null ? void 0 : y.list) == null ? void 0 : w[0].symbol) || "$"
      ), h = (
        /* HTML */
        ` <div
      class="cart-product"
      data-id="${e}"
      cart-id="${n}"
    >
      <div class="cart-product-image">
        <img src="${l}" alt="" width="84" height="113" />
      </div>
      <div class="cart-product-content">
        <div class="cart-product-header">
          <div class="cart-product-title">${s}</div>
          <div class="cart-product-price">
            ${a}<span>${i}</span>
          </div>
        </div>
        <div class="cart-product-options">
          <div class="cart-product-size">${t}</div>
          <div class="cart-product-color">| ${o}</div>
        </div>
        <div class="cart-product-quantity">
          <div class="quantity-wrapper">
            <button class="quantity-button minus">
              <i class="icon-minus fs-2"></i>
            </button>
            <input
              type="number"
              class="quantity-input no-spinner center p2 ng-untouched ng-pristine"
              value="${u}"
              min="1"
              max="99"
              disabled
            />
            <button class="quantity-button plus">
              <i class="icon-plus fs-2"></i>
            </button>
          </div>
        </div>
        <div class="cart-product-options">
          <button class="remove">
            <i class="icon-close" style="font-size: 0.75rem;"></i></button
          ><button class="favorite">
            <i class="icon-wishlist fs-3 col-43"></i>
          </button>
        </div>
      </div>
    </div>`
      );
      p.innerHTML = h, this.productEvents(n), (d = this.dialog) == null || d.showModal();
    }
    debounce(e, n) {
      let o = null;
      return (...t) => {
        o && clearTimeout(o), o = setTimeout(() => e(...t), n);
      };
    }
    productEvents(e) {
      const n = document.querySelector(
        `.cart-product[cart-id="${e}"]`
      ), o = n == null ? void 0 : n.querySelector(".minus"), t = n == null ? void 0 : n.querySelector(".plus"), s = n == null ? void 0 : n.querySelector(".quantity-input"), i = n == null ? void 0 : n.querySelector(".remove"), l = n == null ? void 0 : n.querySelector(".favorite"), r = this.debounce(async (u, p) => {
        var g;
        const { data: a, error: h } = await H({ id: u, qty: p }), b = a == null ? void 0 : a.cart;
        if (b) {
          const m = (g = b == null ? void 0 : b.items.find(
            (y) => y.id === u
          )) == null ? void 0 : g.rowPrice;
          if (m) {
            const y = n == null ? void 0 : n.querySelector(
              ".cart-product-price span"
            );
            y && (y.innerHTML = `${m}`);
          }
        }
      }, 300);
      !n || !s || (o && o.addEventListener("click", () => {
        const p = parseInt(s.value) - 1;
        if (t == null || t.removeAttribute("disabled"), p < 1) {
          s.value = "1", o.setAttribute("disabled", "true");
          return;
        }
        s.value = p.toString(), r(+e, p);
      }), t && t.addEventListener("click", () => {
        const p = parseInt(s.value) + 1;
        o == null || o.removeAttribute("disabled"), s.value = p.toString(), r(+e, p);
      }), i && i.addEventListener("click", async () => {
        const u = i.closest(".cart-product");
        u && (await q([+e]), u.remove(), this.close());
      }), l && l.addEventListener("click", () => {
        const u = l.closest(".cart-product");
        u && u.classList.toggle("favorite");
      }));
    }
    close() {
      this.dialog && this.dialog.close();
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = R, document.head.appendChild(e);
    }
  }
  const M = `.size-popup-table {
  display: flex;
  justify-content: center;
}

.size-popup-table-wrapper {
  display: grid;
  place-content: center;
}

.size-popup-table-wrapper table :is(thead, tbody) tr :is(td, th) {
  display: table-cell;
  min-width: 2.8125rem;
  height: 2.5rem;
}

.size-popup-table-wrapper table :is(thead, tbody) tr :is(td, th):nth-child(odd) {
  background-color: #FAFAFA;
}

.size-popup-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
}

.switch-label {
  font-size: 14px;
  color: #666;
  transition: all 0.3s;
}

.switch-label.active {
  font-weight: bold;
  color: #000;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 22px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #212121;
}

input:checked + .slider:before {
  transform: translateX(18px);
}
`;
  class D {
    constructor(e) {
      this.tables = e, this.addStyles();
    }
    renderTables() {
      return this.tables.map((e) => {
        const n = e.rows[0].columns.map((s) => `<th>${s.valueFirst}</th>`).join(""), o = e.rows.slice(1).map(
          (s) => `<tr class="cm-unit">${s.columns.map((i) => `<td>${i.valueFirst}</td>`).join("")}</tr>`
        ).join(""), t = e.rows.slice(1).map(
          (s) => `<tr class="inches-unit" style="display: none;">${s.columns.map((i) => `<td>${i.valueSecond}</td>`).join("")}</tr>`
        ).join("");
        return (
          /* HTML */
          `
          <div class="size-popup-table-wrapper">
            ${this.renderTableToggle(e)}
            <table>
              <thead>
                <tr>
                  ${n}
                </tr>
              </thead>
              <tbody>
                ${o} ${t}
              </tbody>
            </table>
          </div>
        `
        );
      }).join("");
    }
    renderTableToggle(e) {
      return e.toggleOptionFirst && e.toggleOptionSecond ? (
        /* HTML */
        ` <div class="size-popup-switch">
          <span class="switch-label switch-label-cm active"
            >${e.toggleOptionFirst}</span
          >
          <label class="switch">
            <input type="checkbox" class="unit-toggle" />
            <span class="slider round"></span>
          </label>
          <span class="switch-label switch-label-inches"
            >${e.toggleOptionSecond}</span
          >
        </div>`
      ) : "";
    }
    addUnitToggleListeners(e) {
      e.querySelectorAll(".unit-toggle").forEach((o) => {
        o.addEventListener("change", (t) => {
          const s = t.target.checked, i = o.closest(
            ".size-popup-table-wrapper"
          );
          if (!i) return;
          const l = i.querySelectorAll(".cm-unit"), r = i.querySelectorAll(".inches-unit"), u = i.querySelector(".switch-label-cm"), p = i.querySelector(".switch-label-inches");
          u && u.classList.toggle("active", !s), p && p.classList.toggle("active", s), s ? (l.forEach((a) => a.style.display = "none"), r.forEach((a) => a.style.display = "")) : (l.forEach((a) => a.style.display = ""), r.forEach((a) => a.style.display = "none"));
        });
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.innerHTML = M, document.head.appendChild(e);
    }
  }
  const V = `.size-popup {
  width: 80vw;
  max-width: 80vw;
  max-height: 90vh;
  padding: 0;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.size-popup-inner {
  position: relative;
  padding: 20px;
  padding-top: 2.5rem;
  padding-bottom: 1.5rem;
}

.size-popup-close {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  right: 10px;
  width: 48px;
  height: 48px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
}

.size-popup-title {
  text-align: center;
  margin-bottom: 20px;
}

.size-popup-toggle {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.size-popup-table {
  overflow-x: auto;
  margin-bottom: 20px;
}

.size-popup-table table {
  width: 100%;
  border-collapse: collapse;
}

.size-popup-table th,
.size-popup-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.size-popup-image img {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.size-popup-copy {
  text-align: center;
  font-size: 14px;
  color: #666;
}

.size-popup-switch {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
}

.switch-label {
  font-size: 14px;
  color: #666;
  transition: all 0.3s;
}

.switch-label.active {
  font-weight: bold;
  color: #000;
}

/* Контейнер світча */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
}

/* Приховуємо стандартний чекбокс */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* Повзунок світча */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 22px;
}

/* Кружок повзунка */
.slider:before {
  position: absolute;
  content: '';
  height: 18px;
  width: 18px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

/* Стан активності */
input:checked + .slider {
  background-color: #83be63;
}

input:checked + .slider:before {
  transform: translateX(18px);
}
`;
  class N {
    constructor({
      sizeGuideId: e,
      triggerSelector: n,
      productName: o,
      isTooltip: t = !1
    }) {
      this.sizeGuideId = e, this.triggerSelector = n, this.productName = o, this.parentElementName = t ? "tip" : "standard", this.init();
    }
    init() {
      this.addStyles(), this.render(), this.eventListeners();
    }
    async getSizeGuide() {
      const { data: e, error: n } = await E(this.sizeGuideId);
      if (n) {
        console.error("Error fetching size guide", n.message);
        return;
      }
      return e;
    }
    async render() {
      const e = await this.getSizeGuide();
      if (!e) return;
      const { title: n, subtitle: o, image: t, copy: s, tables: i } = e.content, l = document.querySelector(
        `size-popup-${this.sizeGuideId}`
      );
      l && l.remove();
      const r = new D(i), u = r.renderTables(), p = t != null && t.startsWith("/") ? `https://www.lemieux.com/static${t}` : `https://www.lemieux.com/static/${t}`, a = (
        /* HTML */
        `
      <dialog class="size-popup" id="size-popup-${this.sizeGuideId}">
        <div class="size-popup-inner">
          <button class="size-popup-close" aria-label="Close">
            <i
              _ngcontent-ng-c567369191=""
              aria-hidden="true"
              class="icon-close"
            ></i>
          </button>
          <h2 class="size-popup-title h2">${n}</h2>
          ${o ? `<h3 class="size-popup-subtitle">${o}</h3>` : ""}

          <div class="size-popup-table">${u}</div>
          <div class="size-popup-image">
            <img src="${p}" alt="Size Guide Image" />
          </div>
          <p class="size-popup-copy">${s}</p>
        </div>
      </dialog>
    `
      );
      document.body.insertAdjacentHTML("beforeend", a);
      const h = document.querySelector(
        `#size-popup-${this.sizeGuideId}`
      );
      h.querySelector(
        ".size-popup-close"
      ).addEventListener("click", () => h.close()), r.addUnitToggleListeners(h);
    }
    eventListeners() {
      const e = document.querySelector(this.triggerSelector);
      e && e.addEventListener("click", () => {
        I(
          "exp_cross_sell_click_01",
          `View size guide-${this.parentElementName}`,
          "click",
          `${this.productName}`
        ), this.open();
      });
    }
    open() {
      document.querySelector(
        `#size-popup-${this.sizeGuideId}`
      ).showModal();
    }
    addStyles() {
      const e = document.createElement("style");
      e.innerHTML = V, document.head.appendChild(e);
    }
  }
  const W = `.bundle {
  width: 100%;
  padding-block: 24px;
}

.bundle + .bundle {
  border-top: 1px solid #cfd2d3;
}

.bundle-inner {
  display: flex;
  gap: 16px;
  width: 100%;
}
.bundle-img {
  width: 168px;
}

@media (max-width: 1290px) {
  .bundle-img {
    width: 109px;
  }
}

.bundle-img img {
  height: auto;
}

.bundle-rating {
  margin-top: 6px;
  display: flex;
  justify-content: center;
}

.bundle-content {
  flex: 1;
}
.bundle-title {
  color: #212121;
  font-family: 'Baskerville URW T OT';
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 1px;
}

@media (max-width: 1100px) {
  .bundle-title {
    font-size: 20px;
    line-height: 24px;
  }
}

.bundle-price-size {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bundle-size-options {
  display: none;
  max-height: 0;
  transition: max-height 0.3s ease;
}

.bundle-size-item > div {
  display: flex;
  justify-content: space-between;
}
.bundle-size-item[data-soldout="true"] {
  pointer-events: none;
  cursor: not-allowed;

}
.bundle-size-item[data-soldout="true"] p {
  color: #acacac !important;
}

.bundle-size-item[data-soldout="true"] .bundle-size-sold {
  color: #8e1538
}

.bundle-price {
  color: #212121;
  font-family: 'Source Sans 3';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1px;
}

.bundle-size button {
  color: #595959;
  text-align: right;
  font-family: 'Source Sans 3';
  font-size: 15px;
  font-style: italic;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1px;
  text-decoration: underline;
}

.hide-up .bundle-size-options {
  display: block;
  max-height: unset;
}

.bundle-size-selected {
  font-size: 15px !important;
}
.bundle-size-select .icon-chevron {
  font-size: 24px;
}

.bundle-size-select .icon-chevron::before {
  rotate: 90deg;
}

.bundle-size-select.hide-up .icon-chevron::before {
  rotate: -90deg;
}
.bundle-button {
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 48px;
  border: none;
  background: #212121;
  color: #fff;
  text-align: center;
  font-family: 'Source Sans 3';
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1px;
  cursor: pointer;
}
`, S = class S {
    constructor({
      product: e,
      sizes: n,
      containerSelector: o,
      cartInstance: t,
      position: s = "beforeend",
      aborters: i,
      isTooltip: l = !1
    }) {
      this.eventRemovers = [], this.disposed = !1, this.bundleButtonHandler = null, this.isInitialized = !1, this.product = e, this.sizes = n, this.containerSelector = o, this.position = s, this.bundle = null, this.size = null, this.color = null, this.device = window.innerWidth <= 1100 ? "mobile" : "desktop", this.basketPopup = new O(), this.cart = t, this.aborters = i, this.parentElementName = l ? "tip" : "standard", S.bundleCounter += 1, this.bundleId = `product-${e.id}-${S.bundleCounter}`, this.init();
    }
    init() {
      this.addStyles(), this.render(), this.isInitialized || (this.handleSizeSelectOpen(), this.handleSizeSelection(), this.isInitialized = !0);
    }
    async render() {
      var b, g, m, y, w;
      const e = this.product, n = this.sizes;
      this.color = e.color_org;
      const o = e.size, t = n.options.filter((d) => o.includes(d.value)).map((d) => ({
        size: d,
        productId: this.getProductIdBySizeAndColor(
          e,
          d.value,
          e.color_org
        )
      })).filter((d) => d.productId), s = t.map((d) => d.productId), { data: i, error: l } = await A(s);
      if (l && !i) {
        console.error("Error fetching stock data:", l);
        return;
      }
      const r = t.map((d) => {
        const f = Array.isArray(i) ? i.find((G) => G.id === d.productId) : i;
        return f ? {
          id: d.productId,
          size: d.size,
          stock: {
            isSoldOut: !!(f != null && f.isOut && (f != null && f.isOutTemp)),
            qty: (f == null ? void 0 : f.qty) || 0
          }
        } : null;
      }).filter(Boolean);
      if (r.length === 0 || r.every((d) => d.stock.isSoldOut))
        return;
      let u = "Select Size", p = "empty";
      r.length === 1 && !r[0].stock.isSoldOut && (u = r[0].size.label, p = r[0].size.value, this.size = r[0].size.value);
      const a = (
        // @ts-ignore
        (y = (m = (g = (b = window == null ? void 0 : window.autoInitData) == null ? void 0 : b.website) == null ? void 0 : g.currency) == null ? void 0 : m.list) == null ? void 0 : y[0].symbol
      ), h = `<div class="bundle" id="${this.bundleId}">
      <div class="bundle-inner">
        <div class="bundle-img">
          <img
            src="/static/media/catalog/${e.image}"
            alt=""
            width="100%"
            height="100%"
            loading="lazy"
          />
          <div class="bundle-rating">
            <div class="ng-star-inserted">
              <div
                class="cursor-pointer p-b-1-s p-b-1-m flex flex-middle pos-relative"
              >
                <rating
                  class="col-12 inline-block"
                  style="font-size: 13px; height: 1em;"
                  ><i class="rate-full ng-star-inserted"></i
                  ><i class="rate-full ng-star-inserted"></i
                  ><i class="rate-full ng-star-inserted"></i
                  ><i class="rate-full ng-star-inserted"></i
                  ><i class="rate-full ng-star-inserted"></i
                ></rating>
                <span class="p2 p-l-2">(${(w = e == null ? void 0 : e.reviews) == null ? void 0 : w.count})</span>
              </div>
            </div>
          </div>
        </div>
        <div class="bundle-content">
          <a href="${e.url}" class="bundle-title">${e.name}</a>
          <div class="bundle-price-size">
            <div class="bundle-price">${a}${e.price}</div>
            <div class="bundle-size">
              ${e != null && e.size_guide ? "<button>View size guide</button>" : ""}
            </div>
          </div>
          <div
            class="bundle-size-select block m-t-3 m-t-2-s m-t-2-m"
            id="size-select"
          >
            <div class="b-a b-col-42 bg-col-w pos-relative">
              <div
                class="p-l-5 p-r-5 flex flex-middle flex-justify-between cursor-pointer col-1"
                style="height: 48px;"
              >
                <div class="flex-grow">
                  <p
                    class="bundle-size-selected s2"
                    data-chosen-value="${p}"
                    data-chosen-label="${u}"
                  >
                    ${u}
                  </p>
                </div>
                <i class="icon-chevron inline-flex _chevron _is-up"></i>
              </div>
              <div class="ng-star-inserted " style="--hide-up-height: 90px;">
                <div class="_content flex flex-column flex-justify-end">
                  <div>
                    <div class="bundle-size-options bg-col-w">
                      ${r.map((d) => `<div
                            class="p-r p-l bundle-size-item${r.length === 1 && !d.stock.isSoldOut ? " checked" : ""}"
                            data-variant-id="${d.id}"
                            data-size-id="${d.size.value}"
                            data-size-label="${d.size.label}"
                            data-soldout="${d.stock.isSoldOut}"
                            data-qty="${d.stock.qty}"
                          >
                            <div
                              class="cursor-pointer p-t-3 p-b-3 b-t b-col-42 flex flex-justify-between flex-middle"
                            >
                              <p class="s2 col-1">${d.size.label}</p>
                              ${d.stock.isSoldOut ? '<span class="bundle-size-sold">SOLD OUT</span>' : ""}
                            </div>
                          </div>`).join("")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="bundle-button">Add</button>
        </div>
      </div>
    </div>`;
      if (this.containerSelector) {
        const d = document.querySelector(
          this.containerSelector
        ), f = this.containerSelector.includes("tooltip") || this.containerSelector.includes("pins-bundle-tooltip");
        if (!d) {
          f || console.error(
            `Container not found: ${this.containerSelector}. Bundle not rendered.`
          );
          return;
        }
        if (document.getElementById(this.bundleId))
          return;
        this.removeExistingBundle(), d.insertAdjacentHTML(this.position, h), this.bundle = document.getElementById(this.bundleId), this.bundle && (e != null && e.size_guide) && new N({
          productName: e.name,
          sizeGuideId: e.size_guide,
          triggerSelector: `#${this.bundleId} .bundle-size button`,
          isTooltip: f
        }), this.attachBundleButtonHandler();
      }
    }
    attachBundleButtonHandler() {
      if (!this.bundle) return;
      const e = this.bundle.querySelector(".bundle-button");
      e && (this.bundleButtonHandler && e.removeEventListener("click", this.bundleButtonHandler), this.bundleButtonHandler = async () => {
        var l, r, u, p, a, h, b, g, m;
        if (I(
          "exp_cross_sell_click_03",
          `Add-${this.parentElementName}`,
          "click",
          `${this.product.name}`
        ), !this.size) {
          const y = (l = this.bundle) == null ? void 0 : l.querySelector(
            "#size-select"
          );
          y == null || y.classList.add("hide-up");
          return;
        }
        const n = this.getProductIdBySizeAndColor(
          this.product,
          this.size,
          this.color || ""
        );
        if (!n) {
          console.error("Product not found");
          return;
        }
        const o = (r = this.bundle) == null ? void 0 : r.querySelector(
          ".bundle-size-selected"
        ), t = document.getElementById(
          "bundle-color"
        ), s = (u = document.querySelector("a")) == null ? void 0 : u.getAttribute("href"), i = (a = (p = this.bundle) == null ? void 0 : p.querySelector("img")) == null ? void 0 : a.getAttribute("src");
        try {
          const { data: y, error: w } = await F(n);
          if (w)
            throw new Error(w.message);
          const d = y == null ? void 0 : y.cart, f = d == null ? void 0 : d.items, G = (h = d == null ? void 0 : d.items.find((v) => v.product === n)) == null ? void 0 : h.request.qty, P = (b = d == null ? void 0 : d.items.find(
            (v) => v.product === n
          )) == null ? void 0 : b.rowPrice, te = d.items.reduce((v, ne) => v + ne.rowPrice, 0).toFixed(2), L = (g = d == null ? void 0 : d.items.find(
            (v) => v.product === n
          )) == null ? void 0 : g.id;
          if (this.device === "desktop" && this.cart.addItemToCart({
            id: n.toString(),
            productCartId: L,
            title: this.product.name,
            size: o.dataset.chosenLabel || "",
            color: t.textContent || "",
            price: P,
            image: i || "",
            link: s || "",
            qty: G
          }), window.innerWidth <= 700) {
            this.basketPopup.open({
              productId: n,
              productCartId: L,
              color: t.textContent || "",
              size: o.dataset.chosenLabel || "",
              title: this.product.name,
              price: P,
              image: i || "",
              link: s || "",
              qty: G
            });
            const v = (m = this.bundle) == null ? void 0 : m.closest(
              "#pins-bundle-mobile-popup"
            );
            v && (v.close(), v.remove());
          }
        } catch (y) {
          console.error("Error adding to basket", y);
        }
      }, e.addEventListener("click", this.bundleButtonHandler), this.eventRemovers.push(
        () => e.removeEventListener("click", this.bundleButtonHandler)
      ));
    }
    removeExistingBundle() {
      const e = document.getElementById(this.bundleId);
      e && e.remove();
    }
    async handleSizeSelection() {
      const e = await this.waitForBundle(), n = e == null ? void 0 : e.querySelector("#size-select"), o = n.querySelector(
        ".bundle-size-selected"
      ), t = n.querySelector(
        ".bundle-size-options"
      );
      if (!o || !t || !o) return;
      const s = (i) => {
        var a;
        const r = i.target.closest(".bundle-size-item");
        if (!r || r.dataset.soldout === "true") return;
        const u = r.dataset.sizeId, p = (a = r.querySelector(".s2")) == null ? void 0 : a.textContent;
        !u || !p || (o.textContent = p, o.dataset.chosenValue = u, o.dataset.chosenLabel = p, this.size = u, n == null || n.classList.remove("hide-up"));
      };
      n.addEventListener("click", s), this.eventRemovers.push(
        () => n.removeEventListener("click", s)
      );
    }
    getHashParam(e) {
      if (!location.hash) return null;
      const o = location.hash.substring(1).split("&");
      for (const t of o) {
        const [s, i] = t.split("=");
        if (s === e)
          return i;
      }
      return null;
    }
    async handleSizeSelectOpen() {
      const e = await this.waitForBundle(), n = e == null ? void 0 : e.querySelector("#size-select"), o = n.querySelector(".bundle-size-selected"), t = n.querySelector(
        ".bundle-size-options"
      );
      if (!o || !t) return;
      const s = (i) => {
        n.classList.contains("hide-up") || I(
          "exp_cross_sell_click_03",
          `Select size-${this.parentElementName}`,
          "click",
          `${this.product.name}`
        ), n.dataset.soldout !== "true" && (n == null || n.classList.toggle("hide-up"));
      };
      n.addEventListener("click", s), this.eventRemovers.push(
        () => n.removeEventListener("click", s)
      );
    }
    getProductIdBySizeAndColor(e, n, o) {
      var r;
      const t = (r = e == null ? void 0 : e.options) == null ? void 0 : r.configurable;
      if (!(t != null && t.size))
        return console.error("Product options structure is invalid"), null;
      const s = t.size[n];
      if (!s)
        return console.error("Size not found in product options"), null;
      if (s.length === 1 && !t.color)
        return s[0];
      if (!t.color)
        return console.error("Product options structure is invalid"), null;
      let i = t.color[o];
      if (i || (o === "8792" ? i = t.color[6635] : o === "6635" ? i = t.color[8792] : i = t.color[o]), !i)
        return console.error("Color not found in product options"), null;
      const l = s.filter(
        (u) => i.length === 0 && s.length === 1 ? !0 : i.includes(u)
      );
      return l.length === 0 ? (console.warn("No product found with this size and color combination"), null) : (l.length > 1 && console.warn(
        "Multiple products found with this size and color combination, returning first one"
      ), l[0]);
    }
    waitForBundle(e = 5e4) {
      return new Promise((n, o) => {
        if (this.bundle)
          return n(this.bundle);
        const t = setInterval(() => {
          this.bundle && (clearInterval(t), clearTimeout(s), n(this.bundle));
        }, 200), s = setTimeout(() => {
          clearInterval(t), o(new Error("Timeout waiting for window.product"));
        }, e);
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.innerHTML = W, document.head.appendChild(e);
    }
    dispose() {
      this.disposed || (this.disposed = !0, this.eventRemovers.forEach((e) => e()), this.eventRemovers = [], this.bundle && this.bundle.parentElement && this.bundle.parentElement.removeChild(this.bundle), this.bundle = null);
    }
  };
  S.bundleCounter = 0;
  let z = S;
  const U = `.bundle-container {
  margin-top: 28px;
  padding: 24px 16px;
  background: #f3f3f3;
}

.bundle-container:not(:has(.bundle)) {
  display: none;
}

.bundle-container-title {
  color: #212121;
  font-family: 'Baskerville URW T OT', serif;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.5px;
}

.bundle-container-footer {
  color: #8e8e8e;
  font-family: 'Source Sans 3';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 1px;
}

.bundle-container-footer a {
  color: #212121;
  font-family: 'Source Sans 3';
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 1px;
  text-decoration: underline;
}

@media (max-width: 1100px) {
  .bundle-container-title {
    font-size: 26px;
  }
}
`;
  class Y {
    constructor(e, n, o) {
      this.aborters = [], this.bundleItems = [], this.disposed = !1, this.bundleData = e, this.cartInstance = n, this.aborters = o, this.init();
    }
    async init() {
      this.addStyles(), await this.render();
    }
    async render() {
      var u, p;
      await k("product-view-cms-carousel");
      const e = await Promise.race([
        k("product-view-delivery-note"),
        k("product-view-add-to-basket")
      ]);
      if (!e) return;
      const o = window.autoInitData.website.defaultCountry === "GB" ? "colour set" : "color set", t = ((u = window == null ? void 0 : window.product) == null ? void 0 : u.item_category3) || "", s = this.bundleData.map(
        ({ product: a }) => a != null && a.name && (a != null && a.url) ? `<a href="${a.url}" target="_blank" class="bundle-link" data-name="${a.name}">${a.name}</a>` : null
      ).filter(Boolean), i = s.length ? `Match your item with ${s.join(" and ")}` : "", l = (
        /* HTML */
        `<div class="bundle-container">
      <div class="bundle-container-title">
        Complete your <span id="bundle-color">${t}</span><br />
        ${o}
      </div>
      <div class="bundle-items-wrapper"></div>
      <div class="bundle-container-footer">${i}</div>
    </div>`
      );
      document.querySelector(".bundle-container") && ((p = document.querySelector(".bundle-container")) == null || p.remove()), e.insertAdjacentHTML("afterend", l), $(".bundle-container", "exp_cross_sell_visibility_01", "Visibility", `Complete your ${t} color set`), document.querySelector(".bundle-items-wrapper");
      for (const [a, { product: h, sizes: b, bundle: g }] of this.bundleData.entries()) {
        const m = new z({
          product: h,
          sizes: b,
          cartInstance: this.cartInstance,
          containerSelector: ".bundle-items-wrapper",
          position: "beforeend",
          aborters: this.aborters
        });
        this.bundleItems.push(m);
      }
      document.querySelectorAll(".bundle-container-footer .bundle-link").forEach((a) => {
        a.addEventListener("mousedown", (h) => {
          var b;
          I(
            "exp_cross_sell_click_04",
            a.textContent || "",
            "click",
            ((b = this.bundleData.find((g) => g.product.name === a.textContent)) == null ? void 0 : b.product.name) || ""
          );
        });
      });
    }
    dispose() {
      if (this.disposed) return;
      this.disposed = !0, this.bundleItems.forEach((n) => n.dispose()), this.bundleItems = [];
      const e = document.querySelector(".bundle-container");
      e && e.remove();
    }
    addStyles() {
      const e = document.createElement("style");
      e.innerHTML = U, document.head.appendChild(e);
    }
  }
  class J {
    constructor(e, n, o) {
      this.bundleData = [], this.bundleContainer = null, this.pinsBundle = null, this.cartInstance = n, this.aborters = o, this.init(e);
    }
    async init(e) {
      this.bundleData = await Promise.all(
        e.map(async (n) => {
          const [o, t] = await Promise.all([
            _(n.path || "").then((s) => s.data),
            j().then((s) => s.data)
          ]);
          return { product: o, sizes: t, bundle: n };
        })
      ), this.bundleContainer = new Y(
        this.bundleData,
        this.cartInstance,
        this.aborters
      );
    }
    dispose() {
      var e, n;
      (e = this.bundleContainer) == null || e.dispose(), this.bundleContainer = null, (n = this.pinsBundle) == null || n.dispose(), this.pinsBundle = null;
    }
  }
  const K = `.cart-product-quantity {
  display: flex;
  gap: 8px;
  align-items: center;
}

.quantity-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 69px;
  height: 34px;
  border: 1px solid #cfd2d3;
}

.quantity-wrapper button {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 34px;
}

.quantity-wrapper input {
  text-align: center;
  pointer-events: none;
}


.cart-product-remove {
  font-size: 11px;
  text-decoration: underline;
}`;
  class Q {
    constructor(e) {
      var n, o, t, s;
      this.eventsAborters = [], this.items = [], this.initialCartButtonClick = !0, this.currencySymbol = // @ts-ignore
      (s = (t = (o = (n = window == null ? void 0 : window.autoInitData) == null ? void 0 : n.website) == null ? void 0 : o.currency) == null ? void 0 : t.list) == null ? void 0 : s[0].symbol, this.eventsAborters = e, this.init();
    }
    init() {
      this.addStyles(), this.handleCartButtonClick();
    }
    async addItemToCart(e) {
      if (!this.items.some(
        (t) => t.id === e.id && t.size === e.size && t.color === e.color
      ))
        this.items.push(e);
      else {
        const t = this.items.find(
          (s) => s.id === e.id && s.size === e.size && s.color === e.color
        );
        t && (t.qty = e.qty, t.price = (parseFloat(t.price) + parseFloat(e.price)).toFixed(2));
      }
      const o = document.querySelector(
        "button:has(basket-qty)"
      );
      o && (o._programmaticClick = !0, o.click(), setTimeout(() => {
        delete o._programmaticClick;
      }, 0), this.initialCartButtonClick = !1), this.renderAllItems();
    }
    async renderAllItems() {
      if (!await k("modal-right-container minibasket")) {
        console.error("Container for rendering items not found");
        return;
      }
      this.items.forEach((o) => {
        this.renderSingleItem(o);
      });
    }
    async renderSingleItem(e) {
      const o = window.autoInitData.website.defaultCountry === "GB" ? "Colour" : "Color", t = (
        /* HTML */
        `
      <li
        _ngcontent-ng-c3846260435
        cy-minibasketitem
        class="ng-star-inserted"
        id="cart-product-${e.id}"
        data-cart-id="${e.productCartId}"
      >
        <minibasket-item
          _ngcontent-ng-c3846260435
          class="w-12"
          _nghost-ng-c2131613575
          ><div _ngcontent-ng-c2131613575>
            <div _ngcontent-ng-c2131613575 class="flex p-b p-t">
              <div _ngcontent-ng-c2131613575 class="w-6 minibasket-item-image">
                <a
                  _ngcontent-ng-c2131613575
                  class="w-12 ratio-3-4"
                  href="${e.link}"
                  ><img
                    _ngcontent-ng-c2131613575
                    class="rf df-image"
                    loading="lazy"
                    src="${e.image}"
                    alt
                /></a>
              </div>
              <div _ngcontent-ng-c2131613575 class="w-9 p-l">
                <div
                  _ngcontent-ng-c2131613575
                  class="flex flex-justify-between"
                >
                  <div _ngcontent-ng-c2131613575 class="left w-6">
                    <a
                      _ngcontent-ng-c2131613575
                      class="p1"
                      sl-minibasket-item-name="10731869"
                      href="${e.link}"
                      >${e.title} ${e.size}</a
                    >
                    <div
                      _ngcontent-ng-c2131613575
                      class="m-t-3 c1 col-11 ng-star-inserted"
                    >
                      <span _ngcontent-ng-c2131613575 class="ng-star-inserted">
                        Size: ${e.size}
                        <span
                          _ngcontent-ng-c2131613575
                          class="ng-star-inserted"
                        >
                          |
                        </span></span
                      ><span _ngcontent-ng-c2131613575 class="ng-star-inserted">
                        ${o}: ${e.color}
                      </span>
                    </div>
                  </div>
                  <div
                    _ngcontent-ng-c2131613575
                    class="w-4 p1 flex flex-justify-end flex-column-s"
                  >
                    <price
                      _ngcontent-ng-c2131613575
                      precision="2"
                      class="block price"
                      _nghost-ng-c136849178
                      sl-minibasket-item-price="10731869"
                    >
                      ${this.currencySymbol}<span class="cart-product-price"
                        >${e.price}</span
                      ></price
                    >
                  </div>
                </div>

                <div
                  _ngcontent-ng-c2131613575
                  class="flex flex-middle m-t-2 ng-star-inserted"
                >
                  <div class="cart-product-quantity">
                    <div class="quantity-wrapper">
                      <button class="quantity-button minus">
                        <i class="icon-minus fs-2"></i>
                      </button>
                      <input
                        type="number"
                        class="quantity-input no-spinner center p2 ng-untouched ng-pristine"
                        value="${e.qty}"
                        min="1"
                        max="99"
                        disabled
                      />
                      <button class="quantity-button plus">
                        <i class="icon-plus fs-2"></i>
                      </button>
                    </div>
                    <button class="cart-product-remove">Remove</button>
                  </div>
                </div>

                <div
                  _ngcontent-ng-c2131613575
                  class="w-12 flex flex-middle left flex-wrap"
                >
                  <div _ngcontent-ng-c2131613575 class="w-5 w-12-s"></div>
                  <div _ngcontent-ng-c2131613575 class="w-7 w-12-s">
                    <result
                      _ngcontent-ng-c2131613575
                      class="block p-t-3 col-2 c1 hidden"
                      style="overflow-wrap: break-word;"
                      ><div class="s2 m-t-1"></div
                    ></result>
                  </div>
                </div>
              </div>
            </div></div
        ></minibasket-item>
      </li>
    `
      ), s = document.querySelector(
        "modal-right-container minibasket p[cy-basketempty]"
      );
      if (s) {
        const i = s.closest(".custom-scrollbar");
        i && (i.innerHTML = /* HTML */
        `<div
          class="p-r-5 p-l-5 ng-star-inserted"
        >
          <ul cy-minibasketlist>
            ${t}
          </ul>
        </div>`), this.addCheckoutButton();
      } else {
        const i = document.querySelector(
          "minibasket ul[cy-minibasketlist]"
        );
        i && i.insertAdjacentHTML("beforeend", t);
      }
      this.addItemEventListeners(e.productCartId);
    }
    handleCartButtonClick() {
      const e = document.querySelector(
        "button:has(basket-qty)"
      );
      e && (e == null || e.addEventListener("click", async (n) => {
        e._programmaticClick || this.initialCartButtonClick || (this.eventsAborters.forEach((o) => {
          o.abort();
        }), this.eventsAborters = [], this.renderAllItems());
      }));
    }
    async addItemEventListeners(e) {
      const n = await k(
        `[data-cart-id="${e}"]`
      ), o = this.items.find(
        (a) => a.productCartId === e
      );
      if (!o || !n) return;
      const t = n == null ? void 0 : n.querySelector(".quantity-button.minus"), s = n == null ? void 0 : n.querySelector(".quantity-button.plus"), i = n == null ? void 0 : n.querySelector(".quantity-input"), l = n == null ? void 0 : n.querySelector(".cart-product-remove"), r = n == null ? void 0 : n.querySelector(".cart-product-price"), u = this.debounce(
        async (a, h) => {
          const { data: b, error: g } = await H({ id: a, qty: h }), m = b == null ? void 0 : b.cart;
          if (m) {
            const y = m == null ? void 0 : m.totals.grand_total;
            if (y) {
              const w = document == null ? void 0 : document.querySelector(
                "basket-view-totals price"
              );
              w && (w.innerHTML = `${this.currencySymbol}${y}`);
            }
          }
        },
        300
      );
      if (!n || !i) return;
      const p = new AbortController();
      this.eventsAborters.push(p), t && t.addEventListener("click", () => {
        const h = parseInt(i.value) - 1;
        if (s == null || s.removeAttribute("disabled"), h < 1) {
          i.value = "1", t.setAttribute("disabled", "true");
          return;
        }
        i.value = h.toString(), r && (r.textContent = (+o.price * h).toFixed(2)), u(+e, h);
      }), s && s.addEventListener("click", () => {
        const h = parseFloat(i.value) + 1;
        t == null || t.removeAttribute("disabled"), i.value = h.toString(), r && (r.textContent = (+o.price * h).toFixed(2)), u(+e, h);
      }), l && l.addEventListener("click", async () => {
        const a = l.closest("li");
        a && (await q([+e]), a.remove());
      });
    }
    debounce(e, n) {
      let o = null;
      return (...t) => {
        o && clearTimeout(o), o = setTimeout(() => e(...t), n);
      };
    }
    addCheckoutButton() {
      const e = (
        /* HTML */
        `<div
      _ngcontent-ng-c2384942596
      class="w-12 pos-relative z-1 box-shadow-1 crs"
    >
      <div
        _ngcontent-ng-c3846260435
        cy-minibaskettotal
        class="p-r-5 p-l-5 ng-star-inserted"
      >
        <basket-view-totals _ngcontent-ng-c3846260435 class="block"
          ><div
            class="flex flex-justify-between s1 col-1 m-t-3 p-t-3 ng-star-inserted"
          >
            <label> Total </label>
            <div>
              <price class="price" _nghost-ng-c136849178
                >${this.currencySymbol}${this.items[0].price}</price
              >
            </div>
          </div>
        </basket-view-totals>
        <div _ngcontent-ng-c3846260435 class="c-12-set m-r-0 p-l-1 m-t p-t-2">
          <a
            _ngcontent-ng-c3846260435
            routerlink="/basket"
            sl-minibasket-button="basket"
            cy-basketminibasket
            class="w-12 p-r-0 p-l-0 button"
            href="/us/basket"
            ><span _ngcontent-ng-c3846260435 class="p1 col-w"
              >Checkout securely</span
            ></a
          >
        </div>
        <payments-methods-logos-block
          _ngcontent-ng-c3846260435
          class="p-b-8 m-l-1"
          _nghost-ng-c2301870735
          ><p
            _ngcontent-ng-c2301870735
            class="p2 col-13 m-r-2 no-wrap p-t-1 ng-star-inserted"
          >
            Pay with
          </p>
          <div
            _ngcontent-ng-c2301870735
            class="flex flex-wrap ng-star-inserted"
          >
            <div
              _ngcontent-ng-c2301870735
              class="payment-method-logo m-r-2 payment-method-logo--visa ng-star-inserted"
            ></div>
            <div
              _ngcontent-ng-c2301870735
              class="payment-method-logo m-r-2 payment-method-logo--mastercard ng-star-inserted"
            ></div>
            <div
              _ngcontent-ng-c2301870735
              class="payment-method-logo m-r-2 payment-method-logo--maestro ng-star-inserted"
            ></div>
            <div
              _ngcontent-ng-c2301870735
              class="payment-method-logo m-r-2 payment-method-logo--apple ng-star-inserted"
            ></div>
            <div
              _ngcontent-ng-c2301870735
              class="payment-method-logo m-r-2 payment-method-logo--amex ng-star-inserted"
            ></div>
            <div
              _ngcontent-ng-c2301870735
              class="payment-method-logo m-r-2 payment-method-logo--google ng-star-inserted"
            ></div>
            <div
              _ngcontent-ng-c2301870735
              class="payment-method-logo m-r-2 payment-method-logo--paypal ng-star-inserted"
            ></div>
          </div>
        </payments-methods-logos-block>
      </div>
    </div> `
      ), n = document.querySelector(
        "minibasket modal-layout-right > div > div"
      );
      n && n.insertAdjacentHTML("beforeend", e);
    }
    addStyles() {
      const e = document.createElement("style");
      e.innerHTML = K, document.head.appendChild(e);
    }
  }
  T({
    name: "Adding bundle options based on color to the product detail page (PDP) and cart",
    dev: "OS"
  }), function(c, e, n, o, t, s) {
    c.hj = c.hj || function() {
      (c.hj.q = c.hj.q || []).push(arguments);
    }, c._hjSettings = { hjid: 2667925, hjsv: 6 }, t = e.getElementsByTagName("head")[0], s = e.createElement("script"), s.async = !0, s.src = n + c._hjSettings.hjid + o + c._hjSettings.hjsv, t && t.appendChild(s);
  }(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_cross_sell");
  const X = ["GB", "US", "IE", "AU", "NZ", "ZA", "CA"];
  function Z(c) {
    const e = C.find((n) => c.includes(n.path));
    return e ? C.filter(
      (n) => n.bundleGroupId === e.bundleGroupId && !c.includes(n.path)
    ) : [];
  }
  class ee {
    constructor() {
      this.aborters = [], this.bundleWrapper = null, this.aborters = [], this.bundleWrapper = null, this.init();
    }
    async init() {
      this.pageChangeHandler(async () => {
        this.aborters.forEach((e) => e.abort()), this.aborters = [], this.bundleWrapper && (this.bundleWrapper.dispose(), this.bundleWrapper = null), await k("html.content-initiated-root"), await this.initChangesOnPDP();
      }), await k("html.content-initiated-root"), this.initChangesOnPDP();
    }
    async initChangesOnPDP() {
      var n;
      if (await this.checkIsProductPage()) {
        const { url: o, ...t } = await this.waitForProduct(), s = this.checkCountry();
        if (!X.includes(s)) {
          console.error("Not an English country, exiting...");
          return;
        }
        const i = o.replace(/^https?:\/\/(www\.)?lemieux\.com/, "").replace(/#.*/, ""), l = Z(i);
        if (l.length > 0) {
          const r = new Q(this.aborters);
          this.bundleWrapper = new J(
            l,
            r,
            this.aborters
          );
        } else
          (n = this.bundleWrapper) == null || n.dispose(), this.bundleWrapper = null;
      } else this.bundleWrapper && (this.bundleWrapper.dispose(), this.bundleWrapper = null);
    }
    checkCountry() {
      const e = window.autoInitData.website.websiteCode;
      return e === "base" ? "GB" : e.toUpperCase();
    }
    async checkIsProductPage(e = 5e3) {
      try {
        return !!await Promise.race([
          k("product-view-layout"),
          new Promise(
            (o, t) => setTimeout(() => t("timeout"), e)
          )
        ]);
      } catch {
        return console.error("Not a product page or timeout occurred"), !1;
      }
    }
    waitForProduct(e = 5e4) {
      return new Promise((n, o) => {
        window != null && window.product && setTimeout(() => n(window.product), 100);
        const t = setInterval(() => {
          window.product && (clearInterval(t), clearTimeout(s), n(window.product));
        }, 200), s = setTimeout(() => {
          clearInterval(t), o(new Error("Timeout waiting for window.product"));
        }, e);
      });
    }
    pageChangeHandler(e) {
      let n = window.location.pathname;
      new MutationObserver((t) => {
        t.forEach((s) => {
          n !== window.location.pathname && (e(), n = window.location.pathname);
        });
      }).observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
  }
  window.__exp_lemieux_bundles_launched || (window.__exp_lemieux_bundles_launched = !0, new ee());
})();
