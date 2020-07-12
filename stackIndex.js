import readline from 'readline';
import Stack from './ds/Stack';

console.log('Stack package imported');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let stack;

rl.question('Enter the size of stack: ', size => {
    try {
        stack = new Stack(parseInt(size));
        console.log(`Stack with size ${size} initiated.`);
        processStack();
    }
    catch(error) {
        console.error(`Error: ${error}`);
    }
});

function processStack() {
    rl.question('------------------------\nEnter your choice:\n1. Push an element\n2. Pop an element\n3. Is stack empty?\n4. Is stack full?\n5. Peek the top of stack\n6. Exit\n------------------------\n', option => {
        try {
            switch(option) {
                case '1':
                    try {
                        rl.question('Enter an element to be pushed into the stack: ', element => {
                            stack.push(element);
                            processStack();
                        })
                    }
                    catch(error) {
                        console.error(`Error: ${error}`);
                    }
                    break;
                case '2':
                    stack.pop();
                    break;
                case '3':
                    stack.isEmpty();
                    break;
                case '4':
                    stack.isFull();
                    break;
                case '5':
                    stack.peek();
                    break;
                case '6':
                    process.kill(process.pid)
                    break;
                default:
                    console.log('Please select valid option.');
            }
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
        finally {
            processStack();
        }
    });
}
