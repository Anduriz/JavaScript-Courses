let number = prompt('Enter a number');
let sum = 0;

for (let index = 1; index <= number; index++) {
    if (is_multiple_of_three_or_five(index)){
        console.log(index);
        sum = sum + index;
    }
}

console.log('The result is' + sum);


function is_multiple_of_three_or_five(number) {
    if((number % 3) === 0 || (number % 5) === 0){
        return true;
    } else {
        return false;
    }
}