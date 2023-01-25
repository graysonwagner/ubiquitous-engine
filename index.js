
// Inquirer Packages
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./generateMarkdown.js');

const questionsForReadme = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project README.',
        validate: (response) => {
            if (response === '') {
                return 'Nope! Please enter the title of the project.'
            }
            return true
        }   
    }, 

    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the README.',
        validate: (response) => {
            if (response === '') {
                return 'Nope! Please enter the description.'
            }
            return true
        }   
    }, 
    
    {
        type: 'input',
        name: 'gitHubRepository',
        message: 'Enter the URL link to the github repository.',
        validate: (response) => {
            if (response === '') {
                return 'Nope! Please tell give us the repository link.'
            }
            return true
        }                 
    },

    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
        validate: (response) => {
            if (response === '') {
                return 'Nope! Please type in your email.'
            }
            return true
        }                 
    },

    {
        type: 'input',
        name: 'installation',
        message: 'Enter the steps for installing this README project.',
        validate: (response) => {
            if (response === '') {
                return 'Nope! Please tell us how to install this project.'
            }
            return true
        }                 
    },

    {
        type: 'input',
        name: 'usage',
        message: 'How do you run this project?',
        validate: (response) => {
            if (response === '') {
                return 'Nope! Please tell us how to run this README project.'
            }
            return true
        }       
    },

    {
        type: 'list',
        name: 'licenses',
        message: 'What licenses do you need for this  README project?',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3'],
        default: 'MIT',
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'Please tell us how to contribute to your README project.',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please describe how to contribute to your project.'
            }
            return true
        }                 
    },
    
    {
        type: 'input',
        name: 'tests',
        message: 'Enter tests for this README project',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please tell us how to run test for this project.'
            }
            return true
        }       
    },

    {
        type: 'input',
        name: 'gitHubUsername',
        message: 'What is your github username?',
        validate: (response) => {
            if (response === '') {
                return 'Sorry! Please tell us what your github username is.'
            }
            return true
        }       
    },

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    
        if (err) {
            console.log("An error occurred")
        }
        console.log("README generated");
    })
}

const init = async () => {
    let responses = await inquirer.prompt(questionsForReadme);

    writeToFile(`./README.md`, generateMarkdown(responses));
}

init();