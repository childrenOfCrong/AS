function solution(n, wordArr) {
  let playedArr = [];
  let XX = null
  for (let i = 0; i < wordArr.length; i++) {
    if (playedArr.includes(wordArr[i])) {
      XX = i;
      break;
    }
    if (wordArr[i + 1] === undefined) break;
    if (wordArr[i][wordArr[i].length - 1] !== wordArr[i + 1][0]) {
      XX = i + 1;
      break;
    }
    playedArr.push(wordArr[i]);
  }
  if(XX === null) return [0, 0]
  let one = 1;
  let two = 1;
  for(let i = 0; i < XX; i++) {
    one++
    if(one === n+1) {
      one = 1;
      two++
    }
  }
  return [one, two]
}

console.log(
  solution(	5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"])
);
