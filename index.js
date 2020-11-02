// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
i = 0;

const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Give a description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Insert your table of contents",
    name: "contents",
  },
  {
    type: "input",
    message: "Input installation guidelines",
    name: "installation",
  },
  {
    type: "input",
    message: "Insert instructions for use",
    name: "usage",
  },
  {
    type: "input",
    message: "Insert collaborator with links to their GitHub profile",
    name: "credits",
  },
  {
    type: "input",
    message: "Insert your license",
    name: "license",
  },
];

// function to write README file
fs.writeFile("README2.md", questions[0].message, (err) =>
  err ? console.log(err) : console.log("Success")
);

// function to initialize program
function init() {}

inquirer.prompt(questions);

// function call to initialize program
init();
