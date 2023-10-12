const arr = 47;
//const array = Array.from(String(arr), Number)
//console.log(array);
//const oddEven = arr.join('').toString().reduce((acc, inicial) => acc + inicial, 0);

/*if (array.reduce((acc, inicial) => acc + inicial, 0)%2 === 0){
    console.log('Par');
} else{
    console.log('Impar');
}*/

const array = Array.from(String(arr), Number);
const oddEven = (array.reduce((acc, inicial) => acc + inicial, 0)%2 === 0) ? "Oddish" : "Evenish";

console.log(oddEven)