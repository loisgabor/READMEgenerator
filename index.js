// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "What is your project title?",
    answer: "title",
  },
  {
    type: "input",
    message: "Give a description of your project.",
    answer: "description",
  },
  {
    type: "input",
    message: "Insert your table of contents",
    answer: "contents",
  },
  {
    type: "input",
    message: "Input installation guidelines",
    answer: "installation",
  },
  {
    type: "input",
    message: "Insert instructions for use",
    answer: "usage",
  },
  {
    type: "input",
    message: "Insert collaborator with links to their GitHub profile",
    answer: "credits",
  },
  {
    type: "input",
    message: "Insert your license",
    answer: "license",
  },
];

// function to write README file
fs.writeFile("README2.md", questions.answer, (err) =>
  err ? console.log(err) : console.log("Success")
);

// function to initialize program
function init() {}

inquirer.prompt(questions).then(function (answer) {});

console.log(answer);

// function call to initialize program
init();
