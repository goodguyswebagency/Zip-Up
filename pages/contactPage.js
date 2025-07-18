import refreshListAnimations from "../functions/refreshScrollTrigger.js";

document.addEventListener("DOMContentLoaded", () => {
   const lists = document.querySelectorAll(".contact-team_list");
   refreshListAnimations(lists);
});