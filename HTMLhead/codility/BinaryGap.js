function solution(n) {
    var arr = [];
    var stringTwoNum = n.toString(2).split('')
    var count = 0
    for(let i = 0; i < stringTwoNum.length; i++) {
        if(stringTwoNum[i] === '1') {
            arr.push(count)
            count = 0
        } else {
            count++
        }
    }
    if(arr[0] === undefined) {
        return 0
    }
    return Math.max(...arr)
}

