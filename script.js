document.getElementById("fc-plus-btn").addEventListener("click", function () {
  const fcCurrentInput = document.getElementById("fc-current-input").value;
  const fcCurrentInputNumber = parseInt(fcCurrentInput);
  const fcInputShow = fcCurrentInputNumber + 1;
  document.getElementById("fc-current-input").value = fcInputShow;
  const ticketPrice = fcInputShow * 150;

  const currentSubTotal = document.getElementById("sub-Total").innerText;
  const currentSubTotalNumber = parseInt(currentSubTotal);
  const subTotal = ticketPrice + currentSubTotalNumber;
  document.getElementById("sub-Total").innerText = subTotal;
});

document.getElementById("fc-minus-btn").addEventListener("click", function () {
  const fcCurrentInput = document.getElementById("fc-current-input").value;
  const fcCurrentInputNumber = parseInt(fcCurrentInput);
  const fcInputShow = fcCurrentInputNumber - 1;
  document.getElementById("fc-current-input").value = fcInputShow;
  const ticketPrice = fcInputShow * 150;

  const currentSubTotal = document.getElementById("sub-Total").innerText;
  const currentSubTotalNumber = parseInt(currentSubTotal);
  const subTotal = currentSubTotalNumber - ticketPrice;
  document.getElementById("sub-Total").innerText = subTotal;
});
