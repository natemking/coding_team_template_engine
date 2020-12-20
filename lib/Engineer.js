const Employee = require('./Employee');

//Engineer class inheriting Employee class data
class Engineer extends Employee{
    constructor(name, id, email, github) {
        super (name, id, email,);
        this.github = github;
    }
    getGithub = () => this.github;
}

module.exports = Engineer;
