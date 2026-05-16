class DNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = null;
        this.size = 0;

        if (head) {
            let current = head;
            this.size = 1;
            while (current.next) {
                current.next.prev = current;
                current = current.next;
                this.size++;
            }
            this.tail = current;
        }
    }

    pushBack(value) {
        const newNode = new DNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    pushFront(value) {
        const newNode = new DNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    popFront() {
        if (!this.head) return;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
    }

    popBack() {
        if (!this.tail) return;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
    }

    insertAt(index, value) {
        if (index < 0 || index > this.size) return;

        if (index === 0) {
            this.pushFront(value);
            return;
        }

        if (index === this.size) {
            this.pushBack(value);
            return;
        }

        const newNode = new DNode(value);
        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        newNode.prev = current.prev;
        newNode.next = current;
        current.prev.next = newNode;
        current.prev = newNode;

        this.size++;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size) return;

        if (index === 0) {
            this.popFront();
            return;
        }

        if (index === this.size - 1) {
            this.popBack();
            return;
        }

        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;

        this.size--;
    }

    replace(oldValue, newValue) {
        let current = this.head;

        while (current) {
            if (current.value === oldValue) {
                current.value = newValue;
                return true;
            }
            current = current.next;
        }
        return false;
    }
}
