"use strict"
const { imperativeFlatten,functionalFlatten } = require("./apis/exer8.js");

const oldObj = {
    name: 'Sara',
    gender: 'Apache Attack Helicopter',
    address: {
        location: {
            city: 'SF',
            state: 'CA'
        },
        preferredLocation: {
            city: 'SF',
            state: ['CA', 'MN']
        },
        other: undefined
    }
 };

console.log(imperativeFlatten(oldObj, "oldObj"));
console.log(functionalFlatten(oldObj, "oldObj"))