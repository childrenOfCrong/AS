function solution(X, Y, D) {
    debugger;
    var distance = Y - X
    var ret = Math.floor(distance / D)
    if(distance % D === 0) {
        return ret
    }
    return ret + 1
}

console.log(solution(0, 90, 30))