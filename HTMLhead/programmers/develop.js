function solution(progress, speed) {
    var dayArr = [];
    progress.forEach((v, i) => {
        debugger;
        var count = 0;
        while(v < 100) {
            v += speed[i]
            count++
        }
        dayArr.push(count)
    })
    var ret = [];
    while(dayArr.length !== 0) {
        var count = 1
        var value = dayArr.shift()
        while(value >= dayArr[0]) {
            count++
            dayArr.shift()
        }
        ret.push(count)
    }
    return ret
}