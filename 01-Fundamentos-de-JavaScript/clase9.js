var andy = {
    nombre: 'Andy',
    apellido: 'Arellano',
    edad: '23',
    peso: 118
}

console.log(`Al inicio del año ${andy.nombre} pesaba ${andy.peso} lb`);

const INCREMENTO_PESO = 0.2;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.pedo -= INCREMENTO_PESO;

for(var i = 1; i <= 365; i++){
    var random = Math.random();
    if(random < 0.25){
        aumentarDePeso(andy);
    } else if (random < 0.5) {
        adelgazar(andy);
    }
}

//tuFixed(2) va a tomar solo dos lugares despues de la coma

console.log(`Al final del año ${andy.nombre} pesa ${andy.peso.toFixed(2)} lb`);

