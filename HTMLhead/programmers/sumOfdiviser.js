function solution(n) {
    var arr = [];
    //빈 배열에 약수추가
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            arr.push(n)
        }
    }
    //약수의 합
    let ret = 0
    for(let value of arr) {
        ret = ret + value
    }
    return ret;
}