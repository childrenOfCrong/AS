function solution(a, b) {
    var arr = []
    for (let i = 1; i <= b; i++) {
        if(a % i === 0 && b % i === 0) {
            arr.push(i)
        }
    }
    var c = (arr[arr.length - 1]) * (a / arr[arr.length -1]) * (b / arr[arr.length-1])
    var ans = []
    ans.push(arr[arr.length - 1])
    ans.push(c)
    return ans
}

var d = solution(4, 15)
console.log(d)