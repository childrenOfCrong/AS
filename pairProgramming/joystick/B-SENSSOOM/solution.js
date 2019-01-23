function solution(name) {
    let obj = {}, sum = 0, sum2 = 0;
    let arr = name.split("");
    arr.forEach((v,i) => {
        let right = v.charCodeAt(0)-65;
        let left = 90 - v.charCodeAt(0) + 1;
        obj[`${i}`] = (right > left)? left: right;
    });
    
    for(let bar in obj){
        sum += obj[bar];
    }

    return sum + sum2;
    
    // 1. A-Z 배열
    // 2. 각 자리별로 얼마만큼 키를 눌러야 할 지.(위, 아래)
    // 3. 각 자리의 이동
}


console.log(solution('JEROEN'));