// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.


// 100

function solution(n) {

  if(n<2) return 0;
  const primeList = [2]
  let count = 0;
  const isPrimeNumber = (num) => {
    for(let primNumber of primeList){
      if(num%primNumber===0) return false
    }
    primeList.push(num)
  }
  for(let i=3; i<=n; i++){
    isPrimeNumber(i)
  }
  return primeList.length;
}

console.log(solution(2))
console.log(solution(100))

// function solution(n) {

//   if(n<=1) return 0;
//   const divisorList = []
//   for(let i =2; i<=n; i++){
//     if(n%i===0) divisorList.push(i)
//   }
//   const primeList = [2]
//   let nList = [...Array(n).keys()].map(v=>v+1).slice(1)
//   let count = 0;
//   const isPrimeNumber = (num) => {
//     for(let primNumber of primeList){
//       if(num%primNumber===0) return false
//     }
//     primeList.push(num)
//     return true
//   }


//   for(let item of nList){
//     isPrimeNumber(item)
//   }
//   return primeList.length;
// }