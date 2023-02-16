function solution(my_str, n) {
    var answer = [];
    let i = 0;
while(my_str.length > 0){
        answer[i] = (my_str.substr(0,n));
        my_str = my_str.substring(n);
        i++;
    }
    return answer;  
}
console.log(solution("abc1Addfggg4556b",6));