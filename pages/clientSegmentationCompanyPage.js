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

   // Width animation on each element with gsap-image-width
   document.querySelectorAll("[gsap-image-width]").forEach((el) => {
      gsap.to(el, {
         width: "100%",
         ease: "power1.out",
         scrollTrigger: {
            trigger: el,
            start: "top 65%",
            end: "top 5%",
            scrub: 0.75,
            markers: false,
         },
      });
   });
});
