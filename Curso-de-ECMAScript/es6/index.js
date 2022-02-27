// ----- Parametros por defecto (Default Params) -----

//Antes
function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}
newFunction();

//es6
function newFunction2(name = 'oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Bruce Wayne',34,'US');

//----- Template literal -----

//Antes
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// ----- Multilinea en los strings -----

//Antes
let lorem = "Duis adipisicing proident id cillum fugiat. \n"
+ "Sunt in tempor Lorem ad labore ex dolore aliquip.";

//es6
let lorem2 = `Proident excepteur nostrud Lorem anim sunt quis nulla id.
Pariatur tempor laboris minim voluptate ullamco adipisicing sunt est.
`;

console.log(lorem);
console.log(lorem2);

// ----- Desestructuración -----

//Antes
let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age, person.country);

//es6
let {name, age, country} = person;
console.log(name, age,country);

// ----- Operador de propagacion (Spread Operator) -----
let team1 = ['Oscar','Julian','Ricardo'];
let team2 = ['Valeria','Yesica','Camila'];

//es6
let education = ['David', ...team1, ...team2];

console.log(education);

// ----- Let y Const -----

//var = disponible de forma global
{
    var globalVar = 'hola';
    console.log(globalVar);
}

//let = disponible en el scope
{
    let globalLet = 'hola';
    console.log(globalLet);
}

//const = no se pueden re asignar (constante)
const a = 'b';

console.log(globalVar);
// console.log(globalLet);

// ----- Propiedad de objetos mejorada -----
let name = 'oscar';
let age = 32;

//es5
obj = {name: name, age: age};

//es6
obj2 = {name, age};

console.log(obj2);

// ----- Arrow Functions -----
// Solventan tener una sintaxis mas reducida y un this no vinculable.

const name = [
    {name: 'Oscar', age: 32},
    {name: 'Yesica', age: 27}
];

//Iterar con el metodo map
//Utilizamos una funcion anonima
let listOfNames = names.map(function(item){
    console.log(item.name);
})

//es6
//Una arrow function ES una funcion anonima
let listOfNames2 = names.map(item => console.log(item.name));

//Otro ejemplo

const listOfNames3 = (name, age, country) => {
    //Aqui iria el codigo de nuestra funcion
}

//Otro ejemplo

const listOfNames4 = name => {
    //Aqui iria el codigo de nuestra funcion
}

//Otro ejemplo

const square = num => num * num;

// ----- Promesas ----- Utiles para trabajar con el asincronismo, establecen que algo va a pasar dentro de nuestro codigo

const helloPromise = () => {
    //Retornaremos una promesa, resolve y reject, o va a resolver o va a ser rechazada
    return new Promise(( resolve, reject ) =>{
        //Esperara una logica que vamos a resolver
        if(true){
            resolve('Hey!');
        } else {
            reject('Ups');
        }
    });
}

//Tambien podemos anidar una gran cantidad de elementos then
helloPromise()
    .then(response => console.log(response))
    // .then(() => console.log('Hola'))
    .catch(error => console.log(error));

//Clases, Modulos y Generadores

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//Modulos

import { hello } from './module';

hello();

//Generators
//Es una funcion especial que retorna una serie de valores segun el valor deinido

function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if (true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//Un caso muy popular de generator lo podemos encontrar con fibonacci