document.addEventListener("DOMContentLoaded", () => {
   if (window.innerWidth > 991) {
      const navigationDropdown = document.querySelector(".navigation_dropdown");
      const navigationLinks = document.querySelectorAll(".navigation_link");
      const dropdowns = document.querySelectorAll("[id^='dropdown-']");
      const navigation = document.querySelector(".navigation");

      // Pending close timer — used to debounce mouseleave across browsers
      // Safari fires mouseleave early when layout shifts during max-height animation,
      // so we delay the close to give it time to re-evaluate hit areas
      let closeTimer = null;

      function openDropdown(link) {
         // Cancel any pending close before opening
         if (closeTimer) {
            clearTimeout(closeTimer);
            closeTimer = null;
         }

         dropdowns.forEach((drop) => drop.classList.remove("is-open"));

         if (navigationDropdown) {
            navigationDropdown.classList.add("is-open");
         }

         const parts = link.id.split("-");
         const num = parts[parts.length - 1];
         const targetDropdown = document.getElementById(`dropdown-${num}`);

         if (targetDropdown) {
            targetDropdown.classList.add("is-open");
            const height = targetDropdown.offsetHeight + 128;
            navigationDropdown.style.maxHeight = height + "px";
         }

         if (navigation) {
            navigation.classList.add("is-open");
         }
      }

      function closeDropdown() {
         dropdowns.forEach((drop) => drop.classList.remove("is-open"));
         if (navigationDropdown) {
            navigationDropdown.classList.remove("is-open");
            navigationDropdown.style.maxHeight = "";
         }
         if (navigation) {
            navigation.classList.remove("is-open");
         }
         closeTimer = null;
      }

      function scheduleClose() {
         // 100ms buffer gives Safari time to finish layout recalculation
         // before we commit to closing the dropdown
         closeTimer = setTimeout(closeDropdown, 100);
      }

      navigationLinks.forEach((link) => {
         link.addEventListener("mouseenter", () => openDropdown(link));
      });

      if (navigation) {
         navigation.addEventListener("mouseleave", (e) => {
            // Skip if mouse is moving to a child element within the navigation —
            // Safari sometimes fires mouseleave when crossing internal boundaries
            if (navigation.contains(e.relatedTarget)) return;
            scheduleClose();
         });

         // Cancel close if mouse re-enters navigation before timer fires
         navigation.addEventListener("mouseenter", () => {
            if (closeTimer) {
               clearTimeout(closeTimer);
               closeTimer = null;
            }
         });
      }

      // Fallback for Safari edge case where mouseleave never fires on fast mouse moves:
      // check on every pointermove whether the cursor has left the navigation area
      document.addEventListener("pointermove", (e) => {
         if (!navigation || !navigation.classList.contains("is-open")) return;
         if (!navigation.contains(e.target)) {
            scheduleClose();
         }
      });
   }
});
