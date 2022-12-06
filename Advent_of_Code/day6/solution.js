const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

const inputArray = input.split('');
let tempArray = [];
let answer = 0;
let answer2 = 0;


//first part solution
for (let i = 0; i < inputArray.length; i++) {
    if (tempArray.length < 4) {
        tempArray.push(inputArray[i])
    }
    if (tempArray.length === 4) {
        let duplicates = tempArray.filter((value, index) => tempArray.indexOf(value) !== index)
        if (duplicates.length === 0) {
            answer = i + 1;
            break;
        }
        tempArray.shift()
    }
}

//second part solution
for (let i = 0; i < inputArray.length; i++) {
    if (tempArray.length < 14) {
        tempArray.push(inputArray[i])
    }
    if (tempArray.length === 14) {
        let duplicates = tempArray.filter((value, index) => tempArray.indexOf(value) !== index)
        if (duplicates.length === 0) {
            answer2 = i + 1;
            break;
        }
        tempArray.shift()
    }
}

console.log("First part answer:", answer)
console.log("Second part answer:", answer2)

