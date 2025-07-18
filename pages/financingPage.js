// This function updates the displayed selected amount, calculates the monthly payment, and updates the slider background to reflect the progress.
function updateSliderAndPayment() {
   // Get the range input and display elements.
   const rangeInput = document.getElementById("loan-range");
   const selectedAmountDiv = document.getElementById("selected-amount");
   const monthlyAmountDiv = document.getElementById("monthly-amount");

   // Get the current value from the input as an integer.
   const amount = parseInt(rangeInput.value, 10);

   // Display the selected amount.
   selectedAmountDiv.textContent = amount.toLocaleString();

   // Calculate the monthly payment by dividing the amount by 12.
   const monthlyPayment = Math.floor(amount / 12);

   // Display the calculated monthly payment.
   monthlyAmountDiv.textContent = monthlyPayment.toLocaleString();

   // Calculate the percentage of the current value.
   const valuePercent =
      ((rangeInput.value - rangeInput.min) /
         (rangeInput.max - rangeInput.min)) *
      100;

   // Update the slider's background gradient to reflect the progress.
   rangeInput.style.setProperty("--range-progress", `${valuePercent}%`);
}

document.addEventListener("DOMContentLoaded", function () {
   const rangeInput = document.getElementById("loan-range");
   if (rangeInput) {
      // Update the payment info and slider progress when the slider changes.
      rangeInput.addEventListener("input", updateSliderAndPayment);

      // Initialize the display and slider styling with the default value.
      updateSliderAndPayment();
   }
});