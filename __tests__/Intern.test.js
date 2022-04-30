const Intern = require("../lib/Intern")

describe('test intern class', () => {
    it("should generate intern info", () => {
        const intern = new Intern({
            name: "bob", 
            ID: "123",
            customAttribute: "SU"
        })
        expect(intern.name).toEqual("bob")
        expect(intern.ID).toEqual("123")
        expect(intern.role).toContain("Intern")
        expect(intern.customAttribute).toContain("SU")
        expect(intern.customAttribute).toContain("School:")
    })
})