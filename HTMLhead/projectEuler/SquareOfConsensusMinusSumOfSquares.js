function solution(num) {
  let sum = 0;
  let squares = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
    squares = squares + i * i
  }
  return (sum * sum) - squares
}

console.log(solution(100));
