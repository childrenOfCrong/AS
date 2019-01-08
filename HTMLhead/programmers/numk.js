function solution(arr, cmds) {
    var ret = []
    for (let i = 0; i < cmds.length; i++) {
        if (cmds[i][0] === cmds[i][1]) {
            ret.push(arr[cmds[i][0] - 1])
        } else {
            var arr2 = arr.slice(cmds[i][0]-1, cmds[i][1])
            var arr3 = arr2.sort((a, b) => a - b)
            ret.push(arr3[cmds[i][2] - 1])
        }
    }
    return ret
}

//다른풀이

function solution(array, commands) {
    return commands.map(v => {
        return array.slice(v[0] - 1, v[1]).sort((a, b) => a - b).slice(v[2] - 1, v[2])[0];
    });
}