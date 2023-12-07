const { iterativeFlattenArray, recursiveFlattenArray } = require("./exer9.js");

const input = [1,2,3,[4,5,[6,[[7]],8]],[9,10]];
const output = [1,2,3,4,5,6,7,8,9,10]

test('Test exer9: recursiveFlattenArray', function () {
    expect(recursiveFlattenArray(input)).toEqual(output)
})

test('Test exer9: iterativeFlattenArray', function () {
    expect(iterativeFlattenArray(input)).toEqual(output)
})