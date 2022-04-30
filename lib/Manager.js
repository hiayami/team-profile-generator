const Employee = require("./Employee")

class Manager extends Employee {
    role = '<i class="fa-solid fa-mug-hot"></i> Manager';
    constructor(res) {
      super(res);
      this.customAttribute = `Office number: ${res.customAttribute}`;
    }
  }

module.exports = Manager