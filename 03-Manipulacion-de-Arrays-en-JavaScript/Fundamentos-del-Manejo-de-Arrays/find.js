//Encuentra el primer elemento, solo el primero

const numbers = [1,23,30,15,112];

const rta2 = numbers.find(item => item === 30);
console.log('for', rta2);

const rta3 = numbers.findIndex(item => item === 30);
console.log('for', rta3);