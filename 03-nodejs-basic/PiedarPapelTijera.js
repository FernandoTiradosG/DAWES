function PPT(eleccion){
    const opcionUsuario = eleccion;
    const opcionesAI = {
        1: "piedra",
        2: "papel",
        3: "tijera"
    }
    const opcionAI = opcionesAI[Math.floor(Math.random() * Object.keys(opcionesAI).length) + 1]; 
    let resultado = "";
    if (opcionAI === opcionUsuario){
        resultado = "¡¡¡Empate!!!";
    } else if (opcionAI === "papel" && opcionUsuario === "tijera") {
        resultado = "¡Ganaste!";
    } else if (opcionAI === "piedra" && opcionUsuario === "papel"){
        resultado = "¡Ganaste!";
    } else if (opcionAI === "tijera" && opcionUsuario === "piedra") {
        resultado = "¡Ganaste!";
    } else {
        resultado = "¡Perdiste!";
    }

    console.log("USUARIO:" + opcionUsuario + ", ORDENADOR:" + opcionAI + ", Resultado" + resultado)
}

PPT("papel")