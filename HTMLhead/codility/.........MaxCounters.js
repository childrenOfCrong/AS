function solution(N, A) {
	debugger;
  let zeroArr = new Array(N).fill(0);
  let numArr = new Array(N).fill(0);
  let d = 0;
  A.forEach(v => {
    if (v > N) {
      d += Math.max(...numArr);
      numArr = zeroArr;
    } else {
      numArr[v - 1] += 1;
    }
	});
	let lastIndex = A.lastIndexOf(N+1);
	let answerArr = new Array(N).fill(d);
	let lastArr = A.slice(lastIndex+1, A.length);
	lastArr.forEach(v => {
		answerArr[v - 1] += 1;
	})
  return answerArr;
}

console.log(solution(5, [6, 6, 6, 6, 6, 6, 6]));
