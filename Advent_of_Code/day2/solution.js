const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8');

const inputArray = input.split('\n');

//A - ROCK B - PAPER C - SCISSORS
//X - ROCK +1 Y - PAPER +2 Z - SCISSORS +3
//win +6
//draw +3
//lose +0

let sum = 0;
for (let i = 0; i < inputArray.length; i++) {
    let secondLetter = inputArray[i].charAt(2);
    switch (inputArray[i]) {
        case 'A X':
            inputArray[i] = inputArray[i].replace(secondLetter, 'Z');
            sum += 3;
            break;
        case 'A Y':
            inputArray[i] = inputArray[i].replace(secondLetter, 'X');
            sum += 4;
            break;
        case 'A Z':
            inputArray[i] = inputArray[i].replace(secondLetter, 'Y');
            sum += 8;
            break;
        case 'C X':
            inputArray[i] = inputArray[i].replace(secondLetter, 'Y');
            sum += 2;
            break;
        case 'C Y':
            inputArray[i] = inputArray[i].replace(secondLetter, 'Z');
            sum += 6;
            break;
        case 'C Z':
            inputArray[i] = inputArray[i].replace(secondLetter, 'X');
            sum += 7;
            break;
    }

    // Solution for first part
    // switch (inputArray[i]) {
    //     case 'A X': sum += 4; break;
    //     case 'A Y': sum += 8; break;
    //     case 'A Z': sum += 3; break;
    //     case 'B X': sum += 1; break;
    //     case 'B Y': sum += 5; break;
    //     case 'B Z': sum += 9; break;
    //     case 'C X': sum += 7; break;
    //     case 'C Y': sum += 2; break;
    //     case 'C Z': sum += 6; break;
    // }
}
console.log(sum);
