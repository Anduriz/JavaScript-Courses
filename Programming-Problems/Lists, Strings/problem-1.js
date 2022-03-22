const animals = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"];

let largest_element = '';
let largest_elements = [];

animals.forEach(item => {
    if(item.length > largest_element.length){
        largest_element = item;
    }
});

animals.forEach(item =>{
    if(item.length === largest_element.length){
        largest_elements.push(item);
    }
});

console.log(largest_element.length);
console.log(largest_element);

