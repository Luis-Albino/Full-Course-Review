function imperativeFlatten (oldObj, parentName){
    let newObj = {};

    for (let key in oldObj) {
        if (typeof oldObj[key] === "object" && !Array.isArray(oldObj[key])) {
            let flattenObj = imperativeFlatten(oldObj[key],key);
            for (let newKey in flattenObj) {
                newObj[parentName+"_"+[newKey]] = flattenObj[newKey];
            }
        }
        else {
            newObj[parentName+"_"+key] = oldObj[key];
        }
    }

    return newObj
}

function functionalFlatten (oldObj, parentName){
    return Object.keys(oldObj).reduce((newObj,key) => {
        if (typeof oldObj[key] === "object" && !Array.isArray(oldObj[key])) {
            newObj = {...newObj,...functionalFlatten(oldObj[key],`${parentName}_${key}`)}
        }
        else {
            newObj[`${parentName}_${key}`] = oldObj[key]
        }

        return newObj
    },{})
}

module.exports = {imperativeFlatten,functionalFlatten};