function solution(x, n) {
    let p = 0
    const answer = [];
    for(let i = 0; i < n; i++) {
        p = p + x
        answer.push(p)
    }
    return answer
}