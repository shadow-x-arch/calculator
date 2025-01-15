global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('UI Tests', () => {
  let dom;
  let container;

  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    container = dom.window.document.body;
  });

  test('renders calculator display', () => {
    const display = container.querySelector('#display');
    expect(display).not.toBeNull();
  });

  test('adds number to display on button click', () => {
    const buttons = container.querySelectorAll('button');
    const button7 = Array.from(buttons).find(button => button.textContent === '7');
    button7.click();
    const display = container.querySelector('#display');
    expect(display.value).toBe('7');
  });

});
