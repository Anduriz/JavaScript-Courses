
//       10
//    /      \
//   4        20
//  / \      /  \
// 2   8   17    170

class Node {
    constructor(value){
        this.left = null;
        this.righ = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor(){
        //Este es el primer nodo
        this.root = null;
    }

    insert(value){
        //Hacemos una instancia de nuestra clase nodo
        const newNode = new Node(value);
        //Si no existe un root
        if(this.root === null){
            this.root = newNode;
        } else {
            let currentNode = this.root;
            //Recorremos el arbol
            while(true){
                //Si el nodo es menor a root se va al lado izquierdo
                if(value < currentNode.value){
                    //Si existe un nodo actual en el lado izquierdo
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    //En caso de que exista
                    currentNode = currentNode.left;
                } else {
                    //Si existe un nodo actual en el lado derecho
                    if(!currentNode.righ){
                        currentNode.righ = newNode;
                        return this;
                    }
                    //En caso de que exista
                    currentNode = currentNode.right;
                }
            }
        }
    }

    search(value, tree = this.root) {

        if (tree == null) {
            return "El elemento no se encuentra.";
        }
        else if(value > tree.value) {
            return this.search(value, tree.right);
        }
        else if(value < tree.value) {
            return this.search(value, tree.left);
        }
        else {
            return "¡El elemento ha sido encontrado!";
            // return tree;
        }

    }
}

//Generamos nuestra instancia
const tree = new BinarySearchTree();