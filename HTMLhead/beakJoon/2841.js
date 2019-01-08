var fs = require('fs');

var input = fs.readFileSync('/dev/stdin').toString()
// var input = fs.readFileSync('test.text').toString()

function processData(input) {
    var myPlay = {};
    var fingerMovementCount = 0;
    var melody = input.split('\n');
    if (melody.length === 0) {
        return fingerMovementCount
    }
    for (var i = 1; i < melody.length; i++) {
        var note = parseInt([i].split(' ')[0]);
        var p = parseInt(melody[i].split(' ')[1]);
        if (!myPlay[note]) {
            myPlay[note] = [p];
            fingerMovementCount++;
            continue;
        }
        // else if (myPlay[note]) {
            while (myPlay[note][myPlay[note].length - 1] > p) {
                myPlay[note].pop()
                fingerMovementCount++;
            }
            if (myPlay[note][myPlay[note].length - 1] === p) {
                continue;
            }
            myPlay[note].push(p)
            fingerMovementCount++

        // }
    }
    return fingerMovementCount
}

console.log(processData(input))