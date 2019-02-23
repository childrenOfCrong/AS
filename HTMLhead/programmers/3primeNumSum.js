function solution(n) {
  let primeArr = [];
  var bool = [];
  let answer = 0
  for (let i = 1; i < n; i++) {
    bool.push(true);
  }
  for (let i = 2; i < n; i++) {
    if (bool[i - 2]) {
      for (let j = i * 2; j <= n; j += i) {
        bool[j - 2] = false;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (bool[i]) {
      primeArr.push(i + 2);
    }
  }
  // let primeArr = allPN.filter((v, i, arr) => arr.indexOf(v) === i);
  debugger;
  primeArr.forEach((v, i) => {
    for (let j = i + 1; j < primeArr.length; j++) {
      for (let k = j + 1; k < primeArr.length; k++) {
        if (v + primeArr[j] + primeArr[k] === n) answer++;
      }
    }
  });
  return answer;
}

console.log(solution(33));
