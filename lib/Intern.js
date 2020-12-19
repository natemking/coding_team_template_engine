// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern {
    constructor(school) {
        this.school = school;
        this.getSchool = () => this.school;
        this.getRole = () => 'Intern';
    }
}

module.exports = Intern; 
