export function sierpinskiTriangle (divisions) {
    if (divisions === 0) {
        return
    }
    else if (divisions === 1) {
        let triangle = document.createElement("DIV");
        triangle.className = "triangle";
        return triangle
    }

    let triangles = [];

    triangles[0] = sierpinskiTriangle (divisions - 1);
    triangles[0].className += " minimize";

    for (let i=1; i<3; i++) {
        triangles[i] = triangles[0].cloneNode(true)
    }

    triangles[0].className += " translated";

    let container = document.createElement("DIV");
    container.className = "container";
    let subContainer = document.createElement("DIV");
    subContainer.className = "container minimize";

    let fragment =  document.createDocumentFragment();
    fragment.appendChild(triangles[0]);
    fragment.appendChild(subContainer);
    fragment.appendChild(triangles[1]);
    fragment.appendChild(triangles[2]);
    container.appendChild(fragment)

    return container
};