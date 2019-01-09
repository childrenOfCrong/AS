function maximumToys(prices, k) {
    var sortedArr = prices.sort((a,b) => a-b)
    var toys = 0
    for(let i = 0; i < sortedArr.length; i++) {
        k = k-sortedArr[i]
        toys++
        if(k < 0) break;
    }
    return toys -1
}

console.log(maximumToys([1 ,12, 5, 111, 200, 1000, 10], 50))