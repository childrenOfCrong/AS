function solution(X, A) {
    var set = new Set()
    debugger;
    var answer = [];
    A.forEach((v, i) => {
        set.add(v)
        if(set.has(X)) {
            if(set.size === X) {
                answer.push(i)
            }
        }
    })
    if(answer[0] === undefined) {
        return -1
    }
    return answer[0]
}

console.log(solution(5, [1,3,1,4,2,3,5,4]))