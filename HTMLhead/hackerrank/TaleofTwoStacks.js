function processData(input) {
    var A = input.split("\n")
    const answerArr = [];
    A.shift()
    A.forEach(v => {
        if (v[0] === '1') {
            let num = v.slice(2, v.length)
            answerArr.push(num)
        } else if (v[0] === '2') {
            answerArr.shift()
        } else if (v[0] === '3') {
            console.log(answerArr[0])
        }
    })
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});

