/****************************************/
/* Refresh ScrollTrigger on list filter */
/****************************************/
gsap.registerPlugin(ScrollTrigger);

function refreshListAnimations(lists) {
   let timeoutId;
   const ro = new ResizeObserver((entries) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
         ScrollTrigger.refresh();
      }, 100);
   });

   lists.forEach((el) => ro.observe(el));
}

const lists = document.querySelectorAll(".shop-listing_list");
refreshListAnimations(lists);

/***********************/
/* Filter sidebar open */
/***********************/

const filterSidebar = document.querySelector(".shop-listing_sidebar");
const filterSidebarOpen = document.querySelector(".shop-listing_filter-open");
const filterSidebarClose = document.querySelector(".shop-listing_sidebar_close");

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

const filterWrappers = document.querySelectorAll(".shop-listing_sidebar_filter_wrapper");

filterWrappers.forEach((filter) => {
   const filterToggle = filter.querySelector(".shop-listing_sidebar_filter_toggle");
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

   updatePagination();

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
         });
      });
   },
]);

/*****************************/
/* Filter sidebar actions    */
/*****************************/

// View — zatvori sidebar i postavi tekst
document.addEventListener('click', (e) => {
   const viewBtn = e.target.closest('[data-filter="view"]');
   if (viewBtn) {
      filterSidebar.classList.remove('is-open');
      viewBtn.textContent = 'Visa';
   }
});

// Clear — koristi Finsweet API i postavi tekst
document.addEventListener('click', (e) => {
   const clearBtn = e.target.closest('[data-filter="clear"]');
   if (clearBtn) {
      clearBtn.textContent = 'Rensa alla';
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
      appliedHeading.textContent = hasActive ? 'Valda filter' : 'Inget filter valt';
      activeWrapper.style.paddingBottom = hasActive ? '1rem' : '';
   };

   updateAppliedHeading();

   new MutationObserver(updateAppliedHeading).observe(activeWrapper, {
      childList: true,
   });
}
