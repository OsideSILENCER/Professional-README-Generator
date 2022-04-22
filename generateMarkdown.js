// TODO: Add code to generate markdown for README given a data object parameter containing the user input.
const inquirer = require("inquirer");
const generateMarkdown = () => {};
const fs = require("fs");
  
function generateMarkdown(generateMarkdown,data) {
    return `# ${generateMarkdown.title}
  
  `;
  }
  
  fs.writeFile("index.html", data, (err) => {
      if (err) {
          console.log(err);
      } else {
          console.log("index.html Created!" )

      }
}
  );

  module.exports = generateMarkdown;
  