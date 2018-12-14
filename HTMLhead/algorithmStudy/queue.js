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
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()
queue.dequeue()
console.log(queue)
