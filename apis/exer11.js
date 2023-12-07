export function enhancedQuerySelectorAll  (selector) {

    let depth = 0;

    if (typeof selector === "string") {
        let selectorType = selector.match(/[<>]/g);

        if (selectorType.length > 1) {
            try {
                for (let i=1; i<selectorType.length; i++) {
                    if (selectorType[i] !== selectorType[0]) 
                    throw new Error(`Failed to execute 'enhancedQuerySelectorAll' on 'Document': '${selector}' is not a valid selector.`)
                }
            }
            catch (error) {
                console.error(error)
                return
            }
        }

        if (selectorType[0] === "<") depth = selectorType.length;
    }
    
    if (depth) selector = selector.replaceAll("<",">");
    
    let nodeList = document.querySelectorAll(selector);

    for (let i=0; i<depth; i++) {
        if (i === 0) nodeList = [...nodeList];
        nodeList = nodeList.map((node) => node.parentNode)
    }

    return nodeList
}