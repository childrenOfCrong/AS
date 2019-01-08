function from(likeArray) {
    const item = Object(likeArray)
    const len = likeArray.length
    let i = 0
    const ret = new Array(len)
    while(i < len) {
        ret[i] = item[i]
        i++
    }
    return ret
}

console.log(from('strin'))