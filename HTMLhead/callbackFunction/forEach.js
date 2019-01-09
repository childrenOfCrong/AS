const array = ['a','b','c','d','f']

array.forEach((v, i, arr) => {
    console.log(v, i, arr)
})

function foreach(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
        console.log(i)
        console.log(array)
    }
}

foreach(array)