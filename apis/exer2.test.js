const queryRetry = require("./exer2.js");

const urlQuery = url => () => fetch(url)

test('Test exer2: queryRetry 1', async function () {
    await queryRetry(urlQuery('https://fakedomain.com/data/1'))
    .then(resp => expect(resp.type).toEqual("basic"))
    .catch(err => expect(err.type).toEqual("TypeError"));
})

test('Test exer2: queryRetry 2', async function () {
    await queryRetry(urlQuery('https://fakedomain.com/data/1'),1)
    .then(resp => expect(resp.type).toEqual("basic"))
    .catch(err => expect(err.type).toEqual("TypeError"));
})

test('Test exer2: queryRetry 3', async function () {
    await queryRetry(urlQuery('https://fakedomain.com/data/1'),1,1,true)
    .then(resp => expect(resp.type).toEqual("basic"))
    .catch(err => expect(err.type).toEqual("TypeError"));
})

test('Test exer2: queryRetry 4', async function () {
    await queryRetry(urlQuery('www.fakepage.com/'),1,1,false)
    .then(resp => expect(resp.type).toEqual("basic"))
    .catch(err => expect(err.type).toEqual(undefined));
})