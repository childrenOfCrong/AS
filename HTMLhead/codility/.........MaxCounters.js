function solution(N, A) {
    let initedAns = new Array(N).fill(0)
    let ans = new Array(N).fill(0)
    let bigNum = 0
    A.forEach(v => {
        debugger
        if(v === N + 1) {
            bigNum = Math.max(...ans)
            ans = initedAns.slice()
        } else {
            ans[v-1]++
        }
    })
    let answer = new Array(N).fill(bigNum)
    return answer.map((v, i) => {
        return answer[i] + ans[i]
    })
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4] ))