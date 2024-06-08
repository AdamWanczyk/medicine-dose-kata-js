const { add,operation } = require("../src/playground")

describe("add",function(){

    it("5+5=10", ()=> {
        
        const result = add(5,5)
        expect(result).toBe(10)
    })

})


describe("operation",function(){

    it("5+5=10", ()=> {
        
        const result = operation(5,5,"+")
        expect(result).toBe(10)
    })

})

it("5+5=10", ()=> {
        
    const result = operation(5,5,"-")
    expect(result).toBe(0)
})

