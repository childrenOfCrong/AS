function countTriplets(arr, r) {
  const obj = {};
  let count = 0;
  arr.forEach(v => {
      if (!obj[v]) { obj[v] = { s1: 0, s2: 0, s3: 0, }; }
      if (!obj[v * r]) { obj[v * r] = { s1: 0, s2: 0, s3: 0, }; }
      count += obj[v].s3;
      obj[v * r].s3 += obj[v].s2;
      obj[v * r].s2 += 1;
  })
  return count
}

// 조금 더 코드에 대한 이해가 필요.