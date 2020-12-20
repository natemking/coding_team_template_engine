const Employee = require('./Employee');

//Manager class inheriting Employee class data
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber =  () => this.officeNumber;  
}

module.exports = Manager;
