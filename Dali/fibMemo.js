const fibMemo = (n, cache = [0,1,1])=>{
  //1,1,2,3,5,8,13,21
  if(cache[n]) return cache[n];
  else {
    return cache[n] = fibMemo(n-2, cache)+fibMemo(n-1, cache)
  }
}

console.log(fibMemo(100))
console.log(fibMemo(10))