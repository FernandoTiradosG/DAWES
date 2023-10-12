//Eliminar todos los elementos inferiores a 18 de un array de números
const number = [15, 1, 78, 45, 8];

const taller = number.filter(numero => numero > 18);

console.log(taller);

//Sumar todos los números de un array con reduce


const total = number.reduce((acc, inicial) => acc + inicial, number[0]);

console.log(total);