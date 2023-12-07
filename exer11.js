"use strict"

import { enhancedQuerySelectorAll } from "./apis/exer11.js";

document.enhancedQuerySelectorAll =  enhancedQuerySelectorAll;

console.log("Node list =",document.enhancedQuerySelectorAll("div.note < input.is-complete[checked]"));

