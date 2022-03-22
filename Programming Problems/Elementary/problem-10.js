let year = 2022;
let found = 20;

for (let index = 0; index < found;) {
    if(
        (year % 4) === 0 &&
        ((year % 100) !== 0 || (year % 400) === 0)
    ){
        console.log(year);
        index++;
    }
    year++;
}