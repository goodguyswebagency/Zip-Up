document.addEventListener("DOMContentLoaded", () => {
   if (window.innerWidth > 991) {
      const navigationDropdown = document.querySelector(".navigation_dropdown");
      const navigationLinks = document.querySelectorAll(".navigation_link");
      const dropdowns = document.querySelectorAll("[id^='dropdown-']");
      const navigation = document.querySelector(".navigation");

      // Pending close timer — debounces mouseleave to prevent Safari from
      // closing the dropdown prematurely during layout reflows
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
         const targetDropdown = document.getElementById("dropdown-" + num);

         if (targetDropdown) {
            targetDropdown.classList.add("is-open");
            // Read height after is-open is applied so Safari gets correct value
            requestAnimationFrame(() => {
               const height = targetDropdown.offsetHeight + 128;
               navigationDropdown.style.maxHeight = height + "px";
            });
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
         // 150ms buffer gives Safari time to finish hit-area recalculation
         // after layout shifts caused by max-height animation
         closeTimer = setTimeout(closeDropdown, 150);
      }

      navigationLinks.forEach((link) => {
         link.addEventListener("mouseenter", () => openDropdown(link));
      });

      if (navigation) {
         navigation.addEventListener("mouseleave", (e) => {
            // relatedTarget check: skip if mouse moves to a child element —
            // Safari fires spurious mouseleave events when crossing internal boundaries
            if (e.relatedTarget && navigation.contains(e.relatedTarget)) return;
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
   }
});
