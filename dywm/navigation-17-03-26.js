(function() {
  "use strict";
  const d = (o, n, e, t = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: o,
      event_desc: n,
      event_type: e,
      event_loc: t
    }), x(`Event: ${o} | ${n} | ${e} | ${t}`, "success");
  }, f = (o) => new Promise((n) => {
    const e = document.querySelector(o);
    e && n(e);
    const t = new MutationObserver(() => {
      const i = document.querySelector(o);
      i && (n(i), t.disconnect());
    });
    t.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), w = ({ name: o, dev: n }) => {
    console.log(
      `%c EXP: ${o} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class c {
    constructor(n) {
      this.elements = n instanceof c ? n.elements : typeof n == "string" ? Array.from(document.querySelectorAll(n)) : n instanceof Element ? [n] : Array.isArray(n) ? n : Array.from(n);
    }
    on(n, e, t) {
      return typeof e == "function" && (t = e, e = ""), this.elements.forEach((i) => {
        i.addEventListener(n, function(r) {
          var p;
          if (e !== "") {
            let a = (p = r.target) == null ? void 0 : p.closest(e);
            a && (t == null || t.call(a, r));
          } else
            t == null || t.call(i, r);
        });
      }), this;
    }
    addClass(n) {
      return this.elements.forEach(function(e) {
        e.classList.add(n);
      }), this;
    }
    removeClass(n) {
      return this.elements.forEach(function(e) {
        e.classList.remove(n);
      }), this;
    }
    toggleClass(n) {
      return this.elements.forEach(function(e) {
        e.classList.toggle(n);
      }), this;
    }
    each(n) {
      for (let e of this.elements)
        n(new c(e), this.elements.indexOf(e));
      return this;
    }
    style(n, e) {
      const t = n.split("-").map((i, r) => r === 0 ? i : i.charAt(0).toUpperCase() + i.slice(1)).join("");
      return this.elements.forEach(function(i) {
        i.style[t] = e;
      }), this;
    }
    find(n) {
      const e = this.elements.map((t) => Array.from(t.querySelectorAll(n)));
      return new c(e.flat());
    }
    attr(n, e) {
      return e ? (this.elements.forEach(function(t) {
        t.setAttribute(n, e);
      }), this) : this.elements[0].getAttribute(n);
    }
    text(n) {
      return n ? (this.elements.forEach(function(e) {
        e.textContent = n;
      }), this) : this.elements[0].textContent || "";
    }
    html(n) {
      return n ? (this.elements.forEach(function(e) {
        e.innerHTML = n;
      }), this) : this.elements[0].innerHTML;
    }
  }
  const l = (o) => new c(o), g = (o) => {
    let n = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(n), window.clarity("set", o, "variant_1"));
    }, 1e3);
  }, x = (o, n = "info") => {
    let e;
    switch (n) {
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
    console.log(`%c>>> ${o}`, `${e} font-size: 16px; font-weight: 600`);
  }, C = "https://conversionrate-store.github.io/a-b_images/dywm/", s = {
    medal: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
		<path d="M16 20C20.9706 20 25 16.1198 25 11.3333C25 6.54686 20.9706 2.66666 16 2.66666C11.0294 2.66666 7 6.54686 7 11.3333C7 16.1198 11.0294 20 16 20Z" stroke="#007170" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M10.0266 18.0266L10.0133 27.8666C10.0133 29.0666 10.8533 29.6533 11.8933 29.16L15.4667 27.4667C15.76 27.32 16.2533 27.32 16.5467 27.4667L20.1333 29.16C21.16 29.64 22.0133 29.0666 22.0133 27.8666V17.7867" stroke="#007170" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>`,
    play: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='-2 -2 50 50' fill='white' ><circle cx='22.9' cy='22.9' r='23.5' stroke='white' fill='none' stroke-width='2'></circle><path d='M19.201 4.78l18.546 30.001a2.001 2.001 0 0 1-1.707 3.052H-1.046a2 2 0 0 1-1.701-3.052l18.545-30a2 2 0 0 1 3.403 0' transform='translate(11.5, 9.8) scale(.57) rotate(90 20 25.4)'></path></svg>",
    flower: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
		<path d="M6.13326 12.7473C4.95658 11.789 4.20357 10.3295 4.20357 8.69712V7.53677H5.36392C6.20548 7.53677 7.00103 7.73716 7.7058 8.09228C7.95021 6.98591 8.58494 5.95673 9.60357 5.02083L10 4.65669L10.3964 5.02091C11.4151 5.95677 12.0498 6.98595 12.2942 8.09235C12.999 7.73724 13.7945 7.53685 14.6361 7.53685H15.7964V8.6972C15.7964 10.3295 15.0434 11.7891 13.8668 12.7474H18.5026V5.16431C18.5026 3.76427 17.3636 2.62524 15.9636 2.62524H4.0365C2.63646 2.62524 1.49744 3.76427 1.49744 5.16431V12.7473H6.13326Z" fill="#007170"/>
		<path d="M0 13.9192V14.8355C0 16.2356 1.13902 17.3746 2.53906 17.3746H17.4609C18.861 17.3746 20 16.2356 20 14.8355V13.9192H0Z" fill="#007170"/>
		<path d="M8.77887 8.81129C9.27731 9.24305 9.69321 9.76754 10 10.3575C10.3068 9.76754 10.7227 9.24305 11.2211 8.81129C11.1381 7.91633 10.7291 7.06766 10 6.27832C9.27086 7.06766 8.86188 7.91637 8.77887 8.81129Z" fill="#007170"/>
		<path d="M10.5859 12.7473C12.8101 12.7412 14.6183 10.933 14.6246 8.70874C12.4003 8.71491 10.5921 10.5231 10.5859 12.7473Z" fill="#007170"/>
		<path d="M9.41406 12.7473C9.40785 10.5231 7.59965 8.71495 5.37543 8.70874C5.38168 10.933 7.18984 12.7411 9.41406 12.7473Z" fill="#007170"/>
		</svg>`,
    collections: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
		<path d="M7.99998 11.3333V12.92C7.99998 14.1667 7.49998 14.6667 6.24665 14.6667H3.07998C1.83331 14.6667 1.33331 14.1667 1.33331 12.92V9.75333C1.33331 8.5 1.83331 8 3.07998 8H4.66665V9.58C4.66665 10.8333 5.16665 11.3333 6.41331 11.3333H7.99998Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M11.3334 8.00008V9.58008C11.3334 10.8334 10.8334 11.3334 9.58002 11.3334H6.41335C5.16669 11.3334 4.66669 10.8334 4.66669 9.58008V6.41341C4.66669 5.16675 5.16669 4.66675 6.41335 4.66675H8.00002V6.24675C8.00002 7.50008 8.50002 8.00008 9.74669 8.00008H11.3334Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M14.6667 3.07992V6.24658C14.6667 7.49992 14.1667 7.99992 12.9133 7.99992H9.74667C8.5 7.99992 8 7.49992 8 6.24658V3.07992C8 1.83325 8.5 1.33325 9.74667 1.33325H12.9133C14.1667 1.33325 14.6667 1.83325 14.6667 3.07992Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>`,
    retreats: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
		<g clip-path="url(#clip0_2_14262)">
		<path d="M24 18.9877C24 18.0022 23.4356 17.1211 22.5896 16.6898C22.6391 15.7415 22.1582 14.8121 21.3046 14.3194C20.4511 13.8266 19.4059 13.8749 18.6094 14.3919C17.9669 13.9748 17.1626 13.863 16.4276 14.0939C16.1511 13.8991 15.8477 13.7168 15.519 13.5474C16.0993 12.9262 16.4062 12.2249 16.4062 11.4844C16.4062 10.721 16.0832 10.0004 15.463 9.36248C16.3797 8.71533 16.875 7.9072 16.875 7.03125C16.875 5.80931 15.9156 4.73466 14.2584 4.04442C14.4379 3.73162 14.5312 3.39633 14.5312 3.04688C14.5312 2.14059 13.9056 1.32872 12.7696 0.760734C11.7885 0.270187 10.4998 0 9.14062 0C7.78148 0 6.4927 0.270187 5.51161 0.760734C4.37564 1.32872 3.75 2.14059 3.75 3.04688C3.75 3.67739 4.05314 4.26216 4.62 4.75092C3.74902 5.38748 3.28125 6.17302 3.28125 7.03125C3.28125 7.30753 3.33066 7.57706 3.4268 7.83694C1.26445 8.65392 0 9.98109 0 11.4844C0 12.5089 0.587062 13.4586 1.67377 14.2243C0.586031 15.0466 0 16.045 0 17.1094C0 18.5165 1.01569 19.7992 2.85998 20.7214C4.54936 21.5661 6.77986 22.0312 9.14062 22.0312C11.0313 22.0312 12.8825 21.7222 14.4068 21.1579C14.4786 21.204 14.5527 21.2468 14.6292 21.2858C14.5797 22.2341 15.0605 23.1635 15.9141 23.6562C16.3155 23.8879 16.759 24 17.1993 24C17.6955 24 18.1874 23.8576 18.6094 23.5837C19.4059 24.1007 20.4512 24.149 21.3047 23.6562C22.1582 23.1634 22.6391 22.2341 22.5896 21.2858C23.4356 20.8545 24 19.9733 24 18.9877ZM9.14062 1.40625C11.5729 1.40625 13.125 2.37792 13.125 3.04688C13.125 3.71583 11.5729 4.6875 9.14062 4.6875C6.70837 4.6875 5.15625 3.71583 5.15625 3.04688C5.15625 2.37792 6.70837 1.40625 9.14062 1.40625ZM6.00014 5.54841C6.903 5.90161 7.9965 6.09375 9.14062 6.09375C10.4998 6.09375 11.7885 5.82356 12.7696 5.33302C12.8984 5.26861 13.0203 5.20097 13.1357 5.13052C14.5436 5.58042 15.4688 6.32531 15.4688 7.03125C15.4688 7.55714 14.9599 8.11317 14.0726 8.55684C13.0174 9.08442 11.5988 9.375 10.0781 9.375C8.55745 9.375 7.13888 9.08442 6.08362 8.55684C5.19637 8.11317 4.6875 7.55714 4.6875 7.03125C4.6875 6.52397 5.17266 5.98116 6.00014 5.54841ZM1.40625 11.4844C1.40625 10.5548 2.51831 9.6128 4.27317 9.02841C4.59441 9.31767 4.9897 9.58205 5.4548 9.81459C6.70144 10.438 8.34338 10.7812 10.0781 10.7812C11.5662 10.7812 12.9852 10.528 14.1458 10.0627C14.5845 10.4167 15 10.905 15 11.4844C15 12.1954 14.341 12.9326 13.192 13.5071C11.8711 14.1675 10.0994 14.5312 8.20312 14.5312C6.30684 14.5312 4.53511 14.1675 3.21427 13.5071C2.06527 12.9326 1.40625 12.1954 1.40625 11.4844ZM13.2188 18.9877C13.2188 19.347 13.294 19.6922 13.4303 20.007C12.1592 20.408 10.6687 20.625 9.14062 20.625C6.99394 20.625 4.98675 20.2125 3.48886 19.4636C2.16534 18.8018 1.40625 17.9438 1.40625 17.1094C1.40625 16.3725 2.0062 15.6097 3.06417 14.9859C4.50703 15.6016 6.30848 15.9375 8.20312 15.9375C10.3135 15.9375 12.3086 15.5211 13.8209 14.7649C13.979 14.6859 14.1302 14.6038 14.2747 14.519C14.6014 14.6552 14.9022 14.8029 15.1756 14.9613C14.7937 15.4499 14.5966 16.0657 14.6291 16.6898C13.7832 17.1211 13.2188 18.0022 13.2188 18.9877ZM21.6541 20.136C21.4559 20.1758 21.2844 20.2988 21.1834 20.4739C21.0823 20.6489 21.0615 20.859 21.1261 21.0504C21.3038 21.5766 21.0832 22.1603 20.6016 22.4384C20.1199 22.7164 19.5041 22.6156 19.1373 22.1987C19.0038 22.047 18.8115 21.96 18.6094 21.96C18.4072 21.96 18.2149 22.0469 18.0814 22.1987C17.7147 22.6157 17.0989 22.7165 16.6172 22.4384C16.1355 22.1602 15.9149 21.5766 16.0926 21.0504C16.1572 20.859 16.1364 20.649 16.0354 20.4739C15.9343 20.2988 15.7628 20.1758 15.5647 20.136C15.0202 20.0269 14.625 19.544 14.625 18.9877C14.625 18.4315 15.0202 17.9487 15.5647 17.8395C15.7628 17.7997 15.9343 17.6767 16.0354 17.5017C16.1364 17.3266 16.1573 17.1166 16.0926 16.9251C15.9149 16.3989 16.1355 15.8152 16.6171 15.5372C16.7997 15.4319 17.0013 15.3809 17.2015 15.3809C17.5297 15.3809 17.8536 15.5179 18.0814 15.7769C18.2149 15.9286 18.4072 16.0156 18.6094 16.0156C18.8115 16.0156 19.0038 15.9286 19.1373 15.7769C19.5041 15.3599 20.1199 15.2591 20.6016 15.5372C21.0832 15.8153 21.3038 16.399 21.1261 16.9251C21.0615 17.1166 21.0823 17.3266 21.1834 17.5017C21.2844 17.6768 21.4559 17.7997 21.6541 17.8395C22.1985 17.9487 22.5938 18.4316 22.5938 18.9877C22.5938 19.5439 22.1985 20.0269 21.6541 20.136Z" fill="black"/>
		<path d="M18.6094 16.8765C17.4463 16.8765 16.5 17.8227 16.5 18.9858C16.5 20.1489 17.4463 21.0952 18.6094 21.0952C19.7725 21.0952 20.7188 20.1489 20.7188 18.9858C20.7188 17.8227 19.7725 16.8765 18.6094 16.8765ZM18.6094 19.689C18.2217 19.689 17.9062 19.3735 17.9062 18.9858C17.9062 18.5981 18.2217 18.2827 18.6094 18.2827C18.9971 18.2827 19.3125 18.5981 19.3125 18.9858C19.3125 19.3735 18.9971 19.689 18.6094 19.689Z" fill="black"/>
		</g>
		<defs>
		<clipPath id="clip0_2_14262">
		<rect width="24" height="24" fill="white"/>
		</clipPath>
		</defs>
		</svg>`
  }, v = [
    { title: "Back care", sessions: 110, img: 1, url: "/taxonomy/term/54" },
    { title: "Yoga for Better Sleep and Relaxation", sessions: 225, img: 2, url: "/taxonomy/term/70" },
    { title: "Mobility and Flexibility", sessions: 718, img: 3, url: "/taxonomy/term/64" },
    { title: "Yoga for Seniors", sessions: 64, img: 4, url: "/category/difficulty-levels-2" },
    { title: "Yoga for Athletes", sessions: 117, img: 5, url: "/category/focus-13" }
  ], b = [
    { title: "Morning Yoga", sessions: 289, img: 6, url: "/taxonomy/term/72" },
    { title: "Strength and Stability", sessions: 397, img: 7, url: "/taxonomy/term/66" },
    { title: "Stress Reduction", sessions: 315, img: 8, url: "/taxonomy/term/61" },
    { title: "Pre/Post Natal", sessions: 38, img: 9, url: "/taxonomy/term/126" }
  ], M = (o, n, e, t) => (
    /* HTML */
    `
  <a class="coll-item" href="${t}" data-title="${o}">
    <div class="coll-item__thumb">
      <img src="${C}collection${e}.webp" alt="${o}" />
    </div>
    <div class="coll-item__info">
      <p class="coll-item__title">${o}</p>
      <div class="coll-item__meta">
        ${s.flower}
        <span>${n} sessions</span>
      </div>
    </div>
  </a>
`
  ), _ = (o) => o.map(
    (n, e) => `
    ${M(n.title, n.sessions, n.img, n.url)}
    ${e < o.length - 1 ? '<div class="coll-divider"></div>' : ""}
  `
  ).join(""), y = (
    /* HTML */
    `
  <div class="chal-panel">
    <div class="chal-panel__left">
      <div class="chal-panel__header-group">
        <div class="chal-panel__heading">
          ${s.medal}
          <span>Yoga Challenges</span>
        </div>
        <p class="chal-panel__desc">
          Step-by-step yoga journeys to support your goals &ndash; from beginners to advanced practitioners. Daily yoga
          series designed to motivate, inspire, and deepen your practice at any level.
        </p>
      </div>
      <a href="/challenges" class="chal-panel__cta">Explore Challenges</a>
    </div>
    <div class="chal-panel__right">
      <a class="chal-panel__video" href="/media/2153">
        <div
          class="chal-panel__thumb"
          style="background-image: url('//cfe8aff5b.lwcdn.com/i/v-i-74126da4-6fa3-400f-b59b-816593606b75-0.jpg');"
        ></div>
        ${s.play}
      </a>
    </div>
  </div>
`
  ), k = (
    /* HTML */
    `
  <li class="c-dropdownMenu__item c-dropdownMenu__item--level0 coll-nav-item">
    <div class="c-dropdownMenu__buttonWrapper">
      <button class="coll-nav-btn" type="button">
        ${s.collections}
        <span>Collections</span>
      </button>
    </div>
    <div class="coll-dropdown">
      <div class="coll-dropdown__inner">
        <div class="coll-dropdown__col">${_(v)}</div>
        <div class="coll-dropdown__col coll-dropdown__col--right">
          <div class="coll-dropdown__col-items">
            ${_(b)}
            <div class="coll-divider"></div>
          </div>
          <a href="/collections" class="coll-dropdown__view-all">View all collections</a>
        </div>
      </div>
    </div>
  </li>
`
  ), L = `.c-dropdownMenu--main > .c-dropdownMenu__list .c-dropdownMenu__buttonWrapper > button,
.c-dropdownMenu__item--level0 > a {
  background: #f6f7f7;
  border-radius: 50px !important;
  height: 40px;
}
.c-dropdownMenu--main > .c-dropdownMenu__list .c-dropdownMenu__buttonWrapper > button:hover,
.c-dropdownMenu__item--level0 > a:hover {
  background: #007170;
  color: #fff !important;
}
.c-dropdownMenu--main > .c-dropdownMenu__list .c-dropdownMenu__buttonWrapper > button:hover span,
.c-dropdownMenu__item--level0 > a:hover span {
  color: #fff !important;
}

.c-dropdownMenu--main > ul > .c-dropdownMenu__item:nth-child(4) {
  display: none;
}

.c-dropdownMenu--main > ul > .c-dropdownMenu__item:nth-child(2) .c-dropdownMenu__submenuWrapper {
  width: 800px !important;
  padding: 30px;
}
.c-dropdownMenu--main > ul > .c-dropdownMenu__item:nth-child(2) .c-dropdownMenu__submenuWrapper > ul {
  display: flex;
  flex-wrap: wrap;
  gap: 40px 60px;
  position: relative;
}
.c-dropdownMenu--main > ul > .c-dropdownMenu__item:nth-child(2) .c-dropdownMenu__submenuWrapper > ul::after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  height: 100%;
  background: #dde4e3;
}
.c-dropdownMenu--main > ul > .c-dropdownMenu__item:nth-child(2) .c-dropdownMenu__submenuWrapper > ul .c-dropdownMenu__item {
  width: calc(50% - 30px);
}
.c-dropdownMenu--main > ul > .c-dropdownMenu__item:nth-child(2) .c-dropdownMenu__submenuWrapper > ul .c-dropdownMenu__item a {
  font-size: 18px;
}

.c-dropdownMenu--main > .c-dropdownMenu__list .c-dropdownMenu__buttonWrapper > button[aria-expanded=true] {
  background: #007170;
  color: #fff !important;
}
.c-dropdownMenu--main > .c-dropdownMenu__list .c-dropdownMenu__buttonWrapper > button[aria-expanded=true] span {
  color: #fff !important;
}

.c-dropdownMenu--main > ul {
  display: flex;
  gap: 8px;
  padding: 10px 0;
  align-items: center;
}

.coll-nav-btn {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  padding: 0 16px !important;
  color: #2b3635 !important;
  background: #e3eceb !important;
  border: none !important;
}
.coll-nav-btn::before {
  content: none !important;
}
.coll-nav-btn svg {
  flex-shrink: 0;
}

.coll-nav-btn:hover,
.coll-nav-btn[aria-expanded=true] {
  color: #fff !important;
  background: #007170 !important;
}
.coll-nav-btn:hover svg path,
.coll-nav-btn[aria-expanded=true] svg path {
  fill: #fff !important;
}

.coll-nav-item {
  position: relative;
}
.coll-nav-item:hover .coll-dropdown,
.coll-nav-item .coll-dropdown:hover {
  display: block;
}

.coll-dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  background: #f6f7f7;
  border: 1px solid #e3eceb;
  border-top: none;
  border-radius: 0 0 12px 12px;
  padding: 30px;
}
.coll-dropdown__inner {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}
.coll-dropdown__col {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.coll-dropdown__col--right {
  height: 432px;
  justify-content: space-between;
}
.coll-dropdown__col--right .coll-divider {
  width: 385px;
}
.coll-dropdown__col-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.coll-dropdown__view-all {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 26px;
  border: 1px solid #d6d6d6;
  border-radius: 100px;
  background: #f6f7f7;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #007170;
  text-decoration: none;
  white-space: nowrap;
  align-self: flex-end;
}
.coll-dropdown__view-all:hover {
  color: #007170;
}

.coll-item {
  display: flex;
  align-items: center;
  width: 395px;
  height: 60px;
  background: #f6f7f7;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  flex-shrink: 0;
}
.coll-item__thumb {
  width: 70px;
  height: 60px;
  flex-shrink: 0;
  overflow: hidden;
}
.coll-item__thumb img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  display: block;
}
.coll-item__info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 16px;
  justify-content: center;
}
.coll-item__title {
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #2b3635;
  white-space: nowrap;
  margin: 0;
}
.coll-item__meta {
  display: flex;
  align-items: center;
  gap: 8px;
}
.coll-item__meta span {
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #5b6362;
}

