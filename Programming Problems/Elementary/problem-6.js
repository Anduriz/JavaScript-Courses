let number = prompt('Enter a number');
let option = prompt('Enter 1 for computing the res or 2 for computing the product');
let res = 0;
 
switch (Number(option)) {
    case 1:
        for (let index = 1; index <= number; index++) {
            console.log(index);
            res = res + index;
        }
        break;
    case 2:
        for (let index = 1; index <= number; index++) {
            console.log(index);
            if(index === 1){
                res = 1;
                res = res * index;
            } else {  
                res = res * index;
            }
        }
        break;
    default:
        break;
}

console.log(res);