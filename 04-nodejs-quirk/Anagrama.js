/*const clue1 = 'hola';
const clue2 = 'hloa';
const clue3 = 'hole';

const separado1 = clue1.split('').sort();
const separado2 = clue3.split('').sort();

console.log(separado1, separado2)

for(let i = 0; i< clue1.length; i++){
    if (separado1[i] !== separado2[i]){
        console.log(`${clue1} y ${clue2} no conforman un Anagrama`)
    }
}*/

function anagrama(clave1, clave2){
    const separado1 = clave1.split('').sort();
    const separado2 = clave2.split('').sort();

    let solucion = `${clave1} y ${clave2} conforman un Anagrama`;
    for(let i = 0; i< clave1.length; i++){
        if (separado1[i] !== separado2[i]){
            solucion =`${clave1} y ${clave2} no conforman un Anagrama`;
        }
    }

    return solucion
}

separado1

console.log(anagrama('amor', 'roma'));