function iterativeFlattenArray (input) {
    let flatten = [];
    let auxiliar = input;

    while (auxiliar.length) {
        let el;
        [el,...auxiliar] = auxiliar;

        if (Array.isArray(el)) {
            auxiliar = [...el,...auxiliar]
        }
        else {
            flatten.push(el)
        }
    }

    return flatten
}


function recursiveFlattenArray (input) {
    let flatten = []
    for (let el of input) {
        if (Array.isArray(el)) {
            flatten = [...flatten,...recursiveFlattenArray(el)]
        }
        else {
            flatten.push(el)
        }
    }
    return flatten
}

module.exports = {iterativeFlattenArray,recursiveFlattenArray}