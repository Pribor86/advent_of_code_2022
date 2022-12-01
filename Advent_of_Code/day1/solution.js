const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

const inputArray = input.split(/\n\s*\n/).map((item) => item.replace(/\n/g, ' '));

let max = 0;
let arr = [];

for (let i = 0; i < inputArray.length; i++) {
    const sum = inputArray[i].split(' ').map(Number).reduce((a, b) => a + b);
    arr.push(sum);
    if (sum > max) {
        max = sum;
    }
}

arr.sort((a, b) => b - a);

console.log("TOP3 sum", arr[0] + arr[1] + arr[2]);
console.log("MAX", max);


