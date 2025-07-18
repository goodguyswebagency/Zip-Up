/**************/
/* Lenis code */
/**************/

if (window.innerWidth > 767) {
   let lenis = new Lenis({
      lerp: 0.5,
      wheelMultiplier: 0.7,
      gestureOrientation: "vertical",
      normalizeWheel: true,
      smoothTouch: false,
      passive: false,
   });
   function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
   }
   requestAnimationFrame(raf);

   $("[data-lenis-start]").on("click", function () {
      lenis.start();
   });

   $("[data-lenis-stop]").on("click", function () {
      lenis.stop();

      const $popup = $(".contact-popup_wrapper");
      $popup.on("wheel touchmove", function (e) {
         e.stopImmediatePropagation();
      });
   });

   $("[data-lenis-toggle]").on("click", function () {
      $(this).toggleClass("stop-scroll");
      if ($(this).hasClass("stop-scroll")) {
         lenis.stop();
      } else {
         lenis.start();
      }
   });

   /* If cart is open disable scroll */
   document.addEventListener("DOMContentLoaded", () => {
      const popup = document.querySelector(".section_cart-popup");
      if (!popup) return;

      // Observe class changes on the popup
      const mo = new MutationObserver(() => {
         if (popup.classList.contains("sf-cart-opened")) {
            lenis.stop();
         } else {
            lenis.start();
         }
      });

      mo.observe(popup, { attributes: true, attributeFilter: ["class"] });
   });

   // GSAP ScrollTrigger proxy
   /*
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(v){ return arguments.length ? lenis.scrollTo(v) : lenis.scroll; },
      getBoundingClientRect(){ return { top:0, left:0, width:innerWidth, height:innerHeight }; },
      pinType: document.body.style.transform ? "transform" : "fixed"
    });
    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.addEventListener("refresh", () => lenis.update());
    */
}

/***********************/
/*** Navigation code ***/
/***********************/
import "./modulesJavaScript/navigation/navigation.js";

/*******************************/
/* Swiper initializations code */
/*******************************/
import "./modulesJavaScript/swiperCode.js";

/****************/
/* GSAP fade up */
/****************/

document.addEventListener("DOMContentLoaded", () => {
   gsap.registerPlugin(ScrollTrigger);

   gsap.utils.toArray("[data-animation-fade]").forEach((elem) => {
      gsap.from(elem, {
         opacity: 0,
         y: 50,
         duration: 0.5,
         ease: "power1.out",
         scrollTrigger: {
            trigger: elem,
            start: "top 93%",
            toggleActions: "play none none none",
         },
      });
   });
});

/*********************/
/* Button link hover */
/*********************/

document.addEventListener("DOMContentLoaded", () => {
   const buttons = document.querySelectorAll(".button.is-link");

   buttons.forEach((btn) => {
      const underline = btn.querySelector(".button-underline");

      if (!underline) return;

      btn.addEventListener("mouseenter", () => {
         underline.classList.remove("animate");
         void underline.offsetWidth;
         underline.classList.add("animate");
      });

      underline.addEventListener("animationend", () => {
         underline.classList.remove("animate");
      });
   });
});

/****************************/
/* Navigation dropdown code */
/****************************/
import "./modulesJavaScript/navigation/navigationDropdown.js";

/************************/
/* Footer dropdown code */
/************************/

document.addEventListener("DOMContentLoaded", () => {
   const toggles = document.querySelectorAll(".footer_link-toggle");

   toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
         const wrapper = toggle.closest(".footer_links-wrapper");
         const isOpen = wrapper.classList.contains("is-open");

         document
            .querySelectorAll(".footer_links-wrapper.is-open")
            .forEach((el) => el.classList.remove("is-open"));

         if (!isOpen) {
            wrapper.classList.add("is-open");
         }
      });
   });
});

/**************************/
/* Navigation mobile code */
/**************************/
import "./modulesJavaScript/navigation/navigationMobile.js";

/*******************************/
/* Navigation about hover code */
/*******************************/
import "./modulesJavaScript/navigation/navigationAboutHover.js";