// function solution(n)
// {
//     let obj = makeO(n);
//     return obj[n];
// }
// function makeO(n, obj={}){
//     for(let i = 1; i <= n; i++){
//         if(obj[i/2]){
//             obj[i] = obj[i/2];
//         } else {
//             obj[i] = getK(i, obj);
//         }
//     }
//     return obj;
// }
// function getK(n, obj){
//     if(n === 0) return 0;
//     if(n === 1 || n === 2) return 1;
//     return obj[n - 1] + 1;
// }

// function solution(n)
// {
//     let obj = {'0': 0, '1': 1, '2': 1};
//     let target = +divide(n);
//     for(let i = 1; i <= +target; i++){
//         if(obj[i/2]){
//             obj[i] = obj[i/2];
//         } else {
//             obj[i] = obj[i - 1] + 1;
//         }
//     }
//     return obj[target];
// }

// function divide(n){
//     if(Number.isInteger(n/2)){
//         return divide(n/2);
//     } else return n;
// }

function solution(n)
{
    let obj = {'0': 0, '1': 1, '2': 1};
    let number = 2;
    while(number <= n){
        obj[number] = 1;
        obj[number+1] = 2;
        obj[number+3] = 2;
        obj[number+5] = 3;
        obj[number+7] = 2;
        obj[number+13] = 4;
        number = number*2;
    }
    if(obj[n]) return obj[n];
    while(Number.isInteger(n/2)){
        n = n/2;
    }
    for(let i = 1; i <= n; i++){
        if(obj[i/2]){
            obj[i] = obj[i/2];
        } else {
            obj[i] = obj[i - 1] + 1;
        }
    }
    return obj[n];
}

solution(20000000);