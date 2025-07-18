/******************************************/
/* GSAP image parallax & width animations */
/******************************************/

document.addEventListener("DOMContentLoaded", (event) => {
   gsap.registerPlugin(ScrollTrigger);

   // Parallax on each element with gsap-image-parallax
   document.querySelectorAll("[gsap-image-parallax]").forEach((el) => {
      gsap.to(el, {
         yPercent: -12,
         ease: "power1.out",
         scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.75,
            markers: false,
         },
      });
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