const Engineer = require("../lib/Engineer")

describe('test engineer class', () => {
    it("should generate engineer info", () => {
        const engineer = new Engineer({
            name: "bob", 
            ID: "123",
            customAttribute: "hiayami"
        })
        expect(engineer.name).toEqual("bob")
        expect(engineer.ID).toEqual("123")
        expect(engineer.role).toContain("Engineer")
        expect(engineer.customAttribute).toContain("hiayami")
        expect(engineer.customAttribute).toContain("GitHub")
    })
})