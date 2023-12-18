
export function fizzBuzz(max){
   
    if (max%3 === 0 && max%5 === 0){
        return 'fizzbuzz';
    }else if(max%3 === 0){
        return 'fizz';
    }else if(max%5 === 0){
        return 'buzz';
    }else if (max <= 0){
        throw new Error("Number must be greater than 0")
    }else {
        return max;
    }
}

fizzBuzz(20)