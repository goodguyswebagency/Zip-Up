document.addEventListener("DOMContentLoaded", function () {
   const testimonialSliders = document.querySelectorAll(".testimonials_slider");
   if (testimonialSliders) {
      testimonialSliders.forEach((slider) => {
         const swiperElement = slider.querySelector(".swiper");
         new Swiper(swiperElement, {
            slidesPerView: 1.2,
            spaceBetween: 20,
            loop: false,
            grabCursor: true,
            draggable: true,
            breakpoints: {
               992: {
                  slidesPerView: 3,
               },
            },
         });
      });
   }
   const liftSliders = document.querySelectorAll(".lift-slider_slider");
   if (liftSliders.length > 0) {
      liftSliders.forEach(function (slider) {
         const mainSwiperEl = slider.querySelector(".swiper.is-lift-gallery");
         const thumbsSwiperEl = slider.querySelector(".swiper.is-lift-thumbs");

         if (mainSwiperEl && thumbsSwiperEl) {
            const thumbsSwiper = new Swiper(thumbsSwiperEl, {
               slidesPerView: "auto",
               spaceBetween: 10,
               watchSlidesProgress: true,
            });

            const mainSwiper = new Swiper(mainSwiperEl, {
               slidesPerView: 1,
               spaceBetween: 0,
               effect: "fade",
               navigation: {
                  nextEl: slider.querySelector(".swiper-button-next"),
               },
               fadeEffect: { crossFade: true },
               autoplay: { delay: 5000, disableOnInteraction: false },
               thumbs: { swiper: thumbsSwiper },
               allowTouchMove: false,
               loop: true,
            });

            const progressCircle = slider.querySelector(
               ".lift-slider_button svg circle"
            );
            const circumference = 2 * Math.PI * 27;
            mainSwiper.on(
               "autoplayTimeLeft",
               function (swiper, time, progress) {
                  progressCircle.style.strokeDashoffset =
                     circumference * progress;
               }
            );
         }
      });
   }
   
   const rentSliders = document.querySelectorAll(".rent-success_slider");

   if (rentSliders.length) {
     rentSliders.forEach((slider) => {
       const swiperElement = slider.querySelector(".swiper");
       if (!swiperElement) return;
   
       new Swiper(swiperElement, {
         slidesPerView: 1.2,
         spaceBetween: 16,
   
         loop: true,
         loopAdditionalSlides: 3, // 🔑
         loopFillGroupWithBlank: false,
   
         grabCursor: true,
         draggable: true,
   
         navigation: {
           nextEl: slider.querySelector(".swiper-button-next"),
           prevEl: slider.querySelector(".swiper-button-prev"),
         },
   
         breakpoints: {
           992: {
             slidesPerView: 2.4,
             spaceBetween: 20,
           },
         },
       });
     });
   }


   const historySliders = document.querySelectorAll(".history_slider");
   if (historySliders.length > 0) {
      historySliders.forEach(function (slider) {
         const thumbsSwiperEl = slider.querySelector(
            ".swiper.is-history-thumbs"
         );
         const mainSwiperEl = slider.querySelector(".swiper.is-history");
         const progressLine = slider.querySelector(
            ".swiper-progress .swiper-progress-line"
         );
         if (thumbsSwiperEl && mainSwiperEl) {
            const thumbsSwiper = new Swiper(thumbsSwiperEl, {
               slidesPerView: 4,
               spaceBetween: 120,
               watchSlidesProgress: true,
               breakpoints: {
                  0: {
                     slidesPerView: 2,
                     spaceBetween: 80,
                  },
                  992: {
                     slidesPerView: 4,
                     spaceBetween: 120,
                  },
               },
            });
            const mainSwiper = new Swiper(mainSwiperEl, {
               slidesPerView: 1,
               spaceBetween: 0,
               loop: false,
               effect: "fade",
               fadeEffect: { crossFade: true },
               thumbs: { swiper: thumbsSwiper },
               navigation: {
                  nextEl: slider.querySelector(".swiper-button-next"),
                  prevEl: slider.querySelector(".swiper-button-prev"),
               },
               breakpoints: {
                  0: {
                     effect: "fade",
                  },
                  992: {
                     effect: "fade",
                     fadeEffect: { crossFade: true },
                     spaceBetween: 0,
                  },
               },
            });
            mainSwiper.on("progress", function (swiper, progress) {
               progressLine.style.width = progress * 100 + "%";
            });
         }
      });
   }
   const infoSliders = document.querySelectorAll(".info-slider_slider");
   if (infoSliders.length > 0) {
      infoSliders.forEach(function (slider) {
         const swiperElement = slider.querySelector(".swiper");
         new Swiper(swiperElement, {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            draggable: true,
            navigation: {
               nextEl: infoSliders[0].querySelector(".swiper-button-next"),
               prevEl: infoSliders[0].querySelector(".swiper-button-prev"),
            },
         });
      });
   }
   const productRelatedSliders = document.querySelectorAll(
      ".product-related_slider"
   );
   if (productRelatedSliders.length > 0) {
      productRelatedSliders.forEach((slider) => {
         const swiperElement = slider.querySelector(".swiper");
         const progressLine = slider.querySelector(
            ".swiper-progress .product-related_progress-line"
         );
         const swiper = new Swiper(swiperElement, {
            // <992px breakpoint
            slidesPerView: 2,
            spaceBetween: 16,
            loop: false,
            grabCursor: true,
            draggable: true,
            navigation: {
               nextEl: slider.querySelector(".swiper-button-next"),
               prevEl: slider.querySelector(".swiper-button-prev"),
            },
            // >=992px breakpoint
            breakpoints: {
               992: {
                  slidesPerView: 4,
                  spaceBetween: 20,
               },
            },
         });
         swiper.on("progress", function (_swiper, progress) {
            progressLine.style.width = progress * 100 + "%";
         });
      });
   }
   const productSliders = document.querySelectorAll(".slider-products_slider");
   if (productSliders.length > 0) {
      productSliders.forEach((slider) => {
         const swiperElement = slider.querySelector(".swiper");
         new Swiper(swiperElement, {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: false,
            grabCursor: true,
            draggable: true,
            breakpoints: {
               0: {
                  slidesPerView: 1,
               },
               992: {
                  slidesPerView: 4,
               },
            },
            navigation: {
               nextEl: slider.querySelector(".swiper-button-next"),
               prevEl: slider.querySelector(".swiper-button-prev"),
            },
         });
      });
   }
});
