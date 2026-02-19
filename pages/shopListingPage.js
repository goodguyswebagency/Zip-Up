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
   const items = document.querySelectorAll(
      ".shop-listing_list .shop-listing_item"
   );

   items.forEach((item) => {
      const priceEl = item.querySelector(".shop-listing_item_price.is-price");
      const comparePriceEl = item.querySelector(
         ".shop-listing_item_price.is-compare"
      );
      const discountEl = item.querySelector(
         ".shop-listing_item_price.is-discount"
      );

      if (!priceEl) return;

      const priceText = priceEl.innerText.trim();
      const price = parseFloat(priceText.replace(/[^0-9.]+/g, ""));

      // Ako je cijena 0 ili prazna → Kontakta för offert
      if (!price || price === 0) {
         priceEl.innerText = "Kontakta för offert";
         priceEl.classList.add("no-price");
         if (discountEl) discountEl.style.display = "none";
         if (comparePriceEl) comparePriceEl.style.display = "none";
         return;
      }

      // Nema compare price → sakrij i is-price i is-discount
      if (
         !comparePriceEl ||
         comparePriceEl.classList.contains("w-dyn-bind-empty") ||
         comparePriceEl.innerText.trim() === ""
      ) {
         priceEl.style.display = "none"; // sakrij precrtanu
         comparePriceEl.style.display = "none"; // samo ako postoji
         if (discountEl) discountEl.style.display = "none";
         return;
      }

      const comparePrice = parseFloat(
         comparePriceEl.innerText.replace(/[^0-9.]+/g, "")
      );

      // Ima compare price → prikaži sve
      if (
         !isNaN(price) &&
         !isNaN(comparePrice) &&
         price > 0 &&
         price > comparePrice
      ) {
         priceEl.style.display = "";        // prikaži precrtanu
         comparePriceEl.style.display = ""; // prikaži akcijsku
         
         const discountPercentage = Math.round(
            ((price - comparePrice) / price) * 100
         );
         if (discountEl) {
            discountEl.style.display = discountPercentage > 0 ? "" : "none";
            discountEl.innerText = discountPercentage > 0 ? discountPercentage + "% off" : "";
         }
      } else {
         // compare postoji ali nije manji od price → sakrij oboje
         priceEl.style.display = "none";
         comparePriceEl.style.display = "none";
         if (discountEl) discountEl.style.display = "none";
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
   const wrapper = document.querySelector(".pagination_button-wrapper");
   const pagination = document.querySelector(".shop-listing_pagination");

   if (!wrapper || !pagination) return;

   const updatePagination = () => {
      if (wrapper.children.length === 0) {
         pagination.classList.add("is-hidden");
      } else {
         pagination.classList.remove("is-hidden");
      }
   };

   // Provjeri odmah
   updatePagination();

   // Posmatraj promjene u wrapperu
   const observer = new MutationObserver(updatePagination);
   observer.observe(wrapper, { childList: true });
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

/*****************************/
/* Pagination scroll to top  */
/*****************************/

window.fsAttributes = window.fsAttributes || [];
window.fsAttributes.push([
   'cmsload',
   (listInstances) => {
      listInstances.forEach((list) => {
         list.on('renderitems', () => {
            const anchor = document.querySelector('.shop-listing_heading');
            if (!anchor) return;

            // 1. Refresh ScrollTrigger PRIJE scrolla da ga neutralizujemo
            ScrollTrigger.refresh();

            // 2. Instant scroll — ne može biti prekinut
            anchor.scrollIntoView({ behavior: 'instant', block: 'start' });
         });
      });
   },
]);

/*****************************/
/* Filter sidebar actions    */
/*****************************/

// View — zatvori sidebar
document.addEventListener('click', (e) => {
   if (e.target.closest('[data-filter="view"]')) {
      filterSidebar.classList.remove('is-open');
   }
});

// Clear — koristi Finsweet API
document.addEventListener('click', (e) => {
   if (e.target.closest('[data-filter="clear"]')) {
      window.fsAttributes = window.fsAttributes || [];
      window.fsAttributes.push([
         'cmsfilter',
         (filterInstances) => {
            filterInstances.forEach((instance) => instance.resetFilters());
         },
      ]);
   }
});

// Applied filters heading
const appliedHeading = document.querySelector(
   '.shop-listing_sidebar_heading-wrapper .shop-listing_sidebar_heading'
);
const activeWrapper = document.querySelector(
   '.shop-listing_sidebar_filter-active-wrapper'
);

if (appliedHeading && activeWrapper) {
   const updateAppliedHeading = () => {
      const hasActive = activeWrapper.children.length > 0;
      appliedHeading.textContent = hasActive ? 'Applied filters' : 'No filter selected';
      activeWrapper.style.paddingBottom = hasActive ? '1rem' : '';
   };

   updateAppliedHeading();

   new MutationObserver(updateAppliedHeading).observe(activeWrapper, {
      childList: true,
   });
}


