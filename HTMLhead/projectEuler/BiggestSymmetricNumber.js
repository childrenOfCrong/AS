function solution(numberLength) {
  let answerArr = [];
  for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
      let result = String(i * j);
      let firNum = result.slice(0, result.length / 2);
      let secNum = reverseStr(result.slice(result.length / 2, result.length));
      if (firNum === secNum) {
        answerArr.push(Number(result));
      }
    }
  }
  return Math.max(...answerArr);
}

function reverseStr(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr = newStr + str[i];
  }
  return newStr;
}
//문자열을 거꾸로 돌리는 함수
console.log(solution(10));
