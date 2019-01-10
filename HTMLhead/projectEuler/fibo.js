function solution(number) {
    const arr = [0,1]
    for(let i = 2; i < number; i++) {
        arr[i] = arr[i-1] + arr[i-2]
        if(arr[i] > 4000000) break;
    }
    let sum = 0
    arr.forEach(v => {
        if(v % 2 === 0) {
            sum = sum + v
        }
    })
    return sum
}