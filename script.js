function ticket(classname, isIncrease) {
  const CurrentInput = document.getElementById(classname + "-current-input");
  const CurrentInputNumber = parseInt(CurrentInput.value);
  let NewInput = CurrentInputNumber;
  if (isIncrease == true) {
    NewInput = CurrentInputNumber + 1;
  }
  if (isIncrease == false && CurrentInputNumber > 0) {
    NewInput = CurrentInputNumber - 1;
  }
  CurrentInput.value = NewInput;
  calculateTotal();
}

// -------------------------------------------------------------------------

function calculateTotal() {
  const ecCurrentInput = document.getElementById("ec-current-input");
  const ecCurrentInputNumber = parseInt(ecCurrentInput.value);
  const ecTicketPrice = ecCurrentInputNumber * 100;
  const fcCurrentInput = document.getElementById("fc-current-input");
  const fcCurrentInputNumber = parseInt(fcCurrentInput.value);
  const fcTicketPrice = fcCurrentInputNumber * 150;
  const subTotal = fcTicketPrice + ecTicketPrice;
  document.getElementById("sub-total").innerText = subTotal;
  const vatOnSubtotal = subTotal * 0.1;
  document.getElementById("vat").innerText = vatOnSubtotal;
  const grandTotal = subTotal + vatOnSubtotal;
  document.getElementById("total").innerText = grandTotal;
}

// document.getElementById("sign-up-btn").addEventListener("click", function () {
//   const bookingForm = document.getElementById("booking-form");
//   bookingForm.style.display = "block";
// });
