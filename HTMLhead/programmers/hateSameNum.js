function solution(arr) {
    var a = arr.filter((v, i) => {
        return arr[i] !== arr[i+1]          
    })
    return a
}
var arr = [1,1,3,3,0,1,1]
solution(arr)