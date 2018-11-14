class LinkedList {
    constructor() {
        this.length = 0
        this.head = null
    }
}

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class List {
    constructor(linkedList) {
        this.linkedList = linkedList
    }

    add(value) {//앞에부터 더하는 방식
        let node = new Node(value)
        let current = this.linkedList.head
        if (current === null) {
            this.linkedList.head = node
            this.linkedList.length++
            return
        }
        while (current.next) {
            current = current.next
        }
        current.next = node
        this.linkedList.length++
        return node
    }

    remove() {//앞의값만 지우는 방식
        var remove = this.linkedList.head;
        this.linkedList.head = this.linkedList.head.next; // head를 두 번째 노드로 교체
        this.linkedList.length--;
        return remove;
    }
}

const linkedList = new LinkedList()
const list = new List(linkedList)

