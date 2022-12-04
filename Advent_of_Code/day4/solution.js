const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

const inputArray = input.split('\n');
let countFirstTask = 0;
let countSecondTask = 0;

for (let i = 0; i < inputArray.length; i++) {
    let firstPart = inputArray[i].split(',')[0];
    let secondPart = inputArray[i].split(',')[1];
    if (firstPart || secondPart) {

        let firstPartArray = firstPart.split('-').map(Number);
        let secondPartArray = secondPart.split('-').map(Number);

        let firstMin = Math.min(firstPartArray[0], firstPartArray[1]);
        let firstMax = Math.max(firstPartArray[0], firstPartArray[1]);
        let secondMin = Math.min(secondPartArray[0], secondPartArray[1]);
        let secondMax = Math.max(secondPartArray[0], secondPartArray[1]);

        if (firstMin >= secondMin && firstMax <= secondMax
        || firstMin <= secondMin && firstMax >= secondMax) {
            countFirstTask++;
        }
        if (firstMin <= secondMin && secondMin <= firstMax
            || firstMin <= secondMax && secondMax <= firstMax
            || secondMin <= firstMin && firstMin <= secondMax
            || secondMin <= firstMax && firstMax <= secondMax) {
            countSecondTask++;
        }
    }
}
console.log(countFirstTask);
console.log(countSecondTask);
