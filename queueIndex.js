import readline from 'readline';
import Queue from './ds/Queue';
import { stdin, stdout } from 'process';
import { parse } from 'path';

console.log('Queue package imported');

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});
let queue;

rl.question('Enter the size of queue: ', size => {
    try {
        queue = new Queue(parseInt(size));
        console.log(`Queue with size ${size} initiated.`);
        processQueue();
    }
    catch(error) {
        console.error(`Error: ${error}`);
    }
});

function processQueue() {
    rl.question('------------------------\nEnter your choice:\n1. Enqueue\n2. Dequeue\n3. Is full?\n4. Is empty?\n5. Peek\n6. Exit\n', option => {
        try {
            switch(option) {
                case '1':
                    try {
                        rl.question('Enter an element to be inserted into the queue: ', element => {
                            queue.enqueue(element);
                            processQueue();
                        });
                    }
                    catch(error) {
                        console.error(`Error: ${error}`);
                    }
                    break;
                case '2':
                    queue.dequeue();
                    break;
                case '3':
                    queue.isFull();
                    break;
                case '4':
                    queue.isEmpty();
                    break;
                case '5':
                    queue.peek();
                    break;
                case '6':
                    process.kill(process.pid);
                    break;
                default:
                    console.log('Please select valid input.');
            }
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
        finally {
            processQueue();
        }
    });
}