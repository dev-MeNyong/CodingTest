var commons =[1,2,3,4];
var v = [2,4,8];
//등차수열

function solution(common) {
  const value=common[1]-common[0];
  const divide_val=common[1] / common[0];

  let len = common.length;

  let cnt = 0;
  for(let i = 1; i <  len - 1 ; i++){
    if(common[i+1] - common[i] === value){ //등차수열
        cnt = cnt + 1;
        if(cnt == len - 2){
            answer = common[len - 1]+value;
            cnt = 0;
            return answer;
        }
    }
    else if(common[i+1]/common[i]===divide_val){ //등비수열
        cnt = cnt + 1;
        if(cnt == len - 2){
            answer = common[len - 1] * divide_val;
            cnt = 0;
            return answer;
        }
    }
  }
  return answer;
}

console.log(solution(commons));
console.log(solution(v));
/*
pop()쓸 생각을 안했다... 
기본 전제가 등차수열 아니면 등비수열을 입력해주는 것이기 때문에 위에처럼 다 검사할 필요는 없었던 것.

function solution(common) {
    if ((common[1]-common[0])==(common[2]-common[1])){
        return common.pop() + common[1] - common[0];
    }
    else{
        return common.pop()*common[1]/common[0];
    }
}
*/