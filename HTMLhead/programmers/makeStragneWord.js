function solution(s) {
    var a = s.split(' ');
    console.log(a);
    var b = []
    a.forEach(v => {
        for(let i = 0; i < v.length; i++) {
            b.push(v[i].toUpperCase())
            if(i + 1 >= v.length) {
                b.push(' ')
                return;
            }
            b.push(v[i + 1].toLowerCase());
            i++
        }
        b.push(' ')
    })
    b.pop()
    var c = b.join('')
    return c;
}

console.log(solution('hello print world'))