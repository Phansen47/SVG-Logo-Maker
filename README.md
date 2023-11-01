# SVG Image Generator [![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description
The SVG Image Generator is a Node.js command-line application that leverages the Express.js framework to prompt users for input and generate custom SVG images. It uses the Inquirer package for collecting user input and Jest for running tests on the shape classes.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
To use the SVG Image Generator, you need to have Node.js and npm (Node Package Manager) installed on your computer. If you do not have Node.js installed, you can download it from [nodejs.org](https://nodejs.org/). 

Follow these steps to install the application:
1. Clone the repository to your local machine.
2. Navigate to the application directory in the terminal.
3. Run `npm init -y` to initialize the project with a `package.json` file.
4. Install Express.js by running `npm install express`.
5. Install the Jest package with `npm --save-dev jest`.
6. To begin the application, execute `node index.js` in the terminal.

## Usage
Start the program by executing `node index.js` in the terminal from within the project directory. The application will prompt you for text (up to three characters), text color, shape selection (circle, triangle, or square), and shape color. Once all inputs are entered, the application generates a `logo.svg` file and prints "Generated logo.svg" to the command line. The `logo.svg` can be viewed in a web browser, displaying a 300x200 pixel image based on the provided criteria.

## License
This project is licensed under the MIT License.

## Contributing
Contributions to improve the SVG Image Generator are encouraged. Please feel free to fork the repository, make changes, and submit a pull request, or open an issue for discussion.

## Tests
Jest is used for testing in this project. To run the tests, navigate to the root of the project directory and execute `npm test`. This will run the Jest test suites that check the functionality of the shape classes and their methods.

## Questions
For any questions or further discussion, please contact me:

- GitHub: [Phansen47](https://github.com/Phansen47)
- Email: paxtonstanleyhansen@gmail.com
