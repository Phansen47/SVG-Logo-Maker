// lib/shapes.js
class Shape {
    constructor() {
      this.color = '#000000';
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  // Creates Triangle as an extention of shape
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // Creates Circle as an extention of shape
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  
  // Creates Square as an extention of shape
  class Square extends Shape {
    render() {
      return `<rect x="35" y="10" width="230" height="180" fill="${this.color}" />`;
    }
  }
  
  
  // Exports extentions
  module.exports = {
    Triangle,
    Circle,
    Square
  };
  