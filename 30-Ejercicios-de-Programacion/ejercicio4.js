
//Hacer un programa que muestre todos los numeros entre dos numeros 
//introducidos por el usuario
    let numbers = [];
    let num = prompt('Ingresa numero:');

    while (
        (num >= 0) && (!isNaN(num))
    ) {
        numbers.push(num);
        num = prompt('Ingresa numero:');
    }

    let numbers2 = [];
    numbers2 = numbers.slice();

    numbers2.shift();
    numbers2.pop();
    numbers2.forEach(item => console.log(item));
