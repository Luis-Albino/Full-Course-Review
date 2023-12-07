function set(obj, path, value) {
    let currentNode = obj;
    let keys = path.split('.');

    for (let i=0; i<keys.length-1; i++) {
        let key = keys[i];
        try {
            if (!currentNode[key]) currentNode[key] = {};

            if (typeof currentNode[key] !== 'object') {
                throw new Error (`Invalid path: ${key}`)
            }
        }
        catch (error) {
            return error
        }
        currentNode = currentNode[key]
    }

    let key = keys[keys.length-1];

    try {
        if (currentNode[key]) {
            throw new Error (`Unable to overwrite an exixting key: ${key}`)
        }
    }
    catch (error) {
        return error
    }

    currentNode[key] = value

    return obj
}

module.exports = set;