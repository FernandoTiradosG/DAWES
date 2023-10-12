const arr = [4, 48, 13, 1, 9]


/*if (arr.join().includes('7')){
    console.log('Boom');
} else {
    console.log('Enhorabuena, su Array no tiene el 7');
}

const sevenBoom arr.join('').includes('7') ? 'Boom!' : 'there is no 7 in the array'*/

const seven = /7/g;
const found = arr.toString().match(seven)

if (found.includes('7')){
    console.log('Boom');
} else {
    console.log('Enhorabuena, su Array no tiene el 7');
}
//const solution = arr.toString().match(seven).includes('7') ? 'Boom!' : 'there is no 7 in the array';
