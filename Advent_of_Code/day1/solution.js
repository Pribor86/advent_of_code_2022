const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

const inputArray = input.split(/\n\s*\n/);
const inputArray2 = inputArray.map((item) => item.replace(/\n/g, ' '));
let max = 0;
let arr = [];
for (let i = 0; i < inputArray2.length; i++) {
    const sum = inputArray2[i].split(' ').map(Number).reduce((a, b) => a + b);
    // 3 top sum
    arr.push(sum);


    if (sum > max) {
        max = sum;
    }
}
//sort array and get 3 top sum
arr.sort((a, b) => b - a);
console.log("TOP3 sum", arr[0] + arr[1] + arr[2]);
console.log("MAX", max);


