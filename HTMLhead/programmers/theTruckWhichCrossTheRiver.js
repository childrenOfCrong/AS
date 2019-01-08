function solution(length, limWeight, truckWeight) {
    const bridge = [];//이게 dequeue
    const truck = truckWeight.map(v => {
        return { weight: v, loc: 0 }
    })//truck마다 위치를 알수 있도록 설정.
    let result = 0//시간
    let weightSum = 0//무게의 합변수
    while (bridge.length !== 0 || truck.length !== 0) { //두개다 비워질 때까지
        if (bridge[0] !== undefined) {//만약 브릿지가 안비워져있다면?
            if (length === bridge[0].loc) {
                weightSum = weightSum - bridge[0].weight//총무게합에서 브릿지맨앞에있는 트럭의 무게를 뺌과동시에
                bridge.shift()//브릿지에서뺌
                if(bridge.length === 0 && truck.length === 0) {
                    break;//만약 두개다 비워진다면 반복문끝냄
                }
            }
        }
        if(truck[0] !== undefined){ //트럭배열이 안비워져있다면?
            let chTruck = truck.shift()//트럭배열 맨앞에서 빼서 현재트럭을 체크 (이것도 덱큐)
            bridge.push(chTruck) //브릿지 디큐에 맨앞에 넣음.
            weightSum = weightSum + chTruck.weight//과동시에 더함
            if (weightSum > limWeight) {//근데 크다면
                weightSum = weightSum - chTruck.weight//무게다시빼고
                truck.unshift(bridge.pop())//브릿지 맨끝값을 빼서 트럭배열 맨앞에 다시 넣음.
            }
        }
        bridge.forEach(v => {
            v.loc++//위치값 더해주기
        })
        result++//시간 더해주기
    }
    return result + 1//근데 마지막 트럭이 나갈때 result++을 못해주니까 마지막에 + 1 해주기
}

console.log(solution(100, 100, [10]))