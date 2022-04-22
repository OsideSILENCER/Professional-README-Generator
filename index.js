const inquirer = require("inquirer");
const  generateMarkdown = require("./generateMarkdown");
const fs = require("fs");
const { type } = require("os");
// TODO: import the generateMarkdown function from utils/generateMarkdown.js

// TODO: Write code to get user input, generate markdown, and save it to a file.
inquirer.prompt([
    {
        input: "input",
        message: "What is your Project Title?",
        name: "Title",
    },
    {
        input: "input",
        message: "What was your motivation?",
        name: "Motivation",
    },
    {
        input: "input",
        message: "Why did you build this project?",
        name: "Build",
    },
    {
        input: "input",
        message: "What problem does it solve?",
        name: "Problem",
    },
    {
        input: "input",
        message: "What did you learn?",
        name: "Learn",
    },
    {
        input: "input",
        message: "What are the steps required to install your project?",
        name: "Installation",
    },
    {
        input: "input",
        message: "Provide instructions and examples for use",
        name: "Usage",
    },
    {
        input: "input",
        message: "Were there any collaborators?",
        name: "Collaborators",
    },
    {
        input: "input",
        message: "Did you use any third-party assets?",
        name: "Third party assets",
    },
    {
        input: "input",
        message: "Did you follow any tutorials?",
        name: "Tutorial",
    },
]).then((answers) => {
    generateMarkdown(answers);
});


