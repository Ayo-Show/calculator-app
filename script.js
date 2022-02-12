const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};


function updateDisplay() {
  const display = document.querySelector('.calculator-screen');
  // update the value of the element with the contents of `displayValue`
  display.value = calculator.displayValue;
}

updateDisplay();