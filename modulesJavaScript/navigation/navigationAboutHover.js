document.addEventListener("DOMContentLoaded", () => {
   if (window.innerWidth) {
      // Cache links
      const aboutLink1 = document.getElementById("nav-about-link-1");
      const aboutLink2 = document.getElementById("nav-about-link-2");
      const aboutLink3 = document.getElementById("nav-about-link-3");
      const aboutLink4 = document.getElementById("nav-about-link-4");

      // Cache images
      const aboutImage1 = document.getElementById("nav-about-image-1");
      const aboutImage2 = document.getElementById("nav-about-image-2");
      const aboutImage3 = document.getElementById("nav-about-image-3");
      const aboutImage4 = document.getElementById("nav-about-image-4");
      const aboutImages = [aboutImage1, aboutImage2, aboutImage3, aboutImage4];

      // Hide all images helper function
      function hideAllImages() {
         aboutImages.forEach((image) => {
            image.classList.remove("is-open");
         });
      }

      aboutLink1.addEventListener("mouseenter", () => {
         hideAllImages();
         aboutImage1.classList.add("is-open");
      });

      aboutLink2.addEventListener("mouseenter", () => {
         hideAllImages();
         aboutImage2.classList.add("is-open");
      });

      aboutLink3.addEventListener("mouseenter", () => {
         hideAllImages();
         aboutImage3.classList.add("is-open");
      });

      aboutLink4.addEventListener("mouseenter", () => {
         hideAllImages();
         aboutImage4.classList.add("is-open");
      });
   }
});