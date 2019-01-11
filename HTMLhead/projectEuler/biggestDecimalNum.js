function solution(number) {
    for(let i =2; i < number; i++) {
        if(number % i === 0) {
            number = number / i
            i = 2
            continue;
        }
    }
    return number;
}

console.log(solution(600851475143))