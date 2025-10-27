/************************/
/* Set breadcrumbs link */
/************************/

document.addEventListener("DOMContentLoaded", () => {
   const breadcrumbsObject = {
      "Bomliftar inomhus": "/shop-bomliftar-inomhus",
      "Bomliftar utomhus": "/shop-bomliftar-utomhus",
      "Personliftar": "/shop-personliftar",
      "Larvburna liftar": "/shop-larvburna-liftar",
      "Släpvagnslift": "/shop-slapvagnslift",
      "Saxliftar inomhus": "/shop-saxliftar-inomhus",
      "Saxliftar utomhus": "/shop-saxliftar-utomhus",
      "Pelarliftar": "/shop-pelarliftar",
      "Vikbom": "/shop-vikbom",
      "Bilmonterade liftar": "/shop-bilmonterade-liftar",
      "Zip-Up Span 300": "/shop-zip-up-span-300",
      "Zip-Up Span 400": "/shop-zip-up-span-400",
      "Snappy Hantverkarställning": "/shop-snappy-hantverkarstallning",
      "Reservparts": "/shop-reservparts"
   }

   const breadcrumbsLink = document.querySelector(".product-container_breadcrumbs-button")
   if (!breadcrumbsLink) return;
   const breadcrumbsText = breadcrumbsLink.querySelector(".product-container_breadcrumbs-text").textContent;
   const breadcrumbsURL = breadcrumbsObject[breadcrumbsText];
   breadcrumbsLink.href = breadcrumbsURL;
});

/*****************************/
/* Discount price calculator */
/*****************************/

document.addEventListener("DOMContentLoaded", function () {
   // Get references to the elements
   const priceEl = document.getElementById("price");
   const compareAtPriceEl = document.getElementById("compare-at-price");
   const discountEl = document.getElementById("discount");

   // Extract the text content
   const priceText = priceEl ? priceEl.innerText : "";
   const compareAtPriceText = compareAtPriceEl
      ? compareAtPriceEl.innerText
      : "";

   // Remove any non-digit characters
   const price = parseFloat(priceText.replace(/[^0-9.]+/g, ""));
   const compareAtPrice = parseFloat(
      compareAtPriceText.replace(/[^0-9.]+/g, "")
   );

   // Make sure both numbers were parsed correctly and compareAtPrice isn't zero to avoid division errors.
   if (!isNaN(price) && !isNaN(compareAtPrice) && compareAtPrice > 0) {
      // Calculate the discount percentage and round it to the nearest whole number.
      const discountPercentage = Math.round(
         ((compareAtPrice - price) / compareAtPrice) * 100
      );

      // Place the discount value in the discount text block div
      discountEl.innerText = discountPercentage + "% off";
   }
});

/*************************/
/* Set URL for PDF links */
/*************************/

document.addEventListener("DOMContentLoaded", function () {
   setTimeout(function () {
      for (var i = 1; i <= 3; i++) {
         var urlElement = document.getElementById("pdf-url-" + i);
         if (urlElement) {
            var url = urlElement.textContent.trim();
            var downloadLink = document.getElementById("pdf-download-" + i);
            if (downloadLink) {
               downloadLink.href = url;
            }
         }
      }
   }, 1000);
});

/********************************************/
/* Description wrapper toggle is-open class */
/********************************************/

const descriptionWrappers = document.querySelectorAll(
   ".product-container_description_wrapper"
);

descriptionWrappers.forEach((wrapper) => {
   wrapper.addEventListener("click", () => {
      wrapper.classList.toggle("is-open");
   });
});

/************************************/
/* Description bullet hide if empty */
/************************************/

document.addEventListener("DOMContentLoaded", function () {
   const container = document.querySelector(
      ".product-container_description_bullet-wrapper"
   );
   if (container) {
      setTimeout(() => {
         const bullets = container.querySelectorAll(
            ".product-container_description_bullet-wrapper > *"
         );
         bullets.forEach((bullet) => {
            const bulletHeading = bullet.querySelector(
               ".product-container_description_bullet_heading"
            );
            if (
               bulletHeading &&
               bulletHeading.textContent.trim() === "Bullet title"
            ) {
               bullet.style.display = "none";
            }
         });

         for (let i = bullets.length - 1; i >= 0; i--) {
            if (bullets[i].style.display !== "none") {
               bullets[i].classList.add("is-last");
               break;
            }
         }
      }, 1000);
   }
});

/***********************/
/* Eco friendly banner */
/***********************/

/*
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      var flagElement = document.getElementById("eco-friendly-boolean");
      var bannerElement = document.getElementById("eco-friendly-banner");

      if (flagElement && bannerElement) {
        var flagValue = flagElement.textContent.trim();

        if (flagValue === "true") {
          bannerElement.style.display = "block";
          bannerElement.style.visibility = "visible";
        } else if (flagValue === "false") {
          bannerElement.style.display = "none";
          bannerElement.style.visibility = "hidden";
        }
      }
    }, 300);
  });

  /* Section link URL */
/*
  document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
      const ctaLinkContent = document.getElementById("section-cta-text").textContent;
      const ctaLinkElement = document.getElementById("section-cta-link");
      const cta1 = document.getElementById("section-cta-1");
      const cta2 = document.getElementById("section-cta-2");
      const cta1Text = document.getElementById("section-cta-1-text");
      const cta2Text = document.getElementById("section-cta-2-text");

      const ctaLink = ctaLinkElement.textContent.trim();

      cta1.href = ctaLink;
      cta2.href = ctaLink;

      cta1Text.textContent = ctaLinkContent;
      cta2Text.textContent = ctaLinkContent;
    }, 300);
  });
	*/

/*****************************/
/* Open description dropdown */
/*****************************/

document
   .querySelectorAll(".product-container_description_toggle")
   .forEach((toggle) => {
      toggle.addEventListener("click", () => {
         const desc = toggle.parentNode.querySelector(
            ".product-container_description_height"
         );
         if (!desc) return;
         desc.classList.toggle("is-open");
      });
   });

/*********************/
/* Button link hover */
/*********************/

document.addEventListener("DOMContentLoaded", () => {
   const buttons = document.querySelectorAll(".product-container_contact_cta");

   buttons.forEach((btn) => {
      const underline = btn.querySelector(
         ".product-container_contact_cta-line"
      );

      if (!underline) return;

      btn.addEventListener("mouseenter", () => {
         underline.classList.remove("animate");
         void underline.offsetWidth;
         underline.classList.add("animate");
      });

      underline.addEventListener("animationend", () => {
         underline.classList.remove("animate");
      });
   });
});

/***************************/
/* Contact popup form open */
/***************************/

// document.addEventListener("DOMContentLoaded", (event) => {
//    const popupOpenButton = document.querySelector(
//       ".product-container_contact_cta"
//    );
//    const contactPopupSection = document.querySelector(".section_contact-popup");
//    const popupCloseButton = document.querySelector(".contact-popup_close");

//    popupOpenButton.addEventListener("click", () => {
//       contactPopupSection.classList.add("is-open");
//       document.body.classList.add("is-fixed");
//    });

//    popupCloseButton.addEventListener("click", () => {
//       contactPopupSection.classList.remove("is-open");
//       document.body.classList.remove("is-fixed");
//    });
// });

/***********************/
/* Table heading class */
/***********************/

document.addEventListener("DOMContentLoaded", function () {
   setTimeout(() => {
      console.log("Heading class function");
      document.querySelectorAll("h3").forEach((heading) => {
         const next = heading.nextElementSibling;
         if (next && next.tagName === "H3") {
            heading.classList.add("full-span");
         }
      });
   }, 300);
});