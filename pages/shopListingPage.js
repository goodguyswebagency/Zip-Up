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

function calculateDiscounts() {
   const items = document.querySelectorAll(
      ".shop-listing_list .shop-listing_item"
   );

   items.forEach((item) => {
      const priceEl = item.querySelector(
         ".shop-listing_item_price.is-price.is-discounted"
      );
      const comparePriceEl = item.querySelector(
         ".shop-listing_item_price.has-discount"
      );
      const discountEl = item.querySelector(
         ".shop-listing_item_price.is-discount"
      );

      if (!priceEl || !comparePriceEl || !discountEl) return;

      const price = parseFloat(comparePriceEl.innerText.replace(/[^0-9.]+/g, ""));
      const discountedPrice = parseFloat(priceEl.innerText.replace(/[^0-9.]+/g, ""));

      if (!isNaN(price) && !isNaN(discountedPrice) && price > 0 && price > discountedPrice) {
         const discountPercentage = Math.round(((price - discountedPrice) / price) * 100);
         discountEl.innerText = discountPercentage > 0 ? discountPercentage + "% kampanj" : "";
      } else {
         discountEl.innerText = "";
      }
   });
}

// Pokreni na učitavanju
calculateDiscounts();

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
            const anchor = document.querySelector('[data-scroll-anchor]');
            if (!anchor) return;

            ScrollTrigger.refresh();
            anchor.scrollIntoView({ behavior: 'instant', block: 'start' });

            // Preračunaj discount za nove iteme
            calculateDiscounts();
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


