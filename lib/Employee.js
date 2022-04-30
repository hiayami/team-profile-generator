class Employee {
    name;
    ID;
    email;
    role;
    customAttribute;
    constructor(res) {
      this.name = res.name;
      this.ID = res.ID;
      this.email = res.email;
    }
  }

  module.exports = Employee