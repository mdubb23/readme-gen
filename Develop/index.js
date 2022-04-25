// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: "What is the title of your project?"
        },
        {
            type: 'input',
            name: 'description',
            message: "Describe your project"
        },
        {
            type: 'input',
            name: 'installation',
            message: "How do you install and run your project?"
        },
        {
            type: 'input',
            name: 'usage',
            message: "How is this application used?"
        },
        {
            type: 'input',
            name: 'contributors',
            message: "contributors"
        },
        {
            type: 'input',
            name: 'tests',
            message: "provide testing instructions?"
        },
        {
            type: 'input',
            name: 'email',
            message: "provide your Email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "provide your github username?"
        },
        {
            type: 'list',
            name: 'license',
            message: "what license would you like to use?",
            choices: [
                'Apache License 2.0',
                'MIT License',
                'Boost Software License 1.0',
                'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicense'
            ]
        }
    ]; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('generatedMarkdown.md', generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        // data.getLicense = getLicense(data.license);
        writeToFile("./example/README.md", data);
    });
}

// Function call to initialize app
init();