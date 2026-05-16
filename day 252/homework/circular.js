class CircularNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new CircularNode(value);

    if (!this.head) {
      this.head = node;
      node.next = node;
      return;
    }

    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }

    current.next = node;
    node.next = this.head;
  }

  remove(value) {
    if (!this.head) return;

    if (this.head.value === value && this.head.next === this.head) {
      this.head = null;
      return;
    }

    let current = this.head;
    let prev = null;

    while (current.next !== this.head) {
      if (current.value === value) {
        if (prev) {
          prev.next = current.next;
        } else {
          let tail = this.head;
          while (tail.next !== this.head) {
            tail = tail.next;
          }
          this.head = current.next;
          tail.next = this.head;
        }
        return;
      }

      prev = current;
      current = current.next;
    }

    if (current.value === value) {
      prev.next = this.head;
    }
  }
}
