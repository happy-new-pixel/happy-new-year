const fs = require('fs');

const H = [
    'H',
    '23/1',
    '24/1',
    '25/1',
    '26/1',
    '27/1',
    '1/2',
    '8/2',
    '13/2',
    '14/2',
    '15/2',
    '16/2',
    '17/2',
];
const A = [
    'A',
    '27/2',
    '28/2',
    '1/3',
    '2/3',
    '3/3',
    '6/3',
    '8/3',
    '13/3',
    '15/3',
    '20/3',
    '21/3',
    '22/3',
    '23/3',
    '24/3',
];
const P1 = [
    'P',
    '3/4',
    '4/4',
    '5/4',
    '6/4',
    '7/4',
    '10/4',
    '12/4',
    '17/4',
    '19/4',
    '24/4',
    '25/4',
];
const P2 = [
    'P',
    '8/5',
    '9/5',
    '10/5',
    '11/5',
    '12/5',
    '15/5',
    '17/5',
    '22/5',
    '24/5',
    '29/5',
    '30/5',
];
const Y = [
    'Y',
    '12/6',
    '13/6',
    '21/6',
    '23/6',
    '28/6',
    '29/6',
    '30/6',
    '3/7',
    '4/7',
];
const _2 = [
    '2',
    '24/7',
    '27/7',
    '28/7',
    '31/7',
    '2/8',
    '4/8',
    '7/8',
    '9/8',
    '11/8',
    '14/8',
    '15/8',
    '18/8',
];
const _0 = [
    '0',
    '28/8',
    '29/8',
    '30/8',
    '31/8',
    '1/9',
    '4/9',
    '8/9',
    '11/9',
    '15/9',
    '18/9',
    '19/9',
    '20/9',
    '21/9',
    '22/9',
];
const _20 = [
    '2',
    '2/10',
    '5/10',
    '6/10',
    '9/10',
    '11/10',
    '13/10',
    '16/10',
    '18/10',
    '20/10',
    '23/10',
    '24/10',
    '27/10',
];
const _4 = [
    '4',
    '6/11',
    '7/11',
    '15/11',
    '22/11',
    '27/11',
    '28/11',
    '29/11',
    '30/11',
    '1/12',
];
const _i = ['!', '11/12', '12/12', '13/12', '15/12'];

const _2024 = [H, A, P1, P2, Y, _2, _0, _20, _4, _i];

const today = new Date();
const day = today.getUTCDate();
const month = today.getUTCMonth() + 1;

console.log(`[LOG] Today is ${day}/${month}`);

let charIndex;
let pixelIndex;

for (let [i, char] of Object.entries(_2024)) {
    if (charIndex !== undefined && pixelIndex !== undefined) continue;

    const j = char.indexOf(`${day}/${month}`);
    if (j > -1) {
        charIndex = i;
        pixelIndex = j;
    }
}

if (charIndex === undefined && pixelIndex === undefined) {
    console.log(
        `[LOG] Date ${day}/${month} is not in the list. No pixel will be painted today`
    );
    return;
}

console.log(`[LOG] Date ${day}/${month} is in the list`);
console.log(`[LOG] Pixel is at Char ${charIndex} / Pixel ${pixelIndex}`);

let content = `Building ${charIndex < 5 ? 'letter' : 'number'} ${
    _2024[charIndex][0]
} (${pixelIndex}/${_2024[charIndex].length - 1})`;

fs.writeFile('commitMsg', content, err => {
    if (err) throw err;
});