.coll-divider {
  height: 1px;
  width: 361px;
  background: #dde4e3;
  flex-shrink: 0;
}

.chal-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  background: #f6f7f7;
  border-radius: 12px;
  gap: 36px;
}
@media (max-width: 767px) {
  .chal-panel {
    flex-direction: column;
    align-items: stretch;
    padding: 24px 16px;
    gap: 24px;
  }
}
.chal-panel__left {
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1;
  height: 290px;
  justify-content: center;
}
@media (max-width: 767px) {
  .chal-panel__left {
    width: 100%;
    height: auto;
    gap: 16px;
  }
}
.chal-panel__header-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.chal-panel__heading {
  display: flex;
  align-items: center;
  gap: 8px;
}
.chal-panel__heading span {
  font-family: "DM Sans", sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  color: #272727;
  white-space: nowrap;
}
@media (max-width: 767px) {
  .chal-panel__heading span {
    font-size: 22px;
    line-height: 30px;
  }
}
.chal-panel__desc {
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #2b3635;
  margin: 0;
  max-width: 100%;
}
.chal-panel__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  background: #007170;
  border: 1px solid #007170;
  border-radius: 100px;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
}
.chal-panel__cta:hover {
  color: #fff;
  opacity: 0.9;
}
.chal-panel__right {
  width: 495px;
  border-radius: 12px;
  overflow: hidden;
  flex-shrink: 0;
}
@media (max-width: 767px) {
  .chal-panel__right {
    width: 100%;
  }
}
.chal-panel__video {
  display: block;
  position: relative;
  width: 100%;
  height: 290px;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
}
@media (max-width: 767px) {
  .chal-panel__video {
    height: 182px;
  }
}
.chal-panel__video:hover .chal-panel__video__thumb {
  transform: scale(1.03);
}
.chal-panel__video svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  box-sizing: border-box;
  pointer-events: none;
}
.chal-panel__thumb {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease;
}

