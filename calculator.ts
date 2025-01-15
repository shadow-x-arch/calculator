function appendToDisplay(input: string): void {
  const display = document.getElementById('display') as HTMLInputElement | null;
  if (display) {
    display.value += input;
  }
}

function calculate(): void {
  const display = document.getElementById('display') as HTMLInputElement | null;
  if (display) {
    try {
      display.value = eval(display.value);
      console.log("pressed");
    } catch (error) {
      display.value = "error";
    }
  }
}

function clearScreen(): void {
  const display = document.getElementById('display') as HTMLInputElement | null;
  if (display) {
    display.value = "";
    console.log("dell was pressed");
  }
}

export { appendToDisplay, calculate, clearScreen };
