function solution(c) {
  let count = 0
  for (let i = 0; i < c.length; i++) {
    debugger;
    if(c[i] === 0) {
      if(c[i+2] === 1) {
        count++
        continue;
      }
      if(c[i+1] === 1) {
        count++
        i++
        continue;
      }
      if(c[i+2] === 0) {
        count++
        i++
        continue;
      }
    }
  }
  return count;
}

console.log(solution([ 0, 0, 1, 0, 0, 1, 0 ]));