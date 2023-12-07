function queryRetry (promiseCallback,maxRetry = 0,delay = 0,useIncrement = false) {
    let increment = useIncrement?1000:0;
    return new Promise (async (resolve,reject) => {
        try {
            const response = await promiseCallback();
            resolve(response)
            // if (response.ok) {
            //     // console.log('Successful request!');
            //     resolve(response)
            // }
            // else {
            //     console.error('Request failed! Status:', response.status);
            //     reject(response);
            // }
        }
        catch (err) {
            if (maxRetry) {
                // console.log("Request failed! Remaining attemps:",maxRetry)
                setTimeout(function () {
                    queryRetry(promiseCallback,maxRetry-1,delay+increment,useIncrement)
                    .then(resolve)
                    .catch(reject)
                },delay)
            }
            else {
                reject(err)
            }
        }
    })
}

module.exports = queryRetry;