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