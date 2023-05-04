// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user input
const questions = [
  "What is the title of the project?",
  "Write a description of the project",
  "What are the installation instructions?",
  "Usage information:",
  "Contribution guidelines:",
  "Test instructions:",
  "Choose a license for the application:",
  "Enter your GitHub username:",
  "Enter your email address:",
];

inquirer
  .prompt([
    {
      type: "input",
      message: questions[0],
      name: "title",
    },
    {
      type: "input",
      message: questions[1],
      name: "description",
    },
    {
      type: "input",
      message: questions[2],
      name: "installation",
    },
    {
      type: "input",
      message: questions[3],
      name: "usage",
    },
    {
      type: "input",
      message: questions[4],
      name: "contributions",
    },
    {
      type: "input",
      message: questions[5],
      name: "tests",
    },
    {
      type: "list",
      message: questions[6],
      name: "license",
      choices:['mit','apache 2.0', 'GNU GPL v3.0', 'BSD-2 Clause'],
    },
    {
      type: "input",
      message: questions[7],
      name: "GitHub",
    },
    {
      type: "input",
      message: questions[8],
      name: "email",
    },
  ])

  // function to write README file
  .then((data) => {
    const readMePage = generateMarkdown(data);
    fs.writeFile("README.md", readMePage, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
