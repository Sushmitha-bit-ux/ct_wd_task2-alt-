const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

let currentInput = "";

function updateDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

function evaluateExpression() {
  try {
    const result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
  } catch (err) {
    display.value = "Error";
    currentInput = "";
  }
}

function clearDisplay() {
  currentInput = "";
  display.value = "";
}

// Button click event
buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const value = btn.getAttribute("data-value");
    if (value) updateDisplay(value);
  });
});

equals.addEventListener("click", evaluateExpression);
clear.addEventListener("click", clearDisplay);

// Keyboard support
document.addEventListener("keydown", (e) => {
  if ((e.key >= "0" && e.key <= "9") || ["+", "-", "*", "/", "."].includes(e.key)) {
    updateDisplay(e.key);
  } else if (e.key === "Enter") {
    evaluateExpression();
  } else if (e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (e.key.toLowerCase() === "c") {
    clearDisplay();
  }
});
