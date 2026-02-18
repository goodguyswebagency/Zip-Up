/****************************************/
/* Refresh ScrollTrigger on list filter */
/****************************************/
gsap.registerPlugin(ScrollTrigger);

export default function refreshListAnimations(lists) {
   let timeoutId;
   const ro = new ResizeObserver((entries) => {
      // Debounce multiple rapid size changes into one refresh
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
         ScrollTrigger.refresh();
      }, 100);
   });

   // Start observing each list
   lists.forEach((el) => ro.observe(el));
}

const lists = document.querySelectorAll(".shop-listing_list");
refreshListAnimations(lists);

/****************************/
/* Calculate every discount */
/****************************/

document.addEventListener("DOMContentLoaded", function () {
   // Select all items within the shop listing container.
   const items = document.querySelectorAll(
      ".shop-listing_list .shop-listing_item"
   );

   items.forEach((item) => {
      // Get the price element and extract its text.
      const priceEl = item.querySelector(".shop-listing_item_price.is-price");
      const priceText = priceEl ? priceEl.innerText : "";
      // Remove any non-digit (and non-decimal) characters to get a number.
      const price = parseFloat(priceText.replace(/[^0-9.]+/g, ""));

      // Select the compare price and discount elements if they exist.
      const comparePriceEl = item.querySelector(
         ".shop-listing_item_price.is-compare-price"
      );
      const discountEl = item.querySelector(
         ".shop-listing_item_price.is-discount"
      );

      // Continue only if the item has a compare price element and a discount element.
      if (comparePriceEl && discountEl) {
         const comparePriceText = comparePriceEl.innerText;
         const comparePrice = parseFloat(
            comparePriceText.replace(/[^0-9.]+/g, "")
         );

         // Check both prices have been parsed correctly and avoid division by zero.
         if (!isNaN(price) && !isNaN(comparePrice) && comparePrice > 0) {
            // Calculate the discount percentage, rounded to the nearest whole number.
            const discountPercentage = Math.round(
               ((comparePrice - price) / comparePrice) * 100
            );

            // If there is a discount, update the discount element text.
            if (discountPercentage > 0) {
               discountEl.innerText = discountPercentage + "% off";
            } else {
               // Optionally, if there isn't a discount, you could clear the text or hide the element.
               discountEl.innerText = "";
            }
         }
      }
   });
});

/***********************/
/* Filter sidebar open */
/***********************/

const filterSidebar = document.querySelector(".shop-listing_sidebar");
const filterSidebarOpen = document.querySelector(".shop-listing_filter-open");
const filterSidebarClose = document.querySelector(
   ".shop-listing_sidebar_close"
);

filterSidebarOpen.addEventListener("click", () => {
   if (!filterSidebar.classList.contains("is-open")) {
      filterSidebar.classList.add("is-open");
   }
});

filterSidebarClose.addEventListener("click", () => {
   if (filterSidebar.classList.contains("is-open")) {
      filterSidebar.classList.remove("is-open");
   }
});

const filterWrappers = document.querySelectorAll(
   ".shop-listing_sidebar_filter_wrapper"
);

filterWrappers.forEach((filter) => {
   const filterToggle = filter.querySelector(
      ".shop-listing_sidebar_filter_toggle"
   );
   filterToggle.addEventListener("click", () => {
      filter.classList.toggle("is-open");
   });
});

/*****************************************/
/* Hide pagination wrapper if it's empty */
/*****************************************/

document.addEventListener("DOMContentLoaded", () => {
   setTimeout(() => {
      const wrapper = document.querySelector(".pagination_button-wrapper");
      const pagination = document.querySelector(".shop-listing_pagination");

      if (!wrapper || !pagination) return;

      if (wrapper.children.length === 0) {
         pagination.classList.add("is-hidden");
      } else {
         pagination.classList.remove("is-hidden"); // ← ovo nedostaje
      }
   }, 300);
});


/************************/
/* Sidebar scroll lock  */
/************************/
filterSidebar.addEventListener('wheel', (e) => {
   e.preventDefault();
   e.stopPropagation();
   
   const formBlock = filterSidebar.querySelector('.shop-listing_form-block');
   if (formBlock) {
      formBlock.scrollTop += e.deltaY;
   }
}, { passive: false });


