// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(A) {
    var obj = {}
    var b =A.sort((a,b) => a-b)
    b.forEach((v, i) => {
        if(obj[v] === undefined) {
            obj[i+1] = v
        }
    })
    var key = Object.keys(obj)
    var val = Object.values(obj)
    var numKey = key.map(v => {
        return Number(v)
    })
    var answer = numKey.filter((v, i) => {
        if(numKey[i] !== val[i]) {
            return numKey[i]
        }
    })
    if(answer[0] === undefined) {
        return A.length+1
    }
    return answer[0]
}
console.log(solution([1,2,3,4]));