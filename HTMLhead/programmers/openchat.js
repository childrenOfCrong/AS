function solution(record) {
    const answer = []
    const user = {}

    record.forEach(v => {
        const [command, id, nick] = v.split(' ');
        if(command === 'Enter' || command === 'Change') user[id] = nick
    });

    record.forEach(v2 => {
        const [command, id] = v2.split(' ')
        if(command === 'Enter') answer.push(`${user[id]}님이 들어왔습니다.`)
        if(command === 'Leave') answer.push(`${user[id]}님이 나갔습니다.`)
    })
    return answer
}
solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"])

