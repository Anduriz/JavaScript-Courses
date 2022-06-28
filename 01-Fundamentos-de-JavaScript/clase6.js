var andy = {
    nombre: 'Andy',
    apellido: 'Arellano',
    edad: 23
}

var pablo = {
    nombre: 'Pablo',
    apellido: 'Perez',
    edad: 22
}

var nombre = 'Andy';

var apellido = 'Arellano';
var edad = 23;

//Entre llaves ponemos el atributo del objeto que nos interesa
function imprimirNombreEnMayosculas( persona ){
    //De esta forma declaramos la variable nombre que va a salir de persona.nombre
    //var nombre = persona.nombre;
    var { nombre } = persona;
    console.log(`Tu nombre es ${nombre.toUpperCase()}`);
}

function imprimitNombreYApellido( persona ){
    var {nombre} = persona;
    var {apellido} = persona;
    var {edad} = persona;
    console.log(`HOLA ME LLAMO ${nombre.toUpperCase()} ${apellido.toUpperCase()} Y TENGO ${edad}`);
}

//Pasamos el objeto entero a la funcion
imprimirNombreEnMayosculas(andy);
imprimirNombreEnMayosculas(pablo);

imprimitNombreYApellido(andy);
imprimitNombreYApellido(pablo);

//Cuando queremos llamar a la funcion sin hacer referencia auna variable
//Declaramos un objeto en los parametros que enviamos a la funcion, 
// siempre y cuando sea el objeto que espera la funcion
// imprimirNombreEnMayosculas( { nombre: "Pepito" } );

//Reto Escribir una funcion que se llame imprimir nombre y edad en mayusculas
// HOLA ME LLAMO  ANDY y tengo 23 ANNIOS

function cumpleannios(persona){
    return{
        ...persona,
        edad: persona.edad + 1
    }
}

cumpleannios(andy);