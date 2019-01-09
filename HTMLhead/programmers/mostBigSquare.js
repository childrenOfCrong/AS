function solution(board) {
    let wLength = 0
    let widthLength = [];
    for (let i = 0; i < board[0].length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === board[i][j + 1] && board[i][j] === 1) {
                wLength = wLength + 1
            } else if (board[i][j] === 0) {
                widthLength.push(wLength);
                let wLength = 0
            }
        }
    }
    let hLength = 0
    let heightLength = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === board[i][j + 1] && board[i][j] === 1) {
                hLength + hLength + 1
            } else if (board[i][j] === 0) {
                heightLength.push(hLength)
                let hLength = 0
            }
        }
    }
    
    
}