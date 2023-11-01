// lib/shapes.test.js
const { Triangle, Circle, Square } = require('./shapes');


// Test suite for the Triangle class.
describe('Triangle', () => {
  test('renders correct SVG', () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

// Test suite for the Circle class.
describe('Circle', () => {
  test('renders correct SVG', () => {
    const circle = new Circle();
    circle.setColor("red");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });
});

// Test suite for the Square class.
describe('Square', () => {
  test('renders correct SVG', () => {
    const square = new Square();
    square.setColor("green");
    expect(square.render()).toEqual('<rect x="35" y="10" width="230" height="180" fill="green" />');
  });
});
