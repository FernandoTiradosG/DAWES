import fs from 'fs';
export function read(file) {
    
    
    try {
        return fs.readFileSync(file, 'utf8');
    } catch (err) {
        console.error('Archivo no leido', err);
    }
}

export function write(file){
    const data = read(file);

    try {
        const wrote = fs.writeFileSync('C:/Users/FerTG/OneDrive/Escritorio/DAW/Segundo/ES/DAWES/06-nodejs-native/Copied.txt', data);
        console.log('Archivo copiado')
        
    } catch (err) {
        console.error('Archivo no leido', err);
    }
}

//read('06-nodejs-native/Prueba.txt')

//write('06-nodejs-native/Prueba.txt')