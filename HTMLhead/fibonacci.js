const makeFibonaccci = function (max, result = 0, pre1 = 0, pre2 = 1) {
  function sum() {
    result = pre1 + pre2
    pre1 = pre2
    pre2 = result;
    return (result > max)? null: result;
  }
  return {
    next: () => {
      return {
        value: sum(),
        done: (result > max)? true: false
      }
    }
  };
}

const fun = makeFibonaccci(8);
// console.log(fun());
// console.log(fun());
// console.log(fun());
// console.log(fun());
// console.log(fun());
for(let i = 0; i < 10; i++) {
  console.log(fun.next());
}
//그 코드 spread operator로 동작시켜보기

