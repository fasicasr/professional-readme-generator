// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
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
        message: 'Please choose the license for my application',
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
    },   
   ]).then(response => {
    const filename = response.username.toLowerCase().split(' ').join('');// one long string that included lowercase and space between
    
    fs.writeFile(filename,JSON.stringify(response, null, '\t'),err => //stringify your response and doing a call back by err=>
    err ? console.log(err) : console.log('success!'));



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename,JSON.stringify(response, null, '\t'),err => //stringify your response and doing a call back by err=>
    err ? console.log(err) : console.log('success!'));
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
