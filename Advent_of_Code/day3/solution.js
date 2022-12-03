const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

const alphabetLower = 'abcdefghijklmnopqrstuvwxyz'.split('');
const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const alphabet = alphabetLower.concat(alphabetUpper);

const inputArray = input.split('\n');
const sameLetters = [];
const sameLetters2 = [];

// Solution for second part

for (let i = 0; i < inputArray.length; i += 3) {
    let line1 = inputArray[i]
    let line2 = inputArray[i + 1]
    let line3 = inputArray[i + 2]
    console.log(line1, line2, line3)
    for (let j = 0; j < line1.length; j++) {
        if (line2.includes(line1[j]) && line3.includes(line1[j])) {
            sameLetters2.push(line1[j]);
            break;
        }
    }
}

//solution for first part

for (let i = 0; i < inputArray.length; i++) {
    const firstHalf = inputArray[i].slice(0, inputArray[i].length / 2);
    const secondHalf = inputArray[i].slice(inputArray[i].length / 2, inputArray[i].length);

    for (let j = 0; j < firstHalf.length; j++) {
        if (secondHalf.indexOf(firstHalf[j]) !== -1) {
            sameLetters.push(firstHalf[j]);
            break;
        }
    }
}

let sum = 0;
for (let i = 0; i < sameLetters.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
        if (sameLetters[i].charAt(0) === alphabet[j]) {
            sum += j + 1;
        }
    }
}

let sum2 = 0;
for (let i = 0; i < sameLetters2.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
        if (sameLetters2[i].charAt(0) === alphabet[j]) {
            sum2 += j + 1;
        }
    }
}

console.log(sum);
console.log(sum2);



