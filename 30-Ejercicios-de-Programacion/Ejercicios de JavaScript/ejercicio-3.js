
// escribe la función bmi acá
function bmi(peso, altura){
    
    let res = peso / (altura ^ 2);

    if(res < 18.5){
        console.log(res);
        return 'Bajo de peso';
    } else if (res >= 18.5 && res <= 24.9){
        console.log(res);
        return 'Normal';
    } else if (res >= 25 && res <= 29.9){
        console.log(res);
        return 'Sobrepeso';
    } else if (res >= 30){
        console.log(res);
        return 'Obeso';
    }
}

// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(75, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"