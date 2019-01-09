function solution(n, computers) {
  let answer = 1;
  const obj = {};
  while (n !== 0) {
    n--;
    obj[n] = 0;
  }

  computers.forEach(arr => {
    arr.forEach((v, i) => {
      obj[i] = obj[i] + v;
    });
  });
  for (let i in obj) {
    if (obj[i] === 1) {
      answer++;
    }
  }
  return answer;
}

console.log(
  solution(5, [
    [1, 1, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 1, 0],
    [1, 0, 0, 0, 1]
  ])
);
