class Queue {
    constructor(size) {
        this.front = -1;
        this.rear = -1;
        this.array = [];
        this.size = size;
    }

    enqueue(element) {
        try {
            if(this.array.length < this.size) {
                if(this.array.length === 0)
                    this.rear = this.front = element;
                else
                    this.rear = element;
                this.array.push(element);
            }
            else {
                console.log('Cannot enqueue. Queue is full');
            }
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
    }

    dequeue() {
        try {
            if(this.front !== -1 && this.rear !== -1) {
                const element = this.array.splice(0, 1);
                console.log(`${element} removed from queue`);
                if(this.array.length > 0) {
                    this.front = this.array[0];
                    this.rear = this.array[this.array.length - 1];
                }
                else {
                    this.front = this.rear = -1;
                }
            }
            else {
                console.log('Cannot dequeue. Queue is empty.');
            }
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
    }

    isFull() {
        try {
            if(this.array.length === this.size) {
                console.log('Queue is full.');
            }
            else {
                console.log('Queue is not full');
            }
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
    }

    isEmpty() {
        try {
            if(this.front === -1 && this.rear === -1) {
                console.log('Queue is empty.');
            }
            else {
                console.log('Queue is not empty');
            }
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
    }

    peek() {
        try {
            console.log(`Front of queue: ${this.front}\nRear of queue: ${this.rear}`);
        }
        catch(error) {
            console.error(`Error: ${error}`);
        }
    }
}

export default Queue;