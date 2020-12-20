const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
 
//Function for inquirer questions
const questions = (employee, alt1, alt2) => [ 
    {
        type: 'input',
        name: 'name',
        message: `What is your ${employee}'s name?`,
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


const employees = [];
//Initialization function 
const init = async (employee, alt1, alt2) => {
    try{
        let data = await inquirer.prompt(questions(employee, alt1, alt2));
        
        if (employee === 'Manager'){
            let bob = new Manager(data.name, data.id, data.email, data[alt1])
            employees.push(bob)
        }
        if (employee === 'Engineer'){
            let mike = new Engineer(data.name, data.id, data.email, data[alt1])
            employees.push(mike)
        }
        if (employee === 'Intern'){
            let steve = new Intern(data.name, data.id, data.email, data[alt1])
            employees.push(steve)
        }
        
        //change words in questions depending on what role is selected
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
       
        //Update employee variable & recursive loop
        data.others !== `I'm done` ? (employee = data.others, init(employee, alt1, alt2)) : nullgit ;
        

    }catch(err){
        console.log(err);
    }
}

init('Manager', 'officeNumber', 'office number');


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
