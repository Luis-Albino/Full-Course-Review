(function(global){
    let root = document.getElementById('results');

    const result = (text, pass) => {
        const el = document.createElement('li');
        el.textContent = text;
        pass!== undefined && (el.style.color = pass? 'green' : 'red');
        return el;
    }

    const assert = (pass, message) => root.appendChild(result(message,pass));

    function test(description, testBlock){
        const parent = root;
        root = assert(undefined, description)
                .appendChild(document.createElement('ul'));
        let thisRoot = root;
        (function () {
            let strTestBlock = `function newTestBlock () { 
                return ${testBlock.toString()}
            }`;
            
            let assert = (pass, message) => thisRoot.appendChild(result(message,pass));
            eval(strTestBlock);
            return newTestBlock()
        })()()
        root = parent;
    }
    global.assert = assert;
    global.test = test;
 })(window);