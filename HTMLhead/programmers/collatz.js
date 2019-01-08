function solution(n) {
    let num = 0
    function collatz(n) {
        if(n === 1) {
            return num
        } else if (num === 500) {
            return -1
        } 
        if(n % 2 === 0) {
            n = n / 2
            num = num + 1
            collatz(n)
        } else if (n % 2 === 1) {
            n = n * 3 + 1
            num = num + 1
            collatz(n)
        }
    }
    collatz(n)
    if(num === 500) {
        return -1
    }
    return num 
}

console.log(solution(6))