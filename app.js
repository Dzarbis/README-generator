const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown')

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project titled?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide a brief list of benefits your project provides.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide brief steps on project installation.'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please list any contributors to your project, or n/a if there are none.'
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Which license(s) does your project use?',
        choices: ['MIT License', 'GNUGPLv3', 'None']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How was this project tested?'
    }
]

function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

function promptUser() {
    inquirer.prompt(questions)
        .then((data) => writeToFile('createdREADME.md', generateMarkdown(data)))
        .then(() => console.log('README created!'))
        .catch((err) => console.log(err))
}

promptUser();