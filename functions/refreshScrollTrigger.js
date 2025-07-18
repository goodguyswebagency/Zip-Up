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