function solution(v) {
  let xArr = [];
  let yArr = [];
  v.forEach(v => {
    xArr.push(v[0]);
    yArr.push(v[1]);
  });
  let answer = pushAnswer([], xArr);
  return pushAnswer(answer, yArr);
}

function pushAnswer(answerArr, target) {
  if (target[1] === target[2]) answerArr.push(target[0]);
  if (target[0] === target[2]) answerArr.push(target[1]);
  if (target[0] === target[1]) answerArr.push(target[2]);
  return answerArr;
}
