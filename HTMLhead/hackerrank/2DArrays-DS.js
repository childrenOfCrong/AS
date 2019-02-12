function solution(arr) {
  let sumValue = [];
  arr.forEach(arr => {
    let sumArr = [];
    arr.forEach((v, i) => {
      if (arr[i + 2] === undefined) return;
      sumArr.push(arr[i] + arr[i + 1] + arr[i + 2]);
    });
    sumValue.push(sumArr);
  });
  let answerArr =[];
  sumValue.forEach((v, i, array) => {
    if(array[i+2] === undefined) return;
    answerArr.push(array[i][0] + arr[i+1][1] + array[i+2][0]);
    answerArr.push(array[i][1] + arr[i+1][2] + array[i+2][1]);
    answerArr.push(array[i][2] + arr[i+1][3] + array[i+2][2]);
    answerArr.push(array[i][3] + arr[i+1][4] + array[i+2][3]);
  })
  return Math.max(...answerArr)
}

console.log(
  solution([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
  ])
);
