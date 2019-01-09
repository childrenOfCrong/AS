function solution(arr) {
    var obj = {}
    arr.forEach(v => {
        if(obj[v] !== undefined) {
            obj[v]++
        } else if(obj[v] === undefined) {
            obj[v] = 1
        }
    })
    for(let value in obj) { //for in 다시한번 확인하기
        if(obj[value] % 2 !== 0) {
            return Number(value)
        }
    }
}