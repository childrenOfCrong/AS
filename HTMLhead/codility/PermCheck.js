function solution(A) {
    const sortedArr = A.sort((a,b) => a-b)
    debugger
    var answer = sortedArr.filter((v, i) => {
        return v !== i+1
    })
    if(answer.length >= 1) {
        return 0
    }
    return 1
}

console.log(solution([2]))