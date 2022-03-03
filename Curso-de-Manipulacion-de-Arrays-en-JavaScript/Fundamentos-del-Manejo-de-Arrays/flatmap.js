//flatmap tiene una restriccion de un nivel
const users = [
    {userId:1, username: "Tom", attributes: ["Nice", "Cute"]},
    {userId:2, usermane: "Mike", attributes: ["Lovely"]},
    {userId:3, username: "Nico", attributes:["Nice","Cool"]}
]

const rta = users.map(user => user.attributes).flat();
const rta2 = users.flatMap(users => users.attributes);
console.log('map-flat',rta);
console.log('map-flat',rta2);

//Objets.keys(calendars)
//devuelve los atributos de un objeto

const rta3 = Object.values(calendars).flatMap(item =>{
    console.log('item', item);
    return item.map();
});
console.log(rta3);