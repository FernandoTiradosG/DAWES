const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function GuessN(number) {
    rl.question('Adivina el número (entre 1 y 100): ', (input) => {
        const intento = parseInt(input);
    
        if (isNaN(intento) || intento < 1 || intento > 100) {
          console.log('Por favor, ingresa un número válido entre 1 y 100.');
        } else {
          intentos++;
    
          if (intento === numeroAleatorio) {
            console.log(`¡Correcto! ¡Has adivinado en ${intentos} intentos!`);
            rl.close();
          } else if (intento < numeroAleatorio) {
            console.log('Demasiado bajo. Intenta de nuevo.');
            GuessN();
          } else {
            console.log('Demasiado alto. Intenta de nuevo.');
            GuessN();
          }
        }
      });
}

GuessN();