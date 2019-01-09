var solution = function(day, drinkingDayArr) {
    var dayArr = new Array(day).fill(0)
    dayArr[0] = 1
    dayArr.forEach((v,i) => {
        let oneDay = drinkingDayArr.shift()
        if((i) === oneDay) {
            dayArr[i-1] = 0
            dayArr[i] = 0
            return;
        } else if (i > 0) {
            dayArr[i] = dayArr[i-1] + 1
        }
        drinkingDayArr.unshift(oneDay)
    })
    return dayArr.reduce((a,b) => a + b)
}

console.log(solution(1111111, [11,222,444,555,666]))


