document.addEventListener("DOMContentLoaded", () => {
   const Btn = document.querySelector(".select-btn");
   const Options = document.querySelectorAll(".option");
   const OptionsContainer = document.querySelector(".select-options");
   Btn.addEventListener("click", () => {
       OptionsContainer.classList.toggle("show");
   });
   Options.forEach((option) => {
       option.addEventListener("click", () => {
           const optionText = option.innerHTML;
           Btn.innerHTML = optionText;
           OptionsContainer.classList.remove("show");
       });
   });
   document.addEventListener("click", (event) => {
       if (!event.target.closest(".custom-select")) {
           OptionsContainer.classList.remove("show");
       }
   });
});
