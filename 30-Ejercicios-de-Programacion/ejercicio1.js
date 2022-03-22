//Programa que pida dos numeros y que nos diga cual es el mayor,
//el menor y si son iguales.

let num1 = prompt('Ingresa numero 1:');
let num2 = prompt('Ingresa numero 2:');

console.log(num1);
console.log(num2);

if(num1 > num2){
    console.log("El numero 1 es el menor");
    console.log("El numero 2 es el menor");
} else {
    console.log("El numero 2 es el mayor");
    console.log("El numero 1 es el menor");
}

// console.log(
// num1 === num2 
// ? "Son iguales" 
// : (num1 > num2 
// ? "El numero 1 es mayor y el numero 2 es el menor"
// : "El numero 2 es mayor y el numero 1 es el menor"
// ));