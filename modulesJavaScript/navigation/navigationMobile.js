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
      document
         .querySelectorAll(".navigation_mobile_wrapper")
         .forEach((wrapper) => {
            wrapper.classList.remove("is-moved", "is-moved-past");
         });
   });

   const menuStart = document.querySelector(
      ".navigation_mobile_wrapper.is-start"
   );

   // ─── SCAFFOLDING ───────────────────────────────────────────
   const menuScaffoldingButton = document.getElementById("menu-scaffolding");
   const menuScaffolding = document.querySelector(
      ".navigation_mobile_wrapper.is-scaffolding-1"
   );
   const scaffoldingReturnButton = document.getElementById("scaffolding-return");

   const scaffoldingPaymentButton = document.getElementById("scaffolding-payment");
   const scaffoldingPayment = document.querySelector(
      ".navigation_mobile_wrapper.is-scaffolding-payment"
   );

   const scaffoldingAboutButton = document.getElementById("scaffolding-about");
   const scaffoldingAbout = document.querySelector(
      ".navigation_mobile_wrapper.is-scaffolding-about"
   );

   const scaffoldingCategoryReturnButtons = document.querySelectorAll(
      "#scaffolding-category-return"
   );

   menuScaffoldingButton.addEventListener("click", () => {
      menuStart.classList.add("is-moved");
      menuScaffolding.classList.add("is-moved");
   });
   scaffoldingReturnButton.addEventListener("click", () => {
      menuStart.classList.remove("is-moved");
      menuScaffolding.classList.remove("is-moved");
   });
   scaffoldingPaymentButton.addEventListener("click", () => {
      menuScaffolding.classList.add("is-moved-past");
      scaffoldingPayment.classList.add("is-moved");
   });
   scaffoldingAboutButton.addEventListener("click", () => {
      menuScaffolding.classList.add("is-moved-past");
      scaffoldingAbout.classList.add("is-moved");
   });
   scaffoldingCategoryReturnButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
         menuScaffolding.classList.remove("is-moved-past");
         scaffoldingPayment.classList.remove("is-moved");
         scaffoldingAbout.classList.remove("is-moved");
      });
   });

   // ─── LIFTS ─────────────────────────────────────────────────
   const menuLiftsButton = document.getElementById("menu-lifts");
   const menuLifts = document.querySelector(
      ".navigation_mobile_wrapper.is-lifts-1"
   );
   const liftsReturnButton = document.getElementById("lifts-return");

   const liftsCategoryButton = document.getElementById("lifts-category");
   const liftsCategory = document.querySelector(
      ".navigation_mobile_wrapper.is-lifts-categories"
   );

   const liftsAboutButton = document.getElementById("lifts-about");
   const liftsAbout = document.querySelector(
      ".navigation_mobile_wrapper.is-lifts-about"
   );

   const liftsCategoryReturnButtons = document.querySelectorAll(
      "#lifts-category-return"
   );

   menuLiftsButton.addEventListener("click", () => {
      menuStart.classList.add("is-moved");
      menuLifts.classList.add("is-moved");
   });
   liftsReturnButton.addEventListener("click", () => {
      menuStart.classList.remove("is-moved");
      menuLifts.classList.remove("is-moved");
   });
   liftsCategoryButton.addEventListener("click", () => {
      menuLifts.classList.add("is-moved-past");
      liftsCategory.classList.add("is-moved");
   });
   liftsAboutButton.addEventListener("click", () => {
      menuLifts.classList.add("is-moved-past");
      liftsAbout.classList.add("is-moved");
   });
   liftsCategoryReturnButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
         menuLifts.classList.remove("is-moved-past");
         liftsCategory.classList.remove("is-moved");
         liftsAbout.classList.remove("is-moved");
      });
   });

   // ─── ADDITIONAL ────────────────────────────────────────────
   const menuAdditionalButton = document.getElementById("menu-additional");
   const menuAdditional = document.querySelector(
      ".navigation_mobile_wrapper.is-additional-start"
   );
   const additionalReturnButton = document.getElementById("additional-return");

   const additionalCategories = [1, 2, 3, 4, 5].map((n) => ({
      button: document.getElementById(`additional-category-${n}`),
      panel: document.querySelector(`.navigation_mobile_wrapper.is-additional-${n}`),
      returnBtn: document.getElementById(`additional-category-return-${n}`),
   }));

   menuAdditionalButton.addEventListener("click", () => {
      menuStart.classList.add("is-moved");
      menuAdditional.classList.add("is-moved");
   });
   additionalReturnButton.addEventListener("click", () => {
      menuStart.classList.remove("is-moved");
      menuAdditional.classList.remove("is-moved");
   });

   additionalCategories.forEach(({ button, panel, returnBtn }) => {
      if (button && panel) {
         button.addEventListener("click", () => {
            menuAdditional.classList.add("is-moved-past");
            panel.classList.add("is-moved");
         });
      }
      if (returnBtn && panel) {
         returnBtn.addEventListener("click", () => {
            menuAdditional.classList.remove("is-moved-past");
            panel.classList.remove("is-moved");
         });
      }
   });

   // ─── SERVICES ──────────────────────────────────────────────
   const menuServicesButton = document.getElementById("menu-services");
   const menuServices = document.querySelector(
      ".navigation_mobile_wrapper.is-services"
   );
   const servicesReturnButton = document.getElementById("services-return");

   menuServicesButton.addEventListener("click", () => {
      menuStart.classList.add("is-moved");
      menuServices.classList.add("is-moved");
   });
   servicesReturnButton.addEventListener("click", () => {
      menuStart.classList.remove("is-moved");
      menuServices.classList.remove("is-moved");
   });

   // ─── ABOUT US ──────────────────────────────────────────────
   const menuAboutUsButton = document.getElementById("menu-about-us");
   const menuAboutUs = document.querySelector(
      ".navigation_mobile_wrapper.is-about-us"
   );
   const aboutUsReturnButton = document.getElementById("about-us-return");

   menuAboutUsButton.addEventListener("click", () => {
      menuStart.classList.add("is-moved");
      menuAboutUs.classList.add("is-moved");
   });
   aboutUsReturnButton.addEventListener("click", () => {
      menuStart.classList.remove("is-moved");
      menuAboutUs.classList.remove("is-moved");
   });
});
