var andy = {
    nombre: 'Andy',
    apellido: 'Arrellano',
    edad: 23
}

var pablo = {
    nombre: 'Pablo',
    apellido: 'Perez',
    edad: 15
}

var jose = {
    nombre: 'Jose',
    apellido: 'Javier',
    edad: 22
}

var personas = [andy, pablo, jose]

// const mayorDeEdad = persona => persona.edad > 18;

const mayorDeEdad = ({edad}) => edad > 18;

// Filter va a iterar cada uno de los elementos del array a nuestra funcion
var personasMayoredDeEdad = personas.filter(mayorDeEdad)

console.log(personasMayoredDeEdad);

// for(var i = 0; i < personas.length; i++){
//     var persona = personas[i]
//     console.log(`${persona.nombre} ${persona.apellido} tiene ${persona.edad}`);
// }

const cumplirAnnios = ({edad}) => edad += 2;

var personasCrecen = personas.map(cumplirAnnios);

console.log(personasCrecen);