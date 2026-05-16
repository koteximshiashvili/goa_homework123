class MyCircularQueue {
    constructor(k) {
        this.size = k;
        this.queue = new Array(k);
        this.head = 0;
        this.tail = -1;
        this.count = 0;
    }

    enQueue(value) {
        this.tail = (this.tail + 1) % this.size;
        this.queue[this.tail] = value;
        this.count++;
    }

    deQueue() {
        this.head = (this.head + 1) % this.size;
        this.count--;
    }

    Front() {
        return this.isEmpty() ? -1 : this.queue[this.head];
    }

    Rear() {
        return this.isEmpty() ? -1 : this.queue[this.tail];
    }

    isEmpty() {
        return this.count === 0;
    }

    isFull() {
        return this.count === this.size;
    }
}

class MyDeque {
    constructor() {
        this.items = [];
    }

    insertFront(value) {
        this.items.unshift(value);
    }

    insertLast(value) {
        this.items.push(value);
    }

    deleteFront() {
        this.items.shift();
        return true;
    }

    deleteLast() {
        this.items.pop();
        return true;
    }

    getFront() {
        return this.isEmpty() ? -1 : this.items[0];
    }

    getRear() {
        return this.isEmpty() ? -1 : this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}
