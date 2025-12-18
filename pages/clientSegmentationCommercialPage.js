/******************************************/
/* GSAP image parallax & width animations */
/******************************************/

document.addEventListener("DOMContentLoaded", (event) => {
   gsap.registerPlugin(ScrollTrigger);

   document.querySelectorAll("[gsap-image-parallax]").forEach((el) => {
     gsap.fromTo(
       el,
       {
         yPercent: 12, 
       },
       {
         yPercent: 0, 
         ease: "none",
         scrollTrigger: {
           trigger: el,
           start: "top bottom",
           end: "bottom center",
           scrub: 0.75,
           markers: false,
         },
       }
     );
   });


   function getInitClipPath(el) {
      let initialClipPath;

      if (window.innerWidth > 991) {
         if (el.classList.contains("start-left")) {
            initialClipPath = "inset(0 30% 0 0)";
         } else if (el.classList.contains("start-right")) {
            initialClipPath = "inset(0 0 0 30%)";
         } else {
            initialClipPath = "inset(0 30% 0 0)";
         }
      } else {
         initialClipPath = "inset(0 30% 0 0)";
      }

      return initialClipPath;
   }

   function getFinalClipPath(el) {
      let finalClipPath;

      if (window.innerWidth > 991) {
         if (el.classList.contains("start-left")) {
            finalClipPath = "inset(0 0% 0 0)";
         } else if (el.classList.contains("start-right")) {
            finalClipPath = "inset(0 0 0 0%)";
         } else {
            finalClipPath = "inset(0 0% 0 0)";
         }
      } else {
         finalClipPath = "inset(0 0% 0 0)";
      }

      return finalClipPath;
   }

   // Width animation on each element with gsap-image-width
   document.querySelectorAll("[gsap-image-width]").forEach((el) => {
      let startPath = getInitClipPath(el);
      let endPath = getFinalClipPath(el);

      // Set to 70% width
      gsap.set(el, {
         clipPath: startPath,
         webkitClipPath: startPath,
      });

      // Animate clip path to full width
      gsap.to(el, {
         clipPath: endPath,
         webkitClipPath: endPath,
         scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 35%",
            scrub: 0.75,
            markers: false,
         },
      });
   });
});
