function solution(num) {
  let result = 1;
  let k = 1;
  for (let i = 1; i <= num; i++) {
    let j = result;
    while (true) {
      if (j % i === 0) {
        result = j
        k = 1
        break;
      }
      j = result * k
      k++;
    }
  }
  return result
}

console.log(solution(20));

