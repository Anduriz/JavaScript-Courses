// escribe tu respuesta acá

function likes(value){

    let res = Math.round(value);

    if(res >= 1000){
        return String(res).charAt(0) + 'K';
    } else if(res >= 1000000){
        return String(res).charAt(0) + 'M';
    } else {
        return value;
    }
}

// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"