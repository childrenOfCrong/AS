function solution(arr1, arr2) {
    var ret = []
    arr1.forEach((_, idx) => {
        let re1 = []
        arr1[idx].forEach((_, idx2) => {
            re1.push(arr1[idx][idx2] + arr2[idx][idx2])
        })
        ret.push(re1)
    })
    return ret
}
var arr1 = [[1,2],[2,3]]
var arr2 = [[3,4],[3,2]]
console.log(solution(arr1, arr2))