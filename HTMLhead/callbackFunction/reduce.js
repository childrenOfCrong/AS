const arr = [
    {obj:1},
    {obj:2},
    {obj:3},
    {obj:4}
]

//what we make
console.log(arr.reduce((a, b) => {
    a + b['obj']
    return a + b['obj']
}, 10))

function reduce(arr, start) {
    let ret = start
    for(let i = 0; i < arr.length; i++) {
        ret = ret + arr[i]['obj']
    }
    return ret
}

console.log(reduce(arr, 10))