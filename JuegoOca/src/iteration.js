import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let posicionJ = 0;
let posicionM = 0;

export function dice(){
    return Math.floor(Math.random()*6+1);
}

export function casillaCinco(casilla){
    return casilla + 4;
}

export function casillaSeis(casilla){
    return casilla + 6;
}

export function casillaNueve(casilla){
    return casilla + 5;
}

export function casillaDoce(casilla){
    return casilla - 6;
}

export function casillaCincoOcho(casilla){
    return casilla - 57;
}

export function alteraciones(posicion){
    const casillas = {
        5: casillaCinco,
        6: casillaSeis,
        9: casillaNueve,
        12: casillaDoce,
        58: casillaCincoOcho
    }

    if (casillas[posicion]){
        return casillas[posicion](posicion);
    }else {
        return posicion
    }
}

export function winer(positionJ){
    if (positionJ === 63){
        return `El Jugador ha ganado la partida\n Posicion Jugador: ${posicionJ}\n Posicion Maquina: ${posicionM}`;
    }else {
        return `La maquina ha ganado la partida\n Posicion Jugador: ${posicionJ}\n Posicion Maquina: ${posicionM}`;
    };
}

export function playAgain() {
    rl.question(`\nDeseas Jugar otra vez(y/n): `, (nombre) => {
        if(nombre.toLowerCase() === 'y'){
            game();
            playAgain();
        }else{
            rl.close();
        }
    });
}

export function game(){
    do {
//turno jugador
        const lanzaJ = dice();
        posicionJ = (posicionJ + lanzaJ) > 63 ? posicionJ = 63 - ((posicionJ + lanzaJ) - 63) : posicionJ += lanzaJ;

        posicionJ = alteraciones(posicionJ)
        if(posicionJ === 63) break;
        console.log(`El resultado del dado es ${lanzaJ}, la posición del jugador es la casilla ${posicionJ}`)

//tueno maquina
        const lanzaM = dice();
        posicionM = (posicionM + lanzaM) > 63 ? posicionM = 63 - ((posicionM + lanzaM) - 63) : posicionM += lanzaM;

        posicionM = alteraciones(posicionM)

        console.log(`El resultado del dado es ${lanzaM}, la posición de la maquina es la casilla ${posicionM}\n`)
        
    } while (posicionJ !== 63 && posicionM !== 63);

    console.log(winer(posicionJ));

    playAgain();
}