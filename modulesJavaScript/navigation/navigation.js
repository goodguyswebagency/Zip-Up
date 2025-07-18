document.addEventListener("DOMContentLoaded", () => {
   const infoBar = document.querySelector(".section_info-bar");
   const navigation = document.querySelector(".navigation");
   const contactTabs = document.querySelector(".section_contact-tabs");

   // Navigation to position fixed when scrolled past info bar
   if (infoBar) {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  navigation.classList.remove("is-scrolled");
               } else {
                  navigation.classList.add("is-scrolled");
               }
            });
         },
         {
            root: null,
            threshold: 0,
         }
      );
      observer.observe(infoBar);
   } else {
      window.addEventListener("scroll", () => {
         if (window.scrollY >= 32) {
            navigation.classList.add("is-scrolled");
         } else {
            navigation.classList.remove("is-scrolled");
         }
      });
   }

   // Navigation hide/show when page is scrolled down/up
   const scrollThreshold = 72;
   const scrollDelta = 33; // Minimum scroll change in pixels to trigger an update

   const nav = document.querySelector(".navigation");
   let lastScrollY = window.scrollY;

   window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;

      // Only apply changes if the scroll change is more than the sensitivity threshold
      if (Math.abs(currentScrollY - lastScrollY) < scrollDelta) {
         return;
      }

      // Only apply the animation if scrolled more than the threshold from the top
      if (currentScrollY > scrollThreshold) {
         if (currentScrollY > lastScrollY) {
            // Scrolling down: hide navigation and remove class from contactTabs
            nav.style.transform = "translateY(-100%)";
            if (contactTabs) contactTabs.style.transform = "translateY(-3rem)";
         } else {
            // Scrolling up: show navigation and add class to contactTabs
            nav.style.transform = "translateY(0%)";
            if (contactTabs) contactTabs.style.transform = "translateY(0rem)";
         }
      } else {
         // If near the top, always show navigation
         nav.style.transform = "translateY(0%)";
      }

      lastScrollY = currentScrollY;
   });
});