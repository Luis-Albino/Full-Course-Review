const mergeArrays = require("./exer4.js");

const mainArray = [1,3].concat(new Array(2));
const allowedArray = [0,2];
const forbiddenArray = [2,4,5];


test('Test exer4: mergeArrays successful', function () {
    let newArray =  mergeArrays(mainArray, allowedArray)
    expect(newArray).toEqual([0,1,2,3]);
})

test('Test exer4: mergeArrays fail', function () {
    let newArray =  mergeArrays(mainArray, forbiddenArray)
    expect(newArray).toEqual(undefined);
})