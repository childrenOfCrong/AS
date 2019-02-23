function solution(healths, items) {
  var answer = [];
  let realHealth = healths.map(v => {
      return v - 100
  })
  debugger;
  for(let i = 0; i < realHealth.length; i++) {
    for(let j = 0; j < items.length; j++) {
      if(realHealth[i] - items[j][1] >= 0) {
        answer.push(j);
      }
    }
  }
  let arr = answer.filter((v, i, arr) => arr.indexOf(v) === i).map(v => v+1)
  return arr.sort((a,b) => a-b)
}
console.log(solution([300, 200, 500], [[1000, 600], [400, 500], [300, 100]]));
