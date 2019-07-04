function sherlockAndAnagrams(s) {
  let count = 0;//주어지는 s는 문자열 abba, abba 순차적으로 함수가 실행됨
  for (let i = 1; i < s.length; i++) {
    let found = {};

    for (let j = 0; i + j <= s.length; j++) {
      let substr = s.substr(j, i);
      //string.substr( start, length ) 문자열에서 정해진 숫자만큼 빼줌.
      // 이중 반복문이니까 앞에 서부터 하나씩 뽑고, 그다음부터는 두개씩, 그다음부터는 3개씩 ~~  뽑을 수 있음
      substr = substr
        .split("")//bba를 예시로 들면 자르고
        .sort()//정렬해서
        .join("");//다시합침abb가 됨
        //자 abba 라면 a,a하나 b,b 하나 ab ,ba
        //여기서 substr이 a라면 found객체에 a가 존재하지 않으니 else문으로 가서
        //a를 집어넣음과 동시에 1로 만들어준다.
        //만약 있다면 count에 더해주고 substr을 더 덧셈해준다.
        //'abba'를 가지고 순차적으로 돌려보면
        // a? a+
        // b? b+
        // b? 있네? count+
        // a? 있네? count+
        // 첫번째 반복문 끝
        // ab? ab+
        // bb? bb+
        // ab? 있네? count+
        // abb? abb+
        // abb? 있네? count+
        // 고로 답은 4가 나오게 됨
      if (found[substr]) {
        count += found[substr];
        found[substr]++;
      } else {
        found[substr] = 1;
      }
    }
  }
  return count;
}
