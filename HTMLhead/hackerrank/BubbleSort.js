function countSwaps(a) {
    var swap = 0;
    for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < a.length-1; j++) {
            if(a[j] > a[j+1]) {
                let k = a[j]
                let l = a[j + 1]
                a[j+1] = k
                a[j] = l
                swap++
            }
        }
    }
    console.log(a)
    console.log(`Array is sorted in ${swap} swaps.
First Element: ${a[0]}
Last Element: ${a[a.length-1]}`)
}