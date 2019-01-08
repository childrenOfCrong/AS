function solution(n) {
    const sqrtNum = String(Math.sqrt(n))
    if(sqrtNum.length < 17) {
        return Math.pow(Number(sqrtNum)+1, 2)
    } else {
        return -1
    }
}