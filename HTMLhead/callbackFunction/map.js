const arr = [1,2,3,4,5]

function map(arr) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push([arr[i] * i, arr])//what you want
    }
    return newArr
}

//what we made
const mappedValue = arr.map((v, i, arr) => {
    return [v * i, arr]
})

console.log(mappedValue)

const functionValue = map(arr)
console.log(functionValue)