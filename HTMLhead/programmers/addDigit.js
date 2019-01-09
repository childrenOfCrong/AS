function solution(n) {
    return String(n).split('').reduce((a, b) => {return Number(a) + Number(b)},0)
}

console.log(solution(123)) 