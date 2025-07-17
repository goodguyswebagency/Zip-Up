document.addEventListener("DOMContentLoaded", (event) => {
   const navigationOpen = document.querySelector(".navigation_open");
   const navigationClose = document.querySelector(".navigation_close");
   const navigationNav = document.querySelector(".navigation_nav");
   const navigation = document.getElementById("navigation");

   navigationOpen.addEventListener("click", () => {
      navigationNav.classList.add("is-open");
      document.body.classList.add("is-fixed");
      navigation.classList.add("is-open");
   });

   navigationClose.addEventListener("click", () => {
      navigationNav.classList.remove("is-open");
      document.body.classList.remove("is-fixed");
      navigation.classList.remove("is-open");
      // Reset to first tab
      document
         .querySelectorAll(".navigation_mobile_wrapper")
         .forEach((wrapper) => {
            wrapper.classList.remove("is-moved", "is-moved-past");
         });
   });

   /* Navigation tabs code */

   const menuStart = document.querySelector(
      ".navigation_mobile_wrapper.is-start"
   );

   // Scaffolding selectors
   const menuScaffoldingButton = document.getElementById("menu-scaffolding");
   const menuScaffolding = document.querySelector(
      ".navigation_mobile_wrapper.is-scaffolding-1"
   );
   const scaffoldingReturnButton =
      document.getElementById("scaffolding-return");
   const scaffoldingCategoryButton = document.getElementById(
      "scaffolding-category"
   );
   const scaffoldingCategory = document.querySelector(
      ".navigation_mobile_wrapper.is-scaffolding-2"
   );
   const scaffoldingCategoryReturnButton = document.getElementById(
      "scaffolding-category-return"
   );

   // Lifts selectors
   const menuLiftsButton = document.getElementById("menu-lifts");
   const menuLifts = document.querySelector(
      ".navigation_mobile_wrapper.is-lifts-1"
   );
   const liftsReturnButton = document.getElementById("lifts-return");
   const liftsCategoryButton = document.getElementById("lifts-category");
   const liftsCategory = document.querySelector(
      ".navigation_mobile_wrapper.is-lifts-2"
   );
   const liftsCategoryReturnButton = document.getElementById(
      "lifts-category-return"
   );

   // Additional selectors
   const menuAdditionalButton = document.getElementById("menu-additional");
   const menuAdditional = document.querySelector(
      ".navigation_mobile_wrapper.is-additional-start"
   );
   const additionalReturnButton = document.getElementById("additional-return");

   // Additional category 1 selectors
   const additionalCategoryButton1 = document.getElementById(
      "additional-category-1"
   );
   const additionalCategory1 = document.querySelector(
      ".navigation_mobile_wrapper.is-additional-1"
   );
   const additionalCategoryReturnButton1 = document.getElementById(
      "additional-category-return-1"
   );

   // Additional category 2 selectors
   const additionalCategoryButton2 = document.getElementById(
      "additional-category-2"
   );
   const additionalCategory2 = document.querySelector(
      ".navigation_mobile_wrapper.is-additional-2"
   );
   const additionalCategoryReturnButton2 = document.getElementById(
      "additional-category-return-2"
   );

   // Additional category 3 selectors
   const additionalCategoryButton3 = document.getElementById(
      "additional-category-3"
   );
   const additionalCategory3 = document.querySelector(
      ".navigation_mobile_wrapper.is-additional-3"
   );
   const additionalCategoryReturnButton3 = document.getElementById(
      "additional-category-return-3"
   );

   // Additional category 4 selectors
   const additionalCategoryButton4 = document.getElementById(
      "additional-category-4"
   );
   const additionalCategory4 = document.querySelector(
      ".navigation_mobile_wrapper.is-additional-4"
   );

   // Additional category 5 selectors
   const additionalCategoryReturnButton4 = document.getElementById(
      "additional-category-return-4"
   );
   const additionalCategoryButton5 = document.getElementById(
      "additional-category-5"
   );
   const additionalCategory5 = document.querySelector(
      ".navigation_mobile_wrapper.is-additional-5"
   );
   const additionalCategoryReturnButton5 = document.getElementById(
      "additional-category-return-5"
   );

   // Services selectors
   const menuServicesButton = document.getElementById("menu-services");
   const menuServices = document.querySelector(
      ".navigation_mobile_wrapper.is-services"
   );
   const servicesReturnButton = document.getElementById("services-return");

   // About us selectors
   const menuAboutUsButton = document.getElementById("menu-about-us");
   const menuAboutUs = document.querySelector(
      ".navigation_mobile_wrapper.is-about-us"
   );
   const aboutUsReturnButton = document.getElementById("about-us-return");

   // Animations

   // Scaffolding animations
   // Scaffolding open
   menuScaffoldingButton.addEventListener("click", () => {
      menuStart.classList.add("is-moved");
      menuScaffolding.classList.add("is-moved");
   });
   // Scaffolding return to menu
   scaffoldingReturnButton.addEventListener("click", () => {
      menuStart.classList.remove("is-moved");
      menuScaffolding.classList.remove("is-moved");
   });
   // Scaffolding category click
   scaffoldingCategoryButton.addEventListener("click", () => {
      menuScaffolding.classList.add("is-moved-past");
      scaffoldingCategory.classList.add("is-moved");
   });
   // Scaffolding category return
   scaffoldingCategoryReturnButton.addEventListener("click", () => {
      menuScaffolding.classList.remove("is-moved-past");
      scaffoldingCategory.classList.remove("is-moved");
   });

   // Lifts animations
   // Lifts open
   menuLiftsButton.addEventListener("click", () => {
      menuStart.classList.add("is-moved");
      menuLifts.classList.add("is-moved");
   });
   // Lifts return to menu
   liftsReturnButton.addEventListener("click", () => {
      menuStart.classList.remove("is-moved");
      menuLifts.classList.remove("is-moved");
   });
   // Lifts category click
   liftsCategoryButton.addEventListener("click", () => {
      menuLifts.classList.add("is-moved-past");
      liftsCategory.classList.add("is-moved");
   });
   // Lifts category return
   liftsCategoryReturnButton.addEventListener("click", () => {
      menuLifts.classList.remove("is-moved-past");
      liftsCategory.classList.remove("is-moved");
   });

   // Additional animations
   // Additional open
   menuAdditionalButton.addEventListener("click", () => {
      menuStart.classList.add("is-moved");
      menuAdditional.classList.add("is-moved");
   });
   // Additional return to menu
   additionalReturnButton.addEventListener("click", () => {
      menuStart.classList.remove("is-moved");
      menuAdditional.classList.remove("is-moved");
   });
   // Additional category 1 click
   additionalCategoryButton1.addEventListener("click", () => {
      menuAdditional.classList.add("is-moved-past");
      additionalCategory1.classList.add("is-moved");
   });
   // Additional category 1 return
   additionalCategoryReturnButton1.addEventListener("click", () => {
      menuAdditional.classList.remove("is-moved-past");
      additionalCategory1.classList.remove("is-moved");
   });
   // Additional category 2 click
   additionalCategoryButton2.addEventListener("click", () => {
      menuAdditional.classList.add("is-moved-past");
      additionalCategory2.classList.add("is-moved");
   });
   // Additional category 2 return
   additionalCategoryReturnButton2.addEventListener("click", () => {
      menuAdditional.classList.remove("is-moved-past");
      additionalCategory2.classList.remove("is-moved");
   });
   // Additional category 3 click
   additionalCategoryButton3.addEventListener("click", () => {
      menuAdditional.classList.add("is-moved-past");
      additionalCategory3.classList.add("is-moved");
   });
   // Additional category 3 return
   additionalCategoryReturnButton3.addEventListener("click", () => {
      menuAdditional.classList.remove("is-moved-past");
      additionalCategory3.classList.remove("is-moved");
   });
   // Additional category 4 click
   additionalCategoryButton4.addEventListener("click", () => {
      menuAdditional.classList.add("is-moved-past");
      additionalCategory4.classList.add("is-moved");
   });
   // Additional category 4 return
   additionalCategoryReturnButton4.addEventListener("click", () => {
      menuAdditional.classList.remove("is-moved-past");
      additionalCategory4.classList.remove("is-moved");
   });
   // Additional category 5 click
   additionalCategoryButton5.addEventListener("click", () => {
      menuAdditional.classList.add("is-moved-past");
      additionalCategory5.classList.add("is-moved");
   });
   // Additional category 5 return
   additionalCategoryReturnButton5.addEventListener("click", () => {
      menuAdditional.classList.remove("is-moved-past");
      additionalCategory5.classList.remove("is-moved");
   });

   // Services animations
   // Services open
   menuServicesButton.addEventListener("click", () => {
      menuStart.classList.add("is-moved");
      menuServices.classList.add("is-moved");
   });
   // Services return to menu
   servicesReturnButton.addEventListener("click", () => {
      menuStart.classList.remove("is-moved");
      menuServices.classList.remove("is-moved");
   });

   // About us animations
   // About us open
   menuAboutUsButton.addEventListener("click", () => {
      menuStart.classList.add("is-moved");
      menuAboutUs.classList.add("is-moved");
   });
   // About us return to menu
   aboutUsReturnButton.addEventListener("click", () => {
      menuStart.classList.remove("is-moved");
      menuAboutUs.classList.remove("is-moved");
   });
});