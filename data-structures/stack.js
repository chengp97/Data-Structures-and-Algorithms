class Stack {
    constructor() {
        this.count = 0;
        this.items = [];
    }
    push(item) {
        this.items.push(item);
        this.count++;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.items.pop();
        this.count--;
    }

    peek() {
        return this.items[this.count - 1];
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    clear() {
        this.items = [];
        this.count = 0;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
console.log("isEmpty", stack.isEmpty());
console.log("size", stack.size());
console.log("peek", stack.peek());
console.log(stack);
