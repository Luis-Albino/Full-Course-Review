const { imperativeFlatten,functionalFlatten } = require("./exer8.js");

const oldObj = {
    a1: 'A1',
    a2: {
        a21: {
            a212: 'A212'
        },
        a22: 'A22'
    }
};

const newObj = {
    oldObj_a1: 'A1',
    oldObj_a2_a21_a212: 'A212',
    oldObj_a2_a22: 'A22'
};

test('Test exer8: imperativeFlatten', function () {
    expect(imperativeFlatten(oldObj, "oldObj")).toEqual(newObj)
})

test('Test exer8: functionalFlatten', function () {
    expect(functionalFlatten(oldObj, "oldObj")).toEqual(newObj)
})