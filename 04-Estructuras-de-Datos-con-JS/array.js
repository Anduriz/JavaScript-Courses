const array = ["Diego", "Bruce", "Barry"]; 

//Agrega un elemento en nuestro array
array.push("Ana");

//Borra un elemento
array.pop();

class MyArray{
    constructor(){
        this.lenght = 0;
        this.data = {}
    }
    get(index){
        return this.data[index];
    }
    push(item){
        this.data[this.lenght] = item;
        this.lenght++;
        return this.data;
    }
    pop(){
        const lastitem = this.data[this.lenght - 1];
        delete this.data[this.lenght - 1];
        this.lenght--;
        return lastitem;
    }
    delete(index){
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }
    shiftIndex(index){
        for(let i = index; i < this.lenght - 1; i++){
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.lenght - 1];
        this.lenght--;
    }
}

const myArray = new MyArray();

//