// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

inquirer
    .prompt([
        {
            type: "input",
            message: "what is your Github username?",
            name: "username"
        },
        {
            type: "input",
            message: "what is your email address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Write a short description about your project.",
            name: "description"
        },
        {
            type: "list",
            message: "What licence is relevant to this project?",
            name: "licence",
            choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
        },
        {
            type: "input",
            message: "What command should be run to install the dependencies?",
            name: "dependencies",
            default: "npm i",
        },
        {
            type: "input";
            message: "What command should be run to run tests?",
            default: "npm test",
        },
        {
            type: "input",
            message: "What does the usere need to know about using the repo?",
            name: "repo-info",
        },
        {
            type: "input",
            message: "What does the user need to know to contribute to this repo?",
            name: "contribution"
        },
        {
            type: "input",
            message: "Enter your image url (https://github.com/your-repository/...)",
            name: "image"
        }
    ])
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
