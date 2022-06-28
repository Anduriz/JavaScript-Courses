var x = 4;
var y = '4';

var andy = {
    nombre: 'andy'
}

var guillermo = {
    nomrbe: 'andy'
}

//Si modificamos aca el objeto va a modirifiar el original,
// porque apuntal al mismo espacio de meomoria.
var arellano = andy;

var andy2 = {
    ...andy
}