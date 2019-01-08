function sol(s) {
    //문자열의 길이를 사용
    var len = s.length
    //짝수와 짝수가 아닐때를 구분
    if(len % 2 != 0) {
        return s[(len - 1) / 2];
    } else {
        return s[len/2 - 1] + s[len/2];
    }
}