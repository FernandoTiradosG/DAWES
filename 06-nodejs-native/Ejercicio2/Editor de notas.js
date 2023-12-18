const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function crearNuevaNota() {
    rl.question('Introduce el nombre de la nueva nota: ', (nombre) => {
        rl.question('Introduce el contenido de la nota: ', (contenido) => {
            const ruta = `./Notas/${nombre}.note`;

            fs.writeFile(ruta, contenido, (err) => {
                if (err) throw err;
                console.log(`La nota ${nombre}.note ha sido creada.`);
                rl.close();
            });
        });
    });
}

function listarNotas() {
    fs.readdir('./Notas', (err, files) => {
        if (err) throw err;

        console.log('Notas disponibles:');
        files.forEach(file => {
            console.log(file);
        });

        rl.close();
    });
}

function editarNota() {
    fs.readdir('./Notas', (err, files) => {
        if (err) throw err;

        console.log('Notas disponibles:');
        files.forEach(file => {
            console.log(file);
        });

        rl.question('Introduce el nombre de la nota que deseas editar: ', (nombre) => {
            const ruta = `./Notas/${nombre}`;

            fs.readFile(ruta, 'utf8', (err, contenido) => {
                if (err) throw err;

                const lines = contenido.split('\n');

                console.log(`Contenido de ${nombre}:`);
                console.log(contenido);

                rl.question('Comienza a editar la nota. Para guardar, presiona "Enter" dos veces seguidas.\n', (linea) => {
                    let nuevoContenido = contenido + linea + '\n';

                    const leerLinea = () => {
                        rl.question('', (linea) => {
                            if (linea === '') {
                                fs.writeFile(ruta, nuevoContenido, (err) => {
                                    if (err) throw err;
                                    console.log(`La nota ${nombre} ha sido actualizada.`);
                                    rl.close();
                                });
                            } else {
                                nuevoContenido += `${linea}\n`;
                                leerLinea();
                            }
                        });
                    };

                    leerLinea();
                });
            });
        });
    });
}

function eliminarNota() {
    fs.readdir('./Notas', (err, files) => {
        if (err) throw err;

        console.log('Notas disponibles:');
        files.forEach(file => {
            console.log(file);
        });

        rl.question('Introduce el nombre de la nota que deseas eliminar (Escribe el nombre con extensión incluida): ', (nombre) => {
            const ruta = `./Notas/${nombre}`;

            fs.unlink(ruta, (err) => {
                if (err) throw err;
                console.log(`La nota ${nombre} ha sido eliminada.`);
                rl.close();
            });
        });
    });
}

// Menú de opciones
console.log('Bienvenido al editor de notas');
console.log('1. Crear nueva nota');
console.log('2. Editar nota existente');
console.log('3. Eliminar nota');

rl.question('Elige una opción: ', (opcion) => {
    switch (opcion) {
        case '1':
            crearNuevaNota();
            break;
        case '2':
            editarNota();
            break;
        case '3':
            eliminarNota();
            break;
        default:
            console.log('Opción no válida.');
            rl.close();
            break;
    }
});