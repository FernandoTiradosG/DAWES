
export function fizzBuzz(max){
    for(let i=1; i<=max; i++){
        if (i%3 === 0 && i%5 === 0){
            return 'fizzbuzz';
        }else if(i%3 === 0){
            return 'fizz';
        }else if(i%5 === 0){
            return 'buzz';
        }else {
            return i;
        }
    }
}

fizzBuzz(20)