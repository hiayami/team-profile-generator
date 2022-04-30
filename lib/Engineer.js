const Employee = require("./Employee")

class Engineer extends Employee {
    role = '<i class="fa-solid fa-glasses"></i> Engineer';
    constructor(res) {
      super(res);
      this.customAttribute = `GitHub: ${res.customAttribute}`;
    }
  }

module.exports = Engineer