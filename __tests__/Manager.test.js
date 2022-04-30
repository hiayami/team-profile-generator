const Manager = require("../lib/Manager")

describe('test manager class', () => {
    it("should generate manager info", () => {
        const manager = new Manager({
            name: "bob", 
            ID: "123",
            customAttribute: "2"
        })
        expect(manager.name).toEqual("bob")
        expect(manager.ID).toEqual("123")
        expect(manager.role).toContain("Manager")
        expect(manager.customAttribute).toContain("2")
        expect(manager.customAttribute).toContain("Office number:")
    })
})