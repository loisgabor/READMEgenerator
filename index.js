// array of questions for user
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: title,
  },
  {
    type: "input",
    message: "Give a description of your project.",
    name: description,
  },
  {
    type: "input",
    message: "Insert your table of contents",
    name: contents,
  },
  {
    type: "input",
    message: "Input installation guidelines",
    name: installation,
  },
  {
    type: "input",
    message: "Insert instructions for use",
    name: usage,
  },
  {
    type: "input",
    message: "Insert collaborator with links to their GitHub profile",
    name: credits,
  },
  {
    type: "input",
    message: "Insert your license",
    name: license,
  },
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
