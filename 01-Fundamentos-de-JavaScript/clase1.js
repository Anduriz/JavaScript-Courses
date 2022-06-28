var nombre = 'Andy', apellido = 'Arellano', edad = '28';

var cantidadDeLetrasDelNombre = nombre.length;

var nombreEnMayusculas = nombre.toUpperCase();

var apellidoEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);

var ultimaLetraDelNombre = nombre.charAt(nombre.length - 1);

console.log(`Bienvenido ${nombre} ${apellido} tienes ${edad} annios`);

// Acceder a un string mas pequennio desde un string

var str = nombre.charAt(1) + nombre.charAt(2);

var str = nombre.substr(1, 2);