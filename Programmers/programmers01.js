var babblings = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];

function solution(babbling) {
    var answer = 0;
    let k =0;
    const possible_word=["aya","ye","woo","ma"];
    for(let i = 0; i < babbling.length; i++) //babbling문자열 한바퀴 돌림
    {
        for(let j = 0 ; j<possible_word.length; j++){
            if (babbling[i].includes(possible_word[j])) { //발음할 수 있는 단어를 포함하고 있다면
                //maa >>i=3, j =3
                const word = possible_word[j];//포함하는 글자 word변수에 넣고
               babbling[i] = babbling[i].replace(word,'0');//문자열에서 빈값으로 대체한다(제거한다.)
                console.log('word:'+ word);
                console.log('i:'+ i);
                console.log('j:'+ j);
                console.log('babbling:'+babbling[i]);
                console.log('babbling_length:' + babbling[i].length);
                var pp='';
                for(let p = 0; p<babbling[i].length; p++){
                    pp+='0'
                    console.log(pp);
                }
               if(babbling[i]==pp){
                answer+=1;
                console.log('answer:'+ answer);  
               }
            }
        }
    }
    console.log(answer);
    return answer;
}
solution(babblings);
   