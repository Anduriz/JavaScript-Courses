class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyLinkesList {
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prex: null
        };
        this.tail = this.head;
        this.lengt = 1;
    }

    apprend(value){
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        this.lengt++;

        return this;
    }
}