
//! singly linked list

//? შეტრიალება
//? ჩამატება თავში და ბოლოში
//? შეცვლა კონკრეტული ნოუდის
//? შუაში ჩამატება/წაშლა



class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;
    }

    //* O(1)
    pushBack(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }



    //* O(1)
    pushFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
        this.size++;
    }

    //* O(n)
    popBack() {

        if(!this.head) {
            return;
        }
        if(this.head == this.tail ) {
            this.head = null;
            this.tail = null;
        }
        let current = this.head;

        while (current.next != this.tail) {
            current = current.next;
            
        }
        current.next = null;
        this.tail = current;

        this.size--;
    }

    //  head   X  Y  tail

    //* O(1)
    popFront() {
        if(!this.head) {
            return;
        }
        this.head = this.head.next;
        if(!this.size) {
            this.tail = null;
        }
        this.size--;
    }
reverse() {
    let prev = null;
    let current = this.head;
    this.tail = this.head;

    while (current) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    this.head = prev;
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

    const newNode = new Node(value);
    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
        current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
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

    for (let i = 0; i < index - 1; i++) {
        current = current.next;
    }

    current.next = current.next.next;
    this.size--;
}
};