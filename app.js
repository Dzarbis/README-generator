const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is your project titled?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide brief steps on project installation.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide a brief list of benefits your project provides.'
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'Which license(s) does your project use?',
        choices: ['MIT License', 'APACHE 2.0', 'None']
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Please list any contributors to your project, or n/a if there are none.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How was this project tested?'
    }
]

const promptUser = () => {
    return inquirer.prompt(questions)
}

promptUser().then(answers => console.log(answers));