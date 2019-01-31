function sockMerchant(n, ar) {
  var obj = {};
  var answer = 0;
  ar.forEach(v => {
    if(obj[v] === undefined) {
      obj[v] = 1
    } else {
      obj[v]++
    }
  }) 
  var values = Object.values(obj)
  values.forEach(v => {
    if(v >= 2) {
      answer += Math.floor(v/2)
    }
  })
  return answer
}

console.log(sockMerchant(10, [ 10, 20, 20, 10, 10, 30, 50, 10, 20 ]));