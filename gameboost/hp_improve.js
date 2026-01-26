(function() {
  "use strict";
  const g = (i, t, e, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: i,
      event_desc: t,
      event_type: e,
      event_loc: o
    }), C(`Event: ${i} | ${t} | ${e} | ${o}`, "success");
  }, b = (i) => new Promise((t) => {
    const e = document.querySelector(i);
    e && t(e);
    const o = new MutationObserver(() => {
      const s = document.querySelector(i);
      s && (t(s), o.disconnect());
    });
    o.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), R = ({ name: i, dev: t }) => {
    console.log(
      `%c EXP: ${i} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, z = (i) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", i, "variant_1"));
    }, 1e3);
  }, G = (i, t, e, o, s = 1e3, a = 0.5) => {
    let n, r;
    n = new IntersectionObserver(
      function(l) {
        l[0].isIntersecting === !0 ? r = setTimeout(() => {
          g(
            t,
            l[0].target.dataset.visible || o,
            "view",
            e
          ), n.disconnect();
        }, s) : (C("Element is not fully visible", "warn"), clearTimeout(r));
      },
      { threshold: [a] }
    );
    {
      const l = document.querySelector(i);
      l && n.observe(l);
    }
  }, C = (i, t = "info") => {
    let e;
    switch (t) {
      case "info":
        e = "color: #3498db;";
        break;
      case "warn":
        e = "color: #f39c12;";
        break;
      case "error":
        e = "color: #e74c3c;";
        break;
      case "success":
        e = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${i}`, `${e} font-size: 16px; font-weight: 600`);
  }, H = `
@media (max-width: 768px) {
  .crs-popular-games, .crs-popular-games ~ div {
    padding-inline: 12px;
  }
}`, M = `.crs-popular-games > div {
  margin-top: 2rem;
}

[aria-roledescription='carousel']:has(.game-grid-container) > button {
  display: none;
}

/* Grid layout - desktop only (min-width: 768px) */
@media (min-width: 768px) {
  .game-grid-container {
    display: grid !important;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 1.4rem;
    transform: translate3d(0, 0, 0) !important;
  }

  .game-grid-hidden {
    display: none !important;
  }

  .game-grid-load-more {
    margin-block: 32px 10px;
    margin-inline: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    min-height: 52px;
    padding: 14px 44px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }

  .game-grid-load-more::after {
    content: '';
    width: 17px;
    height: 14px;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 17 14" fill="none"><path d="M7.78125 13.7188C7.98958 13.9063 8.22917 14 8.5 14C8.77083 14 9.01042 13.9063 9.21875 13.7188L14.2188 8.71875C14.4063 8.51042 14.5 8.27083 14.5 8C14.5 7.72917 14.4063 7.48958 14.2188 7.28125C14.0104 7.09375 13.7708 7 13.5 7C13.2292 7 12.9896 7.09375 12.7813 7.28125L9.5 10.5938L9.5 1C9.5 0.708334 9.40625 0.46875 9.21875 0.28125C9.03125 0.0937503 8.79167 2.75017e-07 8.5 2.62268e-07C8.20833 2.49519e-07 7.96875 0.0937502 7.78125 0.28125C7.59375 0.46875 7.5 0.708334 7.5 1L7.5 10.5938L4.21875 7.28125C4.01042 7.09375 3.77083 7 3.5 7C3.22917 7 2.98958 7.09375 2.78125 7.28125C2.59375 7.48958 2.5 7.72917 2.5 8C2.5 8.27083 2.59375 8.51042 2.78125 8.71875L7.78125 13.7188Z" fill="white"/></svg>');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
}

/* Mobile slider split with scroll snapping */
@media (max-width: 1023px) {
  .game-scroll-snap-container {
    display: flex;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth !important;
    padding: 0 0 10px 0;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .game-scroll-snap-container::-webkit-scrollbar {
    display: none;
  }

  .game-scroll-snap-slide {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    /* width: calc((100vw - 32px) / 3); */
  }

  .game-slider-split {
    margin-bottom: 20px;
  }

  .game-slider-split-wrapper {
    margin-top: 1rem !important;
    position: relative;
    margin-bottom: 20px;
    width: 100%;
  }

  .game-slider-split + .game-slider-split {
    margin-top: 20px;
  }

  .game-slider-split-nav {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 210px;
    padding: 0 8px;
    pointer-events: none;
  }

  .game-slider-split-nav button {
    pointer-events: all;
  }
}

@media (max-width: 768px) {
  .crs-popular-games [aria-roledescription='slide'] {
    min-width: 143px;
    padding-block: 0;
  }
}

.game-categories-title {
  display: block;
  margin-top: 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}

@media (max-width: 768px) {
  .game-categories-title {
    padding-inline: 6px;
  }
}

.game-categories {
  display: flex;
  gap: 8px;
  margin-top: 8px;
  flex-wrap: wrap;
  font-size: 12px;
}

@media (max-width: 768px) {
  .game-categories {
    flex-direction: column;
  }
}

.category-link {
  width: max-content;
  padding: 6px 10px;

  text-decoration: none;
  border-radius: 6px;
  background: hsl(var(--secondary-light));
  box-shadow: 0 0 0 1px hsl(var(--secondary-ring));
  transition: background 0.2s ease;
  white-space: nowrap;
  display: inline-block;
}

@media (max-width: 768px) {
  .game-keys-scroll-container > div {
    min-width: 143px;
  }
  .category-link:nth-child(n + 4) {
    display: none;
  }

  .crs-popular-games [data-gridified='true'] {
    padding-left: 4px;
  }
}

.crs-popular-games > div > button {
  top: 25%;
  transform: translate(0);
}

@media (hover: none) and (pointer: coarse) {
  .crs-popular-games > div > button,
  .game-slider-split-nav {
    display: none;
  }
}
`, _ = /* @__PURE__ */ JSON.parse('[{"name":"Fortnite","url":"https://gameboost.com/fortnite","slug":"fortnite","priority":1,"categories":[{"title":"Accounts","url":"https://gameboost.com/fortnite/accounts"},{"title":"Items","url":"https://gameboost.com/fortnite/items"},{"title":"V-Bucks","url":"https://gameboost.com/fortnite/v-bucks"}]},{"name":"Grand Theft Auto V","url":"https://gameboost.com/grand-theft-auto-v","slug":"grand-theft-auto-v","priority":1,"categories":[{"title":"Accounts","url":"https://gameboost.com/grand-theft-auto-v/accounts"}]},{"name":"Steal A Brainrot","url":"https://gameboost.com/steal-a-brainrot","slug":"steal-a-brainrot","priority":1,"categories":[{"title":"Accounts","url":"https://gameboost.com/steal-a-brainrot/accounts"},{"title":"Items","url":"https://gameboost.com/steal-a-brainrot/items"}]},{"name":"Valorant","url":"https://gameboost.com/valorant","slug":"valorant","priority":1,"categories":[{"title":"Boosting","url":"https://gameboost.com/valorant/boosting"},{"title":"Accounts","url":"https://gameboost.com/valorant/accounts"},{"title":"Points","url":"https://gameboost.com/valorant/top-up"}]},{"name":"Clash Of Clans","url":"https://gameboost.com/clash-of-clans","slug":"clash-of-clans","priority":1,"categories":[{"title":"Accounts","url":"https://gameboost.com/clash-of-clans/accounts"},{"title":"Clans","url":"https://gameboost.com/clash-of-clans/items"},{"title":"Gems","url":"https://gameboost.com/clash-of-clans/top-up"}]},{"name":"Call Of Duty","url":"https://gameboost.com/call-of-duty","slug":"call-of-duty","priority":1,"categories":[{"title":"Accounts","url":"https://gameboost.com/call-of-duty/accounts"},{"title":"Items","url":"https://gameboost.com/call-of-duty/items"},{"title":"CoD Points","url":"https://gameboost.com/call-of-duty/cod-points"}]},{"name":"League Of Legends","url":"https://gameboost.com/league-of-legends","slug":"league-of-legends","priority":2,"categories":[{"title":"Boosting","url":"https://gameboost.com/league-of-legends/boosting"},{"title":"Accounts","url":"https://gameboost.com/league-of-legends/accounts"},{"title":"Items","url":"https://gameboost.com/league-of-legends/items"},{"title":"Riot Points","url":"https://gameboost.com/league-of-legends/top-up"}]},{"name":"Clash Royale","url":"https://gameboost.com/clash-royale","slug":"clash-royale","priority":2,"categories":[{"title":"Accounts","url":"https://gameboost.com/clash-royale/accounts"},{"title":"Gems","url":"https://gameboost.com/clash-royale/gems"}]},{"name":"Roblox","url":"https://gameboost.com/roblox","slug":"roblox","priority":2,"categories":[{"title":"Accounts","url":"https://gameboost.com/roblox/accounts"},{"title":"Robux","url":"https://gameboost.com/roblox/robux"},{"title":"Items","url":"https://gameboost.com/roblox/items"}]},{"name":"Brawl Stars","url":"https://gameboost.com/brawl-stars","slug":"brawl-stars","priority":2,"categories":[{"title":"Accounts","url":"https://gameboost.com/brawl-stars/accounts"},{"title":"Gems","url":"https://gameboost.com/brawl-stars/gems"}]},{"name":"Raid Shadow Legends","url":"https://gameboost.com/raid-shadow-legends","slug":"raid-shadow-legends","priority":2,"categories":[{"title":"Accounts","url":"https://gameboost.com/raid-shadow-legends/accounts"}]},{"name":"Pubg Mobile","url":"https://gameboost.com/pubg-mobile","slug":"pubg-mobile","priority":2,"categories":[{"title":"Accounts","url":"https://gameboost.com/pubg-mobile/accounts"},{"title":"Items","url":"https://gameboost.com/pubg-mobile/items"},{"title":"UC","url":"https://gameboost.com/pubg-mobile/top-up"}]},{"name":"Plants Vs Brainrots","url":"https://gameboost.com/plants-vs-brainrots","slug":"plants-vs-brainrots","categories":[{"title":"Items","url":"https://gameboost.com/plants-vs-brainrots/items"}]},{"name":"Apex Legends","url":"https://gameboost.com/apex-legends","slug":"apex-legends","categories":[{"title":"Boosting","url":"https://gameboost.com/apex-legends/boosting"},{"title":"Accounts","url":"https://gameboost.com/apex-legends/accounts"},{"title":"Coins","url":"https://gameboost.com/apex-legends/coins"}]},{"name":"Grow A Garden","url":"https://gameboost.com/grow-a-garden","slug":"grow-a-garden","categories":[{"title":"Accounts","url":"https://gameboost.com/grow-a-garden/accounts"},{"title":"Items","url":"https://gameboost.com/grow-a-garden/items"},{"title":"Tokens","url":"https://gameboost.com/grow-a-garden/tokens"}]},{"name":"Rainbow Six Siege","url":"https://gameboost.com/rainbow-six-siege","slug":"rainbow-six-siege","categories":[{"title":"Accounts","url":"https://gameboost.com/rainbow-six-siege/accounts"},{"title":"Credits","url":"https://gameboost.com/rainbow-six-siege/top-up"}]},{"name":"Genshin Impact","url":"https://gameboost.com/genshin-impact","slug":"genshin-impact","categories":[{"title":"Accounts","url":"https://gameboost.com/genshin-impact/accounts"},{"title":"Crystal","url":"https://gameboost.com/genshin-impact/top-up"}]},{"name":"Rocket League","url":"https://gameboost.com/rocket-league","slug":"rocket-league","categories":[{"title":"Boosting","url":"https://gameboost.com/rocket-league/boosting"},{"title":"Credits","url":"https://gameboost.com/rocket-league/credits"},{"title":"Accounts","url":"https://gameboost.com/rocket-league/accounts"}]},{"name":"Overwatch 2","url":"https://gameboost.com/overwatch-2","slug":"overwatch-2","categories":[{"title":"Boosting","url":"https://gameboost.com/overwatch-2/boosting"},{"title":"Accounts","url":"https://gameboost.com/overwatch-2/accounts"},{"title":"Coins","url":"https://gameboost.com/overwatch-2/coins"}]},{"name":"Old School Runescape","url":"https://gameboost.com/old-school-runescape","slug":"old-school-runescape","categories":[{"title":"Gold","url":"https://gameboost.com/old-school-runescape/gold"},{"title":"Accounts","url":"https://gameboost.com/old-school-runescape/accounts"},{"title":"Items","url":"https://gameboost.com/old-school-runescape/items"}]},{"name":"Rust","url":"https://gameboost.com/rust","slug":"rust","categories":[{"title":"Accounts","url":"https://gameboost.com/rust/accounts"},{"title":"Items","url":"https://gameboost.com/rust/items"}]},{"name":"Pokemon Go","url":"https://gameboost.com/pokemon-go","slug":"pokemon-go","categories":[{"title":"Accounts","url":"https://gameboost.com/pokemon-go/accounts"},{"title":"Items","url":"https://gameboost.com/pokemon-go/items"},{"title":"PokeCoins","url":"https://gameboost.com/pokemon-go/top-up"}]},{"name":"Honkai Star Rail","url":"https://gameboost.com/honkai-star-rail","slug":"honkai-star-rail","categories":[{"title":"Accounts","url":"https://gameboost.com/honkai-star-rail/accounts"},{"title":"Oneiric Shard","url":"https://gameboost.com/honkai-star-rail/top-up"}]},{"name":"Minecraft","url":"https://gameboost.com/minecraft","slug":"minecraft","categories":[{"title":"Accounts","url":"https://gameboost.com/minecraft/accounts"},{"title":"Items","url":"https://gameboost.com/minecraft/items"},{"title":"Hypixel Coins","url":"https://gameboost.com/minecraft/hypixel-coins"}]},{"name":"Free Fire","url":"https://gameboost.com/free-fire","slug":"free-fire","categories":[{"title":"Accounts","url":"https://gameboost.com/free-fire/accounts"},{"title":"Diamonds","url":"https://gameboost.com/free-fire/top-up"}]},{"name":"Nba 2k","url":"https://gameboost.com/nba-2k","slug":"nba-2k","categories":[{"title":"Accounts","url":"https://gameboost.com/nba-2k/accounts"}]},{"name":"Dragonball Legends","url":"https://gameboost.com/dragonball-legends","slug":"dragonball-legends","categories":[{"title":"Accounts","url":"https://gameboost.com/dragonball-legends/accounts"}]},{"name":"Summoners War","url":"https://gameboost.com/summoners-war","slug":"summoners-war","categories":[{"title":"Accounts","url":"https://gameboost.com/summoners-war/accounts"}]},{"name":"Mobile Legends","url":"https://gameboost.com/mobile-legends","slug":"mobile-legends","categories":[{"title":"Accounts","url":"https://gameboost.com/mobile-legends/accounts"},{"title":"Diamonds","url":"https://gameboost.com/mobile-legends/top-up"}]},{"name":"Escape From Tarkov","url":"https://gameboost.com/escape-from-tarkov","slug":"escape-from-tarkov","categories":[{"title":"Accounts","url":"https://gameboost.com/escape-from-tarkov/accounts"},{"title":"Roubles","url":"https://gameboost.com/escape-from-tarkov/roubles"},{"title":"Items","url":"https://gameboost.com/escape-from-tarkov/items"}]},{"name":"One Piece Bounty Rush","url":"https://gameboost.com/one-piece-bounty-rush","slug":"one-piece-bounty-rush","categories":[{"title":"Accounts","url":"https://gameboost.com/one-piece-bounty-rush/accounts"}]},{"name":"Forza Horizon 5","url":"https://gameboost.com/forza-horizon-5","slug":"forza-horizon-5","categories":[{"title":"Accounts","url":"https://gameboost.com/forza-horizon-5/accounts"},{"title":"Credits","url":"https://gameboost.com/forza-horizon-5/credits"}]},{"name":"Red Dead Redemption 2","url":"https://gameboost.com/red-dead-redemption-2","slug":"red-dead-redemption-2","categories":[{"title":"Accounts","url":"https://gameboost.com/red-dead-redemption-2/accounts"}]},{"name":"Dota 2","url":"https://gameboost.com/dota-2","slug":"dota-2","categories":[{"title":"Accounts","url":"https://gameboost.com/dota-2/accounts"},{"title":"Items","url":"https://gameboost.com/dota-2/items"}]},{"name":"Hay Day","url":"https://gameboost.com/hay-day","slug":"hay-day","categories":[{"title":"Accounts","url":"https://gameboost.com/hay-day/accounts"},{"title":"Items","url":"https://gameboost.com/hay-day/items"}]},{"name":"War Thunder","url":"https://gameboost.com/war-thunder","slug":"war-thunder","categories":[{"title":"Accounts","url":"https://gameboost.com/war-thunder/accounts"}]},{"name":"Destiny 2","url":"https://gameboost.com/destiny-2","slug":"destiny-2","categories":[{"title":"Accounts","url":"https://gameboost.com/destiny-2/accounts"},{"title":"Silver","url":"https://gameboost.com/destiny-2/silver"},{"title":"Items","url":"https://gameboost.com/destiny-2/items"}]},{"name":"Squad Busters","url":"https://gameboost.com/squad-busters","slug":"squad-busters","categories":[{"title":"Accounts","url":"https://gameboost.com/squad-busters/accounts"}]},{"name":"World Of Tanks","url":"https://gameboost.com/world-of-tanks","slug":"world-of-tanks","categories":[{"title":"Accounts","url":"https://gameboost.com/world-of-tanks/accounts"}]},{"name":"Xdefiant","url":"https://gameboost.com/xdefiant","slug":"xdefiant","categories":[{"title":"Accounts","url":"https://gameboost.com/xdefiant/accounts"}]},{"name":"Diablo 4","url":"https://gameboost.com/diablo-4","slug":"diablo-4","categories":[{"title":"Accounts","url":"https://gameboost.com/diablo-4/accounts"},{"title":"Gold","url":"https://gameboost.com/diablo-4/gold"},{"title":"Items","url":"https://gameboost.com/diablo-4/items"}]},{"name":"Warframe","url":"https://gameboost.com/warframe","slug":"warframe","categories":[{"title":"Items","url":"https://gameboost.com/warframe/items"},{"title":"Platinum","url":"https://gameboost.com/warframe/platinum"},{"title":"Accounts","url":"https://gameboost.com/warframe/accounts"}]},{"name":"The Elder Scrolls","url":"https://gameboost.com/the-elder-scrolls","slug":"the-elder-scrolls","categories":[{"title":"Gold","url":"https://gameboost.com/the-elder-scrolls/gold"},{"title":"Items","url":"https://gameboost.com/the-elder-scrolls/items"},{"title":"Accounts","url":"https://gameboost.com/the-elder-scrolls/accounts"}]},{"name":"Lost Ark","url":"https://gameboost.com/lost-ark","slug":"lost-ark","categories":[{"title":"Gold","url":"https://gameboost.com/lost-ark/gold"},{"title":"Items","url":"https://gameboost.com/lost-ark/items"}]},{"name":"Fallout 76","url":"https://gameboost.com/fallout-76","slug":"fallout-76","categories":[{"title":"Items","url":"https://gameboost.com/fallout-76/items"},{"title":"Atoms","url":"https://gameboost.com/fallout-76/top-up"},{"title":"Accounts","url":"https://gameboost.com/fallout-76/accounts"}]},{"name":"Growtopia","url":"https://gameboost.com/growtopia","slug":"growtopia","categories":[{"title":"Items","url":"https://gameboost.com/growtopia/items"},{"title":"Locks","url":"https://gameboost.com/growtopia/locks"},{"title":"Accounts","url":"https://gameboost.com/growtopia/accounts"}]},{"name":"Final Fantasy Xiv","url":"https://gameboost.com/final-fantasy-xiv","slug":"final-fantasy-xiv","categories":[{"title":"Accounts","url":"https://gameboost.com/final-fantasy-xiv/accounts"},{"title":"Gil","url":"https://gameboost.com/final-fantasy-xiv/gil"},{"title":"Items","url":"https://gameboost.com/final-fantasy-xiv/items"}]},{"name":"Zenless Zone Zero","url":"https://gameboost.com/zenless-zone-zero","slug":"zenless-zone-zero","categories":[{"title":"Accounts","url":"https://gameboost.com/zenless-zone-zero/accounts"},{"title":"Monochrome","url":"https://gameboost.com/zenless-zone-zero/top-up"}]},{"name":"Fc 25","url":"https://gameboost.com/fc-25","slug":"fc-25","categories":[{"title":"Coins","url":"https://gameboost.com/fc-25/coins"},{"title":"Accounts","url":"https://gameboost.com/fc-25/accounts"}]},{"name":"World Of Warcraft","url":"https://gameboost.com/world-of-warcraft","slug":"world-of-warcraft","categories":[{"title":"Gold","url":"https://gameboost.com/world-of-warcraft/gold"},{"title":"Items","url":"https://gameboost.com/world-of-warcraft/items"}]},{"name":"Wow Season Of Discovery","url":"https://gameboost.com/wow-season-of-discovery","slug":"wow-season-of-discovery","categories":[{"title":"Gold","url":"https://gameboost.com/wow-season-of-discovery/gold"},{"title":"Accounts","url":"https://gameboost.com/wow-season-of-discovery/accounts"}]},{"name":"Teamfight Tactics","url":"https://gameboost.com/teamfight-tactics","slug":"teamfight-tactics","categories":[{"title":"Boosting","url":"https://gameboost.com/teamfight-tactics/boosting"}]},{"name":"Lol Wild Rift","url":"https://gameboost.com/lol-wild-rift","slug":"lol-wild-rift","categories":[{"title":"Boosting","url":"https://gameboost.com/lol-wild-rift/boosting"},{"title":"Accounts","url":"https://gameboost.com/lol-wild-rift/accounts"},{"title":"Wild Cores","url":"https://gameboost.com/lol-wild-rift/wild-cores"}]},{"name":"Counter Strike 2","url":"https://gameboost.com/counter-strike-2","slug":"counter-strike-2","categories":[{"title":"Skins","url":"https://gameboost.com/counter-strike-2/skins"},{"title":"Accounts","url":"https://gameboost.com/counter-strike-2/accounts"},{"title":"Karambit","url":"https://gameboost.com/counter-strike-2/skins?category=knife&subCategory=karambit"},{"title":"M9 bayonets","url":"https://gameboost.com/counter-strike-2/skins?category=knife&subCategory=m9-bayonet"},{"title":"Bayonets","url":"https://gameboost.com/counter-strike-2/skins?category=knife&subCategory=bayonet"},{"title":"Butterfly Knife","url":"https://gameboost.com/counter-strike-2/skins?category=knife&subCategory=butterfly-knife"},{"title":"AWP","url":"https://gameboost.com/counter-strike-2/skins?category=rifle&subCategory=awp"}]},{"name":"Rise Of Kingdoms","url":"https://gameboost.com/rise-of-kingdoms","slug":"rise-of-kingdoms","categories":[{"title":"Accounts","url":"https://gameboost.com/rise-of-kingdoms/accounts"}]},{"name":"Black Desert","url":"https://gameboost.com/black-desert","slug":"black-desert","categories":[{"title":"Accounts","url":"https://gameboost.com/black-desert/accounts"},{"title":"Items","url":"https://gameboost.com/black-desert/items"},{"title":"Silver","url":"https://gameboost.com/black-desert/silver"}]},{"name":"Last Epoch","url":"https://gameboost.com/last-epoch","slug":"last-epoch","categories":[{"title":"Gold","url":"https://gameboost.com/last-epoch/gold"},{"title":"Items","url":"https://gameboost.com/last-epoch/items"}]},{"name":"Dayz","url":"https://gameboost.com/dayz","slug":"dayz","categories":[{"title":"Accounts","url":"https://gameboost.com/dayz/accounts"}]},{"name":"Boom Beach","url":"https://gameboost.com/boom-beach","slug":"boom-beach","categories":[{"title":"Accounts","url":"https://gameboost.com/boom-beach/accounts"}]},{"name":"Diablo 2","url":"https://gameboost.com/diablo-2","slug":"diablo-2","categories":[{"title":"Items","url":"https://gameboost.com/diablo-2/items"}]},{"name":"Path Of Exile","url":"https://gameboost.com/path-of-exile","slug":"path-of-exile","categories":[{"title":"Items","url":"https://gameboost.com/path-of-exile/items"},{"title":"Orbs","url":"https://gameboost.com/path-of-exile/currency"},{"title":"Accounts","url":"https://gameboost.com/path-of-exile/accounts"}]},{"name":"Neopets","url":"https://gameboost.com/neopets","slug":"neopets","categories":[{"title":"Items","url":"https://gameboost.com/neopets/items"}]},{"name":"Runescape 3","url":"https://gameboost.com/runescape-3","slug":"runescape-3","categories":[{"title":"Gold","url":"https://gameboost.com/runescape-3/gold"},{"title":"Items","url":"https://gameboost.com/runescape-3/items"},{"title":"Accounts","url":"https://gameboost.com/runescape-3/accounts"}]},{"name":"Ark Survival Evolved","url":"https://gameboost.com/ark-survival-evolved","slug":"ark-survival-evolved","categories":[{"title":"Items","url":"https://gameboost.com/ark-survival-evolved/items"}]},{"name":"New World","url":"https://gameboost.com/new-world","slug":"new-world","categories":[{"title":"Coins","url":"https://gameboost.com/new-world/coins"},{"title":"Items","url":"https://gameboost.com/new-world/items"}]},{"name":"Albion Online","url":"https://gameboost.com/albion-online","slug":"albion-online","categories":[{"title":"Silver","url":"https://gameboost.com/albion-online/silver"},{"title":"Accounts","url":"https://gameboost.com/albion-online/accounts"},{"title":"Items","url":"https://gameboost.com/albion-online/items"}]},{"name":"Call Of Duty Mobile","url":"https://gameboost.com/call-of-duty-mobile","slug":"call-of-duty-mobile","categories":[{"title":"Accounts","url":"https://gameboost.com/call-of-duty-mobile/accounts"},{"title":"CP","url":"https://gameboost.com/call-of-duty-mobile/cp"}]},{"name":"Throne And Liberty","url":"https://gameboost.com/throne-and-liberty","slug":"throne-and-liberty","categories":[{"title":"Lucent","url":"https://gameboost.com/throne-and-liberty/lucent"},{"title":"Accounts","url":"https://gameboost.com/throne-and-liberty/accounts"}]},{"name":"Diablo Immortal","url":"https://gameboost.com/diablo-immortal","slug":"diablo-immortal","categories":[{"title":"Platinum","url":"https://gameboost.com/diablo-immortal/platinum"},{"title":"Accounts","url":"https://gameboost.com/diablo-immortal/accounts"}]},{"name":"Wow Hardcore","url":"https://gameboost.com/wow-hardcore","slug":"wow-hardcore","categories":[{"title":"Gold","url":"https://gameboost.com/wow-hardcore/gold"}]},{"name":"Trove Online","url":"https://gameboost.com/trove-online","slug":"trove-online","categories":[{"title":"Flux","url":"https://gameboost.com/trove-online/flux"}]},{"name":"Dofus","url":"https://gameboost.com/dofus","slug":"dofus","categories":[{"title":"Kamas","url":"https://gameboost.com/dofus/kamas"}]},{"name":"Wow Classic Era","url":"https://gameboost.com/wow-classic-era","slug":"wow-classic-era","categories":[{"title":"Gold","url":"https://gameboost.com/wow-classic-era/gold"},{"title":"Accounts","url":"https://gameboost.com/wow-classic-era/accounts"},{"title":"Items","url":"https://gameboost.com/wow-classic-era/items"}]},{"name":"Path Of Exile 2","url":"https://gameboost.com/path-of-exile-2","slug":"path-of-exile-2","categories":[{"title":"Items","url":"https://gameboost.com/path-of-exile-2/items"},{"title":"Orbs","url":"https://gameboost.com/path-of-exile-2/orbs"},{"title":"Accounts","url":"https://gameboost.com/path-of-exile-2/accounts"}]},{"name":"Marvel Rivals","url":"https://gameboost.com/marvel-rivals","slug":"marvel-rivals","categories":[{"title":"Boosting","url":"https://gameboost.com/marvel-rivals/boosting"},{"title":"Accounts","url":"https://gameboost.com/marvel-rivals/accounts"},{"title":"Lattices","url":"https://gameboost.com/marvel-rivals/top-up"}]},{"name":"Star Wars The Old Republic","url":"https://gameboost.com/star-wars-the-old-republic","slug":"star-wars-the-old-republic","categories":[{"title":"Credits","url":"https://gameboost.com/star-wars-the-old-republic/credits"}]},{"name":"Dark And Darker","url":"https://gameboost.com/dark-and-darker","slug":"dark-and-darker","categories":[{"title":"Gold","url":"https://gameboost.com/dark-and-darker/gold"},{"title":"Items","url":"https://gameboost.com/dark-and-darker/items"},{"title":"Accounts","url":"https://gameboost.com/dark-and-darker/accounts"}]},{"name":"Deadlock","url":"https://gameboost.com/deadlock","slug":"deadlock","categories":[{"title":"Accounts","url":"https://gameboost.com/deadlock/accounts"}]},{"name":"Fragpunk","url":"https://gameboost.com/fragpunk","slug":"fragpunk","categories":[{"title":"Accounts","url":"https://gameboost.com/fragpunk/accounts"}]},{"name":"Wuthering Waves","url":"https://gameboost.com/wuthering-waves","slug":"wuthering-waves","categories":[{"title":"Accounts","url":"https://gameboost.com/wuthering-waves/accounts"},{"title":"Lunite","url":"https://gameboost.com/wuthering-waves/top-up"}]},{"name":"Wow Mists Of Pandaria","url":"https://gameboost.com/wow-mists-of-pandaria","slug":"wow-mists-of-pandaria","categories":[{"title":"Items","url":"https://gameboost.com/wow-mists-of-pandaria/items"},{"title":"Gold","url":"https://gameboost.com/wow-mists-of-pandaria/gold"},{"title":"Accounts","url":"https://gameboost.com/wow-mists-of-pandaria/accounts"}]},{"name":"Dune Awakening","url":"https://gameboost.com/dune-awakening","slug":"dune-awakening","categories":[{"title":"Solari","url":"https://gameboost.com/dune-awakening/solari"},{"title":"Items","url":"https://gameboost.com/dune-awakening/items"}]},{"name":"99 Nights In The Forest","url":"https://gameboost.com/99-nights-in-the-forest","slug":"99-nights-in-the-forest","categories":[{"title":"Diamonds","url":"https://gameboost.com/99-nights-in-the-forest/diamonds"}]},{"name":"Fc 26","url":"https://gameboost.com/fc-26","slug":"fc-26","categories":[{"title":"Accounts","url":"https://gameboost.com/fc-26/accounts"},{"title":"Coins","url":"https://gameboost.com/fc-26/fc-coins"}]},{"name":"8 Ball Pool","url":"https://gameboost.com/8-ball-pool","slug":"8-ball-pool","categories":[{"title":"Accounts","url":"https://gameboost.com/8-ball-pool/accounts"},{"title":"Coins","url":"https://gameboost.com/8-ball-pool/coins"}]},{"name":"Borderlands 4","url":"https://gameboost.com/borderlands-4","slug":"borderlands-4","categories":[{"title":"Items","url":"https://gameboost.com/borderlands-4/items"},{"title":"Money","url":"https://gameboost.com/borderlands-4/money"},{"title":"Accounts","url":"https://gameboost.com/borderlands-4/accounts"}]},{"name":"Adopt Me","url":"https://gameboost.com/adopt-me","slug":"adopt-me","categories":[{"title":"Items","url":"https://gameboost.com/adopt-me/items"},{"title":"Accounts","url":"https://gameboost.com/adopt-me/accounts"}]},{"name":"Blox Fruits","url":"https://gameboost.com/blox-fruits","slug":"blox-fruits","categories":[{"title":"Accounts","url":"https://gameboost.com/blox-fruits/accounts"},{"title":"Items","url":"https://gameboost.com/blox-fruits/items"}]},{"name":"Type Soul","url":"https://gameboost.com/type-soul","slug":"type-soul","categories":[{"title":"Items","url":"https://gameboost.com/type-soul/items"}]},{"name":"2XKO","url":"https://gameboost.com/2xko","slug":"2xko","categories":[{"title":"Accounts","url":"https://gameboost.com/2xko/accounts"}]},{"name":"Murder Mystery 2","url":"https://gameboost.com/murder-mystery-2","slug":"murder-mystery-2","categories":[{"title":"Items","url":"https://gameboost.com/murder-mystery-2/items"}]},{"name":"Blade Ball","url":"https://gameboost.com/blade-ball","slug":"blade-ball","categories":[{"title":"Items","url":"https://gameboost.com/blade-ball/items"},{"title":"Tokens","url":"https://gameboost.com/blade-ball/tokens"}]},{"name":"Fisch","url":"https://gameboost.com/fisch","slug":"fisch","categories":[{"title":"Items","url":"https://gameboost.com/fisch/items"},{"title":"Money","url":"https://gameboost.com/fisch/money"},{"title":"Accounts","url":"https://gameboost.com/fisch/accounts"}]},{"name":"Arknights","url":"https://gameboost.com/arknights","slug":"arknights","categories":[{"title":"Accounts","url":"https://gameboost.com/arknights/accounts"}]},{"name":"Toilet Tower Defense","url":"https://gameboost.com/toilet-tower-defense","slug":"toilet-tower-defense","categories":[{"title":"Gems","url":"https://gameboost.com/toilet-tower-defense/gems"}]},{"name":"Star Citizen","url":"https://gameboost.com/star-citizen","slug":"star-citizen","categories":[{"title":"aUEC","url":"https://gameboost.com/star-citizen/auec"}]},{"name":"Pet Simulator 99","url":"https://gameboost.com/pet-simulator-99","slug":"pet-simulator-99","categories":[{"title":"Gems","url":"https://gameboost.com/pet-simulator-99/gems"},{"title":"Items","url":"https://gameboost.com/pet-simulator-99/items"}]},{"name":"Mortal Online 2","url":"https://gameboost.com/mortal-online-2","slug":"mortal-online-2","categories":[{"title":"Gold","url":"https://gameboost.com/mortal-online-2/gold"}]},{"name":"Pets Go","url":"https://gameboost.com/pets-go","slug":"pets-go","categories":[{"title":"Diamonds","url":"https://gameboost.com/pets-go/diamonds"}]},{"name":"Battlefield","url":"https://gameboost.com/battlefield","slug":"battlefield","categories":[{"title":"Accounts","url":"https://gameboost.com/battlefield/accounts"},{"title":"Items","url":"https://gameboost.com/battlefield/items"}]},{"name":"Efootball","url":"https://gameboost.com/efootball","slug":"efootball","categories":[{"title":"Accounts","url":"https://gameboost.com/efootball/accounts"}]},{"name":"Pokemon Tcg Pocket","url":"https://gameboost.com/pokemon-tcg-pocket","slug":"pokemon-tcg-pocket","categories":[{"title":"Accounts","url":"https://gameboost.com/pokemon-tcg-pocket/accounts"}]},{"name":"Bubble Gum Simulator Infinity","url":"https://gameboost.com/bubble-gum-simulator-infinity","slug":"bubble-gum-simulator-infinity","categories":[{"title":"Items","url":"https://gameboost.com/bubble-gum-simulator-infinity/items"}]},{"name":"Jailbreak","url":"https://gameboost.com/jailbreak","slug":"jailbreak","categories":[{"title":"Items","url":"https://gameboost.com/jailbreak/items"},{"title":"Accounts","url":"https://gameboost.com/jailbreak/accounts"}]},{"name":"Garden Tower Defense","url":"https://gameboost.com/garden-tower-defense","slug":"garden-tower-defense","categories":[{"title":"Items","url":"https://gameboost.com/garden-tower-defense/items"}]},{"name":"Anime Last Stand","url":"https://gameboost.com/anime-last-stand","slug":"anime-last-stand","categories":[{"title":"Items","url":"https://gameboost.com/anime-last-stand/items"}]},{"name":"Anime Vanguards","url":"https://gameboost.com/anime-vanguards","slug":"anime-vanguards","categories":[{"title":"Items","url":"https://gameboost.com/anime-vanguards/items"},{"title":"Accounts","url":"https://gameboost.com/anime-vanguards/accounts"}]},{"name":"Roblox Rivals","url":"https://gameboost.com/roblox-rivals","slug":"roblox-rivals","categories":[{"title":"Items","url":"https://gameboost.com/roblox-rivals/items"}]},{"name":"Build A Zoo","url":"https://gameboost.com/build-a-zoo","slug":"build-a-zoo","categories":[{"title":"Items","url":"https://gameboost.com/build-a-zoo/items"}]},{"name":"Ink Game","url":"https://gameboost.com/ink-game","slug":"ink-game","categories":[{"title":"Items","url":"https://gameboost.com/ink-game/items"}]},{"name":"Blue Lock Rivals","url":"https://gameboost.com/blue-lock-rivals","slug":"blue-lock-rivals","categories":[{"title":"Items","url":"https://gameboost.com/blue-lock-rivals/items"}]},{"name":"Guild Wars 2","url":"https://gameboost.com/guild-wars-2","slug":"guild-wars-2","categories":[{"title":"Gold","url":"https://gameboost.com/guild-wars-2/gold"}]},{"name":"Dead By Daylight","url":"https://gameboost.com/dead-by-daylight","slug":"dead-by-daylight","categories":[{"title":"Accounts","url":"https://gameboost.com/dead-by-daylight/accounts"},{"title":"Auric Cells","url":"https://gameboost.com/dead-by-daylight/auric-cells"}]},{"name":"Uma Musume Pretty Derby","url":"https://gameboost.com/uma-musume-pretty-derby","slug":"uma-musume-pretty-derby","categories":[{"title":"Accounts","url":"https://gameboost.com/uma-musume-pretty-derby/accounts"}]},{"name":"Elden Ring","url":"https://gameboost.com/elden-ring","slug":"elden-ring","categories":[{"title":"Runes","url":"https://gameboost.com/elden-ring/runes"},{"title":"Items","url":"https://gameboost.com/elden-ring/items"},{"title":"Accounts","url":"https://gameboost.com/elden-ring/accounts"}]},{"name":"Eve Online","url":"https://gameboost.com/eve-online","slug":"eve-online","categories":[{"title":"ISK","url":"https://gameboost.com/eve-online/isk"}]},{"name":"Eve Echoes","url":"https://gameboost.com/eve-echoes","slug":"eve-echoes","categories":[{"title":"ISK","url":"https://gameboost.com/eve-echoes/isk"}]},{"name":"Donutsmp","url":"https://gameboost.com/donutsmp","slug":"donutsmp","categories":[{"title":"Money","url":"https://gameboost.com/donutsmp/money"},{"title":"Accounts","url":"https://gameboost.com/donutsmp/accounts"}]},{"name":"Creatures Of Sonaria","url":"https://gameboost.com/creatures-of-sonaria","slug":"creatures-of-sonaria","categories":[{"title":"Mushrooms","url":"https://gameboost.com/creatures-of-sonaria/mushrooms"},{"title":"Items","url":"https://gameboost.com/creatures-of-sonaria/items"}]},{"name":"Honor Of Kings","url":"https://gameboost.com/honor-of-kings","slug":"honor-of-kings","categories":[{"title":"Tokens","url":"https://gameboost.com/honor-of-kings/tokens"}]},{"name":"Pokemon Go Stardust","url":"https://gameboost.com/pokemon-go-stardust","slug":"pokemon-go-stardust","categories":[{"title":"Stardust","url":"https://gameboost.com/pokemon-go-stardust/stardust"}]},{"name":"Temtem","url":"https://gameboost.com/temtem","slug":"temtem","categories":[]},{"name":"Torchlight Infinite","url":"https://gameboost.com/torchlight-infinite","slug":"torchlight-infinite","categories":[{"title":"Flame Elementium","url":"https://gameboost.com/torchlight-infinite/flame-elementium"}]},{"name":"Blade Soul Neo","url":"https://gameboost.com/blade-soul-neo","slug":"blade-soul-neo","categories":[{"title":"Divine Gems","url":"https://gameboost.com/blade-soul-neo/divine-gems"}]},{"name":"Runescape Bonds","url":"https://gameboost.com/runescape-bonds","slug":"runescape-bonds","categories":[{"title":"Bonds","url":"https://gameboost.com/runescape-bonds/bonds"}]},{"name":"Arc Raiders","url":"https://gameboost.com/arc-raiders","slug":"arc-raiders","categories":[{"title":"Items","url":"https://gameboost.com/arc-raiders/items"},{"title":"Coins","url":"https://gameboost.com/arc-raiders/coins"},{"title":"Accounts","url":"https://gameboost.com/arc-raiders/accounts"}]},{"name":"Goddess Of Victory Nikke","url":"https://gameboost.com/goddess-of-victory-nikke","slug":"goddess-of-victory-nikke","categories":[{"title":"Accounts","url":"https://gameboost.com/goddess-of-victory-nikke/accounts"}]},{"name":"Epic Seven","url":"https://gameboost.com/epic-seven","slug":"epic-seven","categories":[{"title":"Accounts","url":"https://gameboost.com/epic-seven/accounts"}]},{"name":"Identity V","url":"https://gameboost.com/identity-v","slug":"identity-v","categories":[{"title":"Echoes","url":"https://gameboost.com/identity-v/echoes"},{"title":"Accounts","url":"https://gameboost.com/identity-v/accounts"}]},{"name":"Blood Strike","url":"https://gameboost.com/blood-strike","slug":"blood-strike","categories":[{"title":"Gold","url":"https://gameboost.com/blood-strike/gold"},{"title":"Accounts","url":"https://gameboost.com/blood-strike/accounts"}]},{"name":"Whiteout Survival","url":"https://gameboost.com/whiteout-survival","slug":"whiteout-survival","categories":[{"title":"Frost Stars","url":"https://gameboost.com/whiteout-survival/frost-stars"},{"title":"Accounts","url":"https://gameboost.com/whiteout-survival/accounts"}]},{"name":"Super Sus","url":"https://gameboost.com/super-sus","slug":"super-sus","categories":[{"title":"Goldstars","url":"https://gameboost.com/super-sus/goldstars"}]},{"name":"Delta Force","url":"https://gameboost.com/delta-force","slug":"delta-force","categories":[{"title":"Delta Coins","url":"https://gameboost.com/delta-force/delta-coins"},{"title":"Accounts","url":"https://gameboost.com/delta-force/accounts"}]},{"name":"Bleach Brave Souls","url":"https://gameboost.com/bleach-brave-souls","slug":"bleach-brave-souls","categories":[{"title":"Accounts","url":"https://gameboost.com/bleach-brave-souls/accounts"}]},{"name":"Cookie Run Kingdom","url":"https://gameboost.com/cookie-run-kingdom","slug":"cookie-run-kingdom","categories":[{"title":"Accounts","url":"https://gameboost.com/cookie-run-kingdom/accounts"}]},{"name":"Jujutsu Kaisen Phantom Parade","url":"https://gameboost.com/jujutsu-kaisen-phantom-parade","slug":"jujutsu-kaisen-phantom-parade","categories":[{"title":"Accounts","url":"https://gameboost.com/jujutsu-kaisen-phantom-parade/accounts"}]},{"name":"The Seven Deadly Sins","url":"https://gameboost.com/the-seven-deadly-sins","slug":"the-seven-deadly-sins","categories":[{"title":"Accounts","url":"https://gameboost.com/the-seven-deadly-sins/accounts"}]},{"name":"Dragon Ball Z Dokkan Battle","url":"https://gameboost.com/dragon-ball-z-dokkan-battle","slug":"dragon-ball-z-dokkan-battle","categories":[{"title":"Accounts","url":"https://gameboost.com/dragon-ball-z-dokkan-battle/accounts"}]},{"name":"Sea Of Thieves","url":"https://gameboost.com/sea-of-thieves","slug":"sea-of-thieves","categories":[{"title":"Accounts","url":"https://gameboost.com/sea-of-thieves/accounts"}]},{"name":"Yu Gi Oh Master Duel","url":"https://gameboost.com/yu-gi-oh-master-duel","slug":"yu-gi-oh-master-duel","categories":[{"title":"Accounts","url":"https://gameboost.com/yu-gi-oh-master-duel/accounts"}]},{"name":"Ea Sports Fc Mobile","url":"https://gameboost.com/ea-sports-fc-mobile","slug":"ea-sports-fc-mobile","categories":[{"title":"Accounts","url":"https://gameboost.com/ea-sports-fc-mobile/accounts"}]},{"name":"All Star Tower Defense X","url":"https://gameboost.com/all-star-tower-defense-x","slug":"all-star-tower-defense-x","categories":[{"title":"Accounts","url":"https://gameboost.com/all-star-tower-defense-x/accounts"}]},{"name":"Watcher Of Realms","url":"https://gameboost.com/watcher-of-realms","slug":"watcher-of-realms","categories":[{"title":"Accounts","url":"https://gameboost.com/watcher-of-realms/accounts"}]},{"name":"Where Winds Meet","url":"https://gameboost.com/where-winds-meet","slug":"where-winds-meet","categories":[{"title":"Accounts","url":"https://gameboost.com/where-winds-meet/accounts"}]},{"name":"Fish It","url":"https://gameboost.com/fish-it","slug":"fish-it","categories":[{"title":"Items","url":"https://gameboost.com/fish-it/items"}]},{"name":"Ayakashi Rumble","url":"https://gameboost.com/ayakashi-rumble","slug":"ayakashi-rumble","categories":[{"title":"Accounts","url":"https://gameboost.com/ayakashi-rumble/accounts"}]},{"name":"Fate Grand Order","url":"https://gameboost.com/fate-grand-order","slug":"fate-grand-order","categories":[{"title":"Accounts","url":"https://gameboost.com/fate-grand-order/accounts"}]},{"name":"Stella Sora","url":"https://gameboost.com/stella-sora","slug":"stella-sora","categories":[{"title":"Accounts","url":"https://gameboost.com/stella-sora/accounts"}]},{"name":"The Forge","url":"https://gameboost.com/the-forge","slug":"the-forge","categories":[{"title":"Accounts","url":"https://gameboost.com/the-forge/accounts"},{"title":"Items","url":"https://gameboost.com/the-forge/items"}]},{"name":"Marvel Contest Of Champions","url":"https://gameboost.com/marvel-contest-of-champions","slug":"marvel-contest-of-champions","categories":[{"title":"Accounts","url":"https://gameboost.com/marvel-contest-of-champions/accounts"}]},{"name":"World Of Warships","url":"https://gameboost.com/world-of-warships","slug":"world-of-warships","categories":[{"title":"Accounts","url":"https://gameboost.com/world-of-warships/accounts"}]},{"name":"Volleyball Legends","url":"https://gameboost.com/volleyball-legends","slug":"volleyball-legends","categories":[{"title":"Accounts","url":"https://gameboost.com/volleyball-legends/accounts"},{"title":"Items","url":"https://gameboost.com/volleyball-legends/items"}]},{"name":"Metin 2","url":"https://gameboost.com/metin-2","slug":"metin-2","categories":[{"title":"Accounts","url":"https://gameboost.com/metin-2/accounts"}]},{"name":"Escape Tsunami For Brainrots","url":"https://gameboost.com/escape-tsunami-for-brainrots","slug":"escape-tsunami-for-brainrots","categories":[{"title":"Items","url":"https://gameboost.com/escape-tsunami-for-brainrots/items"}]},{"name":"Monopoly Go","url":"https://gameboost.com/monopoly-go","slug":"monopoly-go","categories":[{"title":"Items","url":"https://gameboost.com/monopoly-go/items"}]},{"name":"Last War Survival","url":"https://gameboost.com/last-war-survival","slug":"last-war-survival","categories":[{"title":"Accounts","url":"https://gameboost.com/last-war-survival/accounts"}]},{"name":"Wartune Ultra","url":"https://gameboost.com/wartune-ultra","slug":"wartune-ultra","categories":[{"title":"Accounts","url":"https://gameboost.com/wartune-ultra/accounts"}]},{"name":"Zula","url":"https://gameboost.com/zula","slug":"zula","categories":[{"title":"Accounts","url":"https://gameboost.com/zula/accounts"}]},{"name":"Car Parking Multiplayer","url":"https://gameboost.com/car-parking-multiplayer","slug":"car-parking-multiplayer","categories":[{"title":"Accounts","url":"https://gameboost.com/car-parking-multiplayer/accounts"}]},{"name":"Darkorbit","url":"https://gameboost.com/darkorbit","slug":"darkorbit","categories":[{"title":"Accounts","url":"https://gameboost.com/darkorbit/accounts"}]},{"name":"Knight Online","url":"https://gameboost.com/knight-online","slug":"knight-online","categories":[{"title":"Items","url":"https://gameboost.com/knight-online/items"},{"title":"Gold Bars","url":"https://gameboost.com/knight-online/gold-bars"},{"title":"Accounts","url":"https://gameboost.com/knight-online/accounts"}]},{"name":"Tap Simulator","url":"https://gameboost.com/tap-simulator","slug":"tap-simulator","categories":[{"title":"Items","url":"https://gameboost.com/tap-simulator/items"}]},{"name":"Bee Swarm Simulator","url":"https://gameboost.com/bee-swarm-simulator","slug":"bee-swarm-simulator","categories":[{"title":"Items","url":"https://gameboost.com/bee-swarm-simulator/items"},{"title":"Accounts","url":"https://gameboost.com/bee-swarm-simulator/accounts"}]},{"name":"Among Us","url":"https://gameboost.com/among-us","slug":"among-us","categories":[]},{"name":"Animal Crossing New Horizons","url":"https://gameboost.com/animal-crossing-new-horizons","slug":"animal-crossing-new-horizons","categories":[]},{"name":"Arena Of Valor","url":"https://gameboost.com/arena-of-valor","slug":"arena-of-valor","categories":[]},{"name":"Assassins Creed Valhalla","url":"https://gameboost.com/assassins-creed-valhalla","slug":"assassins-creed-valhalla","categories":[]},{"name":"Back 4 Blood","url":"https://gameboost.com/back-4-blood","slug":"back-4-blood","categories":[]},{"name":"Battlefield 2042","url":"https://gameboost.com/battlefield-2042","slug":"battlefield-2042","categories":[]},{"name":"Brawlhalla","url":"https://gameboost.com/brawlhalla","slug":"brawlhalla","categories":[]},{"name":"Chess","url":"https://gameboost.com/chess","slug":"chess","categories":[]},{"name":"Fc 24","url":"https://gameboost.com/fc-24","slug":"fc-24","categories":[]},{"name":"Gta 6","url":"https://gameboost.com/gta-6","slug":"gta-6","categories":[]},{"name":"Monster Strike","url":"https://gameboost.com/monster-strike","slug":"monster-strike","categories":[]},{"name":"Professional Baseball Spirits A","url":"https://gameboost.com/professional-baseball-spirits-a","slug":"professional-baseball-spirits-a","categories":[]},{"name":"Steam","url":"https://gameboost.com/steam","slug":"steam","categories":[]},{"name":"Wow Cataclysm","url":"https://gameboost.com/wow-cataclysm","slug":"wow-cataclysm","categories":[]},{"name":"Xbox","url":"https://gameboost.com/xbox","slug":"xbox","categories":[]},{"name":"Last Island of Survival","url":"https://gameboost.com/last-island-of-survival","slug":"last-island-of-survival","categories":[{"title":"Accounts","url":"https://gameboost.com/last-island-of-survival/accounts"}]},{"name":"Royale Online ","url":"https://gameboost.com/royale-online/","slug":"royale-online","categories":[{"title":"Accounts","url":"https://gameboost.com/royale-online/accounts"}]},{"name":"Standoff 2","url":"https://gameboost.com/standoff-2","slug":"standoff-2","categories":[{"title":"Accounts","url":"https://gameboost.com/standoff-2/accounts"},{"title":"Gold","url":"https://gameboost.com/standoff-2/gold"}]},{"name":"WolfTeam","url":"https://gameboost.com/wolfteam","slug":"wolfteam","categories":[{"title":"Accounts","url":"https://gameboost.com/wolfteam/accounts"},{"title":"Cash","url":"https://gameboost.com/wolfteam/cash"}]},{"name":"Pokemon Legends: Z-A","url":"https://gameboost.com/pokemon-legends-z-a","slug":"pokemon-legends-z-a","categories":[{"title":"Items","url":"https://gameboost.com/pokemon-legends-z-a/items"}]},{"name":"Universal Tower Defense","url":"https://gameboost.com/universal-tower-defense","slug":"universal-tower-defense","categories":[{"title":"Items","url":"https://gameboost.com/universal-tower-defense/items"}]},{"name":"Anime Fighting Simulator: Endless","url":"https://gameboost.com/anime-fighting-simulator-endless/items","slug":"anime-fighting-simulator-endless","categories":[{"title":"Items","url":"https://gameboost.com/anime-fighting-simulator-endless/items"}]},{"name":"Attack on Titan Revolution","url":"https://gameboost.com/attack-on-titan-revolution","slug":"attack-on-titan-revolution","categories":[{"title":"Items","url":"https://gameboost.com/attack-on-titan-revolution/items"}]},{"name":"Hypershot","url":"https://gameboost.com/hypershot","slug":"hypershot","categories":[{"title":"Items","url":"https://gameboost.com/hypershot/items"}]},{"name":"Arknights Endfield","url":"https://gameboost.com/arknights-endfield","slug":"arknights-endfield","categories":[{"title":"Accounts","url":"https://gameboost.com/arknights-endfield/accounts"}]}]'), c = class c {
    constructor() {
      this.games = _, this.currentLayout = null, this.resizeTimeout = null, this.eventHandlers = [], this.resizeHandler = null, this.gamesByUrl = /* @__PURE__ */ new Map(), this.gamesBySlug = /* @__PURE__ */ new Map(), this.gameIndices = /* @__PURE__ */ new Map(), this.games.forEach((t, e) => {
        const o = this.normalizeHref(t.url);
        this.gamesByUrl.set(o, t), t.slug && this.gamesBySlug.set(t.slug, t), this.gameIndices.set(t, e);
      }), this.addStyles(), this.enhanceGameCards(), this.transformPopularGamesGrid(), this.setupResizeListener();
    }
    addStyles() {
      if (document.getElementById(c.STYLES_MARKER))
        return;
      const t = document.createElement("style");
      t.id = c.STYLES_MARKER, t.textContent = M, document.head.appendChild(t);
    }
    enhanceGameCards() {
      document.querySelectorAll(
        `.game-card-group:not([${c.ENHANCED_MARKER}]):not(.game-key-group)`
      ).forEach((e) => {
        const o = e, s = this.findGameByHref(o.href), a = (s == null ? void 0 : s.name) || o.href;
        this.addTrackedEventListener(e, "click", () => g("exp_hp_game_card_click", a, "click", "Popular Games")), s && s.categories && s.categories.length > 0 && (this.addCategoryLinks(e, s), this.addTitle(e, s.name), e.setAttribute(c.ENHANCED_MARKER, "true"));
      });
    }
    addTitle(t, e) {
      const o = (
        /* HTML */
        `<a href="${t.href}" class="game-categories-title">${e}</a>`
      );
      t.insertAdjacentHTML("afterend", o);
      const s = t.nextElementSibling;
      s && s.classList.contains("game-categories-title") && this.addTrackedEventListener(s, "click", () => g("exp_hp_game_title_click", e, "click", "Popular Games"));
    }
    addCategoryLinks(t, e) {
      const o = e.categories || [];
      if (o.length > 0) {
        const s = (
          /* HTML */
          `<div class="game-categories">${o.map((n) => this.createCategoryLink(n.title, n.url)).join("")}</div>`
        );
        t.insertAdjacentHTML("afterend", s);
        const a = t.nextElementSibling;
        a && a.classList.contains("game-categories") && a.querySelectorAll(".category-link").forEach((r) => {
          const l = r.textContent || "Unknown";
          this.addTrackedEventListener(r, "click", () => g("exp_hp_game_category_click", l, "click", e.name));
        });
      }
    }
    createCategoryLink(t, e) {
      return (
        /* HTML */
        `<a href="${e}" target="_blank" rel="noopener noreferrer" class="category-link">${t}</a>`
      );
    }
    transformPopularGamesGrid() {
      const t = Array.from(document.querySelectorAll("[aria-roledescription='slide']:has(.game-card-group):not(:has(.game-key-group))"));
      if (t.length === 0) return;
      const e = Array.from(
        new Set(t.map((s) => s.parentElement).filter(Boolean))
      ), o = window.innerWidth < c.MOBILE_BREAKPOINT;
      e.forEach((s) => {
        var l, u;
        if (s.hasAttribute(c.GRID_MARKER)) return;
        const a = Array.from(
          s.querySelectorAll("[aria-roledescription='slide']:has(.game-card-group):not(:has(.game-key-group))")
        );
        if (a.length === 0) return;
        const n = this.orderSlides(a), r = n.map((A) => A.slide);
        s.setAttribute(c.GRID_MARKER, "true"), o ? (this.splitSlidersForMobile(s, n), this.currentLayout = "mobile") : (s.classList.add("game-grid-container"), (u = (l = s.closest('[aria-roledescription="carousel"]')) == null ? void 0 : l.parentElement) == null || u.classList.add("crs-popular-games"), this.applyGridVisibility(r, c.GRID_BATCH_SIZE), this.attachLoadMore(s, r), this.currentLayout = "desktop");
      });
    }
    orderSlides(t) {
      const e = t.map((o, s) => {
        const a = o.querySelector(".game-card-group:not(.game-key-group)"), n = (a == null ? void 0 : a.href) || "", r = n ? this.findGameByHref(n) : void 0, l = r ? this.gameIndices.get(r) ?? Number.POSITIVE_INFINITY : Number.POSITIVE_INFINITY, u = (r == null ? void 0 : r.priority) ?? 3;
        return { slide: o, order: l, priority: u, originalIndex: s };
      });
      return e.sort((o, s) => o.order === s.order ? o.originalIndex - s.originalIndex : o.order - s.order), e.forEach(({ slide: o }) => {
        var s;
        (s = o.parentElement) == null || s.appendChild(o);
      }), e;
    }
    applyGridVisibility(t, e) {
      t.forEach((o, s) => {
        const a = s >= e;
        o.classList.toggle("game-grid-hidden", a);
      });
    }
    attachLoadMore(t, e) {
      var n;
      const o = t.nextElementSibling;
      if (o && o.getAttribute(c.GRID_BUTTON_ATTR) === "true")
        return;
      const s = document.createElement("button");
      s.className = "inline-flex items-center justify-center transition-colors focus:outline focus:outline-offset-2 focus-visible:outline outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden font-medium active:translate-y-px whitespace-nowrap bg-primary hover:bg-primary-hover text-primary-foreground shadow-sm focus:outline-primary py-2 text-sm rounded-full px-6 h-9 sm:h-10 game-grid-load-more", s.setAttribute(c.GRID_BUTTON_ATTR, "true"), s.type = "button", s.textContent = "Load more";
      const a = () => {
        g("exp_hp_game_load_more_click", "Load more", "click", "Popular Games");
        const r = e.filter((u) => u.classList.contains("game-grid-hidden"));
        if (r.length === 0) {
          this.removeTrackedEventListener(s, "click", a), s.remove();
          return;
        }
        r.slice(0, c.GRID_BATCH_SIZE).forEach((u) => {
          u.classList.remove("game-grid-hidden");
        }), e.filter((u) => u.classList.contains("game-grid-hidden")).length === 0 && (this.removeTrackedEventListener(s, "click", a), s.remove());
      };
      this.addTrackedEventListener(s, "click", a), (n = t.parentElement) == null || n.insertBefore(s, t.nextSibling);
    }
    splitSlidersForMobile(t, e) {
      var A;
      const o = e.filter((m) => m.priority === 1), s = e.filter((m) => m.priority === 2), a = e.filter((m) => m.priority !== 1 && m.priority !== 2), n = [], r = [];
      a.forEach((m, d) => {
        d % 2 === 0 ? n.push(m) : r.push(m);
      });
      const l = [...o, ...n], u = [...s, ...r];
      if (e.forEach(({ slide: m }) => {
        l.some((f) => f.slide === m) || m.remove();
      }), u.length > 0) {
        const m = t.closest('[aria-roledescription="carousel"]'), d = document.createElement("div");
        d.className = "game-scroll-snap-container game-slider-split", d.setAttribute("data-gridified", "true");
        const f = document.createElement("div");
        if (f.className = "game-slider-split-wrapper", f.appendChild(d), u.forEach(({ slide: h }) => {
          h.classList.add("game-scroll-snap-slide"), d.appendChild(h);
        }), m) {
          m.after(f), (A = m.parentElement) == null || A.classList.add("crs-popular-games");
          const h = document.createElement("div");
          h.className = "game-slider-split-nav";
          const T = "inline-flex items-center justify-center transition-colors focus:outline focus:outline-offset-2 focus-visible:outline outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden font-medium whitespace-nowrap bg-secondary hover:bg-secondary-hover text-secondary-foreground ring-1 ring-secondary-ring shadow-sm focus:outline-secondary text-sm touch-manipulation absolute h-8 w-8 rounded-full p-0 top-1/2 -translate-y-1/2 active:-translate-y-[calc(50%-1px)]", y = document.createElement("button");
          y.type = "button", y.className = `${T} -left-2 sm:-left-4`, y.innerHTML = '<i class="text-current fa-solid fa-angle-left"></i><span class="sr-only">Previous Slide</span>';
          const W = (k) => {
            g("exp_hp_game_slider_prev", "Previous Button", "click", "Popular Games"), k.preventDefault(), k.stopPropagation();
            const x = d.querySelector("[aria-roledescription='slide']");
            if (x) {
              const L = x.offsetWidth;
              d.scroll({
                left: d.scrollLeft - (L + 20),
                behavior: "smooth"
              });
            }
          };
          this.addTrackedEventListener(y, "click", W), h.appendChild(y);
          const w = document.createElement("button");
          w.type = "button", w.className = `${T} -right-2 sm:-right-4`, w.innerHTML = '<i class="text-current fa-solid fa-angle-right"></i><span class="sr-only">Next Slide</span>';
          const F = (k) => {
            g("exp_hp_game_slider_next", "Next Button", "click", "Popular Games"), k.preventDefault(), k.stopPropagation();
            const x = d.querySelector("[aria-roledescription='slide']");
            if (x) {
              const L = x.offsetWidth;
              d.scroll({
                left: d.scrollLeft + (L + 20),
                behavior: "smooth"
              });
            }
          };
          this.addTrackedEventListener(w, "click", F), h.appendChild(w), f.appendChild(h);
        }
      }
    }
    findGameByHref(t) {
      const e = this.normalizeHref(t), o = this.gamesByUrl.get(e);
      if (o) return o;
      const s = this.extractSlug(e);
      if (s)
        return this.gamesBySlug.get(s);
    }
    normalizeHref(t) {
      try {
        const e = new URL(t, window.location.origin);
        return e.origin + e.pathname.replace(/\/$/, "");
      } catch {
        return t.replace(/\/$/, "");
      }
    }
    extractSlug(t) {
      try {
        return new URL(t, window.location.origin).pathname.replace(/^\//, "").replace(/\/$/, "").split("/")[0] || void 0;
      } catch {
        return;
      }
    }
    setupResizeListener() {
      this.resizeHandler = () => {
        this.resizeTimeout !== null && clearTimeout(this.resizeTimeout), this.resizeTimeout = window.setTimeout(() => {
          this.handleResize(), this.resizeTimeout = null;
        }, c.RESIZE_DEBOUNCE_MS);
      }, window.addEventListener("resize", this.resizeHandler);
    }
    handleResize() {
      const e = window.innerWidth < c.MOBILE_BREAKPOINT ? "mobile" : "desktop";
      this.currentLayout === e || this.currentLayout === null || this.switchLayout(e);
    }
    switchLayout(t) {
      Array.from(
        document.querySelectorAll(`[${c.GRID_MARKER}]`)
      ).forEach((o) => {
        if (Array.from(
          o.querySelectorAll("[aria-roledescription='slide']")
        ).length === 0) return;
        this.currentLayout === "desktop" ? this.cleanupDesktopLayout(o) : this.currentLayout === "mobile" && this.cleanupMobileLayout(o);
        const a = this.collectAllSlides(o), n = this.orderSlides(a), r = n.map((l) => l.slide);
        t === "mobile" ? this.splitSlidersForMobile(o, n) : (o.classList.add("game-grid-container"), this.applyGridVisibility(r, c.GRID_BATCH_SIZE), this.attachLoadMore(o, r));
      }), this.currentLayout = t;
    }
    cleanupDesktopLayout(t) {
      t.classList.remove("game-grid-container");
      const e = t.nextElementSibling;
      e && e.getAttribute(c.GRID_BUTTON_ATTR) === "true" && e.remove(), t.querySelectorAll("[aria-roledescription='slide']").forEach((s) => {
        s.classList.remove("game-grid-hidden");
      });
    }
    cleanupMobileLayout(t) {
      var o, s;
      const e = t.closest('[aria-roledescription="carousel"]');
      if (e) {
        let a = e.nextElementSibling;
        for (; a; ) {
          const n = (o = a.classList) != null && o.contains("game-slider-split") ? a : a.querySelector(".game-slider-split");
          if (n) {
            Array.from(
              n.querySelectorAll("[aria-roledescription='slide']")
            ).forEach((l) => {
              l.classList.remove("game-scroll-snap-slide"), t.appendChild(l);
            }), a.remove();
            break;
          } else if ((s = a.classList) != null && s.contains("game-slider-split-nav")) {
            a.remove();
            break;
          }
          a = a.nextElementSibling;
        }
      }
    }
    collectAllSlides(t) {
      var s, a;
      const e = Array.from(
        t.querySelectorAll("[aria-roledescription='slide']")
      ), o = t.closest('[aria-roledescription="carousel"]');
      if (o) {
        (s = o.parentElement) == null || s.classList.add("crs-popular-games");
        let n = o.nextElementSibling;
        for (; n; ) {
          const r = (a = n.classList) != null && a.contains("game-slider-split") ? n : n.querySelector(".game-slider-split");
          if (r) {
            const l = Array.from(
              r.querySelectorAll("[aria-roledescription='slide']")
            );
            e.push(...l);
            break;
          }
          n = n.nextElementSibling;
        }
      }
      return e;
    }
    addTrackedEventListener(t, e, o) {
      t.addEventListener(e, o), this.eventHandlers.push({ element: t, event: e, handler: o });
    }
    removeTrackedEventListener(t, e, o) {
      t.removeEventListener(e, o);
      const s = this.eventHandlers.findIndex(
        (a) => a.element === t && a.event === e && a.handler === o
      );
      s !== -1 && this.eventHandlers.splice(s, 1);
    }
    cleanup() {
      this.eventHandlers.forEach(({ element: t, event: e, handler: o }) => {
        t.removeEventListener(e, o);
      }), this.eventHandlers = [], this.resizeHandler && (window.removeEventListener("resize", this.resizeHandler), this.resizeHandler = null), this.resizeTimeout !== null && (clearTimeout(this.resizeTimeout), this.resizeTimeout = null);
    }
  };
  c.STYLES_MARKER = "game-cards-styles-injected", c.ENHANCED_MARKER = "data-categories-enhanced", c.GRID_MARKER = "data-gridified", c.GRID_BUTTON_ATTR = "data-grid-button", c.GRID_BATCH_SIZE = 12, c.MOBILE_BREAKPOINT = 768, c.RESIZE_DEBOUNCE_MS = 250;
  let S = c;
  const j = [
    {
      name: "ARC Raiders (Steam)",
      url: "https://gameboost.com/arc-raiders-steam-00-38620",
      coverImage: "https://cdn.gameboost.com/igdb/covers/185258/co9rk1.jpg",
      coverSrcset: "https://gameboost.com/cdn-cgi/image/width=190,height=266/https://cdn.gameboost.com/igdb/covers/185258/co9rk1.jpg?v=3 190w, https://gameboost.com/cdn-cgi/image/width=354,height=473/https://cdn.gameboost.com/igdb/covers/185258/co9rk1.jpg?v=3 354w",
      region: "Global",
      isRegionDanger: !0,
      platform: "Steam",
      platformIcon: "https://cdn.gameboost.com/static/game-keys/drm/steam.svg",
      price: { eur: "€27,62", usd: "$32.43" },
      originalPrice: { eur: "€39,99", usd: "$46.95" },
      discount: "-31%"
    },
    {
      name: "Battlefield 6 (PC) - EA App Key - GLOBAL",
      url: "https://gameboost.com/battlefield-6-pc-ea-app-key-global-00-37814",
      coverImage: "https://cdn.gameboost.com/igdb/covers/317407/coa5zt.jpg",
      coverSrcset: "https://gameboost.com/cdn-cgi/image/width=190,height=266/https://cdn.gameboost.com/igdb/covers/317407/coa5zt.jpg?v=3 190w, https://gameboost.com/cdn-cgi/image/width=354,height=473/https://cdn.gameboost.com/igdb/covers/317407/coa5zt.jpg?v=3 354w",
      region: "Global",
      platform: "EA Launcher",
      platformIcon: "https://cdn.gameboost.com/static/game-keys/drm/ea-app.svg",
      price: { eur: "€55,86", usd: "$65.57" },
      originalPrice: { eur: "€69,99", usd: "$82.17" },
      discount: "-20%"
    },
    {
      name: "Clair Obscur: Expedition 33 (Steam)",
      url: "https://gameboost.com/clair-obscur-expedition-33-steam-00-17624",
      coverImage: "https://cdn.gameboost.com/igdb/covers/305152/co9gam.jpg",
      coverSrcset: "https://gameboost.com/cdn-cgi/image/width=190,height=266/https://cdn.gameboost.com/igdb/covers/305152/co9gam.jpg?v=3 190w, https://gameboost.com/cdn-cgi/image/width=354,height=473/https://cdn.gameboost.com/igdb/covers/305152/co9gam.jpg?v=3 354w",
      region: "Global",
      isRegionDanger: !0,
      platform: "Steam",
      platformIcon: "https://cdn.gameboost.com/static/game-keys/drm/steam.svg",
      price: { eur: "€23,79", usd: "$27.93" },
      originalPrice: { eur: "€49,99", usd: "$58.69" },
      discount: "-52%"
    },
    {
      name: "Escape From Tarkov (Steam)",
      url: "https://gameboost.com/escape-from-tarkov-steam-00-44396",
      coverImage: "https://cdn.gameboost.com/igdb/covers/15536/co2xlq.jpg",
      coverSrcset: "https://gameboost.com/cdn-cgi/image/width=190,height=266/https://cdn.gameboost.com/igdb/covers/15536/co2xlq.jpg?v=3 190w, https://gameboost.com/cdn-cgi/image/width=354,height=473/https://cdn.gameboost.com/igdb/covers/15536/co2xlq.jpg?v=3 354w",
      region: "Global",
      platform: "Steam",
      platformIcon: "https://cdn.gameboost.com/static/game-keys/drm/steam.svg",
      price: { eur: "€40,87", usd: "$47.98" }
    },
    {
      name: "Europa Universalis V (Steam)",
      url: "https://gameboost.com/europa-universalis-v-steam-00-40233",
      coverImage: "https://cdn.gameboost.com/igdb/covers/342919/co9s5c.jpg",
      coverSrcset: "https://gameboost.com/cdn-cgi/image/width=190,height=266/https://cdn.gameboost.com/igdb/covers/342919/co9s5c.jpg?v=3 190w, https://gameboost.com/cdn-cgi/image/width=354,height=473/https://cdn.gameboost.com/igdb/covers/342919/co9s5c.jpg?v=3 354w",
      region: "Global",
      isRegionDanger: !0,
      platform: "Steam",
      platformIcon: "https://cdn.gameboost.com/static/game-keys/drm/steam.svg",
      price: { eur: "€46,39", usd: "$54.46" },
      originalPrice: { eur: "€59,99", usd: "$70.43" },
      discount: "-23%"
    },
    {
      name: "Solo Leveling: Arise Overdrive (Steam)",
      url: "https://gameboost.com/solo-leveling-arise-overdrive-steam-00-44338",
      coverImage: "https://cdn.gameboost.com/igdb/covers/349302/coakb8.jpg",
      coverSrcset: "https://gameboost.com/cdn-cgi/image/width=190,height=266/https://cdn.gameboost.com/igdb/covers/349302/coakb8.jpg?v=3 190w, https://gameboost.com/cdn-cgi/image/width=354,height=473/https://cdn.gameboost.com/igdb/covers/349302/coakb8.jpg?v=3 354w",
      region: "Global",
      platform: "Steam",
      platformIcon: "https://cdn.gameboost.com/static/game-keys/drm/steam.svg",
      price: { eur: "€30,96", usd: "$36.35" }
    },
    {
      name: "Terra Invicta (Steam)",
      url: "https://gameboost.com/terra-invicta-steam-00-28291",
      coverImage: "https://cdn.gameboost.com/igdb/covers/124042/co9fgo.jpg",
      coverSrcset: "https://gameboost.com/cdn-cgi/image/width=190,height=266/https://cdn.gameboost.com/igdb/covers/124042/co9fgo.jpg?v=3 190w, https://gameboost.com/cdn-cgi/image/width=354,height=473/https://cdn.gameboost.com/igdb/covers/124042/co9fgo.jpg?v=3 354w",
      region: "Global",
      platform: "Steam",
      platformIcon: "https://cdn.gameboost.com/static/game-keys/drm/steam.svg",
      price: { eur: "€15,10", usd: "$17.73" },
      originalPrice: { eur: "€39,99", usd: "$46.95" },
      discount: "-62%"
    },
    {
      name: "Quarantine Zone: The Last Check (Steam)",
      url: "https://gameboost.com/quarantine-zone-the-last-check-steam-00-58500",
      coverImage: "https://cdn.gameboost.com/igdb/covers/342760/coauch.jpg",
      coverSrcset: "https://gameboost.com/cdn-cgi/image/width=190,height=266/https://cdn.gameboost.com/igdb/covers/342760/coauch.jpg?v=3 190w, https://gameboost.com/cdn-cgi/image/width=354,height=473/https://cdn.gameboost.com/igdb/covers/342760/coauch.jpg?v=3 354w",
      region: "Global",
      platform: "Steam",
      platformIcon: "https://cdn.gameboost.com/static/game-keys/drm/steam.svg",
      price: { eur: "€13,38", usd: "$15.78" }
    },
    {
      name: "Mio: Memories in Orbit (PC) - Steam Key - GLOBAL",
      url: "https://gameboost.com/mio-memories-in-orbit-pc-steam-key-global-00-44293",
      coverImage: "https://cdn.gameboost.com/igdb/covers/306141/co8tkh.jpg",
      coverSrcset: "https://gameboost.com/cdn-cgi/image/width=190,height=266/https://cdn.gameboost.com/igdb/covers/306141/co8tkh.jpg?v=3 190w, https://gameboost.com/cdn-cgi/image/width=354,height=473/https://cdn.gameboost.com/igdb/covers/306141/co8tkh.jpg?v=3 354w",
      region: "Global",
      platform: "Steam",
      platformIcon: "https://cdn.gameboost.com/static/game-keys/drm/steam.svg",
      price: { eur: "€13,99", usd: "$16.43" }
    },
    {
      name: "Kejora (Steam)",
      url: "https://gameboost.com/kejora-steam-00-58501",
      coverImage: "https://cdn.gameboost.com/igdb/covers/258675/coanxw.jpg",
      coverSrcset: "https://gameboost.com/cdn-cgi/image/width=190,height=266/https://cdn.gameboost.com/igdb/covers/258675/coanxw.jpg?v=3 190w, https://gameboost.com/cdn-cgi/image/width=354,height=473/https://cdn.gameboost.com/igdb/covers/258675/coanxw.jpg?v=3 354w",
      region: "Global",
      platform: "Steam",
      platformIcon: "https://cdn.gameboost.com/static/game-keys/drm/steam.svg",
      price: { eur: "€10,40", usd: "$12.21" }
    },
    {
      name: "Pathologic 3 (PC) - Steam Key - GLOBAL",
      url: "https://gameboost.com/pathologic-3-pc-steam-key-global-00-42072",
      coverImage: "https://cdn.gameboost.com/igdb/covers/319087/co8xem.jpg",
      coverSrcset: "https://gameboost.com/cdn-cgi/image/width=190,height=266/https://cdn.gameboost.com/igdb/covers/319087/co8xem.jpg?v=3 190w, https://gameboost.com/cdn-cgi/image/width=354,height=473/https://cdn.gameboost.com/igdb/covers/319087/co8xem.jpg?v=3 354w",
      region: "Global",
      platform: "Steam",
      platformIcon: "https://cdn.gameboost.com/static/game-keys/drm/steam.svg",
      price: { eur: "€8,64", usd: "$10.14" }
    },
    {
      name: "UNBEATABLE (Steam)",
      url: "https://gameboost.com/unbeatable-steam-00-57481",
      coverImage: "https://cdn.gameboost.com/igdb/covers/144859/co9ozh.jpg",
      coverSrcset: "https://gameboost.com/cdn-cgi/image/width=190,height=266/https://cdn.gameboost.com/igdb/covers/144859/co9ozh.jpg?v=3 190w, https://gameboost.com/cdn-cgi/image/width=354,height=473/https://cdn.gameboost.com/igdb/covers/144859/co9ozh.jpg?v=3 354w",
      region: "Global",
      platform: "Steam",
      platformIcon: "https://cdn.gameboost.com/static/game-keys/drm/steam.svg",
      price: { eur: "€12,46", usd: "$14.63" }
    }
  ];
  function D(i, t = "eur") {
    const e = i.isRegionDanger ? "text-danger-light-foreground" : "text-muted-foreground";
    return (
      /* HTML */
      `
    <div role="group" class="min-w-0 shrink-0 grow-0 pl-1 py-1 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-[calc(100%/7)]">
      <a class="relative flex flex-col items-start w-auto gap-3 p-1 px-1.5 leading-5 game-card-group  game-key-group group" href="${i.url}">
        <div class="aspect-[1/1.4] w-full relative aspect-[1/1.4]">
          <div class="absolute inset-0 w-full h-full bg-transparent rounded-xl group-hover:bg-white/10"></div>
          <div class="w-full h-full bg-gradient-to-b rounded-xl from-card">
            <img 
              src="${i.platformIcon}" 
              class="absolute top-1.5 right-1.5 size-8 brightness-200 opacity-75 group-hover:opacity-100"
            >
            <img 
              loading="lazy" 
              src="${i.coverImage}" 
              srcset="${i.coverSrcset}" 
              sizes="(max-width: 640px) 125px, 236px" 
              class="object-cover mx-auto w-full h-full rounded-xl bg-card"
            >
          </div>
        </div>
        <div class="flex flex-col gap-y-2 pt-2">
          <div class="flex flex-col gap-y-1 justify-between">
            <div class="flex gap-x-1 items-center text-xs text-muted-foreground">
              <span class="${e}">${i.region}</span>
              <span class="text-muted-foreground"> · </span>
              <span class="truncate">${i.platform}</span>
            </div>
            <div class="py-px line-clamp-2">
              <p class="inline text-sm font-medium text-foreground group-hover:underline">${i.name}</p>
            </div>
          </div>
          <div class="flex flex-wrap items-baseline gap-x-2.5">
            <div class="text-base font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-l from-foreground to-secondary-foreground light:from-muted-foreground light:to-foreground light:bg-gradient-to-br">
              ${i.price[t]}
            </div>
            ${i.originalPrice ? `<div class="text-base line-through text-muted-foreground">${i.originalPrice[t]}</div>` : ""}
            ${i.discount ? `<div class="flex items-center px-2 font-sans text-sm rounded-full bg-primary text-primary-foreground">${i.discount}</div>` : ""}
          </div>
        </div>
      </a>
    </div>
  `
    );
  }
  function O(i = "eur") {
    return (
      /* HTML */
      `
    <div class="flex flex-col items-center px-4 mx-auto w-full max-w-7xl sm:px-6 xl:px-8 crs-game-keys">
      <h2 class="text-4xl font-bold text-foreground font-display">Game Keys</h2>
      <div class="relative mt-4 w-full h-full game-keys-wrapper">
        <div class="game-keys-scroll-container">
          ${j.map((t) => D(t, i)).join("")}
          <div role="group" aria-roledescription="slide" class="min-w-0 shrink-0 grow-0 pl-1 py-1 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-[calc(100%/7)]">
            <a href="/keys" class="relative flex flex-col items-start w-auto gap-3 p-1 px-1.5 leading-5 game-card-group game-key-group group game-keys-cta-slide">
              <div class="game-keys-cta-content">
                <span class="game-keys-cta-text">View All<br>Game Keys</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                  <path d="M13.7188 9.21875C13.9062 9.01042 14 8.77083 14 8.5C14 8.22917 13.9062 7.98958 13.7187 7.78125L8.71875 2.78125C8.51042 2.59375 8.27083 2.5 8 2.5C7.72917 2.5 7.48958 2.59375 7.28125 2.78125C7.09375 2.98958 7 3.22917 7 3.5C7 3.77083 7.09375 4.01042 7.28125 4.21875L10.5937 7.5L1 7.5C0.708333 7.5 0.46875 7.59375 0.28125 7.78125C0.09375 7.96875 0 8.20833 0 8.5C0 8.79167 0.09375 9.03125 0.28125 9.21875C0.46875 9.40625 0.708333 9.5 1 9.5L10.5938 9.5L7.28125 12.7812C7.09375 12.9896 7 13.2292 7 13.5C7 13.7708 7.09375 14.0104 7.28125 14.2187C7.48958 14.4062 7.72917 14.5 8 14.5C8.27083 14.5 8.51042 14.4062 8.71875 14.2187L13.7188 9.21875Z" fill="white"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div class="game-keys-nav">
          <button 
            type="button" 
            class="inline-flex items-center justify-center transition-colors focus:outline focus:outline-offset-2 focus-visible:outline outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden font-medium whitespace-nowrap bg-secondary hover:bg-secondary-hover text-secondary-foreground ring-1 ring-secondary-ring shadow-sm focus:outline-secondary text-sm touch-manipulation absolute h-8 w-8 rounded-full p-0 top-1/2 -translate-y-1/2 active:-translate-y-[calc(50%-1px)] -left-2 sm:-left-4"
            data-game-keys-nav="prev"
          >
            <i class="text-current fa-solid fa-angle-left"></i>
            <span class="sr-only">Previous Slide</span>
          </button>
          <button 
            type="button" 
            class="inline-flex items-center justify-center transition-colors focus:outline focus:outline-offset-2 focus-visible:outline outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden font-medium whitespace-nowrap bg-secondary hover:bg-secondary-hover text-secondary-foreground ring-1 ring-secondary-ring shadow-sm focus:outline-secondary text-sm touch-manipulation absolute h-8 w-8 rounded-full p-0 top-1/2 -translate-y-1/2 active:-translate-y-[calc(50%-1px)] -right-2 sm:-right-4"
            data-game-keys-nav="next"
          >
            <i class="text-current fa-solid fa-angle-right"></i>
            <span class="sr-only">Next Slide</span>
          </button>
        </div>
      </div>
      <a 
        href="/keys" 
        class="game-keys-view-all inline-flex items-center justify-center transition-colors focus:outline focus:outline-offset-2 focus-visible:outline outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden font-medium active:translate-y-px whitespace-nowrap bg-primary hover:bg-primary-hover text-primary-foreground shadow-sm focus:outline-primary py-2 text-sm rounded-full px-6 h-9 sm:h-10"
      >
        View All Game Keys
      </a>
    </div>
  `
    );
  }
  const P = `.crs-game-keys {
  margin-top: 4.375rem !important;
}

@media (max-width: 768px) {
  .crs-game-keys {
    margin-top: 1rem !important;
  }
}
.crs-game-keys > div {
  margin-top: 2rem;
}

.game-keys-wrapper {
  position: relative;
  width: 100%;
}

.game-keys-scroll-container {
  display: flex;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth !important;
  padding: 0 0 10px 0;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.game-keys-scroll-container::-webkit-scrollbar {
  display: none;
}

.game-keys-scroll-container [role='group'] {
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.game-keys-nav {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  pointer-events: none;
  height: 210px;
}

@media (hover: none) and (pointer: coarse) {
  .game-keys-nav {
    display: none;
  }
}
.game-keys-nav button {
  pointer-events: all;
}

.game-keys-cta-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 3 / 4;
  border-radius: 12px;
  background: #0b6cfb;
  box-shadow:
    0 0 0 0 #fff inset,
    0 0 0 1px rgba(26, 19, 161, 0.5) inset;

  cursor: pointer;
  transition: opacity 0.2s;
  text-decoration: none;
}

.game-keys-cta-slide:hover {
  opacity: 0.9;
}

.game-keys-cta-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.game-keys-cta-text {
  color: #fff;
  text-align: center;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
}

.game-keys-view-all {
  margin-block: 32px 10px;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  min-height: 52px;
  padding: 14px 44px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
}
`, p = class p {
    constructor() {
      this.scrollContainer = null, this.prevButton = null, this.nextButton = null, this.prevHandler = null, this.nextHandler = null, this.eventHandlers = [], this.init();
    }
    init() {
      this.addStyles(), this.render();
    }
    detectCurrency() {
      const t = document.querySelector('header button:has(img[alt="en"])');
      if (t) {
        const e = t.textContent || "";
        if (e.includes("EUR"))
          return "eur";
        if (e.includes("USD"))
          return "usd";
      }
      return "eur";
    }
    async render() {
      const t = await b(".crs-popular-games");
      if (!t || t.hasAttribute(p.CONTAINER_MARKER))
        return;
      const e = this.detectCurrency(), o = O(e);
      t.insertAdjacentHTML("afterend", o), t.setAttribute(p.CONTAINER_MARKER, "true"), this.initializeSlider();
    }
    initializeSlider() {
      if (this.scrollContainer = document.querySelector(".game-keys-scroll-container"), this.prevButton = document.querySelector('[data-game-keys-nav="prev"]'), this.nextButton = document.querySelector('[data-game-keys-nav="next"]'), !this.scrollContainer || !this.prevButton || !this.nextButton) return;
      this.prevHandler = (s) => {
        var n;
        g("exp_hp_key_slider_prev", "Previous Button", "click", "Game Keys"), s.preventDefault(), s.stopPropagation();
        const a = (n = this.scrollContainer) == null ? void 0 : n.querySelector('[role="group"]');
        if (a && this.scrollContainer) {
          const r = a.offsetWidth;
          this.scrollContainer.scrollBy({
            left: -(r + 16),
            behavior: "smooth"
          });
        }
      }, this.nextHandler = (s) => {
        var n;
        g("exp_hp_key_slider_next", "Next Button", "click", "Game Keys"), s.preventDefault(), s.stopPropagation();
        const a = (n = this.scrollContainer) == null ? void 0 : n.querySelector('[role="group"]');
        if (a && this.scrollContainer) {
          const r = a.offsetWidth;
          this.scrollContainer.scrollBy({
            left: r + 16,
            behavior: "smooth"
          });
        }
      }, this.prevButton.addEventListener("click", this.prevHandler), this.nextButton.addEventListener("click", this.nextHandler), document.querySelectorAll(".game-key-group:not(.game-keys-cta-slide)").forEach((s) => {
        const a = s, n = a.querySelector(".text-sm.font-medium"), r = (n == null ? void 0 : n.textContent) || a.href;
        this.addTrackedEventListener(s, "click", () => g("exp_hp_key_card_click", r, "click", "Game Keys"));
      });
      const e = document.querySelector(".game-keys-cta-slide");
      e && this.addTrackedEventListener(e, "click", () => g("exp_hp_key_cta_slide_click", "View All Game Keys", "click", "Game Keys"));
      const o = document.querySelector(".game-keys-view-all");
      o && this.addTrackedEventListener(o, "click", () => g("exp_hp_key_view_all_click", "View All Game Keys", "click", "Game Keys"));
    }
    addTrackedEventListener(t, e, o) {
      t.addEventListener(e, o), this.eventHandlers.push({ element: t, event: e, handler: o });
    }
    cleanup() {
      this.prevButton && this.prevHandler && this.prevButton.removeEventListener("click", this.prevHandler), this.nextButton && this.nextHandler && this.nextButton.removeEventListener("click", this.nextHandler), this.eventHandlers.forEach(({ element: t, event: e, handler: o }) => {
        t.removeEventListener(e, o);
      }), this.eventHandlers = [], this.scrollContainer = null, this.prevButton = null, this.nextButton = null, this.prevHandler = null, this.nextHandler = null;
    }
    addStyles() {
      if (document.getElementById(p.STYLES_MARKER))
        return;
      const t = document.createElement("style");
      t.id = p.STYLES_MARKER, t.innerHTML = P, document.head.appendChild(t);
    }
  };
  p.CONTAINER_MARKER = "data-game-keys-rendered", p.STYLES_MARKER = "game-keys-styles-injected";
  let E = p;
  const N = [
    {
      name: "Accounts",
      url: "/services/accounts",
      icon: "https://cdn.gameboost.com/static/game-services/accounts.webp"
    },
    {
      name: "Game Keys",
      url: "/keys",
      icon: "https://cdn.gameboost.com/static/game-services/games.webp",
      withSales: !0
    },
    {
      name: "Items",
      url: "https://gameboost.com/services/items",
      icon: "https://cdn.gameboost.com/static/game-services/items.webp"
    },
    {
      name: "Currencies",
      url: "https://gameboost.com/services/currencies",
      icon: "https://cdn.gameboost.com/static/game-services/currencies.webp"
    },
    {
      name: "Boosters",
      url: "https://gameboost.com/services/boosting",
      icon: "https://cdn.gameboost.com/static/game-services/boosting.webp "
    },
    {
      name: "Gift Cards",
      url: "https://gameboost.com/gift-cards",
      icon: "https://cdn.gameboost.com/static/game-services/gift-cards.webp"
    },
    {
      name: "Top Ups",
      url: "https://gameboost.com/services/top-ups",
      icon: "https://cdn.gameboost.com/static/game-services/top-ups.webp"
    },
    {
      name: "CS2 Skins",
      url: "https://gameboost.com/keys",
      icon: "https://cdn.gameboost.com/static/game-services/cs-skins.webp?v=2"
    }
  ], $ = `.crs-game-services {
  margin-top: 4rem !important;
}

@media (max-width: 768px) {
  .crs-game-services {
    margin-top: 3rem !important;
  }
}

.game-services-grid {
  gap: 22px;
}

.game-service-card-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .game-service-card-link {
    width: 68px;
    height: 68px;
  }
}
.game-service-card-link.with-sales::after {
  content: '';
  position: absolute;
  top: -13px;
  right: -13px;
  width: 26px;
  height: 27px;

  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" fill="none"><path fill="%23FF4949" d="M13 .556c.934 0 1.768.236 2.502.708a5.213 5.213 0 0 1 1.752 1.87 5.032 5.032 0 0 1 2.552-.05c.834.169 1.584.59 2.252 1.264.667.675 1.084 1.45 1.25 2.326.2.843.184 1.686-.05 2.528a5.204 5.204 0 0 1 1.852 1.77c.467.742.7 1.584.7 2.528s-.233 1.787-.7 2.528a5.203 5.203 0 0 1-1.851 1.77c.233.843.25 1.702.05 2.578-.167.843-.584 1.602-1.252 2.276-.667.674-1.417 1.095-2.251 1.264a5.032 5.032 0 0 1-2.552-.05 5.213 5.213 0 0 1-1.752 1.87c-.734.472-1.568.708-2.502.708-.934 0-1.768-.236-2.502-.708a5.212 5.212 0 0 1-1.752-1.87 5.032 5.032 0 0 1-2.552.05c-.834-.169-1.584-.59-2.252-1.264-.667-.674-1.084-1.433-1.25-2.276a5.187 5.187 0 0 1 .05-2.578 5.204 5.204 0 0 1-1.852-1.77c-.467-.741-.7-1.584-.7-2.528s.233-1.787.7-2.528a5.204 5.204 0 0 1 1.851-1.77 5.187 5.187 0 0 1-.05-2.578c.167-.843.584-1.601 1.251-2.276.668-.674 1.435-1.095 2.302-1.264a4.847 4.847 0 0 1 2.502.05 5.213 5.213 0 0 1 1.752-1.87C11.232.792 12.066.556 13 .556ZM9.797 11.882c.467 0 .851-.152 1.151-.455.3-.303.45-.691.45-1.163 0-.472-.15-.86-.45-1.163-.3-.303-.684-.455-1.15-.455-.468 0-.851.152-1.152.455-.3.304-.45.691-.45 1.163 0 .472.15.86.45 1.163.3.303.684.455 1.151.455Zm8.007 4.854c0-.472-.15-.86-.45-1.163-.3-.303-.684-.455-1.151-.455-.467 0-.851.152-1.151.455-.3.303-.45.691-.45 1.163 0 .472.15.86.45 1.163.3.303.684.455 1.15.455.468 0 .851-.152 1.152-.455.3-.303.45-.691.45-1.163Zm-.75-5.612c.466-.573.466-1.146 0-1.72-.568-.471-1.135-.471-1.702 0l-6.405 6.472c-.467.574-.467 1.147 0 1.72.567.471 1.134.471 1.701 0l6.405-6.472Z"/></svg>');
}
.game-service-card {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.game-service-card img {
  width: 39px;
  height: 36px;
  object-fit: contain;
}

@media (max-width: 768px) {
  .game-service-card img {
    width: 24px;
    height: 22px;
  }
}
.game-service-name-link {
  margin-top: 10px;
  display: block;
  width: 100%;
  text-align: center;
}
.game-service-name {
  color: hsl(var(--foreground));
  text-align: center;
  font-family: 'Red Hat Display', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 32px; /* 177.778% */
  letter-spacing: -0.6px;
}

@media (max-width: 768px) {
  .game-service-name {
    font-size: 14px;
    line-height: 20px;
  }
}
`, v = class v {
    constructor() {
      this.eventHandlers = [], this.init();
    }
    init() {
      this.addStyles(), this.render();
    }
    async render() {
      const t = await b(".crs-game-keys");
      if (!t || t.hasAttribute(v.CONTAINER_MARKER))
        return;
      const e = (
        /* HTML */
        `<div class="flex flex-col items-center px-4 mx-auto w-full max-w-7xl sm:px-6 xl:px-8 crs-game-services">
      <h2 class="text-4xl font-bold text-foreground font-display text-center">Browse All Games Services </h2>
      <div class="mt-8 flex justify-between gap-2 flex-wrap w-full game-services-grid">
      ${this.renderServiceCards()}
      
      </div>
      </div>
    </div>
    `
      );
      t.insertAdjacentHTML("afterend", e), t.setAttribute(v.CONTAINER_MARKER, "true"), G(".crs-game-services", "exp_hp_service_view", "Browse All Games Services", "Visibility", 0), document.querySelectorAll(".game-service-card-link").forEach((a) => {
        var l;
        const n = (l = a.nextElementSibling) == null ? void 0 : l.querySelector(".game-service-name"), r = (n == null ? void 0 : n.textContent) || "Unknown";
        this.addTrackedEventListener(a, "click", () => g("exp_hp_service_card_click", r, "click", "Browse All Games Services"));
      }), document.querySelectorAll(".game-service-name-link").forEach((a) => {
        const n = a.querySelector(".game-service-name"), r = (n == null ? void 0 : n.textContent) || "Unknown";
        this.addTrackedEventListener(a, "click", () => g("exp_hp_service_name_click", r, "click", "Browse All Games Services"));
      });
    }
    renderServiceCards() {
      return N.map((t) => (
        /* HTML */
        `
      <div>
      <a href="${t.url}" class="relative  group game-service-card-link light:ring-1 light:ring-border ${t.withSales ? "with-sales" : ""}">
        <div class="absolute flex justify-center  items-center bg-gradient-to-b opacity-[0.12] from-[#BCC3E7] to-[#BCC3E7]/40 light:from-white light:to-white/40 light:-z-10 light:opacity-100 rounded-md size-12 group-hover:opacity-20  game-service-card ">
        </div>
          <img src="${t.icon}" alt="${t.name} Icon">
        </a>
        <a href="${t.url}" class="game-service-name-link">
          <span class="text-foreground game-service-name">${t.name}</span>
        </a>
      </div>
    `
      )).join("");
    }
    addStyles() {
      if (document.head.querySelector("style[data-game-services-styles]"))
        return;
      const t = document.createElement("style");
      t.setAttribute("data-game-services-styles", "true"), t.textContent = $, document.head.appendChild(t);
    }
    addTrackedEventListener(t, e, o) {
      t.addEventListener(e, o), this.eventHandlers.push({ element: t, event: e, handler: o });
    }
    cleanup() {
      this.eventHandlers.forEach(({ element: t, event: e, handler: o }) => {
        t.removeEventListener(e, o);
      }), this.eventHandlers = [];
    }
  };
  v.CONTAINER_MARKER = "data-game-services-rendered";
  let I = v;
  const K = `.crs-hero > a {
  /* display: none; Ask about it */
  margin-bottom: 0;
}
.crs-hero {
  padding-bottom: 0 !important;
}
@media (max-width: 768px) {
  .crs-hero {
    padding-top: 6.5rem !important;
    padding-inline: 12px;
    margin-bottom: 2rem;
  }
}

div:has(> h1) {
  padding-top: 0 !important;
}

h1 {
  margin: 0 !important;
}

.crs-hero-subtitle {
  margin-top: 0.62rem;
}
.crs-hero-subtitle span {
  display: none;
}

.crs-hero-subtitle h2::before {
  content: ' ⸱ ';
  font-size: 2.4rem;
  line-height: 0;
  vertical-align: sub;
  color: hsl(var(--foreground));
}

@media (max-width: 768px) {
  .crs-hero-subtitle h2::before {
    font-size: 1.8rem;
  }
}

div.backdrop-blur-\\[12px\\]:has(.crs-hero-search-input) {
  height: auto;
  padding: 8px;
}
div:has(> .crs-hero-search-input) {
  min-height: 56px;
}

.typing-effect {
  position: absolute;
  left: 50px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  pointer-events: none;
  font-size: inherit;
  font-family: inherit;
}

.typing-effect::after {
  content: '';
  display: block;
  width: 1px;
  height: 1.4em;
  background: hsl(var(--foreground));
  animation: blink 1s infinite;
  margin-left: 2px;
}

@keyframes blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}

/* Hide typing effect when input is focused or has value */
input[name='search']:focus ~ .typing-effect,
input[name='search']:not(:placeholder-shown) ~ .typing-effect {
  display: none;
}

@media (max-width: 400px) {
  .crs-hero-services-container {
    margin-inline: auto;
    justify-content: space-between !important;
  }
}
.crs-hero-services-container a svg {
  display: none;
}
.crs-hero-services-container a[href*='/accounts'] {
  order: 1;
}

.crs-hero-services-container a[href*='/keys'] {
  order: 2;
}

.crs-hero-services-container a[href*='/items'] {
  order: 3;
}

.crs-hero-services-container a[href*='/currencies'] {
  order: 4;
}

.crs-hero-services-container a[href*='/boosting'] {
  order: 5;
}

.crs-hero-services-container a[href*='/top-ups'] {
  order: 6;
}

.crs-hero-services-container a[href*='/skins'] {
  order: 7;
}

.crs-hero-services-container a[href*='/gift-cards'] {
  order: 8;
}
.crs-hero > a {
  margin-top: 32px;
}
.crs-warranty-badge {
  margin-top: 32px;
  align-items: flex-end;
  gap: 10px;
  color: #66a1ff;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
  text-align: center;
}

.crs-warranty-badge br {
  display: none;
}

@media (max-width: 500px) {
  .crs-warranty-badge {
    gap: 4px;
    color: #66a1ff;
    font-size: 12px;
    line-height: 18px;
  }
  .crs-warranty-badge br {
    display: block;
  }
}
.crs-warranty-badge::before {
  content: '';
  width: 24px;
  height: 16px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path fill="%2366A1FF" d="M7.999.47c.146 0 .281.029.406.088l5.906 2.353c.354.137.636.353.844.647.23.294.344.637.344 1.03.02 1-.157 2.176-.532 3.529-.375 1.353-1.052 2.666-2.03 3.94-.96 1.295-2.334 2.364-4.126 3.207a1.96 1.96 0 0 1-1.625 0c-1.791-.843-3.166-1.912-4.125-3.206-.979-1.275-1.656-2.588-2.031-3.941-.375-1.353-.552-2.53-.531-3.53 0-.392.114-.735.344-1.03.208-.293.49-.509.843-.646L7.593.558A.942.942 0 0 1 7.999.47Zm0 1.97v11.118c1.416-.687 2.531-1.56 3.343-2.618.792-1.059 1.355-2.147 1.688-3.265.313-1.137.469-2.156.469-3.058l-5.5-2.177Z"/></svg>');
  background-repeat: no-repeat;
}
`;
  class q {
    constructor() {
      this.eventHandlers = [], this.searchFocusHandler = null, this.searchBlurHandler = null, this.searchInputHandler = null, this.init();
    }
    init() {
      this.addStyles(), this.getHeroSection(), this.changeSearchInput(), this.changeSubTitle(), this.addWarrantyBadge();
    }
    async getHeroSection() {
      const t = await b('img[src*="bg-light.webp"]');
      if (t) {
        const e = t.nextElementSibling;
        e != null && e.classList.contains("crs-hero") || e == null || e.classList.add("crs-hero");
        const o = e == null ? void 0 : e.querySelector('div:has(a[href*="/services/"])');
        o && !o.classList.contains("crs-hero-services-container") && o.classList.add("crs-hero-services-container");
      }
    }
    async changeSearchInput() {
      var s, a;
      const t = await b('input[name="search"]');
      t.classList.contains("crs-hero-search-input") || t.classList.add("crs-hero-search-input");
      let e = (s = t.parentElement) == null ? void 0 : s.querySelector("[data-typing-effect]");
      e || (e = document.createElement("span"), e.className = "typing-effect", e.setAttribute("data-typing-effect", "true"), (a = t.parentElement) == null || a.insertBefore(e, t), this.searchFocusHandler = () => {
        e.style.display = "none";
      }, t.addEventListener("focus", this.searchFocusHandler), this.searchBlurHandler = () => {
        t.value || (e.style.display = "block");
      }, t.addEventListener("blur", this.searchBlurHandler), this.searchInputHandler = () => {
        t.value && (e.style.display = "none");
      }, t.addEventListener("input", this.searchInputHandler));
      const o = document.querySelector(".crs-hero-services-container");
      o && o.querySelectorAll('a[href*="/services/"]').forEach((r) => {
      });
    }
    async changeSubTitle() {
      const t = await b("h1 + div");
      t && !t.classList.contains("crs-hero-subtitle") && t.classList.add("crs-hero-subtitle");
    }
    async addWarrantyBadge() {
      const t = await b(".crs-hero"), e = t == null ? void 0 : t.querySelector(":scope > a");
      if (!t || t.querySelector(".crs-warranty-badge")) return;
      const o = (
        /* HTML */
        `
      <div class="flex align-end gap-x-2.5 gap-y-4 justify-center items-start crs-warranty-badge">Every purchase is protected by <br> Gameboost’s Comprehensive Warranty</div>
    `
      );
      e ? e.insertAdjacentHTML("beforebegin", o) : t.insertAdjacentHTML("beforeend", o);
    }
    addStyles() {
      if (document.head.querySelector("style[data-hero-styles]"))
        return;
      const t = document.createElement("style");
      t.setAttribute("data-hero-styles", "true"), t.textContent = K, document.head.appendChild(t);
    }
    addTrackedEventListener(t, e, o) {
      t.addEventListener(e, o), this.eventHandlers.push({ element: t, event: e, handler: o });
    }
    cleanup() {
      this.eventHandlers.forEach(({ element: e, event: o, handler: s }) => {
        e.removeEventListener(o, s);
      }), this.eventHandlers = [];
      const t = document.querySelector('input[name="search"]');
      t && (this.searchFocusHandler && (t.removeEventListener("focus", this.searchFocusHandler), this.searchFocusHandler = null), this.searchBlurHandler && (t.removeEventListener("blur", this.searchBlurHandler), this.searchBlurHandler = null), this.searchInputHandler && (t.removeEventListener("input", this.searchInputHandler), this.searchInputHandler = null));
    }
  }
  R({ name: "Іmproved homepage UX/UI and copy", dev: "OS" }), z("exp_hp");
  class B {
    constructor() {
      this.init();
    }
    init() {
      this.addGlobalStyles(), this.initializeEnhancements(), this.setupSPANavigation();
    }
    addGlobalStyles() {
      const t = document.createElement("style");
      t.textContent = H, document.head.appendChild(t);
    }
    isHomePage() {
      const t = window.location.pathname;
      return t === "/" || t === "" || t === "/index.html";
    }
    initializeEnhancements() {
      this.isHomePage() && (new q(), new S(), new E(), new I());
    }
    setupSPANavigation() {
      window.addEventListener("popstate", () => {
        this.initializeEnhancements();
      });
      const t = window.history.pushState, e = window.history.replaceState, o = this;
      window.history.pushState = function(...s) {
        t.apply(window.history, s), o.initializeEnhancements();
      }, window.history.replaceState = function(...s) {
        e.apply(window.history, s), o.initializeEnhancements();
      };
    }
  }
  window.onload = () => {
    new B();
  }, new B();
})();
