
function solution(num, total) {
    var answer = [];
    let sum =0;
    let s_val = parseInt((total / num)); //3
    let i = 0;
    //3개의 연속된 수를 더해서 12를 만들려면 12/3=4>> 4부터 검사해보면 된다.
  
for(let j = 0; j < num / 2 + 1; j++){
    console.log('j:'+ j);
    for(i = 0; i < num; i++){
        console.log('i:'+ i);
        sum += s_val;
        console.log('s_val:'+s_val);
        s_val += 1;;
        console.log('sum:'+sum);
    }
    if(sum==total){
        for(i= num-1 ; i >= 0; i--){
            answer[i] = s_val - 1;
            s_val-=1;
        }
        break;
    }
    else{
        s_val= s_val-num - 1;
        sum=0;
    }
}
    console.log(answer);
    return answer;
}

solution(5,5);

/*
function solution(num, total) {
    var min = Math.ceil(total/num - Math.floor(num/2));
    var max = Math.floor(total/num + Math.floor(num/2));

    return new Array(max-min+1).fill(0).map((el,i)=>{return i+min;});
}
*/