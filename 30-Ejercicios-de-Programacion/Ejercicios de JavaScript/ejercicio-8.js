// escribe tu respuesta acá

function sumarRango(value1,value2){

    let res=0;
    let count=0;

    for (let index = value1; index <= value2; index++) {
        count++;
        res = res + index;
    }
    return 'Rango de numeros:' + (count-2) + ' / Suma del rango:' + res;
}

// código de prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0

console.log(sumarRango(1, 9)) // 7
console.log(sumarRango(1332, 8743)) // 7410
console.log(sumarRango(5, 6)) // 0