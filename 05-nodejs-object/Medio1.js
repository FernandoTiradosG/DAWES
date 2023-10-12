function invertObjet(obj) {
    let invert = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) { // Comprueba si la clave pertenece al objeto y no a su prototipo (por seguridad).
            invert[obj[key]] = key;
        }
    }
    return invert;

    /* otros ejemplos mas sencillos
    return Object.fromEntries(
		Object.entries(o).map(arr => arr.reverse())
	);
    *******************
    return Object.fromEntries(Object.entries(o).map( ([key,value]) => [value,key]))
    *******************
    const invert = o =>
	Object.fromEntries(Object.entries(o).map(v => v.reverse()));*/
}

console.log(invertObjet({"a": 1, "b": 2, "c": 3}));
console.log(invertObjet({"z": "q", "w": "f"}));
console.log(invertObjet({"zebra": "koala", "horse": "camel"}));