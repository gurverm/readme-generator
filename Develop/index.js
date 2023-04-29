// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    'What is the title of the project?',
    'Write a description of the project',
    'What are the installation instructions?',
    'Usage information:',
    'Contribution guidelines:',
    'Test instructions:',
    'Choose a license for the application:',
    'Enter your GitHub username:',
    'Enter your email address:',
];

inquirer
.prompt([
    {
        type:'input',
        message: questions[0],
        name:'Title'
    },
    {
        type:'input',
        message: questions[1],
        name:'Description'
    },
    {
        type:'input',
        message: questions[2],
        name:'Installation Intructions'
    },
    {
        type:'input',
        message: questions[3],
        name:'User Info'
    },
    {
        type:'input',
        message: questions[4],
        name:'Contribution Guidelines'
    },
    {
        type:'input',
        message: questions[5],
        name:'Test instructions'
    },
    {
        type:'input',
        message: questions[6],
        name:'License'
    },
    {
        type:'input',
        message: questions[7],
        name:'GitHub'
    },
    {
        type:'input',
        message: questions[8],
        name:'email'
    },
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
