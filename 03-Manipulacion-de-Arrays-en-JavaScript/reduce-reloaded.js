//Reduce reloaded
//Creamos un histograma

const items = ['1','2','3','2','3'];

const rta = items.reduce((obj, item) =>{
    //code
    if(!obj[item]){
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
    //Queremos que se ejecute como objeto asi 
    //que enviamos un objeto en vacios
},{});

console.log(rta);