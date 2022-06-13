let prevNumber = "";
let calculationOperator = "";
let currentNumber = 0;

const updateScreen = (number) => {
  document.querySelector(".calculator-screen").value = number;
};

document.querySelectorAll(".number").forEach((number) => {
  number.addEventListener("click", (e) => {
    if (currentNumber == 0) {
      currentNumber = e.target.value;
    } else {
      currentNumber += e.target.value;
    }

    updateScreen(currentNumber);
  });
});

document.querySelector(".decimal").addEventListener("click", (e) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += e.target.value;

  updateScreen(currentNumber);
});

document.querySelectorAll(".operator").forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (calculationOperator == "") {
      prevNumber = currentNumber;
    }
    calculationOperator = e.target.value;
    currentNumber = 0;
  });
});

document.querySelector(".equal-sign").addEventListener("click", () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;

    default:
      break;
  }

  currentNumber = result;
  calculationOperator = "";

  updateScreen(currentNumber);
});

document.querySelector(".all-clear").addEventListener("click", () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = 0;

  updateScreen(currentNumber);
});
