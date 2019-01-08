function solution(a, b) {
    var alen = a.length
    while (b > alen) {
        if (a.indexOf(0) === -1) {
            b = b - alen
            var a = a.map(v => v - 1)
        } else {
            
        }
    }
}

solution([1, 2, 3, 4, 5], 7)