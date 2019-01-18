function solution(string) {
  let answer = 0
  for(let i of string) {
    let stringNum = i.charCodeAt() - 65
    if(stringNum > 13) {
      answer += (26 - stringNum)
    } else {
      answer += stringNum
    }
  }
  return getNum(string)
}

function getNum(string) {
  let k = 0;
  for(let i = string.length; i < 1; i--) {
    if(string[i] !== 'A') break;
    k++
  }
  let num1 = string.length - 1 - k
  let l = 0;
  for(let i = 1; i < string.length; i++) {
    if(string[i] !== 'A') break;
    l++
  }
  let num2 = string.length - 1 - l
  return [num1, num2]
}
console.log(solution("JAAAAAAN"));