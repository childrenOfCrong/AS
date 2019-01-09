'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countInversions function below.
function countInversions(arr) {
    let count = 0
    var mergeSort = function (array) {
        if (array.length < 2) return array; // 원소가 하나일 때는 그대로 내보냅니다.
        var pivot = Math.floor(array.length / 2); // 대략 반으로 쪼개는 코드
        var left = array.slice(0, pivot); // 쪼갠 왼쪽
        var right = array.slice(pivot, array.length); // 쪼갠 오른쪽
        return merge(mergeSort(left), mergeSort(right)); // 재귀적으로 쪼개고 합칩니다.
    }
    function merge(left, right) {
        var result = [];
        while (left.length && right.length) {
            if (left[0] <= right[0]) { // 두 배열의 첫 원소를 비교하여
                result.push(left.shift()); // 더 작은 수를 결과에 넣어줍니다.
        
            } else {
                result.push(right.shift()); // 오른쪽도 마찬가지
                count += left.length
            }
        }
        while (left.length) result.push(left.shift()); // 어느 한 배열이 더 많이 남았다면 나머지를 다 넣어줍니다.
        while (right.length) result.push(right.shift()); // 오른쪽도 마찬가지
        return result;
    };

    mergeSort(arr)
    return count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = countInversions(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
