function solution(n) {
    const arr = [0,1]
    for(let i = 2; i <= n; i++) {
        arr[i] = arr[i-2] % 1234567 + arr[i-1] % 1234567
    }
    return arr[n] % 1234567
}