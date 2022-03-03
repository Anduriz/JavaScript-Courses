
//Muestre todos los numeros dividores de un numero que mete en prompt

let numbers = [];
let num = prompt('Ingresa numero:')

numbers.push(num);

for (let index = 0; index <= num; index++) {
    num % index === 0 ? numbers.push(index) : false ;
}

numbers.forEach(item => console.log(item));
