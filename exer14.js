"use strict"

// const matrix = [
//     [0,1,1,0,1,0],
//     [0,1,1,1,1,0],
//     [0,0,1,1,1,0],
//     [0,1,1,1,0,0]
// ]

const matrix = [
    [0,0,0,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,1,1,0,0,0],
]

function greatestArea (matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    let height = new Array(columns).fill(0);
    let width = new Array(columns);
    let maxArea = 0;
    
    for (let i=0; i<rows; i++) {
        width.fill(0);
        for (let j=0; j<columns; j++) {
            height[j] = matrix[i][j]?height[j]+1:0;
            if (height[j]) {
                width[j] = 1;
                for (let k=j-1; k>=0; k--) {
                    if (height[j] === height[k]) {
                        width[j] += width[k];
                        break
                    }
                    else if (height[j] < height[k]) {
                        width[j]++;
                    }
                    else {
                        break
                    }
                }
            }
        }

        let currentArea;

        for (let j=0; j<columns; j++) {
            for (let k=j+1; k<columns; k++) {
                if (height[j] && height[k] && height[j] <= height[k]) {
                    width[j]++;
                }
                else {
                    break
                }
            }
            
            currentArea = height[j]*width[j];

            if (currentArea > maxArea) maxArea = currentArea;
        }
    }

    return maxArea
}

console.log(greatestArea(matrix))