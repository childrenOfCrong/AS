### level01

### 01회차

* [disLikeSameNumber](https://gist.github.com/amorfati0310/a05df31668bc3b26a284ffc8119f1be8)
* [완주하지 못한선수](https://gist.github.com/amorfati0310/0c2cc0e2131f683845fb56c1f4c12c62)
* [나누어 떨어지는 숫자배열](https://gist.github.com/amorfati0310/8e66e0e15316bbd2e1940474defc2b49)
* [2016년](https://gist.github.com/amorfati0310/4028a345889e1ec2668f783219f2b896)
* [문자열 내림차순으로 배치하기](https://gist.github.com/amorfati0310/829c68dc2b6b12685f35bc2058133f52)
* [시저암호](https://gist.github.com/amorfati0310/e27f175658cec604434d241bef2d4eb2)
* [최대공약수와 최소공배수](https://gist.github.com/amorfati0310/54391c3cffcad3fc1ce7066cb2858854)
* [무지의 먹방 라이브](https://gist.github.com/amorfati0310/badadc9aeabbcdcf4c4bb95b90cd15fd)

### 02회차

  1. [체육복](https://gist.github.com/amorfati0310/0bce89f8a71f0fe9699fe07c11bf8efd)
  1. [N으로 표현](https://programmers.co.kr/learn/courses/30/lessons/42895?language=javascript)
  1. [모의고사](https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript)
  1. [오픈채팅방](https://programmers.co.kr/learn/courses/30/lessons/42888?language=javascript)
  1. [이상한 문자 만들기](https://programmers.co.kr/learn/courses/30/lessons/12930?language=javascript)
  1. [달리의 문제 1](https://repl.it/@bgando/stack-prompt)
  1. [달리의 문제 2](https://repl.it/@bgando/queue-prompt)


  greedy? 
  체육복 

  2-1 
  * BigO 점진적 접근법
  ```js
const fibMemo = (n, cache = [0,1,1])=>{
  //1,1,2,3,5,8,13,21,34,55
  if(cache[n]) return cache[n];
  else {
    return cache[n] = fibMemo(n-2, cache)+fibMemo(n-1, cache)
  }
}

console.log(fibMemo(100))

  ```


  # 181004
* 풀어야 할 알고리즘 문제
    1. [문자열 내 마음대로 정리하기](https://gist.github.com/amorfati0310/8716a9a88c513ff6519d9a6d517ba8c2)
    1. [탑](https://gist.github.com/amorfati0310/c5f96e3d81d6e9f2081364b41b7650f8)
    1. [정수 내림차순으로 배치하기](https://gist.github.com/amorfati0310/49f20c73fd8b66cbf215ffbb4b09d6fb)
    1. [직사각형 별찍기](https://programmers.co.kr/learn/courses/30/lessons/12969?language=javascript)
    1. [비밀지도](https://programmers.co.kr/learn/courses/30/lessons/17681)
    1. [하샤드 수](https://programmers.co.kr/learn/courses/30/lessons/12947)
    1. [폰켓몬](https://programmers.co.kr/learn/courses/30/lessons/1845)
    
* 이번 지각비 : 0

* 언젠가는 풀것
    1. [n으로 표현](https://gist.github.com/HTMLhead/25ac0507df85bc082e73c6df12f85f0c)