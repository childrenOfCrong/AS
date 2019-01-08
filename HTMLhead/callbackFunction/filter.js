const arr = [1,2,2,3,4,5]

function filter(arr) {
    ret = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) === i) {//이부분에 조건에 맞게 넣으면 됨.
            ret.push(arr[i])
        }
    }
    return ret
}

//what we made
console.log(arr.filter((value, index, array) => {
    return array.indexOf(value) === index
}));

console.log(filter(arr))
