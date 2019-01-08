process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    var garo = ''

    for(let i = 0; i < a; i++) {
        garo += '*';
    }
    var ret = ''
    for(let i = 0; i < b; i++) {
        ret += garo + '\n'
    }
    console.log(ret);
});
