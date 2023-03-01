
class Node {
    constructor(element, next) {
        this.element = element;
        this.next = next;
    }
}


function defaultEquals(a, b) {
    return a === b;
}

class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.equalsFn = equalsFn;
        this.count = 0;
        this.head = undefined;
    }

    push(item) {
        const node = new Node(item)
        console.log(node);
        let current;
        console.log(this.head == null)
        if (this.head == null) {
            this.head = node
        } else {
            current = this.head
            while (current.next != null) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }

    gegetElementAt(index) {
        if (index >= 0 && index < this.count) {
            let node = this.head
            for (let i = 0; i < index && node != null; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element);
            if (index === 0) {
                const current = this.head
                node.next = current
                this.head = node
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head
            if (index === 0) {
                this.head = current.next
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next
                previous.next = current.next;
            }
            this.count--
            return current.element;
        }
        return undefined;
    }

    indexOf() {
        let current = this.head
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1
    }
    isEmpty() {
        return this.count === 0;
    }
    size() {
        return this.count;
    }
    getHead() {
        return this.head;
    }
    clear() {
        this.head = undefined;
        this.count = 0;
    }
    toString() {
        if (this.head == null) {
            return '';
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for (let i = 1; i < this.count && current != null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next;
        }
        return objString;
    }
}

let linkList = new LinkedList()
linkList.push(3)
linkList.push(4)
linkList.push(5)
// console.log(linkList)
console.log(linkList.toString())