function solution(s, n) {
    var arr1 = s.split('');
    var arr2 = arr1.map(v => {
        if(v.charCodeAt(0) === 32) {
            return 32
        } else {
            return v.charCodeAt(0)
        }
    })
    var arr3 = arr2.map(v => {
        if(v === 32) {
            return 32
        }
        if(v >= 65 && v <= 90) {
            if(v + n > 90) {
                let num1 = v + n - 90
                return 64 + num1
            } else {
                return v + n
            }
        } else if (v >= 97 && v <= 122) {
            if(v + n > 122) {
                let num2 = v + n - 122
                return 96 + num2
            } else {
                return v + n
            }
        } else {
            return v
        }
    })
    var arr4 = []
    arr3.forEach(v => {
        arr4.push(String.fromCharCode(v))
    })
    var string = arr4.join('')
    return string
}

var arr = 'a B z'
var a = solution(arr, 4)
