const arr = [1,2,3,4,5]

function some(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 6) {
            return true
        }
    }
    return false
}

console.log(arr.some(v => v === 6))
console.log(some(arr))