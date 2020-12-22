//Node modules
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
//Path variables
const OUTPUT_DIR = path.resolve(__dirname, './output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
const LIB_PATH = path.resolve(__dirname, './lib');
//Custom modules
  //Classes
const Manager = require(`${LIB_PATH}/Manager`);
const Engineer = require(`${LIB_PATH}/Engineer`);
const Intern = require(`${LIB_PATH}/Intern`);
  //Functions
const greeting = require(`${LIB_PATH}/greeting`)
const questions = require(`${LIB_PATH}/questions`);
const writeToFile = require(`${LIB_PATH}/writeToFile`);
const render = require(`${LIB_PATH}/htmlRenderer`);
 
//Storage array for employees add by user
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

