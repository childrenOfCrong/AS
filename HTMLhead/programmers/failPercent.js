function solution(N, stages) {
    let len = stages.length;
    const arr = new Array(N+1).fill(0)
    stages.forEach(v => {
        arr[v-1] = arr[v-1] + 1
    })
    const failP = arr.map(v => {
        let val = v / len;
        len = len - v
        return val
    })
    const ret = failP.map((v, i) => {
        let percent = [i+1, Number(v)];
        return percent
    })
    ret.length = N
    ret.sort((a,b) => b[1]-a[1]);
    const retArr = [];
    ret.forEach(v => {
        retArr.push(v[0])
    })
    return retArr
}