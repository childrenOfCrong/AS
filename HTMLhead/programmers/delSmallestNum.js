function solution (arr) {
    if(arr.length === 0 || arr.length === 1) {
        return [-1]
    }
    var smallest = arr.reduce((a, b) => {
        if(a < b) {
            return a 
        } else {
            return b
        }
    })
    var smallestArr = arr.filter(v => {
        if(smallest !== v) {
            return v
        }
    })
    return smallestArr
}

solution([1,2,3,4,5,6])