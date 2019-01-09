function solution(n) {
    var b = String(n)
    return Number(b.split('').sort((a, b) => b - a).join(''))
}

console.log(solution(118372));
