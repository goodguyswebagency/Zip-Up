import refreshListAnimations from "../functions/refreshScrollTrigger.js";

document.addEventListener("DOMContentLoaded", () => {
   const lists = document.querySelectorAll(".references_list");
   refreshListAnimations(lists);
});
