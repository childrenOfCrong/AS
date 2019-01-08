const arr = [11,25,12,25,60]

function every(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] <= 10) {//조건과 정반대의 상황
            return false
        }
    }
    return true
}

console.log(arr.every(v => v > 10))
console.log(every(arr))