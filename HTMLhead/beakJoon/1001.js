var fs = require('fs');
//var input = fs.readFileSync('/dev/stdin').toString().split('');
var input = fs.readFileSync('test.text').toString().split(' ')

//1000.js와 같음. +가 -로 바뀌었을 뿐
var a = Number(input[0])
var b = Number(input[1])
console.log((a - b))