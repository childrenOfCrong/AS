function solution(n) {
    const arr = [];
    const ans = [];
    n.forEach(value => { //전체 배열 탐색
        arr.push(value) //빈 배열에 배열의 값을 넣음
        for(let i = arr.length-1; i >= 0; i--) { //값을 넣은배열 arr을 거꾸로 탐색함
            if(arr[i] > value) { //탐색하며 값이 크다면
                ans.push(i + 1) //ans에넣어버리고
                return; //forEach끝냄
            }
        }
        ans.push(0) //없다면 0넣음
    })
    return ans; //ans를 리턴
}