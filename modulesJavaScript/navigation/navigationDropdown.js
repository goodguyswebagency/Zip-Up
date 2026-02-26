document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 991) {
    const navigationDropdown = document.querySelector(".navigation_dropdown");
    const navigationLinks = document.querySelectorAll(".navigation_link");
    const dropdowns = document.querySelectorAll(".navigation_dropdown_grid, .navigation_dropdown_grid-2, .navigation_dropdown_grid-3");
    const navigation = document.querySelector(".navigation");
    const overflow = navigationDropdown.querySelector(".navigation_overflow");

    navigationLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        const parts = link.id.split("-");
        const num = parts[parts.length - 1];
        const targetDropdown = document.getElementById(`dropdown-${num}`);

        // Sakrij sve gridove odmah (bez tranzicije)
        dropdowns.forEach((drop) => {
          drop.style.position = "absolute";
          drop.style.visibility = "hidden";
          drop.classList.remove("is-open");
        });

        if (targetDropdown) {
          // Privremeno prikaži target da izmjerimo visinu
          targetDropdown.style.position = "relative";
          targetDropdown.style.visibility = "hidden";
          targetDropdown.style.display = "grid";
          const targetHeight = targetDropdown.offsetHeight;

          // Postavi visinu na overflow wrapper
          overflow.style.height = targetHeight + "px";

          // Sada ga normalno prikaži
          targetDropdown.style.position = "relative";
          targetDropdown.style.visibility = "visible";
          targetDropdown.classList.add("is-open");
        }

        navigationDropdown.classList.add("is-open");
        navigation.classList.add("is-open");
      });
    });

    if (navigation) {
      navigation.addEventListener("mouseleave", () => {
        dropdowns.forEach((drop) => {
          drop.style.position = "absolute";
          drop.style.visibility = "hidden";
          drop.classList.remove("is-open");
        });
        overflow.style.height = "0px";
        navigationDropdown.classList.remove("is-open");
        navigation.classList.remove("is-open");
      });
    }
  }
});
