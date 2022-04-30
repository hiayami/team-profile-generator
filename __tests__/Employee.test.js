const Employee = require("../lib/Employee")

describe('test employee class', () => {
    it("should create a employee profile", () => {
        const employee = new Employee({
            name: "bob", 
            ID: "123",
        })
        expect(employee.name).toEqual("bob")
        expect(employee.ID).toEqual("123")
    })
})