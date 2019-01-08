function solution(ans) {
    var ans1 = 0
    var bA1 = []
    var arr1 = [1, 2, 3, 4, 5]
    var anslength = ans.length
    while (anslength >= 5) {
        anslength = anslength - 5
        bA1 = bA1.concat(arr1)
    }
    bA1 = bA1.concat(arr1)
    ans.forEach((v, i) => {
        if (bA1[i] === ans[i]) {
            ans1 = ans1 + 1
        }
    })
    var ans2 = 0
    var bA2 = []
    var arr2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var anslength2 = ans.length
    while (anslength2 >= 8) {
        anslength2 = anslength2 - 8
        bA2 = bA2.concat(arr2)
    }
    bA2 = bA2.concat(arr2)
    ans.forEach((v, i) => {
        if (bA2[i] === ans[i]) {
            ans2 = ans2 + 1
        }
    })
    var ans3 = 0
    var bA3 = []
    var arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    var anslength3 = ans.length
    while (anslength3 >= 10) {
        anslength3 = anslength3 - 10
        bA3 = bA3.concat(arr3)
    }
    bA3 = bA3.concat(arr3)
    ans.forEach((v, i) => {
        if (bA3[i] === ans[i]) {
            ans3 = ans3 + 1
        }
    })
    if (ans1 === ans2 && ans1 === ans3) {
        let blank1 = []
        blank1.push(1, 2, 3)
        return blank1
    } else if (ans1 === ans2 && ans1 > ans3) {
        let blank2 = []
        blank2.push(1, 2)
        return blank2
    } else if (ans1 === ans3 && ans1 > ans2) {
        let blank3 = []
        blank3.push(1, 3)
        return blank3
    } else if (ans2 === ans3 && ans2 > ans1) {
        let blank4 = []
        blank4.push(2, 3)
        return blank4
    } else if (ans1 > ans3 && ans1 > ans2) {
        let blank5 = []
        blank5.push(1)
        return blank5
    } else if (ans2 > ans3 && ans2 > ans1) {
        let blank6 = []
        blank6.push(2)
        return blank6
    } else if (ans3 > ans1 && ans3 > ans2) {
        let blank7 = []
        blank7.push(3)
        return blank7
    }
}

var ans = [5,1,2,3,4,1,5,2,3,4,1,2,3,4,1,4,2,5,3,4,1,2,3,4,2,3,4,1,2,3,4,5]
console.log(solution(ans))

