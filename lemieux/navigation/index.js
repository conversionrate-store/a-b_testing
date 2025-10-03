(function() {
  "use strict";
  const J = (b) => new Promise((e) => {
    const t = document.querySelector(b);
    t && e(t);
    const s = new MutationObserver(() => {
      const l = document.querySelector(b);
      l && (e(l), s.disconnect());
    });
    s.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), B = ({ name: b, dev: e }) => {
    console.log(
      `%c EXP: ${b} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, c = {
    Lilac: "rgb(194, 181, 204)",
    Cranberry: "rgb(181, 79, 94)",
    Rosemary: "rgb(110, 117, 110)",
    Juniper: "rgb(61, 51, 74)",
    Damson: "rgb(61, 51, 74)",
    NavyNew: "rgb(44, 46, 58)",
    NavyOld: "rgb(54, 63, 136)",
    Blossom: "rgb(200, 159, 165)",
    Lagoon: "rgb(85, 143, 145)",
    IceBlue: "rgb(84, 116, 143)",
    HunterGreen: "rgb(30, 91, 18)",
    White: "rgb(255, 255, 255)",
    Mimosa: "rgb(224, 201, 146)",
    Peony: "rgb(166, 110, 122)",
    Aqua: "rgb(137, 172, 172)",
    Glacier: "rgb(130, 156, 165)",
    Fern: "rgb(149, 152, 137)",
    Alpine: "rgb(74, 65, 42)",
    Dusk: "rgb(78, 80, 85)",
    BenettonBlue: "rgb(40, 98, 204)",
    Chilli: "rgb(215, 10, 10)",
    Burgundy: "rgb(119, 23, 23)",
    Petrol: "rgb(70, 81, 90)",
    Ember: "rgb(124, 36, 57)",
    Cinder: "rgb(59, 55, 57)",
    Ginger: "rgb(142, 99, 32)",
    Sage: "rgb(105, 151, 135)",
    Brown: "rgb(94, 63, 17)",
    Grey: "rgb(184, 184, 184)",
    Black: "rgb(33, 33, 33)",
    Apricot: "rgb(194, 106, 90)",
    Sienna: "rgb(151, 58, 54)"
  }, H = [
    {
      title: "Horse",
      link: "/horsewear",
      template: "featured",
      submenu: [
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
              title: "AW25 Saddle Pads",
              link: "/new-in/aw25/horse-wear",
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
                { title: `5'9"`, link: "/horsewear/horse-rugs?155=6728" },
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
                  featuredImage: "https://conversionrate-store.github.io/a-b_images/lemieux/cooler-rugs.jpg",
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
          template: "default",
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
                  featuredImage: "https://conversionrate-store.github.io/a-b_images/lemieux/arika-mesh.jpg",
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
          template: "default",
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
                  link: "/horsewear/headcollars-leadropes/comfort-headcollars",
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
          template: "default",
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
                  link: "/horsewear/fly-protection/fly-hoods"
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
                  link: "/horsewear/horse-rugs/arika-shower-tek-fly-rug-grey-new#selection.color=6658",
                  featuredImage: "https://www.lemieux.com/static/cms/media/it04127_lifestyle_arikashower-tekflyrug_grey_4-5.jpg",
                  featuredTitle: "Arika Shower-Tek Rug",
                  featuredSubtitle: "Our Favourite",
                  template: "featured"
                },
                {
                  title: "New Colours",
                  link: "/horsewear/fly-protection/fly-hoods",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT06962_lifestyle_classicflyhood_lilac_7-3.jpg",
                  featuredTitle: "Classic Fly Hoods",
                  featuredSubtitle: "New Colours",
                  template: "featured"
                },
                {
                  title: "Most Popular",
                  link: "/horsewear/fly-protection/armourshield-pro-full-fly-mask-grey#selection.color=6647",
                  featuredImage: "https://www.lemieux.com/static/cms/media/3n6a0380_copy-4.jpg",
                  featuredTitle: "Armourshield Fly Masks",
                  featuredSubtitle: "Most Popular",
                  template: "featured"
                }
              ]
            }
          ]
        },
        {
          title: "Grooming & Care",
          link: "/horsewear/grooming-care",
          template: "default",
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
          template: "default",
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
                  link: "/horsewear/stable-yard/grooming-bags"
                },
                { title: "Haynets", link: "/horsewear/stable-yard/haynets" },
                {
                  title: "Ropes & Tie Ups",
                  link: "/horsewear/stable-yard/ropes-tie-ups"
                },
                { title: "Treats", link: "/horsewear/stable-yard/horse-treats" },
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
                  title: "Horse Stable Toys",
                  link: "/horsewear/stable-yard/horse-toys",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT03912_lifestyle_horsetoy_banana_1-1-2.jpg",
                  featuredTitle: "Horse Stable Toys",
                  featuredSubtitle: "Beat Boredom",
                  template: "featured"
                }
              ]
            }
          ]
        },
        {
          title: "Supplements",
          link: "/horsewear/supplements",
          template: "default",
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
          title: "New",
          link: "/new-in/aw25/horse-wear",
          template: "default",
          submenu: [
            {
              title: "AW25 Collection & New Collection",
              template: "stacked-sections",
              link: "#",
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
                    {
                      title: "Rugs",
                      link: "/new-in/aw25/horse-wear?329=6616"
                    },
                    {
                      title: "Fly Hoods",
                      link: "/new-in/aw25/horse-wear?329=6605"
                    },
                    { title: "Boots", link: "/new-in/aw25/horse-wear?329=7903" },
                    {
                      title: "Headcollars",
                      link: "/new-in/aw25/horse-wear?329=6611"
                    },
                    {
                      title: "Grooming",
                      link: "/new-in/aw25/horse-wear?329=6613"
                    },
                    {
                      title: "View All",
                      link: "/new-in/aw25/horse-wear",
                      template: "link"
                    }
                  ]
                },
                {
                  title: "New Collections",
                  link: "/new-in/aw25/horse-wear",
                  template: "default",
                  submenu: [
                    {
                      title: "Aspen Collection",
                      link: "/new-in/aspen-collection"
                    },
                    {
                      title: "Glacier ReWind",
                      link: "/collections/colour/glacier"
                    },
                    {
                      title: "Essence Collection",
                      link: "/new-in/essence"
                    },
                    {
                      title: "Waterproof Horse Wear",
                      link: "/new-in/waterproof?322=6684"
                    },
                    {
                      title: "Puissance Collection",
                      link: "/new-in/puissance-collection"
                    }
                  ]
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
                  color: c.Lilac,
                  isNew: !0,
                  link: "/new-in/aw25/horse-wear?93=10146"
                },
                {
                  name: "Juniper",
                  color: c.Juniper,
                  isNew: !0,
                  link: "/new-in/aw25/horse-wear?93=10143"
                },
                {
                  name: "Rosemary",
                  color: c.Rosemary,
                  isNew: !0,
                  link: "/new-in/aw25/horse-wear?93=10153"
                },
                {
                  name: "Damson",
                  color: c.Damson,
                  isNew: !0,
                  link: "/new-in/aw25/horse-wear?93=10140"
                },
                {
                  name: "Cranberry",
                  color: c.Cranberry,
                  isNew: !0,
                  link: "/new-in/aw25/horse-wear?93=11250"
                },
                {
                  name: "Navy",
                  color: c.NavyNew,
                  isNew: !0,
                  link: "/new-in/aw25/horse-wear?195=8350"
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
              title: "AW25 Collection",
              link: "/new-in/aw25/horse-wear",
              template: "featured",
              featuredImage: "https://www.lemieux.com/tco-images/unsafe/1920x2560/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT08147_lifestyle_loireclassicclosecontactsquare_navycranberry_6-1.jpg",
              featuredTitle: "AW25 Collection",
              featuredSubtitle: "New Arrivals"
            }
          ]
        }
        // {
        //   title: 'Gifts',
        //   link: '/gifts/for-horses',
        //   template: 'default',
        // },
      ]
    },
    {
      title: "Women",
      link: "/clothing/women/casual-wear",
      template: "featured",
      submenu: [
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
                      title: "Shirts & Tops",
                      link: "/clothing/women/casual-wear/shirts-tops"
                    },
                    {
                      title: "Breeches & Pull Ons",
                      link: " /clothing/women/casual-wear/breeches-jodhpurs"
                    },
                    // {
                    //   title: 'Leggings & Pull Ons',
                    //   link: '/clothing/women/casual-wear/leggings-breeches',
                    // },
                    {
                      title: "Hat Silks",
                      link: "/clothing/women/accessories/hat-silks"
                    },
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
                      title: "Waterproof Clothing",
                      link: "/new-in/waterproof?322=6691"
                    },
                    {
                      title: "Competition Collection",
                      link: "/clothing/accessories/clothing-accessories/stocks-scrunchies"
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
                  link: "/clothing/accessories/clothing-accessories/stocks-scrunchies"
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
                  featuredTitle: "Competition Collection",
                  featuredSubtitle: "Ready to Compete",
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
                {
                  title: "Riding Boots",
                  link: "/clothing/footwear/riding-boots"
                },
                { title: "Yard Boots", link: "/clothing/footwear/short-boots" },
                { title: "Trainers", link: "/clothing/footwear/trainers" },
                { title: "Wellies", link: "/clothing/footwear/wellies" },
                { title: "Sliders", link: "/clothing/footwear/sliders" },
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
                { title: "Socks", link: "/clothing/footwear/socks" },
                {
                  title: "Bags",
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
                  link: "/clothing/footwear/riding-boots",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT04711_lifestyle_fieldridingboot_black_04g.jpg",
                  featuredTitle: "Riding Boots",
                  featuredSubtitle: "New Arrivals",
                  template: "featured"
                },
                {
                  title: "Bestselling Footwear",
                  link: "/clothing/footwear/trainers",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT06509_lifestyle_traxlitetrainer_pecan_05%20(2)-2.jpg",
                  featuredTitle: "Trax Lite Trainers",
                  featuredSubtitle: "Bestselling Footwear",
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
                  featuredImage: "https://www.lemieux.com/tco-images/unsafe/1920x2560/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT07382_lifestyle_henriettahalfziphoodie_almond_004j.jpg",
                  featuredTitle: "Hat Silks ",
                  featuredSubtitle: "Best Sellers",
                  template: "featured"
                },
                {
                  title: "Organised Travel",
                  link: "/clothing/accessories/accessories/rider-luggage",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT04979_lifestyle_luxehatbox_black_05-2.webp",
                  featuredTitle: "Luggage",
                  featuredSubtitle: "Organised Travel ",
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
                },
                {
                  title: "Brown Crystal Suede Competition Outfit",
                  link: "https://www.lemieux.com/outfit-builder#eyJzdGVwIjozLCJoaXN0b3J5Ijp7InByZXZTZWxlY3RlZFNlY3Rpb24iOjc4NDZ9LCJjb25maWdPcHRpb24iOiJSaWRlciAmIEhvcnNlIiwicmlkZXIiOnsidGFiSWQiOjU4ODgsIm9wdGlvbk5hbWUiOiJSaWRlciJ9LCJob3JzZSI6eyJ0YWJJZCI6NzgxNCwib3B0aW9uTmFtZSI6IkJheSJ9LCJvcHRpb25Ub2dnbGVTdGF0ZSI6IlJpZGVyIiwiY3VycmVudFNlY3Rpb25PcHRpb25JZCI6MTEzMzUsInNlbGVjdGlvbiI6eyI3ODQzIjp7InByb2R1Y3RJZCI6MTI0NzcsInByb2R1Y3RUeXBlIjoiUmlkZXIifSwiNzg0NSI6eyJwcm9kdWN0SWQiOjYwNTY5LCJwcm9kdWN0VHlwZSI6IlJpZGVyIn0sIjc4NDYiOnsicHJvZHVjdElkIjo1MTAzLCJwcm9kdWN0VHlwZSI6IlJpZGVyIn0sIjc4NDkiOnsicHJvZHVjdElkIjoyMjQ5MCwicHJvZHVjdFR5cGUiOiJIb3JzZSJ9LCI3ODUwIjp7InByb2R1Y3RJZCI6MTkxNzksInByb2R1Y3RUeXBlIjoiSG9yc2UifSwiMTEzMzUiOnsicHJvZHVjdElkIjozMTg1MCwicHJvZHVjdFR5cGUiOiJSaWRlciJ9fX0=",
                  featuredImage: "https://www.lemieux.com/tco-images/unsafe/640x853/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/media/catalog/product/b/r/brown_crystal_suede_competition_outfit_builder.jpg",
                  featuredTitle: "Brown Crystal Suede Competition Outfit",
                  featuredSubtitle: "",
                  template: "featured",
                  actionLink: {
                    text: "Shop This Look",
                    url: "https://www.lemieux.com/outfit-builder#eyJzdGVwIjozLCJoaXN0b3J5Ijp7InByZXZTZWxlY3RlZFNlY3Rpb24iOjc4NDZ9LCJjb25maWdPcHRpb24iOiJSaWRlciAmIEhvcnNlIiwicmlkZXIiOnsidGFiSWQiOjU4ODgsIm9wdGlvbk5hbWUiOiJSaWRlciJ9LCJob3JzZSI6eyJ0YWJJZCI6NzgxNCwib3B0aW9uTmFtZSI6IkJheSJ9LCJvcHRpb25Ub2dnbGVTdGF0ZSI6IlJpZGVyIiwiY3VycmVudFNlY3Rpb25PcHRpb25JZCI6MTEzMzUsInNlbGVjdGlvbiI6eyI3ODQzIjp7InByb2R1Y3RJZCI6MTI0NzcsInByb2R1Y3RUeXBlIjoiUmlkZXIifSwiNzg0NSI6eyJwcm9kdWN0SWQiOjYwNTY5LCJwcm9kdWN0VHlwZSI6IlJpZGVyIn0sIjc4NDYiOnsicHJvZHVjdElkIjo1MTAzLCJwcm9kdWN0VHlwZSI6IlJpZGVyIn0sIjc4NDkiOnsicHJvZHVjdElkIjoyMjQ5MCwicHJvZHVjdFR5cGUiOiJIb3JzZSJ9LCI3ODUwIjp7InByb2R1Y3RJZCI6MTkxNzksInByb2R1Y3RUeXBlIjoiSG9yc2UifSwiMTEzMzUiOnsicHJvZHVjdElkIjozMTg1MCwicHJvZHVjdFR5cGUiOiJSaWRlciJ9fX0="
                  }
                }
              ]
            }
          ]
        },
        {
          title: "New",
          link: "/new-in/aw25/women",
          template: "default",
          submenu: [
            {
              title: "AW25 Collection & New Collections",
              template: "stacked-sections",
              link: "#",
              submenu: [
                {
                  title: "AW25 Collection",
                  link: "/new-in/aw25/women",
                  template: "default",
                  submenu: [
                    {
                      title: "Coats & Jackets",
                      link: "/new-in/aw25/women?329=6604"
                    },
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
                  title: "New Collections",
                  link: "",
                  template: "default",
                  submenu: [
                    {
                      title: "Aspen Collection",
                      link: "/new-in/aspen-collection"
                    },
                    {
                      title: "Glacier ReWind",
                      link: "/collections/colour/glacier"
                    },
                    {
                      title: "Waterproof Clothing",
                      link: "/new-in/waterproof?322=6691"
                    }
                  ]
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
                  color: c.Lilac,
                  isNew: !0,
                  link: "/new-in/aw25/women?93=10146"
                },
                {
                  name: "Juniper",
                  color: c.Juniper,
                  isNew: !0,
                  link: "/new-in/aw25/women?93=10143"
                },
                {
                  name: "Rosemary",
                  color: c.Rosemary,
                  isNew: !0,
                  link: "/new-in/aw25/women?93=10153"
                },
                {
                  name: "Damson",
                  color: c.Damson,
                  isNew: !0,
                  link: "/new-in/aw25/women?93=10140"
                },
                {
                  name: "Cranberry",
                  color: c.Cranberry,
                  isNew: !0,
                  link: "/new-in/aw25/women?93=11250"
                },
                {
                  name: "Navy",
                  color: c.NavyNew,
                  isNew: !0,
                  link: "/new-in/aw25/women?195=8350"
                }
              ],
              submenu: [
                {
                  title: "View All Colours",
                  link: "/aw25-collection",
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
                      title: "Coats & Jackets",
                      link: "/clothing/children/casual-wear/coats-jackets"
                    },
                    {
                      title: "Hoodies & Jumpers",
                      link: "/clothing/children/casual-wear/hoodies-jumpers"
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
                      title: "Breeches & Pull Ons",
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
                      title: "Waterproof Clothing",
                      link: "/new-in/waterproof?322=6691"
                    },
                    {
                      title: "Young Rider Collection",
                      link: "/clothing/children/young-rider-collection"
                    },
                    {
                      title: "Mini Collection",
                      link: "/clothing/children/mini-collection"
                    },
                    {
                      title: "Young Rider Boys",
                      link: "/clothing/children/young-mens-collection"
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
                      title: "Socks & Scrunchies",
                      link: "/clothing/accessories/clothing-accessories/stocks-scrunchies"
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
                  featuredTitle: "Mini Collection",
                  featuredSubtitle: "3-10 Years",
                  template: "featured"
                },
                {
                  title: "7-14 Years",
                  link: "/clothing/children/young-rider-collection",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT07216_lifestyle_young_rider_tammy_teddy_fleece_navy_01f.jpg",
                  featuredTitle: "Young Rider Collection ",
                  featuredSubtitle: "7-14 Years",
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
                  link: "/clothing/children/accessories/footwear?327=7874",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT04547_studiolifestyle_juniorfieldridingboot_black_10o.jpg",
                  featuredTitle: "Junior Field Riding Boots",
                  featuredSubtitle: "New In",
                  template: "featured"
                },
                {
                  title: "Comfort outside the saddle",
                  link: "/clothing/children/accessories/footwear?327=7875",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT06514_lifestyle_youthtraxviva_stone_10d.jpg",
                  featuredTitle: "Youth Trainers",
                  featuredSubtitle: "Comfort outside the saddle ",
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
                  title: "Pony Pencil Cases",
                  link: "/clothing/children/accessories/stationery"
                },
                {
                  title: "View All",
                  link: "/clothing/children/accessories",
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
                  title: "New AW25 Colours",
                  link: "/clothing/children/accessories?329=6693",
                  featuredImage: "https://www.lemieux.com/static/cms/media/IT07244_lifestyle_minidoublepombeanie_peachpunch_002p.jpg",
                  featuredTitle: "New AW25 Colours",
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
          title: "New",
          link: "/new-in/aw25/children",
          template: "default",
          submenu: [
            {
              title: "AW25 Collection & New Collections",
              template: "stacked-sections",
              link: "#",
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
                    {
                      title: "Hat Silks",
                      link: "/new-in/aw25/children?329=6610"
                    },
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
                  title: "New Collections",
                  link: "",
                  template: "default",
                  submenu: [
                    {
                      title: "Aspen Collection",
                      link: "/new-in/aspen-collection"
                    },
                    {
                      title: "Glacier ReWind",
                      link: "/collections/colour/glacier"
                    },
                    {
                      title: "Waterproof Clothing",
                      link: "/new-in/waterproof?322=6692"
                    }
                  ]
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
                  color: c.Lilac,
                  isNew: !0,
                  link: "/new-in/aw25/children?93=10146"
                },
                {
                  name: "Juniper",
                  color: c.Juniper,
                  isNew: !0,
                  link: "/new-in/aw25/children?93=10143"
                },
                {
                  name: "Rosemary",
                  color: c.Rosemary,
                  isNew: !0,
                  link: "/new-in/aw25/children?93=10153"
                },
                {
                  name: "Damson",
                  color: c.Damson,
                  isNew: !0,
                  link: "/new-in/aw25/children?93=10140"
                },
                {
                  name: "Cranberry",
                  color: c.Cranberry,
                  isNew: !0,
                  link: "/new-in/aw25/children?93=11250"
                },
                {
                  name: "Navy",
                  color: c.NavyNew,
                  isNew: !0,
                  link: "/new-in/aw25/children?195=8350"
                }
              ],
              submenu: [
                {
                  title: "View All Colours",
                  link: "/aw25-collection",
                  template: "link"
                }
              ]
            },
            {
              title: "New Arrivals",
              link: "/new-in/aw25/children",
              template: "featured",
              featuredImage: "https://www.lemieux.com/static/cms/media/20241028_LEMIEXAW25_CAMPAIGN_CS_DAY4_LOOK005_0039p.jpg",
              featuredTitle: "AW25 Collection",
              featuredSubtitle: "New Arrival"
            }
          ]
        }
        // {
        //   title: 'Gifts',
        //   link: '/gifts/for-children',
        //   template: 'default',
        // },
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
                  title: "Waterproof Clothing",
                  link: "/new-in/waterproof?322=6685"
                },
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
                  link: "/clothing/men/casual-wear/shirts-tops",
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
                  featuredTitle: "Luggage",
                  featuredSubtitle: "Perfect Organisation"
                }
              ]
            }
          ]
        },
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
                  color: c.Alpine,
                  isNew: !0,
                  link: "/new-in/aw25/men?195=8348"
                },
                {
                  name: "Damson",
                  color: c.Damson,
                  isNew: !0,
                  link: "/new-in/aw25/men?93=10140"
                },
                {
                  name: "Navy",
                  color: c.NavyNew,
                  isNew: !0,
                  link: "/new-in/aw25/men?195=8350"
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
        }
        // {
        //   title: 'Gifts',
        //   link: '/gifts/for-him',
        //   template: 'default',
        // },
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
          template: "outfit-builder",
          featuredImage: "https://conversionrate-store.github.io/a-b_images/lemieux/toy-outfit-builder.webp",
          featuredTitle: "Build your toy outfit",
          featuredSubtitle: "Toy Pony Builder",
          submenu: [
            {
              title: "Toy Pony Builder",
              link: "/pony-kit-builder",
              template: "outfit-builder",
              featuredImage: "https://conversionrate-store.github.io/a-b_images/lemieux/toy-outfit-builder.webp",
              featuredTitle: "Outfit Builder",
              featuredSubtitle: "Build your toy outfit",
              actionLink: {
                text: "Create your outfit",
                url: "/pony-kit-builder"
              }
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
                  title: "Toy Pony Collection",
                  link: "/toys/toy-pony-collection",
                  template: "default",
                  submenu: [
                    {
                      title: "New: AW25 Collection",
                      link: "/new-in/aw25/toys?329=6622"
                    },
                    { title: "Toy Ponies", link: "/toys/toy-ponies" },
                    {
                      title: "Toy Pony Tack",
                      link: "/toys/toy-pony-accessories/tack"
                    },
                    {
                      title: "Toy Pony Grooming Kits",
                      link: "/toys/toy-pony-accessories/grooming-kits"
                    },
                    {
                      title: "Toy Pony Saddle Pads",
                      link: "/toys/toy-pony-accessories/saddle-pads"
                    },
                    {
                      title: "Toy Pony Fly Hoods",
                      link: "/toys/toy-pony-accessories/fly-hoods"
                    },
                    {
                      title: "Toy Pony Boots & Bandages",
                      link: "/toys/toy-pony-accessories?444=9281&444=9275"
                    },
                    {
                      title: "Toy Pony Headcollars",
                      link: " /toys/toy-pony-accessories/headcollars"
                    },
                    {
                      title: "Toy Pony Rugs",
                      link: "/toys/toy-pony-accessories/rugs"
                    },
                    {
                      title: "Toy Pony Stable & Yard",
                      link: "/toys/toy-pony-accessories/stable-yard"
                    },
                    {
                      title: "View All",
                      link: "/toys/toy-pony-collection",
                      template: "link"
                    }
                  ]
                },
                {
                  title: "More to Discover",
                  link: "/toys/toy-pony-collection",
                  template: "default",
                  submenu: [
                    {
                      title: "Pony Bags",
                      link: "/toys/pony-bag"
                    },
                    {
                      title: "Toy Puppy Collection",
                      link: "/toys/toy-puppy-collection"
                    },
                    {
                      title: "Pony Pencil Cases",
                      link: "/clothing/children/accessories/stationery"
                    }
                    // {
                    //   title: 'View All',
                    //   link: '/toys/toy-pony-collection',
                    //   template: 'link',
                    // },
                  ]
                }
              ]
            },
            {
              title: "Shop by Colour",
              link: "/toys/toy-pony-collection",
              template: "color-grid",
              colorSwatches: [
                {
                  name: "Lilac",
                  color: c.Lilac,
                  isNew: !0,
                  link: "/toys/toy-pony-sets/lilac"
                },
                {
                  name: "Cranberry",
                  color: c.Cranberry,
                  isNew: !0,
                  link: "/toys/toy-pony-sets/cranberry"
                },
                {
                  name: "Blossom",
                  color: c.Blossom,
                  isNew: !1,
                  link: "/toys/toy-pony-sets/blossom"
                },
                {
                  name: "Lagoon",
                  color: c.Lagoon,
                  isNew: !1,
                  link: "/toys/toy-pony-sets/lagoon"
                },
                {
                  name: "Ice Blue",
                  color: c.IceBlue,
                  isNew: !1,
                  link: "/toys/toy-pony-sets/ice-blue"
                },
                {
                  name: "Hunter Green",
                  color: c.HunterGreen,
                  isNew: !1,
                  link: "/toys/toy-pony-sets/hunter-green"
                },
                {
                  name: "White",
                  color: c.White,
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
                  link: "/toys/toy-rider-collection?444=10994"
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
                  link: "/toys/toy-pony-collection/toy-rider-olivia#selection.color=9200&selection.size=6703",
                  icon: "https://www.lemieux.com/static/cms/media/IT06957-Toy%20Rider%20Olivia-1.png"
                },
                {
                  title: "Toy Rider Chloe",
                  link: "/toys/toy-pony-collection/toy-rider-chloe#selection.color=9197&selection.size=6703",
                  icon: "https://www.lemieux.com/static/cms/media/IT06956-Toy%20Rider%20Chloe-1.png"
                },
                {
                  title: "Toy Rider Maya",
                  link: " /toys/toy-pony-collection/toy-rider-maya#selection.color=10974&selection.size=6703",
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
                  link: "/toys/toy-pony-collection/toy-rider-olivia#selection.color=9200&selection.size=6703",
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
              title: "Hobby Horse Collection",
              link: "/new-in/aw25/toys?329=7680",
              template: "default",
              submenu: [
                {
                  title: "New: AW25 Collection",
                  link: "/new-in/aw25/toys?329=7680"
                },
                {
                  title: "Hobby Horses",
                  link: "/toys/hobby-horse"
                },
                {
                  title: "Hobby Horse Tack",
                  link: "/toys/hobby-horse-accessories/tack"
                },
                {
                  title: "Hobby Horse Rugs",
                  link: "/toys/hobby-horse-accessories/rugs"
                },
                {
                  title: "Hobby Horse Fly Hoods",
                  link: "/toys/hobby-horse-accessories/fly-hoods"
                },
                {
                  title: "Hobby Horse Headcollars",
                  link: "/toys/hobby-horse-accessories/headcollars"
                },
                {
                  title: "Hobby Horse Rosettes",
                  link: "/hobby-horse-rosette-pack-multi#selection.size=6703"
                },
                {
                  title: "View All",
                  link: "/toys/hobby-horse-collection",
                  template: "link"
                }
                // {
                //   title: 'Shop by Product',
                //   link: '/toys/hobby-horse-collection',
                //   template: 'default',
                //   submenu: [
                //     {
                //       title: 'View All',
                //       link: '/toys/hobby-horse-collection',
                //       template: 'link',
                //     },
                //   ],
                // },
              ]
            },
            {
              title: "Shop by Colour",
              link: "/toys/hobby-horse-collection",
              template: "color-grid",
              colorSwatches: [
                {
                  name: "Lilac",
                  color: c.Lilac,
                  isNew: !0,
                  link: "/toys/hobby-horse-collection?93=10146"
                },
                {
                  name: "Cranberry",
                  color: c.Cranberry,
                  isNew: !0,
                  link: "/toys/hobby-horse-collection?93=11250"
                },
                {
                  name: "Blossom",
                  color: c.Blossom,
                  link: "/toys/hobby-horse-collection?93=8370"
                },
                {
                  name: "Lagoon",
                  color: c.Lagoon,
                  link: "/toys/hobby-horse-collection?93=8386"
                }
              ],
              submenu: [
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
              template: "featured",
              featuredImage: "https://conversionrate-store.github.io/a-b_images/lemieux/hobby_horse.webp",
              featuredTitle: "Hobby Horse Collection",
              featuredSubtitle: "",
              actionLink: {
                text: "View All",
                url: "/toys/hobby-horse-collection"
              }
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
                  link: "/toys/tiny-ponies/tiny-pony-dream",
                  icon: "https://www.lemieux.com/tco-images/unsafe/1366x1366/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Tiny-Pony%20Dream.png"
                },
                {
                  title: "Tiny Pony Freya",
                  link: "/toys/tiny-ponies/tiny-pony-freya",
                  icon: "https://www.lemieux.com/tco-images/unsafe/1366x1366/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Tiny-Pony%20Freya.png"
                },
                {
                  title: "Tiny Pony Sammy",
                  link: " /toys/tiny-ponies/tiny-pony-sam",
                  icon: "https://www.lemieux.com/tco-images/unsafe/1366x1366/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Tiny-Pony%20Sam.png"
                },
                {
                  title: "Tiny Pony Skye",
                  link: "/toys/tiny-ponies/tiny-pony-skye#selection.color=11080&selection.size=6703",
                  icon: "https://www.lemieux.com/tco-images/unsafe/1366x1366/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Tiny-Pony%20Skye.png"
                },
                {
                  title: "Tiny Pony Thomas",
                  link: "/toys/tiny-ponies/tiny-pony-thomas",
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
              title: "Harlow Tiny Beanie Ponies",
              link: "/new-in/harlow-collection/toys",
              template: "default",
              submenu: [
                {
                  title: "Tiny Beanie Cloudy ",
                  link: "/harlow-tiny-beanie-pony-cloudy",
                  icon: "https://conversionrate-store.github.io/a-b_images/lemieux/tiny_pony_cloudy.png"
                },
                {
                  title: "Tiny Beanie Rolo",
                  link: "/harlow-tiny-beanie-pony-rolo",
                  icon: "https://conversionrate-store.github.io/a-b_images/lemieux/tiny_pony_rolo.png"
                },
                {
                  title: "Tiny Beanie Popcorn",
                  link: "/harlow-tiny-beanie-pony-popcorn",
                  icon: "https://conversionrate-store.github.io/a-b_images/lemieux/tiny_pony_popcorn.png"
                },
                {
                  title: "Tiny Beanie Panda",
                  link: "/harlow-tiny-beanie-pony-panda",
                  icon: "https://conversionrate-store.github.io/a-b_images/lemieux/tiny_pony_panda.png"
                },
                {
                  title: "Tiny Beanie Fleece Rug",
                  link: "/harlow-tiny-rugs-2-pack-mint-coral-crush",
                  icon: "https://conversionrate-store.github.io/a-b_images/lemieux/tiny_pony_rug.png"
                },
                {
                  title: "View All",
                  link: "/new-in/harlow-collection/toys",
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
              featuredSubtitle: "For you and your horse",
              actionLink: { text: "Create your outfit", url: "/outfit-builder" }
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
                  title: "Appaloosa",
                  link: "/outfit-builder-outfits/appaloosa",
                  icon: "https://www.lemieux.com/tco-images/unsafe/128x128/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Appaloosa-png-3.png"
                },
                {
                  title: "Piebald",
                  link: "/outfit-builder-outfits/piebald",
                  icon: "https://www.lemieux.com/tco-images/unsafe/1920x1920/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Piebald-png-3.png"
                },
                {
                  title: "Skewbald",
                  link: "/outfit-builder-outfits/skewbald",
                  icon: "https://www.lemieux.com/tco-images/unsafe/1920x1920/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Skewbald-png-3.png"
                }
                // {
                //   title: 'View All',
                //   link: '/outfit-builder-outfits',
                //   template: 'link',
                // },
              ]
            },
            {
              title: "Outfits By Colour",
              link: "/outfit-builder-outfits",
              template: "color-grid",
              colorSwatches: [
                {
                  name: "Lilac",
                  color: c.Lilac,
                  isNew: !0,
                  link: "/outfit-builder-outfits/lilac"
                },
                {
                  name: "Juniper",
                  color: c.Juniper,
                  isNew: !0,
                  link: "/outfit-builder-outfits/juniper"
                },
                {
                  name: "Rosemary",
                  color: c.Rosemary,
                  isNew: !0,
                  link: "/outfit-builder-outfits/rosemary"
                },
                {
                  name: "Damson",
                  color: c.Damson,
                  isNew: !0,
                  link: "/outfit-builder-outfits/damson"
                },
                {
                  name: "Cranberry",
                  color: c.Cranberry,
                  isNew: !0,
                  link: "/outfit-builder-outfits/cranberry"
                },
                {
                  name: "Navy",
                  color: c.NavyNew,
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
          template: "outfit-builder",
          submenu: [
            {
              title: "Toy Pony Builder",
              link: "/pony-kit-builder",
              template: "outfit-builder",
              featuredImage: "https://conversionrate-store.github.io/a-b_images/lemieux/toy-outfit-builder.webp",
              featuredTitle: "Toy Pony Outfit Builder",
              featuredSubtitle: "",
              actionLink: {
                text: "Build your toy outfit",
                url: "/pony-kit-builder"
              }
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
                  color: c.Lilac,
                  isNew: !0,
                  link: "/collections/colour/lilac"
                },
                {
                  name: "Juniper",
                  color: c.Juniper,
                  isNew: !0,
                  link: "/collections/colour/juniper"
                },
                {
                  name: "Rosemary",
                  color: c.Rosemary,
                  isNew: !0,
                  link: "/collections/colour/rosemary"
                },
                {
                  name: "Damson",
                  color: c.Damson,
                  isNew: !0,
                  link: "/collections/colour/damson"
                },
                {
                  name: "Cranberry",
                  color: c.Cranberry,
                  isNew: !0,
                  link: "/collections/colour/cranberry"
                },
                {
                  name: "Navy",
                  color: c.NavyNew,
                  isNew: !0,
                  link: "/collections/colour/navy-cranberry"
                },
                {
                  name: "Dusk",
                  color: c.Dusk,
                  isNew: !1,
                  link: "/collections/colour/dusk"
                },
                {
                  name: "Mimosa",
                  color: c.Mimosa,
                  isNew: !1,
                  link: "/collections/colour/mimosa"
                },
                {
                  name: "Blossom",
                  color: c.Blossom,
                  isNew: !1,
                  link: "/collections/colour/blossom"
                },
                {
                  name: "Peony",
                  color: c.Peony,
                  isNew: !1,
                  link: "/collections/colour/peony"
                },
                {
                  name: "Aqua",
                  color: c.Aqua,
                  isNew: !1,
                  link: "/collections/colour/aqua"
                },
                {
                  name: "Lagoon",
                  color: c.Lagoon,
                  isNew: !1,
                  link: "/collections/colour/lagoon"
                },
                {
                  name: "Fern",
                  color: c.Fern,
                  isNew: !1,
                  link: "/collections/colour/fern"
                },
                {
                  name: "Apricot",
                  color: c.Apricot,
                  isNew: !1,
                  link: "/collections/colour/apricot"
                },
                {
                  name: "Ice Blue",
                  color: c.IceBlue,
                  isNew: !1,
                  link: "/collections/colour/ice-blue"
                },
                {
                  name: "Benetton Blue",
                  color: c.BenettonBlue,
                  isNew: !1,
                  link: "/collections/colour/benetton-blue"
                },
                {
                  name: "Alpine",
                  color: c.Alpine,
                  isNew: !1,
                  link: "/collections/colour/alpine"
                },
                {
                  name: "Ginger",
                  color: c.Ginger,
                  isNew: !1,
                  link: "/collections/colour/ginger"
                },
                {
                  name: "Sage",
                  color: c.Sage,
                  isNew: !1,
                  link: "/collections/colour/sage"
                },
                {
                  name: "Navy",
                  color: c.NavyOld,
                  isNew: !1,
                  link: "/collections/colour/navy"
                },
                {
                  name: "Hunter Green",
                  color: c.HunterGreen,
                  isNew: !1,
                  link: "/collections/colour/hunter-green"
                },
                {
                  name: "Petrol",
                  color: c.Petrol,
                  isNew: !1,
                  link: "/collections/colour/petrol"
                },
                {
                  name: "Glacier",
                  color: c.Glacier,
                  isNew: !1,
                  link: "/collections/colour/glacier"
                },
                {
                  name: "Sienna",
                  color: c.Sienna,
                  isNew: !1,
                  link: "/collections/colour/sienna"
                },
                {
                  name: "Chilli",
                  color: c.Chilli,
                  isNew: !1,
                  link: "/collections/colour/chilli"
                },
                {
                  name: "Cinder",
                  color: c.Cinder,
                  isNew: !1,
                  link: "/collections/colour/cinder"
                },
                {
                  name: "Grey",
                  color: c.Grey,
                  isNew: !1,
                  link: "/collections/colour/grey"
                },
                {
                  name: "Brown",
                  color: c.Brown,
                  isNew: !1,
                  link: "/collections/colour/brown"
                },
                {
                  name: "Burgundy",
                  color: c.Burgundy,
                  isNew: !1,
                  link: "/collections/colour/burgundy"
                },
                {
                  name: "Ember",
                  color: c.Ember,
                  isNew: !1,
                  link: "/collections/colour/ember"
                },
                {
                  name: "White",
                  color: c.White,
                  isNew: !1,
                  link: "/collections/colour/white"
                },
                {
                  name: "Black",
                  color: c.Black,
                  isNew: !1,
                  link: "/collections/colour/black"
                }
                // {
                //   name: 'Jay Blue',
                //   color: colours.JayBlue,
                //   isNew: false,
                //   link: '/collections/colour/jay-blue',
                // },
                // {
                //   name: 'Ink',
                //   color: colours.Ink,
                //   isNew: false,
                //   link: '/collections/colour/ink',
                // },
                // {
                //   name: 'Wisteria',
                //   color: colours.Wisteria,
                //   isNew: false,
                //   link: '/collections/colour/wisteria',
                // },
                // {
                //   name: 'Azure',
                //   color: colours.Azure,
                //   isNew: false,
                //   link: '/collections/colour/azure',
                // },
                // {
                //   name: 'Peacock',
                //   color: colours.Peacock,
                //   isNew: false,
                //   link: '/collections/colour/peacock',
                // },
              ]
              // submenu: [
              //   { title: 'View All', link: '/collections', template: 'link' },
              // ],
            },
            {
              title: "Colour Collection",
              link: "/aw25-collection",
              template: "featured",
              featuredImage: "https://conversionrate-store.github.io/a-b_images/lemieux/aw25-colour-collection-shop-by-colour.webp",
              featuredTitle: "AW25 Colour Collection",
              featuredSubtitle: "New Season"
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
                  featuredImage: "https://www.lemieux.com/tco-images/unsafe/1920x2560/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/1g0a1685-1.jpg",
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
                  featuredImage: "https://www.lemieux.com/tco-images/unsafe/1920x2560/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/Showing_Menu.jpg",
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
      // textColor: '#C9830A',
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
          title: "",
          link: "/e-gift-card-173",
          template: "featured",
          featuredImage: "https://www.lemieux.com/tco-images/unsafe/1920x1920/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/LM-Web%20Gift%20Vouchers%201x1.jpg",
          featuredTitle: "Gift Vouchers",
          featuredSubtitle: "Not Sure What to Get?",
          actionLink: {
            text: "Customise Now",
            url: "/e-gift-card-173"
          }
        },
        {
          title: "",
          link: "/toys/toy-rider-collection",
          template: "featured",
          featuredImage: "https://www.lemieux.com/static/media/catalog/product/g/r/group_lifestyle_toydoll_chloe_maya_olivia_3.jpg",
          featuredTitle: "Toy Rider Collection",
          featuredSubtitle: "New Arrival",
          actionLink: {
            text: "View All",
            url: "/toys/toy-rider-collection"
          }
        }
      ]
    },
    {
      title: "Outlet",
      link: "/lemieux-outlet",
      template: "outlet",
      textColor: "",
      submenu: [
        // {
        //   title: 'Shop All',
        //   link: '/lemieux-outlet',
        //   template: 'link',
        // },
        {
          title: "Horse",
          link: "/lemieux-outlet?322=6684",
          template: "default",
          submenu: [
            {
              title: "Horse",
              link: "/lemieux-outlet/horse-wear",
              template: "default",
              submenu: [
                {
                  title: "Saddle Pads",
                  link: "/lemieux-outlet/horse-wear?329=6617"
                },
                { title: "Rugs", link: "/lemieux-outlet/horse-wear?329=6616" },
                {
                  title: "Saddlery & Tack",
                  link: "/lemieux-outlet/horse-wear?329=6618"
                },
                {
                  title: "Boots & Bandages",
                  link: "/lemieux-outlet/horse-wear?329=7903"
                },
                {
                  title: "Headcollars",
                  link: "/lemieux-outlet/horse-wear?329=6611"
                },
                {
                  title: "Grooming & Care",
                  link: " /lemieux-outlet/horse-wear?329=6613"
                },
                {
                  title: "Fly Masks",
                  link: "/lemieux-outlet/horse-wear?329=6606"
                },
                // {
                //   title: 'Stable Accessories',
                //   link: '/horsewear/stable-yard/stable-accessories',
                // },
                {
                  title: "View All",
                  link: "/lemieux-outlet/horse-wear",
                  template: "link"
                }
              ]
            },
            {
              title: "All Horse Outlet",
              link: "/lemieux-outlet/horse-wear",
              template: "featured",
              featuredImage: "https://www.lemieux.com/tco-images/unsafe/414x552/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/LM-Outlet-25-Long-Logo.jpg",
              featuredTitle: "All Horse Outlet"
            }
            // {
            //   title: 'Featured Horse Outlet',
            //   link: '/lemieux-outlet/horse',
            //   template: 'featured',
            //   submenu: [
            //     {
            //       title: 'All Horse Outlet',
            //       link: '/lemieux-outlet?322=6684',
            //       template: 'featured',
            //       featuredImage:
            //         'https://www.lemieux.com/tco-images/unsafe/414x552/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/LM-Outlet-25-Long-Logo.jpg',
            //       featuredTitle: 'All Horse Outlet',
            //     },
            //     {
            //       title: 'Saddle Pads',
            //       link: '/horse-saddle-pads',
            //       template: 'featured',
            //       featuredImage:
            //         'https://www.lemieux.com/tco-images/unsafe/1920x2560/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/IT01183_lifestyle_loirememoryccsquare_mulberry_3.jpg',
            //       featuredTitle: 'Saddle Pads',
            //     },
            //   ],
            // },
          ]
        },
        {
          title: "Women",
          link: "/lemieux-outlet?322=6691",
          template: "default",
          submenu: [
            {
              title: "Women",
              link: "/lemieux-outlet/women",
              template: "default",
              submenu: [
                {
                  title: "Coats & Jackets",
                  link: "/lemieux-outlet/clothing/women?329=6604"
                },
                {
                  title: "Tops, Hoodies & Jumpers",
                  link: "/lemieux-outlet/clothing/women?329=6621"
                },
                {
                  title: "Breeches & Pull Ons",
                  link: "/lemieux-outlet/clothing/women?327=6523"
                },
                { title: "Footwear", link: "/lemieux-outlet/footwear" },
                {
                  title: "Accessories",
                  link: "/lemieux-outlet/accessories"
                },
                {
                  title: "View All",
                  link: "/lemieux-outlet/clothing/women",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Women Outlet",
              link: "/lemieux-outlet/clothing/women",
              template: "featured",
              featuredImage: "https://www.lemieux.com/tco-images/unsafe/414x552/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/LM-Outlet-25-Long-Logo.jpg",
              featuredTitle: "All Women Outlet"
            }
          ]
        },
        {
          title: "Children",
          link: "/lemieux-outlet?322=6692",
          template: "default",
          submenu: [
            {
              title: "Children",
              link: "/lemieux-outlet/children",
              template: "default",
              submenu: [
                {
                  title: "Coats & Jackets",
                  link: " /lemieux-outlet/children-clothes?329=6604"
                },
                {
                  title: "Tops, Hoodies & Jumpers",
                  link: "/lemieux-outlet/children-clothes?329=6621"
                },
                {
                  title: "Breeches & Pull Ons",
                  link: "/lemieux-outlet/children-clothes?327=6523"
                },
                // {
                //   title: 'Footwear',
                //   link: '/clothing/children/accessories/footwear',
                // },
                {
                  title: "Accessories",
                  link: " /lemieux-outlet/accessories"
                },
                {
                  title: "Toys",
                  link: "/lemieux-outlet/toys"
                },
                {
                  title: "View All",
                  link: "/lemieux-outlet/children-clothes",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Children Outlet",
              link: "/lemieux-outlet/children-clothes",
              template: "featured",
              featuredImage: "https://www.lemieux.com/tco-images/unsafe/414x552/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/LM-Outlet-25-Long-Logo.jpg",
              featuredTitle: "All Children Outlet"
            }
          ]
        },
        {
          title: "Men",
          link: "/lemieux-outlet?322=6685",
          template: "default",
          submenu: [
            {
              title: "Men",
              link: "/lemieux-outlet/men",
              template: "default",
              submenu: [
                {
                  title: "Coats & Jackets",
                  link: "/lemieux-outlet/clothing/men?329=6604"
                },
                {
                  title: "Tops, Hoodies & Jumpers",
                  link: "/lemieux-outlet/clothing/men?329=6621"
                },
                {
                  title: "Breeches",
                  link: "/lemieux-outlet/clothing/men?327=6523"
                },
                {
                  title: "Accessories",
                  link: "/lemieux-outlet/accessories"
                },
                {
                  title: "View All",
                  link: "/lemieux-outlet/clothing/men",
                  template: "link"
                }
              ]
            },
            {
              title: "Featured Men Outlet",
              link: "/lemieux-outlet/clothing/men",
              template: "featured",
              featuredImage: "https://www.lemieux.com/tco-images/unsafe/414x552/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/LM-Outlet-25-Long-Logo.jpg",
              featuredTitle: "All Men Outlet"
            }
          ]
        }
        // {
        //   title: 'Toys',
        //   link: '/lemieux-outlet/toys',
        //   template: 'default',
        //   submenu: [
        //     {
        //       title: 'Toys',
        //       link: '/lemieux-outlet/toys',
        //       template: 'default',
        //       submenu: [
        //         { title: 'Toy Pony', link: '/toys/toy-pony-collection' },
        //         {
        //           title: 'Hobby Horse',
        //           link: '/toys/hobby-horse-collection',
        //         },
        //         {
        //           title: 'View All',
        //           link: '/lemieux-outlet/toys',
        //           template: 'link',
        //         },
        //       ],
        //     },
        //     {
        //       title: 'Featured Toys Outlet',
        //       link: '/lemieux-outlet/toys',
        //       template: 'featured',
        //       featuredImage:
        //         'https://www.lemieux.com/tco-images/unsafe/414x552/filters:upscale():fill(white):quality(70)/https://www.lemieux.com/static/cms/media/LM-Outlet-25-Long-Logo.jpg',
        //       featuredTitle: 'All Toys Outlet',
        //     },
        //   ],
        // },
      ]
    }
  ], A = (b, e, t, s = "", l = "", i = "") => {
    window.dataLayer = window.dataLayer || [];
    const n = {
      event: "event-to-ga4",
      event_name: b,
      event_desc: e,
      event_type: t,
      event_loc: s,
      event_loc2: l,
      event_loc3: i
    };
    window.dataLayer.push(n), console.table(n);
  };
  function y(b, e, t, s, l) {
    A(
      "exp_nav_click",
      b,
      e,
      t,
      s || "",
      l || ""
    );
  }
  class O {
    constructor(e = "B") {
      this.hideTimeout = null, this.currentIndex = null, this.megaMenuMouseEnterHandler = null, this.megaMenuMouseLeaveHandler = null, this.variant = e;
    }
    createDesktopNavigation() {
      const t = (
        /* html */
        `
      <ul class="crs-nav-list">
        ${H.map((l, i) => this.createNavigationItemHTML(l, i)).join("")}
      </ul>
      <div class="crs-mega-menu" style="display: none;"></div>
    `
      ), s = document.createElement("div");
      return s.className = "crs-navigation-content", s.innerHTML = t.trim(), this.addEventListeners(s), s;
    }
    createNavigationItemHTML(e, t) {
      const s = e.template ? `crs-template-${e.template}` : "", l = e.textColor ? `style="color: ${e.textColor}"` : "", i = e.submenu && e.submenu.length > 0 ? "data-has-submenu" : "";
      return (
        /* html */
        `
      <li class="crs-nav-item">
        <a href="${e.link}" class="crs-nav-link ${s}" ${l} ${i} data-index="${t}" data-analytics="${e.title}">
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
      let s = null;
      t.forEach((l) => {
        const i = parseInt(l.getAttribute("data-index") || "0");
        l.addEventListener("mouseenter", () => {
          this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = null), s && (clearTimeout(s), s = null), this.currentIndex !== null && this.currentIndex !== i ? (this.currentIndex = i, this.showMegaMenu(i), this.addMegaMenuEventListeners()) : (this.currentIndex = i, s = window.setTimeout(() => {
            this.currentIndex === i && (this.showMegaMenu(i), this.addMegaMenuEventListeners());
          }, 50));
        });
      }), e.addEventListener("mouseleave", (l) => {
        var n;
        const i = l.relatedTarget;
        i && (e.contains(i) || (n = document.querySelector(".crs-mega-menu")) != null && n.contains(i)) || (s && (clearTimeout(s), s = null), this.hideTimeout = window.setTimeout(() => {
          this.hideMegaMenu(), this.currentIndex = null;
        }, 200));
      }), e.addEventListener("mouseenter", () => {
        this.hideTimeout && (clearTimeout(this.hideTimeout), this.hideTimeout = null);
      });
    }
    addMegaMenuEventListeners() {
      const e = document.querySelector(".crs-mega-menu");
      e && (this.megaMenuMouseEnterHandler && e.removeEventListener(
        "mouseenter",
        this.megaMenuMouseEnterHandler
      ), this.megaMenuMouseLeaveHandler && e.removeEventListener(
        "mouseleave",
        this.megaMenuMouseLeaveHandler
      ), this.megaMenuMouseEnterHandler = this.handleMegaMenuMouseEnter.bind(this), this.megaMenuMouseLeaveHandler = this.handleMegaMenuMouseLeave.bind(this), e.addEventListener("mouseenter", this.megaMenuMouseEnterHandler), e.addEventListener("mouseleave", this.megaMenuMouseLeaveHandler));
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
        var n, r;
        const l = t.target.closest("a[data-analytics]");
        if (!l) return;
        const i = l.getAttribute("data-analytics");
        if (i) {
          if (l.classList.contains("crs-nav-link"))
            y(i, "Link", i);
          else if (l.classList.contains("crs-sidebar-link")) {
            const a = l.getAttribute("data-parent");
            a && y(
              i,
              "Link",
              a,
              i
            );
          } else if (l.classList.contains("crs-featured-section-link")) {
            const a = l.getAttribute("data-type"), o = l.getAttribute("data-parent"), u = l.getAttribute("data-grandparent");
            o && y(
              i,
              a,
              u || o,
              o,
              "Image section"
            );
          } else if (l.classList.contains("crs-color-link")) {
            const a = l.getAttribute("data-parent"), o = l.getAttribute("data-grandparent");
            a && y(
              i,
              "Link",
              a,
              o || a,
              "AW25 Colours"
            );
          } else if (l.classList.contains("crs-collection-link") || l.classList.contains("crs-view-all-link")) {
            const a = l.getAttribute("data-parent"), o = l.getAttribute("data-grandparent");
            if (a) {
              const u = ((r = (n = l.closest(".crs-collections-section")) == null ? void 0 : n.querySelector(".crs-section-title")) == null ? void 0 : r.textContent) || "";
              y(
                i,
                "Link",
                o || a,
                a,
                u
              );
            }
          } else if (l.classList.contains("crs-featured-action-link")) {
            const a = l.getAttribute("data-parent"), o = l.getAttribute("data-grandparent");
            a && y(
              i,
              "CTA",
              o || a,
              a,
              "Featured section"
            );
          } else if (l.classList.contains("crs-gifts-featured-link")) {
            const a = l.getAttribute("data-parent"), o = l.getAttribute("data-grandparent");
            a && y(i, "Link", o || a, a, "Image section");
          } else if (l.classList.contains("crs-gifts-action-link")) {
            const a = l.getAttribute("data-parent"), o = l.getAttribute("data-grandparent");
            a && y(
              i,
              "CTA",
              o || a,
              a,
              "Image section"
            );
          } else if (l.classList.contains("crs-featured-item-link")) {
            const a = l.getAttribute("data-parent"), o = l.getAttribute("data-grandparent");
            a && y(
              i,
              "Image",
              o || a,
              a,
              "Image section"
            );
          } else if (l.classList.contains("crs-product-link")) {
            const a = l.getAttribute("data-parent"), o = l.getAttribute("data-grandparent");
            a && y(
              i,
              "Link",
              o || a,
              a,
              "Image section"
            );
          }
        }
      });
    }
    showMegaMenu(e) {
      const t = document.querySelector(".crs-mega-menu");
      if (!t) return;
      const s = H[e];
      if (!s.submenu) return;
      document.querySelectorAll(
        ".crs-nav-link[data-has-submenu]"
      ).forEach((n) => n.classList.remove("crs-nav-link-active"));
      const i = document.querySelector(
        `.crs-nav-link[data-index="${e}"]`
      );
      i && i.classList.add("crs-nav-link-active"), t.innerHTML = "", t.appendChild(this.createMegaMenuContent(s)), t.style.display = "block", t.dataset.title = s.title, setTimeout(() => {
        t.classList.add("crs-visible");
      }, 10);
    }
    hideMegaMenu() {
      const e = document.querySelector(".crs-mega-menu");
      if (!e) return;
      document.querySelectorAll(
        ".crs-nav-link[data-has-submenu]"
      ).forEach((s) => s.classList.remove("crs-nav-link-active")), e.classList.remove("crs-visible"), setTimeout(() => {
        e.style.display = "none";
      }, 200);
    }
    createMegaMenuContent(e) {
      var a;
      if (e.template === "gifts") {
        const u = (
          /* html */
          `
        <div class="crs-mega-menu-content crs-gifts-layout">
          ${this.createMainContentHTML(e)}
        </div>
      `
        ), f = document.createElement("div");
        return f.innerHTML = u.trim(), f.firstElementChild;
      }
      const t = this.createSidebarHTML(e), s = (a = e.submenu) == null ? void 0 : a.find(
        (o) => o.submenu && o.submenu.length > 0
      ), l = s ? this.createMainContentHTML(s, e) : this.createMainContentHTML(e), i = (
        /* html */
        `
      <div class="crs-mega-menu-content">
        ${t}
        ${l}
      </div>
    `
      ), n = document.createElement("div");
      n.innerHTML = i.trim();
      const r = n.firstElementChild;
      return this.addSidebarEventListeners(r, e), r;
    }
    createSidebarHTML(e) {
      return e.submenu ? (
        /* html */
        `
      <div class="crs-mega-menu-sidebar">
        <ul class="crs-sidebar-links">
        ${e.submenu.map((s, l) => {
          var o;
          const i = s.isNew ? '<span class="crs-new-badge">New</span>' : "", n = ((o = e.submenu) == null ? void 0 : o.findIndex(
            (u) => u.submenu && u.submenu.length > 0
          )) ?? -1, r = l === n ? "crs-active" : "", a = s.submenu && s.submenu.length > 0 ? "data-has-submenu" : "";
          return (
            /* html */
            `
        <li>
          <a href="${s.link}" class="crs-sidebar-link ${r}" data-index="${l}" ${a} data-analytics="${s.title}" data-parent="${e.title}">
          ${s.title}
          ${i}
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
      const s = e.querySelectorAll(".crs-sidebar-link"), l = e.querySelector(
        ".crs-mega-menu-main"
      );
      !t.submenu || !l || s.forEach((i) => {
        i.addEventListener("mouseenter", () => {
          var p;
          const n = parseInt(i.getAttribute("data-index") || "0"), r = t.submenu[n], a = r.submenu && r.submenu.length > 0;
          if (s.forEach((g) => g.classList.remove("crs-active")), !a) return;
          i.classList.add("crs-active");
          const o = this.createMainContentHTML(
            r,
            t
          ), u = document.createElement("div");
          u.innerHTML = o;
          const f = ((p = u.firstElementChild) == null ? void 0 : p.innerHTML) || "";
          l.innerHTML = f;
        });
      });
    }
    createMainContentHTML(e, t) {
      var s;
      if (e.template === "gifts" && e.submenu && e.submenu.length > 0)
        return this.createGiftsContentHTML(
          e,
          e.title,
          (t == null ? void 0 : t.title) || e.title
        );
      if (e.submenu && e.submenu.length > 0)
        if (e.submenu.length >= 5) {
          const l = e.submenu[0], i = e.submenu[1], n = e.submenu[2], r = e.submenu[3], a = e.submenu[4];
          let o;
          l.template === "featured" || l.template === "outfit-builder" ? o = this.createFeaturedSectionHTML(
            l,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : o = this.createCollectionsSectionHTML(
            l,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          );
          let u;
          i.template === "color-grid" ? u = this.createColorsSectionHTML(
            i,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : u = this.createCollectionsSectionHTML(
            i,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          );
          let f;
          n.template === "color-grid" ? f = this.createColorsSectionHTML(
            n,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : f = this.createCollectionsSectionHTML(
            n,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          );
          let p;
          r.template === "featured" || r.template === "outfit-builder" ? p = this.createFeaturedSectionHTML(
            r,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : r.template === "dual-featured" ? p = this.createDualFeaturedSectionHTML(
            r,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : r.template === "triple-featured" ? p = this.createTripleFeaturedSectionHTML(r) : r.template === "product-cards" ? p = this.createProductCardsSectionHTML(r) : p = this.createCollectionsSectionHTML(
            r,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          );
          let g;
          return a.template === "featured" || a.template === "outfit-builder" ? g = this.createFeaturedSectionHTML(
            a,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : a.template === "dual-featured" ? g = this.createDualFeaturedSectionHTML(
            a,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : a.template === "triple-featured" ? g = this.createTripleFeaturedSectionHTML(a) : a.template === "product-cards" ? g = this.createProductCardsSectionHTML(a) : g = this.createCollectionsSectionHTML(
            a,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ), /* html */
          `
          <div class="crs-mega-menu-main crs-five-column">
            ${o}
            ${u}
            ${f}
            ${p}
            ${g}
          </div>
        `;
        } else if (e.submenu.length >= 4) {
          const l = e.submenu[0], i = e.submenu[1], n = e.submenu[2], r = e.submenu[3];
          let a;
          l.template === "featured" || l.template === "outfit-builder" ? a = this.createFeaturedSectionHTML(
            l,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : a = this.createCollectionsSectionHTML(
            l,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          );
          let o;
          i.template === "color-grid" ? o = this.createColorsSectionHTML(
            i,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : o = this.createCollectionsSectionHTML(
            i,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          );
          let u;
          n.template === "color-grid" ? u = this.createColorsSectionHTML(
            n,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : u = this.createCollectionsSectionHTML(
            n,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          );
          let f;
          return r.template === "dual-featured" ? f = this.createDualFeaturedSectionHTML(
            r,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : r.template === "triple-featured" ? f = this.createTripleFeaturedSectionHTML(r) : r.template === "product-cards" ? f = this.createProductCardsSectionHTML(r) : f = this.createCollectionsSectionHTML(
            r,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ), /* html */
          `
          <div class="crs-mega-menu-main crs-four-column">
            ${a}
            ${o}
            ${u}
            ${f}
          </div>
        `;
        } else if (e.submenu.length >= 3) {
          const l = e.submenu[0], i = e.submenu[1], n = e.submenu[2], r = l.template === "multi-color-grid" ? this.createMultiColorGridSectionHTML(
            l,
            (t == null ? void 0 : t.title) || e.title,
            e.title
          ) : l.template === "color-grid" ? this.createColorsSectionHTML(
            l,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : l.template === "stacked-sections" ? this.createStackedSectionsHTML(
            l,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : this.createCollectionsSectionHTML(
            l,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ), a = i.template === "color-grid" ? this.createColorsSectionHTML(
            i,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : i.template === "multi-color-grid" ? this.createMultiColorGridSectionHTML(
            i,
            (t == null ? void 0 : t.title) || e.title,
            e.title
          ) : i.template === "stacked-sections" ? this.createStackedSectionsHTML(
            i,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : this.createCollectionsSectionHTML(
            i,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          );
          let o;
          return n.template === "dual-featured" ? o = this.createDualFeaturedSectionHTML(
            n,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : n.template === "triple-featured" ? o = this.createTripleFeaturedSectionHTML(n) : n.template === "product-cards" ? o = this.createProductCardsSectionHTML(n) : n.template === "quad-featured" ? o = this.createQuadFeaturedSectionHTML(n) : o = this.createFeaturedSectionHTML(
            n,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ), /* html */
          `
          <div class="crs-mega-menu-main">
            ${r}
            ${a}
            ${o}
          </div>
        `;
        } else if (e.submenu.length >= 2) {
          const l = e.submenu[0], i = e.submenu[1];
          let n;
          l.template === "featured" || l.template === "outfit-builder" ? n = this.createFeaturedSectionHTML(
            l,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : l.template === "stacked-sections" ? (console.log("first", l), n = this.createStackedSectionsHTML(
            l,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          )) : l.template === "multi-color-grid" ? n = this.createMultiColorGridSectionHTML(
            l,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : n = this.createCollectionsSectionHTML(
            l,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          );
          let r;
          return i.template === "triple-featured" ? r = this.createTripleFeaturedSectionHTML(i) : i.template === "dual-featured" ? r = this.createDualFeaturedSectionHTML(
            i,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : i.template === "featured" || i.template === "outfit-builder" ? r = this.createFeaturedSectionHTML(
            i,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : i.template === "product-cards" ? r = this.createProductCardsSectionHTML(i) : i.template === "color-grid" ? r = this.createColorsSectionHTML(
            i,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ) : i.template === "multi-color-grid" ? r = this.createMultiColorGridSectionHTML(
            i,
            (t == null ? void 0 : t.title) || e.title,
            e.title
          ) : r = this.createCollectionsSectionHTML(
            i,
            e.title,
            (t == null ? void 0 : t.title) || e.title
          ), /* html */
          `
          <div class="crs-mega-menu-main">
            ${n}
            ${r}
          </div>
        `;
        } else {
          const l = (s = e.submenu) == null ? void 0 : s[0];
          return l && (l.template === "featured" || l.template === "outfit-builder") ? (
            /* html */
            `
            <div class="crs-mega-menu-main">
              ${this.createFeaturedSectionHTML(
              l,
              e.title,
              (t == null ? void 0 : t.title) || e.title
            )}
            </div>
          `
          ) : l && l.template === "quad-featured" ? (
            /* html */
            `
            <div class="crs-mega-menu-main">
              ${this.createQuadFeaturedSectionHTML(l)}
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
    createCollectionsSectionHTML(e, t, s) {
      var i;
      const l = ((i = e.submenu) == null ? void 0 : i.map((n) => {
        const r = n.template === "link" ? "crs-view-all-link" : "crs-collection-link", a = n.icon ? `<img src="${n.icon}" alt="${n.title}" class="crs-item-icon-image" />` : "";
        return (
          /* html */
          `
        <li>
          <a href="${n.link}" class="${r}" data-analytics="${n.title}" data-parent="${t || e.title}" data-grandparent="${s || ""}">
            ${a}
            <span class="crs-item-text">${n.title}</span>
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
          ${l}
        </ul>
      </div>
    `
      );
    }
    createColorsSectionHTML(e, t, s) {
      var r, a;
      const l = ((r = e.colorSwatches) == null ? void 0 : r.map((o) => {
        const u = o.isNew ? '<span class="crs-new-badge">New</span>' : "";
        return (
          /* html */
          `
        <div class="crs-color-item">
          <a href="${o.link || "#"}" class="crs-color-link" data-analytics="${o.name}" data-type="Link" data-parent="${t || ""}" data-grandparent="${s || ""}">
          <div class="crs-color-swatch" style="background-color: ${o.color}">
            ${u}
          </div>
          <span class="crs-color-name">${o.name}</span>
          </a>
        </div>
      `
        );
      }).join("")) || "", i = ((a = e.submenu) == null ? void 0 : a.map((o) => o.template === "link" ? (
        /* html */
        `
            <li>
              <a href="${o.link}" class="crs-collection-link crs-view-all-link" data-analytics="${o.title}" data-parent="${t || ""}" data-grandparent="${s || ""}">${o.title}</a>
            </li>
          `
      ) : (
        /* html */
        `
          <li>
            <a href="${o.link}" class="crs-collection-link" data-analytics="${o.title}" data-parent="${t || ""}" data-grandparent="${s || ""}">${o.title}</a>
          </li>
        `
      )).join("")) || "", n = i ? (
        /* html */
        `
          <ul class="crs-collection-list">
            ${i}
          </ul>
        `
      ) : "";
      return (
        /* html */
        `
      <div class="crs-colors-section">
        <h3 class="crs-section-title">${e.title}</h3>
        <div class="crs-color-grid">
          ${l}
        </div>
        ${n}
      </div>
    `
      );
    }
    createMultiColorGridSectionHTML(e, t, s) {
      var r, a;
      const l = ((r = e.colorSwatches) == null ? void 0 : r.map((o) => {
        const u = o.isNew ? '<span class="crs-new-badge">New</span>' : "";
        return (
          /* html */
          `
        <div class="crs-color-item">
          <a href="${o.link || "#"}" class="crs-color-link" data-analytics="${o.name}" data-type="Link" data-parent="${t || ""}" data-grandparent="${s || ""}">
          <div class="crs-color-swatch" style="background-color: ${o.color}">
            ${u}
          </div>
          <span class="crs-color-name">${o.name}</span>
          </a>
        </div>
      `
        );
      }).join("")) || "", i = ((a = e.submenu) == null ? void 0 : a.map((o) => o.template === "link" ? (
        /* html */
        `
            <li>
              <a href="${o.link}" class="crs-collection-link crs-view-all-link" data-analytics="${o.title}" data-parent="${t || ""}" data-grandparent="${s || ""}">${o.title}</a>
            </li>
          `
      ) : (
        /* html */
        `
          <li>
            <a href="${o.link}" class="crs-collection-link" data-analytics="${o.title}" data-parent="${t || ""}" data-grandparent="${s || ""}">${o.title}</a>
          </li>
        `
      )).join("")) || "", n = i ? (
        /* html */
        `
          <ul class="crs-collection-list">
            ${i}
          </ul>
        `
      ) : "";
      return (
        /* html */
        `
      <div class="crs-multi-color-section">
        <div class="crs-multi-color-grid">
          ${l}
        </div>
        ${n}
      </div>
    `
      );
    }
    createFeaturedSectionHTML(e, t, s) {
      const l = e.link || "#", i = e.featuredImage ? `<a href="${l}" class="crs-featured-section-link" data-analytics="${e.featuredSubtitle || e.title}" data-type="Image" data-parent="${t || e.title}" data-grandparent="${s || ""}"><img src="${e.featuredImage}" alt="${e.featuredTitle || ""}" class="crs-featured-image"></a>` : "", n = e.featuredTitle ? `<a href="${l}" class="crs-featured-section-link" data-analytics="${e.featuredSubtitle}" data-type="CTA" data-parent="${t || e.title}" data-grandparent="${s || ""}"><h4 class="crs-featured-title">${e.featuredTitle}</h4></a>` : "", r = e.featuredSubtitle ? `<a href="${l}" class="crs-featured-section-link" data-analytics="${e.featuredSubtitle}" data-type="CTA" data-parent="${t || e.title}" data-grandparent="${s || ""}"><p class="crs-featured-subtitle test">${e.featuredSubtitle}</p></a>` : "", a = e.actionLink ? `<a href="${e.actionLink.url}" class="crs-featured-action-link" data-analytics="${e.actionLink.text}" data-parent="${t || e.title}" data-grandparent="${s || ""}">${e.actionLink.text}</a>` : "", o = n || r ? `<div class="crs-featured-main-title">${e.title}</div>` : "";
      let u;
      return e.template === "outfit-builder" ? u = n || r || a ? `<div class="crs-featured-text crs-outfit-builder-text">${r}${n}${a}</div>` : "" : u = n || r || a ? `<div class="crs-featured-text">${a}${r}${n}</div>` : "", e.template === "outfit-builder" ? (
        /* html */
        `
      <div class="crs-featured-section crs-outfit-builder-section">
          ${o}
        ${i}
        ${u}
      </div>
    `
      ) : (
        /* html */
        `
      <div class="crs-featured-section">
        ${i}
        ${u}
      </div>
    `
      );
    }
    createDualFeaturedSectionHTML(e, t, s) {
      if (!e.submenu || e.submenu.length < 2)
        return '<div class="crs-featured-section"></div>';
      const l = e.submenu[0], i = e.submenu[1], n = l.featuredImage ? `<img src="${l.featuredImage}" alt="${l.featuredTitle || ""}" class="crs-featured-image">` : "", r = l.featuredTitle ? `<h4 class="crs-featured-title">${l.featuredTitle}</h4>` : "", a = l.featuredSubtitle ? `<p class="crs-featured-subtitle test">${l.featuredSubtitle}</p>` : "", o = r || a ? `<div class="crs-featured-text">${a}${r}</div>` : "", u = i.featuredImage ? `<img src="${i.featuredImage}" alt="${i.featuredTitle || ""}" class="crs-featured-image">` : "", f = i.featuredTitle ? `<h4 class="crs-featured-title">${i.featuredTitle}</h4>` : "", p = i.featuredSubtitle ? `<p class="crs-featured-subtitle test">${i.featuredSubtitle}</p>` : "", g = f || p ? `<div class="crs-featured-text">${p}${f}</div>` : "", M = l.link ? `<a href="${l.link}" class="crs-featured-item-link" data-analytics="${l.featuredTitle || l.title}" data-parent="${t || e.title}" data-grandparent="${s || ""}">
        <div class="crs-featured-item">
          ${n}
          ${o}
        </div>
        </a>` : `<div class="crs-featured-item">
          ${n}
          ${o}
        </div>`, m = i.link ? `<a href="${i.link}" class="crs-featured-item-link" data-analytics="${i.featuredTitle || i.title}" data-parent="${t || e.title}" data-grandparent="${s || ""}">
        <div class="crs-featured-item">
          ${u}
          ${g}
        </div>
        </a>` : `<div class="crs-featured-item">
          ${u}
          ${g}
        </div>`;
      return (
        /* html */
        `
      <div class="crs-dual-featured-section">
        ${M}
        ${m}
      </div>
    `
      );
    }
    createStackedSectionsHTML(e, t, s) {
      return !e.submenu || e.submenu.length === 0 ? "" : (
        /* html */
        `
      <div class="crs-stacked-sections">
        ${e.submenu.map(
          (i) => this.createCollectionsSectionHTML(
            i,
            i.title,
            s || t || ""
          )
        ).join("")}
      </div>
    `
      );
    }
    createTripleFeaturedSectionHTML(e) {
      if (!e.submenu || e.submenu.length < 3)
        return '<div class="crs-featured-section"></div>';
      const t = e.submenu[0], s = e.submenu[1], l = e.submenu[2], i = e.title && e.showTitle ? `<h3 class="crs-triple-featured-title">${e.title}</h3>` : "", n = (r) => {
        const a = r.link || "#", o = r.featuredImage ? `<a href="${a}" class="crs-featured-section-link" data-analytics="${r.featuredSubtitle || r.title}" data-type="Image" data-parent="${e.title}" data-grandparent=""><img src="${r.featuredImage}" alt="${r.featuredTitle || ""}" class="crs-featured-image"></a>` : "", u = r.featuredTitle ? `<a href="${a}" class="crs-featured-section-link" data-analytics="${r.featuredSubtitle}" data-type="CTA" data-parent="${e.title}" data-grandparent=""><h4 class="crs-featured-title">${r.featuredTitle}</h4></a>` : "", f = r.featuredSubtitle ? `<a href="${a}" class="crs-featured-section-link" data-analytics="${r.featuredSubtitle}" data-type="CTA" data-parent="${e.title}" data-grandparent=""><p class="crs-featured-subtitle test">${r.featuredSubtitle}</p></a>` : "", p = r.actionLink ? `<a href="${r.actionLink.url}" class="crs-featured-action-link" data-analytics="${r.actionLink.text}" data-parent="${e.title}">${r.actionLink.text}</a>` : "", g = u || f || p ? `<div class="crs-featured-text">${f}${u}${p}</div>` : "";
        return (
          /* html */
          `
        <div class="crs-featured-item">
          ${o}
          ${g}
        </div>
      `
        );
      };
      return (
        /* html */
        `
      <div class="crs-triple-featured-section" data-title="${e.title}">
        ${i}
        <div class="crs-triple-featured-items">
          ${n(t)}
          ${n(s)}
          ${n(l)}
        </div>
      </div>
    `
      );
    }
    createQuadFeaturedSectionHTML(e) {
      if (!e.submenu || e.submenu.length < 4)
        return '<div class="crs-quad-featured-section"></div>';
      const t = e.submenu[0], s = e.submenu[1], l = e.submenu[2], i = e.submenu[3], n = (r) => {
        const a = r.link || "#", o = r.featuredImage ? `<a href="${a}" class="crs-featured-section-link" data-analytics="${r.featuredSubtitle || r.title}" data-type="Image" data-parent="${e.title}" data-grandparent=""><img src="${r.featuredImage}" alt="${r.featuredTitle || ""}" class="crs-featured-image"></a>` : "", u = r.featuredTitle ? `<a href="${a}" class="crs-featured-section-link" data-analytics="${r.featuredSubtitle}" data-type="CTA" data-parent="${e.title}" data-grandparent=""><h4 class="crs-featured-title">${r.featuredTitle}</h4></a>` : "", f = r.featuredSubtitle ? `<a href="${a}" class="crs-featured-section-link" data-analytics="${r.featuredSubtitle}" data-type="CTA" data-parent="${e.title}" data-grandparent=""><p class="crs-featured-subtitle test">${r.featuredSubtitle}</p></a>` : "", p = r.actionLink ? `<a href="${r.actionLink.url}" class="crs-featured-action-link" data-analytics="${r.actionLink.text}" data-parent="${e.title}">${r.actionLink.text}</a>` : "", g = u || f || p ? `<div class="crs-featured-text">${u}${f}${p}</div>` : "";
        return (
          /* html */
          `
        <div class="crs-featured-item">
          ${o}
          ${g}
        </div>
      `
        );
      };
      return (
        /* html */
        `
      <div class="crs-quad-featured-section">
        <div class="crs-quad-featured-items">
          ${n(t)}
          ${n(s)}
          ${n(l)}
          ${n(i)}
        </div>
      </div>
    `
      );
    }
    createProductCardsSectionHTML(e) {
      if (!e.submenu || e.submenu.length === 0)
        return '<div class="crs-product-cards-section"></div>';
      const t = (l) => {
        const i = l.productImage ? `<img src="${l.productImage}" alt="${l.title}" class="crs-product-image">` : "", n = l.productPrice ? `<div class="crs-product-price">${l.productPrice}</div>` : "", r = l.productColors ? `<div class="crs-product-colors">${l.productColors}</div>` : "", a = l.productStock ? `<div class="crs-product-stock">${l.productStock}</div>` : "";
        return (
          /* html */
          `
        <div class="crs-product-card">
          <a href="${l.link}" class="crs-product-link" data-analytics="${l.title}" data-parent="${e.title}" data-grandparent="Horse">
            ${i}
            <div class="crs-product-info">
              <h4 class="crs-product-title">${l.title}</h4>
              ${r}
              ${n}
              ${a}
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
    createGiftsContentHTML(e, t, s) {
      if (!e.submenu || e.submenu.length === 0)
        return '<div class="crs-mega-menu-main crs-five-column"></div>';
      const l = e.submenu.filter(
        (o) => o.template === "featured" || o.template === "outfit-builder"
      ), i = e.submenu.filter(
        (o) => o.template !== "featured" && o.template !== "outfit-builder"
      ), n = (o) => this.createCollectionsSectionHTML(
        o,
        e.title,
        s || e.title
      );
      let r = "";
      return l.length > 0 && (r = /* html */
      `
        <div class="crs-gifts-featured-sections">
          ${l.map(
        (u) => this.createGiftsFeaturedItemHTML(
          u,
          e.title,
          s || e.title
        )
      ).join("")}
        </div>
      `), /* html */
      `
      <div class="crs-mega-menu-main crs-five-column">
        ${i.map(n).join("")}
        ${r}
      </div>
    `;
    }
    createGiftsFeaturedItemHTML(e, t, s) {
      const l = e.link || "#", i = e.actionLink ? `<a href="${e.actionLink.url}" class="crs-gifts-action-link" data-analytics="${e.actionLink.text}" data-parent="${t || e.title}" data-grandparent="${s || ""}">${e.actionLink.text}</a>` : "", n = e.featuredImage ? `<img class="crs-featured-image" src="${e.featuredImage}" ></img>` : "";
      return (
        /* html */
        `
      <div class="crs-gifts-featured-item">
      
        <h3 class="crs-gifts-section-title">${e.title}</h3>
        <a href="${l}" class="crs-gifts-featured-link" data-analytics="${e.featuredTitle || e.title}" data-parent="${t || e.title}" data-grandparent="${s || ""}">
        ${n}
        <div class="crs-featured-text">
          <div class="crs-featured-subtitle">${e.featuredSubtitle || ""}</div>
          <div class="crs-featured-title">${e.featuredTitle || ""}</div>
        </div>
        </a>
        ${i}
      </div>
    `
      );
    }
    createGiftsFeaturedSectionHTML(e, t, s) {
      const l = e.actionLink ? `<a href="${e.actionLink.url}" class="crs-gifts-action-link" data-analytics="${e.actionLink.text}" data-parent="${t || e.title}" data-grandparent="${s || ""}">${e.actionLink.text}</a>` : "";
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
        ${l}
      </div>
    `
      );
    }
    createSimpleListHTML(e) {
      return (
        /* html */
        `
      <ul class="crs-simple-list">
        ${e.map((s) => {
          const l = s.icon ? `<span class="crs-item-icon">${s.icon}</span>` : "";
          return (
            /* html */
            `
        <li>
          <a href="${s.link}" class="crs-simple-link">
            ${l}
            <span class="crs-item-text">${s.title}</span>
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
      e && this.megaMenuMouseEnterHandler && this.megaMenuMouseLeaveHandler && (e.removeEventListener(
        "mouseenter",
        this.megaMenuMouseEnterHandler
      ), e.removeEventListener(
        "mouseleave",
        this.megaMenuMouseLeaveHandler
      )), e && e.remove(), this.megaMenuMouseEnterHandler = null, this.megaMenuMouseLeaveHandler = null;
    }
  }
  const R = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M15.4665 1.70673L13.9732 0.213395L7.99987 6.18673L2.02654 0.213395L0.533203 1.70673L6.50654 7.68006L0.533203 13.6534L2.02654 15.1467L7.99987 9.1734L13.9732 15.1467L15.4665 13.6534L9.4932 7.68006L15.4665 1.70673Z" fill="black"/>
</svg>`;
  class Z {
    constructor(e = "B") {
      this.mobileNavigationState = "main", this.eventListeners = [], this.mobileNavigationHistory = [], this.variant = e;
    }
    async createMobileNavigation() {
      this.cleanupEventListeners();
      try {
        const e = await J("off-canvas-menu");
        if (e) {
          let t = e.querySelector(
            "off-canvas-menu-body > div > div > div.flex-grow.flex-column.overflow-y-auto > div:nth-child(2) > ul"
          );
          if (t || (t = e.querySelector("ul")), t || (t = e.querySelector(
            "off-canvas-menu-body ul"
          )), t) {
            const s = H.map(
              (l, i) => this.createMobileNavigationItemHTML(l, i)
            ).join("");
            return t.innerHTML = s, t.setAttribute("data-crs-nav-level", "main"), this.addMobileEventListeners(e), this.changeSearchSection(e), document.createElement("div");
          }
        }
      } catch {
      }
      return document.createElement("div");
    }
    createMobileNavigationItemHTML(e, t) {
      const s = e.textColor ? `style="color: ${e.textColor}"` : "", l = e.submenu && e.submenu.length > 0 ? "data-has-submenu" : "", i = e.icon ? `<img src="${e.icon}" alt="${e.title}" class="crs-mobile-nav-icon">` : "";
      return (
        /* html */
        `
      <li class="crs-mobile-nav-item" ${l} data-index="${t}" data-crs-nav="true">
        <a href="${e.link || "#"}" class="crs-mobile-nav-link" data-analytics="${e.title}">
          ${i}
          <div class="crs-mobile-nav-text" ${s}>${e.title}</div>
          ${l ? '<div class="crs-mobile-chevron">›</div>' : ""}
        </a>
      </li>
    `
      );
    }
    addEventListenerWithCleanup(e, t, s) {
      e.addEventListener(t, s), this.eventListeners.push({ element: e, event: t, handler: s });
    }
    cleanupEventListeners() {
      this.eventListeners.forEach(({ element: e, event: t, handler: s }) => {
        e.removeEventListener(t, s);
      }), this.eventListeners = [];
    }
    changeSearchSection(e) {
      try {
        document.querySelectorAll(
          "off-canvas-menu .crs-mobile-search-form"
        ).forEach((i) => {
          i.remove();
        });
        const s = (
          /* html */
          `
        <form class="crs-mobile-search-form" action="/search" method="get">
        <i _ngcontent-ng-c2405503324="" aria-hidden="true" class="_icon icon-search cursor-pointer _iconOff inline-flex"></i>
          <input type="text" placeholder="Search" name="q">
          <button type="submit">Search</button>
        </form>
      `
        ), l = document.querySelector(
          "off-canvas-menu advanced-commerce-search-form"
        );
        l && l.insertAdjacentHTML("beforebegin", s);
      } catch (t) {
        console.error("❌ Error modifying search section:", t);
      }
    }
    addMobileEventListeners(e) {
      e.querySelectorAll(
        ".crs-mobile-nav-item[data-has-submenu]"
      ).forEach((a) => {
        const o = parseInt(a.getAttribute("data-index") || "0"), u = (f) => {
          f.preventDefault(), this.showMobileSubmenu(o);
        };
        a.hasAttribute("data-has-submenu") && this.addEventListenerWithCleanup(a, "click", u);
      }), e.querySelectorAll(
        ".crs-mobile-nav-item[data-submenu-index], .crs-mobile-second-level-list .crs-mobile-nav-item[data-submenu-index]"
      ).forEach((a, o) => {
        const u = parseInt(a.getAttribute("data-index") || "0"), f = parseInt(
          a.getAttribute("data-submenu-index") || "0"
        ), p = a.getAttribute("data-stacked-index"), g = (M) => {
          var k, w;
          let d = (k = H[u].submenu) == null ? void 0 : k[f];
          if (p !== null && (d == null ? void 0 : d.template) === "stacked-sections") {
            const T = parseInt(p);
            d = (w = d.submenu) == null ? void 0 : w[T];
          }
          d && d.submenu && d.submenu.length > 0 && (M.preventDefault(), this.showMobileThirdLevelSubmenu(u, f));
        };
        a.addEventListener("click", g);
      });
      const l = e.querySelector(".crs-mobile-nav-back-section") || e.querySelector(".crs-mobile-nav-back");
      if (l) {
        const a = (o) => {
          o.preventDefault(), this.navigateBack();
        };
        this.addEventListenerWithCleanup(
          l,
          "click",
          a
        );
      }
      const i = e.querySelector(
        ".crs-mobile-nav-close"
      );
      if (i) {
        const a = (o) => {
          var u;
          o.preventDefault(), this.showMobileMainMenu(), (u = document.querySelector(
            'off-canvas-menu button[aria-label="Close"]'
          )) == null || u.click();
        };
        this.addEventListenerWithCleanup(
          i,
          "click",
          a
        );
      }
      const n = e.querySelector(
        ".off-canvas-close"
      );
      if (n) {
        const a = () => {
        };
        this.addEventListenerWithCleanup(n, "click", a);
      }
      const r = e.querySelector(
        "advanced-commerce-search-form button"
      );
      if (r) {
        const a = () => {
        };
        this.addEventListenerWithCleanup(
          r,
          "click",
          a
        );
      }
      this.addMobileAnalyticsTracking(e);
    }
    showMobileSubmenu(e) {
      const t = H[e];
      if (!t.submenu || t.submenu.length === 0) return;
      this.mobileNavigationHistory.push({ type: "main" }), this.mobileNavigationState = "submenu";
      const s = document.querySelector("off-canvas-menu");
      if (!s) return;
      const l = this.createMobileSubmenuHTML(t, e, t), i = s.querySelector("ul");
      if (i) {
        i.innerHTML = l;
        const n = t.template === "gifts" ? "third-level" : "submenu";
        i.setAttribute("data-crs-nav-level", n), this.cleanupEventListeners(), this.addMobileEventListeners(s), this.changeSearchSection(s);
      }
    }
    showMobileMainMenu() {
      this.mobileNavigationState = "main", this.mobileNavigationHistory = [];
      const e = document.querySelector("off-canvas-menu");
      if (!e) return;
      const t = H.map((l, i) => this.createMobileNavigationItemHTML(l, i)).join(""), s = e.querySelector("ul");
      s && (s.innerHTML = t, s.setAttribute("data-crs-nav-level", "main"), this.cleanupEventListeners(), this.addMobileEventListeners(e), this.changeSearchSection(e));
    }
    showMobileThirdLevelSubmenu(e, t) {
      var a;
      const s = H[e], l = (a = s.submenu) == null ? void 0 : a[t];
      if (!l || !l.submenu || l.submenu.length === 0) return;
      this.mobileNavigationHistory.push({ type: "submenu", parentIndex: e }), this.mobileNavigationState = "third-level";
      const i = document.querySelector("off-canvas-menu");
      if (!i) return;
      const n = this.createMobileThirdLevelSubmenuHTML(
        s,
        l,
        e,
        t
      ), r = i.querySelector("ul");
      r && (r.innerHTML = n, r.setAttribute("data-crs-nav-level", "third-level"), this.cleanupEventListeners(), this.addMobileEventListeners(i), this.changeSearchSection(i));
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
    createMobileFeaturedContentHTML(e, t, s, l = !0, i, n) {
      var o, u, f;
      let r = "", a = "";
      switch (e.showTitle && e.title && (a = /* html */
      `
        <div class="crs-mobile-featured-section-title">${e.title}</div>
      `), e.template) {
        case "dual-featured":
          if (e.submenu && e.submenu.length >= 2) {
            const m = e.submenu[0], d = e.submenu[1], k = (
              /* html */
              `
                    <div class="crs-mobile-featured-image" style="background-image: url('${m.featuredImage || ""}')"></div>
                    <div class="crs-mobile-featured-text">
                      <div class="crs-mobile-featured-subtitle">${m.featuredSubtitle || ""}</div>
                      <div class="crs-mobile-featured-title">${m.featuredTitle || ""}</div>
                    </div>
          `
            ), w = (
              /* html */
              `
                    <div class="crs-mobile-featured-image" style="background-image: url('${d.featuredImage || ""}')"></div>
                    <div class="crs-mobile-featured-text">
                      <div class="crs-mobile-featured-subtitle">${d.featuredSubtitle || ""}</div>
              <div class="crs-mobile-featured-title">${d.featuredTitle || ""}</div>
                    </div>
          `
            ), T = m.link ? (
              /* html */
              `<a href="${m.link}" class="crs-mobile-featured-link" data-analytics="${m.featuredTitle || m.title}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}"><div class="crs-mobile-featured-item">${k}</div></a>`
            ) : (
              /* html */
              `<div class="crs-mobile-featured-item">${k}</div>`
            ), L = d.link ? (
              /* html */
              `<a href="${d.link}" class="crs-mobile-featured-link" data-analytics="${d.featuredTitle || d.title}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}"><div class="crs-mobile-featured-item">${w}</div></a>`
            ) : (
              /* html */
              `<div class="crs-mobile-featured-item">${w}</div>`
            ), h = (
              /* html */
              `<div class="crs-mobile-dual-featured-items">${T + L}</div>`
            );
            r = l ? (
              /* html */
              `<li class="crs-mobile-dual-featured-content" data-crs-nav="true">${a}${h}</li>`
            ) : (
              /* html */
              `<div class="crs-mobile-dual-featured-content" data-crs-nav="true">${a}${h}</div>`
            );
          }
          break;
        case "triple-featured":
          if (e.submenu && e.submenu.length >= 2) {
            const m = e.submenu[0], d = e.submenu[1], w = e.title === "Get the Look" && (i == null ? void 0 : i.title) === "Outfit Builder" && e.submenu.length >= 4, T = (
              /* html */
              `
                    <a class="crs-mobile-featured-link" data-analytics="${m.featuredTitle || m.title}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}" href=${m.link}>
                    
                    <div class="crs-mobile-featured-image" style="background-image: url('${m.featuredImage || ""}')"></div>
                    <div class="crs-mobile-featured-text">
                      <div class="crs-mobile-featured-subtitle">${m.featuredSubtitle || ""}</div>
                      <div class="crs-mobile-featured-title">${m.featuredTitle || ""}</div>
                      ${m.actionLink ? `<a href="${m.actionLink.url}" class="crs-mobile-featured-action-link" data-analytics="${m.actionLink.text}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">${m.actionLink.text}</a>` : ""}
                    </div>
                    </a>
          `
            ), L = (
              /* html */
              `
                    <div class="crs-mobile-featured-image" style="background-image: url('${d.featuredImage || ""}')"></div>
                    <div class="crs-mobile-featured-text">
                      <div class="crs-mobile-featured-subtitle">${d.featuredSubtitle || ""}</div>
                      <div class="crs-mobile-featured-title">${d.featuredTitle || ""}</div>
                      ${d.actionLink ? `<a href="${d.actionLink.url}" class="crs-mobile-featured-action-link" data-analytics="${d.actionLink.text}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">${d.actionLink.text}</a>` : ""}
                    </div>
          `
            );
            let C = "", h = "";
            if (w) {
              const x = e.submenu[2], S = e.submenu[3];
              C = /* html */
              `
              <div class="crs-mobile-featured-image" style="background-image: url('${x.featuredImage || ""}')"></div>
              <div class="crs-mobile-featured-text" >
                      <div class="crs-mobile-featured-subtitle">${x.featuredSubtitle || ""}</div>
                <div class="crs-mobile-featured-title">${x.featuredTitle || ""}</div>
                        ${x.actionLink ? `<a href="${x.actionLink.url}" class="crs-mobile-featured-action-link" data-analytics="${x.actionLink.text}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">${x.actionLink.text}</a>` : ""}
                    </div>
            `, h = /* html */
              `
              <div class="crs-mobile-featured-image" style="background-image: url('${S.featuredImage || ""}')"></div>
              <div class="crs-mobile-featured-text">
                        <div class="crs-mobile-featured-subtitle">${S.featuredSubtitle || ""}</div>
                <div class="crs-mobile-featured-title">${S.featuredTitle || ""}</div>
                        ${S.actionLink ? `<a href="${S.actionLink.url}" class="crs-mobile-featured-action-link" data-analytics="${S.actionLink.text}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">${S.actionLink.text}</a>` : ""}
                  </div>
            `;
            }
            let N = "", $, v;
            if (w) {
              $ = e.submenu[2], v = e.submenu[3];
              const x = (
                /* html */
                `
              <div class="crs-mobile-featured-item">
                ${m.link ? `<a href="${m.link}" class="crs-mobile-featured-link" data-analytics="${m.featuredTitle || m.title}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">${T}</a>` : T}
                  </div>
            `
              ), S = (
                /* html */
                `
                  <div class="crs-mobile-featured-item">
                ${d.link ? `<a href="${d.link}" class="crs-mobile-featured-link" data-analytics="${d.featuredTitle || d.title}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">${L}</a>` : L}
              </div>
            `
              ), j = (
                /* html */
                `
              <div class="crs-mobile-featured-item">
                ${$.link ? `<a href="${$.link}" class="crs-mobile-featured-link" data-analytics="${$.featuredTitle || $.title}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">${C}</a>` : C}
              </div>
            `
              ), G = (
                /* html */
                `
              <div class="crs-mobile-featured-item">
                ${v.link ? `<a href="${v.link}" class="crs-mobile-featured-link" data-analytics="${v.featuredTitle || v.title}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">${h}</a>` : h}
              </div>
            `
              );
              N = /* html */
              `<div class="crs-mobile-triple-featured-items crs-mobile-four-items">${x + S + j + G}</div>`;
            } else {
              const x = m.link ? (
                /* html */
                `<a href="${m.link}" class="crs-mobile-featured-link" data-analytics="${m.featuredTitle || m.title}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}"><div class="crs-mobile-featured-item">${T}</div></a>`
              ) : (
                /* html */
                `<div class="crs-mobile-featured-item">${T}</div>`
              ), S = d.link ? (
                /* html */
                `<a href="${d.link}" class="crs-mobile-featured-link" data-analytics="${d.featuredTitle || d.title}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}"><div class="crs-mobile-featured-item">${L}</div></a>`
              ) : (
                /* html */
                `<div class="crs-mobile-featured-item">${L}</div>`
              );
              N = /* html */
              `<div class="crs-mobile-triple-featured-items">${x + S}</div>`;
            }
            r = l ? (
              /* html */
              `<li class="crs-mobile-triple-featured-content" data-crs-nav="true">${a}${N}</li>`
            ) : (
              /* html */
              `<div class="crs-mobile-triple-featured-content" data-crs-nav="true">${a}${N}</div>`
            );
          }
          break;
        case "quad-featured":
          if (e.submenu && e.submenu.length >= 4) {
            const m = e.submenu[0], d = e.submenu[1], k = e.submenu[2], w = e.submenu[3], T = (
              /* html */
              `
                    <div class="crs-mobile-featured-image" style="background-image: url('${m.featuredImage || ""}')"></div>
                    <div class="crs-mobile-featured-text" >
                      <div class="crs-mobile-featured-title">${m.featuredTitle || ""}</div>
                    </div>
          `
            ), L = (
              /* html */
              `
                    <div class="crs-mobile-featured-image" style="background-image: url('${d.featuredImage || ""}')"></div>
                    <div class="crs-mobile-featured-text">
                      <div class="crs-mobile-featured-title">${d.featuredTitle || ""}</div>
                    </div>
          `
            ), C = (
              /* html */
              `
                    <div class="crs-mobile-featured-image" style="background-image: url('${k.featuredImage || ""}')"></div>
                    <div class="crs-mobile-featured-text">
                      <div class="crs-mobile-featured-title">${k.featuredTitle || ""}</div>
            </div>
          `
            ), h = (
              /* html */
              `
            <div class="crs-mobile-featured-image" style="background-image: url('${w.featuredImage || ""}')"></div>
            <div class="crs-mobile-featured-text">
              <div class="crs-mobile-featured-title">${w.featuredTitle || ""}</div>
                    </div>
          `
            ), N = (
              /* html */
              `
            <div class="crs-mobile-featured-item">
              ${m.link ? `<a href="${m.link}" class="crs-mobile-featured-link" data-analytics="${m.featuredTitle || m.title}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">${T}</a>` : T}
              ${m.actionLink ? `<a href="${m.actionLink.url}" class="crs-mobile-featured-action-link" data-analytics="${m.actionLink.text}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">${m.actionLink.text}</a>` : ""}
                  </div>
          `
            ), $ = (
              /* html */
              `
            <div class="crs-mobile-featured-item">
              ${d.link ? `<a href="${d.link}" class="crs-mobile-featured-link" data-analytics="${d.featuredTitle || d.title}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">${L}</a>` : L}
              ${d.actionLink ? `<a href="${d.actionLink.url}" class="crs-mobile-featured-action-link" data-analytics="${d.actionLink.text}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">${d.actionLink.text}</a>` : ""}
            </div>
          `
            ), v = (
              /* html */
              `
            <div class="crs-mobile-featured-item">
              ${k.link ? `<a href="${k.link}" class="crs-mobile-featured-link" data-analytics="${k.featuredTitle || k.title}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">${C}</a>` : C}
              ${k.actionLink ? `<a href="${k.actionLink.url}" class="crs-mobile-featured-action-link" data-analytics="${k.actionLink.text}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">${k.actionLink.text}</a>` : ""}
            </div>
          `
            ), x = (
              /* html */
              `
            <div class="crs-mobile-featured-item">
              ${w.link ? `<a href="${w.link}" class="crs-mobile-featured-link" data-analytics="${w.featuredTitle || w.title}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">${h}</a>` : h}
              ${w.actionLink ? `<a href="${w.actionLink.url}" class="crs-mobile-featured-action-link" data-analytics="${w.actionLink.text}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">${w.actionLink.text}</a>` : ""}
            </div>
          `
            ), j = (
              /* html */
              `<div class="crs-mobile-quad-featured-items">${N + $ + v + x}</div>`
            );
            r = l ? (
              /* html */
              `<li class="crs-mobile-quad-featured-content" data-crs-nav="true">${a}${j}</li>`
            ) : (
              /* html */
              `<div class="crs-mobile-quad-featured-content" data-crs-nav="true">${a}${j}</div>`
            );
          }
          break;
        case "featured":
          const p = (
            /* html */
            `
                <div class="crs-mobile-featured-image" style="background-image: url('${e.featuredImage || ""}')"></div>
                <div class="crs-mobile-featured-text">
                ${e.actionLink ? `<a href="${((o = e.actionLink) == null ? void 0 : o.url) || ""}" class="crs-mobile-featured-action-link" data-analytics="${((u = e.actionLink) == null ? void 0 : u.text) || ""}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">${((f = e.actionLink) == null ? void 0 : f.text) || ""}</a>` : ""}
                  <div class="crs-mobile-featured-subtitle">${e.featuredSubtitle || ""}</div>
            <div class="crs-mobile-featured-title">${e.featuredTitle || ""}</div>
       
                </div>
        `
          ), g = e.link ? (
            /* html */
            `<a href="${e.link}" class="crs-mobile-featured-link" data-analytics="${e.featuredTitle || e.title}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">${p}</a>`
          ) : p;
          r = l ? (
            /* html */
            `<li class="crs-mobile-featured-content" data-crs-nav="true">${a}${g}</li>`
          ) : (
            /* html */
            `<div class="crs-mobile-featured-content" data-crs-nav="true">${a}${g}</div>`
          );
          break;
        case "product-cards":
          if (e.submenu && e.submenu.length > 0) {
            const m = (
              /* html */
              `
            ${e.submenu.map(
                (d) => (
                  /* html */
                  `
                    <div class="crs-mobile-product-card">
                <a href="${d.link}" class="crs-mobile-product-link" data-analytics="${d.title}" data-parent="${e.title}" data-grandparent="Horse">
                <div class="crs-mobile-product-image" style="background-image: url('${d.productImage || ""}')"></div>
                      <div class="crs-mobile-product-info">
                        <div class="crs-mobile-product-title">${d.title}</div>
                  ${d.productColors ? `<div class="crs-mobile-product-colors">${d.productColors}</div>` : ""}
                  ${d.productPrice ? `<div class="crs-mobile-product-price">${d.productPrice}</div>` : ""}
                  ${d.productStock ? `<div class="crs-mobile-product-stock">${d.productStock}</div>` : ""}
                      </div>
                      </a>
                    </div>
            `
                )
              ).join("")}
          `
            );
            r = l ? (
              /* html */
              `<li class="crs-mobile-product-cards-content" data-crs-nav="true">${m}</li>`
            ) : (
              /* html */
              `<div class="crs-mobile-product-cards-content" data-crs-nav="true">${m}</div>`
            );
          }
          break;
        case "outfit-builder":
          const M = (
            /* html */
            `
        <a href="${e.link}" class="crs-mobile-outfit-builder-link test" data-analytics="${e.featuredTitle || e.title}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">
          <div class="crs-mobile-outfit-builder-image" data-title="${e.title}" style="background-image: url('${e.featuredImage || ""}')"></div>
          <div class="crs-mobile-outfit-builder-text">
            <div class="crs-mobile-outfit-builder-subtitle">${e.featuredSubtitle || ""}</div>
            <div class="crs-mobile-outfit-builder-title">${e.featuredTitle || ""}</div>
            ${e.actionLink ? `<div href="${e.actionLink.url}" class="crs-mobile-outfit-builder-link" data-analytics="${e.actionLink.text}" data-parent="${(i == null ? void 0 : i.title) || ""}" data-grandparent="${(n == null ? void 0 : n.title) || ""}">${e.actionLink.text}</div>` : ""}
          </div>
          </a>
        `
          );
          r = l ? (
            /* html */
            `<li class="crs-mobile-outfit-builder-content" data-crs-nav="true">${M}</li>`
          ) : (
            /* html */
            `<div class="crs-mobile-outfit-builder-content" data-crs-nav="true">${M}</div>`
          );
          break;
        default:
          r = this.createMobileSubmenuHTML(
            e,
            t,
            i,
            n
          );
          break;
      }
      return r;
    }
    createMobileSubmenuHTML(e, t, s, l) {
      let i = "";
      if (e.template === "gifts") {
        if (e.submenu && e.submenu.length > 0) {
          i += /* html */
          `
          <li class="crs-mobile-nav-header" data-crs-nav="true">
            <div class="crs-mobile-nav-back-section">
              <div class="crs-mobile-nav-back">‹</div>
              <div class="crs-mobile-nav-parent">Gifts</div>
                  </div>
            <div class="crs-mobile-nav-current">Gifts</div>
            <div class="crs-mobile-nav-close">${R}</div>
                </li>
        `;
          const n = e.submenu.filter(
            (o) => o.submenu && o.submenu.length > 0 && o.template !== "featured"
          ), r = e.submenu.filter(
            (o) => o.template === "featured"
          );
          let a = "";
          n.forEach((o) => {
            var u;
            a += /* html */
            `
            <div class="crs-mobile-third-level-section" data-crs-nav="true">
              <div class="crs-mobile-third-level-title">${o.title}</div>
              <div class="crs-mobile-third-level-items">
                ${((u = o.submenu) == null ? void 0 : u.map(
              (f) => (
                /* html */
                `
                  <div class="crs-mobile-third-level-item" data-crs-nav="true">
                    <a href="${f.link || "#"}" class="crs-mobile-third-level-link" data-analytics="${f.title}">
                      <div class="crs-mobile-third-level-text">${f.title}</div>
                    </a>
                      </div>
                `
              )
            ).join("")) || ""}
              </div>
            </div>
          `;
          }), r.length > 0 && (a += /* html */
          `
            <div class="crs-mobile-dual-featured-content" data-crs-nav="true">
              <div class="crs-mobile-dual-featured-items">
                ${r.map(
            (o) => (
              /* html */
              `
                  <div class="crs-mobile-dual-featured-item" data-crs-nav="true">
                    <a href="${o.link || "#"}" class="crs-mobile-featured-link" data-analytics="${o.featuredTitle || o.title}" data-parent="Gifts" data-grandparent="">
                      <div class="crs-mobile-featured-image" style="background-image: url('${o.featuredImage || ""}')"></div>
                      <div class="crs-mobile-featured-text">
                        <div class="crs-mobile-featured-subtitle">${o.featuredSubtitle || ""}</div>
                        <div class="crs-mobile-featured-title">${o.featuredTitle || ""}</div>
                      </div>
                    </a>
                    ${o.actionLink ? `<a href="${o.actionLink.url}" class="crs-mobile-featured-action-link" data-analytics="${o.actionLink.text}" data-parent="Gifts" data-grandparent="">${o.actionLink.text}</a>` : ""}
                    </div>
                  `
            )
          ).join("")}
              </div>
            </div>
          `), i += /* html */
          `
          <li class="crs-mobile-third-level-content" data-crs-nav="true">
            ${a}
                </li>
              `;
        }
        return i;
      }
      return e.submenu && e.submenu.length > 0 && e.submenu.forEach((n, r) => {
        const a = n.submenu && n.submenu.length > 0 ? "data-has-submenu" : "";
        switch (n.template) {
          case "dual-featured":
          case "triple-featured":
          case "quad-featured":
          case "featured":
          case "product-cards":
          case "color-grid":
          case "multi-color-grid":
            i += /* html */
            `
              <li class="crs-mobile-nav-item" ${a} data-index="${t}" data-submenu-index="${r}" data-crs-nav="true">
                <a href="${n.link || "#"}" class="crs-mobile-nav-link" data-analytics="${n.title}">
                  <div class="crs-mobile-nav-text">${n.title}</div>
                  ${a ? '<div class="crs-mobile-chevron">›</div>' : ""}
                </a>
              </li>
            `;
            break;
          case "stacked-sections":
            i += /* html */
            `
              <li class="crs-mobile-nav-item" ${a} data-index="${t}" data-submenu-index="${r}" data-crs-nav="true">
                <a href="${n.link || "#"}" class="crs-mobile-nav-link" data-analytics="${n.title}">
                  <div class="crs-mobile-nav-text">${n.title}</div>
                  ${a ? '<div class="crs-mobile-chevron">›</div>' : ""}
                </a>
              </li>
            `;
            break;
          case "outlet":
            n.submenu && n.submenu.length > 0 && (i += /* html */
            `
                <li class="crs-mobile-submenu-item" data-crs-nav="true">
                  <div class="crs-mobile-submenu-content">
                    ${n.submenu.map((o, u) => {
              if (o.template === "link")
                return (
                  /* html */
                  `
                          <div class="crs-mobile-submenu-section" data-crs-nav="true">
                            <a href="${o.link || "#"}" class="crs-mobile-submenu-link" data-analytics="${o.title}" data-parent="${(s == null ? void 0 : s.title) || ""}" data-grandparent="${(l == null ? void 0 : l.title) || ""}">
                              <div class="crs-mobile-submenu-text">${o.title}</div>
                            </a>
                          </div>
                        `
                );
              if (o.submenu && o.submenu.length > 0) {
                const f = o.submenu.map(
                  (p) => (
                    /* html */
                    `
                          <div class="crs-mobile-submenu-item" data-crs-nav="true">
                            <a href="${p.link || "#"}" class="crs-mobile-submenu-link" data-analytics="${p.title}" data-parent="${(s == null ? void 0 : s.title) || ""}" data-grandparent="${(l == null ? void 0 : l.title) || ""}">
                              <div class="crs-mobile-submenu-text">${p.title}</div>
                            </a>
                            </div>
                        `
                  )
                ).join("");
                return (
                  /* html */
                  `
                          <div class="crs-mobile-submenu-section" data-crs-nav="true">
                            <div class="crs-mobile-submenu-section-title">${o.title}</div>
                            <div class="crs-mobile-submenu-items">
                              ${f}
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
          default:
            i += /* html */
            `
              <li class="crs-mobile-nav-item" ${a} data-index="${t}" data-submenu-index="${r}" data-crs-nav="true">
                <a href="${n.link || "#"}" class="crs-mobile-nav-link" data-parent="${(s == null ? void 0 : s.title) || ""}" data-grandparent="${(l == null ? void 0 : l.title) || ""}" data-analytics="${n.title}">
                  <div class="crs-mobile-nav-text">${n.title}</div>
                  ${a ? '<div class="crs-mobile-chevron">›</div>' : ""}
                </a>
              </li>
            `;
            break;
        }
      }), /* html */
      `
      <li class="crs-mobile-nav-header" data-crs-nav="true">
       
          <div class="crs-mobile-nav-back">‹</div>
          <div class="crs-mobile-nav-text">${e.title}</div>
          <div class="crs-mobile-nav-close">${R}</div>
      
      </li>
      <li class="crs-mobile-second-level-content" data-crs-nav="true">
        <ul class="crs-mobile-second-level-list">
          ${i}
        </ul>
      </li>
    `;
    }
    createMobileThirdLevelSubmenuHTML(e, t, s, l) {
      if (t.template && [
        "dual-featured",
        "triple-featured",
        "quad-featured",
        "featured",
        "product-cards"
      ].includes(t.template) && (!t.submenu || t.submenu.length === 0))
        return this.createMobileFeaturedContentHTML(
          t,
          s,
          l,
          !0,
          e,
          void 0
        );
      if (t.template && [
        "dual-featured",
        "triple-featured",
        "quad-featured",
        "featured",
        "product-cards"
      ].includes(t.template))
        return this.createMobileFeaturedContentHTML(
          t,
          s,
          l,
          !1,
          e,
          void 0
        );
      let i = "";
      return t.submenu && t.submenu.length > 0 && t.submenu.forEach((n, r) => {
        var a, o, u, f, p, g, M, m, d, k, w;
        switch (n.template) {
          case "default":
            const T = ((a = n.submenu) == null ? void 0 : a.map((h) => {
              var $, v;
              const N = h.icon ? `<img src="${h.icon}" alt="${h.title}" class="crs-mobile-nav-icon">` : "";
              return (
                /* html */
                `
                    <div class="crs-mobile-third-level-item" data-crs-nav="true">
                          <a href="${h.link || "#"}" class="${h.template === "link" ? "crs-mobile-third-level-link crs-view-all-link" : "crs-mobile-third-level-link"}" data-analytics="${h.title}" data-parent="${t.title}" data-grandparent="${e.title}" data-collection="${(v = ($ = n.submenu) == null ? void 0 : $[r]) == null ? void 0 : v.title}">
                            ${N}
                            <div class="crs-mobile-third-level-text">${h.title}</div>
                          </a>
                    </div>
                  `
              );
            }).join("")) || "";
            i += /* html */
            `
              <div class="crs-mobile-third-level-section" data-title="${n.title}">
                <div class="crs-mobile-third-level-title">${n.title}</div>
                <div class="crs-mobile-third-level-items">
                  ${T}
                </div>
              </div>
            `;
            break;
          case "stacked-sections":
            n.submenu && n.submenu.length > 0 && n.submenu.forEach((h) => {
              var $;
              const N = (($ = h.submenu) == null ? void 0 : $.map((v) => {
                var S, j;
                const x = v.icon ? `<img src="${v.icon}" alt="${v.title}" class="crs-mobile-nav-icon">` : "";
                return (
                  /* html */
                  `
                      <div class="crs-mobile-third-level-item" data-crs-nav="true">
                        <a href="${v.link || "#"}" class="crs-mobile-third-level-link" data-analytics="${v.title}" data-parent="${t.title}" data-grandparent="${e.title}" data-collection="${(j = (S = n.submenu) == null ? void 0 : S[r]) == null ? void 0 : j.title}">
                          ${x}
                          <div class="crs-mobile-third-level-text">${v.title}</div>
                        </a>
                      </div>
                    `
                );
              }).join("")) || "";
              i += /* html */
              `
                  <div class="crs-mobile-third-level-section" data-title="${h.title}">
                    <div class="crs-mobile-third-level-title">${h.title}</div>
                    <div class="crs-mobile-third-level-items">
                      ${N}
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
            i += this.createMobileFeaturedContentHTML(
              n,
              s,
              l,
              !1,
              t,
              e
            );
            break;
          case "color-grid":
          case "multi-color-grid":
            const L = ((o = n.colorSwatches) == null ? void 0 : o.map((h) => (
              /* html */
              `
                <div class="crs-mobile-color-swatch" data-crs-nav="true">
                  <a href="${h.link || "#"}" class="crs-mobile-color-link" data-analytics="${h.name}" data-parent="${e.title}" data-grandparent="${n.title}">
                  <div class="crs-mobile-color-circle" style="background-color: ${h.color}">
                    ${h.isNew ? '<div class="crs-mobile-color-new-badge">New</div>' : ""}
                  </div>
                  <div class="crs-mobile-color-name">${h.name}</div>
                  </a>
                </div>
              `
            )).join("")) || "", C = (u = n.submenu) != null && u.find(
              (h) => h.template === "link"
            ) ? (
              /* html */
              `
                  <ul class="crs-collection-list">
                    <li>
                      <a href="${((p = (f = n.submenu) == null ? void 0 : f.find(
                (h) => h.template === "link"
              )) == null ? void 0 : p.link) || "#"}" class="crs-collection-link crs-view-all-link">${((M = (g = n.submenu) == null ? void 0 : g.find((h) => h.template === "link")) == null ? void 0 : M.title) || "View All"}</a>
                    </li>
                  </ul>
                `
            ) : "";
            i += /* html */
            `
              <div class="crs-mobile-third-level-section">
                <div class="crs-mobile-third-level-title">${n.title}</div>
                <div class="crs-mobile-color-swatches" data-one-column="${(m = n == null ? void 0 : n.colorSwatches) != null && m.length && ((d = n == null ? void 0 : n.colorSwatches) == null ? void 0 : d.length) < 4 ? "true" : "false"}">
                  ${L}
                  ${C}
                </div>
              </div>
            `;
            break;
          default:
            i += /* html */
            `
              <div class="crs-mobile-third-level-section">
                <div class="crs-mobile-third-level-title">${n.title}</div>
                <div class="crs-mobile-third-level-items">
                  <div class="crs-mobile-third-level-item" data-crs-nav="true">
                    <a href="${n.link || "#"}" class="crs-mobile-third-level-link" data-analytics="${n.title}" data-parent="${t.title}" data-grandparent="${e.title}" data-collection="${(w = (k = n.submenu) == null ? void 0 : k[r]) == null ? void 0 : w.title}">
                      <div class="crs-mobile-third-level-text">${n.title}</div>
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
       
          <div class="crs-mobile-nav-back-section">
            <div class="crs-mobile-nav-back">‹</div>
            <div class="crs-mobile-nav-parent">${e.title}</div>
          </div>
          <div class="crs-mobile-nav-current">${t.title}</div>
          <div class="crs-mobile-nav-close">${R}</div>
        
      </li>
      <li class="crs-mobile-third-level-content" data-crs-nav="true">
        ${i}
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
      const t = (s) => {
        const i = s.target.closest("a[data-analytics]");
        if (!i) return;
        const n = i.getAttribute("data-analytics"), r = i.getAttribute("data-parent");
        n && setTimeout(() => {
          if (i.classList.contains("crs-mobile-nav-link"))
            r ? y(
              n,
              "Link",
              r,
              n
            ) : y(n, "Link", n);
          else if (i.classList.contains("crs-mobile-third-level-link")) {
            const a = i.getAttribute("data-parent"), o = i.getAttribute("data-grandparent"), u = i.getAttribute("data-collection");
            console.log("collectionData", u), a && o && y(
              n,
              "Link",
              o,
              a,
              u || ""
            );
          } else if (i.classList.contains("crs-mobile-featured-action-link")) {
            const a = i.getAttribute("data-parent"), o = i.getAttribute("data-grandparent");
            y(
              n,
              "CTA",
              o || a || "",
              a || "",
              "Image section"
            );
          } else if (i.classList.contains("crs-mobile-color-link")) {
            const a = i.getAttribute("data-parent"), o = i.getAttribute("data-grandparent");
            a && o && y(
              n,
              "Link",
              a,
              o,
              "Color swatches"
            );
          } else if (i.classList.contains("crs-mobile-featured-link")) {
            const a = i.getAttribute("data-parent"), o = i.getAttribute("data-grandparent");
            y(
              n,
              "Image",
              o || a || "",
              a || "",
              "Image section"
            );
          } else if (i.classList.contains("crs-mobile-submenu-link")) {
            const a = i.getAttribute("data-parent"), o = i.getAttribute("data-grandparent");
            a && o && y(
              n,
              "Link",
              o,
              a
            );
          } else if (i.classList.contains("crs-mobile-outfit-builder-link")) {
            const a = i.getAttribute("data-parent"), o = i.getAttribute("data-grandparent");
            y(
              n,
              "CTA",
              o || a || "",
              a || "",
              "Image section"
            );
          } else if (i.classList.contains("crs-mobile-product-link")) {
            const a = i.getAttribute("data-parent"), o = i.getAttribute("data-grandparent");
            y(
              n,
              "Link",
              o || a || "",
              a || "",
              "Image section"
            );
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
  class _ {
    constructor(e = "B") {
      this.variant = e, this.desktopNavigation = new O(e), this.mobileNavigation = new Z(e);
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
  class W {
    constructor(e, t, s) {
      this.isMonitoring = !1, this.monitoringInterval = null, this.mutationObserver = null, this.currentUrl = "", this.lastCheckTime = 0, this.checkInterval = 50, this.maxRetries = 5, this.retryCount = 0, this.newNav = e, this.originalNav = t, this.navigationOrchestrator = s, this.currentUrl = location.href;
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
      history.pushState = (...s) => {
        e.apply(history, s), setTimeout(() => this.handleNavigationChange(), 50);
      }, history.replaceState = (...s) => {
        t.apply(history, s), setTimeout(() => this.handleNavigationChange(), 50);
      };
    }
    /**
     * Monitors DOM mutations for navigation removal
     */
    startMutationMonitoring() {
      this.mutationObserver = new MutationObserver((e) => {
        let t = !1;
        e.forEach((s) => {
          s.type === "childList" && (s.removedNodes.forEach((l) => {
            var i;
            (l === this.newNav || (i = l.contains) != null && i.call(l, this.newNav)) && (t = !0);
          }), s.target === this.newNav.parentElement && (t = !0)), s.type === "attributes" && s.target === this.newNav && (t = !0);
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
      const e = Date.now(), t = 3e3, s = setInterval(() => {
        const l = Date.now();
        if (l - e > t) {
          clearInterval(s);
          return;
        }
        l - this.lastCheckTime > 200 && (this.lastCheckTime = l, this.checkNavigationPersistence());
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
      const t = e.getBoundingClientRect(), s = t.width > 0 && t.height > 0, l = this.isElementInHeader(e);
      return s && l;
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
        const s = document.querySelector(t);
        if (s)
          return s;
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
            console.error(
              "🧪 AB Test: Error in recreateNavigation retry:",
              t
            );
          });
        }, 500);
      }
    }
    /**
     * Fixes navigation position
     */
    fixNavigationPosition(e) {
      const t = document.querySelector("meganav"), s = e;
      if (t && t.parentNode)
        t.nextSibling === e || t.parentNode.insertBefore(s, t.nextSibling);
      else {
        const l = this.findHeaderElement();
        l && !l.contains(e) && l.appendChild(s);
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
        const s = document.querySelector("crs-nav");
        s && s.remove(), t.parentNode.insertBefore(e, t.nextSibling);
      } else {
        const s = this.findHeaderElement();
        s ? s.appendChild(e) : document.body.appendChild(e);
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
  class F {
    constructor() {
      this.originalNav = null, this.newNav = null, this.isActive = !1, this.variant = "B", this.navigationPersistence = null, this.currentBreakpoint = null, this.resizeTimeout = null, this.resizeHandler = null, this.isRecreating = !1, this.BREAKPOINT = 1100, this.navigationOrchestrator = new _(this.variant), this.init();
    }
    init() {
      document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => this.start()) : this.start();
    }
    async start() {
      this.findOriginalNavigation(), this.currentBreakpoint = window.innerWidth >= this.BREAKPOINT ? "desktop" : "mobile", await this.createAndInjectNavigation(), this.startNavigationMonitoring(), this.startResizeMonitoring(), this.isActive = !0;
    }
    findOriginalNavigation() {
      const e = ["meganav", "off-canvas-menu"];
      for (const t of e)
        if (this.originalNav = document.querySelector(t), this.originalNav)
          break;
      this.originalNav || console.warn(
        "⚠️ Could not find original navigation, will use fallback injection"
      );
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
      for (let s = 1; s <= 5; s++)
        try {
          const l = await this.findMobileMenu();
          if (l) {
            const i = await this.navigationOrchestrator.createCompleteNavigation(!0);
            await this.integrateWithMobileMenu(l, i), this.newNav = l;
            return;
          }
        } catch (l) {
          console.warn(
            `🧪 AB Test: Mobile injection attempt ${s} failed:`,
            l
          ), s < 5 && await this.delay(500);
        }
      console.warn(
        "🧪 AB Test: All mobile injection attempts failed, creating fallback"
      ), await this.createFallbackMobileNavigation();
    }
    async findMobileMenu() {
      try {
        const e = await J("off-canvas-menu ul");
        if (e)
          return e;
      } catch {
      }
      return null;
    }
    async integrateWithMobileMenu(e, t) {
      var i;
      let s = e.querySelector("ul");
      s || (s = document.createElement("ul"), e.appendChild(s));
      const l = ((i = t.querySelector("ul")) == null ? void 0 : i.innerHTML) || t.innerHTML;
      l && (s.innerHTML = l, s.setAttribute("data-crs-nav-level", "main"));
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
      for (let s = 1; s <= 10; s++) {
        try {
          if (await J("meganav"))
            return;
        } catch {
        }
        s < 10 && await this.delay(200);
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
      if (this.findOriginalNavigation(), this.originalNav && this.originalNav.parentNode) {
        if (this.originalNav.parentNode.querySelector(
          "crs-nav, .crs-navigation-system"
        ))
          return;
        this.originalNav.parentNode.insertBefore(
          this.newNav,
          this.originalNav.nextSibling
        );
      } else {
        const e = document.querySelector("meganav");
        if (e && e.parentNode) {
          if (e.parentNode.querySelector(
            "crs-nav, .crs-navigation-system"
          ))
            return;
          e.parentNode.insertBefore(this.newNav, e.nextSibling);
        } else
          document.body.appendChild(this.newNav);
      }
    }
    startNavigationMonitoring() {
      this.newNav && (this.navigationPersistence = new W(
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
      if (!this.isRecreating) {
        this.isRecreating = !0;
        try {
          this.cleanupNavigation(), await this.delay(100), await this.createAndInjectNavigation(), this.startNavigationMonitoring();
        } finally {
          this.isRecreating = !1;
        }
      }
    }
    /**
     * Starts monitoring for window resize events
     */
    startResizeMonitoring() {
      this.resizeHandler || (this.resizeHandler = this.handleResize.bind(this), window.addEventListener("resize", this.resizeHandler));
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
      if (this.isRecreating)
        return;
      const t = window.innerWidth >= this.BREAKPOINT ? "desktop" : "mobile";
      if (this.currentBreakpoint !== null && this.currentBreakpoint !== t) {
        this.isRecreating = !0;
        try {
          this.cleanupNavigation(), await this.delay(50), await this.createAndInjectNavigation(), this.startNavigationMonitoring();
        } catch (s) {
          console.error(
            `❌ Error switching to ${t} navigation:`,
            s
          );
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
      this.navigationOrchestrator && this.navigationOrchestrator.destroy(), document.querySelectorAll(
        "crs-nav, .crs-navigation-system"
      ).forEach((t) => {
        try {
          t.remove();
        } catch (s) {
          console.warn("Warning: Could not remove navigation element:", s);
        }
      }), this.newNav = null, this.navigationPersistence && (this.navigationPersistence.stopMonitoring(), this.navigationPersistence = null), this.resizeTimeout && (clearTimeout(this.resizeTimeout), this.resizeTimeout = null);
    }
  }
  const z = `meganav {
  display: none;
}

/* Ensure crs-nav is always visible */
crs-nav {
  display: block !important;
}
`, E = `/* Custom crs-nav element */
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
  color: #5c5c5c;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 16px;
  font-weight: 400;
  border-bottom: 2px solid transparent;
  letter-spacing: 1px;
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
  gap: 10px;
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

/* .crs-mega-menu-main.crs-five-column > * {
  flex: 1;
} */

/* Gifts layout - no sidebar */
.crs-mega-menu-content.crs-gifts-layout {
  display: flex;
  justify-content: center;
}

.crs-mega-menu-content.crs-gifts-layout .crs-mega-menu-main {
  padding-inline: 44px 56px;
  padding-right: 16px;
  width: 100%;
}

/* Gifts featured sections */
.crs-gifts-featured-sections {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  flex: 2;
  margin-left: auto;
}

.crs-gifts-featured-item {
  display: flex;
  flex-direction: column;
  flex: 1;

  max-width: 230px;
}

.crs-gifts-featured-item .crs-featured-image {
  width: 100%;
  height: 307px;
  object-fit: cover;
}

.crs-gifts-featured-link {
  display: block;
  text-decoration: none;
  width: 100%;
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
  text-decoration: underline;
}

.crs-featured-text > .crs-featured-action-link:first-child {
  margin-top: 0;
}

.crs-featured-action-link:hover {
  color: #000000;
}

/* Collections Section */
.crs-collections-section {
  flex: 1;
  max-width: 372px;
}

.crs-section-title {
  font-family: baskerville-urw, sans-serif;
  font-size: 20px;
  line-height: 23px;
  font-weight: 500;
  color: #000;
  padding-bottom: 22px;
  letter-spacing: 0.5px;
}

.crs-section-title:empty {
  padding: 0;
}

.crs-collection-list {
  display: grid;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.crs-multi-color-grid + .crs-collection-list {
  margin-top: 22px;
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
  letter-spacing: 1px;
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

.crs-view-all-link,
[data-analytics='View All'] {
  text-decoration: underline;
  font-size: 16px;
  line-height: 28px;
  color: #212121;
  letter-spacing: 1px;
}

/* Colors Section */
.crs-colors-section {
  flex: 1;
  max-width: 372px;
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
  font-size: 16px;
  color: #212121;
  letter-spacing: 1px;
  line-height: 28px;
}

.crs-colors-section .crs-collection-list {
  margin-top: 22px;
}

/* Multi Color Grid Section */
.crs-multi-color-section {
  flex: 1;
  /* max-width: calc(372px * 2 + 20px); */
}

.crs-multi-color-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.crs-mega-menu[data-title="Explore"] .crs-featured-section:has([data-parent="Shop by Colour"]) {
  display: none;
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
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: max-content;
}

.crs-featured-section:has(+ div) {
  padding-right: 56px;
}

.crs-featured-item:has(.crs-featured-image) {
  max-width: 335px;
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
  flex: 2;
  display: flex;
  gap: 20px;
}

.crs-collections-section + .crs-dual-featured-section {
  justify-content: flex-end;
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
}

:is(
    .crs-dual-featured-section,
    .crs-triple-featured-section,
    .crs-quad-featured-section,
    [data-grandparent='Outlet']
  )
  .crs-featured-item:has(> .crs-featured-image):not(
    .crs-featured-item-link > .crs-featured-item
  ),
:is(
    .crs-dual-featured-section,
    .crs-triple-featured-section,
    .crs-quad-featured-section,
    [data-grandparent='Outlet']
  )
  .crs-featured-item-link:has(> .crs-featured-item) {
  max-width: 230px;
  width: 100%;
}

:is(
    .crs-dual-featured-section,
    .crs-triple-featured-section,
    .crs-quad-featured-section,
    [data-grandparent='Outlet']
  )
  img.crs-featured-image {
  /* width: 100%;
  height: 307px; */
  object-fit: cover;
  aspect-ratio: 230/307;
}

[data-title='Get the Look'] .crs-featured-image {
  height: 280px !important;
  min-height: 280px !important;
  object-position: center left;
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

.crs-featured-main-title:empty {
  margin-bottom: 0;
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
  max-width: 372px;
}

@media (min-width: 1680px) {
  :is([data-title='Horse'], [data-title='Women'], [data-title='Toys'], [data-title='Children']) .crs-stacked-sections {
    flex: 2;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    max-width: calc(372px * 2 + 20px);
  }
}

@media (min-width: 1920px) {
  [data-title='Children']:not([data-analytics='New']) .crs-stacked-sections {
    flex: 2;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    max-width: calc(372px * 2 + 20px);
  }
}

.crs-stacked-sections .crs-collections-section {
  margin-bottom: 0;
}

[data-title='Women'] .crs-stacked-sections .crs-collections-section {
  min-width: max-content;
}

.crs-stacked-sections .crs-collections-section:not(:last-child) {
  margin-bottom: 40px;
}

/* Triple Featured Section */
.crs-triple-featured-section {
  flex: 2;
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
  align-items: flex-start;
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
  align-items: flex-start;
}

.crs-triple-featured-items .crs-featured-item .crs-featured-image {
  /* width: 100%; */
  height: 100%;
  /* max-width: 230px;
  min-height: 307px; */
  height: auto;
  aspect-ratio: 230/307;
}

.crs-triple-featured-items .crs-featured-item .crs-featured-text {
  padding: 0 10px;
}

/* Product Cards Section */
.crs-product-cards-section {
  flex: 2;
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

* + .crs-dual-featured-section {
  margin-left: auto;
  justify-content: flex-end;
}

* + .crs-featured-section {
  margin-left: auto;

  align-items: flex-end;
}

* + .crs-triple-featured-section {
  margin-left: auto;
  max-width: max-content;
}
.crs-featured-section-link[data-analytics="Build your toy outfit"], .crs-featured-section-link[data-analytics="Toy Pony Builder"] {
  max-width: 230px;
}

`, Y = `/* Mobile Navigation Integration with Existing Structure */
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
  width: 48px;
  height: 48px;
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 64px;
  border-bottom: 1px solid #cfd2d3;
  padding: 0 16px;
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

.crs-mobile-second-level-list .crs-mobile-nav-item {
  border-bottom: 1px solid #cfd2d3;
}

.crs-mobile-nav-back {
  font-size: 36px;
  color: #2e2e2e;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  display: flex;
}

.crs-mobile-nav-back-section {
  display: flex;
  align-items: center;
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
  padding-inline: 10px;
}

.crs-mobile-third-level-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
  background: white;
  overflow-y: auto;
}

.crs-mobile-third-level-section {
  order: 1;
  margin-bottom: 24px;
}

.crs-mobile-third-level-section[data-title='Collections'] {
  order: 2;
}

.crs-mobile-third-level-content > *:not(.crs-mobile-third-level-section) {
  order: 2;
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

[data-title='Shop by Size'] .crs-mobile-third-level-items {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
}
.crs-mobile-third-level-item {
  margin: 0;
}

[data-title='Shop by Size']
  .crs-mobile-third-level-items
  .crs-mobile-third-level-item {
  width: calc(50% - 6px);
}

[data-title='Shop by Size']
  .crs-mobile-third-level-items
  .crs-mobile-third-level-item:last-child {
  width: 100%;
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

.crs-mobile-color-swatches[data-one-column='true'] {
  grid-template-columns: 1fr;
}

.crs-mobile-color-swatches .crs-collection-list {
  margin-top: 12px;
}

.crs-mobile-color-swatch {
  flex: 1;
  min-width: 0;
}
.crs-mobile-color-link {
  display: flex;
  align-items: center;
  gap: 12px;
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

.crs-mobile-color-circle[style='background-color: rgb(255, 255, 255)'] {
  border: 1px solid #f0f0f0;
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
}

/* Mobile featured section title */
.crs-mobile-featured-section-title {
  font-family: baskerville-urw, sans-serif;
  font-weight: 500;
  font-size: 22px;
  color: #000;

  line-height: 28px;
  letter-spacing: 0.5px;
}

.crs-mobile-featured-image {
  width: 100%;
  height: 457px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 8px;
  object-fit: cover;
}

.crs-mobile-featured-text {
  padding: 0 10px;
}

.crs-mobile-featured-title {
  margin-top: 2px;
  font-size: 20px;
  color: #212121;
  font-family: baskerville-urw, sans-serif;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
}

.crs-mobile-featured-subtitle {
  font-size: 16px;
  color: #212121;

  line-height: 28px;
  letter-spacing: 1px;
}

/* Mobile dual featured content */
.crs-mobile-dual-featured-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-inline: -8px;
}

.crs-mobile-dual-featured-items {
  display: flex;
  gap: 12px;
}

.crs-mobile-dual-featured-content .crs-mobile-featured-item {
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* Ensure equal width for first approach (anchor tags directly in items) */
.crs-mobile-dual-featured-items
  > :is(.crs-mobile-featured-link, .crs-mobile-dual-featured-item) {
  flex: 1;
}

.crs-mobile-dual-featured-items .crs-mobile-dual-featured-item {
  display: flex;
  flex-direction: column;
}

.crs-mobile-dual-featured-content .crs-mobile-featured-image {
  width: 100%;
  height: 220px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 8px;

  object-fit: cover;
}

.crs-mobile-dual-featured-content .crs-mobile-featured-text {
  padding: 0 10px;
}

/* Mobile triple featured content */
.crs-mobile-triple-featured-content {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.crs-mobile-triple-featured-items {
  display: flex;
  gap: 12px;
}

.crs-mobile-triple-featured-content .crs-mobile-featured-item {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.crs-mobile-triple-featured-content
  .crs-mobile-featured-link:has(.crs-mobile-featured-item) {
  flex: 1;
}

.crs-mobile-triple-featured-content .crs-mobile-featured-image {
  width: 100%;
  height: 220px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
}

.crs-mobile-triple-featured-content .crs-mobile-featured-text {
  padding: 0 10px;
}

:is(.crs-mobile-dual-featured-content, .crs-mobile-triple-featured-content)
  .crs-mobile-featured-action-link {
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #212121;
  text-decoration: underline;
  padding-top: 8px;
  margin-top: auto;
}

.crs-mobile-featured-content .crs-mobile-featured-action-link {
  color: #212121;
  font-family: 'Source Sans 3';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  letter-spacing: 1px;
}

/* Special case: "Get the Look" section with 4 items uses grid layout */
.crs-mobile-triple-featured-content .crs-mobile-four-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 16px;
}

.crs-mobile-four-items .crs-mobile-featured-text {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.crs-mobile-four-items .crs-mobile-featured-action-link:last-child {
  margin-top: auto;
  padding-top: 8px;
}

/* Mobile Quad Featured Content */
.crs-mobile-quad-featured-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.crs-mobile-quad-featured-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 12px;
}

.crs-mobile-quad-featured-content .crs-mobile-featured-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.crs-mobile-quad-featured-content .crs-mobile-featured-image {
  width: 100% !important;
  height: 220px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  padding-inline: 10px;
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

.crs-mobile-dual-featured-item > .crs-mobile-featured-action-link {
  padding-inline: 10px;
}

/* Mobile Outfit Builder */
.crs-mobile-outfit-builder-content {
  order: 1 !important;
  margin-top: -24px;
  margin-inline: -24px;
  margin-bottom: 24px;
  background: #eeeeee;
  padding: 24px 16px;
}

.crs-mobile-outfit-builder-content > a {
  display: flex;
  gap: 12px;
  align-items: center;
  text-decoration: none;
}

.crs-mobile-outfit-builder-image {
  width: 165px;
  height: 220px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
  margin-top: 16px;
  margin-left: -4px;
  margin-right: -4px;
  display: flex;
  gap: 12px;
}

.crs-mobile-product-card {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.crs-mobile-product-card:nth-child(3) {
  display: none;
}

.crs-mobile-product-image {
  width: 100%;
  aspect-ratio: 230/296;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.crs-mobile-product-info {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-inline: 10px;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 18px;
  letter-spacing: 1px;
  line-height: 28px;
}

.crs-mobile-product-title {
  color: #212121;
  margin: 0;
}

.crs-mobile-product-colors {
  font-size: 18px;
  color: #acacac;
}

.crs-mobile-product-price {
  font-size: 18px;
  color: #212121;
  margin: 0;
}

.crs-mobile-product-stock {
  color: #212121;
  line-height: 18px;
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

off-canvas-menu advanced-commerce-search-form {
  display: none !important;
}

.crs-mobile-search-form {
  position: relative;
  display: inline-flex;
  align-items: center;

  width: 100%;
  max-width: 303px;
  height: 40px;
  border-radius: 60px;
  border: 1px solid #212121;
}

.crs-mobile-search-form > button {
  display: none;
}

.crs-mobile-search-form > input {
  width: 100%;
  height: 100%;
  padding: 7px 12px;
  padding-left: calc(12px + 18px + 8px);
}

.crs-mobile-search-form > i {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  font-size: 24px;
}

div:has(> .crs-mobile-search-form) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
}

div:has(> .crs-mobile-search-form) [aria-label='Close'] {
  margin: 0;
  margin-left: auto;
}

/* Gifts Menu Styles - using third-level and dual-featured styles for consistency */
`;
  B({ name: "Navigation Menu Redesign & Interaction", dev: "OS" }), (function(b, e, t, s, l, i) {
    b.hj = b.hj || function() {
      (b.hj.q = b.hj.q || []).push(arguments);
    }, b._hjSettings = { hjid: 2667925, hjsv: 6 }, l = e.getElementsByTagName("head")[0], i = e.createElement("script"), i.async = !0, i.src = t + b._hjSettings.hjid + s + b._hjSettings.hjsv, l && l.appendChild(i);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv="), window.hj("event", "exp_nav_redesign");
  class V {
    constructor() {
      this.init(), this.navigationVariant = new F();
    }
    init() {
      this.addStyles(), this.preloadImages();
    }
    preloadImages() {
      [
        "https://conversionrate-store.github.io/a-b_images/lemieux/outfit-builder-women.webp",
        "https://conversionrate-store.github.io/a-b_images/lemieux/toy-outfit-builder.webp",
        "https://conversionrate-store.github.io/a-b_images/lemieux/hobby_horse.webp",
        "https://conversionrate-store.github.io/a-b_images/lemieux/tiny_pony_cloudy.png",
        "https://conversionrate-store.github.io/a-b_images/lemieux/tiny_pony_rolo.png",
        "https://conversionrate-store.github.io/a-b_images/lemieux/tiny_pony_popcorn.png",
        "https://conversionrate-store.github.io/a-b_images/lemieux/tiny_pony_panda.png",
        "https://conversionrate-store.github.io/a-b_images/lemieux/tiny_pony_rug.png",
        "https://conversionrate-store.github.io/a-b_images/lemieux/aw25-colour-collection-shop-by-colour.webp",
        "https://conversionrate-store.github.io/a-b_images/lemieux/cooler-rugs.jpg",
        "https://conversionrate-store.github.io/a-b_images/lemieux/arika-mesh.jpg"
      ].forEach((t) => {
        const s = `<link rel="preload" href="${t}" as="image">`;
        document.head.insertAdjacentHTML("beforeend", s);
      });
    }
    addStyles() {
      const e = document.createElement("style");
      e.textContent = z, document.head.appendChild(e);
      const t = document.createElement("style");
      t.textContent = E, document.head.appendChild(t);
      const s = document.createElement("style");
      s.textContent = Y, document.head.appendChild(s);
    }
  }
  window.autoInitData.website.defaultCountry === "GB" && window.location.pathname !== "/test/" && (window.navigationInitialized || (window.navigationInitialized = !0, new V()));
})();
