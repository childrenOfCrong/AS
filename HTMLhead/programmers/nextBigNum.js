function solution(n) {
    let arr1 = n.toString(2).split('');
    let ONum = 0
    arr1.forEach(v => {
        if(v === '1') {
            ONum++
        }
    })
    let i = n + 1
    let ONum2 = 0
    while(ONum !== ONum2) {
        ONum2 = 0
        let arr2 = i.toString(2).split('')
        arr2.forEach(v => {
            if(v === '1') {
                ONum2++
            }
        })
        i++
        console.log(ONum2)
    }
    return i - 1
}