function solution(n) {
    debugger;
    var ans = [];
    var b = String(n)
    for (let i = b.length; i > 0; i--) {
        ans.push(Number(b[i - 1]))
    }
    return ans;
}

//another way

function solution(n) {
    return n.toString().split('').reverse().map(v => Number(v))
}
//toString() method number를 string으로 바꿔줌
//reverse() mathod 배열을 거꾸로 돌아가게해주는 메서드 원래의 배열또한 바뀜
//map() method 인자를 가지고 반복문 원래의 배열 안바뀜
