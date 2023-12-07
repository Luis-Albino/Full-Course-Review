const cancellableFetch = require("./exer3.js");

test('Test exer3: cancellableFetch 1', async function () {
    const result = cancellableFetch('https://fakedomain.com/data/1')
    await result.cancel()
    await result.catch(err => expect(err.name).toEqual("AbortError"))
})

test('Test exer3: cancellableFetch 2', async function () {
    const result = cancellableFetch('https://fakedomain.com/data/1')
    await result.then(resp => expect(resp.type).toEqual("basic"))
})

test('Test exer3: cancellableFetch 3', async function () {
    const result = cancellableFetch('')
    await result.catch(err => expect(err.name).toEqual("TypeError"))
})
