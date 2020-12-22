const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');
const Employee = require('./lib/Employee');

const greeting = require('./lib/greeting')
const questions = require('./lib/questions');
const writeToFile = require('./lib/writeToFile');
 
//Storage array for employees
const employees = [];

//Initialization function 
const init = async (employee, alt1, alt2) => {
    try{
        //Prompt greeting but only on first iteration of recursive loop by using lodash _.once
        await greeting();
        //Questions for the user
        let data = await inquirer.prompt(questions(employee, alt1, alt2));
        
        //Push the employee objects to the employees array
        switch (employee) {
            case 'Manager':
                employees.push(new Manager(data.name, data.id, data.email, data[alt1]));
                break;
            case 'Engineer':
                employees.push(new Engineer(data.name, data.id, data.email, data[alt1]));
                break;
            case 'Intern':
                employees.push(new Intern(data.name, data.id, data.email, data[alt1]));
                break;
            default:
                break;
        }
    
        //Update langue in questions depending on what role is selected
        switch (data.others) {
            case 'Engineer':
            alt1 = 'github';
            alt2 = 'GitHub username';
                break;
            case 'Intern':
            alt1 = alt2 ='school';
                break;
            default:
                break;
        }
       
        //Update employee variable & loop until the user is done. Then export the HTML file
        data.others !== `I'm done` ? (employee = data.others, init(employee, alt1, alt2)) : writeToFile(outputPath, render(employees));

    }catch(err){
        console.log(err);
    }
}

//Initialize the app
init('Manager', 'officeNumber', 'office number');

