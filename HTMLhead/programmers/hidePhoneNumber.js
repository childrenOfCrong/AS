function solution(phoneNumber) {
    var newArray = phoneNumber.split('')
    var answer = newArray.map((v, i) => {
        if(newArray.length - 4 <= i) {
            return v
        } else {
            return '*'
        }
    }).join('')
    return answer
}

solution("01033334444")