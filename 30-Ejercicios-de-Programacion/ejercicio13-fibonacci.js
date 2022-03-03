//Fibonacci
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// program to display fibonacci sequence using recursion
function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}       

// take nth term input from the user
const nTerms = prompt('Enter the number of terms: ');

if(nTerms <= 0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
} 