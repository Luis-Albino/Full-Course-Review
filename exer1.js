"use strict"
const {taskFactorySample,runTasks} = require('./apis/exer1.js');
       
const tasks = [
   taskFactorySample(5,true, 1),
   taskFactorySample(10,true, 2),
   taskFactorySample(50,false, 'error'),
   taskFactorySample(20,true, 4),
   taskFactorySample(10,false, 'error'),
   taskFactorySample(10,false, 'error'),
];

const pool_size = 2;

runTasks(tasks, pool_size).then(console.log);


module.exports = taskFactorySample;