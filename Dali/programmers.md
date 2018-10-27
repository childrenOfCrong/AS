### level01

### 01 회차

- [disLikeSameNumber](https://gist.github.com/amorfati0310/a05df31668bc3b26a284ffc8119f1be8)
- [완주하지 못한선수](https://gist.github.com/amorfati0310/0c2cc0e2131f683845fb56c1f4c12c62)
- [나누어 떨어지는 숫자배열](https://gist.github.com/amorfati0310/8e66e0e15316bbd2e1940474defc2b49)
- [2016 년](https://gist.github.com/amorfati0310/4028a345889e1ec2668f783219f2b896)
- [문자열 내림차순으로 배치하기](https://gist.github.com/amorfati0310/829c68dc2b6b12685f35bc2058133f52)
- [시저암호](https://gist.github.com/amorfati0310/e27f175658cec604434d241bef2d4eb2)
- [최대공약수와 최소공배수](https://gist.github.com/amorfati0310/54391c3cffcad3fc1ce7066cb2858854)
- [무지의 먹방 라이브](https://gist.github.com/amorfati0310/badadc9aeabbcdcf4c4bb95b90cd15fd)

### 02 회차

1. [체육복](https://gist.github.com/amorfati0310/0bce89f8a71f0fe9699fe07c11bf8efd)
1. [N 으로 표현](https://programmers.co.kr/learn/courses/30/lessons/42895?language=javascript)
1. [모의고사](https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript)
1. [오픈채팅방](https://programmers.co.kr/learn/courses/30/lessons/42888?language=javascript)
1. [이상한 문자 만들기](https://programmers.co.kr/learn/courses/30/lessons/12930?language=javascript)
1. [달리의 문제 1](https://repl.it/@bgando/stack-prompt)
1. [달리의 문제 2](https://repl.it/@bgando/queue-prompt)

greedy?
체육복

2-1

- BigO 점진적 접근법

```js
const fibMemo = (n, cache = [0, 1, 1]) => {
  //1,1,2,3,5,8,13,21,34,55
  if (cache[n]) return cache[n];
  else {
    return (cache[n] = fibMemo(n - 2, cache) + fibMemo(n - 1, cache));
  }
};

console.log(fibMemo(100));
```

# 181004

- 풀어야 할 알고리즘 문제

1. [문자열 내 마음대로 정리하기](https://gist.github.com/amorfati0310/8716a9a88c513ff6519d9a6d517ba8c2)
1. [탑](https://gist.github.com/amorfati0310/c5f96e3d81d6e9f2081364b41b7650f8)
1. [정수 내림차순으로 배치하기](https://gist.github.com/amorfati0310/49f20c73fd8b66cbf215ffbb4b09d6fb)
1. [직사각형 별찍기](https://gist.github.com/amorfati0310/ed201cd4c63f42a2ba1e1212b35d5966)
1. [비밀지도](https://gist.github.com/amorfati0310/77f98004a693310b4d5a73dcefa59b14)
1. [하샤드 수](https://gist.github.com/amorfati0310/10f9f3e1964df05552be6cb719826643)
1. [폰켓몬](https://gist.github.com/amorfati0310/94b34f7cdc267751b8bc101b03f180b8)

### next

    1. [n으로 표현](https://gist.github.com/HTMLhead/25ac0507df85bc082e73c6df12f85f0c)

### 10 월 2 주차 문제

1. [콜라츠 추측](https://gist.github.com/amorfati0310/58193aa3cf57675c074912a6a3946692)
1. [x 만큼 간격이 있는 n 개의 숫자](https://gist.github.com/amorfati0310/19a48ea971c3785379ddf5319c256963)
1. [다음 큰 숫자](https://gist.github.com/amorfati0310/c12d34789e6eca6bd707559a6c9074f0)
1. [124 나라의 숫자](https://gist.github.com/amorfati0310/156e7cb3cceacd5121869a699c8bd947)
1. [가장 큰 정사각형](https://programmers.co.kr/learn/courses/30/lessons/12905?language=javascript)
1. [피보나치 복습](https://gist.github.com/amorfati0310/4bb8749481b2eb597ea80901c49e2dcd)
1. [실패율](https://gist.github.com/amorfati0310/7f1bcb52e42ca3a021ed76d00bc4f707)

- 화요일까지 해야 할 것

1. Set 에대해 공부해보기

### 10 월 3 주차 + 밀린 문제 풀기

1. 문제: [실패율](https://programmers.co.kr/learn/courses/30/lessons/42889?language=javascript) 풀이 : [실패율](https://gist.github.com/amorfati0310/ce56dcb28f54fe0fee4d5d1a08daa83d)

1. 문제: [올바른 괄호](https://programmers.co.kr/learn/courses/30/lessons/12909?language=javascript) 풀이: [올바른 괄호](https://gist.github.com/amorfati0310/e5c4909e6cca454accea80d9af809221)

1. 문제: [프린트](https://programmers.co.kr/learn/courses/30/lessons/42587?language=javascript)
   풀이: [풀이](https://gist.github.com/amorfati0310/ce56dcb28f54fe0fee4d5d1a08daa83d)

### 아직 싱크 맞춰야 될 문제들

1. 문제: [위장](https://programmers.co.kr/learn/courses/30/lessons/42578?language=javascript)풀이 : [실패율](https://gist.github.com/amorfati0310/37063d4578467ae659691e29dc77e1d0)

1. 문제: [가장 큰 정사각형](https://programmers.co.kr/learn/courses/30/lessons/12905?language=javascript)

3) 문제: [프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42895?language=javascript)
   풀이: [N 으로 표현]()

4) 문제: [프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12921?language=javascript)
   풀이: [소수찾기]()

5) 문제: [프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript)
   풀이: [모의고사]()

6) 문제: [오픈채팅방](https://programmers.co.kr/learn/courses/30/lessons/42888?language=javascript)

[달리의 문제 1](https://repl.it/@bgando/stack-prompt)
[달리의 문제 2](https://repl.it/@bgando/queue-prompt)

### 10 월 4 주차 문제

# 181025

- 풀어야 할 알고리즘 문제
  1. [코딜리티](https://app.codility.com/programmers/custom_challenge/krypton2018/)의 lesson2 까지 해결하기.
  1. [프로그래머스 문제 : 땅따먹기](https://programmers.co.kr/learn/courses/30/lessons/12913)
