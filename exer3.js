"use strict"
const cancellableFetch = require("./apis/exer3.js");

const result1 = cancellableFetch('https://fakedomain.com/data/1')
result1.then(console.log).catch(err => console.log("request 1 error.name =",err.name));

const result2 = cancellableFetch('https://fakedomain.com/data/2')
result2.then(response => console.log("request 2 resonse.type =",response.type)).catch(err => console.log("request 2 error.name =",err.name));

result1.cancel()

const result3 = cancellableFetch('')
result3.then(response => console.log("request 3 resonse.type =",response.type)).catch(err => console.log("request 3 error.name =",err.name));


