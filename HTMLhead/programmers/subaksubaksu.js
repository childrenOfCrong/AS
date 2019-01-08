function solution(n) {
    //공백 ans선언
    var ans = ''
    var word = '수박'
    //숫자가 2가 될때마다 '수박'을 입력하고 3일때엔 '수박'을 입력 후에 '수'를 한번더 입력하게 만듬
    if(n % 2 === 0) {
        for (let i = 1; i <= n; i++) {
            i++
            ans+=word
            return ans
        }
    }else{
        for (let i = 1; i < n; i++) {
            i++
            ans+=word
        }
        ans+='수'
    }
    return ans
}