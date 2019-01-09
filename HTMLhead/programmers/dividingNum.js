//나누어 떨어지는 숫자배열
function solution(a, b) {
    var arr = a.filter(v => {
        return v % b === 0
    })
    var ans = arr.sort((a,b) => a-b)
    if(ans.length === 0) {
        return [-1]
    }
    return ans
}

var a = solution([10,4,2,5], [1])
console.log(a)