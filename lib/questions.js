//Function for inquirer questions
const questions = (employee, alt1, alt2) => [ 
    {
        type: 'input',
        name: 'name',
        message: `What is your ${employee}'s name?`
    },
    {
        type: 'input',
        name: 'id',
        message: `What is your ${employee}'s ID number?`,
        validate: (value) => value.match(/^\d*$/) ? true : 'Please enter a number'
    },
    {
        type: 'input',
        name: 'email',
        message: `What is your ${employee}'s email?`,
        validate: (value) => value.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) ? true : 'Please enter a valid email address'
    },
    {
        type: 'input',
        name: `${alt1}`,
        message: `What is your ${employee}'s ${alt2}?`,
    },
    {
        type: 'list',
        name: 'others',
        message: 'Which team member role would you like to add?',
        choices: ['Engineer', 'Intern', `I'm done`]
    },
]

module.exports = questions;