class Node {
    constructor(data) {
        this.data = data
        this.next = null 
    }
}

class LinkedList {
    constructor() {
        this.length = 0
        this.head = null
    }
    
    add(value) {
        var node = new Node(value)
        if(this.head === null) {
            this.head = node
            this.length++
            return;
        }
        while(this.head.next !== null) {
            this.head = this.head.next
        }
        this.head.next = node
        this.length++
        return node
    }

    search(position) {
        
    }

    remove() {
        
    }
}

const linkedList = new LinkedList()
console.log(linkedList)
linkedList.add(3)
linkedList.add(4)
linkedList.add(5)
console.log(linkedList)

