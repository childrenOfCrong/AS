function solution(n) {
    let count = 0
    debugger;
    for(let i = 0; i < n; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            count = count + i
        }
    }
    return count
}

console.log(solution(1000))