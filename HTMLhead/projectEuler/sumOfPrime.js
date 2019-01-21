function solution(n) {
  const arr = new Array(n).fill(0).map((v, i) => i)
  arr.forEach(v => {
    if(v % 2 === 0) {
      arr[v] = 0
    }
  })
  arr.forEach(v => {
    if(v % 3 === 0) {
      arr[v] = 0
    }
  })
  let answer = 0
  arr.forEach((v, i) => {
    if(v === 0 || v === 1) {
      return;
    }

    for(let j = 2; j < v; j++) {
      if(v % j === 0) {
        return;
      }
    }
    answer += v
  })
  return answer+2;
}
//에라토스테네스의 체 사용요함
console.log(solution(2000000));

