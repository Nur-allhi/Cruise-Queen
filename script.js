function fcticket(isIncrease) {
  const fcCurrentInput = document.getElementById("fc-current-input");
  const fcCurrentInputNumber = parseInt(fcCurrentInput.value);
  let fcNewInput = fcCurrentInputNumber;
  if (isIncrease == true) {
    fcNewInput = fcCurrentInputNumber + 1;
  }
  if (isIncrease == false && fcCurrentInputNumber > 0) {
    fcNewInput = fcCurrentInputNumber - 1;
  }
  fcCurrentInput.value = fcNewInput;
  calculateTotal();
}

function ecticket(isIncrease) {
  const ecCurrentInput = document.getElementById("ec-current-input");
  const ecCurrentInputNumber = parseInt(ecCurrentInput.value);
  let ecNewInput = ecCurrentInputNumber;
  if (isIncrease == true) {
    ecNewInput = ecCurrentInputNumber + 1;
  }
  if (isIncrease == false && ecCurrentInputNumber > 0) {
    ecNewInput = ecCurrentInputNumber - 1;
  }
  ecCurrentInput.value = ecNewInput;
  calculateTotal();
}
// -------------------------------------------------------------------------

function calculateTotal() {
  // const ecInput = getInputValue();
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
document.getElementById("booking-btn").addEventListener("click", function () {
  const bookingForm = document.getElementById("booking-form");
  bookingForm.style.display = "none";
});

document.getElementById("sign-up-btn").addEventListener("click", function () {
  const bookingForm = document.getElementById("booking-form");
  bookingForm.style.display = "block";
});
