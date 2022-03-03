class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value){
        const newNode = new Node(value);
        //Si no existe newNode = top and bottom
        if(this.length == 0){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop(value){
        if (this.length === 0) {
            throw new Error("Stack is already empty");
          }
          if (this.length === 1) {
            this.top = null;
            this.bottom = null;
            this.length--;
            return this;
          }
        this.top = this.top.next;
        this.length--;
        return this;
    }

    peek(){
        return this.top;
    }
}

const myStack = new Stack();