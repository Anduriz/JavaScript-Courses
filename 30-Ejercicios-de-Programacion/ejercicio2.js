//Al programa anterios: Si los numeros no son un numero
//o son menores o iguales a cero, que nos cuelva a pedir.

let num1 = prompt('Ingresa numero 1:');
let num2 = prompt('Ingresa numero 2:');

while(
    ((num1 || num2) <= 0 ) || 
    isNaN(num1 || num2)
    ){
        num1 = prompt('Ingresa numero 1:');
        num2 = prompt('Ingresa numero 2:');
}

console.log(num1);
console.log(num2);

if(num1 > num2){
    console.log("El numero 1 es el mayor");
    console.log("El numero 2 es el menor");
} else {
    console.log("El numero 1 es el menor");
    console.log("El numero 2 es el mayor");
}