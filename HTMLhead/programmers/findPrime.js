function solution(n) {
    debugger;
    var bool = [];
    var primes = [];
    for (let i = 1; i < n; i++) {
        bool.push(true)
    }
    for (let i = 2; i < n; i++) {
        if (bool[i - 2]) {
            for (let j = i * 2; j <= n; j += i) {
                bool[j - 2] = false
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if(bool[i]) {
            primes.push(i+2)
        }
    }
    return primes.length;
}

console.log(solution(10))