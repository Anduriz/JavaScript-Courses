//Map transforma

const letters = ['a','b','c','d'];

const newArray = letters.map(item => (item + '++'));

// const newArray = [];
// for (let i = 0 ; index < letters.length; index++){
//     const element = letters[index];
//     newArray.push(element + '++');
// }

console.log('original', letters);
console.log('new', newArray);