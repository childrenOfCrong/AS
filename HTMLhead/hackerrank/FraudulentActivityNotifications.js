'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the activityNotifications function below.
function activityNotifications(arr, d) {
    let notification = 0;
    let [i1, i2] = [Math.floor((d-1)/2), Math.ceil((d-1)/2)]
    let m1, m2
    let blkArr = new Array(201).fill(0)
    for(let i = 0; i < d; i++) {
        blkArr[arr[i]]++
    }

    for(let i = d; i < arr.length; i++) {
        for(let j = 0, k = 0; k <= i1; k += blkArr[j], j++) m1 = j
        for(let j = 0, k = 0; k <= i2; k += blkArr[j], j++) m2 = j
        let m = (m1 + m2) / 2

        if(m <= arr[i]) {
            notification++
        }

        blkArr[arr[i-d]]--
        blkArr[arr[i]]++
    }
    return notification
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const nd = readLine().split(' ');
    const n = parseInt(nd[0], 10);
    const d = parseInt(nd[1], 10);
    const expenditure = readLine().split(' ').map(expenditureTemp => parseInt(expenditureTemp, 10));
    let result = activityNotifications(expenditure, d);
    ws.write(result + "\n");
    ws.end();
}
