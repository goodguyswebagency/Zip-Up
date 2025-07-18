/*****************************************/
/* Heading images section GSAP animation */
/*****************************************/

gsap.registerPlugin(ScrollTrigger);

const heading = document.querySelector(".heading-images_heading");

// Grab the original child nodes (text nodes + image spans)
const originalNodes = Array.from(heading.childNodes);

// Clear out the heading so we can rebuild it
heading.innerHTML = "";

// Helper function: for a text node, split its text into words, then letters
function processTextNode(textNode) {
   const words = textNode.textContent.split(" ");
   words.forEach((word, wi) => {
      const wordSpan = document.createElement("span");
      wordSpan.classList.add("word");
      Array.from(word).forEach((letter) => {
         const letterSpan = document.createElement("span");
         letterSpan.classList.add("letter");
         letterSpan.textContent = letter;
         wordSpan.appendChild(letterSpan);
      });
      heading.appendChild(wordSpan);
      if (wi < words.length - 1) {
         heading.appendChild(document.createTextNode("\u00A0"));
      }
   });
}

// Rebuild heading, if the node is a spacer or image span, keep it as is
originalNodes.forEach((node) => {
   if (
      node.nodeType === Node.ELEMENT_NODE &&
      (node.classList.contains("heading-images_spacer-span") ||
         node.classList.contains("heading-images_span"))
   ) {
      // Re-attach the exact same image span
      heading.appendChild(node);
   } else if (node.nodeType === Node.TEXT_NODE && /\S/.test(node.textContent)) {
      // Only process non-empty text nodes
      processTextNode(node);
   }
});

// Animate all ".letter" span elements
gsap
   .timeline({
      scrollTrigger: {
         trigger: heading,
         start: "top 70%",
         end: "top 35%",
         scrub: 0.5,
      },
   })
   .to(heading.querySelectorAll(".letter"), {
      color: "rgba(48, 48, 48, 1)",
      stagger: 0.02,
      duration: 0.5,
   });

/********************/
/* Lift slider code */
/********************/

// Select elements
const gallery = document.querySelector(".swiper.is-lift-gallery");
const button = gallery.querySelector(".swiper-button-next.is-lift-slider");

gallery.addEventListener("mousemove", (e) => {
   const { left, top } = gallery.getBoundingClientRect();
   const x = e.clientX - left;
   const y = e.clientY - top;

   gsap.to(button, {
      x: x,
      y: y,
      xPercent: -50,
      yPercent: -50,
      duration: 0.3,
      ease: "power3.out",
   });
});

/********************/
/* GSAP image parallax & width animations */
/********************/

document.addEventListener("DOMContentLoaded", (event) => {
   gsap.registerPlugin(ScrollTrigger);

   // Parallax on each element with gsap-image-parallax
   document.querySelectorAll("[gsap-image-parallax]").forEach((el) => {
      gsap.to(el, {
         yPercent: -12,
         ease: "power1.out",
         scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.75,
            markers: false,
         },
      });
   });

   let initialClipPath, finalClipPath;

   if (window.innerWidth > 991) {
      initialClipPath = "inset(0 0 0 30%)";
      finalClipPath = "inset(0 0 0 0%)";
   } else {
      initialClipPath = "inset(0 30% 0 0)";
      finalClipPath = "inset(0 0% 0 0)";
   }

   // Width animation on each element with gsap-image-width
   document.querySelectorAll("[gsap-image-width]").forEach((el) => {
      // Set to 70% width
      gsap.set(el, {
         clipPath: initialClipPath,
         webkitClipPath: initialClipPath,
      });

      // Animate clip path to full width
      gsap.to(el, {
         clipPath: finalClipPath,
         webkitClipPath: finalClipPath,
         scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 35%",
            scrub: 0.75,
            markers: false,
         },
      });
   });
});