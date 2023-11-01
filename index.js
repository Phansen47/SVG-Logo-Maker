// index.js
const readline = require('readline');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// creates readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let text, textColor, shapeColor, shape;

// sets logic for question asking
const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (input) => resolve(input));
  });
};

const createSVGContent = () => {
  // SVG header
  let svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

  // Add the shape to the SVG
  svgContent += shape.render();

  // Add the text to the SVG
  svgContent += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>`;

  // SVG footer
  svgContent += `</svg>`;

  return svgContent;
};

// saves the new SVG to the examples
const saveSVGToFile = (svgContent) => {
  fs.writeFileSync('examples/logo.svg', svgContent, 'utf8');
  console.log('Generated logo.svg');
};


// prompts
const init = async () => {
  text = await askQuestion('Enter up to three characters: ');
  textColor = await askQuestion('Enter the text color: ');
  const shapeType = await askQuestion('Choose a shape (circle, triangle, square): ');
  shapeColor = await askQuestion('Enter the shape\'s color: ');

  switch (shapeType.toLowerCase()) {
    case 'triangle':
      shape = new Triangle();
      break;
    case 'circle':
      shape = new Circle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      console.log('Invalid shape type!');
      process.exit();
  }

  shape.setColor(shapeColor);
  
  const svgContent = createSVGContent();
  saveSVGToFile(svgContent);
  
  rl.close();
};

init();
