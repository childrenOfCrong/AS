function solution(board) {
  let Xlength = board[0].length;
  let Ylength = board.length;
	let answer = 0;

  if (Xlength < 2 || Ylength < 2) {
    for (let i = 0; i < Xlength; i++) {
      for (let j = 0; j < Ylength; j++) {
        if (board[i][j] === 1) {
          return 1;
        }
      }
    }
  } else {
    for (let i = 1; i < Ylength; i++) {
      for (let j = 1; j < Xlength; j++) {
        if (board[i][j] === 1) {
          board[i][j] =
            Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
          if (board[i][j] > answer) {
            answer = board[i][j];
          }
        }
      }
    }
  }
  return answer * answer
}

console.log(solution([[0, 0, 1, 1], [1, 1, 1, 1]]));
