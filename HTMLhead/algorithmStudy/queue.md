큐는 간단합니다. 통나무다리로 비유를 들 수 있겠죠. 먼저 들어간 사람이 먼저 나오는 구조입니다. stack과 어찌보면 정 반대의 자료구조라고 말할 수 있겠죠. 
stack구조를 설명할 때 짠 코드처럼 문자열로 만들어보자면 아래와 같습니다.
```javascript
class Queue {
    constructor() {
        this.data = ''
    }

    enqueue(value) {
        if(this.data.length === 0) {
            this.data = value
            return;
        }
        this.data = this.data + ',' + value
        return;
    }

    dequeue() {
        if(this.data.indexOf(',') === -1) {
            console.log(this.data)
            this.data = ''
            return;
        }
        const slicedData = this.data.slice(0, this.data.indexOf(','))
        console.log(slicedData)
        this.data = this.data.slice(this.data.indexOf(',')+1, this.data.length)
        return;
    }
}
const queue = new Queue
```
위의 코드도 배열의 shift와 push를 이용하면 매우 쉽습니다.