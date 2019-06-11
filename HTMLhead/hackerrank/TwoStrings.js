function twoStrings(s1, s2) {
  let bool = 'NO'
  const firStr = new Set(s1.split(''));
  const secStr = new Set(s2.split(''));
  firStr.forEach(v => {
      if (secStr.has(v)) bool = 'YES'
      return;
  })
  return bool;
}