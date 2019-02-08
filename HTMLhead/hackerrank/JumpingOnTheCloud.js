function solution(c) {
  let count = 0
  for (let i = 0; i < c.length; i++) {
    debugger;
    if(c[i+2] === 1) {
      count++
    } else if (c[i+1] === 1) {
      count++
      i++
    } else if (c[i+1] === 0 && c[i+2] === 0) {
      count++
      i++
    } else if (c[i+1] === 0) {
      count++
    }
  }
  return count;
}
//그냥 모든 경우 때려넣기...

console.log(solution([0, 0 ,0, 1 ,0 ,0]));