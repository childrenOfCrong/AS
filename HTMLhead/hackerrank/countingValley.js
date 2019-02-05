function solution(n, s) {
	const updownArray = s.split('');
	let costNum = 0;
	let answer = 0;
	updownArray.forEach((v, i) => {
		if(v === 'D') {
			costNum--
		} else {
			costNum++
		}
		if(costNum === 0 && updownArray[i] === 'U') answer++
	})
	return answer
}

console.log(solution(8, 'UDDDUDUU'));
