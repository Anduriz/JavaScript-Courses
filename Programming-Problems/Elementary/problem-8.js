let qty = prompt("Find prime numbers up to");

for (let index = 1; index <= qty; index++) {
    if(is_prime(index)){
        console.log(index);
    };
}

function is_prime(number) {

    for (let index = 2; index < number; index++) {
        if (number % index === 0) {
            return false;
        }
    }

    return true;
}