function solution(arr) {
    return arr.reduce((acc, val) => {
        return acc + val
    }) / arr.length
}