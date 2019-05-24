var fs = require("fs");
var input = fs.readFileSync('test.text').toString();

function getNeed(input) {
  var needArr = input.split('\n');
  var tester = needArr[1]
  var superviser = needArr[2]
  var obj = {tester: tester, superviser: superviser}
  return obj
}

function solution(tester, superviser) {
  var testerArr = tester.split(' ');
  var answer = 0
  var superviserArr = superviser.split(' ');
  for(var i = 0; i < testerArr.length; i++) {
    if(testerArr[i] === 0) continue;
    testerArr[i] = testerArr[i] - superviserArr[0]
    answer++
  }
  for(var i = 0; i < testerArr.length; i++) {
    answer += Math.ceil(testerArr[i] / superviserArr[1]);
  }
  console.log(answer);
}

var needObj = getNeed(input)

solution(needObj.tester, needObj.superviser);