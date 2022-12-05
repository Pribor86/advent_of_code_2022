const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

const inputArray = input.split(/\n\s*\n/);

let crateArray = inputArray[0]
    .split('\n')
    .map((line) => [...line]
        .filter((value, index) => index % 4 === 1 ));

let actionArray = inputArray[1]

let actionArrayLines = actionArray.split('\n')

let numbers = actionArrayLines.map((line) => line.match(/\d+/g))

numbers.pop()

console.log(inputArray[0])

let indexes = crateArray.pop();
let column = {}

for (let line of crateArray) {
    for (let i = 0; i < line.length; i++) {
        if (line[i] !== ' ') {
             if (!column[indexes[i]]) {
                 column[indexes[i]] = []
             }
             column[indexes[i]].unshift(line[i])
        }
    }
}



// solution for 1 part
for (let line of numbers) {
    for (let i = 0; i < line.length; i++) {
        line[i] = parseInt(line[i])
    }
    for (let j = 0; j < line[0]; j++) {
        column[line[2]].push(column[line[1]][column[line[1]].length - 1])
        column[line[1]].pop()
    }
}
let answer1 = '';

for ( let line of Object.entries(column)) {
    answer1 += line[line.length - 1][line[line.length - 1].length - 1]
}


// solution for 2 part
let column2 = {}

for (let line of crateArray) {
    for (let i = 0; i < line.length; i++) {
        if (line[i] !== ' ') {
            if (!column2[indexes[i]]) {
                column2[indexes[i]] = []
            }
            column2[indexes[i]].unshift(line[i])
        }
    }
}

for (let line of numbers) {
    for (let i = 0; i < line.length; i++) {
        line[i] = parseInt(line[i])
    }
    for (let j = 0; j < line[0]; j++) {
        column2[line[2]].push(column2[line[1]][column2[line[1]].length - (line[0] - j)])
        column2[line[1]].splice(column2[line[1]].length - (line[0] - j), 1)
    }
}

let answer2 = '';

for ( let line of Object.entries(column2)) {
    answer2 += line[line.length - 1][line[line.length - 1].length - 1]
}

console.log(answer1)
console.log(answer2)
