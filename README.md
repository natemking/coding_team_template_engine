# Coding Team Template Engine
Homework #10 OOP: Template Engine - Employee Summary

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://github.com/natemking/coding_team_template_engine/blob/main/LICENSE)

![html badge](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
![css badge](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
![bootstrap badge](https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white)
![node.js badge](https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white)

---

## Table of Contents
 * [Description](#description)
    + [Scope of Work](#scope-of-work)
    + [Node.js functionality](#nodejs-functionality)
    + [HTML and CSS](#html-and-css)
  * [Screenshots](#screenshots)
  * [License](#license)
  * [Credits](#credits)

## Description

### Scope of Work
The user is looking for a CLI app that they can use to input team members and information about them respective to their roles. Once the user has input all of their pertinent data, it is then compiled for them into a stylized HTML file that can then be published as a webpage giving the user a way to access their team's information quickly. 

### Node.js Functionality
The project was given with some boilerplate work created for us. The first step was to install the npm packages that we required. The package.json had jest, for testing, and inquirer, for user prompting and inputting, pulled into the repo.

Next, I went about creating my classes for the user's employee types. Blank js files for employee, manager, engineer, and intern were provided in the ./lib folder. I chose to use classes vs constructor functions because I prefer the syntactical sugar and simplicity of classes. I feel the code is easier to read and cleaner with classes. The instructions called for employee to be the master class and to extend to the remaining three. Each of the remaining three have unique properties and methods that pertain to the individual roles. For example, managers get an office umber, engineers get GitHub handles, and interns get a school. 

Once the classes were set up, I had to run the provided tests. If there were any failures, the provided htmlRenderer.js functionality would not work. I did run into a stumbling block here. I  chose to write all the methods in the classes as arrow functions. Even though the functionality works, Jest did not like it. I was getting back an error that it was experimental syntax. To rectify this situation I had to install a babel plugin called proposal-class-properties. With that installed I then had to create a .babelrc file and add the configurations as per the plugin's documentation. Once that file was set up, all my tests passed. 

I moved onto creating the main functionality of the program. I aimed to keep the code as DRY as possible. With that, I wanted one set of questions for every user type even though there are specific questions for each user type. I was able to achieve this by making my inquirer questions a function vs just an array. Since it is a function I can pass arguments that will change certain words in the questions as per what the role selected is. The questions are then repeated by using recursion. Every time the main `init()` function is called, certain variables are updated via a switch statement before `init()` is called again. This allows for the ability to have only five questions. Since there can only be one manager, the first set of arguments when `init()` is called are for the managers. Then when the user picks intern or engineer the arguments are updated via variables. 

Since inquirer is a promise based module, I chose to go with async/await for my main `init()` function. I find it cleaner and easier to use. Also, it helps in avoiding the dreaded callback hell. Every time the user completes the questions on one of their team members, a switch statement is used to call the respective roles class and push the object to a storage array called employees. When the user has all of their team member's data inputted they can choose 'I'm done' and this ends the recursive loop and calls the `writeToFile()` function. In this function, the data argument is actually the provided htmlRenderer.js function with the employee's storage array passed as an argument. All of the team members are passed into that module and all information is rendered to a main.html file that is sent to the ./output folder of the repo. 

Once all functionality was working, I decided to take the app a step beyond the bare minimum required. I added a greeting and instructions for the user as well as a vibrant success message. Originally the `greeting()`, `questions()`, and `writeToFile()` functions were all apart of the main app.js file. I decided to split each of them out into their own modules leaving app.js as mainly the `init()` function. Lastly, I used the already setup path module to add the /lib path. Since a huge chunk of app.js is the require setups of my modules (all stored in the /lib directory), it makes updating the path easier if needed in the future. The /lib dir path now only needs to be changed in one spot vs seven.

### HTML and CSS
All of the HTML was pre-coded in the template files. The styling is provided via Bootstrap. When the main.html file is rendered, the look that came pre-coded is very plain and flat. I decided to spruce it up a bit and made changes to a few elements Bootstrap classes in their respective templates. I also added a stylesheet with some custom styles. I debated adding the style sheet inline on the main.html template but decided to go with a stylesheet. Since it sits in the output folder and this app is for a manager of a coding team, I figured the user would know how to appropriately deal with the stylesheet. I also added new fonts from Google and switched up the provided FontAwesome icons. Lastly, I updated the semantics on all of the HTML templates. Everything was coded with `<div>` tags but now there are `<header>`, `<main>`, & `<section>` tags for accessibility.

## Screenshots

![app walkt hrough](assets/images/screenshots/coding_team_template_engine.gif?raw=true)
<br>
_app walk through_
<br>

![team.html output](assets/images/screenshots/coding_team_template_engine_team_html.jpg?raw=true)
<br>
_team.html output webpage_
<br>


## License
Licensed under the GNU GPLv3.0 License. Copyright © 2020

## Credits

* [JavaScript inheritance and the Prototype chain](https://ui.dev/javascript-inheritance-and-the-prototype-chain/)

* [Babel plugin proposal class properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)

* [text Outline CSS trick](https://stackoverflow.com/questions/57464935/font-outline-using-only-css)

* [Get input field to accept only numbers](https://stackoverflow.com/questions/19508183/how-to-force-input-to-only-allow-alpha-letters)