.sfc-upgradeBanner {
  margin: 0;
  width: 100%;
}

.sfc-upgradeBanner__col:nth-child(2) {
  order: -1;
}

.sfc-upgradeBanner__main {
  padding: 10px 0;
}

.c-dropdownMenu--main > ul > .c-dropdownMenu__item:nth-child(2) .c-dropdownMenu__submenuWrapper > ul > .c-dropdownMenu__item a {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  padding: 0;
  position: relative;
}
.c-dropdownMenu--main > ul > .c-dropdownMenu__item:nth-child(2) .c-dropdownMenu__submenuWrapper > ul > .c-dropdownMenu__item a .nav-item-title {
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.c-dropdownMenu--main > ul > .c-dropdownMenu__item:nth-child(2) .c-dropdownMenu__submenuWrapper > ul > .c-dropdownMenu__item a .nav-item-description {
  font-size: 14px;
}
.c-dropdownMenu--main > ul > .c-dropdownMenu__item:nth-child(2) .c-dropdownMenu__submenuWrapper > ul > .c-dropdownMenu__item a p {
  margin: 0;
}

.c-dropdownMenu--main > ul > .c-dropdownMenu__item:nth-child(2) .c-dropdownMenu__submenuWrapper > ul > .c-dropdownMenu__item:not(:last-child) a::after {
  content: "";
  width: 100%;
  height: 1px;
  background: #dde4e3;
  margin-top: 8px;
  position: absolute;
  bottom: -20px;
  left: 0;
}/*# sourceMappingURL=style.css.map */`;
  w({ name: "New navigation", dev: "YK" }), g("new_navigation");
  const $ = [
    "Browse our evergrowing class catalog",
    "We offer playlists to calm your mind.",
    "Stay motivated with structured yoga journeys.",
    "Daily practice is key to mastering yoga.",
    "Immersive Live Online Workshops",
    "Join our 250-hour yoga teacher training.",
    "Retreats to recharge, deepen practice, and explore."
  ];
  class j {
    constructor() {
      this.init();
    }
    async init() {
      await f("#c-dropdownMenu__button--account--0-0-1");
      const n = l("#c-dropdownMenu__button--account--0-0-1").elements[0];
      l("head").elements[0].insertAdjacentHTML("beforeend", `<style>${L}</style>`);
      const e = l(".c-dropdownMenu--main .c-dropdownMenu__list").elements[0];
      if (e && n) {
        e.insertAdjacentHTML("afterbegin", k);
        const t = l(
          ".c-dropdownMenu--main > ul > .c-dropdownMenu__item:nth-child(2) .c-dropdownMenu__submenuWrapper > ul > .c-dropdownMenu__item:nth-child(1)"
        ).elements[0].cloneNode(!0), i = t.querySelector("a");
        t && i && i.childNodes[2] && (i.setAttribute("href", "/retreats"), i.childNodes[2].textContent = "Retreats");
        const r = t.querySelector("span");
        r && (r.innerHTML = s.retreats), l(
          ".c-dropdownMenu--main > ul > .c-dropdownMenu__item:nth-child(2) .c-dropdownMenu__submenuWrapper > ul"
        ).elements[0].insertAdjacentElement("beforeend", t), l(
          ".c-dropdownMenu--main > ul > .c-dropdownMenu__item:nth-child(2) .c-dropdownMenu__submenuWrapper > ul > .c-dropdownMenu__item a"
        ).elements.forEach((a, u) => {
          const h = document.createElement("p");
          for (h.className = "nav-item-title"; a.firstChild; )
            h.appendChild(a.firstChild);
          a.appendChild(h);
          const m = document.createElement("p");
          m.className = "nav-item-description", m.textContent = $[u] || "", a.appendChild(m);
        }), l(".coll-item").on("click", (a) => {
          const u = a.currentTarget;
          d("collections_panel_cta_click", u.dataset.title || "", "click", "collections_panel");
        }), l(".coll-dropdown__view-all").on("click", () => {
          d("collections_panel_view_all_click", "Collections panel view all clicked", "click", "collections_panel");
        });
      }
      window.location.pathname.includes("yoga-challenges") && (l(".o-page__mainContent").elements[0].insertAdjacentHTML("afterbegin", y), l(".sfc-upgradeBanner__headingText").text("Upgrade to Premium for Unlimited Access"), l(".sfc-upgradeBanner__cta").text("Unlock Premium Content"), l(".chal-panel__cta").on("click", (t) => {
        t.preventDefault();
        const i = document.querySelector(".sfc-viewsListing");
        i && i.scrollIntoView({ behavior: "smooth", block: "start" }), d("challenges_panel_cta_click", "Explore challenges panel CTA clicked", "click", "challenges_panel");
      }), l(".chal-panel__video").on("click", () => {
        d("challenges_panel_video_click", "Explore challenges panel video clicked", "click", "challenges_panel");
      }));
    }
  }
  new j();
})();
//# sourceMappingURL=index.js.map
