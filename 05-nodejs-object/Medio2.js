/*function obtenerAlumnosConNotasMasAltas(alumnos) {
    let alumnoMaxNota = [];
  
    for (let alumno of alumnos) {
        let maxNota = Math.max(...alumno.notes);
  
        let alumnoConMaxNota = {
            nombre: alumno.name,
         maxNota: maxNota
        };
  
        alumnoMaxNota.push(alumnoConMaxNota);
    }
  
    return alumnoMaxNota;
}*/

const obtenerAlumnosConNotasMasAltas = (alumnos) => {
    return alumnos.map(alumno => {
        const notaMasAlta = Math.max(...alumno.notes);
        return {
            nombre: alumno.name,
            notaMasAlta: notaMasAlta
      };
    });
}

/* Solucion para edebit con ayuda de chatgpt
function getStudentsWithNamesAndTopNotes(students) {
	return students.map(alumno => {
    const topNota = alumno.notes.length > 0 ? Math.max(...alumno.notes) : 0;
    return {
        name: alumno.name,
        topNote: topNota
    };
  });
}*/
  
let alumnos = [
    { "name": "John", "notes": [3, 5, 4] },
    { "name": "Max", "notes": [1, 4, 6] },
    { "name": "Zygmund", "notes": [1, 2, 3] }
];
  
let alumnosConNotasMasAltas = obtenerAlumnosConNotasMasAltas(alumnos);
  
console.log(alumnosConNotasMasAltas);