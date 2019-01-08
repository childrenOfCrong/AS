function solution(a, b) {
    var arr1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var arr2 = arr1.slice(0, a-1)
    var sum = arr2.reduce((v1, v2) => {
        return v1 + v2
    }, 0)
    var dayArrays = 'FRI,SAT,SUN,MON,TUE,WED,THU'.split(',')
    if((((sum + b) % 7) - 1) === -1) {
        return 'THU'
    }
    return dayArrays[((sum + b) % 7) - 1]
}

var ans = solution(2, 11)
console.log(ans)


