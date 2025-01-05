"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendToDisplay = appendToDisplay;
exports.calculate = calculate;
exports.clearScreen = clearScreen;
function appendToDisplay(input) {
    var display = document.getElementById('display');
    if (display) {
        display.value += input;
    }
}
function calculate() {
    var display = document.getElementById('display');
    if (display) {
        try {
            display.value = eval(display.value); // Note: eval is potentially dangerous; use a safer alternative in production.
            console.log("pressed");
        }
        catch (error) {
            display.value = "error";
        }
    }
}
function clearScreen() {
    var display = document.getElementById('display');
    if (display) {
        display.value = "";
        console.log("dell was pressed");
    }
}
