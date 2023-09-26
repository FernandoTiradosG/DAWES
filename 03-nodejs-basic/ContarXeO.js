const text = 'xoxo';

function countXO(){
    let result = true;
    let numberX = 0;
    let numberY = 0;

    for(let i= 0; i<= text.length; i++){
        if (text[i] === 'x'){
            numberX += 1;
        } else if (text[i] === 'o'){
            numberY += 1;
        }
    }

    if(numberX !== numberY){
        result = false;
    }
    console.log('¿Hay el mismo numero de X que de O? ' + result)
}

countXO(text)