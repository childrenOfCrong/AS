function solution(people, shirt) {
  let answer = 0
  people.sort((a,b) => a-b);
  shirt.sort((a,b) => a-b);
  debugger;
  people.forEach(v => {
    for(let i = 0; i < shirt.length; i++) {
      if(v <= shirt[i]) {
        answer++
        shirt.splice(i, 1);
        break;
      }
    }
  })
  return answer
}
console.log(solution([2,3],[1,2,3]))