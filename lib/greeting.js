const _ = require('lodash');
const chalk = require('chalk');
const inquirer = require('inquirer');


//Greeting for the user. Uses lodash so it only appears once
const greeting = _.once(async () => {
    await inquirer.prompt([
        {
            type: 'confirm',
            name: 'greeting',
            message: chalk.cyanBright(`Welcome to your coding team's HTML page-building engine. You will be presented with a series of questions unique to your team members positions starting with your Manager. You can add as many Engineer's and Intern's as you see fit but only one Manager. When you are all done a fully built HTML file will be available for your use. If you're ready begin press 'y' or enter.`),
        },
    ]);
    console.log('');
})

module.exports = greeting; 