// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer {
    constructor(github) {
        this.github = github;
        this.getGithub = () => this.github;
        this.getRole = () => 'Employee'
    }
}

module.exports = Engineer;
