(function() {
  "use strict";
  const va = ({ name: e, dev: t }) => {
    console.log(
      `%c EXP: ${e} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, ya = (e) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", e, "variant_1"));
    }, 1e3);
  }, ba = `section.apps {
  display: none; /* Hide control section */
}

.crs-apps {
  color: #fff;
}
.crs-apps-content {
  padding-top: 90px;
  padding-bottom: 120px;
  border-top: 1px solid #3e3e46;
}

.crs-apps-title {
  color: #fff;
  margin-bottom: 0;
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  line-height: 51.84px;
  letter-spacing: 1px;
}

.crs-apps-description {
  margin-inline: auto;
  margin-top: 12px;
  max-width: 578px;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 32.04px;
}

.crs-apps-nav {
  margin-top: 32px;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1140px;
  list-style: none;
}

.crs-apps-nav-item a {
  display: flex;
  align-items: center;
  height: 61px;
  padding: 24px 40px;
  border-radius: 15px;
  border: 1px solid #3e3e46;
  background: #26262b;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 36px;
  text-decoration: none;
}

.crs-apps-nav-item--more a {
  background: transparent;
}

/* APPS BLOCKS */

.crs-apps-blocks {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

@media (max-width: 992px) {
  .crs-apps-blocks {
    grid-template-columns: repeat(1, 1fr);
  }
}

.crs-apps-block {
  --main-text-color: #fff;
  scroll-margin-top: 80px;;
  container-type: inline-size;
  border-radius: 20px;
}

.crs-apps-block-inner {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

@container (max-width: 900px) {
  .crs-apps-block-inner {
    flex-direction: column;
  }
}

.crs-apps-block:nth-child(3n + 1) {
  grid-column: 1 / -1;
}

.crs-apps-block[data-color='7E7EE1'] {
  background: #7e7ee1;
}

.crs-apps-block[data-color='D5D8FE'] {
  --main-text-color: #26262b;
  background: #d5d8fe;
}

.crs-apps-block[data-color='424E81'] {
  
  background: #424e81;
}

.crs-apps-block[data-color='CF6F8A'] {
  background: #cf6f8a;
}

.crs-apps-block[data-color='F0AD84'] {
  --main-text-color: #26262b;
  background: #f0ad84;
}

.crs-apps-block[data-color='F0D0B5'] {
  --main-text-color: #26262b;
  background: #f0d0b5;
}

.crs-block-info {
  width: 100%;
  max-width: 465px;
  padding: 60px 0 32px 60px;
}

.crs-block-apps {
  width: 100%;
  max-width: 575px;
  padding: 40px 40px 24px 0;
}

@container (max-width: 900px) {
  .crs-block-info {
    max-width: 100%;
    padding: 60px 40px 0;
  }

  .crs-block-apps {
    max-width: 100%;
    padding: 0 40px 24px;
  }
}

.crs-block-title {
  color: var(--main-text-color);
  font-size: 36px;
  font-weight: 600;
  line-height: 51.84px;
}

.crs-block-description {
  margin-top: 12px;
  color: var(--main-text-color);
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
}

.crs-block-action {
  margin-top: 32px;
}

.crs-block-action-text {
  margin-top: 12px;
  color: var(--main-text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.crs-block-comment {
  --star-svg-url: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M13.6285 5.01668L9.32465 4.40531L7.39557 0.584123C7.25148 0.298782 6.74807 0.298782 6.60399 0.584123L4.67549 4.40531L0.371669 5.01668C0.0181703 5.06713 -0.122996 5.46694 0.12492 5.70291L3.25158 8.68327L2.5125 12.8967C2.45358 13.2314 2.838 13.4825 3.15591 13.3182L7.00007 11.3425L10.8442 13.3187C11.1592 13.4815 11.5471 13.2352 11.4876 12.8972L10.7486 8.68381L13.8752 5.70345C14.1231 5.46694 13.9814 5.06713 13.6285 5.01668Z" fill="white"/></svg>');
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
}

.crs-block-comment-author {
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.crs-block-comment-rating {
  display: inline-flex;
  gap: 4px;
  align-items: center;
  color: var(--main-text-color);
}

.crs-block-comment-rating > span {
  width: 14px;
  height: 14px;
  background-image: var(--star-svg-url);
}

.crs-block-comment-text {
  margin-top: 8px;
  color: var(--main-text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
}

.crs-block-more > div:first-child {
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
}

.crs-block-more > div:nth-child(2) {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

/* APP BLOCK */

.crs-apps-block .crs-block-apps-list {
  columns: 3;
  column-gap: 20px;
  column-fill: balance;
}
@container (max-width: 900px) {
  .crs-block-apps-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }
}

.crs-block-app {
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 12px;
  border-radius: 15px;
  background: #fff;
  color: #26262b;
  break-inside: avoid;
  cursor: pointer;
}

.crs-block-app-name {
  font-size: 18px;
  font-weight: 600;
  line-height: 32.04px;
}

.crs-block-app-description {
  --line-height: 25px;
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: var(--line-height);
  min-height: calc(var(--line-height) * 2);
}

@container (min-width: 900px) {
  .crs-apps-block
    :is(
      .crs-block-app:nth-child(2),
      .crs-block-app:nth-child(3),
      .crs-block-app:nth-child(6),

    )
    .crs-block-app-description {
    display: none;
  }
}

.crs-block-app-meta {
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding-top: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 21.36px;
}

.crs-block-app-rating {
  display: flex;
  align-items: center;
  gap: 4px;
}

.crs-block-more {
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--main-text-color);
}

.crs-apps-action {
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

.crs-apps-subtitle {
  margin-top: 60px;
  color: #fff;
  text-align: center;
  font-size: 36px;
  font-weight: 600;
  line-height: 48px;
}
`, ce = [
    {
      name: "Supercharge",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/742/42581/icon-1747027558-6821866668cc5.png",
      description: "Supercharge your Mac",
      url: "https://setapp.com/apps/supercharge",
      platforms: "Mac",
      rating: "100"
    },
    {
      name: "Bartender",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/153/42799/icon-1748962599-683f0d271f5a8.png",
      description: "Personalize your menu bar",
      url: "https://setapp.com/apps/bartender",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "CleanShot X",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/321/42718/icon-1748347773-6835ab7ddfd5d.png",
      description: "Take better screenshots and GIFs",
      url: "https://setapp.com/apps/cleanshot",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "TextSniper",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/431/40216/icon-1726504026-66e85c5a39ab4.png",
      description: "Extract text from visuals",
      url: "https://setapp.com/apps/textsniper",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Numi",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/186/7868/icon-1681314493-6436d2bdefebe.png",
      description: "Calculate and convert anything",
      url: "https://setapp.com/apps/numi",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Ulysses",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/67/42660/icon-1747749841-682c8bd1e7d9c.png",
      description: "Write and publish from one app",
      url: "https://setapp.com/apps/ulysses",
      platforms: "Mac, iOS",
      rating: "99"
    },
    {
      name: "TablePlus",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/297/43846/icon-1749387295-6845881fbfe73.png",
      description: "Query, edit, and manage databases",
      url: "https://setapp.com/apps/tableplus",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "MindNode Classic",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/320/43815/icon-1749119470-684171ee26b61.png",
      description: "Mind map and brainstorm ideas",
      url: "https://setapp.com/apps/mindnode",
      platforms: "Mac, iOS",
      rating: "99"
    },
    {
      name: "Yoink",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/330/41335/icon-1734701336-67657118b1691.png",
      description: "Improve drag and drop",
      url: "https://setapp.com/apps/yoink",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "DevUtils",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/445/7963/icon-1682658507-644b54cbceb37.png",
      description: "Offline development toolkit",
      url: "https://setapp.com/apps/devutils.app",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Lungo",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/270/42370/icon-1744999749-68029545752bd.png",
      description: "Keep your Mac awake",
      url: "https://setapp.com/apps/lungo",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "PixelSnap",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/358/41224/icon-1734003597-675acb8d48307.png",
      description: "Measure anything on the screen",
      url: "https://setapp.com/apps/pixelsnap",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Dash",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/152/41998/icon-1741245191-67c94b07a2ef0.png",
      description: "Access API documentation offline",
      url: "https://setapp.com/apps/dash",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Dropzone",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/155/43866/icon-1749628562-68493692cbdc5.png",
      description: "Complete everyday tasks faster",
      url: "https://setapp.com/apps/dropzone",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "HazeOver",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/212/40224/icon-1726555425-66e9252168c8f.png",
      description: "Dim background windows",
      url: "https://setapp.com/apps/hazeover",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Proxyman",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/346/43836/icon-1749304623-6844452f7a6cb.png",
      description: "Debug your web traffic",
      url: "https://setapp.com/apps/proxyman",
      platforms: "Mac, iOS",
      rating: "99"
    },
    {
      name: "Soulver",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/551/42488/icon-1746240116-6815827493d38.png",
      description: "Convert and calculate in notes",
      url: "https://setapp.com/apps/soulver",
      platforms: "Mac, iOS",
      rating: "99"
    },
    {
      name: "SnippetsLab",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/125/41422/icon-1735798322-67762e322edcd.png",
      description: "Create a library of code snippets",
      url: "https://setapp.com/apps/snippetslab",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Dato",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/571/42735/icon-1748450972-68373e9c7d7fe.png",
      description: "Stay on top of your schedule",
      url: "https://setapp.com/apps/dato",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "In Your Face",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/591/42540/icon-1746702631-681c9127e40e9.png",
      description: "Get full-screen meeting alerts",
      url: "https://setapp.com/apps/in-your-face",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Image2icon",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/195/5841/icon-1648290647-623eeb57731c9.png",
      description: "Turn images into icons",
      url: "https://setapp.com/apps/image2icon",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "TextSoap",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/284/42084/icon-1742216932-67d81ee49773c.png",
      description: "Make sure your text has no errors",
      url: "https://setapp.com/apps/textsoap",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "IconJar",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/264/39405/icon-1719519131-667dc79b49105.png",
      description: "Organize your icon sets",
      url: "https://setapp.com/apps/iconjar",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "TaskPaper",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/213/40865/icon-1731425370-6733745a98d57.png",
      description: "Plain-text task management",
      url: "https://setapp.com/apps/taskpaper",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "SnapMotion",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/509/41065/icon-1732813283-6748a1e33ce65.png",
      description: "Capture snaps from your videos",
      url: "https://setapp.com/apps/snapmotion",
      platforms: "Mac, iOS",
      rating: "99"
    },
    {
      name: "Buildwatch",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/467/8800/icon-1695307195-650c55bbf4200.png",
      description: "Track your build time in Xcode",
      url: "https://setapp.com/apps/buildwatch",
      platforms: "Mac",
      rating: "99"
    },
    {
      name: "Paste",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/98/43831/icon-1749237176-68433db804712.png",
      description: "Never lose anything you copy",
      url: "https://setapp.com/apps/paste",
      platforms: "Mac, iOS",
      rating: "98"
    },
    {
      name: "Downie",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/222/42776/icon-1748848008-683d4d8870860.png",
      description: "Download YouTube videos",
      url: "https://setapp.com/apps/downie",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Permute",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/219/42789/icon-1748930371-683e8f43d99aa.png",
      description: "Convert audio, images, and videos",
      url: "https://setapp.com/apps/permute",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "BetterTouchTool",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/295/42221/icon-1743429358-67ea9eee7ee73.png",
      description: "Save time with custom actions",
      url: "https://setapp.com/apps/bettertouchtool",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "AlDente Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/483/42676/icon-1747828119-682dbd97182a6.png",
      description: "Set battery charging limits",
      url: "https://setapp.com/apps/aldente-pro",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Session",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/428/42692/icon-1747967217-682fdcf1a2474.png",
      description: "Work in short intervals",
      url: "https://setapp.com/apps/session",
      platforms: "Mac, iOS",
      rating: "98"
    },
    {
      name: "Timing",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/184/43855/icon-1749474823-6846de07658d9.png",
      description: "Track time you spend in each app",
      url: "https://setapp.com/apps/timing",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "One Switch",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/349/39552/icon-1720703221-668fd8f5909f4.png",
      description: "Access macOS features fast",
      url: "https://setapp.com/apps/one-switch",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "QuitAll",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/493/10507/icon-1715515857-6640b1d134f36.png",
      description: "Speed up Mac by quitting all apps",
      url: "https://setapp.com/apps/quit-all-mac",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "PDF Squeezer",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/188/41776/icon-1739380114-67acd5926e8ff.png",
      description: "Compress PDFs without quality loss",
      url: "https://setapp.com/apps/pdf-squeezer",
      platforms: "Mac, iOS",
      rating: "98"
    },
    {
      name: "Pulltube",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/371/43863/icon-1749589731-68489ee3bdf17.png",
      description: "Download and trim videos",
      url: "https://setapp.com/apps/pulltube",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Elmedia Player",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/178/41555/icon-1737151476-678ad3f48d49a.png",
      description: "Versatile media player",
      url: "https://setapp.com/apps/elmedia-player",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Default Folder X",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/396/42594/icon-1747113137-6822d4b146299.png",
      description: "Access recent and favorite files",
      url: "https://setapp.com/apps/default-folder-x",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "PopClip",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/159/41304/icon-1734542637-6763052df1bf2.png",
      description: "Use instant text actions",
      url: "https://setapp.com/apps/popclip",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Mission Control",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/376/42548/icon-1746731563-681d022b89238.png",
      description: "Close windows from Mission Control",
      url: "https://setapp.com/apps/mission-control-plus",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Movist Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/344/41625/icon-1737718534-67937b06a660d.png",
      description: "Play all video formats",
      url: "https://setapp.com/apps/movist-pro",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "HoudahSpot",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/452/40620/icon-1729324375-67136557e86ed.png",
      description: "Find files faster",
      url: "https://setapp.com/apps/houdahspot",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Typeface",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/315/42539/icon-1746695766-681c765661a38.png",
      description: "Find the perfect font",
      url: "https://setapp.com/apps/typeface",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "TouchRetouch",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/298/8541/icon-1691068510-64cba85e8b087.png",
      description: "Remove objects from photos",
      url: "https://setapp.com/apps/touchretouch",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Gifox",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/197/42706/icon-1748180877-68331f8d91fc4.png",
      description: "Capture GIFs from your screen",
      url: "https://setapp.com/apps/gifox",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Hand Mirror",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/564/41679/icon-1738219390-679b1f7e17746.png",
      description: "Check Mac camera in a click",
      url: "https://setapp.com/apps/hand-mirror",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Unclutter",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/242/41940/icon-1740661852-67c0645c93b70.png",
      description: "Manage files, notes, clipboard",
      url: "https://setapp.com/apps/unclutter",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Bike",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/598/41510/icon-1736770872-678505384e5f5.png",
      description: "Outline ideas and projects",
      url: "https://setapp.com/apps/bike-outliner",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Antinote",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/757/42717/icon-1748322683-6835497b1e179.png",
      description: "Take notes and do calculations",
      url: "https://setapp.com/apps/antinote",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Base",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/135/9151/icon-1697967585-6534ede1ef890.png",
      description: "Simplify SQLite file management",
      url: "https://setapp.com/apps/base",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "Goldie App",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/345/42291/icon-1744380820-67f92394afe8e.png",
      description: "Measure golden ratio in designs",
      url: "https://setapp.com/apps/goldie-app",
      platforms: "Mac",
      rating: "98"
    },
    {
      name: "CleanMyMac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/78/42681/icon-1747895078-682ec326c5805.png",
      description: "Tidy up your Mac",
      url: "https://setapp.com/apps/cleanmymac",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "iStat Menus",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/144/41794/icon-1739274958-67ab3ace7a0bf.png",
      description: "Track CPU, GPU, sensors, etc.",
      url: "https://setapp.com/apps/istat-menus",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Archiver",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/194/10197/icon-1711963165-660a7c1d7fdbc.png",
      description: "Compress and unarchive files",
      url: "https://setapp.com/apps/archiver",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "SideNotes",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/365/42288/icon-1744039822-67f3ef8e035dd.png",
      description: "Notes on the side of your screen",
      url: "https://setapp.com/apps/sidenotes",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "24 Hour Wallpaper",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/405/41207/icon-1733878798-6758e40ea005c.png",
      description: "100+ dynamic wallpapers",
      url: "https://setapp.com/apps/24-hour-wallpaper",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "NotePlan",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/280/42737/icon-1748462307-68376ae39b791.png",
      description: "One space for all your work",
      url: "https://setapp.com/apps/noteplan",
      platforms: "Mac, iOS",
      rating: "97"
    },
    {
      name: "OpenIn",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/459/41451/icon-1736125870-677b2daede071.png",
      description: "Open links in select browsers",
      url: "https://setapp.com/apps/openin",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Swish",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/403/41992/icon-1741196417-67c88c81798d1.png",
      description: "Set up quick trackpad actions",
      url: "https://setapp.com/apps/swish",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "TripMode",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/244/41564/icon-1737319715-678d6523e2898.png",
      description: "Save internet data",
      url: "https://setapp.com/apps/tripmode",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Pareto Security",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/496/42756/icon-1748647998-683a403ea24fa.png",
      description: "Check your security settings",
      url: "https://setapp.com/apps/pareto-security",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "SQLPro Studio",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/230/41517/icon-1736865184-678675a0afa1f.png",
      description: "Manage multiple DBMS",
      url: "https://setapp.com/apps/sqlpro-studio",
      platforms: "Mac, iOS",
      rating: "97"
    },
    {
      name: "WiFi Explorer",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/74/41442/icon-1735942774-67786276c8ca4.png",
      description: "Fix WiFi problems",
      url: "https://setapp.com/apps/wifi-explorer",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Magic Window Air",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/437/8979/icon-1696301083-651b801b55c0c.png",
      description: "Try aerial screen savers",
      url: "https://setapp.com/apps/magic-window-air",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Step Two",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/378/7227/icon-1671473505-63a0a9610bff6.png",
      description: "Simplify two-step authentication",
      url: "https://setapp.com/apps/step-two",
      platforms: "Mac, iOS",
      rating: "97"
    },
    {
      name: "Paletro",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/465/41928/icon-1740573715-67bf0c13e78c0.png",
      description: "Access app menu commands",
      url: "https://setapp.com/apps/paletro",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Due",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/434/43829/icon-1749224796-68430d5cd57f9.png",
      description: "Receive persistent reminders",
      url: "https://setapp.com/apps/due",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "PhotoBulk",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/286/42242/icon-1743778095-67eff12f33d65.png",
      description: "Resize and watermark photos",
      url: "https://setapp.com/apps/photobulk",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Meta",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/389/7448/icon-1675335200-63db9620a3946.png",
      description: "Manage music libraries",
      url: "https://setapp.com/apps/meta",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Be Focused",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/173/42056/icon-1741873453-67d2e12deefa4.png",
      description: "Manage to-do lists with timers",
      url: "https://setapp.com/apps/be-focused",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Diarly",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/347/43860/icon-1749557700-684821c419182.png",
      description: "Create a private personal diary",
      url: "https://setapp.com/apps/diarly",
      platforms: "Mac, iOS",
      rating: "97"
    },
    {
      name: "SSH Config Editor",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/395/43809/icon-1749051292-6840679c82bf3.png",
      description: "Manage SSH client config files",
      url: "https://setapp.com/apps/ssh-config-editor",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Awesome Habits",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/616/42378/icon-1745096293-68040e655a3fe.png",
      description: "Build better habits",
      url: "https://setapp.com/apps/awesome-habits",
      platforms: "Mac, iOS",
      rating: "97"
    },
    {
      name: "Merlin Project Express",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/241/41668/icon-1738139017-6799e5893e6bc.png",
      description: "Manage large projects",
      url: "https://setapp.com/apps/merlin-project-express",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "Hype",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/192/41603/icon-1737573990-67914666d5d5f.png",
      description: "Create animated HTML5 content",
      url: "https://setapp.com/apps/hype",
      platforms: "Mac",
      rating: "97"
    },
    {
      name: "BetterZip",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/245/7858/icon-1681236553-6435a249c1fd2.png",
      description: "Create and encrypt archives",
      url: "https://setapp.com/apps/betterzip",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "ForkLift",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/253/42746/icon-1748525039-68385fef5c0b1.png",
      description: "Manage files across servers",
      url: "https://setapp.com/apps/forklift",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "BusyCal",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/304/43841/icon-1749392085-68459ad5ecfbf.png",
      description: "Sync your tasks with calendar",
      url: "https://setapp.com/apps/busycal",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "AirBuddy",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/513/40120/icon-1726002236-66e0b43cd7afc.png",
      description: "Monitor your wireless devices",
      url: "https://setapp.com/apps/airbuddy",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "CodeRunner",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/122/41549/icon-1737112183-678a3a77b43aa.png",
      description: "Edit and run code faster",
      url: "https://setapp.com/apps/coderunner",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Mate Translate",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/248/9552/icon-1703223793-658521f1d6148.png",
      description: "Translate anything",
      url: "https://setapp.com/apps/mate-translate",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Renamer",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/136/40792/icon-1730733142-6728e4563df6a.png",
      description: "Rename a batch of files",
      url: "https://setapp.com/apps/renamer",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Xnapper",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/549/9000/icon-1696394577-651ced51d24d2.png",
      description: "Create shareable screenshots",
      url: "https://setapp.com/apps/xnapper",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Hookmark",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/544/42451/icon-1745878864-680fff5052376.png",
      description: "Link files, webpages, PDFs",
      url: "https://setapp.com/apps/hookmark",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "KeyKey Typing Tutor",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/274/39421/icon-1720817328-669196b02ad52.png",
      description: "Boost your typing speed",
      url: "https://setapp.com/apps/keykey-typing-tutor",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "News Explorer",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/249/42312/icon-1744274352-67f783b0c27a5.png",
      description: "Create your perfect RSS feed",
      url: "https://setapp.com/apps/news-explorer",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Expressions",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/243/42471/icon-1746014049-68120f61e101a.png",
      description: "Speed up work with regex",
      url: "https://setapp.com/apps/expressions",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Receipts",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/351/41795/icon-1739276776-67ab41e871a94.png",
      description: "Collect documents digitally",
      url: "https://setapp.com/apps/receipts",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Whisk",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/463/8892/icon-1695310657-650c634147f17.png",
      description: "Code editor with live preview",
      url: "https://setapp.com/apps/whisk",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Usage",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/637/43818/icon-1749136158-6841b31ef3039.png",
      description: "Monitor device performance",
      url: "https://setapp.com/apps/usage",
      platforms: "Mac, iOS",
      rating: "96"
    },
    {
      name: "PhotosRevive",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/508/41064/icon-1732756775-6747c527cfab2.png",
      description: "Colorize your old photos",
      url: "https://setapp.com/apps/photosrevive",
      platforms: "Mac, iOS",
      rating: "96"
    },
    {
      name: "Godspeed",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/714/43822/icon-1749174965-68424ab54b3f5.png",
      description: "Manage tasks faster",
      url: "https://setapp.com/apps/godspeed",
      platforms: "Mac, iOS",
      rating: "96"
    },
    {
      name: "SQLPro for SQLite",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/333/42122/icon-1742478513-67dc1cb168fd3.png",
      description: "Control SQLite databases",
      url: "https://setapp.com/apps/sqlpro-for-sqlite",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Transloader",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/481/10253/icon-1712837431-6617d33756e3b.png",
      description: "Start downloads on Mac remotely",
      url: "https://setapp.com/apps/transloader",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Asset Catalog Creator Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/426/41835/icon-1739661896-67b1224841142.png",
      description: "Prepare icons and app assets",
      url: "https://setapp.com/apps/asset-catalog-creator-pro",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Studies",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/231/39891/icon-1723640492-66bcaaacaa482.png",
      description: "Try smart study notes",
      url: "https://setapp.com/apps/studies",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Flinto",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/419/10164/icon-1711471249-6602fa9155d9b.png",
      description: "Design interactive app prototypes",
      url: "https://setapp.com/apps/flinto",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "ScreenFloat",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/753/42658/icon-1747738138-682c5e1a49712.png",
      description: "Power up your screenshots",
      url: "https://setapp.com/apps/screenfloat",
      platforms: "Mac",
      rating: "96"
    },
    {
      name: "Craft",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/554/42322/icon-1744394392-67f95898339a9.png",
      description: "Create and structure documents",
      url: "https://setapp.com/apps/craft",
      platforms: "Mac, iOS, Web",
      rating: "95"
    },
    {
      name: "Folx",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/202/42801/icon-1748963323-683f0ffbd0dc0.png",
      description: "Download videos and torrents",
      url: "https://setapp.com/apps/folx",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Forecast Bar",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/234/5651/icon-1678734015-640f72bf93fb1.png",
      description: "Receive weather alerts",
      url: "https://setapp.com/apps/forecast-bar",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Gitfox",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/385/41675/icon-1738172457-679a6829c6cd0.png",
      description: "Commit faster with superior diffs",
      url: "https://setapp.com/apps/gitfox",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "App Tamer",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/466/39811/icon-1722916151-66b19d375746f.png",
      description: "Reduce CPU usage",
      url: "https://setapp.com/apps/app-tamer",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Timemator",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/380/42266/icon-1743772162-67efda0297d7a.png",
      description: "Track productivity per project",
      url: "https://setapp.com/apps/timemator",
      platforms: "Mac, iOS",
      rating: "95"
    },
    {
      name: "Commander One",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/366/42052/icon-1741858073-67d2a5194d1f4.png",
      description: "Two-pane file manager",
      url: "https://setapp.com/apps/commander-one",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Keysmith",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/438/39289/icon-1718665165-6670bfcd18ac5.png",
      description: "Create a shortcut for any action",
      url: "https://setapp.com/apps/keysmith",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "BoltAI",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/626/42745/icon-1748503663-68380c6f619d4.png",
      description: "Write, code, learn with AI",
      url: "https://setapp.com/apps/boltai",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "ChronoSync Express",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/217/40765/icon-1730479186-67250452d2169.png",
      description: "Sync and back up folders",
      url: "https://setapp.com/apps/chronosync-express",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Presentify",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/401/42773/icon-1748820377-683ce1999ef93.png",
      description: "Give better presentations",
      url: "https://setapp.com/apps/presentify",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "NetSpot",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/223/41521/icon-1736870905-67868bf9ce735.png",
      description: "Find the best network connection",
      url: "https://setapp.com/apps/netspot",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Time Out",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/364/10078/icon-1710337184-65f1aca0acf44.png",
      description: "Remind yourself to take a break",
      url: "https://setapp.com/apps/time-out",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "start",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/377/42367/icon-1744970349-6802226d6784a.png",
      description: "Open any app faster",
      url: "https://setapp.com/apps/start",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Trickster",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/357/41461/icon-1736217057-677c91e120abd.png",
      description: "Quickly access recent files",
      url: "https://setapp.com/apps/trickster",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Euclid",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/435/8913/icon-1695837595-65146d9b44aa1.png",
      description: "Calculate with Excel formulas",
      url: "https://setapp.com/apps/euclid",
      platforms: "Mac, iOS",
      rating: "95"
    },
    {
      name: "Glyphs Mini",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/469/4408/icon-1618232817-607445f1711ef.png",
      description: "Edit and manage icon designs",
      url: "https://setapp.com/apps/glyphs-mini",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Paper",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/746/42597/icon-1749398986-6845b5ca795d9.png",
      description: "Write without distractions",
      url: "https://setapp.com/apps/paper",
      platforms: "Mac, iOS",
      rating: "95"
    },
    {
      name: "Novabench",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/605/42189/icon-1743118649-67e5e1394d007.png",
      description: "Evaluate computer performance",
      url: "https://setapp.com/apps/novabench",
      platforms: "Mac",
      rating: "95"
    },
    {
      name: "Sip",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/232/42197/icon-1743177567-67e6c75f1698c.png",
      description: "Pick colors for your designs",
      url: "https://setapp.com/apps/sip",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "Wallpaper Wizard",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/269/1726/icon-1593690549-5efdc9b5cc2f0.png",
      description: "Choose from 25K wallpapers",
      url: "https://setapp.com/apps/wallpaper-wizard",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "Endurance",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/301/42576/icon-1746973828-6820b484ae86f.png",
      description: "Extend your battery life",
      url: "https://setapp.com/apps/endurance",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "Mockuuups Studio",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/373/10202/icon-1712050881-660bd2c1d13ba.png",
      description: "Generate mockups for all devices",
      url: "https://setapp.com/apps/mockuuups-studio",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "Marked",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/80/42026/icon-1741607738-67ced33aba53e.png",
      description: "Live Markdown preview",
      url: "https://setapp.com/apps/marked",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "Lofi Garden",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/506/7515/icon-1677325365-63f9f435a368b.png",
      description: "Play lofi music in a click",
      url: "https://setapp.com/apps/lofi-garden",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "ToothFairy",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/319/43816/icon-1749136211-6841b3535cf06.png",
      description: "Connect Bluetooth devices faster",
      url: "https://setapp.com/apps/toothfairy",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "MenubarX",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/538/42337/icon-1744644568-67fd29d8898ce.png",
      description: "Browse the web from menu bar",
      url: "https://setapp.com/apps/menubarx",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "iFlicks",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/229/5236/icon-1636875938-6190bea26ea8a.png",
      description: "Upload videos to iTunes",
      url: "https://setapp.com/apps/iflicks",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "Movie Explorer Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/335/10025/icon-1709829117-65e9ebfdd2714.png",
      description: "Curate your movie collection",
      url: "https://setapp.com/apps/movie-explorer-pro",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "GlueMotion",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/324/41063/icon-1732813247-6748a1bf4f1a8.png",
      description: "Turn photos into time lapses",
      url: "https://setapp.com/apps/gluemotion",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "PocketCAS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/355/40804/icon-1730880531-672b2413b44d4.png",
      description: "Solve advanced math equations",
      url: "https://setapp.com/apps/pocketcas",
      platforms: "Mac",
      rating: "94"
    },
    {
      name: "Gemini",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/79/9042/icon-1696867211-6524238b4f102.png",
      description: "Find and remove duplicates",
      url: "https://setapp.com/apps/gemini",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "BusyContacts",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/369/43840/icon-1749326776-68449bb851452.png",
      description: "Build your contact database",
      url: "https://setapp.com/apps/busycontacts",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Core Shell",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/339/40002/icon-1724861736-66cf4d28414e0.png",
      description: "Full-featured SSH terminal",
      url: "https://setapp.com/apps/core-shell",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "MarginNote",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/323/8222/icon-1748318556-6835395c4b07b.png",
      description: "Study more productively",
      url: "https://setapp.com/apps/marginnote",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Prizmo",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/160/41752/icon-1738766542-67a378ce29d98.png",
      description: "Scan and OCR any document",
      url: "https://setapp.com/apps/prizmo",
      platforms: "Mac, iOS",
      rating: "93"
    },
    {
      name: "2Do",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/68/42482/icon-1746151123-681426d399e36.png",
      description: "Schedule tasks and reminders",
      url: "https://setapp.com/apps/2do",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "GoodTask",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/206/42251/icon-1743656461-67ee160d23e22.png",
      description: "Sync to-dos with reminders",
      url: "https://setapp.com/apps/goodtask",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "WiFi Signal",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/596/42294/icon-1744164549-67f5d6c522359.png",
      description: "Monitor your Wi-Fi connection",
      url: "https://setapp.com/apps/wifi-signal",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Workspaces",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/268/42258/icon-1743703876-67eecf44145bb.png",
      description: "Set up your work in one click",
      url: "https://setapp.com/apps/workspaces",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Noizio",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/130/3569/icon-1604047179-5f9bd14bc431b.png",
      description: "Turn on ambient sounds to focus",
      url: "https://setapp.com/apps/noizio",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "MetaImage",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/356/41358/icon-1734915652-6768b644d8129.png",
      description: "Edit image metadata",
      url: "https://setapp.com/apps/metaimage",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Swift Publisher",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/95/41473/icon-1736331218-677e4fd2d30c5.png",
      description: "Self-publish books or booklets",
      url: "https://setapp.com/apps/swift-publisher",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Focused",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/134/9293/icon-1699654599-654eabc721744.png",
      description: "Focus on your writing",
      url: "https://setapp.com/apps/focused",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Pagico",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/70/42787/icon-1748923372-683e73ec92068.png",
      description: "Manage teams and projects",
      url: "https://setapp.com/apps/pagico",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "MarsEdit",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/343/42338/icon-1744655073-67fd52e16f243.png",
      description: "Create your text content offline",
      url: "https://setapp.com/apps/marsedit",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Clariti",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/754/43828/icon-1749224551-68430c678d16b.png",
      description: "Boost mental clarity with sound",
      url: "https://setapp.com/apps/clariti",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Cloud Outliner",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/174/42713/icon-1748249451-68342b6baac84.png",
      description: "Create visual outlines",
      url: "https://setapp.com/apps/cloud-outliner",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "XCOrganizer",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/407/8157/icon-1685704795-6479d05b0e326.png",
      description: "Organize Xcode projects",
      url: "https://setapp.com/apps/xcorganizer",
      platforms: "Mac",
      rating: "93"
    },
    {
      name: "Mosaic",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/247/9106/icon-1698836080-65422e70e6dff.png",
      description: "Automatically organize windows",
      url: "https://setapp.com/apps/mosaic",
      platforms: "Mac",
      rating: "92"
    },
    {
      name: "Path Finder",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/362/42172/icon-1743009756-67e437dcb92b8.png",
      description: "Copy, delete, and sync files",
      url: "https://setapp.com/apps/path-finder",
      platforms: "Mac",
      rating: "92"
    },
    {
      name: "CloudMounter",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/289/42253/icon-1743678842-67ee6d7aeeda6.png",
      description: "Connect cloud storage to Finder",
      url: "https://setapp.com/apps/cloudmounter",
      platforms: "Mac",
      rating: "92"
    },
    {
      name: "Squash",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/209/40929/icon-1731928296-673b20e8a961c.png",
      description: "Compress and resize images",
      url: "https://setapp.com/apps/squash",
      platforms: "Mac",
      rating: "92"
    },
    {
      name: "Slidepad",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/367/42788/icon-1748925454-683e7c0eddcf7.png",
      description: "Keep most used apps at hand",
      url: "https://setapp.com/apps/slidepad",
      platforms: "Mac",
      rating: "92"
    },
    {
      name: "Dropshare",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/250/42493/icon-1746289475-681643438e929.png",
      description: "Save space with file sharing",
      url: "https://setapp.com/apps/dropshare",
      platforms: "Mac, iOS",
      rating: "92"
    },
    {
      name: "VidCap",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/558/42099/icon-1742341967-67da074f05fc7.png",
      description: "Generate captions for video",
      url: "https://setapp.com/apps/vidcap",
      platforms: "Mac, iOS",
      rating: "92"
    },
    {
      name: "Tripsy",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/523/42589/icon-1747072498-682235f2b097c.png",
      description: "Plan trips on Mac and iOS",
      url: "https://setapp.com/apps/tripsy",
      platforms: "Mac, iOS",
      rating: "92"
    },
    {
      name: "PDF Search",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/272/39404/icon-1719522579-667dd513092fa.png",
      description: "Find anything in a PDF with AI",
      url: "https://setapp.com/apps/pdf-search",
      platforms: "Mac, iOS",
      rating: "92"
    },
    {
      name: "Eter",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/627/42268/icon-1743775680-67efe7c02e15f.png",
      description: "Listen to internet radio",
      url: "https://setapp.com/apps/eter",
      platforms: "Mac, iOS",
      rating: "92"
    },
    {
      name: "Teleprompter App",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/609/42100/icon-1742342094-67da07cedaca3.png",
      description: "Record video with teleprompter",
      url: "https://setapp.com/apps/teleprompter-app",
      platforms: "Mac, iOS",
      rating: "92"
    },
    {
      name: "Boom 3D",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/291/43826/icon-1749207472-6842c9b062dd4.png",
      description: "Boost volume and audio quality",
      url: "https://setapp.com/apps/boom-3d",
      platforms: "Mac, iOS",
      rating: "91"
    },
    {
      name: "NotchNook",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/719/42362/icon-1744915474-68014c12efb6a.png",
      description: "Control Mac from the notch",
      url: "https://setapp.com/apps/notchnook",
      platforms: "Mac",
      rating: "91"
    },
    {
      name: "DisplayBuddy",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/489/42766/icon-1748774988-683c304c2ca82.png",
      description: "Control settings across monitors",
      url: "https://setapp.com/apps/displaybuddy",
      platforms: "Mac",
      rating: "91"
    },
    {
      name: "Diagrams",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/408/40176/icon-1726300270-66e5406e6521f.png",
      description: "Visualize with diagrams",
      url: "https://setapp.com/apps/diagrams",
      platforms: "Mac",
      rating: "91"
    },
    {
      name: "Chronicle",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/83/42541/icon-1747068772-6822276422f39.png",
      description: "Track bills and subscriptions",
      url: "https://setapp.com/apps/chronicle",
      platforms: "Mac, iOS",
      rating: "91"
    },
    {
      name: "Clop",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/612/42707/icon-1748187919-68333b0fc8980.png",
      description: "Shrink images, video, PDFs",
      url: "https://setapp.com/apps/clop",
      platforms: "Mac",
      rating: "91"
    },
    {
      name: "Focus 2",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/266/42278/icon-1743893238-67f1b2f666bec.png",
      description: "Block websites and apps",
      url: "https://setapp.com/apps/focus",
      platforms: "Mac",
      rating: "91"
    },
    {
      name: "Almighty",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/487/42639/icon-1747515066-6828f6ba09c10.png",
      description: "Unlock 50+ Mac shortcuts",
      url: "https://setapp.com/apps/almighty",
      platforms: "Mac",
      rating: "91"
    },
    {
      name: "Aquarelo",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/300/5565/icon-1643378565-61f3f785e6af0.png",
      description: "Simplify color management",
      url: "https://setapp.com/apps/aquarelo",
      platforms: "Mac",
      rating: "91"
    },
    {
      name: "Muse",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/628/43865/icon-1749614395-6848ff3bd49e3.png",
      description: "Put ideas on a single canvas",
      url: "https://setapp.com/apps/muse",
      platforms: "Mac, iOS",
      rating: "91"
    },
    {
      name: "TypingMind",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/583/40440/icon-1727938430-66fe3f7ee68ac.png",
      description: "Use new UI to chat with AI",
      url: "https://setapp.com/apps/typingmind",
      platforms: "Mac, Web",
      rating: "90"
    },
    {
      name: "Luminar Neo",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/566/42752/icon-1748605432-683999f81f0e9.png",
      description: "Improve your photos like a pro",
      url: "https://setapp.com/apps/luminar-neo",
      platforms: "Mac",
      rating: "90"
    },
    {
      name: "ChatMate for WhatsApp",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/240/40674/icon-1729783133-671a655d54dbe.png",
      description: "Personalize WhatsApp",
      url: "https://setapp.com/apps/chatmate-for-whatsapp",
      platforms: "Mac",
      rating: "90"
    },
    {
      name: "CameraBag Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/299/42519/icon-1746576494-681aa46e5c360.png",
      description: "Edit photos and videos",
      url: "https://setapp.com/apps/camerabag-pro",
      platforms: "Mac",
      rating: "90"
    },
    {
      name: "Moment",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/424/40407/icon-1727793531-66fc097bc6429.png",
      description: "Create countdown events",
      url: "https://setapp.com/apps/moment",
      platforms: "Mac",
      rating: "90"
    },
    {
      name: "Daily",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/504/42708/icon-1748198319-683363afddb8c.png",
      description: "Track time easily",
      url: "https://setapp.com/apps/daily",
      platforms: "Mac, iOS",
      rating: "90"
    },
    {
      name: "Nitro PDF Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/518/42755/icon-1749071187-6840b55359ae5.png",
      description: "Work with your PDFs",
      url: "https://setapp.com/apps/nitro-pdf-pro",
      platforms: "Mac, iOS",
      rating: "89"
    },
    {
      name: "Spark Mail",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/575/43810/icon-1749053067-68406e8ba3735.png",
      description: "Manage emails easier",
      url: "https://setapp.com/apps/spark-mail",
      platforms: "Mac, iOS",
      rating: "89"
    },
    {
      name: "World Clock Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/246/41965/icon-1741045317-67c63e4508341.png",
      description: "Work across time zones",
      url: "https://setapp.com/apps/world-clock-pro",
      platforms: "Mac, iOS",
      rating: "89"
    },
    {
      name: "iBoysoft MagicMenu",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/512/42345/icon-1744773554-67ff21b228833.png",
      description: "Expand your Mac’s right click",
      url: "https://setapp.com/apps/iboysoft-magicmenu",
      platforms: "Mac",
      rating: "89"
    },
    {
      name: "PDF Pals",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/606/42481/icon-1746107539-68137c9375583.png",
      description: "Chat with your PDFs",
      url: "https://setapp.com/apps/pdf-pals",
      platforms: "Mac",
      rating: "89"
    },
    {
      name: "Tayasui Sketches",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/255/5389/icon-1639474288-61b86470bad86.png",
      description: "Draw and create illustrations",
      url: "https://setapp.com/apps/tayasui-sketches",
      platforms: "Mac",
      rating: "89"
    },
    {
      name: "GetAPI",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/756/42618/icon-1747220736-6824790076491.png",
      description: "Manage API interactions easier",
      url: "https://setapp.com/apps/getapi",
      platforms: "Mac",
      rating: "89"
    },
    {
      name: "ClearVPN",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/433/42622/icon-1747307513-6825cbf994f32.png",
      description: "Use an intuitive VPN",
      url: "https://setapp.com/apps/clearvpn",
      platforms: "Mac, iOS",
      rating: "88"
    },
    {
      name: "Batteries",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/393/42767/icon-1748785895-683c5ae74dbc9.png",
      description: "Track all devices' battery levels",
      url: "https://setapp.com/apps/batteries",
      platforms: "Mac",
      rating: "88"
    },
    {
      name: "WidgetWall",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/528/42687/icon-1747926996-682f3fd48a02b.png",
      description: "Add widgets to Mac desktop",
      url: "https://setapp.com/apps/widget-wall",
      platforms: "Mac",
      rating: "88"
    },
    {
      name: "WallCal",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/541/41930/icon-1740579534-67bf22cec4e8d.png",
      description: "Pin clear calendar to desktop",
      url: "https://setapp.com/apps/wallcal",
      platforms: "Mac",
      rating: "88"
    },
    {
      name: "Capto",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/175/42078/icon-1742193995-67d7c54b2f8f8.png",
      description: "Create screen recordings",
      url: "https://setapp.com/apps/capto",
      platforms: "Mac",
      rating: "87"
    },
    {
      name: "Elephas",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/576/42780/icon-1748860950-683d8016cd020.png",
      description: "Manage knowledge with AI",
      url: "https://setapp.com/apps/elephas",
      platforms: "Mac, iOS",
      rating: "87"
    },
    {
      name: "GetSound",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/586/9717/icon-1706102658-65b10f82b952a.png",
      description: "Focus with AI soundscapes",
      url: "https://setapp.com/apps/getsound",
      platforms: "Mac",
      rating: "87"
    },
    {
      name: "Expenses",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/521/43864/icon-1749612036-6848f60475063.png",
      description: "Track your spending",
      url: "https://setapp.com/apps/expenses",
      platforms: "Mac, iOS",
      rating: "87"
    },
    {
      name: "Focused Work",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/699/42759/icon-1748710157-683b330d4602c.png",
      description: "Work with timers",
      url: "https://setapp.com/apps/focused-work-mac",
      platforms: "Mac, iOS",
      rating: "87"
    },
    {
      name: "iMeetingX",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/337/9518/icon-1702884273-657ff3b16c0a6.png",
      description: "Run meetings effectively",
      url: "https://setapp.com/apps/imeetingx",
      platforms: "Mac",
      rating: "87"
    },
    {
      name: "iBoysoft NTFS for Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/384/40354/icon-1727496466-66f7811273225.png",
      description: "Read/write to NTFS drives",
      url: "https://setapp.com/apps/iboysoft-ntfs-for-mac",
      platforms: "Mac",
      rating: "86"
    },
    {
      name: "Structured",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/555/42768/icon-1748786595-683c5da33211f.png",
      description: "Structure your day",
      url: "https://setapp.com/apps/structured",
      platforms: "Mac, iOS",
      rating: "86"
    },
    {
      name: "Get Backup Pro",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/210/9272/icon-1699433154-654b4ac208ada.png",
      description: "Back up only essential files",
      url: "https://setapp.com/apps/get-backup-pro",
      platforms: "Mac",
      rating: "86"
    },
    {
      name: "SheetPlanner",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/453/40067/icon-1725563539-66da0293bf0a3.png",
      description: "Plan and track project progress",
      url: "https://setapp.com/apps/sheetplanner",
      platforms: "Mac",
      rating: "86"
    },
    {
      name: "Focus",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/700/28918/icon-1716573034-6650d36a66766.png",
      description: "Block websites and social media",
      url: "https://setapp.com/apps/focus-mac",
      platforms: "Mac",
      rating: "86"
    },
    {
      name: "Rocket Typist",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/276/41821/icon-1739458538-67ae07eac8620.png",
      description: "Save time typing with text snippets",
      url: "https://setapp.com/apps/rocket-typist",
      platforms: "Mac, iOS",
      rating: "85"
    },
    {
      name: "uBar",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/306/6785/icon-1665525396-6345e6945f33c.png",
      description: "Make the Dock useful",
      url: "https://setapp.com/apps/ubar",
      platforms: "Mac",
      rating: "85"
    },
    {
      name: "Vivid",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/546/39922/icon-1724012110-66c2564e2b09f.png",
      description: "Double display brightness",
      url: "https://setapp.com/apps/vivid",
      platforms: "Mac",
      rating: "85"
    },
    {
      name: "Plus",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/584/42484/icon-1746174118-681480a6e0e16.png",
      description: "Work with text using AI",
      url: "https://setapp.com/apps/plus",
      platforms: "Mac",
      rating: "85"
    },
    {
      name: "AnyDroid",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/336/41846/icon-1739786426-67b308ba38644.png",
      description: "Move files between Mac and Android",
      url: "https://setapp.com/apps/anytrans-for-android",
      platforms: "Mac",
      rating: "85"
    },
    {
      name: "PliimPRO",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/406/9104/icon-1697480465-652d7f11a4cad.png",
      description: "Share screen distraction-free",
      url: "https://setapp.com/apps/pliimpro",
      platforms: "Mac",
      rating: "85"
    },
    {
      name: "Hustl",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/436/5289/icon-1637696825-619d453928e34.png",
      description: "Create timelapses of your screen",
      url: "https://setapp.com/apps/hustl",
      platforms: "Mac",
      rating: "85"
    },
    {
      name: "MonsterWriter",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/502/42757/icon-1748691704-683aeaf8555d7.png",
      description: "Write complex texts easily",
      url: "https://setapp.com/apps/monsterwriter",
      platforms: "Mac",
      rating: "85"
    },
    {
      name: "Clobbr",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/593/41323/icon-1734653161-6764b4e997d42.png",
      description: "Load test API endpoints",
      url: "https://setapp.com/apps/clobbr",
      platforms: "Mac",
      rating: "85"
    },
    {
      name: "Canary Mail",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/307/42730/icon-1748435453-683701fd4d865.png",
      description: "Write and manage emails",
      url: "https://setapp.com/apps/canary-mail",
      platforms: "Mac, iOS",
      rating: "84"
    },
    {
      name: "Calendars",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/623/42476/icon-1746037434-68126abadb8d9.png",
      description: "Track tasks, events, and plans",
      url: "https://setapp.com/apps/calendars",
      platforms: "Mac, iOS",
      rating: "84"
    },
    {
      name: "Spellar AI",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/635/42593/icon-1747110468-6822ca44591b2.png",
      description: "Smart Meeting Notes with AI",
      url: "https://setapp.com/apps/spellar-ai",
      platforms: "Mac, Web",
      rating: "84"
    },
    {
      name: "WhisperTranscribe",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/691/42434/icon-1745789075-680ea09336dbf.png",
      description: "Turn voice into text content",
      url: "https://setapp.com/apps/whisper-transcribe",
      platforms: "Mac",
      rating: "84"
    },
    {
      name: "GreenBooks",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/505/42101/icon-1742439491-67db844380d13.png",
      description: "Manage money easily",
      url: "https://setapp.com/apps/greenbooks",
      platforms: "Mac, iOS",
      rating: "84"
    },
    {
      name: "Smmall Cloud",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/744/41994/icon-1741202691-67c8a5031d9fd.png",
      description: "Share files and boost your brand",
      url: "https://setapp.com/apps/smmall-cloud",
      platforms: "Mac",
      rating: "84"
    },
    {
      name: "MurmurType",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/592/43811/icon-1749109056-68414940d76a1.png",
      description: "Transcribe your speech",
      url: "https://setapp.com/apps/murmur",
      platforms: "Mac",
      rating: "83"
    },
    {
      name: "Speeko",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/477/42496/icon-1746321274-6816bf7a5ee04.png",
      description: "Get better at public speaking",
      url: "https://setapp.com/apps/speeko",
      platforms: "Mac, iOS",
      rating: "83"
    },
    {
      name: "Mimir",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/451/43827/icon-1749222527-6843047f5921c.png",
      description: "Play and manage podcasts",
      url: "https://setapp.com/apps/mimir",
      platforms: "Mac, iOS",
      rating: "83"
    },
    {
      name: "UpLife",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/530/42483/icon-6814723cd9b41.jpg",
      description: "Your self-care assistant",
      url: "https://setapp.com/apps/uplife-mental-health-therapy-ios",
      platforms: "iOS",
      rating: "83"
    },
    {
      name: "IM+",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/296/3685/icon-1605729873-5fb57e510c414.png",
      description: "Bring all messengers into one",
      url: "https://setapp.com/apps/im+",
      platforms: "Mac",
      rating: "82"
    },
    {
      name: "DCommander",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/311/41384/icon-1735205346-676d21e2e8634.png",
      description: "Manage files in a dual-pane view",
      url: "https://setapp.com/apps/dcommander",
      platforms: "Mac",
      rating: "82"
    },
    {
      name: "Silenz",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/350/8914/icon-1695550446-65100beee3749.png",
      description: "Focus mode sound",
      url: "https://setapp.com/apps/silenz",
      platforms: "Mac",
      rating: "82"
    },
    {
      name: "mSecure",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/732/41618/icon-1737736000-6793bf40b30b3.png",
      description: "Store and sync passwords",
      url: "https://setapp.com/apps/msecure",
      platforms: "Mac, iOS",
      rating: "82"
    },
    {
      name: "Invoice Rex",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/749/42777/icon-1748848699-683d503b31d44.png",
      description: "Edit and track invoices",
      url: "https://setapp.com/apps/invoice-rex",
      platforms: "Mac, iOS",
      rating: "82"
    },
    {
      name: "AppWage",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/711/42286/icon-1744026714-67f3bc5a93dfb.png",
      description: "Track your app earnings",
      url: "https://setapp.com/apps/appwage",
      platforms: "Mac",
      rating: "82"
    },
    {
      name: "MoneyWiz 2025",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/565/42636/icon-1747415862-682773363aa5c.png",
      description: "Budget and manage bills",
      url: "https://setapp.com/apps/moneywiz",
      platforms: "Mac, iOS",
      rating: "81"
    },
    {
      name: "JustStream",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/370/42243/icon-1743592902-67ed1dc64ffe1.png",
      description: "Mirror Mac screen to TV",
      url: "https://setapp.com/apps/juststream",
      platforms: "Mac",
      rating: "81"
    },
    {
      name: "Pie Menu",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/697/40821/icon-1730974322-672c927219414.png",
      description: "Access app actions in a click",
      url: "https://setapp.com/apps/pie-menu",
      platforms: "Mac",
      rating: "80"
    },
    {
      name: "iShowU",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/720/42317/icon-1744317122-67f82ac23fa0b.png",
      description: "Record screen on Mac",
      url: "https://setapp.com/apps/ishowu",
      platforms: "Mac",
      rating: "80"
    },
    {
      name: "FreeYourMusic",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/737/42359/icon-1744872400-6800a3d0e8dc6.png",
      description: "Transfer your playlists",
      url: "https://setapp.com/apps/freeyourmusic",
      platforms: "Mac, iOS",
      rating: "79"
    },
    {
      name: "Boom",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/735/42783/icon-1748875965-683dbabdd428d.png",
      description: "Level-up your video calls",
      url: "https://setapp.com/apps/boom",
      platforms: "Mac",
      rating: "79"
    },
    {
      name: "Remote Mouse",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/193/1970/icon-1558078558-5cde645e2405f.png",
      description: "Control Mac from your phone",
      url: "https://setapp.com/apps/remote-mouse",
      platforms: "Mac",
      rating: "79"
    },
    {
      name: "AnyTrans for iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/328/42580/icon-1747015439-6821570f0d559.png",
      description: "Move files between macOS and iOS",
      url: "https://setapp.com/apps/anytrans",
      platforms: "Mac",
      rating: "78"
    },
    {
      name: "Backtrack",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/381/41528/icon-1736899813-6786fce564982.png",
      description: "Record audio from the past",
      url: "https://setapp.com/apps/backtrack",
      platforms: "Mac",
      rating: "78"
    },
    {
      name: "Taskheat",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/326/41099/icon-1732998743-674b7657aad16.png",
      description: "Learn to prioritize tasks",
      url: "https://setapp.com/apps/taskheat",
      platforms: "Mac, iOS",
      rating: "78"
    },
    {
      name: "Secrets 4",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/587/42673/icon-1747819273-682d9b0983304.png",
      description: "Store and manage passwords",
      url: "https://setapp.com/apps/secrets",
      platforms: "Mac, iOS",
      rating: "77"
    },
    {
      name: "Simon",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/201/7859/icon-1681321139-6436ecb3343c6.png",
      description: "Control and troubleshoot servers",
      url: "https://setapp.com/apps/simon",
      platforms: "Mac",
      rating: "77"
    },
    {
      name: "Chimeful",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/759/43808/icon-1749050058-684062ca28067.png",
      description: "Improve focus and stay mindful",
      url: "https://setapp.com/apps/chimeful",
      platforms: "Mac",
      rating: "77"
    },
    {
      name: "Subjects",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/619/41415/icon-1735670378-67743a6a3647c.png",
      description: "Track class schedule, homework",
      url: "https://setapp.com/apps/subjects",
      platforms: "Mac, iOS",
      rating: "76"
    },
    {
      name: "TeaCode",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/308/40239/icon-1726668573-66eadf1df1cc3.png",
      description: "Speed up coding with expanders",
      url: "https://setapp.com/apps/teacode",
      platforms: "Mac",
      rating: "76"
    },
    {
      name: "Coherence X",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/363/39301/icon-1718731966-6671c4be62880.png",
      description: "Turn websites into apps",
      url: "https://setapp.com/apps/coherence-pro",
      platforms: "Mac",
      rating: "74"
    },
    {
      name: "Keep It Shot",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/688/41516/icon-1736865151-6786757f32e88.png",
      description: "Rename screenshots with AI",
      url: "https://setapp.com/apps/keep-it-shot",
      platforms: "Mac",
      rating: "74"
    },
    {
      name: "Lacona",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/235/7221/icon-1671243506-639d26f20c993.png",
      description: "Tell your Mac what to do",
      url: "https://setapp.com/apps/lacona",
      platforms: "Mac",
      rating: "74"
    },
    {
      name: "Moonitor",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/314/8672/icon-1706610205-65b8ce1de936e.png",
      description: "Receive live updates on crypto",
      url: "https://setapp.com/apps/moonitor",
      platforms: "Mac",
      rating: "74"
    },
    {
      name: "CleanPresenter",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/581/40679/icon-1729846239-671b5bdf41873.png",
      description: "Present a single window",
      url: "https://setapp.com/apps/cleanpresenter",
      platforms: "Mac",
      rating: "73"
    },
    {
      name: "Spotless",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/294/2215/icon-1566995620-5d6674a445de5.png",
      description: "Auto-hide files and clean up",
      url: "https://setapp.com/apps/spotless",
      platforms: "Mac",
      rating: "73"
    },
    {
      name: "Numerics",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/594/42160/icon-1742954658-67e360a2042df.png",
      description: "Monitor your business data",
      url: "https://setapp.com/apps/numerics",
      platforms: "Mac, iOS",
      rating: "73"
    },
    {
      name: "Filmage Editor",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/545/9060/icon-1697012144-652659b0b21ce.png",
      description: "Easily edit videos like a pro",
      url: "https://setapp.com/apps/filmage-editor",
      platforms: "Mac",
      rating: "72"
    },
    {
      name: "AdLock",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/517/41861/icon-1740384397-67bc288ddd017.png",
      description: "Block annoying browser ads",
      url: "https://setapp.com/apps/adlock",
      platforms: "Mac, iOS",
      rating: "70"
    },
    {
      name: "Headway",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/618/43872/icon-684a7fb820d5f.jpg",
      description: "Get summaries for nonfiction",
      url: "https://setapp.com/apps/headway",
      platforms: "iOS, Web",
      rating: "70"
    },
    {
      name: "Unite",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/340/43849/icon-1749485603-6847082326200.png",
      description: "Create an app from a website",
      url: "https://setapp.com/apps/unite",
      platforms: "Mac",
      rating: "67"
    },
    {
      name: "Tab Finder",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/488/9319/icon-1700040755-65549033172ca.png",
      description: "Tabs from all browsers in one spot",
      url: "https://setapp.com/apps/tabfinder",
      platforms: "Mac",
      rating: "67"
    },
    {
      name: "n-Track Studio",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/238/7508/icon-1676044779-63e669eb0b3d9.png",
      description: "Record and edit music on Mac",
      url: "https://setapp.com/apps/n-track-studio",
      platforms: "Mac",
      rating: "67"
    },
    {
      name: "ByDesign",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/760/43851/icon-1749459354-6846a19a331ec.png",
      description: "Organize your work and life",
      url: "https://setapp.com/apps/bydesign",
      platforms: "Mac, iOS, Web",
      rating: "67"
    },
    {
      name: "Mental Walk",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/494/6892/icon-1666616857-63568e19275d5.png",
      description: "Reflect on your life",
      url: "https://setapp.com/apps/mentalwalk",
      platforms: "Mac",
      rating: "67"
    },
    {
      name: "Sidebar",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/729/42661/icon-1747749988-682c8c6458556.png",
      description: "Try a Dock alternative",
      url: "https://setapp.com/apps/sidebar",
      platforms: "Mac",
      rating: "64"
    },
    {
      name: "TaoGit",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/516/40716/icon-1730208153-6720e19925f0f.png",
      description: "Streamline your work with Git",
      url: "https://setapp.com/apps/taogit",
      platforms: "Mac",
      rating: "60"
    },
    {
      name: "SwiftyLaunch",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/738/42635/icon-1747402833-68274051f26a0.png",
      description: "Build iOS apps faster",
      url: "https://setapp.com/apps/swiftylaunch",
      platforms: "Mac",
      rating: "59"
    },
    {
      name: "CleanMy®Phone",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/399/43814/icon-684145403148e.jpg",
      description: "Remove digital clutter",
      url: "https://setapp.com/apps/gemini-photos",
      platforms: "iOS",
      rating: "58"
    },
    {
      name: "Launcher with Multiple Widgets",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/535/41592/icon-67909c33365bc.jpg",
      description: "Customize your home screen",
      url: "https://setapp.com/apps/launcher-with-multiple-widgets-ios",
      platforms: "iOS",
      rating: "57"
    },
    {
      name: "Voice Dream Reader",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/717/41922/icon-1740505258-67be00aa89d1a.png",
      description: "Listen to your texts",
      url: "https://setapp.com/apps/voice-dream-reader",
      platforms: "Mac",
      rating: "48"
    },
    {
      name: "Leave Me Alone",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/709/main/icon-7777ffdacb9dc.png",
      description: "Manage email subscriptions",
      url: "https://setapp.com/apps/leave-me-alone",
      platforms: "Web",
      rating: "0"
    },
    {
      name: "Ready to Send",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/607/main/icon-65719fa98f5e6.png",
      description: "Generate draft email replies",
      url: "https://setapp.com/apps/ready-to-send",
      platforms: "Web"
    }
  ], wa = `.tippy-box,
.tippy-content {
  background: transparent !important;
  /* padding: 0 !important;
  border: 0; */
}

.os-popover {
  width: 100%;
  max-width: 408px;
  max-height: 100vh;
  background-color: #fff;
  color: #26262b;
  padding-top: 0;
  border-radius: 24px;
  font-size: 14px;
  z-index: 1000;
  border: 1px solid #e5e5e5;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Avenir Next, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, sans-serif;
  overflow: hidden;
  overflow-y: auto;
}
.os-dialog .os-popover {
  max-width: 100%;
}
.os-available {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 6px;
  background: #f5f5f5;
  color: #77767a;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
}
.os-popover-header-inner {
  margin-top: 12px;
  display: flex;
  gap: 14px;
  padding-inline: 4px;
  padding-left: 36 px;
}

.os-popover-header img {
  width: 96px;
  height: 96px;
}
.os-popover-header h3 {
  margin: 0;
  padding: 0;
  max-width: 209px;
  color: #26262b;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 114.286% */
  letter-spacing: 1.15px;
}

.os-popover-header p {
  margin-top: 6px;
  margin-bottom: 0;
  color: #26262b;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
}

.os-popover-rating {
  margin-top: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.os-rating {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #26262b;
  font-size: 26px;
  font-weight: 700;
  line-height: 40.04px;
}

.os-rating::before {
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="%239D9CA2" fill-rule="evenodd" d="M9.637 7.41A6.015 6.015 0 0 0 9 10.11v6.39c0 1.65 1.342 3 3 3h5.343c1.284 0 2.425-.81 2.84-2.025l1.888-5.55c.663-1.935-.785-3.96-2.841-3.96H15v-4.98a1.485 1.485 0 0 0-2.805-.675l-2.558 5.1Zm-5.887.555a2.249 2.249 0 0 0-2.25 2.25v7.035a2.25 2.25 0 1 0 4.5 0v-7.035a2.249 2.249 0 0 0-2.25-2.25Z" clip-rule="evenodd"/></svg>');
}

.os-rating-amount {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #26262b;
  font-size: 14px;
  font-weight: 400;
  line-height: 20.02px;
}

.os-rating-amount::before {
  content: '';
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #26262b;
}

.os-popover-body {
  margin-top: 12px;
  padding-inline: 16px;
}

.os-popover-body p {
  margin-bottom: 12px;
  padding-top: 12px;
  border-top: 1px solid #ebebec;
  color: #26262b;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}

.os-popover-body ul {
  padding-inline: 0 !important;
  margin-inline: 0 !important;
  margin-bottom: 0 !important;
  display: grid;
  gap: 8px;
  padding-top: 12px;
  border-top: 1px solid #ebebec;
  list-style: none;
  list-style-position: inside;
}

.os-popover-body li {
  margin: 0 !important;
  padding: 0 !important;
  color: #26262b;
  font-size: 14px;
  font-style: normal;
  font-weight: 450;
  line-height: 22px;
  list-style-type: disc !important;
  list-style-image: none !important;
}

.os-popover-body a {
  color: #e6842e;
}

.os-popover-footer {
  margin-top: 12px;
  padding-inline: 16px;
}

.os-popover-footer-inner {
  display: flex;
  justify-content: center;
  gap: 16px;
  padding-top: 12px;
  border-top: 1px solid #ebebec;
}

.btn-download,
.btn-learn-more {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 22px;
  font-size: 16px;
  line-height: 24px;
  border: none;
  border-radius: 4px;
  transition: color 0.15sease-in-out, background-color 0.15sease-in-out,
    border-color 0.15sease-in-out, box-shadow 0.15sease-in-out;
  cursor: pointer;
}

.btn-download {
  background-color: #26262b;
  color: #fff;
}
.btn-download:hover {
  background-color: #36383e;
}

.btn-learn-more {
  background-color: #fff;
  border: 1px solid #26262b;
  color: #26262b !important;
  text-decoration: none !important;
}

.os-popover-security {
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-bottom: 16px;
}
.os-popover-security::before {
  content: '';
  width: 15px;
  height: 17px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="17" fill="none"><g clip-path="url(%23a)"><path fill="%2326262B" fill-rule="evenodd" d="M8.064.666a2 2 0 0 0-1.128 0L.5 2.553v6.389a7 7 0 0 0 4.362 6.483l1.884.766a2 2 0 0 0 1.508 0l1.883-.766A7 7 0 0 0 14.5 8.944V2.555L8.064.666ZM7.5 2.585l-5 1.467v4.89a5 5 0 0 0 3.116 4.632l1.884.766V2.585Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="%23fff" d="M.5.5h14v16H.5z"/></clipPath></defs></svg>');
}

.os-dialog {
  max-width: 100%;
  width: 100%;
  height: 100%;
  max-height: 100%;
  padding: 0;
  border: none;
  background: rgba(0, 0, 0, 0.2);
}

/* body:has(#signup-modal.is-open) :is(.os-dialog, .os-dialog::backdrop) {
  visibility: hidden;
  pointer-events: none;
} */
.os-dialog-inner {
  display: grid;
  place-content: end center;
  height: 100%;
  overflow-y: auto;
}

.os-dialog-close {
  margin-right: 16px;
  justify-self: end;
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" fill="none"><g clip-path="url(%23a)"><path fill="%23fff" fill-rule="evenodd" d="M20 40.02c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20Zm7.134-27.134a1.25 1.25 0 0 1 0 1.768l-5.366 5.366 5.366 5.366a1.25 1.25 0 0 1-1.768 1.768L20 21.788l-5.366 5.366a1.25 1.25 0 0 1-1.768-1.768l5.366-5.366-5.366-5.366a1.25 1.25 0 0 1 1.768-1.768L20 18.252l5.366-5.366a1.25 1.25 0 0 1 1.768 0Z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="%23fff" d="M0 .02h40v40H0z"/></clipPath></defs></svg>');
}

.os-dialog-content {
  margin-top: 12px;
}

.os-dialog .os-popover {
  border-radius: 24px 24px 0 0;
}

body:has(.os-dialog[open]) {
  overflow: hidden;
}
`;
  class xa {
    constructor() {
      this.popoverElement = null, this.aborters = [], this.init(), this.aborters = [];
    }
    init() {
      this.addStyles(), this.renderDialog();
    }
    content(t) {
      return (
        /* HTML */
        `<div class="os-popover-header">
        <div class="os-available">Available via Setapp</div>
        <div class="os-popover-header-inner">
          <img
            src="${t.imgSrc}"
            alt=""
            width="96"
            height="96"
            loading="lazy"
          />
          <div>
            <h3>${t.title}</h3>
            <p>${t.description}</p>
            <div class="os-popover-rating">
              ${t.ratingDetails ? (
          /* HTML */
          ` <div class="os-rating">
                      ${t.ratingDetails.percentage}
                    </div>
                    <div class="os-rating-amount">
                      ${t.ratingDetails.total} ratings
                    </div>`
        ) : ""}
            </div>
          </div>
        </div>
      </div>
      <div class="os-popover-body">
        <p>${t.body.text}</p>
        <ul>
          ${t.body.list.map((a) => `<li>${a}</li>`).join("")}
        </ul>
      </div>
      <div class="os-popover-footer">
        <div class="os-popover-footer-inner">
          <button class="btn-download" id="os-download">
            Try free for 7 days
          </button>
        </div>
      </div>
      <div class="os-popover-security">Security-tested</div>`
      );
    }
    returnHtml(t) {
      return (
        /* HTML */
        `
      <div class="os-popover">${this.content(t)}</div>
    `
      );
    }
    renderDialog() {
      var t;
      this.popoverElement = document.createElement("dialog"), this.popoverElement.classList.add("os-popover--dialog", "os-dialog"), this.popoverElement.id = "os-dialog", this.popoverElement.innerHTML = /* HTML */
      `
      <div class="os-dialog-inner">
        <button class="os-dialog-close" type="button"></button>
        <div class="os-dialog-content" id="os-dialog-content"></div>
      </div>
    `, (t = document.body) == null || t.appendChild(this.popoverElement);
    }
    showDialog(t) {
      var p;
      t && t !== "latest" && sessionStorage.setItem("os-tooltip-variant", JSON.stringify(t));
      const o = document.getElementById("os-dialog").querySelector(
        "#os-dialog-content"
      ), n = t === "latest" ? JSON.parse(sessionStorage.getItem("os-tooltip-variant")) : t;
      o.innerHTML = this.returnHtml(n), (p = this.popoverElement) == null || p.showModal(), this.eventListeners();
    }
    closeDialog() {
      if (!this.popoverElement) return;
      const t = this.popoverElement.querySelector(
        "#os-dialog-content"
      );
      this.popoverElement.close(), t.innerHTML = "", this.aborters.forEach((a) => {
        a.abort();
      }), this.aborters = [];
    }
    eventListeners() {
      if (!this.popoverElement) return;
      const t = document.getElementById("os-dialog"), a = t == null ? void 0 : t.querySelector(
        'button[type="button"]'
      );
      a == null || a.addEventListener("click", () => {
        this.closeDialog();
      });
      const o = new AbortController();
      this.aborters.push(o);
      const n = t.querySelector(
        ".btn-download"
      );
      n == null || n.addEventListener(
        "click",
        async () => {
          var s;
          (s = document.querySelector(".header__cta-button")) == null || s.click();
          const p = document.querySelector("#signup-modal");
          if (p) {
            const r = new MutationObserver((c) => {
              c.forEach((m) => {
                m.type === "attributes" && m.attributeName === "aria-hidden" && p.getAttribute("aria-hidden") === "true" && (r.disconnect(), this.showDialog("latest"));
              });
            });
            r.observe(p, { attributes: !0 });
          }
        },
        {
          signal: o.signal
        }
      );
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = wa, document.head.appendChild(t);
    }
  }
  const ka = [
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/82/40394/icon-1742891157-67e26895a932e.png",
      title: "Disk Drill",
      description: "Recover files and avoid data loss",
      link: "https://setapp.com/apps/disk-drill",
      ratingDetails: {
        percentage: "93%",
        total: "1224"
      },
      body: {
        text: "This first rated data recovery app can bring any kind of data back regardless of the loss cause. Indeed, no matter whether your stuff has gone because of data corruption, unintended removal, and disk utility error, it will help.",
        list: [
          "Recover deleted files",
          "Simple and fast data backup",
          "Hard drive data recovery",
          "Powerful data protection"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/217/40765/icon-1730479186-67250452d2169.png",
      title: "ChronoSync Express",
      description: "Sync and back up folders",
      link: "/apps/chronosync-express",
      ratingDetails: {
        percentage: "95%",
        total: "389"
      },
      body: {
        text: "Chronosync Express gives you peace of mind for the security of your files, office and personal data. This consistent application keeps your data safe and updated, no matter where you happen to be.",
        list: [
          "Home folder backup or sync",
          "Easy connection to Macs, iPhones and iPads",
          "File servers backup and auto mount",
          "Email and system notifications supported"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/210/9272/icon-1699433154-654b4ac208ada.png",
      title: "Backup Pro",
      description: "Back up only essential files",
      link: "/apps/get-backup-pro",
      ratingDetails: {
        percentage: "86%",
        total: "281"
      },
      body: {
        text: "Try Get Backup Pro. It's a good mix of backup methods, coming with four varying ways of backups: simple copy, clone, incremental and versioned. Plus, it's used once you need to recover data that has been accidentally deleted from your Mac.",
        list: [
          "Backup only those units you want",
          "Scheduled backups with Stealth mode",
          "Recover to any computer",
          "Folder synchronization"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/289/42253/icon-1743678842-67ee6d7aeeda6.png",
      title: "CloudMounter",
      description: "Connect cloud storage to Finder",
      link: "/apps/cloudmounter",
      ratingDetails: {
        percentage: "90%",
        total: "1234"
      },
      body: {
        text: "CloudMounter connects your cloud storage accounts like Google Drive, Dropbox, Amazon S3, OneDrive, and others to your Mac's Finder so you can treat them as regular, local drives.",
        list: [
          "Secure cloud data encryption",
          "Streamlined into your Finder",
          "Access multiple cloud accounts",
          "Mount all Cloud storages as local disks"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/222/42263/icon-1743756630-67ef9d568e1e3.png",
      title: "Downie",
      description: "Download YouTube videos",
      link: "/apps/downie",
      ratingDetails: {
        percentage: "98%",
        total: "4372"
      },
      body: {
        text: "Find a video you want to download, then drag and drop the link into the app, or take advantage of a Downie browser extension doing it for you. That's literally all it takes to get that video on your Mac.",
        list: [
          "Download YouTube videos",
          "Download MP4 or just the audio",
          "Simply drag-and-drop an URL",
          "Save 4K YouTube videos"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/371/42285/icon-1744023104-67f3ae4007aa4.png",
      title: "Pulltube",
      description: "Download and trim videos",
      link: "https://setapp.com/apps/pulltube",
      ratingDetails: {
        percentage: "98%",
        total: "1478"
      },
      body: {
        text: "Pulltube is a Mac app that enables you to save any type of video and audio content from the top websites like YouTube and Vimeo — in the best quality. 4K, 8K, HD, and 60fps videos are covered.",
        list: [
          "Download from 1000+ sites",
          "Trim your video and audio",
          "Capture video subtitles",
          "Download faster via extensions"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/321/42059/icon-1741882724-67d3056489850.png",
      title: "CleanShot X",
      description: "Take better screenshots and GIFs",
      link: "/apps/cleanshot",
      ratingDetails: {
        percentage: "99%",
        total: "11843"
      },
      body: {
        text: "CleanShot is the ultimate screen recording app made for macOS. With its rich toolkit, CleanShot actually feels like 6 apps in one. You can use it to swiftly capture Mac's screen without desktop icons, record and trim video, annotate, save screenshots to dedicated cloud, and more.",
        list: [
          "Record screen",
          "Hide desktop icons",
          "Annotate, highlight or blur",
          "Quick Access Overlay"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/328/41359/icon-1734924881-6768da51c8c1a.png",
      title: "AnyTrans for iOS",
      description: "Move files between macOS and iOS",
      link: "/apps/anytrans",
      body: {
        text: "The app instantly backups and copies your iPhone content to Mac, as well as transfers data across iOS, iTunes and iCloud. Connect a device and watch your content fly.",
        list: [
          "Schedule instant iPhone backups",
          "Manage iTunes and iCloud content",
          "Secure management of backups",
          "Download media from 900+ sites"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/67/41952/icon-1740773686-67c219360b852.png",
      title: "Ulysses",
      description: "Write and publish from one app",
      link: "/apps/ulysses",
      ratingDetails: {
        percentage: "99%",
        total: "2127"
      },
      body: {
        text: "It's an insanely functional writing program, yet it stays completely out of your way when you just need a page to write on. With Ulysses, every step of your story's lifecycle gets easier: you can write undistracted, format with a few keystrokes, and publish without leaving the app.",
        list: [
          "Write without distractions",
          "Stay safe with iCloud sync",
          "Export beautiful ebooks and PDFs",
          "Publish to WordPress or Medium"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/554/42201/icon-1743413950-67ea62be54f57.png",
      title: "Craft",
      description: "Create and structure documents",
      link: "/apps/craft",
      ratingDetails: {
        percentage: "99%",
        total: "2127"
      },
      body: {
        text: "Create efficient and visually pleasing documents to track your projects, ideas, plans, and more. File away your items into neatly organized folders or interlink via a master document.",
        list: [
          "Share what you are working on",
          "Use AI assistant",
          "Structure your items",
          "Collaborate easily"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/219/42264/icon-1743758208-67efa380b6636.png",
      title: "Permute",
      description: "Convert audio, images, and videos",
      link: "/apps/permute",
      ratingDetails: {
        percentage: "98%",
        total: "3778"
      },
      body: {
        text: "Permute is a quick image, audio, and video converter. You can use it for files of all formats because Permute can convert anything into anything.",
        list: [
          "Video converter",
          "Image converter",
          "Audio converter",
          "Video to audio converter"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/566/0/icon-1741357275-67cb00db1ded3.png",
      title: "Luminar Neo",
      description: "Improve your photos like a pro",
      link: "/apps/luminar-neo",
      ratingDetails: {
        percentage: "90%",
        total: "700"
      },
      body: {
        text: "Luminar Neo does everything you need done with your shots — from simple color and vibrancy fixes to more advanced clutter removal, sky replacement, improving the lighting in your photos and more.",
        list: [
          "Enhance photos with AI tools",
          "Utilize extensions",
          "Get the colors just right",
          "Use presets"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/299/42088/icon-1742267911-67d8e607487c0.png",
      title: "CameraBag Pro",
      description: "Edit photos and videos",
      link: "/apps/camerabag-pro",
      ratingDetails: {
        percentage: "90%",
        total: "428"
      },
      body: {
        text: "Create breathtaking photos and films with professional one-click filters, or tweak and adjust image settings precisely to impress your friends, colleagues, and clients easier than ever before.",
        list: [
          "Professional filters at the ready",
          "Quick and easy batch changes",
          "Intuitive adjustment tiles",
          "Award-winning interface"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/298/8541/icon-1691068510-64cba85e8b087.png",
      title: "TouchRetouch",
      description: "Remove objects from photos",
      link: "/apps/touchretouch",
      ratingDetails: {
        percentage: "98%",
        total: "680"
      },
      body: {
        text: "Don't let a poorly placed trash can or powerline ruin an otherwise perfect photo. With TouchRetouch, your Mac becomes an all-in-one photo retouching studio where you can get your images looking their best.",
        list: [
          "Remove unwanted objects",
          "Crop and edit photos",
          "Photo retouching in a click",
          "Line removal"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/433/42254/icon-1743694727-67eeab8756821.png",
      title: "ClearVPN",
      description: "Use an intuitive VPN",
      link: "/apps/clearvpn",
      ratingDetails: {
        percentage: "88%",
        total: "2686"
      },
      body: {
        text: "The app offers simple, ready-made tools that help you spend less time tweaking your VPN's settings and more time actually doing what you want done. Stay more anonymous online, protect your personal information, connect to servers from a specific country and more in a click.",
        list: [
          "Deploy a VPN easily",
          "Change geolocation",
          "Enjoy perfectly usable speeds",
          "Keep your data anonymous"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/517/41861/icon-1740384397-67bc288ddd017.png",
      title: "AddLock",
      description: "Block annoying browser ads",
      link: "/apps/adlock",
      ratingDetails: {
        percentage: "69%",
        total: "711"
      },
      body: {
        text: "AdLock — a simple blocker for intrusive pop-up ads, annoying online chats, snoopers, and trackers. Save traffic on autoplay videos and remove unwanted distractions by blocking out ad types you'd like to avoid.",
        list: [
          "Block intrusive ads",
          "Use flexible blocking",
          "Browse safely",
          "Remove distractions"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/496/41929/icon-1740575425-67bf12c1bdfa7.png",
      title: "Pareto Security",
      description: "Check your security settings",
      link: "/apps/pareto-security",
      ratingDetails: {
        percentage: "97%",
        total: "634"
      },
      body: {
        text: "Pareto Security checks your device to see if you've utilized all these solutions and lets you know what can be improved. Always keep your Mac security settings up to par with this helpful tool.",
        list: [
          "Easy security",
          "Menu bar interface",
          "Security checklist",
          "Automatic checks"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/587/41798/icon-1739292259-67ab7e63760de.png",
      title: "Secrets 4",
      description: "Store and manage passwords",
      link: "/apps/secrets",
      ratingDetails: {
        percentage: "77%",
        total: "151"
      },
      body: {
        text: "Keep your secrets secret with Secrets 4, an updated tool to lock your sensitive information away. Your passwords are not synced to the app's server and are stored on your device or in your iCloud. Easily generate, store, use, and share your passwords.",
        list: [
          "Store sensitive information",
          "Generate passwords",
          "Share passwords",
          "Sync between devices"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/194/10197/icon-1711963165-660a7c1d7fdbc.png",
      title: "Archiver",
      description: "Compress and unarchive files",
      link: "/apps/archiver",
      ratingDetails: {
        percentage: "97%",
        total: "1435"
      },
      body: {
        text: "Zip, unpack and encrypt archives, split big files. You will enjoy its smooth interface, compelling features, and a rapid workflow. Definitely one of the today's most feature-rich file extractor and compressor programs.",
        list: [
          "Unpack folders and files in a snap",
          "Compress files to get more space",
          "Encrypt and password protect archives",
          "Preview files in archive without their opening"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=1/https://store.setapp.com/app/245/7858/icon-1681236553-6435a249c1fd2.png",
      title: "BetterZip",
      description: "Create and encrypt archives",
      link: "/apps/betterzip",
      ratingDetails: {
        percentage: "96%",
        total: "2353"
      },
      body: {
        text: "Delete the unnecessary files right in the archives, preview with Quick Look, rename or move files or folders there - no need to recompress!",
        list: [
          "Convenient ZIP file reader and manager",
          "Archive comments for ZIP and RAR formats",
          "Reliable password generator and manager",
          "Over 30 archive formats support + ISO extractor"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/78/43873/icon-1749713159-684a8107ee73d.png",
      title: "CleanMyMac",
      description: "Tidy up your Mac",
      link: "https://setapp.com/apps/cleanmymac",
      ratingDetails: {
        percentage: "97%",
        total: "15454"
      },
      body: {
        text: "CleanMyMac is an all-in-one Mac care app. Run performance optimization, free up space, eliminate duplicates, and manage apps seamlessly.",
        list: [
          "Care smarter",
          "Steer clear of malware",
          "Free up space",
          "Declutter your space"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/144/41794/icon-1739274958-67ab3ace7a0bf.png",
      title: "iStat Menus",
      description: "Track CPU, GPU, sensors, etc.",
      link: "https://setapp.com/apps/istat-menus",
      ratingDetails: {
        percentage: "97%",
        total: "4991"
      },
      body: {
        text: "The most comprehensive Mac monitor to date. iStat Menus is a fully-equipped system data collector that lives in your menu bar and provides vital info about the key indicators.",
        list: ["CPU & GPU", "Disk usage & activity", "Memory", "Sensors"]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/493/10507/icon-1715515857-6640b1d134f36.png",
      title: "QuitAll",
      description: "Speed up Mac by quitting all apps",
      link: "https://setapp.com/apps/quit-all-mac",
      ratingDetails: {
        percentage: "98%",
        total: "1635"
      },
      body: {
        text: "Love handling all the tasks at the same time but hate closing multiple apps one by one? Or find yourself stuck when your machine stalls due to too many apps running in the background?",
        list: [
          "Quick quit",
          "Handle background apps",
          "Force quit",
          "Customize to your needs"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/301/42576/icon-1746973828-6820b484ae86f.png",
      title: "Endurance",
      description: "Extend your battery life",
      link: "https://setapp.com/apps/endurance",
      ratingDetails: {
        percentage: "94%",
        total: "569"
      },
      body: {
        text: "Did you ever wish you could squeeze a little more battery life out of your MacBook? Now there’s Endurance, the app designed to make your laptop battery last longer while improving its overall battery health.",
        list: [
          "Lower the lights",
          "Snooze inactive apps",
          "Toggle your turbo",
          "Lessen dependence on Flash"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/483/42676/icon-1747828119-682dbd97182a6.png",
      title: "AlDente Pro",
      description: "Set battery charging limits",
      link: "https://setapp.com/apps/aldente-pro",
      ratingDetails: {
        percentage: "98%",
        total: "2847"
      },
      body: {
        text: "You may have heard that having your device plugged in and at 100% all day long is not the best for the battery. You may also have been trying to make sure you don’t go below 20 or 30% on your battery.",
        list: [
          "Set charging limit",
          "Stop charging when hot",
          "Run on battery when plugged in",
          "Monitor status and manage"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/376/42548/icon-1746731563-681d022b89238.png",
      title: "Mission Control",
      description: "Close windows from Mission Control",
      link: "https://setapp.com/apps/mission-control-plus",
      ratingDetails: {
        percentage: "98%",
        total: "968"
      },
      body: {
        text: "Tweak Mac’s native Mission Control feature to make the most out of it. Mission Control Plus is an app that adds the close button to all open windows you can view from Mission Control on Mac. It also covers a few shortcuts for quick actions like closing apps or killing active processes.",
        list: [
          "Master Mission Control and improve it",
          "Useful shortcuts for batch actions",
          "Close windows in Mission Control",
          "Enjoy the native experience"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/528/42687/icon-1747926996-682f3fd48a02b.png",
      title: "WidgetWall",
      description: "Add widgets to Mac desktop",
      link: "https://setapp.com/apps/widget-wall",
      ratingDetails: {
        percentage: "88%",
        total: "469"
      },
      body: {
        text: "Customize your Mac desktop with widgets — add favorite apps, pictures, Mac stats, and even websites for quick access. Build your very own widget wall on your desktop with WidgetWall.",
        list: [
          "Desktop overlay",
          "Desktop browser widget",
          "Quick access to tools",
          "Easy customization"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/153/42799/icon-1748962599-683f0d271f5a8.png",
      title: "Bartender",
      description: "Personalize your menu bar",
      link: "https://setapp.com/apps/bartender",
      ratingDetails: {
        percentage: "99%",
        total: "14530"
      },
      body: {
        text: "Bartender is a slick utility app and a one-stop menu bar organizer for Mac. It helps to organize, search, and actually use your Mac menu bar icons while also keeping your desktop tidy.",
        list: [
          "Customize the macOS menu bar",
          "Search menu items",
          "Reorder all icons",
          "Make your own hotkeys"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/321/42718/icon-1748347773-6835ab7ddfd5d.png",
      title: "CleanShot X",
      description: "Take better screenshots and GIFs",
      link: "https://setapp.com/apps/cleanshot",
      ratingDetails: {
        percentage: "99%",
        total: "12298"
      },
      body: {
        text: "CleanShot is the ultimate screen recording app made for macOS. With its rich toolkit, CleanShot actually feels like 6 apps in one. You can use it to swiftly capture Mac’s screen without desktop icons, record and trim video, annotate, save screenshots to dedicated cloud, and more.",
        list: [
          "CleanShot Cloud",
          "Quick Access Overlay",
          "Hide desktop icons",
          "Simple yet powerful"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/428/42692/icon-1747967217-682fdcf1a2474.png",
      title: "Session",
      description: "Work in short intervals",
      link: "https://setapp.com/apps/session",
      ratingDetails: {
        percentage: "98%",
        total: "1943"
      },
      body: {
        text: "Session is a focus app that helps build your productivity momentum. Block distractions, work in short intervals, and take regular breaks to recharge your mind. What makes Session stand out is its huge focus on analytics.",
        list: [
          "25 minutes of focused work",
          "Reflect on your sessions",
          "Block distractions",
          "See how you perform over time"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/518/42755/icon-1749071187-6840b55359ae5.png",
      title: "Nitro PDF Pro",
      description: "Work with your PDFs",
      link: "https://setapp.com/apps/nitro-pdf-pro",
      ratingDetails: {
        percentage: "89%",
        total: "2746"
      },
      body: {
        text: "Discover this all-round tool for all your PDF editing needs. Create and edit PDFs in Nitro PDF Pro, merge multiple files into one document, or convert into popular formats. ",
        list: [
          "Create and edit PDFs",
          "Merge PDFs",
          "Annotate PDFs",
          "Convert PDFs"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/210/9272/icon-1699433154-654b4ac208ada.png",
      title: "Get Backup Pro",
      description: "Back up only essential files",
      link: "https://setapp.com/apps/get-backup-pro",
      ratingDetails: {
        percentage: "86%",
        total: "288"
      },
      body: {
        text: "You've got a lot of data stored on your computer, right? How about a reliable backup utility for your Mac to be able to resist any kind of data-loss catastrophes? Try Get Backup Pro. It’s a good mix of backup methods, coming with four varying ways of backups: simple copy, clone, incremental and versioned.",
        list: [
          "Backup only those units you want",
          "Folder synchronization",
          "Incremental and compressed backups",
          "Scheduled backups with Stealth mode"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/136/40792/icon-1730733142-6728e4563df6a.png",
      title: "Renamer",
      description: "Rename a batch of files",
      link: "https://setapp.com/apps/renamer",
      ratingDetails: {
        percentage: "96%",
        total: "935"
      },
      body: {
        text: "What if you could rename lots of files in a snap? Feels wonderful, right? Renamer makes it possible! This robust application takes the pain out of renaming and managing dozens of files.",
        list: [
          "Multiple ways to rename files",
          "Keep your music organized",
          "Live preview",
          "Convert upper and lower cases"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/122/41549/icon-1737112183-678a3a77b43aa.png",
      title: "CodeRunner",
      description: "Edit and run code faster",
      link: "https://setapp.com/apps/coderunner",
      ratingDetails: {
        percentage: "96%",
        total: "1186"
      },
      body: {
        text: "Simplify your software development with the lightning-fast code editor. Write, run, and debug quickly from a single app with out-of-the-box support for more than 25 languages.",
        list: [
          "Build smarter",
          "Debug like a dream",
          "Beautify your code",
          "Search docs swiftly"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/606/42481/icon-1746107539-68137c9375583.png",
      title: "PDF Pals",
      description: "Chat with your PDFs",
      link: "https://setapp.com/apps/pdf-pals",
      ratingDetails: {
        percentage: "89%",
        total: "354"
      },
      body: {
        text: "What if the long report you’ve been going over could talk? What if you could just type in some questions and it could give you the answer right away, without having to read (or re-read) it top to bottom? PDF Pals app does exactly that.",
        list: [
          "Interact with your PDFs",
          "No uploads needed",
          "Get answers with citations",
          "Customize your chat"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/592/43811/icon-1749109056-68414940d76a1.png",
      title: "MurmurType",
      description: "Transcribe your speech",
      link: "https://setapp.com/apps/murmur",
      ratingDetails: {
        percentage: "83%",
        total: "323"
      },
      body: {
        text: "Got a lot to say and not a lot of time to type it all out? MurmurType is here to help. Record your voice and get the transcription right away. And if you prefer to speak another language, you can set the app to translate your speech into English.",
        list: [
          "Easy-to-use interface",
          "Quick translation",
          "Automated silence tracker",
          "Keyboard shortcuts"
        ]
      }
    },
    {
      imgSrc: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=128,dpr=2/https://store.setapp.com/app/607/main/icon-65719fa98f5e6.png",
      title: "Ready to Send",
      description: "Generate draft email replies",
      link: "https://setapp.com/apps/ready-to-send",
      body: {
        text: "Start your day with some work already done using Ready to Send. This web app connects to your Gmail, finds unread emails that need replying, and generates handy drafts. All you need to do is review, edit, and send.",
        list: [
          "Get automated email reply drafts",
          "Disable auto-generated responses",
          "Customize response style",
          "Add calendar links automatically"
        ]
      }
    }
  ];
  var W = "top", _ = "bottom", U = "right", H = "left", le = "auto", Dt = [W, _, U, H], wt = "start", Et = "end", Ma = "clippingParents", Ae = "viewport", Pt = "popper", Sa = "reference", Te = /* @__PURE__ */ Dt.reduce(function(e, t) {
    return e.concat([t + "-" + wt, t + "-" + Et]);
  }, []), De = /* @__PURE__ */ [].concat(Dt, [le]).reduce(function(e, t) {
    return e.concat([t, t + "-" + wt, t + "-" + Et]);
  }, []), Ca = "beforeRead", qa = "read", Oa = "afterRead", Aa = "beforeMain", Ta = "main", Da = "afterMain", Ea = "beforeWrite", Pa = "write", La = "afterWrite", Ra = [Ca, qa, Oa, Aa, Ta, Da, Ea, Pa, La];
  function Z(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function $(e) {
    if (e == null)
      return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }
    return e;
  }
  function ut(e) {
    var t = $(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function G(e) {
    var t = $(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function de(e) {
    if (typeof ShadowRoot > "u")
      return !1;
    var t = $(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function Ba(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(a) {
      var o = t.styles[a] || {}, n = t.attributes[a] || {}, p = t.elements[a];
      !G(p) || !Z(p) || (Object.assign(p.style, o), Object.keys(n).forEach(function(s) {
        var r = n[s];
        r === !1 ? p.removeAttribute(s) : p.setAttribute(s, r === !0 ? "" : r);
      }));
    });
  }
  function Fa(e) {
    var t = e.state, a = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    return Object.assign(t.elements.popper.style, a.popper), t.styles = a, t.elements.arrow && Object.assign(t.elements.arrow.style, a.arrow), function() {
      Object.keys(t.elements).forEach(function(o) {
        var n = t.elements[o], p = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : a[o]), r = s.reduce(function(c, m) {
          return c[m] = "", c;
        }, {});
        !G(n) || !Z(n) || (Object.assign(n.style, r), Object.keys(p).forEach(function(c) {
          n.removeAttribute(c);
        }));
      });
    };
  }
  const Ee = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: Ba,
    effect: Fa,
    requires: ["computeStyles"]
  };
  function K(e) {
    return e.split("-")[0];
  }
  var ft = Math.max, Nt = Math.min, xt = Math.round;
  function me() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function Pe() {
    return !/^((?!chrome|android).)*safari/i.test(me());
  }
  function kt(e, t, a) {
    t === void 0 && (t = !1), a === void 0 && (a = !1);
    var o = e.getBoundingClientRect(), n = 1, p = 1;
    t && G(e) && (n = e.offsetWidth > 0 && xt(o.width) / e.offsetWidth || 1, p = e.offsetHeight > 0 && xt(o.height) / e.offsetHeight || 1);
    var s = ut(e) ? $(e) : window, r = s.visualViewport, c = !Pe() && a, m = (o.left + (c && r ? r.offsetLeft : 0)) / n, d = (o.top + (c && r ? r.offsetTop : 0)) / p, k = o.width / n, x = o.height / p;
    return {
      width: k,
      height: x,
      top: d,
      right: m + k,
      bottom: d + x,
      left: m,
      x: m,
      y: d
    };
  }
  function ue(e) {
    var t = kt(e), a = e.offsetWidth, o = e.offsetHeight;
    return Math.abs(t.width - a) <= 1 && (a = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: a,
      height: o
    };
  }
  function Le(e, t) {
    var a = t.getRootNode && t.getRootNode();
    if (e.contains(t))
      return !0;
    if (a && de(a)) {
      var o = t;
      do {
        if (o && e.isSameNode(o))
          return !0;
        o = o.parentNode || o.host;
      } while (o);
    }
    return !1;
  }
  function at(e) {
    return $(e).getComputedStyle(e);
  }
  function Ia(e) {
    return ["table", "td", "th"].indexOf(Z(e)) >= 0;
  }
  function rt(e) {
    return ((ut(e) ? e.ownerDocument : (
      // $FlowFixMe[prop-missing]
      e.document
    )) || window.document).documentElement;
  }
  function Vt(e) {
    return Z(e) === "html" ? e : (
      // this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      e.parentNode || // DOM Element detected
      (de(e) ? e.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      rt(e)
    );
  }
  function Re(e) {
    return !G(e) || // https://github.com/popperjs/popper-core/issues/837
    at(e).position === "fixed" ? null : e.offsetParent;
  }
  function za(e) {
    var t = /firefox/i.test(me()), a = /Trident/i.test(me());
    if (a && G(e)) {
      var o = at(e);
      if (o.position === "fixed")
        return null;
    }
    var n = Vt(e);
    for (de(n) && (n = n.host); G(n) && ["html", "body"].indexOf(Z(n)) < 0; ) {
      var p = at(n);
      if (p.transform !== "none" || p.perspective !== "none" || p.contain === "paint" || ["transform", "perspective"].indexOf(p.willChange) !== -1 || t && p.willChange === "filter" || t && p.filter && p.filter !== "none")
        return n;
      n = n.parentNode;
    }
    return null;
  }
  function Lt(e) {
    for (var t = $(e), a = Re(e); a && Ia(a) && at(a).position === "static"; )
      a = Re(a);
    return a && (Z(a) === "html" || Z(a) === "body" && at(a).position === "static") ? t : a || za(e) || t;
  }
  function fe(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
  }
  function Rt(e, t, a) {
    return ft(e, Nt(t, a));
  }
  function ja(e, t, a) {
    var o = Rt(e, t, a);
    return o > a ? a : o;
  }
  function Be() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function Fe(e) {
    return Object.assign({}, Be(), e);
  }
  function Ie(e, t) {
    return t.reduce(function(a, o) {
      return a[o] = e, a;
    }, {});
  }
  var Wa = function(t, a) {
    return t = typeof t == "function" ? t(Object.assign({}, a.rects, {
      placement: a.placement
    })) : t, Fe(typeof t != "number" ? t : Ie(t, Dt));
  };
  function Ha(e) {
    var t, a = e.state, o = e.name, n = e.options, p = a.elements.arrow, s = a.modifiersData.popperOffsets, r = K(a.placement), c = fe(r), m = [H, U].indexOf(r) >= 0, d = m ? "height" : "width";
    if (!(!p || !s)) {
      var k = Wa(n.padding, a), x = ue(p), y = c === "y" ? W : H, w = c === "y" ? _ : U, g = a.rects.reference[d] + a.rects.reference[c] - s[c] - a.rects.popper[d], h = s[c] - a.rects.reference[c], u = Lt(p), M = u ? c === "y" ? u.clientHeight || 0 : u.clientWidth || 0 : 0, C = g / 2 - h / 2, i = k[y], v = M - x[d] - k[w], f = M / 2 - x[d] / 2 + C, q = Rt(i, f, v), A = c;
      a.modifiersData[o] = (t = {}, t[A] = q, t.centerOffset = q - f, t);
    }
  }
  function $a(e) {
    var t = e.state, a = e.options, o = a.element, n = o === void 0 ? "[data-popper-arrow]" : o;
    n != null && (typeof n == "string" && (n = t.elements.popper.querySelector(n), !n) || Le(t.elements.popper, n) && (t.elements.arrow = n));
  }
  const Na = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: Ha,
    effect: $a,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
  function Mt(e) {
    return e.split("-")[1];
  }
  var Va = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function _a(e, t) {
    var a = e.x, o = e.y, n = t.devicePixelRatio || 1;
    return {
      x: xt(a * n) / n || 0,
      y: xt(o * n) / n || 0
    };
  }
  function ze(e) {
    var t, a = e.popper, o = e.popperRect, n = e.placement, p = e.variation, s = e.offsets, r = e.position, c = e.gpuAcceleration, m = e.adaptive, d = e.roundOffsets, k = e.isFixed, x = s.x, y = x === void 0 ? 0 : x, w = s.y, g = w === void 0 ? 0 : w, h = typeof d == "function" ? d({
      x: y,
      y: g
    }) : {
      x: y,
      y: g
    };
    y = h.x, g = h.y;
    var u = s.hasOwnProperty("x"), M = s.hasOwnProperty("y"), C = H, i = W, v = window;
    if (m) {
      var f = Lt(a), q = "clientHeight", A = "clientWidth";
      if (f === $(a) && (f = rt(a), at(f).position !== "static" && r === "absolute" && (q = "scrollHeight", A = "scrollWidth")), f = f, n === W || (n === H || n === U) && p === Et) {
        i = _;
        var D = k && f === v && v.visualViewport ? v.visualViewport.height : (
          // $FlowFixMe[prop-missing]
          f[q]
        );
        g -= D - o.height, g *= c ? 1 : -1;
      }
      if (n === H || (n === W || n === _) && p === Et) {
        C = U;
        var E = k && f === v && v.visualViewport ? v.visualViewport.width : (
          // $FlowFixMe[prop-missing]
          f[A]
        );
        y -= E - o.width, y *= c ? 1 : -1;
      }
    }
    var R = Object.assign({
      position: r
    }, m && Va), L = d === !0 ? _a({
      x: y,
      y: g
    }, $(a)) : {
      x: y,
      y: g
    };
    if (y = L.x, g = L.y, c) {
      var P;
      return Object.assign({}, R, (P = {}, P[i] = M ? "0" : "", P[C] = u ? "0" : "", P.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + g + "px)" : "translate3d(" + y + "px, " + g + "px, 0)", P));
    }
    return Object.assign({}, R, (t = {}, t[i] = M ? g + "px" : "", t[C] = u ? y + "px" : "", t.transform = "", t));
  }
  function Ua(e) {
    var t = e.state, a = e.options, o = a.gpuAcceleration, n = o === void 0 ? !0 : o, p = a.adaptive, s = p === void 0 ? !0 : p, r = a.roundOffsets, c = r === void 0 ? !0 : r, m = {
      placement: K(t.placement),
      variation: Mt(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: n,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ze(Object.assign({}, m, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: s,
      roundOffsets: c
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ze(Object.assign({}, m, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: !1,
      roundOffsets: c
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const Ga = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: Ua,
    data: {}
  };
  var _t = {
    passive: !0
  };
  function Ya(e) {
    var t = e.state, a = e.instance, o = e.options, n = o.scroll, p = n === void 0 ? !0 : n, s = o.resize, r = s === void 0 ? !0 : s, c = $(t.elements.popper), m = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return p && m.forEach(function(d) {
      d.addEventListener("scroll", a.update, _t);
    }), r && c.addEventListener("resize", a.update, _t), function() {
      p && m.forEach(function(d) {
        d.removeEventListener("scroll", a.update, _t);
      }), r && c.removeEventListener("resize", a.update, _t);
    };
  }
  const Xa = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {
    },
    effect: Ya,
    data: {}
  };
  var Za = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Ut(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return Za[t];
    });
  }
  var Ka = {
    start: "end",
    end: "start"
  };
  function je(e) {
    return e.replace(/start|end/g, function(t) {
      return Ka[t];
    });
  }
  function he(e) {
    var t = $(e), a = t.pageXOffset, o = t.pageYOffset;
    return {
      scrollLeft: a,
      scrollTop: o
    };
  }
  function ge(e) {
    return kt(rt(e)).left + he(e).scrollLeft;
  }
  function Qa(e, t) {
    var a = $(e), o = rt(e), n = a.visualViewport, p = o.clientWidth, s = o.clientHeight, r = 0, c = 0;
    if (n) {
      p = n.width, s = n.height;
      var m = Pe();
      (m || !m && t === "fixed") && (r = n.offsetLeft, c = n.offsetTop);
    }
    return {
      width: p,
      height: s,
      x: r + ge(e),
      y: c
    };
  }
  function Ja(e) {
    var t, a = rt(e), o = he(e), n = (t = e.ownerDocument) == null ? void 0 : t.body, p = ft(a.scrollWidth, a.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), s = ft(a.scrollHeight, a.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), r = -o.scrollLeft + ge(e), c = -o.scrollTop;
    return at(n || a).direction === "rtl" && (r += ft(a.clientWidth, n ? n.clientWidth : 0) - p), {
      width: p,
      height: s,
      x: r,
      y: c
    };
  }
  function ve(e) {
    var t = at(e), a = t.overflow, o = t.overflowX, n = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(a + n + o);
  }
  function We(e) {
    return ["html", "body", "#document"].indexOf(Z(e)) >= 0 ? e.ownerDocument.body : G(e) && ve(e) ? e : We(Vt(e));
  }
  function Bt(e, t) {
    var a;
    t === void 0 && (t = []);
    var o = We(e), n = o === ((a = e.ownerDocument) == null ? void 0 : a.body), p = $(o), s = n ? [p].concat(p.visualViewport || [], ve(o) ? o : []) : o, r = t.concat(s);
    return n ? r : (
      // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
      r.concat(Bt(Vt(s)))
    );
  }
  function ye(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function to(e, t) {
    var a = kt(e, !1, t === "fixed");
    return a.top = a.top + e.clientTop, a.left = a.left + e.clientLeft, a.bottom = a.top + e.clientHeight, a.right = a.left + e.clientWidth, a.width = e.clientWidth, a.height = e.clientHeight, a.x = a.left, a.y = a.top, a;
  }
  function He(e, t, a) {
    return t === Ae ? ye(Qa(e, a)) : ut(t) ? to(t, a) : ye(Ja(rt(e)));
  }
  function eo(e) {
    var t = Bt(Vt(e)), a = ["absolute", "fixed"].indexOf(at(e).position) >= 0, o = a && G(e) ? Lt(e) : e;
    return ut(o) ? t.filter(function(n) {
      return ut(n) && Le(n, o) && Z(n) !== "body";
    }) : [];
  }
  function ao(e, t, a, o) {
    var n = t === "clippingParents" ? eo(e) : [].concat(t), p = [].concat(n, [a]), s = p[0], r = p.reduce(function(c, m) {
      var d = He(e, m, o);
      return c.top = ft(d.top, c.top), c.right = Nt(d.right, c.right), c.bottom = Nt(d.bottom, c.bottom), c.left = ft(d.left, c.left), c;
    }, He(e, s, o));
    return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
  }
  function $e(e) {
    var t = e.reference, a = e.element, o = e.placement, n = o ? K(o) : null, p = o ? Mt(o) : null, s = t.x + t.width / 2 - a.width / 2, r = t.y + t.height / 2 - a.height / 2, c;
    switch (n) {
      case W:
        c = {
          x: s,
          y: t.y - a.height
        };
        break;
      case _:
        c = {
          x: s,
          y: t.y + t.height
        };
        break;
      case U:
        c = {
          x: t.x + t.width,
          y: r
        };
        break;
      case H:
        c = {
          x: t.x - a.width,
          y: r
        };
        break;
      default:
        c = {
          x: t.x,
          y: t.y
        };
    }
    var m = n ? fe(n) : null;
    if (m != null) {
      var d = m === "y" ? "height" : "width";
      switch (p) {
        case wt:
          c[m] = c[m] - (t[d] / 2 - a[d] / 2);
          break;
        case Et:
          c[m] = c[m] + (t[d] / 2 - a[d] / 2);
          break;
      }
    }
    return c;
  }
  function Ft(e, t) {
    t === void 0 && (t = {});
    var a = t, o = a.placement, n = o === void 0 ? e.placement : o, p = a.strategy, s = p === void 0 ? e.strategy : p, r = a.boundary, c = r === void 0 ? Ma : r, m = a.rootBoundary, d = m === void 0 ? Ae : m, k = a.elementContext, x = k === void 0 ? Pt : k, y = a.altBoundary, w = y === void 0 ? !1 : y, g = a.padding, h = g === void 0 ? 0 : g, u = Fe(typeof h != "number" ? h : Ie(h, Dt)), M = x === Pt ? Sa : Pt, C = e.rects.popper, i = e.elements[w ? M : x], v = ao(ut(i) ? i : i.contextElement || rt(e.elements.popper), c, d, s), f = kt(e.elements.reference), q = $e({
      reference: f,
      element: C,
      placement: n
    }), A = ye(Object.assign({}, C, q)), D = x === Pt ? A : f, E = {
      top: v.top - D.top + u.top,
      bottom: D.bottom - v.bottom + u.bottom,
      left: v.left - D.left + u.left,
      right: D.right - v.right + u.right
    }, R = e.modifiersData.offset;
    if (x === Pt && R) {
      var L = R[n];
      Object.keys(E).forEach(function(P) {
        var F = [U, _].indexOf(P) >= 0 ? 1 : -1, V = [W, _].indexOf(P) >= 0 ? "y" : "x";
        E[P] += L[V] * F;
      });
    }
    return E;
  }
  function oo(e, t) {
    t === void 0 && (t = {});
    var a = t, o = a.placement, n = a.boundary, p = a.rootBoundary, s = a.padding, r = a.flipVariations, c = a.allowedAutoPlacements, m = c === void 0 ? De : c, d = Mt(o), k = d ? r ? Te : Te.filter(function(w) {
      return Mt(w) === d;
    }) : Dt, x = k.filter(function(w) {
      return m.indexOf(w) >= 0;
    });
    x.length === 0 && (x = k);
    var y = x.reduce(function(w, g) {
      return w[g] = Ft(e, {
        placement: g,
        boundary: n,
        rootBoundary: p,
        padding: s
      })[K(g)], w;
    }, {});
    return Object.keys(y).sort(function(w, g) {
      return y[w] - y[g];
    });
  }
  function io(e) {
    if (K(e) === le)
      return [];
    var t = Ut(e);
    return [je(e), t, je(t)];
  }
  function no(e) {
    var t = e.state, a = e.options, o = e.name;
    if (!t.modifiersData[o]._skip) {
      for (var n = a.mainAxis, p = n === void 0 ? !0 : n, s = a.altAxis, r = s === void 0 ? !0 : s, c = a.fallbackPlacements, m = a.padding, d = a.boundary, k = a.rootBoundary, x = a.altBoundary, y = a.flipVariations, w = y === void 0 ? !0 : y, g = a.allowedAutoPlacements, h = t.options.placement, u = K(h), M = u === h, C = c || (M || !w ? [Ut(h)] : io(h)), i = [h].concat(C).reduce(function(it, X) {
        return it.concat(K(X) === le ? oo(t, {
          placement: X,
          boundary: d,
          rootBoundary: k,
          padding: m,
          flipVariations: w,
          allowedAutoPlacements: g
        }) : X);
      }, []), v = t.rects.reference, f = t.rects.popper, q = /* @__PURE__ */ new Map(), A = !0, D = i[0], E = 0; E < i.length; E++) {
        var R = i[E], L = K(R), P = Mt(R) === wt, F = [W, _].indexOf(L) >= 0, V = F ? "width" : "height", I = Ft(t, {
          placement: R,
          boundary: d,
          rootBoundary: k,
          altBoundary: x,
          padding: m
        }), z = F ? P ? U : H : P ? _ : W;
        v[V] > f[V] && (z = Ut(z));
        var B = Ut(z), J = [];
        if (p && J.push(I[L] <= 0), r && J.push(I[z] <= 0, I[B] <= 0), J.every(function(it) {
          return it;
        })) {
          D = R, A = !1;
          break;
        }
        q.set(R, J);
      }
      if (A)
        for (var tt = w ? 3 : 1, gt = function(X) {
          var nt = i.find(function(Ct) {
            var pt = q.get(Ct);
            if (pt)
              return pt.slice(0, X).every(function(qt) {
                return qt;
              });
          });
          if (nt)
            return D = nt, "break";
        }, et = tt; et > 0; et--) {
          var vt = gt(et);
          if (vt === "break") break;
        }
      t.placement !== D && (t.modifiersData[o]._skip = !0, t.placement = D, t.reset = !0);
    }
  }
  const po = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: no,
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };
  function Ne(e, t, a) {
    return a === void 0 && (a = {
      x: 0,
      y: 0
    }), {
      top: e.top - t.height - a.y,
      right: e.right - t.width + a.x,
      bottom: e.bottom - t.height + a.y,
      left: e.left - t.width - a.x
    };
  }
  function Ve(e) {
    return [W, U, _, H].some(function(t) {
      return e[t] >= 0;
    });
  }
  function so(e) {
    var t = e.state, a = e.name, o = t.rects.reference, n = t.rects.popper, p = t.modifiersData.preventOverflow, s = Ft(t, {
      elementContext: "reference"
    }), r = Ft(t, {
      altBoundary: !0
    }), c = Ne(s, o), m = Ne(r, n, p), d = Ve(c), k = Ve(m);
    t.modifiersData[a] = {
      referenceClippingOffsets: c,
      popperEscapeOffsets: m,
      isReferenceHidden: d,
      hasPopperEscaped: k
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": d,
      "data-popper-escaped": k
    });
  }
  const ro = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: so
  };
  function co(e, t, a) {
    var o = K(e), n = [H, W].indexOf(o) >= 0 ? -1 : 1, p = typeof a == "function" ? a(Object.assign({}, t, {
      placement: e
    })) : a, s = p[0], r = p[1];
    return s = s || 0, r = (r || 0) * n, [H, U].indexOf(o) >= 0 ? {
      x: r,
      y: s
    } : {
      x: s,
      y: r
    };
  }
  function lo(e) {
    var t = e.state, a = e.options, o = e.name, n = a.offset, p = n === void 0 ? [0, 0] : n, s = De.reduce(function(d, k) {
      return d[k] = co(k, t.rects, p), d;
    }, {}), r = s[t.placement], c = r.x, m = r.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += m), t.modifiersData[o] = s;
  }
  const mo = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: lo
  };
  function uo(e) {
    var t = e.state, a = e.name;
    t.modifiersData[a] = $e({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const fo = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: uo,
    data: {}
  };
  function ho(e) {
    return e === "x" ? "y" : "x";
  }
  function go(e) {
    var t = e.state, a = e.options, o = e.name, n = a.mainAxis, p = n === void 0 ? !0 : n, s = a.altAxis, r = s === void 0 ? !1 : s, c = a.boundary, m = a.rootBoundary, d = a.altBoundary, k = a.padding, x = a.tether, y = x === void 0 ? !0 : x, w = a.tetherOffset, g = w === void 0 ? 0 : w, h = Ft(t, {
      boundary: c,
      rootBoundary: m,
      padding: k,
      altBoundary: d
    }), u = K(t.placement), M = Mt(t.placement), C = !M, i = fe(u), v = ho(i), f = t.modifiersData.popperOffsets, q = t.rects.reference, A = t.rects.popper, D = typeof g == "function" ? g(Object.assign({}, t.rects, {
      placement: t.placement
    })) : g, E = typeof D == "number" ? {
      mainAxis: D,
      altAxis: D
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, D), R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, L = {
      x: 0,
      y: 0
    };
    if (f) {
      if (p) {
        var P, F = i === "y" ? W : H, V = i === "y" ? _ : U, I = i === "y" ? "height" : "width", z = f[i], B = z + h[F], J = z - h[V], tt = y ? -A[I] / 2 : 0, gt = M === wt ? q[I] : A[I], et = M === wt ? -A[I] : -q[I], vt = t.elements.arrow, it = y && vt ? ue(vt) : {
          width: 0,
          height: 0
        }, X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Be(), nt = X[F], Ct = X[V], pt = Rt(0, q[I], it[I]), qt = C ? q[I] / 2 - tt - pt - nt - E.mainAxis : gt - pt - nt - E.mainAxis, dt = C ? -q[I] / 2 + tt + pt + Ct + E.mainAxis : et + pt + Ct + E.mainAxis, Ot = t.elements.arrow && Lt(t.elements.arrow), Qt = Ot ? i === "y" ? Ot.clientTop || 0 : Ot.clientLeft || 0 : 0, zt = (P = R == null ? void 0 : R[i]) != null ? P : 0, Jt = z + qt - zt - Qt, te = z + dt - zt, jt = Rt(y ? Nt(B, Jt) : B, z, y ? ft(J, te) : J);
        f[i] = jt, L[i] = jt - z;
      }
      if (r) {
        var Wt, ee = i === "x" ? W : H, ae = i === "x" ? _ : U, st = f[v], mt = v === "y" ? "height" : "width", Ht = st + h[ee], yt = st - h[ae], $t = [W, H].indexOf(u) !== -1, oe = (Wt = R == null ? void 0 : R[v]) != null ? Wt : 0, ie = $t ? Ht : st - q[mt] - A[mt] - oe + E.altAxis, ne = $t ? st + q[mt] + A[mt] - oe - E.altAxis : yt, pe = y && $t ? ja(ie, st, ne) : Rt(y ? ie : Ht, st, y ? ne : yt);
        f[v] = pe, L[v] = pe - st;
      }
      t.modifiersData[o] = L;
    }
  }
  const vo = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: go,
    requiresIfExists: ["offset"]
  };
  function yo(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function bo(e) {
    return e === $(e) || !G(e) ? he(e) : yo(e);
  }
  function wo(e) {
    var t = e.getBoundingClientRect(), a = xt(t.width) / e.offsetWidth || 1, o = xt(t.height) / e.offsetHeight || 1;
    return a !== 1 || o !== 1;
  }
  function xo(e, t, a) {
    a === void 0 && (a = !1);
    var o = G(t), n = G(t) && wo(t), p = rt(t), s = kt(e, n, a), r = {
      scrollLeft: 0,
      scrollTop: 0
    }, c = {
      x: 0,
      y: 0
    };
    return (o || !o && !a) && ((Z(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    ve(p)) && (r = bo(t)), G(t) ? (c = kt(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : p && (c.x = ge(p))), {
      x: s.left + r.scrollLeft - c.x,
      y: s.top + r.scrollTop - c.y,
      width: s.width,
      height: s.height
    };
  }
  function ko(e) {
    var t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = [];
    e.forEach(function(p) {
      t.set(p.name, p);
    });
    function n(p) {
      a.add(p.name);
      var s = [].concat(p.requires || [], p.requiresIfExists || []);
      s.forEach(function(r) {
        if (!a.has(r)) {
          var c = t.get(r);
          c && n(c);
        }
      }), o.push(p);
    }
    return e.forEach(function(p) {
      a.has(p.name) || n(p);
    }), o;
  }
  function Mo(e) {
    var t = ko(e);
    return Ra.reduce(function(a, o) {
      return a.concat(t.filter(function(n) {
        return n.phase === o;
      }));
    }, []);
  }
  function So(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(a) {
        Promise.resolve().then(function() {
          t = void 0, a(e());
        });
      })), t;
    };
  }
  function Co(e) {
    var t = e.reduce(function(a, o) {
      var n = a[o.name];
      return a[o.name] = n ? Object.assign({}, n, o, {
        options: Object.assign({}, n.options, o.options),
        data: Object.assign({}, n.data, o.data)
      }) : o, a;
    }, {});
    return Object.keys(t).map(function(a) {
      return t[a];
    });
  }
  var _e = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function Ue() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
      t[a] = arguments[a];
    return !t.some(function(o) {
      return !(o && typeof o.getBoundingClientRect == "function");
    });
  }
  function qo(e) {
    e === void 0 && (e = {});
    var t = e, a = t.defaultModifiers, o = a === void 0 ? [] : a, n = t.defaultOptions, p = n === void 0 ? _e : n;
    return function(r, c, m) {
      m === void 0 && (m = p);
      var d = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, _e, p),
        modifiersData: {},
        elements: {
          reference: r,
          popper: c
        },
        attributes: {},
        styles: {}
      }, k = [], x = !1, y = {
        state: d,
        setOptions: function(u) {
          var M = typeof u == "function" ? u(d.options) : u;
          g(), d.options = Object.assign({}, p, d.options, M), d.scrollParents = {
            reference: ut(r) ? Bt(r) : r.contextElement ? Bt(r.contextElement) : [],
            popper: Bt(c)
          };
          var C = Mo(Co([].concat(o, d.options.modifiers)));
          return d.orderedModifiers = C.filter(function(i) {
            return i.enabled;
          }), w(), y.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function() {
          if (!x) {
            var u = d.elements, M = u.reference, C = u.popper;
            if (Ue(M, C)) {
              d.rects = {
                reference: xo(M, Lt(C), d.options.strategy === "fixed"),
                popper: ue(C)
              }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(E) {
                return d.modifiersData[E.name] = Object.assign({}, E.data);
              });
              for (var i = 0; i < d.orderedModifiers.length; i++) {
                if (d.reset === !0) {
                  d.reset = !1, i = -1;
                  continue;
                }
                var v = d.orderedModifiers[i], f = v.fn, q = v.options, A = q === void 0 ? {} : q, D = v.name;
                typeof f == "function" && (d = f({
                  state: d,
                  options: A,
                  name: D,
                  instance: y
                }) || d);
              }
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: So(function() {
          return new Promise(function(h) {
            y.forceUpdate(), h(d);
          });
        }),
        destroy: function() {
          g(), x = !0;
        }
      };
      if (!Ue(r, c))
        return y;
      y.setOptions(m).then(function(h) {
        !x && m.onFirstUpdate && m.onFirstUpdate(h);
      });
      function w() {
        d.orderedModifiers.forEach(function(h) {
          var u = h.name, M = h.options, C = M === void 0 ? {} : M, i = h.effect;
          if (typeof i == "function") {
            var v = i({
              state: d,
              name: u,
              instance: y,
              options: C
            }), f = function() {
            };
            k.push(v || f);
          }
        });
      }
      function g() {
        k.forEach(function(h) {
          return h();
        }), k = [];
      }
      return y;
    };
  }
  var Oo = [Xa, fo, Ga, Ee, mo, po, vo, Na, ro], Ao = /* @__PURE__ */ qo({
    defaultModifiers: Oo
  }), To = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>', Do = "tippy-box", Ge = "tippy-content", Ye = "tippy-backdrop", Xe = "tippy-arrow", Ze = "tippy-svg-arrow", ct = {
    passive: !0,
    capture: !0
  }, Ke = function() {
    return document.body;
  };
  function be(e, t, a) {
    if (Array.isArray(e)) {
      var o = e[t];
      return o ?? (Array.isArray(a) ? a[t] : a);
    }
    return e;
  }
  function we(e, t) {
    var a = {}.toString.call(e);
    return a.indexOf("[object") === 0 && a.indexOf(t + "]") > -1;
  }
  function Qe(e, t) {
    return typeof e == "function" ? e.apply(void 0, t) : e;
  }
  function Je(e, t) {
    if (t === 0)
      return e;
    var a;
    return function(o) {
      clearTimeout(a), a = setTimeout(function() {
        e(o);
      }, t);
    };
  }
  function ta(e, t) {
    var a = Object.assign({}, e);
    return t.forEach(function(o) {
      delete a[o];
    }), a;
  }
  function Eo(e) {
    return e.split(/\s+/).filter(Boolean);
  }
  function lt(e) {
    return [].concat(e);
  }
  function ea(e, t) {
    e.indexOf(t) === -1 && e.push(t);
  }
  function Po(e) {
    return e.filter(function(t, a) {
      return e.indexOf(t) === a;
    });
  }
  function aa(e) {
    return e.split("-")[0];
  }
  function St(e) {
    return [].slice.call(e);
  }
  function oa(e) {
    return Object.keys(e).reduce(function(t, a) {
      return e[a] !== void 0 && (t[a] = e[a]), t;
    }, {});
  }
  function ht() {
    return document.createElement("div");
  }
  function Gt(e) {
    return ["Element", "Fragment"].some(function(t) {
      return we(e, t);
    });
  }
  function Lo(e) {
    return we(e, "NodeList");
  }
  function xe(e) {
    return we(e, "MouseEvent");
  }
  function ia(e) {
    return !!(e && e._tippy && e._tippy.reference === e);
  }
  function Ro(e) {
    return Gt(e) ? [e] : Lo(e) ? St(e) : Array.isArray(e) ? e : St(document.querySelectorAll(e));
  }
  function ke(e, t) {
    e.forEach(function(a) {
      a && (a.style.transitionDuration = t + "ms");
    });
  }
  function It(e, t) {
    e.forEach(function(a) {
      a && a.setAttribute("data-state", t);
    });
  }
  function na(e) {
    var t, a = lt(e), o = a[0];
    return o != null && (t = o.ownerDocument) != null && t.body ? o.ownerDocument : document;
  }
  function Bo(e, t) {
    var a = t.clientX, o = t.clientY;
    return e.every(function(n) {
      var p = n.popperRect, s = n.popperState, r = n.props, c = r.interactiveBorder, m = aa(s.placement), d = s.modifiersData.offset;
      if (!d)
        return !0;
      var k = m === "bottom" ? d.top.y : 0, x = m === "top" ? d.bottom.y : 0, y = m === "right" ? d.left.x : 0, w = m === "left" ? d.right.x : 0, g = p.top - o + k > c, h = o - p.bottom - x > c, u = p.left - a + y > c, M = a - p.right - w > c;
      return g || h || u || M;
    });
  }
  function Me(e, t, a) {
    var o = t + "EventListener";
    ["transitionend", "webkitTransitionEnd"].forEach(function(n) {
      e[o](n, a);
    });
  }
  function pa(e, t) {
    for (var a = t; a; ) {
      var o;
      if (e.contains(a))
        return !0;
      a = a.getRootNode == null || (o = a.getRootNode()) == null ? void 0 : o.host;
    }
    return !1;
  }
  var Q = {
    isTouch: !1
  }, sa = 0;
  function Fo() {
    Q.isTouch || (Q.isTouch = !0, window.performance && document.addEventListener("mousemove", ra));
  }
  function ra() {
    var e = performance.now();
    e - sa < 20 && (Q.isTouch = !1, document.removeEventListener("mousemove", ra)), sa = e;
  }
  function Io() {
    var e = document.activeElement;
    if (ia(e)) {
      var t = e._tippy;
      e.blur && !t.state.isVisible && e.blur();
    }
  }
  function zo() {
    document.addEventListener("touchstart", Fo, ct), window.addEventListener("blur", Io);
  }
  var jo = typeof window < "u" && typeof document < "u", Wo = jo ? (
    // @ts-ignore
    !!window.msCrypto
  ) : !1, Ho = {
    animateFill: !1,
    followCursor: !1,
    inlinePositioning: !1,
    sticky: !1
  }, $o = {
    allowHTML: !1,
    animation: "fade",
    arrow: !0,
    content: "",
    inertia: !1,
    maxWidth: 350,
    role: "tooltip",
    theme: "",
    zIndex: 9999
  }, N = Object.assign({
    appendTo: Ke,
    aria: {
      content: "auto",
      expanded: "auto"
    },
    delay: 0,
    duration: [300, 250],
    getReferenceClientRect: null,
    hideOnClick: !0,
    ignoreAttributes: !1,
    interactive: !1,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    moveTransition: "",
    offset: [0, 10],
    onAfterUpdate: function() {
    },
    onBeforeUpdate: function() {
    },
    onCreate: function() {
    },
    onDestroy: function() {
    },
    onHidden: function() {
    },
    onHide: function() {
    },
    onMount: function() {
    },
    onShow: function() {
    },
    onShown: function() {
    },
    onTrigger: function() {
    },
    onUntrigger: function() {
    },
    onClickOutside: function() {
    },
    placement: "top",
    plugins: [],
    popperOptions: {},
    render: null,
    showOnCreate: !1,
    touch: !0,
    trigger: "mouseenter focus",
    triggerTarget: null
  }, Ho, $o), No = Object.keys(N), Vo = function(t) {
    var a = Object.keys(t);
    a.forEach(function(o) {
      N[o] = t[o];
    });
  };
  function ca(e) {
    var t = e.plugins || [], a = t.reduce(function(o, n) {
      var p = n.name, s = n.defaultValue;
      if (p) {
        var r;
        o[p] = e[p] !== void 0 ? e[p] : (r = N[p]) != null ? r : s;
      }
      return o;
    }, {});
    return Object.assign({}, e, a);
  }
  function _o(e, t) {
    var a = t ? Object.keys(ca(Object.assign({}, N, {
      plugins: t
    }))) : No, o = a.reduce(function(n, p) {
      var s = (e.getAttribute("data-tippy-" + p) || "").trim();
      if (!s)
        return n;
      if (p === "content")
        n[p] = s;
      else
        try {
          n[p] = JSON.parse(s);
        } catch {
          n[p] = s;
        }
      return n;
    }, {});
    return o;
  }
  function la(e, t) {
    var a = Object.assign({}, t, {
      content: Qe(t.content, [e])
    }, t.ignoreAttributes ? {} : _o(e, t.plugins));
    return a.aria = Object.assign({}, N.aria, a.aria), a.aria = {
      expanded: a.aria.expanded === "auto" ? t.interactive : a.aria.expanded,
      content: a.aria.content === "auto" ? t.interactive ? null : "describedby" : a.aria.content
    }, a;
  }
  var Uo = function() {
    return "innerHTML";
  };
  function Se(e, t) {
    e[Uo()] = t;
  }
  function da(e) {
    var t = ht();
    return e === !0 ? t.className = Xe : (t.className = Ze, Gt(e) ? t.appendChild(e) : Se(t, e)), t;
  }
  function ma(e, t) {
    Gt(t.content) ? (Se(e, ""), e.appendChild(t.content)) : typeof t.content != "function" && (t.allowHTML ? Se(e, t.content) : e.textContent = t.content);
  }
  function Yt(e) {
    var t = e.firstElementChild, a = St(t.children);
    return {
      box: t,
      content: a.find(function(o) {
        return o.classList.contains(Ge);
      }),
      arrow: a.find(function(o) {
        return o.classList.contains(Xe) || o.classList.contains(Ze);
      }),
      backdrop: a.find(function(o) {
        return o.classList.contains(Ye);
      })
    };
  }
  function ua(e) {
    var t = ht(), a = ht();
    a.className = Do, a.setAttribute("data-state", "hidden"), a.setAttribute("tabindex", "-1");
    var o = ht();
    o.className = Ge, o.setAttribute("data-state", "hidden"), ma(o, e.props), t.appendChild(a), a.appendChild(o), n(e.props, e.props);
    function n(p, s) {
      var r = Yt(t), c = r.box, m = r.content, d = r.arrow;
      s.theme ? c.setAttribute("data-theme", s.theme) : c.removeAttribute("data-theme"), typeof s.animation == "string" ? c.setAttribute("data-animation", s.animation) : c.removeAttribute("data-animation"), s.inertia ? c.setAttribute("data-inertia", "") : c.removeAttribute("data-inertia"), c.style.maxWidth = typeof s.maxWidth == "number" ? s.maxWidth + "px" : s.maxWidth, s.role ? c.setAttribute("role", s.role) : c.removeAttribute("role"), (p.content !== s.content || p.allowHTML !== s.allowHTML) && ma(m, e.props), s.arrow ? d ? p.arrow !== s.arrow && (c.removeChild(d), c.appendChild(da(s.arrow))) : c.appendChild(da(s.arrow)) : d && c.removeChild(d);
    }
    return {
      popper: t,
      onUpdate: n
    };
  }
  ua.$$tippy = !0;
  var Go = 1, Xt = [], Zt = [];
  function Yo(e, t) {
    var a = la(e, Object.assign({}, N, ca(oa(t)))), o, n, p, s = !1, r = !1, c = !1, m = !1, d, k, x, y = [], w = Je(Jt, a.interactiveDebounce), g, h = Go++, u = null, M = Po(a.plugins), C = {
      // Is the instance currently enabled?
      isEnabled: !0,
      // Is the tippy currently showing and not transitioning out?
      isVisible: !1,
      // Has the instance been destroyed?
      isDestroyed: !1,
      // Is the tippy currently mounted to the DOM?
      isMounted: !1,
      // Has the tippy finished transitioning in?
      isShown: !1
    }, i = {
      // properties
      id: h,
      reference: e,
      popper: ht(),
      popperInstance: u,
      props: a,
      state: C,
      plugins: M,
      // methods
      clearDelayTimeouts: ie,
      setProps: ne,
      setContent: pe,
      show: wi,
      hide: xi,
      hideWithInteractivity: ki,
      enable: $t,
      disable: oe,
      unmount: Mi,
      destroy: Si
    };
    if (!a.render)
      return i;
    var v = a.render(i), f = v.popper, q = v.onUpdate;
    f.setAttribute("data-tippy-root", ""), f.id = "tippy-" + i.id, i.popper = f, e._tippy = i, f._tippy = i;
    var A = M.map(function(l) {
      return l.fn(i);
    }), D = e.hasAttribute("aria-expanded");
    return Ot(), tt(), z(), B("onCreate", [i]), a.showOnCreate && Ht(), f.addEventListener("mouseenter", function() {
      i.props.interactive && i.state.isVisible && i.clearDelayTimeouts();
    }), f.addEventListener("mouseleave", function() {
      i.props.interactive && i.props.trigger.indexOf("mouseenter") >= 0 && F().addEventListener("mousemove", w);
    }), i;
    function E() {
      var l = i.props.touch;
      return Array.isArray(l) ? l : [l, 0];
    }
    function R() {
      return E()[0] === "hold";
    }
    function L() {
      var l;
      return !!((l = i.props.render) != null && l.$$tippy);
    }
    function P() {
      return g || e;
    }
    function F() {
      var l = P().parentNode;
      return l ? na(l) : document;
    }
    function V() {
      return Yt(f);
    }
    function I(l) {
      return i.state.isMounted && !i.state.isVisible || Q.isTouch || d && d.type === "focus" ? 0 : be(i.props.delay, l ? 0 : 1, N.delay);
    }
    function z(l) {
      l === void 0 && (l = !1), f.style.pointerEvents = i.props.interactive && !l ? "" : "none", f.style.zIndex = "" + i.props.zIndex;
    }
    function B(l, b, S) {
      if (S === void 0 && (S = !0), A.forEach(function(O) {
        O[l] && O[l].apply(O, b);
      }), S) {
        var T;
        (T = i.props)[l].apply(T, b);
      }
    }
    function J() {
      var l = i.props.aria;
      if (l.content) {
        var b = "aria-" + l.content, S = f.id, T = lt(i.props.triggerTarget || e);
        T.forEach(function(O) {
          var j = O.getAttribute(b);
          if (i.state.isVisible)
            O.setAttribute(b, j ? j + " " + S : S);
          else {
            var Y = j && j.replace(S, "").trim();
            Y ? O.setAttribute(b, Y) : O.removeAttribute(b);
          }
        });
      }
    }
    function tt() {
      if (!(D || !i.props.aria.expanded)) {
        var l = lt(i.props.triggerTarget || e);
        l.forEach(function(b) {
          i.props.interactive ? b.setAttribute("aria-expanded", i.state.isVisible && b === P() ? "true" : "false") : b.removeAttribute("aria-expanded");
        });
      }
    }
    function gt() {
      F().removeEventListener("mousemove", w), Xt = Xt.filter(function(l) {
        return l !== w;
      });
    }
    function et(l) {
      if (!(Q.isTouch && (c || l.type === "mousedown"))) {
        var b = l.composedPath && l.composedPath()[0] || l.target;
        if (!(i.props.interactive && pa(f, b))) {
          if (lt(i.props.triggerTarget || e).some(function(S) {
            return pa(S, b);
          })) {
            if (Q.isTouch || i.state.isVisible && i.props.trigger.indexOf("click") >= 0)
              return;
          } else
            B("onClickOutside", [i, l]);
          i.props.hideOnClick === !0 && (i.clearDelayTimeouts(), i.hide(), r = !0, setTimeout(function() {
            r = !1;
          }), i.state.isMounted || nt());
        }
      }
    }
    function vt() {
      c = !0;
    }
    function it() {
      c = !1;
    }
    function X() {
      var l = F();
      l.addEventListener("mousedown", et, !0), l.addEventListener("touchend", et, ct), l.addEventListener("touchstart", it, ct), l.addEventListener("touchmove", vt, ct);
    }
    function nt() {
      var l = F();
      l.removeEventListener("mousedown", et, !0), l.removeEventListener("touchend", et, ct), l.removeEventListener("touchstart", it, ct), l.removeEventListener("touchmove", vt, ct);
    }
    function Ct(l, b) {
      qt(l, function() {
        !i.state.isVisible && f.parentNode && f.parentNode.contains(f) && b();
      });
    }
    function pt(l, b) {
      qt(l, b);
    }
    function qt(l, b) {
      var S = V().box;
      function T(O) {
        O.target === S && (Me(S, "remove", T), b());
      }
      if (l === 0)
        return b();
      Me(S, "remove", k), Me(S, "add", T), k = T;
    }
    function dt(l, b, S) {
      S === void 0 && (S = !1);
      var T = lt(i.props.triggerTarget || e);
      T.forEach(function(O) {
        O.addEventListener(l, b, S), y.push({
          node: O,
          eventType: l,
          handler: b,
          options: S
        });
      });
    }
    function Ot() {
      R() && (dt("touchstart", zt, {
        passive: !0
      }), dt("touchend", te, {
        passive: !0
      })), Eo(i.props.trigger).forEach(function(l) {
        if (l !== "manual")
          switch (dt(l, zt), l) {
            case "mouseenter":
              dt("mouseleave", te);
              break;
            case "focus":
              dt(Wo ? "focusout" : "blur", jt);
              break;
            case "focusin":
              dt("focusout", jt);
              break;
          }
      });
    }
    function Qt() {
      y.forEach(function(l) {
        var b = l.node, S = l.eventType, T = l.handler, O = l.options;
        b.removeEventListener(S, T, O);
      }), y = [];
    }
    function zt(l) {
      var b, S = !1;
      if (!(!i.state.isEnabled || Wt(l) || r)) {
        var T = ((b = d) == null ? void 0 : b.type) === "focus";
        d = l, g = l.currentTarget, tt(), !i.state.isVisible && xe(l) && Xt.forEach(function(O) {
          return O(l);
        }), l.type === "click" && (i.props.trigger.indexOf("mouseenter") < 0 || s) && i.props.hideOnClick !== !1 && i.state.isVisible ? S = !0 : Ht(l), l.type === "click" && (s = !S), S && !T && yt(l);
      }
    }
    function Jt(l) {
      var b = l.target, S = P().contains(b) || f.contains(b);
      if (!(l.type === "mousemove" && S)) {
        var T = mt().concat(f).map(function(O) {
          var j, Y = O._tippy, At = (j = Y.popperInstance) == null ? void 0 : j.state;
          return At ? {
            popperRect: O.getBoundingClientRect(),
            popperState: At,
            props: a
          } : null;
        }).filter(Boolean);
        Bo(T, l) && (gt(), yt(l));
      }
    }
    function te(l) {
      var b = Wt(l) || i.props.trigger.indexOf("click") >= 0 && s;
      if (!b) {
        if (i.props.interactive) {
          i.hideWithInteractivity(l);
          return;
        }
        yt(l);
      }
    }
    function jt(l) {
      i.props.trigger.indexOf("focusin") < 0 && l.target !== P() || i.props.interactive && l.relatedTarget && f.contains(l.relatedTarget) || yt(l);
    }
    function Wt(l) {
      return Q.isTouch ? R() !== l.type.indexOf("touch") >= 0 : !1;
    }
    function ee() {
      ae();
      var l = i.props, b = l.popperOptions, S = l.placement, T = l.offset, O = l.getReferenceClientRect, j = l.moveTransition, Y = L() ? Yt(f).arrow : null, At = O ? {
        getBoundingClientRect: O,
        contextElement: O.contextElement || P()
      } : e, ga = {
        name: "$$tippy",
        enabled: !0,
        phase: "beforeWrite",
        requires: ["computeStyles"],
        fn: function(se) {
          var Tt = se.state;
          if (L()) {
            var Ci = V(), Oe = Ci.box;
            ["placement", "reference-hidden", "escaped"].forEach(function(re) {
              re === "placement" ? Oe.setAttribute("data-placement", Tt.placement) : Tt.attributes.popper["data-popper-" + re] ? Oe.setAttribute("data-" + re, "") : Oe.removeAttribute("data-" + re);
            }), Tt.attributes.popper = {};
          }
        }
      }, bt = [{
        name: "offset",
        options: {
          offset: T
        }
      }, {
        name: "preventOverflow",
        options: {
          padding: {
            top: 2,
            bottom: 2,
            left: 5,
            right: 5
          }
        }
      }, {
        name: "flip",
        options: {
          padding: 5
        }
      }, {
        name: "computeStyles",
        options: {
          adaptive: !j
        }
      }, ga];
      L() && Y && bt.push({
        name: "arrow",
        options: {
          element: Y,
          padding: 3
        }
      }), bt.push.apply(bt, (b == null ? void 0 : b.modifiers) || []), i.popperInstance = Ao(At, f, Object.assign({}, b, {
        placement: S,
        onFirstUpdate: x,
        modifiers: bt
      }));
    }
    function ae() {
      i.popperInstance && (i.popperInstance.destroy(), i.popperInstance = null);
    }
    function st() {
      var l = i.props.appendTo, b, S = P();
      i.props.interactive && l === Ke || l === "parent" ? b = S.parentNode : b = Qe(l, [S]), b.contains(f) || b.appendChild(f), i.state.isMounted = !0, ee();
    }
    function mt() {
      return St(f.querySelectorAll("[data-tippy-root]"));
    }
    function Ht(l) {
      i.clearDelayTimeouts(), l && B("onTrigger", [i, l]), X();
      var b = I(!0), S = E(), T = S[0], O = S[1];
      Q.isTouch && T === "hold" && O && (b = O), b ? o = setTimeout(function() {
        i.show();
      }, b) : i.show();
    }
    function yt(l) {
      if (i.clearDelayTimeouts(), B("onUntrigger", [i, l]), !i.state.isVisible) {
        nt();
        return;
      }
      if (!(i.props.trigger.indexOf("mouseenter") >= 0 && i.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(l.type) >= 0 && s)) {
        var b = I(!1);
        b ? n = setTimeout(function() {
          i.state.isVisible && i.hide();
        }, b) : p = requestAnimationFrame(function() {
          i.hide();
        });
      }
    }
    function $t() {
      i.state.isEnabled = !0;
    }
    function oe() {
      i.hide(), i.state.isEnabled = !1;
    }
    function ie() {
      clearTimeout(o), clearTimeout(n), cancelAnimationFrame(p);
    }
    function ne(l) {
      if (!i.state.isDestroyed) {
        B("onBeforeUpdate", [i, l]), Qt();
        var b = i.props, S = la(e, Object.assign({}, b, oa(l), {
          ignoreAttributes: !0
        }));
        i.props = S, Ot(), b.interactiveDebounce !== S.interactiveDebounce && (gt(), w = Je(Jt, S.interactiveDebounce)), b.triggerTarget && !S.triggerTarget ? lt(b.triggerTarget).forEach(function(T) {
          T.removeAttribute("aria-expanded");
        }) : S.triggerTarget && e.removeAttribute("aria-expanded"), tt(), z(), q && q(b, S), i.popperInstance && (ee(), mt().forEach(function(T) {
          requestAnimationFrame(T._tippy.popperInstance.forceUpdate);
        })), B("onAfterUpdate", [i, l]);
      }
    }
    function pe(l) {
      i.setProps({
        content: l
      });
    }
    function wi() {
      var l = i.state.isVisible, b = i.state.isDestroyed, S = !i.state.isEnabled, T = Q.isTouch && !i.props.touch, O = be(i.props.duration, 0, N.duration);
      if (!(l || b || S || T) && !P().hasAttribute("disabled") && (B("onShow", [i], !1), i.props.onShow(i) !== !1)) {
        if (i.state.isVisible = !0, L() && (f.style.visibility = "visible"), z(), X(), i.state.isMounted || (f.style.transition = "none"), L()) {
          var j = V(), Y = j.box, At = j.content;
          ke([Y, At], 0);
        }
        x = function() {
          var bt;
          if (!(!i.state.isVisible || m)) {
            if (m = !0, f.offsetHeight, f.style.transition = i.props.moveTransition, L() && i.props.animation) {
              var qe = V(), se = qe.box, Tt = qe.content;
              ke([se, Tt], O), It([se, Tt], "visible");
            }
            J(), tt(), ea(Zt, i), (bt = i.popperInstance) == null || bt.forceUpdate(), B("onMount", [i]), i.props.animation && L() && pt(O, function() {
              i.state.isShown = !0, B("onShown", [i]);
            });
          }
        }, st();
      }
    }
    function xi() {
      var l = !i.state.isVisible, b = i.state.isDestroyed, S = !i.state.isEnabled, T = be(i.props.duration, 1, N.duration);
      if (!(l || b || S) && (B("onHide", [i], !1), i.props.onHide(i) !== !1)) {
        if (i.state.isVisible = !1, i.state.isShown = !1, m = !1, s = !1, L() && (f.style.visibility = "hidden"), gt(), nt(), z(!0), L()) {
          var O = V(), j = O.box, Y = O.content;
          i.props.animation && (ke([j, Y], T), It([j, Y], "hidden"));
        }
        J(), tt(), i.props.animation ? L() && Ct(T, i.unmount) : i.unmount();
      }
    }
    function ki(l) {
      F().addEventListener("mousemove", w), ea(Xt, w), w(l);
    }
    function Mi() {
      i.state.isVisible && i.hide(), i.state.isMounted && (ae(), mt().forEach(function(l) {
        l._tippy.unmount();
      }), f.parentNode && f.parentNode.removeChild(f), Zt = Zt.filter(function(l) {
        return l !== i;
      }), i.state.isMounted = !1, B("onHidden", [i]));
    }
    function Si() {
      i.state.isDestroyed || (i.clearDelayTimeouts(), i.unmount(), Qt(), delete e._tippy, i.state.isDestroyed = !0, B("onDestroy", [i]));
    }
  }
  function ot(e, t) {
    t === void 0 && (t = {});
    var a = N.plugins.concat(t.plugins || []);
    zo();
    var o = Object.assign({}, t, {
      plugins: a
    }), n = Ro(e), p = n.reduce(function(s, r) {
      var c = r && Yo(r, o);
      return c && s.push(c), s;
    }, []);
    return Gt(e) ? p[0] : p;
  }
  ot.defaultProps = N, ot.setDefaultProps = Vo, ot.currentInput = Q;
  var Xo = function(t) {
    var a = t === void 0 ? {} : t, o = a.exclude, n = a.duration;
    Zt.forEach(function(p) {
      var s = !1;
      if (o && (s = ia(o) ? p.reference === o : p.popper === o.popper), !s) {
        var r = p.props.duration;
        p.setProps({
          duration: n
        }), p.hide(), p.state.isDestroyed || p.setProps({
          duration: r
        });
      }
    });
  }, Zo = Object.assign({}, Ee, {
    effect: function(t) {
      var a = t.state, o = {
        popper: {
          position: a.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      Object.assign(a.elements.popper.style, o.popper), a.styles = o, a.elements.arrow && Object.assign(a.elements.arrow.style, o.arrow);
    }
  }), Ko = function(t, a) {
    var o;
    a === void 0 && (a = {});
    var n = t, p = [], s = [], r, c = a.overrides, m = [], d = !1;
    function k() {
      s = n.map(function(i) {
        return lt(i.props.triggerTarget || i.reference);
      }).reduce(function(i, v) {
        return i.concat(v);
      }, []);
    }
    function x() {
      p = n.map(function(i) {
        return i.reference;
      });
    }
    function y(i) {
      n.forEach(function(v) {
        i ? v.enable() : v.disable();
      });
    }
    function w(i) {
      return n.map(function(v) {
        var f = v.setProps;
        return v.setProps = function(q) {
          f(q), v.reference === r && i.setProps(q);
        }, function() {
          v.setProps = f;
        };
      });
    }
    function g(i, v) {
      var f = s.indexOf(v);
      if (v !== r) {
        r = v;
        var q = (c || []).concat("content").reduce(function(A, D) {
          return A[D] = n[f].props[D], A;
        }, {});
        i.setProps(Object.assign({}, q, {
          getReferenceClientRect: typeof q.getReferenceClientRect == "function" ? q.getReferenceClientRect : function() {
            var A;
            return (A = p[f]) == null ? void 0 : A.getBoundingClientRect();
          }
        }));
      }
    }
    y(!1), x(), k();
    var h = {
      fn: function() {
        return {
          onDestroy: function() {
            y(!0);
          },
          onHidden: function() {
            r = null;
          },
          onClickOutside: function(f) {
            f.props.showOnCreate && !d && (d = !0, r = null);
          },
          onShow: function(f) {
            f.props.showOnCreate && !d && (d = !0, g(f, p[0]));
          },
          onTrigger: function(f, q) {
            g(f, q.currentTarget);
          }
        };
      }
    }, u = ot(ht(), Object.assign({}, ta(a, ["overrides"]), {
      plugins: [h].concat(a.plugins || []),
      triggerTarget: s,
      popperOptions: Object.assign({}, a.popperOptions, {
        modifiers: [].concat(((o = a.popperOptions) == null ? void 0 : o.modifiers) || [], [Zo])
      })
    })), M = u.show;
    u.show = function(i) {
      if (M(), !r && i == null)
        return g(u, p[0]);
      if (!(r && i == null)) {
        if (typeof i == "number")
          return p[i] && g(u, p[i]);
        if (n.indexOf(i) >= 0) {
          var v = i.reference;
          return g(u, v);
        }
        if (p.indexOf(i) >= 0)
          return g(u, i);
      }
    }, u.showNext = function() {
      var i = p[0];
      if (!r)
        return u.show(0);
      var v = p.indexOf(r);
      u.show(p[v + 1] || i);
    }, u.showPrevious = function() {
      var i = p[p.length - 1];
      if (!r)
        return u.show(i);
      var v = p.indexOf(r), f = p[v - 1] || i;
      u.show(f);
    };
    var C = u.setProps;
    return u.setProps = function(i) {
      c = i.overrides || c, C(i);
    }, u.setInstances = function(i) {
      y(!0), m.forEach(function(v) {
        return v();
      }), n = i, y(!1), x(), k(), m = w(u), u.setProps({
        triggerTarget: s
      });
    }, m = w(u), u;
  }, Qo = {
    mouseover: "mouseenter",
    focusin: "focus",
    click: "click"
  };
  function Jo(e, t) {
    var a = [], o = [], n = !1, p = t.target, s = ta(t, ["target"]), r = Object.assign({}, s, {
      trigger: "manual",
      touch: !1
    }), c = Object.assign({
      touch: N.touch
    }, s, {
      showOnCreate: !0
    }), m = ot(e, r), d = lt(m);
    function k(h) {
      if (!(!h.target || n)) {
        var u = h.target.closest(p);
        if (u) {
          var M = u.getAttribute("data-tippy-trigger") || t.trigger || N.trigger;
          if (!u._tippy && !(h.type === "touchstart" && typeof c.touch == "boolean") && !(h.type !== "touchstart" && M.indexOf(Qo[h.type]) < 0)) {
            var C = ot(u, c);
            C && (o = o.concat(C));
          }
        }
      }
    }
    function x(h, u, M, C) {
      C === void 0 && (C = !1), h.addEventListener(u, M, C), a.push({
        node: h,
        eventType: u,
        handler: M,
        options: C
      });
    }
    function y(h) {
      var u = h.reference;
      x(u, "touchstart", k, ct), x(u, "mouseover", k), x(u, "focusin", k), x(u, "click", k);
    }
    function w() {
      a.forEach(function(h) {
        var u = h.node, M = h.eventType, C = h.handler, i = h.options;
        u.removeEventListener(M, C, i);
      }), a = [];
    }
    function g(h) {
      var u = h.destroy, M = h.enable, C = h.disable;
      h.destroy = function(i) {
        i === void 0 && (i = !0), i && o.forEach(function(v) {
          v.destroy();
        }), o = [], w(), u();
      }, h.enable = function() {
        M(), o.forEach(function(i) {
          return i.enable();
        }), n = !1;
      }, h.disable = function() {
        C(), o.forEach(function(i) {
          return i.disable();
        }), n = !0;
      }, y(h);
    }
    return d.forEach(g), m;
  }
  var ti = {
    name: "animateFill",
    defaultValue: !1,
    fn: function(t) {
      var a;
      if (!((a = t.props.render) != null && a.$$tippy))
        return {};
      var o = Yt(t.popper), n = o.box, p = o.content, s = t.props.animateFill ? ei() : null;
      return {
        onCreate: function() {
          s && (n.insertBefore(s, n.firstElementChild), n.setAttribute("data-animatefill", ""), n.style.overflow = "hidden", t.setProps({
            arrow: !1,
            animation: "shift-away"
          }));
        },
        onMount: function() {
          if (s) {
            var c = n.style.transitionDuration, m = Number(c.replace("ms", ""));
            p.style.transitionDelay = Math.round(m / 10) + "ms", s.style.transitionDuration = c, It([s], "visible");
          }
        },
        onShow: function() {
          s && (s.style.transitionDuration = "0ms");
        },
        onHide: function() {
          s && It([s], "hidden");
        }
      };
    }
  };
  function ei() {
    var e = ht();
    return e.className = Ye, It([e], "hidden"), e;
  }
  var Ce = {
    clientX: 0,
    clientY: 0
  }, Kt = [];
  function fa(e) {
    var t = e.clientX, a = e.clientY;
    Ce = {
      clientX: t,
      clientY: a
    };
  }
  function ai(e) {
    e.addEventListener("mousemove", fa);
  }
  function oi(e) {
    e.removeEventListener("mousemove", fa);
  }
  var ii = {
    name: "followCursor",
    defaultValue: !1,
    fn: function(t) {
      var a = t.reference, o = na(t.props.triggerTarget || a), n = !1, p = !1, s = !0, r = t.props;
      function c() {
        return t.props.followCursor === "initial" && t.state.isVisible;
      }
      function m() {
        o.addEventListener("mousemove", x);
      }
      function d() {
        o.removeEventListener("mousemove", x);
      }
      function k() {
        n = !0, t.setProps({
          getReferenceClientRect: null
        }), n = !1;
      }
      function x(g) {
        var h = g.target ? a.contains(g.target) : !0, u = t.props.followCursor, M = g.clientX, C = g.clientY, i = a.getBoundingClientRect(), v = M - i.left, f = C - i.top;
        (h || !t.props.interactive) && t.setProps({
          // @ts-ignore - unneeded DOMRect properties
          getReferenceClientRect: function() {
            var A = a.getBoundingClientRect(), D = M, E = C;
            u === "initial" && (D = A.left + v, E = A.top + f);
            var R = u === "horizontal" ? A.top : E, L = u === "vertical" ? A.right : D, P = u === "horizontal" ? A.bottom : E, F = u === "vertical" ? A.left : D;
            return {
              width: L - F,
              height: P - R,
              top: R,
              right: L,
              bottom: P,
              left: F
            };
          }
        });
      }
      function y() {
        t.props.followCursor && (Kt.push({
          instance: t,
          doc: o
        }), ai(o));
      }
      function w() {
        Kt = Kt.filter(function(g) {
          return g.instance !== t;
        }), Kt.filter(function(g) {
          return g.doc === o;
        }).length === 0 && oi(o);
      }
      return {
        onCreate: y,
        onDestroy: w,
        onBeforeUpdate: function() {
          r = t.props;
        },
        onAfterUpdate: function(h, u) {
          var M = u.followCursor;
          n || M !== void 0 && r.followCursor !== M && (w(), M ? (y(), t.state.isMounted && !p && !c() && m()) : (d(), k()));
        },
        onMount: function() {
          t.props.followCursor && !p && (s && (x(Ce), s = !1), c() || m());
        },
        onTrigger: function(h, u) {
          xe(u) && (Ce = {
            clientX: u.clientX,
            clientY: u.clientY
          }), p = u.type === "focus";
        },
        onHidden: function() {
          t.props.followCursor && (k(), d(), s = !0);
        }
      };
    }
  };
  function ni(e, t) {
    var a;
    return {
      popperOptions: Object.assign({}, e.popperOptions, {
        modifiers: [].concat((((a = e.popperOptions) == null ? void 0 : a.modifiers) || []).filter(function(o) {
          var n = o.name;
          return n !== t.name;
        }), [t])
      })
    };
  }
  var pi = {
    name: "inlinePositioning",
    defaultValue: !1,
    fn: function(t) {
      var a = t.reference;
      function o() {
        return !!t.props.inlinePositioning;
      }
      var n, p = -1, s = !1, r = [], c = {
        name: "tippyInlinePositioning",
        enabled: !0,
        phase: "afterWrite",
        fn: function(y) {
          var w = y.state;
          o() && (r.indexOf(w.placement) !== -1 && (r = []), n !== w.placement && r.indexOf(w.placement) === -1 && (r.push(w.placement), t.setProps({
            // @ts-ignore - unneeded DOMRect properties
            getReferenceClientRect: function() {
              return m(w.placement);
            }
          })), n = w.placement);
        }
      };
      function m(x) {
        return si(aa(x), a.getBoundingClientRect(), St(a.getClientRects()), p);
      }
      function d(x) {
        s = !0, t.setProps(x), s = !1;
      }
      function k() {
        s || d(ni(t.props, c));
      }
      return {
        onCreate: k,
        onAfterUpdate: k,
        onTrigger: function(y, w) {
          if (xe(w)) {
            var g = St(t.reference.getClientRects()), h = g.find(function(M) {
              return M.left - 2 <= w.clientX && M.right + 2 >= w.clientX && M.top - 2 <= w.clientY && M.bottom + 2 >= w.clientY;
            }), u = g.indexOf(h);
            p = u > -1 ? u : p;
          }
        },
        onHidden: function() {
          p = -1;
        }
      };
    }
  };
  function si(e, t, a, o) {
    if (a.length < 2 || e === null)
      return t;
    if (a.length === 2 && o >= 0 && a[0].left > a[1].right)
      return a[o] || t;
    switch (e) {
      case "top":
      case "bottom": {
        var n = a[0], p = a[a.length - 1], s = e === "top", r = n.top, c = p.bottom, m = s ? n.left : p.left, d = s ? n.right : p.right, k = d - m, x = c - r;
        return {
          top: r,
          bottom: c,
          left: m,
          right: d,
          width: k,
          height: x
        };
      }
      case "left":
      case "right": {
        var y = Math.min.apply(Math, a.map(function(f) {
          return f.left;
        })), w = Math.max.apply(Math, a.map(function(f) {
          return f.right;
        })), g = a.filter(function(f) {
          return e === "left" ? f.left === y : f.right === w;
        }), h = g[0].top, u = g[g.length - 1].bottom, M = y, C = w, i = C - M, v = u - h;
        return {
          top: h,
          bottom: u,
          left: M,
          right: C,
          width: i,
          height: v
        };
      }
      default:
        return t;
    }
  }
  var ri = {
    name: "sticky",
    defaultValue: !1,
    fn: function(t) {
      var a = t.reference, o = t.popper;
      function n() {
        return t.popperInstance ? t.popperInstance.state.elements.reference : a;
      }
      function p(m) {
        return t.props.sticky === !0 || t.props.sticky === m;
      }
      var s = null, r = null;
      function c() {
        var m = p("reference") ? n().getBoundingClientRect() : null, d = p("popper") ? o.getBoundingClientRect() : null;
        (m && ha(s, m) || d && ha(r, d)) && t.popperInstance && t.popperInstance.update(), s = m, r = d, t.state.isMounted && requestAnimationFrame(c);
      }
      return {
        onMount: function() {
          t.props.sticky && c();
        }
      };
    }
  };
  function ha(e, t) {
    return e && t ? e.top !== t.top || e.right !== t.right || e.bottom !== t.bottom || e.left !== t.left : !0;
  }
  ot.setDefaultProps({
    render: ua
  });
  const ci = ot || /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    animateFill: ti,
    createSingleton: Ko,
    default: ot,
    delegate: Jo,
    followCursor: ii,
    hideAll: Xo,
    inlinePositioning: pi,
    roundArrow: To,
    sticky: ri
  }, Symbol.toStringTag, { value: "Module" }));
  class li {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.render(), this.addSmoothScrolling(), this.events(), this.addTooltipByHover();
    }
    render() {
      const t = document.querySelector("section.header");
      if (!t) {
        console.error("Target element not found");
        return;
      }
      if (ce == null) return;
      const a = (
        /* HTML */
        `<section class="page-content-wrapper crs-apps">
      <div class="crs-apps-content">
        <h3 class="crs-apps-title">What do you want to start with today?</h3>
        <div class="crs-apps-description">
          Big task or small fix — with 260+ trusted apps, Setapp helps you solve
          anything without stress, all with one simple subscription
        </div>
        <ul class="crs-apps-nav">
          <li class="crs-apps-nav-item"><a href="#fix-slow-mac">Fix slow Mac</a></li>
          <li class="crs-apps-nav-item">
            <a href="#customize-workspace">Customise your workspace</a>
          </li>
          <li class="crs-apps-nav-item">
            <a href="#download-convert-media">Download & convert media</a>
          </li>
          <li class="crs-apps-nav-item">
            <a href="#recover-open-files">Recover & open files</a>
          </li>
          <li class="crs-apps-nav-item">
            <a href="#use-tools">All-in-one work tools</a>
          </li>
          <li class="crs-apps-nav-item"><a href="#use-ai">Do more with AI</a></li>
          <li class="crs-apps-nav-item crs-apps-nav-item--more">
            <a href="https://setapp.com/apps">And more...</a>
          </li>
        </ul>
        <div class="crs-apps-blocks">
          <div class="crs-apps-block" data-color="7E7EE1" id="fix-slow-mac">
            <div class="crs-apps-block-inner">
              <div class="crs-block-info">
                <h4 class="crs-block-title">
                  Make your Mac faster and last longer
                </h4>
                <div class="crs-block-description">
                  Clean hidden junk, free up RAM, and keep your Mac in peak
                  shape with tools that prevent future slowdowns.
                </div>
                <div class="crs-block-action">
                  <button
                    type="button"
                    class="btn btn_primary signup__button crs-block-action-button"
                  >
                    Speed up my Mac
                  </button>
                  <div class="crs-block-action-text">
                    start your 7 days free trial
                  </div>
                </div>
                <div class="crs-block-comment">
                  <div class="crs-block-comment-author">
                    <span class="crs-block-comment-rating">
                      <span></span><span></span><span></span><span></span
                      ><span></span
                    ></span>
                    — David M.
                  </div>
                  <div class="crs-block-comment-text">
                    " Setapp is like a magic toolbox for my Mac — whatever I need, it’s just there. Makes me way more productive "
                  </div>
                </div>
              </div>
              <div class="crs-block-apps">
                <div class="crs-block-apps-list">
                ${this.renderApps([
          "CleanMyMac",
          "QuitAll",
          "iStat Menus",
          "Endurance",
          "AlDente Pro",
          "Mission Control"
        ])}</div>
                <div class="crs-block-more">
                  <div>35+ more apps</div>
                  <div>solving this with one subscription</div>
                </div>
              </div>
            </div>
          </div>
          <div class="crs-apps-block" data-color="D5D8FE" id="customize-workspace">
            <div class="crs-apps-block-inner">
              <div class="crs-block-info">
                <h4 class="crs-block-title">
                  Customize your Mac to look clean and work faster
                </h4>
                <div class="crs-block-description">
                  Hide distractions, manage your menu bar, create custom
                  gestures, and design a workspace that fits the way you think —
                  not the way Apple decided
                </div>
                <div class="crs-block-action">
                  <button
                    type="button"
                    class="btn btn_primary signup__button crs-block-action-button"
                  >
                    Customize my Mac
                  </button>
                  <div class="crs-block-action-text">
                    start your 7 days free trial
                  </div>
                </div>
              </div>
              <div class="crs-block-apps">
                <div class="crs-block-apps-list">${this.renderApps([
          "WidgetWall",
          "Bartender",
          "CleanShot X"
        ])}</div>
                <div class="crs-block-more">
                  <div>20+ more apps</div>
                  <div>solving this with one subscription</div>
                </div>
              </div>
            </div>
          </div>
          <div class="crs-apps-block" data-color="424E81" id="download-convert-media">
            <div class="crs-apps-block-inner">
              <div class="crs-block-info">
                <h4 class="crs-block-title">
                  Get the videos you need, in the format you want
                </h4>
                <div class="crs-block-description">
                  Whether it's YouTube tutorials or social media clips, Setapp
                  gives you tools to download videos, extract audio, and convert
                  formats that actually work
                </div>
                <div class="crs-block-action">
                  <button
                    type="button"
                    class="btn btn_light signup__button crs-block-action-button"
                  >
                    Get the video I need
                  </button>
                  <div class="crs-block-action-text">
                    start your 7 days free trial
                  </div>
                </div>
              </div>
              <div class="crs-block-apps">
                <div class="crs-block-apps-list">${this.renderApps([
          "Downie",
          "Pulltube",
          "Permute"
        ])}</div>
                <div class="crs-block-more">
                  <div>17+ more apps</div>
                  <div>solving this with one subscription</div>
                </div>
              </div>
            </div>
          </div>
          <div class="crs-apps-block" data-color="CF6F8A" id="recover-open-files">
            <div class="crs-apps-block-inner">
              <div class="crs-block-info">
                <h4 class="crs-block-title">
                  Open and edit what your Mac usually can't
                </h4>
                <div class="crs-block-description">
                  Work with PDFs, RARs, NTFS, and more — open, edit, fix, and
                  convert the formats your Mac can't handle on its own
                </div>
                <div class="crs-block-action">
                  <button
                    type="button"
                    class="btn btn_primary signup__button crs-block-action-button"
                  >
                    Handle my tricky files
                  </button>
                  <div class="crs-block-action-text">
                    start your 7 days free trial
                  </div>
                </div>
                <div class="crs-block-comment">
                  <div class="crs-block-comment-author">
                    <span class="crs-block-comment-rating">
                    <span></span><span></span><span></span><span></span
                      ><span></span
                    ></span></span> — Andy S.
                  </div>
                  <div class="crs-block-comment-text">
                    " One subscription, tons of great Mac and iOS apps. No separate licenses needed! "
                  </div>
                </div>
              </div>
              <div class="crs-block-apps">
                <div class="crs-block-apps-list">${this.renderApps([
          "Nitro PDF Pro",
          "BetterZip",
          "Get Backup Pro",
          "Archiver",
          "Ulysses",
          "Renamer"
        ])}</div>
                <div class="crs-block-more">
                  <div>63+ more apps</div>
                  <div>solving this with one subscription</div>
                </div>
              </div>
            </div>
          </div>
          <div class="crs-apps-block" data-color="F0AD84" id="use-tools">
            <div class="crs-apps-block-inner">
              <div class="crs-block-info">
                <h4 class="crs-block-title">
                  All your work tools, finally in one place
                </h4>
                <div class="crs-block-description">
                  From documents to development, Setapp includes focused tools
                  for writing, coding, managing tasks, and staying productive —
                  no extra subscriptions needed
                </div>
                <div class="crs-block-action">
                  <button
                    type="button"
                    class="btn btn_primary signup__button crs-block-action-button"
                  >
                    Get my full toolkit
                  </button>
                  <div class="crs-block-action-text">
                    start your 7 days free trial
                  </div>
                </div>
              </div>
              <div class="crs-block-apps">
                <div class="crs-block-apps-list">${this.renderApps([
          "Session",
          "CodeRunner",
          "Craft"
        ])}</div>
                <div class="crs-block-more">
                  <div>83+ more apps</div>
                  <div>solving this with one subscription</div>
                </div>
              </div>
            </div>
          </div>
          <div class="crs-apps-block" data-color="F0D0B5" id="use-ai">
            <div class="crs-apps-block-inner">
              <div class="crs-block-info">
                <h4 class="crs-block-title">
                  Use AI to write, transcribe, and stay ahead
                </h4>
                <div class="crs-block-description">
                  With tools for writing, summarising, chatting with PDFs, and
                  transcribing meetings, Setapp brings AI into your workflow —
                  without setup, stress, or extra subscriptions
                </div>
                <div class="crs-block-action">
                  <button
                    type="button"
                    class="btn btn_primary signup__button crs-block-action-button"
                  >
                    Explore my AI tools
                  </button>
                  <div class="crs-block-action-text">
                    start your 7 days free trial
                  </div>
                </div>
         
              </div>
              <div class="crs-block-apps">
                     <div class="crs-block-apps-list">${this.renderApps([
          "PDF Pals",
          "MurmurType",
          "Ready to Send"
        ])}</div>
                <div class="crs-block-more">
                  <div>9+ more apps</div>
                  <div>solving this with one subscription</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="crs-apps-action">
          <a href="https://setapp.com/apps" class="btn btn-link btn_no-spacing btn-link_light btn-link_with-arrow">
            View all superpowers
          </a>
        </div>
        <div class="crs-apps-subtitle">
          Sign up, install Setapp, and find your <br>
perfect app in our suite of 260+ apps.
        </div>
      </div>
    </section>`
      );
      t.insertAdjacentHTML("afterend", a);
    }
    renderApps(t) {
      return t.map((a) => ce.find((o) => o.name === a)).filter((a) => a !== void 0).map(
        (a) => (
          /* HTML */
          `<div class="crs-block-app">
          <div class="crs-block-app-icon">
            <img
              src="${a.icon}"
              alt="${a.name}"
              width="80"
              height="80"
              loading="lazy"
            />
          </div>
          <div class="crs-block-app-name">${a.name}</div>
          <div class="crs-block-app-description">${a.description}</div>

          <div class="crs-block-app-meta">
            ${a.rating ? (
            /* HTML */
            `<div class="crs-block-app-rating">
                  <img
                    alt=""
                    width="16"
                    height="16"
                    src="https://cdn.setapp.com/master-9f18f44f26fe5f8aa6077a4a8f38ca796e93985f-590/build/main/751ecfba46c61061d678.svg"
                  />${a.rating}%
                </div>`
          ) : ""}
            <div class="crs-block-app-platforms">${a.platforms}</div>
          </div>
        </div>`
        )
      ).join("");
    }
    events() {
      const t = document.querySelectorAll(
        ".crs-block-action-button"
      );
      t && t.length > 0 && t.forEach((a) => {
        a.addEventListener("click", (o) => {
          var n;
          (n = document.querySelector(".header__cta-button")) == null || n.click();
        });
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = ba, document.head.append(t);
    }
    addSmoothScrolling() {
      document.addEventListener("click", (t) => {
        const o = t.target.closest('.crs-apps-nav a[href^="#"]');
        if (o) {
          t.preventDefault();
          const n = o.getAttribute("href");
          if (n && n !== "#") {
            const p = document.querySelector(n);
            p && p.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }
      });
    }
    addTooltipByHover() {
      const t = document.querySelectorAll(".crs-block-app");
      if (!t) {
        console.error("Apps blocks container not found");
        return;
      }
      let a;
      const o = new xa();
      t.forEach((n) => {
        let p = null;
        n.addEventListener("mouseenter", (s) => {
          if (p) {
            p.hide();
            return;
          }
          const r = n.querySelector(".crs-block-app-name");
          if (!r) return;
          console.log("App Name:", r.textContent);
          const c = ka.find(
            (d) => d.title.includes(r.textContent || "")
          );
          if (!c) {
            console.warn(
              "No tooltip variant found for app:",
              r.textContent
            );
            return;
          }
          const m = s.target;
          p = ci(m, {
            content: o.returnHtml(c),
            allowHTML: !0,
            arrow: !1,
            interactive: !0,
            maxWidth: "none",
            theme: "light",
            placement: "right-start",
            boundary: "viewport",
            delay: [1e3, 1e3],
            // Show immediately, hide with delay
            showOnCreate: !0,
            // Show the tooltip immediately when created
            popperOptions: {
              modifiers: [
                {
                  name: "flip",
                  options: {
                    fallbackPlacements: ["left-start", "top", "bottom"]
                  }
                }
              ]
            },
            onShow(d) {
              const k = d.popper.querySelector(
                ".btn-download"
              );
              a = new AbortController(), k == null || k.addEventListener(
                "click",
                () => {
                  d.hide(), setTimeout(() => {
                    var x;
                    (x = document.querySelector(".header__cta-button")) == null || x.click();
                  }, 200);
                },
                {
                  signal: a.signal
                }
              );
            },
            onHide(d) {
              a && a.abort();
            }
          });
        });
      });
    }
  }
  const di = `.crs-achievs {
  margin-top: 80px;
  width: 100%;
}

.crs-achievs-inner {
  max-width: 1200px;
  margin: 0 auto;
}
.crs-achievs-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 5px;
  width: 100%;
}

.crs-achievs-item {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 6px;
  min-height: 103px;
}

.crs-achievs-item::before,
.crs-achievs-item::after {
  bottom: 0;
  content: '';
  display: block;
  width: 41px;
  height: 100%;
}

.crs-achievs-item::before {
  background-image: url('https://conversionrate-store.github.io/a-b_images/setapp/laurel_left.svg');
}

.crs-achievs-item::after {
  background-image: url('https://conversionrate-store.github.io/a-b_images/setapp/laurel_right.svg');
}

.crs-achievs-item .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  color: #fff;
}

.crs-achievs-item .highlight {
  color: #fff;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  line-height: 20px;
}

.crs-achievs-item .title {
  margin-top: 10px;
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
}

.crs-achievs-item .description {
  margin-top: 2px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}

.crs-achievs-item .apple-logo {
  width: 26px;
  height: 34px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="26" height="34" fill="none"><path fill="%23fff" d="M25.172 11.998a7.372 7.372 0 0 0-2.513 2.684 7.667 7.667 0 0 0-.944 3.605 7.449 7.449 0 0 0 1.174 4A7.101 7.101 0 0 0 26 24.96a17.635 17.635 0 0 1-2.194 4.683c-1.367 2.032-2.795 4.064-4.968 4.064-2.174 0-2.733-1.304-5.238-1.304-2.442 0-3.312 1.347-5.3 1.347-1.986 0-3.373-1.882-4.967-4.192A20.733 20.733 0 0 1 0 18.628c0-6.416 4.037-9.816 8.011-9.816 2.112 0 3.871 1.433 5.196 1.433 1.263 0 3.23-1.519 5.63-1.519a7.332 7.332 0 0 1 3.563.82 7.606 7.606 0 0 1 2.772 2.453ZM17.699 6.01a7.518 7.518 0 0 0 1.698-4.597 3.281 3.281 0 0 0-.063-.663 7.08 7.08 0 0 0-4.699 2.502 7.3 7.3 0 0 0-1.76 4.47c.002.202.022.402.063.6.143.027.289.042.435.042a6.052 6.052 0 0 0 2.397-.718A6.248 6.248 0 0 0 17.7 6.01Z"/></svg>');
  background-repeat: no-repeat;
}

.crs-achievs-item .capterra-logo {
  width: 80px;
  height: 21px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="21" fill="none"><g fill="%23fff" clip-path="url(%23a)"><path d="M11.455 15.246c-.082.086-.22.195-.412.325-.192.13-.443.26-.752.39-.31.129-.687.241-1.133.335-.446.094-.958.14-1.534.14-1.112 0-2.073-.187-2.883-.563a5.401 5.401 0 0 1-2.008-1.57c-.528-.67-.916-1.465-1.163-2.381-.247-.916-.37-1.924-.37-3.02 0-1.097.133-2.112.401-3.043.268-.93.67-1.735 1.205-2.414a5.568 5.568 0 0 1 2.008-1.591c.803-.382 1.747-.574 2.831-.574.535 0 1.02.051 1.452.152.432.1.81.22 1.133.357.322.137.59.281.803.432.213.151.374.278.484.38.123.115.23.252.319.41.089.16.134.333.134.52 0 .29-.103.578-.31.867a6.209 6.209 0 0 1-.68.801 8.388 8.388 0 0 0-.555-.53 3.744 3.744 0 0 0-.69-.476 4.44 4.44 0 0 0-.866-.347 3.87 3.87 0 0 0-1.08-.14c-.7 0-1.288.148-1.762.443a3.463 3.463 0 0 0-1.143 1.158 5.043 5.043 0 0 0-.617 1.635 9.95 9.95 0 0 0 0 3.822c.123.621.336 1.17.638 1.646.301.476.696.859 1.184 1.147.487.289 1.095.434 1.822.434.384 0 .738-.05 1.06-.152.323-.1.608-.224.855-.368s.464-.296.65-.455c.184-.158.339-.296.462-.411.083.1.179.224.289.368.11.144.213.296.309.454.096.16.178.318.247.476.068.16.103.304.103.433 0 .188-.035.347-.103.476-.067.131-.177.275-.328.434ZM22.066 13.585c0 1.148.158 1.983.476 2.505a3.37 3.37 0 0 1-1.368.283c-.497 0-.873-.102-1.128-.304-.256-.203-.418-.494-.487-.872-.305.335-.705.618-1.202.85-.497.232-1.105.349-1.823.349-.373 0-.745-.055-1.118-.163a2.887 2.887 0 0 1-1.015-.532 2.744 2.744 0 0 1-.746-.988c-.194-.412-.29-.915-.29-1.509 0-.738.169-1.34.508-1.802a3.657 3.657 0 0 1 1.274-1.096 5.585 5.585 0 0 1 1.657-.554c.593-.1 1.139-.166 1.636-.195.166-.015.328-.022.487-.022h.446v-.396c0-.559-.142-.955-.425-1.19-.284-.235-.743-.353-1.378-.353-.594 0-1.122.102-1.584.305-.463.204-.915.436-1.357.697a3.23 3.23 0 0 1-.466-.816c-.118-.298-.177-.52-.177-.665 0-.203.107-.4.321-.588.214-.189.508-.36.88-.512a6.88 6.88 0 0 1 1.285-.37 7.981 7.981 0 0 1 1.533-.142c.746 0 1.378.08 1.896.24.518.16.94.406 1.264.74.324.334.556.75.693 1.252.138.5.208 1.085.208 1.753v4.095Zm-2.652-2.527h-.29a1.93 1.93 0 0 0-.29.022c-.345.03-.687.073-1.025.13-.339.058-.64.16-.901.306a1.92 1.92 0 0 0-.643.566c-.166.233-.248.53-.248.893 0 .407.11.751.331 1.035.22.283.594.425 1.12.425.261 0 .51-.037.745-.11.234-.071.442-.166.621-.282.18-.117.321-.243.425-.381.104-.138.156-.265.156-.381v-2.223ZM27.225 6.768c.22-.276.564-.556 1.033-.839.468-.283 1.06-.425 1.776-.425.51 0 .994.091 1.456.272.46.182.87.476 1.228.882.358.407.644.944.857 1.613.213.668.32 1.488.32 2.461 0 1.133-.124 2.066-.372 2.799-.248.734-.568 1.315-.96 1.742-.392.429-.83.73-1.311.904a4.223 4.223 0 0 1-1.446.262 3.44 3.44 0 0 1-1.043-.142 4.053 4.053 0 0 1-.754-.315 2.03 2.03 0 0 1-.682-.589v5.355H24.51V5.809a4.383 4.383 0 0 1 .939-.087c.46 0 .849.08 1.169.24.321.16.524.428.607.806Zm3.73 4.03a6.83 6.83 0 0 0-.104-1.22 3.072 3.072 0 0 0-.34-.98 1.695 1.695 0 0 0-.639-.643c-.268-.153-.594-.228-.977-.228-.577 0-.98.116-1.205.348-.227.233-.34.486-.34.763v4.617c.11.117.305.254.587.414.281.16.608.24.978.24.7 0 1.216-.29 1.545-.872.33-.58.494-1.394.494-2.44ZM36.07 14.544a3.959 3.959 0 0 1-.187-.915c-.027-.32-.041-.639-.041-.959V2.563c.096-.014.2-.029.31-.043.097-.015.2-.026.311-.033.11-.007.22-.01.331-.01.221 0 .442.02.664.065.22.043.42.13.6.26.18.131.325.31.436.534.11.226.166.52.166.882v1.547h2.9v2.2h-2.9v4.646c0 1.013.393 1.519 1.18 1.519.194 0 .377-.033.55-.098.173-.066.328-.138.466-.218a2.77 2.77 0 0 0 .58-.447c.207.32.366.596.476.83.11.233.166.453.166.658 0 .19-.072.378-.217.56-.145.184-.35.353-.611.507-.262.154-.58.278-.953.373a4.93 4.93 0 0 1-1.222.144c-.857 0-1.523-.175-2-.523a2.763 2.763 0 0 1-1.005-1.372ZM48.696 14.261c.347 0 .652-.04.915-.12.263-.08.499-.177.707-.294.208-.116.388-.242.54-.38.153-.139.292-.265.417-.382.166.218.34.498.519.839.18.341.27.62.27.838 0 .32-.172.61-.518.871-.29.233-.701.432-1.232.6-.532.166-1.157.25-1.875.25-.65 0-1.288-.087-1.916-.26a4.163 4.163 0 0 1-1.678-.915c-.49-.436-.888-1.02-1.192-1.754-.304-.733-.456-1.658-.456-2.777 0-.915.135-1.702.404-2.363.27-.66.629-1.209 1.078-1.645a4.214 4.214 0 0 1 1.522-.958 5.125 5.125 0 0 1 1.74-.305c.773 0 1.43.127 1.968.38.54.255.978.596 1.316 1.025.338.428.583.918.735 1.47.151.552.227 1.133.227 1.742v.305c0 .116-.003.24-.01.37l-.02.381a2.33 2.33 0 0 1-.032.294h-6.111c.055.799.29 1.463.706 1.993.417.53 1.075.795 1.976.795Zm.944-4.422c0-.697-.128-1.263-.386-1.699-.257-.435-.719-.653-1.385-.653-.57 0-1.024.207-1.364.62-.34.415-.51.992-.51 1.732h3.645ZM57.09 6.823c.084-.13.194-.274.332-.432.138-.159.307-.303.508-.432.2-.13.42-.238.663-.325.241-.086.5-.13.777-.13.165 0 .341.015.528.044.187.029.359.083.518.162.159.08.286.187.383.324a.861.861 0 0 1 .145.508c0 .317-.076.68-.227 1.091-.152.411-.304.762-.456 1.053a3.061 3.061 0 0 0-.705-.469 1.951 1.951 0 0 0-.828-.163c-.428 0-.787.13-1.077.393-.29.262-.435.575-.435.94v7.051h-2.818V5.808a4.4 4.4 0 0 1 .538-.076c.111-.007.242-.01.394-.01.442 0 .825.09 1.15.27.325.18.529.457.61.83ZM65.102 6.823c.083-.13.193-.274.331-.432.138-.159.307-.303.508-.432.2-.13.421-.238.662-.325.242-.086.501-.13.777-.13.166 0 .342.015.529.044.186.029.358.083.518.162.159.08.286.187.383.324a.862.862 0 0 1 .145.508c0 .317-.076.68-.228 1.091-.152.411-.304.762-.455 1.053a3.057 3.057 0 0 0-.705-.469 1.951 1.951 0 0 0-.829-.163c-.428 0-.787.13-1.077.393-.29.262-.435.575-.435.94v7.051h-2.818V5.808a4.533 4.533 0 0 1 .538-.076 6.1 6.1 0 0 1 .394-.01c.442 0 .825.09 1.15.27.325.18.529.457.612.83ZM78.546 13.585c0 1.148.159 1.983.477 2.505a3.367 3.367 0 0 1-1.367.283c-.498 0-.874-.102-1.13-.304-.256-.203-.417-.494-.486-.872-.304.335-.704.618-1.202.85-.497.232-1.105.349-1.823.349-.372 0-.745-.055-1.119-.163a2.887 2.887 0 0 1-1.015-.532 2.744 2.744 0 0 1-.746-.988c-.194-.412-.29-.915-.29-1.509 0-.738.17-1.34.508-1.802a3.657 3.657 0 0 1 1.274-1.096 5.574 5.574 0 0 1 1.657-.554c.593-.1 1.14-.166 1.636-.195.167-.015.328-.022.488-.022h.444v-.396c0-.559-.141-.955-.424-1.19-.284-.235-.743-.353-1.378-.353-.594 0-1.121.102-1.584.305-.462.204-.915.436-1.357.697a3.223 3.223 0 0 1-.466-.816c-.118-.298-.176-.52-.176-.665 0-.203.107-.4.321-.588.214-.189.508-.36.88-.512a6.884 6.884 0 0 1 1.285-.37 7.977 7.977 0 0 1 1.533-.142c.746 0 1.378.08 1.896.24.518.16.939.406 1.263.74.325.334.556.75.695 1.252.137.5.206 1.085.206 1.753v4.095Zm-2.65-2.527h-.29a1.93 1.93 0 0 0-.29.022c-.346.03-.688.073-1.026.13a2.83 2.83 0 0 0-.902.306 1.937 1.937 0 0 0-.642.566c-.166.233-.249.53-.249.893 0 .407.112.751.332 1.035.22.283.594.425 1.119.425.262 0 .51-.037.746-.11a2.47 2.47 0 0 0 .621-.282c.18-.117.321-.243.425-.381.104-.138.156-.265.156-.381v-2.223Z"/></g><defs><clipPath id="a"><path fill="%23fff" d="M.5.75h79v20H.5z"/></clipPath></defs></svg>');
}

.crs-achievs-item .rating-star {
  display: flex;
  align-items: center;
  gap: 6px;
}

.crs-achievs-item .rating-star::before {
  content: '';
  display: inline-block;
  width: 24px;
  height: 23px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" fill="none"><path fill="%23fff" d="M23.363 8.613 15.985 7.58l-3.307-6.467c-.247-.483-1.11-.483-1.357 0L8.015 7.58.637 8.613C.031 8.7-.21 9.375.214 9.775l5.36 5.043-1.267 7.13c-.1.567.558.992 1.103.714L12 19.32l6.59 3.344c.54.275 1.205-.141 1.103-.713l-1.267-7.13 5.36-5.044c.425-.4.182-1.077-.423-1.163Z"/></svg>');
  background-repeat: no-repeat;
}
`;
  class mi {
    constructor({ container: t, position: a = "afterend" }) {
      this.container = t, this.position = a, this.init();
    }
    init() {
      if (!this.container) {
        console.error("Container element is not provided");
        return;
      }
      this.addStyles(), this.render();
    }
    render() {
      this.container.insertAdjacentHTML(
        this.position,
        /* HTML */
        `
      <div class="crs-achievs">
        <div class="crs-achievs-inner">
          <div class="crs-achievs-list">
            <div class="crs-achievs-item">
              <div class="content">
                <div class="highlight apple-logo"></div>
                <div class="title">Notarized</div>
                <div class="description">by Apple</div>
              </div>
            </div>
            <div class="crs-achievs-item">
              <div class="content">
                <div class="highlight">100 000+</div>
                <div class="title">Happy subscribers</div>
                <div class="description">since 2016</div>
              </div>
            </div>
            <div class="crs-achievs-item">
              <div class="content">
                <div class="highlight rating-star">4.7</div>
                <div class="title capterra-logo"></div>
                <div class="description">rating</div>
              </div>
            </div>
            <div class="crs-achievs-item">
              <div class="content">
                <div class="highlight rating-star">4.8</div>
                <div class="title">G2 reviews</div>
                <div class="description">rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
      );
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = di, document.head.appendChild(t);
    }
  }
  const ui = "https://conversionrate-store.github.io/a-b_images/setapp/", fi = `.site-navigation__bar {
  background: #1a1a1d;
}

section.header {
  padding-top: 0 !important;
}

.eney-promo-banner,
section.header .header__badge,
section.header .header__description {
  display: none;
}

.header__apps-image {
  margin-top: 20px;
  margin-bottom: -60px;
  width: 100%;
  height: max-content;
}

.header__apps-image img {
  width: 100%;
  max-width: 710px;
  filter: drop-shadow(1px 10px 50px #d9d9d92a);
}

.header__logo {
  position: relative;
  filter: drop-shadow(1px 10px 30px #d9d9d934);
}

.header__title.h1_hero {
  max-width: 1022px;
  font-size: 64px;
  font-weight: 700;
  line-height: 67.84px;
  letter-spacing: 1px;
}

.crs-header-comment {
  margin-top: 42px;
  max-width: 566px;
  text-wrap: pretty;
  color: #fff;
}

.crs-header-comment p {
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  text-align: left;
}

.crs-header-comment-author {
  margin-top: 8px;
}

.crs-header-comment-author .stars {
  --star-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" fill="none"><path fill="%23EFD0B5" d="m13.629 4.897-4.304-.612L7.395.464c-.144-.285-.647-.285-.791 0L4.675 4.285l-4.303.612c-.354.05-.495.45-.247.686l3.127 2.98-.74 4.213c-.058.335.326.586.644.422L7 11.222l3.844 1.977c.315.162.703-.084.644-.422l-.74-4.213 3.127-2.98c.248-.237.106-.637-.246-.687Z"/></svg>');
  display: inline-flex;
  gap: 4px;
  width: 86px;
  height: 17px;
}

.crs-header-comment-author .stars span {
  width: 14px;
  height: 13px;
  background-image: var(--star-image);
}
`;
  class hi {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.addAppsImage(), this.changeTitle(), this.addComment(), this.addAchievs();
    }
    addAppsImage() {
      const t = `
      <div class="header__apps-image"><img src="${ui}/apps.webp" alt="Apps Image"></div>`, a = document.querySelector(
        "section.header .header__logo"
      );
      a ? a.insertAdjacentHTML("beforebegin", t) : console.error("Target element not found");
    }
    changeTitle() {
      const t = document.querySelector("section.header h1.h1_hero");
      t && (t.textContent = "Get any task done on your Mac with one subscription");
    }
    addComment() {
      const t = document.querySelector(
        "section.header .header__description"
      );
      if (!t) return;
      t.insertAdjacentHTML(
        "beforebegin",
        /* HTML */
        `<div class="crs-header-comment">
      <p>
        “ Hundreds of the best Mac apps out there. Tens of thousands of dollars
        of software for just a few bucks a month. I pay for it on all of my
        computers. “
      </p>
      <div class="crs-header-comment-author">
        <span class="stars"
          ><span></span><span></span><span></span><span></span><span></span
        ></span>
        — Lory G.
      </div>
    </div>`
      );
    }
    addAchievs() {
      const t = document.querySelector(
        "section.header .header__description"
      );
      t && new mi({
        container: t,
        position: "afterend"
      });
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = fi, document.head.appendChild(t);
    }
  }
  const gi = `.crs-more {
  margin-bottom: 120px;
  max-width: 100%;
  color: #fff;
  background-color: #070707;
  background-image: url('https://conversionrate-store.github.io/a-b_images/setapp/notebook-bg-2.webp');
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
}


@media (min-width: 1440px) {
  .crs-more {
    background-size: cover;
  }
}

.crs-more-content {
  margin-inline: auto;
  max-width: 1260px;
  padding-top: 49px;
  padding-bottom: 35%;
}

.crs-more-title {
  color: #fff;
  text-align: center;
  font-size: 36px;
  font-weight: 400;
  line-height: 51.84px;
  letter-spacing: 1px;
}

.crs-more-description {
  margin-top: 12px;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32.04px; /* 178% */
}

.crs-more-blocks {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.crs-more-block {
  flex: 1;
  max-width: 380px;
  min-width: 300px;
  padding: 40px;
  border-radius: 15px;
  background: #26262b;
}

.crs-more-block-title {
  margin-top: 40px;
  margin-bottom: 0;
  color: #fff;
  font-size: 26px;
  font-weight: 600;
  line-height: 36px;
}

.crs-more-block-description {
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
}
`;
  class vi {
    constructor() {
      this.init();
    }
    init() {
      this.addStyles(), this.render();
    }
    render() {
      const t = document.querySelector("section.apps");
      if (!t) {
        console.error("Target element not found");
        return;
      }
      t.insertAdjacentHTML(
        "beforebegin",
        /* HTML */
        `
      <section class="crs-more page-content-wrapper ">
        <div class="crs-more-content">
          <h3 class="crs-more-title">More with Setapp</h3>
          <div class="crs-more-description">
            With a Setapp subscription, it's easy to discover, install, and use <br>
            quality apps for Mac and iOS.
          </div>
          <div class="crs-more-blocks">
            <div class="crs-more-block">
              <div class="crs-block-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.633 30.3472V18.6702C13.633 16.7062 14.113 14.7722 15.033 13.0252L19.993 3.60524C20.1745 3.26619 20.4452 2.98315 20.7758 2.78665C21.1064 2.59016 21.4844 2.48767 21.869 2.49024C23.032 2.49024 23.976 3.40824 23.976 4.54024V14.8702H32.722C35.998 14.8702 38.3 18.0072 37.236 21.0222L33.409 31.8552C32.746 33.7302 30.932 34.9902 28.894 34.9902H18.406C15.77 34.9902 13.633 32.9122 13.633 30.3472ZM2.5 18.7412C2.5 16.6032 4.28 14.8712 6.478 14.8712C8.675 14.8712 10.455 16.6032 10.455 18.7412V31.1212C10.455 33.2592 8.675 34.9912 6.478 34.9912C4.28 34.9902 2.5 33.2592 2.5 31.1202V18.7412Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="crs-more-block-title">Handpicked Apps</div>
              <div class="crs-more-block-description">
                Each app is carefully selected, with new ones added regularly.
              </div>
            </div>
            <div class="crs-more-block">
              <div class="crs-block-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.7526 4.24023C17.1559 4.24023 16.5836 4.47729 16.1616 4.89924C15.7396 5.3212 15.5026 5.8935 15.5026 6.49023V17.7402H7.4336C5.4296 17.7402 4.4256 20.1632 5.8436 21.5802L18.4096 34.1502C18.6185 34.3592 18.8666 34.5249 19.1396 34.638C19.4125 34.7511 19.7051 34.8093 20.0006 34.8093C20.2961 34.8093 20.5887 34.7511 20.8616 34.638C21.1346 34.5249 21.3827 34.3592 21.5916 34.1502L34.1616 21.5832C35.5786 20.1652 34.5746 17.7422 32.5696 17.7422L24.5026 17.7412V6.49023C24.5026 5.8935 24.2655 5.3212 23.8436 4.89924C23.4216 4.47729 22.8493 4.24023 22.2526 4.24023H17.7526Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="crs-more-block-title">Free Updates, No Ads</div>
              <div class="crs-more-block-description">
                Enjoy automatic updates and zero ads at no extra cost.
              </div>
            </div>
            <div class="crs-more-block">
              <div class="crs-block-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <g clip-path="url(#clip0_781_1191)">
                    <mask
                      id="mask0_781_1191"
                      style="mask-type:luminance"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="-1"
                      width="40"
                      height="41"
                    >
                      <path
                        d="M0 -0.00976562H40V39.9902H0V-0.00976562Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask0_781_1191)">
                      <path
                        d="M35.962 5.97123C33.2834 4.95687 30.372 4.72349 27.566 5.29823C24.7718 5.86635 22.199 7.22323 20.152 9.20823C18.0747 7.13799 15.416 5.7497 12.53 5.22823C9.63284 4.69872 6.64328 5.05669 3.95301 6.25523C3.67177 6.37768 3.43159 6.57829 3.26101 6.83323C3.09249 7.08556 3.00174 7.38181 3.00001 7.68523V31.3962C2.99901 31.6282 3.05501 31.8562 3.16401 32.0622C3.27401 32.2682 3.43201 32.4452 3.62601 32.5772C3.82124 32.711 4.0456 32.7963 4.28041 32.8258C4.51523 32.8554 4.75371 32.8284 4.97601 32.7472C7.12 31.9813 9.41304 31.7259 11.673 32.0012C13.9277 32.274 16.0871 33.0713 17.978 34.3292C18.6333 34.7629 19.4022 34.9929 20.188 34.9902C20.9558 34.9922 21.7077 34.7709 22.352 34.3532C24.211 33.1348 26.3174 32.3444 28.519 32.0392C30.7262 31.7316 32.9741 31.9153 35.102 32.5772C35.3575 32.6543 35.6289 32.6614 35.888 32.5977C36.1471 32.534 36.3844 32.4019 36.575 32.2152C36.848 31.9442 37.001 31.5792 37 31.1992V7.43223C36.998 7.11376 36.8978 6.80366 36.713 6.54423C36.5262 6.28229 36.2639 6.08264 35.962 5.97123ZM17.875 13.3632V30.4952C14.568 28.9612 9.87301 28.4152 6.25001 28.9232V8.49323C7.98501 8.03123 10.814 8.03123 12.549 8.49323C14.2762 8.95045 15.8519 9.85563 17.117 11.1172C17.408 11.4592 17.662 11.8292 17.875 12.2212V13.3632Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_781_1191">
                      <rect
                        width="40"
                        height="40"
                        fill="white"
                        transform="translate(0 -0.00976562)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="crs-more-block-title">App Guides</div>
              <div class="crs-more-block-description">
                Learn new apps fast and uncover hidden features easily.
              </div>
            </div>
          </div>
        </div>
      </section>
    `
      );
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = gi, document.head.appendChild(t);
    }
  }
  const yi = `.home {
  background: #1a1a1d;
}
`;
  va({ name: "4th EXP on HP", dev: "OS" }), ya("exp_hp");
  class bi {
    constructor() {
      this.device = window.innerWidth < 768 ? "mobile" : "desktop", this.init();
    }
    init() {
      this.getAppData(), !(this.device === "mobile" || location.pathname !== "/") && (console.log("Test init"), this.addStyles(), new hi(), new li(), new vi());
    }
    getAppData() {
      const t = document.querySelectorAll("app-details");
      console.log("All Apps:", t);
      const a = Array.from(t).map((o) => {
        const n = o.getAttribute("name") || "", p = o.getAttribute("iconsrc") || "", s = o.getAttribute("description") || "", r = o.getAttribute("url") || "", c = o.getAttribute("platforms") || "", m = o.getAttribute("rating") || "";
        return {
          name: n,
          icon: p,
          description: s,
          url: r,
          platforms: c,
          rating: m
        };
      });
      console.log("App Data:", a);
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = yi, document.head.appendChild(t);
    }
  }
  new bi();
})();
