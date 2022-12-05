const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

const inputArray = input.split(/\n\s*\n/);

let crateArray = inputArray[0]
    .split('\n')
    .map((line) => [...line]
        .filter((value, index) => index % 4 === 1 ));

let actionArray = inputArray[1]

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

let actionArrayLines = actionArray.split('\n')

let numbers = actionArrayLines.map((line) => line.match(/\d+/g))

numbers.pop()

for (let line of numbers) {
    for (let i = 0; i < line.length; i++) {
        line[i] = parseInt(line[i])
    }
    for (let j = 0; j < line[0]; j++) {
        column[line[2]].push(column[line[1]][column[line[1]].length - 1])
        column[line[1]].pop()
    }
}

let answer = '';

for ( let line of Object.entries(column)) {
    answer += line[line.length - 1][line[line.length - 1].length - 1]
}


console.log(column)
console.log(answer)


