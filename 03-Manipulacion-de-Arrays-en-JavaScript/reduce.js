//Reduce reduce a un solo valor
const totals = [1,2,3,4];

let sum = 0;

// for (let i = 0; i < totals.length; i++){
//     const element = totals[i];
//     sum = sum + element;
// }
// console.log(sum);

//Acumulador, item, estado inicial
const rta = totals.reduce((sum, element) => sum+element, 0);
console.log(rta);