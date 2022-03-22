//Utilizar un bucle, mostrar la suma y la media de los 
// numeros introducidos hasta introducir un numero negativo
// y ahi mostar el resultado

let numbers = [];
let res = 0;
let sum = 0;
let avg = 0;

let num = prompt('Ingresa numero:');

while (
    (num >= 0) && (!isNaN(num))
) {
    numbers.push(num);
    num = prompt('Ingresa numero:');
}

res = numbers.reduce((sum, element) => sum+parseInt(element), 0)

console.log(res);
console.log(res / (numbers.length));