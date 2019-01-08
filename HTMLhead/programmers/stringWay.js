function solution(a) {
    var array = a.split('')
    var sort = array.sort()
    var reversesort = sort.reverse()
    var sortword = reversesort.join('')
    return sortword
}

// function solution(a) {
//     return a.split('').sort().reverse().join('')
// }
