// fc= Firstclass

// Firstclass ticket selection
document.getElementById("fc-plus-btn").addEventListener("click", function () {
  fcticket(true);
  // const fcCurrentInput = document.getElementById("fc-current-input");
  // const fcCurrentInputNumber = parseInt(fcCurrentInput.value);
  // const fcNewInput = fcCurrentInputNumber + 1;
  // fcCurrentInput.value = fcNewInput;
  // const ticketPrice = fcNewInput * 150;
  // document.getElementById("sub-Total").innerText = ticketPrice;
});

document.getElementById("fc-minus-btn").addEventListener("click", function () {
  fcticket(false);
  // const fcCurrentInput = document.getElementById("fc-current-input");
  // const fcCurrentInputNumber = parseInt(fcCurrentInput.value);
  // if (fcCurrentInputNumber > 0) {
  //   const fcNewInput = fcCurrentInputNumber - 1;
  //   fcCurrentInput.value = fcNewInput;
  //   const ticketPrice = fcNewInput * 150;
  //   document.getElementById("sub-Total").innerText = ticketPrice;
  // }
});

// Increase & Decrease function (FirstClass ticket)
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
  const fcticketPrice = fcNewInput * 150;
  document.getElementById("sub-Total").innerText = fcticketPrice;
}
// ------------------------------------------------------------------------------------

// Economy class ticket selection

document.getElementById("ec-plus-btn").addEventListener("click", function () {
  ecticket(true);
});

document.getElementById("ec-minus-btn").addEventListener("click", function () {
  ecticket(false);
});

// Increase & Decrease function (EconomyClass ticket)
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
  const ecticketPrice = ecNewInput * 100;
  document.getElementById("sub-Total").innerText = ecticketPrice;
}
// -------------------------------------------------------------------------

// Common fnction for Increase decrease

// function economyClassTicket(isIncrease) {
//   const CurrentInput = document.getElementById("current-input");
//   const CurrentInputNumber = parseInt(CurrentInput.value);
//   let NewInput = CurrentInputNumber;
//   if (isIncrease == true) {
//     NewInput = CurrentInputNumber + 1;
//   }
//   if (isIncrease == false && CurrentInputNumber > 0) {
//     NewInput = CurrentInputNumber - 1;
//   }
//   CurrentInput.value = NewInput;
//   const ticketPrice = NewInput * 100;
//   document.getElementById("sub-Total").innerText = ticketPrice;
// }

// // test
// function fcticket(isIncrease) {
//   const fcCurrentInput = document.getElementById("fc-current-input");
//   const fcCurrentInputNumber = parseInt(fcCurrentInput.value);
//   let fcNewInput = fcCurrentInputNumber;
//   if (isIncrease == true) {
//     fcNewInput = fcCurrentInputNumber + 1;
//   }
//   if (isIncrease == false && fcCurrentInputNumber > 0) {
//     fcNewInput = fcCurrentInputNumber - 1;
//   }
//   fcCurrentInput.value = fcNewInput;
//   const fcticketPrice = fcNewInput * 150;
//   const CurrentSubtotal = document.getElementById("sub-total");
//   const currentSubtotalNumber = parseInt(CurrentSubtotal.value);
//   CurrentSubtotal.value = subtotalFinalValue;
//   const subtotalFinalValue = fcticketPrice + currentSubtotalNumber;

//   document.getElementById("sub-Total").innerText = subtotalFinalValue;
// }
// // test end
