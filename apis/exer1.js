const taskFactorySample = (delay, resolve, val) => 
       () => new Promise((res, rej)=>setTimeout(resolve?res:rej,delay, val))

function runTasks (tasks,size = tasks.length) {
    return new Promise (resolve => {
        if (size > tasks.length) size = tasks.length;
        let taskCounter = 0;
        let finishedTasks = 0;
        let arr = new Array(tasks.length);
        
        for (let i=0; i<size; i++) {
            runSingleTask(tasks[i])
        }
    
        async function runSingleTask (task) {
            let index = taskCounter;
            taskCounter++;
            task()
            .then(value => handleResponse(value,taskCounter,index))
            .catch(error => handleResponse(error,taskCounter,index))
        }
        
        function handleResponse (response,counter,index) {
            let key = (response != 'error')?'value':'error';
            finishedTasks++;
            arr[index] = {[key]:response};
            if (counter < tasks.length) runSingleTask(tasks[counter]);
            if (finishedTasks === tasks.length) resolve(arr)
        }
    })
}

module.exports = {taskFactorySample,runTasks};