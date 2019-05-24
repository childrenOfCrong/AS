//문제 1
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

function sum(input) {
  const num1 = Number(input[0]);
  const num2 = Number(input[1]);
  console.log(num1 + num2);
}

sum(input)

//문제 2
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

function f(input) {
  const num = Number(input)
  const numArr = new Array(num).fill(0).map((v, i) => i + 1)
  let sum = 0;
  numArr.forEach(v => {
    if(v % 2 === 0) sum+= v
  })
  console.log(sum);
}

f(input);

//문제 3
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
function f(input) {
  const inputArr = input.split(' ');
  const numArr = inputArr.map(v => Numbrer(v))
  let word = 0;
  for(let i = 1; i < 999999999; i++) {
    word += numArr[0]
    if(word >= numArr[2]) {
      console.log(i)
      break;
    }
    word -= numArr[1]
  }
}