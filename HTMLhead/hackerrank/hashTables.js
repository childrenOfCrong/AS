function checkMagazine(magazine, note) {
  let ret = 'Yes';
  const obj = {};
  magazine.forEach(v => (obj[v] = obj[v] ? obj[v]++ : 1));
  note.forEach(v => v = v || 0) - 1
  console.log(ret);
}
