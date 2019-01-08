function solution(a, b) {
    let arr = [];
    var arr1 = a.sort();
    var arr2 = b.sort();
    a.forEach((v,i)=> {
        if(arr1[i] !== arr2[i]) {
            return arr.push(arr1[i])
        }
    })
    return arr[0]
}
//정렬후 비교

var a = ['mislav', 'stanko', 'mislav', 'ana']
var b = ['stanko', 'ana', 'mislav']
var c = solution(a, b)
console.log(c)