function solution(A, B) {
    var cnt = 0;
    const len = A.length;
    let str,a;

for(let i = 0; i < len; i++){
     if(A == B){
        return cnt;
        break;
      }
        a = A [len - 1]; //e
        str = A .substring(0 , len - 1); //appl
        A  =  a.concat(str);
        cnt++;
            
        if(i == len - 1){
            cnt = -1;
            break;
         } 
    }
        return cnt;
}
console.log(solution('ab', 'ba'));

//사용해야할 것 같은 메소드: substring(2)>> pple이고 여기에 앞의 문자를 붙여주는 방법

//진짜 미친 코드
/*let solution=(a,b)=>(b+b).indexOf(a) */