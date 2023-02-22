const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
      type: 'input',
      name: 'fileName',
      message: "What should be the file name?",
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Please provide a description of your project.",
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please provide installation instructions for your project.",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please provide usage information for your project.",
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Please provide contribution guidelines for your project.",
    },
    {
        type: 'input',
        name: 'tests',
        message: "Please provide test instructions for your project.",
    },
    {
        type: 'list',
        name: 'license',
        message: "What license do you want to use for your project?",
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
    },
];
  

// function to write README file
function writeToFile(fileName, data) {
  // Call the generateMarkdown function with the data object to generate the markdown content
  const content = generateMarkdown(data);
  
  // Write the markdown content to a file with the provided file name
  fs.writeFile(fileName, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`README file created at ${fileName}`);
    }
  });
}

// function to initialize program
function init() {
    // Ask the user the questions defined in the questions array
    inquirer.prompt(questions).then((answers) => {
      // Create the file name
      const fileName = `${answers.fileName}.md`;
      writeToFile(fileName, answers);
    });
}

// function call to initialize program
init();
