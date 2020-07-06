class Stack {
    constructor(size) {
        this.array = [];
        this.size = size;
        this.top = -1;
    }

    push(element) {
        try {
            if(this.array.length < this.size) {
                this.array.push(element);
                this.top = element;
                console.log(`${element} pushed into the stack.`);
            }
            else {
                console.log('Stack is full, cannot push any elements.');
            }
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
    }

    pop() {
        try{
            if(this.top !== -1) {
                const element = this.array.pop();
                this.top = this.array.length > 0 ? this.array[this.array.length - 1] : -1;
                console.log(`${element} popped from the stack.`);
            }
            else {
                console.log('Stack is empty, cannot pop any elements.');
            }
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
    }

    isEmpty() {
        try {
            if(this.top === -1) {
                console.log('Stack is empty.');
                
            }
            else {
                console.log('Stack is not empty.');
            }
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
    }

    isFull() {
        try {
            if(this.array.length === this.size) {
                console.log('Stack is full.');
                
            }
            else {
                console.log('Stack is not full.');
            }
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
    }

    peek() {
        try {
            console.log(`Top of stack is: ${this.top}`);
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
    }
}

export default Stack;