function solution(string) {
    var s = String(string)
    var answer = true;
    //둘다 0으로 선언
    var yNum = 0;
    var pNum = 0;
    //대문자소문자 상관없게 만들기 위해 toLowerCase()사용
    var lowerString = s.toLowerCase();
    var len = lowerString.length
    //y의갯수와 p의갯수마다 ynum과pnum의 값을 더해줌
    for (let i = 0; i < len; i++) {
        if (lowerString[i] === 'y') {
            yNum = yNum + 1
        } else if (lowerString[i] === 'p') {
            pNum = pNum + 1
        }
    }
    //그리고ynum과 pnum비교후 같지않으면 false리턴
    if (yNum != pNum) {
        var answer = false;
        console.log(answer)
        return answer
    }
    return answer;
}