class Stack {
    constructor() {
        this.data = ''
    }

    push(value) {
        if(this.data.length === 0) {
            this.data = value
            return;
        }
        this.data = this.data + ',' + value
        return;
    }

    pop() {
        if(this.data.indexOf(',') === -1) {
            console.log(this.data)
            this.data = ''
            return;
        }
        const slicedData = this.data.slice(this.data.lastIndexOf(',') + 1, this.data.length)
        console.log(slicedData)
        this.data = this.data.slice(0, this.data.lastIndexOf(','))
        return;
    }
}

const stack = new Stack
stack.push(3)
stack.push(4)
stack.push(5)
stack.push('ehi')
stack.pop()
stack.pop()
console.log(stack)

