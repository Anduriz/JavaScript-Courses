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
function imprimirNombreEnMayosculas({ nombre }){
    console.log(`Tu nombre es ${nombre.toUpperCase()}`);
}

//Pasamos el objeto entero a la funcion
imprimirNombreEnMayosculas(andy);
imprimirNombreEnMayosculas(pablo);

//Cuando queremos llamar a la funcion sin hacer referencia auna variable
//Declaramos un objeto en los parametros que enviamos a la funcion, 
// siempre y cuando sea el objeto que espera la funcion
imprimirNombreEnMayosculas( { nombre: "Pepito" } );