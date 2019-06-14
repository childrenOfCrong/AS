function solution(skill, skillTree) {
  let answer = 0;
  skillTree.forEach((v, index) => {
    let skill1 = skill.slice();
    for (let i = 0; i < skill1.length; i++) {
      for (let ski of v) {
        if (skill1[i] === ski) {
        }
      }
    }
  });
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);
