function solution(list, loc) {
    const indexArr = new Array(list.length).fill(0).map((v, i) => i)
    const printedArr = [];
    const answerArr = [];
    while(list.length !== 0) {
        debugger;
        let FValue = list.shift()
        if(FValue >= Math.max(...list)) {
            printedArr.push(FValue)
            answerArr.push(indexArr.shift())
        } else if (FValue < Math.max(...list)) {
            list.push(FValue)
            indexArr.push(indexArr.shift())
        }
    }
    return answerArr.indexOf(loc) + 1
}

console.log(solution([2, 3, 2, 1], 3))