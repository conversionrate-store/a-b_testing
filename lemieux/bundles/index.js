(function() {
  "use strict";
  const S = (c, e, n, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: c,
      event_desc: e,
      event_type: n,
      event_loc: t
    }), console.log(`Event: ${c} | ${e} | ${n} | ${t}`);
  }, A = ({ name: c, dev: e }) => {
    console.log(
      `%c EXP: ${c} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  function w(c) {
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
  const F = (c, e, n, t) => {
    let o = [];
    o = document.querySelectorAll(c);
    let i = new IntersectionObserver(
      (a) => {
        a.forEach((l) => {
          l.isIntersecting && (i.unobserve(l.target), setTimeout(function() {
            s.observe(l.target);
          }, 1e3));
        });
      },
      {
        threshold: 0.2
      }
    ), s = new IntersectionObserver((a) => {
      a.forEach((l) => {
        l.isIntersecting ? (S(e, n, "view", t || l.target.id), i.unobserve(l.target)) : i.observe(l.target), s.unobserve(l.target);
      });
    });
    o.forEach((a) => {
      i.observe(a);
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
    }
  ], E = window.autoInitData.website.websiteCode, x = async (c, e) => {
    const n = E === "base" ? c : `/${E.toLowerCase()}${c}`;
    try {
      const t = await fetch(n, e);
      if (!t.ok)
        throw new Error(t.statusText);
      const o = await t.json();
      if (o.error)
        throw new Error(o.error);
      const { catalog: i, result: s, customer: a } = o;
      if (i) {
        const l = i[0];
        if (l)
          return {
            data: l,
            error: null
          };
      }
      if (s && s.length > 0) {
        const l = s[0];
        return l != null && l.product ? {
          data: l.product,
          error: null
        } : s.length === 1 ? {
          data: s[0],
          error: null
        } : {
          data: s,
          error: null
        };
      }
      return a ? {
        data: a,
        error: null
      } : {
        data: null,
        error: new Error("No data found")
      };
    } catch (t) {
      return console.error("request error", t), { data: null, error: t };
    }
  }, P = (c) => x(`/api/n/route/${c}?pushDeps=true`), O = (c) => x(
    `/api/n/find?type=block&filter={"url":"size-guide-modal@${c}"}&verbosity=3&limit=1`
  ), D = (c) => x("/api/p/basket/add", {
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
  }), B = (c) => x("/api/p/basket/remove", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ids: c
    })
  }), _ = ({ id: c, qty: e }) => x("/api/p/basket/qty", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: c,
      qty: e
    })
  }), $ = () => x("/api/n/attribute/size/verbosity/3"), M = (c) => x(
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
  class N {
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
      var t, o;
      const e = (t = this.dialog) == null ? void 0 : t.querySelector(".cart-popup-close");
      e && e.addEventListener("click", () => {
        this.close();
      });
      const n = (o = this.dialog) == null ? void 0 : o.querySelector(".cart-popup-content");
      n && n.addEventListener("click", (i) => {
        const s = i.target;
        if (s.classList.contains("remove")) {
          const a = s.closest(".cart-product");
          a && a.remove();
        }
      });
    }
    open({
      productId: e,
      productCartId: n,
      color: t,
      size: o,
      title: i,
      price: s,
      image: a,
      link: l,
      qty: u
    }) {
      var b, f, g, d, m, y;
      const p = (b = this.dialog) == null ? void 0 : b.querySelector(".cart-popup-content");
      if (!p) return;
      const r = (
        // @ts-ignore
        ((m = (d = (g = (f = window == null ? void 0 : window.autoInitData) == null ? void 0 : f.website) == null ? void 0 : g.currency) == null ? void 0 : d.list) == null ? void 0 : m[0].symbol) || "$"
      ), h = (
        /* HTML */
        ` <div
      class="cart-product"
      data-id="${e}"
      cart-id="${n}"
    >
      <div class="cart-product-image">
        <img src="${a}" alt="" width="84" height="113" />
      </div>
      <div class="cart-product-content">
        <div class="cart-product-header">
          <div class="cart-product-title">${i}</div>
          <div class="cart-product-price">
            ${r}<span>${s}</span>
          </div>
        </div>
        <div class="cart-product-options">
          <div class="cart-product-size">${o}</div>
          <div class="cart-product-color">| ${t}</div>
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
      p.innerHTML = h, this.productEvents(n), (y = this.dialog) == null || y.showModal();
    }
    debounce(e, n) {
      let t = null;
      return (...o) => {
        t && clearTimeout(t), t = setTimeout(() => e(...o), n);
      };
    }
    productEvents(e) {
      const n = document.querySelector(
        `.cart-product[cart-id="${e}"]`
      ), t = n == null ? void 0 : n.querySelector(".minus"), o = n == null ? void 0 : n.querySelector(".plus"), i = n == null ? void 0 : n.querySelector(".quantity-input"), s = n == null ? void 0 : n.querySelector(".remove"), a = n == null ? void 0 : n.querySelector(".favorite"), l = this.debounce(async (u, p) => {
        var f;
        const { data: r, error: h } = await _({ id: u, qty: p }), b = r == null ? void 0 : r.cart;
        if (b) {
          const g = (f = b == null ? void 0 : b.items.find(
            (d) => d.id === u
          )) == null ? void 0 : f.rowPrice;
          if (g) {
            const d = n == null ? void 0 : n.querySelector(
              ".cart-product-price span"
            );
            d && (d.innerHTML = `${g}`);
          }
        }
      }, 300);
      !n || !i || (t && t.addEventListener("click", () => {
        const p = parseInt(i.value) - 1;
        if (o == null || o.removeAttribute("disabled"), p < 1) {
          i.value = "1", t.setAttribute("disabled", "true");
          return;
        }
        i.value = p.toString(), l(+e, p);
      }), o && o.addEventListener("click", () => {
        const p = parseInt(i.value) + 1;
        t == null || t.removeAttribute("disabled"), i.value = p.toString(), l(+e, p);
      }), s && s.addEventListener("click", async () => {
        const u = s.closest(".cart-product");
        u && (await B([+e]), u.remove(), this.close());
      }), a && a.addEventListener("click", () => {
        const u = a.closest(".cart-product");
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
  const V = `.size-popup-table {
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
  class U {
    constructor(e) {
      this.tables = e, this.addStyles();
    }
    renderTables() {
      return this.tables.map((e) => {
        const n = e.rows[0].columns.map((i) => `<th>${i.valueFirst}</th>`).join(""), t = e.rows.slice(1).map(
          (i) => `<tr class="cm-unit">${i.columns.map((s) => `<td>${s.valueFirst}</td>`).join("")}</tr>`
        ).join(""), o = e.rows.slice(1).map(
          (i) => `<tr class="inches-unit" style="display: none;">${i.columns.map((s) => `<td>${s.valueSecond}</td>`).join("")}</tr>`
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
                ${t} ${o}
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
      e.querySelectorAll(".unit-toggle").forEach((t) => {
        t.addEventListener("change", (o) => {
          const i = o.target.checked, s = t.closest(
            ".size-popup-table-wrapper"
          );
          if (!s) return;
          const a = s.querySelectorAll(".cm-unit"), l = s.querySelectorAll(".inches-unit"), u = s.querySelector(".switch-label-cm"), p = s.querySelector(".switch-label-inches");
          u && u.classList.toggle("active", !i), p && p.classList.toggle("active", i), i ? (a.forEach((r) => r.style.display = "none"), l.forEach((r) => r.style.display = "")) : (a.forEach((r) => r.style.display = ""), l.forEach((r) => r.style.display = "none"));
        });
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.innerHTML = V, document.head.appendChild(e);
    }
  }
  const W = `.size-popup {
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
  class Y {
    constructor({
      sizeGuideId: e,
      triggerSelector: n,
      productName: t
    }) {
      this.sizeGuideId = e, this.triggerSelector = n, this.productName = t, this.init();
    }
    init() {
      this.addStyles(), this.render(), this.eventListeners();
    }
    async getSizeGuide() {
      const { data: e, error: n } = await O(this.sizeGuideId);
      if (n) {
        console.error("Error fetching size guide", n.message);
        return;
      }
      return e;
    }
    async render() {
      const e = await this.getSizeGuide();
      if (!e) return;
      const { title: n, subtitle: t, image: o, copy: i, tables: s } = e.content, a = document.querySelector(
        `size-popup-${this.sizeGuideId}`
      );
      a && a.remove();
      const l = new U(s), u = l.renderTables(), p = o.startsWith("/") ? `https://www.lemieux.com/static${o}` : `https://www.lemieux.com/static/${o}`, r = (
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
          ${t ? `<h3 class="size-popup-subtitle">${t}</h3>` : ""}

          <div class="size-popup-table">${u}</div>
          <div class="size-popup-image">
            <img src="${p}" alt="Size Guide Image" />
          </div>
          <p class="size-popup-copy">${i}</p>
        </div>
      </dialog>
    `
      );
      document.body.insertAdjacentHTML("beforeend", r);
      const h = document.querySelector(
        `#size-popup-${this.sizeGuideId}`
      );
      h.querySelector(
        ".size-popup-close"
      ).addEventListener("click", () => h.close()), l.addUnitToggleListeners(h);
    }
    eventListeners() {
      const e = document.querySelector(this.triggerSelector);
      e && e.addEventListener("click", () => {
        S(
          "exp_cross_sell_click_01",
          "View size guide",
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
      e.innerHTML = W, document.head.appendChild(e);
    }
  }
  const J = `.bundle {
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
`, I = class I {
    constructor({
      product: e,
      sizes: n,
      containerSelector: t,
      cartInstance: o,
      position: i = "beforeend",
      aborters: s
    }) {
      this.eventRemovers = [], this.disposed = !1, this.bundleButtonHandler = null, this.isInitialized = !1, this.product = e, this.sizes = n, this.containerSelector = t, this.position = i, this.bundle = null, this.size = null, this.color = null, this.device = window.innerWidth <= 1100 ? "mobile" : "desktop", this.basketPopup = new N(), this.cart = o, this.aborters = s, I.bundleCounter += 1, this.bundleId = `product-${e.id}-${I.bundleCounter}`, this.init();
    }
    init() {
      this.addStyles(), this.render(), this.isInitialized || (this.handleSizeSelectOpen(), this.handleSizeSelection(), this.isInitialized = !0);
    }
    async render() {
      var r, h, b, f, g;
      const e = this.product, n = this.sizes;
      this.color = this.getHashParam("selection.color");
      const t = e.size, o = n.options.filter((d) => t.includes(d.value)).map((d) => ({
        size: d,
        productId: this.getProductIdBySizeAndColor(
          e,
          d.value,
          this.color
        )
      })).filter((d) => d.productId), i = o.map((d) => d.productId), { data: s, error: a } = await M(i);
      if (a) {
        console.error("Error fetching stock data:", a);
        return;
      }
      const l = o.map((d) => {
        const m = s.find((y) => y.id === d.productId);
        return m ? {
          id: d.productId,
          size: d.size,
          stock: {
            isSoldOut: !!(m != null && m.isOut && (m != null && m.isOutTemp)),
            qty: (m == null ? void 0 : m.qty) || 0
          }
        } : null;
      }).filter(Boolean), u = (
        // @ts-ignore
        (f = (b = (h = (r = window == null ? void 0 : window.autoInitData) == null ? void 0 : r.website) == null ? void 0 : h.currency) == null ? void 0 : b.list) == null ? void 0 : f[0].symbol
      ), p = (
        /* HTML */
        `<div class="bundle" id="${this.bundleId}">
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
                <span class="p2 p-l-2">(${(g = e == null ? void 0 : e.reviews) == null ? void 0 : g.count})</span>
              </div>
            </div>
          </div>
        </div>
        <div class="bundle-content">
          <a href="${e.url}" class="bundle-title">${e.name}</a>
          <div class="bundle-price-size">
            <div class="bundle-price">${u}${e.price}</div>
            <div class="bundle-size">
              ${e != null && e.size_guide ? (
          /* HTML */
          "<button>View size guide</button>"
        ) : ""}
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
                    data-chosen-value="empty"
                    data-chosen-label="empty"
                  >
                    Select Size
                  </p>
                </div>
                <i class="icon-chevron inline-flex _chevron _is-up"></i>
              </div>
              <div class="ng-star-inserted " style="--hide-up-height: 90px;">
                <div class="_content flex flex-column flex-justify-end">
                  <div>
                    <div class="bundle-size-options bg-col-w">
                      ${l.map((d) => (
          /* HTML */
          `<div
                            class="p-r p-l bundle-size-item"
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
                              ${d.stock.isSoldOut ? (
            /* HTML */
            `<span class="bundle-size-sold"
                                    >SOLD OUT</span
                                  >`
          ) : ""}
                            </div>
                          </div>`
        )).join("")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="bundle-button">Add</button>
        </div>
      </div>
    </div> `
      );
      if (this.containerSelector) {
        const d = document.querySelector(
          this.containerSelector
        );
        this.removeExistingBundle(), d.insertAdjacentHTML(this.position, p), this.bundle = document.getElementById(this.bundleId), e != null && e.size_guide && new Y({
          productName: e.name,
          sizeGuideId: e.size_guide,
          triggerSelector: `#${this.bundleId} .bundle-size button`
        }), this.attachBundleButtonHandler();
      }
    }
    attachBundleButtonHandler() {
      if (!this.bundle) return;
      const e = this.bundle.querySelector(".bundle-button");
      e && (this.bundleButtonHandler && e.removeEventListener("click", this.bundleButtonHandler), this.bundleButtonHandler = async () => {
        var a, l, u, p, r, h, b, f, g;
        if (S(
          "exp_cross_sell_click_03",
          "Add",
          "click",
          `${this.product.name}`
        ), !this.size) {
          const d = (a = this.bundle) == null ? void 0 : a.querySelector(
            "#size-select"
          );
          d == null || d.classList.add("hide-up");
          return;
        }
        if (!this.color) {
          console.error("Color must be selected");
          return;
        }
        const n = this.getProductIdBySizeAndColor(
          this.product,
          this.size,
          this.color
        );
        if (!n) {
          console.error("Product not found");
          return;
        }
        const t = (l = this.bundle) == null ? void 0 : l.querySelector(
          ".bundle-size-selected"
        ), o = document.getElementById(
          "bundle-color"
        ), i = (u = document.querySelector("a")) == null ? void 0 : u.getAttribute("href"), s = (r = (p = this.bundle) == null ? void 0 : p.querySelector("img")) == null ? void 0 : r.getAttribute("src");
        try {
          const { data: d, error: m } = await D(n);
          if (m)
            throw new Error(m.message);
          const y = d == null ? void 0 : d.cart, re = y == null ? void 0 : y.items, T = (h = y == null ? void 0 : y.items.find((v) => v.product === n)) == null ? void 0 : h.request.qty, H = (b = y == null ? void 0 : y.items.find(
            (v) => v.product === n
          )) == null ? void 0 : b.rowPrice, le = y.items.reduce((v, ae) => v + ae.rowPrice, 0).toFixed(2), j = (f = y == null ? void 0 : y.items.find(
            (v) => v.product === n
          )) == null ? void 0 : f.id;
          if (this.device === "desktop" && this.cart.addItemToCart({
            id: n.toString(),
            productCartId: j,
            title: this.product.name,
            size: t.dataset.chosenLabel || "",
            color: o.textContent || "",
            price: H,
            image: s || "",
            link: i || "",
            qty: T
          }), window.innerWidth <= 700) {
            this.basketPopup.open({
              productId: n,
              productCartId: j,
              color: o.textContent || "",
              size: t.dataset.chosenLabel || "",
              title: this.product.name,
              price: H,
              image: s || "",
              link: i || "",
              qty: T
            });
            const v = (g = this.bundle) == null ? void 0 : g.closest(
              "#pins-bundle-mobile-popup"
            );
            v && (v.close(), v.remove());
          }
        } catch (d) {
          console.error("Error adding to basket", d);
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
      const e = await this.waitForBundle(), n = e == null ? void 0 : e.querySelector("#size-select"), t = n.querySelector(
        ".bundle-size-selected"
      ), o = n.querySelector(
        ".bundle-size-options"
      );
      if (!t || !o || !t) return;
      const i = (s) => {
        var r;
        const l = s.target.closest(".bundle-size-item");
        if (!l || l.dataset.soldout === "true") return;
        const u = l.dataset.sizeId, p = (r = l.querySelector(".s2")) == null ? void 0 : r.textContent;
        !u || !p || (t.textContent = p, t.dataset.chosenValue = u, t.dataset.chosenLabel = p, this.size = u, n == null || n.classList.remove("hide-up"));
      };
      n.addEventListener("click", i), this.eventRemovers.push(
        () => n.removeEventListener("click", i)
      );
    }
    getHashParam(e) {
      if (!location.hash) return null;
      const t = location.hash.substring(1).split("&");
      for (const o of t) {
        const [i, s] = o.split("=");
        if (i === e)
          return s;
      }
      return null;
    }
    async handleSizeSelectOpen() {
      const e = await this.waitForBundle(), n = e == null ? void 0 : e.querySelector("#size-select"), t = n.querySelector(".bundle-size-selected"), o = n.querySelector(
        ".bundle-size-options"
      );
      if (!t || !o) return;
      const i = (s) => {
        n.classList.contains("hide-up") || S(
          "exp_cross_sell_click_03",
          "Select size",
          "click",
          `${this.product.name}`
        ), n.dataset.soldout !== "true" && (n == null || n.classList.toggle("hide-up"));
      };
      n.addEventListener("click", i), this.eventRemovers.push(
        () => n.removeEventListener("click", i)
      );
    }
    getProductIdBySizeAndColor(e, n, t) {
      var a, l, u, p;
      if (!((l = (a = e == null ? void 0 : e.options) == null ? void 0 : a.configurable) != null && l.size) || !((p = (u = e == null ? void 0 : e.options) == null ? void 0 : u.configurable) != null && p.color))
        return console.error("Product options structure is invalid"), null;
      const o = e.options.configurable.size[n], i = e.options.configurable.color[t];
      if (!o || !i)
        return console.error("Size or color not found in product options"), null;
      const s = o.filter(
        (r) => i.includes(r)
      );
      return s.length === 0 ? (console.warn("No product found with this size and color combination"), null) : (s.length > 1 && console.warn(
        "Multiple products found with this size and color combination, returning first one"
      ), s[0]);
    }
    waitForBundle(e = 5e4) {
      return new Promise((n, t) => {
        if (this.bundle)
          return n(this.bundle);
        const o = setInterval(() => {
          this.bundle && (clearInterval(o), clearTimeout(i), n(this.bundle));
        }, 200), i = setTimeout(() => {
          clearInterval(o), t(new Error("Timeout waiting for window.product"));
        }, e);
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.innerHTML = J, document.head.appendChild(e);
    }
    dispose() {
      this.disposed || (this.disposed = !0, this.eventRemovers.forEach((e) => e()), this.eventRemovers = [], this.bundle && this.bundle.parentElement && this.bundle.parentElement.removeChild(this.bundle), this.bundle = null);
    }
  };
  I.bundleCounter = 0;
  let k = I;
  const Q = `.bundle-container {
  margin-top: 28px;
  padding: 24px 16px;
  background: #f3f3f3;
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
  class X {
    constructor(e, n, t) {
      this.aborters = [], this.bundleItems = [], this.disposed = !1, this.bundleData = e, this.cartInstance = n, this.aborters = t, this.init();
    }
    async init() {
      this.addStyles(), await this.render();
    }
    async render() {
      var u, p;
      await w("product-view-cms-carousel");
      const e = await Promise.race([
        w("product-view-delivery-note"),
        w("product-view-add-to-basket")
      ]);
      if (!e) return;
      const t = window.autoInitData.website.defaultCountry === "GB" ? "colour set" : "color set", o = ((u = window == null ? void 0 : window.product) == null ? void 0 : u.item_category3) || "", i = this.bundleData.map(
        ({ product: r }) => r != null && r.name && (r != null && r.url) ? `<a href="${r.url}" target="_blank" class="bundle-link" data-name="${r.name}">${r.name}</a>` : null
      ).filter(Boolean), s = i.length ? `Match your item with ${i.join(" and ")}` : "", a = (
        /* HTML */
        `<div class="bundle-container">
      <div class="bundle-container-title">
        Complete your <span id="bundle-color">${o}</span><br />
        ${t}
      </div>
      <div class="bundle-items-wrapper"></div>
      <div class="bundle-container-footer">${s}</div>
    </div>`
      );
      document.querySelector(".bundle-container") && ((p = document.querySelector(".bundle-container")) == null || p.remove()), e.insertAdjacentHTML("afterend", a), F(".bundle-container", "exp_cross_sell_visibility_01", "Visibility", `Complete your ${o} color set`), document.querySelector(".bundle-items-wrapper");
      for (const [r, { product: h, sizes: b, bundle: f }] of this.bundleData.entries()) {
        const g = new k({
          product: h,
          sizes: b,
          cartInstance: this.cartInstance,
          containerSelector: ".bundle-items-wrapper",
          position: "beforeend",
          aborters: this.aborters
        });
        this.bundleItems.push(g);
      }
      document.querySelectorAll(".bundle-container-footer .bundle-link").forEach((r) => {
        r.addEventListener("mousedown", (h) => {
          var b;
          S(
            "exp_cross_sell_click_04",
            r.textContent || "",
            "click",
            ((b = this.bundleData.find((f) => f.product.name === r.textContent)) == null ? void 0 : b.product.name) || ""
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
      e.innerHTML = Q, document.head.appendChild(e);
    }
  }
  const Z = `/* PinsBundle styles */
.pins-bundle-pin {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.46);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: box-shadow 0.2s;
  z-index: 10;
}

.pins-bundle-pin::after {
  content: '';
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
}
/* .pins-bundle-pin:hover,
.pins-bundle-pin:focus {
  box-shadow: 0 4px 16px rgba(9, 93, 102, 0.18);
  border-color: #52a7a7;
} */
.pins-bundle-tooltip {
  min-width: 328px;
  max-width: 206px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.46);
  padding: 16px;
  pointer-events: auto;
  z-index: 1000;
}
.pins-bundle-tooltip .bundle {
  padding: 0;
}

.pins-bundle-tooltip .bundle-img {
  width: 110px;
}

.pins-bundle {
  position: relative;
}

.pins-bundle [data-pin-index] {
  position: absolute;
}

/* PINS BUNDLE */

/* CHILLI 1 */
[data-product-name='chilli-1'] [data-pin-id='4780'] {
  top: 6%;
  left: 45%;
}

[data-product-name='chilli-1'] [data-pin-id='27607'] {
  top: 14%;
  left: 66%;
}
[data-product-name='chilli-1'] [data-pin-id='7872'] {
  top: 41%;
  left: 36%;
}

[data-product-name='chilli-1'] [data-pin-id='10726'] {
  top: 16%;
  left: 45%;
}

/* BENETTON BLUE 1 */
[data-product-name='benetton-blue-1'] [data-pin-index='1'] {
  top: 17%;
  left: 68%;
}
[data-product-name='benetton-blue-1'] [data-pin-id='6529'] {
  top: 14%;
  left: 60%;
}

[data-product-name='benetton-blue-1'] [data-pin-id='10712'] {
  top: 39%;
  left: 70%;
}

[data-product-name='benetton-blue-1'] [data-pin-id='5418'] {
  top: 79%;
  left: 25%;
}

[data-product-name='benetton-blue-1'] [data-pin-id='7869'] {
  top: 24%;
  left: 29%;
}

/* NAVY 4 */
[data-product-name='navy-4'] [data-pin-id='6462'] {
  top: 27%;
  left: 32%;
}
[data-product-name='navy-4'] [data-pin-id='34525'] {
  left: 51%;
  top: 39%;
}

[data-product-name='navy-4'] [data-pin-id='4746'] {
  top: 4%;
  left: 62%;
}

[data-product-name='navy-4'] [data-pin-id='10798'] {
  top: 20%;
  left: 65%;
}

[data-product-name='navy-4'] [data-pin-id='7901'] {
  top: 39%;
  left: 67%;
}

/* ICE BLUE 4 */

[data-product-name='ice-blue-4'] [data-pin-id='10754'] {
  top: 15%;
  left: 63%;
}

[data-product-name='ice-blue-4'] [data-pin-id='26466'] {
  top: 85%;
  left: 46%;
}

[data-product-name='ice-blue-4'] [data-pin-id='4788'] {
  top: 4%;
  left: 61%;
}

[data-product-name='ice-blue-4'] [data-pin-id='7883'] {
  top: 42%;
  left: 67%;
}

/* HUNTER GREEN 1 */

[data-product-name='hunter-green-1'] [data-pin-id='7880'] {
  top: 52%;
  left: 34%;
}

[data-product-name='hunter-green-1'] [data-pin-id='4786'] {
  top: 12%;
  left: 39%;
}

[data-product-name='hunter-green-1'] [data-pin-id='6545'] {
  top: 20%;
  left: 78%;
}

[data-product-name='hunter-green-1'] [data-pin-id='10747'] {
  top: 30%;
  left: 52%;
}

/* ICE BLUE ^ */

[data-product-name='ice-blue-6'] [data-pin-id='7999'] {
  top: 34%;
  left: 37%;
}

[data-product-name='ice-blue-6'] [data-pin-id='10754'] {
  top: 12%;
  left: 52%;
}

[data-product-name='ice-blue-6'] [data-pin-id='6446'] {
  top: 35%;
  left: 67%;
}

[data-product-name='ice-blue-6'] [data-pin-id='5988'] {
  top: 76%;
  left: 67%;
}

/* POPUP */

.pins-bundle-mobile-popup {
  margin: 0;
  margin-top: auto;
  max-width: 100%;
  width: 100%;
  border: none;
  padding: 24px 16px 0;
  border-radius: 16px 16px 0px 0px;
  overflow: hidden;
}

.pins-bundle-mobile-popup__close {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  font-size: 16px;
}

.pins-bundle-mobile-popup__title {
  margin-bottom: 24px;
  color: #212121;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  line-height: 32px;
  letter-spacing: 0.5px;
}

.pins-bundle-mobile-popup__list {
  height: 550px;
  padding-right: 5px;
  overflow-y: auto;
}

.pins-bundle-mobile-popup__item:first-child .bundle {
  padding-top: 0;
}
`, z = "product-gallery .product-gallery > div", q = "product-gallery .product-gallery .swiper-slide", G = window.innerWidth < 1100, L = {
    "navy-4": G ? q + ":nth-child(2)" : z + ":first-child",
    "navy-2": G ? q + ":nth-child(2)" : z + ":first-child",
    default: G ? q + ":last-child" : z + ":last-child"
  };
  class K {
    constructor(e, n, t) {
      this.aborters = [], this.bundleItems = [], this.disposed = !1, this.tooltip = null, this.tooltipBundleItem = null, this.bundleData = e, this.cartInstance = n, this.aborters = t, this.rootClass = L[this.bundleData[0].bundle.bundleGroupId] ? L[this.bundleData[0].bundle.bundleGroupId] : L.default, this.addStyles(), this.renderAllPins();
    }
    /**
     * Рендерить всі піни у контейнер з класом rootClass
     */
    renderAllPins() {
      const e = document.querySelector(`${this.rootClass}`);
      if (!e) {
        console.error("Root element not found for PinsBundle");
        return;
      }
      e.classList.add("pins-bundle"), e.dataset.productName = this.bundleData[0].bundle.bundleGroupId, this.bundleData.forEach((n, t) => {
        const { product: o } = this.bundleData[t];
        if (e.querySelector(`.pins-bundle-pin[data-pin-id="${o.id}"]`))
          return;
        const i = this.renderPinHtml(t);
        e.insertAdjacentHTML("beforeend", i);
      }), this.attachTooltipLogic();
    }
    /**
     * Генерує HTML піна для вставки через insertAdjacentHTML
     */
    renderPinHtml(e) {
      const { product: n } = this.bundleData[e];
      return `<div class="pins-bundle-pin" tabindex="0" aria-label="${n.name}" data-pin-index="${e}" data-pin-id="${n.id}"></div>`;
    }
    /**
     * Додає тултіп і логіку до кожного піна після вставки в DOM
     */
    attachTooltipLogic() {
      const e = document.querySelector(`${this.rootClass}`), n = document.querySelectorAll(
        `.${this.rootClass} .pins-bundle-pin,${this.rootClass} .pins-bundle-pin`
      );
      this.tooltip || (this.tooltip = document.createElement("div"), this.tooltip.className = "pins-bundle-tooltip", this.tooltip.style.position = "absolute", this.tooltip.style.zIndex = "99999", this.tooltip.style.display = "none", e == null || e.appendChild(this.tooltip)), n.forEach((t, o) => {
        const { product: i, sizes: s } = this.bundleData[o];
        let a = null;
        const l = () => {
          a && (clearTimeout(a), a = null), (!this.tooltip.querySelector(".bundle") || this.tooltip.getAttribute("data-tooltip-for-pin") !== String(i.id)) && (this.tooltip.innerHTML = "", this.tooltip.setAttribute(
            "data-tooltip-for-pin",
            String(i.id)
          ), this.tooltipBundleItem && (this.tooltipBundleItem.dispose(), this.tooltipBundleItem = null), this.tooltipBundleItem = new k({
            product: i,
            sizes: s,
            cartInstance: this.cartInstance,
            containerSelector: `[data-tooltip-for-pin='${i.id}']`,
            position: "beforeend",
            aborters: this.aborters
          }));
          const p = t.getBoundingClientRect(), r = e == null ? void 0 : e.getBoundingClientRect();
          r && this.tooltip && (this.tooltip.style.left = p.right - r.left + 8 + "px", this.tooltip.style.top = p.top - r.top + "px"), this.tooltip.style.display = "block";
        }, u = () => {
          a && clearTimeout(a), a = setTimeout(() => {
            this.tooltip && (this.tooltip.style.display = "none");
          }, 200);
        };
        t.addEventListener("mouseenter", l), t.addEventListener("focus", l), t.addEventListener("mouseleave", u), t.addEventListener("blur", u), this.tooltip.addEventListener("mouseenter", l), this.tooltip.addEventListener("mouseleave", u), t.addEventListener("click", (p) => {
          if (window.innerWidth < 1100) {
            p.preventDefault(), this.openMobilePopup();
            return;
          }
        });
      });
    }
    /**
     * Відкриває мобільний попап з усіма бандлами
     */
    openMobilePopup() {
      var t;
      if (document.getElementById("pins-bundle-mobile-popup")) return;
      const e = document.createElement("dialog");
      e.id = "pins-bundle-mobile-popup", e.className = "pins-bundle-mobile-popup", e.innerHTML = `
      <div class="pins-bundle-mobile-popup__wrap">
        <button class="pins-bundle-mobile-popup__close" aria-label="Close"><i class="icon-close"></i></button>
        <div class="pins-bundle-mobile-popup__title">Buy the look</div>
        <div class="pins-bundle-mobile-popup__list"></div>
      </div>
    `, document.body.appendChild(e);
      const n = e.querySelector(".pins-bundle-mobile-popup__list");
      this.bundleData.forEach(({ product: o, sizes: i }, s) => {
        const a = document.createElement("div");
        a.className = "pins-bundle-mobile-popup__item", n == null || n.appendChild(a), new k({
          product: o,
          sizes: i,
          cartInstance: this.cartInstance,
          containerSelector: `#pins-bundle-mobile-popup .pins-bundle-mobile-popup__item:nth-child(${s + 1})`,
          position: "beforeend",
          aborters: this.aborters
        });
      }), (t = e.querySelector(".pins-bundle-mobile-popup__close")) == null || t.addEventListener("click", () => {
        e.close(), e.remove();
      }), e.addEventListener("click", (o) => {
        o.target === e && (e.close(), e.remove());
      }), e.showModal();
    }
    dispose() {
      if (this.disposed) return;
      this.disposed = !0, this.bundleItems.forEach((n) => n.dispose()), this.bundleItems = [];
      const e = document.querySelector(`${this.rootClass}`);
      e && (e.querySelectorAll(".pins-bundle-pin").forEach((n) => n.remove()), e.querySelectorAll(".pins-bundle-tooltip").forEach((n) => n.remove()), e.classList.remove("pins-bundle"), e.removeAttribute("data-product-name")), this.tooltipBundleItem && (this.tooltipBundleItem.dispose(), this.tooltipBundleItem = null), this.tooltip = null;
    }
    addStyles() {
      if (document.getElementById("pins-bundle-style")) return;
      const e = document.createElement("style");
      e.id = "pins-bundle-style", e.innerHTML = Z, document.head.appendChild(e);
    }
  }
  class ee {
    constructor(e, n, t) {
      this.bundleData = [], this.bundleContainer = null, this.pinsBundle = null, this.cartInstance = n, this.aborters = t, this.init(e);
    }
    async init(e) {
      this.bundleData = await Promise.all(
        e.map(async (t) => {
          const [o, i] = await Promise.all([
            P(t.path || "").then((s) => s.data),
            $().then((s) => s.data)
          ]);
          return { product: o, sizes: i, bundle: t };
        })
      ), this.bundleContainer = new X(
        this.bundleData,
        this.cartInstance,
        this.aborters
      );
      const n = C.find(
        (t) => window.location.pathname.includes(t.path)
      );
      if (n != null && n.showPins) {
        let t = [];
        Array.isArray(n.pinsLinks) && n.pinsLinks.length > 0 && (t = (await Promise.all(
          n.pinsLinks.map(async (o) => {
            const [i, s] = await Promise.all([
              P(o || "").then((a) => a.data),
              $().then((a) => a.data)
            ]);
            return { product: i, sizes: s, bundle: n };
          })
        )).filter((o) => o !== null)), setTimeout(() => {
          this.pinsBundle = new K(
            t,
            this.cartInstance,
            this.aborters
          );
        }, 100);
      }
    }
    dispose() {
      var e, n;
      (e = this.bundleContainer) == null || e.dispose(), this.bundleContainer = null, (n = this.pinsBundle) == null || n.dispose(), this.pinsBundle = null;
    }
  }
  const ne = `.cart-product-quantity {
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
  class te {
    constructor(e) {
      var n, t, o, i;
      this.eventsAborters = [], this.items = [], this.initialCartButtonClick = !0, this.currencySymbol = // @ts-ignore
      (i = (o = (t = (n = window == null ? void 0 : window.autoInitData) == null ? void 0 : n.website) == null ? void 0 : t.currency) == null ? void 0 : o.list) == null ? void 0 : i[0].symbol, this.eventsAborters = e, this.init();
    }
    init() {
      this.addStyles(), this.handleCartButtonClick();
    }
    async addItemToCart(e) {
      if (!this.items.some(
        (o) => o.id === e.id && o.size === e.size && o.color === e.color
      ))
        this.items.push(e);
      else {
        const o = this.items.find(
          (i) => i.id === e.id && i.size === e.size && i.color === e.color
        );
        o && (o.qty = e.qty, o.price = (parseFloat(o.price) + parseFloat(e.price)).toFixed(2));
      }
      const t = document.querySelector(
        "button:has(basket-qty)"
      );
      t && (t._programmaticClick = !0, t.click(), setTimeout(() => {
        delete t._programmaticClick;
      }, 0), this.initialCartButtonClick = !1), this.renderAllItems();
    }
    async renderAllItems() {
      if (!await w("modal-right-container minibasket")) {
        console.error("Container for rendering items not found");
        return;
      }
      this.items.forEach((t) => {
        this.renderSingleItem(t);
      });
    }
    async renderSingleItem(e) {
      const t = window.autoInitData.website.defaultCountry === "GB" ? "Colour" : "Color", o = (
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
                        ${t}: ${e.color}
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
      ), i = document.querySelector(
        "modal-right-container minibasket p[cy-basketempty]"
      );
      if (i) {
        const s = i.closest(".custom-scrollbar");
        s && (s.innerHTML = /* HTML */
        `<div
          class="p-r-5 p-l-5 ng-star-inserted"
        >
          <ul cy-minibasketlist>
            ${o}
          </ul>
        </div>`), this.addCheckoutButton();
      } else {
        const s = document.querySelector(
          "minibasket ul[cy-minibasketlist]"
        );
        s && s.insertAdjacentHTML("beforeend", o);
      }
      this.addItemEventListeners(e.productCartId);
    }
    handleCartButtonClick() {
      const e = document.querySelector(
        "button:has(basket-qty)"
      );
      e && (e == null || e.addEventListener("click", async (n) => {
        e._programmaticClick || this.initialCartButtonClick || (this.eventsAborters.forEach((t) => {
          t.abort();
        }), this.eventsAborters = [], this.renderAllItems());
      }));
    }
    async addItemEventListeners(e) {
      const n = await w(
        `[data-cart-id="${e}"]`
      ), t = this.items.find(
        (r) => r.productCartId === e
      );
      if (!t || !n) return;
      const o = n == null ? void 0 : n.querySelector(".quantity-button.minus"), i = n == null ? void 0 : n.querySelector(".quantity-button.plus"), s = n == null ? void 0 : n.querySelector(".quantity-input"), a = n == null ? void 0 : n.querySelector(".cart-product-remove"), l = n == null ? void 0 : n.querySelector(".cart-product-price"), u = this.debounce(
        async (r, h) => {
          const { data: b, error: f } = await _({ id: r, qty: h }), g = b == null ? void 0 : b.cart;
          if (g) {
            const d = g == null ? void 0 : g.totals.grand_total;
            if (d) {
              const m = document == null ? void 0 : document.querySelector(
                "basket-view-totals price"
              );
              m && (m.innerHTML = `${this.currencySymbol}${d}`);
            }
          }
        },
        300
      );
      if (!n || !s) return;
      const p = new AbortController();
      this.eventsAborters.push(p), o && o.addEventListener("click", () => {
        const h = parseInt(s.value) - 1;
        if (i == null || i.removeAttribute("disabled"), h < 1) {
          s.value = "1", o.setAttribute("disabled", "true");
          return;
        }
        s.value = h.toString(), l && (l.textContent = (+t.price * h).toFixed(2)), u(+e, h);
      }), i && i.addEventListener("click", () => {
        const h = parseFloat(s.value) + 1;
        o == null || o.removeAttribute("disabled"), s.value = h.toString(), l && (l.textContent = (+t.price * h).toFixed(2)), u(+e, h);
      }), a && a.addEventListener("click", async () => {
        const r = a.closest("li");
        r && (await B([+e]), r.remove());
      });
    }
    debounce(e, n) {
      let t = null;
      return (...o) => {
        t && clearTimeout(t), t = setTimeout(() => e(...o), n);
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
      e.innerHTML = ne, document.head.appendChild(e);
    }
  }
  A({
    name: "Adding bundle options based on color to the product detail page (PDP) and cart",
    dev: "OS"
  }), function(c, e, n, t, o, i) {
    c.hj = c.hj || function() {
      (c.hj.q = c.hj.q || []).push(arguments);
    }, c._hjSettings = { hjid: 2667925, hjsv: 6 }, o = e.getElementsByTagName("head")[0], i = e.createElement("script"), i.async = !0, i.src = n + c._hjSettings.hjid + t + c._hjSettings.hjsv, o && o.appendChild(i);
  }(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_cross_sell");
  const oe = ["GB", "US", "IE", "AU", "NZ", "ZA", "CA"];
  function ie(c) {
    const e = C.find((n) => c.includes(n.path));
    return e ? C.filter(
      (n) => n.bundleGroupId === e.bundleGroupId && !c.includes(n.path)
    ) : [];
  }
  class se {
    constructor() {
      this.aborters = [], this.bundleWrapper = null, this.aborters = [], this.bundleWrapper = null, this.init();
    }
    async init() {
      this.pageChangeHandler(async () => {
        this.aborters.forEach((e) => e.abort()), this.aborters = [], this.bundleWrapper && (this.bundleWrapper.dispose(), this.bundleWrapper = null), await w("html.content-initiated-root"), await this.initChangesOnPDP();
      }), await w("html.content-initiated-root"), this.initChangesOnPDP();
    }
    async initChangesOnPDP() {
      var n;
      if (await this.checkIsProductPage()) {
        const { url: t, ...o } = await this.waitForProduct(), i = this.checkCountry();
        if (!oe.includes(i)) {
          console.error("Not an English country, exiting...");
          return;
        }
        const s = t.replace(/^https?:\/\/(www\.)?lemieux\.com/, "").replace(/#.*/, ""), a = ie(s);
        if (a.length > 0) {
          const l = new te(this.aborters);
          this.bundleWrapper = new ee(
            a,
            l,
            this.aborters
          );
        } else
          (n = this.bundleWrapper) == null || n.dispose(), this.bundleWrapper = null;
      } else this.bundleWrapper && (this.bundleWrapper.dispose(), this.bundleWrapper = null);
    }
    checkCountry() {
      return window.autoInitData.website.defaultCountry;
    }
    async checkIsProductPage(e = 5e3) {
      try {
        return !!await Promise.race([
          w("product-view-layout"),
          new Promise(
            (t, o) => setTimeout(() => o("timeout"), e)
          )
        ]);
      } catch {
        return console.error("Not a product page or timeout occurred"), !1;
      }
    }
    waitForProduct(e = 5e4) {
      return new Promise((n, t) => {
        window.product && setTimeout(() => n(window.product), 100);
        const o = setInterval(() => {
          window.product && (clearInterval(o), clearTimeout(i), n(window.product));
        }, 200), i = setTimeout(() => {
          clearInterval(o), t(new Error("Timeout waiting for window.product"));
        }, e);
      });
    }
    pageChangeHandler(e) {
      let n = window.location.pathname;
      new MutationObserver((o) => {
        o.forEach((i) => {
          n !== window.location.pathname && location.hash.includes("selection.color") && (e(), n = window.location.pathname);
        });
      }).observe(document.body, {
        childList: !0,
        subtree: !0
      });
    }
  }
  new se();
})();
