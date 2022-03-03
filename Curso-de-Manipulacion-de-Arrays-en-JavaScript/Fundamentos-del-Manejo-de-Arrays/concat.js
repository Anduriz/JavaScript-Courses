//Es un metodo que nos permite fusionar arrays

const elements = ['1','2','3','2'];
const othersElements = ['5','3','3','2'];

//Forma correcta de clonar un array
//Split operation
const newArray = [...elements];
for(let i =0; i < othersElements.length; i++){
    const element = othersElements[i];
    newArray.push(element);
}


const rta = elements.concat(othersElements);
console.log('for', newArray);
console.log('concat',rta);