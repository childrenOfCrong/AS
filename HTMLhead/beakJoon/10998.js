var fs = require('fs');
//var input = fs.readFileSync('/dev/stdin').toString().split('');
var input = fs.readFileSync('test.text').toString().split(' ')

var a = Number(input[0])
var b = Number(input[1])


console.log((a * b).toFixed(10));