//Calculadora

let num1 = prompt('Ingresa numero 1');

while ((isNaN(num1))) {
    num1 = prompt('Ingresa numero 1:');
}

let num2 = prompt('Ingresa numero 2');

while ((isNaN(num2))) {
    num2 = prompt('Ingresa numero 2:');
}

function sumar(num1, num2){
    suma = parseInt(num1) + parseInt(num2);
    return alert(suma);
}

function restar(num1, num2){
    resta = parseInt(num1) - parseInt(num2);
    return alert(resta);
}

function division(num1, num2){
    divide = parseInt(num1) / parseInt(num2);
    return alert(divide);
}

function multiplicar(num1, num2){
    multiplica = parseInt(num1) * parseInt(num2);
    return alert(multiplica);
}

sumar(num1,num2);

restar(num1,num2);

division(num1,num2);

multiplicar(num1,num2);