function solution(n) { //n개의 원판을 옮겨야하는 함수
    console.log(Math.pow(2, n) - 1) //전체 옮기는 횟수
    hanoi2(n, 1, 2, 3)
}

function hanoi(n, from, to) {
    debugger;
    if (n === 1) {
        console.log(from, to)
        return;
    }
    let others = 6 - from - to
    hanoi(n - 1, from, others)
    console.log(from, to)
    hanoi(n - 1, others, to)
}