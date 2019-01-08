function solution(s) {
    let judge = ['answer'];
    let stringHash = s.split('')
    for(let i = 0; i < stringHash.length; i++) {
        if(stringHash[i] === '(') {
            judge.push('1')
        } else if (stringHash[i] === ')' && judge.includes('1')) {
            judge.pop()
        } else {
            return false
        }
    }
    if(judge.length === 1 && judge[0] === 'answer') {
        return true
    }
    return false
}

console.log(solution(")()("))