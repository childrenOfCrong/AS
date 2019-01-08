function solution(arr) {
    const obj = {}
    arr.forEach(arr => {
        if (obj[arr[1]] === undefined) {
            obj[arr[1]] = 1
        } else {
            obj[arr[1]]++
        }
    })
    var valArr = Object.values(obj)
    
    return valArr.reduce((a,b) => {
        return a * (b+1)
    })
}

console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]))