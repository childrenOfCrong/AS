스택은 실생활에도 많이 사용되는 자료구조 중 하나입니다. 연결 리스트인데 뒤로 넣고 뒤로만 뺄 수 있습니다. 앞으로는 넣지도, 빼지도 못합니다. 쉽게 생각하면 자바스크립트 배열인데 shift, unshift 없이 push와 pop만 있다고 생각하시면 됩니다. 사실 push와 pop이라는 메소드 이름이 스택에서 나온 겁니다.

위로밖에 열리지 않은 상자에 상자크기가 딱 맞는 물건을 넣을 때를 생각하면 편할 것 같습니다. 새로운 물건을 넣을때는 제일 위에 넣을 수 밖에 없고, 물건을 꺼낼 때도 제일 위에있는 물건밖에 못 꺼내잖아요? 박스를 부수진 않을테니까요. 그것이 스택입니다. 

함수를 연이어 호출할 때에 있어서도 스택처럼 메모리에 쌓이(push)고, 쌓인 역순으로 하나씩 실행됩니다(pop).
```javascript
function one(value) {
    two(value + 1)
}
function two(value) {
    three(value + 1)
}

function three(value) {
    console.log(`${value} 내부함수는 이렇게 실행됩니다.`)
}

one(1)
```
자 상자를 떠올려 봅시다. 저희는 one이라는 함수를 호출함으로써 상자안에 one함수를 넣는겁니다. 그리고 one함수안에 two함수가 있네요? 그럼 상자에 또 two함수를 넣습니다. two함수 안에는 three함수가 있네요? 그럼 또 상자안에 three함수를 넣는겁니다. three함수안에는 console.log가 있으니 그 console.log를 실행해줍니다. 그럼 three함수가 실행되었으니 three함수를 상자 바깥으로 빼줍니다. 그리고 three함수가 모두 실행됨으로써 two함수도 모두 실행되었으니 .......이런식으로 가면 됩니다.

그럼, 자바스크립트로 스택을 한번 구현해 볼까요?

```javascript
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
```

저는 그냥 문자열을 이용해서 짜 보았습니다. 아마 틀릴 가능성이 높아요! 제로초의 블로그가 아닌 그냥 제가 만든거거든요. 이 자료구조 또한 그냥 배열의 push 와 pop을 이용 하면 아주 쉽습니다!

