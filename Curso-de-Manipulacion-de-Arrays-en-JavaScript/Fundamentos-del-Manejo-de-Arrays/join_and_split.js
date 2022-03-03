//Une todos nuestros elementos en un string

const elements = ['Fire','Air','Water'];

let rtaFinal = '';
const rta = elements.join('--');
console.log(rta);

//Split
const title = 'Curso de manipulacion de arrays';
console.log(title.split(' '));

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);