document.addEventListener("DOMContentLoaded", () => {
   if (window.innerWidth > 991) {
      const navigationDropdown = document.querySelector(".navigation_dropdown");
      const navigationLinks = document.querySelectorAll(".navigation_link");
      const dropdowns = document.querySelectorAll("[id^='dropdown-']");
      const navigation = document.querySelector(".navigation");

      navigationLinks.forEach((link) => {
         link.addEventListener("mouseenter", () => {
            dropdowns.forEach((drop) => drop.classList.remove("is-open"));

            if (navigationDropdown) {
               navigationDropdown.classList.add("is-open");
            }

            const parts = link.id.split("-");
            const num = parts[parts.length - 1];
            const targetDropdown = document.getElementById(`dropdown-${num}`);

            if (targetDropdown) {
               targetDropdown.classList.add("is-open");
            }

            if (navigation) {
               navigation.classList.add("is-open");
            }
         });
      });

      if (navigation) {
         navigation.addEventListener("mouseleave", () => {
            dropdowns.forEach((drop) => drop.classList.remove("is-open"));
            navigationDropdown.classList.remove("is-open");
            navigation.classList.remove("is-open");
         });
      }
   }
});