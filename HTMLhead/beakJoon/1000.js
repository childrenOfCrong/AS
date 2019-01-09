var fs = require('fs');
//var input = fs.readFileSync('/dev/stdin').toString().split('');
var input = fs.readFileSync('test.text').toString().split(' ')
//입력하는 대로 문자열로 받아주는 함수에 split(' ') 함수 이용
var a = Number(input[0])
var b = Number(input[1])
//각 값을 a, b로 멕여주고 배열로 해결
console.log((a + b))