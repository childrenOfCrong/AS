function solution(arr, times) {
    if(arr[0] === undefined) {
        return [];
    }
    for(let i = 0; i < times; i++) {
        arr.unshift(arr.pop())
    }
    return arr
}

console.log(solution([], 3));