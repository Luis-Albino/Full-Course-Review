const set = require("./exer18.js");

let C2 = 1;

let myObj = {
    a0: {
        b0: {
            c0: "000",
            c2: C2
        }
    }
};

let newObj = {
    a0: {
        b0: {
            c0: "000",
            c1: "001",
            c2: C2
        }
    }
};

test('Test exer18: pshorthand deep object assignment Success', function () {
    expect(set(myObj,'a0.b0.c1', "001")).toEqual(newObj)
})

test('Test exer18: pshorthand deep object assignment ERROR', function () {
    expect(set(myObj,'a0.b0.c0', "001").name).toEqual("Error")
})

test('Test exer18: pshorthand deep object assignment INVALID PATH', function () {
    expect(set(myObj,'a0.b0.c2.C2', "001").name).toEqual("Error")
})