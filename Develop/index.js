// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log("Welcome to the README generator")
console.log("Answer the following questions to create a high quality README for your project")

// TODO: Create an array of questions for user input

//array of questions
const questions = [
    {
        type: "input",
        message: "what is your Github username?",
        name: "github",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.loge('You must enter your GitHub username.');
                return false;
            }
        }
    },
    {
        type: "input",
        message: "what is your email address?",
        name: "email",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter an email address.');
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.loge('Please enter the title of your project');
                return false;
            }
        }
    },
    {
        type: "input",
        message: "Write a short description about your project.",
        name: "description",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please write a short description about your project.');
                return false;
            }
        }
    },
    {
        type: "list",
        message: "What licence is relevant to this project?",
        name: "licence",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
        defualt: ["MIT"],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please choose a license.");
                return false;
            }
        }
    },
    {
        type: "input",
        message: "What command should be run to install the dependencies?",
        name: "dependencies",
        default: "npm i",
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "test",
        default: "npm test",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage",
    },
    {
        type: "input",
        message: "What does the user need to know to contribute to this repo?",
        name: "contribution"
    },

]




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            const fileName = `README.md`
            const markdownContent = generateMarkdown(answers);
            writeToFile(fileName, markdownContent);
        }
        )
}

// Function call to initialize app
init();
