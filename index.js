// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const Choices = require('inquirer/lib/objects/choices');
//const { title } = require('node:process');

// An array of questions for user input
const questions = [];

inquirer 
   .prompt ([
    {
       type:'input',
       message: 'What is the project title?',
       name: 'title',
    },
    {
        type:'input',
        message: 'Please enter the discription for your project?',
        name: 'discription',
    },
    {
        type:'input',
        message: 'Please enter installation instructions',
        name: 'installation',
    },
    {
        type:'input',
        message: 'Please enter usage information for your project?',
        name: 'usage',
    },
    {
        type:'input',
        message: 'Please enter the contribution guidelines for your project?',
        name: 'license',
    },
    {
        type:'input',
        message: 'Please enter the test instructions for your project?',
        name: 'test',
    },
    {
        type:'list',
        message: 'Please choose the license for your project',
        name: 'license',
        choices: ['mit', 'gpl-3.0']
    },
    {
        type:'input',
        message: 'What is your github username?',
        name: 'username',
    },
    {
        type:'input',
        message: 'What is your email?',
        name: 'email',
    }, //aarow function to generate title/header along with content into  
   ]).then(response => {
    const fileName = 'generatedREADME.md';
    var data = '# ' + response.title + '\n';
    data = data + '\n## Discription\n' + response.discription + '\n';
    data = data + '\n## Installation Instructions\n' + response.installation + '\n';
    data = data + '\n## Usage\n' + response.usage + '\n';
    data = data + '\n## License\n' + response.license+ '\n' + '![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)' + '\n';
    data = data + '\n## Question\n' + 'https://github.com/' + response.username+ '\n' + 'Any Additional' + response.email+ '\n';


    // var data = '# '+response.title+'\n \
    // # Description\n \
    // '+response.discription+'\n \
    // ## Table of Contents (Optional) \
    // If your README is long, add a table of contents to make it easy for users to find what they need. \
    // - [Installation](#installation)\
    // - [Usage](#usage) \
    // - [Credits](#credits) \
    // - [License](#license) \
    // ## Installation \
    // What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. \
    // ## Usage \
    // Provide instructions and examples for use. Include screenshots as needed. \
    // To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax: \
    //     ```md \
    //     ![alt text](assets/images/screenshot.png) \
    //     ``` \
    // ## Credits \
    // List your collaborators, if any, with links to their GitHub profiles. \
    // If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. \
    // If you followed tutorials, include links to those here as well. \
    // ## License \
    // The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/). \
    // --- \
    // 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections. \
    // ## Badges \
    // ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath) \
    // Badges arent necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what youre doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time. \
    // ## Features \
    // If your project has a lot of features, list them here. \
    // ## How to Contribute \
    // If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if youd prefer. \
    // ## Tests \
    // Go the extra mile and write tests for your application. '

    writeToFile(fileName, data)
   });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => //stringify your response and doing a call back by err=>
        err ? console.log(err) : console.log('success!'));
    
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


