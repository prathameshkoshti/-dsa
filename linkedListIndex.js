import readline from 'readline';
import LinkedList from './ds/linkedlist/LinkedList';
import { stdin, stdout } from 'process';

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

console.log('Linked list package imported');

const linkedList = new LinkedList();

console.log('Linked list initiated.');
linkedListMenu();

function linkedListMenu() {
    rl.question('------------------------\nEnter your choice:\n1. Insert a node\n2. Delete a node\n3. Traverse list\n4. Exit\n', option => {
        try {
            switch(option) {
                case '1':
                    insertMenu();
                    break;
    
                case '2':
                    deleteMenu();
                    break;
    
                case '3':
                    linkedList.traverseLinkedList();
                    break;
                case '4':
                    process.kill(process.pid)
                    break;
                default:
                    console.log('Please enter correct option.');
            }
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
        finally {
            linkedListMenu();
        }
    });
}

function insertMenu() {
    console.clear();
    rl.question('Enter value to be inserted: ', value => {
        rl.question('Enter your choice for inserting new node:\n1. Insert at the beginning\n2. Insert at the end\n3. Insert after position\n', subOption => {
            switch(subOption) {
                case '1':
                    linkedList.insertNodeAtBeginning(value);
                    break;

                case '2':
                    linkedList.insertNodeAtEnd(value);
                    break;

                case '3':
                    rl.question('Enter position after which value needs to be inserted: ', position => {
                        linkedList.insertNodeAfter(position, value);
                        linkedListMenu();
                    });
                    break;
                default:
                    console.log('You made a wrong choice!');
            }
            linkedListMenu();
        })
    });
    console.clear();
}

function deleteMenu() {
    console.clear();
    rl.question('Enter your choice for inserting new node:\n1. Delete at the beginning\n2. Delete at the end\n3. Delete at position\n', subOption => {
        switch(subOption) {
            case '1':
                linkedList.deleteFirstNode();
                break;

            case '2':
                linkedList.deleteLastNode();
                break;

            case '3':
                rl.question('Enter position after which value needs to be inserted: ', position => {
                    linkedList.deleteNodeAt(position);
                    linkedListMenu();
                });
                break;
            default:
                console.log('You made a wrong choice!');
        }
        linkedListMenu();
    });
    console.clear();
}