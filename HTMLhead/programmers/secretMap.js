
function solution(n, arr1, arr2) {
    var arr = new Array(n).fill('')
    arr1.forEach((v, i) => {
        arr1[i] = v.toString(2)
    })
    arr1.forEach((v, i) => {
        for(let j = v.length; j < n; j++) {
            arr1[i] = '0' + arr1[i]
        }
    })
    arr2.forEach((v, i) => {
        arr2[i] = v.toString(2)
    })
    arr2.forEach((v, i) => {
        for(let j = v.length; j < n; j++) {
            arr2[i] = '0' + arr2[i]
        }
    })
    
    arr1.forEach((v, i) => {
        for(let j = 0; j < arr1.length; j++) {
            if(arr1[i][j] === '0' && arr2[i][j] === '0') {
                arr[i] = arr[i] + ' '
            }else if(arr1[i][j] === '1' || arr2[i][j] === '1') {
                arr[i] = arr[i] + '#'
            }
        }
    });
    return arr
}


const arr1 = [9, 20, 28, 18, 11]
const arr2 = [30, 1, 21, 17, 28]
console.log(solution(5, arr1, arr2))