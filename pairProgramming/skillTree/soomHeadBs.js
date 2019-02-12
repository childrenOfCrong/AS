function solution(skill, skill_trees) {
    let blank = [];
    let count = 0;
    for (let i = 0; i < skill_trees.length; i++) {
        let arr = [];
        for (let j = 0; j < skill_trees[i].length; j++) {
            if (skill.includes(skill_trees[i][j]))
                arr.push(skill_trees[i][j]);
        }
        blank.push(arr.join(''));
    }

    for (let i = 0; i < blank.length; i++) {
        if (blank[i].length === skill.length && blank[i] === skill) count++;
        else if (skill.slice(0, blank[i].length) === blank[i]) count++;
    }
    return count;
}