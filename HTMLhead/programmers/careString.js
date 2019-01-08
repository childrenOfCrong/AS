function solution(s) {
    //길이가 4 혹은 6인것만 출력
    if (s.length === 4 || s.length === 6) {
        //Number('a123')을 하면 NaN이 나오길래
        //String(Number(s))로 String(NaN)이 "NaN"인것을 이용
        if(String(Number(s)) === s) {
            return true;
        }
    }
    return false
}
