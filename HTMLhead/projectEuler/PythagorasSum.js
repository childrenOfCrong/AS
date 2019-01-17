function solution(num) {
  let arr = find(num)
  let a = arr[1] * arr[1] - arr[0] * arr[0]
  let b = 2 * arr[0] * arr[1]
  let c = arr[1] * arr[1] + arr[0] * arr[0]
  return a * b * c
}

function find(num){
  for(let i = 0; i < num; i++) {
    for(let j = 0; j < num; j++) {
      if((2*j*(i+j)) === num) {
        return [i,j]
      }
    }
  }
}
console.log(solution(1000));
