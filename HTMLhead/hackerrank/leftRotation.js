function solution(a, d) {
  for(let i = 0; i < d; i++) {
    a.push(a.shift());
  }
  return a
}

console.log(solution([1,2,3,4,5],4));