const {taskFactorySample,runTasks} = require ('./exer1.js');

let tasks = [
    taskFactorySample(15,true, 1),
    taskFactorySample(10,true, 2),
    taskFactorySample(5,false, 'error')
];

const finishedTasks = [
    {value: 1},
    {value: 2},
    {error: 'error'}
]

test('Test exer1: pool_size < tasks.length', async function () {
    await runTasks(tasks,2)
    .then(array => expect(array).toEqual(finishedTasks));
})

test('Test exer1: pool_size > tasks.length', async function () {
    await runTasks(tasks,6)
    .then(array => expect(array).toEqual(finishedTasks));
})

test('Test exer1: pool_size = undefined', async function () {
    await runTasks(tasks)
    .then(array => expect(array).toEqual(finishedTasks));
})