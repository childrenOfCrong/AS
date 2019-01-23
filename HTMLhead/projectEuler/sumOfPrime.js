function solution(num) {
  var arr = new Array(num).fill(0).map((v, i) => i)
  let answerArr = [];
  arr.forEach(v => {
    if(v % 2 === 0) return;
    answerArr.push(v)
  })
  arr = answerArr
  arr.forEach(v => {
    if(v === 1 || v === 0) return;
    for(let i = 2; i < v; i++) {
      if(v % i === 0) {
        
      }
    }
  })
}

solution(2000000);
