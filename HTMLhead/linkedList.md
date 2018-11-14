##linkedList
연결 리스트는 여러 개의 노드로 이루어져 있습니다. 각각의 노드는 데이터와 다음 노드가 뭔지 알려주는 주소를 가지고 있습니다. 또한 연결 리스트는 새로운 데이터를 추가하거나, 데이터의 위치를 찾거나, 제거하는 기능이 있어야 합니다.

1->2->3->4->5 라는 연결 리스트가 있다면 1,2,3,4,5는 데이터고 ->는 주소입니다. 안타깝게도, 이미 자바스크립트에는 이것이 구현되어 있습니다. 바로 배열입니다. [1,2,3,4,5]가 있으면 1,2,3,4,5는 데이터이고, array[0], array[1] 등은 데이터가 담긴 위치를 말해주고 있습니다.

배열이 철수 1번, 영희 2번, 민수 3번, 순이 4번...식으로 자료의 순번을 맞춘다면, 연결리스트는 철수 다음 영희, 영희 다음 민수, 민수 다음 순이....식으로 자료를 연결해놓습니다. 따라서 배열과는 달리 새로운 자료, 즉 노드를 뒤에 연결하거나 중간에 노드 몇개를 껴놓는 것이 쉽습니다. 하지만 배열에서는 자료마다 번호가 있어서 특정한 자료를 불러내기가 편리한 반면, 연결리스트는 자료 번호가 없이 그저 연결 관계만 있기 때문에 특정한 노드를 불러내기 어려운 단점이 있다고 합니다.

간단하게 배열은 주소가 있고 원하는 값을 마음대로 빼서 사용할 수 있지만, 연결 리스트는 그렇지 않다는겁니다.
이것을 억지로 객체를 사용해서 자바스크립트로 구현해보자면

```javascript
class LinkedList {//전체 linkedList
    constructor() {
        this.length = 0
        this.head = null
    }
}

class Node {//현재 들어가는 노드객체
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class List {//add와 remove함수를 프로토타입으로 만들기 위한 list class
    constructor(linkedList) {
        this.linkedList = linkedList
    }

    add(value) {//앞에부터 들어가는 방식
        let node = new Node(value)//값으로 새 노드값 생성
        let current = this.linkedList.head//현재값은 linkedlist객체의 head값
        if (current === null) {//현재값이 비어있다면 head에 새로운 node값 삽입
            this.linkedList.head = node
            this.linkedList.length++
            return;
        }
        while (current.next) {//아니라면 next값이 null이 될때까지 찾다가
            current = current.next
        }
        current.next = node//null인순간 current.next를 node로 만듬
        this.linkedList.length++//길이늘려주고
        return;
    }

    remove() {//앞의값만 지우는 방식
        this.linkedList.head = this.linkedList.head.next; // head를 두 번째 노드로 교체
        this.linkedList.length--;
        return;
    }
}

const linkedList = new LinkedList()
const list = new List(linkedList)
```

위와같습니다. 위의코드는 한쪽 방향으로밖에 추가하지 못하고, 한쪽 방향으로밖에 제거하지 못합니다. 이를 해결한 리스트가 있는데, 이는 이중 연결 리스트입니다. 이는 편하게 앞과 뒤로 노드를 왔다갔다하게 만들 수 있습니다.
그냥 배열을 사용하면 될텐데 뭣하러 이런 짓...아닙니다.

