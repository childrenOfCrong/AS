function solution(nums) {
    const WCG = nums.length /  2
    let SP = nums.filter((v, i, arr) => arr.indexOf(v) === i)  
    if(SP.length > WCG) {
        return WCG
    }
    return SP.length
}

console.log(solution([3,1,2,3]));
