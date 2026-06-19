class MaxHeap {

    constructor() {
        this.heap = [];
    };

    heapify(i) {
        let arr = this.heap;

        while (true) {
            let largest = i;
            let left = this.left(i);
            let right = this.right(i);

            if (arr[left] > arr[largest]) {
                largest = left;
            }

            if (arr[right] > arr[largest]) {
                largest = right;
            }

            if (largest === i) break;

            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            i = largest;
        }
    };

    insert(value) {
        this.heap.push(value);

        let i = this.heap.length - 1;
        let arr = this.heap;

        while (i > 0) {
            let parent = this.parent(i);

            if (arr[parent] >= arr[i]) {
                break;
            };

            [arr[parent], arr[i]] = [arr[i], arr[parent]];
            i = parent;
        };
    };

    delete() {
        if (this.heap.length === 0) return null;

        return this.heap.pop();
    }

    peek() {
        return this.heap[0];
    };

    size() {
        return this.heap.length;
    };

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    left(i) {
        return 2 * i + 1;
    }

    right(i) {
        return 2 * i + 2;
    }
    heapSort() {
        let copy = [...this.heap];
        let result = [];

        while (this.heap.length > 0) {
            [this.heap[0], this.heap[this.heap.length - 1]] =
                [this.heap[this.heap.length - 1], this.heap[0]];

            result.push(this.heap.pop());
            this.heapify(0);
        }

        this.heap = copy;

        return result.reverse();
    }
}