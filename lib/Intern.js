const Employee = require('./Employee');

//Intern class inheriting Employee class data
class Intern extends Employee{
    constructor(name, id, email, school) {
        super (name, id, email,);
        this.school = school;
    }
    getSchool = () => this.school;
}

module.exports = Intern; 


