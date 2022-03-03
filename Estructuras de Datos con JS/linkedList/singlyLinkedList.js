// 1 --> 2 --> 3 --> 4--> 5--> null

// 1 --> 2 --> 3 --> 4--> 5--> 
//                         --> tail.next = 6 --> null

//                            1 --> 2 --> 3 --> 4--> 5--> 6 --> null
//               this.next -->
// this.head = 0 

// let singlyLinkedList = {
//     head:{
//         value: 1,
//         next: {
//             value: 2,
//             next: {
//                 value: 3,
//                 next: {
//                     vlue: 4,
//                     next: null
//                 }
//             }
//         }
//     }
// }

//Construyendo un Singly Linked List

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class MySinglyLinkedList{
    constructor(value){
        this.head ={
            value: value,
            next: null
        }
        //Es la cola de nuestro linked list
        this.tail = this.head;
        this.length = 1;
    }

    //Agregar nodos a tail
    append(value){
        const newNode = new Node(value);
        // tail.next = 6, lo agrega pero aun no es la cola
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    };

    //Agregar nodos a head
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }

    //Agregar nodos intermedios
    insert(index, value){
        //Validacion si no existen elementos lo agrego al final
        if(index >= this.length){
            return this.append(value);
        }

        const newNode = new Node(value);
        //Busca nuestro firstPointer
        const firstPointer = this.getTheIndex(index - 1);
        //holdingPointer
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.nex = holdingPointer;
        this.length++;

        return this;
    }

    //Remueve un nodo intermedio
    remove(index){
        if(index >= this.length){
         return this;   
        }
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = this.getTheIndex(index + 1);
        previousPointer.next = holdingPointer;
        
        this.length--;
        return this;
    }

    getTheIndex(index){
        let counter = 0;
        let currentNode = this.head;

        while(counter != index){
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

}

let mySinglyLinkedList = new MySinglyLinkedList(1);