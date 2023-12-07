function cancellableFetch (url) {
    const controller = new AbortController();
    const signal = controller.signal;

    let promise = new Promise (async (resolve,reject) => {
        try {
            const response = await fetch(url,{signal});
            resolve(response)
            // if (response.ok) {
            //     resolve(response)
            // }
            // else {
            //     console.error('Request failed! Status:', response.status);
            //     reject(response);
            // }
        }
        catch (err) {
            if (err.name === 'AbortError') {
                console.log('Request canceled');
            }
            else {
                console.error('Request failed:', err.name);
            }
            reject(err)
        }
    })

    promise.cancel = function () {
        controller.abort()
    };

    return promise
}

module.exports = cancellableFetch;