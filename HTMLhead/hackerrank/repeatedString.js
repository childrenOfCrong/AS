function solution(s, n) {
  debugger;
  let aNum = 0;
  for (let i of s) {
    if (i === "a") {
      aNum++;
    }
  }

  let lest = n % s.length;
  let answer = aNum * Math.floor(n / s.length);
  let lestANum = 0;
  if (lest !== 0) {
    s = s.slice(0, lest)
    for (let i of s) {
      if (i === "a") {
        lestANum++;
      }
    }
  }
  return answer + lestANum;
}

console.log(solution("ab", 10));
