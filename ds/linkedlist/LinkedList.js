import Node from './Node'

class LinkedList {
    constructor() {
        this.head = null;
    }

    traverseLinkedList() {
        try {
            let node = this.head;
            let linkedList = 'head -> ';
    
            while(node !== null) {
                linkedList += node.value + ' -> ';
                node = node.next;
            }
    
            linkedList += 'null';
    
            console.log(linkedList);
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
    }

    insertNodeAtBeginning(value) {
        try {
            const newNode = new Node(value);
    
            newNode.next = this.head !== null ? this.head : null;
            this.head = newNode;
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
    }

    insertNodeAtEnd(value) {
        try {
            let node = this.head;
            const newNode = new Node(value);
            
            while(node.next !== null) {
                node = node.next;
            }
    
            node.next = newNode;
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
    }

    insertNodeAfter(position, value) {
        try {
            let node = this.head;
            const newNode = new Node(value);
    
            for(let i = 0; i < position - 1 && node !== null; i++) {
                node = node.next;
            }
    
            newNode.next = node.next;
            node.next = newNode;
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
    }

    deleteFirstNode() {
        try {
            if(this.head !== null) {
                this.head = this.head.next;
            }
            else {
                console.log('Cannot delete. Head is pointing to NULL.');
            }
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
    }

    deleteLastNode() {
        try {
            if(this.head !== null) {
                let node = this.head;
                let prevNode;
    
                while(node.next !== null) {
                    prevNode = node;
                    node = node.next;
                }
    
                prevNode.next = null;
            }
            else {
                console.log('Cannot delete. Head is pointing to NULL.');
            }
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
    }

    deleteNodeAt(position) {
        try {
            if(this.head !== null) {
                let node = this.head;
                let prevNode;
    
                for(let i = 0; i < position - 1 && node !== null; i++) {
                    prevNode = node;
                    node = node.next;
                }
    
                prevNode.next = node.next;
            }
            else {
                console.log('Cannot delete. Head is pointing to NULL.');
            }
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
    }
}

export default LinkedList;