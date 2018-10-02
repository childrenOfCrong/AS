### BigO / 세타, 오메가 


정의는 F(x)<= O(g(x))

일정 큰 수 N에서 
F(x)<=G(x)을 만족하는 C 결국 최악의 성능 
입력의 크기가 충분히 커진 상태에서 최악의 성능을 보장

괜찮은 편에 속하는 BigO O(1), O(logN), O(n) , O(nlogn)
어지간하면 제꺼야 하는 BigO O(n^2), O(2^n), O(n!)....

BigO를 아는 것이 왜 중요하다고 생각하는지 ?
문제 해결의 척도를 파악할 수 있다. 
에를 들어 배열구조에서 추가하는데는 O(n)
Search O(1)
이런식으로 어떤 자려구조나 문제 Solution이 좋은 해결책인지 아닌지를 가늠하기 용이하다 ! 


### 참고 

일정 큰 수의  n에서 
BigO와 반대인 오메가표기법 
0<= cG(x) <= f(x)를 만족하는 최고의 성능을 예측할 때 쓰임 

세타표기법은  빅오메가<  <빅오 
0<= c1G(x)<f(x)<= c2g(x) 구간으로 수렴하는 부분 


### Cf 칸아카데미 
big-Θ표기법을 사용하는 것은 실행 시간에 대해 점근적으로 근접한 한계값이 있다고 표현하는 것입니다. "점근적으로"라는 말을 쓰는 이유는 큰 값의 n nn에 대해서만 적용되기 때문입니다. "근접한 한계값"이라는 말은 위, 아래로 상수값 내에서 실행 시간을 좁힐 수 있다는 뜻입니다.

![칸아카데미_점근적표기법](https://ko.khanacademy.org/computing/computer-science/algorithms/asymptotic-notation/a/big-big-theta-notation)
![BigO](https://m.blog.naver.com/PostView.nhn?blogId=foat3376&logNo=70173424002&proxyReferer=https%3A%2F%2Fwww.google.co.kr%2F)