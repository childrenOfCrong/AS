function solution(n) {
  let answer = 0
  let prime = 2
  while(answer !== n) {
    debugger;
    let isPrime = true
    for(let i = 2; i < prime; i++) {
      if(prime % i === 0) {
        isPrime = false;
        break;
      }
    }
    if(isPrime) {
      answer++
    }
    prime++
  }
  return prime
}
//에라토스테네스의 체 사용요함
console.log(solution(10))