(function() {
  "use strict";
  const l = (c) => new Promise((t) => {
    const p = document.querySelector(c);
    p && t(p);
    const a = new MutationObserver(() => {
      const e = document.querySelector(c);
      e && (t(e), a.disconnect());
    });
    a.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), h = ({ name: c, dev: t }) => {
    console.log(
      `%c EXP: ${c} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, u = (c) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", c, "variant_1"));
    }, 1e3);
  }, g = [
    {
      name: "Supercharge",
      description: "Supercharge your Mac",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/742/42581/icon-1747027558-6821866668cc5.png",
      url: "https://setapp.com/apps/supercharge"
    },
    {
      name: "Bartender",
      description: "Personalize your menu bar",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/153/42799/icon-1748962599-683f0d271f5a8.png",
      url: "https://setapp.com/apps/bartender"
    },
    {
      name: "CleanShot X",
      description: "Take better screenshots and GIFs",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/321/42718/icon-1748347773-6835ab7ddfd5d.png",
      url: "https://setapp.com/apps/cleanshot"
    },
    {
      name: "TextSniper",
      description: "Extract text from visuals",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/431/40216/icon-1726504026-66e85c5a39ab4.png",
      url: "https://setapp.com/apps/textsniper"
    },
    {
      name: "Numi",
      description: "Calculate and convert anything",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/186/7868/icon-1681314493-6436d2bdefebe.png",
      url: "https://setapp.com/apps/numi"
    },
    {
      name: "Ulysses",
      description: "Write and publish from one app",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/67/42660/icon-1747749841-682c8bd1e7d9c.png",
      url: "https://setapp.com/apps/ulysses"
    },
    {
      name: "TablePlus",
      description: "Query, edit, and manage databases",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/297/42727/icon-1748417759-6836bcdf92700.png",
      url: "https://setapp.com/apps/tableplus"
    },
    {
      name: "MindNode Classic",
      description: "Mind map and brainstorm ideas",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/320/43815/icon-1749119470-684171ee26b61.png",
      url: "https://setapp.com/apps/mindnode"
    },
    {
      name: "Yoink",
      description: "Improve drag and drop",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/330/41335/icon-1734701336-67657118b1691.png",
      url: "https://setapp.com/apps/yoink"
    },
    {
      name: "DevUtils",
      description: "Offline development toolkit",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/445/7963/icon-1682658507-644b54cbceb37.png",
      url: "https://setapp.com/apps/devutils.app"
    },
    {
      name: "Lungo",
      description: "Keep your Mac awake",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/270/42370/icon-1744999749-68029545752bd.png",
      url: "https://setapp.com/apps/lungo"
    },
    {
      name: "PixelSnap",
      description: "Measure anything on the screen",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/358/41224/icon-1734003597-675acb8d48307.png",
      url: "https://setapp.com/apps/pixelsnap"
    },
    {
      name: "Dash",
      description: "Access API documentation offline",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/152/41998/icon-1741245191-67c94b07a2ef0.png",
      url: "https://setapp.com/apps/dash"
    },
    {
      name: "Dropzone",
      description: "Complete everyday tasks faster",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/155/42774/icon-1748821041-683ce43118148.png",
      url: "https://setapp.com/apps/dropzone"
    },
    {
      name: "HazeOver",
      description: "Dim background windows",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/212/40224/icon-1726555425-66e9252168c8f.png",
      url: "https://setapp.com/apps/hazeover"
    },
    {
      name: "Proxyman",
      description: "Debug your web traffic",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/346/43836/icon-1749304623-6844452f7a6cb.png",
      url: "https://setapp.com/apps/proxyman"
    },
    {
      name: "Soulver",
      description: "Convert and calculate in notes",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/551/42488/icon-1746240116-6815827493d38.png",
      url: "https://setapp.com/apps/soulver"
    },
    {
      name: "SnippetsLab",
      description: "Create a library of code snippets",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/125/41422/icon-1735798322-67762e322edcd.png",
      url: "https://setapp.com/apps/snippetslab"
    },
    {
      name: "Dato",
      description: "Stay on top of your schedule",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/571/42735/icon-1748450972-68373e9c7d7fe.png",
      url: "https://setapp.com/apps/dato"
    },
    {
      name: "In Your Face",
      description: "Get full-screen meeting alerts",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/591/42540/icon-1746702631-681c9127e40e9.png",
      url: "https://setapp.com/apps/in-your-face"
    },
    {
      name: "Image2icon",
      description: "Turn images into icons",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/195/5841/icon-1648290647-623eeb57731c9.png",
      url: "https://setapp.com/apps/image2icon"
    },
    {
      name: "TextSoap",
      description: "Make sure your text has no errors",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/284/42084/icon-1742216932-67d81ee49773c.png",
      url: "https://setapp.com/apps/textsoap"
    },
    {
      name: "IconJar",
      description: "Organize your icon sets",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/264/39405/icon-1719519131-667dc79b49105.png",
      url: "https://setapp.com/apps/iconjar"
    },
    {
      name: "TaskPaper",
      description: "Plain-text task management",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/213/40865/icon-1731425370-6733745a98d57.png",
      url: "https://setapp.com/apps/taskpaper"
    },
    {
      name: "SnapMotion",
      description: "Capture snaps from your videos",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/509/41065/icon-1732813283-6748a1e33ce65.png",
      url: "https://setapp.com/apps/snapmotion"
    },
    {
      name: "Buildwatch",
      description: "Track your build time in Xcode",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/467/8800/icon-1695307195-650c55bbf4200.png",
      url: "https://setapp.com/apps/buildwatch"
    },
    {
      name: "Paste",
      description: "Never lose anything you copy",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/98/43831/icon-1749237176-68433db804712.png",
      url: "https://setapp.com/apps/paste"
    },
    {
      name: "Downie",
      description: "Download YouTube videos",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/222/42776/icon-1748848008-683d4d8870860.png",
      url: "https://setapp.com/apps/downie"
    },
    {
      name: "Permute",
      description: "Convert audio, images, and videos",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/219/42789/icon-1748930371-683e8f43d99aa.png",
      url: "https://setapp.com/apps/permute"
    },
    {
      name: "BetterTouchTool",
      description: "Save time with custom actions",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/295/42221/icon-1743429358-67ea9eee7ee73.png",
      url: "https://setapp.com/apps/bettertouchtool"
    },
    {
      name: "AlDente Pro",
      description: "Set battery charging limits",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/483/42676/icon-1747828119-682dbd97182a6.png",
      url: "https://setapp.com/apps/aldente-pro"
    },
    {
      name: "Session",
      description: "Work in short intervals",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/428/42692/icon-1747967217-682fdcf1a2474.png",
      url: "https://setapp.com/apps/session"
    },
    {
      name: "Timing",
      description: "Track time you spend in each app",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/184/42729/icon-1748433728-6836fb408c520.png",
      url: "https://setapp.com/apps/timing"
    },
    {
      name: "One Switch",
      description: "Access macOS features fast",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/349/39552/icon-1720703221-668fd8f5909f4.png",
      url: "https://setapp.com/apps/one-switch"
    },
    {
      name: "QuitAll",
      description: "Speed up Mac by quitting all apps",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/493/10507/icon-1715515857-6640b1d134f36.png",
      url: "https://setapp.com/apps/quit-all-mac"
    },
    {
      name: "PDF Squeezer",
      description: "Compress PDFs without quality loss",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/188/41776/icon-1739380114-67acd5926e8ff.png",
      url: "https://setapp.com/apps/pdf-squeezer"
    },
    {
      name: "Pulltube",
      description: "Download and trim videos",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/371/42761/icon-1748730318-683b81ce0cf9f.png",
      url: "https://setapp.com/apps/pulltube"
    },
    {
      name: "Elmedia Player",
      description: "Versatile media player",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/178/41555/icon-1737151476-678ad3f48d49a.png",
      url: "https://setapp.com/apps/elmedia-player"
    },
    {
      name: "Default Folder X",
      description: "Access recent and favorite files",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/396/42594/icon-1747113137-6822d4b146299.png",
      url: "https://setapp.com/apps/default-folder-x"
    },
    {
      name: "PopClip",
      description: "Use instant text actions",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/159/41304/icon-1734542637-6763052df1bf2.png",
      url: "https://setapp.com/apps/popclip"
    },
    {
      name: "Mission Control Plus",
      description: "Close windows from Mission Control",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/376/42548/icon-1746731563-681d022b89238.png",
      url: "https://setapp.com/apps/mission-control-plus"
    },
    {
      name: "Movist Pro",
      description: "Play all video formats",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/344/41625/icon-1737718534-67937b06a660d.png",
      url: "https://setapp.com/apps/movist-pro"
    },
    {
      name: "HoudahSpot",
      description: "Find files faster",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/452/40620/icon-1729324375-67136557e86ed.png",
      url: "https://setapp.com/apps/houdahspot"
    },
    {
      name: "Typeface",
      description: "Find the perfect font",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/315/42539/icon-1746695766-681c765661a38.png",
      url: "https://setapp.com/apps/typeface"
    },
    {
      name: "TouchRetouch",
      description: "Remove objects from photos",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/298/8541/icon-1691068510-64cba85e8b087.png",
      url: "https://setapp.com/apps/touchretouch"
    },
    {
      name: "Gifox",
      description: "Capture GIFs from your screen",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/197/42706/icon-1748180877-68331f8d91fc4.png",
      url: "https://setapp.com/apps/gifox"
    },
    {
      name: "Hand Mirror",
      description: "Check Mac camera in a click",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/564/41679/icon-1738219390-679b1f7e17746.png",
      url: "https://setapp.com/apps/hand-mirror"
    },
    {
      name: "Unclutter",
      description: "Manage files, notes, clipboard",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/242/41940/icon-1740661852-67c0645c93b70.png",
      url: "https://setapp.com/apps/unclutter"
    },
    {
      name: "Bike",
      description: "Outline ideas and projects",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/598/41510/icon-1736770872-678505384e5f5.png",
      url: "https://setapp.com/apps/bike-outliner"
    },
    {
      name: "Antinote",
      description: "Take notes and do calculations",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/757/42717/icon-1748322683-6835497b1e179.png",
      url: "https://setapp.com/apps/antinote"
    },
    {
      name: "Base",
      description: "Simplify SQLite file management",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/135/9151/icon-1697967585-6534ede1ef890.png",
      url: "https://setapp.com/apps/base"
    },
    {
      name: "Goldie App",
      description: "Measure golden ratio in designs",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/345/42291/icon-1744380820-67f92394afe8e.png",
      url: "https://setapp.com/apps/goldie-app"
    },
    {
      name: "CleanMyMac",
      description: "Tidy up your Mac",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/78/42681/icon-1747895078-682ec326c5805.png",
      url: "https://setapp.com/apps/cleanmymac"
    },
    {
      name: "iStat Menus",
      description: "Track CPU, GPU, sensors, etc.",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/144/41794/icon-1739274958-67ab3ace7a0bf.png",
      url: "https://setapp.com/apps/istat-menus"
    },
    {
      name: "Archiver",
      description: "Compress and unarchive files",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/194/10197/icon-1711963165-660a7c1d7fdbc.png",
      url: "https://setapp.com/apps/archiver"
    },
    {
      name: "SideNotes",
      description: "Notes on the side of your screen",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/365/42288/icon-1744039822-67f3ef8e035dd.png",
      url: "https://setapp.com/apps/sidenotes"
    },
    {
      name: "24 Hour Wallpaper",
      description: "100+ dynamic wallpapers",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/405/41207/icon-1733878798-6758e40ea005c.png",
      url: "https://setapp.com/apps/24-hour-wallpaper"
    },
    {
      name: "NotePlan",
      description: "One space for all your work",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/280/42737/icon-1748462307-68376ae39b791.png",
      url: "https://setapp.com/apps/noteplan"
    },
    {
      name: "OpenIn",
      description: "Open links in select browsers",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/459/41451/icon-1736125870-677b2daede071.png",
      url: "https://setapp.com/apps/openin"
    },
    {
      name: "Swish",
      description: "Set up quick trackpad actions",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/403/41992/icon-1741196417-67c88c81798d1.png",
      url: "https://setapp.com/apps/swish"
    },
    {
      name: "TripMode",
      description: "Save internet data",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/244/41564/icon-1737319715-678d6523e2898.png",
      url: "https://setapp.com/apps/tripmode"
    },
    {
      name: "Pareto Security",
      description: "Check your security settings",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/496/42756/icon-1748647998-683a403ea24fa.png",
      url: "https://setapp.com/apps/pareto-security"
    },
    {
      name: "SQLPro Studio",
      description: "Manage multiple DBMS",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/230/41517/icon-1736865184-678675a0afa1f.png",
      url: "https://setapp.com/apps/sqlpro-studio"
    },
    {
      name: "WiFi Explorer",
      description: "Fix WiFi problems",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/74/41442/icon-1735942774-67786276c8ca4.png",
      url: "https://setapp.com/apps/wifi-explorer"
    },
    {
      name: "Magic Window Air",
      description: "Try aerial screen savers",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/437/8979/icon-1696301083-651b801b55c0c.png",
      url: "https://setapp.com/apps/magic-window-air"
    },
    {
      name: "Step Two",
      description: "Simplify two-step authentication",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/378/7227/icon-1671473505-63a0a9610bff6.png",
      url: "https://setapp.com/apps/step-two"
    },
    {
      name: "Paletro",
      description: "Access app menu commands",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/465/41928/icon-1740573715-67bf0c13e78c0.png",
      url: "https://setapp.com/apps/paletro"
    },
    {
      name: "Due",
      description: "Receive persistent reminders",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/434/43829/icon-1749224796-68430d5cd57f9.png",
      url: "https://setapp.com/apps/due"
    },
    {
      name: "PhotoBulk",
      description: "Resize and watermark photos",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/286/42242/icon-1743778095-67eff12f33d65.png",
      url: "https://setapp.com/apps/photobulk"
    },
    {
      name: "Meta",
      description: "Manage music libraries",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/389/7448/icon-1675335200-63db9620a3946.png",
      url: "https://setapp.com/apps/meta"
    },
    {
      name: "Be Focused",
      description: "Manage to-do lists with timers",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/173/42056/icon-1741873453-67d2e12deefa4.png",
      url: "https://setapp.com/apps/be-focused"
    },
    {
      name: "Diarly",
      description: "Create a private personal diary",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/347/42753/icon-1748612523-6839b5ab7f6fa.png",
      url: "https://setapp.com/apps/diarly"
    },
    {
      name: "SSH Config Editor",
      description: "Manage SSH client config files",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/395/43809/icon-1749051292-6840679c82bf3.png",
      url: "https://setapp.com/apps/ssh-config-editor"
    },
    {
      name: "Awesome Habits",
      description: "Build better habits",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/616/42378/icon-1745096293-68040e655a3fe.png",
      url: "https://setapp.com/apps/awesome-habits"
    },
    {
      name: "Merlin Project Express",
      description: "Manage large projects",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/241/41668/icon-1738139017-6799e5893e6bc.png",
      url: "https://setapp.com/apps/merlin-project-express"
    },
    {
      name: "Hype",
      description: "Create animated HTML5 content",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/192/41603/icon-1737573990-67914666d5d5f.png",
      url: "https://setapp.com/apps/hype"
    },
    {
      name: "BetterZip",
      description: "Create and encrypt archives",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/245/7858/icon-1681236553-6435a249c1fd2.png",
      url: "https://setapp.com/apps/betterzip"
    },
    {
      name: "ForkLift",
      description: "Manage files across servers",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/253/42746/icon-1748525039-68385fef5c0b1.png",
      url: "https://setapp.com/apps/forklift"
    },
    {
      name: "BusyCal",
      description: "Sync your tasks with calendar",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/304/42461/icon-1746181238-68149c760ac98.png",
      url: "https://setapp.com/apps/busycal"
    },
    {
      name: "AirBuddy",
      description: "Monitor your wireless devices",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/513/40120/icon-1726002236-66e0b43cd7afc.png",
      url: "https://setapp.com/apps/airbuddy"
    },
    {
      name: "CodeRunner",
      description: "Edit and run code faster",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/122/41549/icon-1737112183-678a3a77b43aa.png",
      url: "https://setapp.com/apps/coderunner"
    },
    {
      name: "Mate Translate",
      description: "Translate anything",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/248/9552/icon-1703223793-658521f1d6148.png",
      url: "https://setapp.com/apps/mate-translate"
    },
    {
      name: "Renamer",
      description: "Rename a batch of files",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/136/40792/icon-1730733142-6728e4563df6a.png",
      url: "https://setapp.com/apps/renamer"
    },
    {
      name: "Xnapper",
      description: "Create shareable screenshots",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/549/9000/icon-1696394577-651ced51d24d2.png",
      url: "https://setapp.com/apps/xnapper"
    },
    {
      name: "Hookmark",
      description: "Link files, webpages, PDFs",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/544/42451/icon-1745878864-680fff5052376.png",
      url: "https://setapp.com/apps/hookmark"
    },
    {
      name: "KeyKey Typing Tutor",
      description: "Boost your typing speed",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/274/39421/icon-1720817328-669196b02ad52.png",
      url: "https://setapp.com/apps/keykey-typing-tutor"
    },
    {
      name: "News Explorer",
      description: "Create your perfect RSS feed",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/249/42312/icon-1744274352-67f783b0c27a5.png",
      url: "https://setapp.com/apps/news-explorer"
    },
    {
      name: "Expressions",
      description: "Speed up work with regex",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/243/42471/icon-1746014049-68120f61e101a.png",
      url: "https://setapp.com/apps/expressions"
    },
    {
      name: "Receipts",
      description: "Collect documents digitally",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/351/41795/icon-1739276776-67ab41e871a94.png",
      url: "https://setapp.com/apps/receipts"
    },
    {
      name: "Whisk",
      description: "Code editor with live preview",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/463/8892/icon-1695310657-650c634147f17.png",
      url: "https://setapp.com/apps/whisk"
    },
    {
      name: "Usage",
      description: "Monitor device performance",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/637/43818/icon-1749136158-6841b31ef3039.png",
      url: "https://setapp.com/apps/usage"
    },
    {
      name: "PhotosRevive",
      description: "Colorize your old photos",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/508/41064/icon-1732756775-6747c527cfab2.png",
      url: "https://setapp.com/apps/photosrevive"
    },
    {
      name: "Godspeed",
      description: "Manage tasks faster",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/714/43822/icon-1749174965-68424ab54b3f5.png",
      url: "https://setapp.com/apps/godspeed"
    },
    {
      name: "SQLPro for SQLite",
      description: "Control SQLite databases",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/333/42122/icon-1742478513-67dc1cb168fd3.png",
      url: "https://setapp.com/apps/sqlpro-for-sqlite"
    },
    {
      name: "Transloader",
      description: "Start downloads on Mac remotely",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/481/10253/icon-1712837431-6617d33756e3b.png",
      url: "https://setapp.com/apps/transloader"
    },
    {
      name: "Asset Catalog Creator Pro",
      description: "Prepare icons and app assets",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/426/41835/icon-1739661896-67b1224841142.png",
      url: "https://setapp.com/apps/asset-catalog-creator-pro"
    },
    {
      name: "Studies",
      description: "Try smart study notes",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/231/39891/icon-1723640492-66bcaaacaa482.png",
      url: "https://setapp.com/apps/studies"
    },
    {
      name: "Flinto",
      description: "Design interactive app prototypes",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/419/10164/icon-1711471249-6602fa9155d9b.png",
      url: "https://setapp.com/apps/flinto"
    },
    {
      name: "ScreenFloat",
      description: "Power up your screenshots",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/753/42658/icon-1747738138-682c5e1a49712.png",
      url: "https://setapp.com/apps/screenfloat"
    },
    {
      name: "Craft",
      description: "Create and structure documents",
      platforms: "Mac, iOS, Web",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/554/42322/icon-1744394392-67f95898339a9.png",
      url: "https://setapp.com/apps/craft"
    },
    {
      name: "Folx",
      description: "Download videos and torrents",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/202/42801/icon-1748963323-683f0ffbd0dc0.png",
      url: "https://setapp.com/apps/folx"
    },
    {
      name: "Forecast Bar",
      description: "Receive weather alerts",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/234/5651/icon-1678734015-640f72bf93fb1.png",
      url: "https://setapp.com/apps/forecast-bar"
    },
    {
      name: "Gitfox",
      description: "Commit faster with superior diffs",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/385/41675/icon-1738172457-679a6829c6cd0.png",
      url: "https://setapp.com/apps/gitfox"
    },
    {
      name: "App Tamer",
      description: "Reduce CPU usage",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/466/39811/icon-1722916151-66b19d375746f.png",
      url: "https://setapp.com/apps/app-tamer"
    },
    {
      name: "Timemator",
      description: "Track productivity per project",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/380/42266/icon-1743772162-67efda0297d7a.png",
      url: "https://setapp.com/apps/timemator"
    },
    {
      name: "Commander One",
      description: "Two-pane file manager",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/366/42052/icon-1741858073-67d2a5194d1f4.png",
      url: "https://setapp.com/apps/commander-one"
    },
    {
      name: "Keysmith",
      description: "Create a shortcut for any action",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/438/39289/icon-1718665165-6670bfcd18ac5.png",
      url: "https://setapp.com/apps/keysmith"
    },
    {
      name: "BoltAI",
      description: "Write, code, learn with AI",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/626/42745/icon-1748503663-68380c6f619d4.png",
      url: "https://setapp.com/apps/boltai"
    },
    {
      name: "ChronoSync Express",
      description: "Sync and back up folders",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/217/40765/icon-1730479186-67250452d2169.png",
      url: "https://setapp.com/apps/chronosync-express"
    },
    {
      name: "Presentify",
      description: "Give better presentations",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/401/42773/icon-1748820377-683ce1999ef93.png",
      url: "https://setapp.com/apps/presentify"
    },
    {
      name: "NetSpot",
      description: "Find the best network connection",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/223/41521/icon-1736870905-67868bf9ce735.png",
      url: "https://setapp.com/apps/netspot"
    },
    {
      name: "Time Out",
      description: "Remind yourself to take a break",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/364/10078/icon-1710337184-65f1aca0acf44.png",
      url: "https://setapp.com/apps/time-out"
    },
    {
      name: "start",
      description: "Open any app faster",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/377/42367/icon-1744970349-6802226d6784a.png",
      url: "https://setapp.com/apps/start"
    },
    {
      name: "Trickster",
      description: "Quickly access recent files",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/357/41461/icon-1736217057-677c91e120abd.png",
      url: "https://setapp.com/apps/trickster"
    },
    {
      name: "Euclid",
      description: "Calculate with Excel formulas",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/435/8913/icon-1695837595-65146d9b44aa1.png",
      url: "https://setapp.com/apps/euclid"
    },
    {
      name: "Glyphs Mini",
      description: "Edit and manage icon designs",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/469/4408/icon-1618232817-607445f1711ef.png",
      url: "https://setapp.com/apps/glyphs-mini"
    },
    {
      name: "Paper",
      description: "Write without distractions",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/746/42303/icon-1747043643-6821c53b95e78.png",
      url: "https://setapp.com/apps/paper"
    },
    {
      name: "Novabench",
      description: "Evaluate computer performance",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/605/42189/icon-1743118649-67e5e1394d007.png",
      url: "https://setapp.com/apps/novabench"
    },
    {
      name: "Sip",
      description: "Pick colors for your designs",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/232/42197/icon-1743177567-67e6c75f1698c.png",
      url: "https://setapp.com/apps/sip"
    },
    {
      name: "Wallpaper Wizard",
      description: "Choose from 25K wallpapers",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/269/1726/icon-1593690549-5efdc9b5cc2f0.png",
      url: "https://setapp.com/apps/wallpaper-wizard"
    },
    {
      name: "Endurance",
      description: "Extend your battery life",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/301/42576/icon-1746973828-6820b484ae86f.png",
      url: "https://setapp.com/apps/endurance"
    },
    {
      name: "Marked",
      description: "Live Markdown preview",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/80/42026/icon-1741607738-67ced33aba53e.png",
      url: "https://setapp.com/apps/marked"
    },
    {
      name: "Lofi Garden",
      description: "Play lofi music in a click",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/506/7515/icon-1677325365-63f9f435a368b.png",
      url: "https://setapp.com/apps/lofi-garden"
    },
    {
      name: "ToothFairy",
      description: "Connect Bluetooth devices faster",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/319/43816/icon-1749136211-6841b3535cf06.png",
      url: "https://setapp.com/apps/toothfairy"
    },
    {
      name: "MenubarX",
      description: "Browse the web from menu bar",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/538/42337/icon-1744644568-67fd29d8898ce.png",
      url: "https://setapp.com/apps/menubarx"
    },
    {
      name: "iFlicks",
      description: "Upload videos to iTunes",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/229/5236/icon-1636875938-6190bea26ea8a.png",
      url: "https://setapp.com/apps/iflicks"
    },
    {
      name: "Movie Explorer Pro",
      description: "Curate your movie collection",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/335/10025/icon-1709829117-65e9ebfdd2714.png",
      url: "https://setapp.com/apps/movie-explorer-pro"
    },
    {
      name: "GlueMotion",
      description: "Turn photos into time lapses",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/324/41063/icon-1732813247-6748a1bf4f1a8.png",
      url: "https://setapp.com/apps/gluemotion"
    },
    {
      name: "PocketCAS",
      description: "Solve advanced math equations",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/355/40804/icon-1730880531-672b2413b44d4.png",
      url: "https://setapp.com/apps/pocketcas"
    },
    {
      name: "Gemini",
      description: "Find and remove duplicates",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/79/9042/icon-1696867211-6524238b4f102.png",
      url: "https://setapp.com/apps/gemini"
    },
    {
      name: "BusyContacts",
      description: "Build your contact database",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/369/43840/icon-1749326776-68449bb851452.png",
      url: "https://setapp.com/apps/busycontacts"
    },
    {
      name: "Mockuuups Studio",
      description: "Generate mockups for all devices",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/373/10202/icon-1712050881-660bd2c1d13ba.png",
      url: "https://setapp.com/apps/mockuuups-studio"
    },
    {
      name: "Core Shell",
      description: "Full-featured SSH terminal",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/339/40002/icon-1724861736-66cf4d28414e0.png",
      url: "https://setapp.com/apps/core-shell"
    },
    {
      name: "MarginNote",
      description: "Study more productively",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/323/8222/icon-1748318556-6835395c4b07b.png",
      url: "https://setapp.com/apps/marginnote"
    },
    {
      name: "Prizmo",
      description: "Scan and OCR any document",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/160/41752/icon-1738766542-67a378ce29d98.png",
      url: "https://setapp.com/apps/prizmo"
    },
    {
      name: "2Do",
      description: "Schedule tasks and reminders",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/68/42482/icon-1746151123-681426d399e36.png",
      url: "https://setapp.com/apps/2do"
    },
    {
      name: "GoodTask",
      description: "Sync to-dos with reminders",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/206/42251/icon-1743656461-67ee160d23e22.png",
      url: "https://setapp.com/apps/goodtask"
    },
    {
      name: "WiFi Signal",
      description: "Monitor your Wi-Fi connection",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/596/42294/icon-1744164549-67f5d6c522359.png",
      url: "https://setapp.com/apps/wifi-signal"
    },
    {
      name: "Workspaces",
      description: "Set up your work in one click",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/268/42258/icon-1743703876-67eecf44145bb.png",
      url: "https://setapp.com/apps/workspaces"
    },
    {
      name: "Noizio",
      description: "Turn on ambient sounds to focus",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/130/3569/icon-1604047179-5f9bd14bc431b.png",
      url: "https://setapp.com/apps/noizio"
    },
    {
      name: "MetaImage",
      description: "Edit image metadata",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/356/41358/icon-1734915652-6768b644d8129.png",
      url: "https://setapp.com/apps/metaimage"
    },
    {
      name: "Swift Publisher",
      description: "Self-publish books or booklets",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/95/41473/icon-1736331218-677e4fd2d30c5.png",
      url: "https://setapp.com/apps/swift-publisher"
    },
    {
      name: "Focused",
      description: "Focus on your writing",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/134/9293/icon-1699654599-654eabc721744.png",
      url: "https://setapp.com/apps/focused"
    },
    {
      name: "Pagico",
      description: "Manage teams and projects",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/70/42787/icon-1748923372-683e73ec92068.png",
      url: "https://setapp.com/apps/pagico"
    },
    {
      name: "MarsEdit",
      description: "Create your text content offline",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/343/42338/icon-1744655073-67fd52e16f243.png",
      url: "https://setapp.com/apps/marsedit"
    },
    {
      name: "Clariti",
      description: "Boost mental clarity with sound",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/754/43828/icon-1749224551-68430c678d16b.png",
      url: "https://setapp.com/apps/clariti"
    },
    {
      name: "Cloud Outliner",
      description: "Create visual outlines",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/174/42713/icon-1748249451-68342b6baac84.png",
      url: "https://setapp.com/apps/cloud-outliner"
    },
    {
      name: "XCOrganizer",
      description: "Organize Xcode projects",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/407/8157/icon-1685704795-6479d05b0e326.png",
      url: "https://setapp.com/apps/xcorganizer"
    },
    {
      name: "Mosaic",
      description: "Automatically organize windows",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/247/9106/icon-1698836080-65422e70e6dff.png",
      url: "https://setapp.com/apps/mosaic"
    },
    {
      name: "Path Finder",
      description: "Copy, delete, and sync files",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/362/42172/icon-1743009756-67e437dcb92b8.png",
      url: "https://setapp.com/apps/path-finder"
    },
    {
      name: "CloudMounter",
      description: "Connect cloud storage to Finder",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/289/42253/icon-1743678842-67ee6d7aeeda6.png",
      url: "https://setapp.com/apps/cloudmounter"
    },
    {
      name: "Squash",
      description: "Compress and resize images",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/209/40929/icon-1731928296-673b20e8a961c.png",
      url: "https://setapp.com/apps/squash"
    },
    {
      name: "Slidepad",
      description: "Keep most used apps at hand",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/367/42788/icon-1748925454-683e7c0eddcf7.png",
      url: "https://setapp.com/apps/slidepad"
    },
    {
      name: "Dropshare",
      description: "Save space with file sharing",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/250/42493/icon-1746289475-681643438e929.png",
      url: "https://setapp.com/apps/dropshare"
    },
    {
      name: "VidCap",
      description: "Generate captions for video",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/558/42099/icon-1742341967-67da074f05fc7.png",
      url: "https://setapp.com/apps/vidcap"
    },
    {
      name: "Tripsy",
      description: "Plan trips on Mac and iOS",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/523/42589/icon-1747072498-682235f2b097c.png",
      url: "https://setapp.com/apps/tripsy"
    },
    {
      name: "Eter",
      description: "Listen to internet radio",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/627/42268/icon-1743775680-67efe7c02e15f.png",
      url: "https://setapp.com/apps/eter"
    },
    {
      name: "Teleprompter App",
      description: "Record video with teleprompter",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/609/42100/icon-1742342094-67da07cedaca3.png",
      url: "https://setapp.com/apps/teleprompter-app"
    },
    {
      name: "Boom 3D",
      description: "Boost volume and audio quality",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/291/43826/icon-1749207472-6842c9b062dd4.png",
      url: "https://setapp.com/apps/boom-3d"
    },
    {
      name: "NotchNook",
      description: "Control Mac from the notch",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/719/42362/icon-1744915474-68014c12efb6a.png",
      url: "https://setapp.com/apps/notchnook"
    },
    {
      name: "DisplayBuddy",
      description: "Control settings across monitors",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/489/42766/icon-1748774988-683c304c2ca82.png",
      url: "https://setapp.com/apps/displaybuddy"
    },
    {
      name: "Diagrams",
      description: "Visualize with diagrams",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/408/40176/icon-1726300270-66e5406e6521f.png",
      url: "https://setapp.com/apps/diagrams"
    },
    {
      name: "Chronicle",
      description: "Track bills and subscriptions",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/83/42541/icon-1747068772-6822276422f39.png",
      url: "https://setapp.com/apps/chronicle"
    },
    {
      name: "PDF Search",
      description: "Find anything in a PDF with AI",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/272/39404/icon-1719522579-667dd513092fa.png",
      url: "https://setapp.com/apps/pdf-search"
    },
    {
      name: "Focus 2",
      description: "Block websites and apps",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/266/42278/icon-1743893238-67f1b2f666bec.png",
      url: "https://setapp.com/apps/focus"
    },
    {
      name: "Almighty",
      description: "Unlock 50+ Mac shortcuts",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/487/42639/icon-1747515066-6828f6ba09c10.png",
      url: "https://setapp.com/apps/almighty"
    },
    {
      name: "Aquarelo",
      description: "Simplify color management",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/300/5565/icon-1643378565-61f3f785e6af0.png",
      url: "https://setapp.com/apps/aquarelo"
    },
    {
      name: "Muse",
      description: "Put ideas on a single canvas",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/628/42785/icon-1748883809-683dd9616f539.png",
      url: "https://setapp.com/apps/muse"
    },
    {
      name: "TypingMind",
      description: "Use new UI to chat with AI",
      platforms: "Mac, Web",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/583/40440/icon-1727938430-66fe3f7ee68ac.png",
      url: "https://setapp.com/apps/typingmind"
    },
    {
      name: "Luminar Neo",
      description: "Improve your photos like a pro",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/566/42752/icon-1748605432-683999f81f0e9.png",
      url: "https://setapp.com/apps/luminar-neo"
    },
    {
      name: "ChatMate for WhatsApp",
      description: "Personalize WhatsApp",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/240/40674/icon-1729783133-671a655d54dbe.png",
      url: "https://setapp.com/apps/chatmate-for-whatsapp"
    },
    {
      name: "CameraBag Pro",
      description: "Edit photos and videos",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/299/42519/icon-1746576494-681aa46e5c360.png",
      url: "https://setapp.com/apps/camerabag-pro"
    },
    {
      name: "Clop",
      description: "Shrink images, video, PDFs",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/612/42707/icon-1748187919-68333b0fc8980.png",
      url: "https://setapp.com/apps/clop"
    },
    {
      name: "Moment",
      description: "Create countdown events",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/424/40407/icon-1727793531-66fc097bc6429.png",
      url: "https://setapp.com/apps/moment"
    },
    {
      name: "Daily",
      description: "Track time easily",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/504/42708/icon-1748198319-683363afddb8c.png",
      url: "https://setapp.com/apps/daily"
    },
    {
      name: "Nitro PDF Pro",
      description: "Work with your PDFs",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/518/42755/icon-1749071187-6840b55359ae5.png",
      url: "https://setapp.com/apps/nitro-pdf-pro"
    },
    {
      name: "Spark Mail",
      description: "Manage emails easier",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/575/43810/icon-1749053067-68406e8ba3735.png",
      url: "https://setapp.com/apps/spark-mail"
    },
    {
      name: "World Clock Pro",
      description: "Work across time zones",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/246/41965/icon-1741045317-67c63e4508341.png",
      url: "https://setapp.com/apps/world-clock-pro"
    },
    {
      name: "iBoysoft MagicMenu",
      description: "Expand your Mac’s right click",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/512/42345/icon-1744773554-67ff21b228833.png",
      url: "https://setapp.com/apps/iboysoft-magicmenu"
    },
    {
      name: "PDF Pals",
      description: "Chat with your PDFs",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/606/42481/icon-1746107539-68137c9375583.png",
      url: "https://setapp.com/apps/pdf-pals"
    },
    {
      name: "Tayasui Sketches",
      description: "Draw and create illustrations",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/255/5389/icon-1639474288-61b86470bad86.png",
      url: "https://setapp.com/apps/tayasui-sketches"
    },
    {
      name: "ClearVPN",
      description: "Use an intuitive VPN",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/433/42622/icon-1747307513-6825cbf994f32.png",
      url: "https://setapp.com/apps/clearvpn"
    },
    {
      name: "Batteries",
      description: "Track all devices' battery levels",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/393/42767/icon-1748785895-683c5ae74dbc9.png",
      url: "https://setapp.com/apps/batteries"
    },
    {
      name: "WidgetWall",
      description: "Add widgets to Mac desktop",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/528/42687/icon-1747926996-682f3fd48a02b.png",
      url: "https://setapp.com/apps/widget-wall"
    },
    {
      name: "WallCal",
      description: "Pin clear calendar to desktop",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/541/41930/icon-1740579534-67bf22cec4e8d.png",
      url: "https://setapp.com/apps/wallcal"
    },
    {
      name: "GetAPI",
      description: "Manage API interactions easier",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/756/42618/icon-1747220736-6824790076491.png",
      url: "https://setapp.com/apps/getapi"
    },
    {
      name: "Capto",
      description: "Create screen recordings",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/175/42078/icon-1742193995-67d7c54b2f8f8.png",
      url: "https://setapp.com/apps/capto"
    },
    {
      name: "Elephas",
      description: "Manage knowledge with AI",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/576/42780/icon-1748860950-683d8016cd020.png",
      url: "https://setapp.com/apps/elephas"
    },
    {
      name: "GetSound",
      description: "Focus with AI soundscapes",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/586/9717/icon-1706102658-65b10f82b952a.png",
      url: "https://setapp.com/apps/getsound"
    },
    {
      name: "Expenses",
      description: "Track your spending",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/521/42786/icon-1748910025-683e3fc90399b.png",
      url: "https://setapp.com/apps/expenses"
    },
    {
      name: "Focused Work",
      description: "Work with timers",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/699/42759/icon-1748710157-683b330d4602c.png",
      url: "https://setapp.com/apps/focused-work-mac"
    },
    {
      name: "iMeetingX",
      description: "Run meetings effectively",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/337/9518/icon-1702884273-657ff3b16c0a6.png",
      url: "https://setapp.com/apps/imeetingx"
    },
    {
      name: "iBoysoft NTFS for Mac",
      description: "Read/write to NTFS drives",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/384/40354/icon-1727496466-66f7811273225.png",
      url: "https://setapp.com/apps/iboysoft-ntfs-for-mac"
    },
    {
      name: "Structured",
      description: "Structure your day",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/555/42768/icon-1748786595-683c5da33211f.png",
      url: "https://setapp.com/apps/structured"
    },
    {
      name: "Get Backup Pro",
      description: "Back up only essential files",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/210/9272/icon-1699433154-654b4ac208ada.png",
      url: "https://setapp.com/apps/get-backup-pro"
    },
    {
      name: "SheetPlanner",
      description: "Plan and track project progress",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/453/40067/icon-1725563539-66da0293bf0a3.png",
      url: "https://setapp.com/apps/sheetplanner"
    },
    {
      name: "Rocket Typist",
      description: "Save time typing with text snippets",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/276/41821/icon-1739458538-67ae07eac8620.png",
      url: "https://setapp.com/apps/rocket-typist"
    },
    {
      name: "uBar",
      description: "Make the Dock useful",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/306/6785/icon-1665525396-6345e6945f33c.png",
      url: "https://setapp.com/apps/ubar"
    },
    {
      name: "Vivid",
      description: "Double display brightness",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/546/39922/icon-1724012110-66c2564e2b09f.png",
      url: "https://setapp.com/apps/vivid"
    },
    {
      name: "Calendars",
      description: "Track tasks, events, and plans",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/623/42476/icon-1746037434-68126abadb8d9.png",
      url: "https://setapp.com/apps/calendars"
    },
    {
      name: "Spellar AI",
      description: "Smart Meeting Notes with AI",
      platforms: "Mac, Web",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/635/42593/icon-1747110468-6822ca44591b2.png",
      url: "https://setapp.com/apps/spellar-ai"
    },
    {
      name: "Plus",
      description: "Work with text using AI",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/584/42484/icon-1746174118-681480a6e0e16.png",
      url: "https://setapp.com/apps/plus"
    },
    {
      name: "AnyDroid",
      description: "Move files between Mac and Android",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/336/41846/icon-1739786426-67b308ba38644.png",
      url: "https://setapp.com/apps/anytrans-for-android"
    },
    {
      name: "PliimPRO",
      description: "Share screen distraction-free",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/406/9104/icon-1697480465-652d7f11a4cad.png",
      url: "https://setapp.com/apps/pliimpro"
    },
    {
      name: "Hustl",
      description: "Create timelapses of your screen",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/436/5289/icon-1637696825-619d453928e34.png",
      url: "https://setapp.com/apps/hustl"
    },
    {
      name: "MonsterWriter",
      description: "Write complex texts easily",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/502/42757/icon-1748691704-683aeaf8555d7.png",
      url: "https://setapp.com/apps/monsterwriter"
    },
    {
      name: "Focus",
      description: "Block websites and social media",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/700/28918/icon-1716573034-6650d36a66766.png",
      url: "https://setapp.com/apps/focus-mac"
    },
    {
      name: "Clobbr",
      description: "Load test API endpoints",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/593/41323/icon-1734653161-6764b4e997d42.png",
      url: "https://setapp.com/apps/clobbr"
    },
    {
      name: "Canary Mail",
      description: "Write and manage emails",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/307/42730/icon-1748435453-683701fd4d865.png",
      url: "https://setapp.com/apps/canary-mail"
    },
    {
      name: "WhisperTranscribe",
      description: "Turn voice into text content",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/691/42434/icon-1745789075-680ea09336dbf.png",
      url: "https://setapp.com/apps/whisper-transcribe"
    },
    {
      name: "GreenBooks",
      description: "Manage money easily",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/505/42101/icon-1742439491-67db844380d13.png",
      url: "https://setapp.com/apps/greenbooks"
    },
    {
      name: "Smmall Cloud",
      description: "Share files and boost your brand",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/744/41994/icon-1741202691-67c8a5031d9fd.png",
      url: "https://setapp.com/apps/smmall-cloud"
    },
    {
      name: "MurmurType",
      description: "Transcribe your speech",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/592/43811/icon-1749109056-68414940d76a1.png",
      url: "https://setapp.com/apps/murmur"
    },
    {
      name: "Speeko",
      description: "Get better at public speaking",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/477/42496/icon-1746321274-6816bf7a5ee04.png",
      url: "https://setapp.com/apps/speeko"
    },
    {
      name: "Mimir",
      description: "Play and manage podcasts",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/451/43827/icon-1749222527-6843047f5921c.png",
      url: "https://setapp.com/apps/mimir"
    },
    {
      name: "UpLife",
      description: "Your self-care assistant",
      platforms: "iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/530/42483/icon-6814723cd9b41.jpg",
      url: "https://setapp.com/apps/uplife-mental-health-therapy-ios"
    },
    {
      name: "IM+",
      description: "Bring all messengers into one",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/296/3685/icon-1605729873-5fb57e510c414.png",
      url: "https://setapp.com/apps/im+"
    },
    {
      name: "DCommander",
      description: "Manage files in a dual-pane view",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/311/41384/icon-1735205346-676d21e2e8634.png",
      url: "https://setapp.com/apps/dcommander"
    },
    {
      name: "Silenz",
      description: "Focus mode sound",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/350/8914/icon-1695550446-65100beee3749.png",
      url: "https://setapp.com/apps/silenz"
    },
    {
      name: "mSecure",
      description: "Store and sync passwords",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/732/41618/icon-1737736000-6793bf40b30b3.png",
      url: "https://setapp.com/apps/msecure"
    },
    {
      name: "Invoice Rex",
      description: "Edit and track invoices",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/749/42777/icon-1748848699-683d503b31d44.png",
      url: "https://setapp.com/apps/invoice-rex"
    },
    {
      name: "AppWage",
      description: "Track your app earnings",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/711/42286/icon-1744026714-67f3bc5a93dfb.png",
      url: "https://setapp.com/apps/appwage"
    },
    {
      name: "MoneyWiz 2025",
      description: "Budget and manage bills",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/565/42636/icon-1747415862-682773363aa5c.png",
      url: "https://setapp.com/apps/moneywiz"
    },
    {
      name: "JustStream",
      description: "Mirror Mac screen to TV",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/370/42243/icon-1743592902-67ed1dc64ffe1.png",
      url: "https://setapp.com/apps/juststream"
    },
    {
      name: "Pie Menu",
      description: "Access app actions in a click",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/697/40821/icon-1730974322-672c927219414.png",
      url: "https://setapp.com/apps/pie-menu"
    },
    {
      name: "iShowU",
      description: "Record screen on Mac",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/720/42317/icon-1744317122-67f82ac23fa0b.png",
      url: "https://setapp.com/apps/ishowu"
    },
    {
      name: "FreeYourMusic",
      description: "Transfer your playlists",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/737/42359/icon-1744872400-6800a3d0e8dc6.png",
      url: "https://setapp.com/apps/freeyourmusic"
    },
    {
      name: "Boom",
      description: "Level-up your video calls",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/735/42783/icon-1748875965-683dbabdd428d.png",
      url: "https://setapp.com/apps/boom"
    },
    {
      name: "Remote Mouse",
      description: "Control Mac from your phone",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/193/1970/icon-1558078558-5cde645e2405f.png",
      url: "https://setapp.com/apps/remote-mouse"
    },
    {
      name: "AnyTrans for iOS",
      description: "Move files between macOS and iOS",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/328/42580/icon-1747015439-6821570f0d559.png",
      url: "https://setapp.com/apps/anytrans"
    },
    {
      name: "Backtrack",
      description: "Record audio from the past",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/381/41528/icon-1736899813-6786fce564982.png",
      url: "https://setapp.com/apps/backtrack"
    },
    {
      name: "Taskheat",
      description: "Learn to prioritize tasks",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/326/41099/icon-1732998743-674b7657aad16.png",
      url: "https://setapp.com/apps/taskheat"
    },
    {
      name: "Secrets 4",
      description: "Store and manage passwords",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/587/42673/icon-1747819273-682d9b0983304.png",
      url: "https://setapp.com/apps/secrets"
    },
    {
      name: "Simon",
      description: "Control and troubleshoot servers",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/201/7859/icon-1681321139-6436ecb3343c6.png",
      url: "https://setapp.com/apps/simon"
    },
    {
      name: "Chimeful",
      description: "Improve focus and stay mindful",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/759/43808/icon-1749050058-684062ca28067.png",
      url: "https://setapp.com/apps/chimeful"
    },
    {
      name: "Subjects",
      description: "Track class schedule, homework",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/619/41415/icon-1735670378-67743a6a3647c.png",
      url: "https://setapp.com/apps/subjects"
    },
    {
      name: "TeaCode",
      description: "Speed up coding with expanders",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/308/40239/icon-1726668573-66eadf1df1cc3.png",
      url: "https://setapp.com/apps/teacode"
    },
    {
      name: "Coherence X",
      description: "Turn websites into apps",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/363/39301/icon-1718731966-6671c4be62880.png",
      url: "https://setapp.com/apps/coherence-pro"
    },
    {
      name: "Keep It Shot",
      description: "Rename screenshots with AI",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/688/41516/icon-1736865151-6786757f32e88.png",
      url: "https://setapp.com/apps/keep-it-shot"
    },
    {
      name: "Lacona",
      description: "Tell your Mac what to do",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/235/7221/icon-1671243506-639d26f20c993.png",
      url: "https://setapp.com/apps/lacona"
    },
    {
      name: "Moonitor",
      description: "Receive live updates on crypto",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/314/8672/icon-1706610205-65b8ce1de936e.png",
      url: "https://setapp.com/apps/moonitor"
    },
    {
      name: "CleanPresenter",
      description: "Present a single window",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/581/40679/icon-1729846239-671b5bdf41873.png",
      url: "https://setapp.com/apps/cleanpresenter"
    },
    {
      name: "Numerics",
      description: "Monitor your business data",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/594/42160/icon-1742954658-67e360a2042df.png",
      url: "https://setapp.com/apps/numerics"
    },
    {
      name: "Spotless",
      description: "Auto-hide files and clean up",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/294/2215/icon-1566995620-5d6674a445de5.png",
      url: "https://setapp.com/apps/spotless"
    },
    {
      name: "ByDesign",
      description: "Organize your work and life",
      platforms: "Mac, iOS, Web",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/760/42494/icon-1747971482-682fed9ae4a58.png",
      url: "https://setapp.com/apps/bydesign"
    },
    {
      name: "Filmage Editor",
      description: "Easily edit videos like a pro",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/545/9060/icon-1697012144-652659b0b21ce.png",
      url: "https://setapp.com/apps/filmage-editor"
    },
    {
      name: "AdLock",
      description: "Block annoying browser ads",
      platforms: "Mac, iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/517/41861/icon-1740384397-67bc288ddd017.png",
      url: "https://setapp.com/apps/adlock"
    },
    {
      name: "Headway",
      description: "Get summaries for nonfiction",
      platforms: "iOS, Web",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/618/43825/icon-684296b64f7d0.jpg",
      url: "https://setapp.com/apps/headway"
    },
    {
      name: "Unite",
      description: "Create an app from a website",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/340/42578/icon-1746982735-6820d74f492f3.png",
      url: "https://setapp.com/apps/unite"
    },
    {
      name: "Tab Finder",
      description: "Tabs from all browsers in one spot",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/488/9319/icon-1700040755-65549033172ca.png",
      url: "https://setapp.com/apps/tabfinder"
    },
    {
      name: "n-Track Studio",
      description: "Record and edit music on Mac",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/238/7508/icon-1676044779-63e669eb0b3d9.png",
      url: "https://setapp.com/apps/n-track-studio"
    },
    {
      name: "Mental Walk",
      description: "Reflect on your life",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/494/6892/icon-1666616857-63568e19275d5.png",
      url: "https://setapp.com/apps/mentalwalk"
    },
    {
      name: "Sidebar",
      description: "Try a Dock alternative",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/729/42661/icon-1747749988-682c8c6458556.png",
      url: "https://setapp.com/apps/sidebar"
    },
    {
      name: "TaoGit",
      description: "Streamline your work with Git",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/516/40716/icon-1730208153-6720e19925f0f.png",
      url: "https://setapp.com/apps/taogit"
    },
    {
      name: "SwiftyLaunch",
      description: "Build iOS apps faster",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/738/42635/icon-1747402833-68274051f26a0.png",
      url: "https://setapp.com/apps/swiftylaunch"
    },
    {
      name: "CleanMy®Phone",
      description: "Remove digital clutter",
      platforms: "iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/399/43814/icon-684145403148e.jpg",
      url: "https://setapp.com/apps/gemini-photos"
    },
    {
      name: "Launcher with Multiple Widgets",
      description: "Customize your home screen",
      platforms: "iOS",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/535/41592/icon-67909c33365bc.jpg",
      url: "https://setapp.com/apps/launcher-with-multiple-widgets-ios"
    },
    {
      name: "Voice Dream Reader",
      description: "Listen to your texts",
      platforms: "Mac",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/717/41922/icon-1740505258-67be00aa89d1a.png",
      url: "https://setapp.com/apps/voice-dream-reader"
    },
    {
      name: "Leave Me Alone",
      description: "Manage email subscriptions",
      platforms: "Web",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/709/main/icon-7777ffdacb9dc.png",
      url: "https://setapp.com/apps/leave-me-alone"
    },
    {
      name: "Ready to Send",
      description: "Generate draft email replies",
      platforms: "Web",
      icon: "https://setapp.com/cdn-cgi/image/quality=75,format=auto,width=80/https://store.setapp.com/app/607/main/icon-65719fa98f5e6.png",
      url: "https://setapp.com/apps/ready-to-send"
    }
  ], r = {
    MIN_KEYWORD_LENGTH: 2,
    MIN_APP_NAME_LENGTH: 3,
    MIN_CONTEXT_LENGTH: 20,
    CONTEXT_PREVIEW_LENGTH: 200,
    MIN_WORD_LENGTH_FOR_SPLITTING: 2
  }, d = /* @__PURE__ */ new Set([
    "daily",
    "task",
    "tasks",
    "app",
    "apps",
    "free",
    "try",
    "get",
    "download",
    "sign",
    "up",
    "signup",
    "security",
    "tested",
    "new",
    "all",
    "your",
    "for",
    "with",
    "from",
    "into",
    "over",
    "under",
    "make",
    "take",
    "come",
    "work"
  ]), f = [
    ".side-scrolling__banner",
    ".promo-new-banner__content",
    ".action-bar__wrapper",
    ".site-navigation__bar-cta",
    "section",
    "article",
    "aside",
    ".content-block",
    ".widget"
  ], y = ["[data-signup-button]", 'a[href*="signup"]'];
  class w {
    constructor(t) {
      this.appNames = [], this.appKeywords = /* @__PURE__ */ new Set(), this.appIconMap = /* @__PURE__ */ new Map(), this.loadAppNames(t);
    }
    getAppNames() {
      return this.appNames;
    }
    getAppKeywords() {
      return this.appKeywords;
    }
    getAppIcon(t) {
      return this.appIconMap.get(t.toLowerCase());
    }
    loadAppNames(t) {
      try {
        const p = this.extractAppSlugs(t), a = this.extractAppNames(t);
        this.appNames = [...p, ...a], this.appKeywords = this.generateAppKeywords(this.appNames), this.buildIconMap(t);
      } catch (p) {
        console.error("Failed to load apps data:", p), this.loadFallbackAppNames();
      }
    }
    extractAppSlugs(t) {
      return t.map((p) => {
        const a = p.url.split("/");
        return a[a.length - 1];
      });
    }
    extractAppNames(t) {
      return t.filter((p) => p.name).map((p) => p.name);
    }
    generateAppKeywords(t) {
      const p = /* @__PURE__ */ new Set();
      return t.forEach((a) => {
        p.add(a.toLowerCase()), p.add(a.replace(/-/g, " ").toLowerCase()), p.add(a.replace(/-/g, "").toLowerCase());
        const e = a.replace(/-/g, "").replace(/\b\w/g, (o) => o.toUpperCase());
        p.add(e.toLowerCase()), a.includes("-") && a.split("-").forEach((o) => {
          o.length > r.MIN_WORD_LENGTH_FOR_SPLITTING && p.add(o.toLowerCase());
        });
      }), p;
    }
    loadFallbackAppNames() {
      const t = [
        "supercharge",
        "bartender",
        "cleanshot",
        "textsniper",
        "numi",
        "ulysses",
        "tableplus",
        "mindnode",
        "yoink",
        "devutils.app",
        "lungo",
        "pixelsnap",
        "dash",
        "dropzone",
        "hazeover",
        "proxyman",
        "soulver",
        "snippetslab",
        "dato",
        "image2icon",
        "textsoap",
        "iconjar",
        "taskpaper",
        "snapmotion",
        "buildwatch",
        "paste",
        "downie",
        "permute",
        "bettertouchtool",
        "pulltube",
        "cleanmymac"
      ];
      this.appNames = t, t.forEach((p) => {
        this.appKeywords.add(p.toLowerCase()), this.appKeywords.add(p.replace(/-/g, " ").toLowerCase()), this.appKeywords.add(p.replace(/\./g, "").toLowerCase());
      });
    }
    buildIconMap(t) {
      t.forEach((p) => {
        if (p.name && p.icon) {
          this.appIconMap.set(p.name.toLowerCase(), p.icon);
          const a = p.url.split("/"), e = a[a.length - 1];
          this.appIconMap.set(e.toLowerCase(), p.icon);
        }
      });
    }
  }
  class b {
    constructor(t, p, a) {
      this.appNames = t, this.appKeywords = p, this.appDataProcessor = a;
    }
    findContextBlock(t) {
      let p = t.parentElement;
      for (; p && p !== document.body; ) {
        for (const a of f)
          if (p.matches(a))
            return console.log(
              `Found context block using selector "${a}":`,
              p
            ), p;
        p = p.parentElement;
      }
      for (p = t.parentElement; p && p !== document.body; ) {
        if (p.tagName.toLowerCase() === "div" && p.textContent && p.textContent.trim().length > r.MIN_CONTEXT_LENGTH)
          return p;
        p = p.parentElement;
      }
      return null;
    }
    analyzeContext(t) {
      const p = t.textContent || "", a = p.toLowerCase();
      console.log("Analyzing contextText:", p);
      const e = this.findMentionedApps(p, a), o = this.filterValidAppMentions(e, p);
      let s = "general", i, n;
      return o.length === 1 && (s = "specific", i = o[0], n = this.appDataProcessor.getAppIcon(i)), {
        type: s,
        appName: i,
        appIcon: n,
        mentionedApps: o,
        contextText: p.trim()
      };
    }
    findMentionedApps(t, p) {
      const a = [];
      return this.appKeywords.forEach((e) => {
        if (e.length > r.MIN_KEYWORD_LENGTH && p.includes(e)) {
          if (d.has(e.toLowerCase()) || !this.createWordBoundaryRegex(e).test(t))
            return;
          const s = this.findOriginalAppName(e);
          if (s && !a.includes(s)) {
            const i = s.toLowerCase();
            !d.has(i) && i.length > r.MIN_APP_NAME_LENGTH && a.push(s);
          }
        }
      }), a;
    }
    filterValidAppMentions(t, p) {
      return [...new Set(t)].filter((a) => [
        a.toLowerCase(),
        a.replace(/-/g, " ").toLowerCase(),
        a.replace(/-/g, "").toLowerCase()
      ].some((o) => o.length <= r.MIN_APP_NAME_LENGTH || d.has(o) ? !1 : this.createWordBoundaryRegex(o).test(p)));
    }
    createWordBoundaryRegex(t) {
      const p = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return new RegExp(`\\b${p}\\b`, "i");
    }
    findOriginalAppName(t) {
      return this.appNames.find(
        (p) => p.toLowerCase() === t || p.replace(/-/g, " ").toLowerCase() === t || p.replace(/-/g, "").toLowerCase() === t || p.toLowerCase().includes(t)
      );
    }
  }
  const M = `/* COMMENTS */
.crs-modal-comments {
  margin-top: auto;
  margin-inline: -20px;
  margin-bottom: -20px;
  border-radius: 0px 0px 14px 14px;
  width: calc(100% + 40px);
  padding: 24px 20px;
  background: rgb(245, 245, 245);
}

.crs-modal-comments .header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #26262b;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
}

@media (max-width: 992px) {
  .crs-modal-comments .header {
    justify-content: flex-start;
    font-size: 14px;
    text-align: left;
  }
}
.crs-modal-comments .star {
  display: inline-block;
  width: 17px;
  height: 16px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none"><path fill="%23E6842E" d="M16.956 6.045a.9.9 0 0 0-.777-.609L11.27 5 9.331.539A.904.904 0 0 0 8.5 0a.902.902 0 0 0-.83.54L5.73 4.998l-4.908.437a.902.902 0 0 0-.778.61.878.878 0 0 0 .264.943l3.71 3.194-1.094 4.732a.88.88 0 0 0 .351.916.91.91 0 0 0 .993.043L8.5 13.39l4.23 2.485c.311.182.701.166.995-.043a.88.88 0 0 0 .351-.916l-1.094-4.732 3.71-3.194a.878.878 0 0 0 .264-.944Z"/></svg>');
  background-position: center;
  background-repeat: no-repeat;
}
.crs-modal-comments .header .line {
  display: inline-block;
  margin-inline: 12px;
  width: 1px;
  height: 28px;
  background-color: #fff;
}

@media (max-width: 992px) {
  .crs-modal-comments .header .line {
    margin-inline: 7px;
  }
}

.crs-current-rating {
  font-size: 26px;
  font-family: Avenir Next, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, sans-serif;
  font-weight: 400;
  line-height: 40.04px;
}

.crs-possible-rating {
  color: #77767a;
  font-family: Avenir Next, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, sans-serif;
  font-size: 14px;

  font-weight: 500;
  line-height: 22px;
}

.crs-comments {
  margin-top: 12px;
  display: flex;
  justify-content: center;
  gap: 12px;
}

@media (max-width: 768px) {
  .crs-comments {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -ms-overflow-style: none;
    margin-right: -20px;
    margin-left: -20px;
    padding-right: 20px;
    padding-left: 20px;
  }
  .crs-comments::-webkit-scrollbar {
    display: none; /* WebKit */
  }
}

.crs-comment {
  border-radius: 15px;
  background: #fff;
  padding: 20px;
  width: 300px;
}

@media (max-width: 768px) {
  .crs-comment {
    min-width: 300px;
    scroll-snap-align: center;
    scroll-snap-stop: normal;
  }
}

.crs-comment-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.crs-comment-like {
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2.59082 5.95215C3.46972 5.95215 4.18261 6.6451 4.18262 7.5V12.4521C4.18262 13.3071 3.46973 14 2.59082 14C1.71203 13.9999 1 13.307 1 12.4521V7.5C1.00001 6.64518 1.71203 5.95228 2.59082 5.95215ZM8.74902 1C9.21416 1 9.59164 1.36694 9.5918 1.81934V5.95215H13.0898C14.4002 5.95215 15.3213 7.20718 14.8955 8.41309L13.3652 12.7461C13.1005 13.4958 12.3748 14 11.5596 14H7.36426C6.3097 14 5.45508 13.1683 5.45508 12.1426V7.47168C5.45515 6.68633 5.64692 5.91259 6.01465 5.21387L7.99902 1.44531C8.14286 1.17181 8.43282 1.00004 8.74902 1Z" fill="%23479A94"/></svg>');
}

.crs-comment-author {
  color: #26262b;

  font-family: Avenir Next, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
    Fira Sans, Droid Sans, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
}

.crs-comment-content {
  color: #26262b;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}

.crs-sliders-actions {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

@media (min-width: 768px) {
  .crs-sliders-actions {
    display: none;
  }
}

.crs-sliders-actions button {
  width: 18px;
  height: 4px;
  border-radius: 1111px;
  border: none;
  background: #d6d6d9;
  cursor: pointer;
}

.crs-sliders-actions button.active {
  border-radius: 1111px;
  background: #26262b;
}
`;
  class q {
    constructor({ container: t, position: p }) {
      this.isScrolling = !1, this.container = t, this.position = p || "beforeend", this.init();
    }
    init() {
      if (!this.container) {
        console.error("Container element is not provided");
        return;
      }
      this.addStyles(), this.render(), this.initSliderActions();
    }
    render() {
      const t = (
        /* HTML */
        `
      <div id="crs-modal-comments" class="crs-modal-comments">
        <div class="header">
          Rated <span class="star"></span>
          <span class="crs-current-rating">4.8</span
          > <span class="crs-possible-rating">/ 5</span>
          <div class="line"></div>
          200 000+ happy customers
        </div>
        <div class="crs-modal-comments-slider" id="crs-modal-comments-slider">
          <div class="crs-comments">
            <div class="crs-comment">
              <div class="crs-comment-header">
                <div class="crs-comment-like"></div>
                <div class="crs-comment-author">David Hill</div>
              </div>
              <div class="crs-comment-content">
                I use a bunch of tools in there every day to speed up workflows
              </div>
            </div>
            <div class="crs-comment">
              <div class="crs-comment-header">
                <div class="crs-comment-like"></div>
                <div class="crs-comment-author">Meredith Sweet</div>
              </div>
              <div class="crs-comment-content">
                I discover/get all the awesome apps for my Mac that I use, a lot
                of them are from Setapp!
              </div>
            </div>
            <div class="crs-comment">
              <div class="crs-comment-header">
                <div class="crs-comment-like"></div>
                <div class="crs-comment-author">Snazzy Labs</div>
              </div>
              <div class="crs-comment-content">
                Hundreds of the best Mac apps out there. Tens of thousands of
                dollars of software for just a few bucks a month
              </div>
            </div>
          </div>
          <div class="crs-sliders-actions">
            <button></button><button></button><button></button>
          </div>
        </div>
      </div>
    `
      );
      console.log("Rendering CommentsSlider with HTML:", this.container), this.container.insertAdjacentHTML(this.position, t);
    }
    initSliderActions() {
      const t = document.querySelectorAll(".crs-sliders-actions button"), p = document.querySelectorAll(".crs-comment"), a = document.querySelector(".crs-comments");
      if (!t.length || !p.length || !a) {
        console.error("Slider elements not found");
        return;
      }
      t[0].classList.add("active"), t.forEach((e, o) => {
        e.addEventListener("click", () => {
          this.isScrolling = !0, t.forEach((i) => i.classList.remove("active")), e.classList.add("active");
          const s = p[o];
          if (s) {
            const i = s.offsetWidth, n = o * i;
            a.scrollTo({
              left: n,
              behavior: "smooth"
            }), setTimeout(() => {
              this.isScrolling = !1;
            }, 500);
          }
        });
      }), a.addEventListener("scroll", () => {
        this.isScrolling || this.updateActiveButtonOnScroll(t, p, a);
      });
    }
    updateActiveButtonOnScroll(t, p, a) {
      const e = a.scrollLeft, o = p[0].offsetWidth, s = Math.round(e / o), i = Math.max(0, Math.min(s, p.length - 1));
      t.forEach((n, m) => {
        m === i ? n.classList.add("active") : n.classList.remove("active");
      });
    }
    remove() {
      var p;
      const t = document.querySelector("#crs-modal-comments");
      if (t) {
        const a = t.querySelectorAll(".crs-sliders-actions button"), e = t.querySelector(".crs-comments");
        if (a.forEach((o) => {
          var i;
          const s = o.cloneNode(!0);
          (i = o.parentNode) == null || i.replaceChild(s, o);
        }), e) {
          const o = e.cloneNode(!0);
          (p = e.parentNode) == null || p.replaceChild(o, e);
        }
        t.remove(), console.log("CommentsSlider removed from DOM with event listeners cleaned up");
      }
    }
    hide() {
      const t = document.querySelector("#crs-modal-comments");
      t && (t.style.visibility = "hidden", console.log("CommentsSlider hidden"));
    }
    show() {
      const t = document.querySelector("#crs-modal-comments");
      t && (t.style.visibility = "visible", console.log("CommentsSlider shown"));
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = M, document.head.appendChild(t);
    }
  }
  const S = [
    {
      url: "/how-to/recover-deleted-photos-from-iphone",
      title: (
        /* HTML */
        "<span>Sign up</span> to recover deleted iPhone photos"
      )
    },
    {
      url: "/how-to/download-youtube-videos",
      title: (
        /* HTML */
        `<span>Sign up</span> to download videos from any site
      with Setapp`
      )
    },
    {
      url: "/how-to/how-to-recover-deleted-text-messages-on-iphone",
      title: (
        /* HTML */
        `<span>Sign up</span> to take control of your iPhone data
      with Setapp`
      )
    },
    {
      url: "/how-to/how-to-recover-an-unsaved-word-document-on-mac",
      title: (
        /* HTML */
        `<span>Sign up</span> to recover and protect your
      documents with Setapp`
      )
    },
    {
      url: "/how-to/convert-youtube-to-mp3",
      title: (
        /* HTML */
        `<span>Sign up</span> to streamline your video-to-audio
      workflow with Setapp`
      )
    },
    {
      url: "/how-to/download-facebook-video",
      title: (
        /* HTML */
        `<span>Sign up</span> to download videos from any site
      with Setapp`
      )
    },
    {
      url: "/how-to/how-to-recover-sd-card-on-mac",
      title: (
        /* HTML */
        `<span>Sign up</span> and take control of your data with
      Setapp`
      )
    },
    {
      url: "/how-to/unblur-an-image",
      title: (
        /* HTML */
        "<span>Sign up</span> to unblur your image with Setapp"
      )
    },
    {
      url: "/how-to/tiktok-banned-reasons-and-solutions",
      title: (
        /* HTML */
        `<span>Sign up</span> to unblock apps and secure your Mac
      with Setapp`
      )
    },
    {
      url: "/how-to/open-rar-files-on-mac",
      title: (
        /* HTML */
        `<span>Sign up</span> to open your RAR file on Mac with
      Setapp`
      )
    }
  ], v = `.app-context {
  margin-top: 100px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 500px;
  padding: 12px 20px;
  border-radius: 15px;
  background: rgb(245, 245, 245);
}
.app-context  .app-name {
  text-transform: capitalize;
}
@media (min-width: 992px) {
  .app-context {
    max-width: 520px;
    gap: 16px;
  }
}

@media (max-width: 992px) {
  .app-context {
    margin-top: 52px;
    border-top: 1px solid #EBEBEC;
    width: calc(100% + 40px);
    margin-inline: -20px;
    border-radius: 0;
  }

  .signup-modal__logo {
    margin-top: -24px;
    margin-left: -20px;
    padding: 20px;
    width: calc(100% + 40px);
    background: rgb(245, 245, 245);
  }
}

.app-context .text {
  color: rgb(38, 38, 43);
  font-size: 14px;
  line-height: 22px;
}

.app-context .text span {
  font-weight: 800;
}

#signup-form-step-email .h3 span {
  color: #e6842e;
}

.signup-form {
  margin-bottom: 20px;
}`, x = "https://cdn.setapp.com/master-7f8a807e5c0ec1d4b2e1f7adfccfae061971e024-560/static/main/images/components/logo/setapp-icon.svg";
  class C {
    constructor({ context: t }) {
      this.modalObserver = null, this.formObserver = null, this.context = t, this.init();
    }
    init() {
      this.addStyles(), this.analyzeContext(), this.watchModalClose(), this.watchFormVisibility(), this.changeModalTitle();
    }
    analyzeContext() {
      const { type: t, appName: p, appIcon: a, mentionedApps: e, contextText: o } = this.context;
      console.log("📊 Context Analysis:", {
        contextType: t,
        specificApp: p || "none",
        appIcon: a || "none",
        allMentionedApps: e,
        contextPreview: o.substring(0, r.CONTEXT_PREVIEW_LENGTH) + (o.length > r.CONTEXT_PREVIEW_LENGTH ? "..." : "")
      }), t === "specific" && this.addAppContextToModal({ appName: p, appIcon: a }), t === "general" && this.addGeneralContextToModal(), this.addCommentsSection();
    }
    changeModalTitle() {
      var a;
      const t = document.querySelector("#signup-form-step-email .h3");
      if (!t) {
        console.error("Title element not found");
        return;
      }
      const p = (a = S.find((e) => e.url === location.pathname)) == null ? void 0 : a.title;
      p && (t.innerHTML = p);
    }
    addAppContextToModal({
      appName: t,
      appIcon: p
    }) {
      if (!document.querySelector("#signup-modal.is-open")) {
        console.error("Popup not found");
        return;
      }
      const e = document.querySelector("#signup-form-manager"), s = (
        /* HTML */
        `
      <div id="app-context" class="app-context">
        <img
          src="${p || ""}"
          alt="${t} icon"
          class="logo"
          width="40"
          height="40"
          loading="lazy"
        />
        <div class="text">
          You're one step away from accessing
          <span class="app-name">${t}</span> via
          <span>Setapp</span>
        </div>
      </div>
    `
      );
      e == null || e.insertAdjacentHTML("beforebegin", s);
    }
    addGeneralContextToModal() {
      if (!document.querySelector("#signup-modal.is-open")) {
        console.error("Popup not found");
        return;
      }
      const p = document.querySelector("#signup-form-manager"), a = (
        /* HTML */
        `
      <div id="app-context" class="app-context">
        <img
          src=${x}
          alt="Setapp icon"
          class="logo"
          width="40"
          height="40"
          loading="lazy"
        />
        <div class="text">
          With Setapp you get <span>250+ apps</span> for your Mac
        </div>
      </div>
    `
      );
      p == null || p.insertAdjacentHTML("beforebegin", a);
    }
    addCommentsSection() {
      const t = document.querySelector(
        ".signup-modal__container"
      );
      t && (this.comments = new q({
        container: t,
        position: "beforeend"
      }));
    }
    removeAppContextFromModal() {
      const t = document.querySelector("#app-context");
      t && t.remove();
    }
    hideAppContext() {
      const t = document.querySelector("#app-context");
      t && (t.style.visibility = "hidden");
    }
    showAppContext() {
      const t = document.querySelector("#app-context");
      t && (t.style.visibility = "visible");
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = v, document.head.appendChild(t);
    }
    watchModalClose() {
      const t = document.querySelector("#signup-modal");
      if (!t) {
        console.warn(
          "Modal #signup-modal not found, cannot watch for close events"
        );
        return;
      }
      this.modalObserver = new MutationObserver((p) => {
        p.forEach((a) => {
          var e;
          a.type === "attributes" && a.attributeName === "class" && (a.target.classList.contains("is-open") || (console.log("Modal closed, removing app context"), this.removeAppContextFromModal(), (e = this.comments) == null || e.remove(), this.stopWatchingModal()));
        });
      }), this.modalObserver.observe(t, {
        attributes: !0,
        attributeFilter: ["class"]
      }), console.log("Started watching modal for close events");
    }
    stopWatchingModal() {
      this.modalObserver && (this.modalObserver.disconnect(), this.modalObserver = null, console.log("Stopped watching modal"));
    }
    watchFormVisibility() {
      const t = document.querySelector(
        "#signup-modal #signup-form-step-email"
      );
      if (!t) {
        console.warn(
          "Form #signup-form-step-email not found, cannot watch for visibility changes"
        );
        return;
      }
      this.formObserver = new MutationObserver((p) => {
        p.forEach((a) => {
          var e, o, s;
          if (a.type === "attributes" && a.attributeName === "class") {
            const n = a.target.classList.contains("d-none"), m = ((e = a.oldValue) == null ? void 0 : e.includes("d-none")) || !1;
            n && !m ? (console.log("Form hidden with d-none class, removing app context"), this.hideAppContext(), (o = this.comments) == null || o.hide()) : !n && m && (console.log(
              "Form became visible (d-none removed), re-adding app context if needed"
            ), this.showAppContext(), (s = this.comments) == null || s.show());
          }
        });
      }), this.formObserver.observe(t, {
        attributes: !0,
        attributeFilter: ["class"],
        attributeOldValue: !0
        // This allows us to see the previous class value
      }), console.log("Started watching form for visibility changes");
    }
    stopWatchingForm() {
      this.formObserver && (this.formObserver.disconnect(), this.formObserver = null, console.log("Stopped watching form"));
    }
    // Public method to clean up observers when instance is no longer needed
    cleanup() {
      this.stopWatchingModal(), this.stopWatchingForm();
    }
  }
  class k {
    constructor() {
      this.init();
    }
    init() {
      this.appDataProcessor = new w(g), this.contextAnalyzer = new b(
        this.appDataProcessor.getAppNames(),
        this.appDataProcessor.getAppKeywords(),
        this.appDataProcessor
      ), this.detectClick();
    }
    detectClick() {
      document.querySelectorAll(
        y.join(", ")
      ).forEach((p) => {
        p.addEventListener("click", (a) => {
          a.preventDefault(), console.log("🔍 Signup button clicked, analyzing context...");
          const e = this.contextAnalyzer.findContextBlock(p);
          if (e) {
            const o = this.contextAnalyzer.analyzeContext(e);
            p.__contextAnalysis = o, l("#signup-modal.is-open").then(() => {
              new C({ context: o });
            });
          } else
            console.log("⚠️ No context block found for element:", p);
        });
      });
    }
  }
  const O = "";
  h({ name: "3rd EXP on Blog", dev: "OS" }), u("exp_blog");
  class T {
    constructor() {
      this.init();
    }
    init() {
      new k(), this.addStyles();
    }
    addStyles() {
      const t = document.createElement("style");
      t.textContent = O, document.head.appendChild(t);
    }
  }
  new T();
})();
//# sourceMappingURL=index.js.map
