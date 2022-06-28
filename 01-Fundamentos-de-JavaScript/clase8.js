var andy = {
    nombre: 'andy',
    apellido: 'arellano',
    edad: 23,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: true
}

//Utilizamos esta sintaxis para delcarar constantes, utilizando mayusculas y guion bajo
const MAYORIA_DE_EDAD = 18;

// Con esta sintaxis declaramos una arrow function, cuando tenemos un solo parametro en 
// la funcion podemos obviar los parentesis
// Si lo unico que hacemos e retornar algo podemos quitar el reutn y quitar las llaves
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD;

function imprimirSiEsMayorDeEdad(andy){
    if(esMayorDeEdad(andy)){
        console.log('Es mayor de edad.');
    } else {
        console.log('Es menor de edad');
    }
}

const permitirAcceso = (persona) => !esMayorDeEdad(persona) ? console.log(`No puedes ingresar`) : console.log(`Bienvenido ${persona.nombre}`);

// function permitirAcceso(persona){
//     if(!esMayorDeEdad){
        
//     } else{
//         console.log(`Bienvenido ${persona.nombre}`);
//     }
// }

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `)
    //No hace falta compararlo con true porque si ya es true
    //dentro de un if entonces por defecto se ejecuta
    if(persona.ingeniero){
        console.log('Ingeniero');
    }
    if(persona.cocinero) {
        console.log('Cocineto');
    } 
    if(persona.cantante) {
        console.log('Cantante');
    }
    if(persona.dj) {
        console.log('DJ');
    }
    if(persona.guitarrista) {
        console.log('Guitarrista');
    } 
}
permitirAcceso(andy);

imprimirProfesiones(andy);

imprimirSiEsMayorDeEdad(andy);