"use strict"
const queryRetry = require("./apis/exer2.js");

const urlQuery = url => () => fetch(url)

const maxRetry = 3;
const useIncrement = true;
const delay = 1000;

queryRetry(urlQuery('www.fakepage.com/'),maxRetry,delay,useIncrement)
    .then(resp => console.log("Reponse type =",resp.type))
    .catch(err => console.log("Error name =",err.name));

queryRetry(urlQuery('https://fakedomain.com/data/1'),maxRetry,delay,useIncrement)
    .then(resp => console.log("Reponse type =",resp.type))
    .catch(err => console.log("Error name =",err.name));
