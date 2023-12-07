"use strict"

import { sierpinskiTriangle } from "./apis/exer20.js";


function displaySierpinski (event) {
    event.preventDefault();

    let sierpinski = document.getElementById("sierpinski");
    while (sierpinski.children[0]){
        sierpinski.children[0].remove()
    }
    
    let divisions = document.getElementById("division").value;
    divisions = Number(divisions);
    if (divisions) sierpinski.appendChild(sierpinskiTriangle(divisions));
}

document.getElementById("drawBtn").addEventListener("click",displaySierpinski)