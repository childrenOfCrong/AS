function solution(n) {
    var answer = 0
    var splited = n.split('')
    for(let i = 0; i < splited.length; i++) {
        if(splited[i-1] === '(' && splited[i] === ')') {
            splited[i - 1] = 1
            splited[i] = ''
        }
    }
    
    var arr = [];
    splited.forEach((v, i) => {
        if(v === 1) {
            answer = answer + arr.length;
            return;
        }
        if(v === '(') {
            arr.push(0)
        }
        if(v === ')') {
            arr.pop()
            answer = answer + 1
        }
    })
    return answer
}

console.log(solution("()(((()())(())()))(())"));
