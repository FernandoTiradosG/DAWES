const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];

const arr = "-999";
const ray = Array.from(String(arr), Number)

if(ray.every(num => !isNaN(num) && ray.length === 4)){
    const nuevo = [];
    for (let i = 0; i < ray.length; i++){
        
        nuevo.push(MOVES[(ray[i] + i)%MOVES.length]);
    }
    console.log(nuevo);
}

//const dance = pin => /\d{4}/.test(pin) ? pin.split('').map((digit, i) => MOVES[(parseInt(digit)+i)%MOVES.length])