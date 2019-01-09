function solution(arr, budget) {
    sortedBudget = arr.sort((a,b) => a-b)
    let count = 0
    for(let i = 0; i < sortedBudget.length; i++) {
        budget = budget - sortedBudget[i]
        if(budget < 0) {
            break;
        }
        count++
    }
    return count
}