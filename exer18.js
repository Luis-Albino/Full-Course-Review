"use strict"

const set = require("./apis/exer18.js");

let myObj = {
    a0: {
        b0: {
            c0: "000",
            c1: "001"
        },
        b1: {
            c0: "010",
            c1: "011"
        }
    },
    a1: {
        b0: {
            c0: "100",
            c1: "101"
        },
        b1: {
            c0: "110",
            c1: "111"
        }
    }
}


console.log(set(myObj,'a1.b1.c2', "102"));