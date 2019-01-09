function solution(n) {
    const sum = String(n).split('').reduce((a,b) => Number(a) + Number(b))
    if(n % sum === 0) {
        return true
    }
    return false
}

solution(13)

