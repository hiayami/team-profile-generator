const Employee = require("./Employee")

class Intern extends Employee {
    role = '<i class="fa-solid fa-user-graduate"></i> Intern';
    constructor(res) {
      super(res);
      this.customAttribute = `School: ${res.customAttribute}`;
    }
  }

module.exports = Intern