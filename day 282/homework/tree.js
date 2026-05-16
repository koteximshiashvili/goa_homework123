class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value === current.value) {
                return;
            }
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    delete(value) {
        this.root = this.deleteUsingRecurse(this.root, value);
    }

    deleteUsingRecurse(root, value) {
        if (!root) return null;

        if (value < root.value) {
            root.left = this.deleteUsingRecurse(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteUsingRecurse(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }

            let minValue = this.findMin(root.right);
            root.value = minValue;
            root.right = this.deleteUsingRecurse(root.right, minValue);
        }
        return root;
    }

    findMin(node) {
        while (node.left) {
            node = node.left;
        }
        return node.value;
    }
    getDepth(value) {
        let current = this.root;
        let depth = 0;

        while (current) {
            if (value === current.value) {
                return depth;
            }

            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }

            depth++;
        }

        return "doesnt exist ddd";
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value)
        if(!this.root){
            this.root = newNode;
            return;
        }
        while (true){
            if (value < this.root.value) {
                if(!this.root.left) {
                    this.root.left = newNode;
                    break;
                }
                this.root = this.root.left;
            }
            else {
                if(!this.root.right) {
                    this.root.right = newNode;
                    break;
                }
                this.root = this.root.right

            }
        }

    }
    inOrder(node, res=[]) {
        if (node !== null) {
            this.inOrder(node.left, res);
            res.push(node.value);
            this.inOrder(node.right, res);
        }
        return res;
    }
    preorder(node, res=[]) {
        if (node !== null) {
            res.push(node.value);
            this.preorder(node.left, res);
            this.preorder(node.right, res);
        }
        return res;
    }

    postorder(node, res=[]) {
        if (node !== null) {
            this.postorder(node.left, res);
            this.postorder(node.right, res);
            res.push(node.value);
        }
        return res;
    }
}