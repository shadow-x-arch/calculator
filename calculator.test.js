const { appendToDisplay, calculate, clearScreen } = require('./calculator');

describe('Calculator Functions', () => {
  let display;

  beforeEach(() => {
    document.body.innerHTML = '<input id="display" value="" />';
    display = document.getElementById('display');
  });

  test('appendToDisplay adds input to display', () => {
    appendToDisplay('5');
    expect(display.value).toBe('5');
    appendToDisplay('3');
    expect(display.value).toBe('53');
  });

  test('calculate evaluates the expression correctly', () => {
    display.value = '5+5';
    calculate();
    expect(display.value).toBe('10');
  });

  test('clearScreen clears the display', () => {
    display.value = '5+5';
    clearScreen();
    expect(display.value).toBe('');
  });
});
