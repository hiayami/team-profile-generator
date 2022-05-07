const Employee = require("./Employee")

class Engineer extends Employee {
    role = '<i class="fa-solid fa-glasses"></i> Engineer';
    constructor(res) {
      super(res);
      this.customAttribute = `GitHub: <a href="https://github.com/${res.customAttribute}">${res.customAttribute}</a>`;
    }
  }

module.exports = Engineer