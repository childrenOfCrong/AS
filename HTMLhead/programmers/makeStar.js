process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let answer = ''
    let width = ''
    for(let i = 0; i < a; i++) {
        width += '*';
    }
    
    for(let i = 0; i < b; i++) {
        answer += width + '\n';
    }
    console.log(answer)
});