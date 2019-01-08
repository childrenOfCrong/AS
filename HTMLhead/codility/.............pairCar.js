function solution(A) {
    let num = 0
    for(let i = 0; i < A.length; i++) {
        if(A[i] === 0) {
            for(let j = i; j < A.length; j++) {
                if(A[j] === 1) num++
            }
        }
    }
    return num
}

console.log(solution([0,1,0,1,1]))