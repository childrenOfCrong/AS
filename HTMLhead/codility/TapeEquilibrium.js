function solution(A) {
    debugger;
    let answerArr = [];
    let summedAll = A.reduce((a,b) => {
            return a + b
    })
    let currentNum = 0
    for(let i = 0; i < A.length -1; i++) {
        summedAll = summedAll - A[i]
        currentNum = currentNum + A[i]
        answerArr.push(Math.abs(currentNum - summedAll))
    }
    console.log(answerArr)
    return Math.min(...answerArr)
}

console.log(solution([-1000, 1000]))