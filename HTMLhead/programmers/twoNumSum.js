function solution(a, b) {
    //ret으로 값을 초기화함
    var ret = 0
    //if문을 사용해서 a가 b보다 클때를 대비
    if (a > b) {
        //반복문을 사용해서 계속 더하게 만듬
        for (var i = b; i <= a; i++) {
            ret = ret + i
        }
    } else {
        //''
        for (var i = a; i <= b; i++) {
            ret = ret + i
        }
    }
    return ret
}

solution(2, 3)