function solution(A) {
    let sortedArr = A.sort((a,b) => a-b)
    if(sortedArr.length === 1 && sortedArr[0] < 0) {
        return 1
    }
    if(sortedArr.length === 1 && sortedArr[0] > 1) {
        return 1
    }
    var removedArr = new Set(sortedArr)
    if(!removedArr.has(1)) {
        return 1
    }
    let answer = [];
    let realRemovedArr = [];
    removedArr.forEach((v) => {
        realRemovedArr.push(v)
    })
    realRemovedArr.forEach((v, i) => {
        if(v + 1 !== realRemovedArr[i + 1]) {
            answer.push(v + 1)
        }
    })
    var realAnswer = answer.filter(v => {
        return v > 0
    })
    if(realAnswer.length === 0) {
        return 1
    }
    return realAnswer[0]
}

console.log(solution([-3,-1,0,1,2,3]))
