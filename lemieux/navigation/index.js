(function() {
  "use strict";
  const k = (f) => new Promise((e) => {
    const t = document.querySelector(f);
    t && e(t);
    const n = new MutationObserver(() => {
      const i = document.querySelector(f);
      i && (e(i), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), x = ({ name: f, dev: e }) => {
    console.log(
      `%c EXP: ${f} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, p = [
    {
      title: "Horse",
      link: "/horsewear",
      template: "featured",
      submenu: [
        {
          title: "New",
          link: "#",
          template: "default",
          submenu: [
            {
              title: "AW25 Collection",
              link: "#",
              template: "default",
              submenu: [
                {
                  title: "Saddle Pads",
                  link: "/new-in/aw25/horse-wear?329=6617"
                },
                { title: "Rugs", link: "/new-in/aw25/horse-wear?329=6616" },
                { title: "Fly Hoods", link: "/new-in/aw25/horse-wear?329=6605" },
                { title: "Boots", link: "/new-in/aw25/horse-wear?329=7903" },
                {
                  title: "Headcollars",
                  link: "/new-in/aw25/horse-wear?329=6611"
                },
                { title: "Grooming", link: "/new-in/aw25/horse-wear?329=6613" },
                {
                  title: "View All",
                  link: "/new-in/aw25/horse-wear",
                  template: "link"
                }
              ]
            },
            {
              title: "AW25 Colours",
              link: "#",
              template: "color-grid",
              colorSwatches: [
                {
                  name: "Lilac",
                  color: "#c2b5cc",
                  isNew: !0,
                  link: "/new-in/aw25/horse-wear?93=10146"
                },
                {
                  name: "Juniper",
                  color: "#3d334a",
                  isNew: !0,
                  link: "/new-in/aw25/horse-wear?93=10143"
                },
                {
                  name: "Rosemary",
                  color: "#6e756e",
                  isNew: !0,
                  link: "/new-in/aw25/horse-wear?93=10153"
                },
                {
                  name: "Damson",
                  color: "#4d3840",
                  isNew: !0,
                  link: "/new-in/aw25/horse-wear?93=10140"
                },
                {
                  name: "Cranberry",
                  color: "#b54f5e",
                  isNew: !0,
                  link: "/new-in/aw25/horse-wear?93=11250"
                },
                {
                  name: "Navy",
                  color: "#2c2e3a",
                  isNew: !0,
                  link: "/new-in/aw25/horse-wear?93=11251"
                }
              ],
              submenu: [
                {
                  title: "View All Colours",
                  link: "/new-in/aw25/horse-wear",
                  template: "link"
                }
              ]
            },
            {
              title: "AW Collection",
              link: "/new-in/aw25/horse-wear",
              template: "featured",
              featuredImage: "https://www.lemieux.com/tco-images/unsafe/1920x2560/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT08147_lifestyle_loireclassicclosecontactsquare_navycranberry_6-1.jpg",
              featuredTitle: "AW Collection",
              featuredSubtitle: "New Arrivals"
            }
          ]
        },
        {
          title: "Saddle Pads",
          link: "/horse-saddle-pads",
          template: "default",
          submenu: [
            {
              title: "Shop by Type",
              link: "#",
              template: "default",
              submenu: [
                {
                  title: "Close Contact",
                  link: "/horse-saddle-pads/close-contact-pads",
                  icon: "https://www.lemieux.com/static/cms/media/close-contact-5.svg",
                  template: "default"
                },
                {
                  title: "General Purpose",
                  link: "/horse-saddle-pads/gp-pads",
                  icon: "https://www.lemieux.com/static/cms/media/GP-Saddlepad%20Icon-4.svg",
                  template: "default"
                },
                {
                  title: "Dressage",
                  link: "/horse-saddle-pads/dressage-pads",
                  icon: "https://www.lemieux.com/static/cms/media/dressing-5.svg",
                  template: "default"
                },
                {
                  title: "Show Jumping",
                  link: "/horse-saddle-pads/show-jumping-pads",
                  icon: "https://www.lemieux.com/static/cms/media/showing-jumping-5.svg",
                  template: "default"
                },
                {
                  title: "Work Pads",
                  link: "/horse-saddle-pads/work-pads",
                  icon: "https://www.lemieux.com/static/cms/media/MicrosoftTeams-image-(4)%20(1)-2.png",
                  template: "default"
                },
                {
                  title: "Corrective",
                  link: "/horse-saddle-pads/corrective-pads",
                  icon: "https://www.lemieux.com/static/cms/media/corrective-5.svg",
                  template: "default"
                },
                // {
                //   title: 'Numnah',
                //   link: '/horse-saddle-pads/numnahs',
                //   icon: 'https://www.lemieux.com/static/cms/media/GP-7-4.svg',
                //   template: 'default',
                // },
                // {
                //   title: 'Pony',
                //   link: '/horse-saddle-pads/pony-saddle-pads',
                //   icon: 'https://www.lemieux.com/static/cms/media/pony-2.svg',
                //   template: 'default',
                // },
                // {
                //   title: 'Half Pads',
                //   link: '/horse-saddle-pads/half-pads',
                //   icon: 'https://www.lemieux.com/static/cms/media/acavallo-4.svg',
                //   template: 'default',
                // },
                {
                  title: "View All",
                  link: "/horse-saddle-pads",
                  template: "link"
                }
              ]
            },
            {
              title: "Shop by Material",
              link: "#",
              template: "default",
              submenu: [
                {
                  title: "Suede",
                  link: "/horse-saddle-pads/suede",
                  icon: "https://www.lemieux.com/static/cms/media/suede-5.svg",
                  template: "default"
                },
                {
                  title: "Satin Loire",
                  link: "/horse-saddle-pads/satin-loire",
                  icon: "https://www.lemieux.com/static/cms/media/satin-loire-3.svg",
                  template: "default"
                },
                {
                  title: "Soft Shell",
                  link: "/horse-saddle-pads/soft-shell",
                  icon: "https://www.lemieux.com/static/cms/media/soft-10.svg",
                  template: "default"
                },
                {
                  title: "Cooling Mesh",
                  link: "/horse-saddle-pads/cooling-mesh",
                  icon: "https://www.lemieux.com/static/cms/media/cooling-mesh-4.svg",
                  template: "default"
                },
                {
                  title: "Cotton",
                  link: "/horse-saddle-pads/cotton",
                  icon: "https://www.lemieux.com/static/cms/media/cotton-1-4.svg",
                  template: "default"
                },
                {
                  title: "Merino Wool",
                  link: "/horse-saddle-pads/merino-wool",
                  icon: "https://www.lemieux.com/static/cms/media/merino-wool-5.svg",
                  template: "default"
                },
                {
                  title: "View All",
                  link: "/horse-saddle-pads",
                  template: "link"
                }
              ]
            },
            {
              title: "New Colours AW25 Saddle Pads",
              link: "/new-in/aw25/horse-wear/saddle-pads",
              template: "featured",
              featuredImage: "https://www.lemieux.com/static/cms/media/IT07082_lifestyle_suedeccsquare_cranberry_6-2-1.jpg",
              featuredTitle: "AW25 Saddle Pads",
              featuredSubtitle: "New Colours"
            }
          ]
        },
        {
          title: "Rugs",
          link: "/horse-rugs",
          template: "default",
          submenu: [
            {
              title: "Rug Collection",
              link: "/horse-rugs",
              template: "default",
              submenu: [
                {
                  title: "Turnout Rugs",
                  link: "/horsewear/horse-rugs/turnout-rugs"
                },
                {
                  title: "Stable Rugs",
                  link: "/horsewear/horse-rugs/stable-rugs"
                },
                { title: "Rug Liners", link: "/horsewear/horse-rugs/under-rugs" },
                {
                  title: "Exercise Sheets",
                  link: "/horsewear/horse-rugs/exercise-sheets"
                },
                { title: "Fly Rugs", link: "/horsewear/horse-rugs/fly-rugs" },
                {
                  title: "Fleeces & Sheets",
                  link: "/horsewear/horse-rugs/fleeces-coolers-sheets"
                },
                {
                  title: "Cooler Rugs",
                  link: "/horsewear/horse-rugs/cooler-rugs"
                },
                {
                  title: "Rug Accessories",
                  link: "/horsewear/horse-rugs/rug-accessories"
                },
                { title: "View All", link: "/horse-rugs", template: "link" }
              ]
            },
            {
              title: "Shop by Size",
              link: "/horse-rugs",
              template: "default",
              submenu: [
                { title: `4'9"`, link: "/horsewear/horse-rugs?155=9061" },
                { title: `5'0"`, link: "/horsewear/horse-rugs?155=6773" },
                { title: `5'3"`, link: "/horsewear/horse-rugs?155=9064" },
                { title: `5'6"`, link: "/horsewear/horse-rugs?155=6727" },
                { title: `5'9"`, link: "/horsewear/horse-rugs?155=6729" },
                { title: `6'0"`, link: "/horsewear/horse-rugs?155=6729" },
                { title: `6'3"`, link: "/horsewear/horse-rugs?155=6730" },
                { title: `6'6"`, link: "/horsewear/horse-rugs?155=6731" },
                { title: `6'9"`, link: "/horsewear/horse-rugs?155=6732" },
                { title: `7'0"`, link: "/horsewear/horse-rugs?155=6733" },
                { title: `7'3"`, link: "/horsewear/horse-rugs?155=8315" },
                { title: "View All", link: "/horse-rugs", template: "link" }
              ]
            },
            {
              title: "Featured Rugs",
              link: "/horse-rugs",
              template: "dual-featured",
              submenu: [
                {
                  title: "For All Weathers",
                  link: "/horsewear/horse-rugs/turnout-rugs",
                  template: "featured",
                  featuredImage: "https://www.lemieux.com/static/cms/media/FeatherweightRug_Menu-6.jpg",
                  featuredTitle: "Turnout Rugs",
                  featuredSubtitle: "For All Weathers"
                },
                {
                  title: "Ride & Recover",
                  link: "/horsewear/horse-rugs/cooler-rugs",
                  template: "featured",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT01053_lifestyle_carboncoolerrug_black_5g.jpg",
                  featuredTitle: "Cooler Rugs",
                  featuredSubtitle: "Ride & Recover"
                }
              ]
            }
          ]
        },
        {
          title: "Saddlery & Tack",
          link: "/horsewear/saddlery-tack",
          template: "default",
          submenu: [
            {
              title: "Saddlery & Tack",
              link: "/horsewear/saddlery-tack",
              template: "default",
              submenu: [
                {
                  title: "Stirrups & Leathers",
                  link: "/horsewear/saddlery-tack/stirrups"
                },
                {
                  title: "Girths & Covers",
                  link: "/horsewear/saddlery-tack/girths-covers"
                },
                { title: "Bridles", link: "/horsewear/saddlery-tack/bridles" },
                { title: "Reins", link: "/horsewear/saddlery-tack/reins" },
                {
                  title: "Martingales & Breastplates",
                  link: "/horsewear/saddlery-tack/martingales-breastplates"
                },
                { title: "Bits", link: "/horsewear/saddlery-tack/horse-bits" },
                {
                  title: "Seat Savers",
                  link: "/horsewear/saddlery-tack/seat-savers"
                },
                {
                  title: "Browbands",
                  link: "/horsewear/saddlery-tack/browbands"
                },
                { title: "Studs", link: "/horsewear/saddlery-tack/studs" },
                {
                  title: "Accessories",
                  link: "/horsewear/saddlery-tack/horse-accessories"
                },
                {
                  title: "View All",
                  link: "/horsewear/saddlery-tack",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Saddlery",
              link: "/horsewear/saddlery-tack",
              template: "triple-featured",
              submenu: [
                {
                  title: "Luxurious Comfort",
                  link: "/horsewear/saddlery-tack/bridles",
                  template: "featured",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT03739_lifestyle_arikadressagebridle_brown_1%20copy-2-3.jpg",
                  featuredTitle: "Bridles",
                  featuredSubtitle: "Luxurious Comfort"
                },
                {
                  title: "Most Popular",
                  link: "/horsewear/saddlery-tack/stirrups",
                  template: "featured",
                  featuredImage: "https://www.lemieux.com/static/cms/media/stirrups-ss25-4.jpg",
                  featuredTitle: "Vector Stirrups",
                  featuredSubtitle: "Most Popular"
                },
                {
                  title: "Best Sellers",
                  link: "/horsewear/saddlery-tack/girths-covers",
                  template: "featured",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT04491_lifestlye_arikasimuwoolcontoureddressagegirth_black_1-4.jpg",
                  featuredTitle: "Girths",
                  featuredSubtitle: "Best Sellers "
                }
              ]
            }
          ]
        },
        {
          title: "Boots & Bandages",
          link: "/horsewear/boots-bandages",
          template: "dual-featured",
          submenu: [
            {
              title: "Boots",
              link: "/horsewear/boots-bandages",
              template: "default",
              submenu: [
                {
                  title: "Tendon & Fetlock Boots",
                  link: "/horsewear/boots-bandages/tendon-fetlock-boots"
                },
                {
                  title: "Brushing Boots",
                  link: "/horsewear/boots-bandages/brushing-boots"
                },
                {
                  title: "Dressage Boots",
                  link: "/horsewear/boots-bandages/dressage-boots"
                },
                {
                  title: "Overreach Boots",
                  link: "/horsewear/boots-bandages/overreach-boots"
                },
                { title: "XC Boots", link: "/horsewear/boots-bandages/xc-boots" },
                {
                  title: "Support Boots",
                  link: "/horsewear/boots-bandages/support-boots"
                },
                {
                  title: "Stable Boots",
                  link: "/horsewear/boots-bandages/stable-boots"
                },
                {
                  title: "Turnout Boots",
                  link: "/horsewear/boots-bandages/turnout-boots"
                },
                {
                  title: "Therapy Boots",
                  link: "/horsewear/boots-bandages/therapy-boots"
                },
                {
                  title: "Travel Boots",
                  link: "/horsewear/boots-bandages/travel-boots"
                },
                {
                  title: "Bandages",
                  link: "/horsewear/boots-bandages/bandages-pads"
                },
                {
                  title: "View All",
                  link: "/horsewear/boots-bandages",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Boots",
              link: "/horsewear/boots-bandages",
              template: "dual-featured",
              submenu: [
                {
                  title: "Most Popular",
                  link: "/horsewear/boots-bandages/brushing-boots",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT07016_lifestyle_arikaoverreachboots_juniper_1-3.jpg",
                  featuredTitle: "Arika Mesh Brushing Boots",
                  featuredSubtitle: "Most Popular",
                  template: "featured"
                },
                {
                  title: "Perfect protection",
                  link: "/horsewear/boots-bandages/tendon-fetlock-boots",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT03359_lifestyle_exoflextendonboot_blacksilver_10-(2)-12.jpg",
                  featuredTitle: "Exo-Flex® Boots",
                  featuredSubtitle: "Perfect protection",
                  template: "featured"
                }
              ]
            }
          ]
        },
        {
          title: "Headcollars",
          link: "/horsewear/headcollars-leadropes",
          template: "triple-featured",
          submenu: [
            {
              title: "Headcollars",
              link: "/horsewear/headcollars-leadropes",
              template: "default",
              submenu: [
                {
                  title: "Vogue Headcollars",
                  link: "/horsewear/headcollars-leadropes/vogue-headcollars"
                },
                {
                  title: "Leather Headcollars",
                  link: "/horsewear/headcollars-leadropes/leather-headcollars"
                },
                {
                  title: "Comfort Headcollars",
                  link: "/horsewear/headcollars-leadropes/comfort-headcollars"
                },
                {
                  title: "Yard Headcollars",
                  link: "/horsewear/headcollars-leadropes/neoprene-headcollars"
                },
                {
                  title: "Safety Headcollars",
                  link: "/horsewear/headcollars-leadropes/safety-headcollars"
                },
                {
                  title: "Leadropes",
                  link: "/horsewear/headcollars-leadropes/leadropes"
                },
                {
                  title: "View All",
                  link: "/horsewear/headcollars-leadropes",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Headcollars",
              link: "/horsewear/headcollars-leadropes",
              template: "triple-featured",
              submenu: [
                {
                  title: "Best Sellers",
                  link: "/horsewear/headcollars-leadropes/vogue-headcollars",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT06994_lifestyle_vogueheadcollarandleadrope_cranberry_8-3.jpg",
                  featuredTitle: "Vogue Headcollars",
                  featuredSubtitle: "Best Sellers",
                  template: "featured"
                },
                {
                  title: "Smart Style",
                  link: "/horsewear/headcollars-leadropes/leather-headcollars",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT06976_lifestyle_ropellaheadcollar_lilac_2-3.jpg",
                  featuredTitle: "Leather Headcollars",
                  featuredSubtitle: "Smart Style",
                  template: "featured"
                },
                {
                  title: "New Colours",
                  link: "/horsewear/headcollars-leadropes/finesse-headcollars",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT06973_lifestyle_finesse_headcollar_rosemary_cob_02-3.jpg",
                  featuredTitle: "Versailles Headcollars",
                  featuredSubtitle: "New Colours",
                  template: "featured"
                }
              ]
            }
          ]
        },
        {
          title: "Fly Protection",
          link: "/horsewear/fly-protection",
          template: "triple-featured",
          submenu: [
            {
              title: "Shop by Category",
              link: "/horsewear/fly-protection",
              template: "default",
              submenu: [
                { title: "Fly Rugs", link: "/horsewear/horse-rugs/fly-rugs" },
                {
                  title: "Fly Masks",
                  link: "/horsewear/fly-protection/fly-masks"
                },
                {
                  title: "Fly Boots",
                  link: "/horsewear/fly-protection/fly-boots"
                },
                {
                  title: "Fly Hoods",
                  link: "/horsewear/fly-hoods/loire-fly-hoods"
                },
                {
                  title: "Nose Filters",
                  link: "/horsewear/fly-protection/nose-filters"
                },
                {
                  title: "Fly Sprays",
                  link: "/horsewear/fly-protection/fly-sprays"
                },
                {
                  title: "Coat & Skin Care",
                  link: "/horsewear/fly-protection/itch-relief"
                },
                {
                  title: "View All",
                  link: "/horsewear/fly-protection",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Fly Protection",
              link: "/horsewear/fly-protection",
              template: "triple-featured",
              submenu: [
                {
                  title: "Our Favourite",
                  link: "/horsewear/horse-rugs/arika-shower-tek-fly-rug-grey-new",
                  featuredImage: "https://www.lemieux.com/static/cms/media/it04127_lifestyle_arikashower-tekflyrug_grey_4-5.jpg",
                  featuredTitle: "Arika Shower-Tek Rug",
                  featuredSubtitle: "Our Favourite",
                  template: "featured"
                },
                {
                  title: "Most Popular",
                  link: "/horsewear/fly-protection/armourshield-pro-full-fly-mask-grey",
                  featuredImage: "https://www.lemieux.com/static/cms/media/3n6a0380_copy-4.jpg",
                  featuredTitle: "Armourshield Fly Masks",
                  featuredSubtitle: "Most Popular",
                  template: "featured"
                },
                {
                  title: "New Colours",
                  link: "/horsewear/fly-hoods/loire-fly-hoods",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT06962_lifestyle_classicflyhood_lilac_7-3.jpg",
                  featuredTitle: "Classic Fly Hoods",
                  featuredSubtitle: "New Colours",
                  template: "featured"
                }
              ]
            }
          ]
        },
        {
          title: "Grooming & Care",
          link: "/horsewear/grooming-care",
          template: "dual-featured",
          submenu: [
            {
              title: "Grooming",
              link: "/horsewear/grooming-care",
              template: "default",
              submenu: [
                { title: "Brushes", link: "/horsewear/grooming-care/brushes" },
                {
                  title: "Grooming Bags",
                  link: "/horsewear/grooming-care/grooming-bags"
                },
                {
                  title: "Grooming Sets",
                  link: "/horsewear/grooming-care/grooming-sets"
                },
                {
                  title: "Shampoo & Washes",
                  link: "/horsewear/grooming-care/shampoo-washes"
                },
                {
                  title: "Showing & Plaiting",
                  link: "/horsewear/grooming-care/showing-plaiting"
                },
                {
                  title: "Coat & Skin Care",
                  link: "/horsewear/grooming-care/coat-skin-care"
                },
                {
                  title: "First Aid",
                  link: "/horsewear/grooming-care/first-aid"
                },
                {
                  title: "Hoof & Leg Care",
                  link: "/horsewear/grooming-care/hoof-care"
                },
                {
                  title: "View All",
                  link: "/horsewear/grooming-care",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Grooming",
              link: "/horsewear/grooming-care",
              template: "dual-featured",
              submenu: [
                {
                  title: "Most Popular",
                  link: "/horsewear/grooming-care/brushes",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT07027_lifestlye_flexiscrubbingbrush_cranberry_1.jpg",
                  featuredTitle: "Flexi Brushes",
                  featuredSubtitle: "Most Popular",
                  template: "featured"
                },
                {
                  title: "Best Selling",
                  link: "/horsewear/grooming-care/grooming-sets",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT03940_lifestyle_eliteprokitgroomingbag_navy_1.jpg",
                  featuredTitle: "Grooming Sets",
                  featuredSubtitle: "Best Selling",
                  template: "featured"
                }
              ]
            }
          ]
        },
        {
          title: "Stable & Yard",
          link: "/horsewear/stable-yard",
          template: "dual-featured",
          submenu: [
            {
              title: "Stable & Yard",
              link: "/horsewear/stable-yard",
              template: "default",
              submenu: [
                {
                  title: "Horse Stable Toys",
                  link: "/horsewear/stable-yard/horse-toys"
                },
                {
                  title: "Stable Accessories",
                  link: "/horsewear/stable-yard/stable-accessories"
                },
                {
                  title: "Luggage & Travel",
                  link: "/horsewear/stable-yard/luggage-travel"
                },
                {
                  title: "Grooming Bags",
                  link: "/horsewear/stable-yard/luggage-travel"
                },
                { title: "Haynets", link: "/horsewear/stable-yard/haynets" },
                {
                  title: "Ropes & Tie Ups",
                  link: "/horsewear/stable-yard/ropes-tie-ups"
                },
                { title: "Treats", link: "/horsewear/stable-yard/ropes-tie-ups" },
                {
                  title: "View All",
                  link: "/horsewear/stable-yard",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Stable & Yard",
              link: "/horsewear/stable-yard",
              template: "dual-featured",
              submenu: [
                {
                  title: "Bags of Style",
                  link: "/horsewear/stable-yard/luggage-travel",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT04967_lifestyle_twinbridlebag_navy_1NEW-(1).jpg",
                  featuredTitle: "Bags of Stylee",
                  featuredSubtitle: " Pro Luggage",
                  template: "featured"
                },
                {
                  title: "Beat Boredom",
                  link: "/horsewear/stable-yard/horse-toys",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT03912_lifestyle_horsetoy_banana_1-1-2.jpg",
                  featuredTitle: "Beat Boredom",
                  featuredSubtitle: " Horse Stable Toys",
                  template: "featured"
                }
              ]
            }
          ]
        },
        {
          title: "Supplements",
          link: "/horsewear/supplements",
          template: "product-cards",
          submenu: [
            {
              title: "Supplements",
              link: "/horsewear/supplements",
              template: "default",
              submenu: [
                { title: "Calmers", link: "/horsewear/supplements/calmers" },
                { title: "Joints", link: "/horsewear/supplements/joints" },
                {
                  title: "Electrolytes",
                  link: "/horsewear/supplements/electrolytes"
                },
                {
                  title: "Performance",
                  link: "/horsewear/supplements/performance"
                },
                { title: "Digestion", link: "/horsewear/supplements/digestion" },
                { title: "Hoof", link: "/horsewear/supplements/hoof" },
                {
                  title: "Respiratory",
                  link: "/horsewear/supplements/respiratory"
                },
                { title: "Treats", link: "/horsewear/stable-yard/horse-treats" },
                {
                  title: "View All",
                  link: "/horsewear/supplements",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Supplements",
              link: "/horsewear/supplements",
              template: "product-cards",
              submenu: [
                {
                  title: "NAF Hedgy Treats",
                  link: "/horsewear/stable-yard/naf-hedgy-treats",
                  template: "product-card",
                  productImage: "https://www.lemieux.com/static/media/catalog/product/1/_/1._hedgy-treats-1kg.jpg",
                  productPrice: "£5.95",
                  productColors: "5 Colours",
                  productStock: "(35)"
                },
                {
                  title: "NAF Appy Treats",
                  link: "/horsewear/stable-yard/naf-appy-treats",
                  template: "product-card",
                  productImage: "https://www.lemieux.com/static/media/catalog/product/3/_/3._appy-treats-1kg_1.jpg",
                  productPrice: "£5.95",
                  productColors: "5 Colours",
                  productStock: "(35)"
                },
                {
                  title: "NAF Minty Treats",
                  link: "/horsewear/stable-yard/naf-minty-treats",
                  template: "product-card",
                  productImage: "https://www.lemieux.com/static/media/catalog/product/2/_/2._minty_treats_1kg.jpg",
                  productPrice: "£5.95",
                  productColors: "5 Colours",
                  productStock: "(35)"
                }
              ]
            }
          ]
        },
        {
          title: "Gifts",
          link: "/gifts/for-horses",
          template: "default"
        }
      ]
    },
    {
      title: "Women",
      link: "/clothing/women/casual-wear",
      template: "featured",
      submenu: [
        {
          title: "New",
          link: "/new-in/aw25/women",
          template: "default",
          submenu: [
            {
              title: "AW25 Collection",
              link: "/new-in/aw25/women",
              template: "default",
              submenu: [
                { title: "Coats & Jackets", link: "/new-in/aw25/women?329=6604" },
                {
                  title: "Tops, Hoodies & Jumpers",
                  link: "/new-in/aw25/women?329=6621"
                },
                {
                  title: "Breeches & Pull Ons",
                  link: "/new-in/aw25/women?329=6603"
                },
                { title: "Hat Silks", link: "/new-in/aw25/women?329=6610" },
                { title: "Socks", link: "/new-in/aw25/women?329=6620" },
                { title: "Accessories", link: "/new-in/aw25/accessories" },
                {
                  title: "View All",
                  link: "/new-in/aw25/women",
                  template: "link"
                }
              ]
            },
            {
              title: "AW25 Colours",
              link: "/new-in/aw25/women",
              template: "color-grid",
              colorSwatches: [
                {
                  name: "Lilac",
                  color: "#c2b5cc",
                  isNew: !0,
                  link: "/new-in/aw25/women?93=10146"
                },
                {
                  name: "Juniper",
                  color: "#3d334a",
                  isNew: !0,
                  link: "/new-in/aw25/women?93=10143"
                },
                {
                  name: "Rosemary",
                  color: "#6e756e",
                  isNew: !0,
                  link: "/new-in/aw25/women?93=10153"
                },
                {
                  name: "Damson",
                  color: "#4d3840",
                  isNew: !0,
                  link: "/new-in/aw25/women?93=10140"
                },
                {
                  name: "Cranberry",
                  color: "#b54f5e",
                  isNew: !0,
                  link: "/new-in/aw25/women?93=11250"
                },
                {
                  name: "Navy",
                  color: "#2c2e3a",
                  isNew: !0,
                  link: "/new-in/aw25/women?93=11251"
                }
              ],
              submenu: [
                {
                  title: "View All Colours",
                  link: "/new-in/aw25/women",
                  template: "link"
                }
              ]
            },
            {
              title: "AW25 Collection",
              link: "/new-in/aw25/women",
              template: "featured",
              featuredImage: "https://www.lemieux.com/tco-images/unsafe/1920x2560/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/GROUP_lifestyle_frances_quarter_zip_fleece_damson_black_navy_01d.jpg",
              featuredTitle: "AW25 Collection",
              featuredSubtitle: "New Arrivals"
            }
          ]
        },
        {
          title: "Clothing",
          link: "/clothing/women/casual-wear",
          template: "default",
          submenu: [
            {
              title: "Clothing & Collections",
              link: "#",
              template: "stacked-sections",
              submenu: [
                {
                  title: "Clothing",
                  link: "/clothing/women/casual-wear",
                  template: "default",
                  submenu: [
                    {
                      title: "Coats & Jackets",
                      link: "/clothing/women/casual-wear/coats-jackets"
                    },
                    {
                      title: "Hoodies & Jumpers",
                      link: "/clothing/women/casual-wear/hoodies-jumpers"
                    },
                    {
                      title: "Base Layers",
                      link: "/clothing/women/casual-wear/base-layers"
                    },
                    {
                      title: "Tops",
                      link: "/clothing/women/casual-wear/shirts-tops"
                    },
                    {
                      title: "Breeches & Jodhpurs",
                      link: "/clothing/women/casual-wear/breeches-jodhpurs"
                    },
                    {
                      title: "Leggings & Pull Ons",
                      link: "/clothing/women/casual-wear/leggings-breeches"
                    },
                    { title: "Hat Silks", link: "#" },
                    {
                      title: "View All",
                      link: "/clothing/women/casual-wear",
                      template: "link"
                    }
                  ]
                },
                {
                  title: "Collections",
                  link: "/clothing/women/collections",
                  template: "default",
                  submenu: [
                    { title: "AW25 Collection", link: "/new-in/aw25/women" },
                    {
                      title: "Competition Collection",
                      link: "/clothing/women/competition-clothing"
                    },
                    { title: "Activewear", link: "/clothing/activewear" },
                    {
                      title: "View All",
                      link: "/clothing/women/casual-wear",
                      template: "link"
                    }
                  ]
                }
              ]
            },
            {
              title: "Competition Wear",
              link: "/clothing/women/competition-clothing",
              template: "default",
              submenu: [
                {
                  title: "Show Jackets",
                  link: "/clothing/women/competition-clothing/show-jackets"
                },
                {
                  title: "Show Shirts",
                  link: "/clothing/women/competition-clothing/show-shirts"
                },
                {
                  title: "Competition Breeches",
                  link: "/clothing/women/competition-clothing/competition-breeches"
                },
                {
                  title: "Stocks & Scrunchies",
                  link: "/clothing/women/competition-clothing/competition-breeches"
                },
                {
                  title: "Competition Accessories",
                  link: "/clothing/women/competition-clothing/competition-accessories"
                },
                {
                  title: "View All",
                  link: "/clothing/women/competition-clothing",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Collections",
              link: "/clothing/women/casual-wear",
              template: "dual-featured",
              submenu: [
                {
                  title: "Autumn in colour",
                  link: "/new-in/aw25/women",
                  featuredImage: "https://www.lemieux.com/static/cms/media/GROUP_lifestyle_britneytop_loireflyhood_juniper-lilac_1p.jpg",
                  featuredTitle: "AW25 Collection",
                  featuredSubtitle: "Autumn in colour",
                  template: "featured"
                },
                {
                  title: "Ready to Compete",
                  link: "/clothing/women/competition-clothing",
                  featuredImage: "https://www.lemieux.com/static/cms/media/GROUP_lifestyle_showjacket_2g.jpg",
                  featuredTitle: "Ready to Compete",
                  featuredSubtitle: "Competition Collection",
                  template: "featured"
                }
              ]
            }
          ]
        },
        {
          title: "Footwear",
          link: "/clothing/footwear",
          template: "default",
          submenu: [
            {
              title: "Shop by Product",
              link: "/clothing/footwear",
              template: "default",
              submenu: [
                { title: "Riding Boots", link: "#" },
                { title: "Yard Boots", link: "#" },
                { title: "Trainers", link: "/clothing/footwear/trainers" },
                { title: "Wellies", link: "#" },
                { title: "Sliders", link: "#" },
                {
                  title: "View All",
                  link: "/clothing/footwear",
                  template: "link"
                }
              ]
            },
            {
              title: "Footwear Accessories",
              link: "/clothing/footwear",
              template: "default",
              submenu: [
                { title: "Socks", link: "#" },
                {
                  title: "Boot Bags",
                  link: "/clothing/footwear/footwear-accessories"
                },
                {
                  title: "View All",
                  link: "/clothing/footwear",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Footwear",
              link: "/clothing/footwear",
              template: "dual-featured",
              submenu: [
                {
                  title: "New Arrivals",
                  link: "/clothing/footwear/trainers",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT04711_lifestyle_fieldridingboot_black_04g.jpg",
                  featuredTitle: "New Arrivals",
                  featuredSubtitle: "Riding Boots",
                  template: "featured"
                },
                {
                  title: "Bestselling Footwear",
                  link: "/clothing/footwear/trainers",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT06509_lifestyle_traxlitetrainer_pecan_05%20(2)-2.jpg",
                  featuredTitle: "Bestselling Footwear",
                  featuredSubtitle: "Trax Lite Trainers",
                  template: "featured"
                }
              ]
            }
          ]
        },
        {
          title: "Accessories",
          link: "/clothing/accessories",
          template: "default",
          submenu: [
            {
              title: "Clothing",
              link: "/clothing/accessories/clothing-accessories",
              template: "default",
              submenu: [
                { title: "Hat Silks", link: "/clothing/accessories/hat-silks" },
                {
                  title: "Stocks & Scrunchies",
                  link: "/clothing/accessories/clothing-accessories/stocks-scrunchies"
                },
                { title: "Caps & Hats", link: "/clothing/accessories/caps-hats" },
                { title: "Gloves", link: "/clothing/accessories/riding-gloves" },
                { title: "Socks", link: "/clothing/accessories/socks" },
                { title: "Belts", link: "/clothing/accessories/belts" },
                {
                  title: "Scarves & Snoods",
                  link: "/clothing/accessories/scarves-snoods"
                },
                {
                  title: "View All",
                  link: "/clothing/accessories/clothing-accessories",
                  template: "link"
                }
              ]
            },
            {
              title: "Accessories",
              link: "/clothing/accessories",
              template: "default",
              submenu: [
                { title: "Luggage", link: "/clothing/accessories/rider-luggage" },
                {
                  title: "Eventing Bibs",
                  link: "/clothing/accessories/eventing-bibs"
                },
                { title: "Whips", link: "/clothing/accessories/whips" },
                {
                  title: "Drinks Bottles & Cups",
                  link: "/clothing/accessories/drinks-bottles-cups"
                },
                {
                  title: "View All",
                  link: "/clothing/accessories",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Accessories",
              link: "/clothing/accessories",
              template: "dual-featured",
              submenu: [
                {
                  title: "Best Sellers",
                  link: "/clothing/accessories/clothing-accessories/hat-silks",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT06994_lifestyle_vogueheadcollarandleadrope_cranberry_8-3.jpg",
                  featuredTitle: "Best Sellers",
                  featuredSubtitle: "Hat Silks",
                  template: "featured"
                },
                {
                  title: "Organised Travel",
                  link: "/clothing/accessories/accessories/rider-luggage?439=luxe",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT04979_lifestyle_luxehatbox_black_05-2.webp",
                  featuredTitle: "Organised Travel",
                  featuredSubtitle: "Luggage",
                  template: "featured"
                }
              ]
            }
          ]
        },
        {
          title: "Outfit Builder",
          link: "/outfit-builder",
          template: "default",
          submenu: [
            {
              title: "Build Your Own",
              link: "/outfit-builder",
              template: "outfit-builder",
              featuredImage: "https://conversionrate-store.github.io/a-b_images/lemieux/outfit-builder-women.webp",
              featuredTitle: "Outfit Builder",
              featuredSubtitle: "For you and your horse",
              actionLink: { text: "Create your outfit", url: "/outfit-builder" }
            },
            {
              title: "Get the Look",
              link: "/outfit-builder",
              template: "triple-featured",
              showTitle: !0,
              submenu: [
                {
                  title: "Damson Mixy Outfit",
                  link: "/outfit-builder#eyJzdGVwIjozLCJoaXN0b3J5Ijp7InByZXZTZWxlY3RlZFNlY3Rpb24iOjc4NDJ9LCJjb25maWdPcHRpb24iOiJSaWRlciAmIEhvcnNlIiwicmlkZXIiOnsidGFiSWQiOjU4ODgsIm9wdGlvbk5hbWUiOiJSaWRlciJ9LCJob3JzZSI6eyJ0YWJJZCI6NzgxNCwib3B0aW9uTmFtZSI6IlNrZXdiYWxkIn0sIm9wdGlvblRvZ2dsZVN0YXRlIjoiUmlkZXIiLCJjdXJyZW50U2VjdGlvbk9wdGlvbklkIjo3ODQ2LCJzZWxlY3Rpb24iOnsiNzg0MiI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTUzLCJzaXplIjo2NzAzfSwicHJvZHVjdElkIjo1MzE2OSwibWF0Y2hlZFByb2R1Y3RJZCI6NTMxNDUsInByb2R1Y3RUeXBlIjoiUmlkZXIifSwiNzg0NSI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTQwLCJzaXplIjo2NzE1fSwicHJvZHVjdElkIjo1MTUzNiwibWF0Y2hlZFByb2R1Y3RJZCI6NTEyODgsInByb2R1Y3RUeXBlIjoiUmlkZXIifSwiNzg0NiI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTQwLCJzaXplIjo2NzA1fSwicHJvZHVjdElkIjo1MzQ3MCwibWF0Y2hlZFByb2R1Y3RJZCI6NTM0MDEsInByb2R1Y3RUeXBlIjoiUmlkZXIifSwiNzg0OSI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTQwLCJzaXplIjo2NzA3fSwicHJvZHVjdElkIjo1MDYxMCwibWF0Y2hlZFByb2R1Y3RJZCI6NTA1NzcsInByb2R1Y3RUeXBlIjoiSG9yc2UifSwiNzg1MCI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTUzLCJzaXplIjo2NzA3fSwicHJvZHVjdElkIjo0OTI5NSwibWF0Y2hlZFByb2R1Y3RJZCI6NDkyNjksInByb2R1Y3RUeXBlIjoiSG9yc2UifSwiNzg1MSI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTUzLCJzaXplIjo2NzA2fSwicHJvZHVjdElkIjo0ODk3MCwibWF0Y2hlZFByb2R1Y3RJZCI6NDg5NjQsInByb2R1Y3RUeXBlIjoiSG9yc2UifSwiNzg1MiI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTUzLCJzaXplIjo2NzA2fSwicHJvZHVjdElkIjo0ODk3MCwibWF0Y2hlZFByb2R1Y3RJZCI6NDg5NjQsInByb2R1Y3RUeXBlIjoiSG9yc2UifSwiNzg1MyI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTQwLCJzaXplIjo2NzA2fSwicHJvZHVjdElkIjo0OTA0OSwibWF0Y2hlZFByb2R1Y3RJZCI6NDkwMTUsInByb2R1Y3RUeXBlIjoiSG9yc2UifSwiODI4OSI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTUzLCJzaXplIjo2NzE1fSwicHJvZHVjdElkIjo1ODc3MSwibWF0Y2hlZFByb2R1Y3RJZCI6NTg3MDQsInByb2R1Y3RUeXBlIjoiUmlkZXIifX19",
                  featuredImage: "https://www.lemieux.com/static/media/catalog/product/d/a/damson_mixy_outfit_1_.jpg",
                  featuredTitle: "Damson Mixy Outfit",
                  featuredSubtitle: "",
                  template: "featured",
                  actionLink: {
                    text: "Shop This Look",
                    url: "/outfit-builder#eyJzdGVwIjozLCJoaXN0b3J5Ijp7InByZXZTZWxlY3RlZFNlY3Rpb24iOjc4NDJ9LCJjb25maWdPcHRpb24iOiJSaWRlciAmIEhvcnNlIiwicmlkZXIiOnsidGFiSWQiOjU4ODgsIm9wdGlvbk5hbWUiOiJSaWRlciJ9LCJob3JzZSI6eyJ0YWJJZCI6NzgxNCwib3B0aW9uTmFtZSI6IlNrZXdiYWxkIn0sIm9wdGlvblRvZ2dsZVN0YXRlIjoiUmlkZXIiLCJjdXJyZW50U2VjdGlvbk9wdGlvbklkIjo3ODQ2LCJzZWxlY3Rpb24iOnsiNzg0MiI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTUzLCJzaXplIjo2NzAzfSwicHJvZHVjdElkIjo1MzE2OSwibWF0Y2hlZFByb2R1Y3RJZCI6NTMxNDUsInByb2R1Y3RUeXBlIjoiUmlkZXIifSwiNzg0NSI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTQwLCJzaXplIjo2NzE1fSwicHJvZHVjdElkIjo1MTUzNiwibWF0Y2hlZFByb2R1Y3RJZCI6NTEyODgsInByb2R1Y3RUeXBlIjoiUmlkZXIifSwiNzg0NiI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTQwLCJzaXplIjo2NzA1fSwicHJvZHVjdElkIjo1MzQ3MCwibWF0Y2hlZFByb2R1Y3RJZCI6NTM0MDEsInByb2R1Y3RUeXBlIjoiUmlkZXIifSwiNzg0OSI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTQwLCJzaXplIjo2NzA3fSwicHJvZHVjdElkIjo1MDYxMCwibWF0Y2hlZFByb2R1Y3RJZCI6NTA1NzcsInByb2R1Y3RUeXBlIjoiSG9yc2UifSwiNzg1MCI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTUzLCJzaXplIjo2NzA3fSwicHJvZHVjdElkIjo0OTI5NSwibWF0Y2hlZFByb2R1Y3RJZCI6NDkyNjksInByb2R1Y3RUeXBlIjoiSG9yc2UifSwiNzg1MSI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTUzLCJzaXplIjo2NzA2fSwicHJvZHVjdElkIjo0ODk3MCwibWF0Y2hlZFByb2R1Y3RJZCI6NDg5NjQsInByb2R1Y3RUeXBlIjoiSG9yc2UifSwiNzg1MiI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTUzLCJzaXplIjo2NzA2fSwicHJvZHVjdElkIjo0ODk3MCwibWF0Y2hlZFByb2R1Y3RJZCI6NDg5NjQsInByb2R1Y3RUeXBlIjoiSG9yc2UifSwiNzg1MyI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTQwLCJzaXplIjo2NzA2fSwicHJvZHVjdElkIjo0OTA0OSwibWF0Y2hlZFByb2R1Y3RJZCI6NDkwMTUsInByb2R1Y3RUeXBlIjoiSG9yc2UifSwiODI4OSI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTUzLCJzaXplIjo2NzE1fSwicHJvZHVjdElkIjo1ODc3MSwibWF0Y2hlZFByb2R1Y3RJZCI6NTg3MDQsInByb2R1Y3RUeXBlIjoiUmlkZXIifX19"
                  }
                },
                {
                  title: "Juniper Mixy Dressage Outfit",
                  link: "/outfit-builder#eyJzdGVwIjozLCJoaXN0b3J5Ijp7InByZXZTZWxlY3RlZFNlY3Rpb24iOjgyODl9LCJjb25maWdPcHRpb24iOiJSaWRlciAmIEhvcnNlIiwicmlkZXIiOnsidGFiSWQiOjU4ODgsIm9wdGlvbk5hbWUiOiJSaWRlciJ9LCJob3JzZSI6eyJ0YWJJZCI6NzgxNCwib3B0aW9uTmFtZSI6IkJsYWNrIn0sIm9wdGlvblRvZ2dsZVN0YXRlIjoiUmlkZXIiLCJjdXJyZW50U2VjdGlvbk9wdGlvbklkIjoxMTMzNSwic2VsZWN0aW9uIjp7Ijc4NDIiOnsicHJvZHVjdElkIjo1MzE2NywicHJvZHVjdFR5cGUiOiJSaWRlciJ9LCI3ODQ1Ijp7InByb2R1Y3RJZCI6NTE1MzcsInByb2R1Y3RUeXBlIjoiUmlkZXIifSwiNzg0NiI6eyJwcm9kdWN0SWQiOjUzNDgyLCJwcm9kdWN0VHlwZSI6IlJpZGVyIn0sIjc4NDkiOnsicHJvZHVjdElkIjo1MDYxNiwicHJvZHVjdFR5cGUiOiJIb3JzZSJ9LCI3ODUwIjp7InByb2R1Y3RJZCI6NDkyOTcsInByb2R1Y3RUeXBlIjoiSG9yc2UifSwiNzg1MSI6eyJwcm9kdWN0SWQiOjQ4OTc0LCJwcm9kdWN0VHlwZSI6IkhvcnNlIn0sIjc4NTIiOnsicHJvZHVjdElkIjo0ODk3NCwicHJvZHVjdFR5cGUiOiJIb3JzZSJ9LCI3ODUzIjp7InByb2R1Y3RJZCI6NDkwNDgsInByb2R1Y3RUeXBlIjoiSG9yc2UifSwiODI4OSI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTQ2LCJzaXplIjo2NzE1fSwicHJvZHVjdElkIjo1NDEzNCwibWF0Y2hlZFByb2R1Y3RJZCI6NTM3NzksInByb2R1Y3RUeXBlIjoiUmlkZXIifX19",
                  featuredImage: "https://www.lemieux.com/static/media/catalog/product/j/u/juniper_mixy_dressage_outfit_1_.jpg",
                  featuredTitle: "Juniper Mixy Dressage Outfit",
                  featuredSubtitle: "",
                  template: "featured",
                  actionLink: {
                    text: "Shop This Look",
                    url: "/outfit-builder#eyJzdGVwIjozLCJoaXN0b3J5Ijp7InByZXZTZWxlY3RlZFNlY3Rpb24iOjgyODl9LCJjb25maWdPcHRpb24iOiJSaWRlciAmIEhvcnNlIiwicmlkZXIiOnsidGFiSWQiOjU4ODgsIm9wdGlvbk5hbWUiOiJSaWRlciJ9LCJob3JzZSI6eyJ0YWJJZCI6NzgxNCwib3B0aW9uTmFtZSI6IkJsYWNrIn0sIm9wdGlvblRvZ2dsZVN0YXRlIjoiUmlkZXIiLCJjdXJyZW50U2VjdGlvbk9wdGlvbklkIjoxMTMzNSwic2VsZWN0aW9uIjp7Ijc4NDIiOnsicHJvZHVjdElkIjo1MzE2NywicHJvZHVjdFR5cGUiOiJSaWRlciJ9LCI3ODQ1Ijp7InByb2R1Y3RJZCI6NTE1MzcsInByb2R1Y3RUeXBlIjoiUmlkZXIifSwiNzg0NiI6eyJwcm9kdWN0SWQiOjUzNDgyLCJwcm9kdWN0VHlwZSI6IlJpZGVyIn0sIjc4NDkiOnsicHJvZHVjdElkIjo1MDYxNiwicHJvZHVjdFR5cGUiOiJIb3JzZSJ9LCI3ODUwIjp7InByb2R1Y3RJZCI6NDkyOTcsInByb2R1Y3RUeXBlIjoiSG9yc2UifSwiNzg1MSI6eyJwcm9kdWN0SWQiOjQ4OTc0LCJwcm9kdWN0VHlwZSI6IkhvcnNlIn0sIjc4NTIiOnsicHJvZHVjdElkIjo0ODk3NCwicHJvZHVjdFR5cGUiOiJIb3JzZSJ9LCI3ODUzIjp7InByb2R1Y3RJZCI6NDkwNDgsInByb2R1Y3RUeXBlIjoiSG9yc2UifSwiODI4OSI6eyJjb25maWd1cmFibGVTZWxlY3Rpb24iOnsiY29sb3IiOjEwMTQ2LCJzaXplIjo2NzE1fSwicHJvZHVjdElkIjo1NDEzNCwibWF0Y2hlZFByb2R1Y3RJZCI6NTM3NzksInByb2R1Y3RUeXBlIjoiUmlkZXIifX19"
                  }
                },
                {
                  title: "Cranberry Matching GP Outfit",
                  link: "/outfit-builder#eyJzdGVwIjozLCJoaXN0b3J5Ijp7InByZXZTZWxlY3RlZFNlY3Rpb24iOjc4NDV9LCJjb25maWdPcHRpb24iOiJSaWRlciAmIEhvcnNlIiwicmlkZXIiOnsidGFiSWQiOjU4ODgsIm9wdGlvbk5hbWUiOiJSaWRlciJ9LCJob3JzZSI6eyJ0YWJJZCI6NzgxNCwib3B0aW9uTmFtZSI6IkJheSJ9LCJvcHRpb25Ub2dnbGVTdGF0ZSI6IlJpZGVyIiwiY3VycmVudFNlY3Rpb25PcHRpb25JZCI6Nzg0Miwic2VsZWN0aW9uIjp7Ijc4NDIiOnsiY29uZmlndXJhYmxlU2VsZWN0aW9uIjp7ImNvbG9yIjoxMTI1MCwic2l6ZSI6NjcwM30sInByb2R1Y3RJZCI6NTMxNjgsIm1hdGNoZWRQcm9kdWN0SWQiOjUzMTYzLCJwcm9kdWN0VHlwZSI6IlJpZGVyIn0sIjc4NDUiOnsicHJvZHVjdElkIjo1MTUzNiwicHJvZHVjdFR5cGUiOiJSaWRlciJ9LCI3ODQ2Ijp7InByb2R1Y3RJZCI6NTM0ODMsInByb2R1Y3RUeXBlIjoiUmlkZXIifSwiNzg0OSI6eyJwcm9kdWN0SWQiOjUwNjIyLCJwcm9kdWN0VHlwZSI6IkhvcnNlIn0sIjc4NTAiOnsicHJvZHVjdElkIjo0OTI5NiwicHJvZHVjdFR5cGUiOiJIb3JzZSJ9LCI3ODUxIjp7InByb2R1Y3RJZCI6NDg5NzIsInByb2R1Y3RUeXBlIjoiSG9yc2UifSwiODI4OSI6eyJwcm9kdWN0SWQiOjU0MTM5LCJwcm9kdWN0VHlwZSI6IlJpZGVyIn19fQ==",
                  featuredImage: "https://www.lemieux.com/static/media/catalog/product/c/r/cranberry_matching_gp_outfit_suede_1_.jpg",
                  featuredTitle: "Cranberry Matching GP Outfit",
                  featuredSubtitle: "",
                  template: "featured",
                  actionLink: {
                    text: "Shop This Look",
                    url: "/outfit-builder#eyJzdGVwIjozLCJoaXN0b3J5Ijp7InByZXZTZWxlY3RlZFNlY3Rpb24iOjc4NDV9LCJjb25maWdPcHRpb24iOiJSaWRlciAmIEhvcnNlIiwicmlkZXIiOnsidGFiSWQiOjU4ODgsIm9wdGlvbk5hbWUiOiJSaWRlciJ9LCJob3JzZSI6eyJ0YWJJZCI6NzgxNCwib3B0aW9uTmFtZSI6IkJheSJ9LCJvcHRpb25Ub2dnbGVTdGF0ZSI6IlJpZGVyIiwiY3VycmVudFNlY3Rpb25PcHRpb25JZCI6Nzg0Miwic2VsZWN0aW9uIjp7Ijc4NDIiOnsiY29uZmlndXJhYmxlU2VsZWN0aW9uIjp7ImNvbG9yIjoxMTI1MCwic2l6ZSI6NjcwM30sInByb2R1Y3RJZCI6NTMxNjgsIm1hdGNoZWRQcm9kdWN0SWQiOjUzMTYzLCJwcm9kdWN0VHlwZSI6IlJpZGVyIn0sIjc4NDUiOnsicHJvZHVjdElkIjo1MTUzNiwicHJvZHVjdFR5cGUiOiJSaWRlciJ9LCI3ODQ2Ijp7InByb2R1Y3RJZCI6NTM0ODMsInByb2R1Y3RUeXBlIjoiUmlkZXIifSwiNzg0OSI6eyJwcm9kdWN0SWQiOjUwNjIyLCJwcm9kdWN0VHlwZSI6IkhvcnNlIn0sIjc4NTAiOnsicHJvZHVjdElkIjo0OTI5NiwicHJvZHVjdFR5cGUiOiJIb3JzZSJ9LCI3ODUxIjp7InByb2R1Y3RJZCI6NDg5NzIsInByb2R1Y3RUeXBlIjoiSG9yc2UifSwiODI4OSI6eyJwcm9kdWN0SWQiOjU0MTM5LCJwcm9kdWN0VHlwZSI6IlJpZGVyIn19fQ=="
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Children",
      link: "/clothing/children/casual-wear",
      featuredImage: "https://www.lemieux.com/static/cms/media/20241028_LEMIEXAW25_CAMPAIGN_CS_DAY4_LOOK005_0039p.jpg",
      featuredTitle: "AW25 Collection",
      featuredSubtitle: "New Arrival",
      template: "featured",
      submenu: [
        {
          title: "New",
          link: "/new-in/aw25/children",
          template: "default",
          submenu: [
            {
              title: "AW25 Collection",
              link: "/new-in/aw25/children",
              template: "default",
              submenu: [
                {
                  title: "Coats & Jackets",
                  link: "/new-in/aw25/children?329=6604"
                },
                {
                  title: "Tops, Hoodies & Jumpers",
                  link: "/new-in/aw25/children?329=6621"
                },
                {
                  title: "Breeches & Pull Ons",
                  link: "/new-in/aw25/children?329=6603"
                },
                { title: "Hat Silks", link: "/new-in/aw25/children?329=6610" },
                { title: "Socks", link: "/new-in/aw25/children?329=6620" },
                { title: "Accessories", link: "/new-in/aw25/accessories" },
                {
                  title: "View All",
                  link: "/new-in/aw25/children",
                  template: "link"
                }
              ]
            },
            {
              title: "AW25 Colours",
              link: "/new-in/aw25/children",
              template: "color-grid",
              colorSwatches: [
                {
                  name: "Lilac",
                  color: "#c2b5cc",
                  isNew: !0,
                  link: "/new-in/aw25/children?93=10146"
                },
                {
                  name: "Juniper",
                  color: "#3d334a",
                  isNew: !0,
                  link: "/new-in/aw25/children?93=10143"
                },
                {
                  name: "Rosemary",
                  color: "#6e756e",
                  isNew: !0,
                  link: "/new-in/aw25/children?93=10153"
                },
                {
                  name: "Damson",
                  color: "#4d3840",
                  isNew: !0,
                  link: "/new-in/aw25/children?93=10140"
                },
                {
                  name: "Cranberry",
                  color: "#b54f5e",
                  isNew: !0,
                  link: "/new-in/aw25/children?93=11250"
                },
                {
                  name: "Navy",
                  color: "#2c2e3a",
                  isNew: !0,
                  link: "/new-in/aw25/children?93=11251"
                }
              ],
              submenu: [
                {
                  title: "View All Colours",
                  link: "/new-in/aw25/children",
                  template: "link"
                }
              ]
            },
            {
              title: "New Arrivals",
              link: "/new-in/aw25/children",
              template: "featured",
              featuredImage: "https://www.lemieux.com/static/cms/media/20241028_LEMIEXAW25_CAMPAIGN_CS_DAY4_LOOK005_0039p.jpg",
              featuredTitle: "New Arrival",
              featuredSubtitle: "AW25 Collection"
            }
          ]
        },
        {
          title: "Clothing",
          link: "/clothing/children/casual-wear",
          template: "default",
          submenu: [
            {
              title: "Clothing & Collections",
              link: "/clothing/children/casual-wear",
              template: "stacked-sections",
              submenu: [
                {
                  title: "Clothing",
                  link: "/clothing/children/casual-wear",
                  template: "default",
                  submenu: [
                    {
                      title: "Hoodies & Jumpers",
                      link: "/clothing/children/casual-wear/hoodies-jumpers"
                    },
                    {
                      title: "Coats & Jackets",
                      link: "/clothing/children/casual-wear/coats-jackets"
                    },
                    {
                      title: "Base Layers",
                      link: "/clothing/children/casual-wear/base-layers"
                    },
                    {
                      title: "Shirts & Tops",
                      link: "/clothing/children/casual-wear/shirts-tops"
                    },
                    {
                      title: "Leggings & Breeches",
                      link: "/clothing/children/casual-wear/leggings-breeches"
                    },
                    {
                      title: "Hat Silks",
                      link: "/clothing/children/accessories/hat-silks"
                    },
                    {
                      title: "View All",
                      link: "/clothing/children/casual-wear",
                      template: "link"
                    }
                  ]
                },
                {
                  title: "Collections",
                  link: "/clothing/children/casual-wear",
                  template: "default",
                  submenu: [
                    { title: "AW25 Collection", link: "/new-in/aw25/children" },
                    {
                      title: "Young Rider Collection",
                      link: "/clothing/children/young-rider-collection"
                    },
                    {
                      title: "Mini Collection",
                      link: "/clothing/children/mini-collection"
                    },
                    {
                      title: "View All",
                      link: "/clothing/children/casual-wear",
                      template: "link"
                    }
                  ]
                }
              ]
            },
            {
              title: "Competition Wear & Shop by Age",
              link: "/clothing/children/casual-wear",
              template: "stacked-sections",
              submenu: [
                {
                  title: "Competition Wear",
                  link: "/clothing/children/casual-wear/competition-wear",
                  template: "default",
                  submenu: [
                    {
                      title: "Show Jackets",
                      link: "/clothing/children/casual-wear/competition-wear?327=9006"
                    },
                    {
                      title: "Show Shirts",
                      link: "/clothing/children/casual-wear/competition-wear?327=7922"
                    },
                    {
                      title: "Breeches & Leggings",
                      link: "/clothing/children/casual-wear/competition-wear?327=6523"
                    },
                    {
                      title: "View All",
                      link: "/clothing/children/casual-wear/competition-wear",
                      template: "link"
                    }
                  ]
                },
                {
                  title: "Shop by Age",
                  link: "/clothing/children/casual-wear",
                  template: "default",
                  submenu: [
                    {
                      title: "3-4 Years",
                      link: "/clothing/children/casual-wear?155=6799"
                    },
                    {
                      title: "5-6 Years",
                      link: "/clothing/children/casual-wear?155=6797"
                    },
                    {
                      title: "7-8 Years",
                      link: "/clothing/children/casual-wear?155=6798"
                    },
                    {
                      title: "9-10 Years",
                      link: "/clothing/children/casual-wear?155=6796"
                    },
                    {
                      title: "11-12 Years",
                      link: "/clothing/children/casual-wear?155=6794"
                    },
                    {
                      title: "13-14 Years",
                      link: "/clothing/children/casual-wear?155=6795"
                    }
                  ]
                }
              ]
            },
            {
              title: "Featured Collections",
              link: "/clothing/children/casual-wear",
              template: "dual-featured",
              submenu: [
                {
                  title: "3-10 Years",
                  link: "/clothing/children/mini-collection",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT07289_lifestyle_minigeorgegilet_rosemary_02h.jpg",
                  featuredTitle: "3-10 Years",
                  featuredSubtitle: "Mini Collection",
                  template: "featured"
                },
                {
                  title: "7-14 Years",
                  link: "/clothing/children/young-rider-collection",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT07216_lifestyle_young_rider_tammy_teddy_fleece_navy_01f.jpg",
                  featuredTitle: "7-14 Years",
                  featuredSubtitle: "Young Rider Collection",
                  template: "featured"
                }
              ]
            }
          ]
        },
        {
          title: "Footwear",
          link: "/clothing/children/accessories/footwear",
          template: "default",
          submenu: [
            {
              title: "Shop by Product",
              link: "/clothing/children/accessories/footwear",
              template: "default",
              submenu: [
                {
                  title: "Riding Boots",
                  link: "/clothing/children/accessories/footwear?327=7874"
                },
                {
                  title: "Trainers",
                  link: "/clothing/children/accessories/footwear?327=7875"
                },
                {
                  title: "Wellies",
                  link: "/clothing/children/accessories/footwear?327=7455"
                },
                {
                  title: "Sliders",
                  link: "/clothing/children/accessories/footwear?327=9153"
                },
                {
                  title: "View All",
                  link: "/clothing/children/accessories/footwear",
                  template: "link"
                }
              ]
            },
            {
              title: "Footwear Accessories",
              link: "/clothing/children/accessories/footwear",
              template: "default",
              submenu: [
                { title: "Socks", link: "/clothing/children/accessories/socks" },
                {
                  title: "Footwear Luggage",
                  link: "/clothing/footwear/footwear-accessories"
                },
                {
                  title: "View All",
                  link: "/clothing/children/accessories/footwear",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Footwear",
              link: "/clothing/children/accessories/footwear",
              template: "dual-featured",
              submenu: [
                {
                  title: "New In",
                  link: "/clothing/children/accessories",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT04547_studiolifestyle_juniorfieldridingboot_black_10o.jpg",
                  featuredTitle: "New In",
                  featuredSubtitle: "Junior Field Riding Boots",
                  template: "featured"
                },
                {
                  title: "Comfort outside the saddle",
                  link: "/clothing/children/accessories/footwear?327=7875",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT06514_lifestyle_youthtraxviva_stone_10d.jpg",
                  featuredTitle: "Comfort outside the saddle",
                  featuredSubtitle: "Youth Trainers",
                  template: "featured"
                }
              ]
            }
          ]
        },
        {
          title: "Accessories",
          link: "/clothing/accessories/clothing-accessories",
          template: "default",
          submenu: [
            {
              title: "Accessories",
              link: "/clothing/accessories/clothing-accessories",
              template: "default",
              submenu: [
                {
                  title: "Hat Silks",
                  link: "/clothing/children/accessories/hat-silks"
                },
                {
                  title: "Bags & Luggage",
                  link: "/clothing/children/accessories/luggage-bags"
                },
                {
                  title: "Caps & Hats",
                  link: "/clothing/children/accessories?329=6693"
                },
                { title: "Socks", link: "/clothing/children/accessories/socks" },
                {
                  title: "Gloves",
                  link: "/clothing/children/accessories/gloves"
                },
                {
                  title: "View All",
                  link: "/clothing/accessories/clothing-accessories",
                  template: "link"
                }
              ]
            },
            {
              title: "Toys",
              link: "/toys",
              template: "default",
              submenu: [
                { title: "Toy Ponies", link: "/toys/toy-pony-collection" },
                { title: "Toy Riders", link: "/toys/toy-rider-collection" },
                { title: "Hobby Horses", link: "/toys/hobby-horse-collection" },
                { title: "Tiny Ponies", link: "/toys/tiny-ponies" },
                { title: "View All", link: "/toys", template: "link" }
              ]
            },
            {
              title: "Featured Items",
              link: "/clothing/accessories/clothing-accessories",
              template: "dual-featured",
              submenu: [
                {
                  title: "Warm autumn colours",
                  link: "/clothing/accessories/clothing-accessories/caps-hats",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT07244_lifestyle_minidoublepombeanie_peachpunch_002p.jpg",
                  featuredTitle: "Warm autumn colours",
                  featuredSubtitle: "Caps & Hats",
                  template: "featured"
                },
                {
                  title: "Little best friends",
                  link: "/toys/toy-pony-collection",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT06299_product_toypony_storm_1k.jpg",
                  featuredTitle: "Little best friends",
                  featuredSubtitle: "New Toy Ponies",
                  template: "featured"
                }
              ]
            }
          ]
        },
        {
          title: "Gifts",
          link: "/gifts/for-children",
          template: "default"
        }
      ]
    },
    {
      title: "Men",
      link: "/clothing/men/casual-wear",
      featuredImage: "https://www.lemieux.com/static/cms/media/20241028_LEMIEXAW25_CAMPAIGN_CS_DAY4_LOOK005_0039p.jpg",
      featuredTitle: "New Arrival",
      featuredSubtitle: "AW25 Collection",
      template: "featured",
      submenu: [
        {
          title: "New",
          link: "/new-in/aw25/men",
          template: "default",
          submenu: [
            {
              title: "AW25 Collection",
              link: "/new-in/aw25/men",
              template: "default",
              submenu: [
                { title: "Coats & Jackets", link: "/new-in/aw25/men?329=6604" },
                {
                  title: "Tops, Hoodies & Jumpers",
                  link: "/new-in/aw25/men?329=6621"
                },
                { title: "Breeches", link: "/new-in/aw25/men?329=6603" },
                { title: "Accessories", link: "/new-in/aw25/accessories" },
                { title: "View All", link: "/new-in/aw25/men", template: "link" }
              ]
            },
            {
              title: "New Colours",
              link: "/new-in/aw25/men",
              template: "color-grid",
              colorSwatches: [
                {
                  name: "Alpine",
                  color: "#49412d",
                  isNew: !0,
                  link: "/new-in/aw25/men?195=8348"
                },
                {
                  name: "Damson",
                  color: "#4a3940",
                  isNew: !0,
                  link: "/new-in/aw25/men?93=10140"
                },
                {
                  name: "Navy",
                  color: "#2c2e39",
                  isNew: !0,
                  link: "/new-in/aw25/men?93=11251"
                }
              ],
              submenu: [
                {
                  title: "View All Colours",
                  link: "/new-in/aw25/men",
                  template: "link"
                }
              ]
            },
            {
              title: "AW25 Collection",
              link: "/new-in/aw25/men",
              template: "featured",
              featuredImage: "https://www.lemieux.com/tco-images/unsafe/1920x2560/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT07404_lifestyle_mens_showerproof_shacket_alpine_23k.jpg",
              featuredTitle: "AW25 Collection ",
              featuredSubtitle: "New Arrival"
            }
          ]
        },
        {
          title: "Clothing",
          link: "/clothing/men/casual-wear",
          template: "default",
          submenu: [
            {
              title: "Clothing",
              link: "/clothing/men/casual-wear",
              template: "default",
              submenu: [
                {
                  title: "Coats & Jackets",
                  link: "/clothing/men/casual-wear/coats-jackets"
                },
                {
                  title: "Hoodies & Jumpers",
                  link: "/clothing/men/casual-wear/hoodies-jumpers"
                },
                {
                  title: "Shirts & Tops",
                  link: "/clothing/men/casual-wear/shirts-tops"
                },
                { title: "Breeches", link: "/clothing/men/casual-wear/breeches" },
                { title: "Footwear", link: "/clothing/footwear?322=6685" },
                {
                  title: "View All",
                  link: "/clothing/men/casual-wear",
                  template: "link"
                }
              ]
            },
            {
              title: "Collections",
              link: "/clothing/men/casual-wear",
              template: "default",
              submenu: [
                { title: "AW25 Collection", link: "/new-in/aw25/men" },
                {
                  title: "Competition Wear",
                  link: "/clothing/men/casual-wear/competition-wear"
                },
                {
                  title: "View All",
                  link: "/clothing/men/casual-wear",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Collections",
              link: "/clothing/men/casual-wear",
              template: "dual-featured",
              submenu: [
                {
                  title: "Keep it Casual",
                  link: "/clothing/men/casual-wear",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT07400_lifestyle_mensclassiquepoloshirt_navy_02-4.jpg",
                  featuredTitle: "Mens T-Shirts",
                  featuredSubtitle: "Keep it Casual"
                },
                {
                  title: "Show Ready",
                  link: "/clothing/men/casual-wear/competition-wear",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT03449_lifestyle_menseliteclassipleatedbreech_beige_4[.jpg",
                  featuredTitle: "Competition Wear",
                  featuredSubtitle: "Show Ready"
                }
              ]
            }
          ]
        },
        {
          title: "Accessories",
          link: "/clothing/men/accessories",
          template: "default",
          submenu: [
            {
              title: "Accessories",
              link: "/clothing/men/accessories",
              template: "default",
              submenu: [
                {
                  title: "Caps & Hats",
                  link: "/clothing/men/accessories/caps-hats"
                },
                { title: "Luggage", link: "/clothing/men/accessories/bags" },
                { title: "Socks", link: "/clothing/men/accessories/socks" },
                {
                  title: "Eventing Bibs",
                  link: "/clothing/accessories/accessories/eventing-bibs"
                },
                {
                  title: "Whips",
                  link: "/clothing/accessories/accessories/whips"
                },
                {
                  title: "View All",
                  link: "/clothing/men/accessories",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Collections",
              link: "/clothing/men/accessories",
              template: "dual-featured",
              submenu: [
                {
                  title: "Caps",
                  link: "/clothing/men/accessories/caps-hats",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT03920_lifestyle_unionjackcap_navy_2p.jpg",
                  featuredTitle: "Caps",
                  featuredSubtitle: "Bestsellers"
                },
                {
                  title: "Luggage",
                  link: "/clothing/men/accessories/bags",
                  featuredImage: "https://www.lemieux.com/static/cms/media/GROUP_lifestyle_eliteluggage_navy_3.jpg",
                  featuredTitle: "Perfect Organisation",
                  featuredSubtitle: "Luggage"
                }
              ]
            }
          ]
        },
        {
          title: "Gifts",
          link: "/gifts/for-him",
          template: "default"
        }
      ]
    },
    {
      title: "Toys",
      link: "/toys",
      template: "featured",
      submenu: [
        {
          title: "Toy Pony Builder",
          link: "/pony-kit-builder",
          template: "featured",
          featuredImage: "https://www.lemieux.com/static/cms/media/Build_your_toy_outfit_Toy_Pony_Builder_1k.jpg",
          featuredTitle: "Build your toy outfit",
          featuredSubtitle: "Toy Pony Builder",
          submenu: [
            {
              title: "Toy Pony Builder",
              link: "/pony-kit-builder",
              template: "outfit-builder",
              featuredImage: "https://www.lemieux.com/tco-images/unsafe/1920x960/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Toy-Pony-outfit%20builder.png",
              featuredTitle: "Outfit Builder",
              featuredSubtitle: "Build your toy outfit",
              actionLink: { text: "Create your outfit", url: "/outfit-builder" }
            }
          ]
        },
        {
          title: "Toy Ponies",
          link: "/toys/toy-pony-collection",
          template: "default",
          submenu: [
            {
              title: "Shop by Product & Toy Pony Collection",
              link: "/toys/toy-pony-collection",
              template: "stacked-sections",
              submenu: [
                {
                  title: "Shop by Product",
                  link: "/toys/toy-pony-collection",
                  template: "default",
                  submenu: [
                    { title: "Toy Ponies", link: "/toys/toy-pony-collection" },
                    {
                      title: "Toy Pony Tack",
                      link: "/toys/toy-pony-collection?329=6693"
                    },
                    {
                      title: "Toy Pony Grooming Kits",
                      link: "/toys/toy-pony-collection?329=6694"
                    },
                    {
                      title: "Toy Pony Saddle Pads",
                      link: "/toys/toy-pony-collection?329=6695"
                    },
                    {
                      title: "Toy Pony Fly Hoods",
                      link: "/toys/toy-pony-collection?329=6696"
                    },
                    {
                      title: "Toy Pony Boots",
                      link: "/toys/toy-pony-collection?329=6697"
                    },
                    {
                      title: "Toy Pony Bandages",
                      link: "/toys/toy-pony-collection?329=6698"
                    },
                    {
                      title: "Toy Pony Headcollars",
                      link: "/toys/toy-pony-collection?329=6699"
                    },
                    {
                      title: "Toy Pony Rugs",
                      link: "/toys/toy-pony-collection?329=6700"
                    },
                    {
                      title: "Toy Pony Stable & Yard",
                      link: "/toys/toy-pony-collection?329=6701"
                    },
                    {
                      title: "View All",
                      link: "/toys/toy-pony-collection",
                      template: "link"
                    }
                  ]
                },
                {
                  title: "Toy Pony Collection",
                  link: "/toys/toy-pony-collection",
                  template: "default",
                  submenu: [
                    {
                      title: "New In",
                      link: "/toys/toy-pony-collection?sort=newest"
                    },
                    {
                      title: "AW25 Collection",
                      link: "/toys/toy-pony-collection?collection=aw25"
                    }
                  ]
                }
              ]
            },
            {
              title: "Shop by Color",
              link: "/toys/toy-pony-collection",
              template: "color-grid",
              colorSwatches: [
                {
                  name: "Lilac",
                  color: "#c0b5ca",
                  isNew: !0,
                  link: "/toys/toy-pony-sets/lilac"
                },
                {
                  name: "Cranberry",
                  color: "#a8555f",
                  isNew: !0,
                  link: "/toys/toy-pony-sets/cranberry"
                },
                {
                  name: "Blossom",
                  color: "#c89fa5",
                  isNew: !1,
                  link: "/toys/toy-pony-sets/blossom"
                },
                {
                  name: "Lagoon",
                  color: "#638e90",
                  isNew: !1,
                  link: "/toys/toy-pony-sets/lagoon"
                },
                {
                  name: "Ice Blue",
                  color: "#5b738c",
                  isNew: !1,
                  link: "/toys/toy-pony-sets/ice-blue"
                },
                {
                  name: "Hunter Green",
                  color: "#305a1e",
                  isNew: !1,
                  link: "/toys/toy-pony-sets/hunter-green"
                },
                {
                  name: "White",
                  color: "#f0f0f0",
                  isNew: !1,
                  link: "/toys/toy-pony-sets/white"
                }
              ],
              submenu: [
                {
                  title: "View All Colours",
                  link: "/toys/toy-pony-collection",
                  template: "link"
                }
              ]
            },
            {
              title: "Toy Pony Collection",
              link: "/toys/toy-pony-collection",
              template: "featured",
              featuredImage: "https://www.lemieux.com/tco-images/unsafe/414x552/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT07142_lifestyle_toyponyrug_cranberry_3-2.jpg",
              featuredTitle: "Toy Pony Collection",
              featuredSubtitle: "",
              actionLink: { text: "View All", url: "/toys/toy-pony-collection" }
            }
          ]
        },
        {
          title: "Toy Riders",
          link: "/toys/toy-rider-collection",
          template: "default",
          submenu: [
            {
              title: "Toy Rider Collection",
              link: "/toys/toy-rider-collection",
              template: "default",
              submenu: [
                { title: "Toy Riders", link: "/toys/toy-rider-collection" },
                {
                  title: "Toy Rider Outfits",
                  link: "/toys/toy-rider-collection?category=outfits"
                },
                {
                  title: "View All",
                  link: "/toys/toy-rider-collection",
                  template: "link"
                }
              ]
            },
            {
              title: "Toy Riders",
              link: "/toys/toy-rider-collection",
              template: "default",
              submenu: [
                {
                  title: "Toy Rider Olivia",
                  link: "/toys/toy-rider-collection?rider=olivia",
                  icon: "https://www.lemieux.com/static/cms/media/IT06957-Toy%20Rider%20Olivia-1.png"
                },
                {
                  title: "Toy Rider Chloe",
                  link: "/toys/toy-rider-collection?rider=chloe",
                  icon: "https://www.lemieux.com/static/cms/media/IT06956-Toy%20Rider%20Chloe-1.png"
                },
                {
                  title: "Toy Rider Maya",
                  link: "/toys/toy-rider-collection?rider=maya",
                  icon: "https://www.lemieux.com/static/cms/media/IT06958-Toy-Rider%20Maya.png"
                }
              ]
            },
            {
              title: "Featured Collections",
              link: "/toys/toy-rider-collection",
              template: "dual-featured",
              submenu: [
                {
                  title: "Best Seller",
                  link: "/toys/toy-rider-collection?rider=olivia",
                  featuredImage: "https://www.lemieux.com/static/media/catalog/product/i/t/it06957_lifestyle_toyrider_olivia_3.jpg",
                  featuredTitle: "Toy Rider Olivia",
                  featuredSubtitle: "Best Seller",
                  template: "featured"
                },
                {
                  title: "New Arrival",
                  link: "/toys/toy-rider-collection",
                  featuredImage: "https://www.lemieux.com/static/media/catalog/product/g/r/group_lifestyle_toydoll_chloe_maya_olivia_3.jpg",
                  featuredTitle: "Toy Pony Riders",
                  featuredSubtitle: "New Arrival",
                  template: "featured"
                }
              ]
            }
          ]
        },
        {
          title: "Hobby Horses",
          link: "/toys/hobby-horse-collection",
          template: "default",
          submenu: [
            {
              title: "Shop by Product & Hobby Horse Collection",
              link: "/toys/hobby-horse-collection",
              template: "stacked-sections",
              submenu: [
                {
                  title: "Shop by Product",
                  link: "/toys/hobby-horse-collection",
                  template: "default",
                  submenu: [
                    {
                      title: "Hobby Horses",
                      link: "/toys/hobby-horse-collection"
                    },
                    {
                      title: "Hobby Horse Tack",
                      link: "/toys/hobby-horse-collection?category=tack"
                    },
                    {
                      title: "Hobby Horse Fly Hoods",
                      link: "/toys/hobby-horse-collection?category=fly-hoods"
                    },
                    {
                      title: "Hobby Horse Headcollars",
                      link: "/toys/hobby-horse-collection?category=headcollars"
                    },
                    {
                      title: "Hobby Horse Rosettes",
                      link: "/toys/hobby-horse-collection?category=rosettes"
                    },
                    {
                      title: "Hobby Horse Jumps",
                      link: "/toys/hobby-horse-collection?category=jumps"
                    },
                    {
                      title: "Hat Silks",
                      link: "/toys/hobby-horse-collection?category=hat-silks"
                    },
                    {
                      title: "View All",
                      link: "/toys/hobby-horse-collection",
                      template: "link"
                    }
                  ]
                },
                {
                  title: "Hobby Horse Collection",
                  link: "/toys/hobby-horse-collection",
                  template: "default",
                  submenu: [
                    {
                      title: "New In",
                      link: "/toys/hobby-horse-collection?sort=newest"
                    },
                    {
                      title: "AW25 Collection",
                      link: "/toys/hobby-horse-collection?collection=aw25"
                    }
                  ]
                }
              ]
            },
            {
              title: "Shop by Color",
              link: "/toys/hobby-horse-collection",
              template: "color-grid",
              colorSwatches: [
                {
                  name: "Lilac",
                  color: "#c0b5ca",
                  isNew: !0,
                  link: "/toys/hobby-horse-collection?color=lilac"
                },
                {
                  name: "Cranberry",
                  color: "#a8555f",
                  isNew: !0,
                  link: "/toys/hobby-horse-collection?color=cranberry"
                },
                {
                  name: "Blossom",
                  color: "#c89fa5",
                  link: "/toys/hobby-horse-collection?color=blossom"
                },
                {
                  name: "Lagoon",
                  color: "#638e90",
                  link: "/toys/hobby-horse-collection?color=lagoon"
                }
              ],
              submenu: [
                {
                  title: "View All Colours",
                  link: "/toys/hobby-horse-collection",
                  template: "link"
                }
              ]
            },
            {
              title: "Hobby Horse Collection",
              link: "/toys/hobby-horse",
              template: "featured",
              featuredImage: "https://conversionrate-store.github.io/a-b_images/lemieux/hobby_horse.webp",
              featuredTitle: "Hobby Horse Collection",
              featuredSubtitle: "",
              actionLink: { text: "View All", url: "/toys/hobby-horse" }
            }
          ]
        },
        {
          title: "Tiny Ponies",
          link: "/toys/tiny-ponies",
          template: "default",
          submenu: [
            {
              title: "Tiny Ponies",
              link: "/toys/tiny-ponies",
              template: "default",
              submenu: [
                {
                  title: "Tiny Pony Dream",
                  link: "/toys/tiny-ponies?pony=dream",
                  icon: "https://www.lemieux.com/tco-images/unsafe/1366x1366/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Tiny-Pony%20Dream.png"
                },
                {
                  title: "Tiny Pony Freya",
                  link: "/toys/tiny-ponies?pony=freya",
                  icon: "https://www.lemieux.com/tco-images/unsafe/1366x1366/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Tiny-Pony%20Freya.png"
                },
                {
                  title: "Tiny Pony Sammy",
                  link: "/toys/tiny-ponies?pony=sammy",
                  icon: "https://www.lemieux.com/tco-images/unsafe/1366x1366/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Tiny-Pony%20Sam.png"
                },
                {
                  title: "Tiny Pony Skye",
                  link: "/toys/tiny-ponies?pony=skye",
                  icon: "https://www.lemieux.com/tco-images/unsafe/1366x1366/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Tiny-Pony%20Skye.png"
                },
                {
                  title: "Tiny Pony Thomas",
                  link: "/toys/tiny-ponies?pony=thomas",
                  icon: "https://www.lemieux.com/tco-images/unsafe/1366x1366/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Tiny-Pony%20Thomas.png"
                },
                {
                  title: "View All",
                  link: "/toys/tiny-ponies",
                  template: "link"
                }
              ]
            },
            {
              title: "Tiny Pony Collection",
              link: "/toys/tiny-ponies",
              template: "featured",
              featuredImage: "https://www.lemieux.com/static/media/catalog/product/g/r/group_lifestyle_pocketponies_3.jpg",
              featuredTitle: "Tiny Pony Collection",
              featuredSubtitle: "",
              actionLink: { text: "View All", url: "/toys/tiny-ponies" }
            }
          ]
        }
      ]
    },
    {
      title: "Explore",
      link: "/outfit-builder",
      featuredImage: "https://www.lemieux.com/static/cms/media/IT07094_lifestyle_suededressagesquare_lilac_7-(1)-1.jpg",
      featuredTitle: "Outfit Builder",
      featuredSubtitle: "For you and your horse",
      template: "featured",
      submenu: [
        {
          title: "Outfit Builder",
          link: "/outfit-builder",
          template: "default",
          submenu: [
            {
              title: "Build Your Own",
              link: "/outfit-builder",
              template: "outfit-builder",
              featuredImage: "https://conversionrate-store.github.io/a-b_images/lemieux/outfit-builder-women.webp",
              featuredTitle: "Outfit Builder",
              featuredSubtitle: "For you and your horse"
            },
            {
              title: "Outfits By Horse Colour",
              link: "/outfit-builder-outfits",
              template: "default",
              submenu: [
                {
                  title: "Bay",
                  link: "/outfit-builder-outfits/bay",
                  icon: "https://www.lemieux.com/tco-images/unsafe/1920x1920/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Bay-png-1.png"
                },
                {
                  title: "Grey",
                  link: "/outfit-builder-outfits/grey",
                  icon: "https://www.lemieux.com/tco-images/unsafe/1920x1920/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Grey-png-3.png"
                },
                {
                  title: "Chestnut",
                  link: "/outfit-builder-outfits/chestnut",
                  icon: "https://www.lemieux.com/tco-images/unsafe/1920x1920/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Chestnut-png-3.png"
                },
                {
                  title: "Black",
                  link: "/outfit-builder-outfits/black",
                  icon: "https://www.lemieux.com/tco-images/unsafe/1920x1920/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Black-horse-PNG.png"
                },
                {
                  title: "Dun",
                  link: "/outfit-builder-outfits/dun",
                  icon: "https://www.lemieux.com/tco-images/unsafe/1920x1920/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Dun-png-3.png"
                },
                {
                  title: "Dapple Grey",
                  link: "/outfit-builder-outfits/dapple-grey",
                  icon: "https://www.lemieux.com/tco-images/unsafe/1920x1920/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Dapple-Grey-png-3.png"
                },
                {
                  title: "Palomino",
                  link: "/outfit-builder-outfits/palomino",
                  icon: "https://www.lemieux.com/tco-images/unsafe/1920x1920/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Palomino-png-1.png"
                },
                {
                  title: "View All",
                  link: "/outfit-builder-outfits",
                  template: "link"
                }
              ]
            },
            {
              title: "Outfits By Colour",
              link: "/outfit-builder-outfits",
              template: "color-grid",
              colorSwatches: [
                {
                  name: "Lagoon",
                  color: "#638e90",
                  isNew: !0,
                  link: "/outfit-builder-outfits/lagoon"
                },
                {
                  name: "Juniper",
                  color: "#3d334a",
                  isNew: !0,
                  link: "/outfit-builder-outfits/juniper"
                },
                {
                  name: "Rosemary",
                  color: "#6e756e",
                  isNew: !0,
                  link: "/outfit-builder-outfits/rosemary"
                },
                {
                  name: "Damson",
                  color: "#4d3840",
                  isNew: !0,
                  link: "/outfit-builder-outfits/damson"
                },
                {
                  name: "Cranberry",
                  color: "#b54f5e",
                  isNew: !0,
                  link: "/outfit-builder-outfits/cranberry"
                },
                {
                  name: "Navy",
                  color: "#2c2e3a",
                  isNew: !0,
                  link: "/outfit-builder-outfits/navy-cranberry"
                }
              ],
              submenu: [
                {
                  title: "View All Colours",
                  link: "/outfit-builder-outfits",
                  template: "link"
                }
              ]
            },
            {
              title: "Outfits By Type",
              link: "/outfit-builder-outfits",
              template: "default",
              submenu: [
                {
                  title: "Matchy Matchy",
                  link: "/outfit-builder-outfits/matchy-matchy"
                },
                {
                  title: "Mixy Matchy",
                  link: "/outfit-builder-outfits/mixy-matchy"
                },
                {
                  title: "Competition",
                  link: "/outfit-builder-outfits/competition"
                },
                {
                  title: "View All",
                  link: "/outfit-builder-outfits",
                  template: "link"
                }
              ]
            }
          ]
        },
        {
          title: "Toy Pony Outfit Builder",
          link: "/pony-kit-builder",
          template: "default",
          submenu: [
            {
              title: "Toy Pony Builder",
              link: "/pony-kit-builder",
              template: "featured",
              featuredImage: "https://www.lemieux.com/static/cms/media/Toy-Pony-outfit%20builder.png",
              featuredTitle: "Toy Pony Builder",
              featuredSubtitle: "Build your toy outfit"
            }
          ]
        },
        {
          title: "Shop by Colour",
          link: "/collections",
          template: "default",
          submenu: [
            {
              title: "Shop by Colour",
              link: "/collections",
              template: "multi-color-grid",
              colorSwatches: [
                {
                  name: "Lilac",
                  color: "#c0b5ca",
                  isNew: !0,
                  link: "/collections/colour/lilac"
                },
                {
                  name: "Cranberry",
                  color: "#a8555f",
                  isNew: !0,
                  link: "/collections/colour/cranberry"
                },
                {
                  name: "Blossom",
                  color: "#c89fa5",
                  isNew: !1,
                  link: "/collections/colour/blossom"
                },
                {
                  name: "Lagoon",
                  color: "#638e90",
                  isNew: !1,
                  link: "/collections/colour/lagoon"
                },
                {
                  name: "Ice Blue",
                  color: "#5b738c",
                  isNew: !1,
                  link: "/collections/colour/ice-blue"
                },
                {
                  name: "Hunter Green",
                  color: "#305a1e",
                  isNew: !1,
                  link: "/collections/colour/hunter-green"
                },
                {
                  name: "White",
                  color: "#f0f0f0",
                  isNew: !1,
                  link: "/collections/colour/white"
                },
                {
                  name: "Mimosa",
                  color: "#f4d03f",
                  isNew: !1,
                  link: "/collections/colour/mimosa"
                },
                {
                  name: "Peony",
                  color: "#d7bde2",
                  isNew: !1,
                  link: "/collections/colour/peony"
                },
                {
                  name: "Aqua",
                  color: "#7fb3d3",
                  isNew: !1,
                  link: "/collections/colour/aqua"
                }
              ],
              submenu: [
                { title: "View All", link: "/collections", template: "link" }
              ]
            },
            {
              title: "Shop by Colour",
              link: "/collections",
              template: "multi-color-grid",
              colorSwatches: [
                {
                  name: "Rosemary",
                  color: "#6e756e",
                  isNew: !0,
                  link: "/collections/colour/rosemary"
                },
                {
                  name: "Juniper",
                  color: "#3d334a",
                  isNew: !0,
                  link: "/collections/colour/juniper"
                },
                {
                  name: "Damson",
                  color: "#4d3840",
                  isNew: !0,
                  link: "/collections/colour/damson"
                },
                {
                  name: "Navy",
                  color: "#2c2e3a",
                  isNew: !0,
                  link: "/collections/colour/navy-cranberry"
                },
                {
                  name: "Wisteria",
                  color: "#bb8fce",
                  isNew: !1,
                  link: "/collections/colour/wisteria"
                },
                {
                  name: "Glacier",
                  color: "#aed6f1",
                  isNew: !1,
                  link: "/collections/colour/glacier"
                },
                {
                  name: "Azure",
                  color: "#85c1e9",
                  isNew: !1,
                  link: "/collections/colour/azure"
                },
                {
                  name: "Peacock",
                  color: "#17a2b8",
                  isNew: !1,
                  link: "/collections/colour/peacock"
                },
                {
                  name: "Sage",
                  color: "#a9dfbf",
                  isNew: !1,
                  link: "/collections/colour/sage"
                },
                {
                  name: "Fern",
                  color: "#58d68d",
                  isNew: !1,
                  link: "/collections/colour/fern"
                }
              ]
            },
            {
              title: "Colour Collection",
              link: "/collections/colour/lilac",
              template: "featured",
              featuredImage: "https://www.lemieux.com/tco-images/unsafe/1920x2560/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT07083_lifestyle_suedeccsquare_lilac_4-3.jpg",
              featuredTitle: "Lilac",
              featuredSubtitle: "Colour Collection"
            }
          ]
        },
        {
          title: "Shop by Discipline",
          link: "/discipline",
          template: "default",
          submenu: [
            {
              title: "Shop by Discipline",
              link: "/discipline",
              template: "quad-featured",
              submenu: [
                {
                  title: "Eventing",
                  link: "/discipline/eventing-essentials",
                  template: "featured",
                  featuredImage: "https://www.lemieux.com/tco-images/unsafe/1920x2560/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/EventingXC_Menu-1.jpg",
                  featuredTitle: "Eventing",
                  actionLink: {
                    text: "Shop now",
                    url: "/discipline/eventing-essentials"
                  }
                },
                {
                  title: "Show Jumping",
                  link: "/show-jumping-essentials",
                  template: "featured",
                  featuredImage: "https://www.lemieux.com/static/cms/media/Showjumping_Menu-1.jpg",
                  featuredTitle: "Show Jumping",
                  actionLink: {
                    text: "Shop now",
                    url: "/show-jumping-essentials"
                  }
                },
                {
                  title: "Dressage",
                  link: "/dressage-essentials",
                  template: "featured",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT03739_lifestyle_arikadressagebridle_brown_1%20copy-2-3.jpg",
                  featuredTitle: "Dressage",
                  actionLink: {
                    text: "Shop now",
                    url: "/dressage-essentials"
                  }
                },
                {
                  title: "Showing",
                  link: "/discipline/showing",
                  template: "featured",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT04491_lifestlye_arikasimuwoolcontoureddressagegirth_black_1-4.jpg",
                  featuredTitle: "Showing",
                  actionLink: {
                    text: "Shop now",
                    url: "/discipline/showing"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      title: "Gifts",
      link: "/gifts",
      template: "gifts",
      textColor: "#C9830A",
      submenu: [
        {
          title: "Gift Ideas",
          link: "/gifts",
          template: "default",
          submenu: [
            { title: "Gift Vouchers", link: "/e-gift-card-173" },
            { title: "Gift Sets", link: "/gifts/gift-sets" },
            { title: "Toys", link: "/gifts/toys" }
          ]
        },
        {
          title: "By Recipient",
          link: "/gifts",
          template: "default",
          submenu: [
            { title: "For Her", link: "/gifts/for-her" },
            { title: "For Him", link: "/gifts/for-him" },
            { title: "For Children", link: "/gifts/for-children" },
            { title: "For Horses", link: "/gifts/for-horses" }
          ]
        },
        {
          title: "Toys",
          link: "/toys",
          template: "default",
          submenu: [
            { title: "Toy Riders", link: "/toys/toy-rider-collection" },
            { title: "Toy Ponies", link: "/toys/toy-pony-collection" },
            { title: "Tiny Ponies", link: "/toys/tiny-ponies" },
            { title: "Hobby Horses", link: "/toys/hobby-horse-collection" },
            { title: "Toy Puppies", link: "/toys/toy-puppies" }
          ]
        },
        {
          title: "Not Sure What to Get?",
          link: "/e-gift-card-173",
          template: "featured",
          featuredImage: "https://www.lemieux.com/tco-images/unsafe/1920x1920/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/LM-Web%20Gift%20Vouchers%201x1.jpg",
          featuredTitle: "Gift Vouchers",
          featuredSubtitle: "Create Your Unique",
          actionLink: {
            text: "Customise Now",
            url: "/e-gift-card-173"
          }
        },
        {
          title: "Children Favorite",
          link: "/gifts/gift-sets",
          template: "featured",
          featuredImage: "https://www.lemieux.com/static/media/catalog/product/g/r/group_lifestyle_toydoll_chloe_maya_olivia_3.jpg",
          featuredTitle: "New Arrival",
          featuredSubtitle: "Toy Riders Collection",
          actionLink: {
            text: "View All",
            url: "/gifts/gift-sets"
          }
        }
      ]
    },
    {
      title: "Outlet",
      link: "/lemieux-outlet",
      template: "outlet",
      textColor: "#8e1538",
      submenu: [
        {
          title: "Shop All",
          link: "/lemieux-outlet",
          template: "link"
        },
        {
          title: "Horse",
          link: "/lemieux-outlet/horse",
          template: "default",
          submenu: [
            {
              title: "All Horse Outlet",
              link: "/lemieux-outlet/horse",
              template: "default",
              submenu: [
                { title: "All Horse Outlet", link: "/lemieux-outlet/horse" },
                {
                  title: "Saddle Pads",
                  link: "/lemieux-outlet/horse/saddle-pads"
                },
                { title: "Rugs", link: "/lemieux-outlet/horse/rugs" },
                {
                  title: "Saddlery & Tack",
                  link: "/lemieux-outlet/horse/saddlery-tack"
                },
                {
                  title: "Boots & Bandages",
                  link: "/lemieux-outlet/horse/boots-bandages"
                },
                {
                  title: "Headcollars",
                  link: "/lemieux-outlet/horse/headcollars"
                }
              ]
            },
            {
              title: "Featured Horse Outlet",
              link: "/lemieux-outlet/horse",
              template: "dual-featured",
              submenu: [
                {
                  title: "All Horse Outlet",
                  link: "/lemieux-outlet/horse",
                  template: "featured",
                  featuredImage: "https://www.lemieux.com/tco-images/unsafe/414x552/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/LM-Outlet-25-Long-Logo.jpg",
                  featuredTitle: "All Horse Outlet"
                },
                {
                  title: "Saddle Pads",
                  link: "/lemieux-outlet/horse/saddle-pads",
                  template: "featured",
                  featuredImage: "https://www.lemieux.com/tco-images/unsafe/1920x2560/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT01183_lifestyle_loirememoryccsquare_mulberry_3.jpg",
                  featuredTitle: "Saddle Pads"
                }
              ]
            }
          ]
        },
        {
          title: "Women",
          link: "/lemieux-outlet/women",
          template: "default",
          submenu: [
            {
              title: "All Women Outlet",
              link: "/lemieux-outlet/women",
              template: "default",
              submenu: [
                {
                  title: "Coats & Jackets",
                  link: "/lemieux-outlet/women/coats-jackets"
                },
                {
                  title: "Tops, Hoodies & Jumpers",
                  link: "/lemieux-outlet/women/tops-hoodies-jumpers"
                },
                {
                  title: "Breeches & Pull Ons",
                  link: "/lemieux-outlet/women/breeches-pull-ons"
                },
                { title: "Footwear", link: "/lemieux-outlet/women/footwear" },
                {
                  title: "Accessories",
                  link: "/lemieux-outlet/women/accessories"
                },
                {
                  title: "View All",
                  link: "/lemieux-outlet/women",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Women Outlet",
              link: "/lemieux-outlet/women",
              template: "featured",
              featuredImage: "https://www.lemieux.com/tco-images/unsafe/414x552/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/LM-Outlet-25-Long-Logo.jpg",
              featuredTitle: "All Women Outlet"
            }
          ]
        },
        {
          title: "Children",
          link: "/lemieux-outlet/children",
          template: "default",
          submenu: [
            {
              title: "All Children Outlet",
              link: "/lemieux-outlet/children",
              template: "default",
              submenu: [
                {
                  title: "Coats & Jackets",
                  link: "/lemieux-outlet/children/coats-jackets"
                },
                {
                  title: "Tops, Hoodies & Jumpers",
                  link: "/lemieux-outlet/children/tops-hoodies-jumpers"
                },
                {
                  title: "Breeches & Pull Ons",
                  link: "/lemieux-outlet/children/breeches-pull-ons"
                },
                { title: "Footwear", link: "/lemieux-outlet/children/footwear" },
                {
                  title: "Accessories",
                  link: "/lemieux-outlet/children/accessories"
                },
                {
                  title: "View All",
                  link: "/lemieux-outlet/children",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Children Outlet",
              link: "/lemieux-outlet/children",
              template: "featured",
              featuredImage: "https://www.lemieux.com/tco-images/unsafe/414x552/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/LM-Outlet-25-Long-Logo.jpg",
              featuredTitle: "All Children Outlet"
            }
          ]
        },
        {
          title: "Men",
          link: "/lemieux-outlet/men",
          template: "default",
          submenu: [
            {
              title: "All Men Outlet",
              link: "/lemieux-outlet/men",
              template: "default",
              submenu: [
                {
                  title: "Coats & Jackets",
                  link: "/lemieux-outlet/men/coats-jackets"
                },
                {
                  title: "Tops, Hoodies & Jumpers",
                  link: "/lemieux-outlet/men/tops-hoodies-jumpers"
                },
                { title: "Breeches", link: "/lemieux-outlet/men/breeches" },
                {
                  title: "View All",
                  link: "/lemieux-outlet/men",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Men Outlet",
              link: "/lemieux-outlet/men",
              template: "featured",
              featuredImage: "https://www.lemieux.com/tco-images/unsafe/414x552/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/LM-Outlet-25-Long-Logo.jpg",
              featuredTitle: "All Men Outlet"
            }
          ]
        },
        {
          title: "Toys",
          link: "/lemieux-outlet/toys",
          template: "default",
          submenu: [
            {
              title: "All Toys Outlet",
              link: "/lemieux-outlet/toys",
              template: "default",
              submenu: [
                { title: "Toy Pony", link: "/lemieux-outlet/toys/toy-pony" },
                {
                  title: "Hobby Horse",
                  link: "/lemieux-outlet/toys/hobby-horse"
                },
                {
                  title: "View All",
                  link: "/lemieux-outlet/toys",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Toys Outlet",
              link: "/lemieux-outlet/toys",
              template: "featured",
              featuredImage: "https://www.lemieux.com/tco-images/unsafe/414x552/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/LM-Outlet-25-Long-Logo.jpg",
              featuredTitle: "All Toys Outlet"
            }
          ]
        }
      ]
    }
  ], S = (f, e, t, n = "", i = "", l = "") => {
    window.dataLayer = window.dataLayer || [];
    const a = {
      event_name: f,
      event_desc: e,
      event_type: t,
      event_loc: n,
      event_loc2: i,
      event_loc3: l
    };
    window.dataLayer.push(a), console.table(a);
  };
  function g(f, e, t, n, i) {
    S(
      "exp_nav_click",
      f,
      e,
      t,
      n || "",
      i || ""
    );
  }
  class T {
    constructor(e = "B") {
      this.hideTimeout = null, this.currentIndex = null, this.megaMenuMouseEnterHandler = null, this.megaMenuMouseLeaveHandler = null, this.variant = e;
    }
    createDesktopNavigation() {
      const t = (
        /* html */
        `
      <ul class="crs-nav-list">
        ${p.map((i, l) => this.createNavigationItemHTML(i, l)).join("")}
      </ul>
      <div class="crs-mega-menu" style="display: none;"></div>
    `
      ), n = document.createElement("div");
      return n.className = "crs-navigation-content", n.innerHTML = t.trim(), this.addEventListeners(n), n;
    }
    createNavigationItemHTML(e, t) {
      const n = e.template ? `crs-template-${e.template}` : "", i = e.textColor ? `style="color: ${e.textColor}"` : "", l = e.submenu && e.submenu.length > 0 ? "data-has-submenu" : "";
      return (
        /* html */
        `
      <li class="crs-nav-item">
        <a href="${e.link}" class="crs-nav-link ${n}" ${i} ${l} data-index="${t}" data-analytics="${e.title}">
          ${e.title}
        </a>
      </li>
    `
      );
    }
    addEventListeners(e) {
      const t = e.querySelectorAll(
        ".crs-nav-link[data-has-submenu]"
      );
      this.addAnalyticsTracking(e);
      let n = null;
      t.forEach((i) => {
        const l = parseInt(i.getAttribute("data-index") || "0");
        i.addEventListener("mouseenter", () => {
          this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = null), n && (clearTimeout(n), n = null), this.currentIndex !== null && this.currentIndex !== l ? (this.currentIndex = l, this.showMegaMenu(l), this.addMegaMenuEventListeners()) : (this.currentIndex = l, n = window.setTimeout(() => {
            this.currentIndex === l && (this.showMegaMenu(l), this.addMegaMenuEventListeners());
          }, 50));
        });
      }), e.addEventListener("mouseleave", (i) => {
        var a;
        const l = i.relatedTarget;
        l && (e.contains(l) || (a = document.querySelector(".crs-mega-menu")) != null && a.contains(l)) || (n && (clearTimeout(n), n = null), this.hideTimeout = window.setTimeout(() => {
          this.hideMegaMenu(), this.currentIndex = null;
        }, 200));
      }), e.addEventListener("mouseenter", () => {
        this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = null);
      });
    }
    addMegaMenuEventListeners() {
      const e = document.querySelector(".crs-mega-menu");
      e && (this.megaMenuMouseEnterHandler && e.removeEventListener("mouseenter", this.megaMenuMouseEnterHandler), this.megaMenuMouseLeaveHandler && e.removeEventListener("mouseleave", this.megaMenuMouseLeaveHandler), this.megaMenuMouseEnterHandler = this.handleMegaMenuMouseEnter.bind(this), this.megaMenuMouseLeaveHandler = this.handleMegaMenuMouseLeave.bind(this), e.addEventListener("mouseenter", this.megaMenuMouseEnterHandler), e.addEventListener("mouseleave", this.megaMenuMouseLeaveHandler));
    }
    handleMegaMenuMouseEnter() {
      this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = null);
    }
    handleMegaMenuMouseLeave() {
      this.hideTimeout = window.setTimeout(() => {
        this.hideMegaMenu(), this.currentIndex = null;
      }, 200);
    }
    addAnalyticsTracking(e) {
      e.addEventListener("click", (t) => {
        var a, s;
        const i = t.target.closest("a[data-analytics]");
        if (!i) return;
        const l = i.getAttribute("data-analytics");
        if (l) {
          if (i.classList.contains("crs-nav-link"))
            g(l, "Link", l);
          else if (i.classList.contains("crs-sidebar-link")) {
            const o = i.getAttribute("data-parent");
            o && g(l, "Link", o, l);
          } else if (i.classList.contains("crs-featured-section-link")) {
            const o = i.getAttribute("data-type"), r = i.getAttribute("data-parent"), c = i.getAttribute("data-grandparent");
            r && g(l, o, c || r, r, "Image section");
          } else if (i.classList.contains("crs-color-link")) {
            const o = i.getAttribute("data-parent"), r = i.getAttribute("data-grandparent");
            o && g(l, "Link", r || o, o, "AW25 Colours");
          } else if (i.classList.contains("crs-collection-link") || i.classList.contains("crs-view-all-link")) {
            const o = i.getAttribute("data-parent"), r = i.getAttribute("data-grandparent");
            if (o) {
              const c = ((s = (a = i.closest(".crs-collections-section")) == null ? void 0 : a.querySelector(".crs-section-title")) == null ? void 0 : s.textContent) || "";
              g(l, "Link", r || o, o, c);
            }
          }
        }
      });
    }
    showMegaMenu(e) {
      const t = document.querySelector(".crs-mega-menu");
      if (!t) return;
      const n = p[e];
      if (!n.submenu) return;
      document.querySelectorAll(".crs-nav-link[data-has-submenu]").forEach((a) => a.classList.remove("crs-nav-link-active"));
      const l = document.querySelector(`.crs-nav-link[data-index="${e}"]`);
      l && l.classList.add("crs-nav-link-active"), t.innerHTML = "", t.appendChild(this.createMegaMenuContent(n)), t.style.display = "block", setTimeout(() => {
        t.classList.add("crs-visible");
      }, 10);
    }
    hideMegaMenu() {
      const e = document.querySelector(".crs-mega-menu");
      if (!e) return;
      document.querySelectorAll(".crs-nav-link[data-has-submenu]").forEach((n) => n.classList.remove("crs-nav-link-active")), e.classList.remove("crs-visible"), setTimeout(() => {
        e.style.display = "none";
      }, 200);
    }
    createMegaMenuContent(e) {
      var o;
      if (e.template === "gifts") {
        const c = (
          /* html */
          `
        <div class="crs-mega-menu-content crs-gifts-layout">
          ${this.createMainContentHTML(e)}
        </div>
      `
        ), u = document.createElement("div");
        return u.innerHTML = c.trim(), u.firstElementChild;
      }
      const t = this.createSidebarHTML(e), n = (o = e.submenu) == null ? void 0 : o.find(
        (r) => r.submenu && r.submenu.length > 0
      ), i = n ? this.createMainContentHTML(n, e) : this.createMainContentHTML(e), l = (
        /* html */
        `
      <div class="crs-mega-menu-content">
        ${t}
        ${i}
      </div>
    `
      ), a = document.createElement("div");
      a.innerHTML = l.trim();
      const s = a.firstElementChild;
      return this.addSidebarEventListeners(s, e), s;
    }
    createSidebarHTML(e) {
      return e.submenu ? (
        /* html */
        `
      <div class="crs-mega-menu-sidebar">
        <ul class="crs-sidebar-links">
        ${e.submenu.map((n, i) => {
          var r;
          const l = n.isNew ? '<span class="crs-new-badge">New</span>' : "", a = ((r = e.submenu) == null ? void 0 : r.findIndex(
            (c) => c.submenu && c.submenu.length > 0
          )) ?? -1, s = i === a ? "crs-active" : "", o = n.submenu && n.submenu.length > 0 ? "data-has-submenu" : "";
          return (
            /* html */
            `
        <li>
          <a href="${n.link}" class="crs-sidebar-link ${s}" data-index="${i}" ${o} data-analytics="${n.title}" data-parent="${e.title}">
            ${n.title}
            ${l}
          </a>
        </li>
      `
          );
        }).join("")}
        </ul>
      </div>
    `
      ) : "";
    }
    addSidebarEventListeners(e, t) {
      const n = e.querySelectorAll(".crs-sidebar-link"), i = e.querySelector(
        ".crs-mega-menu-main"
      );
      !t.submenu || !i || n.forEach((l) => {
        l.addEventListener("mouseenter", () => {
          var d;
          const a = parseInt(l.getAttribute("data-index") || "0"), s = t.submenu[a], o = s.submenu && s.submenu.length > 0;
          if (n.forEach((m) => m.classList.remove("crs-active")), !o) return;
          l.classList.add("crs-active");
          const r = this.createMainContentHTML(
            s,
            t
          ), c = document.createElement("div");
          c.innerHTML = r;
          const u = ((d = c.firstElementChild) == null ? void 0 : d.innerHTML) || "";
          i.innerHTML = u;
        });
      });
    }
    createMainContentHTML(e, t) {
      var n;
      if (e.template === "gifts" && e.submenu && e.submenu.length > 0)
        return this.createGiftsContentHTML(e, e.title, (t == null ? void 0 : t.title) || e.title);
      if (e.submenu && e.submenu.length > 0)
        if (e.submenu.length >= 5) {
          const i = e.submenu[0], l = e.submenu[1], a = e.submenu[2], s = e.submenu[3], o = e.submenu[4];
          let r;
          i.template === "featured" || i.template === "outfit-builder" ? r = this.createFeaturedSectionHTML(i, e.title, (t == null ? void 0 : t.title) || e.title) : r = this.createCollectionsSectionHTML(i, e.title, (t == null ? void 0 : t.title) || e.title);
          let c;
          l.template === "color-grid" ? c = this.createColorsSectionHTML(l, e.title, (t == null ? void 0 : t.title) || e.title) : c = this.createCollectionsSectionHTML(l, e.title, (t == null ? void 0 : t.title) || e.title);
          let u;
          a.template === "color-grid" ? u = this.createColorsSectionHTML(a, e.title, (t == null ? void 0 : t.title) || e.title) : u = this.createCollectionsSectionHTML(a, e.title, (t == null ? void 0 : t.title) || e.title);
          let d;
          s.template === "featured" || s.template === "outfit-builder" ? d = this.createFeaturedSectionHTML(s, e.title, (t == null ? void 0 : t.title) || e.title) : s.template === "dual-featured" ? d = this.createDualFeaturedSectionHTML(s) : s.template === "triple-featured" ? d = this.createTripleFeaturedSectionHTML(s) : s.template === "product-cards" ? d = this.createProductCardsSectionHTML(s) : d = this.createCollectionsSectionHTML(s, e.title, (t == null ? void 0 : t.title) || e.title);
          let m;
          return o.template === "featured" || o.template === "outfit-builder" ? m = this.createFeaturedSectionHTML(o, e.title, (t == null ? void 0 : t.title) || e.title) : o.template === "dual-featured" ? m = this.createDualFeaturedSectionHTML(o) : o.template === "triple-featured" ? m = this.createTripleFeaturedSectionHTML(o) : o.template === "product-cards" ? m = this.createProductCardsSectionHTML(o) : m = this.createCollectionsSectionHTML(o, e.title, (t == null ? void 0 : t.title) || e.title), /* html */
          `
          <div class="crs-mega-menu-main crs-five-column">
            ${r}
            ${c}
            ${u}
            ${d}
            ${m}
          </div>
        `;
        } else if (e.submenu.length >= 4) {
          const i = e.submenu[0], l = e.submenu[1], a = e.submenu[2], s = e.submenu[3];
          let o;
          i.template === "featured" || i.template === "outfit-builder" ? o = this.createFeaturedSectionHTML(i, e.title, (t == null ? void 0 : t.title) || e.title) : o = this.createCollectionsSectionHTML(i, e.title, (t == null ? void 0 : t.title) || e.title);
          let r;
          l.template === "color-grid" ? r = this.createColorsSectionHTML(l, e.title, (t == null ? void 0 : t.title) || e.title) : r = this.createCollectionsSectionHTML(l, e.title, (t == null ? void 0 : t.title) || e.title);
          let c;
          a.template === "color-grid" ? c = this.createColorsSectionHTML(a, e.title, (t == null ? void 0 : t.title) || e.title) : c = this.createCollectionsSectionHTML(a, e.title, (t == null ? void 0 : t.title) || e.title);
          let u;
          return s.template === "dual-featured" ? u = this.createDualFeaturedSectionHTML(s) : s.template === "triple-featured" ? u = this.createTripleFeaturedSectionHTML(s) : s.template === "product-cards" ? u = this.createProductCardsSectionHTML(s) : u = this.createCollectionsSectionHTML(s, e.title, (t == null ? void 0 : t.title) || e.title), /* html */
          `
          <div class="crs-mega-menu-main crs-four-column">
            ${o}
            ${r}
            ${c}
            ${u}
          </div>
        `;
        } else if (e.submenu.length >= 3) {
          const i = e.submenu[0], l = e.submenu[1], a = e.submenu[2], s = i.template === "multi-color-grid" ? this.createMultiColorGridSectionHTML(i) : i.template === "color-grid" ? this.createColorsSectionHTML(i, e.title, (t == null ? void 0 : t.title) || e.title) : i.template === "stacked-sections" ? this.createStackedSectionsHTML(i, e.title, (t == null ? void 0 : t.title) || e.title) : this.createCollectionsSectionHTML(i, e.title, (t == null ? void 0 : t.title) || e.title), o = l.template === "color-grid" ? this.createColorsSectionHTML(l, e.title, (t == null ? void 0 : t.title) || e.title) : l.template === "multi-color-grid" ? this.createMultiColorGridSectionHTML(l) : l.template === "stacked-sections" ? this.createStackedSectionsHTML(l, e.title, (t == null ? void 0 : t.title) || e.title) : this.createCollectionsSectionHTML(l, e.title, (t == null ? void 0 : t.title) || e.title);
          let r;
          return a.template === "dual-featured" ? r = this.createDualFeaturedSectionHTML(a) : a.template === "triple-featured" ? r = this.createTripleFeaturedSectionHTML(a) : a.template === "product-cards" ? r = this.createProductCardsSectionHTML(a) : a.template === "quad-featured" ? r = this.createQuadFeaturedSectionHTML(a) : r = this.createFeaturedSectionHTML(a, e.title, (t == null ? void 0 : t.title) || e.title), /* html */
          `
          <div class="crs-mega-menu-main">
            ${s}
            ${o}
            ${r}
          </div>
        `;
        } else if (e.submenu.length >= 2) {
          const i = e.submenu[0], l = e.submenu[1];
          let a;
          i.template === "featured" || i.template === "outfit-builder" ? a = this.createFeaturedSectionHTML(i, e.title, (t == null ? void 0 : t.title) || e.title) : i.template === "stacked-sections" ? a = this.createStackedSectionsHTML(i, e.title, (t == null ? void 0 : t.title) || e.title) : a = this.createCollectionsSectionHTML(i, e.title, (t == null ? void 0 : t.title) || e.title);
          let s;
          return l.template === "triple-featured" ? s = this.createTripleFeaturedSectionHTML(l) : l.template === "dual-featured" ? s = this.createDualFeaturedSectionHTML(l) : l.template === "featured" || l.template === "outfit-builder" ? s = this.createFeaturedSectionHTML(l, e.title, (t == null ? void 0 : t.title) || e.title) : l.template === "product-cards" ? s = this.createProductCardsSectionHTML(l) : l.template === "color-grid" ? s = this.createColorsSectionHTML(l, e.title, (t == null ? void 0 : t.title) || e.title) : l.template === "multi-color-grid" ? s = this.createMultiColorGridSectionHTML(l) : s = this.createCollectionsSectionHTML(l, e.title, (t == null ? void 0 : t.title) || e.title), /* html */
          `
          <div class="crs-mega-menu-main">
            ${a}
            ${s}
          </div>
        `;
        } else {
          const i = (n = e.submenu) == null ? void 0 : n[0];
          return i && (i.template === "featured" || i.template === "outfit-builder") ? (
            /* html */
            `
            <div class="crs-mega-menu-main">
              ${this.createFeaturedSectionHTML(i, e.title, (t == null ? void 0 : t.title) || e.title)}
            </div>
          `
          ) : i && i.template === "quad-featured" ? (
            /* html */
            `
            <div class="crs-mega-menu-main">
              ${this.createQuadFeaturedSectionHTML(i)}
            </div>
          `
          ) : (
            /* html */
            `
            <div class="crs-mega-menu-main">
              ${this.createSimpleListHTML(e.submenu || [])}
            </div>
          `
          );
        }
      else {
        if (e.template === "outlet")
          return this.createSidebarHTML(e);
        if (e.template === "gifts")
          return (
            /* html */
            `
        <div class="crs-mega-menu-main">
          ${this.createSimpleListHTML(e.submenu || [])}
        </div>
      `
          );
      }
      return '<div class="crs-mega-menu-main"></div>';
    }
    createCollectionsSectionHTML(e, t, n) {
      var l;
      const i = ((l = e.submenu) == null ? void 0 : l.map((a) => {
        const s = a.template === "link" ? "crs-view-all-link" : "crs-collection-link", o = a.icon ? `<img src="${a.icon}" alt="${a.title}" class="crs-item-icon-image" />` : "";
        return (
          /* html */
          `
        <li>
          <a href="${a.link}" class="${s}" data-analytics="${a.title}" data-parent="${t || e.title}" data-grandparent="${n || ""}">
            ${o}
            <span class="crs-item-text">${a.title}</span>
          </a>
        </li>
      `
        );
      }).join("")) || "";
      return (
        /* html */
        `
      <div class="crs-collections-section">
        <h3 class="crs-section-title">${e.title}</h3>
        <ul class="crs-collection-list">
          ${i}
        </ul>
      </div>
    `
      );
    }
    createColorsSectionHTML(e, t, n) {
      var s, o;
      const i = ((s = e.colorSwatches) == null ? void 0 : s.map((r) => {
        const c = r.isNew ? '<span class="crs-new-badge">New</span>' : "";
        return (
          /* html */
          `
        <div class="crs-color-item">
          <a href="${r.link || "#"}" class="crs-color-link" data-analytics="${r.name}" data-type="Link" data-parent="${t || e.title}" data-grandparent="${n || ""}">
            <div class="crs-color-swatch" style="background-color: ${r.color}">
              ${c}
            </div>
            <span class="crs-color-name">${r.name}</span>
          </a>
        </div>
      `
        );
      }).join("")) || "", l = ((o = e.submenu) == null ? void 0 : o.map((r) => r.template === "link" ? (
        /* html */
        `
            <li>
              <a href="${r.link}" class="crs-collection-link crs-view-all-link">${r.title}</a>
            </li>
          `
      ) : (
        /* html */
        `
          <li>
            <a href="${r.link}" class="crs-collection-link">${r.title}</a>
          </li>
        `
      )).join("")) || "", a = l ? (
        /* html */
        `
          <ul class="crs-collection-list">
            ${l}
          </ul>
        `
      ) : "";
      return (
        /* html */
        `
      <div class="crs-colors-section">
        <h3 class="crs-section-title">${e.title}</h3>
        <div class="crs-color-grid">
          ${i}
        </div>
        ${a}
      </div>
    `
      );
    }
    createMultiColorGridSectionHTML(e) {
      var l, a;
      const t = ((l = e.colorSwatches) == null ? void 0 : l.map((s) => {
        const o = s.isNew ? '<span class="crs-new-badge">New</span>' : "";
        return (
          /* html */
          `
        <div class="crs-color-item">
          <a href="${s.link || "#"}" class="crs-color-link">
            <div class="crs-color-swatch" style="background-color: ${s.color}">
              ${o}
            </div>
            <span class="crs-color-name">${s.name}</span>
          </a>
        </div>
      `
        );
      }).join("")) || "", n = ((a = e.submenu) == null ? void 0 : a.map((s) => s.template === "link" ? (
        /* html */
        `
            <li>
              <a href="${s.link}" class="crs-collection-link crs-view-all-link">${s.title}</a>
            </li>
          `
      ) : (
        /* html */
        `
          <li>
            <a href="${s.link}" class="crs-collection-link">${s.title}</a>
          </li>
        `
      )).join("")) || "", i = n ? (
        /* html */
        `
          <ul class="crs-collection-list">
            ${n}
          </ul>
        `
      ) : "";
      return (
        /* html */
        `
      <div class="crs-multi-color-section">
        <div class="crs-multi-color-grid">
          ${t}
        </div>
        ${i}
      </div>
    `
      );
    }
    createFeaturedSectionHTML(e, t, n) {
      const i = e.link || "#", l = e.featuredImage ? `<a href="${i}" class="crs-featured-section-link" data-analytics="${e.featuredSubtitle || e.title}" data-type="Image" data-parent="${t || e.title}" data-grandparent="${n || ""}"><img src="${e.featuredImage}" alt="${e.featuredTitle || ""}" class="crs-featured-image"></a>` : "", a = e.featuredTitle ? `<a href="${i}" class="crs-featured-section-link" data-analytics="${e.featuredSubtitle}" data-type="CTA" data-parent="${t || e.title}" data-grandparent="${n || ""}"><h4 class="crs-featured-title">${e.featuredTitle}</h4></a>` : "", s = e.featuredSubtitle ? `<a href="${i}" class="crs-featured-section-link" data-analytics="${e.featuredSubtitle}" data-type="CTA" data-parent="${t || e.title}" data-grandparent="${n || ""}"><p class="crs-featured-subtitle test">${e.featuredSubtitle}</p></a>` : "", o = e.actionLink ? `<a href="${e.actionLink.url}" class="crs-featured-action-link">${e.actionLink.text}</a>` : "", r = a || s ? `<div class="crs-featured-main-title">${e.title}</div>` : "";
      let c;
      return e.template === "outfit-builder" ? c = a || s || o ? `<div class="crs-featured-text crs-outfit-builder-text">${s}${a}${o}</div>` : "" : c = a || s || o ? `<div class="crs-featured-text">${o}${s}${a}</div>` : "", e.template === "outfit-builder" ? (
        /* html */
        `
        <div class="crs-featured-section">
          ${r}
          ${l}
          ${c}
        </div>
      `
      ) : (
        /* html */
        `
      <div class="crs-featured-section">
        ${l}
        ${c}
      </div>
    `
      );
    }
    createDualFeaturedSectionHTML(e) {
      if (!e.submenu || e.submenu.length < 2)
        return '<div class="crs-featured-section"></div>';
      const t = e.submenu[0], n = e.submenu[1], i = t.featuredImage ? `<img src="${t.featuredImage}" alt="${t.featuredTitle || ""}" class="crs-featured-image">` : "", l = t.featuredTitle ? `<h4 class="crs-featured-title">${t.featuredTitle}</h4>` : "", a = t.featuredSubtitle ? `<p class="crs-featured-subtitle test">${t.featuredSubtitle}</p>` : "", s = l || a ? `<div class="crs-featured-text">${a}${l}</div>` : "", o = n.featuredImage ? `<img src="${n.featuredImage}" alt="${n.featuredTitle || ""}" class="crs-featured-image">` : "", r = n.featuredTitle ? `<h4 class="crs-featured-title">${n.featuredTitle}</h4>` : "", c = n.featuredSubtitle ? `<p class="crs-featured-subtitle test">${n.featuredSubtitle}</p>` : "", u = r || c ? `<div class="crs-featured-text">${c}${r}</div>` : "", d = t.link ? `<a href="${t.link}" class="crs-featured-item-link">
          <div class="crs-featured-item">
            ${i}
            ${s}
          </div>
        </a>` : `<div class="crs-featured-item">
          ${i}
          ${s}
        </div>`, m = n.link ? `<a href="${n.link}" class="crs-featured-item-link">
          <div class="crs-featured-item">
            ${o}
            ${u}
          </div>
        </a>` : `<div class="crs-featured-item">
          ${o}
          ${u}
        </div>`;
      return (
        /* html */
        `
      <div class="crs-dual-featured-section">
        ${d}
        ${m}
      </div>
    `
      );
    }
    createStackedSectionsHTML(e, t, n) {
      return !e.submenu || e.submenu.length === 0 ? "" : (
        /* html */
        `
      <div class="crs-stacked-sections">
        ${e.submenu.map((l) => this.createCollectionsSectionHTML(l, e.title, n || e.title)).join("")}
      </div>
    `
      );
    }
    createTripleFeaturedSectionHTML(e) {
      if (!e.submenu || e.submenu.length < 3)
        return '<div class="crs-featured-section"></div>';
      const t = e.submenu[0], n = e.submenu[1], i = e.submenu[2], l = e.title && e.showTitle ? `<h3 class="crs-triple-featured-title">${e.title}</h3>` : "", a = (s) => {
        const o = s.featuredImage ? `<img src="${s.featuredImage}" alt="${s.featuredTitle || ""}" class="crs-featured-image">` : "", r = s.featuredTitle ? `<h4 class="crs-featured-title">${s.featuredTitle}</h4>` : "", c = s.featuredSubtitle ? `<p class="crs-featured-subtitle test">${s.featuredSubtitle}</p>` : "", u = s.actionLink ? `<a href="${s.actionLink.url}" class="crs-featured-action-link">${s.actionLink.text}</a>` : "", d = r || c || u ? `<div class="crs-featured-text">${c}${r}${u}</div>` : "";
        return (
          /* html */
          `
        <div class="crs-featured-item">
          ${o}
          ${d}
        </div>
      `
        );
      };
      return (
        /* html */
        `
      <div class="crs-triple-featured-section">
        ${l}
        <div class="crs-triple-featured-items">
          ${a(t)}
          ${a(n)}
          ${a(i)}
        </div>
      </div>
    `
      );
    }
    createQuadFeaturedSectionHTML(e) {
      if (!e.submenu || e.submenu.length < 4)
        return '<div class="crs-quad-featured-section"></div>';
      const t = e.submenu[0], n = e.submenu[1], i = e.submenu[2], l = e.submenu[3], a = (s) => {
        const o = s.featuredImage ? `<img src="${s.featuredImage}" alt="${s.featuredTitle || ""}" class="crs-featured-image">` : "", r = s.featuredTitle ? `<h4 class="crs-featured-title">${s.featuredTitle}</h4>` : "", c = s.featuredSubtitle ? `<p class="crs-featured-subtitle test">${s.featuredSubtitle}</p>` : "", u = s.actionLink ? `<a href="${s.actionLink.url}" class="crs-featured-action-link">${s.actionLink.text}</a>` : "", d = r || c || u ? `<div class="crs-featured-text">${r}${c}${u}</div>` : "";
        return (
          /* html */
          `
        <div class="crs-featured-item">
          ${o}
          ${d}
        </div>
      `
        );
      };
      return (
        /* html */
        `
      <div class="crs-quad-featured-section">
        <div class="crs-quad-featured-items">
          ${a(t)}
          ${a(n)}
          ${a(i)}
          ${a(l)}
        </div>
      </div>
    `
      );
    }
    createProductCardsSectionHTML(e) {
      if (!e.submenu || e.submenu.length === 0)
        return '<div class="crs-product-cards-section"></div>';
      const t = (i) => {
        const l = i.productImage ? `<img src="${i.productImage}" alt="${i.title}" class="crs-product-image">` : "", a = i.productPrice ? `<div class="crs-product-price">${i.productPrice}</div>` : "", s = i.productColors ? `<div class="crs-product-colors">${i.productColors}</div>` : "", o = i.productStock ? `<div class="crs-product-stock">${i.productStock}</div>` : "";
        return (
          /* html */
          `
        <div class="crs-product-card">
          <a href="${i.link}" class="crs-product-link">
            ${l}
            <div class="crs-product-info">
              <h4 class="crs-product-title">${i.title}</h4>
              ${s}
              ${a}
              ${o}
            </div>
          </a>
        </div>
      `
        );
      };
      return (
        /* html */
        `
      <div class="crs-product-cards-section">
        ${e.submenu.map(t).join("")}
      </div>
    `
      );
    }
    createGiftsContentHTML(e, t, n) {
      if (!e.submenu || e.submenu.length === 0)
        return '<div class="crs-mega-menu-main crs-five-column"></div>';
      const i = (a) => a.template === "featured" || a.template === "outfit-builder" ? this.createGiftsFeaturedSectionHTML(a) : this.createCollectionsSectionHTML(a, e.title, n || e.title);
      return (
        /* html */
        `
      <div class="crs-mega-menu-main crs-five-column">
        ${e.submenu.map(i).join("")}
      </div>
    `
      );
    }
    createGiftsFeaturedSectionHTML(e) {
      const t = e.actionLink ? `<a href="${e.actionLink.url}" class="crs-gifts-action-link">${e.actionLink.text}</a>` : "";
      return (
        /* html */
        `
      <div class="crs-gifts-featured-section">
        <h3 class="crs-gifts-section-title">${e.title}</h3>
        <div class="crs-featured-image" style="background-image: url('${e.featuredImage || ""}')"></div>
        <div class="crs-featured-text">
          <div class="crs-featured-subtitle">${e.featuredSubtitle || ""}</div>
          <div class="crs-featured-title">${e.featuredTitle || ""}</div>
        </div>
        ${t}
      </div>
    `
      );
    }
    createSimpleListHTML(e) {
      return (
        /* html */
        `
      <ul class="crs-simple-list">
        ${e.map((n) => {
          const i = n.icon ? `<span class="crs-item-icon">${n.icon}</span>` : "";
          return (
            /* html */
            `
        <li>
          <a href="${n.link}" class="crs-simple-link">
            ${i}
            <span class="crs-item-text">${n.title}</span>
          </a>
        </li>
      `
          );
        }).join("")}
      </ul>
    `
      );
    }
    /**
     * Gets the current variant
     */
    getVariant() {
      return this.variant;
    }
    /**
     * Sets a new variant
     */
    setVariant(e) {
      this.variant = e;
    }
    /**
     * Destroys all navigation elements and cleans up
     */
    destroy() {
      const e = document.querySelector(".crs-mega-menu");
      e && this.megaMenuMouseEnterHandler && this.megaMenuMouseLeaveHandler && (e.removeEventListener("mouseenter", this.megaMenuMouseEnterHandler), e.removeEventListener("mouseleave", this.megaMenuMouseLeaveHandler)), e && e.remove(), this.megaMenuMouseEnterHandler = null, this.megaMenuMouseLeaveHandler = null;
    }
  }
  class M {
    constructor(e = "B") {
      this.mobileNavigationState = "main", this.eventListeners = [], this.mobileNavigationHistory = [], this.variant = e;
    }
    async createMobileNavigation() {
      this.cleanupEventListeners();
      try {
        const e = await k("off-canvas-menu");
        if (e) {
          let t = e.querySelector(
            "off-canvas-menu-body > div > div > div.flex-grow.flex-column.overflow-y-auto > div:nth-child(2) > ul"
          );
          if (t || (t = e.querySelector("ul")), t || (t = e.querySelector(
            "off-canvas-menu-body ul"
          )), t) {
            const n = p.map(
              (i, l) => this.createMobileNavigationItemHTML(i, l)
            ).join("");
            return t.innerHTML = n, t.setAttribute("data-crs-nav-level", "main"), this.addMobileEventListeners(e), document.createElement("div");
          }
        }
      } catch {
      }
      return document.createElement("div");
    }
    createMobileNavigationItemHTML(e, t) {
      const n = e.textColor ? `style="color: ${e.textColor}"` : "", i = e.submenu && e.submenu.length > 0 ? "data-has-submenu" : "", l = e.icon ? `<img src="${e.icon}" alt="${e.title}" class="crs-mobile-nav-icon">` : "";
      return (
        /* html */
        `
      <li class="crs-mobile-nav-item" ${i} data-index="${t}" data-crs-nav="true">
        <a href="${e.link || "#"}" class="crs-mobile-nav-link" data-analytics="${e.title}">
          ${l}
          <div class="crs-mobile-nav-text" ${n}>${e.title}</div>
          ${i ? '<div class="crs-mobile-chevron">›</div>' : ""}
        </a>
      </li>
    `
      );
    }
    addEventListenerWithCleanup(e, t, n) {
      e.addEventListener(t, n), this.eventListeners.push({ element: e, event: t, handler: n });
    }
    cleanupEventListeners() {
      this.eventListeners.forEach(({ element: e, event: t, handler: n }) => {
        e.removeEventListener(t, n);
      }), this.eventListeners = [];
    }
    addMobileEventListeners(e) {
      e.querySelectorAll(
        ".crs-mobile-nav-item[data-has-submenu]"
      ).forEach((o) => {
        const r = parseInt(o.getAttribute("data-index") || "0"), c = (u) => {
          u.preventDefault(), this.showMobileSubmenu(r);
        };
        this.addEventListenerWithCleanup(o, "click", c);
      }), e.querySelectorAll(
        ".crs-mobile-nav-item[data-submenu-index], .crs-mobile-second-level-list .crs-mobile-nav-item[data-submenu-index]"
      ).forEach((o, r) => {
        const c = parseInt(o.getAttribute("data-index") || "0"), u = parseInt(
          o.getAttribute("data-submenu-index") || "0"
        ), d = o.getAttribute("data-stacked-index"), m = (w) => {
          var y, v;
          w.preventDefault();
          let h = (y = p[c].submenu) == null ? void 0 : y[u];
          if (d !== null && (h == null ? void 0 : h.template) === "stacked-sections") {
            const R = parseInt(d);
            h = (v = h.submenu) == null ? void 0 : v[R];
          }
          h && h.submenu && h.submenu.length > 0 && this.showMobileThirdLevelSubmenu(c, u);
        };
        o.addEventListener("click", m);
      });
      const i = e.querySelector(
        ".crs-mobile-nav-back"
      );
      if (i) {
        const o = (r) => {
          r.preventDefault(), this.navigateBack();
        };
        this.addEventListenerWithCleanup(i, "click", o);
      }
      const l = e.querySelector(
        ".crs-mobile-nav-close"
      );
      if (l) {
        const o = (r) => {
          r.preventDefault(), this.showMobileMainMenu();
        };
        this.addEventListenerWithCleanup(l, "click", o);
      }
      const a = e.querySelector(
        ".off-canvas-close"
      );
      if (a) {
        const o = () => {
        };
        this.addEventListenerWithCleanup(a, "click", o);
      }
      const s = e.querySelector(
        "advanced-commerce-search-form button"
      );
      if (s) {
        const o = () => {
        };
        this.addEventListenerWithCleanup(s, "click", o);
      }
      this.addMobileAnalyticsTracking(e);
    }
    showMobileSubmenu(e) {
      const t = p[e];
      if (!t.submenu || t.submenu.length === 0) return;
      this.mobileNavigationHistory.push({ type: "main" }), this.mobileNavigationState = "submenu";
      const n = document.querySelector("off-canvas-menu");
      if (!n) return;
      const i = this.createMobileSubmenuHTML(t, e), l = n.querySelector("ul");
      l && (l.innerHTML = i, l.setAttribute("data-crs-nav-level", "submenu"), this.cleanupEventListeners(), this.addMobileEventListeners(n));
    }
    showMobileMainMenu() {
      this.mobileNavigationState = "main", this.mobileNavigationHistory = [];
      const e = document.querySelector("off-canvas-menu");
      if (!e) return;
      const t = p.map((i, l) => this.createMobileNavigationItemHTML(i, l)).join(""), n = e.querySelector("ul");
      n && (n.innerHTML = t, n.setAttribute("data-crs-nav-level", "main"), this.cleanupEventListeners(), this.addMobileEventListeners(e));
    }
    showMobileThirdLevelSubmenu(e, t) {
      var o;
      const n = p[e], i = (o = n.submenu) == null ? void 0 : o[t];
      if (!i || !i.submenu || i.submenu.length === 0) return;
      this.mobileNavigationHistory.push({ type: "submenu", parentIndex: e }), this.mobileNavigationState = "third-level";
      const l = document.querySelector("off-canvas-menu");
      if (!l) return;
      const a = this.createMobileThirdLevelSubmenuHTML(
        n,
        i,
        e,
        t
      ), s = l.querySelector("ul");
      s && (s.innerHTML = a, s.setAttribute("data-crs-nav-level", "third-level"), this.cleanupEventListeners(), this.addMobileEventListeners(l));
    }
    navigateBack() {
      if (this.mobileNavigationHistory.length === 0) {
        this.showMobileMainMenu();
        return;
      }
      const e = this.mobileNavigationHistory.pop();
      if (!e) {
        this.showMobileMainMenu();
        return;
      }
      switch (e.type) {
        case "main":
          this.mobileNavigationState = "main", this.showMobileMainMenu();
          break;
        case "submenu":
          this.mobileNavigationState = "submenu", e.parentIndex !== void 0 && this.showMobileSubmenu(e.parentIndex);
          break;
        case "third-level":
          this.mobileNavigationState = "third-level", e.parentIndex !== void 0 && e.submenuIndex !== void 0 && this.showMobileThirdLevelSubmenu(
            e.parentIndex,
            e.submenuIndex
          );
          break;
      }
    }
    createMobileFeaturedContentHTML(e, t, n, i = !0) {
      let l = "";
      switch (e.template) {
        case "dual-featured":
          if (e.submenu && e.submenu.length >= 2) {
            const o = e.submenu[0], r = e.submenu[1], c = (
              /* html */
              `
            <div class="crs-mobile-featured-item">
              <div class="crs-mobile-featured-image" style="background-image: url('${o.featuredImage || ""}')"></div>
              <div class="crs-mobile-featured-text">
                <div class="crs-mobile-featured-title">${o.featuredTitle || ""}</div>
                <div class="crs-mobile-featured-subtitle">${o.featuredSubtitle || ""}</div>
              </div>
            </div>
            <div class="crs-mobile-featured-item">
              <div class="crs-mobile-featured-image" style="background-image: url('${r.featuredImage || ""}')"></div>
              <div class="crs-mobile-featured-text">
                <div class="crs-mobile-featured-title">${r.featuredTitle || ""}</div>
                <div class="crs-mobile-featured-subtitle">${r.featuredSubtitle || ""}</div>
              </div>
            </div>
          `
            );
            l = i ? (
              /* html */
              `<li class="crs-mobile-dual-featured-content" data-crs-nav="true">${c}</li>`
            ) : (
              /* html */
              `<div class="crs-mobile-dual-featured-content" data-crs-nav="true">${c}</div>`
            );
          }
          break;
        case "triple-featured":
          if (e.submenu && e.submenu.length >= 2) {
            const o = e.submenu[0], r = e.submenu[1], c = (
              /* html */
              `
            <div class="crs-mobile-featured-item">
              <div class="crs-mobile-featured-image" style="background-image: url('${o.featuredImage || ""}')"></div>
              <div class="crs-mobile-featured-text">
                <div class="crs-mobile-featured-title">${o.featuredTitle || ""}</div>
                <div class="crs-mobile-featured-subtitle">${o.featuredSubtitle || ""}</div>
              </div>
            </div>
            <div class="crs-mobile-featured-item">
              <div class="crs-mobile-featured-image" style="background-image: url('${r.featuredImage || ""}')"></div>
              <div class="crs-mobile-featured-text">
                <div class="crs-mobile-featured-title">${r.featuredTitle || ""}</div>
                <div class="crs-mobile-featured-subtitle">${r.featuredSubtitle || ""}</div>
              </div>
            </div>
          `
            );
            l = i ? (
              /* html */
              `<li class="crs-mobile-triple-featured-content" data-crs-nav="true">${c}</li>`
            ) : (
              /* html */
              `<div class="crs-mobile-triple-featured-content" data-crs-nav="true">${c}</div>`
            );
          }
          break;
        case "quad-featured":
          if (e.submenu && e.submenu.length >= 4) {
            const o = e.submenu[0], r = e.submenu[1], c = e.submenu[2], u = e.submenu[3], d = (
              /* html */
              `
            <div class="crs-mobile-featured-item">
              <div class="crs-mobile-featured-image" style="background-image: url('${o.featuredImage || ""}')"></div>
              <div class="crs-mobile-featured-text">
                <div class="crs-mobile-featured-title">${o.featuredTitle || ""}</div>
                ${o.actionLink ? `<a href="${o.actionLink.url}" class="crs-mobile-featured-action-link">${o.actionLink.text}</a>` : ""}
              </div>
            </div>
            <div class="crs-mobile-featured-item">
              <div class="crs-mobile-featured-image" style="background-image: url('${r.featuredImage || ""}')"></div>
              <div class="crs-mobile-featured-text">
                <div class="crs-mobile-featured-title">${r.featuredTitle || ""}</div>
                ${r.actionLink ? `<a href="${r.actionLink.url}" class="crs-mobile-featured-action-link">${r.actionLink.text}</a>` : ""}
              </div>
            </div>
            <div class="crs-mobile-featured-item">
              <div class="crs-mobile-featured-image" style="background-image: url('${c.featuredImage || ""}')"></div>
              <div class="crs-mobile-featured-text">
                <div class="crs-mobile-featured-title">${c.featuredTitle || ""}</div>
                ${c.actionLink ? `<a href="${c.actionLink.url}" class="crs-mobile-featured-action-link">${c.actionLink.text}</a>` : ""}
              </div>
            </div>
            <div class="crs-mobile-featured-item">
              <div class="crs-mobile-featured-image" style="background-image: url('${u.featuredImage || ""}')"></div>
              <div class="crs-mobile-featured-text">
                <div class="crs-mobile-featured-title">${u.featuredTitle || ""}</div>
                ${u.actionLink ? `<a href="${u.actionLink.url}" class="crs-mobile-featured-action-link">${u.actionLink.text}</a>` : ""}
              </div>
            </div>
          `
            );
            l = i ? (
              /* html */
              `<li class="crs-mobile-quad-featured-content" data-crs-nav="true">${d}</li>`
            ) : (
              /* html */
              `<div class="crs-mobile-quad-featured-content" data-crs-nav="true">${d}</div>`
            );
          }
          break;
        case "featured":
          const a = (
            /* html */
            `
          <div class="crs-mobile-featured-image" style="background-image: url('${e.featuredImage || ""}')"></div>
          <div class="crs-mobile-featured-text">
            <div class="crs-mobile-featured-title">${e.featuredTitle || ""}</div>
            <div class="crs-mobile-featured-subtitle">${e.featuredSubtitle || ""}</div>
          </div>
        `
          );
          l = i ? (
            /* html */
            `<li class="crs-mobile-featured-content" data-crs-nav="true">${a}</li>`
          ) : (
            /* html */
            `<div class="crs-mobile-featured-content" data-crs-nav="true">${a}</div>`
          );
          break;
        case "product-cards":
          if (e.submenu && e.submenu.length > 0) {
            const o = (
              /* html */
              `
            ${e.submenu.map((r) => (
                /* html */
                `
              <div class="crs-mobile-product-card">
                <div class="crs-mobile-product-image" style="background-image: url('${r.productImage || ""}')"></div>
                <div class="crs-mobile-product-info">
                  <div class="crs-mobile-product-title">${r.title}</div>
                  ${r.productColors ? `<div class="crs-mobile-product-colors">${r.productColors}</div>` : ""}
                  ${r.productPrice ? `<div class="crs-mobile-product-price">${r.productPrice}</div>` : ""}
                  ${r.productStock ? `<div class="crs-mobile-product-stock">${r.productStock}</div>` : ""}
                </div>
              </div>
            `
              )).join("")}
          `
            );
            l = i ? (
              /* html */
              `<li class="crs-mobile-product-cards-content" data-crs-nav="true">${o}</li>`
            ) : (
              /* html */
              `<div class="crs-mobile-product-cards-content" data-crs-nav="true">${o}</div>`
            );
          }
          break;
        case "outfit-builder":
          const s = (
            /* html */
            `
          <div class="crs-mobile-outfit-builder-image" style="background-image: url('${e.featuredImage || ""}')"></div>
          <div class="crs-mobile-outfit-builder-text">
            <div class="crs-mobile-outfit-builder-subtitle">${e.featuredSubtitle || ""}</div>
            <div class="crs-mobile-outfit-builder-title">${e.featuredTitle || ""}</div>
            ${e.actionLink ? `<a href="${e.actionLink.url}" class="crs-mobile-outfit-builder-link">${e.actionLink.text}</a>` : ""}
          </div>
        `
          );
          l = i ? (
            /* html */
            `<li class="crs-mobile-outfit-builder-content" data-crs-nav="true">${s}</li>`
          ) : (
            /* html */
            `<div class="crs-mobile-outfit-builder-content" data-crs-nav="true">${s}</div>`
          );
          break;
        default:
          l = this.createMobileSubmenuHTML(e, t);
          break;
      }
      return l;
    }
    createMobileSubmenuHTML(e, t) {
      let n = "";
      return e.submenu && e.submenu.length > 0 && e.submenu.forEach((i, l) => {
        const a = i.submenu && i.submenu.length > 0 ? "data-has-submenu" : "";
        switch (i.template) {
          case "dual-featured":
          case "triple-featured":
          case "quad-featured":
          case "featured":
          case "product-cards":
          case "color-grid":
          case "multi-color-grid":
          case "stacked-sections":
            i.submenu && i.submenu.length > 0 && i.submenu.forEach((s, o) => {
              const r = s.submenu && s.submenu.length > 0 ? "data-has-submenu" : "";
              n += /* html */
              `
                  <li class="crs-mobile-nav-item" data-index="${t}" data-submenu-index="${l}" data-stacked-index="${o}" data-crs-nav="true" ${r}>
                    <a href="${s.link || "#"}" class="crs-mobile-nav-link" data-analytics="${s.title}">
                      <div class="crs-mobile-nav-text">${s.title}</div>
                      ${r ? '<div class="crs-mobile-chevron">›</div>' : ""}
                    </a>
                  </li>
                `;
            });
            break;
          case "outlet":
            i.submenu && i.submenu.length > 0 && (n += /* html */
            `
                <li class="crs-mobile-submenu-item" data-crs-nav="true">
                  <div class="crs-mobile-submenu-content">
                    ${i.submenu.map((s, o) => {
              if (s.template === "link")
                return (
                  /* html */
                  `
                          <div class="crs-mobile-submenu-section" data-crs-nav="true">
                            <a href="${s.link || "#"}" class="crs-mobile-submenu-link">
                              <div class="crs-mobile-submenu-text">${s.title}</div>
                            </a>
                          </div>
                        `
                );
              if (s.submenu && s.submenu.length > 0) {
                const r = s.submenu.map((c) => (
                  /* html */
                  `
                          <div class="crs-mobile-submenu-item" data-crs-nav="true">
                            <a href="${c.link || "#"}" class="crs-mobile-submenu-link">
                              <div class="crs-mobile-submenu-text">${c.title}</div>
                            </a>
                          </div>
                        `
                )).join("");
                return (
                  /* html */
                  `
                          <div class="crs-mobile-submenu-section" data-crs-nav="true">
                            <div class="crs-mobile-submenu-section-title">${s.title}</div>
                            <div class="crs-mobile-submenu-items">
                              ${r}
                            </div>
                          </div>
                        `
                );
              }
              return "";
            }).join("")}
                  </div>
                </li>
              `);
            break;
          case "gifts":
            i.submenu && i.submenu.length > 0 && (n += /* html */
            `
                <li class="crs-mobile-gifts-content" data-crs-nav="true">
                  ${i.submenu.map((s) => {
              var o;
              if (s.template === "featured") {
                const r = s.actionLink ? `<a href="${s.actionLink.url}" class="crs-mobile-gifts-action-link">${s.actionLink.text}</a>` : "";
                return (
                  /* html */
                  `
                        <div class="crs-mobile-gifts-featured-section">
                          <div class="crs-mobile-gifts-section-title">${s.title}</div>
                          <div class="crs-mobile-featured-image" style="background-image: url('${s.featuredImage || ""}')"></div>
                          <div class="crs-mobile-featured-text">
                            <div class="crs-mobile-featured-subtitle">${s.featuredSubtitle || ""}</div>
                            <div class="crs-mobile-featured-title">${s.featuredTitle || ""}</div>
                          </div>
                          ${r}
                        </div>
                      `
                );
              } else {
                const r = ((o = s.submenu) == null ? void 0 : o.map((c) => (
                  /* html */
                  `
                        <div class="crs-mobile-gifts-item" data-crs-nav="true">
                          <div class="crs-mobile-gifts-link">
                            <div class="crs-mobile-gifts-text">${c.title}</div>
                          </div>
                        </div>
                      `
                )).join("")) || "";
                return (
                  /* html */
                  `
                        <div class="crs-mobile-gifts-section">
                          <div class="crs-mobile-gifts-section-title">${s.title}</div>
                          <div class="crs-mobile-gifts-items">
                            ${r}
                          </div>
                        </div>
                      `
                );
              }
            }).join("")}
                </li>
              `);
            break;
          default:
            n += /* html */
            `
              <li class="crs-mobile-nav-item" ${a} data-index="${t}" data-submenu-index="${l}" data-crs-nav="true">
                <a href="${i.link || "#"}" class="crs-mobile-nav-link" data-analytics="${i.title}">
                  <div class="crs-mobile-nav-text">${i.title}</div>
                  ${a ? '<div class="crs-mobile-chevron">›</div>' : ""}
                </a>
              </li>
            `;
            break;
        }
      }), /* html */
      `
      <li class="crs-mobile-nav-header" data-crs-nav="true">
        <div class="crs-mobile-nav-link crs-mobile-nav-back">
          <div class="crs-mobile-nav-back-icon">‹</div>
          <div class="crs-mobile-nav-text">${e.title}</div>
          <div class="crs-mobile-nav-close">✕</div>
        </div>
      </li>
      <li class="crs-mobile-second-level-content" data-crs-nav="true">
        <ul class="crs-mobile-second-level-list">
          ${n}
        </ul>
      </li>
    `;
    }
    createMobileThirdLevelSubmenuHTML(e, t, n, i) {
      if (t.template && ["dual-featured", "triple-featured", "quad-featured", "featured", "product-cards"].includes(t.template) && (!t.submenu || t.submenu.length === 0))
        return this.createMobileFeaturedContentHTML(t, n, i);
      if (t.template && ["dual-featured", "triple-featured", "quad-featured", "featured", "product-cards"].includes(t.template))
        return this.createMobileFeaturedContentHTML(t, n, i, !1);
      let l = "";
      return t.submenu && t.submenu.length > 0 && t.submenu.forEach((a, s) => {
        var o, r;
        switch (a.template) {
          case "default":
            const c = ((o = a.submenu) == null ? void 0 : o.map((d) => {
              const m = d.icon ? `<img src="${d.icon}" alt="${d.title}" class="crs-mobile-nav-icon">` : "";
              return (
                /* html */
                `
                        <div class="crs-mobile-third-level-item" data-crs-nav="true">
                          <a href="${d.link || "#"}" class="crs-mobile-third-level-link" data-analytics="${d.title}" data-parent="${a.title}" data-grandparent="${e.title}">
                            ${m}
                            <div class="crs-mobile-third-level-text">${d.title}</div>
                          </a>
                        </div>
                      `
              );
            }).join("")) || "";
            l += /* html */
            `
              <div class="crs-mobile-third-level-section">
                <div class="crs-mobile-third-level-title">${a.title}</div>
                <div class="crs-mobile-third-level-items">
                  ${c}
                </div>
              </div>
            `;
            break;
          case "stacked-sections":
            a.submenu && a.submenu.length > 0 && a.submenu.forEach((d) => {
              var w;
              const m = ((w = d.submenu) == null ? void 0 : w.map((b) => {
                const h = b.icon ? `<img src="${b.icon}" alt="${b.title}" class="crs-mobile-nav-icon">` : "";
                return (
                  /* html */
                  `
                      <div class="crs-mobile-third-level-item" data-crs-nav="true">
                        <a href="${b.link || "#"}" class="crs-mobile-third-level-link" data-analytics="${b.title}" data-parent="${a.title}" data-grandparent="${e.title}">
                          ${h}
                          <div class="crs-mobile-third-level-text">${b.title}</div>
                        </a>
                      </div>
                    `
                );
              }).join("")) || "";
              l += /* html */
              `
                  <div class="crs-mobile-third-level-section">
                    <div class="crs-mobile-third-level-title">${d.title}</div>
                    <div class="crs-mobile-third-level-items">
                      ${m}
                    </div>
                  </div>
                `;
            });
            break;
          case "dual-featured":
          case "triple-featured":
          case "quad-featured":
          case "featured":
          case "product-cards":
          case "outfit-builder":
            l += this.createMobileFeaturedContentHTML(a, n, i, !1);
            break;
          case "color-grid":
            const u = ((r = a.colorSwatches) == null ? void 0 : r.map((d) => (
              /* html */
              `
                <div class="crs-mobile-color-swatch" data-crs-nav="true">
                  <a href="${d.link || "#"}" class="crs-mobile-color-link">
                    <div class="crs-mobile-color-circle" style="background-color: ${d.color}">
                      ${d.isNew ? '<div class="crs-mobile-color-new-badge">New</div>' : ""}
                    </div>
                    <div class="crs-mobile-color-name">${d.name}</div>
                  </a>
                </div>
              `
            )).join("")) || "";
            l += /* html */
            `
              <div class="crs-mobile-third-level-section">
                <div class="crs-mobile-third-level-title">${a.title}</div>
                <div class="crs-mobile-color-swatches">
                  ${u}
                </div>
              </div>
            `;
            break;
          default:
            l += /* html */
            `
              <div class="crs-mobile-third-level-section">
                <div class="crs-mobile-third-level-title">${a.title}</div>
                <div class="crs-mobile-third-level-items">
                  <div class="crs-mobile-third-level-item" data-crs-nav="true">
                    <a href="${a.link || "#"}" class="crs-mobile-third-level-link" data-analytics="${a.title}" data-parent="${a.title}" data-grandparent="${e.title}">
                      <div class="crs-mobile-third-level-text">${a.title}</div>
                    </a>
                  </div>
                </div>
              </div>
            `;
            break;
        }
      }), /* html */
      `
      <li class="crs-mobile-nav-header" data-crs-nav="true">
        <div class="crs-mobile-nav-link crs-mobile-nav-back">
          <div class="crs-mobile-nav-back-section">
            <div class="crs-mobile-nav-back-icon">‹</div>
            <div class="crs-mobile-nav-parent">${e.title}</div>
          </div>
          <div class="crs-mobile-nav-current">${t.title}</div>
          <div class="crs-mobile-nav-close">✕</div>
        </div>
      </li>
      <li class="crs-mobile-third-level-content" data-crs-nav="true">
        ${l}
      </li>
    `;
    }
    /**
     * Gets the current variant
     */
    getVariant() {
      return this.variant;
    }
    /**
     * Sets a new variant
     */
    setVariant(e) {
      this.variant = e;
    }
    /**
     * Destroys all navigation elements and cleans up
     */
    addMobileAnalyticsTracking(e) {
      const t = (n) => {
        const l = n.target.closest("a[data-analytics]");
        if (!l) return;
        const a = l.getAttribute("data-analytics");
        a && setTimeout(() => {
          if (l.classList.contains("crs-mobile-nav-link"))
            g(a, "Link", a);
          else if (l.classList.contains("crs-mobile-third-level-link")) {
            const s = l.getAttribute("data-parent"), o = l.getAttribute("data-grandparent");
            s && o && g(a, "Link", o, s);
          } else if (l.classList.contains("crs-mobile-featured-action-link")) {
            const s = l.getAttribute("data-parent");
            s && g(a, "CTA", s, void 0, "Image section");
          }
        }, 10);
      };
      this.addEventListenerWithCleanup(e, "click", t);
    }
    destroy() {
      this.cleanupEventListeners();
      const e = document.querySelector(".crs-mobile-menu");
      e && e.remove();
      const t = document.querySelector(".crs-mobile-submenu");
      t && t.remove();
    }
  }
  class N {
    constructor(e = "B") {
      this.variant = e, this.desktopNavigation = new T(e), this.mobileNavigation = new M(e);
    }
    /**
     * Creates the complete navigation system
     */
    async createCompleteNavigation(e) {
      return (e !== void 0 ? e : window.innerWidth < 1100) ? await this.mobileNavigation.createMobileNavigation() : this.desktopNavigation.createDesktopNavigation();
    }
    /**
     * Gets the current variant
     */
    getVariant() {
      return this.variant;
    }
    /**
     * Sets a new variant
     */
    setVariant(e) {
      this.variant = e, this.desktopNavigation.setVariant(e), this.mobileNavigation.setVariant(e);
    }
    /**
     * Destroys all navigation elements and cleans up
     */
    destroy() {
      this.desktopNavigation.destroy(), this.mobileNavigation.destroy();
    }
  }
  class C {
    constructor(e, t, n) {
      this.isMonitoring = !1, this.monitoringInterval = null, this.mutationObserver = null, this.currentUrl = "", this.lastCheckTime = 0, this.checkInterval = 50, this.maxRetries = 5, this.retryCount = 0, this.newNav = e, this.originalNav = t, this.navigationOrchestrator = n, this.currentUrl = location.href;
    }
    /**
     * Starts comprehensive monitoring for Angular SPA changes
     */
    startMonitoring() {
      this.isMonitoring || (this.isMonitoring = !0, this.startUrlMonitoring(), this.startMutationMonitoring(), this.startPeriodicChecks(), this.monitorAngularRouter());
    }
    /**
     * Monitors URL changes (Angular router navigation)
     */
    startUrlMonitoring() {
      this.monitoringInterval = setInterval(() => {
        location.href !== this.currentUrl && (this.currentUrl = location.href, this.handleNavigationChange());
      }, this.checkInterval), window.addEventListener("popstate", () => {
        setTimeout(() => this.handleNavigationChange(), 50);
      }), this.interceptHistoryAPI();
    }
    /**
     * Intercepts Angular's history API calls
     */
    interceptHistoryAPI() {
      const e = history.pushState, t = history.replaceState;
      history.pushState = (...n) => {
        e.apply(history, n), setTimeout(() => this.handleNavigationChange(), 50);
      }, history.replaceState = (...n) => {
        t.apply(history, n), setTimeout(() => this.handleNavigationChange(), 50);
      };
    }
    /**
     * Monitors DOM mutations for navigation removal
     */
    startMutationMonitoring() {
      this.mutationObserver = new MutationObserver((e) => {
        let t = !1;
        e.forEach((n) => {
          n.type === "childList" && (n.removedNodes.forEach((i) => {
            var l;
            (i === this.newNav || (l = i.contains) != null && l.call(i, this.newNav)) && (t = !0);
          }), n.target === this.newNav.parentElement && (t = !0)), n.type === "attributes" && n.target === this.newNav && (t = !0);
        }), t && this.handleNavigationChange();
      }), this.mutationObserver.observe(document.body, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["class", "style", "data-*"]
      });
    }
    /**
     * Monitors Angular router events specifically
     */
    monitorAngularRouter() {
      const e = document.querySelector(
        "[ng-app], [ng-controller], app-root, [ng-version], .ng-scope"
      );
      e && this.mutationObserver && this.mutationObserver.observe(e, {
        attributes: !0,
        childList: !0,
        subtree: !0
      });
    }
    /**
     * Starts periodic checks for navigation persistence
     */
    startPeriodicChecks() {
      const e = Date.now(), t = 3e3, n = setInterval(() => {
        const i = Date.now();
        if (i - e > t) {
          clearInterval(n);
          return;
        }
        i - this.lastCheckTime > 200 && (this.lastCheckTime = i, this.checkNavigationPersistence(), console.log("checkNavigationPersistence"));
      }, 200);
    }
    /**
     * Handles navigation changes detected by any monitoring method
     */
    handleNavigationChange() {
      this.retryCount = 0, setTimeout(() => {
        this.checkNavigationPersistence();
      }, 200);
    }
    /**
     * Checks if our navigation is still present and functional
     */
    checkNavigationPersistence() {
      const e = document.querySelector("crs-nav");
      if (!e) {
        this.recreateNavigation().catch((t) => {
          console.error("🧪 AB Test: Error in recreateNavigation:", t);
        });
        return;
      }
      if (!this.isNavigationProperlyPositioned(e)) {
        this.fixNavigationPosition(e);
        return;
      }
      this.isNavigationProperlyStyled(e) || this.fixNavigationStyling(e), this.retryCount = 0;
    }
    /**
     * Checks if navigation is properly positioned
     */
    isNavigationProperlyPositioned(e) {
      const t = e.getBoundingClientRect(), n = t.width > 0 && t.height > 0, i = this.isElementInHeader(e);
      return n && i;
    }
    /**
     * Checks if navigation is properly styled
     */
    isNavigationProperlyStyled(e) {
      const t = window.getComputedStyle(e);
      return t.display !== "none" && t.visibility !== "hidden" && t.opacity !== "0";
    }
    /**
     * Checks if element is within header area
     */
    isElementInHeader(e) {
      const t = this.findHeaderElement();
      return t ? t.contains(e) || t === e : !1;
    }
    /**
     * Finds header element
     */
    findHeaderElement() {
      const e = [
        "header",
        ".banner",
        ".bg-white.h-\\[70px\\]",
        '[data-name="Background+Shadow"]',
        ".header",
        ".main-header"
      ];
      for (const t of e) {
        const n = document.querySelector(t);
        if (n)
          return n;
      }
      return null;
    }
    /**
     * Recreates the navigation when it's been removed
     */
    async recreateNavigation() {
      if (this.retryCount >= this.maxRetries) {
        console.error(
          "🧪 AB Test: Max retries reached, giving up on navigation recreation"
        );
        return;
      }
      this.retryCount++;
      try {
        const e = await this.navigationOrchestrator.createCompleteNavigation(), t = document.createElement("crs-nav");
        t.appendChild(e), t.classList.add("crs-state-ready"), this.injectNavigationNextToMeganav(t), this.newNav = t;
      } catch (e) {
        console.error("🧪 AB Test: Error recreating navigation:", e), setTimeout(() => {
          this.recreateNavigation().catch((t) => {
            console.error("🧪 AB Test: Error in recreateNavigation retry:", t);
          });
        }, 500);
      }
    }
    /**
     * Fixes navigation position
     */
    fixNavigationPosition(e) {
      const t = document.querySelector("meganav"), n = e;
      if (t && t.parentNode)
        t.nextSibling === e || t.parentNode.insertBefore(n, t.nextSibling);
      else {
        const i = this.findHeaderElement();
        i && !i.contains(e) && i.appendChild(n);
      }
    }
    /**
     * Fixes navigation styling
     */
    fixNavigationStyling(e) {
      const t = e;
      t.style.display === "none" && (t.style.display = "block"), t.style.visibility === "hidden" && (t.style.visibility = "visible"), t.style.opacity === "0" && (t.style.opacity = "1");
    }
    /**
     * Injects navigation next to meganav element
     */
    injectNavigationNextToMeganav(e) {
      const t = document.querySelector("meganav");
      if (t && t.parentNode) {
        const n = document.querySelector("crs-nav");
        n && n.remove(), t.parentNode.insertBefore(e, t.nextSibling);
      } else {
        const n = this.findHeaderElement();
        n ? n.appendChild(e) : document.body.appendChild(e);
      }
    }
    /**
     * Stops all monitoring
     */
    stopMonitoring() {
      this.isMonitoring && (this.isMonitoring = !1, this.monitoringInterval && (clearInterval(this.monitoringInterval), this.monitoringInterval = null), this.mutationObserver && (this.mutationObserver.disconnect(), this.mutationObserver = null));
    }
    /**
     * Gets monitoring status
     */
    getMonitoringStatus() {
      return this.isMonitoring;
    }
    /**
     * Checks if navigation is present
     */
    isNavigationPresent() {
      return !!document.querySelector("crs-nav");
    }
    /**
     * Logs current navigation state
     */
    logNavigationState() {
      document.querySelector("crs-nav"), document.querySelector("meganav"), this.findHeaderElement();
    }
  }
  class L {
    constructor() {
      this.originalNav = null, this.newNav = null, this.isActive = !1, this.variant = "B", this.navigationPersistence = null, this.currentBreakpoint = null, this.resizeTimeout = null, this.resizeHandler = null, this.isRecreating = !1, this.BREAKPOINT = 1100, this.navigationOrchestrator = new N(this.variant), this.init();
    }
    init() {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => this.start()) : this.start();
    }
    async start() {
      this.findOriginalNavigation(), this.currentBreakpoint = window.innerWidth >= this.BREAKPOINT ? "desktop" : "mobile", await this.createAndInjectNavigation(), this.startNavigationMonitoring(), this.startResizeMonitoring(), this.isActive = !0;
    }
    findOriginalNavigation() {
      const e = ["meganav", "off-canvas-menu"];
      console.log("🔍 Searching for original navigation...");
      for (const t of e)
        if (this.originalNav = document.querySelector(t), this.originalNav) {
          console.log(`✅ Found original navigation: ${t}`);
          break;
        } else
          console.log(`❌ Not found: ${t}`);
      this.originalNav || console.warn("⚠️ Could not find original navigation, will use fallback injection");
    }
    async createAndInjectNavigation() {
      try {
        if (window.innerWidth < 1100)
          await this.injectMobileNavigation();
        else {
          await this.waitForMeganav(), this.newNav = await this.navigationOrchestrator.createCompleteNavigation(!1);
          const t = document.createElement("crs-nav");
          t.appendChild(this.newNav), t.classList.add("crs-navigation-system"), t.classList.add("crs-state-ready"), this.newNav = t, this.injectNavigation();
        }
      } catch (e) {
        console.error(
          "🧪 AB Test: Error creating data-driven navigation:",
          e
        ), this.newNav && this.newNav.classList.add("crs-state-error");
      }
    }
    async injectMobileNavigation() {
      for (let n = 1; n <= 5; n++)
        try {
          const i = await this.findMobileMenu();
          if (i) {
            const l = await this.navigationOrchestrator.createCompleteNavigation(!0);
            await this.integrateWithMobileMenu(i, l), this.newNav = i;
            return;
          }
        } catch (i) {
          console.warn(
            `🧪 AB Test: Mobile injection attempt ${n} failed:`,
            i
          ), n < 5 && await this.delay(500);
        }
      console.warn(
        "🧪 AB Test: All mobile injection attempts failed, creating fallback"
      ), await this.createFallbackMobileNavigation();
    }
    async findMobileMenu() {
      try {
        const e = await k("off-canvas-menu ul");
        if (e)
          return e;
      } catch {
      }
      return null;
    }
    async integrateWithMobileMenu(e, t) {
      var l;
      let n = e.querySelector("ul");
      console.log("mobileMenu", e), n || (n = document.createElement("ul"), e.appendChild(n));
      const i = ((l = t.querySelector("ul")) == null ? void 0 : l.innerHTML) || t.innerHTML;
      i && (n.innerHTML = i, n.setAttribute("data-crs-nav-level", "main"));
    }
    async createFallbackMobileNavigation() {
      this.newNav = await this.navigationOrchestrator.createCompleteNavigation();
      const e = document.createElement("crs-nav");
      e.appendChild(this.newNav), e.classList.add("crs-navigation-system"), e.classList.add("crs-state-ready"), e.classList.add("crs-mobile-fallback"), this.newNav = e, this.injectNavigation();
    }
    delay(e) {
      return new Promise((t) => setTimeout(t, e));
    }
    async waitForMeganav() {
      for (let n = 1; n <= 10; n++) {
        try {
          if (await k("meganav"))
            return;
        } catch {
        }
        n < 10 && await this.delay(200);
      }
      console.warn(
        "🧪 AB Test: Meganav not found after maximum retries, proceeding with fallback"
      );
    }
    injectNavigation() {
      if (!this.newNav) {
        console.warn("⚠️ No navigation to inject");
        return;
      }
      if (this.findOriginalNavigation(), console.log("📍 Attempting to inject navigation..."), this.originalNav && this.originalNav.parentNode) {
        if (this.originalNav.parentNode.querySelector("crs-nav, .crs-navigation-system")) {
          console.log("⚠️ CRS navigation already exists next to meganav, skipping injection");
          return;
        }
        this.originalNav.parentNode.insertBefore(
          this.newNav,
          this.originalNav.nextSibling
        ), console.log("✅ Navigation injected next to original meganav");
      } else {
        const e = document.querySelector("meganav");
        if (e && e.parentNode) {
          if (e.parentNode.querySelector("crs-nav, .crs-navigation-system")) {
            console.log("⚠️ CRS navigation already exists next to meganav (fallback), skipping injection");
            return;
          }
          e.parentNode.insertBefore(this.newNav, e.nextSibling), console.log("✅ Navigation injected next to found meganav (fallback)");
        } else
          document.body.appendChild(this.newNav), console.log("⚠️ Navigation injected to body (last resort)");
      }
    }
    findHeaderElement() {
      const e = [
        "header",
        ".banner",
        ".bg-white.h-\\[70px\\]",
        '[data-name="Background+Shadow"]'
      ];
      for (const t of e) {
        const n = document.querySelector(t);
        if (n)
          return n;
      }
      return null;
    }
    startNavigationMonitoring() {
      this.newNav && (this.navigationPersistence = new C(
        this.newNav,
        this.originalNav,
        this.navigationOrchestrator
      ), this.navigationPersistence.startMonitoring());
    }
    destroy() {
      this.navigationPersistence && this.navigationPersistence.stopMonitoring(), this.navigationOrchestrator.destroy(), this.newNav && this.newNav.parentNode && this.newNav.parentNode.removeChild(this.newNav), this.isActive = !1;
    }
    // Public methods for external control and debugging
    getVariant() {
      return this.variant;
    }
    setVariant(e) {
      this.variant = e, this.navigationOrchestrator.setVariant(e);
    }
    getNavigationState() {
      return this.navigationPersistence ? {
        isActive: this.isActive,
        isMonitoring: this.navigationPersistence.getMonitoringStatus(),
        isPresent: this.navigationPersistence.isNavigationPresent(),
        currentUrl: location.href,
        navigationStructure: "Data-driven with template support",
        architecture: "Template-based with separation of concerns"
      } : {
        isActive: this.isActive,
        navigationStructure: "Data-driven with template support",
        architecture: "Template-based with separation of concerns"
      };
    }
    logNavigationState() {
      this.navigationPersistence && this.navigationPersistence.logNavigationState();
    }
    /**
     * Forces a refresh of the navigation (useful for debugging)
     */
    async forceRefresh() {
      if (this.isRecreating) {
        console.log("⏳ Navigation recreation already in progress, skipping force refresh...");
        return;
      }
      console.log("🔄 Forcing navigation refresh..."), this.isRecreating = !0;
      try {
        this.cleanupNavigation(), await this.delay(100), await this.createAndInjectNavigation(), this.startNavigationMonitoring(), console.log("✅ Navigation refresh completed");
      } finally {
        this.isRecreating = !1;
      }
    }
    /**
     * Starts monitoring for window resize events
     */
    startResizeMonitoring() {
      this.resizeHandler || (this.resizeHandler = this.handleResize.bind(this), window.addEventListener("resize", this.resizeHandler), console.log("📏 Resize monitoring started"));
    }
    /**
     * Handles window resize events with debouncing
     */
    handleResize() {
      this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(() => {
        this.checkBreakpointChange();
      }, 100);
    }
    /**
     * Checks if we've crossed the breakpoint and recreates navigation if needed
     */
    async checkBreakpointChange() {
      if (this.isRecreating) {
        console.log("⏳ Navigation recreation already in progress, skipping...");
        return;
      }
      const e = window.innerWidth, t = e >= this.BREAKPOINT ? "desktop" : "mobile";
      if (console.log(`🔄 Resize check: ${e}px, current: ${this.currentBreakpoint}, new: ${t}`), this.currentBreakpoint !== null && this.currentBreakpoint !== t) {
        console.log(`📱💻 Switching from ${this.currentBreakpoint} to ${t}`), this.isRecreating = !0;
        try {
          this.cleanupNavigation(), await this.delay(50), await this.createAndInjectNavigation(), this.startNavigationMonitoring(), console.log(`✅ Successfully switched to ${t} navigation`);
        } catch (n) {
          console.error(`❌ Error switching to ${t} navigation:`, n);
        } finally {
          this.isRecreating = !1;
        }
      }
      this.currentBreakpoint = t;
    }
    /**
     * Cleans up existing navigation before recreation
     */
    cleanupNavigation() {
      console.log("🧹 Cleaning up existing navigation..."), this.navigationOrchestrator && this.navigationOrchestrator.destroy(), document.querySelectorAll("crs-nav, .crs-navigation-system").forEach((t) => {
        try {
          t.remove(), console.log("🗑️ Removed existing navigation element");
        } catch (n) {
          console.warn("Warning: Could not remove navigation element:", n);
        }
      }), this.newNav = null, this.navigationPersistence && (this.navigationPersistence.stopMonitoring(), this.navigationPersistence = null), this.resizeTimeout && (clearTimeout(this.resizeTimeout), this.resizeTimeout = null), console.log("✅ Navigation cleanup completed");
    }
  }
  const I = `meganav {
  display: none;
}

/* Ensure crs-nav is always visible */
crs-nav {
  display: block !important;
}
`, j = `/* Custom crs-nav element */
crs-nav {
  display: block;
  position: relative;
  margin-left: 20px;
  width: 100%;
  height: 100%;
}



.crs-navigation-system {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.crs-navigation-content {
  height: 100%;
}

.crs-nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 4px;
  height: 100%;
}

.crs-nav-item {
  position: relative;
  height: 100%;
}

.crs-nav-item:hover::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 10px;
  background: transparent;
  z-index: 999;
}

.crs-nav-link {
  display: flex;
  align-items: center;
  height: 100%;
  padding-inline: 8px;
  text-decoration: none;
  color: #2e2e2e;
  font-family: baskerville-urw, sans-serif;
  font-size: 18px;
  font-weight: 500;
  border-bottom: 2px solid transparent;
}

.page-header__wrapper.transparentLight:not(:hover)
  #header:not(.is-sticky)
  .crs-nav-link {
  color: #fff;
}

.crs-nav-link:hover {
  border-bottom: 2px solid #000;
}

.crs-nav-link-active {
  border-bottom: 2px solid #000 !important;
  color: #000 !important;
}

/* Template-specific styling */
.crs-template-gifts .crs-nav-link {
  color: #2e2e2e;
}

.crs-template-outlet .crs-nav-link {
  color: #8e1538;
  font-weight: 600;
}

/* Mega Menu */
.crs-mega-menu {
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  background: #f8f8f8;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
  pointer-events: none;
}

.crs-mega-menu.crs-visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.crs-mega-menu-content {
  display: flex;
  margin: 0 auto;
  gap: 40px;
}

/* Sidebar */
.crs-mega-menu-sidebar {
  background: #eeeeee;
  width: 340px;
  padding: 44px 56px;
}

.crs-sidebar-links {
  display: grid;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.crs-sidebar-link {
  text-decoration: none;
  color: #2e2e2e;
  font-family: baskerville-urw, sans-serif;
  font-size: 20px;

  transition: color 0.3s ease;
  position: relative;
  letter-spacing: 0.5px;
  line-height: 23px;
}

.crs-sidebar-link:hover,
.crs-sidebar-link.crs-active {
  color: #000;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* Main Content Area */
.crs-mega-menu-main {
  flex: 1;
  display: flex;
  padding-block: 44px;
  padding-right: 16px;
}

/* Four-column layout */
.crs-mega-menu-main.crs-four-column {
  gap: 16px;
}

/* Five-column layout */
.crs-mega-menu-main.crs-five-column {
  gap: 16px;
}

.crs-mega-menu-main.crs-five-column > * {
  flex: 1;
}

/* Gifts layout - no sidebar */
.crs-mega-menu-content.crs-gifts-layout {
  display: flex;
  justify-content: center;
}

.crs-mega-menu-content.crs-gifts-layout .crs-mega-menu-main {
  max-width: 1200px;
  width: 100%;
}

/* Gifts featured sections */
.crs-gifts-featured-section {
  display: flex;
  flex-direction: column;

}

.crs-gifts-featured-section .crs-featured-image {
  margin-top: 22px;
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

}

.crs-gifts-section-title {
  font-size: 20px;
  font-weight: 500;
  color: #2e2e2e;

  line-height: 23px;
  letter-spacing: 0.5px;
}

.crs-gifts-action-link {
  margin-top: 8px;
  display: inline-block;
  padding-inline: 10px;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #212121;
  text-decoration: underline;
  text-underline-position: from-font;
  line-height: 28px;
  letter-spacing: 1px;
  transition: color 0.2s ease;
  align-self: flex-start;
  margin-top: 8px;
}

.crs-gifts-action-link:hover {
  color: #000000;
  text-decoration: underline;
}

.crs-featured-action-link {
  display: inline-block;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
  color: #212121;
  letter-spacing: 1px;
  transition: color 0.2s ease;
  align-self: flex-start;
  margin-top: 8px;
}

.crs-featured-action-link:hover {
  color: #000000;
  text-decoration: underline;
}

/* Collections Section */
.crs-collections-section {
  flex: 1;
}

.crs-section-title {
  font-family: baskerville-urw, sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #000;
  padding-bottom: 22px;
}

.crs-collection-list {
  display: grid;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.crs-collection-list li {
  margin-bottom: 0;
}

.crs-collection-link {
  text-decoration: none;
  color: #2e2e2e;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 16px;
  line-height: 28px;
  transition: color 0.3s ease;
}

.crs-collection-link {
  display: flex;
  align-items: center;
  gap: 12px;
}

.crs-item-icon-image {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

.crs-view-all-link {
  text-decoration: underline;
  font-size: 16px;
  line-height: 28px;
  color: #212121;
}

/* Colors Section */
.crs-colors-section {
  flex: 1;
}

.crs-color-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.crs-color-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.crs-color-link {
  display: flex;
  align-items: center;
  gap: 12px;
}
.crs-color-swatch {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  position: relative;
  border: 1px solid #e0e0e0;
}

.crs-color-swatch .crs-new-badge {
  color: #fff;
  font-size: 15px;
  font-style: italic;
  font-weight: 400;
  line-height: 21px; /* 140% */
  letter-spacing: 1px;
}

.crs-color-name {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 14px;
  color: #2e2e2e;
}

.crs-colors-section .crs-collection-list {
  margin-top: 22px;
}

/* Multi Color Grid Section */
.crs-multi-color-section {
  flex: 1;
}

.crs-multi-color-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Featured Section */
.crs-featured-section-link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.crs-featured-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 56px;
}

.crs-featured-image {
  width: 100%;
  max-width: 335px;
  height: auto;
}

.crs-featured-text {
  margin-top: 8px;
  width: 100%;
  padding-inline: 10px;
}



.crs-featured-title {
  color: #212121;

  font-family: 'baskerville-urw', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
  letter-spacing: 0.5px;
}

 .crs-featured-subtitle {
  color: #212121;
  font-family: 'Source Sans 3';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: 1px;
}

/* Simple List for Gifts/Outlet */
.crs-simple-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.crs-simple-list li {
  margin-bottom: 12px;
}

.crs-simple-link {
  text-decoration: none;
  color: #2e2e2e;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 16px;
  transition: color 0.3s ease;
}



/* Dual Featured Section */
.crs-dual-featured-section {
  flex: 1;
  display: flex;
  gap: 20px;
}

.crs-featured-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.crs-featured-item-link {
  display: block;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
}



.crs-featured-item .crs-featured-image {
  width: 100%;
  max-width: 230px;
  height: auto;
  border-radius: 4px;
}

:is(
    .crs-dual-featured-section,
    .crs-triple-featured-section,
    .crs-quad-featured-section,
    [data-grandparent="Outlet"]
  )
  img.crs-featured-image {
  width: 230px;
  height: 307px;
  object-fit: cover;
}



.crs-featured-item .crs-featured-text {
  padding: 0 20px;
}

.crs-featured-main-title {
  margin-bottom: 22px;
  width: 100%;
  color: #000;
  font-family: 'baskerville-urw', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 23px; /* 115% */
  letter-spacing: 0.5px;
}

/* .crs-featured-item .crs-featured-title {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 18px;
  color: #2e2e2e;

  font-weight: 500;
  line-height: 28px;
} */



/* Stacked Sections Styles */
.crs-stacked-sections {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.crs-stacked-sections .crs-collections-section {
  margin-bottom: 0;
}

.crs-stacked-sections .crs-collections-section:not(:last-child) {
  margin-bottom: 40px;
}

/* Triple Featured Section */
.crs-triple-featured-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.crs-triple-featured-title {
  font-family: 'Baskerville URW', serif;
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  letter-spacing: 0.5px;
  line-height: 23px;
  margin: 0;
}

.crs-triple-featured-items {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.crs-triple-featured-items .crs-featured-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Quad Featured Section */
.crs-quad-featured-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.crs-quad-featured-items {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.crs-quad-featured-items .crs-featured-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.crs-triple-featured-items .crs-featured-item .crs-featured-image {
  /* width: 100%; */
  height: 100%;
  max-width: 230px;
  min-height: 307px;
  height: auto;
  border-radius: 4px;
  margin-bottom: 20px;
}

.crs-triple-featured-items .crs-featured-item .crs-featured-text {
  padding: 0 10px;
}



/* Product Cards Section */
.crs-product-cards-section {
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.crs-product-card {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.crs-product-link {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;
}



.crs-product-image {
  width: 100%;
  max-width: 230px;
  height: 296px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 14px;
}

.crs-product-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.crs-product-title {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 18px;
  color: #212121;
  margin: 0;
  font-weight: 400;
  line-height: 1.4;
}

.crs-product-colors {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 18px;
  color: #acacac;
  margin: 0;
  font-weight: 400;
}

.crs-product-price {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 18px;
  color: #212121;
  margin: 0;
  font-weight: 400;
}

.crs-product-stock {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 18px;
  color: #212121;
  margin: 0;
  font-weight: 400;
}

.crs-simple-link {
  display: flex;
  align-items: center;
  gap: 8px;
}

.crs-item-icon {
  font-size: 16px;
  width: 20px;
  text-align: center;
  flex-shrink: 0;
}

.crs-item-text {
  flex: 1;
}

/* State Classes */
.crs-navigation-system.crs-state-ready {
  opacity: 1;
}

.crs-navigation-system.crs-state-error {
  opacity: 0.5;
  background: #ffebee;
}


/* Responsive Design */
@media (max-width: 1099px) {
  .crs-navigation-system {
    display: none;
  }

  /* Hide desktop mega menu on mobile */
  .crs-mega-menu {
    display: none !important;
  }
}
`, H = `/* Mobile Navigation Integration with Existing Structure */
/* We work with the existing off-canvas-menu structure */

/* Mobile fallback navigation */
.crs-mobile-fallback {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
  z-index: 9999;
  overflow-y: auto;
}

/* Navigation level data attributes for styling */

ul[data-crs-nav-level='main'] {
  display: grid;
  gap: 12px;
}

ul[data-crs-nav-level='submenu'] {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  padding: 0 !important;
  background: #fff;
  z-index: 1000;
}

ul[data-crs-nav-level='third-level'] {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  padding: 0 !important;
  background: #fff;
  z-index: 1000;
}

/* Mobile navigation items matching Figma design */
.crs-mobile-nav-item {
  list-style: none;
  margin: 0;
  padding: 0;
}

.crs-mobile-nav-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  padding: 0 24px;
  overflow: hidden;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.2s ease;
}

.crs-mobile-nav-link:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

[data-crs-nav-level='main'] .crs-mobile-nav-link {
  background: #f2f2f2;
}

.crs-mobile-nav-text {
  font-family: baskerville-urw, sans-serif;
  font-size: 20px;
  color: #2e2e2e;
  letter-spacing: 0.5px;
  line-height: 24px;
  white-space: nowrap;
}

.crs-mobile-chevron {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-weight: 700;
  color: #000;
  width: 16px;
  height: 16px;
}

.crs-mobile-nav-icon {
  width: 24px;
  height: 24px;
  margin-right: 12px;
  flex-shrink: 0;
  object-fit: contain;
}

/* Special colors for Gifts and Outlet */
.crs-mobile-nav-text[style*='color: #c9830a'] {
  color: #c9830a !important;
}

.crs-mobile-nav-text[style*='color: #881d39'] {
  color: #881d39 !important;
}

/* Mobile submenu header */
.crs-mobile-nav-header {
  min-height: 64px;
  border-bottom: 1px solid #cfd2d3;
}

/* Mobile second level content wrapper */
.crs-mobile-second-level-content {
  height: 100%;
  padding: 0;
  background: white;
  overflow-y: auto;
}

.crs-mobile-second-level-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.crs-mobile-nav-back {
  background: #f2f2f2;
  box-sizing: border-box;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 16px;
  position: relative;
  width: 100%;
  cursor: pointer;
  display: flex;
}

.crs-mobile-nav-back-section {
  display: flex;
  align-items: center;
}

.crs-mobile-nav-back-icon {
  font-size: 26px;
  color: #2e2e2e;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.crs-mobile-nav-close {
  font-size: 26px;
  color: #2e2e2e;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* Mobile third level navigation */
.crs-mobile-nav-parent {
  font-size: 16px;
  color: #5c5c5c;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 1px;
}

.crs-mobile-nav-current {
  font-size: 22px;
  color: #000;
  font-family: baskerville-urw, sans-serif;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.5px;
  flex: 1;
  text-align: center;
}

[data-crs-nav-level='third-level'] .crs-mobile-nav-current {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.crs-mobile-third-level-content {
  height: 100%;
  padding: 24px;
  background: white;
  overflow-y: auto;
}

.crs-mobile-third-level-section {
  margin-bottom: 32px;
}

.crs-mobile-third-level-title {
  font-size: 22px;
  color: #000;
  font-family: baskerville-urw, sans-serif;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.5px;
  margin-bottom: 20px;
}

.crs-mobile-third-level-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.crs-mobile-third-level-item {
  margin: 0;
}

.crs-mobile-third-level-link {
  display: flex;
  align-items: center;
  gap: 12px;

  width: 100%;
}

.crs-mobile-third-level-text {
  font-size: 16px;
  color: #212121;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 1px;
}

/* Mobile color swatches */
.crs-mobile-color-swatches {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

.crs-mobile-color-swatch {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;
}

.crs-mobile-color-circle {
  width: 48px;
  height: 48px;
  border-radius: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.crs-mobile-color-new-badge {
  position: absolute;
  font-size: 15px;
  color: white;
  font-family: 'Source Sans 3', sans-serif;
  font-style: italic;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 1px;
}

.crs-mobile-color-name {
  font-size: 16px;
  color: #212121;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 1px;
  text-align: center;
}

/* Mobile featured content */
.crs-mobile-featured-content {
  margin-top: 24px;
}

.crs-mobile-featured-image {
  width: 100%;
  height: 220px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 8px;
  border-radius: 4px;
  object-fit: cover;
}

.crs-mobile-featured-text {
  padding: 0 10px;
}

.crs-mobile-featured-title {
  font-size: 16px;
  color: #212121;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 1px;
  margin-bottom: 4px;
}

.crs-mobile-featured-subtitle {
  font-size: 20px;
  color: #212121;
  font-family: baskerville-urw, sans-serif;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
}

/* Mobile dual featured content */
.crs-mobile-dual-featured-content {
  margin-top: 24px;
  display: flex;
  gap: 12px;
}

.crs-mobile-dual-featured-content .crs-mobile-featured-item {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.crs-mobile-dual-featured-content .crs-mobile-featured-image {
  width: 100%;
  height: 220px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 8px;
  border-radius: 4px;
  object-fit: cover;
}

.crs-mobile-dual-featured-content .crs-mobile-featured-text {
  padding: 0 10px;
}

.crs-mobile-dual-featured-content .crs-mobile-featured-title {
  font-size: 16px;
  color: #212121;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 1px;
  margin-bottom: 4px;
}

.crs-mobile-dual-featured-content .crs-mobile-featured-subtitle {
  font-size: 20px;
  color: #212121;
  font-family: baskerville-urw, sans-serif;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
}

/* Mobile triple featured content */
.crs-mobile-triple-featured-content {
  margin-top: 24px;
  display: flex;
  gap: 12px;
}

.crs-mobile-triple-featured-content .crs-mobile-featured-item {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.crs-mobile-triple-featured-content .crs-mobile-featured-image {
  width: 100%;
  height: 220px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 8px;
  border-radius: 4px;
  object-fit: cover;
}

.crs-mobile-triple-featured-content .crs-mobile-featured-text {
  padding: 0 10px;
}

.crs-mobile-triple-featured-content .crs-mobile-featured-title {
  font-size: 16px;
  color: #212121;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 1px;
  margin-bottom: 4px;
}

.crs-mobile-triple-featured-content .crs-mobile-featured-subtitle {
  font-size: 20px;
  color: #212121;
  font-family: baskerville-urw, sans-serif;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
}

/* Mobile Quad Featured Content */
.crs-mobile-quad-featured-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  padding: 16px;
}

.crs-mobile-quad-featured-content .crs-mobile-featured-item {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.crs-mobile-quad-featured-content .crs-mobile-featured-image {
  width: 100%;
  height: 220px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 4px;
  aspect-ratio: 230.4/307.2;
}

.crs-mobile-quad-featured-content .crs-mobile-featured-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 10px;
}

.crs-mobile-quad-featured-content .crs-mobile-featured-title {
  font-family: 'Baskerville URW', serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #212121;
  letter-spacing: 0.5px;
}

.crs-mobile-quad-featured-content .crs-mobile-featured-action-link {
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #212121;
  text-decoration: underline;
  text-underline-position: from-font;
  letter-spacing: 1px;
  width: fit-content;
}

/* Mobile Outfit Builder */
.crs-mobile-outfit-builder-content {

  margin-bottom: 24px;
  display: flex;
  gap: 12px;
  align-items: center;
  background: #eeeeee;
  padding: 24px 16px;
  border-radius: 4px;
}

.crs-mobile-outfit-builder-image {
  width: 165px;
  height: 220px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 4px;
  flex-shrink: 0;
}

.crs-mobile-outfit-builder-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  text-align: center;
}

.crs-mobile-outfit-builder-subtitle {
  font-size: 16px;
  color: #212121;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 1px;
  margin: 0;
}

.crs-mobile-outfit-builder-title {
  font-size: 22px;
  color: #212121;
  font-family: baskerville-urw, sans-serif;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.5px;
  margin: 0;
}

.crs-mobile-outfit-builder-link {
  font-size: 16px;
  color: #212121;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 1px;
  text-decoration: underline;
  text-underline-position: from-font;
  transition: color 0.2s ease;
}

.crs-mobile-outfit-builder-link:hover {
  color: #000000;
  text-decoration: underline;
}

/* Mobile Product Cards */
.crs-mobile-product-cards-content {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.crs-mobile-product-card {
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
}

.crs-mobile-product-image {
  width: 100%;
  aspect-ratio: 230/296;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 4px;
  margin-bottom: 12px;
}

.crs-mobile-product-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.crs-mobile-product-title {
  font-size: 18px;
  color: #212121;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
}

.crs-mobile-product-colors {
  font-size: 18px;
  color: #acacac;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  margin: 0;
}

.crs-mobile-product-price {
  font-size: 18px;
  color: #212121;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  margin: 0;
}

.crs-mobile-product-stock {
  font-size: 18px;
  color: #212121;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  margin: 0;
}

/* Gifts mobile layout */
.crs-mobile-gifts-content {
  padding: 20px;
  background-color: #f8f9fa;
}

.crs-mobile-gifts-section {
  margin-bottom: 30px;
}

.crs-mobile-gifts-section:last-child {
  margin-bottom: 0;
}

.crs-mobile-gifts-section-title {
  font-size: 18px;
  font-weight: 600;
  color: #2e2e2e;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid #c9830a;
}

.crs-mobile-gifts-items {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.crs-mobile-gifts-item {
  background: white;
  border-radius: 8px;
  padding: 12px 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.crs-mobile-gifts-link {
  text-decoration: none;
  color: #2e2e2e;
}

.crs-mobile-gifts-text {
  font-size: 16px;
  font-weight: 500;
}

.crs-mobile-gifts-featured-section {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.crs-mobile-gifts-featured-section .crs-mobile-gifts-section-title {
  margin-bottom: 15px;
  border-bottom: none;
  padding-bottom: 0;
}

.crs-mobile-gifts-action-link {
  display: inline-block;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #212121;
  text-decoration: underline;
  text-underline-position: from-font;
  line-height: 28px;
  letter-spacing: 1px;
  margin-top: 12px;
  transition: color 0.2s ease;
}

.crs-mobile-gifts-action-link:hover {
  color: #000000;
  text-decoration: underline;
}

`;
  x({ name: "Navigation Menu Redesign & Interaction", dev: "OS" });
  class $ {
    constructor() {
      this.navigationVariant = new L(), this.init();
    }
    init() {
      this.addStyles();
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = I, document.head.appendChild(e);
      const t = document.createElement("style");
      t.textContent = j, document.head.appendChild(t);
      const n = document.createElement("style");
      n.textContent = H, document.head.appendChild(n);
    }
  }
  window.autoInitData.website.defaultCountry === "GB" && (window.navigationInitialized || (window.navigationInitialized = !0, new $()));
})();
