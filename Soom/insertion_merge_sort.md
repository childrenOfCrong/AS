**삽입정렬(Insertion Sort)**
: 두 번째 숫자부터 뽑아서 그 숫자가 첫 번째 숫자보다 크면 첫 숫자 오른쪽에, 작으면 왼쪽에 위치하도록 함

로직: 
1) 현재 인덱스를 별도의 변수에 저장한 후 비교 인덱스를 현재 인덱스 -1로 잡는다.
2) 별도로 저장해 둔 삽입을 위한 변수와 비교 인덱스의 배열 값을 비교한다.
3) 삽입 변수의 값이 더 작으면 현재 인덱스에 비교 인덱스 값을 저장하고, 비교 인덱스를 -1 하여 비교 반복한다.
4) 삽입 변수가 더 크면 비교 인덱스 +1 에 삽입변수를 저장한다. 

시간 복잡도: O(N^2) - 최악의 경우(역으로 정렬되어 있을 때) n-1, n-2, ... 1개를 비교 반복해야 함으로. 

장점: 
1) 적은 양의 데이터를 정렬할 때 효율적
2) 이미 정렬된 데이터를 정렬할 때 효율적(O(n))
3) stable

단점: 
1) 큰 데이터를 정렬하는 데 비효율적ㅋ


코드
```javascript
var insertionSort = function(array) {
  var i = 1, j, temp;
  for (i; i < array.length; i++) {
    temp = array[i]; // 새로운 숫자를 선택함
    for (j = i - 1; j >= 0 && temp < array[j]; j--) { // 선택한 숫자를 이미 정렬된 숫자들과 비교하며 넣을 위치를 찾는 과정, 선택한 숫자가 정렬된 숫자보다 작으면
      array[j + 1] = array[j]; // 한 칸씩 뒤로 밀어낸다
    }
    array[j + 1] = temp; // 마지막 빈 칸에 선택한 숫자를 넣어준다.
  }
  return array;
};
insertionSort([5, 6, 1, 2, 4, 3]); // [1, 2, 3, 4, 5, 6]
```

삽입정렬로 풀 수 있는 알고리즘 문제



**합병정렬(Merge Sort)**
: 분할 정복(Divide and conquer)방식으로 원소 갯수가 1 또는 0이 될 때까지 두 부분으로 쪼개어 자른 순서의 역순으로 크기 비교하여 병합 / 왼쪽 소트, 오른쪽 소트, 합친당!

개발자: 폰 노이만(John von Neumann) - 1945
![image](https://user-images.githubusercontent.com/40848630/47828051-a2d50c80-ddc4-11e8-984d-0d0775f80c2a.png)

![image](https://user-images.githubusercontent.com/40848630/47840944-4e00b880-ddfb-11e8-824e-2334a27f3150.png)

![image](https://user-images.githubusercontent.com/40848630/47839320-b9e02280-ddf5-11e8-8c3e-83c19eaeb184.png)

로직: 
<분할 과정>
1. 현재 배열을 반으로 쪼갠다. 배열의 시작 위치와 종료 위치를 입력받아 둘을 더한 후 2로 나눠 그 위치를 기준으로 나눈다.
2. 이를 쪼객 배열의 크기가 0이나 1이 될 때까지 반복한다. 

<합병 과정>
1. 두 배열 A,B의 크기를 비교. (각각의 인덱스 i, j)
2. i에는 A배열의 시작 인덱스를 저장하고, j에는 B배열의 시작 주소를 저장한다.
3. A[i]와 B[j] 비교. 오름차순의 경우 이중에 작은 값을 새 배열 C에 저장. A[i]가 더 크다면 A[i]의 값을 배열 C에 저장해주고, i의 값을 하나 증가시킨다.
4. i나 j 둘 중 하나가 각자 배열의 끝에 도달할 때까지 반복
5. 끝까지 저장하지 못한 배열의 값을 순서대로 전부 C에 저장
6. C 배열을 원래 배열에 저장한다.


시간 복잡도: O(NlogN)
분할 과정 = logN (매번 반씩 감소하므로)
합병 과정 = O(NlogN) (각 분할별로 합병 진행)

장점: 
1) 어떤 사이즈의 데이터에도 사용 가능
2) stable (같은 숫자의 경우에도 순서가 뒤바뀌지 않음) 

단점:
1) 분할된 리스트를 저장해둘 동간이 필요하므로 메모리 소모량이 큼 

코드
```javascript
var mergeSort = function(array) {
  if (array.length < 2) return array; // 원소가 하나일 때는 그대로 내보냅니다.
  var pivot = Math.floor(array.length / 2); // 대략 반으로 쪼개는 코드
  var left = array.slice(0, pivot); // 쪼갠 왼쪽
  var right = array.slice(pivot, array.length); // 쪼갠 오른쪽
  return merge(mergeSort(left), mergeSort(right)); // 재귀적으로 쪼개고 합칩니다.
}
function merge(left, right) {
  var result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) { // 두 배열의 첫 원소를 비교하여
      result.push(left.shift()); // 더 작은 수를 결과에 넣어줍니다.
    } else {
      result.push(right.shift()); // 오른쪽도 마찬가지
    }
  }
  while (left.length) result.push(left.shift()); // 어느 한 배열이 더 많이 남았다면 나머지를 다 넣어줍니다.
  while (right.length) result.push(right.shift()); // 오른쪽도 마찬가지
  return result;
};

mergeSort([5,2,4,7,6,1,3,8]); // [1, 2, 3, 4, 5, 6, 7, 8]
```