function appendToDisplay(input) {
  const display = document.getElementById('display');
  display.value += input;
}

function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
    console.log("pressed");
  } catch (error) {
    display.value = "error";
  }
}

function clearScreen() {
  const display = document.getElementById('display');
  display.value = "";
  console.log("dell was pressed");
}

module.exports = { appendToDisplay, calculate, clearScreen };
