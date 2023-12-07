const longestRunOfTwoNumbers = require("./exer7.js");

const input = "1212223311212223";
const output = "1121222";

test('Test exer7: longestRunOfTwoNumbers', function () {
    expect(longestRunOfTwoNumbers(input)).toEqual(output);
})