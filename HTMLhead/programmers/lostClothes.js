function solution(n, lost, re) {
    var haveN = n - lost.length
    var lostarr = lost.filter(v => {
        return re.indexOf(v) === -1
    })
    var rearr = re.filter(v => {
        return lost.indexOf(v) === -1
    })
    haveN = haveN + (lost.length - lostarr.length)
    
    lostarr.forEach(v => {
        debugger;
        if(rearr.indexOf(v + 1) !== -1) {
            haveN = haveN + 1
            rearr[rearr.indexOf(v + 1)] = -5
        } else if (rearr.indexOf(v - 1) !== -1) {
            haveN = haveN + 1
            rearr[rearr.indexOf(v - 1)] = -5
        }
    })

    return haveN
}

let n = 10;
let lost = [1, 2, 3, 4, 10];
let reserve = [2, 3, 4, 9];
 
console.log(solution(n, lost, reserve))