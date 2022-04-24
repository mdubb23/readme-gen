// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions =  () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: "What is the title of your project?"
        },
        {
            type: 'input',
            name: 'Project Description',
            message: "Describe your project"
        },
        {
            type: 'input',
            name: 'Table of Contents',
            message: 'Provide the contents within your project'
        },
        {
            type: 'input',
            name: 'Installation',
            message: "How do you install and run your project?"
        },
    ]);
}    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
